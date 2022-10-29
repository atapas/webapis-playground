export const hasSupport = (): boolean => Boolean(window.DeviceOrientationEvent);

function run() {
  if (window.DeviceOrientationEvent) {
    const element = document.getElementById('orientation');
    window.addEventListener(
      'deviceorientation',
      event => {
        const rotateDegrees = event.alpha; // alpha: rotation around z-axis
        const leftToRight = event.gamma; // gamma: left to right
        const frontToBack = event.beta; // beta: front back motion
        if (element) {
          element.innerText = `Alpha: ${
            rotateDegrees ?? 'NOT SUPPORTED'
          }\n Beta: ${frontToBack ?? 'NOT SUPPORTED'}\n Gamma: ${
            leftToRight ?? 'NOT SUPPORTED'
          }`;
        }
      },
      false
    );
  } else {
    alert('Device Orientation Event not supported');
  }
}

export default run;
