
/*--- Dropdown Menu Functionality ---*/

$(document).ready(function() {
  $('.heaver-nav > li').bind('mouseover', openSubMenu);
  $('.header-nav > li').bind('mouseout', closeSubMenu);

  function openSubMenu() {
    $(this).find('.dropdown-menu').css('visibility', 'visible');
  };
  
  function closeSubMenu() {
    $(this).find('.dropdown-menu').css('visibility', 'hidden');
  };


});