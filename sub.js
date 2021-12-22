var button = document.getElementById('button');
var button2 = document.getElementById('button2');
button.addEventListener("click", function() {
    document.getElementById('button2').style.visibility = 'visible';
    document.getElementById('button').style.visibility = 'hidden';
});