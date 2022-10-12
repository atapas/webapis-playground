export const hasSupport = (): boolean =>
  Boolean('localStorage' in window) && Boolean('sessionStorage' in window);

function run() {
  let localStorage = window.localStorage;
  let sessionStorage = window.sessionStorage;

  if (hasSupport()) {
    return { localStorage, sessionStorage };
  }

  return { localStorage: null, sessionStorage: null };
}

export default run;
