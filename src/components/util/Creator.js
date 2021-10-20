const Creator = ({ info, size }) => {
  let avatarKey = info.twitter || info.email;
  const creatorImage = info.twitter
    ? `https://unavatar.io/twitter/${avatarKey}`
    : `https://unavatar.io/${avatarKey}`;
  return (
    <div className="tw-flex tw-mt-5px tw-items-center tw-justify-center">
      <img
        src={creatorImage}
        className="tw-rounded-half tw-mr-5px"
        alt="Profile Photo"
        height={size === 'sm' ? '30' : '80'}
        width={size === 'sm' ? '30' : '80'}
      />
      <span className={(size === 'sm' ? "tw-text-18px" : "tw-text-30px")}>
        <b>
          <a
            className="tw-text-link"
            href={`https://twitter.com/${info.twitter}`}
            target="_blank"
            rel="noreferrer"
          >
            {info.name}
          </a>
        </b>
      </span>
    </div>
  );
};

export default Creator;
