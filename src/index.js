window.location.replace('/drop');

/*
const makeCountdown = require('countdown');
const leftPad = require('left-pad');

console.log(require('countdown'))

// Midnight on 7/13/2018
const DROP_DATE = 1531454400000;

function tick() {
  const { days, hours, minutes, seconds, value } = makeCountdown(DROP_DATE);
  const countdownEl = document.getElementById('countdown');
  countdownEl.innerHTML =
    `${leftPad(minutes, 2, '0')}:${leftPad(seconds, 2, '0')}`;

  // Value will be positive if time is past
  if (value > 0) {
    window.location.replace('/drop');
  }
}

tick();

setInterval(tick, 1000);
*/