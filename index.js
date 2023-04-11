// Function to display a custom prompt for accessing the user's location
function promptForLocation() {
  const message =
    "This website would like to access your location. Please click 'Allow' to proceed.";
  if (confirm(message)) {
    // User clicked 'Allow', proceed with geolocation request
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  } else {
    // User clicked 'Deny', handle as desired
    // ...
  }
}

// Function to handle successful geolocation request
function successCallback(position) {
  // Use the position object to access latitude and longitude
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  // ...
}

// Function to handle unsuccessful geolocation request
function errorCallback(error) {
  // Handle error as desired
  // ...
}

// Call the promptForLocation function to initiate the geolocation request
promptForLocation();
