$(function () {
  let footer = $('footer');
  Stickyfill.add(footer);
  $.ajax({
    type: 'GET',
    url: 'components/header.html',
    dataType: 'html',
    success: function (data) {
      let header = document.getElementsByTagName('header');
      header[0].innerHTML = data;
    },
    error: function () {
      alert('Include error header.');
    }
  });

  $.ajax({
    type: 'GET',
    url: 'components/nav.html',
    dataType: 'html',
    success: function (data) {
      let nav = document.getElementsByTagName('nav');
      nav[0].innerHTML = data;
    },
    error: function () {
      alert('Include error nav.');
    }
  });

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

  $.ajax({
    type: 'GET',
    url: 'components/footer.html',
    dataType: 'html',
    success: function (data) {
      let footer = document.getElementsByTagName('footer');
      footer[0].innerHTML = data;
    },
    error: function () {
      alert('Include error footer.');
    }
  });
});

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
