export const hasSupport = (): boolean =>
  Boolean('showOpenFilePicker' in window);

async function textUpload() {
  const root = document.getElementById('js-api--filesystem') as HTMLElement;
  const contentText = root.querySelector('#js-content--text') as HTMLElement;
  const contentImage = root.querySelector('#js-content--image') as HTMLElement;
  const fileName = root.querySelector('#js-filename') as HTMLElement;

  try {
    let [fileHandle] = await window.showOpenFilePicker({
      types: [
        {
          description: 'Text Files',
          accept: {
            'text/plain': ['.txt'],
          },
        },
      ],
    });
    let file = await fileHandle.getFile();
    let content = await file.text();

    root.style.display = 'flex';

    contentText.innerText = content;
    contentText.style.display = 'block';

    fileName.innerText = file.name;
    contentImage.innerHTML = '';
  } catch (error) {
    console.log('File picking cancelled', error);
  }
}

async function imageUpload() {
  const root = document.getElementById('js-api--filesystem') as HTMLElement;
  const contentText = root.querySelector('#js-content--text') as HTMLElement;
  const contentImage = root.querySelector('#js-content--image') as HTMLElement;
  const fileName = root.querySelector('#js-filename') as HTMLElement;

  try {
    let [fileHandle] = await window.showOpenFilePicker({
      types: [
        {
          description: 'Image Files',
          accept: {
            'image/*': ['.gif', '.jpeg', '.jpg', '.png', '.webp'],
          },
        },
      ],
    });
    let file = await fileHandle.getFile();
    let imageURL = URL.createObjectURL(file);

    contentImage.innerHTML = '';

    const img = document.createElement('img');
    img.setAttribute('src', imageURL);
    img.setAttribute('alt', file.name);
    img.style.height = 'auto';
    img.style.width = '100%';

    root.style.display = 'flex';

    contentImage.appendChild(img);
    fileName.innerText = file.name;
    contentText.innerText = '';
    contentText.style.display = 'none';
  } catch (error) {
    console.log('Image selection canceled.', error);
  }
}

const run = {
  text: textUpload,
  image: imageUpload,
};

export default run;
