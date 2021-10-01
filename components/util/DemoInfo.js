// Creator
import { Creator } from '..';

const DemoInfo = ({ info }) => {
  console.log(info);
  return (
    <div className="tw-flex tw-flex-col tw-items-center tw-justify-center">
      <h1>{info.title}</h1>
      <Creator info={info.creator} size="md" />
      <p
        style={{ maxWidth: '500px', padding: '5px' }}
        dangerouslySetInnerHTML={{ __html: info.desc }}
      />
    </div>
  );
};

export default DemoInfo;
