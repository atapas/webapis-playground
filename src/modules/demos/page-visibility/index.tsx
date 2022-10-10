import { useLayoutEffect, useRef } from 'react';
import {
  hasSupport,
  hidden,
  visibilityChange,
} from '../../apis/page-visibility';

function PageVisibility() {
  const audio = useRef<HTMLAudioElement | null>(null);

  const handleVisibiltyChange = () => {
    if (document.visibilityState === 'visible') {
      audio.current!.play();
      document.title = 'Playing';
    } else if (document.visibilityState === hidden) {
      audio.current!.pause();
      document.title = 'Paused';
    }
  };

  useLayoutEffect(() => {
    document.addEventListener(visibilityChange, handleVisibiltyChange);

    return () =>
      document.removeEventListener(visibilityChange, handleVisibiltyChange);
  }, []);

  if (!hasSupport) {
    return <h1> Unsupported</h1>;
  }

  return (
    <div className="tw-flex tw-flex-col">
      {/* <button onClick={run}>run demo</button> */}
      <p className="tw-pb-3">
        When you view or open another tab or minimize the browser window the
        audio should pause.
      </p>

      {/* audio part */}
      <div className="tw-pt-2">
        <audio
          src="https://res.cloudinary.com/aigis/video/upload/v1665220963/hip-hop-rock-beats-118000_okk3rm.mp3"
          controls
          autoPlay
          ref={audio}
        />
        <small>
          Music by{' '}
          <a
            className="tw-underline"
            href="https://pixabay.com/users/qubesounds-24397640/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=118000"
          >
            QubeSounds
          </a>{' '}
          from{' '}
          <a
            className="tw-underline"
            href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=118000"
          >
            Pixabay
          </a>
        </small>
      </div>
    </div>
  );
}

export default PageVisibility;
