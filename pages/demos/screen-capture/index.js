// state management
import { useState, useEffect } from 'react';

// demo information
import { DemoInfo, DemoSEO, NotSupported } from 'components';

// api
import {
  isSupported,
  startCapture,
  stopCapture,
} from 'web-apis/screen-capture';

// demo info by id
import { getDemoById } from 'utils/data/data-access';

// Component that Renders the Demo UI
const ToRender = () => {
  const onStartCapture = withAudio => {
    startCapture();
  };

  const onStopCapture = () => {
    stopCapture();
  };

  return (
    <div>
      {/* Expected tailwind class =  grid gap-4 grid-cols-3*/}
      <div
        style={{
          display: 'grid',
          gridGap: 4,
          gridTemplateColumns: '1fr 1fr 1fr',
        }}
      >
        <button onClick={() => onStartCapture(false)}>Video Capture</button>
        <button onClick={() => onStartCapture(true)}>Video With Audio</button>
        <button onClick={() => onStopCapture()}>Stop Capture</button>
      </div>
      {/* Inline style added to avoid tailwind issue */}
      <div style={{ border: '1px solid #454545' }}>
        <div className="flex-colums">
          <h4 style={{ height: '20px' }}>Live Preview</h4>
          <div style={{ flex: 1 }}>
            <video id="video" height="300" width="500" autoPlay>
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

const ScreenCapture = () => {
  const [loaded, setLoaded] = useState(false);
  const [demoInfo, setDemoInfo] = useState();

  // Get the demo id
  const id = '_screen_capture_';

  useEffect(() => {
    // find the demo details
    const thisDemo = getDemoById(id);
    setDemoInfo(thisDemo);
    setLoaded(true);
  }, [id]);

  return (
    <>
      {loaded && (
        <div className="flex-colums">
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

export default ScreenCapture;
