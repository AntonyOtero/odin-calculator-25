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
    let result = 0;

    switch (operator) {
        case '+':
            result = add(x,y);
            break;
        case '-':
            result = subtract(x,y);
            break;
        case '×':
            result = multiply(x,y);
            break;
        case '÷':
            if (y === 0) return 'Undefined';
            result = divide(x,y);
            break;
        default:
            return "Improper Input";
    }

    if (!Number.isInteger(result)) return result.toFixed(3);

    return result;
}

// DISPLAY
const DISPLAY = document.querySelector(".display");
const BUTTONS = [...document.querySelectorAll(".btn")];

let MEMORY = [];

BUTTONS.forEach(button => {
    button.addEventListener('click', e => {
        let target_value = e.target.textContent;
        if (e.target.classList.contains("value")) {
            if (DISPLAY.textContent === '0') {
                DISPLAY.textContent = '';
            } else if (MEMORY.length === 4) {
                DISPLAY.textContent = '';
                MEMORY = [];
            }
            DISPLAY.textContent += target_value;
        } else if (e.target.classList.contains("clear")) {
            DISPLAY.textContent = '0';
            MEMORY = [];
        } else if (e.target.classList.contains("operator")) {
            if (MEMORY.length < 2 && DISPLAY.textContent != 'Undefined') {
                MEMORY.push(+(DISPLAY.textContent));
                DISPLAY.textContent = '0'
                MEMORY.unshift(target_value);
            } else if (MEMORY.length === 4 && DISPLAY.textContent != 'Undefined') {
                MEMORY = [MEMORY[3]];
                DISPLAY.textContent = '0'
                MEMORY.unshift(target_value);
            }
        } else if (e.target.classList.contains("equal")) {
            if (MEMORY.length == 2) {
                MEMORY.push(DISPLAY.textContent * 1);
                DISPLAY.textContent = operate(MEMORY[0], MEMORY[1], MEMORY[2]);
                if (DISPLAY.textContent === "Undefined") {
                    MEMORY.push(DISPLAY.textContent);
                } else {
                    MEMORY.push(+(DISPLAY.textContent));
                }
            }
        }

        console.log(MEMORY);
    });
});