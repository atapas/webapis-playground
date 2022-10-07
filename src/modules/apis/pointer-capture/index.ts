import React from 'react';
export const hasSupport = (): boolean => Boolean('PointerEvent' in window);

let flag = false;
function onPointerMove(event: React.PointerEvent<Element>) {
  const timeline = document.querySelector('#red-timeline') as HTMLElement;
  if (flag) {
    const rect = timeline.getBoundingClientRect();
    timeline.style.width = `${event.clientX - rect.left}px`;
    const childTag = document.querySelector('#dot') as HTMLElement;
    childTag.style.left = `${event.clientX - rect.left - 20}px`;
  }
}

function onPointerDown(event: React.PointerEvent<Element>, isCapture: boolean) {
  const timeline = document.querySelector('#red-timeline') as HTMLElement;
  if (isCapture) {
    timeline.setPointerCapture(event.pointerId);
  }
  flag = true;
  onPointerMove(event);
}

function onPointerUp(event: React.PointerEvent<Element>, isCapture: boolean) {
  const timeline = document.querySelector('#red-timeline') as HTMLElement;
  if (isCapture) {
    timeline.releasePointerCapture(event.pointerId);
  }
  flag = false;
}

const run = {
  onPointerDown,
  onPointerUp,
  onPointerMove,
};

export default run;
