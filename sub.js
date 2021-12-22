var button = document.getElementById('button');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');
button.addEventListener("click", function() {
    document.getElementById('button2').style.visibility = 'visible';
    document.getElementById('button').style.visibility = 'hidden';
});
button2.addEventListener("click", function() {
    document.getElementById('button3').style.visibility = 'visible';
    document.getElementById('button2').style.visibility = 'hidden';
});