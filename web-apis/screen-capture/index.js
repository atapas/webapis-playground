const isSupported = () => {
  return navigator.clipboard &&
    navigator.clipboard.writeText &&
    navigator.clipboard.readText
    ? true
    : false;
};

const startCapture = async withAudio => {
  const videoElem = document.getElementById('video');
  console.log('takeScreenCapture function called');

  // const elem = document.getElementById('fs-img-id');
  // Check if the API is supported
  // if (document.fullscreenEnabled) {
  //   elem.requestFullscreen();
  // } else {
  //   console.log('The FullScreen API is Not Supported');
  // }

  const displayMediaOptions = {
    video: {
      cursor: 'always',
    },
    audio: withAudio
      ? {
          echoCancellation: true,
          noiseSuppression: true,
          sampleRate: 44100,
        }
      : false,
  };

  videoElem.srcObject = await navigator.mediaDevices.getDisplayMedia(
    displayMediaOptions
  );
  dumpOptionsInfo(videoElem);
  const s = '';
  // return captureStream;
};

const stopCapture = () => {
  const videoElem = document.getElementById('video');
  let tracks = videoElem.srcObject.getTracks();

  tracks.forEach(track => track.stop());
  videoElem.srcObject = null;
};

function dumpOptionsInfo(videoElem) {
  const videoTrack = videoElem.srcObject.getVideoTracks()[0];

  console.info('Track settings:');
  console.info(JSON.stringify(videoTrack.getSettings(), null, 2));
  console.info('Track constraints:');
  console.info(JSON.stringify(videoTrack.getConstraints(), null, 2));
}

export { isSupported, startCapture, stopCapture, dumpOptionsInfo };
