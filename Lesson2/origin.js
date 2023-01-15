// ボタン、モダル、モダルの閉じるボタン、オーバーレイを変数に格納
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const modal1 = document.querySelector('.modal1');
const modal2 = document.querySelector('.modal2');
const closeBtn1 = document.querySelector('.close1');
const closeBtn2 = document.querySelector('.close2');
const overlay = document.querySelector('.overlay');

// ボタンをクリックしたら、モダルとオーバーレイに.activeを付ける
btn1.addEventListener('click', function (e) {
  // aタグのデフォルトの機能を停止する
  e.preventDefault();
  // モーダルとオーバーレイにactiveクラスを付与する
  modal1.classList.add('active');
  overlay.classList.add('active');
});

btn2.addEventListener('click', function (e) {
  // aタグのデフォルトの機能を停止する
  e.preventDefault();
  // モーダルとオーバーレイにactiveクラスを付与する
  modal2.classList.add('active');
  overlay.classList.add('active');
});

// ページ読み込み時にモーダル発生
window.onload = function () {
  modal1.classList.add('active');
  overlay.classList.add('active');
}


// モダルの閉じるボタンをクリックしたら、モダルとオーバーレイのactiveクラスを外す
closeBtn1.addEventListener('click', function () {
  modal1.classList.remove('active');
  overlay.classList.remove('active');
});
closeBtn2.addEventListener('click', function () {
  modal2.classList.remove('active');
  overlay.classList.remove('active');
});

// オーバーレイをクリックしたら、モダルとオーバーレイのactiveクラスを外す
overlay.addEventListener('click', function () {
  modal.classList.remove('active');
  overlay.classList.remove('active');
});
