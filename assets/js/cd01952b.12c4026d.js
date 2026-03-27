"use strict";

(self.webpackChunkharmonoid_website = self.webpackChunkharmonoid_website || []).push([[567], {
    1177: (e, t, a) => {
        a.r(t);
        a.d(t, { default: () => P });
        var l = a(7294), n = a(2164), r = a(941);
        var f = a(3897), N = a(7969);

        function I(e) {
            let { title: t, children: a } = e;
            return l.createElement("div", { className: "download-container" },
                l.createElement("div", { className: "download-card" },
                    l.createElement("h2", { className: "download-title" }, t),
                    a
                )
            );
        }

        const P = () => {
            const [k, S] = (0, l.useState)("x64");
            const [C, P] = (0, l.useState)("x86_64");

            return l.createElement(n.Z, { 
                title: "XeyalMusic - Yüklə", 
                description: "XeyalMusic tətbiqini bütün platformalar üçün yükləyin." 
            },
            l.createElement("div", { style: { height: "16px" } }),
            l.createElement(I, { title: "Yükləmələr" },
                l.createElement("p", null, "XeyalMusic açıq mənbəli və pulsuzdur. Platformanızı seçin:"),
                
                /* Windows Bölməsi */
                l.createElement("div", { className: "platform-view" },
                    l.createElement("h3", null, "Windows"),
                    l.createElement("p", null, "Windows 10 və daha yeni versiyalar"),
                    l.createElement("div", { className: "download-links" },
                        l.createElement("a", { href: "https://github.com/xeyaldi/XeyalMusic/releases/latest/download/x64-setup.exe" }, "Quraşdırıcı (EXE)"),
                        l.createElement("a", { href: "https://github.com/xeyaldi/XeyalMusic/releases/latest/download/portable.zip" }, "Portable (ZIP)")
                    )
                ),

                /* Linux Bölməsi */
                l.createElement("div", { className: "platform-view" },
                    l.createElement("h3", null, "GNU/Linux"),
                    l.createElement("div", { className: "download-links" },
                        l.createElement("a", { href: "#" }, "Ubuntu / Debian [.deb]"),
                        l.createElement("a", { href: "#" }, "Fedora [.rpm]")
                    ),
                    l.createElement("code", null, "sudo dpkg -i xeyalmusic-linux.deb")
                ),

                /* Android Bölməsi */
                l.createElement("div", { className: "platform-view" },
                    l.createElement("h3", null, "Android"),
                    l.createElement("p", null, "Android 5.0 və daha yeni versiyalar"),
                    l.createElement("a", { href: "#" }, "APK olaraq yüklə")
                )
            ),

            l.createElement("div", { style: { height: "16px" } }),
            l.createElement(I, { title: "Sinxronizasiya" },
                l.createElement("p", null, "Musiqilərinizi cihazlar arasında sinxron etmək üçün Syncthing istifadə etməyiniz məsləhətdir.")
            ));
        }
    }
}]);
