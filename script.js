const keypress = document.getElementById('keypress');
const allKeys = document.querySelectorAll('.key');
const operation = document.getElementById('operation');
const total = document.getElementById('totalOperation');

let currentOperation = '0';
operation.textContent = currentOperation;
total.textContent = '0';


let operationIsEmpty = true;
let periodIsUsed = false;
let operatorIsUsed = false;

function eliminateRightZeros (number) {
  let numberString = number.toString();
  let isPeriodPresent = false;
  // Look for a period in the string
  for (i = 0; i = numberString.length - 1; i++) {
    if (numberString[i] == '.') {
      isPeriodPresent = true;
      break;
    }
  }
  if (isPeriodPresent) {
    while (numberString[numberString.length - 1] == '0') {
      numberString = numberString.slice(0, -1);
    }
  }
  console.log('result:', numberString);
};
eliminateRightZeros(900000);

function addOperation(a, b) {
  let total = a + b;
  return total.toFixed(8);
};

function substracOperation(a, b) {
  let total = a - b;
  return total.toFixed(10);
}

function multiplyOperation(a, b) {
  let total = a * b;
  return total.toFixed(10);
}

function divideOperation(a, b) {
  if (b == 0) {
    return '∞';
  }
  let total = a / b;
  return total.toFixed(10);
}

function porcentageOperation(a, b) {
  let total = (a * b) / 100;
  return total.toFixed(6);
}

function generateOperationArguments(str) {
  let operator = '';
  let left = '';
  let right = '';
  
  for (i = 0; i < currentOperation.length; i++) {
    if (currentOperation[i] == '+' || 
        currentOperation[i] == '-' || 
        currentOperation[i] == '*' ||
        currentOperation[i] == '/' || 
        currentOperation[i] == '%') {
          operator = currentOperation[i];
          continue;
        }
    if (operator == '') {
      left += currentOperation[i];  
    }
    else {
      right += currentOperation[i];  
    }
  }
  // Display operation Arguments and Operator
  console.log('currentOperation', currentOperation);
  console.log('left:', left);
  console.log('operator:', operator);
  console.log('right:', right);

  // Call proper operation function

  if (operator == '+') {
    let result = addOperation(parseFloat(left), parseFloat(right));
    total.textContent = result;
    console.log('result:', result)
  }

  if (operator == '-') {
    let result = substracOperation(parseFloat(left), parseFloat(right));
    total.textContent = result;
    console.log('result:', result)
  }

  if (operator == '*') {
    let result = multiplyOperation(parseFloat(left), parseFloat(right));
    total.textContent = result;
    console.log('result:', result)
  }

  if (operator == '/') {
    let result = divideOperation(parseFloat(left), parseFloat(right));
    total.textContent = result;
    console.log('result:', result)
  }

  if (operator == '%') {
    let result = porcentageOperation(parseFloat(left), parseFloat(right));
    total.textContent = result;
    console.log('result:', result)
  }

};


// Get values and display them on console
allKeys.forEach(key => {
  key.addEventListener('click', function() {
    
    // Clears the current operation
    if (key.value == 'clear') {
      total.textContent = '0';
      operation.textContent = '0';
      currentOperation = '0';
      periodIsUsed = false;
      operatorIsUsed = false;
    }

    // Validates not allowing two operators signs together
    if (key.classList.contains('operator') && !operatorIsUsed) {
        currentOperation += key.value;
        operation.textContent = currentOperation;
        operatorIsUsed = true;
        periodIsUsed = false;
    }

    // Builds up the operation on a string
    if (currentOperation != '0' && key.classList.contains('number')) {
      currentOperation += key.value;
      operation.textContent = currentOperation;
    }

    // Validation of first character in the operation string --- NUMBER
    if (currentOperation == '0' && 
    (key.classList.contains('number') || key.value == '-')){
      currentOperation = '';
      currentOperation += key.value;
      operation.textContent = currentOperation;
    }
    
    // Allows adding period after a number
    if (key.classList.contains('period') && !periodIsUsed) {
      currentOperation += key.value;
      operation.textContent = currentOperation;
      periodIsUsed = true;
    }
   
    // Builds the left, right and operator parts of the equation
    if (currentOperation != '0' && key.value == '=') {
      generateOperationArguments(currentOperation);
    }

  })
});

// document.addEventListener('keydown', (e) => {

// });




