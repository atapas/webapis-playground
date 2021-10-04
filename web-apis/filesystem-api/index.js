const isSupported = () => {
  return typeof window !== 'undefined' && window.showOpenFilePicker
    ? true
    : false;
};

const textFileUpload = async () => {
  // Get file
  const opts = {
    types: [
      {
        description: 'Text Files',
        accept: {
          'text/plain': ['.txt'],
        },
      },
    ],
  };
  try {
    const [fileHandle] = await showOpenFilePicker(opts);
    const file = await fileHandle.getFile();
    const content = await file.text();

    // Display file
    const textFileContents = document.getElementById('textFileContents');
    const fileName = document.getElementById('fileName');
    textFileContents.innerText = content;
    fileName.innerText = `File name: ${file.name}`;

    // Remove image file
    const imagePreviewParent = document.getElementById('imagePreviewParent');
    imagePreviewParent.innerHTML = '';
  } catch (error) {
    console.log('File picking cancelled', error);
  }
};

const imageUpload = async () => {
  // Get file
  const opts = {
    types: [
      {
        description: 'Image Files',
        accept: {
          'image/*': ['.jpeg', '.jpg', '.png', '.webp'],
        },
      },
    ],
  };
  try {
    const [fileHandle] = await showOpenFilePicker(opts);
    const file = await fileHandle.getFile();
    const imageURL = URL.createObjectURL(file);
    // Display image
    const imagePreviewParent = document.getElementById('imagePreviewParent');
    // Remove the previous contents.
    imagePreviewParent.innerHTML = '';
    // Create new image and set the attributes and styles
    const img = document.createElement('img');
    img.setAttribute('src', imageURL);
    img.setAttribute('alt', file.name);
    img.style.height = 'auto';
    img.style.width = '100%';
    // append image to the parent.
    imagePreviewParent.appendChild(img);
    // show the file name
    const fileName = document.getElementById('fileName');
    fileName.innerText = `File name: ${file.name}`;

    // Remove text file
    const textFileContents = document.getElementById('textFileContents');
    textFileContents.innerText = '';
  } catch (error) {
    console.log('Image selection canceled.', error);
  }
};

export { isSupported, textFileUpload, imageUpload };
