$(document).ready(function () {
    $('.care__name').click(function (event) {
        $(this).toggleClass('active').next().slideToggle(300);
    });
    $('.header__burger').click(function (event) {
        $('.header__burger, .header__options').toggleClass('active');
        $('body').toggleClass('lock');
    });
});