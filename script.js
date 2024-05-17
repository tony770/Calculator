let prev = '';
let curr = '';
let op = '';

let display = document.getElementById('display');

let numButtons = document.querySelectorAll('.number');
numButtons.forEach(button => {
    button.addEventListener('click', () => {
        curr += button.textContent;
        display.textContent = curr;
    });
});

let opButtons = document.querySelectorAll('.op');
opButtons.forEach(button => {
    button.addEventListener('click', () => {
            prev = curr;
            curr = '';
            op = button.textContent;
    });
});

let equal = document.querySelector('.equal');
equal.addEventListener('click', () => {
    const result = operate(Number.parseFloat(prev), Number.parseFloat(curr), op)
    curr = result;
    display.textContent = curr.toString();
})

let clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    prev = '';
    curr = '';
    op = '';
    display.textContent = '0';
})

let decimal = document.querySelector('.decimal');
decimal.addEventListener('click', () => {
    if(!curr.includes('.'))
        {
            curr += '.';
            display.textContent = curr;
        }
    
})

let pn = document.querySelector('.PN');
pn.addEventListener('click', () => {
    if(curr[0] == '-')
        {
            curr.slice(1);
            display.textContent = curr;
        }
    else
        {
            curr = '-' + curr;
            display.textContent = curr;
        }
})

function operate(a, b, sym)
{
    prev = '';
    curr = '';
    op = '';
    switch (sym) {
        case "+":
            return a + b;
            break;
        case "-":
            return a - b;
            break;
        case "*":
            return a * b;
            break;
        case "/":
            if(b == 0)
                {
                    return 'undefined';
                }
            else
                {
                    return Math.round((a / b) * 10000) / 10000 ;
                }
            break;
    }
}


