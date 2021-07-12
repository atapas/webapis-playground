// state management
import {useState, useEffect} from 'react';

// demo information
import { DemoInfo, NotSupported } from "components";

// api
import { 
  isSupported, 
  handleDragStart, 
  handleDragEnter, 
  handleDragOver, 
  handleDragLeave, 
  handleDrop } from "web-apis/drag-and-drop";

// demo info by id
import { getDemoById } from 'utils/data/data-access';

// Component that Renders the Demo UI
const ToRender = () => {
  return (
    <div className="flex-colums">
      <div className="dnd-container">
        <div 
          className="box" 
          onDragStart={handleDragStart}
          onDragEnter={handleDragEnter}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}>
            <div id="item" className="item" draggable="true"></div>
        </div>

        <div
          className="box" 
          onDragStart={handleDragStart}
          onDragEnter={handleDragEnter}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}>
        </div>
        <div
          className="box" 
          onDragStart={handleDragStart}
          onDragEnter={handleDragEnter}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}>    
        </div>
        <div
          className="box" 
          onDragStart={handleDragStart}
          onDragEnter={handleDragEnter}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}>
        </div>
      </div>
    </div>
  );
};

const DragAndDrop = () => {
  const [loaded, setLoaded] = useState(false);
  const [demoInfo, setDemoInfo] = useState();

  // Get the demo id
  const id = "_dnd_api_";

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

export default DragAndDrop;
