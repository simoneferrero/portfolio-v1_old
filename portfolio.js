'use strict';

function parallax(element, speed) {
  var scrolltop = window.pageYOffset;
  var top = scrolltop * speed + 'px';
  element
    .css("top", top);
}

function callParallax(element, speed) {
  window.addEventListener('scroll', function() {
    parallax(element, speed);
});
}

function slowScroll() {
  $(window).on('mousewheel DOMMouseScroll', function(e) {
    var dir,
    amt = 100;

     e.preventDefault();
     if(e.type === 'mousewheel') {
       dir = e.originalEvent.wheelDelta > 0 ? '-=' : '+=';
  }
  else {
    dir = e.originalEvent.detail < 0 ? '-=' : '+=';
  }
    $('html').stop();
    $('body').stop().animate({
      scrollTop: dir + amt
    },250, 'linear');
  });
}

function fade(section, fadeSpeed) {
  $(window).scroll(function () {
      var scrollTop = $(window).scrollTop();
      var height = $(window).height()-fadeSpeed;

      $(section).css({
          'opacity': ((height - scrollTop) / (height))
      });
  });
}

function scrollTo(section) {
  $('html, body').animate({ scrollTop: $(section).offset().top }, 1700);
  return false;
}

function setProperty(section, property, value) {
  $(section).css(property, value);
}

function menuOpen() {
  $("#menu")
    .animate({"left": 0}, {duration: 1000, queue: false});
  $("#slider")
    .animate({"left": "18%"}, {duration: 1000, queue: false});
  $("#home > img")
    .animate({"width": "60%"}, {duration: 1000, queue: false})
    .animate({"margin-left": "10%"}, {duration: 1000, queue: false});
}

function menuClose() {
  $("#menu")
    .animate({"left": "-18%"}, {duration: 1000, queue: false});
  $("#slider")
    .animate({"left": 0}, {duration: 1000, queue: false});
  $("#home > img")
    .animate({"width": "70px"}, {duration: 1000, queue: false})
    .animate({"margin": "15px 15px 0 15px"}, {duration: 1000, queue: false});
}

function subMenu() {
  $("#projects").click(function() {
    $("#hidden")
      .removeAttr("display");
  });
  //$('<div>WOW</div>')
  //$('<div id="collapsing_menu" class="hidden" includeInLayout="false"><a href="#"><div id="decision_maker"><span>Decision Maker</span></div><a href="#"><div id="recipe_dosage"><span>Recipe Dosage</span></div></div>')
    //.insertAfter($("#projects"));
}
