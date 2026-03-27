"use strict";

(self.webpackChunkharmonoid_website = self.webpackChunkharmonoid_website || []).push([[671], {
    9881: (e, t, a) => {
        a.r(t);
        a.d(t, {
            assets: () => l,
            contentTitle: () => s,
            default: () => p,
            frontMatter: () => o,
            metadata: () => i,
            toc: () => u
        });

        var n = a(7462),
            r = (a(7294), a(3905));

        const o = { sidebar_position: 1 };
        const s = "Tutorial Intro";
        const i = {
            unversionedId: "intro",
            id: "intro",
            title: "Tutorial Intro",
            description: "Docusaurus təlimat səhifəsi.",
            slug: "/intro",
            permalink: "/docs/intro",
            editUrl: "https://github.com/xeyaldi/Htsite/edit/main/docs/intro.md",
            version: "current"
        };

        const l = {};
        const u = [
            { value: "Başlanğıc", id: "getting-started", level: 2 },
            { value: "Lazım olanlar", id: "what-youll-need", level: 3 },
            { value: "Yeni sayt yarat", id: "generate-a-new-site", level: 2 },
            { value: "Saytı başlat", id: "start-your-site", level: 2 }
        ];

        const d = { toc: u };

        function p(e) {
            let { components: t, ...a } = e;
            return (0, r.kt)("wrapper", (0, n.Z)({}, d, a, { components: t, mdxType: "MDXLayout" }),
                (0, r.kt)("h1", { id: "tutorial-intro" }, "Tutorial Intro"),
                (0, r.kt)("p", null, "Docusaurus sistemini 5 dəqiqədən az müddətdə kəşf edin."),
                (0, r.kt)("h2", { id: "getting-started" }, "Başlanğıc"),
                (0, r.kt)("p", null, "Yeni sayt yaradaraq işə başlayın."),
                (0, r.kt)("h3", { id: "what-youll-need" }, "Lazım olanlar"),
                (0, r.kt)("ul", null, 
                    (0, r.kt)("li", null, "Node.js v14 və ya daha yuxarı versiya.")
                ),
                (0, r.kt)("h2", { id: "generate-a-new-site" }, "Yeni sayt yarat"),
                (0, r.kt)("pre", null, 
                    (0, r.kt)("code", { className: "language-bash" }, "npm init docusaurus@latest my-website classic")
                ),
                (0, r.kt)("h2", { id: "start-your-site" }, "Saytı başlat"),
                (0, r.kt)("pre", null, 
                    (0, r.kt)("code", { className: "language-bash" }, "cd my-website\nnpm run start")
                )
            );
        }
        p.isMDXComponent = !0;
    }
}]);
