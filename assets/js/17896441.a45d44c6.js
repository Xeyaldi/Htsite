"use strict";

(self.webpackChunkharmonoid_website = self.webpackChunkharmonoid_website || []).push([[918], {
    7565: (e, t, n) => {
        n.r(t);
        n.d(t, { default: () => jt });
        
        var a = n(7294), l = n(1944), o = n(902);
        const r = a.createContext(null);

        function c(e) {
            let { children: t, content: n } = e;
            const l = (0, a.useMemo)(() => ({
                metadata: n.metadata,
                frontMatter: n.frontMatter,
                assets: n.assets,
                contentTitle: n.contentTitle,
                toc: n.toc
            }), [n]);
            return a.createElement(r.Provider, { value: l }, t);
        }

        function s() {
            const e = (0, a.useContext)(r);
            if (null === e) throw new o.i6("DocProvider");
            return e;
        }

        function i() {
            var e;
            const { metadata: t, frontMatter: n, assets: o } = s();
            return a.createElement(l.d, {
                title: t.title,
                description: t.description,
                keywords: n.keywords,
                image: null != (e = o.image) ? e : n.image
            });
        }

        var m = n(6010), d = n(7524), u = n(7462), p = n(5999), h = n(9960);

        function f(e) {
            const { permalink: t, title: n, subLabel: l, isNext: o } = e;
            return a.createElement(h.Z, {
                className: (0, m.Z)("pagination-nav__link", o ? "pagination-nav__link--next" : "pagination-nav__link--prev"),
                to: t
            }, l && a.createElement("div", { className: "pagination-nav__sublabel" }, l),
               a.createElement("div", { className: "pagination-nav__label" }, n));
        }

        function g(e) {
            const { previous: t, next: n } = e;
            return a.createElement("nav", {
                className: "pagination-nav docusaurus-mt-lg"
            }, t && a.createElement(f, (0, u.Z)({}, t, { subLabel: "Geri" })),
               n && a.createElement(f, (0, u.Z)({}, n, { subLabel: "İrəli", isNext: !0 })));
        }

        function F() {
            const { metadata: e } = s(), { editUrl: t, lastUpdatedAt: n, formattedLastUpdatedAt: l, lastUpdatedBy: o, tags: r } = e;
            const c = r.length > 0, i = !!(t || n || o);
            return c || i ? a.createElement("footer", { className: (0, m.Z)("docusaurus-mt-lg") },
                c && a.createElement(R, { tags: r }),
                i && a.createElement(W, { editUrl: t, lastUpdatedAt: n, lastUpdatedBy: o, formattedLastUpdatedAt: l })
            ) : null;
        }

        const jt = c; 
    }
}]);
