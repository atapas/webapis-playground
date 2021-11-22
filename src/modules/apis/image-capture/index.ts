export const hasSupport = (): boolean =>
  Boolean('getUserMedia' in navigator.mediaDevices);

let stream: any = null;
let enableCapture = false;

function drawCanvas(canvas: any, img: ImageBitmap) {
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
}

function setMessage(msg: string = '') {
  const el = document.getElementById('js-image--error') as HTMLElement;

  el.innerText = msg;
}

function onGetUserMedia() {
  const video = document.getElementById(
    'js-resize--content'
  ) as HTMLVideoElement;

  setMessage('Started');
  console.log('Getting User Media');
  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then(mediaStream => {
      video.srcObject = mediaStream;
      stream = mediaStream.getVideoTracks()[0];
      enableCapture = true;
    })
    .catch(error => {
      console.error(` ${error} is not yet supported`);
    });
}

function onStop() {
  setMessage('Stopped');
  stream && stream.stop();
  enableCapture = false;
}

function onGrabFrame() {
  if (enableCapture) {
    const canvas = document.getElementById(
      'js-image--frame'
    ) as HTMLCanvasElement;

    const imageCapture = new ImageCapture(stream);

    imageCapture
      .grabFrame()
      .then(imageBitmap => {
        drawCanvas(canvas, imageBitmap);
      })
      .catch(err => {
        console.error(err);
        setMessage('Error in grabbing the frame');
      });
  }
}

function onTakePhoto() {
  if (enableCapture) {
    const canvas = document.getElementById(
      'js-image--photo'
    ) as HTMLCanvasElement;
    const imageCapture = new ImageCapture(stream);

    imageCapture
      .takePhoto()
      .then(blob => createImageBitmap(blob))
      .then(imageBitmap => {
        drawCanvas(canvas, imageBitmap);
      })
      .catch(err => {
        console.error(err);
        setMessage('Error in taking photo.');
      });
  } else {
    setMessage('Please start the stream before taking a photo.');
  }
}

const run = {
  onGetUserMedia,
  onStop,
  onGrabFrame,
  onTakePhoto,
};

export default run;
