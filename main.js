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

let MEMORY = [];

BUTTONS.forEach(button => {
    button.addEventListener('click', e => {
        let target_value = e.target.textContent;
        if (e.target.classList.contains("value")) {
            if (DISPLAY.textContent === '0') DISPLAY.textContent = '';
            DISPLAY.textContent += target_value;
        } else if (e.target.classList.contains("clear")) {
            DISPLAY.textContent = '0';
            MEMORY = [];
        } else if (e.target.classList.contains("operator")) {
            if (MEMORY.length < 2) {
                MEMORY.push(+(DISPLAY.textContent));
                DISPLAY.textContent = '0'
                MEMORY.unshift(target_value);
            }
        } else if (e.target.classList.contains("equal")) {
            if (MEMORY.length == 2) {
                MEMORY.push(DISPLAY.textContent * 1);
                DISPLAY.textContent = operate(MEMORY[0], MEMORY[1], MEMORY[2]).toFixed(3);
                MEMORY = [];
            }
        }

        console.log(MEMORY);
    });
});