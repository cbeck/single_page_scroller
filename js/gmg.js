$(document).ready(function() {
	
	// Homepage scroller
  var fixed = false;
  $(window).scroll(function() {           // IE8 will ignore $(document)
    if( $(this).scrollTop() >= 170 ) {
      if( !fixed) {
        fixed = true;
        $('nav#fixable').addClass('knockout');
        $('.scrollfix').addClass('taller'); // otherwise the change in heights messes up the animated scrolling calculations
        $('.remove').fadeIn('slow', function() {});
      }                                           
    } else if($(this).scrollTop() == 0) {
      $('.remove').fadeOut(1000);
      $('.hideable').hide();
    } else {
      if( fixed ) {
        fixed = false;
        $('nav#fixable').removeClass('knockout');
        $('.scrollfix').removeClass('taller');
      }
    }
  });
  
  
  // link actions
  $(".content-link").click(function() {
    $('.remove').fadeIn('slow', function() {
      //tried to scroll here, but it blew up
    });	
    $.scrollTo($($(this).attr("href")), {
				axis:'y',
	      duration: 600
	  });	  
  });
  
  $(".home-link").click(function() {
    $.scrollTo($($(this).attr("href")), {
				axis:'y',
	      duration: 600
	  });
	  $('.remove').fadeOut(1000);
  });
  
  $(".hidden-div-link").click(function() {
    $($(this).attr("href")).fadeToggle();
    return false;    
  });
  
  $("#our_approach_link").click(function() {
    $('#our-services').fadeOut();
    $('#our-approach').fadeIn();
    return false;
  });
  
  $("#our_services_link").click(function() {
    $('#our-approach').fadeOut();
    $('#our-services').fadeIn();
    return false;
  });
  
  $('.flexslider').flexslider({
      animation: "slide"
  });
});


// var fixed = false;
// $(window).scroll(function() {      // IE8 will ignore $(document)
//     if( $(this).scrollTop() >= 200 ) {
//    if( !fixed) {
//      fixed = true;
//      $('nav#fixable').addClass('knockout');
//      $('#scrollfix').addClass('taller'); // otherwise the change in heights messes up the animated scrolling calculations
//      }                                           
//      } else {
//          if( fixed ) {
//              fixed = false;
//              $('nav#fixable').removeClass('knockout');
//          $('#scrollfix').removeClass('taller');
//        }
//      }
// });

// $(document).ready(function() {
//     $('nav#fixable').onePageNav({
//       currentClass: 'active',
//       changeHash: true,
//       scrollSpeed: 600,
//     });
    // $('#nav').onePageNav({
    //         currentClass: 'current',
    //         changeHash: false,
    //         scrollSpeed: 100,
    //         scrollOffset: 100,
    //         scrollThreshold: 0.5,
    //         filter: '',
    //         easing: 'swing',
    //         begin: function() {
    //             //I get fired when the animation is starting
    //         },
    //         end: function() {
    //             //I get fired when the animation is ending
    //         },
    //         scrollChange: function($currentListItem) {
    //             //I get fired when you enter a section and I pass the list item of the section
    //         }
    //     });
    
    // var fixed = false;
    //     $(window).scroll(function() {           // IE8 will ignore $(document)
    //       if( $(this).scrollTop() >= 200 ) {
    //         if( !fixed) {
    //           fixed = true;
    //           //$('nav#fixable').addClass('knockout');
    //           //$('#scrollfix').addClass('taller'); // otherwise the change in heights messes up the animated scrolling calculations
    //         }                                           
    //       } else {
    //         if( fixed ) {
    //           fixed = false;
    //           //$('nav#fixable').removeClass('knockout');
    //           //$('#scrollfix').removeClass('taller');
    //         }
    //       }
    //     });
    
    // $(function() {
    //         var linked = false;
    //      $("a#model-link").click(function() {
    //          linked = true;
    //          $('.hideable').hide();
    //          $.scrollTo('200px', 300);           
    //          $('#model-top').show();    
    //          linked = false;     
    //      });
    //      $("a#services-link").click(function() {
    //          linked = true;
    //          $('.hideable').hide();
    //          $.scrollTo('340px', 300);           
    //          $('#services-top').show();
    //          linked = false;     
    //      });
    //      $("a#team-link").click(function() {
    //          linked = true;
    //          $('.hideable').hide();
    //          $.scrollTo('480px', 300);           
    //          $('#team-top').show();
    //          linked = false;     
    //      });
    //      $("a#home-link").click(function() {
    //          linked = true;
    //          $('.hideable').hide();
    //          $.scrollTo('0px', 300);         
    //          $('#home-top').show();
    //          linked = false;     
    //      });
		
		// $(window).scroll(function() {
		//            if ($(this).scrollTop() < 200  && !linked) {
		//                $('.hideable').hide();
		//                $('#home-top').show();
		//            } else if (($(this).scrollTop() >= 200 && $(this).scrollTop() < 340)  && !linked) {
		//                    $('.hideable').hide();
		//                    $('#model-top').show();
		//             } else if(($(this).scrollTop() >= 340 && $(this).scrollTop() < 480) && !linked) {
		//                $('.hideable').hide();
		//                $('#services-top').show();
		//            } else if($(this).scrollTop() >= 480 && !linked) {
		//                 $('.hideable').hide();
		//                 $('#team-top').show();
		//            }
		//        });
		//    });
		
//});