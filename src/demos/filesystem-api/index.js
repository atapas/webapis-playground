const textFileBtn = document.getElementById("textFileBtn");
const imageFileBtn = document.getElementById("imageFileBtn");
const textFileContents = document.getElementById("textFileContents");
const imagePreview = document.getElementById("imagePreview");
const fileName = document.getElementById("fileName");

textFileBtn.onclick = async () => {
  // Get file
  const opts = {
    types: [
      {
        description: "Text Files",
        accept: {
          "text/plain": [".txt"],
        },
      },
    ],
  };
  const [fileHandle] = await showOpenFilePicker(opts);
  const file = await fileHandle.getFile();
  const content = await file.text();

  // Display file
  textFileContents.innerText = content;
  fileName.innerText = `File name: ${file.name}`;

  // Remove image file
  imagePreview.setAttribute("src", "");
};

imageFileBtn.onclick = async () => {
  // Get file
  const opts = {
    types: [
      {
        description: "Image Files",
        accept: {
          "image/*": [".jpeg", ".jpg", ".png", ".webp"],
        },
      },
    ],
  };
  const [fileHandle] = await showOpenFilePicker(opts);
  const file = await fileHandle.getFile();

  // Display file
  const imageURL = URL.createObjectURL(file);
  imagePreview.setAttribute("src", imageURL);
  imagePreview.setAttribute("alt", file.name);
  fileName.innerText = `File name: ${file.name}`;

  // Remove text file
  textFileContents.innerText = "";
};
