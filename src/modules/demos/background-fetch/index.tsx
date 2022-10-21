import { Button } from '@/components/Button';
import { NotSupported } from '@/components/NotSupported';
import Link from 'next/link';
import run, { hasSupport } from '../../apis/background-fetch';

function BackgroundFetch() {
  if (!hasSupport()) {
    return <NotSupported />;
  }
  const download = (url: string) => {
    return run.download(url);
  };

  return (
    <div className="tw-p-6 tw-max-w-sm tw-bg-white tw-rounded-lg tw-border tw-border-gray-200 tw-shadow-md dark:tw-bg-gray-800 dark:tw-border-gray-700">
      <a href="#">
        <h5 className="tw-mb-2 tw-text-2xl tw-font-bold tw-tracking-tight tw-text-gray-900 dark:tw-text-white">
          Blog build tools, JS blocks, and opener-policy - Podcast
        </h5>
      </a>
      <p className="tw-mb-3 tw-font-normal tw-text-gray-700 dark:tw-text-gray-400">
        In this episode of the top-10-most-popular-JavaScript podcast, Jake and
        Surma chat about using our blogs to experiment with build systems.{' '}
        <Link href="https://http203.libsyn.com/blog-build-tools-js-blocks-and-opener-policy">
          <a className="tw-text-blue-700 tw-font-medium">Reference</a>
        </Link>
      </p>
      <div className="tw-grid tw-justify-items-end">
        <Button
          onClick={() =>
            download('https://traffic.libsyn.com/secure/http203/HTT_P007.m4a')
          }
        >
          Download 🔻
        </Button>

        {/* </a> */}
      </div>
    </div>
  );
}

export default BackgroundFetch;
