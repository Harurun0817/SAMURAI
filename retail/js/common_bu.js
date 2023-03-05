window.onload = function(){
  header();
  nav();
  sideMenu();
  footer();
}
function header() {
  axios.get('components/header.html')
    .then(res => {
      var header = document.getElementsByTagName('header');
      header[0].innerHTML = res.data;
    }).catch(err => console.error(err));
}
function nav() {
  axios.get('components/nav.html')
    .then(res => {
      var nav = document.getElementsByTagName('nav');
      nav[0].innerHTML = res.data;
    }).catch(err => console.error(err));
}
function sideMenu() {
  axios.get('components/sidemenu.html')
    .then(res => {
      var sideMenu = document.getElementById('sideMenu');
      sideMenu.innerHTML = res.data;
    }).catch(err => console.error(err));
}
function footer() {
  axios.get('components/footer.html')
    .then(res => {
      var footer = document.getElementsByTagName('footer');
      footer[0].innerHTML = res.data;
    }).catch(err => console.error(err));
}
var x = 2;
function getFontSize(){
  var root = document.documentElement;
  var style = window.getComputedStyle(root).getPropertyValue('font-size');
  return parseFloat(style);
}
function normal(){
  var fs = getFontSize();
  document.documentElement.style.fontSize = '16px';
}
function larger(){
  var fs = getFontSize();
  document.documentElement.style.fontSize = (fs + x) + 'px';
}
function smaller(){
  var fs = getFontSize();
  document.documentElement.style.fontSize = (fs - x) + 'px';
}
