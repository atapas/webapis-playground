import Image from 'next/image';
import { useState } from 'react';
import run, { hasSupport } from '../../apis/pointer-capture';

function PointerCapture() {
  const [isCapture, setIsCapture] = useState<boolean>(false);

  if (!hasSupport()) {
    return (
      <div className="tw-flex tw-flex-col tw-items-center">
        <Image
          src="/assets/images/Exclamation-Mark.png"
          alt=""
          width={100}
          height={260}
        />
        <span className="tw-text-lg tw-font-bold tw-mt-4">OOPS!!!</span>
        <span className="tw-text-base tw-italic">
          It seems your browser does not support this feature.
        </span>
      </div>
    );
  }
  return (
    <>
      <h2 className="tw-text-base md:tw-text-xl">
        Pointer Capture:{' '}
        <span className="tw-font-bold">{isCapture ? 'On' : 'Off'}</span>
      </h2>
      <button
        className="tw-m-2 tw-p-1 tw-border-black tw-border-2 tw-rounded-md tw-cursor-pointer tw-bg-yellow-300 hover:tw-bg-yellow-400"
        onClick={() => setIsCapture(val => !val)}
      >
        Turn {!isCapture ? 'On' : 'Off'}
      </button>
      <div
        id="video"
        className="tw-w-5/6 tw-h-96 sm:tw-h-72  tw-bg-gray-600 tw-overflow-hidden"
      >
        <div className="tw-p-4 tw-text-gray-300 tw-text-sm md:tw-text-base">
          <p className="tw-text-2xl tw-mb-2">Steps:</p>
          <p>
            1. Turn on {`"`}Pointer Capture{`"`} and start draging the below
            circle.
          </p>
          <p>
            2. Move the cursor towards this text 👉{' '}
            <strong>
              {`"`}HERE{`"`}
            </strong>{' '}
            while dragging the circle. Observe that the slider is still moving
            event when the cursor is moved out of the target focus.
          </p>
          <p>
            3. Try this activity by turning off {`"`}Pointer Capture{`"`}. Now,
            you can see that the slider stops moving once your cursor is out of
            the target focus. This is becuase the pointer is{' '}
            <strong>not</strong> captured.
          </p>
        </div>
        <div
          id="gray-timeline"
          className="tw-h-5 tw-w-full tw-bg-gray-400 tw-mb-5 tw-flex tw-items-center tw-relative tw-cursor-pointer"
          style={{ touchAction: isCapture ? 'none' : 'auto' }}
          onPointerUp={e => run.onPointerUp(e, isCapture)}
          onPointerDown={e => run.onPointerDown(e, isCapture)}
          onPointerMove={run.onPointerMove}
        >
          <div
            id="red-timeline"
            className="tw-relative tw-bg-red-600 tw-h-full tw-rounded-r-full tw-w-7"
          >
            <div
              id="dot"
              className="tw-absolute tw-bg-red-700 tw-h-7 tw-w-7 tw-rounded-full tw--top-1 tw-left-4"
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PointerCapture;
