

let heartsolid = document.getElementsByClassName("fa-regular fa-heart");
let heartFull = document.getElementsByClassName("fa-solid fa-heart");

for (let i = 0; i < heartsolid.length; i++) {
    heartsolid[i].addEventListener("click", function () {
        if (heartsolid[i].style.display === "inline") {
            heartsolid[i].style.display = "none";
            heartFull[i].style.display = "inline";
            alert("已加入收藏")

        } else {
            heartsolid[i].style.display = "inline";
            heartFull[i].style.display = "none";
        }
    });

    heartFull[i].addEventListener("click", function () {
        if (heartFull[i].style.display === "inline") {
            heartFull[i].style.display = "none";
            heartsolid[i].style.display = "inline";
        } else {
            heartFull[i].style.display = "inline";
            heartsolid[i].style.display = "none";
        }
    });
}



let itemList, cartPos;
itemList = $('.shop-list').offset().left
cartPos = $('.cart').offset().left

$('.fa-solid.fa-cart-plus').click(function () {
    let item = $(this).parents('.shop-item')
    let img = item.find('img').attr('src')
    let itemX = item.offset().left - itemList
    let itemY = item.offset().top



    $('#show').stop().css({
        left: itemX,
        top: itemY,
        width: '10%',
        opacity: 1,
    })
        .find('img').attr('src', img).css({
            width: "100%"
        })


    $('#show').animate({

        left: cartPos,
        top: 0,
        width: 20,
    }, 1200,

        function () {
            $("#show").css({
                opacity: 0
            })
        })

    let cartBox = $('.cart span').text()
    if (cartBox < 20) {
        cartBox++
    }
    else {
        alert(`購物車已超過上限`)
    }

    $('.cart span').text(cartBox)
    $('.cart span').css({
        display: 'block',
    })



    $('.cart').animate({
        opacity: 0.8,
        scale: 1.2
    }, 600,
        function () {
            $(".cart").css({
                scale: '1',
                opacity: '1'
            })
        })



})






