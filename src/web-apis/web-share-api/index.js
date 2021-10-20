const isSupported = () => {
  return navigator.share ? true : false;
};

export { isSupported };
