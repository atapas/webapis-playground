/**
 * A function to check if the client supports/allows geolocation API support
 * @returns boolean True if the client allows, else false
 */
const isSupported = () => (navigator.geolocation ? true : false);

/**
 * A function that get's the coordinates of your current geo location
 * and prints on the UI. If Geolocation API is not supported/allowed
 * this function shows a valid error message.
 */
const geoFindMe = () => {
  const status = document.querySelector('#error-text');
  const mapLink = document.querySelector('#map-link');

  mapLink.href = '';
  mapLink.textContent = '';

  const success = position => {
      const latitude = position.coords.latitude,
        longitude = position.coords.longitude;

      status.textContent = '';
      mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
      mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
    },
    error = () => (status.textContent = 'Unable to retrieve your location');

  if (isSupported()) {
    status.textContent = 'Locating...';
    navigator.geolocation.getCurrentPosition(success, error);
  } else {
    status.textContent = 'Geolocation is not supported by your browser';
  }
};

export { isSupported, geoFindMe };
