var x = document.getElementById("map");

function getCurrentLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(showPosition);
    clickCounterLocationLocal();
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}
function showPosition(position) {
  var location = position.coords.latitude + "," + position.coords.longitude;
  document.getElementById("map").innerHTML ="<p>Your coordinates are:</p>" +
    "<p>> Latitude: " + position.coords.latitude + "</p>" +
    "<p>> Longitude: " + position.coords.longitude + "</p>";
}
function clickCounterArtLocal() {
  if (typeof(Storage) !== "undefined") {
    if (localStorage.clickCountSession) {
      localStorage.clickCountSession = Number(localStorage.clickCountSession) + 1;
    } else {
      localStorage.clickCountSession = 1;
    }
    document.getElementById("artwork-viewed").innerHTML = "You have viewed " + localStorage.clickCountSession + " artwork(s) during this session.";
  } else {
    document.getElementById("artwork-viewed").innerHTML = "Thw browser does not support local storage";
  }
}
function clickCounterLocationLocal() {
  if (typeof(Storage) !== "undefined") {
    if (localStorage.clickCountLocal) {
      localStorage.clickCountLocal = Number(localStorage.clickCountLocal) + 1;
    } else {
      localStorage.clickCountLocal = 1;
    }
    document.getElementById("locations-viewed").innerHTML = "You have viewed your location " + localStorage.clickCountLocal + " time(s).";
  } else {
    document.getElementById("locations-viewed").innerHTML = "Thw browser does not support local storage";
  }
}
