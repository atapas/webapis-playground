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
  const SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.continous = true;
  recognition.interimResults = true;
  recognition.lang = 'en-US';

  const [isListening, setIsListening] = useState(false);

  function handleListen() {
    setIsListening(true);
    if (isListening) {
      recognition.start();
      recognition.onend = () => {
        console.log('...continue listening');
        recognition.start();
      };
    }
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
    setIsListening(false);
    recognition.stop();
    recognition.onend = () => {
      console.log('Stopped listening');
    };
  }

  return (
    <div className="tw-flex tw-flex-col  tw-items-center tw-justify-center">
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <button style={{ margin: '0px 10px' }} onClick={handleListen}>
          {' '}
          Speak{' '}
        </button>
        <button onClick={stopListen}> Stop </button>
      </div>
      <div
        style={{
          border: '1px solid blue',
          margin: '10px',
          padding: '10px',
          width: '50%',
        }}
      >
        <h1
          style={{
            textAlign: 'center',
            fontSize: '24px',
            fontWeight: 'bold',
            borderBottom: '1px solid blue',
          }}
        >
          {' '}
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
