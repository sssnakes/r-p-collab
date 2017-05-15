function loadingBM(){
  setTimeout('$("#besideMouse").html("Rachel")'  , 0);
  setTimeout('$("#besideMouse").html("&amp;")'   , 500);
  setTimeout('$("#besideMouse").html("Pierre")'  , 1000);
  setTimeout('$("#besideMouse").html("and")'     , 1500);
  setTimeout('$("#besideMouse").html("Rachel")'  , 2000);
  setTimeout('$("#besideMouse").html("&#12425;")', 2500);
  setTimeout('$("#besideMouse").html("Pierre")'  , 3000);
  setTimeout('$("#besideMouse").html("et")'      , 3500);
}

$(document).ready(function(){

  // COLLAGE --------------------------------------------------------------------


  // $('.collage-a').each(function(i){
  //   $(this).delay(500 * i).fadeIn(500);
  // });

  var arr = ['a' , 'b' , 'c', 'd', 'e', 'f'];

  (function recurse(counter) {

      var a = arr[counter];
      var b = arr[counter + 1];

      console.log(a);
      console.log(b);

      $('.collage-' + a).each(function(i){
        $(this).delay(500 * i).fadeOut(500);
      });

      $('.collage-' + b).each(function(i){
        $(this).delay(500 * i).fadeIn(500);
      });

      delete arr[counter];
      arr.push(a);

      setTimeout(function() {
          recurse(counter + 1);
      }, 6000);

  })(0);



  // MOUSE ----------------------------------------------------------------------

  $(document).mousemove(function(e){
    var cpos = { top: e.pageY + 10, left: e.pageX + 10 };
    $('#besideMouse').offset(cpos);
  });

  function startLoadingBM(){
    loadingBMint = setInterval(loadingBM, 4000);
  }
  startLoadingBM();

  // SIDES ----------------------------------------------------------------------

  $('.st-rachel').mouseenter(function(){
    var win = -(($(window).width()/2) - 50);
    $('.sb-rachel').animate({ right: win }, 300);
  });


  $('.sb-rachel').mouseenter(function(){
    $('.sb-rachel').animate({ right: 0 }, 300);
  });

  $('.sb-rachel').mouseleave(function(){
    var win = ($(window).width()/2) + 60;
    $('.sb-rachel').animate({ right: -win }, 300);
  });



  $('.st-pierre').mouseenter(function(){
    var win = -(($(window).width()/2) - 50);
    $('.sb-pierre').animate({ left: win }, 300);
  });


  $('.sb-pierre').mouseenter(function(){
    $('.sb-pierre').animate({ left: 0 }, 300);
  });

  $('.sb-pierre').mouseleave(function(){
    var win = ($(window).width()/2) + 60;
    $('.sb-pierre').animate({ left: -win }, 300);
  });



  // INTRO SECTION --------------------------------------------------------------

  // var introH = $('.intro-container').height();
  // var contH  = $(window).height();
  // var travel = -(contH + introH);
  //
  // $('.intro-container').css('top', contH);
  // $('.intro-container').animate({
  //   top: travel
  // }, 40000);
  //
  // $('.intro-text').click(function(){
  //   $('.intro-text').fadeOut;
  // });

// END
});
