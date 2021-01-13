new Splide("#App-experts-mobile-slider", {
    type: "slide",
    arrows: !1,
    drag: !0,
    gap: "1rem",
    padding: {
        right: "50px",
        left: "30px"
    }
}).mount();
var w = new Splide("#App-experts-desktop-slider", {
    type: "slide",
    arrows: !1,
    pagination: !1,
    drag: !0,
    direction: "ttb",
    height: "21rem",
    fixedHeight: "17rem",
    width: "auto",
    fixedWidth: "92.5%"
});
w.mount();
var h = document.querySelectorAll(".App-experts-desktop-slide-title");

function v() {
    h.forEach(function (e) {
        e.classList.remove("tab-selected")
    })
}
h.forEach(function (e) {
    e.addEventListener("click", function () {
        w.go(e.value), v(), e.classList.add("tab-selected")
    })
}), w.on("moved", function (e) {
    v(), h[e].classList.add("tab-selected")
}).mount();

$(document).ready(function () {
    $('.fancybox-media').fancybox({
      openEffect: 'none',
      closeEffect: 'none',
      maxWidth: 640,
      maxHeight: 360,
      helpers: {
        media: true
      },
      youtube: {
        autoplay: 1
      }
    });
  });
  document.addEventListener( 'DOMContentLoaded', function () {
  new Splide( '#image-slider2' ).mount();
} );