const isSupported = () => {
  // Write supported or not condition here. Eg,
  return navigator.vibrate ? true : false;
};

const manageVibration = type => {
  console.log(`vibration with command ${type}`);
  if (navigator.vibrate) {
    type === 'start' ? navigator.vibrate(2000) : navigator.vibrate(0);
  } else {
    console.log(`The Vibration API is not supported`);
  }
};

export { isSupported, manageVibration };
