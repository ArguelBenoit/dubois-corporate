
function allSizeCss() {
  ['#homepage', '#info', '#map', 'iframe'].forEach(function(element){
    $(element).css('min-height',  window.innerHeight + 'px');
  });

  ['#homepage', '#info'].forEach(function(element){
    $(element + ' .container').css('padding-top', ( window.innerHeight - $(element + ' .container').height() ) / 2 + 'px');
  });

  $('.container2arrow').css('left', ( ( window.innerWidth / 2 ) - 28 ) + 'px');
  ['#container2arrow1', '#container2arrow2', '#container2arrow3'].forEach(function(element, i){
    $(element).css('top', ( ( window.innerHeight * (i+1) ) - 72 ) + 'px');
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
