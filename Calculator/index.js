const symbol = document.querySelectorAll('.digit');
const calInput = document.getElementById('calculator-input');
const defaultInput = document.getElementById('calculator-input').textContent = "0";
//Stores typed numbers
let firstNumbers = [];
let secondNumbers = [];
// Stores sign + - or / *
let arithmeticSign = [];
//Calls on mouse click
const mouseClick = symbol.forEach(item => {
  item.addEventListener('click', event => {

    const num = event.target.innerText;
    calculator(num);
  });
});
//Calls on keydown.
const keydownPress = document.addEventListener('keydown', (event) => {

  const num = event.key;
  calculator(num);
});
// Function manage calculator.
function calculator(num) {
  if (num == '0' || num == '1' || num == '2' || num == '3' || num == '4' || num == '5' || num == '6' || num == '7' || num == '8' || num == '9' || num == '.') {
    setNumber(num);
  } else if (num == '-' || num == '+' || num == '/' || num == '*') {
    setArithmeticSign(num);
  } else if (num == 'CE') {
    reset();
  } else if (num === '=') {
    calculation();
    calInput.textContent = calculation();
  } else if (num == '(' || num == ')') {
    firstNumbers.push(num);
  }
}
//Set number.
function setNumber(num) {
  if (arithmeticSign.length === 0 && firstNumbers.length <= 7) { //Accepts only 8 digits on the first set of numbers.
    firstNumbers.push(num);
    calInput.append(num);
  } else if (arithmeticSign.length === 1 && secondNumbers.length <= 7) {
    secondNumbers.push(num);
    calInput.append(textContent = num);
  }
}
// Set arithmetic sign.
function setArithmeticSign(num) {
  if (arithmeticSign.length === 0) {
    arithmeticSign.push(num);
    calInput.append(textContent = arithmeticSign[0]);
  } else if (arithmeticSign.length === 1) {
    arithmeticSign.pop();
    arithmeticSign.push(num);
    calInput.append(textContent = arithmeticSign[0]);
  }
}
//Function calculation.
function calculation() {
  let firstSetNumbers = parseInt(firstNumbers.join('')); //Convert array to integer numbers.
  let secondSetNumbers = parseInt(secondNumbers.join('')); //Convert array to integer numbers.

  if (arithmeticSign[0] === '-') {
    return firstSetNumbers - secondSetNumbers;
  } else if (arithmeticSign[0] === '+') {
    return firstSetNumbers + secondSetNumbers;
  } else if (arithmeticSign[0] === '/') {
    return firstSetNumbers / secondSetNumbers;
  } else if (arithmeticSign[0] === '*') {
    return firstSetNumbers * secondSetNumbers;
  }
}
//Clean all variables, and set 0.
function reset() {
  calInput.textContent = defaultInput;
  firstNumbers = [];
  secondNumbers = [];
  arithmeticSign = [];
}
