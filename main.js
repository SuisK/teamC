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

    timerId.textCountent = m + ':' + s + ':' + ms;
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
    console.log("hello world");
    countUp();
});

stop.addEventListener('click',function(){

    //タイマーを止めるにはclearTimeoutを使う必要があり、そのためにはclearTimeoutの引数に渡すためのタイマーのidが必要
   clearTimeout(timerId);


    //タイマーに表示される時間elapsedTimeが現在時刻かたスタートボタンを押した時刻を引いたものなので、
    //タイマーを再開させたら0になってしまう。elapsedTime = Date.now - startTime
    //それを回避するためには過去のスタート時間からストップ時間までの経過時間を足してあげなければならない。elapsedTime = Date.now - startTime + timeToadd (timeToadd = ストップを押した時刻(Date.now)から直近のスタート時刻(startTime)を引く)
   timeToadd += Date.now() - startTime;
});











//let timer = document.getElementById("timer");
