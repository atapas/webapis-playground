import { FiGithub } from 'react-icons/fi';

import { Button } from 'components';

interface GithubCodeLinkProps {
  url: string;
}

const GithubCodeLink = ({ url }: GithubCodeLinkProps) => (
  <Button
    as="a"
    leftIcon={<FiGithub />}
    href={url}
    rel="noreferrer"
    className="
      tw-fixed
      tw-right-8
      tw-bottom-8
      tw-bg-black
      tw-rounded-full
    "
  >
    See Code
  </Button>
);

export default GithubCodeLink;
