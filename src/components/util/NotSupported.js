const NotSupported = ({ canIUseURL = '' }) => {
  return (
    <div className="tw-bg-payments tw-p-5px tw-rounded-10px tw-flex tw-flex-col tw-items-center tw-justify-center">
      <h1>OOPS!!!</h1>
      <h3>
        It seems your browser does not support this feature. Please check out{' '}
        <a
          href={canIUseURL}
          target="_blank"
          rel="noreferrer"
          className="tw-transition-all tw-text-blue-600 tw-hover:border-b-2 hover:tw-border-b-blue-600 tw-border-b-2"
        >
          Can I Use
        </a>{' '}
        for more details.
      </h3>
    </div>
  );
};

export default NotSupported;
