$(() => {
    var imgNum = 0;
    let timer;

    $('#remote div:eq(0)').addClass('selected');
    $('#sub .content').hide();
    $('#sub .content:eq(' + imgNum + ')').show();
    $('#sub').hide();
    $('#sub').attr('bottom', 0);
    $('#sub').show();
    $('#sub').animate({bottom: 84}, 500);

    timer = window.setInterval(() => {
        $('#sub').hide();
        $('#sub').attr('bottom', 0);
        
        if (imgNum > 5)
            imgNum = 0;

        $('#count').html((imgNum + 1) + '/6');
        $('#sub .content').hide();
        $('#sub .content:eq(' + imgNum + ')').show();
        $('#sub').show();
        $('#sub').animate({bottom: 84}, 500);
        $('#imgs').animate({left: -1000 * imgNum}, 500);
        $('#remote div').removeClass('selected');
        $('#remote div:eq(' + (imgNum++) + ')').addClass('selected');
    }, 1500);

    $('#remote div').click((e) => {
        $('#sub').hide();
        $('#sub').attr('bottom', 0);
        imgNum = $(e.currentTarget).index();

        $('#count').html((imgNum + 1) + '/6');
        $('#sub .content').hide();
        $('#sub .content:eq(' + imgNum + ')').show();
        $('#sub').animate({bottom: 84}, 500);
        $('#sub').show();
        $('#imgs').animate({left: -1000 * imgNum}, 500);
        $('#remote div').removeClass('selected');
        $(e.currentTarget).addClass('selected');
    });
});