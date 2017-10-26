$(document).ready(function () {
  // $('.confirmation').on('click', 'button', function() {
  //   $(this).closest('.confirmation').find('.ticket').slideDown();
  // });
  //
  // $('.confirmation').on('mouseenter', 'h3', function() {
  //   $(this).closest('.confirmation').find('.ticket').slideDown();
  // });

  $('.confirmation').find('h3').on('mouseenter', function() {
      console.log('mouse entered...');
      $(this).closest('.confirmation').find('.ticket').slideDown();
  });

  $('.confirmation').find('h3').on('mouseout', function() {
    $(this).closest('.confirmation').find('.ticket').slideUp();
  });
});