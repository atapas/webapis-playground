import { DragEvent } from 'react';

export const hasSupport = (): boolean => true;

function onDrag(event: DragEvent) {
  const target = event.target as HTMLElement;

  event.dataTransfer.setData('text', target.id);

  if (target) {
    target.style.background = '#A855F7';
  }
}

function onDragOver(event: DragEvent) {
  event.preventDefault();

  const target = event.target as HTMLElement;

  if (target) {
    target.style.borderColor = '#3B82F6';
  }
}

function onDrop(event: DragEvent) {
  event.preventDefault();

  const target = event.target as HTMLElement;
  const data = event.dataTransfer.getData('text');
  const box = document.getElementById(data) as HTMLElement;

  target.appendChild(box);

  if (box) {
    box.style.background = '#3B82F6';
  }
}

function onDragEnter(event: DragEvent) {
  event.preventDefault();

  const target = event.target as HTMLElement;
  const data = event.dataTransfer.getData('text');
  const box = document.getElementById(data) as HTMLElement;

  target.style.borderColor = '#3B82F6';

  if (box) {
    box.style.background = '#3B82F6';
  }
}

function onDragLeave(event: DragEvent) {
  event.preventDefault();

  const target = event.target as HTMLElement;

  if (target) {
    target.style.borderColor = '#DBEAFE';
  }
}

const run = {
  onDrag,
  onDragOver,
  onDragEnter,
  onDragLeave,
  onDrop,
};

export default run;
