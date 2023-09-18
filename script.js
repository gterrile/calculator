const keypress = document.getElementById('keypress');
const allKeys = document.querySelectorAll('.key');

// Get values and display them on console
allKeys.forEach(key => {
  key.addEventListener('click', () => console.log(key.value));
});


