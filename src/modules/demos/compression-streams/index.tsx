import { Button } from '@/components/Button';
import { NotSupported } from '@/components/NotSupported';
import run, { hasSupport } from '../../apis/compression-streams';

function CompressionStreams() {
  const file = '/assets/files/lorem.txt';
  if (!hasSupport) {
    return <NotSupported />;
  }

  const compress = () => {
    run.compressedReadableStream(file);
  };

  return (
    <div>
      <iframe src={file}></iframe>
      <Button className="tw-mt-3" onClick={compress}>
        Download as zipped file
      </Button>
    </div>
  );
}

export default CompressionStreams;
