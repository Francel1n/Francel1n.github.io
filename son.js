var son = document.getElementById("myVideo");

function enableMute() {
  son.muted = true;
}

function disableMute() {
  son.muted = false;
}

function checkMute() {
  alert(son.muted);
}
