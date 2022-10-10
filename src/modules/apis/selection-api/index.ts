export const hasSupport = (): boolean => {
  return 'getSelection' in document || 'getSelection' in window;
};

function run() {}

export default run;
