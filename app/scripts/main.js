(function($) {
  $(document).ready(function() {
    // Toogle Menu
    $('.burger--js').click(function(e) {
      e.preventDefault();
      $(this).toggleClass('burger--is_open');
      $('.navigation').toggleClass('navigation--is_open');
      $('body').toggleClass('is--scroll_off');
    });
  });
})(jQuery);

