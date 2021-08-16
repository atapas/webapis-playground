import {useState, useEffect} from 'react';

// router
import { useRouter } from "next/router";

// icons
import { FiFileText, FiImage } from "react-icons/fi";

// demo information
import { DemoInfo, NotSupported } from "components";

// apis
import { isSupported, performCopy, performPaste } from "web-apis/clipboard";

// demo info by id
import { getDemoById } from 'utils/data/data-access';

// Component that Renders the Demo UI
const ToRender = () => {
  return (
    <div className="flex-colums">
      <form>
        <label htmlFor="copy-input">Copy</label>
        <input
          id="copy-input"
          type="text"
          name="copy"
          placeholder="Write Something..."
        />
        <button onClick={performCopy}>Copy</button>
      </form>

      <form>
        <label htmlFor="paste">Paste</label>
        <input id="paste-input" type="text" name="paste" readOnly />
        <button onClick={performPaste}>Paste</button>
      </form>
    </div>
  );
};

const Clipboard = () => {
  const [loaded, setLoaded] = useState(false);
  const [demoInfo, setDemoInfo] = useState();

  // Get the query param from router
  const { query } = useRouter();

  // Get the demo id
  const id = '_clipboard_api_';

  useEffect( () => {
    // find the demo details
    const thisDemo = getDemoById(id);
    setDemoInfo(thisDemo);
    setLoaded(true);
  },[id]);
  

  return (
    <>
    {
      loaded && (
      <div className="flex-colums">
        <DemoInfo info={demoInfo} />
        {isSupported() ? (
          <ToRender />
        ) : (
          <NotSupported canIUseURL={demoInfo.canIUseURL} />
        )}
      </div>)
    }
    </>
  );
};

export default Clipboard;
