$(document).ready(function () {
    $('.care__name').click(function (event) {
        $(this).toggleClass('active').next().slideToggle(300);
    });
});