// Get the battery level element
const batteryFill = document.getElementById('batteryFill');
const batteryLevelText = document.getElementById('batteryLevel');
const batteryStatusText = document.getElementById('batteryStatus');

// Initial battery charge level (between 0 and 100)
let chargeLevel = 0;
let chargingInterval;
let dischargingInterval;
let autoChargingTimeout;
let autoDischargingTimeout;

// Function to update the battery charge level on the UI
function updateBatteryFill() {
  batteryFill.style.height = chargeLevel + '%';
  batteryLevelText.textContent = chargeLevel + '%';
}

function startCharging() {
  clearInterval(dischargingInterval);
  clearInterval(autoDischargingTimeout);
  chargingInterval = setInterval(() => {
    if (chargeLevel < 100) {
      chargeLevel += 2;
      updateBatteryFill();
      batteryStatusText.textContent = 'Charging';
    } else {
      clearInterval(chargingInterval);
      batteryStatusText.textContent = 'Stopped';
    }
  }, 10000); // Charging curve with about 10 sec to charge 50%
}

function stopCharging() {
  clearInterval(chargingInterval);
  batteryStatusText.textContent = 'Stopped';
}

function startDischarging() {
  clearInterval(chargingInterval);
  clearInterval(autoChargingTimeout);
  dischargingInterval = setInterval(() => {
    if (chargeLevel > 0) {
      chargeLevel -= 2;
      updateBatteryFill();
      batteryStatusText.textContent = 'Discharging';
    } else {
      clearInterval(dischargingInterval);
      batteryStatusText.textContent = 'Stopped';
    }
  }, 20000); // Discharging curve with about 20 sec to discharge 50%
}

function stopDischarging() {
  clearInterval(dischargingInterval);
  batteryStatusText.textContent = 'Stopped';
}

function autoCharge() {
  startCharging();
  autoChargingTimeout = setTimeout(stopCharging, 30000); // AutoCharge for 30sec (charge to 100%)
  batteryStatusText.textContent = 'Auto-Charging';
}

function autoDischarge() {
  startDischarging();
  autoDischargingTimeout = setTimeout(stopDischarging, 30000); // AutoDischarge for 30sec (discharge to 0%)
  batteryStatusText.textContent = 'Auto-Discharging';
}

function updateBatteryFill() {
  batteryFill.style.height = chargeLevel + '%';
  batteryLevelText.textContent = chargeLevel + '%';
}