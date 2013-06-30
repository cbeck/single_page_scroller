$(document).ready(function() {	
  $(".content-link").click(function() {
    $.scrollTo($($(this).attr("href")).offset().top-100, {
				axis:'y',
	      duration: 600
	  });	  
  });
  
  $(".home-link").click(function() {
    $.scrollTo(0, {
				axis:'y',
	      duration: 600
	  });
  });
  
  $('.flexslider').flexslider({
      animation: "slide",
      slideshow: false
  });
  
  $('.slider').flexslider({
      animation: "slide",
      slideshowSpeed: 15000,
      pauseOnHover: true
  });
  
  $('#services_list_link').click(function() {
    $('#services_list_wrapper').slideToggle();
    $.scrollTo($('#services_list_wrapper').offset().top-100, {
				axis:'y',
	      duration: 600
	  });
  });
  
  $('#services_list_closer').click(function() {
    $('#services_list_wrapper').slideUp();
    $.scrollTo($('#services').offset().top-100, {
				axis:'y',
	      duration: 600
	  });
    return false;
  });  
  
  $('.launch_video').click(function() {
    $('#video').show();
    return false;
  });
  
  $('.close_video').click(function() {
    $('#video').hide();
    return false;
  });
  
  
  
});

function adjustStyle(width) {
    width = parseInt(width);
    if (width < 700) {
        $("#size-stylesheet").attr("href", "stylesheets/narrow.css");
    } else if ((width >= 701) && (width < 1399)) {
        $("#size-stylesheet").attr("href", "stylesheets/medium.css");
    } else {
       $("#size-stylesheet").attr("href", "stylesheets/wide.css"); 
    }
}

function printObject(o) {
  var out = '';
  for (var p in o) {
    out += p + ': ' + o[p] + '\n';
  }
  alert(out);
}

$(function() {
    adjustStyle($(this).width());
    $(window).resize(function() {
        adjustStyle($(this).width());
    });
});
