// icons
import { FiGithub } from 'react-icons/fi';

const GithubCodeLink = ({ url }) => {
  return (
    <div className="flex-colums">
      <a target="_blank" rel="noreferrer" href={url}>
        <button className="tw-fixed tw-bottom-7 tw-right-2.5 tw-text-1em tw-bg-black text-white tw-cursor-pointer tw-p-3">
          See Code <FiGithub />
        </button>
      </a>
    </div>
  );
};

export default GithubCodeLink;
