$(() => {
    $('#remote div:eq(0)').addClass('selected');

    $('#remote div').click((e) => {
        $('#imgs').animate({left: -600 * $(e.currentTarget).index()}, 500);
        $('#remote div').removeClass('selected');
        $(e.currentTarget).addClass('selected');
    });
});