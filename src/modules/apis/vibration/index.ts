export const hasSupport = (): boolean => Boolean('vibrate' in navigator);

function run(type: 'start' | 'stop') {
  if (hasSupport()) {
    type === 'start' ? navigator.vibrate(2000) : navigator.vibrate(0);
  } else {
    console.warn('The Vibration API is not supported');
  }
}

export default run;
