let num1 = '';
let num2 = '';
let op = '';

let display = document.getElementById('display');
let numButtons = document.querySelectorAll('.number');

numButtons.forEach(button => {
    button.addEventListener('click', () => {
        if(!op)
        {
            num1 += button.textContent;
            display.textContent = num1;
        }
        else
        {
            num2 += button.textContent;
            display.textContent = num2;
        }
    });
});

let opButtons = document.querySelectorAll('.op');

opButtons.forEach(button => {
    button.addEventListener('click', () => {
        if(op && num1 && num2)
        {
            display.textContent = operate(num1, num2, op);
            op = button.textContent;
        }
        else if(op && num1)
        {
            op = button.textContent;
        }
        else
        {
            op = button.textContent;
        }
    });
});

let equal = document.querySelector('.equal');

equal.addEventListener('click', () => {
    if(op && num2)
        {
            display.textContent = operate(num1, num2, op);
        }
})




function add(a, b)
{
    return a + b;
}

function subtract(a, b)
{
    return a - b;
}

function multiply(a, b)
{
    return a * b;
}

function divide(a, b)
{
    return a / b;
}

function operate(a, b, sym)
{
    a = parseFloat(a);
    b = parseFloat(b);
    switch (sym) {
        case "+":
            display.textContent = '';
             return add(a, b);
            break;
        case "-":
            display.textContent = '';
            return subtract(a, b);
            break;
        case "*":
            display.textContent = '';
            return multiply(a, b);
            break;
        case "/":
            display.textContent = '';
            return divide(a, b);
            break;
        default:
            display.textContent = 'error';
            break;
    }
}

