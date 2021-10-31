import React from 'react';

import { FiFileText, FiImage } from 'react-icons/fi';

import { Button, NotSupported } from 'components';

import run, { hasSupport } from '../../apis/filesystem-api';

function FileSystem() {
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
      <div className="tw-space-x-4">
        <Button
          id="js-button--text"
          leftIcon={<FiFileText />}
          onClick={run.text}
        >
          Select a text file
        </Button>
        <Button
          id="js-button--image"
          leftIcon={<FiImage />}
          onClick={run.image}
        >
          Select an image file
        </Button>
      </div>

      <div
        id="js-api--filesystem"
        className="
          tw-hidden
          tw-flex-col
          tw-mt-4
          tw-overflow-hidden
          tw-border
        tw-border-gray-200
          tw-rounded-lg
        "
      >
        <p
          id="js-content--text"
          className="
            tw-p-4
            tw-prose
            tw-text-gray-600
          "
        ></p>

        <div id="js-content--image"></div>

        <span
          id="js-filename"
          className="
            tw-p-4
            tw-border-t
            tw-border-gray-200
            tw-font-semibold
            tw-text-gray-600
          "
        ></span>
      </div>
    </div>
  );
}

export default FileSystem;
