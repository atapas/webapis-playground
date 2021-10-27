import run, { hasSupport } from '../../apis/fullscreen';

function FullScreen() {
  if (!hasSupport) {
    return <h1>Unsupported</h1>;
  }

  return (
    <div className="tw-flex tw-flex-col tw-items-center tw-justify-center">
      <div id="fs-img-id" className="fs-img">
        <img
          src="https://res.cloudinary.com/atapas/image/upload/v1602226996/artists/Rock_oz3kq1.png"
          alt="Rock"
          width="200px"
          height="200px"
        />
      </div>

      <button onClick={run}>Make FullScreen</button>
    </div>
  );
}

export default FullScreen;
