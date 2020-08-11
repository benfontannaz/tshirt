
// function wScroll to know how far from the Top the scroll currently is
// $(window).scroll(function(){
//
//   var wScroll = $(this).scrollTop();
//
//   console.log(wScroll)
//
// });


$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  // ----------------------------- header -----------------------------

  // scroll spead /2
  $('.logo').css({
    'transform' : 'translate(0px, '+ wScroll /2 +'%)'
  });

  // scroll spead /4
  $('.back-bird').css({
    'transform' : 'translate(0px, '+ wScroll /4 +'%)'
  });

  // .fore-bird other Scroll possibility
  // $('.fore-bird').css({
  //   'transform' : 'translate(0px, '+ wScroll *(-0.05) +'%)'
  // });

  // scroll speed divided by 40
  $('.fore-bird').css({
    'transform' : 'translate(0px, -'+ wScroll /40 +'%)'
  });


  // ----------------------------- .clothes-pics Grid -----------------------------

  // start counting scrolling when class ".clothes-pics" reaches the top of the viewport - (vh / 1.2)
  // scroll counting at when 20% of class ".clothes-pics" is visible in the viewport

  if(wScroll > $('.clothes-pics').offset().top - ($(window).height() / 1.2)){

      //Starts counting scrolls with a the Hi log (to check it in the viewer) can be commented after successfully working
      // console.log("Hi");

      //for each figure in the .clothes-pics class
      $('.clothes-pics figure').each(function(i){
        //for each element "i" found
        setTimeout(function(){
        $('.clothes-pics figure').eq(i).addClass('is-showing');
      // }, 150 * (i+1));
    }, (700 * (Math.exp(i * 0.14))) - 700);
    });

  }

  // ----------------------------- Periscope -----------------------------
  // fucntion added at CCS var line

  if(wScroll > $('.large-window').offset().top - $(window).height()){

    //Starts counting scrolls "Yo" log once the top of the windows
    // console.log("Yo");

    // periscope background image scroll position adjustment
    // $('.large-window').css({'background-position':'center '+ (wScroll - $('.large-window').offset().top) +'px'
    // });

    // opacity of the periscope promo text in class .window-tint
    var opacity = (wScroll - $('.large-window').offset().top + 800) / (wScroll / 3)

    $('.window-tint').css({'opacity': opacity})

  }

  // ----------------------------- Posts Section -----------------------------
  // function added at CCS var line

  if(wScroll > $('.blog-posts').offset().top - $(window).height()){

    var offset = Math.min(0, wScroll - $('.blog-posts').offset().top + $(window).height() -500);

    $('.post-1').css({'transform': 'translate('+ offset +'px, '+ Math.abs(offset * 0.1) + 'px)'});

    $('.post-3').css({'transform': 'translate('+ Math.abs(offset) + 'px, '+ Math.abs(offset * 0.1) + 'px)'});



  }

});
