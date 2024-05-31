$(function () {
    let currentInterval;
    let jumping = false;
    $("img#rp-consulting-logo").mouseenter(function () {
        $(this).attr('src', 'img/rp-consulting.png');
    });
    $("img#rp-consulting-logo").mouseout(function () {
        $(this).attr('src', 'img/glitched_rp-consulting.gif');
    });
    $("#handmade").mouseenter(function () {
        let jumpFunction = function () {
            $("img#rp-turtle").animate({
                marginBottom: $('div.row').height() / 2
            }, {
                duration: 2000,
                specialEasing: {
                    width: "linear",
                    height: "easeOutBounce"
                },
                complete: function () {
                    $("img#rp-turtle").animate({
                        marginBottom: 0
                    }, {
                        duration: 2000,
                        specialEasing: {
                            width: "linear",
                            height: "easeOutBounce"
                        },
                    });
                }, 
            });
        };
        $("img#rp-consulting-logo").attr('src', 'img/rp-consulting-sun.png');
        if (!jumping) {
            $("div.images").css("border-bottom", "white 5px solid");
            $("img#rp-turtle").fadeIn();
            jumpFunction();
            jumping = true;
            currentInterval = setInterval(jumpFunction, 4100);
        }
    });
    $("#handmade").mouseout(function () {
        $("img#rp-turtle").fadeOut({
            complete: function() {
                if (currentInterval) {
                    clearInterval(currentInterval);
                    jumping = false;
                    $("div.images").css("border-bottom", "white 0px solid");
                }
            }
        })
        $("img#rp-consulting-logo").attr('src', 'img/glitched_rp-consulting.gif');
    });
});
