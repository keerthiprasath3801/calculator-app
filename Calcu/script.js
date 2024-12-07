/* script.js */

let displayValue = '';

function appendValue(value) {
  const resultElement = document.getElementById('result');
  if (resultElement.textContent === '0') {
    displayValue = value;
  } else {
    displayValue += value;
  }
  resultElement.textContent = displayValue;
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('result').textContent = '0';
}

function calculate() {
  try {
    displayValue = eval(displayValue).toString();
    document.getElementById('result').textContent = displayValue;
  } catch (error) {
    document.getElementById('result').textContent = 'Error';
    displayValue = '';
  }
}
