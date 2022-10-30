import { Input } from '@/components/Input';
import { SetStateAction, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

type Props={}
const CustomIframe:React.FC<Props> = ({
    children,
    ...props
  }) => {
    const [contentRef,setContentRef]  = useState<HTMLIFrameElement|null>(null)
  
    const mountNode = contentRef?contentRef?.contentWindow?.document?.body:undefined
  
    return (
      <iframe {...props} ref={setContentRef}>
        {mountNode && createPortal(children, mountNode)}
      </iframe>
    )
  }

export default CustomIframe