import run, { hasSupport } from '../../apis/screen-orientation';

function ScreenOrientation() {
  if (!hasSupport) {
    return <h1>Unsupported</h1>;
  }

  return (
    <div>
      <button
        onClick={run}
        style={{
          backgroundColor: 'blue',
          color: 'white',
          padding: '5px',
          borderRadius: '3px',
        }}
      >
        Run Demo
      </button>
      <div>
        <h1>Orientation: </h1>
        <p id="orientation"></p>
      </div>
    </div>
  );
}

export default ScreenOrientation;
