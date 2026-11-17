# Lighthouse: FAIL ❌ (target 100; Performance, Accessibility, Best Practices; SEO not gated)

Site: https://main--tide--scdemos.aem.live · median of 3 runs per page and form factor

| page | form factor | performance | accessibility | best practices | seo |
|---|---|---|---|---|---|
| / | mobile | 100 | 87 | 100 | 61 |
| / | desktop | 100 | 87 | 100 | 61 |
| /shop | mobile | 100 | 100 | 100 | 61 |
| /shop | desktop | 100 | 100 | 100 | 61 |
| /shop/type/laundry-pods | mobile | 100 | 100 | 100 | 61 |
| /shop/type/laundry-pods | desktop | 100 | 100 | 100 | 61 |
| /our-commitment | mobile | 95 | 100 | 100 | 61 |
| /our-commitment | desktop | 99 | 100 | 100 | 61 |
| /our-commitment/tide-evo | mobile | 100 | 100 | 100 | 69 |
| /our-commitment/tide-evo | desktop | 97 | 100 | 100 | 69 |
| /how-to-wash-clothes | mobile | 98 | 100 | 100 | 61 |
| /how-to-wash-clothes | desktop | 100 | 100 | 100 | 61 |
| /how-to-wash-clothes/how-to-remove-stains | mobile | 99 | 87 | 100 | 61 |
| /how-to-wash-clothes/how-to-remove-stains | desktop | 100 | 87 | 100 | 61 |
| /how-to-wash-clothes/how-to-do-laundry | mobile | 100 | 100 | 100 | 69 |
| /how-to-wash-clothes/how-to-do-laundry | desktop | 89 | 100 | 100 | 69 |
| /latest-news | mobile | 93 | 100 | 100 | 61 |
| /latest-news | desktop | 99 | 100 | 100 | 61 |
| /rewards | mobile | 100 | 100 | 100 | 61 |
| /rewards | desktop | 100 | 100 | 100 | 61 |
| /contact-us | mobile | 100 | 100 | 100 | 61 |
| /contact-us | desktop | 99 | 100 | 100 | 61 |
| /rewards/loyalty/terms-and-conditions | mobile | 100 | 100 | 100 | 69 |
| /rewards/loyalty/terms-and-conditions | desktop | 100 | 100 | 100 | 69 |

## Fix list

### / (mobile)
- [ ] **performance · First Contentful Paint** (1.3 s) `first-contentful-paint`
- [ ] **accessibility · Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children.** `aria-required-children` → `div.quiz > div.quiz-finder-form > div.quiz-finder-picker > ul.quiz-finder-list`
- [ ] **accessibility · `[role]`s are not contained by their required parent element** `aria-required-parent` → `div.quiz-finder-picker > ul.quiz-finder-list > li > button.quiz-finder-item`, `div.quiz-finder-picker > ul.quiz-finder-list > li > button.quiz-finder-item`, `div.quiz-finder-picker > ul.quiz-finder-list > li > button.quiz-finder-item`
- [ ] **accessibility · List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements.** `listitem` → `div.quiz-finder-form > div.quiz-finder-picker > ul.quiz-finder-list > li`, `div.quiz-finder-form > div.quiz-finder-picker > ul.quiz-finder-list > li`, `div.quiz-finder-form > div.quiz-finder-picker > ul.quiz-finder-list > li`

### / (desktop)
- [ ] **performance · Cumulative Layout Shift** (0.041) `cumulative-layout-shift`
- [ ] **accessibility · Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children.** `aria-required-children` → `div.quiz > div.quiz-finder-form > div.quiz-finder-picker > ul.quiz-finder-list`
- [ ] **accessibility · `[role]`s are not contained by their required parent element** `aria-required-parent` → `div.quiz-finder-picker > ul.quiz-finder-list > li > button.quiz-finder-item`, `div.quiz-finder-picker > ul.quiz-finder-list > li > button.quiz-finder-item`, `div.quiz-finder-picker > ul.quiz-finder-list > li > button.quiz-finder-item`
- [ ] **accessibility · List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements.** `listitem` → `div.quiz-finder-form > div.quiz-finder-picker > ul.quiz-finder-list > li`, `div.quiz-finder-form > div.quiz-finder-picker > ul.quiz-finder-list > li`, `div.quiz-finder-form > div.quiz-finder-picker > ul.quiz-finder-list > li`

### /shop (mobile)
- [ ] **performance · First Contentful Paint** (1.2 s) `first-contentful-paint`
- [ ] **performance · Largest Contentful Paint** (1.7 s) `largest-contentful-paint`

### /shop (desktop)
- [ ] **performance · Cumulative Layout Shift** (0.059) `cumulative-layout-shift`

### /shop/type/laundry-pods (mobile)
- [ ] **performance · First Contentful Paint** (1.2 s) `first-contentful-paint`

### /shop/type/laundry-pods (desktop)
- [ ] **performance · Cumulative Layout Shift** (0.059) `cumulative-layout-shift`

### /our-commitment (mobile)
- [ ] **performance · First Contentful Paint** (2.0 s) `first-contentful-paint`
- [ ] **performance · Largest Contentful Paint** (2.1 s) `largest-contentful-paint`
- [ ] **performance · Cumulative Layout Shift** (0.094) `cumulative-layout-shift`
- [ ] **performance · Speed Index** (2.0 s) `speed-index`

### /our-commitment (desktop)
- [ ] **performance · Cumulative Layout Shift** (0.064) `cumulative-layout-shift`

### /our-commitment/tide-evo (mobile)
- [ ] **performance · First Contentful Paint** (1.2 s) `first-contentful-paint`

### /our-commitment/tide-evo (desktop)
- [ ] **performance · Cumulative Layout Shift** (0.115) `cumulative-layout-shift`

### /how-to-wash-clothes (mobile)
- [ ] **performance · First Contentful Paint** (1.3 s) `first-contentful-paint`
- [ ] **performance · Largest Contentful Paint** (1.7 s) `largest-contentful-paint`
- [ ] **performance · Cumulative Layout Shift** (0.079) `cumulative-layout-shift`

### /how-to-wash-clothes (desktop)
- [ ] **performance · Cumulative Layout Shift** (0.06) `cumulative-layout-shift`

### /how-to-wash-clothes/how-to-remove-stains (mobile)
- [ ] **performance · First Contentful Paint** (1.3 s) `first-contentful-paint`
- [ ] **performance · Largest Contentful Paint** (1.8 s) `largest-contentful-paint`
- [ ] **accessibility · Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children.** `aria-required-children` → `div.quiz > div.quiz-finder-form > div.quiz-finder-picker > ul.quiz-finder-list`
- [ ] **accessibility · `[role]`s are not contained by their required parent element** `aria-required-parent` → `div.quiz-finder-picker > ul.quiz-finder-list > li > button.quiz-finder-item`, `div.quiz-finder-picker > ul.quiz-finder-list > li > button.quiz-finder-item`, `div.quiz-finder-picker > ul.quiz-finder-list > li > button.quiz-finder-item`
- [ ] **accessibility · List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements.** `listitem` → `div.quiz-finder-form > div.quiz-finder-picker > ul.quiz-finder-list > li`, `div.quiz-finder-form > div.quiz-finder-picker > ul.quiz-finder-list > li`, `div.quiz-finder-form > div.quiz-finder-picker > ul.quiz-finder-list > li`

### /how-to-wash-clothes/how-to-remove-stains (desktop)
- [ ] **accessibility · Elements with an ARIA `[role]` that require children to contain a specific `[role]` are missing some or all of those required children.** `aria-required-children` → `div.quiz > div.quiz-finder-form > div.quiz-finder-picker > ul.quiz-finder-list`
- [ ] **accessibility · `[role]`s are not contained by their required parent element** `aria-required-parent` → `div.quiz-finder-picker > ul.quiz-finder-list > li > button.quiz-finder-item`, `div.quiz-finder-picker > ul.quiz-finder-list > li > button.quiz-finder-item`, `div.quiz-finder-picker > ul.quiz-finder-list > li > button.quiz-finder-item`
- [ ] **accessibility · List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements.** `listitem` → `div.quiz-finder-form > div.quiz-finder-picker > ul.quiz-finder-list > li`, `div.quiz-finder-form > div.quiz-finder-picker > ul.quiz-finder-list > li`, `div.quiz-finder-form > div.quiz-finder-picker > ul.quiz-finder-list > li`

### /how-to-wash-clothes/how-to-do-laundry (mobile)
- [ ] **performance · First Contentful Paint** (1.3 s) `first-contentful-paint`
- [ ] **performance · Largest Contentful Paint** (1.7 s) `largest-contentful-paint`

### /how-to-wash-clothes/how-to-do-laundry (desktop)
- [ ] **performance · Cumulative Layout Shift** (0.225) `cumulative-layout-shift`

### /latest-news (mobile)
- [ ] **performance · First Contentful Paint** (1.3 s) `first-contentful-paint`
- [ ] **performance · Cumulative Layout Shift** (0.157) `cumulative-layout-shift`

### /latest-news (desktop)
- [ ] **performance · Cumulative Layout Shift** (0.062) `cumulative-layout-shift`

### /rewards (mobile)
- [ ] **performance · First Contentful Paint** (1.2 s) `first-contentful-paint`

### /rewards (desktop)
- [ ] **performance · Cumulative Layout Shift** (0.047) `cumulative-layout-shift`

### /contact-us (mobile)
- [ ] **performance · First Contentful Paint** (1.2 s) `first-contentful-paint`

### /contact-us (desktop)
- [ ] **performance · Cumulative Layout Shift** (0.064) `cumulative-layout-shift`
- [ ] **performance · Speed Index** (0.7 s) `speed-index`

### /rewards/loyalty/terms-and-conditions (mobile)
- [ ] **performance · First Contentful Paint** (1.4 s) `first-contentful-paint`
- [ ] **performance · Cumulative Layout Shift** (0.041) `cumulative-layout-shift`

### /rewards/loyalty/terms-and-conditions (desktop)
- [ ] **performance · Cumulative Layout Shift** (0.042) `cumulative-layout-shift`
