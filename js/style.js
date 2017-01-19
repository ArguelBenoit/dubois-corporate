
function allSizeCss() {
  ['#homepage', '#info', '#map', 'iframe'].forEach(function(element){
    $(element).css('min-height',  window.innerHeight + 'px');
  });

  ['#homepage', '#info'].forEach(function(element){
    $(element + ' .container').css('padding-top', ( window.innerHeight - $(element + ' .container').height() ) / 2 + 'px');
    // if ($(element).height() > window.innerHeight) {
    //   $(element).css('padding-top',  '70px');
    //   $(element).css('padding-bottom',  '70px');
    // }
  });

  $('.container2arrow').css('left', ( ( window.innerWidth / 2 ) - 20 ) + 'px');
  ['#container2arrow1', '#container2arrow2', '#container2arrow3'].forEach(function(element, i){
    if (i+1 == 1)
      $(element).css('top', ( $('#homepage').height() - 64 ) + 'px');
    if (i+1 == 2)
      $(element).css('top', ( $('#homepage').height() + $('#info').height() - 64 ) + 'px');
    if (i+1 == 3)
      $(element).css('top', ( $('#homepage').height() + $('#info').height() + $('#map').height() - 64 ) + 'px');
  });
}

function scrollHomepage() {
  $(window).scroll(function(){
    $('#homepage').css('opacity', 1 - $(window).scrollTop() / 250);
  });
}

function smouthScroll() {
  $('.js-scrollTo').on('click', function() {
    var page = $(this).attr('href');
    var speed = 750;
    $('html, body').animate( { scrollTop: $(page).offset().top }, speed );
    return false;
  });
}

$(document).ready(function() {
  smouthScroll();
  scrollHomepage();
  allSizeCss();
});

window.onresize = function(event) {
  allSizeCss();
};
