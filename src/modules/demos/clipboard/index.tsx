import React from 'react';

import { FaExpand } from 'react-icons/fa';

import { Button, Input, NotSupported } from 'components';

import run, { hasSupport } from '../../apis/clipboard';

function Clipboard() {
  if (!hasSupport()) {
    return <NotSupported />;
  }

  return (
    <div
      className="
        tw-flex
        tw-flex-col
        tw-space-y-4
      "
    >
      <div
        className="
          tw-flex
          tw-space-x-2
        "
      >
        <Input
          id="js-input--copy"
          type="text"
          name="copy"
          placeholder="Write Something..."
        />
        <Button onClick={run.onCopy}>Copy</Button>
      </div>

      <div
        className="
          tw-flex
          tw-space-x-2
        "
      >
        <Input
          id="js-input--paste"
          type="text"
          name="paste"
          placeholder="Click paste"
          readOnly
        />
        <Button onClick={run.onPaste}>Paste</Button>
      </div>
    </div>
  );
}

export default Clipboard;
