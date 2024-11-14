const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentValue = '';
let previousValue = '';
let operation = null;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'AC') {
            currentValue = '';
            previousValue = '';
            operation = null;
            display.value = '';
        } else if (value === 'DEL') {
            currentValue = currentValue.slice(0, -1);
            display.value = currentValue;
        } else if (value === '+' || value === '-' || value === '*' || value === '/') {
            previousValue = currentValue;
            currentValue = '';
            operation = value;
        } else if (value === '=') {
            const result = calculate(previousValue, currentValue, operation);
            display.value = result;
            previousValue = '';
            currentValue = result;
            operation = null;
        } else {
            currentValue += value;
            display.value = currentValue;
        }
    });
});

function calculate(a, b, operation) {
    a = parseFloat(a);
    b = parseFloat(b);

    switch (operation) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        case '%':
            return a % b;
        default:
            return 0;
    }
}