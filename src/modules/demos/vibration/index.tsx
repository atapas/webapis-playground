import React from 'react';

import { MdVibration, MdStayPrimaryPortrait } from 'react-icons/md';

import { Button, NotSupported } from 'components';

import run, { hasSupport } from '../../apis/vibration';

function Vibration() {
  const [status, setStatus] = React.useState<'start' | 'stop'>('stop');

  let toggle = () => setStatus(prev => (prev === 'stop' ? 'start' : 'stop'));

  React.useEffect(() => {
    run(status);
  }, [status]);

  let isVibrating = status === 'start';

  if (!hasSupport()) {
    return <NotSupported />;
  }

  return (
    <Button
      leftIcon={isVibrating ? <MdVibration /> : <MdStayPrimaryPortrait />}
      onClick={toggle}
    >
      {`${isVibrating ? 'Stop' : 'Start'} vibration`}
    </Button>
  );
}

export default Vibration;
