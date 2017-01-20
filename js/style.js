
function cssSize() {
  ['#homepage', '#info', '#map', 'iframe'].forEach(function(element){
    $(element).css('min-height',  window.innerHeight + 'px');
  });
  ['#homepage', '#info'].forEach(function(element){
    $(element + ' .container').css('padding-top', ( window.innerHeight - $(element + ' .container').height() ) / 2 + 'px');
  });
}

function opacityHomepage() {
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

function changeTargetAtScroll() {
  var scroll = $(window).scrollTop(),
      homepage = $('#homepage').height(),
      info = $('#info').height(),
      map = $('#map').height(),
      footer = $('#footer').height();
  if (scroll == 0){
    $('.container-arrow-top i').css('display', 'none');
    $('.container-arrow-bottom i').attr('href', '#info');
  } else if (scroll > 0 && scroll < homepage ) { // scroll sur homepage
    $('.container-arrow-top i').css('display', 'inherit');
    $('.container-arrow-bottom i').attr('href', '#info');
  } else if(scroll >= homepage && scroll < homepage + info) { // scroll sur info
    $('.container-arrow-bottom i').attr('href', '#map');
  } else if(scroll >= homepage + info && scroll <= homepage + info + 200) { //scroll sur map
    $('.container-arrow-bottom i').attr('href', '#footer');
  }
}


$(document).ready(function() {
  cssSize();
  smouthScroll();
  opacityHomepage();
  changeTargetAtScroll();
});
window.onresize = function(event) {
  cssSize();
};
$(window).scroll(function(){
  changeTargetAtScroll();
});
