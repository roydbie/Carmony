var aantalVakjes = 0;
var string = "";

function rollDice() {
  const dice = document.getElementById("die-list");
  toggleClasses(dice);
  dice.dataset.roll = getRandomNumber(1,6);
  aantalVakjes = dice.dataset.roll;
  string = "U mag " + aantalVakjes + " vakjes vooruit!";
  document.getElementById("vakjes").innerHTML = string;
}

function toggleClasses(dice) {
  dice.classList.toggle("odd-roll");
  dice.classList.toggle("even-roll");
}

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.getElementById("dobbelsteen").addEventListener("click", rollDice);
