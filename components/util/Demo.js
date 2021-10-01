// link
import Link from 'next/link';

// icons
import { FiZap, FiGithub } from 'react-icons/fi';

// Creator
import { Creator } from '..';

const Demo = ({ demo }) => {
  // console.log(demo);

  return (
    <div className="tw-border-1 tw-border-black tw-border-solid tw-p-2 tw-w-300px tw-bg-white tw-m-4 tw-min-h-300px tw-rounded-4px">
      <h2 className="tw-items-center">{demo.title}</h2>
      <Creator info={demo.creator} size="sm" />
      <p
        style={{ height: '175px' }}
        dangerouslySetInnerHTML={{ __html: demo.desc }}
      />
      <div className="tw-flex tw-justify-between">
        <Link className="tw-cursor-pointer" href={`/demos/${demo.path}`}>
          <button className="tw-flex tw-items-center">
            Try It <FiZap />
          </button>
        </Link>

        <a
          target="_blank"
          rel="noreferrer"
          href={`https://github.com/atapas/webapis-playground/blob/master/web-apis/${demo.path}/index.js`}
        >
          <button
            className="tw-flex tw-items-center"
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
