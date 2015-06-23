
/*--- Dropdown Menu Functionality ---*/

$(document).ready(function(){

  $(".dropdown-link").mouseenter(function(){
    $(".dropdown-menu").slideDown(500);
  });

  $(".dropdown-menu, .dropdown-link").mouseleave(function(){
    $(".dropdown-menu").slideUp(500);
  });

  $('.dropdown-menu').mouseenter(function() {
        $(this).show();
    });

});
