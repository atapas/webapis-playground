// icons
import { FiGithub } from 'react-icons/fi';

const GithubCodeLink = ({ url }) => {
  return (
    <div className="flex-colums">
      <a
        target="_blank"
        rel="noreferrer"
        href={url}
        style={{
          margin: '50px',
        }}
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
  );
};

export default GithubCodeLink;
