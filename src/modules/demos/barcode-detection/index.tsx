import { Button } from '@/components/Button';
import run, { hasSupport } from '../../apis/barcode-detection';

function BarcodeDetection() {
  if (!hasSupport) {
    return <h1>Unsupported</h1>;
  }

  return (
    <div>
      <div style={{ backgroundColor: 'lightgoldenrodyellow', padding: '16px' }}>
        <h1>About:</h1>
        <ol>
          <li>1. The Barcode Detector only works on https connections</li>
          <li>2. It is an experimental API, only works in mobile browsers</li>
        </ol>
      </div>
      <div className="tw-flex tw-flex-col tw-gap-2 tw-justify-between">
        <Button onClick={run} style={{ backgroundColor: 'orange' }}>
          Run Demo
        </Button>
        <video id="stream" style={{ width: '200px', height: '200px' }} />
      </div>
    </div>
  );
}

export default BarcodeDetection;
