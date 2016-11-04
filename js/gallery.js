
$("#slideshow > div:gt(0)").hide();
/*sets intervals for when next gallery slide plays (in seconds)*/
setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(2500)
    .next()
    .fadeIn(2500)
    .end()
/*inserts image elements at the end of the specifyed time of 2.5seconds*/
    .appendTo('#slideshow');
},  2500);
