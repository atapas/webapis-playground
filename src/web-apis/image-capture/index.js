const isSupported = () => {
  // Write supported or not condition here. Eg,
  return navigator.mediaDevices.getUserMedia ? true : false;
};

let track;
let enableCapture = false;

const getUserMedia = async () => {
  setError(false);
  console.log('Getting User Media');
  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then(mediaStream => {
      document.querySelector('video').srcObject = mediaStream;
      track = mediaStream.getVideoTracks()[0];
      enableCapture = true;
    })
    .catch(error => {
      console.error(` ${error} is not yet supported`);
    });
};

const videoOff = () => {
  setError(false);
  track && track.stop();
  enableCapture = false;
};

const grabFrame = () => {
  if (enableCapture) {
    console.log('Grabbling Frame');
    const imageCapture = new ImageCapture(track);
    imageCapture
      .grabFrame()
      .then(imageBitmap => {
        const canvas = document.querySelector('#grabFrameCanvas');
        drawCanvas(canvas, imageBitmap);
      })
      .catch(error => {
        console.log(error);
        setError(true, 'Error in grabbing the frame');
      });
  } else {
    setError(true, 'Please start the stream before grabbing a frame.');
  }
};

const takePhoto = () => {
  if (enableCapture) {
    console.log('Taking Photo');
    const imageCapture = new ImageCapture(track);
    imageCapture
      .takePhoto()
      .then(blob => createImageBitmap(blob))
      .then(imageBitmap => {
        const canvas = document.querySelector('#takePhotoCanvas');
        drawCanvas(canvas, imageBitmap);
      })
      .catch(error => {
        console.log(error);
        setError(true, 'Error in taking photo.');
      });
  } else {
    setError(true, 'Please start the stream before taking a photo.');
  }
};

const setError = (show, msg) => {
  const errorElem = document.getElementById('error-msg-id');
  if (show) {
    errorElem.innerHTML = msg;
    errorElem.style.display = 'block';
  } else {
    errorElem.innerHTML = '';
    errorElem.style.display = 'none';
  }
};

const drawCanvas = (canvas, img) => {
  canvas.width = getComputedStyle(canvas).width.split('px')[0];
  canvas.height = getComputedStyle(canvas).height.split('px')[0];
  let ratio = Math.min(canvas.width / img.width, canvas.height / img.height);
  let x = (canvas.width - img.width * ratio) / 2;
  let y = (canvas.height - img.height * ratio) / 2;
  canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
  canvas
    .getContext('2d')
    .drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      x,
      y,
      img.width * ratio,
      img.height * ratio
    );
};

export { isSupported, getUserMedia, videoOff, grabFrame, takePhoto };
