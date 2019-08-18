// ScrollReveal
const fromBottom = {
  distance: '50%',
  origin: 'bottom',
  duration: 800
};
const fromBottomLong = {
  ...fromBottom, distance: '100%'
}
const fromLeft = {
  distance: '50%',
  origin: 'left',
  duration: 800
};
const fromRight = {
  distance: '50%',
  origin: 'right',
  duration: 800
};
const fromTop = {
  distance: '50%',
  origin: 'top',
  duration: 800
}
ScrollReveal().reveal('.from-left', fromLeft);
ScrollReveal().reveal('.from-right', fromRight);
ScrollReveal().reveal('.from-top', fromTop);

ScrollReveal().reveal('.from-bottom', fromBottom);
ScrollReveal().reveal('.from-bottom_50', {...fromBottom, delay: 50});
ScrollReveal().reveal('.from-bottom_100', {...fromBottom, delay: 100});
ScrollReveal().reveal('.from-bottom_150', {...fromBottom, delay: 150});
ScrollReveal().reveal('.from-bottom_long', fromBottomLong);


(function($) {
  $(document).ready(function() {
    // Toogle Menu
    $('.burger--js').click(function(e) {
      e.preventDefault();
      $(this).toggleClass('burger--is_open');
      $('.navigation').toggleClass('navigation--is_open');
      $('body').toggleClass('is--scroll_off');
    });

    // Toogle Taps
    $('.tap__button--js').click(function(e) {
      e.preventDefault();

      const $this = $(this);
      const tapId = $this.attr('href').replace('#', '');
      const $tapContent = $(`[data-tap='${tapId}']`);

      $('.tap-content').slideUp(600);

      if ($this.hasClass('is_open')) {
        $('.tap__button--js').removeClass('is_open');
        $tapContent.slideUp(600);
      } else {
        $('.tap__button--js').removeClass('is_open');
        $this.addClass('is_open');
        $tapContent.slideDown(600);
      }
    });
    $('.tap-close').click(function(e) {
      e.preventDefault();

      $('.tap-content').slideUp(600);
    });
  });
})(jQuery);
