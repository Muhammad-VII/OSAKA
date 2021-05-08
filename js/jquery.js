// jQuery updates
// scroll method and click method are deprecated the right way is $('element').on('event',fn(){})
// dom.ready method is deprecated the new way is to make an annonymous fn, put the code inside of it thats it, this code will be executed as soon as the dom loads

let aboutOffset = $("#about").offset().top;
console.log(aboutOffset);

$(window).on('scroll',function(){
    let windowScroll = $(window).scrollTop();
    console.log(windowScroll)
    if(windowScroll > aboutOffset){
        $("#main-nav").css("backgroundColor","rgba(0,0,0,0.5)")
        $("#btnUp").fadeIn(500)
    }
    else{
        $("#main-nav").css("backgroundColor","transparent")
        $("#btnUp").fadeOut(500)
    }
})

$("#btnUp").on('click',function(){
    $("html,body").animate({scrollTop:0},2000)
})

$(function() {
    $(".lds-facebook").fadeOut(2000)
    $("body").css("overflow","auto")
});