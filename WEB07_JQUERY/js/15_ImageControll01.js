$(() => {
    $('img:first').hover((e) => {
        e.currentTarget.src = '/images/3.jpg';
    }, (e) => {
        e.currentTarget.src = '/images/1.jpg';
    })

    $('img:last').hover((e) => {
        e.currentTarget.src = '/images/4.jpg';
    }, (e) => {
        e.currentTarget.src = '/images/2.jpg';
    })
})