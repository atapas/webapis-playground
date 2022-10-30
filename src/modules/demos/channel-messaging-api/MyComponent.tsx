import { Input } from '@/components/Input';
import { SetStateAction, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

const MyComponent = () => {
    const [message,setMessage]=useState("")
    const [sendText,setSendText]=useState("")
    const channel = new MessageChannel();
  
    // channel.port1.onmessage = onMessage;
    
    
    // const iframe = document.querySelector('iframe');
    // useEffect(() => {
    //   if(iframe){
    //     iframe.addEventListener("load", onLoad);
    //   }
    // }, [iframe])
    
    
    // function onMessage(e: { data: SetStateAction<string>; }) {
    //   setMessage(e.data);
    // }
  
    // function onLoad() {
    //   channel.port1.onmessage = onMessage;
    //   if(iframe && iframe.contentWindow){
    //    iframe.contentWindow.postMessage(sendText, '*', [channel.port2]);
    //   }
    // }
    let port2: { onmessage: (e: any) => void; postMessage: (arg0: string) => void; };
    // Listen for the initial port transfer message
    window.addEventListener('message', initPort);

    function initPort(e: any) {
        if(port2){
        port2 = e.ports[0];
        port2.onmessage = onMessage;}
      }
      
      // Handle messages received on port2
      function onMessage(e: { data: SetStateAction<string>; }) {
        setMessage(e.data);
        port2.postMessage(`Message received by IFrame: "${e.data}"`);
      }
  
    const handleOnSubmit=(e: React.SyntheticEvent)=>{
      e.preventDefault()
      const target = e.target as typeof e.target & {
        message: { value: string };
      };
      const message = target.message.value;
      const channel = new MessageChannel();
      
      setSendText(message)
    }
    return (
        <>
         <form onSubmit={handleOnSubmit}>  
           <label htmlFor='message' >Enter a message:</label>  
           <Input type="text" id="message" />  
           <Input type="submit" value="Submit"></Input>  
         </form> 
         <label htmlFor='message' >Enter a message:{message}</label> 
        </>
    )
  }

export default MyComponent