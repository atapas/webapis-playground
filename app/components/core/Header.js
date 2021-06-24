import React from "react";

// icons
import { FiActivity, FiTwitter, FiGithub } from "react-icons/fi";

const Header = ({ showSearch }) => {
  return (
    <header>
      <a href="/">
        <span className="prodName">
          <FiActivity size={36} />
          Web APIs
        </span>
      </a>
      <ul className="links">
        <a
          className="github"
          title="Source Code"
          href="https://github.com/atapas/webapis-playground"
          target="_blank"
        >
          <FiGithub size={32} color='#FFFFFF' />
        </a>

        <a
          className="tweet"
          title="Tweet About it"
          href="https://twitter.com/intent/tweet?text=Check%20this%20amazing%20Web%20APIs%20demo%20http://js-webapis.netlify.app/,%20created%20by%20@tapasadhikary%0A%0A%23DEVCommunity%20%23100DaysOfCode"
          target="_blank"
        >
          <FiTwitter size={32} color='#FFFFFF' />
        </a>
      </ul>
    </header>
  );
};

export default Header;
