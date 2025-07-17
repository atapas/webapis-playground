import React from 'react';

import { FaBroadcastTower } from 'react-icons/fa';

import run, { hasSupport } from '../../apis/beacon-api';

import { Button, NotSupported } from 'components';

function BeaconApi() {
  if (!hasSupport()) {
    return <NotSupported />;
  }

  return (
    <div
      className="
        tw-flex
        tw-flex-col
        tw-items-center md:tw-items-start
      "
    >
      <div
        id="js-beacon--status"
        className="tw-text-sm tw-text-gray-600 tw-mb-4"
      >
        Ready to send analytics data
      </div>

      <Button leftIcon={<FaBroadcastTower />} onClick={run}>
        Send Analytics Data
      </Button>
    </div>
  );
}

export default BeaconApi;
