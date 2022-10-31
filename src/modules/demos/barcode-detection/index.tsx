import { Button } from '@/components/Button';
import run, { hasSupport } from '../../apis/barcode-detection';

function BarcodeDetection() {
  if (!hasSupport) {
    return <h1>Unsupported</h1>;
  }

  return (
    <div>
      <div
        style={{
          backgroundColor: '#d5dafb',
          padding: '16px',
          borderRadius: '8px',
        }}
      >
        <h1>About:</h1>
        <ol>
          <li>1. The Barcode Detector only works on https connections</li>
          <li>2. It is an experimental API, only works in mobile browsers</li>
        </ol>
      </div>
      <div>
        <Button onClick={run} className="tw-my-2">
          Run Demo
        </Button>
        <video id="stream" style={{ width: '200px', height: '200px' }} />
      </div>
    </div>
  );
}

export default BarcodeDetection;
