import { useState } from 'react';
import { createPortal } from 'react-dom';

type Props = {
  frameId: string
}
const CustomIframe: React.FC<Props> = ({
  children,
  frameId,
  ...props
}) => {
  const [contentRef, setContentRef] = useState<HTMLIFrameElement | null>(null)

  const mountNode = contentRef ? contentRef?.contentWindow?.document?.body : undefined

  return (
    <iframe id={frameId} style={{ border: '1px solid black' }} {...props} ref={setContentRef}>
      {mountNode && createPortal(children, mountNode)}
    </iframe>
  )
}

export default CustomIframe