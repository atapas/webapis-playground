
let charging, level, chargingTime, dischargingTime;

if (navigator.getBattery) {
    navigator.getBattery().then(function (battery) {
      function updateAllBatteryInfo() {
        updateLevelInfo()
        updateChargeInfo()
        updateChargingInfo()
        updateDischargingInfo()
      }
      updateAllBatteryInfo()

      battery.addEventListener("chargingchange", function () {
        updateChargeInfo()
      })
      function updateChargeInfo() {
        
        charging = battery.charging;
        let chargeMessage = battery.charging ? "Yes" : "No";
        console.log("Battery charging? " + chargeMessage)

        let batteryElem = document.getElementById('battery-status-id');
        let batteryChargingElem = document.getElementById('battery-charging-status-id');
        if (charging) {
            batteryChargingElem.style.display = 'block';
            batteryElem.style.display = 'none';
        } else {
            batteryChargingElem.style.display = 'none';
            batteryElem.style.display = 'block';
        }
        document.getElementById('battery-status-charging').innerHTML = `<b>${chargeMessage}</b>`;
      }

      battery.addEventListener("levelchange", function () {
        updateLevelInfo()
      })

      function updateLevelInfo() {
        console.log("Battery level: " + battery.level * 100 + "%")
        level = battery.level * 100;
        document.getElementById('battery-status-level').innerHTML = `<b style="color: ${getColor()}">${level}</b>%`;
      }

      battery.addEventListener("chargingtimechange", function () {
        updateChargingInfo()
      })

      function updateChargingInfo() {
        console.log(
          "Battery charging time: " + battery.chargingTime + " seconds"
        )
        chargingTime = battery.chargingTime;
        document.getElementById('battery-status-charge-time').innerHTML = `<b>${chargingTime}</b> seconds`;
      }

      battery.addEventListener("dischargingtimechange", function () {
        updateDischargingInfo()
      })

      function updateDischargingInfo() {
        console.log(
          "Battery discharging time: " + battery.dischargingTime + " seconds"
        )
        dischargingTime = battery.dischargingTime;
        document.getElementById('battery-status-discharge-time').innerHTML = `<b>${dischargingTime}</b> seconds`;
      }
    })
  } else {
    console.log(`This API is Not Supported`);
  }

  const getColor = () => {
    let color = "#FFFFFF"

    if (level >= 0 && level <= 20) {
      color = "#FF0000"
    } else if (level > 20 && level <= 60) {
      color = "#FFBF00"
    }
    if (level > 60 && level <= 100) {
      color = "#008000"
    }
    return color
  }