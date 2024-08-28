const screen = document.querySelector('#screen');
const numBtns = document.querySelectorAll('.number');
const operatorBtns = document.querySelectorAll('.operator');
const clearBtn = document.querySelector('#clear-btn');
const equalBtn = document.querySelector('#equal');
const decimalBtn = document.querySelector('#decimal-btn');

let numberOne = { value: '' };
let numberTwo = { value: '' };
let operator = { value: '' };
let display = { value: '' };


numBtns.forEach( btn => {
    btn.addEventListener('click', (event) => {
        if (!operator.value){
            numberOne.value += event.target.value;
            display.value = numberOne.value;
            screen.textContent = display.value;
            console.log('num 1: ', numberOne.value)
        } else {
            numberTwo.value += event.target.value;
            display.value = numberTwo.value;
            screen.textContent = display.value;
            console.log('num 2: ', numberTwo.value)
        }
    })
})

operatorBtns.forEach( btn => {
    btn.addEventListener('click', (event) => {
        if (!operator.value || !numberTwo.value) {
            operator.value = event.target.value;
        } else {
            display.value = operate(numberOne.value, operator.value, numberTwo.value);
            screen.textContent = display.value;
            numberOne.value = display.value.toString();
            numberTwo.value = '';
        }
        console.log(event.target.value)
    })
})


equalBtn.addEventListener('click', () => {
    if (!numberTwo.value) {
        operator.value = '';
    } else {
        display.value = operate(numberOne.value, operator.value, numberTwo.value);
        if (display.value === Infinity || display.value === -Infinity) {
            numberOne.value = '';
            numberTwo.value = '';
            operator.value = '';
            display.value = "Error";
            screen.textContent = display.value;
            return
        } else {
            screen.textContent = display.value;
            numberOne.value = display.value;
            numberTwo.value = '';
            operator.value = '';
        }
    }
})

decimalBtn.addEventListener('click', () => {
    console.log("hello")
})

clearBtn.addEventListener('click', () => {
    numberOne.value = '';
    numberTwo.value = '';
    operator.value = '';
    display.value = '';
    screen.textContent = display.value;
})

function operate(firstNum, operatorInput, secondNum){
    if (!firstNum || !operatorInput || !secondNum){
        alert('Provide operands or operators')
        return
    }
    firstNum = Number(firstNum);
    secondNum = Number(secondNum); 

        switch (operatorInput){
            case '+':
                operatorInput.value = '';
                return firstNum + secondNum;
            case '-':
                operatorInput.value = '';
                return firstNum - secondNum;
            case 'x':
                operatorInput.value = '';
                return firstNum * secondNum;
            case '/':
                operatorInput.value = '';
                return firstNum / secondNum;
        }
    
}