import run, { hasSupport } from '../../apis/device-orientation';

function DeviceOrientation() {
  if (!hasSupport) {
    return <h1>Unsupported</h1>;
  }

  return (
    <div>
      <button
        onClick={run}
        style={{
          backgroundColor: 'orange',
          borderRadius: '4px',
          padding: '2px',
        }}
      >
        Run Demo
      </button>
      <div id="orientation"></div>
    </div>
  );
}

export default DeviceOrientation;
