// script.js

const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let displayValue = '0';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');

        if (value === 'clear') {
            displayValue = '0';
            display.innerText = displayValue;
        } else if (value === '=') {
            calculateResult();
        } else {
            if (displayValue === '0') {
                displayValue = value;
            } else {
                displayValue += value;
            }
            display.innerText = displayValue;
        }
    });
});

function calculateResult() {
    try {
        const result = math.evaluate(displayValue);
        displayValue = result.toString();
        display.innerText = displayValue;
    } catch (error) {
        displayValue = 'Error';
        display.innerText = displayValue;
        setTimeout(() => {
            displayValue = '0';
            display.innerText = displayValue;
        }, 2000);
    }
}
