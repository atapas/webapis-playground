function getNetworkInfo() {
  document.getElementById("network-info-main").style.display = "block";

  let connection =
    navigator.connection ||
    navigator.mozConnection ||
    navigator.webkitConnection;

  if (connection) {
    document.getElementById("effectiveType").innerHTML =
      `<b>${connection.effectiveType}</b>`;
    document.getElementById("rtt").innerHTML = `<b>${connection.rtt}</b>`;
    document.getElementById("downLink").innerHTML =
      `<b>${connection.downlink}</b>`;
    document.getElementById("downLinkMax").innerHTML =
      `<b>${connection.downlinkMax}</b>`;
    document.getElementById("savedata").innerHTML =
      `<b>${connection.saveData}</b>`;
    document.getElementById("type").innerHTML = `<b>${connection.type}</b>`;
  } else {
    console.log("The feature is not available");
  }
}
