// state management
import { useState, useEffect } from 'react';

// demo information
import { DemoInfo, DemoSEO, NotSupported } from 'components';

// api
import { isSupported, sendMessage } from 'web-apis/broadcast-channel';

// demo info by id
import { getDemoById } from 'utils/data/data-access';

// Component that Renders the Demo UI
const ToRender = () => {
  return (
    <div className="tw-flex tw-flex-col tw-items-center tw-justify-center">
      <p className="tw-max-w-500px tw-mx-4 tw-p-5px">
        Open this page in a new tab. Then hit the <b>Send Message</b> button
        from one tab to recieve the message in another tab. Try it out, gonna be
        fun!
      </p>
      <div className="tw-flex">
        <div className="tw-p-10px tw-m-13px tw-border-1 tw-border-solid tw-rounded-5px tw-border-black">
          <h4>Sender</h4>
          <button onClick={sendMessage}>Send Message</button>
        </div>
        <i color="black" data-feather="arrow-right"></i>
        <div className="tw-p-10px tw-m-13px tw-border-1 tw-border-solid tw-rounded-5px tw-border-black">
          <h4>Reciever</h4>
          <span id="msg"></span>
        </div>
      </div>
    </div>
  );
};

const BroadcastChannel = () => {
  const [loaded, setLoaded] = useState(false);
  const [demoInfo, setDemoInfo] = useState();

  // Get the demo id
  const id = '_broadcast_api_';

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

export default BroadcastChannel;
