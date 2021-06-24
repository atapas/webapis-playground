import React from "react";

// router
import { useRouter } from "next/router";

// localstorage
import useLocalStorage from "../../../hooks/use-local-storage";

// icons
import { FiFileText, FiImage } from "react-icons/fi";

// demo information
import { DemoInfo, NotSupported } from "../../../components";

// api
import { isSupported, makeFullScreen } from "./api";

// Component that Renders the Demo UI
const ToRender = () => {
  return (
    <div className="flex-colums">
      <div id="fs-img-id" className="fs-img">
        <img
          src="https://res.cloudinary.com/atapas/image/upload/v1602226996/artists/Rock_oz3kq1.png"
          alt="Rock"
          width="200px"
          height="200px"
        />
      </div>
      <button onClick={makeFullScreen}>Make FullScreen</button>
    </div>
  );
};

const FullScreen = () => {
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

export default FullScreen;
