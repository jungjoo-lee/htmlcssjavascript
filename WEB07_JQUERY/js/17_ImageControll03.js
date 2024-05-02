$(() => {
    var imgNum = 0;
    var timer;

    $('#view').hover(() => {
        window.clearInterval(timer);
    }, () => {
        timer = window.setInterval(() => {
            $('#imgs').animate({left: -170 * imgNum++}, 500);

            if (imgNum > 9)
                imgNum = 0;
        }, 1000)
    })
})