import { fileSave } from 'browser-fs-access';
export const hasSupport = (): boolean => Boolean('CompressionStream' in window);

async function compressedReadableStream(file: any) {
  const readableStream = await fetch(file).then(response => response.body);

  const compressedReadableStream = readableStream.pipeThrough(
    new CompressionStream('gzip')
  );

  await fileSave(new Response(compressedReadableStream), {
    fileName: 'lorem.gz',
    extensions: ['.gz'],
  });
}

const run = {
  compressedReadableStream,
};

export default run;
