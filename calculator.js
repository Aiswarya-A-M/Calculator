let displayValue = '';
let resultShown = false;
function screenDisplay(value) {
    const display = document.getElementById("screen");
    if (resultShown){
        if (value === '+' || value === '-' || value === '*' || value === '/') {
            displayValue = display.value + value;
            resultShown = false;
        } else {
            resultShown = false;
            clearDisplay();
        }
    }
    if (displayValue==="Cannot divide by zero") {
        clearDisplay();
    }
    if (displayValue === '' && (value === '+' || value === '-' || value === '*' || value === '/')) {
        return; // Prevent operators when the screen is empty
    }
    const lastChar = displayValue.charAt(displayValue.length - 1);
    if (value === '=' && displayValue) {
        const result = eval(displayValue);
        const fixedResult = parseFloat(result.toFixed(10));
        if (result === Infinity) {
            displayValue="Cannot divide by zero";
            display.value = displayValue;
        }
        else{
            display.value = fixedResult;
            displayValue = fixedResult.toString();
            resultShown = true;
        }
    
    }else if (value === 'clc') {
        clearDisplay();
        resultShown = false;
    }
    else {
        if (value === '+' || value === '-' || value === '*' || value === '/') {
      // Check if the last character in the display is an operator
            if (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/') {
                return; // Prevent consecutive operators
            }
      
        }
        displayValue += value;
        display.value = displayValue;
    
    }
}

function clearDisplay() {        //to clear the display.
    displayValue = '';
    document.getElementById("screen").value = '';
}

function calculateResult() {              //to calculate result.
    const display = document.getElementById("screen");
    const result = eval(displayValue);
    const fixedResult = parseFloat(result.toFixed(10));
    if (result === Infinity) {
        displayValue="Cannot divide by zero";
        display.value = displayValue;
    }else{
        display.value = fixedResult;
        displayValue = fixedResult.toString();
        resultShown=true;

    } 
}

