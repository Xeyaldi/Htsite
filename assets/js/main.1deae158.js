"use strict";

(self.webpackChunkharmonoid_website = self.webpackChunkharmonoid_website || []).push([[179], {
    723: (e, t, n) => {
        /* XeyalMusic - Marşrutlaşdırma Sistemi */
        n.d(t, { Z: () => p });
        var r = n(7294), a = n(7462), o = n(8356), i = n.n(o), l = n(6887);

        const s = {
            "intro": [() => Promise.all([n.e(592), n.e(671)]).then(n.bind(n, 9881)), "@site/docs/intro.md", 9881],
            "index": [() => Promise.all([n.e(532), n.e(592), n.e(195)]).then(n.bind(n, 5627)), "@site/src/pages/index.js", 5627],
            "downloads": [() => Promise.all([n.e(532), n.e(592), n.e(567)]).then(n.bind(n, 1177)), "@site/src/pages/downloads.js", 1177]
        };

        function u(e) {
            /* Yüklənmə zamanı xəta pəncərəsi */
            let { error: t, retry: n, pastDelay: a } = e;
            return t ? r.createElement("div", { className: "xeyal-error-box" }, 
                r.createElement("p", null, "Sistem yüklənmədi: " + String(t)),
                r.createElement("button", { onClick: n }, "Yenidən yoxla")
            ) : null;
        }

        const p = [
            { path: "/downloads", component: f("/downloads"), exact: true },
            { path: "/docs", component: f("/docs"), routes: [{ path: "/docs/intro", component: f("/docs/intro"), exact: true }] },
            { path: "/", component: f("/"), exact: true },
            { path: "*", component: f("*") }
        ];
    },

    4763: (e, t, n) => {
        /* XeyalMusic - Sistem Xətası İdarəetməsi */
        n.d(t, { Z: () => c });
        var r = n(7294), o = n(5742), i = n(2164);

        function l(e) {
            return r.createElement("div", { className: "crash-page" },
                r.createElement("h1", null, "XeyalMusic: Səhifə xətası baş verdi."),
                r.createElement("p", null, e.error.message),
                r.createElement("button", { onClick: e.tryAgain }, "Yenidən başla")
            );
        }

        class c extends r.Component {
            constructor(e) { super(e); this.state = { error: null }; }
            componentDidCatch(e) { this.setState({ error: e }); }
            render() {
                const { error: t } = this.state;
                return t ? l({ error: t, tryAgain: () => this.setState({ error: null }) }) : this.props.children;
            }
        }
    },

    7969: (e, t, r) => {
        /* Discord Düyməsi */
        r.d(t, { Z: () => c });
        var n = r(7294);
        function c() {
            return n.createElement("a", { href: "https://discord.gg/xeyalmusic", target: "_blank", className: "social-btn" }, "XeyalMusic Discord");
        }
    }
}]);
