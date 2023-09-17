const keypress = document.getElementById('keypress');
const allKeys = document.querySelectorAll('.key');

allKeys.forEach(item, function() {
  item.addEventListener('click', function() {
    keypress.currentTime = 0;
    keypress.play();
}));

keyboard.addEventListener('click', function() {
  keypress.currentTime = 0;
  keypress.play();
});
