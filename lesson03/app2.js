$(document).ready(function () {
  $('.vacation').find('input').on('keyup', function() {
      var price = +$(this).closest('.vacation').data('price');
      var quantity = +$(this).val();
      $('#total').text(price * quantity);
  });
});