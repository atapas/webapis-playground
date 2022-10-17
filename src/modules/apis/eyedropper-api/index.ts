export const hasSupport = (): boolean => Boolean('EyeDropper' in window);

function run() {
  const colorContainer = document.getElementById(
    'color-container'
  ) as HTMLDivElement;
  const colorDiv = document.getElementById('color') as HTMLDivElement;
  const colorHexCode = document.getElementById(
    'color-hex-code'
  ) as HTMLParagraphElement;

  if (!window.EyeDropper) {
    colorContainer.textContent =
      'Your browser does not support the EyeDropper API 😔';
    return;
  }

  const eyeDropper = new window.EyeDropper();

  eyeDropper
    .open()
    .then((result: { sRGBHex: string }) => {
      colorHexCode.textContent = result.sRGBHex;
      colorDiv.style.backgroundColor = result.sRGBHex;
    })
    .catch((e: any) => {
      console.log(e);
    });
}

export default run;
