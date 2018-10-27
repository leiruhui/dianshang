$(function(){

    // »Ö¸´AÔªËØµÄÌø×ª
    $('body').on('tap', 'a', function(){

        mui.openWindow({
            url: $(this).attr('href')
        });

    });

});