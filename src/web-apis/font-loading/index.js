const isSupported = () => {
  return typeof FontFace === 'function';
};

export { isSupported };
