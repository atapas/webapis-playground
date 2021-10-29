import Link from 'next/link';
import Image from 'next/image';

import { FiTwitter, FiGithub } from 'react-icons/fi';

import { IconButton } from 'components';

function Header() {
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
        <Link href="/" passHref>
          <a
            className="
            tw-flex
            tw-items-center
            tw-text-lg
            tw-font-bold
            tw-text-gray-700
          "
          >
            <div className="tw-inline-flex tw-mr-2">
              <Image
                src="/assets/svg/logoDark.svg"
                width={24}
                height={24}
                alt="Web APIs"
                aria-hidden="true"
              />
            </div>
            Web APIs
          </a>
        </Link>

        <div className=" tw-flex tw-items-center tw-space-x-2">
          <IconButton
            as="a"
            href="https://github.com/atapas/webapis-playground"
            rel="noopener noreferrer"
            target="_blank"
            ariaLabel="Source code"
            icon={<FiGithub />}
          />

          <IconButton
            as="a"
            href="https://twitter.com/intent/tweet?text=Check%20this%20amazing%20Web%20APIs%20demo%20https://webapis-playground.vercel.app/,%20created%20by%20@tapasadhikary%20@MaxProgramming1%0A%0A%23DEVCommunity%20%23100DaysOfCode"
            rel="noopener noreferrer"
            target="_blank"
            ariaLabel="Share on twitter"
            icon={<FiTwitter />}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
