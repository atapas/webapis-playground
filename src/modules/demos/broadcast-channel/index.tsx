import React from 'react';

import { IoMdSend } from 'react-icons/io';

import { Button, NotSupported } from 'components';

import run, { hasSupport } from '../../apis/broadcast-channel';

function Broadcast() {
  if (!hasSupport()) {
    return <NotSupported />;
  }

  return (
    <div className="tw-flex tw-flex-col">
      <span
        className="
          tw-text-base
          tw-italic
          tw-mb-8
        "
      >
        Open this page in a new tab. Then hit the <b>Send Message</b> button
        from one tab to recieve the message in another tab. Try it out, gonna be
        fun!
      </span>

      <div className="tw-flex tw-flex-col">
        <div>
          <Button leftIcon={<IoMdSend />} onClick={run}>
            Send Message
          </Button>
        </div>

        <div
          className="
            tw-flex
            tw-flex-col
            tw-mt-4
            tw-overflow-hidden
            tw-border
          tw-border-gray-200
            tw-rounded-lg
          "
        >
          <span
            className="
              tw-p-4
              tw-border-b
              tw-border-gray-200
              tw-font-semibold
              tw-text-gray-600
            "
          >
            Message received:
          </span>

          <span
            id="js-broadcast--receiver"
            className="
              tw-p-4
              tw-prose
              tw-text-gray-600
            "
          ></span>
        </div>
      </div>
    </div>
  );
}

export default Broadcast;
