$(function () {
    // 背景アニメーション
    particlesJS("background", {
        particles: {
            number: {
                value: 50,
                density: {
                    enable: true,
                    value_area: 1000
                }
            },
            color: {
                value: "#ffc9d2"
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0
                }
            },
            opacity: {
                value: 1,
                random: true,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0,
                    sync: false
                }
            },
            size: {
                value: 4,
                random: true,
                anim: {
                    enable: true,
                    speed: 24,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: false
            },
            move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 600
                }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: false
                },
                onclick: {
                    enable: false
                },
                resize: true
            }
        },
        retina_detect: true
    });

    // ナビアイコン、フッターホバー
    $(".footer-wrrapper li,.navhead,i").on("mouseover", function () {
        $(this).css("opacity", 0.7)
        $(this).on("mouseleave", function () {
            $(this).css("opacity", 1)
        })
    })


    // メインコンテンツ
    AOS.init({
        offset: 200,
        delay: 500,
        duration: 600,
        easing: 'ease-out',
        anchorPlacement: 'bottom-center',
        once: false
    });


    // hoverコンテンツ
    $('.hover').each(function () {
        var off_img = $(this).find('img').attr('src').replace('_off', '_on');
        var on_img = $('<img src="' + off_img + '" alt="" style="position:absolute; opacity:0;" />');
        $(this).find('img').before(on_img);
        $(this).find('img').hover(function () {
            $(this).stop().animate({ 'opacity': '1' }, 400);
        }, function () {
            $(this).stop().animate({ 'opacity': '0' }, 300);
        }
        )
        $(on_img).css({
            "width": "300px", "height": "300px", "border-radius": "5% 5% 0 0"
        });
    });

    $("#viewlink").mouseover(function () {
        $(this).css({
            "margin-left": "80px"
        })
        $(this).mouseleave(function () {
            $(this).css({
                "margin-left": "50px"
            })
        })
    });
})



