export const hasSupport = (): boolean => {
  /**
   * Check if the `API` has support
   */

  return true;
}

function run(frameName: string | "parent") {
  let target;
  if (frameName !== "parent") {
    const checkIframe: HTMLIFrameElement | null = document.querySelector(frameName)
    if (checkIframe) {
      target = checkIframe.contentWindow
    }
  }
  target = window.parent
  return { target }
}


export default run;
