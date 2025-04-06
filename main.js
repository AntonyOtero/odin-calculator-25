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

BUTTONS.forEach(button => {
    button.addEventListener('click', e => {
        if (e.target.classList.contains("value")) {
            DISPLAY.textContent = e.target.textContent;
        } else if (e.target.classList.contains("clear")) {
            DISPLAY.textContent = '0';
        }
    });
});