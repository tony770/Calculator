let prev = '';
let curr = '0';
let op = '';

let display = document.getElementById('display');
let numButtons = document.querySelectorAll('.number');

numButtons.forEach(button => {
    button.addEventListener('click', () => {
        curr += button.textContent;
        updateDisplay(curr);
    });
});

let opButtons = document.querySelectorAll('.op');

opButtons.forEach(button => {
    button.addEventListener('click', () => {
            prev = curr;
            curr = '0';
            op = button.textContent;
    });
});

let equal = document.querySelector('.equal');

equal.addEventListener('click', () => {
    const result = operate(parseFloat(prev), parseFloat(curr), op)
    curr = result.toString();
    updateDisplay(result);
    
})

let clear = document.querySelector('.clear');

clear.addEventListener('click', () => {
    prev = '';
    curr = '0';
    op = '';
    updateDisplay(curr);
})

function operate(a, b, sym)
{
    prev = '';
    curr = '0';
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
            if(curr == 0)
                {
                    return "undefined";
                }
            else
                {
                    return Math.round((a / b) * 100) / 100 ;
                }
            break;
    }
}

function updateDisplay(text)
{   
    const maxLength = 10;
    const numValue = parseFloat(text);
    const displayText = numValue.toString();

    display.textContent = displayText.substring(0, maxLength);
}

