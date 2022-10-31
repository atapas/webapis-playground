/* eslint-disable no-undef */
export const hasSupport = (): boolean => {
  if ('BarcodeDetector' in window) return true;
  return false;
};

function getVideo() {
  (async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: {
          ideal: 'environment',
        },
      },
      audio: false,
    });
    const videoEl: HTMLVideoElement | null = document.querySelector('#stream');
    if (videoEl) {
      videoEl.srcObject = stream;
      await videoEl.play();
    }

    // @ts-ignore not supported in window
    const barcodeDetector = new BarcodeDetector({
      formats: [
        'aztec',
        'code_128',
        'code_39',
        'code_93',
        'codabar',
        'data_matrix',
        'ean_13',
        'ean_8',
        'itf',
        'pdf417',
        'qr_code',
        'upc_a',
        'upc_e',
      ],
    });
    window.setInterval(async () => {
      const barcodes = await barcodeDetector.detect(videoEl);
      if (barcodes.length <= 0) return;
      window.alert(
        barcodes.map((barcode: { rawValue: any }) => barcode.rawValue)
      );
    }, 1000);
  })();
}

const run = () => {
  getVideo();
};

export default run;
