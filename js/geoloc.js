var watchId = undefined;

function success(position) {
  var s = document.querySelector('#log');
  s.innerHTML += "Latitude: " + position.coords.latitude + "; Longitude: " + position.coords.longitude + "<br />";
}

function error(msg) {
  var s = document.querySelector('#log');
  s.innerHTML += msg + "<br />";
}

function startGeoloc() {
  error("Starting watchPosition");
  if (navigator.geolocation) {
    watchId = navigator.geolocation.watchPosition(success, error);
  } else {
    error('not supported');
  }
}

function stopGeoloc() {
  if (watchId != undefined) {
    error("Stopping watchPosition");
    navigator.geolocation.clearWatch(watchId);
  }
}

function clearGeoloc() {
  var s = document.querySelector('#log');
  s.innerHTML = "";
}
