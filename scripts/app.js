function loadingBM(){
  setTimeout('$("#besideMouse").html("Rachel")', 0);
  setTimeout('$("#besideMouse").html("&amp;")', 500);
  setTimeout('$("#besideMouse").html("Pierre")', 1000);
}

$(document).ready(function(){

  // COLLAGE FADE
  // $('.collage').css('opacity', '0');

  $('.collage-a:lt(6)').each(function(i){
    $(this).delay(1000 * i).fadeIn(1000);
  });

  $('.collage-a').click(function(){
    $('.collage-a:lt(6)').each(function(i){
      $(this).delay(500 * i).fadeOut(500);
    });
    $('.collage-b:lt(6)').each(function(i){
      $(this).delay(500 * i).fadeIn(500);
    });
  });

  $('.collage-b').click(function(){
    $('.collage-b:lt(6)').each(function(i){
      $(this).delay(500 * i).fadeOut(500);
    });
    $('.collage-a:lt(6)').each(function(i){
      $(this).delay(500 * i).fadeIn(500);
    });
  });

  $(document).mousemove(function(e){
    var cpos = { top: e.pageY + 10, left: e.pageX + 10 };
    $('#besideMouse').offset(cpos);
  });

  function startLoadingBM(){
    loadingBMint = setInterval(loadingBM, 1500);
  }
  startLoadingBM();



  // INTRO SECTION
  var introH = $('.intro-container').height();
  var contH  = $(window).height();
  var travel = -(contH + introH);

  $('.intro-container').css('top', contH);
  $('.intro-container').animate({
    top: travel
  }, 20000);

  $('.intro-text').click(function(){
    $('.intro-text').fadeOut;
  });

// END
});
