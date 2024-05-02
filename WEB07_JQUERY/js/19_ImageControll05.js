$(() => {
    var imgNum = 0;
    let timer;
    let state = false;

    $('#remote div:eq(1)').addClass('selected');
    $('#remote div').click((e) => {
        var $target = $(e.currentTarget);
        var idx = $target.index();

        if (idx == 0) {
            if (imgNum > 0)
                imgNum--;
            else
                imgNum = 7;
        } else if (idx == 9) {
            if (imgNum < 7)
                imgNum++;
            else
                imgNum = 0;
        } else if (idx == 10) {
            if (state == true) {
                state = false;
                $('#remote div:eq(' + idx + ')').html('▶');
                window.clearInterval(timer);
            } else {
                state = true;
                $('#remote div:eq(' + idx + ')').html('■');
                timer = window.setInterval(() => {
                    imgNum++;
    
                    if (imgNum > 7)
                        imgNum = 0;

                    $('#imgs').animate({left: -600 * imgNum}, 500);
                    $('#remote div').removeClass('selected');
                    $('#remote div:eq(' + (imgNum + 1) + ')').addClass('selected');
                }, 1000);
            }
        } else
            imgNum = idx - 1;

        $('#imgs').animate({left: -600 * imgNum}, 500);
        $('#remote div').removeClass('selected');
        $('#remote div:eq(' + (imgNum + 1) + ')').addClass('selected');
    });
});