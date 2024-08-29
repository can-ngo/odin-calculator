const screen = document.querySelector('#screen');
const numBtns = document.querySelectorAll('.number');
const operatorBtns = document.querySelectorAll('.operator');
const clearBtn = document.querySelector('#clear-btn');
const equalBtn = document.querySelector('#equal');
const decimalBtn = document.querySelector('#decimal-btn');
const testDiv = document.querySelector('#test');

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
        } else {
            numberTwo.value += event.target.value;
            display.value = numberTwo.value;
            screen.textContent = display.value;
        }
    // testDiv.textContent=`${numberOne.value}   ${operator.value}   
    //                      ${numberTwo.value} = [ ${display.value} ]`
    })
})

operatorBtns.forEach( btn => {
    btn.addEventListener('click', (event) => { 
        if ( !numberOne.value && !numberTwo.value)
        {
            if (event.target.value === '-'){
                numberOne.value = '-'
            } else {
                operator.value = '';
            }
        } else if ( numberOne.value && !numberTwo.value) 
        {
            operator.value = event.target.value;

        } else {
            display.value = operate(numberOne.value, operator.value, numberTwo.value);
            screen.textContent = display.value;
            numberOne.value = display.value.toString();
            numberTwo.value = '';
            operator.value = event.target.value;
        }
        
    // testDiv.textContent=`${numberOne.value}   ${operator.value}   
    //                      ${numberTwo.value} = [ ${display.value} ]`
    })
})


equalBtn.addEventListener('click', () => {
    if (!numberTwo.value) {
        operator.value = '';
    } else {
        display.value = operate(numberOne.value, operator.value, numberTwo.value);
        if (display.value === 'Infinity' || display.value === '-Infinity') {
            numberOne.value = '';
            numberTwo.value = '';
            operator.value = '';
            display.value = "Error: Can't divide by 0";
            screen.textContent = display.value;
            return
        } else {
            screen.textContent = display.value;
            numberOne.value = display.value;
            numberTwo.value = '';
            operator.value = '';
        }
    }
    // testDiv.textContent=`${numberOne.value}   ${operator.value}   
    //                      ${numberTwo.value} = [ ${display.value} ]`
})

decimalBtn.addEventListener('click', () => {
    if ( !operator.value && !numberOne.value.includes('.')){
        numberOne.value += '.'
    } else if ( operator.value && !numberTwo.value.includes('.')) {
        numberTwo.value += '.'
    }
    // testDiv.textContent=`${numberOne.value}   ${operator.value}   
    //                      ${numberTwo.value} = [ ${display.value} ]`
})

clearBtn.addEventListener('click', () => {
    numberOne.value = '';
    numberTwo.value = '';
    operator.value = '';
    display.value = '';
    screen.textContent = display.value;

    // testDiv.textContent=`${numberOne.value}   ${operator.value}   
    //                      ${numberTwo.value} = [ ${display.value} ]`
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
                return (firstNum + secondNum).toString();
            case '-':
                operatorInput.value = '';
                return (firstNum - secondNum).toString();
            case 'x':
                operatorInput.value = '';
                return (firstNum * secondNum).toString();
            case '/':
                operatorInput.value = '';
                return (firstNum / secondNum).toString();
        }
    
}