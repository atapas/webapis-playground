import { FormEvent } from 'react';

export const hasSupport = (): boolean => Boolean('clipboard' in navigator);

async function onCopy(event: FormEvent<HTMLButtonElement>) {
  event.preventDefault();

  const input = document.getElementById('js-input--copy') as HTMLInputElement;

  try {
    let value = input.value;

    if (hasSupport()) {
      await navigator.clipboard.writeText(value);
      console.log(`The text '${value}' is in the Clipboard Now!`);
    } else {
      console.log(`Clipboard API is Not Supported`);
    }
  } catch (err) {
    console.error(`Failed to copy: ${err}`);
  }
}

async function onPaste(event: FormEvent<HTMLButtonElement>) {
  event.preventDefault();

  const input = document.getElementById('js-input--paste') as HTMLInputElement;

  try {
    if (navigator.clipboard) {
      const fromClipboard = await navigator.clipboard.readText();

      input.value = fromClipboard;
      console.log(`The text '${fromClipboard}' is pasted successfully!`);
    } else {
      console.log(`Clipboard API is Not Supported`);
    }
  } catch (err) {
    console.error(`Failed to paste: ${err}`);
  }
}

const run = {
  onCopy,
  onPaste,
};

export default run;
