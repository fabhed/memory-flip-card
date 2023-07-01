const display = document.querySelector('.display');
const digits = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operator');
const clear = document.querySelector('.clear');
const equal = document.querySelector('.equal');

digits.forEach(button => button.addEventListener('click', digitClicked));
operators.forEach(button => button.addEventListener('click', operatorClicked));
clear.addEventListener('click', clearClicked);
equal.addEventListener('click', equalClicked);

let operand1 = '';
let operand2 = '';
let operator = '';

function digitClicked(event) {
    if (operator) {
        operand2 += event.target.innerText;
    } else {
        operand1 += event.target.innerText;
    }
    display.value = operand1 + operator + operand2;
}

function operatorClicked(event) {
    if (operand1 && operand2) {
        calculate();
    }
    operator = event.target.innerText;
    display.value = operand1 + operator + operand2;
}

function clearClicked() {
    operand1 = '';
    operand2 = '';
    operator = '';
    display.value = '';
}

function equalClicked() {
    if (operand1 && operand2) {
        calculate();
        operator = '';
    }
}

function calculate() {
    switch (operator) {
        case '+':
            operand1 = String(Number(operand1) + Number(operand2));
            break;
        case '-':
            operand1 = String(Number(operand1) - Number(operand2));
            break;
        case '*':
            operand1 = String(Number(operand1) * Number(operand2));
            break;
        case '/':
            operand1 = String(Number(operand1) / Number(operand2));
            break;
    }
    operand2 = '';
    display.value = operand1;
}
