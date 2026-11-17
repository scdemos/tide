import { createTag } from '../../scripts/shared.js';

function toBool(value) {
  return String(value || '').trim().toLowerCase() === 'true';
}

function normalizeText(value = '') {
  return String(value).trim();
}

function parseRows(block) {
  const rows = [...block.querySelectorAll(':scope > div')];
  const config = {
    completeMessage: 'Great job! You completed the quiz.',
    doNotMarkLessonAsCompleted: false,
  };

  let startIndex = 0;
  for (let i = 0; i < rows.length; i += 1) {
    const firstCol = normalizeText(rows[i].children[0]?.textContent);
    const secondCol = normalizeText(rows[i].children[1]?.textContent);
    if (firstCol.toLowerCase() === 'questions') {
      startIndex = i + 1;
      break;
    }
    if (firstCol.toLowerCase() === 'complete message') {
      config.completeMessage = secondCol || config.completeMessage;
    }
    if (firstCol.toLowerCase() === 'do not mark lesson as completed') {
      config.doNotMarkLessonAsCompleted = toBool(secondCol);
    }
  }

  const questions = [];
  let currentQuestion = null;

  rows.slice(startIndex).forEach((row) => {
    const questionCell = normalizeText(row.children[0]?.textContent);
    const optionText = normalizeText(row.children[1]?.textContent);
    const isCorrect = toBool(row.children[2]?.textContent);
    const snippet = normalizeText(row.children[3]?.textContent);

    if (questionCell) {
      currentQuestion = {
        text: questionCell,
        options: [],
      };
      questions.push(currentQuestion);
    }
    if (!currentQuestion || !optionText) return;

    currentQuestion.options.push({
      text: optionText,
      correct: isCorrect,
      snippet,
    });
  });

  return { config, questions };
}

function getSelectedIndexes(questionEl) {
  return [...questionEl.querySelectorAll('input:checked')]
    .map((input) => Number(input.value))
    .filter((value) => Number.isInteger(value));
}

function isCorrectSelection(selected, correctIndexes) {
  if (selected.length !== correctIndexes.length) return false;
  return correctIndexes.every((idx) => selected.includes(idx));
}

function buildFeedback(isCorrect, snippets = []) {
  const label = isCorrect ? 'Correct' : 'Not quite';
  const text = snippets.length ? `${label} — ${snippets.join(' ')}` : label;
  return createTag('p', {
    class: `quiz-feedback ${isCorrect ? 'is-correct' : 'is-incorrect'}`,
  }, text);
}

/**
 * Variant `quiz finder`: one question, answered with a dropdown, that leads to a page.
 * Row "Questions", then a row with the sentence in column 1 (use … where the dropdown goes),
 * then one row per option: option label in column 2, a link in column 4 (the destination).
 */
function decorateFinder(block) {
  const rows = [...block.querySelectorAll(':scope > div')];
  const start = rows.findIndex((r) => normalizeText(r.children[0]?.textContent).toLowerCase() === 'questions');
  const [questionRow, ...optionRows] = rows.slice(start + 1);
  const [before, after = ''] = normalizeText(questionRow?.children[0]?.textContent).split('…');
  const options = optionRows.map((row) => ({
    text: normalizeText(row.children[1]?.textContent),
    link: row.children[3]?.querySelector('a'),
  })).filter((o) => o.text);

  block.textContent = '';
  const list = createTag('ul', { class: 'quiz-finder-list', role: 'listbox', 'aria-label': normalizeText(before) || 'Options' });
  const buttons = options.map((o, i) => {
    const button = createTag('button', { type: 'button', role: 'option', class: 'quiz-finder-item' }, o.text);
    button.addEventListener('click', () => select(i, true));  
    list.append(createTag('li', {}, button));
    return button;
  });
  const up = createTag('button', { type: 'button', class: 'quiz-finder-arrow quiz-finder-up', 'aria-label': 'Previous item' });
  const down = createTag('button', { type: 'button', class: 'quiz-finder-arrow quiz-finder-down', 'aria-label': 'Next item' });
  const cta = createTag('a', { class: 'button quiz-finder-cta' });
  let index = 0;
  const itemHeight = () => buttons[0].parentElement.offsetHeight || 40;
  function select(i, scroll) {
    index = Math.max(0, Math.min(options.length - 1, i));
    buttons.forEach((b, n) => {
      b.setAttribute('aria-selected', String(n === index));
      b.dataset.distance = String(Math.min(3, Math.abs(n - index)));
    });
    const { link } = options[index];
    cta.href = link?.href || '#';
    cta.textContent = link?.textContent.trim() || '';
    cta.hidden = !link;
    if (scroll) list.scrollTo({ top: index * itemHeight(), behavior: 'smooth' });
  }
  list.addEventListener('scroll', () => {
    const at = Math.round(list.scrollTop / itemHeight());
    if (at !== index) select(at, false);
  }, { passive: true });
  up.addEventListener('click', () => select(index - 1, true));
  down.addEventListener('click', () => select(index + 1, true));
  select(0, false);
  const picker = createTag('div', { class: 'quiz-finder-picker' }, [up, list, down]);
  block.append(createTag('div', { class: 'quiz-finder-form' }, [
    createTag('span', { class: 'quiz-finder-before' }, before.trim()),
    picker,
    createTag('span', { class: 'quiz-finder-after' }, after.trim()),
    cta,
  ]));
}

/**
 * Loads and decorates the quiz block.
 * @param {Element} block The block element
 */
export default function decorate(block) {
  if (block.classList.contains('finder')) {
    decorateFinder(block);
    return;
  }
  const { config, questions } = parseRows(block);
  if (!questions.length) {
    block.textContent = '';
    block.append(createTag('p', { class: 'quiz-empty' }, 'No quiz questions found.'));
    return;
  }

  block.textContent = '';
  block.classList.add('quiz');

  const status = createTag('div', { class: 'quiz-status', role: 'status', 'aria-live': 'polite' });
  const completeBanner = createTag('div', { class: 'quiz-complete-banner', hidden: true });
  const form = createTag('form', { class: 'quiz-form' });
  const submit = createTag('button', { type: 'submit', class: 'quiz-submit' }, 'Check answers');
  const isSlider = questions.length > 1;
  const sliderTrack = createTag('div', { class: isSlider ? 'quiz-slider-track' : 'quiz-questions-list' });
  const sliderViewport = isSlider ? createTag('div', { class: 'quiz-slider' }, sliderTrack) : null;

  questions.forEach((question, qIndex) => {
    const correctIndexes = question.options
      .map((option, index) => (option.correct ? index : null))
      .filter((idx) => idx !== null);
    const multiCorrect = correctIndexes.length > 1;
    const fieldset = createTag('fieldset', { class: 'quiz-question', 'data-question-index': String(qIndex) });
    const legend = createTag('legend', { class: 'quiz-question-title' }, question.text);
    fieldset.append(legend);
    if (multiCorrect) {
      fieldset.append(createTag('p', { class: 'quiz-instruction' }, 'Select all that apply.'));
    }

    const options = createTag('div', { class: 'quiz-options' });
    question.options.forEach((option, oIndex) => {
      const inputId = `quiz-${qIndex}-${oIndex}`;
      const input = createTag('input', {
        id: inputId,
        type: multiCorrect ? 'checkbox' : 'radio',
        name: `question-${qIndex}`,
        value: String(oIndex),
      });
      const label = createTag('label', { class: 'quiz-option', for: inputId }, [
        input,
        createTag('span', { class: 'quiz-option-label' }, option.text),
      ]);
      options.append(label);
    });

    const feedbackSlot = createTag('div', { class: 'quiz-feedback-slot' });
    fieldset.append(options, feedbackSlot);
    fieldset.dataset.correctIndexes = JSON.stringify(correctIndexes);
    sliderTrack.append(fieldset);
  });

  let currentIndex = 0;
  const navPrev = isSlider ? createTag('button', {
    type: 'button',
    class: 'quiz-nav-btn quiz-nav-prev',
    'aria-label': 'Previous question',
  }, '← Back') : null;
  const navNext = isSlider ? createTag('button', {
    type: 'button',
    class: 'quiz-nav-btn quiz-nav-next',
    'aria-label': 'Next question',
  }, 'Next →') : null;
  const dots = isSlider ? questions.map((_, i) => createTag('li', {
    class: `quiz-nav-dot${i === 0 ? ' is-active' : ''}`,
    'aria-hidden': 'true',
  })) : [];
  const navDots = isSlider ? createTag('ol', { class: 'quiz-nav-dots' }, dots) : null;

  function currentQuestionAnswered() {
    const currentQuestion = sliderTrack.querySelectorAll('.quiz-question')[currentIndex];
    return currentQuestion ? getSelectedIndexes(currentQuestion).length > 0 : false;
  }

  function renderSlider() {
    if (!isSlider) return;
    sliderTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
    dots.forEach((dot, i) => dot.classList.toggle('is-active', i === currentIndex));
    navPrev.disabled = currentIndex === 0;
    navPrev.classList.toggle('is-hidden', currentIndex === 0);
    navNext.classList.toggle('is-hidden', currentIndex === questions.length - 1);
    navNext.disabled = !currentQuestionAnswered();
    submit.hidden = currentIndex !== questions.length - 1;
  }

  if (isSlider) {
    const nav = createTag('div', { class: 'quiz-nav' }, [navPrev, navDots, navNext]);
    const sliderShell = createTag('div', { class: 'quiz-slider-shell' }, [sliderViewport, nav, completeBanner]);
    form.append(sliderShell);
  } else {
    form.append(sliderTrack);
  }
  form.append(submit);
  block.append(status, form);

  navPrev?.addEventListener('click', () => {
    currentIndex = Math.max(0, currentIndex - 1);
    renderSlider();
  });

  navNext?.addEventListener('click', () => {
    currentIndex = Math.min(questions.length - 1, currentIndex + 1);
    renderSlider();
  });

  sliderTrack.addEventListener('change', () => {
    navNext.disabled = !currentQuestionAnswered();
  });

  renderSlider();

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    let score = 0;
    let allAnswered = true;
    const questionEls = [...form.querySelectorAll('.quiz-question')];

    questionEls.forEach((questionEl) => {
      const selected = getSelectedIndexes(questionEl);
      const correctIndexes = JSON.parse(questionEl.dataset.correctIndexes || '[]');
      const feedbackSlot = questionEl.querySelector('.quiz-feedback-slot');
      const optionEls = [...questionEl.querySelectorAll('.quiz-option')];
      feedbackSlot.textContent = '';
      optionEls.forEach((el) => el.classList.remove('is-selected', 'is-correct', 'is-wrong'));

      if (!selected.length) {
        allAnswered = false;
        feedbackSlot.append(buildFeedback(false, ['Please select an answer before submitting.']));
        return;
      }

      const correct = isCorrectSelection(selected, correctIndexes);
      if (correct) score += 1;

      const snippets = [];
      selected.forEach((selectedIndex) => {
        const label = optionEls[selectedIndex];
        const isCorrectOption = correctIndexes.includes(selectedIndex);
        label?.classList.add('is-selected', isCorrectOption ? 'is-correct' : 'is-wrong');
        const snippet = questions[Number(questionEl.dataset.questionIndex)].options[selectedIndex]?.snippet;
        if (snippet) snippets.push(snippet);
      });
      if (!snippets.length && !correct) {
        const firstCorrect = correctIndexes[0];
        const fallback = questions[Number(questionEl.dataset.questionIndex)].options[firstCorrect]?.snippet;
        if (fallback) snippets.push(fallback);
      }
      feedbackSlot.append(buildFeedback(correct, snippets));
    });

    if (!allAnswered) {
      if (isSlider) {
        const firstUnanswered = questionEls.findIndex((questionEl) => !getSelectedIndexes(questionEl).length);
        if (firstUnanswered >= 0) {
          currentIndex = firstUnanswered;
          renderSlider();
        }
      }
      status.textContent = 'Please answer all questions and try again.';
      return;
    }

    const total = questions.length;
    if (score === total) {
      completeBanner.textContent = config.completeMessage;
      completeBanner.className = 'quiz-complete-banner is-success';
      completeBanner.hidden = false;
      status.textContent = `${config.completeMessage} (${score}/${total})`;
      if (!config.doNotMarkLessonAsCompleted) {
        window.dispatchEvent(new CustomEvent('quiz:completed', { detail: { score, total } }));
      }
    } else {
      completeBanner.textContent = `You scored ${score} of ${total} — review each question and try again.`;
      completeBanner.className = 'quiz-complete-banner is-retry';
      completeBanner.hidden = false;
      status.textContent = `You got ${score}/${total}.`;
    }
  });
}
