let timer = document.getElementById("timer");
let home = document.getElementById("home");
let result = document.getElementById("result");
result.style.visibility = 'hidden';
let startTime;
let elapsedTime = 0; //経過時間をいれる（ミリ秒）
let timerId;
let timeToadd = 0; //ストップから再開の時、値保持
let second = 0; //目標とする秒数を入れる
let difTime = 0; //差の記録を入れる

function updateTimeText() {
    //分のカウント
    let m = Math.floor(elapsedTime / 60000);

    //秒のカウント
    let s = Math.floor(elapsedTime % 60000 / 1000);

    //ミリ秒のカウント
    let ms = elapsedTime % 1000;

    m = ('0' + m).slice(-2);
    s = ('0' + s).slice(-2);
    ms = ('0' + ms).slice(-2);

    timer.textContent = m + ':' + s + ':' + ms;

    //console.log(m + ':' + s + ':' + ms);
    //console.log(elapsedTime);
}

function countUp() {
    timerId = setTimeout(function() {
        elapsedTime = Date.now() - startTime + timeToadd;
        updateTimeText()
        countUp();
    }, 10);
}
let count = 0;
function strFade(str)
{
	c = str.charAt(count++);
	document.getElementById("timer").style.color = "#"+c+c+c+c+c+c;
	if (count < str.length) setTimeout("strFade('" + str + "')",250);
}


let button = document.getElementById("start");
button.addEventListener("click", function() {
    startTime = Date.now(); //時間データをいれる
    strFade('0123456789abcdef');
    count = 0;
    countUp();
});


let button2 = document.getElementById('stop');
button2.addEventListener('click', function() {
    //タイマーを止めるにはclearTimeoutを使う必要があり、そのためにはclearTimeoutの引数に渡すためのタイマーのidが必要
    
    clearTimeout(timerId);
    
    timeToadd += Date.now() - startTime;

    home.style.visibility = 'hidden';
    result.style.visibility = 'visible';


    //結果表示
    let result_time = document.getElementById("result_time");
    result_time.innerHTML = timer.textContent + "秒でした。";
    result_time.classList.add("resultClass");

    //差分表示
    let difference = document.getElementById("difference");
    difference.style.visibility = "hidden";
    let comment = document.getElementById("comment");
    comment.style.visibility = "hidden";
    let difTime = 0; //差の記録を入れる
    difTime  = ((elapsedTime - second)%60000/1000).toFixed(2);

    if(second != 0){
        difference.style.visibility = "visible";
        comment.style.visibility = "visible";
        difference.innerHTML = "目標との差は" + difTime + "秒でした。";
    
        if (-1.0 <= difTime && difTime <= 1.0) {
            comment.innerHTML = "素晴らしい!!";
        } else if(-5.0 <= difTime && difTime<= 5.0) {
            comment.innerHTML = "おしい!!";
        }else{
            comment.innerHTML = "もう一度チャレンジ!!"
        }
    }
});

let button3 = document.getElementById("reset");
button3.addEventListener('click', function() {
    
    //経過時刻を更新するための変数elapsedTimeを0にしてあげつつ、updateTimetTextで0になったタイムを表示。
    //elapsedTime = 0;

    //リセット時に0に初期化したいのでリセットを押した際に0を代入してあげる
    //timeToadd = 0;

    //updateTimetTextで0になったタイムを表示
    //updateTimeText();
    
    location.reload(); //ページをリロード

});

button.addEventListener("click", function() {
    //スタートボタンを押したとき、ストップボタンを表示し、スタートボタンを隠す
    button2.style.visibility = 'visible';
    button.style.visibility = 'hidden';
});

button2.addEventListener("click", function() {
    //ストップボタンを押したとき、リセットボタンを表示し、スタートボタンを隠す
    button3.style.visibility = 'visible';
    button2.style.visibility = 'hidden';
});

//30秒を押したときの処理
let thirty = document.getElementById('thirty');
thirty.addEventListener('click', function() {
    second = 30000; //30秒 = 30000ミリ秒
    //console.log(second);
});

//60秒を押したときの処理
let sixty = document.getElementById('sixty');
sixty.addEventListener('click', function() {
    second = 60000; //60秒 = 60000ミリ秒
    //console.log(second);
});

//90秒を押したときの処理
let ninety = document.getElementById('ninety');
ninety.addEventListener('click', function() {
    second = 90000; //90秒  = 90000ミリ秒
    //console.log(second);
});