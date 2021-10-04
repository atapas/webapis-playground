// Creator
import { Creator } from '..';

const DemoInfo = ({ info }) => {
  console.log(info);
  return (
    <div className="tw-flex tw-flex-col tw-items-center tw-justify-center">
      <h1 className="tw-text-center tw-text-2em tw-font-bold">{info.title}</h1>
      <Creator info={info.creator} size="md" />
      <div className="tw-max-w-500px tw-m-4">
        <p
          className="tw-p-5px"
          dangerouslySetInnerHTML={{ __html: info.desc }}
        />
      </div>
    </div>
  );
};

export default DemoInfo;
