/**
 * For miscellaneous small utlities and initializations
 */

(function () {
  // Listens for an anchor with the class `.smooth-scroll`
  // and scrolls the user to that element's named anchor
  var smoothScroll = function () {
    var $smoothScrollTrigger = $('.smooth-scroll');
    $smoothScrollTrigger.on('click', function () {
      if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html,body').animate({scrollTop: target.offset().top}, 800);
          return false;
        }
      }
    });
  };

  Seoul.Utilities = function () {
    smoothScroll();
  };
}(this));