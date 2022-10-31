export const hasSupport = (): boolean => Boolean('performance' in window);

function run() {
  if (window.performance) {
    const pageLoadTime = new Date(
      window.performance.getEntriesByType('navigation')[0].duration
    ).getSeconds();

    const load = document.getElementById('load_time');
    if (load) {
      load.innerText = ` ${pageLoadTime}s`;
    }
  }
}

export default run;
