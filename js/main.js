
/*--- Dropdown Menu Functionality ---*/

$(document).ready(function(){

  $(".dropdown-link").mouseenter(function(){
    $(".dropdown-menu").slideDown(500);
  });

  $(".dropdown-menu").mouseleave(function(){
    $(".dropdown-menu").slideUp(500);
  });

});
