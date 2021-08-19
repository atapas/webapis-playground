const Creator = ({ info, size }) => {
  let avatarKey = info.email ? info.email : info.twitter;
  const creatorImage = `https://unavatar.vercel.app/${avatarKey}`;
  return (
    <div className={`creator ${size}`}>
      <img
        src={creatorImage}
        alt="Profile Photo"
        height={size === 'sm' ? '30' : '80'}
        width={size === 'sm' ? '30' : '80'}
      />
      <span>
        <b>
          <a
            href={`https://twitter.com/${info.twitter}`}
            target="_blank"
            rel="noreferrer"
          >
            {info.name}
          </a>
        </b>
      </span>
      `;
    </div>
  );
};

export default Creator;
