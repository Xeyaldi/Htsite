"use strict";

(self.webpackChunkharmonoid_website = self.webpackChunkharmonoid_website || []).push([[514], {
    9963: (e, t, n) => {
        n.r(t);
        n.d(t, { default: () => Ce });

        var a = n(7294), l = n(6010), o = n(1944), c = n(5281), r = n(2802);
        var i = n(3320), s = n(4477), d = n(1116), m = n(2164), u = n(5999);
        var b = n(2466), p = n(5936);

        function _() {
            const { shown: e, scrollToTop: t } = function(e) {
                let { threshold: t } = e;
                const [n, l] = (0, a.useState)(!1);
                const o = (0, a.useRef)(!1);
                const { startScroll: c, cancelScroll: r } = (0, b.Ct)();
                
                return (0, b.RF)(((e, n) => {
                    let { scrollY: a } = e;
                    const c = null == n ? void 0 : n.scrollY;
                    c && (o.current ? o.current = !1 : a >= c ? (r(), l(!1)) : a < t ? l(!1) : l(!0))
                })), { shown: n, scrollToTop: () => c(0) }
            }({ threshold: 300 });

            return a.createElement("button", {
                "aria-label": "Yuxarı qayıt",
                className: (0, l.Z)("clean-btn", c.k.common.backToTopButton, e && "backToTopButtonShow_xfvO"),
                type: "button",
                onClick: t
            });
        }

        function Z(e) {
            let { onClick: t } = e;
            return a.createElement("button", {
                type: "button",
                title: "Menyunu gizlə",
                className: (0, l.Z)("button button--secondary button--outline"),
                onClick: t
            }, "«");
        }

        function O(e) {
            let { path: t, sidebar: n, className: o } = e;
            return a.createElement("nav", {
                className: (0, l.Z)("menu thin-scrollbar", o),
                "aria-label": "XeyalMusic Naviqasiya"
            }, a.createElement("ul", { className: "menu__list" }, 
                a.createElement(U, { items: n, activePath: t, level: 1 })
            ));
        }

        function fe(e) {
            let { children: t } = e;
            const n = (0, d.V)();
            const [l, o] = (0, a.useState)(!1);

            return a.createElement(m.Z, { wrapperClassName: "xeyal-music-wrapper" },
                a.createElement(_, null),
                a.createElement("div", { className: "doc-page-content" },
                    n && a.createElement(pe, { 
                        sidebar: n.items, 
                        hiddenSidebarContainer: l, 
                        setHiddenSidebarContainer: o 
                    }),
                    a.createElement(Ee, { hiddenSidebarContainer: l }, t)
                )
            );
        }

        function Ce(e) {
            const { versionMetadata: t } = e;
            const n = (0, r.hI)(e);
            if (!n) return a.createElement(a.Fragment, null);
            
            const { docElement: m, sidebarName: u, sidebarItems: b } = n;
            return a.createElement(a.Fragment, null,
                a.createElement(o.FG, { className: "xeyalmusic-layout" },
                    a.createElement(s.q, { version: t },
                        a.createElement(d.b, { name: u, items: b },
                            a.createElement(fe, null, m)
                        )
                    )
                )
            );
        }
    }
}]);
