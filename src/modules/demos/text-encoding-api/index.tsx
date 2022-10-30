import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import run, { hasSupport } from '../../apis/text-encoding-api';

function TextEncodingApi() {
  if (!hasSupport) {
    return <h1>Unsupported</h1>;
  }
  const  {encodeText,  decodeText} = run()

  return (
    <div>
      <label htmlFor="tea--string">Enter a URL:</label>
      <Input
        type="text"
        id="tea--string"
        placeholder="Enter a string"
      />

      <Button className="tw-mt-3 tw-mb-3" onClick={encodeText}>
        Encode
      </Button>
      <div id="tea--encodedText" className='tw-text-sm tw-text-gray-900 tw-mb-3'></div>

      <label htmlFor="tea--numberList">Enter a URL:</label>
      <Input
        type="text"
        id="tea--numberList"
        placeholder="Enter the list of number"
      />

      <Button className="tw-mt-3 tw-mb-3" onClick={decodeText}>
        Decode
      </Button>
      <div id="tea--decodedText" className='tw-text-sm tw-text-gray-900 tw-mb-3'></div>
    </div>
  );
}

export default TextEncodingApi;
