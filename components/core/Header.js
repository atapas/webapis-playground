// link
import Link from 'next/link';

// icons
import { FiActivity, FiTwitter, FiGithub } from 'react-icons/fi';

const Header = ({ showSearch }) => {
  return (
    <header>
      <Link href="/">
        <a className="prodName">
          <FiActivity size={36} />
          Web APIs
        </a>
      </Link>
      <ul className="links">
        <li>
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
        <li>
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
