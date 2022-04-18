let sideScreen = document.querySelector("#side-screen");
let mainScreen = document.querySelector("#main-screen");
let clear = document.querySelector("#clear");
let delete2 = document.querySelector("#delete");
let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let seven = document.querySelector("#seven");
let eight = document.querySelector("#eight");
let nine = document.querySelector("#nine");
let divide = document.querySelector("#divide");
let multiply = document.querySelector("#multiply");
let subtract = document.querySelector("#subtract");
let add = document.querySelector("#add");
let decimal = document.querySelector("#decimal");
let equals = document.querySelector("#equals");
let firstVar = 0;
let secondVar = 0;
let currentOperation = "";

function buttonDigit(digit) {
  if (mainScreen.textContent === "0") {
    mainScreen.textContent = "";
  }
  mainScreen.textContent += digit;
}

function decimalDigit() {
  if (mainScreen.textContent.includes(".")) {
  } else {
    mainScreen.textContent += ".";
  }
}

function clearFunc() {
  firstVar = 0;
  secondVar = 0;
  mainScreen.textContent = "0";
  sideScreen.textContent = "";
}

//add.addEventListener("click", operatorFunc);

function deleteFunc() {
  if (mainScreen.textContent.length === 1) {
    mainScreen.textContent = "0";
  } else {
    mainScreen.textContent = mainScreen.textContent.slice(
      0,
      mainScreen.textContent.length - 1
    );
  }
}

function operatorFunc(operator) {
  if (currentOperation !== "") {
    firstVar = equalFunc(operator);
  }

  firstVar = mainScreen.textContent;
  currentOperation = operator;
  sideScreen.textContent = mainScreen.textContent;

  if (operator === "addFunc") {
    sideScreen.textContent += "+";
  } else if (operator === "subtractFunc") {
    sideScreen.textContent += "-";
  } else if (operator === "multiplyFunc") {
    sideScreen.textContent += "x";
  } else {
    sideScreen.textContent += "÷";
  }
  mainScreen.textContent = "0";
}

function equalFunc() {
  secondVar = mainScreen.textContent;
  sideScreen.textContent = sideScreen.textContent + secondVar + "=";
  firstVar = parseFloat(firstVar);
  secondVar = parseFloat(secondVar);
  if (currentOperation === "addFunc") {
    mainScreen.textContent = addFunc(firstVar, secondVar);
  } else if (currentOperation === "subtractFunc") {
    mainScreen.textContent = subtractFunc(firstVar, secondVar);
  } else if (currentOperation === "multiplyFunc") {
    mainScreen.textContent = multiplyFunc(firstVar, secondVar);
  } else {
    mainScreen.textContent = divideFunc(firstVar, secondVar);
  }

  currentOperation = "";
  firstVar = 0;
  secondVar = 0;
}

function addFunc(firstVar, secondVar) {
  return firstVar + secondVar;
}
function subtractFunc(firstVar, secondVar) {
  return firstVar - secondVar;
}
function multiplyFunc(firstVar, secondVar) {
  return firstVar * secondVar;
}
function divideFunc(firstVar, secondVar) {
  return firstVar / secondVar;
}

window.addEventListener("keydown", press);

let buttonsTest = document.querySelectorAll("#one");

console.log(buttonsTest);
//dataset DOMStringMap {key: '49' }

function press(e) {
  if (e.keyCode === 49) {
    buttonDigit(String.fromCharCode(e.keyCode));
  }
}

/*
    let number = mainScreen.textContent;
    console.log(number);
    number = number.slice(0,number.length -1);
    console.log(number);
    */

/*
    console.log(number);
    number = parseInt(number);
    console.log(number + number);
    */

/*

let number = "123.123";
console.log(number);
number = parseFloat(number);
console.log(number);
console.log(number + number);
*/
