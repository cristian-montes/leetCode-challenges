const boxOne = document.getElementById("1");
const boxTwo = document.getElementById("2");
const boxThree = document.getElementById("3");
const boxFour = document.getElementById("4");
const boxFive = document.getElementById("5");
const boxSix = document.getElementById("6");
const boxSeven = document.getElementById("7");
const boxEight = document.getElementById("8");
const boxNine = document.getElementById("9");


const button = document.getElementById("increment");
let counter = 0;

function incrementeCounteEverySecond(){
  counter++;
  boxOne.innerText = counter;
  boxTwo.innerText = counter;
  boxThree.innerText = counter;
  boxFour.innerText = counter;
  boxFive.innerText = counter;
  boxSix.innerText = counter;
  boxSeven.innerText = counter;
  boxEight.innerText = counter;
  boxNine.innerText = counter;
}


button.addEventListener('click', function(){
  event.preventDefault();
  
  setInterval(incrementeCounteEverySecond, 1000);
})
