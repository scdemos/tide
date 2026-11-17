const AUTH_ORIGIN = 'https://demo.bbird.live';
const AUTH_PATHS = {
  login: '/auth/login',
  logout: '/auth/logout',
  session: '/auth/session',
};

const AUTH_LABELS = {
  login: 'Login',
  logout: 'Logout',
};

function authUrl(path) {
  return new URL(path, AUTH_ORIGIN).toString();
}

export function getDefaultAuthLabel(type) {
  return AUTH_LABELS[type] || '';
}

export function getLoginUrl(returnTo = window.location.href) {
  const target = new URL(AUTH_PATHS.login, AUTH_ORIGIN);
  target.searchParams.set('returnTo', returnTo);
  return target.toString();
}

export function getLogoutUrl() {
  return authUrl(AUTH_PATHS.logout);
}

/** Shape aligned with `workers/auth` `/auth/session` JSON (anonymous when not logged in). */
const ANONYMOUS_SESSION = {
  authenticated: false,
  email: '',
  hasJwtAssertion: false,
};


/**
 * Loads `/auth/session` JSON (anonymous on non-OK or failure).
 * `redirect: 'manual'` — Cloudflare Access replies with 302 to *.cloudflareaccess.com;
 */
const HINT_KEY = 'demo-auth-hint';

/** Remember that this browser started a login, so anonymous visits make no cross-site session call. */
export function setAuthHint(on) {
  try {
    if (on) localStorage.setItem(HINT_KEY, '1');
    else localStorage.removeItem(HINT_KEY);
  } catch { /* storage unavailable */ }
}

function hasAuthHint() {
  try {
    return !!localStorage.getItem(HINT_KEY);
  } catch {
    return false;
  }
}

export async function getSessionState() {
  if (!hasAuthHint()) return { ...ANONYMOUS_SESSION, path: AUTH_PATHS.session };
  try {
    const response = await fetch(authUrl(AUTH_PATHS.session), {
      method: 'GET',
      credentials: 'include',
      redirect: 'manual',
      headers: { Accept: 'application/json' },
    });
    if (!response.ok) {
      return { ...ANONYMOUS_SESSION, path: AUTH_PATHS.session };
    }
    return await response.json();
  } catch {
    return { ...ANONYMOUS_SESSION, path: AUTH_PATHS.session };
  }
}
