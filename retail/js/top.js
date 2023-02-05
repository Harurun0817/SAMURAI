console.log("ok");

// ボタン、モダル、モダルの閉じるボタン、オーバーレイを変数に格納
const restate = document.querySelector('.restate');
const modal = document.querySelector('.my_modal');
const closeBtn = document.querySelector('.close');
const overlay = document.querySelector('.overlay');


// ボタンをクリックしたら、モダルとオーバーレイに.activeを付ける
restate.addEventListener('click', function(e){
    // aタグのデフォルトの機能を停止する    
    console.log("test");
    e.preventDefault();
    // モーダルとオーバーレイにactiveクラスを付与する
    modal.classList.add('active');
    overlay.classList.add('active');
});

// モダルの閉じるボタンをクリックしたら、モーダルとオーバーレイのactiveクラスを外す
closeBtn.addEventListener('click', function() {
    modal.classList.remove('active');
    overlay.classList.remove('active');
  });

  // オーバーレイをクリックしたら、モーダルとオーバーレイのactiveクラスを外す
overlay.addEventListener('click', function() {
    modal.classList.remove('active');
    overlay.classList.remove('active');
  });

  
// ページ読み込み時にモーダル発生
window.onload = function () {
    modal.classList.add('active');
    overlay.classList.add('active');
};


let x = 100;
function normal()  { document.documentElement.style.fontSize = '100%'; }
function larger()  { x *= 1.2; document.documentElement.style.fontSize = x + '%'; }
function smaller() { x /= 1.2; document.documentElement.style.fontSize = x + '%'; }

// let root = document.documentElement;