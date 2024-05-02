$(() => {
    $('div').mouseover((e) => {
        $(e.currentTarget).animate({left: 500}, 1000);
    })

    $('div').mouseout((e) => {
        $(e.currentTarget).animate({left: 0}, 1000);
    })
})