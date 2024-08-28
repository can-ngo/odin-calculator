const screen = document.querySelector('#screen');
const numBtns = document.querySelectorAll('.number');
const addBtn = document.querySelector('#add');
const subtractBtn = document.querySelector('#subtract');
const multiplyBtn = document.querySelector('#multiply');
const divideBtn = document.querySelector('#divide');
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
            screen.textContent = display.value;
            console.log('num 2: ', numberTwo.value)
        }
    })
})

addBtn.addEventListener('click', () => {
    operator.value = '+';
})
subtractBtn.addEventListener('click', () => {
    operator.value = '-';
})
multiplyBtn.addEventListener('click', () => {
    operator.value = 'x';
})
divideBtn.addEventListener('click', () => {
    operator.value = '/';
})
equalBtn.addEventListener('click', () => {
    console.log("hello")
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
