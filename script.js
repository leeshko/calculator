let numbersBtn = document.querySelectorAll('.numButton');
let operationBtn = document.querySelectorAll('.operator');
let resultBtn = document.querySelector('.result');
let cleanLastBtn = document.querySelector('.cleanLast');
let cleanAllBtn = document.querySelector('.cleanAll');
let decimalBtn = document.querySelector('.dot');
let display = document.querySelector('.display');

let num1 = '0';
let num2 = '';
let needClear = false;
let memoryLastOperation = '';

numbersBtn.forEach(num => {
    num.addEventListener('click', function (e) {
        pressNum(e.target.innerHTML);
    });
});

cleanAllBtn.addEventListener('click', function (e) {
    display.value = '0';
    num1 = '0';
    num2 = '';
    memoryLastOperation = '';
    needClear = false;

});

cleanLastBtn.addEventListener('click', function (e) {
    display.value = '0';
    num1 = '0';
    num2 = '';
    memoryLastOperation = '';
    needClear = false;

});

operationBtn.forEach(opb => {
    opb.addEventListener('click', function (e) {
        pressOperation(e.target.innerHTML);
    });
});

decimalBtn.addEventListener('click', decimal);

resultBtn.addEventListener('click', result);

function pressNum(numBtn) {
    if (memoryLastOperation === '') {
        num1 = pressNumCondition(numBtn);
    } else {
        display.value = num2;
        num2 = pressNumCondition(numBtn);
    }
}

function pressNumCondition(numBtn) {
    if (display.value === '0') {
        display.value = numBtn;
    } else {
        display.value += numBtn;
    }
    return display.value;
}

function pressOperation(operBtn) {
    if (num2 !== '') {
        makingOperation();
        num1 = display.value;
        num2 = '';
    }
    memoryLastOperation = operBtn;
}

function makingOperation() {
    switch (memoryLastOperation) {
        case '+':
            display.value = parseFloat(num1) + parseFloat(num2);
            break;

        case '-':
            display.value = parseFloat(num1) - parseFloat(num2);
            break;

        case '*':
            display.value = parseFloat(num1) * parseFloat(num2);
            break;

        case '/':
            display.value = parseFloat(num1) / parseFloat(num2);
            break;
    }
}

function decimal() {
    if (display.value === '0') {
        display.value = '0.';
    } else if (display.value.indexOf('.') === -1) {
        display.value += '.';
    }
}

function result() {
    if (memoryLastOperation !== '' && num2 !== '') {
        makingOperation();
    }
} 