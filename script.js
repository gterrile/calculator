const keypress = document.getElementById('keypress');
const allKeys = document.querySelectorAll('.key');

window.addEventListener('click', function() {
  keypress.currentTime = 0;
  keypress.play();
});
