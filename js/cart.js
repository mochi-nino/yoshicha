
$('.btn-plus').click(function () {
    let amount = $(this).prev('input[type="number"]').val()
    if (amount <= 99) {
        amount++
    }
    $(this).prev('input[type="number"]').val(amount)

    $(this).parents('.item').children('.place').text(`NT$${999 * amount}`)
    updateTotalPrice()

});


$('.btn-sub').click(function () {
    let amount = $(this).next('input[type="number"]').val()
    if (amount > 1) {
        amount--
    }

    $(this).next('input[type="number"]').val(amount)

    $(this).parents('.item').children('.place').text(`NT$${999 * amount}`)
    updateTotalPrice()
});



function updateTotalPrice() {
    let item1Place = parseInt($('.item.1 .place').text().replace('NT$', ''));
    console.log(item1Place)

    let item2Place = parseInt($('.item.2 .place').text().replace('NT$', ''));
    console.log(item2Place)

    let itemALL = item1Place + item2Place

    $('.all-place').text(`NT$${itemALL}`)

    // $('.all-place').text(`NT$${item1Place + item2Place}`)


    $('.total-place').text(`NT$${item1Place + item2Place + 60}`)

}

$('.del-btn').click(function () {
    $(this).parents('.item').remove()

});










