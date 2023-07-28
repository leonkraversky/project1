// Get the battery level element
const batteryLevelElement = document.getElementById('batteryLevel');

// Initial battery charge level (between 0 and 100)
let batteryChargeLevel = 0;

// Function to update the battery charge level on the UI
function updateBatteryLevel() {
  batteryLevelElement.style.height = `${batteryChargeLevel}%`;
}

// Function to start charging the battery
function startCharging() {
  // Increase the battery charge level by 10% (you can adjust the value as needed)
  batteryChargeLevel += 10;

  // Ensure the charge level doesn't exceed 100%
  if (batteryChargeLevel > 100) {
    batteryChargeLevel = 100;
  }

  // Update the battery level on the UI
  updateBatteryLevel();
}

// Function to stop charging the battery
function stopCharging() {
  // Decrease the battery charge level by 5% (you can adjust the value as needed)
  batteryChargeLevel -= 5;

  // Ensure the charge level doesn't go below 0%
  if (batteryChargeLevel < 0) {
    batteryChargeLevel = 0;
  }

  // Update the battery level on the UI
  updateBatteryLevel();
}

