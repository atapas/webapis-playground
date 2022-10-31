import run from '@/modules/apis/channel-messaging-api';
import { useEffect, useState } from 'react';

const MyComponent = () => {
  const [integer, setInt] = useState(0)
  const { target } = run("parent")

  const handleOnSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()

    target.postMessage("le leya")

  }
  useEffect(() => {
    window.addEventListener('message', (message) => {
      if (message.data === "add") {
        setInt((prevState) => prevState + 1)
      }
      if (message.data === "sub") {
        setInt((prevState) => prevState - 1)
      }
    });

  }, [])

  return (
    <div>
      <span>Iframe Counter:</span>
      <span id="childDisplay">({integer})</span>
    </div>
  )
}

export default MyComponent