
/*--- Dropdown Menu Functionality ---*/

$(document).ready(function(){

  $(".dropdown-link").mouseenter(function(){
    $(".dropdown-menu").slideDown(1000);
  });

  $(".dropdown-link").mouseleave(function(){
    $(".dropdown-menu").slideUp(1000);
  });


});
