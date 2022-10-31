export const hasSupport = (): boolean => {
  /**
   * Check if the `API` has support
   */

  return true;
};

function run() {
  const encodeText = () => {
    const stringInput = document.getElementById(
      'tea--string'
    ) as HTMLInputElement;

    let encoder = new TextEncoder();

    let uint8Array = encoder.encode(stringInput.value);

    const encodedText = document.getElementById(
      'tea--encodedText'
    ) as HTMLSpanElement;
    encodedText.textContent = uint8Array.join(',');
  };

  const decodeText = () => {
    const numberListInput = document.getElementById(
      'tea--numberList'
    ) as HTMLInputElement;

    let uint8Array = new Uint8Array(
      numberListInput.value.split(',').map(str => Number(str))
    );

    const decodedText = document.getElementById(
      'tea--decodedText'
    ) as HTMLSpanElement;
    decodedText.textContent = new TextDecoder().decode(uint8Array);
  };

  return { encodeText, decodeText };
}

export default run;
