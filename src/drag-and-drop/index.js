let boxes = document.querySelectorAll(".dnd-container .box");

boxes.forEach(function (box) {
  box.addEventListener('dragstart', handleDragStart, false);
  box.addEventListener('dragenter', dragEnter, false)
  box.addEventListener('dragover', dragOver, false);
  box.addEventListener('dragleave', dragLeave, false);
  box.addEventListener('drop', drop, false);
  
});

function handleDragStart(e) {
  this.style.opacity = "0.4";
  e.dataTransfer.setData('text/plain', e.target.id);
  setTimeout(() => {
    e.target.classList.add('hide');
  }, 0);
}

function dragEnter(e) {
  e.preventDefault();
  e.target.classList.add('over');
}

function dragOver(e) {
  e.preventDefault();
  e.target.classList.add('over');
}

function dragLeave(e) {
  this.style.opacity = "1";
  e.target.classList.remove('over');
}

function drop(e) {
  e.target.classList.remove('over');

    // get the draggable element
    const id = e.dataTransfer.getData('text/plain');
    const draggable = document.getElementById(id);

    // add it to the drop target
    e.target.appendChild(draggable);

    // display the draggable element
    draggable.classList.remove('hide');
}

