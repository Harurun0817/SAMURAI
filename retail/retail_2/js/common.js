header();
// nav();
sideMenu();
footer();
function header() {
  fetch('components/header.html')
    .then(res => res.text())
    .then(data => {
      const header = document.getElementsByTagName('header');
      header[0].innerHTML = data;
    });
}
// function nav() {
//   fetch('components/nav.html')
//     .then(res => res.text())
//     .then(data => {
//       const nav = document.getElementsByTagName('nav');
//       nav[0].innerHTML = data;
//     });
// }
function sideMenu() {
  fetch('components/sidemenu.html')
    .then(res => res.text())
    .then(data => {
      const sideMenu = document.getElementById('sideMenu');
      sideMenu.innerHTML = data;
    });
}
function footer() {
  fetch('components/footer.html')
    .then(res => res.text())
    .then(data => {
      const footer = document.getElementsByTagName('footer');
      footer[0].innerHTML = data;
    });
}
const x = 2;
function getFontSize(){
  const root = document.documentElement;
  const style = window.getComputedStyle(root).getPropertyValue('font-size');
  return parseFloat(style);
}
function normal(){
  const fs = getFontSize();
  document.documentElement.style.fontSize = '16px';
}
function larger(){
  const fs = getFontSize();
  document.documentElement.style.fontSize = (fs + x) + 'px';
}
function smaller(){
  const fs = getFontSize();
  document.documentElement.style.fontSize = (fs - x) + 'px';
}
