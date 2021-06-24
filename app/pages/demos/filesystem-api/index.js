import React from "react";

// router
import { useRouter } from "next/router";

// localstorage
import useLocalStorage from "../../../hooks/use-local-storage";

// icons
import { FiFileText, FiImage } from "react-icons/fi";

// demo information
import { DemoInfo, NotSupported } from '../../../components';

// apis
import { isSupported, textFileUpload, imageUpload } from "./api";

// Component that Renders the Demo UI
const ToRender = () => {
  return (
    <div className="flex-colums">
      <div className="btns">
        <button id="textFileBtn" onClick={textFileUpload}>
          <FiFileText style={{ width: "1rem", height: "1rem" }} />
          Select a text file
        </button>
        <button
          id="imageFileBtn"
          style={{ marginLeft: "15px" }}
          onClick={imageUpload}
        >
          <FiImage
            data-feather="image"
            style={{ width: "1rem", height: "1rem" }}
          />
          Select an image file
        </button>
      </div>
      <h2 id="fileName"></h2>
      <div className="content">
        <p id="textFileContents"></p>
        <img src="" id="imagePreview" />
      </div>
    </div>
  );
};

const FileSystem = () => {
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

  return(
    <div className="flex-colums">
      <DemoInfo info={thisDemo} />
      {
        isSupported() ? (
          <ToRender />
        ) : (<NotSupported canIUseURL={thisDemo.canIUseURL} />)
      }   
    </div>
  );
};

export default FileSystem;
