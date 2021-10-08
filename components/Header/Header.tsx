import { FiMoon, FiSun, FiTwitter, FiGithub } from 'react-icons/fi';
import { FaBolt } from 'react-icons/fa';

import { IconButton, Spacer } from 'components';

function Header() {
  let isLightMode = true;

  return (
    <header
      className="
        tw-fixed
        tw-top-0
        tw-left-0
        tw-z-10

        tw-w-full

        tw-border-b
        tw-bg-white
        tw-border-gray-200
      "
    >
      <div
        className="
          tw-py-3
          tw-px-4

          tw-w-full
          tw-max-w-container

          tw-mx-auto

          tw-flex
          tw-items-center
          tw-justify-between
        "
      >
        <FaBolt />

        <div
          className="
          tw-flex
          tw-items-center
        "
        >
          <IconButton
            as="a"
            href="https://github.com/atapas/webapis-playground"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Source code"
            icon={<FiGithub />}
            color="gray"
            variant="ghost"
          />

          <Spacer orientation="x" size={2} />

          <IconButton
            as="a"
            href="https://twitter.com/intent/tweet?text=Check%20this%20amazing%20Web%20APIs%20demo%20https://webapis-playground.vercel.app/,%20created%20by%20@tapasadhikary%20@MaxProgramming1%0A%0A%23DEVCommunity%20%23100DaysOfCode"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Share on twitter"
            icon={<FiTwitter />}
            variant="ghost"
            color="gray"
          />

          <Spacer orientation="x" size={2} />

          <IconButton
            icon={isLightMode ? <FiMoon /> : <FiSun />}
            aria-label={
              isLightMode ? 'Switch to dark mode' : 'Switch to light mode'
            }
            variant="ghost"
            color="gray"
            onClick={() => {}}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
