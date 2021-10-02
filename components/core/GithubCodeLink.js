// icons
import { FiGithub } from 'react-icons/fi';

const GithubCodeLink = ({ url }) => {
  return (
    <div className="flex-colums">
      <a target="_blank" rel="noreferrer" href={url}>
        <button className="git-link">
          See Code <FiGithub />
        </button>
      </a>
    </div>
  );
};

export default GithubCodeLink;
