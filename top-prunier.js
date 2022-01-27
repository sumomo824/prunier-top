$(function(){

    $('#menu-icon').click(function(){
        $('.hide-menu').css('left','0');
        $('#menu-icon').hide();
        $('.fa-times').show();
    });
    $('.fa-times').click(function(){
        $('.hide-menu').css('left','100%');
        $('#menu-icon').show();
        $('.fa-times').hide();
    });


});
