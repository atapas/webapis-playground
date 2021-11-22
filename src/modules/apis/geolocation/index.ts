export const hasSupport = (): boolean => Boolean('geolocation' in navigator);

const roundToTwo = (length: number) =>
  Math.round((length + Number.EPSILON) * 100) / 100;
const convertMetersToKilometers = (meter: number) => meter / 1000;

// eslint-disable-next-line no-undef
function onSuccess(position: GeolocationPosition) {
  const textLongitude = document.getElementById(
    'js-geolocation--longitude'
  ) as HTMLElement;
  const textLatitude = document.getElementById(
    'js-geolocation--latitude'
  ) as HTMLElement;
  const textAccuracy = document.getElementById(
    'js-geolocation--accuracy'
  ) as HTMLElement;
  const linkOpenGraph = document.getElementById(
    'js-geolocation--opengraph'
  ) as HTMLElement;

  textLongitude.innerText = `${position.coords.longitude}°`;
  textLatitude.innerText = `${position.coords.latitude}°`;
  textAccuracy.innerText = `${roundToTwo(
    convertMetersToKilometers(position.coords.accuracy)
  )}kms`;
  linkOpenGraph.setAttribute(
    'href',
    `https://www.openstreetmap.org/#map=18/${position.coords.latitude}/${position.coords.longitude}`
  );
}

function onError() {
  console.warn('Unable to retrieve your location');
}

function run() {
  if (hasSupport()) {
    navigator.geolocation.getCurrentPosition(onSuccess, onError, {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    });
  } else {
    console.warn('Geolocation is not supported by your browser');
  }
}

export default run;
