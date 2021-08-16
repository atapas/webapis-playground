const isSupported = () => {
  return true;
};

const handleDragStart = (e) => {
  e.target.style.opacity = "1";
  e.dataTransfer.setData("text/plain", e.target.id);
  setTimeout(() => {
    e.target.classList.add("hide");
  }, 0);
}

const handleDragEnter = (e) => {
  e.preventDefault();
  e.target.classList.add("over");
}

const handleDragOver = (e) => {
  e.preventDefault();
  e.target.classList.add("over");
}

const handleDragLeave = (e) => {
  e.target.style.opacity = "0.4";
  e.target.classList.remove("over");
}

const handleDrop = (e) => {
  e.target.style.opacity = "1";
  e.target.classList.remove("over");
  const id = e.dataTransfer.getData("text/plain");
  const draggable = document.getElementById(id);
  e.target.appendChild(draggable);
  draggable.classList.remove("hide");
}

export { 
  isSupported, 
  handleDragStart, 
  handleDragEnter, 
  handleDragOver, 
  handleDragLeave, 
  handleDrop 
};
