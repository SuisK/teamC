let timer = document.getElementById("timer");

let start = document.getElementById("button")

let startTime;

let elapsedTime = 0;//経過時間をいれる

let timerId;

let timeToadd = 0;//ストップから再開の時、値保持


function updateTimeText(){
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

function countUp(){
    timerId = setTimeout(function(){
        elapsedTime = Date.now() - startTime + timeToadd;
        updateTimeText()
        countUp();
    },10);
}


start.addEventListener("click",function(){
    startTime = Date.now();    //時間データをいれる
    countUp();
});

let button2 = document.getElementById('button2');
button2.addEventListener('click',function(){

    //タイマーを止めるにはclearTimeoutを使う必要があり、そのためにはclearTimeoutの引数に渡すためのタイマーのidが必要
   clearTimeout(timerId);


    
   timeToadd += Date.now() - startTime;
});

let button3 = document.getElementById("button3");
button3.addEventListener('click',function(){

        //経過時刻を更新するための変数elapsedTimeを0にしてあげつつ、updateTimetTextで0になったタイムを表示。
        elapsedTime = 0;

        //リセット時に0に初期化したいのでリセットを押した際に0を代入してあげる
        timeToadd = 0;

        //updateTimetTextで0になったタイムを表示
        updateTimetText();

    });











