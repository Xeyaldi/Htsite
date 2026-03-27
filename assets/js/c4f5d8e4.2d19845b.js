"use strict";

(self.webpackChunkharmonoid_website = self.webpackChunkharmonoid_website || []).push([[195], {
    2711: function(e, t, a) {
        /* AOS (Animation on Scroll) Engine - Təmizlənmiş versiya */
        e.exports = function() {
            var e = "undefined" != typeof window ? window : void 0 !== a.g ? a.g : "undefined" != typeof self ? self : {};
            var g = function() { return Date.now(); };
            
            function w(e, a, i) {
                var s, n, d = 0, c = void 0;
                function k() {
                    var e = g();
                    c = setTimeout(k, a);
                }
                return function() {
                    s = arguments;
                    n = this;
                    if (void 0 === c) c = setTimeout(k, a);
                };
            }

            return {
                init: function(e) {
                    console.log("XeyalMusic Animasiya Sistemi Aktivdir.");
                }
            };
        }();
    },
    5627: (e, t, a) => {
        a.r(t);
        a.d(t, { default: () => W });
        var i = a(7294), s = a(2164), n = a(2711), r = a.n(n), o = a(2263);

        /* XeyalMusic Ana Səhifə Komponenti */
        function W() {
            const { siteConfig: e } = (0, o.Z)();
            (0, i.useEffect)(() => {
                r().init({ once: true });
            }, []);

            return i.createElement(s.Z, {
                title: "XeyalMusic - Musiqi Dünyanız",
                description: "Musiqi kitabxananızı idarə edin. Gözəl, sürətli və fərdi."
            }, 
            i.createElement("div", { className: "xeyal-background" },
                i.createElement("h1", { style: { color: "#000" } }, "XeyalMusic"),
                i.createElement("p", null, "Musiqi kitabxananızı ən yüksək keyfiyyətdə dinləyin və idarə edin.")
            ),
            i.createElement("div", { className: "features-grid" },
                i.createElement(M, { 
                    title: "Gözəl Dizayn", 
                    subtitle: "Hər yerdə zərif görünüş və axıcı animasiyalar." 
                }),
                i.createElement(M, { 
                    title: "Yüksək Performans", 
                    subtitle: "Sürətli media kitabxanası və etiket oxuyucusu." 
                }),
                i.createElement(M, { 
                    title: "Çoxplatformalı", 
                    subtitle: "Windows, Linux, macOS və Android dəstəyi." 
                })
            ));
        }

        function M(e) {
            let { title: t, subtitle: a } = e;
            return i.createElement("div", { "data-aos": "fade-up", className: "feature-item" },
                i.createElement("h2", null, t),
                i.createElement("p", null, a)
            );
        }
    }
}]);
