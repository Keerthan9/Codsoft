let displayValue = '';

function input(value) {
    displayValue += value;
    document.getElementById('display').innerText = displayValue;
}

function calculate() {
    try {
        displayValue = eval(displayValue).toString();
        document.getElementById('display').innerText = displayValue;
    } catch {
        document.getElementById('display').innerText = 'Error';
        displayValue = '';
    }
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').innerText = '0';
}
