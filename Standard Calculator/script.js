const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const inputAnswer = document.querySelector(".inputAnswer");
const equation = document.querySelector(".equation");
const clear = document.getElementById("clear");
const deleteInputs = document.getElementById("delete");
const historyArea = document.querySelector(".history");
const mainArea = document.querySelector(".calculator-container");

historyArea.style.display = "none";

function displayHistory() {
  if (historyArea.style.display === "none") {
    historyArea.style.display = "";
    mainArea.style.borderRadius = "10px 0px 0px 10px";
  } else {
    historyArea.style.display = "none";
    mainArea.style.marginLeft = "";
    mainArea.style.borderRadius = "10px";
  }
}

document
  .getElementById("showHistory")
  .addEventListener("click", displayHistory);

const history = [];

function addToHistory(entry) {
  history.push(entry);

  const historyList = document.querySelector(".history ul");
  const newHistoryItem = document.createElement("li");
  newHistoryItem.textContent = entry;
  historyList.appendChild(newHistoryItem);
}

let operand1 = null;
let operator = null;

function displayNumber(event) {
  const clickedNumber = event.target;
  const inputValue = inputAnswer.textContent;

  if (inputValue === "0") {
    inputAnswer.textContent = clickedNumber.textContent;
  } else {
    inputAnswer.textContent += clickedNumber.textContent;
  }
}

numbers.forEach((number) => {
  number.addEventListener("click", displayNumber);
});

function displayDoubleZero(event) {
  const clickedNumber = event.target;
  const inputValue = inputAnswer.textContent;

  if (inputValue > 0) {
    inputValue.textContent += clickedNumber.textContent;
  } else {
    inputAnswer.textContent = 0;
  }
}
document
  .getElementById("doubleZero")
  .addEventListener("click", displayDoubleZero);

function clearInput() {
  equation.style.visibility = "hidden";
  inputAnswer.textContent = "0";
  operand1 = null;
  operator = null;
  equation.textContent = "0";
}

clear.addEventListener("click", clearInput);

function deleteInput() {
  let inputValue = inputAnswer.textContent;
  if (inputValue.length > 1) {
    inputValue = inputValue.slice(0, -1);
    inputAnswer.textContent = inputValue;
  } else {
    inputAnswer.textContent = "0";
  }
}

deleteInputs.addEventListener("click", deleteInput);

function changeSign() {
  const currentText = inputAnswer.textContent;

  if (currentText !== "0") {
    if (currentText.startsWith("-")) {
      inputAnswer.textContent = currentText.slice(1);
    } else {
      inputAnswer.textContent = "-" + currentText;
    }
  }
}
document
  .getElementById("positiveNegative")
  .addEventListener("click", changeSign);

function performCalculation() {
  const inputValue = inputAnswer.textContent;

  if (operand1 !== null && operator !== null) {
    let result;

    switch (operator) {
      case "+":
        result = operand1 + parseFloat(inputValue);
        break;
      case "-":
        result = operand1 - parseFloat(inputValue);
        break;
      case "*":
        result = operand1 * parseFloat(inputValue);
        break;
      case "÷":
        result = operand1 / parseFloat(inputValue);
        break;
      case "%":
        result = (operand1 / 100) * parseFloat(inputValue);
        break;
      default:
        break;
    }

    if (result % 1 === 0) {
      inputAnswer.textContent = result.toFixed(0);
    } else {
      inputAnswer.textContent = result.toFixed(2);
    }

    equation.textContent = operand1 + " " + operator + " " + inputValue + " = ";

    const historyEntry = `${equation.textContent} ${inputAnswer.textContent}`;
    addToHistory(historyEntry);

    operand1 = null;
    operator = null;

    operand1 = null;
    operator = null;
  }
}
operators.forEach((operatorButton) => {
  operatorButton.addEventListener("click", () => {
    equation.style.visibility = "visible";
    operand1 = parseFloat(inputAnswer.textContent);
    operator = operatorButton.textContent;
    equation.textContent = operand1 + " " + operator;
    inputAnswer.textContent = "0";
  });
});
document
  .getElementById("calculate")
  .addEventListener("click", performCalculation);

function squareRootOf() {
  const inputValue = parseFloat(inputAnswer.textContent);

  if (inputValue > 0) {
    let result;
    equation.style.visibility = "visible";
    equation.textContent = "√ " + inputValue;
    result = Math.sqrt(inputValue);

    if (result % 1 === 0) {
      inputAnswer.textContent = result.toFixed(0);
    } else {
      inputAnswer.textContent = result.toFixed(2);
    }
  }
  const historyEntry = `${equation.textContent} = ${inputAnswer.textContent}`;
  addToHistory(historyEntry);
}
document.getElementById("squareRoot").addEventListener("click", squareRootOf);

function squareOf() {
  const inputValue = parseFloat(inputAnswer.textContent);

  if (inputValue >= 0) {
    let result;
    equation.style.visibility = "visible";
    equation.textContent = inputValue + "²";
    result = Math.pow(inputValue, 2);

    inputAnswer.textContent = result;
  }
  const historyEntry = `${equation.textContent} = ${inputAnswer.textContent}`;
  addToHistory(historyEntry);
}
document.getElementById("squared").addEventListener("click", squareOf);

function restartAll() {
  location.reload();
}
document.getElementById("allClear").addEventListener("click", restartAll);
