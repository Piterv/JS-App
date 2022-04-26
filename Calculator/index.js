const para = document.querySelectorAll('.digit');
const calInput = document.getElementById('calculator-input');

//Stores typed numbers
var firstNumbers = [];
var secondNumbers = [];
// Stores sign + - or / *
var arithmeticSign = [];
// Set all to the begining
var reset;
// Stores equation result.
let result;
//

//Calls on mouse click
const mouseClick = para.forEach(item => {
  item.addEventListener('click', event => {
    const num = event.target.innerText;
    if (num == '0' || num == '1' || num == '2' || num == '3' || num == '4' || num == '5' || num == '6' || num == '7' || num == '8' || num == '9' || num == '.') {
      if (arithmeticSign.length === 0) {
        firstNumbers.push(event.target.innerText);
        calInput.textContent = parseInt(firstNumbers.join(''));
        console.log(firstNumbers);
      } else if (arithmeticSign.length === 1) {
        secondNumbers.push(event.target.innerText);
        calInput.append(textContent = parseInt(secondNumbers.join('')));
        console.log(secondNumbers);
      }
    } else if (num == '-' || num == '+' || num == '/' || num == '*') {
      if (arithmeticSign.length === 0) {
        arithmeticSign.push(num);
        calInput.append(textContent = arithmeticSign[0]);
        console.log(arithmeticSign);
      } else if (arithmeticSign.length === 1) {
        arithmeticSign.pop();
        arithmeticSign.push(num);
        calInput.append(textContent = arithmeticSign[0]);
        console.log(arithmeticSign);
      }
    } else if (num == 'CE') {
      console.log(reset);
    } else if (num == '=') {
      result = calculation();
      calInput.textContent = result;
      console.log(result);
    } else if (num == '(' || num == ')') {
      firstNumbers.push(event.target.innerText);
      console.log(chusenSign);
    }
  });
});
//Calls on keydown.
document.addEventListener('keydown', (event) => {
  const num = event.key;

  if (num == '0' || num == '1' || num == '2' || num == '3' || num == '4' || num == '5' || num == '6' || num == '7' || num == '8' || num == '9' || num == '.') {
    if (arithmeticSign.length === 0) {
      firstNumbers.push(event.key);
      console.log(firstNumbers);
    } else if (arithmeticSign.length === 1) {
      secondNumbers.push(event.key);
      console.log(secondNumbers);
    }
  } else if (num == '-' || num == '+' || num == '/' || num == '*') {
    if (arithmeticSign.length === 0) {
      arithmeticSign.push(num);
      console.log(arithmeticSign);
    } else if (arithmeticSign.length === 1) {
      arithmeticSign.pop();
      arithmeticSign.push(num);
      console.log(arithmeticSign);
    }
  } else if (num == 'CE') {
    console.log(reset);

  } else if (num === '=') {
    result = calculation();
    calInput.textContent = result;
    console.log(result);
  } else if (num == '(' || num == ')') {
    firstNumbers.push(event.key);
    console.log(chusenSign);
  }
});


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
