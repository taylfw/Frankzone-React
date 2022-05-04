let form = document.getElementById("form");
let input = document.getElementById("userInput");

function timer() {
  let seconds = 0;

  changeColor("greenyellow");
  setInterval(function () {
    document.getElementById("timer").innerHTML = "+ $" + seconds;
    seconds += moneyPerSec(document.getElementById("userInput").value);
  }, 1000);
}

function moneyPerSec(hourlyWage) {
  return hourlyWage / 3600;
}

function changeColor(newColor) {
  var elem = document.getElementById("timer");
  elem.style.color = newColor;
}
