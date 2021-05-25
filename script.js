function loadVars() {
  window.numberOne = "";
  window.numberTwo = "";
  window.returnVal = 0;
  window.switchVar = false;
  window.globaloperator = "";
  window.display = document.querySelector("#display");
}
//clears up the screen and reset all global vars
function clr() {
  resetVars();
  display.innerHTML = "0";
  switchVar = false;
}
// fn press : returns complete number for calcs
function press(keyval) {
  display.innerHTML =
    switchVar == false ? (numberOne += keyval) : (numberTwo += keyval);
}
// this fn simple sets operation + - / *
function setOP(operator) {
  switchVar = true;
  console.log(operator);
  globaloperator = operator;
}

//fn calculate does the arithmitic operations and prints answer on screen
function calculate() {
  var operator = globaloperator;
  if (operator === "") {
    return;
  }
  var number1 = parseFloat(numberOne);

  var number2 = parseFloat(numberTwo);

  // Doing operations Here
  if (operator == "/") {
    returnVal = number1 / number2;
  } else if (operator == "*") {
    returnVal = number1 * number2;
  } else if (operator == "-") {
    returnVal = number1 - number2;
  } else if (operator == "+") {
    returnVal = number1 + number2;
  }

  // Checking here if the number is a decimal place or not
  if (returnVal % 1 != 0) {
    returnVal = returnVal.toFixed(2);
  }

  // Chaining operations so that we can do keep doing calculations
  display.innerHTML = returnVal;
  numberOne = returnVal;
  numberTwo = "";
  returnVal = 0;
  globaloperator = "";
}
//fn resets global vars
function resetVars() {
  numberOne = "";
  numberTwo = "";
}
