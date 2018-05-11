$(document).ready(function () {
    $(".hover").hover(function () {
     $(this).find('ul').slideToggle('submenu');
    });

    var subMenu = $('li.hover > ul > li');

    subMenu.hover(function () {
      $(this).find("ul").slideToggle(250);
    });
}); 
     