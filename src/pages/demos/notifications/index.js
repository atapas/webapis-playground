import { useState, useEffect } from 'react';

// demo and form components
import {
  DemoInfo,
  DemoSEO,
  NotSupported,
  InputFieldWrapper,
  InputFieldButton,
  InputField,
} from 'components';

// apis
import { isSupported, run } from 'web-apis/notifications';

// demo info by id
import { getDemoById } from 'utils/data/data-access';

// Component that Renders the Demo UI
const ToRender = () => {
  return (
    <div className="tw-flex tw-flex-col tw-items-center tw-justify-center">
      <InputFieldWrapper>
        <InputField
          id="text-input"
          type="text"
          name="text"
          placeholder="Write Notification Text..."
        />
        <InputFieldButton onClick={run}>Push</InputFieldButton>
      </InputFieldWrapper>
    </div>
  );
};

const Notifications = () => {
  const [loaded, setLoaded] = useState(false);
  const [demoInfo, setDemoInfo] = useState();

  // Get the demo id
  const id = '_notifications_';

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

export default Notifications;
