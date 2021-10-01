// link
import Link from 'next/link';

const NotSupported = ({ canIUseURL }) => {
  return (
    <div className="tw-bg-white tw-p-5px tw-rounded-10px tw-flex tw-flex-col tw-items-center tw-justify-center">
      <h1>OOPS!!!</h1>
      <h3>
        It seems your browser does not support this feature. Please check out{' '}
        <a href={canIUseURL} target="_blank" rel="noreferrer">
          Can I Use
        </a>{' '}
        for more details.
      </h3>
    </div>
  );
};

export default NotSupported;
