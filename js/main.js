
/*--- Dropdown Menu Functionality ---*/

$(document).ready(function() {
  $('.heaver-nav > li').bind('mouseover', openSubMenu);
  $('.header-nav > li').bind('mouseout', closeSubMenu);

  function openSubMenu() {
    $('.dropdown-menu-hidden').switchClass('dropdown-menu-hidden', 'dropdown-menu-visible', 1000);
  };
  
  function closeSubMenu() {
    $('.dropdown-menu-visible').switchClass('dropdown-menu-visible', 'dropdown-menu-hidden', 1000);
  };


});