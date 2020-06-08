// vanaf hier komt de code voor de pion gemaakt door Roy

var pion = document.querySelector("#pion");
var container = document.querySelector("#contentContainer");
var xcoord = document.getElementById("xcoord");
var ycoord = document.getElementById("ycoord");
var vakje = document.getElementById("vakje");

container.addEventListener("click", getClickPosition, false);

function getClickPosition(e) {
  var xPosition = e.clientX - ((pion.offsetWidth) / 2);
  var yPosition = e.clientY - ((pion.offsetHeight) / 2);

  var translate3dValue = "translate3d(" + xPosition + "px, " + yPosition + "px, 0)";
  pion.style.transform = translate3dValue;

  vwcall = (xPosition / window.innerWidth * 100);
  vhcall = (yPosition / window.innerHeight * 100);

  if (vwcall > -2.5 & vwcall < 7.4 & vhcall > -8 & vhcall < 10.5) {
    numbvakje = 1;
  } else if (vwcall > 8.6 & vwcall < 18.5 & vhcall > -8 & vhcall < 12.6) {
    numbvakje = 2;
  } else if (vwcall > 19.6 & vwcall < 29.4 & vhcall > -8 & vhcall < 12.6) {
    numbvakje = 3;
  } else if (vwcall > 30.5 & vwcall < 40.4 & vhcall > -8 & vhcall < 12.6) {
    numbvakje = 4;
  } else if (vwcall > 41.5 & vwcall < 51.3 & vhcall > -8 & vhcall < 12.6) {
    numbvakje = 5;
  } else if (vwcall > 52.5 & vwcall < 62.3 & vhcall > -8 & vhcall < 12.6) {
    numbvakje = 6;
  } else if (vwcall > 63.6 & vwcall < 73.9 & vhcall > -8 & vhcall < 12.6) {
    numbvakje = 7;
  } else if (vwcall > 74.6 & vwcall < 84 & vhcall > -8 & vhcall < 12.6) {
    numbvakje = 8;
  } else if (vwcall > 85.5 & vwcall < 95.4 & vhcall > -8 & vhcall < 12.6) {
    numbvakje = 9;
  } else if (vwcall > -2.5 & vwcall < 7.4 & vhcall > 11.2 & vhcall < 33.5) {
    numbvakje = 10;
  } else if (vwcall > 8.6 & vwcall < 18.5 & vhcall > 11.2 & vhcall < 33.5) {
    numbvakje = 11;
  } else if (vwcall > 19.6 & vwcall < 29.4 & vhcall > 11.2 & vhcall < 33.5) {
    numbvakje = 12;
  } else if (vwcall > 30.5 & vwcall < 40.4 & vhcall > 11.2 & vhcall < 33.5) {
    numbvakje = 13;
  } else if (vwcall > 41.5 & vwcall < 51.3 & vhcall > 11.2 & vhcall < 33.5) {
    numbvakje = 14;
  } else if (vwcall > 52.5 & vwcall < 62.3 & vhcall > 11.2 & vhcall < 33.5) {
    numbvakje = 15;
  } else if (vwcall > 63.6 & vwcall < 73.9 & vhcall > 11.2 & vhcall < 33.5) {
    numbvakje = 16;
  } else if (vwcall > 74.6 & vwcall < 84 & vhcall > 11.2 & vhcall < 33.5) {
    numbvakje = 17;
  } else if (vwcall > 85.5 & vwcall < 95.4 & vhcall > 11.2 & vhcall < 33.5) {
    numbvakje = 18;
  } else if (vwcall > -2.5 & vwcall < 7.4 & vhcall > 35.7 & vhcall < 56) {
    numbvakje = 19;
  } else if (vwcall > 8.6 & vwcall < 18.5 & vhcall > 35.7 & vhcall < 56) {
    numbvakje = 20;
  } else if (vwcall > 19.6 & vwcall < 29.4 & vhcall > 35.7 & vhcall < 56) {
    numbvakje = 21;
  } else if (vwcall > 30.5 & vwcall < 40.4 & vhcall > 35.7 & vhcall < 56) {
    numbvakje = 22;
  } else if (vwcall > 41.5 & vwcall < 51.3 & vhcall > 35.7 & vhcall < 56) {
    numbvakje = 23;
  } else if (vwcall > 52.5 & vwcall < 62.3 & vhcall > 35.7 & vhcall < 56) {
    numbvakje = 24;
  } else if (vwcall > 63.6 & vwcall < 73.9 & vhcall > 35.7 & vhcall < 56) {
    numbvakje = 25;
  } else if (vwcall > 74.6 & vwcall < 84 & vhcall > 35.7 & vhcall < 56) {
    numbvakje = 26;
  } else if (vwcall > 85.5 & vwcall < 95.4 & vhcall > 35.7 & vhcall < 56) {
    numbvakje = 27;
  } else



  xcoord.innerHTML = "X coordinaten: " + vwcall;
  ycoord.innerHTML = "Y coordinaten: " + vhcall;
  vakje.innerHTML = "Vakje: " + numbvakje;

  // Store
  localStorage.doelVakje = 5;
  // Retrieve
  if (localStorage.doelVakje == numbvakje) {
    setTimeout(function(){ alert("Je staat op het juiste vakje."); }, 500);
  }
}











// vanaf hier komt de code voor de dobbelsteen gemaakt door Canisha

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
