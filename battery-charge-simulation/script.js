// Get the battery level element
const batteryFill = document.getElementById('batteryFill');

// Initial battery charge level (between 0 and 100)
let chargeLevel = 0;
let chargingInterval;
let dischargingInterval;

// Function to update the battery charge level on the UI
function updateBatteryFill() {
  batteryFill.style.height = chargeLevel + '%';
}

function startCharging() {
  clearInterval(dischargingInterval);
  chargingInterval = setInterval(() => {
    if (chargeLevel < 100) {
      chargeLevel += 10;
      updateBatteryFill();
    } else {
      clearInterval(chargingInterval);
    }
  }, 60000); // Charging curve with about 1 minute to charge 50% (10% per 6 seconds)
}

function stopCharging() {
  clearInterval(chargingInterval);
}

function startDischarging() {
  clearInterval(chargingInterval);
  dischargingInterval = setInterval(() => {
    if (chargeLevel > 0) {
      chargeLevel -= 10;
      updateBatteryFill();
    } else {
      clearInterval(dischargingInterval);
    }
  }, 120000); // Discharging curve with about 2 minutes to discharge 50% (10% per 12 seconds)
}

function stopDischarging() {
  clearInterval(dischargingInterval);
}

function autoCharge() {
  startCharging();
  setTimeout(stopCharging, 180000); // AutoCharge for 3 minutes (charge to 100%)
}

function autoDischarge() {
  startDischarging();
  setTimeout(stopDischarging, 180000); // AutoDischarge for 3 minutes (discharge to 0%)
}