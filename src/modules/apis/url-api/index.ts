export const hasSupport = (): boolean => Boolean('URL' in window);

function run() {
  if (!hasSupport()) {
    return null;
  }

  const urlInput = document.getElementById('js-url--input') as HTMLInputElement;

  const checkIfURLContainsHTTP = urlInput?.value?.includes('https')
    ? urlInput?.value
    : `https://${urlInput?.value}`;

  const url = new URL(checkIfURLContainsHTTP);

  const urlHash = document.getElementById('js-url--hash') as HTMLSpanElement;
  const urlHost = document.getElementById('js-url--host') as HTMLSpanElement;
  const urlHostname = document.getElementById(
    'js-url--hostname'
  ) as HTMLSpanElement;
  const urlHref = document.getElementById('js-url--href') as HTMLSpanElement;
  const urlOrigin = document.getElementById(
    'js-url--origin'
  ) as HTMLSpanElement;
  const urlPathname = document.getElementById(
    'js-url--pathname'
  ) as HTMLSpanElement;
  const urlProtocol = document.getElementById(
    'js-url--protocol'
  ) as HTMLSpanElement;
  const urlSearch = document.getElementById(
    'js-url--search'
  ) as HTMLSpanElement;

  urlHash.textContent = url.hash;
  urlHost.textContent = url.host;
  urlHostname.textContent = url.hostname;
  urlHref.textContent = url.href;
  urlOrigin.textContent = url.origin;
  urlPathname.textContent = url.pathname;
  urlProtocol.textContent = url.protocol;
  urlSearch.textContent = url.search;

  // console.log();
}

export default run;
