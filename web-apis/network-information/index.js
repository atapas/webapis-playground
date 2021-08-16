const isSupported = () => {
  // Write supported or not condition here. Eg,
  return (navigator.connection ||
    navigator.mozConnection ||
    navigator.webkitConnection) ? true : false;
}

const getNetworkInfo = () => {
  let connection =
    navigator.connection ||
    navigator.mozConnection ||
    navigator.webkitConnection;

  /*
  // Effective Type
  let effectiveType = connection.effectiveType;
  // rtt
  let rtt = connection.rtt;
  // downlink
  let downlink = connection.downlink;
  // downlinksMax
  let downlinksMax = connection.downlinksMax;
  // saveData
  let saveData = connection.saveData;
  // type
  let type = connection.type; 
  */

  return connection;
}

export { isSupported, getNetworkInfo };