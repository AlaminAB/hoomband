

for (var u = [], p = 1; p <= 5; p++) u.push({
    button: document.getElementById("audio-btn-cat" + p),
    player: document.getElementById("audio-player-cat" + p),
    audio: document.getElementById("audio-cat" + p),
    progress: document.getElementById("audio-progress-cat" + p)
});
for (var y = function () {
        var e = f[m];
        e.button.addEventListener("click", function () {
            var t = !0,
                n = !1,
                o = void 0;
            try {
                for (var r, i = u[Symbol.iterator](); !(t = (r = i.next()).done); t = !0) {
                    var l = r.value;
                    l.audio.pause(), l.audio.currentTime = 0, l.button.style.display = "flex", l.player.style.display = "none"
                }
            } catch (e) {
                n = !0, o = e
            } finally {
                try {
                    t || null == i.return || i.return()
                } finally {
                    if (n) throw o
                }
            }
            e.audio.paused && (e.audio.play(), e.button.style.display = "none", e.player.style.display = "flex", e.player.firstElementChild.src = window.location.origin + "/assets/img/pause_btn.svg"), e.player.firstElementChild.addEventListener("click", function () {
                e.audio.paused ? (e.audio.play(), e.player.firstElementChild.src = window.location.origin + "/assets/img/pause_btn.svg") : (e.audio.pause(), e.player.firstElementChild.src = window.location.origin + "/assets/img/play-btn-green.svg")
            }), e.audio.ontimeupdate = function () {
                e.progress.style.width = e.audio.currentTime / e.audio.duration * 100 + "%", "100%" === e.progress.style.width && (e.player.firstElementChild.src = window.location.origin + "/assets/img/play-btn-green.svg")
            }, e.progress.parentElement.addEventListener("click", function (t) {
                var n = t.offsetX;
                if (n) {
                    var o = n / parseFloat(window.getComputedStyle(e.progress.parentElement).getPropertyValue("width"));
                    e.audio.currentTime = e.audio.duration * o, e.progress.style.width = 100 * o + "%"
                }
            })
        })
    }, m = 0, f = u; m < f.length; m++) y();


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
         
          maxWidth: 640,
          maxHeight: 360,
          helpers: {
            media: true
          },
          youtube: {
            autoplay: 1, // enable autoplay
            start: 1 // set start time in seconds (embed)
        }
        });


      });
      document.addEventListener( 'DOMContentLoaded', function () {
      new Splide( '#image-slider2' ).mount();
    } );

    

function HideWrapAll(){
    for(let a=3; a<$(".Questions-wrap").length; a++){
        $(".Questions-wrap")[a].style.display="none"   
    }
    }

    HideWrapAll()

$('.question-title').click(function(){
   
 $(this).toggleClass("cross-icon")
    $(this).siblings(".Questions-text").toggle();
})

$('.seemore-question').click(function(){
    for(let a=0; a<$(".Questions-wrap").length; a++){
        $(".Questions-wrap")[a].style.display="block"   
    }
    $(this).hide();
})


var g = document.getElementById("sleeping-face"),
b = document.getElementById("sleeping-face-track"),
E = document.getElementById("sleeping-face-path"),
S = document.querySelector(".Header-wrap");
window.innerWidth >= 768 && g.setAttribute("style", "height:42px; width:42px");
var x = g.getBoundingClientRect(),
L = b.getBoundingClientRect(),
C =$(window).scrollTop(),
k = x.top + window.pageYOffset - C + x.height / 2 - (window.innerHeight / 2 - C),
B = k + L.height - x.height,
A = B - k,
q = "M24,0C10.7,0,0,10.7,0,24s10.7,24,24,24s24-10.7,24-24S37.3,0,24,0z M13,20c0-1.7,1.3-3,3-3h0 c1.7,0,3,1.3,3,3s-1.3,3-3,3h0C14.3,23,13,21.7,13,20z M32,34c-2.9,0-5.2,0-8,0s-5.3,0-8,0c-1.1,0-2-0.9-2-2c0-1.1,0.9-2,2-2 c2.5,0,5.5,0,8,0c2.5,0,5.6,0,8,0c1.1,0,2,0.9,2,2C34,33.1,33.1,34,32,34z M32,23L32,23c-1.7,0-3-1.3-3-3s1.3-3,3-3h0 c1.7,0,3,1.3,3,3S33.7,23,32,23z",
z = "M24,0C10.7,0,0,10.7,0,24s10.7,24,24,24s24-10.7,24-24S37.3,0,24,0z M13,23c0-1.1,0.9-2,2-2h2c1.1,0,2,0.9,2,2 s-0.9,2-2,2h-2C13.9,25,13,24.1,13,23z M32.5,36.9C29.7,37.6,26.8,38,24,38s-5.7-0.4-8.5-1.1c-1.1-0.3-1.7-1.4-1.5-2.4 c0.3-1.1,1.4-1.7,2.4-1.5c2.5,0.6,5,0.9,7.5,0.9c2.5,0,5-0.3,7.5-0.9c1.1-0.3,2.2,0.4,2.4,1.5C34.2,35.6,33.6,36.7,32.5,36.9z M33,25h-2c-1.1,0-2-0.9-2-2s0.9-2,2-2h2c1.1,0,2,0.9,2,2S34.1,25,33,25z",
I = "M24,0C10.7,0,0,10.7,0,24s10.7,24,24,24s24-10.7,24-24S37.3,0,24,0z M11.6,24.7c0.8-0.8,2-0.8,2.8,0 c0.8,0.8,2.3,0.8,3.2,0c0.8-0.8,2-0.8,2.8,0c0.8,0.8,0.8,2,0,2.8C18,30,14,30,11.6,27.6C10.8,26.8,10.8,25.5,11.6,24.7z M33.4,37.9 c-2.5,2.5-5.9,3.9-9.4,3.9c-3.6,0-6.9-1.4-9.4-3.9c-0.8-0.8-0.8-2,0-2.8c0.8-0.8,2-0.8,2.8,0c1.8,1.8,4.1,2.7,6.6,2.7 c2.5,0,4.8-1,6.6-2.7c0.8-0.8,2-0.8,2.8,0C34.2,35.8,34.2,37.1,33.4,37.9z M36.4,27.5C34,30,30,30,27.6,27.6c-0.8-0.8-0.8-2,0-2.8 s2-0.8,2.8,0c0.8,0.8,2.3,0.8,3.2,0c0.8-0.8,2-0.8,2.8,0S37.2,26.8,36.4,27.5z",
Y = document.querySelector(".Bundles-row"),
M = document.querySelector(".Hero-title"),
_ = document.querySelector("#buy-fixed-btn");

function j(e) { 
var t = e.getBoundingClientRect();
return t.top - 2 * C <= (window.innerHeight || document.documentElement.clientHeight) && t.bottom >= 0
}
window.addEventListener("scroll", function () {
window.scrollY >= k && window.scrollY <= B ? (g.style.top = window.scrollY - k + "px", "0px" == g.style.top && E.d != q ? E.setAttribute("d", q) : g.style.top == A + "px" && E.d != I ? E.setAttribute("d", I) : window.scrollY >= k && window.scrollY <= k + A / 3 && E.d != q ? E.setAttribute("d", q) : window.scrollY >= k + A / 3 && window.scrollY <= B - A / 3 && E.d != z ? E.setAttribute("d", z) : window.scrollY >= B - A / 3 && window.scrollY <= B && E.d != I && E.setAttribute("d", I)) : "0px" !== g.style.top && window.scrollY < k && window.scrollY >= k - 200 ? g.style.top = "0px" : window.scrollY > B && window.scrollY <= B + 200 && (g.style.top = A + "px"), _ && (j(M) ? _.classList.remove("Button--fixed") : _.classList.add("Button--fixed"), j(Y) || e && "block" === e.style.display && j(e) ? (_.style.opacity = 0, setTimeout(function () {
    _.style.zIndex = -1
}, 200)) : setTimeout(function () {
    _.style.opacity = 1, _.style.zIndex = 50
}, 200))
}, {
passive: !0
});


$('.burger-btn').click(function(){
    $('.nav-items').css("left",'0')
})
$('.close-btn').click(function(){
    $('.nav-items').css("left",'-100%')
})
document.addEventListener("scroll",function(){
    if($(window).scrollTop() > 1200){
        $('.buy-btn-slider').removeClass("hide-btn")
    }
    console.log($(window).scrollTop())
})