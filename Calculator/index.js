const para = document.querySelectorAll('.digit');
const calInput = document.querySelectorAll('.calculator-input');
//Stores typed numbers
var setDigitFirst = [];
var setDigitSecond = [];
// Stores sign + - or / *
var arithmeticSign = [];
// Set all to the begining
var reset;
// Stores equation result.
var result;
//
para.forEach(item => {
  item.addEventListener('click', event => {
    const num = event.target.innerText;
    if (num == '0' || num == '1' || num == '2' || num == '3' || num == '4' || num == '5' || num == '6' || num == '7' || num == '8' || num == '9' || num == '.') {
      setDigitFirst.push(event.target.innerText);
      console.log(setDigitFirst);
    } else if (num == '-' || num == '+' || num == '/' || num == '%' || num == 'x') {
      setDigitSecond.push(num);
      console.log(arithmeticSign);
    } else if (num == 'CE') {
      console.log(reset);
    } else if (num == '=') {
      result = num;
      console.log(result);
    } else if (num == '(' || num == ')') {
      setDigitFirst.push(event.target.innerText);
      console.log(chusenSign);
    }
  });
});

document.addEventListener('keydown', (event) => {
  const num = event.key;

  if (num == '0' || num == '1' || num == '2' || num == '3' || num == '4' || num == '5' || num == '6' || num == '7' || num == '8' || num == '9' || num == '.') {

    if (arithmeticSign.length === 0 || arithmeticSign.length === 1) {
      setDigitFirst.push(event.key);
      console.log(setDigitFirst);
    } else if (arithmeticSign.length === 2) {
      setDigitSecond.push(event.key);
      console.log(setDigitSecond);

    } else if (num == '-' || num == '+' || num == '/' || num == '%' || num == 'x') {

      if (arithmeticSign.length === 0) {
        arithmeticSign.push(num);
      } else if (arithmeticSign.length === 1 && setDigitFirst.length === 0) {
        arithmeticSign.pop(num);
        arithmeticSign.push(num);
      } else if (arithmeticSign.length === 1 && setDigitFirst.length !== 0) {

      }


    } else if (arithmeticSign.length === 1) {
      arithmeticSign.pop(num);
      arithmeticSign.push(num);
    }

    console.log(arithmeticSign);
  } else if (num == 'CE') {
    console.log(reset);
  } else if (num == '=') {
    result = num;
    console.log(result);
  } else if (num == '(' || num == ')') {
    setDigitFirst.push(event.key);
    console.log(chusenSign);
  }
});
