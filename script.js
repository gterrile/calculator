const keypress = document.getElementById('keypress');
const allKeys = document.querySelectorAll('.key');
const operation = document.getElementById('operation');
const total = document.getElementById('totalOperation');

let currentOperation = '0';
operation.textContent = currentOperation;

// let totalOperation = '0';
// total.textContent = totalOperation;
let operationIsEmpty = true;
let periodIsUsed = false;
let operatorIsUsed = false;

// Get values and display them on console
allKeys.forEach(key => {
  key.addEventListener('click', function() {
    
    // Clears the current operation
    if (key.value == 'clear') {
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

    // Validates not allowing two operators periods together
    // if (key.classList.contains('period') && currentOperation != '0') {
    //   let lastCharacterIndex = currentOperation.length - 1;
    //   if (currentOperation[lastCharacterIndex] != '.') {
    //     currentOperation += key.value;
    //     operation.textContent = currentOperation;
    //   }
    // }

    // // Builds up the operation on a string
    // if (currentOperation != '0' && key.value != 'clear' && key.value != '=') {
    //   currentOperation += key.value;
    //   operation.textContent = currentOperation;
    // }

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
      console.log('currentOperation', currentOperation);
      console.log('left:', left);
      console.log('operator:', operator);
      console.log('right:', right);
    }



  })
});

// document.addEventListener('keydown', (e) => {

// });




