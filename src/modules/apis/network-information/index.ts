export const hasSupport = (): boolean =>
  Boolean('connection' in window.navigator);

function run() {
  let conn = window.navigator.connection;

  if (hasSupport()) {
    return conn;
  }

  return conn;
}

export default run;
