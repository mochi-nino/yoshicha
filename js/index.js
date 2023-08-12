
// 舊
// var counter = 1;
// setInterval(function () {
// document.getElementById('radio' + counter).checked = true;
// counter++;
// if (counter > 3) {
// counter = 1;
// }
// }, 5000);


// 新自動播
let counter = 1;
function startAutoSlide() {
    autoSlideInterval = setInterval(function () {
        document.getElementById('radio' + counter).checked = true;
        counter++;
        if (counter > 4) {
            counter = 1;
        }
    }, 5000);
}



//手機滑動
startAutoSlide()

let slides = document.querySelector('.slides')
let startX = 0;
let distX = 0;

slides.addEventListener('touchstart', function (e) {
    clearInterval(autoSlideInterval);
    let touch = e.touches[0];
    startX = touch.clientX;
});

slides.addEventListener('touchmove', function (e) {
    let touch = e.touches[0];
    distX = startX - touch.clientX;
});

slides.addEventListener('touchend', function () {


    if (distX > 50) {
        counter++;
        if (counter > 4) {
            counter = 1;
        }
    } else {
        counter--;
        if (counter < 1) {
            counter = 4;
        }

    }

    document.getElementById('radio' + counter).checked = true;
    startAutoSlide();
});


$(function () {
    $(window).ready(function () {
        $('.main').each(function () {
            $(this).addClass('active')
        }
        )
    });
});


$(function () {
    $(window).ready(function () {
        $('.news').each(function () {
            $(this).addClass('active')
        }
        )
    });
});

$(function () {
    $(window).on('load scroll', function () {
        $('.lineup-area').each(function () {

            var target = $(this).offset().top

            var scroll = $(window).scrollTop()

            var height = $(window).height()

            if (scroll > target - height) {

                $(this).addClass('active')
            }
        });
    });
});

$(function () {
    $(window).on('load scroll', function () {
        $('.dessert').each(function () {

            var target = $(this).offset().top

            var scroll = $(window).scrollTop()

            var height = $(window).height()

            if (scroll > target - height) {

                $(this).addClass('active')
            }
        });
    });
});

$(function () {
    $(window).on('load scroll', function () {
        $('.obj1').each(function () {

            var target = $(this).offset().top

            var scroll = $(window).scrollTop()

            var height = $(window).height()

            if (scroll > target - height) {

                $(this).addClass('active-obj1')
            }
        });
    });
});


$(function () {
    $(window).on('load scroll', function () {
        $('.obj2').each(function () {

            var target = $(this).offset().top

            var scroll = $(window).scrollTop()

            var height = $(window).height()

            if (scroll > target - height) {

                $(this).addClass('active-obj2')
            }
        });
    });
});

$(function () {
    $(window).on('load scroll', function () {
        $('.obj3').each(function () {

            var target = $(this).offset().top

            var scroll = $(window).scrollTop()

            var height = $(window).height()

            if (scroll > target - height) {

                $(this).addClass('active-obj3')
            }
        });
    });
});

$(function () {
    $(window).on('load scroll', function () {
        $('.make-tea').each(function () {

            var target = $(this).offset().top

            var scroll = $(window).scrollTop()

            var height = $(window).height()

            if (scroll > target - height) {

                $(this).addClass('active')
            }
        });
    });
});

