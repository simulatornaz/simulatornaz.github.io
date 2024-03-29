window.Modernizr = function(e, t, n) {
        function r(e) {
            v.cssText = e
        }

        function o(e, t) {
            return typeof e === t
        }

        function a(e, t) {
            return !!~("" + e).indexOf(t)
        }

        function i(e, t) {
            for (var r in e) {
                var o = e[r];
                if (!a(o, "-") && v[o] !== n) return "pfx" == t ? o : !0
            }
            return !1
        }

        function c(e, t, r) {
            for (var a in e) {
                var i = t[e[a]];
                if (i !== n) return r === !1 ? e[a] : o(i, "function") ? i.bind(r || t) : i
            }
            return !1
        }

        function l(e, t, n) {
            var r = e.charAt(0).toUpperCase() + e.slice(1),
                a = (e + " " + T.join(r + " ") + r).split(" ");
            return o(t, "string") || o(t, "undefined") ? i(a, t) : (a = (e + " " + w.join(r + " ") + r).split(" "), c(a, t, n))
        }

        function s() {
            d.input = function(n) {
                for (var r = 0, o = n.length; o > r; r++) k[n[r]] = !!(n[r] in b);
                return k.list && (k.list = !(!t.createElement("datalist") || !e.HTMLDataListElement)), k
            }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), d.inputtypes = function(e) {
                for (var r, o, a, i = 0, c = e.length; c > i; i++) b.setAttribute("type", o = e[i]), r = "text" !== b.type, r && (b.value = E, b.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(o) && b.style.WebkitAppearance !== n ? (h.appendChild(b), a = t.defaultView, r = a.getComputedStyle && "textfield" !== a.getComputedStyle(b, null).WebkitAppearance && 0 !== b.offsetHeight, h.removeChild(b)) : /^(search|tel)$/.test(o) || (r = /^(url|email)$/.test(o) ? b.checkValidity && b.checkValidity() === !1 : b.value != E)), j[e[i]] = !!r;
                return j
            }("search tel url email datetime date month week time datetime-local number range color".split(" "))
        }
        var u, p, f = "2.6.2",
            d = {},
            m = !0,
            h = t.documentElement,
            y = "modernizr",
            g = t.createElement(y),
            v = g.style,
            b = t.createElement("input"),
            E = ":)",
            x = ({}.toString, " -webkit- -moz- -o- -ms- ".split(" ")),
            S = "Webkit Moz O ms",
            T = S.split(" "),
            w = S.toLowerCase().split(" "),
            C = {},
            j = {},
            k = {},
            P = [],
            F = P.slice,
            N = {}.hasOwnProperty;
        p = o(N, "undefined") || o(N.call, "undefined") ? function(e, t) {
            return t in e && o(e.constructor.prototype[t], "undefined")
        } : function(e, t) {
            return N.call(e, t)
        }, Function.prototype.bind || (Function.prototype.bind = function(e) {
            var t = this;
            if ("function" != typeof t) throw new TypeError;
            var n = F.call(arguments, 1),
                r = function() {
                    if (this instanceof r) {
                        var o = function() {};
                        o.prototype = t.prototype;
                        var a = new o,
                            i = t.apply(a, n.concat(F.call(arguments)));
                        return Object(i) === i ? i : a
                    }
                    return t.apply(e, n.concat(F.call(arguments)))
                };
            return r
        }), C.canvas = function() {
            var e = t.createElement("canvas");
            return !(!e.getContext || !e.getContext("2d"))
        }, C.geolocation = function() {
            return "geolocation" in navigator
        }, C.video = function() {
            var e = t.createElement("video"),
                n = !1;
            try {
                (n = !!e.canPlayType) && (n = new Boolean(n), n.ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), n.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), n.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
            } catch (r) {}
            return n
        }, C.audio = function() {
            var e = t.createElement("audio"),
                n = !1;
            try {
                (n = !!e.canPlayType) && (n = new Boolean(n), n.ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), n.mp3 = e.canPlayType("audio/mpeg;").replace(/^no$/, ""), n.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), n.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""))
            } catch (r) {}
            return n
        }, C.localstorage = function() {
            try {
                return localStorage.setItem(y, y), localStorage.removeItem(y), !0
            } catch (e) {
                return !1
            }
        }, C.sessionstorage = function() {
            try {
                return sessionStorage.setItem(y, y), sessionStorage.removeItem(y), !0
            } catch (e) {
                return !1
            }
        };
        for (var $ in C) p(C, $) && (u = $.toLowerCase(), d[u] = C[$](), P.push((d[u] ? "" : "no-") + u));
        return d.input || s(), d.addTest = function(e, t) {
                if ("object" == typeof e)
                    for (var r in e) p(e, r) && d.addTest(r, e[r]);
                else {
                    if (e = e.toLowerCase(), d[e] !== n) return d;
                    t = "function" == typeof t ? t() : t, m !== n && m && (h.className += " " + (t ? "" : "no-") + e), d[e] = t
                }
                return d
            }, r(""), g = b = null,
            function(e, t) {
                function r(e, t) {
                    var n = e.createElement("p"),
                        r = e.getElementsByTagName("head")[0] || e.documentElement;
                    return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild)
                }

                function o() {
                    var e = v.elements;
                    return "string" == typeof e ? e.split(" ") : e
                }

                function a(e) {
                    var t = g[e[h]];
                    return t || (t = {}, y++, e[h] = y, g[y] = t), t
                }

                function i(e, n, r) {
                    if (n || (n = t), p) return n.createElement(e);
                    r || (r = a(n));
                    var o;
                    return o = r.cache[e] ? r.cache[e].cloneNode() : m.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e), o.canHaveChildren && !d.test(e) ? r.frag.appendChild(o) : o
                }

                function c(e, n) {
                    if (e || (e = t), p) return e.createDocumentFragment();
                    n = n || a(e);
                    for (var r = n.frag.cloneNode(), i = 0, c = o(), l = c.length; l > i; i++) r.createElement(c[i]);
                    return r
                }

                function l(e, t) {
                    t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function(n) {
                        return v.shivMethods ? i(n, e, t) : t.createElem(n)
                    }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + o().join().replace(/\w+/g, function(e) {
                        return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
                    }) + ");return n}")(v, t.frag)
                }

                function s(e) {
                    e || (e = t);
                    var n = a(e);
                    return !v.shivCSS || u || n.hasCSS || (n.hasCSS = !!r(e, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), p || l(e, n), e
                }
                var u, p, f = e.html5 || {},
                    d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    m = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    h = "_html5shiv",
                    y = 0,
                    g = {};
                (function() {
                    try {
                        var e = t.createElement("a");
                        e.innerHTML = "<xyz></xyz>", u = "hidden" in e, p = 1 == e.childNodes.length || function() {
                            t.createElement("a");
                            var e = t.createDocumentFragment();
                            return e.cloneNode === n || e.createDocumentFragment === n || e.createElement === n
                        }()
                    } catch (r) {
                        u = !0, p = !0
                    }
                })();
                var v = {
                    elements: f.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
                    shivCSS: f.shivCSS !== !1,
                    supportsUnknownElements: p,
                    shivMethods: f.shivMethods !== !1,
                    type: "default",
                    shivDocument: s,
                    createElement: i,
                    createDocumentFragment: c
                };
                e.html5 = v, s(t)
            }(this, t), d._version = f, d._prefixes = x, d._domPrefixes = w, d._cssomPrefixes = T, d.testProp = function(e) {
                return i([e])
            }, d.testAllProps = l, d.prefixed = function(e, t, n) {
                return t ? l(e, t, n) : l(e, "pfx")
            }, h.className = h.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (m ? " js " + P.join(" ") : ""), d
    }(this, this.document),
    function(e, t, n) {
        function r(e) {
            return "[object Function]" == y.call(e)
        }

        function o(e) {
            return "string" == typeof e
        }

        function a() {}

        function i(e) {
            return !e || "loaded" == e || "complete" == e || "uninitialized" == e
        }

        function c() {
            var e = g.shift();
            v = 1, e ? e.t ? m(function() {
                ("c" == e.t ? f.injectCss : f.injectJs)(e.s, 0, e.a, e.x, e.e, 1)
            }, 0) : (e(), c()) : v = 0
        }

        function l(e, n, r, o, a, l, s) {
            function u(t) {
                if (!d && i(p.readyState) && (b.r = d = 1, !v && c(), p.onload = p.onreadystatechange = null, t)) {
                    "img" != e && m(function() {
                        x.removeChild(p)
                    }, 50);
                    for (var r in j[n]) j[n].hasOwnProperty(r) && j[n][r].onload()
                }
            }
            var s = s || f.errorTimeout,
                p = t.createElement(e),
                d = 0,
                y = 0,
                b = {
                    t: r,
                    s: n,
                    e: a,
                    a: l,
                    x: s
                };
            1 === j[n] && (y = 1, j[n] = []), "object" == e ? p.data = n : (p.src = n, p.type = e), p.width = p.height = "0", p.onerror = p.onload = p.onreadystatechange = function() {
                u.call(this, y)
            }, g.splice(o, 0, b), "img" != e && (y || 2 === j[n] ? (x.insertBefore(p, E ? null : h), m(u, s)) : j[n].push(p))
        }

        function s(e, t, n, r, a) {
            return v = 0, t = t || "j", o(e) ? l("c" == t ? T : S, e, t, this.i++, n, r, a) : (g.splice(this.i++, 0, e), 1 == g.length && c()), this
        }

        function u() {
            var e = f;
            return e.loader = {
                load: s,
                i: 0
            }, e
        }
        var p, f, d = t.documentElement,
            m = e.setTimeout,
            h = t.getElementsByTagName("script")[0],
            y = {}.toString,
            g = [],
            v = 0,
            b = "MozAppearance" in d.style,
            E = b && !!t.createRange().compareNode,
            x = E ? d : h.parentNode,
            d = e.opera && "[object Opera]" == y.call(e.opera),
            d = !!t.attachEvent && !d,
            S = b ? "object" : d ? "script" : "img",
            T = d ? "script" : S,
            w = Array.isArray || function(e) {
                return "[object Array]" == y.call(e)
            },
            C = [],
            j = {},
            k = {
                timeout: function(e, t) {
                    return t.length && (e.timeout = t[0]), e
                }
            };
        f = function(e) {
            function t(e) {
                var t, n, r, e = e.split("!"),
                    o = C.length,
                    a = e.pop(),
                    i = e.length,
                    a = {
                        url: a,
                        origUrl: a,
                        prefixes: e
                    };
                for (n = 0; i > n; n++) r = e[n].split("="), (t = k[r.shift()]) && (a = t(a, r));
                for (n = 0; o > n; n++) a = C[n](a);
                return a
            }

            function i(e, o, a, i, c) {
                var l = t(e),
                    s = l.autoCallback;
                l.url.split(".").pop().split("?").shift(), l.bypass || (o && (o = r(o) ? o : o[e] || o[i] || o[e.split("/").pop().split("?")[0]]), l.instead ? l.instead(e, o, a, i, c) : (j[l.url] ? l.noexec = !0 : j[l.url] = 1, a.load(l.url, l.forceCSS || !l.forceJS && "css" == l.url.split(".").pop().split("?").shift() ? "c" : n, l.noexec, l.attrs, l.timeout), (r(o) || r(s)) && a.load(function() {
                    u(), o && o(l.origUrl, c, i), s && s(l.origUrl, c, i), j[l.url] = 2
                })))
            }

            function c(e, t) {
                function n(e, n) {
                    if (e) {
                        if (o(e)) n || (p = function() {
                            var e = [].slice.call(arguments);
                            f.apply(this, e), d()
                        }), i(e, p, t, 0, s);
                        else if (Object(e) === e)
                            for (l in c = function() {
                                    var t, n = 0;
                                    for (t in e) e.hasOwnProperty(t) && n++;
                                    return n
                                }(), e) e.hasOwnProperty(l) && (!n && !--c && (r(p) ? p = function() {
                                var e = [].slice.call(arguments);
                                f.apply(this, e), d()
                            } : p[l] = function(e) {
                                return function() {
                                    var t = [].slice.call(arguments);
                                    e && e.apply(this, t), d()
                                }
                            }(f[l])), i(e[l], p, t, l, s))
                    } else !n && d()
                }
                var c, l, s = !!e.test,
                    u = e.load || e.both,
                    p = e.callback || a,
                    f = p,
                    d = e.complete || a;
                n(s ? e.yep : e.nope, !!u), u && n(u)
            }
            var l, s, p = this.yepnope.loader;
            if (o(e)) i(e, 0, p, 0);
            else if (w(e))
                for (l = 0; e.length > l; l++) s = e[l], o(s) ? i(s, 0, p, 0) : w(s) ? f(s) : Object(s) === s && c(s, p);
            else Object(e) === e && c(e, p)
        }, f.addPrefix = function(e, t) {
            k[e] = t
        }, f.addFilter = function(e) {
            C.push(e)
        }, f.errorTimeout = 1e4, null == t.readyState && t.addEventListener && (t.readyState = "loading", t.addEventListener("DOMContentLoaded", p = function() {
            t.removeEventListener("DOMContentLoaded", p, 0), t.readyState = "complete"
        }, 0)), e.yepnope = u(), e.yepnope.executeStack = c, e.yepnope.injectJs = function(e, n, r, o, l, s) {
            var u, p, d = t.createElement("script"),
                o = o || f.errorTimeout;
            d.src = e;
            for (p in r) d.setAttribute(p, r[p]);
            n = s ? c : n || a, d.onreadystatechange = d.onload = function() {
                !u && i(d.readyState) && (u = 1, n(), d.onload = d.onreadystatechange = null)
            }, m(function() {
                u || (u = 1, n(1))
            }, o), l ? d.onload() : h.parentNode.insertBefore(d, h)
        }, e.yepnope.injectCss = function(e, n, r, o, i, l) {
            var s, o = t.createElement("link"),
                n = l ? c : n || a;
            o.href = e, o.rel = "stylesheet", o.type = "text/css";
            for (s in r) o.setAttribute(s, r[s]);
            i || (h.parentNode.insertBefore(o, h), m(n, 0))
        }
    }(this, document), Modernizr.load = function() {
        yepnope.apply(window, [].slice.call(arguments, 0))
    }, Modernizr.addTest({
        texttrackapi: "function" == typeof document.createElement("video").addTextTrack,
        track: "kind" in document.createElement("track")
    });