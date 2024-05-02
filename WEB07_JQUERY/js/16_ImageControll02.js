$(() => {
    let imgNum1 = 1;
    let imgNum2 = 1;
    let imgNum3 = 1;

    $('img:eq(0)').click((e) => {
        e.currentTarget.src = '/images/' + imgNum1++ + '.jpg';

        if (imgNum1 > 10)
            imgNum1 = 1;
    })

    $(() => {
        window.setInterval(() => {
            $('img:eq(1)').attr('src', 'images/' + imgNum2++ + '.jpg');

            if (imgNum2 > 10)
                imgNum2 = 1;
        }, 1000);
    });
    
    var timer;
    $(() => {
        $('img:eq(2)').hover(
            () => {
                window.clearInterval(timer);
            }, () => {
                timer = window.setInterval(() => {
                    $('img:eq(2)').attr('src', 'images/' + imgNum3++ + '.jpg');
                    
                    if(imgNum3>10)
                        imgNum3 = 1;
                }, 1000);
            }
        );
    })
})