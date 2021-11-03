import { FormEvent } from 'react';

export const hasSupport = (): boolean => (window.ResizeObserver ? true : false);

function init() {
  if (hasSupport()) {
    const content = document.getElementById(
      'js-resize--content'
    ) as HTMLElement;
    let resizeObserver = new ResizeObserver(() => {});

    resizeObserver.observe(content);
  }

  return 'Not Supported';
}

function resize(event: FormEvent<HTMLInputElement>) {
  const target = event.target as HTMLInputElement;

  const content = document.getElementById('js-resize--content') as HTMLElement;
  content.style.width = `${target.value}%`;

  const text = document.getElementById('js-resize--value') as HTMLElement;
  text.innerText = `${target.value}%`;
}

const run = {
  init,
  resize,
};

export default run;
