// link
import Link from 'next/link';

// icons
import { FiZap, FiGithub } from 'react-icons/fi';

// Creator
import { Creator } from '..';

const Demo = ({ demo }) => {
  // console.log(demo);

  return (
    <div className="tw-border-1 tw-border-box tw-border-solid tw-p-2 tw-w-300px tw-bg-demo tw-m-4 tw-min-h-300px tw-rounded-4px">
      <h2 className="tw-text-center tw-text-1.5em tw-font-bold">{demo.title}</h2>
      <Creator info={demo.creator} size="sm" />
      <p
        className="tw-h-175px"
        dangerouslySetInnerHTML={{ __html: demo.desc }}
      />
      <div className="tw-flex tw-justify-between">
        <Link className="tw-cursor-pointer" href={`/demos/${demo.path}`}>
          <button>
            Try It <FiZap />
          </button>
        </Link>

        <a
          target="_blank"
          rel="noreferrer"
          href={`https://github.com/atapas/webapis-playground/blob/master/web-apis/${demo.path}/index.js`}
        >
          <button

            style={{
              backgroundColor: '#000000',
              color: '#FFFFFF',
              float: 'right',
            }}
          >
            See Code <FiGithub />
          </button>
        </a>
      </div>
    </div>
  );
};

export default Demo;
