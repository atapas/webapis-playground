// state management
import { useState, useEffect } from 'react';

// demo information
import { DemoInfo, DemoSEO, NotSupported } from 'components';

// api
import { isSupported } from 'web-apis/web-speech';

// demo info by id
import { getDemoById } from 'utils/data/data-access';

// Component that Renders the Demo UI
const ToRender = () => {
  const recognition = new window.webkitSpeechRecognition();
  recognition.continous = true;
  recognition.interimResults = true;
  recognition.lang = 'en-US';

  function handleListen() {
    recognition.start();
    recognition.onend = () => {
      document.getElementById('loading').innerHTML = '...continue listening';
      recognition.start();
    };

    let finalTranscript = '';
    recognition.onresult = event => {
      let interimTranscript = '';

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) finalTranscript += transcript + ' ';
        else interimTranscript += transcript;
      }
      document.getElementById('interim').innerHTML = interimTranscript;
      document.getElementById('final').innerHTML = finalTranscript;
    };
  }

  function stopListen() {
    recognition.stop();
    recognition.onend = () => {
      document.getElementById('loading').innerHTML = 'Stopped listening';
    };
  }

  return (
    <div className="tw-flex tw-flex-col  tw-items-center tw-justify-center">
      <div className="tw-flex tw-items-center tw-justify-center">
        <button className="tw-mx-4" onClick={handleListen}>
          {' '}
          Speak{' '}
        </button>
        <button onClick={stopListen}> Stop </button>
        <br />
      </div>

      <div id="loading"></div>

      <div className="tw-m-4 tw-p-4 tw-w-1/2 tw-border-solid tw-border tw-border-blue-500">
        <h1 className=" tw-border-b tw-border-blue-500 tw-font-bold tw-text-xl tw-text-center">
          Transcript{' '}
        </h1>
        <div id="interim"></div>
        <div id="final"></div>
      </div>
    </div>
  );
};

const WebSpeech = () => {
  const [loaded, setLoaded] = useState(false);
  const [demoInfo, setDemoInfo] = useState();

  // Get the demo id
  const id = '_web_speech_';

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

export default WebSpeech;
