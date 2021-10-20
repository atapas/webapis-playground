const isSupported = () => {
  return window.webkitSpeechRecognition
    ? true
    : false;
};

export { isSupported };
