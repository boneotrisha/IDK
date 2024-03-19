/* using Jquery */

$(document).ready(function () {
    $('.navbar-nav a').click(function () {
        $('.navbar-nav a').removeClass('active');
        $(this).addClass('active');
    });
    $('.dropdown-menu a.dropdown-item').click(function () {
        $('.dropdown-menu a.dropdown-item').removeClass('active');
        $(this).addClass('active');
        var selectedText = $(this).text();
        $('.dropdown-toggle.hov-sec').html(selectedText);
        $('.dropdown-toggle.hov-sec').addClass('active');
    });
});