import React from "react";

// icons
import { FiFileText, FiImage } from "react-icons/fi";

// apis
import { textFileUpload, imageUpload } from './api';

const FileSystem = () => {
  return (
    <div className="demos">
      <div className="btns">
        <button id="textFileBtn" onClick={textFileUpload}>
          <FiFileText style={{width: '1rem', height: '1rem'}} />
          Select a text file
        </button>
        <button id="imageFileBtn" style={{marginLeft: '15px'}} onClick={imageUpload}>
          <FiImage data-feather="image" style={{width: '1rem', height: '1rem'}} />
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

export default FileSystem;
