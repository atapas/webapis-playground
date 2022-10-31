import run, { hasSupport } from '../../apis/channel-messaging-api';
import CustomIframe from "./CustomIframe"
import MyComponent from "./MyComponent"
import { Button } from '@/components/Button';

function ChannelMessagingApi() {
  if (!hasSupport) {
    return <h1>Unsupported</h1>;
  }
  const { target } = run("childFrame")

  const add = () => {
    target.postMessage("add")
  }
  const sub = () => {
    target.postMessage("sub")
  }


  return (
    <div>
      <Button className='tw-mr-2 tw-mb-2' onClick={add}>Add</Button>
      <Button className='tw-mr-2 tw-mb-2' onClick={sub}>Subtract</Button>
      <CustomIframe frameId="childFrame" >
        <MyComponent />
      </CustomIframe>
    </div>
  );
}

export default ChannelMessagingApi;
