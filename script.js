
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');
    const logo = document.querySelector('.logo');
    const display = document.getElementById('display');
    let currentValue = '0';
    let previousValue = '';
    let operator = '';
    let isDecimal = false;
    let isNegative = false;

    // Initialize button states
    function initButtons() {
        logo.style.opacity = '0';
        logo.style.transform = 'translateY(-100%)';
        
        buttons.forEach(button => {
            button.style.opacity = '0';
            button.style.transform = 'translateY(-100%)';
        });
    }

    // Function to add floating animation
    function addFloatingAnimation() {
         // Animate logo first
         setTimeout(() => {
            logo.style.transition = 'opacity 1s ease-in-out, transform 1s ease-in-out';    
            logo.style.opacity = '1';
            logo.style.transform = 'translateY(0)';
        }, 500); // Start logo animation after a short delay

        
        // Animate buttons row by row
        buttons.forEach((button, index) => {
            const row = Math.floor(index / 4);
            const col = index % 4;
            const delay = 2 + row * 0.6 + col * 0.3; // Delay for sequential animation

            setTimeout(() => {
                button.style.transition = 'opacity 1s ease-in-out, transform 1s ease-in-out';
                button.style.opacity = '1';
                button.style.transform = 'translateY(0)';
            }, delay * 500); // Convert delay to milliseconds
        });
    }

    initButtons();
    addFloatingAnimation();

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonType = button.getAttribute('data-type');
            const buttonValue = button.getAttribute('data-value');
            handleInput(buttonType, buttonValue, button);
            // Remove focus from the button after click
            button.blur();
            // Button press animation
            button.style.transition = 'transform 0.2s';
            button.style.transform = 'translateY(5px)';
            setTimeout(() => {
                button.style.transform = 'translateY(0)';
            }, 200);
        });
    });

    document.addEventListener('keydown', (event) => {
        const keyMap = {
            '0': 'digit', '1': 'digit', '2': 'digit', '3': 'digit', '4': 'digit', 
            '5': 'digit', '6': 'digit', '7': 'digit', '8': 'digit', '9': 'digit',
            '+': 'operator', '-': 'operator', '*': 'operator', '/': 'operator',
            '.': 'decimal', 'Enter': 'equals', 'Backspace': 'clear', '%': 'operator'
        };

        const keyValue = event.key;
        const buttonType = keyMap[keyValue];

        if (buttonType) {
            handleInput(buttonType, keyValue);
            const button = [...buttons].find(btn => {
                if (buttonType === 'equals' && btn.getAttribute('data-type') === 'equals') return true;
                return btn.getAttribute('data-value') === keyValue;
            });
            if (button) {
                button.style.transition = 'transform 0.2s';
                button.style.transform = 'translateY(5px)';
                setTimeout(() => {
                    button.style.transform = 'translateY(0)';
                }, 200);
            }
        }
    });

    function handleInput(type, value, button = null) {
        if (type === 'digit') {
            handleDigit(value);
        } else if (type === 'clear') {
            clearDisplay();
        } else if (type === 'toggle-sign') {
            toggleSign();
        } else if (type === 'decimal') {
            handleDecimal();
        } else if (type === 'equals') {
            calculate();
        } else if (type === 'operator') {
            handleOperator(value, button);
        }
        updateDisplay();
    }

    function handleDigit(digit) {
        if (currentValue === '0' && digit !== '0') {
            currentValue = digit;
        } else {
            currentValue += digit;
        }
    }

    function clearDisplay() {
        currentValue = '0';
        previousValue = '';
        operator = '';
        isDecimal = false;
        isNegative = false;
        clearOperatorHighlight();
        updateDisplay();
    }

    function toggleSign() {
        if (isNegative) {
            currentValue = currentValue.substring(1);
            isNegative = false;
        } else {
            currentValue = '-' + currentValue;
            isNegative = true;
        }
    }

    function handleDecimal() {
        if (!isDecimal) {
            currentValue += '.';
            isDecimal = true;
        }
    }

    function handleOperator(op, button) {
        if (operator && previousValue) {
            calculate();
        }
        operator = op;
        previousValue = currentValue;
        currentValue = '0';
        isDecimal = false;
        clearOperatorHighlight();
        if (button) {
            button.classList.add('operator-active');
        } else {
            const button = [...buttons].find(btn => btn.getAttribute('data-value') === op);
            if (button) {
                button.classList.add('operator-active');
            }
        }
    }

    function clearOperatorHighlight() {
        buttons.forEach(button => {
            if (button.getAttribute('data-type') === 'operator') {
                button.classList.remove('operator-active');
            }
        });
    }

    function calculate() {
        if (!operator || !previousValue) return;

        const prev = parseFloat(previousValue);
        const current = parseFloat(currentValue);

        let result;

        switch (operator) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '*':
                result = prev * current;
                break;
            case '/':
                result = prev / current;
                break;
            case '%':
                result = (prev * current) / 100;
                break;
            case '√':
                result = Math.sqrt(current);
                break;
            default:
                return;
        }

        currentValue = parseFloat(result.toFixed(6)).toString();
        operator = '';
        previousValue = '';
        isDecimal = currentValue.includes('.');
        isNegative = currentValue.startsWith('-');
        clearOperatorHighlight();
    }

    function updateDisplay() {
        display.textContent = currentValue;
    }

    updateDisplay();
});