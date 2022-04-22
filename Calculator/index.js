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
  const num = event.key;
  if (num == '0' || num == '1' || num == '2' || num == '3' || num == '4' || num == '5' || num == '6' || num == '7' || num == '8' || num == '9' || num == '-' || num == '+' || num == '/' || num == '=' || num == 'CE' || num == '.' || num == '(' || num == ')' || num == '%' || num == 'x') {
    console.log(event.key);
    
  }
});
