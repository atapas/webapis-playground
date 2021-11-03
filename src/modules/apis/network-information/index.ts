export const hasSupport = (): boolean =>
  window.navigator.connection ? true : false;

function run() {
  let conn = window.navigator.connection;

  if (hasSupport()) {
    return conn;
  }

  return conn;
}

export default run;
