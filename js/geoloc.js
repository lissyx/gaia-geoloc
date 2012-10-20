var watchId = undefined;

function success(position) {
  var s = document.querySelector('#log');
  s.innerHTML += "************<br />";
  for (var i in position.coords) {
    var e = position.coords[i];
    if (typeof e == 'number') {
      s.innerHTML += i + ":" + position.coords[i] + "<br />";
    }
  }
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
