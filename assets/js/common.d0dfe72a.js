"use strict";

(self.webpackChunkharmonoid_website = self.webpackChunkharmonoid_website || []).push([[592], {
    3905: (e, t, r) => {
        /* MDX Mühərriki - Struktur idarəetməsi */
        r.d(t, { Zo: () => i, kt: () => y });
        var n = r(7294);
        var l = n.createContext({});

        const s = (e) => {
            var t = n.useContext(l);
            return e ? ("function" == typeof e ? e(t) : { ...t, ...e }) : t;
        };

        const i = (e) => {
            var t = s(e.components);
            return n.createElement(l.Provider, { value: t }, e.children);
        };

        const m = n.forwardRef(((e, t) => {
            var r = e.components, o = e.mdxType, a = e.originalType, l = e.parentName;
            var i = s(r);
            var g = i["".concat(l, ".").concat(o)] || i[o] || a;
            return n.createElement(g, { ref: t, ...e, components: r });
        }));

        function y(e, t) {
            var r = arguments, o = t && t.mdxType;
            if ("string" == typeof e || o) {
                var a = r.length, A = new Array(a);
                A[0] = m;
                var c = { ...t, originalType: e, mdxType: "string" == typeof e ? e : o };
                A[1] = c;
                for (var s = 2; s < a; s++) A[s] = r[s];
                return n.createElement.apply(null, A);
            }
            return n.createElement.apply(null, r);
        }
    },

    4972: (e, t, r) => {
        /* XeyalMusic - 404 Səhifəsi */
        r.r(t);
        r.d(t, { default: () => c });
        var n = r(7294), o = r(5999), a = r(1944), A = r(2164);

        function c() {
            return n.createElement(n.Fragment, null, 
                n.createElement(a.d, { title: "Səhifə Tapılmadı | XeyalMusic" }),
                n.createElement(A.Z, null, 
                    n.createElement("main", { className: "container margin-vert--xl" },
                        n.createElement("div", { className: "row" },
                            n.createElement("div", { className: "col col--6 col--offset-3" },
                                n.createElement("h1", { className: "hero__title" }, "Səhifə Tapılmadı"),
                                n.createElement("p", null, "Axtardığınız məlumat tapılmadı. Linkin düzgünlüyünü yoxlayın."),
                                n.createElement("p", null, "XeyalMusic ana səhifəsinə qayıdaraq digər bölmələrə baxa bilərsiniz.")
                            )
                        )
                    )
                )
            );
        }
    },

    7969: (e, t, r) => {
        /* Discord Düyməsi */
        r.d(t, { Z: () => c });
        var n = r(7294);
        function c() {
            return n.createElement("a", { 
                style: { textDecoration: "none" }, 
                href: "https://discord.gg/xeyalmusic", /* Sənin Discord linkin */
                target: "_blank" 
            }, 
            n.createElement("div", { className: "discord-btn" }, "Discord Serverinə Qoşul"));
        }
    },

    3897: (e, t, r) => {
        /* GitHub Düyməsi */
        r.d(t, { Z: () => c });
        var n = r(7294);
        function c() {
            return n.createElement("a", { 
                style: { textDecoration: "none" }, 
                href: "https://github.com/xeyaldi/XeyalMusic", 
                target: "_blank" 
            }, 
            n.createElement("div", { className: "github-btn" }, "GitHub-da İzlə"));
        }
    }
}]);
