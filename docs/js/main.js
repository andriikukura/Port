$(window).on('resize', function() {
    var win = $(this);
    if (win.width() < 767) {
  
      
      $('#design1').addClass('order-2');
      $('#design2').addClass('order-1');
  
    } else {
      
      $('#design1').removeClass('order-2');
      $('#design2').removeClass('order-1');
    }
  });