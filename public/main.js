function setDotes() {
    const spanDotes = $('.loader-span').text()
    if(spanDotes.length > 2) {
        $('.loader-span').text("")
    } else {
        $('.loader-span').text(spanDotes + '.')
    }
}

setInterval(setDotes, 500)

$(window).on('load', () => {
    $('.loader-wrapper').fadeOut("slow");
})