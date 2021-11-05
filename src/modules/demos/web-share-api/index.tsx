import React from 'react';

import { FaShareAlt } from 'react-icons/fa';

import { Button, NotSupported } from 'components';

import run, { hasSupport } from '../../apis/web-share-api';

function WebShare() {
  if (!hasSupport()) {
    return <NotSupported />;
  }

  return (
    <Button leftIcon={<FaShareAlt />} onClick={run}>
      Share
    </Button>
  );
}

export default WebShare;
