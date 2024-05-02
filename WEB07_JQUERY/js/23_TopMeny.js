$(() => {
    $('.hmenu').click(() => {
        $('.menu').toggle(300, () => {})
        $('.hmenu div').toggleClass('active')
    })
})