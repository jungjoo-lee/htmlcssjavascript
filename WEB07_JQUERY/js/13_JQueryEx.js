$(() => {
    for (var i = 0; i < 5; i++) {
        ((e) => {
            $('.gnb a:eq(' + e + ')').hover(() => {
                $('.gnb a').css('opacity', 0.3);
                $('.gnb a:eq(' + e + ')').css('opacity', 1);            
            });
        })(i);
    }

    $('.gnb').on({
        'mouseout' : () => {
            $('.gnb a').css('opacity', 1);
        }
    })
})