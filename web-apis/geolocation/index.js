/**
 * A function to check if the client supports/allows geolocation API support
 * @returns boolean True if the client allows, else false
 */
const isSupported = () => (navigator.geolocation ? true : false);

const GEOLOCATION_OPTIONS = {
  // indicates the application would like to receive the best possible results
  enableHighAccuracy: true,

  // amount of time before the error callback is invoked, if 0 it will never invoke.
  timeout: 5000,

  // maximum cached position age. If set to 0, it means that the device cannot use a cached position and must attempt to retrieve the real current position.
  maximumAge: 0,
};

const roundToTwo = length => Math.round((length + Number.EPSILON) * 100) / 100;
const convertMetersToKilometers = meter => meter / 1000;

/**
 * A function that get's the coordinates of your current geo location
 * and prints on the UI. If Geolocation API is not supported/allowed
 * this function shows a valid error message.
 */
const geoFindMe = () => {
  const status = document.querySelector('#error-text'),
    mapLink = document.querySelector('#map-link'),
    mapAccuracy = document.querySelector('#map-accuracy');

  mapLink.href = '';
  mapLink.textContent = '';
  mapAccuracy.textContent = '';

  const success = position => {
      const latitude = position.coords.latitude,
        longitude = position.coords.longitude,
        accuracy = position.coords.accuracy;

      status.textContent = '';
      mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
      mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
      mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
      mapAccuracy.textContent = `Your location is accurate upto ${roundToTwo(
        convertMetersToKilometers(accuracy)
      )} kms`;
    },
    error = () => (status.textContent = 'Unable to retrieve your location');

  if (isSupported()) {
    status.textContent = 'Locating...';
    navigator.geolocation.getCurrentPosition(
      success,
      error,
      GEOLOCATION_OPTIONS
    );
  } else {
    status.textContent = 'Geolocation is not supported by your browser';
  }
};

export { isSupported, geoFindMe };
