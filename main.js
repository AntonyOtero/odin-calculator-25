const calculator = (function() {
    const memory = [];
    const add = (addendX, addendY) => addendX + addendY;
    const subtract = (minuend, subtrahend) => minuend - subtrahend;
    const multiply = (factorX, factorY) => factorX * factorY;
    const divide = (dividendX, dividendY) => dividendX / dividendY;
    const roundToThree = (num) => Math.round(num * 1000) / 1000;
    const operate = (operator, x, y) => {
        if (operator === '+') return roundToThree(add(x,y));
        if (operator === '-') return roundToThree(subtract(x,y));
        if (operator === '×') return roundToThree(multiply(x,y));
        if (operator === '÷' && y === 0) return "Undefined";
        if (operator === '÷') return roundToThree(divide(x,y));
        return "Improper Input";
    }
    const clear = () => {
        memory.length = 0;
    }
    return {
        memory,
        operate,
        clear,
    }
})();

// DISPLAY
const DISPLAY = document.querySelector(".display");
const BUTTONS = [...document.querySelectorAll(".btn")];
const CLEAR_BTN = document.querySelector(".clear");

BUTTONS.forEach(button => {
    button.addEventListener('click', e => {
        let targetValue = e.target.textContent;
        
        if (e.target.classList.contains("decimal")) {
            if (!DISPLAY.textContent.match(/[.]/g)) {
                if (calculator.memory.length === 4) {
                    DISPLAY.textContent = '0';
                    calculator.memory = [];
                }
                DISPLAY.textContent += targetValue;  
            }
        } else if (e.target.classList.contains("value")) {
            if (DISPLAY.textContent === '0') {
                DISPLAY.textContent = '';
            } else if (calculator.memory.length === 4) {
                DISPLAY.textContent = '';
                calculator.memory = [];
            }
            DISPLAY.textContent += targetValue;
        } else if (e.target.classList.contains("clear")) {
            if (DISPLAY.textContent.length > 1 && calculator.memory.length !== 4) {
                DISPLAY.textContent = DISPLAY.textContent.substring(0, DISPLAY.textContent.length - 1);
            } else {
                DISPLAY.textContent = '0';
                calculator.memory = [];
            }
        } else if (e.target.classList.contains("operator")) {
            if (calculator.memory.length < 2 && DISPLAY.textContent != 'Undefined') {
                calculator.memory.push(+(DISPLAY.textContent));
                calculator.memory.unshift(targetValue); 
                DISPLAY.textContent = '0'
            } else if (calculator.memory.length === 4 && DISPLAY.textContent != 'Undefined') {
                calculator.memory = [calculator.memory[3]];
                DISPLAY.textContent = '0'
                calculator.memory.unshift(targetValue);
            }
        } else if (e.target.classList.contains("equal")) {
            if (calculator.memory.length == 2) {
                calculator.memory.push(DISPLAY.textContent * 1);
                DISPLAY.textContent = calculator.operate(calculator.memory[0], calculator.memory[1], calculator.memory[2]);
                if (DISPLAY.textContent === "Undefined") {
                    calculator.memory.push(DISPLAY.textContent);
                } else {
                    calculator.memory.push(+(DISPLAY.textContent));
                }
            }
        }

        console.log(calculator.memory);
    });
});