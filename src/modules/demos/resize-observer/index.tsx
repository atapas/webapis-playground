import React from 'react';

import { NotSupported } from 'components';

import run, { hasSupport } from '../../apis/resize-observer';

function Resize() {
  React.useEffect(() => {
    run.init();
  }, []);

  if (!hasSupport()) {
    return <NotSupported />;
  }

  return (
    <div
      className="
        tw-flex
        tw-flex-col
      "
    >
      <span
        className="
          tw-text-base
          tw-italic
          tw-mb-2
        "
      >
        Drag me to resize the image
      </span>
      <input
        type="range"
        min="0"
        max="100"
        onChange={event => run.resize(event)}
      />

      <div
        className="
          tw-flex
          tw-flex-col
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
          <iframe
            id="js-resize--content"
            src="https://giphy.com/embed/5ZjcaQbIzDXsk"
            frameBorder="0"
            className="tw-pointer-events-none tw-m-auto tw-w-[50%]"
          />
        </div>

        <span
          id="js-resize--value"
          className="
            tw-p-4
            tw-border-t
            tw-border-gray-200
            tw-font-semibold
            tw-text-gray-600
          "
        >
          50%
        </span>
      </div>
    </div>
  );
}

export default Resize;
