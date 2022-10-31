import { Button } from '@/components/Button';
import run, { hasSupport } from '../../apis/navigation-timing';

function NavigationTiming() {
  if (!hasSupport) {
    return <h1>Unsupported</h1>;
  }

  return (
    <div>
      <Button onClick={run} className="tw-my-2">
        Check Performance of Website
      </Button>
      <div>
        <b>Page Load Time:</b>
        <span id="load_time"></span>
      </div>
    </div>
  );
}

export default NavigationTiming;
