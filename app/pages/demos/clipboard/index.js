// router
import { useRouter } from "next/router";

// localstorage
import useLocalStorage from "hooks/use-local-storage";

// icons
import { FiFileText, FiImage } from "react-icons/fi";

// demo information
import { DemoInfo, NotSupported } from "components";

// apis
import { isSupported, performCopy, performPaste } from "./api";

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
  // Get the query param from router
  const { query } = useRouter();
  // Get demos from localstorage
  const [demos] = useLocalStorage("demos");

  // Get the demo id
  const id = query.id;
  // find the demo details
  const thisDemo = demos.find((demo, index) => {
    return demo.id === id;
  });

  return (
    <div className="flex-colums">
      <DemoInfo info={thisDemo} />
      {isSupported() ? (
        <ToRender />
      ) : (
        <NotSupported canIUseURL={thisDemo.canIUseURL} />
      )}
    </div>
  );
};

export default Clipboard;
