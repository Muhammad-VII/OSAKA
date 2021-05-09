// jQuery updates
// scroll method and click method are deprecated the right way is $('element').on('event',fn(){})
// dom.ready method is deprecated the new way is to make an annonymous fn, put the code inside of it thats it, this code will be executed as soon as the dom loads

let aboutOffset = $("#about").offset().top;
let serviceOffset = $("#services").offset().top;

$(window).on("scroll", function () {
  let windowScroll = $(window).scrollTop();
  console.log(windowScroll);
  if (windowScroll > aboutOffset) {
    $("#main-nav").css("backgroundColor", "rgba(0,0,0,0.5)");
    $("#btnUp").fadeIn(500);
  } else {
    $("#main-nav").css("backgroundColor", "transparent");
    $("#btnUp").fadeOut(500);
  }
});

$("#btnUp").on("click", function () {
  $("html,body").animate({ scrollTop: 0 }, 2000);
});

$(function () {
  $(".lds-facebook").fadeOut(2000);
  $("body").css("overflow", "auto");
});

$(".nav-link, .navbar-brand").on("click", function (e) {
  let aHref = $(e.target).attr("href");
  let sectionOffset = $(aHref).offset().top;
  $("html,body").animate({ scrollTop: sectionOffset }, 1000);
});
(function () {
  window.onload = function () {
    window.setTimeout(function () {
      window.scrollTo(0, 0);
    });
  };
})();

$("#toggleColorBox").on("click", function () {
  let colorsBoxWidth = $("#colorsBoxs").innerWidth();
  if ($("#sidebar").css("left") == "0px") {
    $("#sidebar").animate({ left: `-${colorsBoxWidth}` }, 1000);
  } else {
    $("#sidebar").animate({ left: `0px` }, 1000);
  }
});

(function () {
  let colorsSpan = $(".colorBox");
  colorsSpan.eq(0).css("backgroundColor", "tomato");
  colorsSpan.eq(1).css("backgroundColor", "#09c");
  colorsSpan.eq(2).css("backgroundColor", "orange");
  colorsSpan.eq(3).css("backgroundColor", "teal");
  colorsSpan.eq(4).css("backgroundColor", "aqua");
  colorsSpan.eq(5).css("backgroundColor", "lightgreen");

  $(".colorBox").on("click", function (e) {
    $(".change").css("backgroundColor", `${e.target.style.backgroundColor}`);
  });
})();

window.onload = function () {
  $("#sidebar").css("left", "-255px");
};