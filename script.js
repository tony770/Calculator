let num1 = 0;
let num2 = 0;
let op = "";

let display = document.getElementById('display');
let numButtons = document.querySelectorAll('.number');

numButtons.forEach(button => {
    button.addEventListener('click', () => {
        display.textContent += button.textContent;
    });
});

let opButtons = document.querySelectorAll('.op');

opButtons.forEach(button => {
    button.addEventListener('click', () => {
        display.textContent += button.textContent;
    });
});



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
    switch (sym) {
        case "+":
            add(a, b);
            break;
        case "-":
            subtract(a, b);
            break;
        case "*":
            multiply(a, b);
            break;
        case "/":
            divide(a, b);
            break;
    }
}