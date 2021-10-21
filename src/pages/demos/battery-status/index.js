import { useState, useEffect } from 'react';

// icons
import { FiBattery, FiBatteryCharging } from 'react-icons/fi';

// demo information
import { DemoInfo, DemoSEO, NotSupported } from 'components';

// apis
import { isSupported, getBatteryStatus } from 'web-apis/battery-status';

// demo info by id
import { getDemoById } from 'utils/data/data-access';

// Component that Renders the Demo UI
const ToRender = () => {
  return (
    <div className="tw-flex tw-flex-col tw-items-center tw-justify-center">
      <button onClick={getBatteryStatus}>Get Battery Status</button>
      <div id="battery-charging-status-id" style={{ display: 'none' }}>
        <FiBatteryCharging size={100} />
      </div>

      <div id="battery-status-id" style={{ display: 'none' }}>
        <FiBattery size={100} />
      </div>

      <ul className="tw-text-30px">
        <li className="tw-p-5px">
          <span>Battery Charging?</span>{' '}
          <span id="battery-status-charging"></span>
        </li>
        <li className="tw-p-5px">
          <span>Battery Charge level:</span>{' '}
          <span id="battery-status-level"></span>
        </li>
      </ul>
    </div>
  );
};

const BatteryStatus = () => {
  const [loaded, setLoaded] = useState(false);
  const [demoInfo, setDemoInfo] = useState();

  // Get the demo id
  const id = '_battery_api_';

  useEffect(() => {
    // find the demo details
    const thisDemo = getDemoById(id);
    setDemoInfo(thisDemo);
    setLoaded(true);
  }, [id]);

  return (
    <>
      {loaded && (
        <div className="tw-flex tw-flex-col tw-items-center tw-justify-center">
          <DemoSEO title={demoInfo.title} description={demoInfo.desc} />
          <DemoInfo info={demoInfo} />
          {isSupported() ? (
            <ToRender />
          ) : (
            <NotSupported canIUseURL={demoInfo.canIUseURL} />
          )}
        </div>
      )}
    </>
  );
};

export default BatteryStatus;
