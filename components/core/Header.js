// link
import Link from 'next/link';

// icons
import { FiActivity, FiTwitter, FiGithub } from 'react-icons/fi';

const Header = ({ showSearch }) => {
  return (
    <header className="tw-flex tw-p-4px tw-flex-wrap tw-bg-black tw-text-white tw-items-center tw-justify-between">
      <Link className="tw-m-0 tw-p-0" href="/">
        <ul className="tw-m-0 tw-p-0 tw-flex tw-items-center tw-content-center tw-cursor-pointer">
          <li className="tw-text-prod tw-ml-4px tw-text-4.5xl tw-font-bold">
            <FiActivity size={36} />
          </li>
          <li className="tw-text-prod tw-ml-4px tw-text-4.5xl tw-font-bold">
            Web APIs
          </li>
        </ul>
      </Link>
      <ul className="tw-m-0 tw-p-0 tw-flex tw-items-center tw-content-center">
        <li className="tw-ml-4px">
          <a
            className="github"
            title="Source Code"
            href="https://github.com/atapas/webapis-playground"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub size={32} color="#FFFFFF" />
          </a>
        </li>
        <li className="tw-ml-4px tw-mr-4px">
          <a
            className="tweet"
            title="Tweet About it"
            href="https://twitter.com/intent/tweet?text=Check%20this%20amazing%20Web%20APIs%20demo%20https://webapis-playground.vercel.app/,%20created%20by%20@tapasadhikary%20@MaxProgramming1%0A%0A%23DEVCommunity%20%23100DaysOfCode"
            target="_blank"
            rel="noreferrer"
          >
            <FiTwitter size={32} color="#FFFFFF" />
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
