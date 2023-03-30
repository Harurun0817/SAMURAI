// サイドメニューのDOMを取得している
let sideMenu = document.getElementById('sideMenu_child');

// 現在のURLを取得している
let url = location.href.split('/');
url = url[url.length - 1].split('.');
console.log(url);


/**
 * メガメニューをループ処理でDOM追加
 */
megaMenu[url[0]].forEach( e => {
  let h3 = document.createElement('h3');
  h3.classList.add('aside');
  h3.innerHTML = e.title;
  sideMenu.appendChild(h3);
  let ul = document.createElement('ul');
  ul.classList.add('iconList');
  sideMenu.appendChild(ul);
  e.childMenu.forEach( c => {
    /**
     * DOM生成
     */
    let li = document.createElement('li');
    let liChild = document.createElement('a');
    liChild.innerHTML = c.name;
    liChild.href = c.url;
  
    /**
     * DOM追加
     */
    li.appendChild(liChild);
    ul.appendChild(li);
  });
});

