import run, { hasSupport } from '../../apis/css-counter-styles';

function CssCounterStyles() {
  if (!hasSupport) {
    return <h1>Unsupported</h1>;
  }

  return (
    <div>
      <button onClick={run}>run demo</button>
    </div>
  );
}

export default CssCounterStyles;
