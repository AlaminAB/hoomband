
                var g = document.getElementById("sleeping-face"),
                    b = document.getElementById("sleeping-face-track"),
                    E = document.getElementById("sleeping-face-path"),
                    S = document.querySelector(".Header-wrap");
                window.innerWidth >= 768 && g.setAttribute("style", "height:42px; width:42px");
                var x = g.getBoundingClientRect(),
                    L = b.getBoundingClientRect(),
                    C =window.scrollY,
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
        
          