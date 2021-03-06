const symbols = document.querySelectorAll('.digit');
const calInput = document.getElementById('calculator-input');
calInput.textContent = 0;

//Stores typed numbers
let firstNumbers = [];
let secondNumbers = [];
// Stores sign + - or / *
let arithmeticSign = [];
//Result
let result;
//Calls on mouse click
const mouseClick = symbols.forEach(item => {
  item.addEventListener('click', event => {
    calculator(event.target.innerText);
  });
});
//Calls on keydown.
const keydownPress = document.addEventListener('keydown', (event) => {
  calculator(event.key);
});
// Function manage calculator.
function calculator(num) {
  if (firstNumbers.length == 0 && arithmeticSign.length == 0) {
    calInput.textContent = '';
  }
  if (num == '0' || num == '1' || num == '2' || num == '3' || num == '4' || num == '5' || num == '6' || num == '7' || num == '8' || num == '9' || num == '.') {
    setNumber(num);
  } else if (num == '-' || num == '+' || num == '/' || num == '*' || num == "%") {
    setArithmeticSign(num);
  } else if (num == 'CE') {
    reset();
  } else if (num === '=' || num === "Enter") {

    if (firstNumbers.length !== 0 && secondNumbers.length !== 0) {
      result = calculation()
      firstNumbers = [];
      secondNumbers = [];
      firstNumbers.push(result);
      calInput.textContent = result;
    }
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
  if (arithmeticSign.length === 0 && firstNumbers.length === 0) {
    calInput.textContent = 0;
    return console.log('Begin with number');
  } else if (arithmeticSign.length === 0) {
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

  if (arithmeticSign[0] === '-') {
    return parseFloat(firstNumbers.join('')) - parseFloat(secondNumbers.join(''));
  } else if (arithmeticSign[0] === '+') {
    return parseFloat(firstNumbers.join('')) + parseFloat(secondNumbers.join(''));
  } else if (arithmeticSign[0] === '/') {
    return parseFloat(firstNumbers.join('')) / parseFloat(secondNumbers.join(''));
  } else if (arithmeticSign[0] === '*') {
    return parseFloat(firstNumbers.join('')) * parseFloat(secondNumbers.join(''));
  } else if (arithmeticSign[0] === '%') {
    return parseFloat(firstNumbers.join('')) * parseFloat(secondNumbers.join(''));
  }
}
//Clean all variables, and set 0.
function reset() {
  calInput.textContent = 0;
  firstNumbers = [];
  secondNumbers = [];
  arithmeticSign = [];
}
