// ボタン、モダル、モダルの閉じるボタン、オーバーレイを変数に格納
const restate = document.querySelector('.restate');
const modal = document.querySelector('.my_modal');
const closeBtn = document.querySelector('.close');
const overlay = document.querySelector('.overlay');


// ボタンをクリックしたら、モダルとオーバーレイに.activeを付ける
restate.addEventListener('click', function(e){
    // aタグのデフォルトの機能を停止する    
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
