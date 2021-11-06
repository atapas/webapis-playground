import Nextimage from 'next/image';

function NotSupported() {
  return (
    <div className="tw-flex tw-flex-col tw-items-center">
      <Nextimage
        src="/assets/images/Exclamation-Mark.png"
        alt=""
        width={100}
        height={260}
      />
      <span className="tw-text-lg tw-font-bold tw-mt-4">OOPS!!!</span>
      <span className="tw-text-base tw-italic">
        It seems your browser does not support this feature.
      </span>
    </div>
  );
}

export default NotSupported;
