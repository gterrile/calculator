const keypress = document.getElementById('keypress');
const allKeys = document.querySelectorAll('.key');
const operation = document.getElementById('operation');
const total = document.getElementById('total');

let currentOperation = '';
// Get values and display them on console
allKeys.forEach(key => {
  key.addEventListener('click', function() {
    
    // Clears the current operation
    if (key.value == 'clear') {
      operation.textContent = '';
      currentOperation = '';
    }

    // Builds up the operation on a string
    if (currentOperation != '' && key.value != 'clear' && key.value != '=') {
      currentOperation += key.value;
      operation.textContent = currentOperation;
    }

    // Validation of first character in the operation string --- NUMBER
    if (currentOperation == '' && 
    (key.classList.contains('number'))){
      currentOperation += key.value;
      operation.textContent = currentOperation;
    }
    
    // Validation of first character in the operation string --- NEGATIVE SIGN
    if (currentOperation == '' && 
    (key.classList.contains('negative'))){
      currentOperation += 'n';
      operation.textContent = currentOperation;
    }



    // Builds the left, right and operator parts of the equation
    if (currentOperation != '' && key.value == '=') {
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




