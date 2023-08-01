// Get the battery level element
const batteryFill = document.getElementById('batteryFill');
const batteryLevelText = document.getElementById('batteryLevel');

// Initial battery charge level (between 0 and 100)
let chargeLevel = 0;
let chargingInterval;
let dischargingInterval;

// Function to update the battery charge level on the UI
function updateBatteryFill() {
  batteryFill.style.height = chargeLevel + '%';
  batteryLevelText.textContent = chargeLevel + '%';
}

function startCharging() {
  clearInterval(dischargingInterval);
  chargingInterval = setInterval(() => {
    if (chargeLevel < 100) {
      chargeLevel += 5;
      updateBatteryFill();
    } else {
      clearInterval(chargingInterval);
    }
  }, 10000); // Charging curve with about 10 sec to charge 50%
}

function stopCharging() {
  clearInterval(chargingInterval);
}

function startDischarging() {
  clearInterval(chargingInterval);
  dischargingInterval = setInterval(() => {
    if (chargeLevel > 0) {
      chargeLevel -= 5;
      updateBatteryFill();
    } else {
      clearInterval(dischargingInterval);
    }
  }, 120000); // Discharging curve with about 20 sec to discharge 50%
}

function stopDischarging() {
  clearInterval(dischargingInterval);
}

function autoCharge() {
  startCharging();
  setTimeout(stopCharging, 30000); // AutoCharge for 30 sec (charge to 100%)
}

function autoDischarge() {
  startDischarging();
  setTimeout(stopDischarging, 30000); // AutoDischarge for 30 sec (discharge to 0%)
}

function updateBatteryFill() {
  batteryFill.style.height = chargeLevel + '%';
  batteryLevelText.textContent = chargeLevel + '%';
}