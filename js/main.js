
/*--- Dropdown Menu Functionality ---*/

$(document).ready(function(){

if(!!('ontouchstart' in window)){//check for touch device
//behaviour and events for touch device
 $(".dropdown-link").click(function(){
    $(".dropdown-menu").slideToggle(500);
  });
}

else{
  
  $(".dropdown-link").mouseenter(function(){
    $(".dropdown-menu").slideDown(500);
  });

  $(".dropdown-menu").mouseleave(function(){
    $(".dropdown-menu").slideUp(500);
  });

  $('.no').mouseenter(function() {
        $(".dropdown-menu").slideUp(500);
  });
}


  $(".category-image").click(function(){
  	$(this).css("box-shadow", "none");
  });

}); 

