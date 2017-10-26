$(document).ready(function () {
    // 1. 브라우저 로컬스토리지에 가격정보를 저장
    localStorage.setItem('hawaii', 399.99);
    localStorage.setItem('orlando', 199.99);
    localStorage.setItem('japan', 699.99);

    $('button').on('click', function () {
        // var price = $(this).closest('.vacation').data('price');
        var price = localStorage.getItem('orlando');
        var priceTag = $('<p>From $' + price + '</p>');
        $(this).closest('.vacation').append(priceTag);
        $(this).remove();
    });
});