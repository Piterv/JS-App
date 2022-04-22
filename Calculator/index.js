const para = document.querySelectorAll('.digit');

para.forEach(item => {
  item.addEventListener('click', event => {
    const num = event.target.innerText;
    if (num == '0' || num == '1' || num == '2' || num == '3' || num == '4' || num == '5' || num == '6' || num == '7' || num == '8' || num == '9' || num == '-' || num == '+' || num == '/' || num == '=' || num == 'CE' || num == '.' || num == '(' || num == ')' || num == '%' || num == 'x') {
      console.log(event.target.innerText);
    }
  });
});

document.addEventListener('keydown', (event) => {
  switch (event.key) {
    case '0':
      console.log(event.key);
      break;
    case '1':
      console.log(event.key);
      break;
    case '2':
      console.log(event.key);
      break;
    case '3':
      console.log(event.key);
      break;
    case '4':
      console.log(event.key);
      break;
    case '5':
      console.log(event.key);
      break;
    case '6':
      console.log(event.key);
      break;
    case '7':
      console.log(event.key);
      break;
    case '8':
      console.log(event.key);
      break;
    case '9':
      console.log(event.key);
      break;
    case '/':
      console.log(event.key);
      break;
    case '-':
      console.log(event.key);
      break;
    case '+':
      console.log(event.key);
      break;
    case '=':
      console.log(event.key);
      break;
    case '%':
      console.log(event.key);
      break;
    case '(':
      console.log(event.key);
      break;
    case ')':
      console.log(event.key);
      break;
      case 'x':
        console.log(event.key);
        break;
    default:
      console.log('false');
  }
});
