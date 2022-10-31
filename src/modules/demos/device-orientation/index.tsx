import { Button } from '@/components/Button';
import run, { hasSupport } from '../../apis/device-orientation';

function DeviceOrientation() {
  if (!hasSupport) {
    return <h1>Unsupported</h1>;
  }

  return (
    <div>
      <div
        style={{
          backgroundColor: '#ffdadafa',
          borderRadius: '8px',
          padding: '16px',
        }}
      >
        <h1>About:</h1>
        <ol>
          <li>1. This API only works in mobile browsers</li>
          <li>2. Only works in secure contexts</li>
        </ol>
      </div>
      <Button onClick={run} className="tw-my-2">
        Run Demo
      </Button>
      <div
        id="orientation"
        style={{
          paddingLeft: '8px',
          paddingRight: '8px',
          paddingBottom: '8px',
          paddingTop: 0,
        }}
      ></div>
    </div>
  );
}

export default DeviceOrientation;
