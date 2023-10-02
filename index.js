//CALCULATOR.
let calculatorButtons =  document.querySelectorAll('[data-classified= CB]');
let screen =  document.getElementById('screen');
let equalSign = document.querySelector('.equal');
for (button of calculatorButtons) button.addEventListener('click', event => screen.value = screen.value.concat(event.target.textContent));

equalSign.addEventListener('click', () => {
    let equation =  screen.value;
    screen.value = eval(equation);
});