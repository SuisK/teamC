let timer = document.getElementById("timer");



let startTime;

let elapsedTime = 0; //経過時間をいれる

let timerId;

let timeToadd = 0; //ストップから再開の時、値保持

let second = 0;

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

    console.log(m + ':' + s + ':' + ms)
}

function countUp() {
    timerId = setTimeout(function() {
        elapsedTime = Date.now() - startTime + timeToadd;
        updateTimeText()
        countUp();
    }, 10);
}


let button = document.getElementById("start");
button.addEventListener("click", function() {
    startTime = Date.now(); //時間データをいれる
    countUp();
    timer.style.color = "#" + str + str + str;
    setT
});


let button2 = document.getElementById('stop');
button2.addEventListener('click', function() {


    //タイマーを止めるにはclearTimeoutを使う必要があり、そのためにはclearTimeoutの引数に渡すためのタイマーのidが必要
    clearTimeout(timerId);


    timeToadd += Date.now() - startTime;
    if (-1.0 <= (elapsedTime - second) && (elapsedTime - second) <= 1.0) {
        document.write(timer.textContent + "秒でした。" + "おめでとう!");
    } else {
        document.write(timer.textContent + "秒でした。" + "次は頑張ろう!");
    }
});

let button3 = document.getElementById("reset");
button3.addEventListener('click', function() {

    //経過時刻を更新するための変数elapsedTimeを0にしてあげつつ、updateTimetTextで0になったタイムを表示。
    elapsedTime = 0;

    //リセット時に0に初期化したいのでリセットを押した際に0を代入してあげる
    timeToadd = 0;

    //updateTimetTextで0になったタイムを表示
    updateTimeText();
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

let thirty = document.getElementById('thirty');
thirty.addEventListener('click', function() {
    second = 30;
    console.log(second);
});

let sixty = document.getElementById('sixty');
sixty.addEventListener('click', function() {
    second = 60;
    console.log(second);
});

let ninety = document.getElementById('ninety');
ninety.addEventListener('click', function() {
    second = 90;
    console.log(second);
});