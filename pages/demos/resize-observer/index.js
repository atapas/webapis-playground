// state management
import { useState, useEffect } from 'react';

// demo information
import { DemoInfo, DemoSEO, NotSupported } from 'components';

// api
import { isSupported, init, resize } from 'web-apis/resize-observer';

// demo info by id
import { getDemoById } from 'utils/data/data-access';

// Component that Renders the Demo UI
const ToRender = () => {
  useEffect(() => {
    init();
  }, []);

  return (
    <div className="tw-flex tw-flex-col tw-items-center tw-justify-center">
      <h3>Drag me to resize the button</h3>
      <div>
        <span>60</span>
        <input type="range" onChange={() => resize(event)} min={60} max={500} />
        <span>500</span>
      </div>
      <span id="range-value-id"></span>
      <br />
      <button id="dumbBtnId">I am a Dumb Button</button> <br />
      <textarea
        id="dumbAreaId"
        value="I am a dumb text area"
        readOnly
      ></textarea>
    </div>
  );
};

const ResizeObserver = () => {
  const [loaded, setLoaded] = useState(false);
  const [demoInfo, setDemoInfo] = useState();

  // Get the demo id
  const id = '_resize_observer_api_';

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

export default ResizeObserver;
