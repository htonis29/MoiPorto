function toggleDetail(el) {
    // Periksa element elaakah sudah terdeteksi
    // console.log(el)
    const target = $(el.target)

    if($(target).hasClass("active")) {
        $(target).html("Info Lainnya").removeClass("active")
    } else {
        $(target).html("Less Info").addClass("active")
    }

// Untuk Periksa item apa yang diambil JS untuk didefinisikan sesuai yg dibutuhkan    
//    console.log($(target).parents(".about-exp-item"))
    const item = $((target).parents(".about-exp-item"))
// Untuk Periksa item apa yang diambil JS untuk didefinisikan sesuai yg dibutuhkan    
// console.log($(item).children(".about-exp-item-detail"))
    const detail = $((item).children(".about-exp-item-detail"))
    $(detail).slideToggle()
}
