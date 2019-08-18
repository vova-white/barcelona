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
      const tapId = $this
        .attr('href')
        .replace('#', '');
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
