$(function () {
    $(window).on('load scroll', function () {
        $('.maketea').each(function () {
            //ターゲットの位置を取得
            var target = $(this).offset().top
            //スクロール量を取得
            var scroll = $(window).scrollTop()
            //ウィンドウの高さを取得
            var height = $(window).height()
            //ターゲットまでスクロールするとフェードインする
            if (scroll > target - height) {
                //クラスを付与
                $(this).addClass('active')
            }
        });
    });
});

$(function () {
    $(window).on('load scroll', function () {
        $('.tree').each(function () {
            //ターゲットの位置を取得
            var target = $(this).offset().top
            //スクロール量を取得
            var scroll = $(window).scrollTop()
            //ウィンドウの高さを取得
            var height = $(window).height()
            //ターゲットまでスクロールするとフェードインする
            if (scroll > target - height) {
                //クラスを付与
                $(this).addClass('activetree')
            }
        });
    });
});