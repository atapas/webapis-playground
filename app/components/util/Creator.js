const Creator = ({ info, size }) => {
  let avatarKey = info.email ? info.email : info.twitter;
  const creatorImage = `https://unavatar.vercel.app/${avatarKey}`;
  return (
    <div className={`creator ${size}`}>
      <img src={creatorImage} />
      <span>
        <b>
          <a href={`https://twitter.com/${info.twitter}`} target="_blank">
            {info.name}
          </a>
        </b>
      </span>
      `;
    </div>
  );
};

export default Creator;
