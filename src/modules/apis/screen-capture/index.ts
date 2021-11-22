export const hasSupport = (): boolean => Boolean('mediaDevices' in navigator);

async function onCapture() {
  const video = document.getElementById('js-screen--video') as HTMLVideoElement;

  video.srcObject = await navigator.mediaDevices.getDisplayMedia({
    video: {
      aspectRatio: 16 / 9,
    },
    audio: {
      echoCancellation: true,
      sampleRate: 44100,
    },
  });

  const track = video.srcObject.getVideoTracks()[0];

  console.info('Track settings:');
  console.info(JSON.stringify(track.getSettings(), null, 2));

  console.info('Track constraints:');
  console.info(JSON.stringify(track.getConstraints(), null, 2));
}

function onStop() {
  const video = document.getElementById('js-screen--video') as HTMLVideoElement;

  (<MediaStream>video.srcObject).getTracks().forEach(stream => stream.stop());

  video.srcObject = null;
}

const run = {
  onCapture,
  onStop,
};

export default run;
