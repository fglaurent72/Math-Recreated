
function clock() {
  let date = new Date();
  let time = date.toLocaleTimeString();
  document.getElementById('clock').innerHTML = time;
}
    setInterval(clock, 1000);


