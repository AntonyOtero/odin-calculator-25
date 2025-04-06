// Memory
let gValueX = 0;
let gOperator = "";
let gValueY = 0;

// Add
const add = (addendX, addendY) => {
    return addendX + addendY;
}

// Subtract
const subtract = (minuend, subtrahend) => {
    return minuend - subtrahend;
}

// Multiply
const multiply = (factorX, factorY) => {
    return factorX * factorY;
}

// Divide
const divide = (dividendX, dividendY) => {
    return dividendX / dividendY;
}

const operate = (operator, x, y) => {
    switch (operator) {
        case '+':
            return add(x,y);
        case '-':
            return subtract(x,y);
        case '*':
            return multiply(x,y);
        case '/':
            return divide(x,y);
        default:
            return "Improper Input";
    }
}

// DISPLAY
const DISPLAY = document.querySelector(".display");
const BUTTONS = [...document.querySelectorAll(".btn")];

let display_value = 0;

BUTTONS.forEach(button => {
    button.addEventListener('click', e => {
        if (e.target.classList.contains("value")) {
            if (DISPLAY.textContent === '0') DISPLAY.textContent = '';
            let target_value = e.target.textContent;
            DISPLAY.textContent += target_value;
            display_value = Number.parseInt(target_value);
        } else if (e.target.classList.contains("clear")) {
            DISPLAY.textContent = '0';
            display_value = 0;
        }

        console.log(display_value);
    });
});