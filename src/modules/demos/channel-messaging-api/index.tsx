import run, { hasSupport } from '../../apis/channel-messaging-api';
import { Input } from '@/components/Input';
import { SetStateAction, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import CustomIframe from "./CustomIframe"
import MyComponent from "./MyComponent"
 
function ChannelMessagingApi() {
  if (!hasSupport) {
    return <h1>Unsupported</h1>;
  }
  const [message,setMessage]=useState("")
  const [sendText,setSendText]=useState("")

  const channel = new MessageChannel();
  const port1 = channel.port1;
  
  
  const iframe = document.querySelector('iframe');
  useEffect(() => {
    if(iframe){
      iframe.addEventListener("load", onLoad);
    }
  }, [iframe])
  
  
  function onMessage(e: { data: SetStateAction<string>; }) {
    setMessage(e.data);
  }

  function onLoad() {
    channel.port1.onmessage = onMessage;
    if(iframe && iframe.contentWindow){
     iframe.contentWindow.postMessage('init', '*',  [channel.port2]);
    }
  }

  const handleOnSubmit=(e: React.SyntheticEvent)=>{
    e.preventDefault()
    const target = e.target as typeof e.target & {
      message: { value: string };
     
    };
    const message = target.message.value;
    port1.postMessage(message)
    console.log(message)
  }

  return (
    <div>
    <form onSubmit={handleOnSubmit}>
      <label htmlFor='message' >Enter a message:{message}</label>
      <Input type="text" id="message" />
      <Input type="submit" value="Submit"></Input>
    </form>
    <label >Message from Iframe:</label>
    <CustomIframe >
      <MyComponent />
    </CustomIframe>
    <button onClick={run}>run demo</button>
  </div>
  );
}

export default ChannelMessagingApi;
