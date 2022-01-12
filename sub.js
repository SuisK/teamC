var button = document.getElementById('start');
var button2 = document.getElementById('stop');
button.addEventListener("click", function() {
    button2.style.visibility = 'visible';
    button.style.visibility = 'hidden';
});
button2.addEventListener("click", function() {
    button3.style.visibility = 'visible';
    button2.style.visibility = 'hidden';
});