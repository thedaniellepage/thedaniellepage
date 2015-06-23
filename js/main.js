
/*--- Dropdown Menu Functionality ---*/

$(document).ready(function(){

  /* $(".dropdown-link").mouseenter(function(){
    $(".dropdown-menu").slideDown(500);
  });

  $(".dropdown-menu").mouseleave(function(){
    $(".dropdown-menu").slideUp(500);
  });

  $('.dropdown-menu').mouseenter(function() {
        $(".dropdown-menu").show();
    }); */


  $('dropdown-link').hover(function() {
        $('.dropdown-menu').slideDown(500);
    }, function() {
        $('.dropdown-menu').slideDown(500);
    });

    $('.dropdown-menu').mouseenter(function() {
        $(this).show();
    });

    $('.dropdown-menu').mouseleave(function() {
        $(this).hide();
    });

});
