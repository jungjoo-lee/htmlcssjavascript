$(() => {
    var imgNum = 0;
    let timer;
    var contentCount = $('#contents .content').length;

    $('#remote div:eq(0)').addClass('selected');
    $('#contents .content').eq(imgNum).animate({bottom: 100}, 500);
    $('#count').html((imgNum + 1) + '/' + contentCount);

    timer = window.setInterval(() => {        
        if (imgNum > 5) {
            imgNum = 0;
        }

        $('#count').html((imgNum + 1) + '/' + contentCount);
        
        $('#contents .content').eq(imgNum-1).animate({bottom: 0}, 500);
        $('#contents .content').eq(imgNum).animate({bottom: 100}, 500, () => {
            $('#contents .content').eq(imgNum).animate({bottom: 0}, 500);
        });

        $('#imgs').animate({left: -1000 * imgNum}, 500);
        $('#remote div').removeClass('selected');
        $('#remote div:eq(' + (imgNum++) + ')').addClass('selected');
    }, 1500);

    $('#remote div').click((e) => {
        imgNum = $(e.currentTarget).index();

        $('#count').html((imgNum + 1) + '/' + + contentCount);
        
        $('#contents .content').not(':eq(' + imgNum + ')').animate({bottom: 0}, 500);
        $('#contents .content').eq(imgNum).animate({bottom: 100}, 500, () => {
            $('#contents .content').eq(imgNum).animate({bottom: 0}, 500);
        });

        $('#imgs').animate({left: -1000 * imgNum}, 500);
        $('#remote div').removeClass('selected');
        $(e.currentTarget).addClass('selected');
    });
});