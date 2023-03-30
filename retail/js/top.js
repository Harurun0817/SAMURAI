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

/**
 * Topページ用のサイドメニュー生成
 */
$.ajax({
  type: 'GET',
  url: 'components/sidemenu.html',
  dataType: 'html',
  success: function (data) {
    let sideMenu = document.getElementById('sideMenu');
    sideMenu.innerHTML = data;
  },
  error: function () {
    alert('Include error sidemenu.');
  }
});

/**
 * メガメニューをループ処理でDOM追加
 */
let megaMenuRow = document.querySelector('.megaMenu .row');
console.log(megaMenu);
for(let i in megaMenu){
  /**
   * DOM生成
   */
  let col = document.createElement('div');
  col.classList.add('col');
  let colChild = document.createElement('div');
  colChild.classList.add('card', 'h-100', 'menu');
  let colGrandChild = document.createElement('div');
  colGrandChild.classList.add('card-body');
  let menuName = document.createElement('a');
  menuName.innerHTML = megaMenu[i][0].menuName;
  menuName.href = megaMenu[i][0].menuLink;
  let ul = document.createElement('ul');
  ul.classList.add('child_menu', 'row', 'row-cols-2');
  megaMenu[i][0].childMenu.forEach(le => {
    let li = document.createElement('li');
    li.classList.add('list-group-item', 'col');
    li.innerHTML = le.name;
    ul.appendChild(li);
  });

  /**
   * DOM追加
   */
  megaMenuRow.appendChild(col);
  col.appendChild(colChild);
  colChild.appendChild(colGrandChild);
  colGrandChild.appendChild(menuName);
  colGrandChild.appendChild(ul);
}