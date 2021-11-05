export const hasSupport = (): boolean => typeof FontFace === 'function';

async function run(font: string) {
  try {
    const getFont = new FontFace(
      font,
      `url(/fonts/${font}/${font}-Regular.ttf)`
    );

    await getFont.load();

    document.fonts.add(getFont);
  } catch (e) {
    console.error('Font loading Error:', e);
  }
}

export default run;
