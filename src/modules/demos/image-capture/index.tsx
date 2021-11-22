import React from 'react';

import {
  FaPlayCircle,
  FaStopCircle,
  FaHandHolding,
  FaPhotoVideo,
} from 'react-icons/fa';

import { Button, NotSupported } from 'components';

import run, { hasSupport } from '../../apis/image-capture';

function ImageCapture() {
  if (!hasSupport()) {
    return <NotSupported />;
  }

  return (
    <div
      className="
        tw-flex
        tw-flex-col
        tw-items-start
      "
    >
      <div className="tw-grid tw-grid-cols-2 tw-gap-2 md:tw-space-x-4 md:tw-flex md:tw-gap-0">
        <Button leftIcon={<FaPlayCircle />} onClick={run.onGetUserMedia}>
          Start the stream
        </Button>
        <Button leftIcon={<FaStopCircle />} onClick={run.onStop}>
          Stop
        </Button>
        <Button leftIcon={<FaHandHolding />} onClick={run.onGrabFrame}>
          Grab frame
        </Button>
        <Button leftIcon={<FaPhotoVideo />} onClick={run.onTakePhoto}>
          Take a photo
        </Button>
      </div>

      <div
        className="
          tw-flex
          tw-flex-col
          tw-w-full
          tw-mt-6
          tw-overflow-hidden
          tw-border
          tw-border-gray-200
          tw-rounded-lg
        "
      >
        <div
          className="
            tw-aspect-w-16
            tw-aspect-h-9
          "
        >
          <video id="js-resize--content" className="tw-w-full" autoPlay />
        </div>
        <span
          id="js-image--error"
          className="
            tw-p-4
            tw-border-t
            tw-border-gray-200
            tw-font-semibold
            tw-text-gray-600
          "
        >
          Frame
        </span>
      </div>
      <div className="tw-mt-4">
        <canvas id="js-image--frame" className="tw-inline-block"></canvas>
        <canvas id="js-image--photo" className="tw-inline-block"></canvas>
      </div>
    </div>
  );
}

export default ImageCapture;
