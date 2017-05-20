window.onload = function () {

  setTimeout(function () {
    $('.loading-screen').fadeOut();
  }, 2000);

};

$(document).ready(function(){

// MOBILE --------------------------------------------------------------------

  var mobCheck = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  if ( mobCheck ){

    $('.menu-tr').click(function() {
      $('.sb-rachel').animate({
        right: 0
      });
    });

    $('.back-rachel').click(function(){
      $('.sb-rachel').animate({
        right: '-100%'
      });
    });

    $('.menu-tl').click(function() {
      $('.sb-pierre').animate({
        left: 0
      });
    });

    $('.back-pierre').click(function(){
      $('.sb-pierre').animate({
        left: '-100%'
      });
    });


  } else{

    // MOUSE FUNCTION
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

    $(document).mousemove(function(e){
      var cpos = { top: e.pageY + 10, left: e.pageX + 10 };
      $('#besideMouse').offset(cpos);
    });

    function startLoadingBM(){
      loadingBMint = setInterval(loadingBM, 4000);
    }
    startLoadingBM();

  }

  // COLLAGE --------------------------------------------------------------------

  var arr = ['a' , 'b' , 'c', 'd', 'f', 'e'];

  (function recurse(counter) {

      var a = arr[counter];
      var b = arr[counter + 1];

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

  // LOADING DOTS ---------------------------------------------------------------

  var dots = window.setInterval( function() {
    var wait = document.getElementById("wait");
    if ( wait.innerHTML.length > 2 )
        wait.innerHTML = "";
    else
        wait.innerHTML += ".";
  }, 300);



  // SIDES ----------------------------------------------------------------------


  // WORKING VERSION OF SIDES BUMP BEFORE FULL SLIDE
  // $(".st-pierre").mouseenter(function(){
  //
  //     var win = -(($(window).width()/2) - 50);
  //     $('.sb-pierre').animate({ left: win }, 200);
  //
  //     clearTimeout($(this).data('timeoutId'));
  //
  // }).mouseleave(function(){
  //
  //     var someElement = $(this),
  //
  //         timeoutP = setTimeout(function(){
  //           console.log('trigger');
  //           var win = -($(window).width()/2);
  //           $('.sb-pierre').animate({ left: win }, 100);
  //         }, 300);
  //
  //     //set the timeoutId, allowing us to clear this trigger if the mouse comes back over
  //     someElement.data('timeoutId', timeoutP);
  //
  // });
  //
  // $('.sb-pierre').mouseenter(function(){
  //
  //   $('body').css('position', 'fixed');
  //   clearTimeout($('.st-pierre').data('timeoutId'));
  //   $('.sb-pierre').animate({ left: 0 }, 300);
  //
  // }).mouseleave(function(){
  //
  //   $('body').css('position', 'static');
  //   console.log('sb-pierre leave');
  //   var win = -($(window).width()/2);
  //   $('.sb-pierre').animate({ left: win });
  //
  // });

  $(".st-pierre").mouseenter(function(){

    $('body').css('position', 'fixed');
    $('.sb-pierre').animate({ left: 0 }, 400);
    $('.face-container').animate({ left: '75%' }, 400);
    $('.menu-bot').animate({ left: '75%' }, 400);
    var arrowpos = $(window).width()/2;
    var trueapos = arrowpos + 20;
    console.log(trueapos);
    $('.menu-tl').animate({ left: trueapos }, 400);

  });

  $('.sb-pierre').mouseleave(function() {

    if(mobCheck){
      return;
    } else{
      $('body').css('position', 'static');
      var win = -($(window).width()/2);
      $('.sb-pierre').animate({ left: win }, 400);
      $('.face-container').animate({ left: '50%' }, 400);
      $('.menu-bot').animate({ left: '82%' }, 400);
      $('.menu-tl').animate({ left: '20px' }, 400);
    }

  });

  $(".st-rachel").mouseenter(function(){

    $('body').css('position', 'fixed');
    $('.sb-rachel').animate({ right: 0 }, 400);
    $('.face-container').animate({ left: '25%' }, 400);
    $('.menu-bot').animate({ left: '25%' }, 400);
    var arrowpos = $(window).width()/2;
    var trueapos = arrowpos + 20;
    console.log(trueapos);
    $('.menu-tr').animate({ right: trueapos }, 400);

  });

  $('.sb-rachel').mouseleave(function() {

    if(mobCheck){
      return;
    } else{
      $('body').css('position', 'static');
      var win = -($(window).width()/2);
      $('.sb-rachel').animate({ right: win }, 400);
      $('.face-container').animate({ left: '50%' }, 400);
      $('.menu-bot').animate({ left: '82%' }, 400);
      $('.menu-tr').animate({ right: '20px' }, 400);
    }

  });

  $('.menu-bot').mouseenter(function() {
    var vh = $(window).height();
    $('html, body').animate({ scrollTop : vh }, 300);
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
