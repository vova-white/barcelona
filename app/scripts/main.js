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

      const tapId = $(this).attr('href').replace('#', '');
      const $tapContent = $(`[data-tap='${tapId}']`);

      $('.tap-content').hide();
      $tapContent.show();
    });
    $('.tap-close').click(function(e) {
      e.preventDefault();

      $('.tap-content').hide();
    });
  });
})(jQuery);

