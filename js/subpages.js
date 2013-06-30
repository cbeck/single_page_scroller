$(document).ready(function() {
	// Homepage scroller
  var fixed = false;
  $(window).scroll(function() {           // IE8 will ignore $(document)
    if( $(this).scrollTop() >= 80 ) {
      if( !fixed) {
        fixed = true;
        $('nav#fixable').addClass('knockout');
        $('.scrollfix').addClass('even-taller');
      }                                           
    } else {
      if( fixed ) {
        fixed = false;
        $('nav#fixable').removeClass('knockout');
        $('.scrollfix').removeClass('even-taller');
      }
    }
  });
  
  // link actions
  $(".content-link").click(function() {
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

});
