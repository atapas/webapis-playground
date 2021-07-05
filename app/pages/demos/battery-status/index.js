// router
import { useRouter } from "next/router";

// localstorage
import useLocalStorage from "../../../hooks/use-local-storage";

// icons
import { FiBattery, FiBatteryCharging } from "react-icons/fi";

// demo information
import { DemoInfo, NotSupported } from "../../../components";

// apis
import { isSupported, getBatteryStatus } from "./api";

// Component that Renders the Demo UI
const ToRender = () => {
  return (
    <div className="flex-colums">
      <button onClick={getBatteryStatus}>Get Battery Status</button>
      <div id="battery-charging-status-id" style={{display: 'none'}}>
        <FiBatteryCharging size={100}/>
      </div>

      <div id="battery-status-id" style={{display: 'none'}}>
        <FiBattery size={100}/>
      </div>

      <ul className="battery-status-info">
        <li>
          <span>Battery Charging?</span>{" "}
          <span id="battery-status-charging"></span>
        </li>
        <li>
          <span>Battery Charge level:</span>{" "}
          <span id="battery-status-level"></span>
        </li>
      </ul>
    </div>
  );
};

const BatteryStatus = () => {
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

export default BatteryStatus;
