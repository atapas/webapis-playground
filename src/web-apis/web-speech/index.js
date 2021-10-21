const isSupported = () => {
  return window.SpeechRecognition || window.webkitSpeechRecognition
    ? true
    : false;
};

export { isSupported };
