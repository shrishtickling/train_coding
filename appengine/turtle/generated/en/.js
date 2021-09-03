// Automatically generated file.  Do not edit!
'use strict';
var b, g = {
    pa: {
        $b: 1,
        qe: 2,
        $c: 3,
        Ge: 4
    }
};
g.Ob = {};
g.Yz = 40;
g.iA = 125;
g.RE = 5;
g.oF = 10;
g.Td = 28;
g.yE = g.Td;
g.DE = 8;
g.Kq = 250;
g.$t = 10;
g.wE = 30;
g.WF = 750;
g.NG = 100;
g.SE = !0;
g.BF = .45;
g.CF = .65;
g.Ud = {
    width: 96,
    height: 124,
    url: "sprites.png"
};
g.Ob.Nf = {
    Nb: -1,
    Mq: 0,
    Qc: 1
};
g.bM = 0;
g.cM = 1;
g.$L = 1;
g.aM = 2;
g.em = [];
g.em[g.pa.$b] = g.pa.qe;
g.em[g.pa.qe] = g.pa.$b;
g.em[g.pa.$c] = g.pa.Ge;
g.em[g.pa.Ge] = g.pa.$c;
g.ic = "VARIABLE";
g.iH = "VARIABLE_DYNAMIC";
g.hm = "PROCEDURE";
g.kA = "RENAME_VARIABLE_ID";
g.zz = "DELETE_VARIABLE_ID";
g.Ob.Pq = "_TEMP_COLLAPSED_INPUT";
g.Ob.Oq = "_TEMP_COLLAPSED_FIELD";
g.g = {};
g.g.global = function() {
    return "object" === typeof self ? self : "object" === typeof window ? window : "object" === typeof global ? global : this
}();
g.i = {};
g.g.global.Blockly || (g.g.global.Blockly = {});
g.g.global.Blockly.Msg || (g.g.global.Blockly.Msg = g.i);
g.g.rb = {};
g.g.rb.parse = function(a) {
    a = String(a).toLowerCase().trim();
    var c = g.g.rb.names[a];
    if (c) return c;
    c = "0x" == a.substring(0, 2) ? "#" + a.substring(2) : a;
    c = "#" == c[0] ? c : "#" + c;
    if (/^#[0-9a-f]{6}$/.test(c)) return c;
    if (/^#[0-9a-f]{3}$/.test(c)) return ["#", c[1], c[1], c[2], c[2], c[3], c[3]].join("");
    var d = a.match(/^(?:rgb)?\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/);
    return d && (a = Number(d[1]), c = Number(d[2]), d = Number(d[3]), 0 <= a && 256 > a && 0 <= c && 256 > c && 0 <= d && 256 > d) ? g.g.rb.Ay(a, c, d) : null
};
g.g.rb.Ay = function(a, c, d) {
    c = a << 16 | c << 8 | d;
    return 16 > a ? "#" + (16777216 | c).toString(16).substr(1) : "#" + c.toString(16)
};
g.g.rb.nC = function(a) {
    a = g.g.rb.parse(a);
    if (!a) return [0, 0, 0];
    a = parseInt(a.substr(1), 16);
    return [a >> 16, a >> 8 & 255, a & 255]
};
g.g.rb.sC = function(a) {
    var c = g.BF,
        d = 255 * g.CF,
        e = 0,
        f = 0,
        h = 0;
    if (0 == c) h = f = e = d;
    else {
        var k = Math.floor(a / 60),
            l = a / 60 - k;
        a = d * (1 - c);
        var m = d * (1 - c * l);
        c = d * (1 - c * (1 - l));
        switch (k) {
            case 1:
                e = m;
                f = d;
                h = a;
                break;
            case 2:
                e = a;
                f = d;
                h = c;
                break;
            case 3:
                e = a;
                f = m;
                h = d;
                break;
            case 4:
                e = c;
                f = a;
                h = d;
                break;
            case 5:
                e = d;
                f = a;
                h = m;
                break;
            case 6:
            case 0:
                e = d, f = c, h = a
        }
    }
    return g.g.rb.Ay(Math.floor(e), Math.floor(f), Math.floor(h))
};
g.g.rb.qv = function(a, c, d) {
    a = g.g.rb.parse(a);
    if (!a) return null;
    c = g.g.rb.parse(c);
    if (!c) return null;
    a = g.g.rb.nC(a);
    c = g.g.rb.nC(c);
    return g.g.rb.Ay(Math.round(c[0] + d * (a[0] - c[0])), Math.round(c[1] + d * (a[1] - c[1])), Math.round(c[2] + d * (a[2] - c[2])))
};
g.g.rb.names = {
    aqua: "#00ffff",
    black: "#000000",
    blue: "#0000ff",
    fuchsia: "#ff00ff",
    gray: "#808080",
    green: "#008000",
    lime: "#00ff00",
    maroon: "#800000",
    navy: "#000080",
    olive: "#808000",
    purple: "#800080",
    red: "#ff0000",
    silver: "#c0c0c0",
    teal: "#008080",
    white: "#ffffff",
    yellow: "#ffff00"
};
g.g.ba = function(a, c) {
    this.x = a;
    this.y = c
};
g.g.ba.wf = function(a, c) {
    return a == c ? !0 : a && c ? a.x == c.x && a.y == c.y : !1
};
g.g.ba.ew = function(a, c) {
    var d = a.x - c.x;
    a = a.y - c.y;
    return Math.sqrt(d * d + a * a)
};
g.g.ba.DJ = function(a) {
    return Math.sqrt(a.x * a.x + a.y * a.y)
};
g.g.ba.Lo = function(a, c) {
    return new g.g.ba(a.x - c.x, a.y - c.y)
};
g.g.ba.sum = function(a, c) {
    return new g.g.ba(a.x + c.x, a.y + c.y)
};
g.g.ba.prototype.clone = function() {
    return new g.g.ba(this.x, this.y)
};
g.g.ba.prototype.scale = function(a) {
    this.x *= a;
    this.y *= a;
    return this
};
g.g.ba.prototype.translate = function(a, c) {
    this.x += a;
    this.y += c;
    return this
};
g.g.Rect = function(a, c, d, e) {
    this.top = a;
    this.bottom = c;
    this.left = d;
    this.right = e
};
g.g.Rect.prototype.contains = function(a, c) {
    return a >= this.left && a <= this.right && c >= this.top && c <= this.bottom
};
g.g.Ab = {};
g.g.Ab.startsWith = function(a, c) {
    return 0 == a.lastIndexOf(c, 0)
};
g.g.Ab.Ky = function(a) {
    return a.length ? a.reduce(function(c, d) {
        return c.length < d.length ? c : d
    }).length : 0
};
g.g.Ab.TH = function(a, c) {
    if (!a.length) return 0;
    if (1 == a.length) return a[0].length;
    var d = 0;
    c = c || g.g.Ab.Ky(a);
    for (var e = 0; e < c; e++) {
        for (var f = a[0][e], h = 1; h < a.length; h++)
            if (f != a[h][e]) return d;
        " " == f && (d = e + 1)
    }
    for (h = 1; h < a.length; h++)
        if ((f = a[h][e]) && " " != f) return d;
    return c
};
g.g.Ab.UH = function(a, c) {
    if (!a.length) return 0;
    if (1 == a.length) return a[0].length;
    var d = 0;
    c = c || g.g.Ab.Ky(a);
    for (var e = 0; e < c; e++) {
        for (var f = a[0].substr(-e - 1, 1), h = 1; h < a.length; h++)
            if (f != a[h].substr(-e - 1, 1)) return d;
        " " == f && (d = e + 1)
    }
    for (h = 1; h < a.length; h++)
        if ((f = a[h].charAt(a[h].length - e - 1)) && " " != f) return d;
    return c
};
g.g.Ab.cE = function(a, c) {
    a = a.split("\n");
    for (var d = 0; d < a.length; d++) a[d] = g.g.Ab.BL(a[d], c);
    return a.join("\n")
};
g.g.Ab.BL = function(a, c) {
    if (a.length <= c) return a;
    for (var d = a.trim().split(/\s+/), e = 0; e < d.length; e++) d[e].length > c && (c = d[e].length);
    e = -Infinity;
    var f = 1;
    do {
        var h = e;
        var k = a;
        a = [];
        var l = d.length / f,
            m = 1;
        for (e = 0; e < d.length - 1; e++) m < (e + 1.5) / l ? (m++, a[e] = !0) : a[e] = !1;
        a = g.g.Ab.dE(d, a, c);
        e = g.g.Ab.fz(d, a, c);
        a = g.g.Ab.CL(d, a);
        f++
    } while (e > h);
    return k
};
g.g.Ab.fz = function(a, c, d) {
    for (var e = [0], f = [], h = 0; h < a.length; h++) e[e.length - 1] += a[h].length, !0 === c[h] ? (e.push(0), f.push(a[h].charAt(a[h].length - 1))) : !1 === c[h] && e[e.length - 1]++;
    a = Math.max.apply(Math, e);
    for (h = c = 0; h < e.length; h++) c -= 2 * Math.pow(Math.abs(d - e[h]), 1.5), c -= Math.pow(a - e[h], 1.5), -1 != ".?!".indexOf(f[h]) ? c += d / 3 : -1 != ",;)]}".indexOf(f[h]) && (c += d / 4);
    1 < e.length && e[e.length - 1] <= e[e.length - 2] && (c += .5);
    return c
};
g.g.Ab.dE = function(a, c, d) {
    for (var e = g.g.Ab.fz(a, c, d), f, h = 0; h < c.length - 1; h++)
        if (c[h] != c[h + 1]) {
            var k = [].concat(c);
            k[h] = !k[h];
            k[h + 1] = !k[h + 1];
            var l = g.g.Ab.fz(a, k, d);
            l > e && (e = l, f = k)
        } return f ? g.g.Ab.dE(a, f, d) : c
};
g.g.Ab.CL = function(a, c) {
    for (var d = [], e = 0; e < a.length; e++) d.push(a[e]), void 0 !== c[e] && d.push(c[e] ? "\n" : " ");
    return d.join("")
};
g.g.ad = function(a, c) {
    this.width = a;
    this.height = c
};
g.g.ad.wf = function(a, c) {
    return a == c ? !0 : a && c ? a.width == c.width && a.height == c.height : !1
};
g.g.style = {};
g.g.style.Nh = function(a) {
    if ("none" != g.g.style.cC(a, "display")) return g.g.style.$B(a);
    var c = a.style,
        d = c.display,
        e = c.visibility,
        f = c.position;
    c.visibility = "hidden";
    c.position = "absolute";
    c.display = "inline";
    var h = a.offsetWidth;
    a = a.offsetHeight;
    c.display = d;
    c.position = f;
    c.visibility = e;
    return new g.g.ad(h, a)
};
g.g.style.$B = function(a) {
    return new g.g.ad(a.offsetWidth, a.offsetHeight)
};
g.g.style.cC = function(a, c) {
    return g.g.style.getComputedStyle(a, c) || g.g.style.MI(a, c) || a.style && a.style[c]
};
g.g.style.getComputedStyle = function(a, c) {
    return document.defaultView && document.defaultView.getComputedStyle && (a = document.defaultView.getComputedStyle(a, null)) ? a[c] || a.getPropertyValue(c) || "" : ""
};
g.g.style.MI = function(a, c) {
    return a.currentStyle ? a.currentStyle[c] : null
};
g.g.style.Pk = function(a) {
    var c = new g.g.ba(0, 0);
    a = a.getBoundingClientRect();
    var d = document.documentElement;
    d = new g.g.ba(window.pageXOffset || d.scrollLeft, window.pageYOffset || d.scrollTop);
    c.x = a.left + d.x;
    c.y = a.top + d.y;
    return c
};
g.g.style.ZI = function() {
    var a = document.body,
        c = document.documentElement;
    return new g.g.ba(a.scrollLeft || c.scrollLeft, a.scrollTop || c.scrollTop)
};
g.g.style.uP = function(a, c) {
    a.style.display = c ? "" : "none"
};
g.g.style.iP = function(a) {
    return "rtl" == g.g.style.cC(a, "direction")
};
g.g.style.JI = function(a) {
    var c = g.g.style.getComputedStyle(a, "borderLeftWidth"),
        d = g.g.style.getComputedStyle(a, "borderRightWidth"),
        e = g.g.style.getComputedStyle(a, "borderTopWidth");
    a = g.g.style.getComputedStyle(a, "borderBottomWidth");
    return {
        top: parseFloat(e),
        right: parseFloat(d),
        bottom: parseFloat(a),
        left: parseFloat(c)
    }
};
g.g.style.SK = function(a, c) {
    a = g.g.style.QI(a, c);
    c.scrollLeft = a.x;
    c.scrollTop = a.y
};
g.g.style.QI = function(a, c) {
    var d = g.g.style.Pk(a),
        e = g.g.style.Pk(c),
        f = g.g.style.JI(c),
        h = d.x - e.x - f.left;
    d = d.y - e.y - f.top;
    a = g.g.style.$B(a);
    e = c.clientHeight - a.height;
    f = c.scrollLeft;
    var k = c.scrollTop;
    f += Math.min(h, Math.max(h - (c.clientWidth - a.width), 0));
    k += Math.min(d, Math.max(d - e, 0));
    return new g.g.ba(f, k)
};
g.g.userAgent = {};
(function(a) {
    function c(e) {
        return -1 != d.indexOf(e.toUpperCase())
    }
    g.g.userAgent.raw = a;
    var d = g.g.userAgent.raw.toUpperCase();
    g.g.userAgent.ff = c("Trident") || c("MSIE");
    g.g.userAgent.ik = c("Edge");
    g.g.userAgent.LF = c("JavaFX");
    g.g.userAgent.QL = (c("Chrome") || c("CriOS")) && !g.g.userAgent.ik;
    g.g.userAgent.BA = c("WebKit") && !g.g.userAgent.ik;
    g.g.userAgent.Lz = c("Gecko") && !g.g.userAgent.BA && !g.g.userAgent.ff && !g.g.userAgent.ik;
    g.g.userAgent.Dn = c("Android");
    a = g.g.global.navigator && g.g.global.navigator.maxTouchPoints;
    g.g.userAgent.Yl =
        c("iPad") || c("Macintosh") && 0 < a;
    g.g.userAgent.Uz = c("iPod");
    g.g.userAgent.Tz = c("iPhone") && !g.g.userAgent.Yl && !g.g.userAgent.Uz;
    g.g.userAgent.ZF = c("Macintosh");
    g.g.userAgent.UG = g.g.userAgent.Yl || g.g.userAgent.Dn && !c("Mobile") || c("Silk");
    g.g.userAgent.gG = !g.g.userAgent.UG && (g.g.userAgent.Uz || g.g.userAgent.Tz || g.g.userAgent.Dn || c("IEMobile"))
})(g.g.global.navigator && g.g.global.navigator.userAgent || "");
g.g.TJ = function(a) {
    a.preventDefault();
    a.stopPropagation()
};
g.g.Ns = function(a) {
    return "textarea" == a.target.type || "text" == a.target.type || "number" == a.target.type || "email" == a.target.type || "password" == a.target.type || "search" == a.target.type || "tel" == a.target.type || "url" == a.target.type || a.target.isContentEditable || a.target.dataset && "true" == a.target.dataset.kP
};
g.g.xf = function(a) {
    var c = new g.g.ba(0, 0),
        d = a.getAttribute("x");
    d && (c.x = parseInt(d, 10));
    if (d = a.getAttribute("y")) c.y = parseInt(d, 10);
    if (d = (d = a.getAttribute("transform")) && d.match(g.g.xf.kH)) c.x += Number(d[1]), d[3] && (c.y += Number(d[3]));
    (a = a.getAttribute("style")) && -1 < a.indexOf("translate") && (a = a.match(g.g.xf.lH)) && (c.x += Number(a[1]), a[3] && (c.y += Number(a[3])));
    return c
};
g.g.$o = function(a) {
    for (var c = 0, d = 0; a;) {
        var e = g.g.xf(a);
        c += e.x;
        d += e.y;
        if (-1 != (" " + (a.getAttribute("class") || "") + " ").indexOf(" injectionDiv ")) break;
        a = a.parentNode
    }
    return new g.g.ba(c, d)
};
g.g.xf.kH = /translate\(\s*([-+\d.e]+)([ ,]\s*([-+\d.e]+)\s*)?/;
g.g.xf.lH = /transform:\s*translate(?:3d)?\(\s*([-+\d.e]+)\s*px([ ,]\s*([-+\d.e]+)\s*px)?/;
g.g.bl = function(a) {
    return a.ctrlKey && g.g.userAgent.ZF ? !0 : 2 == a.button
};
g.g.zp = function(a, c, d) {
    var e = c.createSVGPoint();
    e.x = a.clientX;
    e.y = a.clientY;
    d || (d = c.getScreenCTM().inverse());
    return e.matrixTransform(d)
};
g.g.ZB = function(a) {
    switch (a.deltaMode) {
        default:
            return {
                x: a.deltaX, y: a.deltaY
            };
        case 1:
            return {
                x: a.deltaX * g.Yz, y: a.deltaY * g.Yz
            };
        case 2:
            return {
                x: a.deltaX * g.iA, y: a.deltaY * g.iA
            }
    }
};
g.g.kL = function(a) {
    return g.g.Vy(a, !0)
};
g.g.Ic = function(a) {
    if ("string" != typeof a) return a;
    a = g.g.Vy(a, !1);
    return a.length ? String(a[0]) : ""
};
g.g.ZA = function(a) {
    for (var c = g.i, d = a.match(/%{BKY_[A-Z]\w*}/ig), e = 0; e < d.length; e++) void 0 == c[d[e].toUpperCase().slice(6, -1)] && console.warn("No message string for " + d[e] + " in " + a)
};
g.g.Vy = function(a, c) {
    var d = [],
        e = a.split("");
    e.push("");
    var f = 0;
    a = [];
    for (var h = null, k = 0; k < e.length; k++) {
        var l = e[k];
        0 == f ? "%" == l ? ((l = a.join("")) && d.push(l), a.length = 0, f = 1) : a.push(l) : 1 == f ? "%" == l ? (a.push(l), f = 0) : c && "0" <= l && "9" >= l ? (f = 2, h = l, (l = a.join("")) && d.push(l), a.length = 0) : "{" == l ? f = 3 : (a.push("%", l), f = 0) : 2 == f ? "0" <= l && "9" >= l ? h += l : (d.push(parseInt(h, 10)), k--, f = 0) : 3 == f && ("" == l ? (a.splice(0, 0, "%{"), k--, f = 0) : "}" != l ? a.push(l) : (f = a.join(""), /[A-Z]\w*/i.test(f) ? (l = f.toUpperCase(), (l = g.g.Ab.startsWith(l, "BKY_") ?
            l.substring(4) : null) && l in g.i ? (f = g.i[l], "string" == typeof f ? Array.prototype.push.apply(d, g.g.Vy(f, c)) : c ? d.push(String(f)) : d.push(f)) : d.push("%{" + f + "}")) : d.push("%{" + f + "}"), f = a.length = 0))
    }(l = a.join("")) && d.push(l);
    c = [];
    for (k = a.length = 0; k < d.length; ++k) "string" == typeof d[k] ? a.push(d[k]) : ((l = a.join("")) && c.push(l), a.length = 0, c.push(d[k]));
    (l = a.join("")) && c.push(l);
    a.length = 0;
    return c
};
g.g.Mg = function() {
    for (var a = g.g.Mg.GD.length, c = [], d = 0; 20 > d; d++) c[d] = g.g.Mg.GD.charAt(Math.random() * a);
    return c.join("")
};
g.g.Mg.GD = "!#$%()*+,-./:;=?@[]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
g.g.Xk = function() {
    if (void 0 !== g.g.Xk.Cv) return g.g.Xk.Cv;
    if (!g.g.global.getComputedStyle) return !1;
    var a = document.createElement("p"),
        c = "none",
        d = {
            webkitTransform: "-webkit-transform",
            OTransform: "-o-transform",
            msTransform: "-ms-transform",
            MozTransform: "-moz-transform",
            transform: "transform"
        };
    document.body.insertBefore(a, null);
    for (var e in d)
        if (void 0 !== a.style[e]) {
            a.style[e] = "translate3d(1px,1px,1px)";
            c = g.g.global.getComputedStyle(a);
            if (!c) return document.body.removeChild(a), !1;
            c = c.getPropertyValue(d[e])
        } document.body.removeChild(a);
    g.g.Xk.Cv = "none" !== c;
    return g.g.Xk.Cv
};
g.g.AD = function(a) {
    if ("object" != typeof document) throw Error("Blockly.utils.runAfterPageLoad() requires browser document.");
    if ("complete" == document.readyState) a();
    else var c = setInterval(function() {
        "complete" == document.readyState && (clearInterval(c), a())
    }, 10)
};
g.g.YI = function() {
    var a = g.g.style.ZI();
    return new g.g.Rect(a.y, document.documentElement.clientHeight + a.y, a.x, document.documentElement.clientWidth + a.x)
};
g.g.uo = function(a, c) {
    c = a.indexOf(c);
    if (-1 == c) return !1;
    a.splice(c, 1);
    return !0
};
g.g.SI = function() {
    var a = document.documentElement,
        c = window;
    return g.g.userAgent.ff && c.pageYOffset != a.scrollTop ? new g.g.ba(a.scrollLeft, a.scrollTop) : new g.g.ba(c.pageXOffset || a.scrollLeft, c.pageYOffset || a.scrollTop)
};
g.g.Aw = function(a, c) {
    var d = Object.create(null),
        e = p(a, !0);
    c && (a = r(a)) && (a = e.indexOf(a), e.splice(a, e.length - a));
    for (a = 0; c = e[a]; a++) d[c.type] ? d[c.type]++ : d[c.type] = 1;
    return d
};
g.g.sP = function(a, c) {
    var d = c.x;
    c = c.y;
    var e = aa(a).getBoundingClientRect();
    d = new g.g.ba(d - e.left, c - e.top);
    c = g.g.$o(a.Bb);
    return g.g.ba.Lo(d, c).scale(1 / a.scale)
};
g.g.vt = function(a) {
    var c = "string" == typeof a ? g.g.Ic(a) : a,
        d = Number(c);
    if (!isNaN(d) && 0 <= d && 360 >= d) return {
        kJ: d,
        fp: g.g.rb.sC(d)
    };
    if (d = g.g.rb.parse(c)) return {
        kJ: null,
        fp: d
    };
    d = 'Invalid colour: "' + c + '"';
    a != c && (d += ' (from "' + a + '")');
    throw Error(d);
};
g.Touch = {};
g.Touch.vA = "ontouchstart" in g.g.global || !!(g.g.global.document && document.documentElement && "ontouchstart" in document.documentElement) || !(!g.g.global.navigator || !g.g.global.navigator.maxTouchPoints && !g.g.global.navigator.msMaxTouchPoints);
g.Touch.nq = null;
g.Touch.vg = {};
g.g.global.PointerEvent ? g.Touch.vg = {
    mousedown: ["pointerdown"],
    mouseenter: ["pointerenter"],
    mouseleave: ["pointerleave"],
    mousemove: ["pointermove"],
    mouseout: ["pointerout"],
    mouseover: ["pointerover"],
    mouseup: ["pointerup", "pointercancel"],
    touchend: ["pointerup"],
    touchcancel: ["pointercancel"]
} : g.Touch.vA && (g.Touch.vg = {
    mousedown: ["touchstart"],
    mousemove: ["touchmove"],
    mouseup: ["touchend", "touchcancel"]
});
g.Ts = 0;
g.BJ = function(a, c) {
    g.Bj();
    a.changedTouches && 1 != a.changedTouches.length || (g.Ts = setTimeout(function() {
        a.changedTouches && (a.button = 2, a.clientX = a.changedTouches[0].clientX, a.clientY = a.changedTouches[0].clientY);
        c && ba(c, a)
    }, g.WF))
};
g.Bj = function() {
    g.Ts && (clearTimeout(g.Ts), g.Ts = 0)
};
g.Touch.Dk = function() {
    g.Touch.nq = null
};
g.Touch.Ny = function(a) {
    return !g.Touch.uJ(a) || g.Touch.PH(a)
};
g.Touch.Cs = function(a) {
    return void 0 != a.pointerId ? a.pointerId : a.changedTouches && a.changedTouches[0] && void 0 !== a.changedTouches[0].identifier && null !== a.changedTouches[0].identifier ? a.changedTouches[0].identifier : "mouse"
};
g.Touch.PH = function(a) {
    var c = g.Touch.Cs(a);
    return void 0 !== g.Touch.nq && null !== g.Touch.nq ? g.Touch.nq == c : "mousedown" == a.type || "touchstart" == a.type || "pointerdown" == a.type ? (g.Touch.nq = c, !0) : !1
};
g.Touch.UK = function(a) {
    if (g.g.Ab.startsWith(a.type, "touch")) {
        var c = a.changedTouches[0];
        a.clientX = c.clientX;
        a.clientY = c.clientY
    }
};
g.Touch.uJ = function(a) {
    return g.g.Ab.startsWith(a.type, "touch") || g.g.Ab.startsWith(a.type, "mouse") || g.g.Ab.startsWith(a.type, "pointer")
};
g.Touch.Qs = function(a) {
    return g.g.Ab.startsWith(a.type, "touch") || g.g.Ab.startsWith(a.type, "pointer")
};
g.Touch.aL = function(a) {
    var c = [];
    if (a.changedTouches)
        for (var d = 0; d < a.changedTouches.length; d++) c[d] = {
            type: a.type,
            changedTouches: [a.changedTouches[d]],
            target: a.target,
            stopPropagation: function() {
                a.stopPropagation()
            },
            preventDefault: function() {
                a.preventDefault()
            }
        };
    else c.push(a);
    return c
};
g.N = {};
g.N.ta = function(a, c, d, e, f, h) {
    function k(A) {
        var S = !f;
        A = g.Touch.aL(A);
        for (var U = 0, T; T = A[U]; U++)
            if (!S || g.Touch.Ny(T)) g.Touch.UK(T), d ? e.call(d, T) : e(T), l = !0
    }
    var l = !1,
        m = [];
    if (g.g.global.PointerEvent && c in g.Touch.vg)
        for (var n = 0, q; q = g.Touch.vg[c][n]; n++) a.addEventListener(q, k, !1), m.push([a, q, k]);
    else if (a.addEventListener(c, k, !1), m.push([a, c, k]), c in g.Touch.vg) {
        var v = function(A) {
            k(A);
            var S = !h;
            l && S && A.preventDefault()
        };
        for (n = 0; q = g.Touch.vg[c][n]; n++) a.addEventListener(q, v, !1), m.push([a, q, v])
    }
    return m
};
g.N.bind = function(a, c, d, e) {
    function f(n) {
        d ? e.call(d, n) : e(n)
    }
    var h = [];
    if (g.g.global.PointerEvent && c in g.Touch.vg)
        for (var k = 0, l; l = g.Touch.vg[c][k]; k++) a.addEventListener(l, f, !1), h.push([a, l, f]);
    else if (a.addEventListener(c, f, !1), h.push([a, c, f]), c in g.Touch.vg) {
        var m = function(n) {
            if (n.changedTouches && 1 == n.changedTouches.length) {
                var q = n.changedTouches[0];
                n.clientX = q.clientX;
                n.clientY = q.clientY
            }
            f(n);
            n.preventDefault()
        };
        for (k = 0; l = g.Touch.vg[c][k]; k++) a.addEventListener(l, m, !1), h.push([a, l, m])
    }
    return h
};
g.N.Pa = function(a) {
    for (; a.length;) {
        var c = a.pop(),
            d = c[2];
        c[0].removeEventListener(c[1], d, !1)
    }
    return d
};
g.NM = function() {};
g.PM = function() {};
g.SM = function() {};
g.JM = function() {};
g.B = {};
g.B.xn = Object.create(null);
g.B.ek = "default";
g.B.S = function(a) {
    this.Vg = a
};
g.B.S.prototype.toString = function() {
    return this.Vg
};
g.B.S.uz = new g.B.S("connectionChecker");
g.B.S.yi = new g.B.S("cursor");
g.B.S.hc = new g.B.S("event");
g.B.S.yd = new g.B.S("field");
g.B.S.RENDERER = new g.B.S("renderer");
g.B.S.uA = new g.B.S("toolbox");
g.B.S.Tu = new g.B.S("theme");
g.B.S.lm = new g.B.S("toolboxItem");
g.B.S.dr = new g.B.S("flyoutsVerticalToolbox");
g.B.S.mu = new g.B.S("flyoutsHorizontalToolbox");
g.B.S.cA = new g.B.S("metricsManager");
g.B.S.nz = new g.B.S("blockDragger");
g.B.register = function(a, c, d, e) {
    if (!(a instanceof g.B.S) && "string" != typeof a || "" == String(a).trim()) throw Error('Invalid type "' + a + '". The type must be a non-empty string or a Blockly.registry.Type.');
    a = String(a).toLowerCase();
    if ("string" != typeof c || "" == c.trim()) throw Error('Invalid name "' + c + '". The name must be a non-empty string.');
    c = c.toLowerCase();
    if (!d) throw Error("Can not register a null value");
    var f = g.B.xn[a];
    f || (f = g.B.xn[a] = Object.create(null));
    g.B.tL(a, d);
    if (!e && f[c]) throw Error('Name "' +
        c + '" with type "' + a + '" already registered.');
    f[c] = d
};
g.B.tL = function(a, c) {
    switch (a) {
        case String(g.B.S.yd):
            if ("function" != typeof c.ma) throw Error('Type "' + a + '" must have a fromJson function');
    }
};
g.B.unregister = function(a, c) {
    a = String(a).toLowerCase();
    c = c.toLowerCase();
    var d = g.B.xn[a];
    d && d[c] ? delete g.B.xn[a][c] : console.warn("Unable to unregister [" + c + "][" + a + "] from the registry.")
};
g.B.UB = function(a, c, d) {
    a = String(a).toLowerCase();
    c = c.toLowerCase();
    var e = g.B.xn[a];
    if (!e || !e[c]) {
        c = "Unable to find [" + c + "][" + a + "] in the registry.";
        if (d) throw Error(c + " You must require or register a " + a + " plugin.");
        console.warn(c);
        return null
    }
    return e[c]
};
g.B.hJ = function(a) {
    var c = g.B.S.lm;
    c = String(c).toLowerCase();
    a = a.toLowerCase();
    return (c = g.B.xn[c]) ? !!c[a] : !1
};
g.B.Wo = function(a, c, d) {
    return g.B.UB(a, c, d)
};
g.B.Jw = function(a, c) {
    return g.B.UB(a, c, void 0)
};
g.B.Wf = function(a, c, d) {
    c = c.plugins[a.toString()] || g.B.ek;
    return "function" == typeof c ? c : g.B.Wo(a, c, d)
};
g.h = {};
g.h.iC = "";
g.h.ab = !0;
g.h.aw = 0;
g.h.In = "create";
g.h.si = g.h.In;
g.h.gk = "delete";
g.h.Hq = g.h.gk;
g.h.ck = "change";
g.h.lg = g.h.ck;
g.h.Un = "move";
g.h.ui = g.h.Un;
g.h.jo = "var_create";
g.h.Fr = "var_delete";
g.h.av = "var_rename";
g.h.Zu = "ui";
g.h.Iq = "drag";
g.h.sh = "selected";
g.h.Ql = "click";
g.h.xu = "marker_move";
g.h.Zj = "bubble_open";
g.h.Xu = "trashcan_open";
g.h.Cr = "toolbox_item_select";
g.h.Uu = "theme_change";
g.h.lo = "viewport_change";
g.h.Sq = "comment_create";
g.h.sz = "comment_delete";
g.h.rz = "comment_change";
g.h.Hn = "comment_move";
g.h.lu = "finished_loading";
g.h.sE = [g.h.si, g.h.ui, g.h.Sq, g.h.Hn];
g.h.Nn = [];
g.h.Ia = function(a) {
    g.h.isEnabled() && (g.h.Nn.length || setTimeout(g.h.DI, 0), g.h.Nn.push(a))
};
g.h.DI = function() {
    for (var a = g.h.filter(g.h.Nn, !0), c = g.h.Nn.length = 0, d; d = a[c]; c++)
        if (d.Zc) {
            var e = g.Wb.Vo(d.Zc);
            if (e) {
                var f = d;
                if (f.ab)
                    for (e.Hl.push(f), e.Lp.length = 0; e.Hl.length > e.aA && 0 <= e.aA;) e.Hl.shift();
                for (var h = 0; d = e.ie[h]; h++) d(f)
            }
        }
};
g.h.filter = function(a, c) {
    a = a.slice();
    c || a.reverse();
    for (var d = [], e = Object.create(null), f = 0, h; h = a[f]; f++)
        if (!h.Vm()) {
            var k = [h.ex ? g.h.Zu : h.type, h.qb, h.Zc].join(" "),
                l = e[k],
                m = l ? l.event : null;
            if (!l) e[k] = {
                event: h,
                index: f
            }, d.push(h);
            else if (h.type == g.h.Un && l.index == f - 1) m.ll = h.ll, m.kl = h.kl, m.Dj = h.Dj, l.index = f;
            else if (h.type == g.h.ck && h.element == m.element && h.name == m.name) m.newValue = h.newValue;
            else if (h.type == g.h.lo) m.Mf = h.Mf, m.Lf = h.Lf, m.scale = h.scale, m.Bp = h.Bp;
            else if (h.type != g.h.Ql || m.type != g.h.Zj) e[k] = {
                event: h,
                index: f
            }, d.push(h)
        } a = d.filter(function(n) {
        return !n.Vm()
    });
    c || a.reverse();
    for (f = 1; h = a[f]; f++) h.type == g.h.ck && "mutation" == h.element && a.unshift(a.splice(f, 1)[0]);
    return a
};
g.h.RH = function() {
    for (var a = 0, c; c = g.h.Nn[a]; a++) c.ab = !1
};
g.h.disable = function() {
    g.h.aw++
};
g.h.enable = function() {
    g.h.aw--
};
g.h.isEnabled = function() {
    return 0 == g.h.aw
};
g.h.tc = function() {
    return g.h.iC
};
g.h.oa = function(a) {
    g.h.iC = "boolean" == typeof a ? a ? g.g.Mg() : "" : a
};
g.h.QB = function(a) {
    var c = [];
    a = p(a, !1);
    for (var d = 0, e; e = a[d]; d++) c[d] = e.id;
    return c
};
g.h.ma = function(a) {
    var c = g.h.get(a.type);
    if (!c) throw Error("Unknown event type.");
    c = new c;
    c.ma(a);
    c.Zc = (void 0).id;
    return c
};
g.h.get = function(a) {
    return g.B.Wo(g.B.S.hc, a)
};
g.h.oI = function(a) {
    if ((a.type == g.h.Un || a.type == g.h.In) && a.Zc) {
        var c = g.Wb.Vo(a.Zc),
            d = c.Fd(a.qb);
        if (d) {
            a = g.h.ab;
            try {
                g.h.ab = !1;
                var e = d.getParent();
                if (e && e.isEnabled()) {
                    var f = p(d, !1);
                    c = 0;
                    for (var h; h = f[c]; c++) h.le(!0)
                } else if ((d.R || d.qa) && !c.Ac()) {
                    do d.le(!1), d = r(d); while (d)
                }
            } finally {
                g.h.ab = a
            }
        }
    }
};
g.g.D = function(a) {
    this.gL = a
};
g.g.D.prototype.toString = function() {
    return this.gL
};
g.g.D.Wt = new g.g.D("animate");
g.g.D.Nq = new g.g.D("circle");
g.g.D.Gn = new g.g.D("clipPath");
g.g.D.yz = new g.g.D("defs");
g.g.D.gu = new g.g.D("feComposite");
g.g.D.aF = new g.g.D("feComponentTransfer");
g.g.D.bF = new g.g.D("feFlood");
g.g.D.cF = new g.g.D("feFuncA");
g.g.D.dF = new g.g.D("feGaussianBlur");
g.g.D.eF = new g.g.D("fePointLight");
g.g.D.fF = new g.g.D("feSpecularLighting");
g.g.D.Iz = new g.g.D("filter");
g.g.D.pF = new g.g.D("foreignObject");
g.g.D.oc = new g.g.D("g");
g.g.D.Di = new g.g.D("image");
g.g.D.Rn = new g.g.D("line");
g.g.D.re = new g.g.D("path");
g.g.D.jA = new g.g.D("pattern");
g.g.D.sG = new g.g.D("polygon");
g.g.D.Hb = new g.g.D("rect");
g.g.D.yk = new g.g.D("svg");
g.g.D.io = new g.g.D("text");
g.g.D.wA = new g.g.D("tspan");
g.g.o = {};
g.g.o.zr = "http://www.w3.org/2000/svg";
g.g.o.Wl = "http://www.w3.org/1999/xhtml";
g.g.o.mf = "http://www.w3.org/1999/xlink";
g.g.o.Ki = {
    ELEMENT_NODE: 1,
    TEXT_NODE: 3,
    COMMENT_NODE: 8,
    DOCUMENT_POSITION_CONTAINED_BY: 16
};
g.g.o.Tf = null;
g.g.o.yv = 0;
g.g.o.Rr = null;
g.g.o.K = function(a, c, d) {
    a = document.createElementNS(g.g.o.zr, String(a));
    for (var e in c) a.setAttribute(e, c[e]);
    document.body.runtimeStyle && (a.runtimeStyle = a.currentStyle = a.style);
    d && d.appendChild(a);
    return a
};
g.g.o.Ga = function(a, c) {
    var d = a.getAttribute("class") || ""; - 1 == (" " + d + " ").indexOf(" " + c + " ") && (d && (d += " "), a.setAttribute("class", d + c))
};
g.g.o.xD = function(a, c) {
    c = c.split(" ");
    for (var d = 0; d < c.length; d++) g.g.o.Zb(a, c[d])
};
g.g.o.Zb = function(a, c) {
    var d = a.getAttribute("class");
    if (-1 != (" " + d + " ").indexOf(" " + c + " ")) {
        d = d.split(/\s+/);
        for (var e = 0; e < d.length; e++) d[e] && d[e] != c || (d.splice(e, 1), e--);
        d.length ? a.setAttribute("class", d.join(" ")) : a.removeAttribute("class")
    }
};
g.g.o.Pw = function(a, c) {
    return -1 != (" " + a.getAttribute("class") + " ").indexOf(" " + c + " ")
};
g.g.o.removeNode = function(a) {
    return a && a.parentNode ? a.parentNode.removeChild(a) : null
};
g.g.o.Wk = function(a, c) {
    var d = c.nextSibling;
    c = c.parentNode;
    if (!c) throw Error("Reference node has no parent.");
    d ? c.insertBefore(a, d) : c.appendChild(a)
};
g.g.o.containsNode = function(a, c) {
    return !!(a.compareDocumentPosition(c) & g.g.o.Ki.DOCUMENT_POSITION_CONTAINED_BY)
};
g.g.o.Wp = function(a, c) {
    a.style.transform = c;
    a.style["-webkit-transform"] = c
};
g.g.o.cq = function() {
    g.g.o.yv++;
    g.g.o.Tf || (g.g.o.Tf = Object.create(null))
};
g.g.o.eq = function() {
    g.g.o.yv--;
    g.g.o.yv || (g.g.o.Tf = null)
};
g.g.o.WI = function(a) {
    var c = a.textContent + "\n" + a.className.baseVal,
        d;
    if (g.g.o.Tf && (d = g.g.o.Tf[c])) return d;
    try {
        d = g.g.userAgent.ff || g.g.userAgent.ik ? a.getBBox().width : a.getComputedTextLength()
    } catch (e) {
        return 8 * a.textContent.length
    }
    g.g.o.Tf && (g.g.o.Tf[c] = d);
    return d
};
g.g.o.ys = function(a, c, d, e) {
    return g.g.o.SB(a, c + "pt", d, e)
};
g.g.o.SB = function(a, c, d, e) {
    var f = a.textContent;
    a = f + "\n" + a.className.baseVal;
    var h;
    if (g.g.o.Tf && (h = g.g.o.Tf[a])) return h;
    g.g.o.Rr || (h = document.createElement("canvas"), h.className = "blocklyComputeCanvas", document.body.appendChild(h), g.g.o.Rr = h.getContext("2d"));
    g.g.o.Rr.font = d + " " + c + " " + e;
    h = g.g.o.Rr.measureText(f).width;
    g.g.o.Tf && (g.g.o.Tf[a] = h);
    return h
};
g.g.o.OC = function(a, c, d, e) {
    var f = document.createElement("span");
    f.style.font = d + " " + c + " " + e;
    f.textContent = a;
    a = document.createElement("div");
    a.style.width = "1px";
    a.style.height = "0px";
    c = document.createElement("div");
    c.setAttribute("style", "position: fixed; top: 0; left: 0; display: flex;");
    c.appendChild(f);
    c.appendChild(a);
    document.body.appendChild(c);
    try {
        d = {}, c.style.alignItems = "baseline", d.pf = a.offsetTop - f.offsetTop, c.style.alignItems = "flex-end", d.height = a.offsetTop - f.offsetTop
    } finally {
        document.body.removeChild(c)
    }
    return d
};
g.g.qN = function() {};
g.Su = function(a, c, d, e, f) {
    this.s = a;
    c = void 0 === c ? !0 : c;
    d = void 0 === d ? !0 : d;
    var h = c && d;
    c && (this.Kb = new g.bb(a, !0, h, e, f));
    d && (this.vb = new g.bb(a, !1, h, e, f));
    h && (this.Go = g.g.o.K(g.g.D.Hb, {
        height: g.bb.sd,
        width: g.bb.sd,
        "class": "blocklyScrollbarBackground"
    }, null), g.g.o.Wk(this.Go, a.gg));
    this.zb = null
};
b = g.Su.prototype;
b.J = function() {
    g.g.o.removeNode(this.Go);
    this.zb = this.s = this.Go = null;
    this.Kb && (this.Kb.J(), this.Kb = null);
    this.vb && (this.vb.J(), this.vb = null)
};
b.resize = function() {
    var a = this.s.ae();
    if (a) {
        var c = !1,
            d = !1;
        this.zb && this.zb.Mc == a.Mc && this.zb.Yc == a.Yc && this.zb.Wd == a.Wd && this.zb.Ad == a.Ad ? (this.zb && this.zb.scrollWidth == a.scrollWidth && this.zb.Lf == a.Lf && this.zb.scrollLeft == a.scrollLeft || (c = !0), this.zb && this.zb.scrollHeight == a.scrollHeight && this.zb.Mf == a.Mf && this.zb.scrollTop == a.scrollTop || (d = !0)) : d = c = !0;
        if (c || d) {
            try {
                g.h.disable(), this.Kb && c && this.Kb.resize(a), this.vb && d && this.vb.resize(a)
            } finally {
                g.h.enable()
            }
            ca(this.s)
        }
        this.Kb && this.vb && (this.zb &&
            this.zb.Mc == a.Mc && this.zb.Ad == a.Ad || this.Go.setAttribute("x", this.vb.position.x), this.zb && this.zb.Yc == a.Yc && this.zb.Wd == a.Wd || this.Go.setAttribute("y", this.Kb.position.y));
        this.zb = a
    }
};
b.Ht = function(a, c) {
    this.Kb && this.Kb.Ht(a, c);
    this.vb && this.vb.Ht(a, c)
};
b.set = function(a, c, d) {
    this.Kb && this.Kb.set(a, !1);
    this.vb && this.vb.set(c, !1);
    if (d || void 0 === d) a = {}, this.Kb && (a.x = da(this.Kb)), this.vb && (a.y = da(this.vb)), this.s.Xp(a)
};
b.Al = function(a) {
    this.Kb && this.Kb.Al(a);
    this.vb && this.vb.Al(a)
};
b.isVisible = function() {
    var a = !1;
    this.Kb && (a = this.Kb.isVisible());
    this.vb && (a = a || this.vb.isVisible());
    return a
};
g.bb = function(a, c, d, e, f) {
    this.s = a;
    this.Gj = d || !1;
    this.Tk = c;
    this.dl = void 0 !== f ? f : g.bb.NE;
    this.ratio = this.zb = null;
    this.Oe(e);
    this.position = new g.g.ba(0, 0);
    a = g.bb.sd;
    c ? (this.ud.setAttribute("height", a), this.Xg.setAttribute("height", a), this.bf.setAttribute("height", a - 5), this.bf.setAttribute("y", 2.5), this.Ss = "width", this.mD = "x") : (this.ud.setAttribute("width", a), this.Xg.setAttribute("width", a), this.bf.setAttribute("width", a - 5), this.bf.setAttribute("x", 2.5), this.Ss = "height", this.mD = "y");
    this.gD = g.N.ta(this.ud,
        "mousedown", this, this.$J);
    this.hD = g.N.ta(this.bf, "mousedown", this, this.aK)
};
b = g.bb.prototype;
b.Zx = new g.g.ba(0, 0);
b.ID = 0;
b.Hf = 0;
b.kj = 0;
b.cp = 0;
b.Xe = !0;
b.Gk = !0;
g.bb.sd = 15;
g.Touch.vA && (g.bb.sd = 25);
g.bb.NE = .5;
g.bb.GJ = function(a, c) {
    return a.Mc == c.Mc && a.Yc == c.Yc && a.Lf == c.Lf && a.Mf == c.Mf && a.Wd == c.Wd && a.Ad == c.Ad && a.scrollWidth == c.scrollWidth && a.scrollHeight == c.scrollHeight && a.scrollLeft == c.scrollLeft && a.scrollTop == c.scrollTop
};
b = g.bb.prototype;
b.J = function() {
    ea();
    g.N.Pa(this.gD);
    this.gD = null;
    g.N.Pa(this.hD);
    this.hD = null;
    g.g.o.removeNode(this.Xg);
    this.ud = this.P = this.Xg = null;
    this.bf && (this.s.Cc.unsubscribe(this.bf), this.bf = null);
    this.s = null
};

function fa(a, c) {
    return c = 0 >= c || isNaN(c) ? 0 : Math.min(c, a.Hf)
}

function ha(a, c) {
    a.kj = c;
    a.bf.setAttribute(a.Ss, a.kj)
}

function ia(a, c) {
    return c = 0 >= c || isNaN(c) ? 0 : Math.min(c, a.Hf - a.kj)
}

function ja(a, c) {
    a.cp = c;
    a.bf.setAttribute(a.mD, a.cp)
}

function ka(a, c) {
    a.Hf = c;
    a.Xg.setAttribute(a.Ss, a.Hf);
    a.ud.setAttribute(a.Ss, a.Hf)
}
b.setPosition = function(a, c) {
    this.position.x = a;
    this.position.y = c;
    g.g.o.Wp(this.Xg, "translate(" + (this.position.x + this.Zx.x) + "px," + (this.position.y + this.Zx.y) + "px)")
};
b.resize = function(a) {
    if (!a && (a = this.s.ae(), !a)) return;
    if (!this.zb || !g.bb.GJ(a, this.zb)) {
        if (this.Tk) {
            var c = a;
            la(this, c) ? ma(this, c) : na(this, c)
        } else c = a, la(this, c) ? oa(this, c) : pa(this, c);
        this.zb = a;
        qa(this)
    }
};

function la(a, c) {
    return a.zb ? a.zb.Mc !== c.Mc || a.zb.Yc !== c.Yc || a.zb.Ad !== c.Ad || a.zb.Wd !== c.Wd : !0
}

function ma(a, c) {
    var d = c.Mc - 2 * a.dl;
    a.Gj && (d -= g.bb.sd);
    ka(a, Math.max(0, d));
    d = c.Ad + a.dl;
    a.Gj && a.s.M && (d += g.bb.sd);
    a.setPosition(d, c.Wd + c.Yc - g.bb.sd - a.dl);
    na(a, c)
}

function na(a, c) {
    if (c.Mc >= c.scrollWidth) ha(a, a.Hf), ja(a, 0), a.Gj || a.ub(!1);
    else {
        a.Gj || a.ub(!0);
        var d = a.Hf * c.Mc / c.scrollWidth;
        d = fa(a, d);
        ha(a, d);
        d = c.scrollWidth - c.Mc;
        var e = a.Hf - a.kj;
        c = (c.Lf - c.scrollLeft) / d * e;
        c = ia(a, c);
        ja(a, c);
        a.ratio = e / d
    }
}

function oa(a, c) {
    var d = c.Yc - 2 * a.dl;
    a.Gj && (d -= g.bb.sd);
    ka(a, Math.max(0, d));
    a.setPosition(a.s.M ? c.Ad + a.dl : c.Ad + c.Mc - g.bb.sd - a.dl, c.Wd + a.dl);
    pa(a, c)
}

function pa(a, c) {
    if (c.Yc >= c.scrollHeight) ha(a, a.Hf), ja(a, 0), a.Gj || a.ub(!1);
    else {
        a.Gj || a.ub(!0);
        var d = a.Hf * c.Yc / c.scrollHeight;
        d = fa(a, d);
        ha(a, d);
        d = c.scrollHeight - c.Yc;
        var e = a.Hf - a.kj;
        c = (c.Mf - c.scrollTop) / d * e;
        c = ia(a, c);
        ja(a, c);
        a.ratio = e / d
    }
}
b.Oe = function(a) {
    var c = "blocklyScrollbar" + (this.Tk ? "Horizontal" : "Vertical");
    a && (c += " " + a);
    this.Xg = g.g.o.K(g.g.D.yk, {
        "class": c
    }, null);
    this.P = g.g.o.K(g.g.D.oc, {}, this.Xg);
    this.ud = g.g.o.K(g.g.D.Hb, {
        "class": "blocklyScrollbarBackground"
    }, this.P);
    a = Math.floor((g.bb.sd - 5) / 2);
    this.bf = g.g.o.K(g.g.D.Hb, {
        "class": "blocklyScrollbarHandle",
        rx: a,
        ry: a
    }, this.P);
    this.s.Cc.subscribe(this.bf, "scrollbarColour", "fill");
    this.s.Cc.subscribe(this.bf, "scrollbarOpacity", "fill-opacity");
    g.g.o.Wk(this.Xg, t(this.s))
};
b.isVisible = function() {
    return this.Xe
};
b.Al = function(a) {
    var c = a != this.Gk;
    this.Gk = a;
    c && this.qq()
};
b.ub = function(a) {
    var c = a != this.isVisible();
    if (this.Gj) throw Error("Unable to toggle visibility of paired scrollbars.");
    this.Xe = a;
    c && this.qq()
};
b.qq = function() {
    this.Gk && this.isVisible() ? this.Xg.setAttribute("display", "block") : this.Xg.setAttribute("display", "none")
};
b.$J = function(a) {
    ra(this.s);
    g.Touch.Dk();
    ea();
    if (g.g.bl(a)) a.stopPropagation();
    else {
        var c = g.g.zp(a, t(this.s), sa(this.s));
        c = this.Tk ? c.x : c.y;
        var d = g.g.$o(this.bf);
        d = this.Tk ? d.x : d.y;
        var e = this.cp,
            f = .95 * this.kj;
        c <= d ? e -= f : c >= d + this.kj && (e += f);
        ja(this, ia(this, e));
        qa(this);
        a.stopPropagation();
        a.preventDefault()
    }
};
b.aK = function(a) {
    ra(this.s);
    ea();
    g.g.bl(a) ? a.stopPropagation() : (this.bL = this.cp, ta(this.s), this.ID = this.Tk ? a.clientX : a.clientY, g.bb.rd = g.N.ta(document, "mouseup", this, this.gK), g.bb.Ye = g.N.ta(document, "mousemove", this, this.dK), a.stopPropagation(), a.preventDefault())
};
b.dK = function(a) {
    ja(this, ia(this, this.bL + ((this.Tk ? a.clientX : a.clientY) - this.ID)));
    qa(this)
};
b.gK = function() {
    ua(this.s);
    g.Touch.Dk();
    ea()
};

function ea() {
    g.Uc(!0);
    g.bb.rd && (g.N.Pa(g.bb.rd), g.bb.rd = null);
    g.bb.Ye && (g.N.Pa(g.bb.Ye), g.bb.Ye = null)
}

function da(a) {
    a = a.cp / (a.Hf - a.kj);
    isNaN(a) && (a = 0);
    return a
}

function qa(a) {
    var c = da(a),
        d = {};
    a.Tk ? d.x = c : d.y = c;
    a.s.Xp(d)
}
b.set = function(a, c) {
    ja(this, ia(this, a * this.ratio));
    (c || void 0 === c) && qa(this)
};
b.Ht = function(a, c) {
    this.Zx = new g.g.ba(a, c)
};
g.g.od = {};
g.g.od.vn = function(a) {
    return a * Math.PI / 180
};
g.g.od.BP = function(a) {
    return 180 * a / Math.PI
};
g.g.od.vm = function(a, c, d) {
    if (d < a) {
        var e = d;
        d = a;
        a = e
    }
    return Math.max(a, Math.min(c, d))
};
g.h.Abstract = function() {
    this.Ve = null;
    this.Zc = void 0;
    this.group = g.h.tc();
    this.ab = g.h.ab
};
b = g.h.Abstract.prototype;
b.ex = !1;
b.Ba = function() {
    var a = {
        type: this.type
    };
    this.group && (a.group = this.group);
    return a
};
b.ma = function(a) {
    this.Ve = !1;
    this.group = a.group
};
b.Vm = function() {
    return !1
};
b.run = function() {};

function va(a) {
    if (a.Zc) var c = g.Wb.Vo(a.Zc);
    if (!c) throw Error("Workspace is null. Event must have been generated from real Blockly events.");
    return c
};
g.g.object = {};
g.g.object.X = function(a, c) {
    a.v = c.prototype;
    a.prototype = Object.create(c.prototype);
    a.prototype.constructor = a
};
g.g.object.Kd = function(a, c) {
    for (var d in c) a[d] = c[d]
};
g.g.object.Bm = function(a, c) {
    for (var d in c) a[d] = null != c[d] && "object" === typeof c[d] ? g.g.object.Bm(a[d] || Object.create(null), c[d]) : c[d];
    return a
};
g.g.object.values = function(a) {
    return Object.values ? Object.values(a) : Object.keys(a).map(function(c) {
        return a[c]
    })
};
g.g.xml = {};
g.g.xml.hG = "https://developers.google.com/blockly/xml";
g.g.xml.document = function() {
    return document
};
g.g.xml.createElement = function(a) {
    return g.g.xml.document().createElementNS(g.g.xml.hG, a)
};
g.g.xml.createTextNode = function(a) {
    return g.g.xml.document().createTextNode(a)
};
g.g.xml.hL = function(a) {
    return (new DOMParser).parseFromString(a, "text/xml")
};
g.g.xml.Zd = function(a) {
    return (new XMLSerializer).serializeToString(a)
};
g.ob = {
    yg: g.pa.$b,
    lf: g.pa.$c,
    pg: 5
};
g.O = {};
g.O.AL = function() {
    var a = u,
        c = g.g.xml.createElement("xml"),
        d = g.O.wL(g.ka.gv(a));
    d.hasChildNodes() && c.appendChild(d);
    var e = [].concat(a.St);
    1 < e.length && (a.dh.offset = Math.sin(g.g.od.vn(g.Wb.mA)), a.M && (a.dh.offset *= -1), e.sort(a.dh));
    d = 0;
    for (var f; f = e[d]; d++) c.appendChild(f.QD(!0));
    a = a.zc(!0);
    for (d = 0; e = a[d]; d++) c.appendChild(g.O.tv(e, !0));
    return c
};
g.O.wL = function(a) {
    for (var c = g.g.xml.createElement("variables"), d = 0, e; e = a[d]; d++) {
        var f = g.g.xml.createElement("variable");
        f.appendChild(g.g.xml.createTextNode(e.name));
        e.type && f.setAttribute("type", e.type);
        f.id = e.Oa();
        c.appendChild(f)
    }
    return c
};
g.O.tv = function(a, c) {
    if (a.nd() && (a = wa(a, !1)[0], !a)) return new DocumentFragment;
    var d;
    a.u.M && (d = a.u.Qh());
    c = g.O.Ah(a, c);
    var e = a.kb();
    c.setAttribute("x", Math.round(a.u.M ? d - e.x : e.x));
    c.setAttribute("y", Math.round(e.y));
    return c
};
g.O.CI = function(a) {
    var c = !1;
    a.name && (a.wk ? c = !0 : a.Kn && (console.warn("Detected an editable field that was not serializable. Please define SERIALIZABLE property as true on all editable custom fields. Proceeding with serialization."), c = !0));
    return c ? (c = g.g.xml.createElement("field"), c.setAttribute("name", a.name || ""), a.Uy(c)) : null
};
g.O.rH = function(a, c) {
    for (var d = 0, e; e = a.Y[d]; d++)
        for (var f = 0, h; h = e.fb[f]; f++)(h = g.O.CI(h)) && c.appendChild(h)
};
g.O.Ah = function(a, c) {
    if (a.nd()) return (a = wa(a, !1)[0]) ? g.O.Ah(a) : new DocumentFragment;
    var d = g.g.xml.createElement(a.Sa ? "shadow" : "block");
    d.setAttribute("type", a.type);
    c || d.setAttribute("id", a.id);
    if (a.Wa) {
        var e = a.Wa();
        e && (e.hasChildNodes() || e.hasAttributes()) && d.appendChild(e)
    }
    g.O.rH(a, d);
    if (e = a.Le.text) {
        var f = a.Le.size,
            h = a.Le.ky,
            k = g.g.xml.createElement("comment");
        k.appendChild(g.g.xml.createTextNode(e));
        k.setAttribute("pinned", h);
        k.setAttribute("h", f.height);
        k.setAttribute("w", f.width);
        d.appendChild(k)
    }
    a.data &&
        (e = g.g.xml.createElement("data"), e.appendChild(g.g.xml.createTextNode(a.data)), d.appendChild(e));
    for (e = 0; f = a.Y[e]; e++) {
        var l;
        h = !0;
        if (f.type != g.ob.pg) {
            var m = f.connection.ra();
            f.type == g.ob.yg ? l = g.g.xml.createElement("value") : f.type == g.ob.lf && (l = g.g.xml.createElement("statement"));
            k = f.connection.Mm();
            !k || m && m.Sa || l.appendChild(g.O.bB(k, c));
            m && (k = g.O.Ah(m, c), k.nodeType == g.g.o.Ki.ELEMENT_NODE && (l.appendChild(k), h = !1));
            l.setAttribute("name", f.name);
            h || d.appendChild(l)
        }
    }
    void 0 != a.Sh && a.Sh != a.pJ && d.setAttribute("inline",
        a.Sh);
    a.isCollapsed() && d.setAttribute("collapsed", !0);
    a.isEnabled() || d.setAttribute("disabled", !0);
    a.Af() || a.Sa || d.setAttribute("deletable", !1);
    a.Hc() || a.Sa || d.setAttribute("movable", !1);
    a.ge() || d.setAttribute("editable", !1);
    if (e = r(a)) k = g.O.Ah(e, c), k.nodeType == g.g.o.Ki.ELEMENT_NODE && (l = g.g.xml.createElement("next"), l.appendChild(k), d.appendChild(l));
    k = a.aa && a.aa.Mm();
    !k || e && e.Sa || l.appendChild(g.O.bB(k, c));
    return d
};
g.O.bB = function(a, c) {
    for (var d = a = a.cloneNode(!0), e; d;)
        if (c && "shadow" == d.nodeName && d.removeAttribute("id"), d.firstChild) d = d.firstChild;
        else {
            for (; d && !d.nextSibling;) e = d, d = d.parentNode, e.nodeType == g.g.o.Ki.TEXT_NODE && "" == e.data.trim() && d.firstChild != e && g.g.o.removeNode(e);
            d && (e = d, d = d.nextSibling, e.nodeType == g.g.o.Ki.TEXT_NODE && "" == e.data.trim() && g.g.o.removeNode(e))
        } return a
};
g.O.Zd = function(a) {
    return g.g.xml.Zd(a).replace(/<(\w+)([^<]*)\/>/g, "<$1$2></$1>")
};
g.O.ZO = function(a) {
    a = g.O.Zd(a).split("<");
    for (var c = "", d = 1; d < a.length; d++) {
        var e = a[d];
        "/" == e[0] && (c = c.substring(2));
        a[d] = c + "<" + e;
        "/" != e[0] && "/>" != e.slice(-2) && (c += "  ")
    }
    a = a.join("\n");
    a = a.replace(/(<(\w+)\b[^>]*>[^\n]*)\n *<\/\2>/g, "$1</$2>");
    return a.replace(/^\n/, "")
};
g.O.ze = function(a) {
    var c = g.g.xml.hL(a);
    if (!c || !c.documentElement || c.getElementsByTagName("parsererror").length) throw Error("textToDom was unable to parse: " + a);
    return c.documentElement
};
g.O.RO = function(a, c) {
    c.fd(!1);
    c.clear();
    a = g.O.fj(a, c);
    c.fd(!0);
    return a
};
g.O.fj = function(a, c) {
    if (a instanceof g.Wb) {
        var d = a;
        a = c;
        c = d;
        console.warn("Deprecated call to Blockly.Xml.domToWorkspace, swap the arguments.")
    }
    var e;
    c.M && (e = c.Qh());
    d = [];
    g.g.o.cq();
    var f = g.h.tc();
    f || g.h.oa(!0);
    c.fd && c.fd(!1);
    var h = !0;
    try {
        for (var k = 0, l; l = a.childNodes[k]; k++) {
            var m = l.nodeName.toLowerCase(),
                n = l;
            if ("block" == m || "shadow" == m && !g.h.ab) {
                var q = g.O.Ik(n, c);
                d.push(q.id);
                var v = n.hasAttribute("x") ? parseInt(n.getAttribute("x"), 10) : 10,
                    A = n.hasAttribute("y") ? parseInt(n.getAttribute("y"), 10) : 10;
                isNaN(v) ||
                    isNaN(A) || q.moveBy(c.M ? e - v : v, A);
                h = !1
            } else {
                if ("shadow" == m) throw TypeError("Shadow block cannot be a top-level block.");
                if ("comment" == m) c.ua ? g.nm ? g.nm.Mk(n) : console.warn("Missing require for Blockly.WorkspaceCommentSvg, ignoring workspace comment.") : g.FA ? g.FA.Mk(n) : console.warn("Missing require for Blockly.WorkspaceComment, ignoring workspace comment.");
                else if ("variables" == m) {
                    if (h) g.O.tI(n, c);
                    else throw Error("'variables' tag must exist once before block and shadow tag elements in the workspace XML, but it was found in another location.");
                    h = !1
                }
            }
        }
    } finally {
        f || g.h.oa(!1), g.g.o.eq()
    }
    c.fd && c.fd(!0);
    g.h.Ia(new(g.h.get(g.h.lu))(c));
    return d
};
g.O.NO = function(a, c) {
    var d;
    Object.prototype.hasOwnProperty.call(c, "scale") && (d = xa(c));
    a = g.O.fj(a, c);
    if (d && d.top != d.bottom) {
        var e = d.bottom;
        var f = c.M ? d.right : d.left;
        var h = Infinity,
            k = -Infinity,
            l = Infinity;
        for (d = 0; d < a.length; d++) {
            var m = c.Fd(a[d]).kb();
            m.y < l && (l = m.y);
            m.x < h && (h = m.x);
            m.x > k && (k = m.x)
        }
        e = e - l + 10;
        f = c.M ? f - k : f - h;
        for (d = 0; d < a.length; d++) c.Fd(a[d]).moveBy(f, e)
    }
    return a
};
g.O.Ik = function(a, c) {
    if (a instanceof g.Wb) {
        var d = a;
        a = c;
        c = d;
        console.warn("Deprecated call to Blockly.Xml.domToBlock, swap the arguments.")
    }
    g.h.disable();
    d = c.Nk();
    try {
        var e = g.O.gw(a, c),
            f = p(e, !1);
        if (c.ua) {
            ya(e, !1);
            for (var h = f.length - 1; 0 <= h; h--) f[h].xe();
            for (h = f.length - 1; 0 <= h; h--) f[h].Ja(!1);
            setTimeout(function() {
                e.uf || ya(e, !0)
            }, 1);
            za(e);
            Aa(c)
        } else
            for (h = f.length - 1; 0 <= h; h--) f[h].Vk()
    } finally {
        g.h.enable()
    }
    if (g.h.isEnabled()) {
        a = g.ka.LB(c, d);
        for (h = 0; h < a.length; h++) c = a[h], g.h.Ia(new(g.h.get(g.h.jo))(c));
        g.h.Ia(new(g.h.get(g.h.In))(e))
    }
    return e
};
g.O.tI = function(a, c) {
    for (var d = 0, e; e = a.childNodes[d]; d++)
        if (e.nodeType == g.g.o.Ki.ELEMENT_NODE) {
            var f = e.getAttribute("type"),
                h = e.getAttribute("id");
            c.sf(e.textContent, f, h)
        }
};
g.O.EJ = function(a) {
    for (var c = {
            SC: [],
            Zi: [],
            data: [],
            Gm: [],
            input: [],
            next: []
        }, d = 0, e; e = a.childNodes[d]; d++)
        if (e.nodeType != g.g.o.Ki.TEXT_NODE) switch (e.nodeName.toLowerCase()) {
            case "mutation":
                c.SC.push(e);
                break;
            case "comment":
                if (!g.Comment) {
                    console.warn("Missing require for Blockly.Comment, ignoring block comment.");
                    break
                }
                c.Zi.push(e);
                break;
            case "data":
                c.data.push(e);
                break;
            case "title":
            case "field":
                c.Gm.push(e);
                break;
            case "value":
            case "statement":
                c.input.push(e);
                break;
            case "next":
                c.next.push(e);
                break;
            default:
                console.warn("Ignoring unknown tag: " +
                    e.nodeName)
        }
    return c
};
g.O.wH = function(a, c) {
    for (var d = !1, e = 0, f; f = a[e]; e++) c.yb && (c.yb(f), c.xe && (d = !0));
    return d
};
g.O.sH = function(a, c) {
    for (var d = 0, e; e = a[d]; d++) {
        var f = e.textContent,
            h = "true" == e.getAttribute("pinned"),
            k = parseInt(e.getAttribute("w"), 10);
        e = parseInt(e.getAttribute("h"), 10);
        c.Pj(f);
        c.Le.ky = h;
        isNaN(k) || isNaN(e) || (c.Le.size = new g.g.ad(k, e));
        h && c.NI && !c.Yb && setTimeout(function() {
            c.rf.ub(!0)
        }, 1)
    }
};
g.O.tH = function(a, c) {
    for (var d = 0, e; e = a[d]; d++) c.data = e.textContent
};
g.O.uH = function(a, c) {
    for (var d = 0, e; e = a[d]; d++) {
        var f = e.getAttribute("name");
        g.O.sI(c, f, e)
    }
};
g.O.GB = function(a) {
    for (var c = {
            zo: null,
            Ao: null
        }, d = 0, e; e = a.childNodes[d]; d++) e.nodeType == g.g.o.Ki.ELEMENT_NODE && ("block" == e.nodeName.toLowerCase() ? c.zo = e : "shadow" == e.nodeName.toLowerCase() && (c.Ao = e));
    return c
};
g.O.vH = function(a, c, d, e) {
    for (var f = 0, h; h = a[f]; f++) {
        var k = h.getAttribute("name"),
            l = w(d, k);
        if (!l) {
            console.warn("Ignoring non-existent input " + k + " in block " + e);
            break
        }
        h = g.O.GB(h);
        if (h.zo) {
            if (!l.connection) throw TypeError("Input connection does not exist.");
            g.O.gw(h.zo, c, l.connection, !1)
        }
        h.Ao && l.connection.nn(h.Ao)
    }
};
g.O.xH = function(a, c, d) {
    for (var e = 0, f; f = a[e]; e++) {
        f = g.O.GB(f);
        if (f.zo) {
            if (!d.aa) throw TypeError("Next statement does not exist.");
            if (d.aa.isConnected()) throw TypeError("Next statement is already connected.");
            g.O.gw(f.zo, c, d.aa, !0)
        }
        f.Ao && d.aa && d.aa.nn(f.Ao)
    }
};
g.O.gw = function(a, c, d, e) {
    var f = a.getAttribute("type");
    if (!f) throw TypeError("Block type unspecified: " + a.outerHTML);
    var h = a.getAttribute("id");
    h = c.Wg(f, h);
    var k = g.O.EJ(a),
        l = g.O.wH(k.SC, h);
    g.O.sH(k.Zi, h);
    g.O.tH(k.data, h);
    if (d)
        if (e)
            if (h.qa) d.connect(h.qa);
            else throw TypeError("Next block does not have previous statement.");
    else if (h.R) d.connect(h.R);
    else if (h.qa) d.connect(h.qa);
    else throw TypeError("Child block does not have output or previous statement.");
    g.O.uH(k.Gm, h);
    g.O.vH(k.input, c, h, f);
    g.O.xH(k.next,
        c, h);
    l && h.xe();
    (c = a.getAttribute("inline")) && h.ye("true" == c);
    (c = a.getAttribute("disabled")) && h.le("true" != c && "disabled" != c);
    if (c = a.getAttribute("deletable")) h.Uv = "true" == c;
    (c = a.getAttribute("movable")) && h.Gt("true" == c);
    (c = a.getAttribute("editable")) && h.Ey("true" == c);
    (c = a.getAttribute("collapsed")) && h.Oj("true" == c);
    if ("shadow" == a.nodeName.toLowerCase()) {
        a = wa(h, !1);
        for (c = 0; d = a[c]; c++)
            if (!d.Sa) throw TypeError("Shadow block not allowed non-shadow child.");
        if (h.Oh().length) throw TypeError("Shadow blocks cannot have variable references.");
        h.Hy(!0)
    }
    return h
};
g.O.sI = function(a, c, d) {
    var e = x(a, c);
    e ? e.Mk(d) : console.warn("Ignoring non-existent field " + c + " in block " + a.type)
};
g.O.lI = function(a) {
    for (var c = 0, d; d = a.childNodes[c]; c++)
        if ("next" == d.nodeName.toLowerCase()) {
            a.removeChild(d);
            break
        }
};
g.h.mg = function(a) {
    g.h.mg.v.constructor.call(this);
    this.qb = (this.Ve = "undefined" == typeof a) ? "" : a.id;
    this.Zc = this.Ve ? "" : a.u.id
};
g.g.object.X(g.h.mg, g.h.Abstract);
g.h.mg.prototype.Ba = function() {
    var a = g.h.mg.v.Ba.call(this);
    a.blockId = this.qb;
    return a
};
g.h.mg.prototype.ma = function(a) {
    g.h.mg.v.ma.call(this, a);
    this.qb = a.blockId
};
g.h.ak = function(a, c, d, e, f) {
    g.h.KE.v.constructor.call(this, a);
    a && (this.element = "undefined" == typeof c ? "" : c, this.name = "undefined" == typeof d ? "" : d, this.oldValue = "undefined" == typeof e ? "" : e, this.newValue = "undefined" == typeof f ? "" : f)
};
g.g.object.X(g.h.ak, g.h.mg);
g.h.KE = g.h.ak;
b = g.h.ak.prototype;
b.type = g.h.ck;
b.Ba = function() {
    var a = g.h.ak.v.Ba.call(this);
    a.element = this.element;
    this.name && (a.name = this.name);
    a.oldValue = this.oldValue;
    a.newValue = this.newValue;
    return a
};
b.ma = function(a) {
    g.h.ak.v.ma.call(this, a);
    this.element = a.element;
    this.name = a.name;
    this.oldValue = a.oldValue;
    this.newValue = a.newValue
};
b.Vm = function() {
    return this.oldValue == this.newValue
};
b.run = function(a) {
    var c = va(this).Fd(this.qb);
    if (c) switch (c.qd && c.qd.ub(!1), a = a ? this.newValue : this.oldValue, this.element) {
        case "field":
            (c = x(c, this.name)) ? c.setValue(a): console.warn("Can't set non-existent field: " + this.name);
            break;
        case "comment":
            c.Pj(a || null);
            break;
        case "collapsed":
            c.Oj(!!a);
            break;
        case "disabled":
            c.le(!a);
            break;
        case "inline":
            c.ye(!!a);
            break;
        case "mutation":
            var d = "";
            c.Wa && (d = (d = c.Wa()) && g.O.Zd(d));
            if (c.yb) {
                var e = g.O.ze(a || "<mutation/>");
                c.yb(e)
            }
            g.h.Ia(new g.h.ak(c, "mutation", null, d,
                a));
            break;
        default:
            console.warn("Unknown change type: " + this.element)
    } else console.warn("Can't change non-existent block: " + this.qb)
};
g.h.ng = function(a) {
    g.h.ng.v.constructor.call(this, a);
    a && (a.Sa && (this.ab = !1), this.xml = a.u.ua ? g.O.tv(a) : g.O.Ah(a), this.qj = g.h.QB(a))
};
g.g.object.X(g.h.ng, g.h.mg);
g.h.KL = g.h.ng;
g.h.ng.prototype.type = g.h.In;
g.h.ng.prototype.Ba = function() {
    var a = g.h.ng.v.Ba.call(this);
    a.xml = g.O.Zd(this.xml);
    a.ids = this.qj;
    this.ab || (a.recordUndo = this.ab);
    return a
};
g.h.ng.prototype.ma = function(a) {
    g.h.ng.v.ma.call(this, a);
    this.xml = g.O.ze(a.xml);
    this.qj = a.ids;
    void 0 !== a.recordUndo && (this.ab = a.recordUndo)
};
g.h.ng.prototype.run = function(a) {
    var c = va(this);
    if (a) a = g.g.xml.createElement("xml"), a.appendChild(this.xml), g.O.fj(a, c);
    else {
        a = 0;
        for (var d; d = this.qj[a]; a++) {
            var e = c.Fd(d);
            e ? e.J(!1) : d == this.qb && console.warn("Can't uncreate non-existent block: " + d)
        }
    }
};
g.h.qg = function(a) {
    g.h.qg.v.constructor.call(this, a);
    if (a) {
        if (a.getParent()) throw Error("Connected blocks cannot be deleted.");
        a.Sa && (this.ab = !1);
        this.dn = a.u.ua ? g.O.tv(a) : g.O.Ah(a);
        this.qj = g.h.QB(a)
    }
};
g.g.object.X(g.h.qg, g.h.mg);
g.h.LL = g.h.qg;
g.h.qg.prototype.type = g.h.gk;
g.h.qg.prototype.Ba = function() {
    var a = g.h.qg.v.Ba.call(this);
    a.oldXml = g.O.Zd(this.dn);
    a.ids = this.qj;
    this.ab || (a.recordUndo = this.ab);
    return a
};
g.h.qg.prototype.ma = function(a) {
    g.h.qg.v.ma.call(this, a);
    this.dn = g.O.ze(a.oldXml);
    this.qj = a.ids;
    void 0 !== a.recordUndo && (this.ab = a.recordUndo)
};
g.h.qg.prototype.run = function(a) {
    var c = va(this);
    if (a) {
        a = 0;
        for (var d; d = this.qj[a]; a++) {
            var e = c.Fd(d);
            e ? e.J(!1) : d == this.qb && console.warn("Can't delete non-existent block: " + d)
        }
    } else a = g.g.xml.createElement("xml"), a.appendChild(this.dn), g.O.fj(a, c)
};
g.h.qk = function(a) {
    g.h.qk.v.constructor.call(this, a);
    a && (a.Sa && (this.ab = !1), a = Ba(this), this.bD = a.iD, this.YC = a.tC, this.Hx = a.nB)
};
g.g.object.X(g.h.qk, g.h.mg);
g.h.ML = g.h.qk;
b = g.h.qk.prototype;
b.type = g.h.Un;
b.Ba = function() {
    var a = g.h.qk.v.Ba.call(this);
    this.ll && (a.newParentId = this.ll);
    this.kl && (a.newInputName = this.kl);
    this.Dj && (a.newCoordinate = Math.round(this.Dj.x) + "," + Math.round(this.Dj.y));
    this.ab || (a.recordUndo = this.ab);
    return a
};
b.ma = function(a) {
    g.h.qk.v.ma.call(this, a);
    this.ll = a.newParentId;
    this.kl = a.newInputName;
    if (a.newCoordinate) {
        var c = a.newCoordinate.split(",");
        this.Dj = new g.g.ba(Number(c[0]), Number(c[1]))
    }
    void 0 !== a.recordUndo && (this.ab = a.recordUndo)
};
b.wl = function() {
    var a = Ba(this);
    this.ll = a.iD;
    this.kl = a.tC;
    this.Dj = a.nB
};

function Ba(a) {
    var c = va(a).Fd(a.qb);
    a = {};
    var d = c.getParent();
    if (d) {
        if (a.iD = d.id, c = Ca(d, c)) a.tC = c.name
    } else a.nB = c.kb();
    return a
}
b.Vm = function() {
    return this.bD == this.ll && this.YC == this.kl && g.g.ba.wf(this.Hx, this.Dj)
};
b.run = function(a) {
    var c = va(this),
        d = c.Fd(this.qb);
    if (d) {
        var e = a ? this.ll : this.bD,
            f = a ? this.kl : this.YC,
            h = a ? this.Dj : this.Hx;
        a = null;
        if (e && (a = c.Fd(e), !a)) {
            console.warn("Can't connect to non-existent block: " + e);
            return
        }
        d.getParent() && y(d);
        if (h) f = d.kb(), d.moveBy(h.x - f.x, h.y - f.y);
        else {
            d = d.R || d.qa;
            c = d.type;
            if (f) {
                if (a = w(a, f)) var k = a.connection
            } else c == g.pa.Ge && (k = a.aa);
            k ? d.connect(k) : console.warn("Can't connect to non-existent input: " + f)
        }
    } else console.warn("Can't move non-existent block: " + this.qb)
};
g.B.register(g.B.S.hc, g.h.In, g.h.ng);
g.B.register(g.B.S.hc, g.h.gk, g.h.qg);
g.B.register(g.B.S.hc, g.h.ck, g.h.ak);
g.B.register(g.B.S.hc, g.h.Un, g.h.qk);
g.DM = function() {};
g.EM = function() {};
g.FM = function() {};
g.UM = function() {};
g.g.Dm = {};
g.g.Dm.warn = function(a, c, d, e) {
    a = a + " was deprecated on " + c + " and will be deleted on " + d + ".";
    e && (a += "\nUse " + e + " instead.");
    console.warn(a)
};
g.Ka = function(a, c) {
    this.H = a;
    this.type = c
};
g.Ka.Lq = 0;
g.Ka.DG = 1;
g.Ka.GG = 2;
g.Ka.FG = 3;
g.Ka.AG = 4;
g.Ka.BG = 5;
g.Ka.EG = 6;
g.Ka.CG = 7;
b = g.Ka.prototype;
b.va = null;
b.uf = !1;
b.um = null;
b.Kt = null;
b.x = 0;
b.y = 0;
b.Zr = function(a) {
    var c = this.ea(),
        d = a.ea();
    a.isConnected() && a.disconnect();
    if (this.isConnected()) {
        var e = this.Mm(!0);
        this.Kt = null;
        var f = this.ra();
        if (f.Sa) f.J(!1);
        else {
            this.disconnect();
            var h = f
        }
        this.Kt = e
    }
    var k;
    g.h.isEnabled() && (k = new(g.h.get(g.h.ui))(d));
    g.Ka.XH(this, a);
    d.It(c);
    k && (k.wl(), g.h.Ia(k));
    h && (a = this.type === g.pa.$b ? h.R : h.qa, (d = g.Ka.NB(d, a)) ? a.connect(d) : a.Ox(this))
};
b.J = function() {
    if (this.isConnected()) {
        this.nn(null);
        var a = this.ra();
        a && y(a)
    }
    this.uf = !0
};
b.ea = function() {
    return this.H
};

function Da(a) {
    return a.type == g.pa.$b || a.type == g.pa.$c
}
b.isConnected = function() {
    return !!this.va
};
b.Dv = function(a) {
    g.g.Dm.warn("Connection.prototype.canConnectWithReason", "July 2020", "July 2021", "the workspace's connection checker");
    return this.H.u.Fh.Dv(this, a, !1)
};
b.Ox = function() {};
b.connect = function(a) {
    if (this.va != a && Ea(this.H.u.Fh, this, a, !1)) {
        var c = g.h.tc();
        c || g.h.oa(!0);
        Da(this) ? this.Zr(a) : a.Zr(this);
        c || g.h.oa(!1)
    }
};
g.Ka.XH = function(a, c) {
    if (!a || !c) throw Error("Cannot connect null connections.");
    a.va = c;
    c.va = a
};
g.Ka.VI = function(a, c) {
    var d = null;
    c = c.R;
    for (var e = c.H.u.Fh, f = 0, h; h = a.Y[f]; f++)
        if ((h = h.connection) && Ea(e, c, h, !1)) {
            if (d) return null;
            d = h
        } return d
};
g.Ka.OI = function(a, c) {
    for (var d; d = g.Ka.VI(a, c);)
        if (a = d.ra(), !a || a.Sa) return d;
    return null
};
g.Ka.NB = function(a, c) {
    if (c.type === g.pa.qe) return g.Ka.OI(a, c.ea());
    a = a.Rs(!0);
    var d = c.H.u.Fh;
    return a && Ea(d, c, a, !1) ? a : null
};
b = g.Ka.prototype;
b.disconnect = function() {
    var a = this.va;
    if (!a) throw Error("Source connection not connected.");
    if (a.va != this) throw Error("Target connection not connected to source connection.");
    if (Da(this)) {
        var c = this.H;
        var d = a.ea();
        a = this
    } else c = a.ea(), d = this.H;
    var e = g.h.tc();
    e || g.h.oa(!0);
    this.bw(c, d);
    d.Sa || a.Rp();
    e || g.h.oa(!1)
};
b.bw = function(a, c) {
    var d;
    g.h.isEnabled() && (d = new(g.h.get(g.h.ui))(c));
    this.va = this.va.va = null;
    c.It(null);
    d && (d.wl(), g.h.Ia(d))
};
b.Rp = function() {
    var a = this.ea(),
        c = this.Mm();
    if (a.u && c)
        if (a = g.O.Ik(c, a.u), a.R) this.connect(a.R);
        else if (a.qa) this.connect(a.qa);
    else throw Error("Child block does not have output or previous statement.");
};
b.ra = function() {
    return this.isConnected() ? this.va.ea() : null
};
b.dD = function() {
    !this.isConnected() || this.va && Ea(this.H.u.Fh, this, this.va, !1) || y(Da(this) ? this.ra() : this.H)
};
b.hb = function(a) {
    a ? (Array.isArray(a) || (a = [a]), this.um = a, this.dD()) : this.um = null;
    return this
};
b.nn = function(a) {
    this.Kt = a;
    a = this.ra();
    a ? a.Sa && (a.J(!1), this.Rp()) : this.Rp()
};
b.Mm = function(a) {
    return a && this.ra().Sa ? g.O.Ah(this.ra()) : this.Kt
};
b.TC = function() {
    return []
};
b.Ng = function() {
    for (var a = null, c = this.H.Y, d = 0; d < c.length; d++)
        if (c[d].connection === this) {
            a = c[d];
            break
        } return a
};
b.toString = function() {
    var a = this.H;
    if (!a) return "Orphan Connection";
    if (a.R == this) var c = "Output Connection of ";
    else if (a.qa == this) c = "Previous Connection of ";
    else if (a.aa == this) c = "Next Connection of ";
    else {
        c = null;
        for (var d = 0, e; e = a.Y[d]; d++)
            if (e.connection == this) {
                c = e;
                break
            } if (c) c = 'Input "' + c.name + '" connection on ';
        else return console.warn("Connection not actually connected to sourceBlock_"), "Orphan Connection"
    }
    return c + Fa(a)
};
g.MM = function() {};
g.wz = function() {};

function Ea(a, c, d, e, f) {
    return a.Dv(c, d, e, f) == g.Ka.Lq
}
g.wz.prototype.Dv = function(a, c, d, e) {
    if (a && c) {
        if (Da(a)) {
            var f = a.ea();
            var h = c.ea()
        } else h = a.ea(), f = c.ea();
        f = f == h ? g.Ka.DG : c.type != g.em[a.type] ? g.Ka.GG : f.u !== h.u ? g.Ka.BG : f.Sa && !h.Sa ? g.Ka.EG : g.Ka.Lq
    } else f = g.Ka.FG;
    return f != g.Ka.Lq ? f : Ga(a, c) ? d && !Ha(a, c, e || 0) ? g.Ka.CG : g.Ka.Lq : g.Ka.AG
};

function Ga(a, c) {
    a = a.um;
    c = c.um;
    if (!a || !c) return !0;
    for (var d = 0; d < a.length; d++)
        if (-1 != c.indexOf(a[d])) return !0;
    return !1
}

function Ha(a, c, d) {
    if (Ia(a, c) > d || c.ea().nd()) return !1;
    switch (c.type) {
        case g.pa.Ge:
            return a.va || -1 != g.Fm.indexOf(c) ? a = !1 : c.va ? (a = c.ra(), a = a.nd() ? !(a.qa && a.qa.ra()) : !1) : a = !0, a;
        case g.pa.qe:
            if (c.isConnected() && !c.ra().nd() || a.isConnected()) return !1;
            break;
        case g.pa.$b:
            if (c.isConnected() && !c.ra().Hc() && !c.ra().Sa) return !1;
            break;
        case g.pa.$c:
            if (c.isConnected() && !a.ea().aa && !c.ra().Sa && c.ra().aa) return !1;
            break;
        default:
            return !1
    }
    return -1 != g.Fm.indexOf(c) ? !1 : !0
}
g.B.register(g.B.S.uz, g.B.ek, g.wz);
g.Ak = function(a, c, d, e) {
    this.name = a;
    this.Vi = c || Object.create(null);
    this.Sr = d || Object.create(null);
    this.eB = e || Object.create(null);
    this.fontStyle = Object.create(null);
    this.Qy = null;
    g.B.register(g.B.S.Tu, a, this)
};
g.Ak.prototype.Xf = function() {
    return this.name + "-theme"
};

function Ja(a, c) {
    return (c = a.eB[c]) && "string" == typeof c && Ja(a, c) ? Ja(a, c) : c ? String(c) : null
}
g.Ak.jI = function(a, c) {
    var d = new g.Ak(a),
        e = c.base;
    e && ("string" == typeof e && (e = g.B.Jw(g.B.S.Tu, e)), e instanceof g.Ak && (g.g.object.Bm(d, e), d.name = a));
    g.g.object.Bm(d.Vi, c.blockStyles);
    g.g.object.Bm(d.Sr, c.categoryStyles);
    g.g.object.Bm(d.eB, c.componentStyles);
    g.g.object.Bm(d.fontStyle, c.fontStyle);
    null != c.startHats && (d.Qy = c.startHats);
    return d
};
g.uh = {};
g.uh.zi = {};
g.uh.zi.gI = {
    colour_blocks: {
        colourPrimary: "20"
    },
    list_blocks: {
        colourPrimary: "260"
    },
    logic_blocks: {
        colourPrimary: "210"
    },
    loop_blocks: {
        colourPrimary: "120"
    },
    math_blocks: {
        colourPrimary: "230"
    },
    procedure_blocks: {
        colourPrimary: "290"
    },
    text_blocks: {
        colourPrimary: "160"
    },
    variable_blocks: {
        colourPrimary: "330"
    },
    variable_dynamic_blocks: {
        colourPrimary: "310"
    },
    hat_blocks: {
        colourPrimary: "330",
        hat: "cap"
    }
};
g.uh.zi.Sr = {
    colour_category: {
        colour: "20"
    },
    list_category: {
        colour: "260"
    },
    logic_category: {
        colour: "210"
    },
    loop_category: {
        colour: "120"
    },
    math_category: {
        colour: "230"
    },
    procedure_category: {
        colour: "290"
    },
    text_category: {
        colour: "160"
    },
    variable_category: {
        colour: "330"
    },
    variable_dynamic_category: {
        colour: "310"
    }
};
g.uh.zi = new g.Ak("classic", g.uh.zi.gI, g.uh.zi.Sr);
g.g.nk = {};
g.g.nk.SJ = 0;
g.g.nk.zs = function() {
    return "blockly-" + (g.g.nk.SJ++).toString(36)
};
g.g.Z = {};
g.g.Z.bu = "categoryToolbox";
g.g.Z.Jz = "flyoutToolbox";
g.g.Z.Ma = {
    zd: 0,
    hh: 1,
    Nb: 2,
    Qc: 3
};
g.g.Z.Lv = function(a) {
    if (!a) return null;
    if (a instanceof Element || "string" == typeof a) a = g.g.Z.gy(a), a = g.g.Z.aI(a);
    g.g.Z.sL(a);
    return a
};
g.g.Z.sL = function(a) {
    var c = a.kind;
    a = a.contents;
    if (c && c != g.g.Z.Jz && c != g.g.Z.bu) throw Error("Invalid toolbox kind " + c + ". Please supply either " + g.g.Z.Jz + " or " + g.g.Z.bu);
    if (!a) throw Error("Toolbox must have a contents attribute.");
};
g.g.Z.mB = function(a) {
    return a ? a.contents ? a.contents : Array.isArray(a) && 0 < a.length && !a[0].nodeType ? a : g.g.Z.gz(a) : []
};
g.g.Z.ep = function(a) {
    if (!a) return !1;
    var c = a.kind;
    return c ? c == g.g.Z.bu : !!a.contents.filter(function(d) {
        return "CATEGORY" == d.kind.toUpperCase()
    }).length
};
g.g.Z.xC = function(a) {
    return a && a.contents ? !!a.contents.filter(function(c) {
        return "CATEGORY" == c.kind.toUpperCase()
    }).length : !1
};
g.g.Z.aI = function(a) {
    var c = {
        contents: g.g.Z.gz(a)
    };
    a instanceof Node && g.g.Z.JA(a, c);
    return c
};
g.g.Z.gz = function(a) {
    var c = [],
        d = a.childNodes;
    d || (d = a);
    a = 0;
    for (var e; e = d[a]; a++)
        if (e.tagName) {
            var f = {},
                h = e.tagName.toUpperCase();
            f.kind = h;
            "BLOCK" == h ? f.blockxml = e : e.childNodes && 0 < e.childNodes.length && (f.contents = g.g.Z.gz(e));
            g.g.Z.JA(e, f);
            c.push(f)
        } return c
};
g.g.Z.JA = function(a, c) {
    for (var d = 0; d < a.attributes.length; d++) {
        var e = a.attributes[d]; - 1 < e.nodeName.indexOf("css-") ? (c.cssconfig = c.cssconfig || {}, c.cssconfig[e.nodeName.replace("css-", "")] = e.value) : c[e.nodeName] = e.value
    }
};
g.g.Z.gy = function(a) {
    if (a) {
        if ("string" != typeof a && (g.g.userAgent.ff && a.outerHTML ? a = a.outerHTML : a instanceof Element || (a = null)), "string" == typeof a && (a = g.O.ze(a), "xml" != a.nodeName.toLowerCase())) throw TypeError("Toolbox should be an <xml> document.");
    } else a = null;
    return a
};
g.Sd = function(a) {
    var c = !!a.readOnly;
    if (c) var d = null,
        e = !1,
        f = !1,
        h = !1,
        k = !1,
        l = !1,
        m = !1;
    else {
        d = g.g.Z.Lv(a.toolbox);
        e = g.g.Z.ep(d);
        f = a.trashcan;
        void 0 === f && (f = e);
        var n = a.maxTrashcanContents;
        f ? void 0 === n && (n = 32) : n = 0;
        h = a.collapse;
        void 0 === h && (h = e);
        k = a.comments;
        void 0 === k && (k = e);
        l = a.disable;
        void 0 === l && (l = e);
        m = a.sounds;
        void 0 === m && (m = !0)
    }
    var q = !!a.rtl,
        v = a.horizontalLayout;
    void 0 === v && (v = !1);
    var A = a.toolboxPosition;
    A = "end" !== A;
    A = v ? A ? g.g.Z.Ma.zd : g.g.Z.Ma.hh : A == q ? g.g.Z.Ma.Qc : g.g.Z.Ma.Nb;
    var S = a.css;
    void 0 === S &&
        (S = !0);
    var U = "https://blockly-demo.appspot.com/static/media/";
    a.media ? U = a.media : a.path && (U = a.path + "media/");
    var T = void 0 === a.oneBasedIndex ? !0 : !!a.oneBasedIndex,
        Wb = a.renderer || "geras",
        ef = a.plugins || {};
    this.M = q;
    this.Df = T;
    this.collapse = h;
    this.Co = k;
    this.disable = l;
    this.readOnly = c;
    this.yx = a.maxBlocks || Infinity;
    this.Ws = a.maxInstances;
    this.Ij = U;
    this.ep = e;
    this.Ld = g.Sd.kK(a, e);
    this.lC = f;
    this.Ys = n;
    this.jJ = m;
    this.gJ = S;
    this.ce = v;
    this.Ug = d;
    this.hC = g.Sd.jK(a);
    this.Ub = g.Sd.mK(a);
    this.Lb = A;
    this.jL = g.Sd.lK(a);
    this.Pp =
        Wb;
    this.Qp = a.rendererOverrides;
    this.Ow = null;
    this.uc = a.parentWorkspace;
    this.plugins = ef
};
g.NL = function() {};
g.Sd.kK = function(a, c) {
    var d = a.move || {},
        e = {};
    void 0 === d.scrollbars && void 0 === a.scrollbars ? e.scrollbars = c : "object" == typeof d.scrollbars ? (e.scrollbars = {}, e.scrollbars.hp = !!d.scrollbars.horizontal, e.scrollbars.vertical = !!d.scrollbars.vertical, e.scrollbars.hp && e.scrollbars.vertical ? e.scrollbars = !0 : e.scrollbars.hp || e.scrollbars.vertical || (e.scrollbars = !1)) : e.scrollbars = !!d.scrollbars || !!a.scrollbars;
    e.zn = e.scrollbars && void 0 !== d.wheel ? !!d.wheel : "object" == typeof e.scrollbars;
    e.Lh = e.scrollbars ? void 0 === d.drag ?
        !0 : !!d.drag : !1;
    return e
};
g.Sd.mK = function(a) {
    a = a.zoom || {};
    var c = {};
    c.controls = void 0 === a.controls ? !1 : !!a.controls;
    c.zn = void 0 === a.wheel ? !1 : !!a.wheel;
    c.JD = void 0 === a.startScale ? 1 : Number(a.startScale);
    c.vp = void 0 === a.maxScale ? 3 : Number(a.maxScale);
    c.xp = void 0 === a.minScale ? .3 : Number(a.minScale);
    c.BD = void 0 === a.scaleSpeed ? 1.2 : Number(a.scaleSpeed);
    c.lD = void 0 === a.pinch ? c.zn || c.controls : !!a.pinch;
    return c
};
g.Sd.jK = function(a) {
    a = a.grid || {};
    var c = {};
    c.spacing = Number(a.spacing) || 0;
    c.rb = a.colour || "#888";
    c.length = void 0 === a.length ? 1 : Number(a.length);
    c.xP = 0 < c.spacing && !!a.snap;
    return c
};
g.Sd.lK = function(a) {
    a = a.theme || g.uh.zi;
    return "string" == typeof a ? g.B.Jw(g.B.S.Tu, a) : a instanceof g.Ak ? a : g.Ak.jI(a.name || "builtin" + g.g.nk.zs(), a)
};
g.Sd.gy = function(a) {
    g.g.Dm.warn("Blockly.Options.parseToolboxTree", "September 2020", "September 2021", "Blockly.utils.toolbox.parseToolboxTree");
    return g.g.Z.gy(a)
};
g.h.vh = function(a) {
    g.h.vh.v.constructor.call(this);
    this.Wj = (this.Ve = "undefined" == typeof a) ? "" : a.Oa();
    this.Zc = this.Ve ? "" : a.u.id
};
g.g.object.X(g.h.vh, g.h.Abstract);
g.h.vh.prototype.Ba = function() {
    var a = g.h.vh.v.Ba.call(this);
    a.varId = this.Wj;
    return a
};
g.h.vh.prototype.ma = function(a) {
    g.h.vh.v.Ba.call(this);
    this.Wj = a.varId
};
g.h.wh = function(a) {
    g.h.wh.v.constructor.call(this, a);
    a && (this.Kl = a.type, this.Jl = a.name)
};
g.g.object.X(g.h.wh, g.h.vh);
g.h.wh.prototype.type = g.h.jo;
g.h.wh.prototype.Ba = function() {
    var a = g.h.wh.v.Ba.call(this);
    a.varType = this.Kl;
    a.varName = this.Jl;
    return a
};
g.h.wh.prototype.ma = function(a) {
    g.h.wh.v.ma.call(this, a);
    this.Kl = a.varType;
    this.Jl = a.varName
};
g.h.wh.prototype.run = function(a) {
    var c = va(this);
    a ? c.sf(this.Jl, this.Kl, this.Wj) : c.Jh(this.Wj)
};
g.h.xh = function(a) {
    g.h.xh.v.constructor.call(this, a);
    a && (this.Kl = a.type, this.Jl = a.name)
};
g.g.object.X(g.h.xh, g.h.vh);
g.h.xh.prototype.type = g.h.Fr;
g.h.xh.prototype.Ba = function() {
    var a = g.h.xh.v.Ba.call(this);
    a.varType = this.Kl;
    a.varName = this.Jl;
    return a
};
g.h.xh.prototype.ma = function(a) {
    g.h.xh.v.ma.call(this, a);
    this.Kl = a.varType;
    this.Jl = a.varName
};
g.h.xh.prototype.run = function(a) {
    var c = va(this);
    a ? c.Jh(this.Wj) : c.sf(this.Jl, this.Kl, this.Wj)
};
g.h.yh = function(a, c) {
    g.h.yh.v.constructor.call(this, a);
    a && (this.Ix = a.name, this.Ex = "undefined" == typeof c ? "" : c)
};
g.g.object.X(g.h.yh, g.h.vh);
g.h.yh.prototype.type = g.h.av;
g.h.yh.prototype.Ba = function() {
    var a = g.h.yh.v.Ba.call(this);
    a.oldName = this.Ix;
    a.newName = this.Ex;
    return a
};
g.h.yh.prototype.ma = function(a) {
    g.h.yh.v.ma.call(this, a);
    this.Ix = a.oldName;
    this.Ex = a.newName
};
g.h.yh.prototype.run = function(a) {
    var c = va(this);
    a ? c.Mj(this.Wj, this.Ex) : c.Mj(this.Wj, this.Ix)
};
g.B.register(g.B.S.hc, g.h.jo, g.h.wh);
g.B.register(g.B.S.hc, g.h.Fr, g.h.xh);
g.B.register(g.B.S.hc, g.h.av, g.h.yh);
g.bv = function(a) {
    this.Ua = Object.create(null);
    this.u = a
};
b = g.bv.prototype;
b.clear = function() {
    this.Ua = Object.create(null)
};
b.Ct = function(a, c) {
    var d = this.Id(c, a.type),
        e = z(this.u, !1);
    g.h.oa(!0);
    try {
        if (d && d.Oa() != a.Oa()) {
            var f = a.type;
            c != d.name && Ka(d, c, e);
            for (c = 0; c < e.length; c++) e[c].Bt(a.Oa(), d.Oa());
            g.h.Ia(new(g.h.get(g.h.Fr))(a));
            this.Ua[f].splice(this.bp(f).indexOf(a), 1)
        } else Ka(a, c, e)
    } finally {
        g.h.oa(!1)
    }
};
b.Mj = function(a, c) {
    var d = this.$f(a);
    if (!d) throw Error("Tried to rename a variable that didn't exist. ID: " + a);
    this.Ct(d, c)
};

function Ka(a, c, d) {
    g.h.Ia(new(g.h.get(g.h.av))(a, c));
    a.name = c;
    for (c = 0; c < d.length; c++) d[c].Tt(a)
}
b.sf = function(a, c, d) {
    var e = this.Id(a, c);
    if (e) {
        if (d && e.Oa() != d) throw Error('Variable "' + a + '" is already in use and its id is "' + e.Oa() + '" which conflicts with the passed in id, "' + d + '".');
        return e
    }
    if (d && this.$f(d)) throw Error('Variable id, "' + d + '", is already in use.');
    e = d || g.g.Mg();
    c = c || "";
    e = new g.mo(this.u, a, c, e);
    a = this.Ua[c] || [];
    a.push(e);
    delete this.Ua[c];
    this.Ua[c] = a;
    return e
};
b.Jh = function(a) {
    var c = this.$f(a);
    if (c) {
        var d = c.name,
            e = this.Nw(a);
        a = 0;
        for (var f; f = e[a]; a++)
            if ("procedures_defnoreturn" == f.type || "procedures_defreturn" == f.type) {
                a = B(f, "NAME");
                d = g.i.CANNOT_DELETE_VARIABLE_PROCEDURE.replace("%1", d).replace("%2", a);
                g.alert(d);
                return
            } var h = this;
        1 < e.length ? (d = g.i.DELETE_VARIABLE_CONFIRMATION.replace("%1", String(e.length)).replace("%2", d), g.confirm(d, function(k) {
            k && c && La(h, c, e)
        })) : La(h, c, e)
    } else console.warn("Can't delete non-existent variable: " + a)
};

function La(a, c, d) {
    var e = g.h.tc();
    e || g.h.oa(!0);
    try {
        for (var f = 0; f < d.length; f++) d[f].J(!0);
        var h = a.Ua[c.type];
        a = 0;
        for (var k; k = h[a]; a++)
            if (k.Oa() == c.Oa()) {
                h.splice(a, 1);
                g.h.Ia(new(g.h.get(g.h.Fr))(c));
                break
            }
    } finally {
        e || g.h.oa(!1)
    }
}
b.Id = function(a, c) {
    if (c = this.Ua[c || ""])
        for (var d = 0, e; e = c[d]; d++)
            if (g.Rd.wf(e.name, a)) return e;
    return null
};
b.$f = function(a) {
    for (var c = Object.keys(this.Ua), d = 0; d < c.length; d++)
        for (var e = c[d], f = 0, h; h = this.Ua[e][f]; f++)
            if (h.Oa() == a) return h;
    return null
};
b.bp = function(a) {
    return (a = this.Ua[a || ""]) ? a.slice() : []
};
b.Mw = function(a) {
    var c = {};
    g.g.object.Kd(c, this.Ua);
    a && a.Jj && g.g.object.Kd(c, a.Jj.Ua);
    a = Object.keys(c);
    c = !1;
    for (var d = 0; d < a.length; d++) "" == a[d] && (c = !0);
    c || a.push("");
    return a
};
b.Nk = function() {
    var a = [],
        c;
    for (c in this.Ua) a = a.concat(this.Ua[c]);
    return a
};
b.zw = function() {
    var a = [],
        c;
    for (c in this.Ua)
        for (var d = this.Ua[c], e = 0, f; f = d[e]; e++) a.push(f.name);
    return a
};
b.Nw = function(a) {
    for (var c = [], d = z(this.u, !1), e = 0; e < d.length; e++) {
        var f = d[e].Oh();
        if (f)
            for (var h = 0; h < f.length; h++) f[h].Oa() == a && c.push(d[e])
    }
    return c
};
g.Wb = function(a) {
    this.id = g.g.Mg();
    g.Wb.po[this.id] = this;
    this.options = a || new g.Sd({});
    this.M = !!this.options.M;
    this.ce = !!this.options.ce;
    this.Lb = this.options.Lb;
    this.Fh = new(g.B.Wf(g.B.S.uz, this.options, !0))(this);
    this.lq = [];
    this.St = [];
    this.Yr = Object.create(null);
    this.ie = [];
    this.Hl = [];
    this.Lp = [];
    this.rv = Object.create(null);
    this.oi = Object.create(null);
    this.Ua = new g.bv(this);
    this.Jj = null
};
b = g.Wb.prototype;
b.ua = !1;
b.ax = !1;
b.aA = 1024;
b.bs = null;
b.J = function() {
    this.ie.length = 0;
    this.clear();
    delete g.Wb.po[this.id]
};
g.Wb.mA = 3;
b = g.Wb.prototype;
b.dh = function(a, c) {
    a = a.kb();
    c = c.kb();
    return a.y + g.Wb.prototype.dh.offset * a.x - (c.y + g.Wb.prototype.dh.offset * c.x)
};
b.Ir = function(a) {
    this.lq.push(a)
};
b.At = function(a) {
    if (!g.g.uo(this.lq, a)) throw Error("Block not present in workspace's list of top-most blocks.");
};
b.zc = function(a) {
    var c = [].concat(this.lq);
    a && 1 < c.length && (this.dh.offset = Math.sin(g.g.od.vn(g.Wb.mA)), this.M && (this.dh.offset *= -1), c.sort(this.dh));
    return c
};

function Ma(a, c) {
    return a.oi[c] ? a.oi[c].slice(0) : []
}

function z(a, c) {
    if (c) {
        a = a.zc(!0);
        c = [];
        for (var d = 0; d < a.length; d++) c.push.apply(c, p(a[d], !0))
    } else
        for (c = a.zc(!1), d = 0; d < c.length; d++) c.push.apply(c, wa(c[d], !1));
    return c.filter(function(e) {
        return !e.nd()
    })
}
b.clear = function() {
    this.ax = !0;
    try {
        var a = g.h.tc();
        for (a || g.h.oa(!0); this.lq.length;) this.lq[0].J(!1);
        for (; this.St.length;) this.St[this.St.length - 1].J(!1);
        a || g.h.oa(!1);
        this.Ua.clear();
        this.Jj && this.Jj.clear()
    } finally {
        this.ax = !1
    }
};
b.Mj = function(a, c) {
    this.Ua.Mj(a, c)
};
b.sf = function(a, c, d) {
    return this.Ua.sf(a, c, d)
};
b.Nw = function(a) {
    return this.Ua.Nw(a)
};
b.Jh = function(a) {
    this.Ua.Jh(a)
};
b.Id = function(a, c) {
    return this.Ua.Id(a, c)
};
b.$f = function(a) {
    return this.Ua.$f(a)
};
b.bp = function(a) {
    return this.Ua.bp(a)
};
b.Mw = function() {
    return this.Ua.Mw(this)
};
b.Nk = function() {
    return this.Ua.Nk()
};
b.zw = function() {
    return this.Ua.zw()
};
b.Qh = function() {
    return 0
};
b.Wg = function(a, c) {
    return new g.Pl(this, a, c)
};

function Na(a) {
    return isNaN(a.options.yx) ? Infinity : a.options.yx - z(a, !1).length
}

function Oa(a, c) {
    if (!Pa(a)) return !0;
    var d = 0,
        e;
    for (e in c) {
        if (c[e] > (a.options.Ws ? (void 0 !== a.options.Ws[e] ? a.options.Ws[e] : Infinity) - Ma(a, e).length : Infinity)) return !1;
        d += c[e]
    }
    return d > Na(a) ? !1 : !0
}

function Pa(a) {
    return Infinity != a.options.yx || !!a.options.Ws
}

function Qa(a, c) {
    var d = c ? a.Lp : a.Hl;
    a = c ? a.Hl : a.Lp;
    var e = d.pop();
    if (e) {
        for (var f = [e]; d.length && e.group && e.group == d[d.length - 1].group;) f.push(d.pop());
        for (d = 0; e = f[d]; d++) a.push(e);
        f = g.h.filter(f, c);
        g.h.ab = !1;
        try {
            for (d = 0; e = f[d]; d++) e.run(c)
        } finally {
            g.h.ab = !0
        }
    }
}

function C(a, c) {
    a.ie.push(c)
}

function Ra(a, c) {
    g.g.uo(a.ie, c)
}
b.Fd = function(a) {
    return this.rv[a] || null
};
b.Jy = function(a) {
    this.Ua = a
};
g.Wb.po = Object.create(null);
g.Wb.Vo = function(a) {
    return g.Wb.po[a] || null
};
g.Wb.getAll = function() {
    var a = [],
        c;
    for (c in g.Wb.po) a.push(g.Wb.po[c]);
    return a
};
g.xa = function(a, c, d, e, f, h) {
    this.s = a;
    this.Gh = c;
    this.YK = d;
    this.Tx = this.Sx = this.Bx = this.yy = null;
    this.uf = !1;
    d = g.xa.lE;
    this.s.M && (d = -d);
    this.zH = g.g.od.vn(d);
    a.gg.appendChild(this.Oe(c, !(!f || !h)));
    this.pc = e;
    this.Dt && Sa(this);
    f && h || (a = this.Gh.getBBox(), f = a.width + 2 * g.xa.xd, h = a.height + 2 * g.xa.xd);
    this.Vp(f, h);
    Sa(this);
    Ta(this);
    this.Dt = !0
};
g.xa.xd = 6;
g.xa.mE = 5;
g.xa.lE = 20;
g.xa.jz = 4;
g.xa.iE = 8;
g.xa.rd = null;
g.xa.Ye = null;
g.xa.Yy = function() {
    g.xa.rd && (g.N.Pa(g.xa.rd), g.xa.rd = null);
    g.xa.Ye && (g.N.Pa(g.xa.Ye), g.xa.Ye = null)
};
g.xa.FH = function() {
    g.Touch.Dk();
    g.xa.Yy()
};
b = g.xa.prototype;
b.Dt = !1;
b.pc = null;
b.ah = 0;
b.Lj = 0;
b.wb = 0;
b.Tc = 0;
b.ov = !0;
b.Oe = function(a, c) {
    this.qf = g.g.o.K(g.g.D.oc, {}, null);
    var d = {
        filter: "url(#" + this.s.Rb.V().rs + ")"
    };
    g.g.userAgent.LF && (d = {});
    d = g.g.o.K(g.g.D.oc, d, this.qf);
    this.RA = g.g.o.K(g.g.D.re, {}, d);
    this.Mr = g.g.o.K(g.g.D.Hb, {
        "class": "blocklyDraggable",
        x: 0,
        y: 0,
        rx: g.xa.xd,
        ry: g.xa.xd
    }, d);
    c ? (this.ei = g.g.o.K(g.g.D.oc, {
        "class": this.s.M ? "blocklyResizeSW" : "blocklyResizeSE"
    }, this.qf), c = 2 * g.xa.xd, g.g.o.K(g.g.D.sG, {
        points: "0,x x,x x,0".replace(/x/g, c.toString())
    }, this.ei), g.g.o.K(g.g.D.Rn, {
        "class": "blocklyResizeLine",
        x1: c /
            3,
        y1: c - 1,
        x2: c - 1,
        y2: c / 3
    }, this.ei), g.g.o.K(g.g.D.Rn, {
        "class": "blocklyResizeLine",
        x1: 2 * c / 3,
        y1: c - 1,
        x2: c - 1,
        y2: 2 * c / 3
    }, this.ei)) : this.ei = null;
    this.s.options.readOnly || (this.Sx = g.N.ta(this.Mr, "mousedown", this, this.EH), this.ei && (this.Tx = g.N.ta(this.ei, "mousedown", this, this.NK)));
    this.qf.appendChild(a);
    return this.qf
};
b.Na = function() {
    return this.qf
};

function Ua(a, c) {
    a.qf.dataset && (a.qf.dataset.blockId = c)
}
b.EH = function(a) {
    var c = this.s.Mh(a);
    if (c) {
        if (c.Rk) throw Error("Tried to call gesture.handleBubbleStart, but the gesture had already been started.");
        c.af || (c.af = this);
        c.Bf = a
    }
};
b.Zp = function() {};
b.Af = function() {
    return !1
};
b.Dy = function() {};
b.NK = function(a) {
    Va(this);
    g.xa.Yy();
    g.g.bl(a) || (this.s.bq(a, new g.g.ba(this.s.M ? -this.wb : this.wb, this.Tc)), g.xa.rd = g.N.ta(document, "mouseup", this, g.xa.FH), g.xa.Ye = g.N.ta(document, "mousemove", this, this.OK), g.Uc());
    a.stopPropagation()
};
b.OK = function(a) {
    this.ov = !1;
    var c = this.s;
    a = g.g.zp(a, t(c), sa(c));
    a.x /= c.scale;
    a.y /= c.scale;
    c = g.g.ba.sum(c.CB, a);
    this.Vp(this.s.M ? -c.x : c.x, c.y);
    this.s.M && Sa(this)
};

function Wa(a, c) {
    a.Bx = c
}

function Va(a) {
    var c = a.qf.parentNode;
    return c.lastChild !== a.qf ? (c.appendChild(a.qf), !0) : !1
}

function Xa(a, c, d) {
    var e = a.s.M ? a.pc.x - c.x - a.wb : c.x + a.pc.x;
    c = c.y + a.pc.y;
    return Math.max(0, Math.min(1, (Math.min(e + a.wb, d.left + d.width) - Math.max(e, d.left)) * (Math.min(c + a.Tc, d.top + d.height) - Math.max(c, d.top)) / (a.wb * a.Tc)))
}

function Sa(a) {
    var c = a.pc.x;
    c = a.s.M ? c - (a.ah + a.wb) : c + a.ah;
    a.moveTo(c, a.Lj + a.pc.y)
}
b.moveTo = function(a, c) {
    this.qf.setAttribute("transform", "translate(" + a + "," + c + ")")
};
b.Qj = function(a) {
    !a && this.Bx && this.Bx()
};
b.Bw = function() {
    return new g.g.ad(this.wb, this.Tc)
};
b.Vp = function(a, c) {
    var d = 2 * g.xa.xd;
    a = Math.max(a, d + 45);
    c = Math.max(c, d + 20);
    this.wb = a;
    this.Tc = c;
    this.Mr.setAttribute("width", a);
    this.Mr.setAttribute("height", c);
    this.ei && (this.s.M ? this.ei.setAttribute("transform", "translate(" + 2 * g.xa.xd + "," + (c - d) + ") scale(-1 1)") : this.ei.setAttribute("transform", "translate(" + (a - d) + "," + (c - d) + ")"));
    if (this.ov) {
        a = Ya(this.s.ke, !0);
        c = -this.wb / 4;
        if (!(this.wb > a.width)) {
            if (this.s.M) {
                d = this.pc.x - c;
                var e = d - this.wb;
                var f = a.left + a.width,
                    h = a.left + g.bb.sd / this.s.scale
            } else e = c + this.pc.x,
                d = e + this.wb, h = a.left, f = a.left + a.width - g.bb.sd / this.s.scale;
            this.s.M ? e < h ? c = -(h - this.pc.x + this.wb) : d > f && (c = -(f - this.pc.x)) : e < h ? c = h - this.pc.x : d > f && (c = f - this.pc.x - this.wb)
        }
        e = c;
        c = -this.Tc / 4;
        if (!(this.Tc > a.height)) {
            d = this.pc.y + c;
            f = d + this.Tc;
            h = a.top;
            var k = a.top + a.height - g.bb.sd / this.s.scale,
                l = this.pc.y;
            d < h ? c = h - l : f > k && (c = k - l - this.Tc)
        }
        h = c;
        f = this.YK.getBBox();
        c = {
            x: e,
            y: -this.Tc - this.s.Rb.V().Tn
        };
        d = {
            x: -this.wb - 30,
            y: h
        };
        h = {
            x: f.width,
            y: h
        };
        k = {
            x: e,
            y: f.height
        };
        e = f.width < f.height ? h : k;
        f = f.width < f.height ? k : h;
        h = Xa(this,
            c, a);
        k = Xa(this, d, a);
        l = Xa(this, e, a);
        a = Math.max(h, k, l, Xa(this, f, a));
        h == a ? (this.ah = c.x, this.Lj = c.y) : k == a ? (this.ah = d.x, this.Lj = d.y) : l == a ? (this.ah = e.x, this.Lj = e.y) : (this.ah = f.x, this.Lj = f.y)
    }
    Sa(this);
    Ta(this);
    this.yy && this.yy()
};

function Ta(a) {
    var c = [],
        d = a.wb / 2,
        e = a.Tc / 2,
        f = -a.ah,
        h = -a.Lj;
    if (d == f && e == h) c.push("M " + d + "," + e);
    else {
        h -= e;
        f -= d;
        a.s.M && (f *= -1);
        var k = Math.sqrt(h * h + f * f),
            l = Math.acos(f / k);
        0 > h && (l = 2 * Math.PI - l);
        var m = l + Math.PI / 2;
        m > 2 * Math.PI && (m -= 2 * Math.PI);
        var n = Math.sin(m),
            q = Math.cos(m),
            v = a.Bw();
        m = (v.width + v.height) / g.xa.mE;
        m = Math.min(m, v.width, v.height) / 4;
        v = 1 - g.xa.iE / k;
        f = d + v * f;
        h = e + v * h;
        v = d + m * q;
        var A = e + m * n;
        d -= m * q;
        e -= m * n;
        n = l + a.zH;
        n > 2 * Math.PI && (n -= 2 * Math.PI);
        l = Math.sin(n) * k / g.xa.jz;
        k = Math.cos(n) * k / g.xa.jz;
        c.push("M" + v + "," +
            A);
        c.push("C" + (v + k) + "," + (A + l) + " " + f + "," + h + " " + f + "," + h);
        c.push("C" + f + "," + h + " " + (d + k) + "," + (e + l) + " " + d + "," + e)
    }
    c.push("z");
    a.RA.setAttribute("d", c.join(" "))
}
b.td = function(a) {
    this.Mr.setAttribute("fill", a);
    this.RA.setAttribute("fill", a)
};
b.J = function() {
    this.Sx && g.N.Pa(this.Sx);
    this.Tx && g.N.Pa(this.Tx);
    g.xa.Yy();
    g.g.o.removeNode(this.qf);
    this.uf = !0
};
b.Cx = function(a, c) {
    a ? a.Gl(c.x, c.y) : this.moveTo(c.x, c.y);
    this.ah = this.s.M ? this.pc.x - c.x - this.wb : c.x - this.pc.x;
    this.Lj = c.y - this.pc.y;
    Ta(this)
};
b.kb = function() {
    return new g.g.ba(this.s.M ? -this.ah + this.pc.x - this.wb : this.pc.x + this.ah, this.pc.y + this.Lj)
};
g.xa.ze = function(a) {
    var c = g.g.o.K(g.g.D.io, {
        "class": "blocklyText blocklyBubbleText blocklyNoPointerEvents",
        y: g.xa.xd
    }, null);
    a = a.split("\n");
    for (var d = 0; d < a.length; d++) {
        var e = g.g.o.K(g.g.D.wA, {
                dy: "1em",
                x: g.xa.xd
            }, c),
            f = document.createTextNode(a[d]);
        e.appendChild(f)
    }
    return c
};
g.xa.pB = function(a, c, d) {
    d = new g.xa(c.u, a, c.sb.Gb, d, null, null);
    Ua(d, c.id);
    if (c.M) {
        c = a.getBBox().width;
        for (var e = 0, f; f = a.childNodes[e]; e++) f.setAttribute("text-anchor", "end"), f.setAttribute("x", c + g.xa.xd)
    }
    return d
};
g.Oc = {};
g.Oc.Yw = !1;
g.Oc.register = function(a) {
    if (g.Oc.Yw) throw Error("CSS already injected");
    Array.prototype.push.apply(g.Oc.cu, a);
    a.length = 0
};
g.Oc.sj = function(a, c) {
    if (!g.Oc.Yw) {
        g.Oc.Yw = !0;
        var d = g.Oc.cu.join("\n");
        g.Oc.cu.length = 0;
        a && (a = c.replace(/[\\/]$/, ""), d = d.replace(/<<<PATH>>>/g, a), a = document.createElement("style"), a.id = "blockly-common-style", d = document.createTextNode(d), a.appendChild(d), document.head.insertBefore(a, document.head.firstChild))
    }
};
g.Oc.cu = [".blocklySvg {", "background-color: #fff;", "outline: none;", "overflow: hidden;", "position: absolute;", "display: block;", "}", ".blocklyWidgetDiv {", "display: none;", "position: absolute;", "z-index: 99999;", "}", ".injectionDiv {", "height: 100%;", "position: relative;", "overflow: hidden;", "touch-action: none;", "}", ".blocklyNonSelectable {", "user-select: none;", "-ms-user-select: none;", "-webkit-user-select: none;", "}", ".blocklyWsDragSurface {", "display: none;", "position: absolute;", "top: 0;", "left: 0;",
    "}", ".blocklyWsDragSurface.blocklyOverflowVisible {", "overflow: visible;", "}", ".blocklyBlockDragSurface {", "display: none;", "position: absolute;", "top: 0;", "left: 0;", "right: 0;", "bottom: 0;", "overflow: visible !important;", "z-index: 50;", "}", ".blocklyBlockCanvas.blocklyCanvasTransitioning,", ".blocklyBubbleCanvas.blocklyCanvasTransitioning {", "transition: transform .5s;", "}", ".blocklyTooltipDiv {", "background-color: #ffffc7;", "border: 1px solid #ddc;", "box-shadow: 4px 4px 20px 1px rgba(0,0,0,.15);",
    "color: #000;", "display: none;", "font: 9pt sans-serif;", "opacity: .9;", "padding: 2px;", "position: absolute;", "z-index: 100000;", "}", ".blocklyDropDownDiv {", "position: absolute;", "left: 0;", "top: 0;", "z-index: 1000;", "display: none;", "border: 1px solid;", "border-color: #dadce0;", "background-color: #fff;", "border-radius: 2px;", "padding: 4px;", "box-shadow: 0 0 3px 1px rgba(0,0,0,.3);", "}", ".blocklyDropDownDiv.blocklyFocused {", "box-shadow: 0 0 6px 1px rgba(0,0,0,.3);", "}", ".blocklyDropDownContent {",
    "max-height: 300px;", "overflow: auto;", "overflow-x: hidden;", "position: relative;", "}", ".blocklyDropDownArrow {", "position: absolute;", "left: 0;", "top: 0;", "width: 16px;", "height: 16px;", "z-index: -1;", "background-color: inherit;", "border-color: inherit;", "}", ".blocklyDropDownButton {", "display: inline-block;", "float: left;", "padding: 0;", "margin: 4px;", "border-radius: 4px;", "outline: none;", "border: 1px solid;", "transition: box-shadow .1s;", "cursor: pointer;", "}", ".blocklyArrowTop {", "border-top: 1px solid;",
    "border-left: 1px solid;", "border-top-left-radius: 4px;", "border-color: inherit;", "}", ".blocklyArrowBottom {", "border-bottom: 1px solid;", "border-right: 1px solid;", "border-bottom-right-radius: 4px;", "border-color: inherit;", "}", ".blocklyResizeSE {", "cursor: se-resize;", "fill: #aaa;", "}", ".blocklyResizeSW {", "cursor: sw-resize;", "fill: #aaa;", "}", ".blocklyResizeLine {", "stroke: #515A5A;", "stroke-width: 1;", "}", ".blocklyHighlightedConnectionPath {", "fill: none;", "stroke: #fc3;", "stroke-width: 4px;",
    "}", ".blocklyPathLight {", "fill: none;", "stroke-linecap: round;", "stroke-width: 1;", "}", ".blocklySelected>.blocklyPathLight {", "display: none;", "}", ".blocklyDraggable {", 'cursor: url("<<<PATH>>>/handopen.cur"), auto;', "cursor: grab;", "cursor: -webkit-grab;", "}", ".blocklyDragging {", 'cursor: url("<<<PATH>>>/handclosed.cur"), auto;', "cursor: grabbing;", "cursor: -webkit-grabbing;", "}", ".blocklyDraggable:active {", 'cursor: url("<<<PATH>>>/handclosed.cur"), auto;', "cursor: grabbing;", "cursor: -webkit-grabbing;",
    "}", ".blocklyBlockDragSurface .blocklyDraggable {", 'cursor: url("<<<PATH>>>/handclosed.cur"), auto;', "cursor: grabbing;", "cursor: -webkit-grabbing;", "}", ".blocklyDragging.blocklyDraggingDelete {", 'cursor: url("<<<PATH>>>/handdelete.cur"), auto;', "}", ".blocklyDragging>.blocklyPath,", ".blocklyDragging>.blocklyPathLight {", "fill-opacity: .8;", "stroke-opacity: .8;", "}", ".blocklyDragging>.blocklyPathDark {", "display: none;", "}", ".blocklyDisabled>.blocklyPath {", "fill-opacity: .5;", "stroke-opacity: .5;",
    "}", ".blocklyDisabled>.blocklyPathLight,", ".blocklyDisabled>.blocklyPathDark {", "display: none;", "}", ".blocklyInsertionMarker>.blocklyPath,", ".blocklyInsertionMarker>.blocklyPathLight,", ".blocklyInsertionMarker>.blocklyPathDark {", "fill-opacity: .2;", "stroke: none;", "}", ".blocklyMultilineText {", "font-family: monospace;", "}", ".blocklyNonEditableText>text {", "pointer-events: none;", "}", ".blocklyFlyout {", "position: absolute;", "z-index: 20;", "}", ".blocklyText text {", "cursor: default;", "}", ".blocklySvg text,",
    ".blocklyBlockDragSurface text {", "user-select: none;", "-ms-user-select: none;", "-webkit-user-select: none;", "cursor: inherit;", "}", ".blocklyHidden {", "display: none;", "}", ".blocklyFieldDropdown:not(.blocklyHidden) {", "display: block;", "}", ".blocklyIconGroup {", "cursor: default;", "}", ".blocklyIconGroup:not(:hover),", ".blocklyIconGroupReadonly {", "opacity: .6;", "}", ".blocklyIconShape {", "fill: #00f;", "stroke: #fff;", "stroke-width: 1px;", "}", ".blocklyIconSymbol {", "fill: #fff;", "}", ".blocklyMinimalBody {",
    "margin: 0;", "padding: 0;", "}", ".blocklyHtmlInput {", "border: none;", "border-radius: 4px;", "height: 100%;", "margin: 0;", "outline: none;", "padding: 0;", "width: 100%;", "text-align: center;", "display: block;", "box-sizing: border-box;", "}", ".blocklyHtmlInput::-ms-clear {", "display: none;", "}", ".blocklyMainBackground {", "stroke-width: 1;", "stroke: #c6c6c6;", "}", ".blocklyMutatorBackground {", "fill: #fff;", "stroke: #ddd;", "stroke-width: 1;", "}", ".blocklyFlyoutBackground {", "fill: #ddd;", "fill-opacity: .8;",
    "}", ".blocklyMainWorkspaceScrollbar {", "z-index: 20;", "}", ".blocklyFlyoutScrollbar {", "z-index: 30;", "}", ".blocklyScrollbarHorizontal,", ".blocklyScrollbarVertical {", "position: absolute;", "outline: none;", "}", ".blocklyScrollbarBackground {", "opacity: 0;", "}", ".blocklyScrollbarHandle {", "fill: #ccc;", "}", ".blocklyScrollbarBackground:hover+.blocklyScrollbarHandle,", ".blocklyScrollbarHandle:hover {", "fill: #bbb;", "}", ".blocklyFlyout .blocklyScrollbarHandle {", "fill: #bbb;", "}", ".blocklyFlyout .blocklyScrollbarBackground:hover+.blocklyScrollbarHandle,",
    ".blocklyFlyout .blocklyScrollbarHandle:hover {", "fill: #aaa;", "}", ".blocklyInvalidInput {", "background: #faa;", "}", ".blocklyVerticalMarker {", "stroke-width: 3px;", "fill: rgba(255,255,255,.5);", "pointer-events: none;", "}", ".blocklyComputeCanvas {", "position: absolute;", "width: 0;", "height: 0;", "}", ".blocklyNoPointerEvents {", "pointer-events: none;", "}", ".blocklyContextMenu {", "border-radius: 4px;", "max-height: 100%;", "}", ".blocklyDropdownMenu {", "border-radius: 2px;", "padding: 0 !important;", "}",
    ".blocklyDropdownMenu .blocklyMenuItem {", "padding-left: 28px;", "}", ".blocklyDropdownMenu .blocklyMenuItemRtl {", "padding-left: 5px;", "padding-right: 28px;", "}", ".blocklyWidgetDiv .blocklyMenu {", "background: #fff;", "border: 1px solid transparent;", "box-shadow: 0 0 3px 1px rgba(0,0,0,.3);", "font: normal 13px Arial, sans-serif;", "margin: 0;", "outline: none;", "padding: 4px 0;", "position: absolute;", "overflow-y: auto;", "overflow-x: hidden;", "max-height: 100%;", "z-index: 20000;", "}", ".blocklyWidgetDiv .blocklyMenu.blocklyFocused {",
    "box-shadow: 0 0 6px 1px rgba(0,0,0,.3);", "}", ".blocklyDropDownDiv .blocklyMenu {", "background: inherit;", "border: inherit;", 'font: normal 13px "Helvetica Neue", Helvetica, sans-serif;', "outline: none;", "position: relative;", "z-index: 20000;", "}", ".blocklyMenuItem {", "border: none;", "color: #000;", "cursor: pointer;", "list-style: none;", "margin: 0;", "min-width: 7em;", "padding: 6px 15px;", "white-space: nowrap;", "}", ".blocklyMenuItemDisabled {", "color: #ccc;", "cursor: inherit;", "}", ".blocklyMenuItemHighlight {",
    "background-color: rgba(0,0,0,.1);", "}", ".blocklyMenuItemCheckbox {", "height: 16px;", "position: absolute;", "width: 16px;", "}", ".blocklyMenuItemSelected .blocklyMenuItemCheckbox {", "background: url(<<<PATH>>>/sprites.png) no-repeat -48px -16px;", "float: left;", "margin-left: -24px;", "position: static;", "}", ".blocklyMenuItemRtl .blocklyMenuItemCheckbox {", "float: right;", "margin-right: -24px;", "}"
];
g.h.Ie = function(a) {
    g.h.Ie.v.constructor.call(this);
    this.Ve = "undefined" == typeof a;
    this.Zc = a ? a : "";
    this.ab = !1
};
g.g.object.X(g.h.Ie, g.h.Abstract);
g.h.Ie.prototype.ex = !0;
g.h.Si = function(a, c, d, e) {
    g.h.Si.v.constructor.call(this, a ? a.u.id : void 0);
    this.qb = a ? a.id : null;
    this.element = "undefined" == typeof c ? "" : c;
    this.oldValue = "undefined" == typeof d ? "" : d;
    this.newValue = "undefined" == typeof e ? "" : e
};
g.g.object.X(g.h.Si, g.h.Ie);
g.h.Si.prototype.type = g.h.Zu;
g.h.Si.prototype.Ba = function() {
    var a = g.h.Si.v.Ba.call(this);
    a.element = this.element;
    void 0 !== this.newValue && (a.newValue = this.newValue);
    this.qb && (a.blockId = this.qb);
    return a
};
g.h.Si.prototype.ma = function(a) {
    g.h.Si.v.ma.call(this, a);
    this.element = a.element;
    this.newValue = a.newValue;
    this.qb = a.blockId
};
g.B.register(g.B.S.hc, g.h.Zu, g.h.Si);
g.h.xi = function(a, c, d) {
    g.h.xi.v.constructor.call(this, a ? a.u.id : void 0);
    this.qb = a ? a.id : null;
    this.Wm = c;
    this.wv = d
};
g.g.object.X(g.h.xi, g.h.Ie);
g.h.xi.prototype.type = g.h.Zj;
g.h.xi.prototype.Ba = function() {
    var a = g.h.xi.v.Ba.call(this);
    a.isOpen = this.Wm;
    a.bubbleType = this.wv;
    a.blockId = this.qb;
    return a
};
g.h.xi.prototype.ma = function(a) {
    g.h.xi.v.ma.call(this, a);
    this.Wm = a.isOpen;
    this.wv = a.bubbleType;
    this.qb = a.blockId
};
g.B.register(g.B.S.hc, g.h.Zj, g.h.xi);
g.pe = function(a) {
    this.U = a;
    this.ee = null
};
b = g.pe.prototype;
b.cB = !0;
b.xr = 17;
b.kc = null;
b.pj = null;

function Za(a) {
    a.ee || (a.ee = g.g.o.K(g.g.D.oc, {
        "class": "blocklyIconGroup"
    }, null), a.U.Yb && g.g.o.Ga(a.ee, "blocklyIconGroupReadonly"), a.jw(a.ee), a.U.Na().appendChild(a.ee), g.N.ta(a.ee, "mouseup", a, a.Uw), a.pi())
}
b.J = function() {
    g.g.o.removeNode(this.ee);
    this.ee = null;
    this.ub(!1);
    this.U = null
};
b.pi = function() {};
b.isVisible = function() {
    return !!this.kc
};
b.Uw = function(a) {
    this.U.u.Ac() || this.U.Yb || g.g.bl(a) || this.ub(!this.isVisible())
};
b.jc = function() {
    this.isVisible() && this.kc.td(this.U.style.Yi)
};

function $a(a) {
    var c = a.U.kb(),
        d = g.g.xf(a.ee);
    c = new g.g.ba(c.x + d.x + a.xr / 2, c.y + d.y + a.xr / 2);
    g.g.ba.wf(a.pj, c) || (a.pj = c, a.isVisible() && (a = a.kc, a.pc = c, a.Dt && Sa(a)))
};
g.oo = function(a) {
    g.oo.v.constructor.call(this, a);
    Za(this);
    this.ki = Object.create(null)
};
g.g.object.X(g.oo, g.pe);
b = g.oo.prototype;
b.cB = !1;
b.jw = function(a) {
    g.g.o.K(g.g.D.re, {
        "class": "blocklyIconShape",
        d: "M2,15Q-1,15 0.5,12L6.5,1.7Q8,-1 9.5,1.7L15.5,12Q17,15 14,15z"
    }, a);
    g.g.o.K(g.g.D.re, {
        "class": "blocklyIconSymbol",
        d: "m7,4.8v3.16l0.27,2.27h1.46l0.27,-2.27v-3.16z"
    }, a);
    g.g.o.K(g.g.D.Hb, {
        "class": "blocklyIconSymbol",
        x: "7",
        y: "11",
        height: "2",
        width: "2"
    }, a)
};
b.ub = function(a) {
    a != this.isVisible() && (g.h.Ia(new(g.h.get(g.h.Zj))(this.U, a, "warning")), a ? this.ds() : this.os())
};
b.ds = function() {
    this.ql = g.xa.ze(this.Hd());
    this.kc = g.xa.pB(this.ql, this.U, this.pj);
    this.jc()
};
b.os = function() {
    this.kc.J();
    this.ql = this.kc = null
};

function ab(a, c, d) {
    a.ki[d] != c && (c ? a.ki[d] = c : delete a.ki[d], a.isVisible() && (a.ub(!1), a.ub(!0)))
}
b.Hd = function() {
    var a = [],
        c;
    for (c in this.ki) a.push(this.ki[c]);
    return a.join("\n")
};
b.J = function() {
    this.U.cf = null;
    g.pe.prototype.J.call(this)
};
g.Comment = function(a) {
    g.Comment.v.constructor.call(this, a);
    this.pd = a.Le;
    this.pd.text = this.pd.text || "";
    this.Bv = "";
    this.jt = this.et = this.tt = this.rd = null;
    Za(this)
};
g.g.object.X(g.Comment, g.pe);
b = g.Comment.prototype;
b.jw = function(a) {
    g.g.o.K(g.g.D.Nq, {
        "class": "blocklyIconShape",
        r: "8",
        cx: "8",
        cy: "8"
    }, a);
    g.g.o.K(g.g.D.re, {
        "class": "blocklyIconSymbol",
        d: "m6.8,10h2c0.003,-0.617 0.271,-0.962 0.633,-1.266 2.875,-2.4050.607,-5.534 -3.765,-3.874v1.7c3.12,-1.657 3.698,0.118 2.336,1.25-1.201,0.998 -1.201,1.528 -1.204,2.19z"
    }, a);
    g.g.o.K(g.g.D.Hb, {
        "class": "blocklyIconSymbol",
        x: "6.8",
        y: "10.78",
        height: "2",
        width: "2"
    }, a)
};
b.Ov = function() {
    this.To = g.g.o.K(g.g.D.pF, {
        x: g.xa.xd,
        y: g.xa.xd
    }, null);
    var a = document.createElementNS(g.g.o.Wl, "body");
    a.setAttribute("xmlns", g.g.o.Wl);
    a.className = "blocklyMinimalBody";
    var c = this.Fl = document.createElementNS(g.g.o.Wl, "textarea");
    c.className = "blocklyCommentTextarea";
    c.setAttribute("dir", this.U.M ? "RTL" : "LTR");
    c.value = this.pd.text;
    bb(this);
    a.appendChild(c);
    this.To.appendChild(a);
    this.rd = g.N.ta(c, "mouseup", this, this.cL, !0, !0);
    this.tt = g.N.ta(c, "wheel", this, function(d) {
        d.stopPropagation()
    });
    this.et = g.N.ta(c, "change", this, function() {
        this.Bv != this.pd.text && g.h.Ia(new(g.h.get(g.h.lg))(this.U, "comment", null, this.Bv, this.pd.text))
    });
    this.jt = g.N.ta(c, "input", this, function() {
        this.pd.text = c.value
    });
    setTimeout(c.focus.bind(c), 0);
    return this.To
};
b.pi = function() {
    g.Comment.v.pi.call(this);
    this.isVisible() && (this.os(), this.ds())
};
b.XJ = function() {
    this.isVisible() && (this.pd.size = this.kc.Bw(), bb(this))
};

function bb(a) {
    var c = a.pd.size,
        d = 2 * g.xa.xd,
        e = c.width - d;
    c = c.height - d;
    a.To.setAttribute("width", e);
    a.To.setAttribute("height", c);
    a.Fl.style.width = e - 4 + "px";
    a.Fl.style.height = c - 4 + "px"
}
b.ub = function(a) {
    a != this.isVisible() && (g.h.Ia(new(g.h.get(g.h.Zj))(this.U, a, "comment")), (this.pd.ky = a) ? this.ds() : this.os())
};
b.ds = function() {
    if (!this.U.ge() || g.g.userAgent.ff) this.ql = g.xa.ze(this.U.Le.text), this.kc = g.xa.pB(this.ql, this.U, this.pj);
    else {
        this.kc = new g.xa(this.U.u, this.Ov(), this.U.sb.Gb, this.pj, this.pd.size.width, this.pd.size.height);
        Ua(this.kc, this.U.id);
        var a = this.XJ.bind(this);
        this.kc.yy = a
    }
    this.jc()
};
b.os = function() {
    this.rd && (g.N.Pa(this.rd), this.rd = null);
    this.tt && (g.N.Pa(this.tt), this.tt = null);
    this.et && (g.N.Pa(this.et), this.et = null);
    this.jt && (g.N.Pa(this.jt), this.jt = null);
    this.kc.J();
    this.ql = this.To = this.Fl = this.kc = null
};
b.cL = function() {
    Va(this.kc) && this.Fl.focus();
    this.Bv = this.pd.text
};
b.Bw = function() {
    return this.pd.size
};
b.Vp = function(a, c) {
    this.kc ? this.kc.Vp(a, c) : (this.pd.size.width = a, this.pd.size.height = c)
};
b.J = function() {
    this.U.Zi = null;
    g.pe.prototype.J.call(this)
};
g.Oc.register(".blocklyCommentTextarea {,background-color: #fef49c;,border: 0;,outline: 0;,margin: 0;,padding: 3px;,resize: none;,display: block;,text-overflow: hidden;,}".split(","));
g.G = function() {};
g.G.vv = null;
g.G.Ef = null;
g.G.rD = null;
g.G.Gq = 16;
g.G.pz = 1;
g.G.lz = 12;
g.G.hA = 16;
g.G.Xt = .25;
g.G.jv = null;
g.G.ol = null;
g.G.eg = "";
g.G.hg = "";
g.G.eb = function() {
    if (!g.G.og) {
        var a = document.createElement("div");
        a.className = "blocklyDropDownDiv";
        (g.ut || document.body).appendChild(a);
        g.G.og = a;
        var c = document.createElement("div");
        c.className = "blocklyDropDownContent";
        a.appendChild(c);
        g.G.Gh = c;
        c = document.createElement("div");
        c.className = "blocklyDropDownArrow";
        a.appendChild(c);
        g.G.nf = c;
        g.G.og.style.opacity = 0;
        g.G.og.style.transition = "transform " + g.G.Xt + "s, opacity " + g.G.Xt + "s";
        a.addEventListener("focusin", function() {
            g.g.o.Ga(a, "blocklyFocused")
        });
        a.addEventListener("focusout",
            function() {
                g.g.o.Zb(a, "blocklyFocused")
            })
    }
};
g.G.TK = function(a) {
    g.G.vv = a
};
g.G.OB = function() {
    return g.G.Gh
};
g.G.QH = function() {
    g.G.Gh.textContent = "";
    g.G.Gh.style.width = ""
};
g.G.td = function(a, c) {
    g.G.og.style.backgroundColor = a;
    g.G.og.style.borderColor = c
};
g.G.wP = function(a, c, d, e) {
    return g.G.FD(g.G.XB(c), a, d, e)
};
g.G.ED = function(a, c) {
    g.G.rD = !0;
    g.G.FD(g.G.YB(a), a, c, void 0)
};
g.G.XB = function(a) {
    var c = a.Na(),
        d = c.getBBox(),
        e = a.u.scale;
    a = d.height * e;
    d = d.width * e;
    c = g.g.style.Pk(c);
    return new g.g.Rect(c.y, c.y + a, c.x, c.x + d)
};
g.G.YB = function(a) {
    a = cb(a);
    return new g.g.Rect(a.top, a.bottom, a.left, a.right)
};
g.G.FD = function(a, c, d, e) {
    var f = a.left + (a.right - a.left) / 2,
        h = a.bottom;
    a = a.top;
    e && (a += e);
    e = c.ea();
    for (var k = e.u; k.options.uc;) k = k.options.uc;
    g.G.TK(t(k).parentNode);
    return g.G.show(c, e.M, f, h, f, a, d)
};
g.G.show = function(a, c, d, e, f, h, k) {
    g.G.Ef = a;
    g.G.ol = k || null;
    a = g.G.og;
    a.style.direction = c ? "rtl" : "ltr";
    c = g.hj();
    g.G.eg = c.Rb.Xf();
    g.G.hg = c.Og().Xf();
    g.g.o.Ga(a, g.G.eg);
    g.g.o.Ga(a, g.G.hg);
    return g.G.Gp(d, e, f, h)
};
g.G.KI = function() {
    var a = g.g.style.Pk(g.G.vv),
        c = g.g.style.Nh(g.G.vv);
    return {
        left: a.x,
        right: a.x + c.width,
        top: a.y,
        bottom: a.y + c.height,
        width: c.width,
        height: c.height
    }
};
g.G.TI = function(a, c, d, e) {
    var f = g.G.KI(),
        h = g.g.style.Nh(g.G.og);
    return c + h.height < f.bottom ? g.G.WB(a, c, f, h) : e - h.height > f.top ? g.G.VB(d, e, f, h) : c + h.height < document.documentElement.clientHeight ? g.G.WB(a, c, f, h) : e - h.height > document.documentElement.clientTop ? g.G.VB(d, e, f, h) : g.G.UI(a, f, h)
};
g.G.WB = function(a, c, d, e) {
    a = g.G.Kw(a, d.left, d.right, e.width);
    return {
        Ww: a.Em,
        Xw: c,
        uw: a.Em,
        vw: c + g.G.hA,
        pm: a.pm,
        nv: -(g.G.Gq / 2 + g.G.pz),
        Kr: !0,
        mv: !0
    }
};
g.G.VB = function(a, c, d, e) {
    a = g.G.Kw(a, d.left, d.right, e.width);
    return {
        Ww: a.Em,
        Xw: c - e.height,
        uw: a.Em,
        vw: c - e.height - g.G.hA,
        pm: a.pm,
        nv: e.height - 2 * g.G.pz - g.G.Gq / 2,
        Kr: !1,
        mv: !0
    }
};
g.G.UI = function(a, c, d) {
    a = g.G.Kw(a, c.left, c.right, d.width);
    return {
        Ww: a.Em,
        Xw: 0,
        uw: a.Em,
        vw: 0,
        Kr: null,
        pm: null,
        nv: null,
        mv: !1
    }
};
g.G.Kw = function(a, c, d, e) {
    var f = a;
    a = g.g.od.vm(c, a - e / 2, d - e);
    f -= g.G.Gq / 2;
    c = g.g.od.vm(g.G.lz, f - a, e - g.G.lz - g.G.Gq);
    return {
        pm: c,
        Em: a
    }
};
g.G.isVisible = function() {
    return !!g.G.Ef
};
g.G.Qm = function(a, c) {
    g.G.Ef === a && (c ? g.G.nj() : g.G.$a())
};
g.G.$a = function() {
    var a = g.G.og;
    a.style.transform = "translate(0, 0)";
    a.style.opacity = 0;
    g.G.jv = setTimeout(function() {
        g.G.nj()
    }, 1E3 * g.G.Xt);
    g.G.ol && (g.G.ol(), g.G.ol = null)
};
g.G.nj = function() {
    if (g.G.isVisible()) {
        g.G.jv && clearTimeout(g.G.jv);
        var a = g.G.og;
        a.style.transform = "";
        a.style.left = "";
        a.style.top = "";
        a.style.opacity = 0;
        a.style.display = "none";
        a.style.backgroundColor = "";
        a.style.borderColor = "";
        g.G.ol && (g.G.ol(), g.G.ol = null);
        g.G.QH();
        g.G.Ef = null;
        g.G.eg && (g.g.o.Zb(a, g.G.eg), g.G.eg = "");
        g.G.hg && (g.g.o.Zb(a, g.G.hg), g.G.hg = "");
        ra(g.hj())
    }
};
g.G.Gp = function(a, c, d, e) {
    a = g.G.TI(a, c, d, e);
    a.mv ? (g.G.nf.style.display = "", g.G.nf.style.transform = "translate(" + a.pm + "px," + a.nv + "px) rotate(45deg)", g.G.nf.setAttribute("class", a.Kr ? "blocklyDropDownArrow blocklyArrowTop" : "blocklyDropDownArrow blocklyArrowBottom")) : g.G.nf.style.display = "none";
    c = Math.floor(a.Ww);
    d = Math.floor(a.Xw);
    e = Math.floor(a.uw);
    var f = Math.floor(a.vw),
        h = g.G.og;
    h.style.left = c + "px";
    h.style.top = d + "px";
    h.style.display = "block";
    h.style.opacity = 1;
    h.style.transform = "translate(" + (e - c) + "px," +
        (f - d) + "px)";
    return !!a.Kr
};
g.G.pP = function() {
    if (g.G.Ef) {
        var a = g.G.Ef,
            c = a.ea();
        a = g.G.rD ? g.G.YB(a) : g.G.XB(c);
        c = a.left + (a.right - a.left) / 2;
        g.G.Gp(c, a.bottom, c, a.top)
    } else g.G.$a()
};
g.Ib = {};
g.Ib.cw = 0;
g.Ib.ls = null;
g.Ib.qI = function(a) {
    var c = a.u,
        d = a.Na();
    c.zg.play("delete");
    a = db(c, d);
    d = d.cloneNode(!0);
    d.oL = a.x;
    d.pL = a.y;
    d.setAttribute("transform", "translate(" + a.x + "," + a.y + ")");
    t(c).appendChild(d);
    d.PA = d.getBBox();
    g.Ib.AB(d, c.M, new Date, c.scale)
};
g.Ib.AB = function(a, c, d, e) {
    var f = (new Date - d) / 150;
    1 < f ? g.g.o.removeNode(a) : (a.setAttribute("transform", "translate(" + (a.oL + (c ? -1 : 1) * a.PA.width * e / 2 * f) + "," + (a.pL + a.PA.height * e * f) + ") scale(" + (1 - f) * e + ")"), setTimeout(g.Ib.AB, 10, a, c, d, e))
};
g.Ib.YH = function(a) {
    var c = a.u,
        d = c.scale;
    c.zg.play("click");
    if (!(1 > d)) {
        var e = db(c, a.Na());
        a.R ? (e.x += (a.M ? 3 : -3) * d, e.y += 13 * d) : a.qa && (e.x += (a.M ? -23 : 23) * d, e.y += 3 * d);
        a = g.g.o.K(g.g.D.Nq, {
            cx: e.x,
            cy: e.y,
            r: 0,
            fill: "none",
            stroke: "#888",
            "stroke-width": 10
        }, t(c));
        g.Ib.jB(a, new Date, d)
    }
};
g.Ib.jB = function(a, c, d) {
    var e = (new Date - c) / 150;
    1 < e ? g.g.o.removeNode(a) : (a.setAttribute("r", 25 * e * d), a.style.opacity = 1 - e, g.Ib.cw = setTimeout(g.Ib.jB, 10, a, c, d))
};
g.Ib.pI = function(a) {
    a.u.zg.play("disconnect");
    if (!(1 > a.u.scale)) {
        var c = D(a).height;
        c = Math.atan(10 / c) / Math.PI * 180;
        a.M || (c *= -1);
        g.Ib.zB(a.Na(), c, new Date)
    }
};
g.Ib.zB = function(a, c, d) {
    var e = (new Date - d) / 200;
    1 < e ? a.aq = "" : (a.aq = "skewX(" + Math.round(Math.sin(e * Math.PI * 3) * (1 - e) * c) + ")", g.Ib.ls = a, g.Ib.cw = setTimeout(g.Ib.zB, 10, a, c, d));
    a.setAttribute("transform", a.oq + a.aq)
};
g.Ib.dw = function() {
    if (g.Ib.ls) {
        clearTimeout(g.Ib.cw);
        var a = g.Ib.ls;
        a.aq = "";
        a.setAttribute("transform", a.oq);
        g.Ib.ls = null
    }
};
g.h.wi = function(a, c, d) {
    g.h.wi.v.constructor.call(this, a ? a.u.id : void 0);
    this.qb = a ? a.id : null;
    this.BC = c;
    this.QA = d
};
g.g.object.X(g.h.wi, g.h.Ie);
g.h.wi.prototype.type = g.h.Iq;
g.h.wi.prototype.Ba = function() {
    var a = g.h.wi.v.Ba.call(this);
    a.isStart = this.BC;
    a.blockId = this.qb;
    a.blocks = this.QA;
    return a
};
g.h.wi.prototype.ma = function(a) {
    g.h.wi.v.ma.call(this, a);
    this.BC = a.isStart;
    this.qb = a.blockId;
    this.QA = a.blocks
};
g.B.register(g.B.S.hc, g.h.Iq, g.h.wi);
g.HM = function() {};
g.Vb = function() {
    this.$i = Object.create(null);
    this.tm = Object.create(null)
};

function eb(a, c) {
    var d = c.Fk.id;
    if (a.$i[d]) throw Error('Plugin "' + d + '" with capabilities "' + a.$i[d].Bg + '" already added.');
    a.$i[d] = c;
    for (var e = [], f = 0; f < c.Bg.length; f++) {
        var h = String(c.Bg[f]).toLowerCase();
        e.push(h);
        void 0 === a.tm[h] ? a.tm[h] = [d] : a.tm[h].push(d)
    }
    a.$i[d].Bg = e
}

function fb(a, c) {
    var d = a.$i[c];
    if (d) {
        for (var e = 0; e < d.Bg.length; e++) {
            var f = String(d.Bg[e]).toLowerCase();
            a.tm[f].splice(a.tm[f].indexOf(c), 1)
        }
        delete a.$i[c]
    }
}

function gb(a, c) {
    var d = g.Vb.fc.Xq;
    d = String(d).toLowerCase();
    return -1 !== a.$i[c].Bg.indexOf(d)
}

function hb(a, c) {
    c = String(c).toLowerCase();
    c = a.tm[c];
    if (!c) return [];
    var d = [],
        e = [],
        f = a.$i;
    c.forEach(function(h) {
        e.push(f[h])
    });
    e.sort(function(h, k) {
        return h.weight - k.weight
    });
    e.forEach(function(h) {
        d.push(h.Fk)
    });
    return d
}
g.Vb.fc = function(a) {
    this.Vg = a
};
g.Vb.fc.prototype.toString = function() {
    return this.Vg
};
g.Vb.fc.Hu = new g.Vb.fc("positionable");
g.Vb.fc.Yq = new g.Vb.fc("drag_target");
g.Vb.fc.Xq = new g.Vb.fc("delete_area");
g.Vb.fc.Yt = new g.Vb.fc("autohideable");
g.Pd = function(a) {
    this.Vj = g.selected = a;
    this.s = a.u;
    this.zj = this.ix = null;
    this.Ro = ib(this, this.Vj);
    this.Jd = this.qc = null;
    this.kg = !1;
    this.Po = this.Sw = this.fl = null;
    this.Lr = jb(this)
};
g.Pd.gm = {
    ou: 0,
    FF: 1,
    lA: 2
};
g.Pd.Bz = "The insertion marker manager tried to create a marker but the result is missing %1. If you are using a mutator, make sure your domToMutation method is properly defined.";
g.Pd.prototype.J = function() {
    this.Lr.length = 0;
    g.h.disable();
    try {
        this.Ro && this.Ro.J(), this.zj && this.zj.J()
    } finally {
        g.h.enable()
    }
};
g.Pd.prototype.update = function(a, c) {
    var d = this.qc && this.Jd ? g.yE : g.Td;
    for (var e = null, f = null, h = 0; h < this.Lr.length; h++) {
        var k = this.Lr[h],
            l = k.closest(d, a);
        l.connection && (e = l.connection, f = k, d = l.yt)
    }
    d = {
        closest: e,
        local: f,
        yt: d
    };
    if ((this.kg = this.My(d, c)) || kb(this, d, a)) {
        g.h.disable();
        d.closest ? (a = this.qc != d.closest, c = this.Jd != d.local, this.qc && this.Jd && (a || c || this.kg) && lb(this)) : lb(this);
        this.Jd = this.qc = this.fl = null;
        if (!this.kg && (a = d.closest, c = d.local, a))
            if (a == this.qc || a.ea().nd()) console.log("Trying to connect to an insertion marker");
            else {
                this.qc = a;
                this.Jd = c;
                a = this.qc;
                c = this.Jd;
                d = this.Vj;
                c.type == g.pa.qe || c.type == g.pa.Ge ? ((e = !a.isConnected()) || (e = a.ra(), e = !!g.Ka.NB(d, c.type === g.pa.qe ? e.R : e.qa)), c = e ? g.Pd.gm.ou : g.Pd.gm.lA) : c = g.Pd.gm.ou;
                switch (c) {
                    case g.Pd.gm.FF:
                        this.Sw = this.qc.ea();
                        break;
                    case g.Pd.gm.ou:
                        e = this.Jd;
                        c = this.qc;
                        d = this.ix && e == this.ix ? this.zj : this.Ro;
                        e = d.Hw(e.ea(), e);
                        if (e == this.fl) throw Error("Made it to showInsertionMarker_ even though the marker isn't changing");
                        d.Ja();
                        d.ua = !0;
                        d.Na().setAttribute("visibility", "visible");
                        e && c && (e.type != g.pa.$c && e.type != g.pa.$b || d.moveBy(c.x - e.x, c.y - e.y));
                        c && e.connect(c);
                        this.fl = e;
                        break;
                    case g.Pd.gm.lA:
                        this.Po = this.qc.ra(), mb(this.Po.sb, "blocklyReplaceable", !0)
                }
                a && (d = a.H.u.Rb.V(), c = nb(d, a), a.type == g.pa.$b || a.type == g.pa.qe ? (d = d.km, c = g.g.F.moveBy(0, -d) + g.g.F.sa("v", d) + c.Ff + g.g.F.sa("v", d)) : (d = d.Xn - d.Mb, c = g.g.F.moveBy(-d, 0) + g.g.F.sa("h", d) + c.Hj + g.g.F.sa("h", d)), d = a.H.kb(), g.Ka.qC = g.g.o.K(g.g.D.re, {
                    "class": "blocklyHighlightedConnectionPath",
                    d: c,
                    transform: "translate(" + (a.x - d.x) + "," + (a.y -
                        d.y) + ")" + (a.H.M ? " scale(-1 1)" : "")
                }, a.H.Na()))
            } g.h.enable()
    }
};

function ib(a, c) {
    var d = c.type;
    g.h.disable();
    try {
        var e = a.s.Wg(d);
        e.DD(!0);
        if (c.Wa) {
            var f = c.Wa();
            f && e.yb(f)
        }
        for (a = 0; a < c.Y.length; a++) {
            var h = c.Y[a];
            if (h.name != g.Ob.Pq) {
                var k = e.Y[a];
                if (!k) throw Error(g.Pd.Bz.replace("%1", "an input"));
                for (d = 0; d < h.fb.length; d++) {
                    var l = h.fb[d],
                        m = k.fb[d];
                    if (!m) throw Error(g.Pd.Bz.replace("%1", "a field"));
                    m.setValue(l.getValue())
                }
            }
        }
        e.Oj(c.isCollapsed());
        e.ye(ob(c));
        e.xe();
        e.Na().setAttribute("visibility", "hidden")
    } finally {
        g.h.enable()
    }
    return e
}

function jb(a) {
    var c = a.Vj.Yf(!1),
        d = a.Vj.Rs(!0);
    if (d && d != a.Vj.aa) {
        c.push(d);
        a.ix = d;
        if (a.zj) {
            g.h.disable();
            try {
                a.zj.J()
            } finally {
                g.h.enable()
            }
        }
        a.zj = ib(a, d.ea())
    }
    return c
}

function kb(a, c, d) {
    var e = c.local,
        f = c.closest;
    c = c.yt;
    if (e && f) {
        if (a.Jd && a.qc) {
            if (a.qc == f && a.Jd == e) return !1;
            e = a.Jd.x + d.x - a.qc.x;
            a = a.Jd.y + d.y - a.qc.y;
            a = Math.sqrt(e * e + a * a);
            return !(f && c > a - g.DE)
        }
        if (a.Jd || a.qc) console.error("Only one of localConnection_ and closestConnection_ was set.");
        else return !0
    } else return !(!a.Jd || !a.qc);
    console.error("Returning true from shouldUpdatePreviews, but it's not clear why.");
    return !0
}
g.Pd.prototype.My = function(a, c) {
    return c && gb(this.s.Me, c.id) ? c.ez(this.Vj, a && !!a.closest) : !1
};

function lb(a) {
    a.qc && a.qc.ra() && (g.g.o.removeNode(g.Ka.qC), delete g.Ka.qC);
    if (a.Po) mb(a.Po.sb, "blocklyReplaceable", !1), a.Po = null;
    else if (a.Sw) a.Sw = null;
    else if (a.fl)
        if (a.fl) {
            var c = a.fl,
                d = c.ea(),
                e = d.aa,
                f = d.qa,
                h = d.R;
            h = c.type == g.pa.$b && !(h && h.va);
            !(c != e || f && f.va) || h ? y(c.ra(), !1) : c.type == g.pa.$c && c != e ? (e = c.va, y(e.ea(), !1), f = f ? f.va : null, y(d, !0), f && f.connect(e)) : y(d, !0);
            if (c.va) throw Error("markerConnection_ still connected at the end of disconnectInsertionMarker");
            a.fl = null;
            (a = d.Na()) && a.setAttribute("visibility",
                "hidden")
        } else console.log("No insertion marker connection to disconnect")
}
g.Pd.prototype.Lm = function() {
    var a = [];
    this.Ro && a.push(this.Ro);
    this.zj && a.push(this.zj);
    return a
};
g.En = function(a, c) {
    this.Qb = a;
    this.s = c;
    this.Kg = new g.Pd(this.Qb);
    this.yc = null;
    this.kg = !1;
    this.eh = this.Qb.kb();
    this.qs = g.En.nJ(a)
};
g.En.prototype.J = function() {
    this.qs.length = 0;
    this.Kg && this.Kg.J()
};
g.En.nJ = function(a) {
    var c = [];
    a = p(a, !1);
    for (var d = 0, e; e = a[d]; d++) {
        e = pb(e);
        for (var f = 0; f < e.length; f++) c.push({
            location: e[f].pj,
            icon: e[f]
        })
    }
    return c
};
b = g.En.prototype;
b.bq = function(a, c) {
    g.h.tc() || g.h.oa(!0);
    var d = new(g.h.get(g.h.Iq))(this.Qb, !0, p(this.Qb, !1));
    g.h.Ia(d);
    this.s.qp && qb(this.Qb);
    g.g.o.cq();
    this.s.fd(!1);
    g.Ib.dw();
    if (this.Qb.getParent() || c && this.Qb.aa && this.Qb.aa.ra()) y(this.Qb, c), a = this.fn(a), a = g.g.ba.sum(this.eh, a), this.Qb.translate(a.x, a.y), g.Ib.pI(this.Qb), a = this.Kg, a.Lr = jb(a);
    this.Qb.Qj(!0);
    a = this.Qb;
    a.xq && (c = a.kb(), a.Na().removeAttribute("transform"), a.u.Je.Gl(c.x, c.y), (c = a.Na()) && rb(a.u.Je, c))
};
b.Lh = function(a, c) {
    c = this.fn(c);
    var d = g.g.ba.sum(this.eh, c);
    this.Qb.Cx(d);
    for (d = 0; d < this.qs.length; d++) {
        var e = this.qs[d],
            f = e.icon;
        e = g.g.ba.sum(e.location, c);
        f.pj = e;
        f.isVisible() && (f = f.kc, f.pc = e, f.Dt && Sa(f))
    }
    d = this.yc;
    this.yc = sb(this.s, a);
    this.Kg.update(c, this.yc);
    a = this.kg;
    this.kg = this.Kg.kg;
    a != this.kg && this.Qb.Dy(this.kg);
    this.yc !== d && (d && d.gt(), this.yc && this.yc.Mx());
    this.yc && this.yc.Nx()
};
b.No = function(a, c) {
    this.Lh(a, c);
    this.qs = [];
    a = new(g.h.get(g.h.Iq))(this.Qb, !1, p(this.Qb, !1));
    g.h.Ia(a);
    g.g.o.eq();
    g.Ib.dw();
    c = this.fn(c);
    a = g.g.ba.sum(this.eh, c);
    var d = this.Qb;
    d.xq && (d.translate(a.x, a.y), d.u.Je.Ur(d.u.Bb));
    this.yc && this.yc.ht();
    this.kg ? (this.Qo(), this.Qb.J(!1, !0), g.Fm = [], a = !0) : a = !1;
    a || (this.Qb.Qj(!1), c ? (tb(this.Qb, c.x, c.y), this.Qo(), this.Kg.qc ? (c = this.Kg, c.qc && (g.h.disable(), lb(c), g.h.enable(), c.Jd.connect(c.qc), c.Vj.ua && (g.Ib.YH((Da(c.Jd) ? c.qc : c.Jd).ea()), qb(c.Vj.Zf())))) : this.Qb.Ja(),
        ub(this.Qb)) : g.xv(this.Qb.u, this.s.ke.jj(!0), this.Qb));
    this.s.fd(!0);
    g.h.oa(!1)
};
b.Qo = function() {
    var a = new(g.h.get(g.h.ui))(this.Qb);
    a.Hx = this.eh;
    a.wl();
    g.h.Ia(a)
};
b.fn = function(a) {
    a = new g.g.ba(a.x / this.s.scale, a.y / this.s.scale);
    this.s.qp && a.scale(1 / this.s.options.uc.scale);
    return a
};
b.Lm = function() {
    return this.Kg && this.Kg.Lm ? this.Kg.Lm() : []
};
g.B.register(g.B.S.nz, g.B.ek, g.En);
g.h.ih = function(a) {
    this.Cg = (this.Ve = "undefined" == typeof a) ? "" : a.id;
    this.Zc = this.Ve ? "" : a.u.id;
    this.group = g.h.tc();
    this.ab = g.h.ab
};
g.g.object.X(g.h.ih, g.h.Abstract);
g.h.ih.prototype.Ba = function() {
    var a = g.h.ih.v.Ba.call(this);
    this.Cg && (a.commentId = this.Cg);
    return a
};
g.h.ih.prototype.ma = function(a) {
    g.h.ih.v.ma.call(this, a);
    this.Cg = a.commentId
};
g.h.Rl = function(a, c, d) {
    g.h.Rl.v.constructor.call(this, a);
    a && (this.dt = "undefined" == typeof c ? "" : c, this.ct = "undefined" == typeof d ? "" : d)
};
g.g.object.X(g.h.Rl, g.h.ih);
b = g.h.Rl.prototype;
b.type = g.h.rz;
b.Ba = function() {
    var a = g.h.Rl.v.Ba.call(this);
    a.oldContents = this.dt;
    a.newContents = this.ct;
    return a
};
b.ma = function(a) {
    g.h.Rl.v.ma.call(this, a);
    this.dt = a.oldContents;
    this.ct = a.newContents
};
b.Vm = function() {
    return this.dt == this.ct
};
b.run = function(a) {
    var c;
    (c = va(this).Yr[this.Cg] || null) ? c.tP(a ? this.ct : this.dt): console.warn("Can't change non-existent comment: " + this.Cg)
};
g.h.jh = function(a) {
    g.h.jh.v.constructor.call(this, a);
    a && (this.xml = a.QD())
};
g.g.object.X(g.h.jh, g.h.ih);
g.h.jh.prototype.type = g.h.Sq;
g.h.jh.prototype.Ba = function() {
    var a = g.h.jh.v.Ba.call(this);
    a.xml = g.O.Zd(this.xml);
    return a
};
g.h.jh.prototype.ma = function(a) {
    g.h.jh.v.ma.call(this, a);
    this.xml = g.O.ze(a.xml)
};
g.h.jh.prototype.run = function(a) {
    g.h.vz(this, a)
};
g.h.vz = function(a, c) {
    var d = va(a);
    c ? (c = g.g.xml.createElement("xml"), c.appendChild(a.xml), g.O.fj(c, d)) : (d = d.Yr[a.Cg] || null) ? d.J(!1, !1) : console.warn("Can't uncreate non-existent comment: " + a.Cg)
};
g.h.kh = function(a) {
    g.h.kh.v.constructor.call(this, a);
    a && (this.xml = a.QD())
};
g.g.object.X(g.h.kh, g.h.ih);
g.h.kh.prototype.type = g.h.sz;
g.h.kh.prototype.Ba = function() {
    return g.h.kh.v.Ba.call(this)
};
g.h.kh.prototype.ma = function(a) {
    g.h.kh.v.ma.call(this, a)
};
g.h.kh.prototype.run = function(a) {
    g.h.vz(this, !a)
};
g.h.Sl = function(a) {
    g.h.Sl.v.constructor.call(this, a);
    a && (this.Jv = a, this.ml = a.gC(), this.jl = null)
};
g.g.object.X(g.h.Sl, g.h.ih);
b = g.h.Sl.prototype;
b.wl = function() {
    if (!this.Jv) throw Error("Tried to record the new position of a comment on the same event twice.");
    this.jl = this.Jv.gC();
    this.Jv = null
};
b.type = g.h.Hn;
b.Ba = function() {
    var a = g.h.Sl.v.Ba.call(this);
    this.ml && (a.oldCoordinate = Math.round(this.ml.x) + "," + Math.round(this.ml.y));
    this.jl && (a.newCoordinate = Math.round(this.jl.x) + "," + Math.round(this.jl.y));
    return a
};
b.ma = function(a) {
    g.h.Sl.v.ma.call(this, a);
    if (a.oldCoordinate) {
        var c = a.oldCoordinate.split(",");
        this.ml = new g.g.ba(Number(c[0]), Number(c[1]))
    }
    a.newCoordinate && (c = a.newCoordinate.split(","), this.jl = new g.g.ba(Number(c[0]), Number(c[1])))
};
b.Vm = function() {
    return g.g.ba.wf(this.ml, this.jl)
};
b.run = function(a) {
    var c;
    if (c = va(this).Yr[this.Cg] || null) {
        a = a ? this.jl : this.ml;
        var d = c.gC();
        c.moveBy(a.x - d.x, a.y - d.y)
    } else console.warn("Can't move non-existent comment: " + this.Cg)
};
g.B.register(g.B.S.hc, g.h.Sq, g.h.jh);
g.B.register(g.B.S.hc, g.h.rz, g.h.Rl);
g.B.register(g.B.S.hc, g.h.Hn, g.h.Sl);
g.B.register(g.B.S.hc, g.h.sz, g.h.kh);
g.Fn = function(a, c) {
    this.Ed = a;
    this.s = c;
    this.yc = null;
    this.Aq = !1;
    this.eh = this.Ed.kb();
    this.Jk = g.g.Xk() && c.Je ? c.Je : null
};
g.Fn.prototype.J = function() {
    this.Jk = this.s = this.Ed = null
};

function vb(a, c, d) {
    d = a.fn(d);
    d = g.g.ba.sum(a.eh, d);
    a.Ed.Cx(a.Jk, d);
    d = a.yc;
    a.yc = sb(a.s, c);
    c = a.Aq;
    a.Aq = a.My(a.yc);
    c != a.Aq && a.Ed.Dy(a.Aq);
    a.yc !== d && (d && d.gt(), a.yc && a.yc.Mx());
    a.yc && a.yc.Nx()
}
g.Fn.prototype.My = function(a) {
    return a && gb(this.s.Me, a.id) ? a.ez(this.Ed, !1) : !1
};

function wb(a, c, d) {
    vb(a, c, d);
    c = a.fn(d);
    c = g.g.ba.sum(a.eh, c);
    a.Ed.moveTo(c.x, c.y);
    a.yc && a.yc.ht();
    a.Aq ? (a.Qo(), a.Ed.J(!1, !0)) : (a.Jk && a.Jk.Ur(a.s.gg), a.Ed.Qj && a.Ed.Qj(!1), a.Qo());
    a.s.fd(!0);
    g.h.oa(!1)
}
g.Fn.prototype.Qo = function() {
    if (this.Ed.dP) {
        var a = new(g.h.get(g.h.Hn))(this.Ed);
        a.ml = this.eh;
        a.wl();
        g.h.Ia(a)
    }
};
g.Fn.prototype.fn = function(a) {
    a = new g.g.ba(a.x / this.s.scale, a.y / this.s.scale);
    this.s.qp && a.scale(1 / this.s.options.uc.scale);
    return a
};
g.h.Ai = function(a, c, d) {
    g.h.Ai.v.constructor.call(this, a ? a.u.id : c);
    this.qb = a ? a.id : null;
    this.ND = d
};
g.g.object.X(g.h.Ai, g.h.Ie);
g.h.Ai.prototype.type = g.h.Ql;
g.h.Ai.prototype.Ba = function() {
    var a = g.h.Ai.v.Ba.call(this);
    a.targetType = this.ND;
    this.qb && (a.blockId = this.qb);
    return a
};
g.h.Ai.prototype.ma = function(a) {
    g.h.Ai.v.ma.call(this, a);
    this.ND = a.targetType;
    this.qb = a.blockId
};
g.B.register(g.B.S.hc, g.h.Ql, g.h.Ai);
g.L = {};
g.L.visible = !1;
g.L.sm = !1;
g.L.PF = 50;
g.L.QC = 0;
g.L.$p = 0;
g.L.kx = 0;
g.L.lx = 0;
g.L.Jb = null;
g.L.Fp = null;
g.L.dA = 0;
g.L.eA = 10;
g.L.zG = 10;
g.L.AF = 750;
g.L.vu = 5;
g.L.mb = null;
g.L.XI = function() {
    var a = g.L.eC(g.L.Jb);
    if (a) {
        for (a = a.Kf;
            "function" == typeof a;) a = a();
        if ("string" != typeof a) throw Error("Tooltip function must return a string.");
        return a
    }
    return ""
};
g.L.eC = function(a) {
    for (; a && a.Kf;) {
        if ("string" == typeof a.Kf || "function" == typeof a.Kf) return a;
        a = a.Kf
    }
    return null
};
g.L.eb = function() {
    g.L.mb || (g.L.mb = document.createElement("div"), g.L.mb.className = "blocklyTooltipDiv", (g.ut || document.body).appendChild(g.L.mb))
};
g.L.rm = function(a) {
    a.JJ = g.N.bind(a, "mouseover", null, g.L.fK);
    a.HJ = g.N.bind(a, "mouseout", null, g.L.eK);
    a.addEventListener("mousemove", g.L.qt, !1)
};
g.L.$y = function(a) {
    a && (g.N.Pa(a.JJ), g.N.Pa(a.HJ), a.removeEventListener("mousemove", g.L.qt))
};
g.L.fK = function(a) {
    g.L.sm || (a = g.L.eC(a.currentTarget), g.L.Jb != a && (g.L.$a(), g.L.Fp = null, g.L.Jb = a), clearTimeout(g.L.QC))
};
g.L.eK = function() {
    g.L.sm || (g.L.QC = setTimeout(function() {
        g.L.Jb = null;
        g.L.Fp = null;
        g.L.$a()
    }, 1), clearTimeout(g.L.$p))
};
g.L.qt = function(a) {
    if (g.L.Jb && g.L.Jb.Kf && !g.L.sm)
        if (g.L.visible) {
            var c = g.L.kx - a.pageX;
            a = g.L.lx - a.pageY;
            Math.sqrt(c * c + a * a) > g.L.zG && g.L.$a()
        } else g.L.Fp != g.L.Jb && (clearTimeout(g.L.$p), g.L.kx = a.pageX, g.L.lx = a.pageY, g.L.$p = setTimeout(g.L.ZK, g.L.AF))
};
g.L.J = function() {
    g.L.Jb = null;
    g.L.Fp = null;
    g.L.$a()
};
g.L.$a = function() {
    g.L.visible && (g.L.visible = !1, g.L.mb && (g.L.mb.style.display = "none"));
    g.L.$p && clearTimeout(g.L.$p)
};
g.L.block = function() {
    g.L.$a();
    g.L.sm = !0
};
g.L.rL = function() {
    g.L.sm = !1
};
g.L.ZK = function() {
    if (!g.L.sm && (g.L.Fp = g.L.Jb, g.L.mb)) {
        g.L.mb.textContent = "";
        var a = g.L.XI();
        a = g.g.Ab.cE(a, g.L.PF);
        a = a.split("\n");
        for (var c = 0; c < a.length; c++) {
            var d = document.createElement("div");
            d.appendChild(document.createTextNode(a[c]));
            g.L.mb.appendChild(d)
        }
        a = g.L.Jb.M;
        c = document.documentElement.clientWidth;
        d = document.documentElement.clientHeight;
        g.L.mb.style.direction = a ? "rtl" : "ltr";
        g.L.mb.style.display = "block";
        g.L.visible = !0;
        var e = g.L.kx;
        e = a ? e - (g.L.dA + g.L.mb.offsetWidth) : e + g.L.dA;
        var f = g.L.lx + g.L.eA;
        f + g.L.mb.offsetHeight > d + window.scrollY && (f -= g.L.mb.offsetHeight + 2 * g.L.eA);
        a ? e = Math.max(g.L.vu - window.scrollX, e) : e + g.L.mb.offsetWidth > c + window.scrollX - 2 * g.L.vu && (e = c - g.L.mb.offsetWidth - 2 * g.L.vu);
        g.L.mb.style.top = f + "px";
        g.L.mb.style.left = e + "px"
    }
};
g.qo = function(a) {
    this.s = a;
    this.rC = xb(this.s);
    this.aE = yb(this.s);
    this.eL = new g.g.ba(a.scrollX, a.scrollY)
};
g.qo.prototype.J = function() {
    this.s = null
};
g.qo.prototype.bq = function() {
    g.selected && zb(g.selected);
    ta(this.s)
};
g.qo.prototype.No = function(a) {
    this.Lh(a);
    ua(this.s)
};
g.qo.prototype.Lh = function(a) {
    a = g.g.ba.sum(this.eL, a);
    if (this.rC && this.aE) this.s.scroll(a.x, a.y);
    else if (this.rC) this.s.scroll(a.x, this.s.scrollY);
    else if (this.aE) this.s.scroll(this.s.scrollX, a.y);
    else throw new TypeError("Invalid state.");
};
g.sg = function(a, c) {
    this.PC = null;
    this.Xd = new g.g.ba(0, 0);
    this.Bc = this.vd = this.qn = this.rn = this.af = null;
    this.Qv = c;
    this.mp = this.Zk = this.np = this.Qk = !1;
    this.Bf = a;
    this.za = this.Ml = this.Ag = this.Wi = this.st = this.rt = null;
    this.Is = this.Rk = this.VA = !1;
    this.mC = !g.SE
};
b = g.sg.prototype;
b.J = function() {
    g.Touch.Dk();
    g.L.rL();
    this.Qv.Dd = null;
    this.rt && g.N.Pa(this.rt);
    this.st && g.N.Pa(this.st);
    this.Ag && this.Ag.J();
    this.Ml && this.Ml.J();
    this.Wi && this.Wi.J()
};

function Ab(a, c) {
    a.Xd = g.g.ba.Lo(new g.g.ba(c.clientX, c.clientY), a.PC);
    if (a.Qk) var d = !1;
    else a.Qk = g.g.ba.DJ(a.Xd) > (a.za ? g.oF : g.RE), d = a.Qk;
    if (d) {
        if (a.VA) throw Error("updateIsDragging_ should only be called once per gesture.");
        a.VA = !0;
        a.af ? (a.mp = !0, a.Wi = new g.Fn(a.af, a.Bc), d = a.Wi, g.h.tc() || g.h.oa(!0), d.s.fd(!1), d.Ed.ov = !1, d.Jk && (d.Ed.moveTo(0, 0), d.Jk.Gl(d.eh.x, d.eh.y), rb(d.Jk, d.Ed.Na())), d.Ed.Qj && d.Ed.Qj(!0), vb(a.Wi, a.Bf, a.Xd), d = !0) : d = !1;
        if (!d) {
            if (a.vd) {
                if (a.za) {
                    if (a.vd && a.vd.isEnabled()) {
                        if (!(d = !Bb(a.za))) {
                            d =
                                a.Xd;
                            d = Math.atan2(d.y, d.x) / Math.PI * 180;
                            var e = a.za.uI;
                            d = d < e && d > -e || d < -180 + e || d > 180 - e ? !0 : !1
                        }
                        d ? (a.Bc = a.za.Ta, Cb(a.Bc), g.h.tc() || g.h.oa(!0), a.qn = null, a.vd = Db(a.za, a.vd), a.vd.select(), d = !0) : d = !1
                    } else d = !1;
                    a.Zk = d
                } else a.vd.Hc() && (a.Zk = !0);
                a.Zk ? (a.Ag = new(g.B.Wf(g.B.S.nz, a.Qv.options, !0))(a.vd, a.Bc), a.Ag.bq(a.Xd, a.mC), a.Ag.Lh(a.Bf, a.Xd), d = !0) : d = !1
            } else d = !1;
            if (d = !d)
                if (a.za) d = Bb(a.za);
                else if (d = a.Bc) d = a.Bc, d = d.options.Ld && d.options.Ld.Lh;
            d && (a.Ml = new g.qo(a.Bc), a.np = !0, a.Ml.bq())
        }
        g.Bj()
    }
    a.Bf = c
}
b.fw = function(a) {
    g.g.Ns(a) ? this.cancel() : (this.Rk = !0, g.Ib.dw(), Cb(this.Bc), this.Bc.qp && this.Bc.resize(), g.Uc(!!this.za), ra(this.Bc), this.Bf = a, g.L.block(), this.vd && this.vd.select(), g.g.bl(a) ? ba(this, a) : ("touchstart" != a.type.toLowerCase() && "pointerdown" != a.type.toLowerCase() || "mouse" == a.pointerType || g.BJ(a, this), this.PC = new g.g.ba(a.clientX, a.clientY), this.mC = a.altKey || a.ctrlKey || a.metaKey, this.rm(a)))
};
b.rm = function(a) {
    this.rt = g.N.ta(document, "mousemove", null, this.Om.bind(this));
    this.st = g.N.ta(document, "mouseup", null, this.Ds.bind(this));
    a.preventDefault();
    a.stopPropagation()
};
b.Om = function(a) {
    Ab(this, a);
    this.np ? this.Ml.Lh(this.Xd) : this.Zk ? this.Ag.Lh(this.Bf, this.Xd) : this.mp && vb(this.Wi, this.Bf, this.Xd);
    a.preventDefault();
    a.stopPropagation()
};
b.Ds = function(a) {
    Ab(this, a);
    g.Bj();
    if (this.Is) console.log("Trying to end a gesture recursively.");
    else {
        this.Is = !0;
        if (this.mp) wb(this.Wi, a, this.Xd);
        else if (this.Zk) this.Ag.No(a, this.Xd);
        else if (this.np) this.Ml.No(this.Xd);
        else if (this.af && !this.Qk) this.af.VK && this.af.VK(), this.af.select && this.af.select();
        else if (Eb(this)) {
            var c = this.rn,
                d = this.Bf;
            Fb(c) && c.If(d);
            Gb(this)
        } else !this.qn || this.Qk || Eb(this) ? this.qn || this.af || this.rn || this.Qk || (c = this.Qv, g.selected && zb(g.selected), c = this.Bc || c, g.h.Ia(new(g.h.get(g.h.Ql))(null,
            c.id, "workspace"))) : (this.za && this.za.Ui ? this.vd.isEnabled() && (g.h.tc() || g.h.oa(!0), ub(Db(this.za, this.vd))) : (c = new(g.h.get(g.h.Ql))(this.qn, this.Bc.id, "block"), g.h.Ia(c)), Gb(this), g.h.oa(!1));
        a.preventDefault();
        a.stopPropagation();
        this.J()
    }
};
b.cancel = function() {
    this.Is || (g.Bj(), this.mp ? wb(this.Wi, this.Bf, this.Xd) : this.Zk ? this.Ag.No(this.Bf, this.Xd) : this.np && this.Ml.No(this.Xd), this.J())
};

function ba(a, c) {
    a.vd ? (Gb(a), g.Uc(!!a.za), a.vd.Zp(c)) : a.af ? a.af.Zp(c) : a.Bc && !a.za && (g.Uc(), a.Bc.Zp(c));
    c.preventDefault();
    c.stopPropagation();
    a.J()
}

function Hb(a, c, d) {
    if (a.Rk) throw Error("Tried to call gesture.handleWsStart, but the gesture had already been started.");
    a.Bc || (a.Bc = d);
    a.Bf = c;
    a.fw(c)
}

function Ib(a, c, d) {
    if (a.Rk) throw Error("Tried to call gesture.handleFlyoutStart, but the gesture had already been started.");
    a.za || (a.za = d);
    Hb(a, c, d.s)
}

function Gb(a) {
    a.vd && !a.za && qb(a.vd)
}

function Jb(a, c) {
    a.qn || a.af || (a.qn = c, c.Yb && c != c.Zf() ? Kb(a, c.Zf()) : Kb(a, c))
}

function Kb(a, c) {
    c.Sa ? Kb(a, c.getParent()) : a.vd = c
}

function Eb(a) {
    return (a.rn ? Fb(a.rn) : !1) && !a.Qk && (!a.za || !a.za.Ui)
}
b.Ac = function() {
    return this.np || this.Zk || this.mp
};
b.Lm = function() {
    return this.Ag ? this.Ag.Lm() : []
};
g.sg.Uk = function() {
    for (var a = g.Wb.getAll(), c = 0, d; d = a[c]; c++)
        if (d.Dd) return !0;
    return !1
};
g.$M = function() {};
g.I = function(a, c, d) {
    if (!c) throw Error("Cannot create a node without a location.");
    this.pq = a;
    this.Qa = c;
    this.fE = null;
    (a = d || null) && a.eE && (this.fE = a.eE)
};
g.I.types = {
    yd: "field",
    Nc: "block",
    gf: "input",
    tk: "output",
    Ji: "next",
    Mi: "previous",
    xk: "stack",
    ue: "workspace"
};
g.I.Ii = !1;
g.I.ME = -20;
g.I.eP = function(a) {
    switch (a) {
        case g.I.types.Mi:
        case g.I.types.Ji:
        case g.I.types.gf:
        case g.I.types.tk:
            return !0
    }
    return !1
};
g.I.zm = function(a) {
    return a ? new g.I(g.I.types.yd, a) : null
};
g.I.dj = function(a) {
    if (!a) return null;
    var c = a.type;
    return c == g.pa.$b || c == g.pa.$c && a.Ng() ? g.I.Hk(a.Ng()) : c == g.pa.$c ? new g.I(g.I.types.Ji, a) : c == g.pa.qe ? new g.I(g.I.types.tk, a) : c == g.pa.Ge ? new g.I(g.I.types.Mi, a) : null
};
g.I.Hk = function(a) {
    return a && a.connection ? new g.I(g.I.types.gf, a.connection) : null
};
g.I.cj = function(a) {
    return a ? new g.I(g.I.types.Nc, a) : null
};
g.I.fs = function(a) {
    return a ? new g.I(g.I.types.xk, a) : null
};
g.I.eI = function(a, c) {
    return c && a ? new g.I(g.I.types.ue, a, {
        eE: c
    }) : null
};
g.I.YO = function(a) {
    var c = a.qa || a.R;
    return c ? g.I.dj(c) : g.I.cj(a)
};
b = g.I.prototype;
b.cc = function() {
    return this.pq
};

function Lb(a, c) {
    a = a.Qa;
    a instanceof g.Pl || (a = a.ea());
    if (!a || !a.u) return null;
    var d = a.Zf();
    a = d.u.zc(!0);
    for (var e = 0, f; f = a[e]; e++)
        if (d.id == f.id) return c = e + (c ? 1 : -1), -1 == c || c == a.length ? null : g.I.fs(a[c]);
    throw Error("Couldn't find " + (c ? "next" : "previous") + " stack?!");
}

function Mb(a) {
    if (!a) return null;
    do var c = a.qa && a.qa.ra(); while (c && r(c) == a && (a = c));
    return (c = a.qa || a.R) && c.va && c.va.Ng() ? g.I.Hk(c.va.Ng()) : g.I.fs(a)
}
b.ea = function() {
    return this.cc() === g.I.types.Nc ? this.Qa : this.cc() === g.I.types.xk ? this.Qa : this.cc() === g.I.types.ue ? null : this.Qa.ea()
};
b.next = function() {
    switch (this.pq) {
        case g.I.types.xk:
            return Lb(this, !0);
        case g.I.types.tk:
            var a = this.Qa;
            return g.I.cj(a.ea());
        case g.I.types.yd:
            a: {
                var c = this.Qa,
                    d = c.Ng();a = c.ea();c = d.fb.indexOf(c) + 1;d = a.Y.indexOf(d);
                for (var e; e = a.Y[d]; d++) {
                    for (var f = e.fb; c < f.length;) {
                        if (Fb(f[c]) || g.I.Ii) {
                            a = g.I.zm(f[c]);
                            break a
                        }
                        c++
                    }
                    c = 0;
                    if (e.connection) {
                        a = g.I.Hk(e);
                        break a
                    }
                }
                a = null
            }
            return a;
        case g.I.types.gf:
            a: {
                c = this.Qa.Ng();a = c.ea();
                for (c = a.Y.indexOf(c) + 1; d = a.Y[c]; c++) {
                    e = d.fb;
                    f = 0;
                    for (var h; h = e[f]; f++)
                        if (Fb(h) || g.I.Ii) {
                            a =
                                g.I.zm(h);
                            break a
                        } if (d.connection) {
                        a = g.I.Hk(d);
                        break a
                    }
                }
                a = null
            }
            return a;
        case g.I.types.Nc:
            return g.I.dj(this.Qa.aa);
        case g.I.types.Mi:
            return a = this.Qa, g.I.cj(a.ea());
        case g.I.types.Ji:
            return a = this.Qa, g.I.dj(a.va)
    }
    return null
};
b.rj = function() {
    switch (this.pq) {
        case g.I.types.ue:
            var a = this.Qa.zc(!0);
            if (0 < a.length) return g.I.fs(a[0]);
            break;
        case g.I.types.xk:
            a = this.Qa;
            var c = a.qa || a.R;
            return c ? g.I.dj(c) : g.I.cj(a);
        case g.I.types.Nc:
            a = this.Qa;
            a: {
                a = a.Y;c = 0;
                for (var d; d = a[c]; c++) {
                    for (var e = d.fb, f = 0, h; h = e[f]; f++)
                        if (Fb(h) || g.I.Ii) {
                            a = g.I.zm(h);
                            break a
                        } if (d.connection) {
                        a = g.I.Hk(d);
                        break a
                    }
                }
                a = null
            }
            return a;
        case g.I.types.gf:
            return g.I.dj(this.Qa.va)
    }
    return null
};
b.di = function() {
    switch (this.pq) {
        case g.I.types.xk:
            return Lb(this, !1);
        case g.I.types.yd:
            a: {
                var a = this.Qa;
                var c = a.Ng();
                var d = a.ea();a = c.fb.indexOf(a) - 1;
                for (var e = d.Y.indexOf(c), f; f = d.Y[e]; e--) {
                    if (f.connection && f !== c) {
                        c = g.I.Hk(f);
                        break a
                    }
                    for (f = f.fb; - 1 < a;) {
                        if (Fb(f[a]) || g.I.Ii) {
                            c = g.I.zm(f[a]);
                            break a
                        }
                        a--
                    }
                    0 <= e - 1 && (a = d.Y[e - 1].fb.length - 1)
                }
                c = null
            }
            return c;
        case g.I.types.gf:
            a: {
                c = this.Qa.Ng();d = c.ea();
                for (a = d.Y.indexOf(c); e = d.Y[a]; a--) {
                    if (e.connection && e !== c) {
                        c = g.I.Hk(e);
                        break a
                    }
                    e = e.fb;
                    f = e.length - 1;
                    for (var h; h =
                        e[f]; f--)
                        if (Fb(h) || g.I.Ii) {
                            c = g.I.zm(h);
                            break a
                        }
                }
                c = null
            }
            return c;
        case g.I.types.Nc:
            return c = this.Qa, g.I.dj(c.qa || c.R);
        case g.I.types.Mi:
            c = this.Qa;
            if ((c = c.va) && !c.Ng()) return g.I.dj(c);
            break;
        case g.I.types.Ji:
            return c = this.Qa, g.I.cj(c.ea())
    }
    return null
};
b.Fj = function() {
    switch (this.pq) {
        case g.I.types.xk:
            var a = this.Qa,
                c = a.kb();
            return g.I.eI(a.u, new g.g.ba(c.x, c.y + g.I.ME));
        case g.I.types.tk:
            return a = this.Qa, (c = a.va) ? g.I.dj(c) : g.I.fs(a.ea());
        case g.I.types.yd:
            return g.I.cj(this.Qa.ea());
        case g.I.types.gf:
            return a = this.Qa, g.I.cj(a.ea());
        case g.I.types.Nc:
            return a = this.Qa, Mb(a);
        case g.I.types.Mi:
            return a = this.Qa, Mb(a.ea());
        case g.I.types.Ji:
            return a = this.Qa, Mb(a.ea())
    }
    return null
};
g.mr = function() {
    this.vf = this.Pe = this.rb = null;
    this.type = "marker"
};

function Nb(a, c) {
    var d = a.Pe;
    a.Pe = c;
    a.vf && a.vf.draw(d, a.Pe)
}
g.mr.prototype.draw = function() {
    this.vf && this.vf.draw(this.Pe, this.Pe)
};
g.mr.prototype.$a = function() {
    this.vf && this.vf.$a()
};
g.mr.prototype.J = function() {
    this.vf && this.vf.J()
};
g.Bi = function() {
    g.Bi.v.constructor.call(this);
    this.type = "cursor"
};
g.g.object.X(g.Bi, g.mr);
g.Bi.prototype.next = function() {
    var a = this.Pe;
    if (!a) return null;
    for (a = a.next(); a && a.next() && (a.cc() == g.I.types.Ji || a.cc() == g.I.types.Nc);) a = a.next();
    a && Nb(this, a);
    return a
};
g.Bi.prototype.rj = function() {
    var a = this.Pe;
    if (!a) return null;
    if (a.cc() == g.I.types.Mi || a.cc() == g.I.types.tk) a = a.next();
    (a = a.rj()) && Nb(this, a);
    return a
};
g.Bi.prototype.di = function() {
    var a = this.Pe;
    if (!a) return null;
    for (a = a.di(); a && a.di() && (a.cc() == g.I.types.Ji || a.cc() == g.I.types.Nc);) a = a.di();
    a && Nb(this, a);
    return a
};
g.Bi.prototype.Fj = function() {
    var a = this.Pe;
    if (!a) return null;
    (a = a.Fj()) && a.cc() == g.I.types.Nc && (a = a.di() || a);
    a && Nb(this, a);
    return a
};
g.B.register(g.B.S.yi, g.B.ek, g.Bi);
g.Vn = function(a) {
    this.Hh = this.tf = null;
    this.up = Object.create(null);
    this.s = a
};
g.Vn.Zz = "local_marker_1";
b = g.Vn.prototype;
b.Jm = function() {
    return this.tf
};
b.ap = function(a) {
    return this.up[a] || null
};
b.gi = function(a) {
    a ? (this.s.Bb.appendChild(a), this.Hh = a) : this.Hh = null
};
b.Rj = function(a) {
    a ? this.s.Bb && (this.Hh ? this.s.Bb.insertBefore(a, this.Hh) : this.s.Bb.appendChild(a)) : this.Yh = null
};
b.J = function() {
    for (var a = Object.keys(this.up), c = 0, d; d = a[c]; c++) {
        var e = this.up[d];
        if (e) e.J(), delete this.up[d];
        else throw Error("Marker with ID " + d + " does not exist. Can only unregister markers that exist.");
    }
    this.up = null;
    this.tf && (this.tf.J(), this.tf = null)
};
g.na = {};
g.na.Ef = null;
g.na.ps = null;
g.na.eg = "";
g.na.hg = "";
g.na.eb = function() {
    g.na.mb || (g.na.mb = document.createElement("div"), g.na.mb.className = "blocklyWidgetDiv", (g.ut || document.body).appendChild(g.na.mb))
};
g.na.show = function(a, c, d) {
    g.na.$a();
    g.na.Ef = a;
    g.na.ps = d;
    a = g.na.mb;
    a.style.direction = c ? "rtl" : "ltr";
    a.style.display = "block";
    c = g.hj();
    g.na.eg = c.Rb.Xf();
    g.na.hg = c.Og().Xf();
    g.g.o.Ga(a, g.na.eg);
    g.g.o.Ga(a, g.na.hg)
};
g.na.$a = function() {
    if (g.na.isVisible()) {
        g.na.Ef = null;
        var a = g.na.mb;
        a.style.display = "none";
        a.style.left = "";
        a.style.top = "";
        g.na.ps && g.na.ps();
        g.na.ps = null;
        a.textContent = "";
        g.na.eg && (g.g.o.Zb(a, g.na.eg), g.na.eg = "");
        g.na.hg && (g.g.o.Zb(a, g.na.hg), g.na.hg = "");
        ra(g.hj())
    }
};
g.na.isVisible = function() {
    return !!g.na.Ef
};
g.na.Qm = function(a) {
    g.na.Ef == a && g.na.$a()
};
g.na.Gp = function(a, c, d) {
    g.na.mb.style.left = a + "px";
    g.na.mb.style.top = c + "px";
    g.na.mb.style.height = d + "px"
};
g.na.oK = function(a, c, d, e) {
    var f = g.na.KH(a, c, d);
    a = g.na.JH(a, c, d, e);
    0 > f ? g.na.Gp(a, 0, d.height + f) : g.na.Gp(a, f, d.height)
};
g.na.JH = function(a, c, d, e) {
    if (e) return c = Math.max(c.right - d.width, a.left), Math.min(c, a.right - d.width);
    c = Math.min(c.left, a.right - d.width);
    return Math.max(c, a.left)
};
g.na.KH = function(a, c, d) {
    return c.bottom + d.height >= a.bottom ? c.top - d.height : c.bottom
};
g.hd = function(a, c, d) {
    this.ib = this.fk;
    this.UD = this.Il = null;
    this.Jc = new g.g.ad(0, 0);
    this.C = this.Ax = this.ji = this.Kc = this.xb = this.$d = this.Yh = this.Hh = null;
    d && this.cd(d);
    this.setValue(a);
    c && (this.Il = c)
};
b = g.hd.prototype;
b.fk = null;
b.name = void 0;
b.uf = !1;
b.$m = 50;
b.H = null;
b.Sg = !0;
b.Xj = !0;
b.Vr = null;
g.hd.nr = "\u00a0";
b = g.hd.prototype;
b.Kn = !0;
b.wk = !1;
b.cd = function(a) {
    var c = a.tooltip;
    "string" == typeof c && (c = g.g.Ic(a.tooltip));
    c && this.Ra(c)
};
b.Iy = function(a) {
    if (this.H) throw Error("Field already bound to a block.");
    this.H = a
};
b.V = function() {
    !this.C && this.H && this.H.u && this.H.u.ua && (this.C = this.H.u.Rb.V());
    return this.C
};
b.ea = function() {
    return this.H
};
b.T = function() {
    this.$d || (this.$d = g.g.o.K(g.g.D.oc, {}, null), this.isVisible() || (this.$d.style.display = "none"), this.H.Na().appendChild(this.$d), this.Rh(), this.pi(), this.Ra(this.UD), g.L.rm(Ob(this)), this.Ax = g.N.ta(Ob(this), "mousedown", this, this.Ej), this.Vk())
};
b.Rh = function() {
    Pb(this);
    Qb(this)
};
b.Vk = function() {};

function Pb(a) {
    a.xb = g.g.o.K(g.g.D.Hb, {
        rx: a.V().$q,
        ry: a.V().$q,
        x: 0,
        y: 0,
        height: a.Jc.height,
        width: a.Jc.width,
        "class": "blocklyFieldRect"
    }, a.$d)
}

function Qb(a) {
    a.Kc = g.g.o.K(g.g.D.io, {
        "class": "blocklyText"
    }, a.$d);
    a.V().ku && a.Kc.setAttribute("dominant-baseline", "central");
    a.ji = document.createTextNode("");
    a.Kc.appendChild(a.ji)
}
b.Mk = function(a) {
    this.setValue(a.textContent)
};
b.Uy = function(a) {
    a.textContent = this.getValue();
    return a
};
b.J = function() {
    g.G.Qm(this);
    g.na.Qm(this);
    g.L.$y(Ob(this));
    this.Ax && g.N.Pa(this.Ax);
    g.g.o.removeNode(this.$d);
    this.uf = !0
};
b.pi = function() {
    var a = this.$d;
    this.Kn && a && (this.H.ge() ? (g.g.o.Ga(a, "blocklyEditableText"), g.g.o.Zb(a, "blocklyNonEditableText"), a.style.cursor = this.yi) : (g.g.o.Ga(a, "blocklyNonEditableText"), g.g.o.Zb(a, "blocklyEditableText"), a.style.cursor = ""))
};

function Fb(a) {
    return !!a.H && a.H.ge() && !!a.If && "function" === typeof a.If
}
b.isVisible = function() {
    return this.Xj
};
b.ub = function(a) {
    if (this.Xj != a) {
        this.Xj = a;
        var c = this.Na();
        c && (c.style.display = a ? "block" : "none")
    }
};

function Rb(a, c) {
    a.Il = c
}
b.fC = function() {
    return this.Il
};
b.Na = function() {
    return this.$d
};
b.jc = function() {};
b.xl = function() {
    this.ji && (this.ji.nodeValue = this.Km());
    this.uq()
};
b.uq = function(a) {
    var c = this.V();
    a = void 0 != a ? a : this.xb ? this.V().mh : 0;
    var d = 2 * a,
        e = c.jk,
        f = 0;
    this.Kc && (f = g.g.o.ys(this.Kc, c.rg, c.oh, c.nh), d += f);
    this.xb && (e = Math.max(e, c.iu));
    this.Jc.height = e;
    this.Jc.width = d;
    Sb(this, a, f);
    Tb(this)
};

function Sb(a, c, d) {
    if (a.Kc) {
        var e = a.V(),
            f = a.Jc.height / 2;
        a.Kc.setAttribute("x", a.H.M ? a.Jc.width - d - c : c);
        a.Kc.setAttribute("y", e.ku ? f : f - e.jk / 2 + e.cr)
    }
}

function Tb(a) {
    a.xb && (a.xb.setAttribute("width", a.Jc.width), a.xb.setAttribute("height", a.Jc.height), a.xb.setAttribute("rx", a.V().$q), a.xb.setAttribute("ry", a.V().$q))
}
b.Nh = function() {
    if (!this.isVisible()) return new g.g.ad(0, 0);
    this.Sg ? (this.xl(), this.Sg = !1) : this.Xj && 0 == this.Jc.width && (console.warn("Deprecated use of setting size_.width to 0 to rerender a field. Set field.isDirty_ to true instead."), this.xl());
    return this.Jc
};

function cb(a) {
    if (a.xb) c = a.xb.getBoundingClientRect(), a = g.g.style.Pk(a.xb), e = c.width, c = c.height;
    else {
        var c = D(a.H),
            d = a.H.u.scale;
        a = g.g.style.Pk(Ob(a));
        var e = c.width * d;
        c = c.height * d;
        g.g.userAgent.Lz ? (a.x += 1.5 * d, a.y += 1.5 * d) : g.g.userAgent.ik || g.g.userAgent.ff || (a.x -= .5 * d, a.y -= .5 * d);
        e += 1 * d;
        c += 1 * d
    }
    return new g.g.Rect(a.y, a.y + c, a.x, a.x + e)
}
b.Km = function() {
    var a = this.Hd();
    if (!a) return g.hd.nr;
    a.length > this.$m && (a = a.substring(0, this.$m - 2) + "\u2026");
    a = a.replace(/\s/g, g.hd.nr);
    this.H && this.H.M && (a += "\u200f");
    return a
};
b.Hd = function() {
    if (this.Bs) {
        var a = this.Bs.call(this);
        if (null !== a) return String(a)
    }
    return String(this.getValue())
};
b.tp = function() {
    this.Sg = !0;
    this.C = null
};

function Ub(a) {
    a.Sg = !0;
    a.H && a.H.ua && (a.H.Ja(), a.H.bc(), a.cz())
}
b.setValue = function(a) {
    if (null !== a) {
        var c = this.Kh(a);
        a = Vb(this, a, c);
        if (!(a instanceof Error)) {
            if (c = this.fC())
                if (c = c.call(this, a), a = Vb(this, a, c), a instanceof Error) return;
            c = this.H;
            if (!c || !c.uf) {
                var d = this.getValue();
                d === a ? this.Qe(a) : (c && g.h.isEnabled() && g.h.Ia(new(g.h.get(g.h.lg))(c, "field", this.name || null, d, a)), this.Qe(a), this.Sg && Ub(this))
            }
        }
    }
};

function Vb(a, c, d) {
    if (null === d) return a.BB(), a.Sg && Ub(a), Error();
    void 0 !== d && (c = d);
    return c
}
b.getValue = function() {
    return this.ib
};
b.Kh = function(a) {
    return null === a || void 0 === a ? null : a
};
b.Qe = function(a) {
    this.ib = a;
    this.Sg = !0
};
b.BB = function() {};
b.Ej = function(a) {
    if (this.H && this.H.u && (a = this.H.u.Mh(a))) {
        if (a.Rk) throw Error("Tried to call gesture.setStartField, but the gesture had already been started.");
        a.rn || (a.rn = this)
    }
};
b.Ra = function(a) {
    a || "" === a || (a = this.H);
    var c = Ob(this);
    c ? c.Kf = a : this.UD = a
};

function Ob(a) {
    return a.Vr || a.Na()
}
b.Mp = function() {
    return !1
};
b.Ng = function() {
    for (var a = null, c = this.H, d = c.Y, e = 0; e < c.Y.length; e++)
        for (var f = d[e], h = f.fb, k = 0; k < h.length; k++)
            if (h[k] === this) {
                a = f;
                break
            } return a
};
b.TB = function() {
    return !1
};
b.CC = function() {
    return !1
};
b.gi = function(a) {
    a ? (this.$d.appendChild(a), this.Hh = a) : this.Hh = null
};
b.Rj = function(a) {
    a ? (this.$d.appendChild(a), this.Yh = a) : this.Yh = null
};
b.cz = function() {
    var a = this.H.u;
    a.Zm && this.Hh && a.Jm().draw();
    a.Zm && this.Yh && a.ap(g.Vn.Zz).draw()
};
g.ve = {};
g.ve.register = function(a, c) {
    g.B.register(g.B.S.yd, a, c)
};
g.ve.unregister = function(a) {
    g.B.unregister(g.B.S.yd, a)
};
g.ve.ma = function(a) {
    var c = g.B.Jw(g.B.S.yd, a.type);
    return c ? c.ma(a) : (console.warn("Blockly could not create a field of type " + a.type + ". The field is probably not being registered. This could be because the file is not loaded, the field does not register itself (Issue #1584), or the registration is not being reached."), null)
};
g.g.$ = {};
g.g.$.kE = "aria-";
g.g.$.JG = "role";
g.g.$.Sf = {
    uF: "grid",
    vF: "gridcell",
    wF: "group",
    QF: "listbox",
    dG: "menu",
    eG: "menuitem",
    pN: "menuitemcheckbox",
    lG: "option",
    tG: "presentation",
    rr: "row",
    dH: "tree",
    eH: "treeitem"
};
g.g.$.State = {
    Dq: "activedescendant",
    uE: "colcount",
    QE: "disabled",
    Dz: "expanded",
    ir: "invalid",
    Xz: "label",
    NF: "labelledby",
    OF: "level",
    eO: "orientation",
    kO: "posinset",
    KG: "rowcount",
    sh: "selected",
    tO: "setsize",
    gH: "valuemax",
    hH: "valuemin"
};
g.g.$.me = function(a, c) {
    a.setAttribute(g.g.$.JG, c)
};
g.g.$.lc = function(a, c, d) {
    Array.isArray(d) && (d = d.join(" "));
    a.setAttribute(g.g.$.kE + c, d)
};
g.g.la = {
    LO: 0,
    kN: 3,
    nE: 8,
    TG: 9,
    uN: 12,
    Ln: 13,
    wr: 16,
    dk: 17,
    Ol: 18,
    gO: 19,
    OL: 20,
    Cz: 27,
    oA: 32,
    qG: 33,
    pG: 34,
    YE: 35,
    zF: 36,
    Nb: 37,
    Ck: 38,
    Qc: 39,
    Ul: 40,
    jO: 43,
    lO: 44,
    XM: 45,
    gk: 46,
    ZERO: 48,
    ONE: 49,
    FO: 50,
    zO: 51,
    zM: 52,
    yM: 53,
    wO: 54,
    uO: 55,
    eM: 56,
    sN: 57,
    wM: 59,
    uM: 61,
    tM: 173,
    vM: 163,
    mO: 63,
    HL: 64,
    DL: 65,
    IL: 66,
    au: 67,
    UL: 68,
    E: 69,
    gM: 70,
    oc: 71,
    AM: 72,
    CM: 73,
    eN: 74,
    fN: 75,
    gN: 76,
    jN: 77,
    rN: 78,
    KN: 79,
    fO: 80,
    Q: 81,
    nO: 82,
    qO: 83,
    yO: 84,
    GO: 85,
    $u: 86,
    IO: 87,
    dv: 88,
    mH: 89,
    om: 90,
    cm: 91,
    MO: 92,
    TL: 93,
    JN: 96,
    CN: 97,
    IN: 98,
    HN: 99,
    yN: 100,
    xN: 101,
    GN: 102,
    FN: 103,
    wN: 104,
    BN: 105,
    AN: 106,
    EN: 107,
    zN: 109,
    DN: 110,
    vN: 111,
    hM: 112,
    lM: 113,
    mM: 114,
    nM: 115,
    oM: 116,
    pM: 117,
    qM: 118,
    rM: 119,
    sM: 120,
    iM: 121,
    jM: 122,
    kM: 123,
    tN: 144,
    rO: 145,
    xM: 166,
    hN: 183,
    sO: 186,
    VL: 189,
    fM: 187,
    SL: 188,
    hO: 190,
    xO: 191,
    GL: 192,
    AO: 192,
    vO: 222,
    MN: 219,
    JL: 220,
    RL: 221,
    KO: 224,
    lN: 224,
    mN: 91,
    nN: 93,
    JO: 229,
    HO: 252,
    iO: 255
};
g.nc = function(a, c, d) {
    g.nc.v.constructor.call(this, a, c, d);
    this.$h = this.ot = this.nt = this.Ye = this.ft = this.oj = this.ci = null
};
g.g.object.X(g.nc, g.hd);
g.nc.ma = function(a) {
    return new g.nc(a.colour, void 0, a)
};
b = g.nc.prototype;
b.wk = !0;
b.yi = "default";
b.Sg = !1;
b.Iv = null;
b.PD = null;
b.Bo = 0;
b.cd = function(a) {
    g.nc.v.cd.call(this, a);
    a.colourOptions && (this.Iv = a.colourOptions, this.PD = a.colourTitles);
    a.columns && (this.Bo = a.columns)
};
b.Rh = function() {
    this.Jc = new g.g.ad(this.V().iF, this.V().hF);
    this.V().Gz ? this.Vr = this.H.Na() : (Pb(this), this.xb.style.fillOpacity = "1")
};
b.jc = function() {
    this.V().Gz ? (this.H.sb.Gb.setAttribute("fill", this.getValue()), this.H.sb.Gb.setAttribute("stroke", "#fff")) : this.xb && (this.xb.style.fill = this.getValue())
};
b.Kh = function(a) {
    return "string" != typeof a ? null : g.g.rb.parse(a)
};
b.Qe = function(a) {
    this.ib = a;
    this.xb ? this.xb.style.fill = a : this.H && this.H.ua && (this.H.sb.Gb.setAttribute("fill", a), this.H.sb.Gb.setAttribute("stroke", "#fff"))
};
b.Hd = function() {
    var a = this.ib;
    /^#(.)\1(.)\2(.)\3$/.test(a) && (a = "#" + a[1] + a[3] + a[5]);
    return a
};
g.nc.Qq = "#ffffff #cccccc #c0c0c0 #999999 #666666 #333333 #000000 #ffcccc #ff6666 #ff0000 #cc0000 #990000 #660000 #330000 #ffcc99 #ff9966 #ff9900 #ff6600 #cc6600 #993300 #663300 #ffff99 #ffff66 #ffcc66 #ffcc33 #cc9933 #996633 #663333 #ffffcc #ffff33 #ffff00 #ffcc00 #999900 #666600 #333300 #99ff99 #66ff99 #33ff33 #33cc00 #009900 #006600 #003300 #99ffff #33ffff #66cccc #00cccc #339999 #336666 #003333 #ccffff #66ffff #33ccff #3366ff #3333ff #000099 #000066 #ccccff #9999ff #6666cc #6633ff #6600cc #333399 #330099 #ffccff #ff99ff #cc66cc #cc33cc #993399 #663366 #330033".split(" ");
g.nc.prototype.fk = g.nc.Qq[0];
g.nc.aH = [];
g.nc.Rq = 7;
b = g.nc.prototype;
b.setColumns = function(a) {
    this.Bo = a;
    return this
};
b.If = function() {
    this.pw();
    g.G.OB().appendChild(this.ci);
    g.G.ED(this, this.qw.bind(this));
    this.ci.focus({
        preventScroll: !0
    })
};
b.Lx = function(a) {
    a = (a = a.target) && a.label;
    null !== a && (this.setValue(a), g.G.Qm(this))
};
b.Rx = function(a) {
    var c = !1;
    if (a.keyCode === g.g.la.Ck) Xb(this, 0, -1), c = !0;
    else if (a.keyCode === g.g.la.Ul) Xb(this, 0, 1), c = !0;
    else if (a.keyCode === g.g.la.Nb) Xb(this, -1, 0), c = !0;
    else if (a.keyCode === g.g.la.Qc) Xb(this, 1, 0), c = !0;
    else if (a.keyCode === g.g.la.Ln) {
        if (c = Yb(this)) c = c && c.label, null !== c && this.setValue(c);
        g.G.nj();
        c = !0
    }
    c && a.stopPropagation()
};

function Xb(a, c, d) {
    var e = a.Iv || g.nc.Qq,
        f = a.Bo || g.nc.Rq,
        h = a.oj % f,
        k = Math.floor(a.oj / f);
    h += c;
    k += d;
    0 > c ? 0 > h && 0 < k ? (h = f - 1, k--) : 0 > h && (h = 0) : 0 < c ? h > f - 1 && k < Math.floor(e.length / f) - 1 ? (h = 0, k++) : h > f - 1 && h-- : 0 > d ? 0 > k && (k = 0) : 0 < d && k > Math.floor(e.length / f) - 1 && (k = Math.floor(e.length / f) - 1);
    Zb(a, a.ci.childNodes[k].childNodes[h], k * f + h)
}
b.qt = function(a) {
    var c = (a = a.target) && Number(a.getAttribute("data-index"));
    null !== c && c !== this.oj && Zb(this, a, c)
};
b.bK = function() {
    this.ci.focus({
        preventScroll: !0
    })
};
b.cK = function() {
    this.ci.blur();
    var a = Yb(this);
    a && g.g.o.Zb(a, "blocklyColourHighlighted")
};

function Yb(a) {
    var c = a.Bo || g.nc.Rq,
        d = a.ci.childNodes[Math.floor(a.oj / c)];
    return d ? d.childNodes[a.oj % c] : null
}

function Zb(a, c, d) {
    var e = Yb(a);
    e && g.g.o.Zb(e, "blocklyColourHighlighted");
    g.g.o.Ga(c, "blocklyColourHighlighted");
    a.oj = d;
    g.g.$.lc(a.ci, g.g.$.State.Dq, c.getAttribute("id"))
}
b.pw = function() {
    var a = this.Bo || g.nc.Rq,
        c = this.Iv || g.nc.Qq,
        d = this.PD || g.nc.aH,
        e = this.getValue(),
        f = document.createElement("table");
    f.className = "blocklyColourTable";
    f.tabIndex = 0;
    f.dir = "ltr";
    g.g.$.me(f, g.g.$.Sf.uF);
    g.g.$.lc(f, g.g.$.State.Dz, !0);
    g.g.$.lc(f, g.g.$.State.KG, Math.floor(c.length / a));
    g.g.$.lc(f, g.g.$.State.uE, a);
    for (var h, k = 0; k < c.length; k++) {
        0 == k % a && (h = document.createElement("tr"), g.g.$.me(h, g.g.$.Sf.rr), f.appendChild(h));
        var l = document.createElement("td");
        h.appendChild(l);
        l.label = c[k];
        l.title =
            d[k] || c[k];
        l.id = g.g.nk.zs();
        l.setAttribute("data-index", k);
        g.g.$.me(l, g.g.$.Sf.vF);
        g.g.$.lc(l, g.g.$.State.Xz, c[k]);
        g.g.$.lc(l, g.g.$.State.sh, c[k] == e);
        l.style.backgroundColor = c[k];
        c[k] == e && (l.className = "blocklyColourSelected", this.oj = k)
    }
    this.ft = g.N.ta(f, "click", this, this.Lx, !0);
    this.Ye = g.N.ta(f, "mousemove", this, this.qt, !0);
    this.nt = g.N.ta(f, "mouseenter", this, this.bK, !0);
    this.ot = g.N.ta(f, "mouseleave", this, this.cK, !0);
    this.$h = g.N.ta(f, "keydown", this, this.Rx);
    this.ci = f
};
b.qw = function() {
    this.ft && (g.N.Pa(this.ft), this.ft = null);
    this.Ye && (g.N.Pa(this.Ye), this.Ye = null);
    this.nt && (g.N.Pa(this.nt), this.nt = null);
    this.ot && (g.N.Pa(this.ot), this.ot = null);
    this.$h && (g.N.Pa(this.$h), this.$h = null);
    this.oj = this.ci = null
};
g.Oc.register([".blocklyColourTable {", "border-collapse: collapse;", "display: block;", "outline: none;", "padding: 1px;", "}", ".blocklyColourTable>tr>td {", "border: .5px solid #888;", "box-sizing: border-box;", "cursor: pointer;", "display: inline-block;", "height: 20px;", "padding: 0;", "width: 20px;", "}", ".blocklyColourTable>tr>td.blocklyColourHighlighted {", "border-color: #eee;", "box-shadow: 2px 2px 7px 2px rgba(0,0,0,.3);", "position: relative;", "}", ".blocklyColourSelected, .blocklyColourSelected:hover {",
    "border-color: #eee !important;", "outline: 1px solid #333;", "position: relative;", "}"
]);
g.ve.register("field_colour", g.nc);
g.lk = function(a, c, d, e) {
    this.s = a;
    this.Pt = c;
    this.ki = d.text;
    this.rl = new g.g.ba(0, 0);
    this.Uh = e;
    this.Qr = d.callbackKey || d.callbackkey;
    this.rB = d["web-class"] || null;
    this.rd = null;
    this.info = d
};
g.lk.$F = 5;
g.lk.aG = 2;
b = g.lk.prototype;
b.width = 0;
b.height = 0;
b.eb = function() {
    var a = this.Uh ? "blocklyFlyoutLabel" : "blocklyFlyoutButton";
    this.rB && (a += " " + this.rB);
    this.P = g.g.o.K(g.g.D.oc, {
        "class": a
    }, this.s.Bb);
    if (!this.Uh) var c = g.g.o.K(g.g.D.Hb, {
        "class": "blocklyFlyoutButtonShadow",
        rx: 4,
        ry: 4,
        x: 1,
        y: 1
    }, this.P);
    a = g.g.o.K(g.g.D.Hb, {
        "class": this.Uh ? "blocklyFlyoutLabelBackground" : "blocklyFlyoutButtonBackground",
        rx: 4,
        ry: 4
    }, this.P);
    var d = g.g.o.K(g.g.D.io, {
            "class": this.Uh ? "blocklyFlyoutLabelText" : "blocklyText",
            x: 0,
            y: 0,
            "text-anchor": "middle"
        }, this.P),
        e = g.g.Ic(this.ki);
    this.s.M &&
        (e += "\u200f");
    d.textContent = e;
    this.Uh && (this.Ty = d, this.s.Cc.subscribe(this.Ty, "flyoutForegroundColour", "fill"));
    var f = g.g.style.getComputedStyle(d, "fontSize"),
        h = g.g.style.getComputedStyle(d, "fontWeight"),
        k = g.g.style.getComputedStyle(d, "fontFamily");
    this.width = g.g.o.SB(d, f, h, k);
    e = g.g.o.OC(e, f, h, k);
    this.height = e.height;
    this.Uh || (this.width += 2 * g.lk.$F, this.height += 2 * g.lk.aG, c.setAttribute("width", this.width), c.setAttribute("height", this.height));
    a.setAttribute("width", this.width);
    a.setAttribute("height",
        this.height);
    d.setAttribute("x", this.width / 2);
    d.setAttribute("y", this.height / 2 - e.height / 2 + e.pf);
    $b(this);
    this.rd = g.N.ta(this.P, "mouseup", this, this.hK);
    return this.P
};
b.show = function() {
    $b(this);
    this.P.setAttribute("display", "block")
};

function $b(a) {
    a.P.setAttribute("transform", "translate(" + a.rl.x + "," + a.rl.y + ")")
}
b.moveTo = function(a, c) {
    this.rl.x = a;
    this.rl.y = c;
    $b(this)
};
b.J = function() {
    this.rd && g.N.Pa(this.rd);
    this.P && g.g.o.removeNode(this.P);
    this.Ty && this.s.Cc.unsubscribe(this.Ty)
};
b.hK = function(a) {
    (a = this.Pt.Mh(a)) && a.cancel();
    this.Uh && this.Qr ? console.warn("Labels should not have callbacks. Label text: " + this.ki) : this.Uh || this.Qr && ac(this.Pt, this.Qr) ? this.Uh || ac(this.Pt, this.Qr)(this) : console.warn("Buttons should have callbacks. Button text: " + this.ki)
};
g.Oc.register(".blocklyFlyoutButton {,fill: #888;,cursor: default;,},.blocklyFlyoutButtonShadow {,fill: #666;,},.blocklyFlyoutButton:hover {,fill: #aaa;,},.blocklyFlyoutLabel {,cursor: default;,},.blocklyFlyoutLabelBackground {,opacity: 0;,}".split(","));
g.W = Object.create(null);
g.ga = {};
g.ga.Cn = Object.create(null);
g.ga.register = function(a, c) {
    if ("string" != typeof a || "" == a.trim()) throw Error('Error: Invalid extension name "' + a + '"');
    if (g.ga.Cn[a]) throw Error('Error: Extension "' + a + '" is already registered.');
    if ("function" != typeof c) throw Error('Error: Extension "' + a + '" must be a function');
    g.ga.Cn[a] = c
};
g.ga.zt = function(a, c) {
    if (!c || "object" != typeof c) throw Error('Error: Mixin "' + a + '" must be a object');
    g.ga.register(a, function() {
        this.Kd(c)
    })
};
g.ga.Np = function(a, c, d, e) {
    var f = 'Error when registering mutator "' + a + '": ';
    g.ga.YA(f, c.yb, "domToMutation");
    g.ga.YA(f, c.Wa, "mutationToDom");
    var h = g.ga.$A(c, f);
    if (d && "function" != typeof d) throw Error('Extension "' + a + '" is not a function');
    g.ga.register(a, function() {
        if (h) {
            if (!g.wc) throw Error(f + "Missing require for Blockly.Mutator");
            this.mn(new g.wc(e || []))
        }
        this.Kd(c);
        d && d.apply(this)
    })
};
g.ga.unregister = function(a) {
    g.ga.Cn[a] ? delete g.ga.Cn[a] : console.warn('No extension mapping for name "' + a + '" found to unregister')
};
g.ga.apply = function(a, c, d) {
    var e = g.ga.Cn[a];
    if ("function" != typeof e) throw Error('Error: Extension "' + a + '" not found.');
    if (d) g.ga.OH(a, c);
    else var f = g.ga.Iw(c);
    e.apply(c);
    if (d) g.ga.MH('Error after applying mutator "' + a + '": ', c);
    else if (!g.ga.OJ(f, c)) throw Error('Error when applying extension "' + a + '": mutation properties changed when applying a non-mutator extension.');
};
g.ga.YA = function(a, c, d) {
    if (!c) throw Error(a + 'missing required property "' + d + '"');
    if ("function" != typeof c) throw Error(a + '" required property "' + d + '" must be a function');
};
g.ga.OH = function(a, c) {
    if (g.ga.Iw(c).length) throw Error('Error: tried to apply mutation "' + a + '" to a block that already has mutator functions.  Block id: ' + c.id);
};
g.ga.$A = function(a, c) {
    var d = void 0 !== a.Eg,
        e = void 0 !== a.Ig;
    if (d && e) {
        if ("function" != typeof a.Eg) throw Error(c + "compose must be a function.");
        if ("function" != typeof a.Ig) throw Error(c + "decompose must be a function.");
        return !0
    }
    if (!d && !e) return !1;
    throw Error(c + 'Must have both or neither of "compose" and "decompose"');
};
g.ga.MH = function(a, c) {
    if ("function" != typeof c.yb) throw Error(a + 'Applying a mutator didn\'t add "domToMutation"');
    if ("function" != typeof c.Wa) throw Error(a + 'Applying a mutator didn\'t add "mutationToDom"');
    g.ga.$A(c, a)
};
g.ga.Iw = function(a) {
    var c = [];
    void 0 !== a.yb && c.push(a.yb);
    void 0 !== a.Wa && c.push(a.Wa);
    void 0 !== a.Eg && c.push(a.Eg);
    void 0 !== a.Ig && c.push(a.Ig);
    return c
};
g.ga.OJ = function(a, c) {
    c = g.ga.Iw(c);
    if (c.length != a.length) return !1;
    for (var d = 0; d < c.length; d++)
        if (a[d] != c[d]) return !1;
    return !0
};
g.ga.Nr = function(a, c) {
    var d = [];
    "object" == typeof document && g.g.AD(function() {
        for (var e in c) g.g.ZA(c[e])
    });
    return function() {
        this.type && -1 == d.indexOf(this.type) && (g.ga.NH(this, a, c), d.push(this.type));
        this.Ra(function() {
            var e = String(B(this, a)),
                f = c[e];
            null == f ? -1 == d.indexOf(this.type) && (e = "No tooltip mapping for value " + e + " of field " + a, null != this.type && (e += " of block type " + this.type), console.warn(e + ".")) : f = g.g.Ic(f);
            return f
        }.bind(this))
    }
};
g.ga.NH = function(a, c, d) {
    var e = x(a, c);
    if (!bc(e)) {
        e = e.getOptions();
        for (var f = 0; f < e.length; ++f) {
            var h = e[f][1];
            null == d[h] && console.warn("No tooltip mapping for value " + h + " of field " + c + " of block type " + a.type)
        }
    }
};
g.ga.Or = function(a) {
    "object" == typeof document && g.g.AD(function() {
        g.g.ZA(a)
    });
    return function() {
        this.Ra(function() {
            var c = x(this, "VAR");
            return g.g.Ic(a).replace("%1", c ? c.Hd() : "")
        }.bind(this))
    }
};
g.ga.AI = function() {
    this.lL = this.Kf;
    this.Ra(function() {
        var a = this.getParent();
        return a && ob(a) && a.Kf || this.lL
    }.bind(this))
};
g.ga.register("parent_tooltip_when_inline", g.ga.AI);
g.oe = function(a, c, d) {
    this.Tr = null;
    g.oe.v.constructor.call(this, a, null, d);
    d || (this.Tr = c || null)
};
g.g.object.X(g.oe, g.hd);
g.oe.prototype.fk = "";
g.oe.ma = function(a) {
    var c = g.g.Ic(a.text);
    return new g.oe(c, void 0, a)
};
g.oe.prototype.Kn = !1;
g.oe.prototype.cd = function(a) {
    g.oe.v.cd.call(this, a);
    this.Tr = a["class"]
};
g.oe.prototype.Rh = function() {
    Qb(this);
    this.Tr && g.g.o.Ga(this.Kc, this.Tr)
};
g.oe.prototype.Kh = function(a) {
    return null === a || void 0 === a ? null : String(a)
};
g.ve.register("field_label", g.oe);
g.Vz = function(a, c, d, e) {
    if (a != g.ob.pg && !c) throw Error("Value inputs and statement inputs must have non-empty name.");
    this.type = a;
    this.name = c;
    this.H = d;
    this.connection = e;
    this.fb = []
};
b = g.Vz.prototype;
b.align = g.Ob.Nf.Nb;
b.Xj = !0;
b.ea = function() {
    return this.H
};

function E(a, c, d) {
    cc(a, a.fb.length, c, d);
    return a
}

function cc(a, c, d, e) {
    if (0 > c || c > a.fb.length) throw Error("index " + c + " out of bounds.");
    if (!(d || "" == d && e)) return c;
    "string" == typeof d && (d = g.ve.ma({
        type: "field_label",
        text: d
    }));
    d.Iy(a.H);
    a.H.ua && (d.T(), d.jc());
    d.name = e;
    d.ub(a.isVisible());
    d.ny && (c = cc(a, c, d.ny));
    a.fb.splice(c, 0, d);
    ++c;
    d.Sy && (c = cc(a, c, d.Sy));
    a.H.ua && (a.H = a.H, a.H.Ja(), a.H.bc());
    return c
}
b.isVisible = function() {
    return this.Xj
};
b.ub = function(a) {
    if (this.Xj != a) {
        this.Xj = a;
        for (var c = 0, d; d = this.fb[c]; c++) d.ub(a);
        if (this.connection) {
            this.connection = this.connection;
            if (a) dc(this.connection);
            else if (c = this.connection, ec(c, !1), c.va)
                for (c = p(c.ra(), !1), d = 0; d < c.length; d++) {
                    for (var e = c[d], f = e.Yf(!0), h = 0; h < f.length; h++) ec(f[h], !1);
                    e = pb(e);
                    for (h = 0; h < e.length; h++) e[h].ub(!1)
                }
            if (c = this.connection.ra()) c.Na().style.display = a ? "block" : "none"
        }
    }
};
b.tp = function() {
    for (var a = 0, c; c = this.fb[a]; a++) c.tp()
};
b.hb = function(a) {
    if (!this.connection) throw Error("This input does not have a connection.");
    this.connection.hb(a);
    return this
};

function fc(a, c) {
    a.align = c;
    a.H.ua && (a.H = a.H, a.H.Ja());
    return a
}
b.nn = function(a) {
    if (!this.connection) throw Error("This input does not have a connection.");
    this.connection.nn(a)
};
b.Mm = function() {
    if (!this.connection) throw Error("This input does not have a connection.");
    return this.connection.Mm()
};
b.T = function() {
    if (this.H.u.ua)
        for (var a = 0; a < this.fb.length; a++) this.fb[a].T()
};
b.J = function() {
    for (var a = 0, c; c = this.fb[a]; a++) c.J();
    this.connection && this.connection.J();
    this.H = null
};
g.Pl = function(a, c, d) {
    if (g.Generator && "undefined" != typeof g.Generator.prototype[c]) throw Error('Block prototypeName "' + c + '" conflicts with Blockly.Generator members.');
    this.id = d && !a.Fd(d) ? d : g.g.Mg();
    a.rv[this.id] = this;
    this.qa = this.aa = this.R = null;
    this.Y = [];
    this.Sh = void 0;
    this.disabled = !1;
    this.Kf = "";
    this.contextMenu = !0;
    this.Yg = null;
    this.Ch = [];
    this.EB = this.RC = this.Uv = !0;
    this.Ek = this.Sa = !1;
    this.Zi = null;
    this.Le = {
        text: null,
        ky: !1,
        size: new g.g.ad(160, 80)
    };
    this.gE = new g.g.ba(0, 0);
    this.u = a;
    this.Yb = a.ag;
    this.M =
        a.M;
    this.Um = !1;
    this.Pg = void 0;
    this.ua = null;
    if (c) {
        this.type = c;
        d = g.W[c];
        if (!d || "object" != typeof d) throw TypeError("Unknown block type: " + c);
        g.g.object.Kd(this, d)
    }
    a.Ir(this);
    a.oi[this.type] || (a.oi[this.type] = []);
    a.oi[this.type].push(this);
    (a = g.h.tc()) || g.h.oa(!0);
    c = g.h.ab;
    try {
        "function" == typeof this.T && (g.h.ab = !1, this.T(), g.h.ab = c), g.h.isEnabled() && g.h.Ia(new(g.h.get(g.h.si))(this))
    } finally {
        a || g.h.oa(!1), g.h.ab = c
    }
    this.pJ = this.Sh;
    if ("function" == typeof this.onchange) {
        if ((a = this.onchange) && "function" !=
            typeof a) throw Error("onchange must be a function.");
        this.Dp && Ra(this.u, this.Dp);
        if (this.onchange = a) this.Dp = a.bind(this), C(this.u, this.Dp)
    }
};
g.Pl.Pq = g.Ob.Pq;
g.Pl.Oq = g.Ob.Oq;
b = g.Pl.prototype;
b.data = null;
b.uf = !1;
b.ld = "#000000";
b.Dl = "";
b.J = function(a) {
    if (this.u) {
        this.Dp && Ra(this.u, this.Dp);
        y(this, a);
        g.h.isEnabled() && g.h.Ia(new(g.h.get(g.h.Hq))(this));
        g.h.disable();
        try {
            if (this.u) {
                this.u.At(this);
                var c = this.u;
                c.oi[this.type].splice(c.oi[this.type].indexOf(this), 1);
                c.oi[this.type].length || delete c.oi[this.type];
                delete this.u.rv[this.id];
                this.u = null
            }
            g.selected == this && (g.selected = null);
            for (var d = this.Ch.length - 1; 0 <= d; d--) this.Ch[d].J(!1);
            d = 0;
            for (var e; e = this.Y[d]; d++) e.J();
            this.Y.length = 0;
            var f = this.Yf(!0);
            d = 0;
            for (var h; h = f[d]; d++) h.J()
        } finally {
            g.h.enable(),
                this.uf = !0
        }
    }
};
b.Vk = function() {
    for (var a = 0, c; c = this.Y[a]; a++)
        for (var d = 0, e; e = c.fb[d]; d++) e.Vk && e.Vk()
};

function y(a, c) {
    if (a.R) {
        var d = null;
        a.R.isConnected() && (d = a.R.va, a.R.disconnect());
        if (d && c) {
            a: {
                c = null;
                for (var e = 0; e < a.Y.length; e++) {
                    var f = a.Y[e].connection;
                    if (f && f.type == g.pa.$b && f.va) {
                        if (c) {
                            c = null;
                            break a
                        }
                        c = f
                    }
                }
            }
            c && c.isConnected() && !c.ra().Sa && (c = c.va, c.disconnect(), Ea(a.u.Fh, c, d, !1) ? d.connect(c) : c.Ox(d))
        }
    } else a.qa && (d = null, a.qa.isConnected() && (d = a.qa.va, a.qa.disconnect()), e = r(a), c && e && !e.Sa && (c = a.aa.va, c.disconnect(), d && Ea(a.u.Fh, d, c, !1) && d.connect(c)))
}
b.Yf = function() {
    var a = [];
    this.R && a.push(this.R);
    this.qa && a.push(this.qa);
    this.aa && a.push(this.aa);
    for (var c = 0, d; d = this.Y[c]; c++) d.connection && a.push(d.connection);
    return a
};
b.Rs = function(a) {
    for (var c = this.aa; c;) {
        var d = c.ra();
        if (!d || a && d.Sa) return c;
        c = d.aa
    }
    return null
};
b.bc = function() {};
b.getParent = function() {
    return this.Yg
};

function Ca(a, c) {
    for (var d = 0, e; e = a.Y[d]; d++)
        if (e.connection && e.connection.ra() == c) return e;
    return null
}

function gc(a) {
    do {
        var c = a;
        a = a.getParent();
        if (!a) return null
    } while (r(a) == c);
    return a
}

function r(a) {
    return a.aa && a.aa.ra()
}
b.Zf = function() {
    var a = this;
    do {
        var c = a;
        a = c.Yg
    } while (a);
    return c
};

function wa(a, c) {
    if (!c) return a.Ch;
    c = [];
    for (var d = 0, e; e = a.Y[d]; d++) e.connection && (e = e.connection.ra()) && c.push(e);
    (a = r(a)) && c.push(a);
    return c
}
b.It = function(a) {
    if (a != this.Yg) {
        if (this.Yg) {
            g.g.uo(this.Yg.Ch, this);
            if (this.qa && this.qa.isConnected()) throw Error("Still connected to previous block.");
            if (this.R && this.R.isConnected()) throw Error("Still connected to parent block.");
            this.Yg = null
        } else this.u.At(this);
        (this.Yg = a) ? a.Ch.push(this): this.u.Ir(this)
    }
};

function p(a, c) {
    var d = [a];
    a = wa(a, c);
    for (var e, f = 0; e = a[f]; f++) d.push.apply(d, p(e, c));
    return d
}
b.Af = function() {
    return this.Uv && !this.Sa && !(this.u && this.u.options.readOnly)
};
b.Hc = function() {
    return this.RC && !this.Sa && !(this.u && this.u.options.readOnly)
};
b.Gt = function(a) {
    this.RC = a
};
b.Hy = function(a) {
    this.Sa = a
};
b.nd = function() {
    return this.Um
};
b.DD = function(a) {
    this.Um = a
};
b.ge = function() {
    return this.EB && !(this.u && this.u.options.readOnly)
};
b.Ey = function(a) {
    this.EB = a;
    a = 0;
    for (var c; c = this.Y[a]; a++)
        for (var d = 0, e; e = c.fb[d]; d++) e.pi()
};
b.Hw = function(a, c) {
    var d = this.Yf(!0);
    a = a.Yf(!0);
    if (d.length != a.length) throw Error("Connection lists did not match in length.");
    for (var e = 0; e < a.length; e++)
        if (a[e] == c) return d[e];
    return null
};
b.Ra = function(a) {
    this.Kf = a
};
b.Ew = function() {
    return this.ld
};
b.td = function(a) {
    this.ld = g.g.vt(a).fp
};
b.Fb = function(a) {
    this.Dl = a
};

function x(a, c) {
    if ("string" !== typeof c) throw TypeError("Blockly.Block.prototype.getField expects a string with the field name but received " + (void 0 === c ? "nothing" : c + " of type " + typeof c) + " instead");
    for (var d = 0, e; e = a.Y[d]; d++)
        for (var f = 0, h; h = e.fb[f]; f++)
            if (h.name === c) return h;
    return null
}
b.Ph = function() {
    for (var a = [], c = 0, d; d = this.Y[c]; c++)
        for (var e = 0, f; f = d.fb[e]; e++) f.Mp() && a.push(f.getValue());
    return a
};
b.Oh = function() {
    for (var a = [], c = 0, d; d = this.Y[c]; c++)
        for (var e = 0, f; f = d.fb[e]; e++) f.Mp() && (f = this.u.$f(f.getValue())) && a.push(f);
    return a
};
b.Tt = function(a) {
    for (var c = 0, d; d = this.Y[c]; c++)
        for (var e = 0, f; f = d.fb[e]; e++) f.Mp() && a.Oa() == f.getValue() && Ub(f)
};
b.Bt = function(a, c) {
    for (var d = 0, e; e = this.Y[d]; d++)
        for (var f = 0, h; h = e.fb[f]; f++) h.Mp() && a == h.getValue() && h.setValue(c)
};

function B(a, c) {
    return (a = x(a, c)) ? a.getValue() : null
}

function hc(a, c, d) {
    a = x(a, d);
    if (!a) throw Error('Field "' + d + '" not found.');
    a.setValue(c)
}
b.Xc = function(a, c) {
    if (a) {
        void 0 === c && (c = null);
        if (!this.qa) {
            if (this.R) throw Error("Remove output connection prior to adding previous connection.");
            this.qa = this.sp(g.pa.Ge)
        }
        this.qa.hb(c)
    } else if (this.qa) {
        if (this.qa.isConnected()) throw Error("Must disconnect previous statement before removing connection.");
        this.qa.J();
        this.qa = null
    }
};
b.Wc = function(a, c) {
    if (a) void 0 === c && (c = null), this.aa || (this.aa = this.sp(g.pa.$c)), this.aa.hb(c);
    else if (this.aa) {
        if (this.aa.isConnected()) throw Error("Must disconnect next statement before removing connection.");
        this.aa.J();
        this.aa = null
    }
};
b.Md = function(a, c) {
    if (a) {
        void 0 === c && (c = null);
        if (!this.R) {
            if (this.qa) throw Error("Remove previous connection prior to adding output connection.");
            this.R = this.sp(g.pa.qe)
        }
        this.R.hb(c)
    } else if (this.R) {
        if (this.R.isConnected()) throw Error("Must disconnect output value before removing connection.");
        this.R.J();
        this.R = null
    }
};
b.ye = function(a) {
    this.Sh != a && (g.h.Ia(new(g.h.get(g.h.lg))(this, "inline", null, this.Sh, a)), this.Sh = a)
};

function ob(a) {
    if (void 0 != a.Sh) return a.Sh;
    for (var c = 1; c < a.Y.length; c++)
        if (a.Y[c - 1].type == g.ob.pg && a.Y[c].type == g.ob.pg) return !1;
    for (c = 1; c < a.Y.length; c++)
        if (a.Y[c - 1].type == g.ob.yg && a.Y[c].type == g.ob.pg) return !0;
    return !1
}
b.isEnabled = function() {
    return !this.disabled
};
b.le = function(a) {
    this.isEnabled() != a && (g.h.Ia(new(g.h.get(g.h.lg))(this, "disabled", null, this.disabled, !a)), this.disabled = !a)
};

function ic(a) {
    for (a = gc(a); a;) {
        if (a.disabled) return !0;
        a = gc(a)
    }
    return !1
}
b.isCollapsed = function() {
    return this.Ek
};
b.Oj = function(a) {
    this.Ek != a && (g.h.Ia(new(g.h.get(g.h.lg))(this, "collapsed", null, this.Ek, a)), this.Ek = a)
};
b.toString = function(a, c) {
    function d(n) {
        var q = n.um;
        !q && n.va && (q = n.va.um);
        return !!q && (-1 != q.indexOf("Boolean") || -1 != q.indexOf("Number"))
    }

    function e() {
        k && k.cc() == l.cc() && k.Qa == l.Qa && (k = null)
    }
    var f = [];
    c = c || "?";
    var h = g.I.Ii;
    g.I.Ii = !0;
    for (var k = g.I.cj(this), l = k; k;) {
        switch (k.cc()) {
            case g.I.types.gf:
                var m = k.Qa;
                k.rj() ? d(m) && f.push("(") : f.push(c);
                break;
            case g.I.types.yd:
                m = k.Qa, m.name != g.Ob.Oq && f.push(m.Hd())
        }
        m = k;
        k = m.rj() || m.next();
        if (!k) {
            k = m.Fj();
            for (e(); k && !k.next();) k = k.Fj(), e(), k && k.cc() == g.I.types.gf &&
                d(k.Qa) && f.push(")");
            k && (k = k.next())
        }
    }
    g.I.Ii = h;
    for (c = 2; c < f.length; c++) "(" == f[c - 2] && ")" == f[c] && (f[c - 2] = f[c - 1], f.splice(c - 1, 2));
    f = f.reduce(function(n, q) {
        return n + ("(" == n.substr(-1) || ")" == q ? "" : " ") + q
    }, "");
    f = f.trim() || "???";
    a && f.length > a && (f = f.substring(0, a - 3) + "...");
    return f
};

function F(a, c) {
    return a.to(g.ob.yg, c)
}

function jc(a, c) {
    return a.to(g.ob.lf, c)
}

function G(a, c) {
    return a.to(g.ob.pg, c || "")
}

function kc(a, c) {
    var d = c.type ? 'Block "' + c.type + '": ' : "";
    if (c.output && c.previousStatement) throw Error(d + "Must not have both an output and a previousStatement.");
    c.style && c.style.Pg && (a.Pg = c.style.Pg, c.style = null);
    if (c.style && c.colour) throw Error(d + "Must not have both a colour and a style.");
    if (c.style) {
        var e = c.style;
        try {
            a.Fb(e)
        } catch (Wb) {
            console.warn(d + "Style does not exist: ", e)
        }
    } else if ("colour" in c)
        if (void 0 === c.colour) console.warn(d + "Undefined colour value.");
        else {
            e = c.colour;
            try {
                a.td(e)
            } catch (Wb) {
                console.warn(d +
                    "Illegal colour value: ", e)
            }
        } for (e = 0; void 0 !== c["message" + e];) {
        var f = a,
            h = c["args" + e] || [],
            k = c["lastDummyAlign" + e],
            l = d,
            m = g.g.kL(c["message" + e]),
            n = f;
        var q = m;
        for (var v = h.length, A = [], S = 0, U = 0; U < q.length; U++) {
            var T = q[U];
            if ("number" == typeof T) {
                if (1 > T || T > v) throw Error('Block "' + n.type + '": Message index %' + T + " out of range.");
                if (A[T]) throw Error('Block "' + n.type + '": Message index %' + T + " duplicated.");
                A[T] = !0;
                S++
            }
        }
        if (S != v) throw Error('Block "' + n.type + '": Message does not reference all ' + v + " arg(s).");
        n = h;
        h = [];
        for (q = 0; q < m.length; q++) {
            v = m[q];
            "number" == typeof v && (v = n[v - 1]);
            if ("string" == typeof v && (v = lc(v), !v)) continue;
            h.push(v)
        }(m = h.length) && !mc(h[m - 1].type) && (m = {
            type: "input_dummy"
        }, k && (m.align = k), h.push(m));
        k = h;
        h = [];
        for (m = 0; q = k[m]; m++)
            if (mc(q.type)) {
                n = f;
                v = l;
                S = {
                    LEFT: g.Ob.Nf.Nb,
                    RIGHT: g.Ob.Nf.Qc,
                    CENTRE: g.Ob.Nf.Mq,
                    CENTER: g.Ob.Nf.Mq
                };
                A = null;
                switch (q.type) {
                    case "input_value":
                        A = F(n, q.name);
                        break;
                    case "input_statement":
                        A = jc(n, q.name);
                        break;
                    case "input_dummy":
                        A = G(n, q.name)
                }
                A ? (q.check && A.hb(q.check), q.align && (n =
                    S[q.align.toUpperCase()], void 0 === n ? console.warn(v + "Illegal align value: ", q.align) : fc(A, n)), n = A) : n = null;
                if (n) {
                    for (q = 0; v = h[q]; q++) E(n, v[0], v[1]);
                    h.length = 0
                }
            } else(n = nc(f, q)) && h.push([n, q.name]);
        e++
    }
    void 0 !== c.inputsInline && a.ye(c.inputsInline);
    void 0 !== c.output && a.Md(!0, c.output);
    void 0 !== c.previousStatement && a.Xc(!0, c.previousStatement);
    void 0 !== c.nextStatement && a.Wc(!0, c.nextStatement);
    void 0 !== c.tooltip && (e = c.tooltip, e = g.g.Ic(e), a.Ra(e));
    void 0 !== c.enableContextMenu && (e = c.enableContextMenu, a.contextMenu = !!e);
    void 0 !== c.helpUrl && (e = c.helpUrl, e = g.g.Ic(e), a.dc = e);
    "string" == typeof c.extensions && (console.warn(d + "JSON attribute 'extensions' should be an array of strings. Found raw string in JSON for '" + c.type + "' block."), c.extensions = [c.extensions]);
    void 0 !== c.mutator && g.ga.apply(c.mutator, a, !0);
    c = c.extensions;
    if (Array.isArray(c))
        for (d = 0; d < c.length; ++d) g.ga.apply(c[d], a, !1)
}
b.Kd = function(a, c) {
    if (void 0 !== c && "boolean" != typeof c) throw Error("opt_disableCheck must be a boolean if provided");
    if (!c) {
        c = [];
        for (var d in a) void 0 !== this[d] && c.push(d);
        if (c.length) throw Error("Mixin will overwrite block members: " + JSON.stringify(c));
    }
    g.g.object.Kd(this, a)
};

function nc(a, c) {
    var d = g.ve.ma(c);
    return !d && c.alt ? "string" == typeof c.alt ? (c = lc(c.alt)) ? nc(a, c) : null : nc(a, c.alt) : d
}

function mc(a) {
    return "input_value" == a || "input_statement" == a || "input_dummy" == a
}

function lc(a) {
    return (a = a.trim()) ? {
        type: "field_label",
        text: a
    } : null
}
b.to = function(a, c) {
    var d = null;
    if (a == g.ob.yg || a == g.ob.lf) d = this.sp(a);
    a = new g.Vz(a, c, this, d);
    this.Y.push(a);
    return a
};

function oc(a, c, d) {
    if (c != d) {
        for (var e = -1, f = d ? -1 : a.Y.length, h = 0, k; k = a.Y[h]; h++)
            if (k.name == c) {
                if (e = h, -1 != f) break
            } else if (d && k.name == d && (f = h, -1 != e)) break;
        if (-1 == e) throw Error('Named input "' + c + '" not found.');
        if (-1 == f) throw Error('Reference input "' + d + '" not found.');
        a.Dx(e, f)
    }
}
b.Dx = function(a, c) {
    if (a == c) throw Error("Can't move input to itself.");
    if (a >= this.Y.length) throw RangeError("Input index " + a + " out of bounds.");
    if (c > this.Y.length) throw RangeError("Reference input " + c + " out of bounds.");
    var d = this.Y[a];
    this.Y.splice(a, 1);
    a < c && c--;
    this.Y.splice(c, 0, d)
};
b.Db = function(a, c) {
    for (var d = 0, e; e = this.Y[d]; d++)
        if (e.name == a) return e.J(), this.Y.splice(d, 1), !0;
    if (c) return !1;
    throw Error("Input not found: " + a);
};

function w(a, c) {
    for (var d = 0, e; e = a.Y[d]; d++)
        if (e.name == c) return e;
    return null
}

function H(a, c) {
    return (a = w(a, c)) && a.connection && a.connection.ra()
}
b.Pj = function(a) {
    this.Le.text != a && (g.h.Ia(new(g.h.get(g.h.lg))(this, "comment", null, this.Le.text, a)), this.Zi = this.Le.text = a)
};
b.on = function() {};
b.mn = function() {};
b.kb = function() {
    return this.gE
};
b.moveBy = function(a, c) {
    if (this.Yg) throw Error("Block has parent.");
    var d = new(g.h.get(g.h.ui))(this);
    this.gE.translate(a, c);
    d.wl();
    g.h.Ia(d)
};
b.sp = function(a) {
    return new g.Ka(this, a)
};

function Fa(a) {
    var c = a.type ? '"' + a.type + '" block' : "Block";
    a.id && (c += ' (id="' + a.id + '")');
    return c
};
g.m = {};
g.m.YM = function() {};
g.yu = function() {
    this.dg = [];
    this.zl = this.Jb = this.kt = this.at = this.$s = this.Dh = this.bt = this.Sk = this.Yx = null
};
b = g.yu.prototype;
b.Ja = function(a) {
    var c = document.createElement("div");
    c.className = "blocklyMenu goog-menu blocklyNonSelectable";
    c.tabIndex = 0;
    this.zl && g.g.$.me(c, this.zl);
    this.Jb = c;
    for (var d = 0, e; e = this.dg[d]; d++) c.appendChild(e.eb());
    this.bt = g.N.ta(c, "mouseover", this, this.eJ, !0);
    this.Dh = g.N.ta(c, "click", this, this.$I, !0);
    this.$s = g.N.ta(c, "mouseenter", this, this.cJ, !0);
    this.at = g.N.ta(c, "mouseleave", this, this.dJ, !0);
    this.kt = g.N.ta(c, "keydown", this, this.aJ);
    a.appendChild(c)
};
b.focus = function() {
    var a = this.Jb;
    a && (a.focus({
        preventScroll: !0
    }), g.g.o.Ga(a, "blocklyFocused"))
};
b.me = function(a) {
    this.zl = a
};
b.J = function() {
    this.bt && (g.N.Pa(this.bt), this.bt = null);
    this.Dh && (g.N.Pa(this.Dh), this.Dh = null);
    this.$s && (g.N.Pa(this.$s), this.$s = null);
    this.at && (g.N.Pa(this.at), this.at = null);
    this.kt && (g.N.Pa(this.kt), this.kt = null);
    for (var a = 0, c; c = this.dg[a]; a++) c.J();
    this.Jb = null
};

function pc(a, c) {
    for (var d = a.Jb; c && c != d;) {
        if (g.g.o.Pw(c, "blocklyMenuItem"))
            for (var e = 0, f; f = a.dg[e]; e++)
                if (f.Jb == c) return f;
        c = c.parentElement
    }
    return null
}
b.fg = function(a) {
    var c = this.Sk;
    c && (c.fg(!1), this.Sk = null);
    a && (a.fg(!0), this.Sk = a, c = this.Jb, g.g.style.SK(a.Jb, c), g.g.$.lc(c, g.g.$.State.Dq, a.Oa()))
};

function qc(a, c, d) {
    c += d;
    for (var e; e = a.dg[c];) {
        if (e.isEnabled()) {
            a.fg(e);
            break
        }
        c += d
    }
}
b.eJ = function(a) {
    (a = pc(this, a.target)) && (a.isEnabled() ? this.Sk != a && this.fg(a) : this.fg(null))
};
b.$I = function(a) {
    var c = this.Yx;
    this.Yx = null;
    c && "number" == typeof a.clientX && 1 > g.g.ba.ew(c, new g.g.ba(a.clientX, a.clientY)) || (a = pc(this, a.target)) && a.isEnabled() && a.so && a.so(a)
};
b.cJ = function() {
    this.focus()
};
b.dJ = function() {
    if (this.Jb) {
        var a = this.Jb;
        a && (a.blur(), g.g.o.Zb(a, "blocklyFocused"));
        this.fg(null)
    }
};
b.aJ = function(a) {
    if (this.dg.length && !(a.shiftKey || a.ctrlKey || a.metaKey || a.altKey)) {
        var c = this.Sk;
        switch (a.keyCode) {
            case g.g.la.Ln:
            case g.g.la.oA:
                c && c.isEnabled() && c.so && c.so(c);
                break;
            case g.g.la.Ck:
                c = this.dg.indexOf(this.Sk);
                qc(this, 0 > c ? this.dg.length : c, -1);
                break;
            case g.g.la.Ul:
                qc(this, this.dg.indexOf(this.Sk), 1);
                break;
            case g.g.la.qG:
            case g.g.la.zF:
                qc(this, -1, 1);
                break;
            case g.g.la.pG:
            case g.g.la.YE:
                qc(this, this.dg.length, -1);
                break;
            default:
                return
        }
        a.preventDefault();
        a.stopPropagation()
    }
};
b.Nh = function() {
    var a = this.Jb,
        c = g.g.style.Nh(a);
    c.height = a.scrollHeight;
    return c
};
g.zu = function(a, c) {
    this.Gh = a;
    this.ib = c;
    this.ss = !0;
    this.Jb = null;
    this.By = !1;
    this.zl = null;
    this.pC = this.Fv = this.Ev = !1;
    this.so = null
};
b = g.zu.prototype;
b.eb = function() {
    var a = document.createElement("div");
    a.id = g.g.nk.zs();
    this.Jb = a;
    a.className = "blocklyMenuItem goog-menuitem " + (this.ss ? "" : "blocklyMenuItemDisabled goog-menuitem-disabled ") + (this.Fv ? "blocklyMenuItemSelected goog-option-selected " : "") + (this.pC ? "blocklyMenuItemHighlight goog-menuitem-highlight " : "") + (this.By ? "blocklyMenuItemRtl goog-menuitem-rtl " : "");
    var c = document.createElement("div");
    c.className = "blocklyMenuItemContent goog-menuitem-content";
    if (this.Ev) {
        var d = document.createElement("div");
        d.className = "blocklyMenuItemCheckbox goog-menuitem-checkbox";
        c.appendChild(d)
    }
    d = this.Gh;
    "string" == typeof this.Gh && (d = document.createTextNode(this.Gh));
    c.appendChild(d);
    a.appendChild(c);
    this.zl && g.g.$.me(a, this.zl);
    g.g.$.lc(a, g.g.$.State.sh, this.Ev && this.Fv || !1);
    g.g.$.lc(a, g.g.$.State.QE, !this.ss);
    return a
};
b.J = function() {
    this.Jb = null
};
b.Oa = function() {
    return this.Jb.id
};
b.getValue = function() {
    return this.ib
};
b.me = function(a) {
    this.zl = a
};
b.fg = function(a) {
    this.pC = a;
    var c = this.Jb;
    c && this.isEnabled() && (a ? (g.g.o.Ga(c, "blocklyMenuItemHighlight"), g.g.o.Ga(c, "goog-menuitem-highlight")) : (g.g.o.Zb(c, "blocklyMenuItemHighlight"), g.g.o.Zb(c, "goog-menuitem-highlight")))
};
b.isEnabled = function() {
    return this.ss
};
b.le = function(a) {
    this.ss = a
};

function rc(a, c, d) {
    a.so = c.bind(d)
};
g.Ya = {};
g.Ya.gs = null;
g.Ya.je = null;
g.Ya.show = function(a, c, d) {
    g.na.show(g.Ya, d, g.Ya.J);
    if (c.length) {
        var e = g.Ya.nK(c, d);
        g.Ya.je = e;
        g.Ya.rl(e, a, d);
        setTimeout(function() {
            e.focus()
        }, 1);
        g.Ya.gs = null
    } else g.Ya.$a()
};
g.Ya.nK = function(a, c) {
    var d = new g.yu;
    d.me(g.g.$.Sf.dG);
    for (var e = 0, f; f = a[e]; e++) {
        var h = new g.zu(f.text);
        h.By = c;
        h.me(g.g.$.Sf.eG);
        d.dg.push(h);
        h.le(f.enabled);
        f.enabled && rc(h, function() {
            g.Ya.$a();
            this.cb(this.scope)
        }, f)
    }
    return d
};
g.Ya.rl = function(a, c, d) {
    var e = g.g.YI();
    c = new g.g.Rect(c.clientY + e.top, c.clientY + e.top, c.clientX + e.left, c.clientX + e.left);
    g.Ya.dI(a);
    var f = a.Nh();
    d && (c.left += f.width, c.right += f.width, e.left += f.width, e.right += f.width);
    g.na.oK(e, c, f, d);
    a.focus()
};
g.Ya.dI = function(a) {
    a.Ja(g.na.mb);
    var c = a.Jb;
    g.g.o.Ga(c, "blocklyContextMenu");
    g.N.ta(c, "contextmenu", null, g.g.TJ);
    a.focus()
};
g.Ya.$a = function() {
    g.na.Qm(g.Ya);
    g.Ya.gs = null
};
g.Ya.J = function() {
    g.Ya.je && (g.Ya.je.J(), g.Ya.je = null)
};
g.Ya.Pr = function(a, c) {
    return function() {
        g.h.disable();
        try {
            var d = g.O.Ik(c, a.u),
                e = a.kb();
            e.x = a.M ? e.x - g.Td : e.x + g.Td;
            e.y += 2 * g.Td;
            d.moveBy(e.x, e.y)
        } finally {
            g.h.enable()
        }
        g.h.isEnabled() && !d.Sa && g.h.Ia(new(g.h.get(g.h.si))(d));
        d.select()
    }
};
g.Ya.SO = function(a) {
    return {
        text: g.i.REMOVE_COMMENT,
        enabled: !0,
        cb: function() {
            g.h.oa(!0);
            a.J(!0, !0);
            g.h.oa(!1)
        }
    }
};
g.Ya.TO = function(a) {
    return {
        text: g.i.DUPLICATE_COMMENT,
        enabled: !0,
        cb: function() {
            g.duplicate(a)
        }
    }
};
g.Ya.EP = function(a, c) {
    if (!g.nm) throw Error("Missing require for Blockly.WorkspaceCommentSvg");
    var d = {
        enabled: !g.g.userAgent.ff
    };
    d.text = g.i.ADD_COMMENT;
    d.cb = function() {
        var e = new g.nm(a, g.i.WORKSPACE_COMMENT_DEFAULT_TEXT, g.nm.OE, g.nm.OE),
            f = aa(a).getBoundingClientRect();
        f = new g.g.ba(c.clientX - f.left, c.clientY - f.top);
        var h = g.g.$o(a.Bb);
        f = g.g.ba.Lo(f, h);
        f.scale(1 / a.scale);
        e.moveBy(f.x, f.y);
        a.ua && (e.xe(), e.Ja(), e.select())
    };
    return d
};
g.Va = function() {
    g.Va.B = this;
    this.Gf = Object.create(null)
};
g.Va.Vd = {
    Nc: "block",
    ue: "workspace"
};
g.Va.B = null;
g.Va.prototype.register = function(a) {
    if (this.Gf[a.id]) throw Error('Menu item with ID "' + a.id + '" is already registered.');
    this.Gf[a.id] = a
};
g.Va.prototype.unregister = function(a) {
    if (!this.Gf[a]) throw Error('Menu item with ID "' + a + '" not found.');
    delete this.Gf[a]
};
g.Va.prototype.getItem = function(a) {
    return this.Gf[a] || null
};

function sc(a, c) {
    var d = [],
        e = g.Va.B.Gf;
    Object.keys(e).forEach(function(f) {
        f = e[f];
        if (a == f.$e) {
            var h = f.vc(c);
            "hidden" != h && (f = {
                text: "function" == typeof f.Yd ? f.Yd(c) : f.Yd,
                enabled: "enabled" == h,
                cb: f.cb,
                scope: c,
                weight: f.weight
            }, d.push(f))
        }
    });
    d.sort(function(f, h) {
        return f.weight - h.weight
    });
    return d
}
new g.Va;
g.h.Ni = function(a, c, d) {
    g.h.Ni.v.constructor.call(this, d);
    this.XC = a;
    this.UC = c
};
g.g.object.X(g.h.Ni, g.h.Ie);
g.h.Ni.prototype.type = g.h.sh;
g.h.Ni.prototype.Ba = function() {
    var a = g.h.Ni.v.Ba.call(this);
    a.oldElementId = this.XC;
    a.newElementId = this.UC;
    return a
};
g.h.Ni.prototype.ma = function(a) {
    g.h.Ni.v.ma.call(this, a);
    this.XC = a.oldElementId;
    this.UC = a.newElementId
};
g.B.register(g.B.S.hc, g.h.sh, g.h.Ni);
g.IM = function() {};
g.OM = function() {};
g.xc = function(a, c) {
    g.xc.v.constructor.call(this, a, c);
    this.Hg = a.u.bs[c];
    this.sB = a.u.bs[g.em[c]];
    this.Zh = new g.g.ba(0, 0);
    this.ni = g.xc.xg.CA;
    this.va = null
};
g.g.object.X(g.xc, g.Ka);
g.xc.xg = {
    CA: -1,
    yA: 0,
    mm: 1
};
b = g.xc.prototype;
b.J = function() {
    g.xc.v.J.call(this);
    this.ni == g.xc.xg.mm && tc(this.Hg, this, this.y)
};
b.ea = function() {
    return g.xc.v.ea.call(this)
};
b.ra = function() {
    return g.xc.v.ra.call(this)
};

function Ia(a, c) {
    var d = a.x - c.x;
    a = a.y - c.y;
    return Math.sqrt(d * d + a * a)
}

function uc(a, c) {
    if (!a.H.u.Ac()) {
        var d = a.H.Zf();
        if (!d.Yb) {
            var e = !1;
            if (!d.Hc()) {
                d = c.ea().Zf();
                if (!d.Hc()) return;
                c = a;
                e = !0
            }
            var f = g.selected == d;
            f || d.Hr();
            var h = c.x + g.Td + Math.floor(Math.random() * g.$t) - a.x,
                k = c.y + g.Td + Math.floor(Math.random() * g.$t) - a.y;
            e && (k = -k);
            d.M && (h = c.x - g.Td - Math.floor(Math.random() * g.$t) - a.x);
            d.moveBy(h, k);
            f || d.Op()
        }
    }
}
b.moveTo = function(a, c) {
    if (this.ni == g.xc.xg.CA) {
        var d = this.Hg;
        d.rc.splice(vc(d, c), 0, this);
        this.ni = g.xc.xg.mm
    } else this.ni == g.xc.xg.mm && (tc(this.Hg, this, this.y), d = this.Hg, d.rc.splice(vc(d, c), 0, this));
    this.x = a;
    this.y = c
};
b.moveBy = function(a, c) {
    this.moveTo(this.x + a, this.y + c)
};

function wc(a, c) {
    a.moveTo(c.x + a.Zh.x, c.y + a.Zh.y)
}

function xc(a, c, d) {
    a.Zh.x = c;
    a.Zh.y = d
}

function yc(a) {
    var c = a.va.x - a.x,
        d = a.va.y - a.y;
    if (0 != c || 0 != d) {
        a = a.ra();
        var e = a.Na();
        if (!e) throw Error("block is not rendered.");
        e = g.g.xf(e);
        a.Na().setAttribute("transform", "translate(" + (e.x - c) + "," + (e.y - d) + ")");
        tb(a, -c, -d)
    }
}
b.closest = function(a, c) {
    var d = this.sB;
    if (d.rc.length) {
        var e = this.y,
            f = this.x;
        this.x = f + c.x;
        this.y = e + c.y;
        var h = vc(d, this.y);
        c = null;
        for (var k = a, l, m = h - 1; 0 <= m && Math.abs(d.rc[m].y - this.y) <= a;) l = d.rc[m], Ea(d.iB, this, l, !0, k) && (c = l, k = Ia(l, this)), m--;
        for (; h < d.rc.length && Math.abs(d.rc[h].y - this.y) <= a;) l = d.rc[h], Ea(d.iB, this, l, !0, k) && (c = l, k = Ia(l, this)), h++;
        this.x = f;
        this.y = e;
        a = {
            connection: c,
            yt: k
        }
    } else a = {
        connection: null,
        yt: a
    };
    return a
};

function ec(a, c) {
    c && a.ni == g.xc.xg.mm || !c && a.ni == g.xc.xg.yA || a.H.Yb || (c ? (c = a.Hg, c.rc.splice(vc(c, a.y), 0, a), a.ni = g.xc.xg.mm) : (a.ni == g.xc.xg.mm && tc(a.Hg, a, a.y), a.ni = g.xc.xg.yA))
}

function dc(a) {
    ec(a, !0);
    var c = [];
    if (a.type != g.pa.$b && a.type != g.pa.$c) return c;
    if (a = a.ra()) {
        if (a.isCollapsed()) {
            var d = [];
            a.R && d.push(a.R);
            a.aa && d.push(a.aa);
            a.qa && d.push(a.qa)
        } else d = a.Yf(!0);
        for (var e = 0; e < d.length; e++) c.push.apply(c, dc(d[e]));
        c.length || (c[0] = a)
    }
    return c
}
b.Ox = function(a) {
    var c = this.ea();
    if (g.h.ab) {
        var d = g.h.tc();
        setTimeout(function() {
            c.uf || c.getParent() || (g.h.oa(d), uc(this, a), g.h.oa(!1))
        }.bind(this), g.Kq)
    }
};
b.bw = function(a, c) {
    g.xc.v.bw.call(this, a, c);
    a.ua && a.Ja();
    c.ua && (za(c), c.Ja(), c.Na().style.display = "block")
};
b.Rp = function() {
    g.xc.v.Rp.call(this);
    var a = this.ra();
    a && (a.xe(), a.Ja(!1), a = this.ea(), a.ua && a.Ja())
};
b.TC = function(a) {
    return zc(this.sB, this, a)
};
b.Zr = function(a) {
    g.xc.v.Zr.call(this, a);
    var c = this.ea();
    a = a.ea();
    var d = c.ua,
        e = a.ua;
    d && za(c);
    e && za(a);
    d && e && (this.type == g.pa.$c || this.type == g.pa.Ge ? a.Ja() : c.Ja());
    if (c = Ca(c, a)) c = c.isVisible(), a.Na().style.display = c ? "block" : "none"
};
b.dD = function() {
    !this.isConnected() || this.va && Ea(this.H.u.Fh, this, this.va, !1) || (y(Da(this) ? this.ra() : this.H), this.H.bc())
};
g.$j = function() {
    g.$j.v.constructor.call(this)
};
g.g.object.X(g.$j, g.Bi);
g.$j.$g = "basicCursor";
b = g.$j.prototype;
b.next = function() {
    var a = this.Pe;
    if (!a) return null;
    (a = Ac(this, a, this.dz)) && Nb(this, a);
    return a
};
b.rj = function() {
    return this.next()
};
b.di = function() {
    var a = this.Pe;
    if (!a) return null;
    (a = Bc(this, a, this.dz)) && Nb(this, a);
    return a
};
b.Fj = function() {
    return this.di()
};

function Ac(a, c, d) {
    if (!c) return null;
    var e = c.rj() || c.next();
    if (d(e)) return e;
    if (e) return Ac(a, e, d);
    c = Cc(a, c.Fj());
    return d(c) ? c : c ? Ac(a, c, d) : null
}

function Bc(a, c, d) {
    if (!c) return null;
    var e = c.di();
    e = e ? Dc(a, e) : c.Fj();
    return d(e) ? e : e ? Bc(a, e, d) : null
}
b.dz = function(a) {
    var c = !1;
    a = a && a.cc();
    if (a == g.I.types.tk || a == g.I.types.gf || a == g.I.types.yd || a == g.I.types.Ji || a == g.I.types.Mi || a == g.I.types.ue) c = !0;
    return c
};

function Cc(a, c) {
    if (!c) return null;
    var d = c.next();
    return d ? d : Cc(a, c.Fj())
}

function Dc(a, c) {
    if (!c.rj()) return c;
    for (c = c.rj(); c.next();) c = c.next();
    return Dc(a, c)
}
g.B.register(g.B.S.yi, g.$j.$g, g.$j);
g.Dr = function() {
    g.Dr.v.constructor.call(this)
};
g.g.object.X(g.Dr, g.$j);
g.Dr.prototype.dz = function(a) {
    var c = !1,
        d = a && a.cc();
    a && (a = a.Qa, d == g.I.types.yd && a && a.CC() && Fb(a) && (c = !0));
    return c
};
g.lb = function(a, c, d) {
    this.P = g.g.o.K(g.g.D.oc, {}, null);
    this.P.oq = "";
    this.style = Ec(a.Rb.V(), null);
    this.sb = a.Rb.MC(this.P, this.style);
    this.wy = this.ua = !1;
    this.u = a;
    this.qa = this.aa = this.R = null;
    this.xq = g.g.Xk() && !!a.Je;
    var e = this.sb.Gb;
    e.Kf = this;
    g.L.rm(e);
    g.lb.v.constructor.call(this, a, c, d);
    this.P.dataset ? this.P.dataset.id = this.id : g.g.userAgent.ff && this.P.setAttribute("data-id", this.id)
};
g.g.object.X(g.lb, g.Pl);
g.lb.prototype.height = 0;
g.lb.prototype.width = 0;
g.lb.prototype.Be = null;
g.lb.WM = -1;
g.lb.vE = "TEMP_COLLAPSED_WARNING_";
b = g.lb.prototype;
b.xe = function() {
    if (!this.u.ua) throw TypeError("Workspace is headless.");
    for (var a = 0, c; c = this.Y[a]; a++) c.T();
    c = pb(this);
    for (a = 0; a < c.length; a++) Za(c[a]);
    this.jc();
    mb(this.sb, "blocklyDraggable", this.Hc());
    a = this.Na();
    this.u.options.readOnly || this.zI || !a || g.N.ta(a, "mousedown", this, this.Ej);
    this.zI = !0;
    a.parentNode || this.u.Bb.appendChild(a)
};
b.select = function() {
    if (this.Sa && this.getParent()) this.getParent().select();
    else if (g.selected != this) {
        var a = null;
        if (g.selected) {
            a = g.selected.id;
            g.h.disable();
            try {
                zb(g.selected)
            } finally {
                g.h.enable()
            }
        }
        a = new(g.h.get(g.h.sh))(a, this.id, this.u.id);
        g.h.Ia(a);
        g.selected = this;
        this.Hr()
    }
};

function zb(a) {
    if (g.selected == a) {
        var c = new(g.h.get(g.h.sh))(a.id, null, a.u.id);
        c.Zc = a.u.id;
        g.h.Ia(c);
        g.selected = null;
        a.Op()
    }
}
b.qd = null;
b.Zi = null;
b.rf = null;
b.cf = null;

function pb(a) {
    var c = [];
    a.qd && c.push(a.qd);
    a.rf && c.push(a.rf);
    a.cf && c.push(a.cf);
    return c
}
b.It = function(a) {
    var c = this.Yg;
    if (a != c) {
        g.g.o.cq();
        g.lb.v.It.call(this, a);
        g.g.o.eq();
        var d = this.Na();
        if (!this.u.ax && d) {
            var e = this.kb();
            a ? (a.Na().appendChild(d), a = this.kb(), tb(this, a.x - e.x, a.y - e.y)) : c && (this.u.Bb.appendChild(d), this.translate(e.x, e.y));
            this.jc()
        }
    }
};
b.kb = function() {
    var a = 0,
        c = 0,
        d = this.xq ? this.u.Je.tc() : null,
        e = this.Na();
    if (e) {
        do {
            var f = g.g.xf(e);
            a += f.x;
            c += f.y;
            this.xq && this.u.Je.Jg.firstChild == e && (f = this.u.Je.Lw(), a += f.x, c += f.y);
            e = e.parentNode
        } while (e && e != this.u.Bb && e != d)
    }
    return new g.g.ba(a, c)
};
b.moveBy = function(a, c) {
    if (this.Yg) throw Error("Block has parent.");
    var d = g.h.isEnabled();
    if (d) var e = new(g.h.get(g.h.ui))(this);
    var f = this.kb();
    this.translate(f.x + a, f.y + c);
    tb(this, a, c);
    d && (e.wl(), g.h.Ia(e));
    Aa(this.u)
};
b.translate = function(a, c) {
    this.Na().setAttribute("transform", "translate(" + a + "," + c + ")")
};
b.moveTo = function(a) {
    var c = this.kb();
    this.moveBy(a.x - c.x, a.y - c.y)
};
b.Cx = function(a) {
    this.xq ? this.u.Je.Gl(a.x, a.y) : (this.P.oq = "translate(" + a.x + "," + a.y + ")", this.P.setAttribute("transform", this.P.oq + this.P.aq))
};

function Fc(a) {
    if (a.u && !a.u.Ac() && !a.getParent() && !a.Yb) {
        var c = a.u.yf;
        if (c && c.$K) {
            var d = c.Oy,
                e = d / 2,
                f = a.kb();
            c = Math.round((f.x - e) / d) * d + e - f.x;
            d = Math.round((f.y - e) / d) * d + e - f.y;
            c = Math.round(c);
            d = Math.round(d);
            0 == c && 0 == d || a.moveBy(c, d)
        }
    }
}
b.Im = function() {
    var a = this.kb(),
        c = D(this);
    if (this.M) {
        var d = a.x - c.width;
        var e = a.x
    } else d = a.x, e = a.x + c.width;
    return new g.g.Rect(a.y, a.y + c.height, d, e)
};
b.tp = function() {
    this.sb.Ob = this.u.Rb.V();
    for (var a = 0, c; c = this.Y[a]; a++) c.tp()
};
b.Oj = function(a) {
    this.Ek != a && (g.lb.v.Oj.call(this, a), a ? this.ua && this.Ja() : Gc(this))
};

function Gc(a) {
    for (var c = a.isCollapsed(), d = g.Ob.Pq, e = g.Ob.Oq, f = 0, h; h = a.Y[f]; f++) h.name != d && h.ub(!c);
    if (c) {
        h = pb(a);
        for (f = 0; c = h[f]; f++) c.ub(!1);
        f = a.toString(g.wE);
        (h = x(a, e)) ? h.setValue(f): (h = w(a, d) || G(a, d), E(h, new g.oe(f), e))
    } else za(a), a.Db(d)
}
b.Ej = function(a) {
    var c = this.u && this.u.Mh(a);
    if (c) {
        if (c.Rk) throw Error("Tried to call gesture.handleBlockStart, but the gesture had already been started.");
        Jb(c, this);
        c.Bf = a
    }
};
b.showHelp = function() {
    var a = "function" == typeof this.dc ? this.dc() : this.dc;
    a && window.open(a)
};
b.Zp = function(a) {
    if (this.u.options.readOnly || !this.contextMenu) var c = null;
    else c = sc(g.Va.Vd.Nc, {
        block: this
    }), this.Ih && this.Ih(c);
    c && c.length && (g.Ya.show(a, c, this.M), g.Ya.gs = this)
};

function tb(a, c, d) {
    if (a.ua) {
        for (var e = a.Yf(!1), f = 0; f < e.length; f++) e[f].moveBy(c, d);
        e = pb(a);
        for (f = 0; f < e.length; f++) $a(e[f]);
        for (f = 0; f < a.Ch.length; f++) tb(a.Ch[f], c, d)
    }
}
b.Qj = function(a) {
    if (a) {
        var c = this.Na();
        c.oq = "";
        c.aq = "";
        g.Fm = g.Fm.concat(this.Yf(!0));
        g.g.o.Ga(this.P, "blocklyDragging")
    } else g.Fm = [], g.g.o.Zb(this.P, "blocklyDragging");
    for (c = 0; c < this.Ch.length; c++) this.Ch[c].Qj(a)
};
b.Gt = function(a) {
    g.lb.v.Gt.call(this, a);
    mb(this.sb, "blocklyDraggable", a)
};
b.Ey = function(a) {
    g.lb.v.Ey.call(this, a);
    a = pb(this);
    for (var c = 0; c < a.length; c++) a[c].pi()
};
b.Hy = function(a) {
    g.lb.v.Hy.call(this, a);
    this.jc()
};
b.DD = function(a) {
    this.Um != a && (this.Um = a) && (this.td(this.u.Rb.V().pu), mb(this.sb, "blocklyInsertionMarker", !0))
};
b.Na = function() {
    return this.P
};
b.J = function(a, c) {
    if (this.u) {
        g.L.J();
        g.L.$y(this.sb.Gb);
        g.g.o.cq();
        var d = this.u;
        g.selected == this && (zb(this), Hc(this.u));
        g.Ya.gs == this && g.Ya.$a();
        c && this.ua && (y(this, a), g.Ib.qI(this));
        this.ua = !1;
        if (this.Be) {
            for (var e in this.Be) clearTimeout(this.Be[e]);
            this.Be = null
        }
        c = pb(this);
        for (e = 0; e < c.length; e++) c[e].J();
        g.lb.v.J.call(this, !!a);
        g.g.o.removeNode(this.P);
        Aa(d);
        this.P = null;
        g.g.o.eq()
    }
};
b.jc = function() {
    this.sb.jc(this);
    for (var a = pb(this), c = 0; c < a.length; c++) a[c].jc();
    for (a = 0; c = this.Y[a]; a++)
        for (var d = 0, e; e = c.fb[d]; d++) e.jc()
};

function za(a) {
    var c = wa(a, !1);
    a.jc();
    if (!a.isCollapsed()) {
        a = 0;
        for (var d; d = c[a]; a++) d.ua && za(d)
    }
}
b.NI = function() {
    return this.rf
};
b.Pj = function(a) {
    if (!g.Comment) throw Error("Missing require for Blockly.Comment");
    this.Le.text != a && (g.lb.v.Pj.call(this, a), a = null != a, !!this.rf == a ? (a = this.rf, a.Fl ? a.Fl.value = a.pd.text : a.ql && (a.ql.firstChild.textContent = a.pd.text)) : (a ? this.Zi = this.rf = new g.Comment(this) : (this.rf.J(), this.Zi = this.rf = null), this.ua && (this.Ja(), this.bc())))
};
b.on = function(a, c) {
    if (!g.oo) throw Error("Missing require for Blockly.Warning");
    this.Be || (this.Be = Object.create(null));
    var d = c || "";
    if (d) this.Be[d] && (clearTimeout(this.Be[d]), delete this.Be[d]);
    else
        for (var e in this.Be) clearTimeout(this.Be[e]), delete this.Be[e];
    if (this.u.Ac()) {
        var f = this;
        this.Be[d] = setTimeout(function() {
            f.u && (delete f.Be[d], f.on(a, d))
        }, 100)
    } else {
        this.Yb && (a = null);
        c = !1;
        if ("string" == typeof a) {
            e = gc(this);
            for (var h = null; e;) e.isCollapsed() && (h = e), e = gc(e);
            h && h.on(g.i.COLLAPSED_WARNINGS_WARNING,
                g.lb.vE);
            this.cf || (this.cf = new g.oo(this), c = !0);
            ab(this.cf, a, d)
        } else this.cf && !d ? (this.cf.J(), c = !0) : this.cf && (c = this.cf.Hd(), ab(this.cf, "", d), (e = this.cf.Hd()) || this.cf.J(), c = c != e);
        c && this.ua && (this.Ja(), this.bc())
    }
};
b.mn = function(a) {
    this.qd && this.qd !== a && this.qd.J();
    a && (a.U = this, this.qd = a, Za(a));
    this.ua && (this.Ja(), this.bc())
};
b.le = function(a) {
    this.isEnabled() != a && (g.lb.v.le.call(this, a), this.ua && !ic(this) && za(this))
};
b.fg = function(a) {
    this.ua && this.sb.VD(a)
};
b.Hr = function() {
    mb(this.sb, "blocklySelected", !0)
};
b.Op = function() {
    mb(this.sb, "blocklySelected", !1)
};
b.Dy = function(a) {
    mb(this.sb, "blocklyDraggingDelete", a)
};
b.Ew = function() {
    return this.style.Yi
};
b.td = function(a) {
    g.lb.v.td.call(this, a);
    a = Ic(this.u.Rb.V(), this.ld);
    this.sb.Fb(a.style);
    this.style = a.style;
    this.Dl = a.name;
    this.jc()
};
b.Fb = function(a) {
    var c = Ec(this.u.Rb.V(), a);
    this.Dl = a;
    if (c) this.Pg = c.Pg, this.sb.Fb(c), this.ld = c.Yi, this.style = c, this.jc();
    else throw Error("Invalid style name: " + a);
};

function qb(a) {
    do {
        var c = a.Na(),
            d = c.parentNode,
            e = d.childNodes;
        e[e.length - 1] !== c && d.appendChild(c);
        a = a.getParent()
    } while (a)
}
b.Xc = function(a, c) {
    g.lb.v.Xc.call(this, a, c);
    this.ua && (this.Ja(), this.bc())
};
b.Wc = function(a, c) {
    g.lb.v.Wc.call(this, a, c);
    this.ua && (this.Ja(), this.bc())
};
b.Md = function(a, c) {
    g.lb.v.Md.call(this, a, c);
    this.ua && (this.Ja(), this.bc())
};
b.ye = function(a) {
    g.lb.v.ye.call(this, a);
    this.ua && (this.Ja(), this.bc())
};
b.Db = function(a, c) {
    a = g.lb.v.Db.call(this, a, c);
    this.ua && (this.Ja(), this.bc());
    return a
};
b.Dx = function(a, c) {
    g.lb.v.Dx.call(this, a, c);
    this.ua && (this.Ja(), this.bc())
};
b.to = function(a, c) {
    a = g.lb.v.to.call(this, a, c);
    this.ua && (this.Ja(), this.bc());
    return a
};

function ya(a, c) {
    a.qa && ec(a.qa, c);
    a.R && ec(a.R, c);
    if (a.aa) {
        ec(a.aa, c);
        var d = a.aa.ra();
        d && ya(d, c)
    }
    if (!a.Ek)
        for (d = 0; d < a.Y.length; d++) {
            var e = a.Y[d].connection;
            e && (ec(e, c), (e = e.ra()) && ya(e, c))
        }
}
b.Yf = function(a) {
    var c = [];
    if (a || this.ua)
        if (this.R && c.push(this.R), this.qa && c.push(this.qa), this.aa && c.push(this.aa), a || !this.Ek) {
            a = 0;
            for (var d; d = this.Y[a]; a++) d.connection && c.push(d.connection)
        } return c
};
b.Rs = function(a) {
    return g.lb.v.Rs.call(this, a)
};
b.Hw = function(a, c) {
    return g.lb.v.Hw.call(this, a, c)
};
b.sp = function(a) {
    return new g.xc(this, a)
};
b.bc = function() {
    if (this.u && !this.u.Ac()) {
        var a = this.Zf();
        if (!a.Yb)
            for (var c = this.Yf(!1), d = 0, e; e = c[d]; d++) {
                e.isConnected() && Da(e) && e.ra().bc();
                for (var f = e.TC(g.Td), h = 0, k; k = f[h]; h++) e.isConnected() && k.isConnected() || k.ea().Zf() != a && (Da(e) ? uc(k, e) : uc(e, k))
            }
    }
};

function ub(a) {
    var c = g.h.tc();
    setTimeout(function() {
        g.h.oa(c);
        Fc(a);
        g.h.oa(!1)
    }, g.Kq / 2);
    setTimeout(function() {
        g.h.oa(c);
        a.bc();
        g.h.oa(!1)
    }, g.Kq)
}
b.getParent = function() {
    return g.lb.v.getParent.call(this)
};
b.Zf = function() {
    return g.lb.v.Zf.call(this)
};
b.Ja = function(a) {
    if (!this.wy) {
        this.wy = !0;
        try {
            this.ua = !0;
            g.g.o.cq();
            this.isCollapsed() && Gc(this);
            this.u.Rb.Ja(this);
            var c = this.kb();
            this.qa && wc(this.qa, c);
            this.R && wc(this.R, c);
            for (var d = 0; d < this.Y.length; d++) {
                var e = this.Y[d].connection;
                e && (wc(e, c), e.isConnected() && yc(e))
            }
            this.aa && (wc(this.aa, c), this.aa.isConnected() && yc(this.aa));
            if (!1 !== a) {
                var f = this.getParent();
                f ? f.Ja(!0) : Aa(this.u)
            }
            g.g.o.eq();
            this.cz()
        } finally {
            this.wy = !1
        }
    }
};
b.cz = function() {
    this.u.Zm && this.sb.Jo && this.u.Jm().draw();
    this.u.Zm && this.sb.wx && this.u.ap(g.Vn.Zz).draw()
};
b.gi = function(a) {
    this.sb.gi(a)
};
b.Rj = function(a) {
    this.sb.Rj(a)
};

function D(a) {
    var c = a.height,
        d = a.width,
        e = r(a);
    e && (e = D(e), a = a.u.Rb.V().Bu, c += e.height - a, d = Math.max(d, e.width));
    return {
        height: c,
        width: d
    }
};
g.dN = function() {};
g.aN = function() {};
g.KM = function() {};
g.Yu = function(a, c, d) {
    this.Vw = a.toolboxitemid || g.g.nk.zs();
    this.mx = (this.bi = d || null) ? this.bi.mx + 1 : 0;
    this.Qt = a;
    this.ai = c;
    this.s = this.ai.s
};
b = g.Yu.prototype;
b.T = function() {};
b.Zo = function() {
    return null
};
b.Oa = function() {
    return this.Vw
};
b.getParent = function() {
    return null
};
b.Vh = function() {
    return !1
};
b.Yk = function() {
    return !1
};
b.J = function() {};
g.He = function(a, c, d) {
    g.He.v.constructor.call(this, a, c, d);
    this.Vg = g.g.Ic(a.name);
    this.ld = Jc(this, a);
    this.hx = this.jp = this.Sp = this.Ze = this.Vc = null;
    this.md = this.qx();
    g.g.object.Kd(this.md, a.cssconfig || a.cssConfig);
    this.rJ = this.bx = !1;
    this.gj = [];
    this.jD(a)
};
g.g.object.X(g.He, g.Yu);
g.He.$g = "category";
g.He.RJ = 19;
g.He.borderWidth = 8;
g.He.fI = "#57e";
b = g.He.prototype;
b.qx = function() {
    return {
        container: "blocklyToolboxCategory",
        row: "blocklyTreeRow",
        rowcontentcontainer: "blocklyTreeRowContentContainer",
        icon: "blocklyTreeIcon",
        label: "blocklyTreeLabel",
        contents: "blocklyToolboxContents",
        selected: "blocklyTreeSelected",
        openicon: "blocklyTreeIconOpen",
        closedicon: "blocklyTreeIconClosed"
    }
};
b.jD = function(a) {
    var c = a.contents;
    if (a.custom) this.gj = a.custom;
    else if (c) {
        a = 0;
        for (var d; d = c[a]; a++) this.gj.push(d)
    }
};
b.T = function() {
    this.Oe();
    "true" == this.Qt.hidden && this.$a()
};
b.Oe = function() {
    this.Vc = this.Nv();
    g.g.$.me(this.Vc, g.g.$.Sf.eH);
    g.g.$.lc(this.Vc, g.g.$.State.sh, !1);
    g.g.$.lc(this.Vc, g.g.$.State.OF, this.mx);
    var a = document.createElement("div");
    g.g.o.Ga(a, this.md.row);
    var c = g.He.RJ * this.mx;
    c = c.toString() + "px";
    this.s.M ? a.style.paddingRight = c : a.style.paddingLeft = c;
    this.Ze = a;
    this.Ze.style.pointerEvents = "auto";
    this.Vc.appendChild(this.Ze);
    a = document.createElement("div");
    g.g.o.Ga(a, this.md.rowcontentcontainer);
    this.Sp = a;
    this.Sp.style.pointerEvents = "none";
    this.Ze.appendChild(this.Sp);
    this.jp = this.oB();
    g.g.$.me(this.jp, g.g.$.Sf.tG);
    this.Sp.appendChild(this.jp);
    a = this.Vg;
    c = document.createElement("span");
    c.setAttribute("id", this.Oa() + ".label");
    c.textContent = a;
    g.g.o.Ga(c, this.md.label);
    this.hx = c;
    this.Sp.appendChild(this.hx);
    g.g.$.lc(this.Vc, g.g.$.State.NF, this.hx.getAttribute("id"));
    Kc(this, this.ld);
    return this.Vc
};
b.Nv = function() {
    var a = document.createElement("div");
    g.g.o.Ga(a, this.md.container);
    return a
};
b.oB = function() {
    var a = document.createElement("span");
    this.ai.ip || g.g.o.Ga(a, this.md.icon);
    a.style.display = "inline-block";
    return a
};
b.hn = function() {
    this.ld = Jc(this, this.Qt);
    Kc(this, this.ld)
};

function Kc(a, c) {
    c && (c = g.He.borderWidth + "px solid " + (c || "#ddd"), a.s.M ? a.Ze.style.borderRight = c : a.Ze.style.borderLeft = c)
}

function Jc(a, c) {
    var d = c.categorystyle || c.categoryStyle;
    if ((c = c.colour) && d) console.warn('Toolbox category "' + a.Vg + '" must not have both a style and a colour');
    else {
        if (d) a: {
            c = a.s.Og();
            if (d && c) {
                if ((c = c.Sr[d]) && c.rb) {
                    a = Lc(a, c.rb);
                    break a
                }
                console.warn('Style "' + d + '" must exist and contain a colour value')
            }
            a = ""
        }
        else a = Lc(a, c);
        return a
    }
    return ""
}
b.MB = function() {
    return this.Ze
};

function Lc(a, c) {
    c = g.g.Ic(c);
    if (null == c || "" === c) return "";
    var d = Number(c);
    if (isNaN(d)) {
        if (d = g.g.rb.parse(c)) return d;
        console.warn('Toolbox category "' + a.Vg + '" has unrecognized colour attribute: ' + c);
        return ""
    }
    return g.lJ(d)
}
b.Jt = function(a) {
    this.Vc.style.display = a ? "block" : "none";
    this.bx = !a;
    this.ai.Eb == this && Mc(this.ai, null)
};
b.$a = function() {
    this.Jt(!1)
};
b.show = function() {
    this.Jt(!0)
};
b.isVisible = function() {
    var a;
    if (a = !this.bx) a: {
        for (a = this; a.getParent();)
            if (a = a.getParent(), !a.Kk) {
                a = !1;
                break a
            } a = !0
    }
    return a
};
b.Vh = function() {
    return this.isVisible() && !this.rJ
};
b.eD = function() {};

function Nc(a, c) {
    if (c) {
        var d = Lc(a, g.He.fI);
        a.Ze.style.backgroundColor = a.ld || d;
        g.g.o.Ga(a.Ze, a.md.selected)
    } else a.Ze.style.backgroundColor = "", g.g.o.Zb(a.Ze, a.md.selected);
    g.g.$.lc(a.Vc, g.g.$.State.sh, c)
}
b.Gd = function() {
    return this.Vg
};
b.getParent = function() {
    return this.bi
};
b.Zo = function() {
    return this.Vc
};
b.J = function() {
    g.g.o.removeNode(this.Vc)
};
g.Oc.register([".blocklyTreeRow:not(.blocklyTreeSelected):hover {", "background-color: rgba(255, 255, 255, 0.2);", "}", '.blocklyToolboxDiv[layout="h"] .blocklyToolboxCategory {', "margin: 1px 5px 1px 0;", "}", '.blocklyToolboxDiv[dir="RTL"][layout="h"] .blocklyToolboxCategory {', "margin: 1px 0 1px 5px;", "}", ".blocklyTreeRow {", "height: 22px;", "line-height: 22px;", "margin-bottom: 3px;", "padding-right: 8px;", "white-space: nowrap;", "}", '.blocklyToolboxDiv[dir="RTL"] .blocklyTreeRow {', "margin-left: 8px;",
    "padding-right: 0px", "}", ".blocklyTreeIcon {", "background-image: url(<<<PATH>>>/sprites.png);", "height: 16px;", "vertical-align: middle;", "visibility: hidden;", "width: 16px;", "}", ".blocklyTreeIconClosed {", "background-position: -32px -1px;", "}", '.blocklyToolboxDiv[dir="RTL"] .blocklyTreeIconClosed {', "background-position: 0 -1px;", "}", ".blocklyTreeSelected>.blocklyTreeIconClosed {", "background-position: -32px -17px;", "}", '.blocklyToolboxDiv[dir="RTL"] .blocklyTreeSelected>.blocklyTreeIconClosed {',
    "background-position: 0 -17px;", "}", ".blocklyTreeIconOpen {", "background-position: -16px -1px;", "}", ".blocklyTreeSelected>.blocklyTreeIconOpen {", "background-position: -16px -17px;", "}", ".blocklyTreeLabel {", "cursor: default;", "font: 16px sans-serif;", "padding: 0 3px;", "vertical-align: middle;", "}", ".blocklyToolboxDelete .blocklyTreeLabel {", 'cursor: url("<<<PATH>>>/handdelete.cur"), auto;', "}", ".blocklyTreeSelected .blocklyTreeLabel {", "color: #fff;", "}"
]);
g.B.register(g.B.S.lm, g.He.$g, g.He);
g.wg = function(a, c) {
    g.wg.v.constructor.call(this, a, c);
    this.md = {
        container: "blocklyTreeSeparator"
    };
    g.g.object.Kd(this.md, a.cssconfig || a.cssConfig)
};
g.g.object.X(g.wg, g.Yu);
g.wg.$g = "sep";
g.wg.prototype.T = function() {
    this.Oe()
};
g.wg.prototype.Oe = function() {
    var a = document.createElement("div");
    g.g.o.Ga(a, this.md.container);
    return this.Vc = a
};
g.wg.prototype.Zo = function() {
    return this.Vc
};
g.wg.prototype.J = function() {
    g.g.o.removeNode(this.Vc)
};
g.Oc.register('.blocklyTreeSeparator {,border-bottom: solid #e5e5e5 1px;,height: 0;,margin: 5px 0;,},.blocklyToolboxDiv[layout="h"] .blocklyTreeSeparator {,border-right: solid #e5e5e5 1px;,border-bottom: none;,height: auto;,margin: 0 5px 0 5px;,padding: 5px 0;,width: 0;,}'.split(","));
g.B.register(g.B.S.lm, g.wg.$g, g.wg);
g.Of = function(a, c, d) {
    this.fq = null;
    this.Kk = !1;
    this.Rt = [];
    g.Of.v.constructor.call(this, a, c, d)
};
g.g.object.X(g.Of, g.He);
g.Of.$g = "collapsibleCategory";
b = g.Of.prototype;
b.qx = function() {
    var a = g.Of.v.qx.call(this);
    a.contents = "blocklyToolboxContents";
    return a
};
b.jD = function(a) {
    var c = a.contents,
        d = !0;
    if (a.custom) this.gj = a.custom;
    else if (c) {
        a = 0;
        for (var e; e = c[a]; a++) !g.B.hJ(e.kind) || e.kind.toLowerCase() == g.wg.$g && d ? (this.gj.push(e), d = !0) : (this.Pv(e), d = !1)
    }
};
b.Pv = function(a) {
    var c = a.kind;
    "CATEGORY" == c.toUpperCase() && g.g.Z.xC(a) && (c = g.Of.$g);
    a = new(g.B.Wo(g.B.S.lm, c))(a, this.ai, this);
    this.Rt.push(a)
};
b.T = function() {
    g.Of.v.T.call(this);
    Oc(this, "true" == this.Qt.expanded || this.Qt.expanded)
};
b.Oe = function() {
    g.Of.v.Oe.call(this);
    var a = this.Rt,
        c = document.createElement("div");
    g.g.o.Ga(c, this.md.contents);
    for (var d = 0; d < a.length; d++) {
        var e = a[d];
        e.T();
        c.appendChild(e.Zo());
        e.MB && e.Ze.setAttribute("id", e.Oa())
    }
    this.fq = c;
    g.g.$.me(this.fq, g.g.$.Sf.wF);
    this.Vc.appendChild(this.fq);
    return this.Vc
};
b.oB = function() {
    var a = document.createElement("span");
    this.ai.ip || (g.g.o.Ga(a, this.md.icon), a.style.visibility = "visible");
    a.style.display = "inline-block";
    return a
};

function Oc(a, c) {
    if (a.Kk != c) {
        if (a.Kk = c) {
            a.fq.style.display = "block";
            var d = a.jp;
            d && (g.g.o.xD(d, a.md.closedicon), g.g.o.Ga(d, a.md.openicon))
        } else if (a.fq.style.display = "none", d = a.jp) g.g.o.xD(d, a.md.openicon), g.g.o.Ga(d, a.md.closedicon);
        g.g.$.lc(a.Vc, g.g.$.State.Dz, c);
        Pc(a.ai)
    }
}
b.Jt = function(a) {
    this.Vc.style.display = a ? "block" : "none";
    for (var c = 0, d; d = this.Rt[c]; c++) d.Jt(a);
    this.bx = !a;
    this.ai.Eb == this && Mc(this.ai, null)
};
b.Yk = function() {
    return !0
};
b.eD = function() {
    Oc(this, !this.Kk)
};
b.Zo = function() {
    return this.Vc
};
g.B.register(g.B.S.lm, g.Of.$g, g.Of);
g.LM = function() {};
g.RM = function() {};
g.Jn = function() {};
g.Jn.prototype.Mx = function() {};
g.Jn.prototype.Nx = function() {};
g.Jn.prototype.gt = function() {};
g.Jn.prototype.ht = function() {};
g.QM = function() {};
g.hk = function() {
    g.hk.v.constructor.call(this);
    this.Nl = !1
};
g.g.object.X(g.hk, g.Jn);
g.hk.prototype.ez = function(a, c) {
    a instanceof g.lb ? (a = !a.getParent() && a.Af(), this.vq(a && !c)) : this.vq(a.Af());
    return this.Nl
};
g.hk.prototype.vq = function(a) {
    this.Nl = a
};
g.h.Qi = function(a, c, d) {
    g.h.Qi.v.constructor.call(this, d);
    this.ZC = a;
    this.VC = c
};
g.g.object.X(g.h.Qi, g.h.Ie);
g.h.Qi.prototype.type = g.h.Cr;
g.h.Qi.prototype.Ba = function() {
    var a = g.h.Qi.v.Ba.call(this);
    a.oldItem = this.ZC;
    a.newItem = this.VC;
    return a
};
g.h.Qi.prototype.ma = function(a) {
    g.h.Qi.v.ma.call(this, a);
    this.ZC = a.oldItem;
    this.VC = a.newItem
};
g.B.register(g.B.S.hc, g.h.Cr, g.h.Qi);
g.GM = function() {};
g.bN = function() {};
g.cN = function() {};
g.Er = function(a) {
    g.Er.v.constructor.call(this);
    this.s = a;
    this.id = "toolbox";
    this.SD = a.options.Ug || {
        contents: []
    };
    this.ip = a.options.ce;
    this.bj = this.Ee = null;
    this.Xe = !1;
    this.Pb = [];
    this.Tc = this.wb = 0;
    this.M = a.options.M;
    this.za = null;
    this.Kv = Object.create(null);
    this.Lb = a.options.Lb;
    this.Eb = null;
    this.vo = []
};
g.g.object.X(g.Er, g.hk);
b = g.Er.prototype;
b.T = function() {
    var a = this.s,
        c = t(a),
        d = this.s,
        e = new g.Sd({
            parentWorkspace: d,
            rtl: d.M,
            oneBasedIndex: d.options.Df,
            horizontalLayout: d.ce,
            renderer: d.options.Pp,
            rendererOverrides: d.options.Qp,
            move: {
                scrollbars: !0
            }
        });
    e.Lb = d.options.Lb;
    this.za = new(d.ce ? g.B.Wf(g.B.S.mu, d.options, !0) : g.B.Wf(g.B.S.dr, d.options, !0))(e);
    this.Ee = this.Oe(this.s);
    g.g.o.Wk(this.za.eb("svg"), c);
    this.ub(!0);
    this.za.T(a);
    this.Ja(this.SD);
    a = a.Cc;
    a.subscribe(this.Ee, "toolboxBackgroundColour", "background-color");
    a.subscribe(this.Ee, "toolboxForegroundColour",
        "color");
    eb(this.s.Me, {
        Fk: this,
        weight: 1,
        Bg: [g.Vb.fc.Yt, g.Vb.fc.Xq, g.Vb.fc.Yq]
    })
};
b.Oe = function(a) {
    var c = t(a);
    a = this.Nv();
    var d = document.createElement("div");
    g.g.o.Ga(d, "blocklyToolboxContents");
    this.ip && (d.style.flexDirection = "row");
    this.bj = d;
    this.bj.tabIndex = 0;
    g.g.$.me(this.bj, g.g.$.Sf.dH);
    a.appendChild(this.bj);
    c.parentNode.insertBefore(a, c);
    c = this.bj;
    d = g.N.ta(a, "click", this, this.Lx, !1, !0);
    this.vo.push(d);
    c = g.N.ta(c, "keydown", this, this.Rx, !1, !0);
    this.vo.push(c);
    return a
};
b.Nv = function() {
    var a = document.createElement("div");
    a.setAttribute("layout", this.ip ? "h" : "v");
    g.g.o.Ga(a, "blocklyToolboxDiv");
    g.g.o.Ga(a, "blocklyNonSelectable");
    a.setAttribute("dir", this.M ? "RTL" : "LTR");
    return a
};
b.Lx = function(a) {
    if (g.g.bl(a) || a.target == this.Ee) g.Uc(!1);
    else {
        if (a = a.target.getAttribute("id")) a = this.Kv[a] || null, a.Vh() && (Mc(this, a), a.eD());
        g.Uc(!0)
    }
    g.Touch.Dk()
};
b.Rx = function(a) {
    var c = !1;
    switch (a.keyCode) {
        case g.g.la.Ul:
            c = Qc(this);
            break;
        case g.g.la.Ck:
            a: {
                if (this.Eb && (c = this.Pb.indexOf(this.Eb) - 1, -1 < c && c < this.Pb.length)) {
                    for (var d = this.Pb[c]; d && !d.Vh();) d = this.Pb[--c];
                    if (d && d.Vh()) {
                        Mc(this, d);
                        c = !0;
                        break a
                    }
                }
                c = !1
            }
            break;
        case g.g.la.Nb:
            c = Rc(this);
            break;
        case g.g.la.Qc:
            this.Eb && this.Eb.Yk() ? (c = this.Eb, c.Kk ? Qc(this) : Oc(c, !0), c = !0) : c = !1;
            break;
        case g.g.la.Ln:
        case g.g.la.oA:
            this.Eb && this.Eb.Yk() && (c = this.Eb, Oc(c, !c.Kk), c = !0);
            break;
        default:
            c = !1
    }!c && this.Eb && this.Eb.Cp &&
        (c = this.Eb.Cp(a));
    c && a.preventDefault()
};
b.Ja = function(a) {
    this.SD = a;
    for (var c = 0; c < this.Pb.length; c++) {
        var d = this.Pb[c];
        d && d.J()
    }
    this.Pb = [];
    this.Kv = Object.create(null);
    a = a.contents;
    c = document.createDocumentFragment();
    d = 0;
    for (var e; e = a[d]; d++) this.Pv(e, c);
    this.bj.appendChild(c);
    this.position();
    Pc(this)
};
b.Pv = function(a, c) {
    var d = a.kind;
    "CATEGORY" == d.toUpperCase() && g.g.Z.xC(a) && (d = g.Of.$g);
    if (d = g.B.Wo(g.B.S.lm, d.toLowerCase())) a = new d(a, this), Sc(this, a), a.T(), (d = a.Zo()) && c.appendChild(d), a.MB && a.Ze.setAttribute("id", a.Oa())
};

function Sc(a, c) {
    a.Pb.push(c);
    a.Kv[c.Oa()] = c;
    if (c.Yk())
        for (var d = 0, e; e = c.Rt[d]; d++) Sc(a, e)
}
b.Dw = function() {
    if (!this.Ee || !this.Xe) return null;
    var a = this.Ee.getBoundingClientRect(),
        c = a.top,
        d = c + a.height,
        e = a.left;
    a = e + a.width;
    return this.Lb == g.g.Z.Ma.zd ? new g.g.Rect(-1E7, d, -1E7, 1E7) : this.Lb == g.g.Z.Ma.hh ? new g.g.Rect(c, 1E7, -1E7, 1E7) : this.Lb == g.g.Z.Ma.Nb ? new g.g.Rect(-1E7, 1E7, -1E7, a) : new g.g.Rect(-1E7, 1E7, e, 1E7)
};
b.ez = function(a) {
    a instanceof g.lb ? this.vq(!a.getParent() && a.Af()) : this.vq(a.Af());
    return this.Nl
};
b.Mx = function() {
    Tc(this, !0)
};
b.gt = function() {
    Tc(this, !1)
};
b.ht = function() {
    Tc(this, !1)
};
b.vq = function(a) {
    a !== this.Nl && (Tc(this, !1), this.Nl = a, Tc(this, !0))
};

function Tc(a, c) {
    var d = a.Nl ? "blocklyToolboxDelete" : "blocklyToolboxGrab";
    c ? g.g.o.Ga(a.Ee, d) : g.g.o.Zb(a.Ee, d)
}
b.Qh = function() {
    return this.wb
};
b.Se = function() {
    return this.za
};
b.position = function() {
    var a = this.s.ae(),
        c = this.Ee;
    c && (this.ip ? (c.style.left = "0", c.style.height = "auto", c.style.width = "100%", this.Tc = c.offsetHeight, this.wb = a.Mc, this.Lb == g.g.Z.Ma.zd ? c.style.top = "0" : c.style.bottom = "0") : (this.Lb == g.g.Z.Ma.Qc ? c.style.right = "0" : c.style.left = "0", c.style.height = "100%", this.wb = c.offsetWidth, this.Tc = a.Yc), this.za.position())
};

function Pc(a) {
    var c = a.s,
        d = a.Ee.getBoundingClientRect();
    c.translate(a.Lb == g.g.Z.Ma.Nb ? c.scrollX + d.width : c.scrollX, a.Lb == g.g.Z.Ma.zd ? c.scrollY + d.height : c.scrollY);
    g.tn(c)
}
b.hn = function() {
    for (var a = 0; a < this.Pb.length; a++) {
        var c = this.Pb[a];
        c.hn && c.hn()
    }
};
b.ub = function(a) {
    this.Xe !== a && (this.Ee.style.display = a ? "block" : "none", this.Xe = a, Uc(this.s))
};
b.OA = function(a) {
    !a && this.za && this.za.Ui && Mc(this, null)
};

function Mc(a, c) {
    var d = a.Eb;
    if ((c || d) && (!c || c.Vh())) {
        null == d || d.Yk() && d == c || null == d || (a.Eb = null, Nc(d, !1), g.g.$.lc(a.bj, g.g.$.State.Dq, ""));
        null != c && c != d && null != c && (a.Eb = c, Nc(c, !0), g.g.$.lc(a.bj, g.g.$.State.Dq, c.Oa()));
        (d != c || c.Yk()) && c && c.gj.length ? (a.za.show(c.gj), a.za.Cy()) : a.za.$a();
        var e = d && d.Gd(),
            f = c && c.Gd();
        d == c && (f = null);
        a = new(g.h.get(g.h.Cr))(e, f, a.s.id);
        g.h.Ia(a)
    }
}

function Rc(a) {
    return a.Eb ? a.Eb.Yk() && a.Eb.Kk ? (Oc(a.Eb, !1), !0) : a.Eb.getParent() && a.Eb.getParent().Vh() ? (Mc(a, a.Eb.getParent()), !0) : !1 : !1
}

function Qc(a) {
    if (!a.Eb) return !1;
    var c = a.Pb.indexOf(a.Eb) + 1;
    if (-1 < c && c < a.Pb.length) {
        for (var d = a.Pb[c]; d && !d.Vh();) d = a.Pb[++c];
        if (d && d.Vh()) return Mc(a, d), !0
    }
    return !1
}
b.J = function() {
    fb(this.s.Me, "toolbox");
    this.za.J();
    for (var a = 0; a < this.Pb.length; a++) this.Pb[a].J();
    for (a = 0; a < this.vo.length; a++) g.N.Pa(this.vo[a]);
    this.vo = [];
    this.Pb = [];
    this.s.Cc.unsubscribe(this.Ee);
    g.g.o.removeNode(this.Ee)
};
g.Oc.register([".blocklyToolboxDelete {", 'cursor: url("<<<PATH>>>/handdelete.cur"), auto;', "}", ".blocklyToolboxGrab {", 'cursor: url("<<<PATH>>>/handclosed.cur"), auto;', "cursor: grabbing;", "cursor: -webkit-grabbing;", "}", ".blocklyToolboxDiv {", "background-color: #ddd;", "overflow-x: visible;", "overflow-y: auto;", "padding: 4px 0 4px 0;", "position: absolute;", "z-index: 70;", "-webkit-tap-highlight-color: transparent;", "}", ".blocklyToolboxContents {", "display: flex;", "flex-wrap: wrap;", "flex-direction: column;",
    "}", ".blocklyToolboxContents:focus {", "outline: none;", "}"
]);
g.B.register(g.B.S.uA, g.B.ek, g.Er);
g.h.Ri = function(a, c) {
    g.h.Ri.v.constructor.call(this, c);
    this.Wm = a
};
g.g.object.X(g.h.Ri, g.h.Ie);
g.h.Ri.prototype.type = g.h.Xu;
g.h.Ri.prototype.Ba = function() {
    var a = g.h.Ri.v.Ba.call(this);
    a.isOpen = this.Wm;
    return a
};
g.h.Ri.prototype.ma = function(a) {
    g.h.Ri.v.ma.call(this, a);
    this.Wm = a.isOpen
};
g.B.register(g.B.S.hc, g.h.Xu, g.h.Ri);
g.ZM = function() {};
g.Tb = {};
g.Tb.yn = {
    zd: 0,
    hh: 1
};
g.Tb.Tw = {
    Nb: 0,
    Qc: 1
};
g.Tb.wo = {
    Ck: 0,
    Ul: 1
};
g.Tb.bC = function(a, c, d, e, f, h) {
    var k = h.tb && !!h.tb.vb;
    a.hp === g.Tb.Tw.Nb ? (d = f.Gr.left + d, k && h.M && (d += g.bb.sd)) : (d = f.Gr.left + f.bE.width - c.width - d, k && !h.M && (d -= g.bb.sd));
    a.vertical === g.Tb.yn.zd ? a = f.Gr.top + e : (a = f.Gr.top + f.bE.height - c.height - e, h.tb && h.tb.Kb && (a -= g.bb.sd));
    return new g.g.Rect(a, a + c.height, d, d + c.width)
};
g.Tb.PB = function(a, c) {
    return {
        hp: c.TD.position === g.g.Z.Ma.Nb || a.ce && !a.M ? g.Tb.Tw.Qc : g.Tb.Tw.Nb,
        vertical: c.TD.position === g.g.Z.Ma.hh ? g.Tb.yn.zd : g.Tb.yn.hh
    }
};
g.Tb.SA = function(a, c, d, e) {
    for (var f = a.left, h = a.right - a.left, k = a.bottom - a.top, l = 0, m; m = e[l]; l++) a.left > m.right || a.right < m.left || a.top > m.bottom || a.bottom < m.top || (a = d === g.Tb.wo.Ck ? m.top - k - c : m.bottom + c, a = new g.g.Rect(a, a + k, f, f + h), l = -1);
    return a
};
g.Sc = function(a) {
    g.Sc.v.constructor.call(this);
    this.s = a;
    this.id = "trashcan";
    this.Pb = [];
    this.Lg = null;
    0 >= this.s.options.Ys || (a = new g.Sd({
        scrollbars: !0,
        parentWorkspace: this.s,
        rtl: this.s.M,
        oneBasedIndex: this.s.options.Df,
        renderer: this.s.options.Pp,
        rendererOverrides: this.s.options.Qp,
        move: {
            scrollbars: !0
        }
    }), this.s.ce ? (a.Lb = this.s.Lb == g.g.Z.Ma.zd ? g.g.Z.Ma.hh : g.g.Z.Ma.zd, this.Lg = new(g.B.Wf(g.B.S.mu, this.s.options, !0))(a)) : (a.Lb = this.s.Lb == g.g.Z.Ma.Qc ? g.g.Z.Ma.Nb : g.g.Z.Ma.Qc, this.Lg = new(g.B.Wf(g.B.S.dr, this.s.options,
        !0))(a)), C(this.s, this.YJ.bind(this)))
};
g.g.object.X(g.Sc, g.hk);
b = g.Sc.prototype;
b.zh = 47;
b.Jq = 44;
b.bm = 16;
b.Sn = 20;
b.wu = 20;
b.kr = 10;
b.Qu = 0;
b.Ru = 32;
b.xF = .1;
g.Sc.jE = 80;
g.Sc.iz = 4;
g.Sc.fA = .4;
g.Sc.kG = .8;
g.Sc.$z = 45;
b = g.Sc.prototype;
b.Ks = !1;
b.zx = 0;
b.P = null;
b.Ot = null;
b.nx = 0;
b.Aj = 0;
b.Wh = 0;
b.mi = 0;
b.kp = !1;
b.eb = function() {
    this.P = g.g.o.K(g.g.D.oc, {
        "class": "blocklyTrash"
    }, null);
    var a = String(Math.random()).substring(2);
    var c = g.g.o.K(g.g.D.Gn, {
        id: "blocklyTrashBodyClipPath" + a
    }, this.P);
    g.g.o.K(g.g.D.Hb, {
        width: this.zh,
        height: this.Jq,
        y: this.bm
    }, c);
    var d = g.g.o.K(g.g.D.Di, {
        width: g.Ud.width,
        x: -this.Qu,
        height: g.Ud.height,
        y: -this.Ru,
        "clip-path": "url(#blocklyTrashBodyClipPath" + a + ")"
    }, this.P);
    d.setAttributeNS(g.g.o.mf, "xlink:href", this.s.options.Ij + g.Ud.url);
    c = g.g.o.K(g.g.D.Gn, {
        id: "blocklyTrashLidClipPath" + a
    }, this.P);
    g.g.o.K(g.g.D.Hb, {
        width: this.zh,
        height: this.bm
    }, c);
    this.Ot = g.g.o.K(g.g.D.Di, {
        width: g.Ud.width,
        x: -this.Qu,
        height: g.Ud.height,
        y: -this.Ru,
        "clip-path": "url(#blocklyTrashLidClipPath" + a + ")"
    }, this.P);
    this.Ot.setAttributeNS(g.g.o.mf, "xlink:href", this.s.options.Ij + g.Ud.url);
    g.N.bind(this.P, "mousedown", this, this.CH);
    g.N.bind(this.P, "mouseup", this, this.click);
    g.N.bind(d, "mouseover", this, this.KJ);
    g.N.bind(d, "mouseout", this, this.IJ);
    this.hv();
    return this.P
};
b.T = function() {
    0 < this.s.options.Ys && (g.g.o.Wk(this.Lg.eb(g.g.D.yk), t(this.s)), this.Lg.T(this.s));
    eb(this.s.Me, {
        Fk: this,
        weight: 1,
        Bg: [g.Vb.fc.Yt, g.Vb.fc.Xq, g.Vb.fc.Yq, g.Vb.fc.Hu]
    });
    this.kp = !0;
    this.ln(!1)
};
b.J = function() {
    fb(this.s.Me, "trashcan");
    this.P && (g.g.o.removeNode(this.P), this.P = null);
    this.s = this.Ot = null;
    clearTimeout(this.nx)
};
b.OA = function(a) {
    !a && this.Lg && this.Lg.isVisible() && (this.Lg.$a(), Vc(this, !1))
};
b.position = function(a, c) {
    if (this.kp) {
        var d = g.Tb.PB(this.s, a);
        a = g.Tb.bC(d, new g.g.ad(this.zh, this.Jq + this.bm), this.wu, this.Sn, a, this.s);
        c = g.Tb.SA(a, this.Sn, d.vertical === g.Tb.yn.zd ? g.Tb.wo.Ul : g.Tb.wo.Ck, c);
        this.mi = c.top;
        this.Wh = c.left;
        this.P.setAttribute("transform", "translate(" + this.Wh + "," + this.mi + ")")
    }
};
b.Im = function() {
    return new g.g.Rect(this.mi, this.mi + this.Jq + this.bm, this.Wh, this.Wh + this.zh)
};
b.Dw = function() {
    if (!this.P) return null;
    var a = this.P.getBoundingClientRect(),
        c = a.top + this.Ru - this.kr;
    a = a.left + this.Qu - this.kr;
    return new g.g.Rect(c, c + this.bm + this.Jq + 2 * this.kr, a, a + this.zh + 2 * this.kr)
};
b.Nx = function() {
    this.ln(this.Nl)
};
b.gt = function() {
    this.ln(!1)
};
b.ht = function() {
    setTimeout(this.ln.bind(this, !1), 100)
};
b.ln = function(a) {
    this.Ks != a && (clearTimeout(this.nx), this.Ks = a, this.hv())
};
b.hv = function() {
    var a = 1 / (g.Sc.iz + 1);
    this.Aj += this.Ks ? a : -a;
    this.Aj = Math.min(Math.max(this.Aj, this.zx), 1);
    Wc(this, this.Aj * g.Sc.$z);
    this.P.style.opacity = g.Sc.fA + this.Aj * (g.Sc.kG - g.Sc.fA);
    this.Aj > this.zx && 1 > this.Aj && (this.nx = setTimeout(this.hv.bind(this), g.Sc.jE / g.Sc.iz))
};

function Wc(a, c) {
    var d = a.s.Lb == g.g.Z.Ma.Qc || a.s.ce && a.s.M;
    a.Ot.setAttribute("transform", "rotate(" + (d ? -c : c) + "," + (d ? 4 : a.zh - 4) + "," + (a.bm - 2) + ")")
}
b.click = function() {
    if (this.Pb.length && !this.Lg.isVisible()) {
        var a = this.Pb.map(g.O.ze);
        this.Lg.show(a);
        Vc(this, !0)
    }
};

function Vc(a, c) {
    a = new(g.h.get(g.h.Xu))(c, a.s.id);
    g.h.Ia(a)
}
b.CH = function(a) {
    !this.Lg.isVisible() && this.Pb.length && a.stopPropagation()
};
b.KJ = function() {
    this.Pb.length && this.ln(!0)
};
b.IJ = function() {
    this.ln(!1)
};
b.YJ = function(a) {
    if (!(0 >= this.s.options.Ys) && a.type == g.h.Hq && a.dn.tagName && "shadow" != a.dn.tagName.toLowerCase()) {
        for (var c = a = a.dn.cloneNode(!0); c;) {
            c.removeAttribute && (c.removeAttribute("x"), c.removeAttribute("y"), c.removeAttribute("id"), c.removeAttribute("disabled"), "comment" == c.nodeName && (c.removeAttribute("h"), c.removeAttribute("w"), c.removeAttribute("pinned")));
            var d = c.firstChild || c.nextSibling;
            if (!d)
                for (d = c.parentNode; d;) {
                    if (d.nextSibling) {
                        d = d.nextSibling;
                        break
                    }
                    d = d.parentNode
                }
            c = d
        }
        a = g.O.Zd(a);
        if (-1 == this.Pb.indexOf(a)) {
            for (this.Pb.unshift(a); this.Pb.length > this.s.options.Ys;) this.Pb.pop();
            this.zx = a = this.xF;
            this.Ks || Wc(this, a * g.Sc.$z)
        }
    }
};
g.m.wq = !1;
g.m.register = function(a, c) {
    g.B.register(g.B.S.RENDERER, a, c)
};
g.m.unregister = function(a) {
    g.B.unregister(g.B.S.RENDERER, a)
};
g.m.yP = function() {
    g.m.wq = !0
};
g.m.zP = function() {
    g.m.wq = !1
};
g.m.T = function(a, c, d) {
    a = new(g.B.Wo(g.B.S.RENDERER, a))(a);
    a.T(c, d);
    return a
};
g.VM = function() {};
g.Wn = function(a) {
    this.s = a
};

function Xc(a) {
    var c = 0,
        d = 0;
    a && (c = a.Qh(), d = a.Tc);
    return new g.g.ad(c, d)
}

function Yc(a) {
    var c = Xc(a.s.Se(!0));
    return {
        width: c.width,
        height: c.height,
        position: a.s.Lb
    }
}

function Zc(a) {
    var c = Xc(a.s.Sb);
    return {
        width: c.width,
        height: c.height,
        position: a.s.Lb
    }
}

function $c(a) {
    var c = 0,
        d = Zc(a),
        e = Yc(a),
        f = !!a.s.Sb;
    a = !!a.s.Se(!0);
    var h = f ? d.position : e.position,
        k = h == g.g.Z.Ma.Nb;
    h = h == g.g.Z.Ma.zd;
    f && k ? c = d.width : a && k && (c = e.width);
    k = 0;
    f && h ? k = d.height : a && h && (k = e.height);
    return {
        top: k,
        left: c
    }
}

function Ya(a, c) {
    c = c ? a.s.scale : 1;
    var d = ad(a.s),
        e = Zc(a),
        f = Yc(a),
        h = a.s.Sb ? e.position : f.position;
    if (a.s.Sb)
        if (h == g.g.Z.Ma.zd || h == g.g.Z.Ma.hh) d.height -= e.height;
        else {
            if (h == g.g.Z.Ma.Nb || h == g.g.Z.Ma.Qc) d.width -= e.width
        }
    else if (a.s.Se(!0))
        if (h == g.g.Z.Ma.zd || h == g.g.Z.Ma.hh) d.height -= f.height;
        else if (h == g.g.Z.Ma.Nb || h == g.g.Z.Ma.Qc) d.width -= f.width;
    return {
        height: d.height / c,
        width: d.width / c,
        top: -a.s.scrollY / c,
        left: -a.s.scrollX / c
    }
}
g.Wn.prototype.xs = function() {
    var a = this.s.scale,
        c = xa(this.s);
    return {
        height: (c.bottom - c.top) * a,
        width: (c.right - c.left) * a,
        top: c.top * a,
        left: c.left * a
    }
};
g.Wn.prototype.jj = function(a, c, d) {
    a = a ? this.s.scale : 1;
    var e = c || Ya(this, !1);
    d = d || this.xs();
    if (xb(this.s) && yb(this.s)) c = {};
    else {
        c = xb(this.s);
        var f = yb(this.s),
            h = e || Ya(this, !1);
        var k = {};
        f || (k.top = h.top, k.bottom = h.top + h.height);
        c || (k.left = h.left, k.right = h.left + h.width);
        c = k
    }
    k = d.top + d.height;
    f = d.left + d.width;
    h = e.width;
    var l = e.height;
    var m = h / 2,
        n = l / 2;
    e = Math.min(d.top - n, k - l);
    k = Math.max(k + n, d.top + l);
    l = Math.min(d.left - m, f - h);
    d = Math.max(f + m, d.left + h);
    e = void 0 !== c.top ? c.top : e;
    f = void 0 !== c.left ? c.left : l;
    return {
        top: e /
            a,
        left: f / a,
        width: ((void 0 !== c.right ? c.right : d) - f) / a,
        height: ((void 0 !== c.bottom ? c.bottom : k) - e) / a
    }
};
g.Wn.prototype.ae = function() {
    var a = Zc(this),
        c = Yc(this),
        d = ad(this.s),
        e = $c(this),
        f = Ya(this),
        h = this.xs(),
        k = this.jj(!1, f, h);
    return {
        UO: h.height,
        XO: h.width,
        WO: h.top,
        VO: h.left,
        scrollHeight: k.height,
        scrollWidth: k.width,
        scrollTop: k.top,
        scrollLeft: k.left,
        Yc: f.height,
        Mc: f.width,
        Mf: f.top,
        Lf: f.left,
        Wd: e.top,
        Ad: e.left,
        LD: d.height,
        MD: d.width,
        DP: a.width,
        CP: a.height,
        Lb: a.position,
        bP: c.width,
        aP: c.height
    }
};
g.B.register(g.B.S.cA, g.B.ek, g.Wn);
g.Pn = function(a, c) {
    this.za = c;
    g.Pn.v.constructor.call(this, a)
};
g.g.object.X(g.Pn, g.Wn);
g.Pn.prototype.xs = function() {
    try {
        var a = this.s.Bb.getBBox()
    } catch (d) {
        a = {
            height: 0,
            y: 0,
            width: 0,
            x: 0
        }
    }
    var c = this.s.scale;
    return {
        height: a.height * c,
        width: a.width * c,
        top: a.y * c,
        left: a.x * c
    }
};
g.Pn.prototype.jj = function(a, c, d) {
    c = d || this.xs();
    d = this.za.pk * this.s.scale;
    a = a ? this.s.scale : 1;
    return {
        height: (c.height + 2 * d) / a,
        width: (c.width + c.left + d) / a,
        top: 0,
        left: 0
    }
};
g.TM = function() {};
g.Tl = function(a) {
    this.rc = [];
    this.iB = a
};

function bd(a, c, d) {
    if (!a.rc.length) return -1;
    var e = vc(a, d);
    if (e >= a.rc.length) return -1;
    d = c.y;
    for (var f = e; 0 <= f && a.rc[f].y == d;) {
        if (a.rc[f] == c) return f;
        f--
    }
    for (f = e; f < a.rc.length && a.rc[f].y == d;) {
        if (a.rc[f] == c) return f;
        f++
    }
    return -1
}

function vc(a, c) {
    if (!a.rc.length) return 0;
    for (var d = 0, e = a.rc.length; d < e;) {
        var f = Math.floor((d + e) / 2);
        if (a.rc[f].y < c) d = f + 1;
        else if (a.rc[f].y > c) e = f;
        else {
            d = f;
            break
        }
    }
    return d
}

function tc(a, c, d) {
    c = bd(a, c, d);
    if (-1 == c) throw Error("Unable to find connection in connectionDB.");
    a.rc.splice(c, 1)
}

function zc(a, c, d) {
    function e(n) {
        var q = h - f[n].x,
            v = k - f[n].y;
        Math.sqrt(q * q + v * v) <= d && m.push(f[n]);
        return v < d
    }
    var f = a.rc,
        h = c.x,
        k = c.y;
    a = 0;
    for (var l = c = f.length - 2; a < l;) f[l].y < k ? a = l : c = l, l = Math.floor((a + c) / 2);
    var m = [];
    c = a = l;
    if (f.length) {
        for (; 0 <= a && e(a);) a--;
        do c++; while (c < f.length && e(c))
    }
    return m
}
g.Tl.T = function(a) {
    var c = [];
    c[g.pa.$b] = new g.Tl(a);
    c[g.pa.qe] = new g.Tl(a);
    c[g.pa.$c] = new g.Tl(a);
    c[g.pa.Ge] = new g.Tl(a);
    return c
};
g.h.Pi = function(a, c) {
    g.h.Pi.v.constructor.call(this, c);
    this.OD = a
};
g.g.object.X(g.h.Pi, g.h.Ie);
g.h.Pi.prototype.type = g.h.Uu;
g.h.Pi.prototype.Ba = function() {
    var a = g.h.Pi.v.Ba.call(this);
    a.themeName = this.OD;
    return a
};
g.h.Pi.prototype.ma = function(a) {
    g.h.Pi.v.ma.call(this, a);
    this.OD = a.themeName
};
g.B.register(g.B.S.hc, g.h.Uu, g.h.Pi);
g.h.Ti = function(a, c, d, e, f) {
    g.h.Ti.v.constructor.call(this, e);
    this.Mf = a;
    this.Lf = c;
    this.scale = d;
    this.Bp = f
};
g.g.object.X(g.h.Ti, g.h.Ie);
g.h.Ti.prototype.type = g.h.lo;
g.h.Ti.prototype.Ba = function() {
    var a = g.h.Ti.v.Ba.call(this);
    a.viewTop = this.Mf;
    a.viewLeft = this.Lf;
    a.scale = this.scale;
    a.oldScale = this.Bp;
    return a
};
g.h.Ti.prototype.ma = function(a) {
    g.h.Ti.v.ma.call(this, a);
    this.Mf = a.viewTop;
    this.Lf = a.viewLeft;
    this.scale = a.scale;
    this.Bp = a.oldScale
};
g.B.register(g.B.S.hc, g.h.lo, g.h.Ti);
g.mk = function(a, c) {
    this.Nm = a;
    this.Oy = c.spacing;
    this.IC = c.length;
    this.yJ = (this.ox = a.firstChild) && this.ox.nextSibling;
    this.$K = c.snap
};
g.mk.prototype.Nj = 1;
g.mk.prototype.J = function() {
    this.Nm = null
};
g.mk.prototype.update = function(a) {
    this.Nj = a;
    var c = this.Oy * a || 100;
    this.Nm.setAttribute("width", c);
    this.Nm.setAttribute("height", c);
    c = Math.floor(this.Oy / 2) + .5;
    var d = c - this.IC / 2,
        e = c + this.IC / 2;
    c *= a;
    d *= a;
    e *= a;
    cd(this.ox, a, d, e, c, c);
    cd(this.yJ, a, c, c, d, e)
};

function cd(a, c, d, e, f, h) {
    a && (a.setAttribute("stroke-width", c), a.setAttribute("x1", d), a.setAttribute("y1", f), a.setAttribute("x2", e), a.setAttribute("y2", h))
}
g.mk.prototype.moveTo = function(a, c) {
    this.Nm.setAttribute("x", a);
    this.Nm.setAttribute("y", c);
    (g.g.userAgent.ff || g.g.userAgent.ik) && this.update(this.Nj)
};
g.mk.eb = function(a, c, d) {
    a = g.g.o.K(g.g.D.jA, {
        id: "blocklyGridPattern" + a,
        patternUnits: "userSpaceOnUse"
    }, d);
    0 < c.length && 0 < c.spacing ? (g.g.o.K(g.g.D.Rn, {
        stroke: c.colour
    }, a), 1 < c.length && g.g.o.K(g.g.D.Rn, {
        stroke: c.colour
    }, a)) : g.g.o.K(g.g.D.Rn, {}, a);
    return a
};
g.xA = function(a, c) {
    this.s = a;
    this.li = c;
    this.gq = [];
    this.Dg = Object.create(null)
};
b = g.xA.prototype;
b.Og = function() {
    return this.li
};
b.Yp = function(a) {
    var c = this.li;
    this.li = a;
    if (a = aa(this.s)) c && g.g.o.Zb(a, c.Xf()), g.g.o.Ga(a, this.li.Xf());
    for (c = 0; a = this.gq[c]; c++) a.hn();
    c = 0;
    a = Object.keys(this.Dg);
    for (var d; d = a[c]; c++)
        for (var e = 0, f; f = this.Dg[d][e]; e++) f.element.style[f.propertyName] = this.li && Ja(this.li, d) || "";
    g.Uc()
};
b.subscribe = function(a, c, d) {
    this.Dg[c] || (this.Dg[c] = []);
    this.Dg[c].push({
        element: a,
        propertyName: d
    });
    a.style[d] = this.li && Ja(this.li, c) || ""
};
b.unsubscribe = function(a) {
    if (a)
        for (var c = Object.keys(this.Dg), d = 0, e; e = c[d]; d++) {
            for (var f = this.Dg[e], h = f.length - 1; 0 <= h; h--) f[h].element === a && f.splice(h, 1);
            this.Dg[e].length || delete this.Dg[e]
        }
};
b.J = function() {
    this.Dg = this.gq = this.li = this.Ef = null
};
g.te = function(a, c) {
    g.te.v.constructor.call(this, a, c);
    this.Ls = !1;
    this.Ke = Object.create(null);
    this.HD = this.Ip = 0;
    this.zC = this.Ux = null
};
g.g.object.X(g.te, g.sg);
g.te.oH = 5;
g.te.pH = 6;
b = g.te.prototype;
b.fw = function(a) {
    this.zC = this.Bc.options.Ub && this.Bc.options.Ub.lD;
    g.te.v.fw.call(this, a);
    !this.Is && g.Touch.Qs(a) && dd(this, a)
};
b.rm = function(a) {
    this.Ux = g.N.ta(document, "mousedown", null, this.fJ.bind(this), !0);
    this.rt = g.N.ta(document, "mousemove", null, this.Om.bind(this), !0);
    this.st = g.N.ta(document, "mouseup", null, this.Ds.bind(this), !0);
    a.preventDefault();
    a.stopPropagation()
};
b.fJ = function(a) {
    !this.Ac() && g.Touch.Qs(a) && (dd(this, a), this.Ls && g.Bj())
};
b.Om = function(a) {
    if (this.Ac()) g.Touch.Ny(a) && g.te.v.Om.call(this, a);
    else if (this.Ls) {
        if (g.Touch.Qs(a)) {
            this.Ke[g.Touch.Cs(a)] = ed(this, a);
            var c = Object.keys(this.Ke);
            if (this.zC && 2 === c.length) {
                c = Object.keys(this.Ke);
                c = g.g.ba.ew(this.Ke[c[0]], this.Ke[c[1]]) / this.HD;
                if (0 < this.Ip && Infinity > this.Ip) {
                    var d = c - this.Ip;
                    d = 0 < d ? d * g.te.oH : d * g.te.pH;
                    var e = this.Bc,
                        f = g.g.zp(a, t(e), sa(e));
                    e.zoom(f.x, f.y, d)
                }
                this.Ip = c;
                a.preventDefault()
            } else g.te.v.Om.call(this, a)
        }
        g.Bj()
    } else g.te.v.Om.call(this, a)
};
b.Ds = function(a) {
    if (g.Touch.Qs(a) && !this.Ac()) {
        var c = g.Touch.Cs(a);
        this.Ke[c] && delete this.Ke[c];
        2 > Object.keys(this.Ke).length && (this.Ke = Object.create(null), this.Ip = 0)
    }!this.Ls || this.Ac() ? g.Touch.Ny(a) && g.te.v.Ds.call(this, a) : (a.preventDefault(), a.stopPropagation(), this.J())
};
b.J = function() {
    g.te.v.J.call(this);
    this.Ux && g.N.Pa(this.Ux)
};

function dd(a, c) {
    a.Ke[g.Touch.Cs(c)] = ed(a, c);
    var d = Object.keys(a.Ke);
    2 == d.length && (a.HD = g.g.ba.ew(a.Ke[d[0]], a.Ke[d[1]]), a.Ls = !0, c.preventDefault())
}

function ed(a, c) {
    return a.Bc ? new g.g.ba(c.pageX ? c.pageX : c.changedTouches[0].pageX, c.pageY ? c.pageY : c.changedTouches[0].pageY) : null
};
g.EA = function(a) {
    this.ey = a;
    this.co = Object.create(null)
};
b = g.EA.prototype;
b.jx = null;
b.J = function() {
    this.co = this.ey = null
};
b.load = function(a, c) {
    if (a.length) {
        try {
            var d = new g.g.global.Audio
        } catch (l) {
            return
        }
        for (var e, f = 0; f < a.length; f++) {
            var h = a[f],
                k = h.match(/\.(\w+)$/);
            if (k && d.canPlayType("audio/" + k[1])) {
                e = new g.g.global.Audio(h);
                break
            }
        }
        e && e.play && (this.co[c] = e)
    }
};
b.preload = function() {
    for (var a in this.co) {
        var c = this.co[a];
        c.volume = .01;
        var d = c.play();
        void 0 !== d ? d.then(c.pause).catch(function() {}) : c.pause();
        if (g.g.userAgent.Yl || g.g.userAgent.Tz) break
    }
};
b.play = function(a, c) {
    var d = this.co[a];
    d ? (a = new Date, null != this.jx && a - this.jx < g.NG || (this.jx = a, d = g.g.userAgent.Yl || g.g.userAgent.Dn ? d : d.cloneNode(), d.volume = void 0 === c ? 1 : c, d.play())) : this.ey && this.ey.zg.play(a, c)
};
g.GA = function(a) {
    this.Fo = a;
    this.eb()
};
b = g.GA.prototype;
b.Za = null;
b.Fo = null;
b.eb = function() {
    this.Za || (this.Za = g.g.o.K(g.g.D.yk, {
        xmlns: g.g.o.zr,
        "xmlns:html": g.g.o.Wl,
        "xmlns:xlink": g.g.o.mf,
        version: "1.1",
        "class": "blocklyWsDragSurface blocklyOverflowVisible"
    }, null), this.Fo.appendChild(this.Za))
};
b.Gl = function(a, c) {
    a = a.toFixed(0);
    c = c.toFixed(0);
    this.Za.style.display = "block";
    g.g.o.Wp(this.Za, "translate3d(" + a + "px, " + c + "px, 0px)")
};
b.Lw = function() {
    return g.g.xf(this.Za)
};
b.Ur = function(a) {
    if (!a) throw Error("Couldn't clear and hide the drag surface: missing new surface.");
    var c = this.Za.childNodes[0],
        d = this.Za.childNodes[1];
    if (!(c && d && g.g.o.Pw(c, "blocklyBlockCanvas") && g.g.o.Pw(d, "blocklyBubbleCanvas"))) throw Error("Couldn't clear and hide the drag surface. A node was missing.");
    null != this.py ? g.g.o.Wk(c, this.py) : a.insertBefore(c, a.firstChild);
    g.g.o.Wk(d, c);
    this.Za.style.display = "none";
    if (this.Za.childNodes.length) throw Error("Drag surface was not cleared.");
    g.g.o.Wp(this.Za,
        "");
    this.py = null
};
g.bd = function(a, c, d) {
    g.bd.v.constructor.call(this, a);
    this.ke = new(g.B.Wf(g.B.S.cA, a, !0))(this);
    this.ae = a.ae || this.ke.ae.bind(this.ke);
    this.Xp = a.Xp || g.bd.XK;
    this.Me = new g.Vb;
    this.bs = g.Tl.T(this.Fh);
    c && (this.Je = c);
    d && (this.Ll = d);
    this.Ut = !!this.Ll && g.g.Xk();
    this.gp = [];
    this.zg = new g.EA(a.uc);
    this.yf = this.options.Ow ? new g.mk(this.options.Ow, a.hC) : null;
    this.cg = new g.Vn(this);
    this.Wy = Object.create(null);
    this.xw = Object.create(null);
    g.ka && g.ka.Lk && fd(this, g.ic, g.ka.Lk);
    g.AA && g.AA.Lk && fd(this, g.iH, g.AA.Lk);
    g.Da && g.Da.Lk && (fd(this, g.hm, g.Da.Lk), C(this, g.Da.NJ));
    this.Cc = this.options.uc ? this.options.uc.Cc : new g.xA(this, this.options.jL || g.uh.zi);
    this.Cc.gq.push(this);
    this.Rb = g.m.T(this.options.Pp || "geras", this.Og(), this.options.Qp);
    this.Av = null;
    this.Zm = !1;
    this.mq = [];
    this.hw = [];
    this.zv = new g.g.ad(0, 0)
};
g.g.object.X(g.bd, g.Wb);
b = g.bd.prototype;
b.Et = null;
b.ua = !0;
b.Xe = !0;
b.ag = !1;
b.qp = !1;
b.zy = !0;
b.scrollX = 0;
b.scrollY = 0;
b.CB = null;
b.scale = 1;
b.Jx = 1;
b.cD = 0;
b.$C = 0;
b.wn = null;
b.tb = null;
b.za = null;
b.Sb = null;
b.Dd = null;
b.Je = null;
b.Ll = null;
b.Ut = !1;
b.Hs = !1;
b.Zw = null;
b.HC = null;
b.Ta = null;
b.vC = null;
b.$w = !0;
b.gi = function(a) {
    this.cg.gi(a)
};
b.Rj = function(a) {
    this.cg.Rj(a)
};
b.ap = function(a) {
    return this.cg ? this.cg.ap(a) : null
};
b.Jm = function() {
    return this.cg ? this.cg.Jm() : null
};
b.Og = function() {
    return this.Cc.Og()
};
b.Yp = function(a) {
    a || (a = g.uh.zi);
    this.Cc.Yp(a)
};
b.hn = function() {
    this.P && this.Rb.sy(this.P, this.Og());
    gd(z(this, !1).filter(function(c) {
        return !!c.Dl
    }));
    hd(this);
    this.Sb && this.Sb.hn();
    this.isVisible() && this.ub(!0);
    var a = new(g.h.get(g.h.Uu))(this.Og().name, this.id);
    g.h.Ia(a)
};

function gd(a) {
    for (var c = 0, d; d = a[c]; c++) {
        var e = d.Dl;
        if (e && (d.Fb(e), d.qd)) {
            var f = d.qd.s;
            if (f && z(f, !1)) {
                var h = z(f, !1);
                for (e = 0; d = h[e]; e++) d.Fb(d.Dl);
                if (d = f.Se())
                    for (f = z(d.s, !1), e = 0; d = f[e]; e++) d.Fb(d.Dl)
            }
        }
    }
}

function sa(a) {
    if (a.$w) {
        var c = t(a).getScreenCTM();
        c && (a.vC = c.inverse(), a.$w = !1)
    }
    return a.vC
}
b.rq = function() {
    this.$w = !0
};
b.isVisible = function() {
    return this.Xe
};

function db(a, c) {
    var d = 0,
        e = 0,
        f = 1;
    if (g.g.o.containsNode(a.Bb, c) || g.g.o.containsNode(a.gg, c)) f = a.scale;
    do {
        var h = g.g.xf(c);
        if (c == a.Bb || c == a.gg) f = 1;
        d += h.x * f;
        e += h.y * f;
        c = c.parentNode
    } while (c && c != t(a));
    return new g.g.ba(d, e)
}

function ad(a) {
    a = a.zv;
    return new g.g.ad(a.width, a.height)
}

function aa(a) {
    if (!a.Zw)
        for (var c = a.P; c;) {
            if (-1 != (" " + (c.getAttribute("class") || "") + " ").indexOf(" injectionDiv ")) {
                a.Zw = c;
                break
            }
            c = c.parentNode
        }
    return a.Zw
}
b.eb = function(a) {
    this.P = g.g.o.K(g.g.D.oc, {
        "class": "blocklyWorkspace"
    }, null);
    a && (this.ud = g.g.o.K(g.g.D.Hb, {
        height: "100%",
        width: "100%",
        "class": a
    }, this.P), "blocklyMainBackground" == a && this.yf ? this.ud.style.fill = "url(#" + this.yf.Nm.id + ")" : this.Cc.subscribe(this.ud, "workspaceBackgroundColour", "fill"));
    this.Bb = g.g.o.K(g.g.D.oc, {
        "class": "blocklyBlockCanvas"
    }, this.P);
    this.gg = g.g.o.K(g.g.D.oc, {
        "class": "blocklyBubbleCanvas"
    }, this.P);
    this.ag || (g.N.ta(this.P, "mousedown", this, this.Ej, !1, !0), g.N.ta(this.P, "wheel",
        this, this.iK));
    this.options.ep && (this.Sb = new(g.B.Wf(g.B.S.uA, this.options, !0))(this));
    this.yf && this.yf.update(this.scale);
    Uc(this);
    var c = g.B.Wf(g.B.S.yi, this.options);
    c && (a = this.cg, c = new c, a.tf && a.tf.vf && a.tf.vf.J(), a.tf = c, a.tf && (c = a.tf, c = new g.m.Gi(a.s, a.s.Rb.V(), c), a.tf.vf = c, a.gi(a.tf.vf.eb())));
    this.Rb.eb(this.P, this.Og());
    return this.P
};
b.J = function() {
    this.ua = !1;
    this.Dd && this.Dd.cancel();
    this.P && (g.g.o.removeNode(this.P), this.P = null);
    this.gg = this.Bb = null;
    this.Sb && (this.Sb.J(), this.Sb = null);
    this.za && (this.za.J(), this.za = null);
    this.wn && (this.wn.J(), this.wn = null);
    this.tb && (this.tb.J(), this.tb = null);
    this.Bq && (this.Bq.J(), this.Bq = null);
    this.zg && (this.zg.J(), this.zg = null);
    this.yf && (this.yf.J(), this.yf = null);
    this.Rb.J();
    this.cg && (this.cg.J(), this.cg = null);
    g.bd.v.J.call(this);
    if (this.Cc) {
        var a = this.Cc,
            c = a.gq.indexOf(this);
        if (0 > c) throw Error("Cannot unsubscribe a workspace that hasn't been subscribed.");
        a.gq.splice(c, 1);
        this.Cc.unsubscribe(this.ud);
        this.options.uc || (this.Cc.J(), this.Cc = null)
    }
    this.xw = this.Wy = this.bs = null;
    this.options.uc || (a = t(this)) && a.parentNode && g.g.o.removeNode(a.parentNode);
    this.Et && (g.N.Pa(this.Et), this.Et = null)
};
b.Wg = function(a, c) {
    return new g.lb(this, a, c)
};

function id(a, c) {
    var d = new g.Sd({
        parentWorkspace: a,
        rtl: a.M,
        oneBasedIndex: a.options.Df,
        horizontalLayout: a.ce,
        renderer: a.options.Pp,
        rendererOverrides: a.options.Qp,
        move: {
            scrollbars: !0
        }
    });
    d.Lb = a.options.Lb;
    a.za = a.ce ? new(g.B.Wf(g.B.S.mu, a.options, !0))(d) : new(g.B.Wf(g.B.S.dr, a.options, !0))(d);
    a.za.Ui = !1;
    a.za.s.ub(!0);
    return a.za.eb(c)
}
b.Se = function(a) {
    return this.za || a ? this.za : this.Sb ? this.Sb.Se() : null
};

function Aa(a) {
    a.zy && a.ua && (a.tb && a.tb.resize(), a.rq())
}
b.resize = function() {
    this.Sb && this.Sb.position();
    this.za && this.za.position();
    var a = hb(this.Me, g.Vb.fc.Hu);
    var c = this.ke;
    c = {
        bE: Ya(c),
        Gr: $c(c),
        TD: Zc(c)
    };
    for (var d = [], e = 0, f; f = a[e]; e++) f.position(c, d), (f = f.Im()) && d.push(f);
    this.tb && this.tb.resize();
    this.rq();
    Uc(this)
};

function Cb(a) {
    var c = g.g.SI();
    g.g.ba.wf(a.HC, c) || (a.HC = c, a.rq(), Uc(a))
}

function jd(a, c, d) {
    var e = t(a);
    c && (a.zv.width = c, e.IH = c);
    d && (a.zv.height = d, e.HH = d)
}

function t(a) {
    if (!a.Av)
        for (var c = a.P; c;) {
            if ("svg" == c.tagName) {
                a.Av = c;
                break
            }
            c = c.parentNode
        }
    return a.Av
}

function ca(a) {
    if (g.h.isEnabled()) {
        var c = a.scale,
            d = -a.scrollY,
            e = -a.scrollX;
        if (!(c == a.Jx && 1 > Math.abs(d - a.cD) && 1 > Math.abs(e - a.$C))) {
            var f = new(g.h.get(g.h.lo))(d, e, c, a.id, a.Jx);
            a.Jx = c;
            a.cD = d;
            a.$C = e;
            g.h.Ia(f)
        }
    }
}
b.translate = function(a, c) {
    if (this.Ut && this.Hs) this.Ll.Gl(a, c);
    else {
        var d = "translate(" + a + "," + c + ") scale(" + this.scale + ")";
        this.Bb.setAttribute("transform", d);
        this.gg.setAttribute("transform", d)
    }
    if (this.Je) {
        d = this.Je;
        var e = this.scale;
        d.Nj = e;
        var f = a.toFixed(0),
            h = c.toFixed(0);
        d.aB.x = parseInt(f, 10);
        d.aB.y = parseInt(h, 10);
        d.Jg.setAttribute("transform", "translate(" + f + "," + h + ") scale(" + e + ")")
    }
    this.yf && this.yf.moveTo(a, c);
    ca(this)
};

function ua(a) {
    if (a.Ut) {
        a.Hs = !1;
        var c = a.Ll.Lw();
        a.Ll.Ur(a.P);
        c = "translate(" + c.x + "," + c.y + ") scale(" + a.scale + ")";
        a.Bb.setAttribute("transform", c);
        a.gg.setAttribute("transform", c)
    }
}

function ta(a) {
    if (a.Ut && !a.Hs) {
        a.Hs = !0;
        var c = a.Bb.previousSibling,
            d = parseInt(t(a).getAttribute("width"), 10),
            e = parseInt(t(a).getAttribute("height"), 10),
            f = g.g.xf(a.Bb),
            h = a.Ll,
            k = a.Bb,
            l = a.gg,
            m = a.scale;
        if (h.Za.childNodes.length) throw Error("Already dragging a block.");
        h.py = c;
        k.setAttribute("transform", "translate(0, 0) scale(" + m + ")");
        l.setAttribute("transform", "translate(0, 0) scale(" + m + ")");
        h.Za.setAttribute("width", d);
        h.Za.setAttribute("height", e);
        h.Za.appendChild(k);
        h.Za.appendChild(l);
        h.Za.style.display =
            "block";
        a.Ll.Gl(f.x, f.y)
    }
}
b.Qh = function() {
    var a = this.ae();
    return a ? a.Mc / this.scale : 0
};
b.ub = function(a) {
    this.Xe = a;
    if (this.P)
        if (this.tb && this.tb.Al(a), this.Se() && this.Se().Al(a), t(this).style.display = a ? "block" : "none", this.Sb && this.Sb.ub(a), a) {
            a = z(this, !1);
            for (var c = a.length - 1; 0 <= c; c--) a[c].tp();
            this.Ja();
            this.Sb && this.Sb.position()
        } else g.Uc(!0)
};
b.Ja = function() {
    for (var a = z(this, !1), c = a.length - 1; 0 <= c; c--) a[c].Ja(!1);
    if (this.Dd)
        for (a = this.Dd.Lm(), c = 0; c < a.length; c++) a[c].Ja(!1);
    c = this.cg;
    c.s.Zm && c.Hh && c.s.Jm().draw()
};

function kd(a, c) {
    var d = u;
    if (void 0 === c) {
        for (var e = 0, f; f = d.gp[e]; e++) f.fg(!1);
        d.gp.length = 0
    }
    if (f = a ? d.Fd(a) : null)(a = void 0 === c || c) ? -1 == d.gp.indexOf(f) && d.gp.push(f) : g.g.uo(d.gp, f), f.fg(a)
}
b.wt = function(a) {
    if (this.ua && a.tagName && !(a.getElementsByTagName("block").length >= Na(this)))
        if (this.Dd && this.Dd.cancel(), "comment" == a.tagName.toLowerCase()) {
            g.h.disable();
            try {
                var c = g.nm.Mk(a),
                    d = parseInt(a.getAttribute("x"), 10),
                    e = parseInt(a.getAttribute("y"), 10);
                isNaN(d) || isNaN(e) || (this.M && (d = -d), c.moveBy(d + 50, e + 50))
            } finally {
                g.h.enable()
            }
            g.h.isEnabled() && g.FA.$O(c);
            c.select()
        } else {
            g.h.disable();
            try {
                var f = g.O.Ik(a, this),
                    h = parseInt(a.getAttribute("x"), 10),
                    k = parseInt(a.getAttribute("y"), 10);
                if (!isNaN(h) &&
                    !isNaN(k)) {
                    this.M && (h = -h);
                    do {
                        a = !1;
                        var l = z(this, !1);
                        c = 0;
                        for (var m; m = l[c]; c++) {
                            var n = m.kb();
                            if (1 >= Math.abs(h - n.x) && 1 >= Math.abs(k - n.y)) {
                                a = !0;
                                break
                            }
                        }
                        if (!a) {
                            var q = f.Yf(!1);
                            c = 0;
                            for (var v; v = q[c]; c++)
                                if (v.closest(g.Td, new g.g.ba(h, k)).connection) {
                                    a = !0;
                                    break
                                }
                        }
                        a && (h = this.M ? h - g.Td : h + g.Td, k += 2 * g.Td)
                    } while (a);
                    f.moveBy(h, k)
                }
            } finally {
                g.h.enable()
            }
            g.h.isEnabled() && !f.Sa && g.h.Ia(new(g.h.get(g.h.si))(f));
            f.select()
        }
};

function hd(a) {
    (a = a.ag ? a.Ta : a) && !a.Dd && a.Sb && a.Sb.Se() && (a = a.Sb, a.Eb && a.Eb.Vh() && a.Eb.gj.length && a.za.show(a.Eb.gj))
}
b.Mj = function(a, c) {
    g.bd.v.Mj.call(this, a, c);
    hd(this)
};
b.Jh = function(a) {
    g.bd.v.Jh.call(this, a);
    hd(this)
};
b.sf = function(a, c, d) {
    a = g.bd.v.sf.call(this, a, c, d);
    hd(this);
    return a
};

function Uc(a) {
    var c = hb(a.Me, g.Vb.fc.Yq);
    a.hw = [];
    for (var d = 0, e; e = c[d]; d++) {
        var f = e.Dw();
        f && a.hw.push({
            Fk: e,
            SH: f
        })
    }
}

function sb(a, c) {
    for (var d = 0, e; e = a.hw[d]; d++)
        if (e.SH.contains(c.clientX, c.clientY)) return e.Fk;
    return null
}
b.Ej = function(a) {
    var c = this.Mh(a);
    c && Hb(c, a, this)
};
b.bq = function(a, c) {
    a = g.g.zp(a, t(this), sa(this));
    a.x /= this.scale;
    a.y /= this.scale;
    this.CB = g.g.ba.Lo(c, a)
};
b.Ac = function() {
    return null != this.Dd && this.Dd.Ac()
};
b.Hc = function() {
    return this.options.Ld && !!this.options.Ld.scrollbars || this.options.Ld && this.options.Ld.zn || this.options.Ld && this.options.Ld.Lh || this.options.Ub && this.options.Ub.zn || this.options.Ub && this.options.Ub.lD
};

function xb(a) {
    var c = !!a.tb;
    return a.Hc() && (!c || c && !!a.tb.Kb)
}

function yb(a) {
    var c = !!a.tb;
    return a.Hc() && (!c || c && !!a.tb.vb)
}
b.iK = function(a) {
    if (g.sg.Uk()) a.preventDefault(), a.stopPropagation();
    else {
        var c = this.options.Ub && this.options.Ub.zn,
            d = this.options.Ld && this.options.Ld.zn;
        if (c || d) {
            var e = g.g.ZB(a);
            !c || !a.ctrlKey && d ? (c = this.scrollX - e.x, d = this.scrollY - e.y, a.shiftKey && !e.x && (c = this.scrollX - e.y, d = this.scrollY), this.scroll(c, d)) : (e = -e.y / 50, c = g.g.zp(a, t(this), sa(this)), this.zoom(c.x, c.y, e));
            a.preventDefault()
        }
    }
};

function xa(a) {
    a = [].concat(a.mq);
    if (!a.length) return new g.g.Rect(0, 0, 0, 0);
    for (var c = a[0].Im(), d = 1; d < a.length; d++) {
        var e = a[d];
        e.nd && e.nd() || (e = e.Im(), e.top < c.top && (c.top = e.top), e.bottom > c.bottom && (c.bottom = e.bottom), e.left < c.left && (c.left = e.left), e.right > c.right && (c.right = e.right))
    }
    return c
}
b.Zp = function(a) {
    if (!this.options.readOnly && !this.ag) {
        var c = sc(g.Va.Vd.ue, {
            u: this
        });
        this.VH && this.VH(c, a);
        g.Ya.show(a, c, this.M)
    }
};

function ra(a) {
    if (a.options.uc) ra(a.options.uc);
    else {
        g.rp = a;
        document.activeElement && document.activeElement.blur && document.activeElement.blur();
        try {
            t(a).focus({
                preventScroll: !0
            })
        } catch (c) {
            try {
                t(a).parentNode.setActive()
            } catch (d) {
                t(a).parentNode.focus({
                    preventScroll: !0
                })
            }
        }
    }
}
b.zoom = function(a, c, d) {
    d = Math.pow(this.options.Ub.BD, d);
    var e = this.scale * d;
    if (this.scale != e) {
        e > this.options.Ub.vp ? d = this.options.Ub.vp / this.scale : e < this.options.Ub.xp && (d = this.options.Ub.xp / this.scale);
        var f = this.Bb.getCTM(),
            h = t(this).createSVGPoint();
        h.x = a;
        h.y = c;
        h = h.matrixTransform(f.inverse());
        a = h.x;
        c = h.y;
        f = f.translate(a * (1 - d), c * (1 - d)).scale(d);
        this.scrollX = f.e;
        this.scrollY = f.f;
        this.setScale(e)
    }
};

function ld(a, c) {
    var d = a.ae();
    if (a.za) {
        var e = d.MD ? d.MD / 2 : 0;
        d = d.LD ? d.LD / 2 : 0
    } else e = d.Mc / 2 + d.Ad, d = d.Yc / 2 + d.Wd;
    a.zoom(e, d, c)
}
b.yI = function() {
    g.g.o.Zb(this.Bb, "blocklyCanvasTransitioning");
    g.g.o.Zb(this.gg, "blocklyCanvasTransitioning")
};
b.setScale = function(a) {
    this.options.Ub.vp && a > this.options.Ub.vp ? a = this.options.Ub.vp : this.options.Ub.xp && a < this.options.Ub.xp && (a = this.options.Ub.xp);
    this.scale = a;
    g.Uc(!1);
    this.za && (this.za.qy(), Uc(this));
    this.yf && this.yf.update(this.scale);
    a = this.ae();
    this.scrollX -= a.Ad;
    this.scrollY -= a.Wd;
    a.Lf += a.Ad;
    a.Mf += a.Wd;
    this.scroll(this.scrollX, this.scrollY);
    if (this.tb)
        if (this.za) {
            var c = this.tb;
            c.Kb && ma(c.Kb, a);
            c.vb && oa(c.vb, a)
        } else c = this.tb, c.Kb && na(c.Kb, a), c.vb && pa(c.vb, a)
};

function md(a) {
    return a.options.uc ? md(a.options.uc) : a.scale
}
b.scroll = function(a, c) {
    g.Uc(!0);
    var d = this.ae();
    a = Math.min(a, -d.scrollLeft);
    c = Math.min(c, -d.scrollTop);
    var e = d.scrollTop + Math.max(0, d.scrollHeight - d.Yc);
    a = Math.max(a, -(d.scrollLeft + Math.max(0, d.scrollWidth - d.Mc)));
    c = Math.max(c, -e);
    this.scrollX = a;
    this.scrollY = c;
    this.tb && this.tb.set(-(a + d.scrollLeft), -(c + d.scrollTop), !1);
    a += d.Ad;
    c += d.Wd;
    this.translate(a, c)
};
g.bd.XK = function(a) {
    var c = this.ae();
    "number" == typeof a.x && (this.scrollX = -(c.scrollLeft + (c.scrollWidth - c.Mc) * a.x));
    "number" == typeof a.y && (this.scrollY = -(c.scrollTop + (c.scrollHeight - c.Yc) * a.y));
    this.translate(this.scrollX + c.Ad, this.scrollY + c.Wd)
};
b = g.bd.prototype;
b.Fd = function(a) {
    return g.bd.v.Fd.call(this, a)
};
b.zc = function(a) {
    return g.bd.v.zc.call(this, a)
};
b.Ir = function(a) {
    this.mq.push(a);
    g.bd.v.Ir.call(this, a)
};
b.At = function(a) {
    g.g.uo(this.mq, a);
    g.bd.v.At.call(this, a)
};
b.fd = function(a) {
    var c = !this.zy && a;
    this.zy = a;
    c && Aa(this)
};
b.clear = function() {
    this.fd(!1);
    g.bd.v.clear.call(this);
    this.mq = [];
    this.fd(!0)
};

function nd(a, c) {
    if ("function" != typeof c) throw TypeError("Button callbacks must be functions.");
    a.xw.CREATE_VARIABLE = c
}

function ac(a, c) {
    return (a = a.xw[c]) ? a : null
}

function fd(a, c, d) {
    if ("function" != typeof d) throw TypeError("Toolbox category callbacks must be functions.");
    a.Wy[c] = d
}
b.Mh = function(a) {
    var c = "mousedown" == a.type || "touchstart" == a.type || "pointerdown" == a.type,
        d = this.Dd;
    return d ? c && d.Rk ? (console.warn("Tried to start the same gesture twice."), d.cancel(), null) : d : c ? this.Dd = new g.te(a, this) : null
};

function Hc(a) {
    a.Dd && a.Dd.cancel()
};
g.kk = function(a) {
    g.kk.v.constructor.call(this);
    a.Xp = this.WK.bind(this);
    var c = this.s = new g.bd(a),
        d = new g.Pn(this.s, this);
    c.ke = d;
    c.ae = c.ke.ae.bind(c.ke);
    this.s.ag = !0;
    this.s.ub(this.Xe);
    this.id = g.g.Mg();
    this.M = !!a.M;
    this.ce = !1;
    this.Uj = a.Lb;
    this.sw = [];
    this.Vs = [];
    this.xo = [];
    this.ie = [];
    this.jy = [];
    this.un = this.s.Rb.V().Br;
    this.Ta = null
};
g.g.object.X(g.kk, g.hk);
b = g.kk.prototype;
b.Ui = !0;
b.Xe = !1;
b.Gk = !0;
b.Mb = 8;
b.pk = g.kk.prototype.Mb;
b.sF = 3 * g.kk.prototype.pk;
b.tF = 3 * g.kk.prototype.pk;
b.LG = 2.5;
b.wb = 0;
b.Tc = 0;
b.uI = 70;
b.eb = function(a) {
    this.P = g.g.o.K(a, {
        "class": "blocklyFlyout",
        style: "display: none"
    }, null);
    this.ud = g.g.o.K(g.g.D.re, {
        "class": "blocklyFlyoutBackground"
    }, this.P);
    this.P.appendChild(this.s.eb());
    this.s.Cc.subscribe(this.ud, "flyoutBackgroundColour", "fill");
    this.s.Cc.subscribe(this.ud, "flyoutOpacity", "fill-opacity");
    return this.P
};
b.T = function(a) {
    this.Ta = a;
    this.s.Ta = a;
    this.s.tb = new g.Su(this.s, this.ce, !this.ce, "blocklyFlyoutScrollbar", this.LG);
    this.$a();
    Array.prototype.push.apply(this.sw, g.N.ta(this.P, "wheel", this, this.xL));
    this.Ui || (this.ts = this.tw.bind(this), C(this.Ta, this.ts));
    Array.prototype.push.apply(this.sw, g.N.ta(this.ud, "mousedown", this, this.Ej));
    this.s.Mh = this.Ta.Mh.bind(this.Ta);
    this.s.Jy(this.Ta.Ua);
    var c = this.s;
    c.Jj = new g.bv(c);
    eb(a.Me, {
        Fk: this,
        weight: 1,
        Bg: [g.Vb.fc.Xq, g.Vb.fc.Yq]
    })
};
b.J = function() {
    this.$a();
    fb(this.s.Me, this.id);
    g.N.Pa(this.sw);
    this.ts && (Ra(this.Ta, this.ts), this.ts = null);
    this.s && (this.s.Cc.unsubscribe(this.ud), this.s.Ta = null, this.s.J(), this.s = null);
    this.P && (g.g.o.removeNode(this.P), this.P = null);
    this.Ta = this.ud = null
};
b.Qh = function() {
    return this.wb
};
b.isVisible = function() {
    return this.Xe
};
b.ub = function(a) {
    var c = a != this.isVisible();
    this.Xe = a;
    c && (this.Ui || Uc(this.s), this.qq())
};
b.Al = function(a) {
    var c = a != this.Gk;
    this.Gk = a;
    c && this.qq()
};
b.qq = function() {
    var a = this.Gk ? this.isVisible() : !1;
    this.P.style.display = a ? "block" : "none";
    this.s.tb.Al(a)
};
b.$a = function() {
    if (this.isVisible()) {
        this.ub(!1);
        for (var a = 0, c; c = this.ie[a]; a++) g.N.Pa(c);
        this.ie.length = 0;
        this.Kj && (Ra(this.s, this.Kj), this.Kj = null)
    }
};
b.show = function(a) {
    this.s.fd(!1);
    this.$a();
    od(this);
    "string" == typeof a && (a = pd(this, a));
    this.ub(!0);
    a = g.g.Z.mB(a);
    a = qd(this, a);
    rd(this, a.$H, a.GI);
    this.ie.push(g.N.ta(this.ud, "mouseover", this, function() {
        for (var c = this.s.zc(!1), d = 0, e; e = c[d]; d++) e.Op()
    }));
    this.ce ? this.Tc = 0 : this.wb = 0;
    this.s.fd(!0);
    this.qy();
    this.tw();
    this.position();
    this.Kj = this.qy.bind(this);
    C(this.s, this.Kj)
};

function qd(a, c) {
    var d = [],
        e = [];
    a.jy.length = 0;
    for (var f = a.ce ? a.sF : a.tF, h = 0, k; k = c[h]; h++) {
        if (k.custom) {
            var l = pd(a, k.custom);
            l = g.g.Z.mB(l);
            c.splice.apply(c, [h, 1].concat(l));
            k = c[h]
        }
        switch (k.kind.toUpperCase()) {
            case "BLOCK":
                l = k;
                var m = l;
                k = null;
                var n = m.blockxml;
                n && "string" != typeof n ? k = n : n && "string" == typeof n ? (k = g.O.ze(n), m.blockxml = k) : m.type && (k = g.g.xml.createElement("xml"), k.setAttribute("type", m.type), k.setAttribute("disabled", m.disabled), m.blockxml = k);
                if (!k) throw Error("Error: Invalid block definition. Block definition must have blockxml or type.");
                m = k;
                k = a;
                n = g.O.Ik(m, k.s);
                n.isEnabled() || k.jy.push(n);
                k = n;
                l = parseInt(l.gap || m.getAttribute("gap"), 10);
                e.push(isNaN(l) ? f : l);
                d.push({
                    type: "block",
                    block: k
                });
                break;
            case "SEP":
                l = e;
                m = f;
                k = parseInt(k.gap, 10);
                !isNaN(k) && 0 < l.length ? l[l.length - 1] = k : l.push(m);
                break;
            case "LABEL":
                l = sd(a, k, !0);
                d.push({
                    type: "button",
                    button: l
                });
                e.push(f);
                break;
            case "BUTTON":
                l = sd(a, k, !1), d.push({
                    type: "button",
                    button: l
                }), e.push(f)
        }
    }
    return {
        $H: d,
        GI: e
    }
}

function pd(a, c) {
    c = a.s.Ta.Wy[c] || null;
    if ("function" != typeof c) throw TypeError("Couldn't find a callback function when opening a toolbox category.");
    a = c(a.s.Ta);
    if (!Array.isArray(a)) throw new TypeError("Result of toolbox category callback must be an array.");
    return a
}

function sd(a, c, d) {
    if (!g.lk) throw Error("Missing require for Blockly.FlyoutButton");
    return new g.lk(a.s, a.Ta, c, d)
}

function od(a) {
    for (var c = a.s.zc(!1), d = 0, e; e = c[d]; d++) e.u == a.s && e.J(!1, !1);
    for (d = 0; d < a.Vs.length; d++)
        if (c = a.Vs[d]) g.L.$y(c), g.g.o.removeNode(c);
    for (d = a.Vs.length = 0; c = a.xo[d]; d++) c.J();
    a.xo.length = 0;
    a.s.Jj.clear()
}

function td(a, c) {
    return function(d) {
        var e = a.Ta.Mh(d);
        e && (Jb(e, c), Ib(e, d, a))
    }
}
b.Ej = function(a) {
    var c = this.Ta.Mh(a);
    c && Ib(c, a, this)
};

function Db(a, c) {
    var d = null;
    g.h.disable();
    var e = a.Ta.Nk();
    a.Ta.fd(!1);
    try {
        var f = a.Ta;
        if (!c.Na()) throw Error("oldBlock is not rendered.");
        var h = g.O.Ah(c, !0);
        f.fd(!1);
        var k = g.O.Ik(h, f);
        if (!k.Na()) throw Error("block is not rendered.");
        var l = g.g.$o(f.Bb),
            m = g.g.$o(a.s.Bb),
            n = c.kb();
        n.scale(a.s.scale);
        var q = g.g.ba.sum(m, n),
            v = g.g.ba.Lo(q, l);
        v.scale(1 / f.scale);
        k.moveBy(v.x, v.y);
        d = k
    } finally {
        g.h.enable()
    }
    g.Uc();
    c = g.ka.LB(a.Ta, e);
    if (g.h.isEnabled()) {
        g.h.oa(!0);
        for (e = 0; e < c.length; e++) f = c[e], g.h.Ia(new(g.h.get(g.h.jo))(f));
        g.h.Ia(new(g.h.get(g.h.si))(d))
    }
    a.Ui ? a.$a() : a.tw();
    return d
}
b.tw = function() {
    for (var a = this.s.zc(!1), c = 0, d; d = a[c]; c++)
        if (-1 == this.jy.indexOf(d))
            for (var e = Oa(this.Ta, g.g.Aw(d)); d;) d.le(e), d = r(d)
};
b.qy = function() {
    this.Kj && Ra(this.s, this.Kj);
    this.s.scale = this.Ta.scale;
    for (var a = 0, c = this.s.zc(!1), d = 0, e; e = c[d]; d++) {
        var f = D(e).width;
        e.R && (f -= this.un);
        a = Math.max(a, f)
    }
    for (d = 0; e = this.xo[d]; d++) a = Math.max(a, e.width);
    a += 1.5 * this.pk + this.un;
    a *= this.s.scale;
    a += g.bb.sd;
    if (this.wb != a) {
        for (d = 0; e = c[d]; d++) {
            if (this.M) {
                f = e.kb().x;
                var h = a / this.s.scale - this.pk;
                e.R || (h -= this.un);
                e.moveBy(h - f, 0)
            }
            e.IB && (f = e.IB, h = e, e = D(h), f.setAttribute("width", e.width), f.setAttribute("height", e.height), h = h.kb(), f.setAttribute("y",
                h.y), f.setAttribute("x", this.M ? h.x - e.width : h.x))
        }
        if (this.M)
            for (d = 0; e = this.xo[d]; d++) e.moveTo(a / this.s.scale - e.width - this.pk - this.un, e.rl.y);
        this.Ta.Lb != this.Uj || this.Uj != g.g.Z.Ma.Nb || this.Ta.Sb || this.Ta.translate(this.Ta.scrollX + a, this.Ta.scrollY);
        this.wb = a;
        this.position();
        Uc(this.Ta)
    }
    this.Kj && C(this.s, this.Kj)
};

function Bb(a) {
    return a.s.tb ? a.s.tb.isVisible() : !1
};
g.no = function(a) {
    g.no.v.constructor.call(this, a)
};
g.g.object.X(g.no, g.kk);
g.no.oP = "verticalFlyout";
b = g.no.prototype;
b.WK = function(a) {
    if (this.isVisible()) {
        var c = this.s.ke,
            d = c.jj(),
            e = Ya(c);
        c = $c(c);
        "number" == typeof a.y && (this.s.scrollY = -(d.top + (d.height - e.height) * a.y));
        this.s.translate(this.s.scrollX + c.left, this.s.scrollY + c.top)
    }
};
b.position = function() {
    if (this.isVisible() && this.Ta.isVisible()) {
        var a = Ya(this.Ta.ke);
        this.Tc = a.height;
        var c = this.wb - this.Mb;
        a = a.height - 2 * this.Mb;
        var d = this.Uj == g.g.Z.Ma.Qc,
            e = c + this.Mb;
        e = ["M " + (d ? e : 0) + ",0"];
        e.push("h", d ? -c : c);
        e.push("a", this.Mb, this.Mb, 0, 0, d ? 0 : 1, d ? -this.Mb : this.Mb, this.Mb);
        e.push("v", Math.max(0, a));
        e.push("a", this.Mb, this.Mb, 0, 0, d ? 0 : 1, d ? this.Mb : -this.Mb, this.Mb);
        e.push("h", d ? c : -c);
        e.push("z");
        this.ud.setAttribute("d", e.join(" "));
        this.isVisible() ? (d = this.Ta.ke, c = $c(d), a = Ya(d), d = Zc(d),
            d = this.Ta.Lb == this.Uj ? this.Ta.Sb ? this.Uj == g.g.Z.Ma.Nb ? d.width : a.width - this.wb : this.Uj == g.g.Z.Ma.Nb ? 0 : a.width : this.Uj == g.g.Z.Ma.Nb ? 0 : a.width + c.left - this.wb) : d = 0;
        c = this.wb;
        a = this.Tc;
        this.P.setAttribute("width", c);
        this.P.setAttribute("height", a);
        jd(this.s, c, a);
        "svg" == this.P.tagName ? g.g.o.Wp(this.P, "translate(" + d + "px,0px)") : this.P.setAttribute("transform", "translate(" + d + ",0)");
        if (c = this.s.tb) c.Ht(d, 0), c.resize(), c.Kb && c.Kb.setPosition(c.Kb.position.x, c.Kb.position.y), c.vb && c.vb.setPosition(c.vb.position.x,
            c.vb.position.y)
    }
};
b.Cy = function() {
    var a = this.s.tb;
    a.vb && a.vb.set(0, !0)
};
b.xL = function(a) {
    var c = g.g.ZB(a);
    if (c.y) {
        var d = this.s.ke,
            e = d.jj();
        c = Ya(d).top - e.top + c.y;
        d = this.s.tb;
        d.vb && d.vb.set(c, !0);
        g.na.$a();
        g.G.nj()
    }
    a.preventDefault();
    a.stopPropagation()
};

function rd(a, c, d) {
    a.s.scale = a.Ta.scale;
    for (var e = a.pk, f = a.M ? e : e + a.un, h = 0, k; k = c[h]; h++)
        if ("block" == k.type) {
            k = k.block;
            for (var l = p(k, !1), m = 0, n; n = l[m]; m++) n.Yb = !0;
            k.Ja();
            n = k.Na();
            l = D(k);
            m = k.R ? f - a.un : f;
            k.moveBy(m, e);
            var q = a,
                v = k,
                A = h;
            m = g.g.o.K(g.g.D.Hb, {
                "fill-opacity": 0,
                x: a.M ? m - l.width : m,
                y: e,
                height: l.height,
                width: l.width
            }, null);
            m.Kf = v;
            g.L.rm(m);
            q.s.Bb.insertBefore(m, v.Na());
            v.IB = m;
            q.Vs[A] = m;
            q = a;
            q.ie.push(g.N.ta(n, "mousedown", null, td(q, k)));
            q.ie.push(g.N.ta(m, "mousedown", null, td(q, k)));
            q.ie.push(g.N.bind(n,
                "mouseenter", k, k.Hr));
            q.ie.push(g.N.bind(n, "mouseleave", k, k.Op));
            q.ie.push(g.N.bind(m, "mouseenter", k, k.Hr));
            q.ie.push(g.N.bind(m, "mouseleave", k, k.Op));
            e += l.height + d[h]
        } else "button" == k.type && (l = a, m = k.button, n = f, q = e, v = m.eb(), m.moveTo(n, q), m.show(), l.ie.push(g.N.ta(v, "mousedown", l, l.Ej)), l.xo.push(m), e += k.button.height + d[h])
}
b.Dw = function() {
    if (!this.P || this.Ui || !this.isVisible()) return null;
    var a = this.P.getBoundingClientRect(),
        c = a.left;
    return this.Uj == g.g.Z.Ma.Nb ? new g.g.Rect(-1E9, 1E9, -1E9, c + a.width) : new g.g.Rect(-1E9, 1E9, c, 1E9)
};
g.B.register(g.B.S.dr, g.B.ek, g.no);
g.ev = function(a) {
    this.s = a;
    this.id = "zoomControls";
    this.ri = this.Cq = this.Bn = this.Wx = this.Vx = this.Xx = null
};
b = g.ev.prototype;
b.zh = 32;
b.Ci = 32;
b.yr = 2;
b.jr = 11;
b.Sn = 20;
b.wu = 20;
b.P = null;
b.Wh = 0;
b.mi = 0;
b.kp = !1;
b.eb = function() {
    this.P = g.g.o.K(g.g.D.oc, {}, null);
    var a = String(Math.random()).substring(2);
    this.Cq = g.g.o.K(g.g.D.oc, {
        "class": "blocklyZoom"
    }, this.P);
    var c = g.g.o.K(g.g.D.Gn, {
        id: "blocklyZoomoutClipPath" + a
    }, this.Cq);
    g.g.o.K(g.g.D.Hb, {
        width: 32,
        height: 32
    }, c);
    g.g.o.K(g.g.D.Di, {
        width: g.Ud.width,
        height: g.Ud.height,
        x: -64,
        y: -92,
        "clip-path": "url(#blocklyZoomoutClipPath" + a + ")"
    }, this.Cq).setAttributeNS(g.g.o.mf, "xlink:href", this.s.options.Ij + g.Ud.url);
    this.Wx = g.N.ta(this.Cq, "mousedown", null, this.hE.bind(this, -1));
    this.Bn = g.g.o.K(g.g.D.oc, {
        "class": "blocklyZoom"
    }, this.P);
    c = g.g.o.K(g.g.D.Gn, {
        id: "blocklyZoominClipPath" + a
    }, this.Bn);
    g.g.o.K(g.g.D.Hb, {
        width: 32,
        height: 32
    }, c);
    g.g.o.K(g.g.D.Di, {
        width: g.Ud.width,
        height: g.Ud.height,
        x: -32,
        y: -92,
        "clip-path": "url(#blocklyZoominClipPath" + a + ")"
    }, this.Bn).setAttributeNS(g.g.o.mf, "xlink:href", this.s.options.Ij + g.Ud.url);
    this.Vx = g.N.ta(this.Bn, "mousedown", null, this.hE.bind(this, 1));
    this.s.Hc() && (this.ri = g.g.o.K(g.g.D.oc, {
        "class": "blocklyZoom"
    }, this.P), c = g.g.o.K(g.g.D.Gn, {
        id: "blocklyZoomresetClipPath" +
            a
    }, this.ri), g.g.o.K(g.g.D.Hb, {
        width: 32,
        height: 32
    }, c), g.g.o.K(g.g.D.Di, {
        width: g.Ud.width,
        height: g.Ud.height,
        y: -92,
        "clip-path": "url(#blocklyZoomresetClipPath" + a + ")"
    }, this.ri).setAttributeNS(g.g.o.mf, "xlink:href", this.s.options.Ij + g.Ud.url), this.Xx = g.N.ta(this.ri, "mousedown", null, this.MK.bind(this)));
    return this.P
};
b.T = function() {
    eb(this.s.Me, {
        Fk: this,
        weight: 2,
        Bg: [g.Vb.fc.Hu]
    });
    this.kp = !0
};
b.J = function() {
    fb(this.s.Me, "zoomControls");
    this.P && g.g.o.removeNode(this.P);
    this.Xx && g.N.Pa(this.Xx);
    this.Vx && g.N.Pa(this.Vx);
    this.Wx && g.N.Pa(this.Wx)
};
b.Im = function() {
    var a = this.yr + 2 * this.Ci;
    this.ri && (a += this.jr + this.Ci);
    return new g.g.Rect(this.mi, this.mi + a, this.Wh, this.Wh + this.zh)
};
b.position = function(a, c) {
    if (this.kp) {
        var d = g.Tb.PB(this.s, a),
            e = this.yr + 2 * this.Ci;
        this.ri && (e += this.jr + this.Ci);
        a = g.Tb.bC(d, new g.g.ad(this.zh, e), this.wu, this.Sn, a, this.s);
        d = d.vertical;
        c = g.Tb.SA(a, this.Sn, d === g.Tb.yn.zd ? g.Tb.wo.Ul : g.Tb.wo.Ck, c);
        d === g.Tb.yn.zd ? (d = this.yr + this.Ci, this.Bn.setAttribute("transform", "translate(0, " + d + ")"), this.ri && this.ri.setAttribute("transform", "translate(0, " + (d + this.jr + this.Ci) + ")")) : (d = this.ri ? this.jr + this.Ci : 0, this.Bn.setAttribute("transform", "translate(0, " + d + ")"),
            this.Cq.setAttribute("transform", "translate(0, " + (d + this.yr + this.Ci) + ")"));
        this.mi = c.top;
        this.Wh = c.left;
        this.P.setAttribute("transform", "translate(" + this.Wh + "," + this.mi + ")")
    }
};
b.hE = function(a, c) {
    ra(this.s);
    ld(this.s, a);
    ud(this);
    g.Touch.Dk();
    c.stopPropagation();
    c.preventDefault()
};
b.MK = function(a) {
    ra(this.s);
    var c = Math.log(this.s.options.Ub.JD / this.s.scale) / Math.log(this.s.options.Ub.BD),
        d = this.s;
    g.g.o.Ga(d.Bb, "blocklyCanvasTransitioning");
    g.g.o.Ga(d.gg, "blocklyCanvasTransitioning");
    ld(this.s, c);
    c = this.s;
    if (c.Hc()) {
        d = c.ae();
        var e = (d.scrollWidth - d.Mc) / 2,
            f = (d.scrollHeight - d.Yc) / 2;
        e = -e - d.scrollLeft;
        f = -f - d.scrollTop;
        c.scroll(e, f)
    } else console.warn("Tried to move a non-movable workspace. This could result in blocks becoming inaccessible.");
    setTimeout(this.s.yI.bind(this.s), 500);
    ud(this);
    g.Touch.Dk();
    a.stopPropagation();
    a.preventDefault()
};

function ud(a) {
    a = new(g.h.get(g.h.Ql))(null, a.s.id, "zoom_controls");
    g.h.Ia(a)
}
g.Oc.register([".blocklyZoom>image, .blocklyZoom>svg>image {", "opacity: .4;", "}", ".blocklyZoom>image:hover, .blocklyZoom>svg>image:hover {", "opacity: .6;", "}", ".blocklyZoom>image:active, .blocklyZoom>svg>image:active {", "opacity: .8;", "}"]);
g.h.On = function(a) {
    this.Ve = "undefined" == typeof a;
    this.Zc = a ? a.id : "";
    this.group = g.h.tc();
    this.ab = !1
};
g.g.object.X(g.h.On, g.h.Abstract);
g.h.On.prototype.type = g.h.lu;
g.h.On.prototype.Ba = function() {
    var a = {
        type: this.type
    };
    this.group && (a.group = this.group);
    this.Zc && (a.workspaceId = this.Zc);
    return a
};
g.h.On.prototype.ma = function(a) {
    this.Ve = !1;
    this.Zc = a.workspaceId;
    this.group = a.group
};
g.B.register(g.B.S.hc, g.h.lu, g.h.On);
g.qz = function(a) {
    this.Fo = a;
    this.eb()
};
b = g.qz.prototype;
b.Za = null;
b.Jg = null;
b.Fo = null;
b.Nj = 1;
b.hq = null;
b.aB = new g.g.ba(0, 0);
b.eb = function() {
    this.Za || (this.Za = g.g.o.K(g.g.D.yk, {
        xmlns: g.g.o.zr,
        "xmlns:html": g.g.o.Wl,
        "xmlns:xlink": g.g.o.mf,
        version: "1.1",
        "class": "blocklyBlockDragSurface"
    }, this.Fo), this.Jg = g.g.o.K(g.g.D.oc, {}, this.Za))
};

function rb(a, c) {
    if (a.Jg.childNodes.length) throw Error("Already dragging a block.");
    a.Jg.appendChild(c);
    a.Za.style.display = "block";
    a.hq = new g.g.ba(0, 0)
}
b.Gl = function(a, c) {
    this.hq = new g.g.ba(a * this.Nj, c * this.Nj);
    a = this.hq.x;
    c = this.hq.y;
    a = a.toFixed(0);
    c = c.toFixed(0);
    this.Za.style.display = "block";
    g.g.o.Wp(this.Za, "translate3d(" + a + "px, " + c + "px, 0px)")
};
b.Lw = function() {
    var a = g.g.xf(this.Za);
    return new g.g.ba(a.x / this.Nj, a.y / this.Nj)
};
b.tc = function() {
    return this.Jg
};
b.Na = function() {
    return this.Za
};
b.Ur = function(a) {
    a ? a.appendChild(this.Jg.firstChild) : this.Jg.removeChild(this.Jg.firstChild);
    this.Za.style.display = "none";
    if (this.Jg.childNodes.length) throw Error("Drag group was not cleared.");
    this.hq = null
};
g.sj = function(a, c) {
    g.LH();
    "string" == typeof a && (a = document.getElementById(a) || document.querySelector(a));
    if (!a || !g.g.o.containsNode(document, a)) throw Error("Error: container is not in current document.");
    c = new g.Sd(c || {});
    var d = document.createElement("div");
    d.className = "injectionDiv";
    d.tabIndex = 0;
    g.g.$.lc(d, g.g.$.State.Xz, g.i.WORKSPACE_ARIA_LABEL);
    a.appendChild(d);
    a = g.Oe(d, c);
    var e = new g.qz(d),
        f = new g.GA(d),
        h = g.bI(a, c, e, f);
    g.oJ(h);
    g.rp = h;
    g.tn(h);
    d.addEventListener("focusin", function() {
        g.rp = h
    });
    return h
};
g.Oe = function(a, c) {
    a.setAttribute("dir", "LTR");
    g.Oc.sj(c.gJ, c.Ij);
    a = g.g.o.K(g.g.D.yk, {
        xmlns: g.g.o.zr,
        "xmlns:html": g.g.o.Wl,
        "xmlns:xlink": g.g.o.mf,
        version: "1.1",
        "class": "blocklySvg",
        tabindex: "0"
    }, a);
    var d = g.g.o.K(g.g.D.yz, {}, a);
    c.Ow = g.mk.eb(String(Math.random()).substring(2), c.hC, d);
    return a
};
g.bI = function(a, c, d, e) {
    c.uc = null;
    c = new g.bd(c, d, e);
    d = c.options;
    c.scale = d.Ub.JD;
    a.appendChild(c.eb("blocklyMainBackground"));
    g.g.o.Ga(aa(c), c.Rb.Xf());
    g.g.o.Ga(aa(c), c.Og().Xf());
    !d.ep && d.Ug && (e = id(c, g.g.D.yk), g.g.o.Wk(e, a));
    if (d.lC) {
        if (!g.Sc) throw Error("Missing require for Blockly.Trashcan");
        c.wn = new g.Sc(c);
        e = c.wn.eb();
        c.P.insertBefore(e, c.Bb)
    }
    if (d.Ub && d.Ub.controls) {
        if (!g.ev) throw Error("Missing require for Blockly.ZoomControls");
        c.Bq = new g.ev(c);
        d = c.Bq.eb();
        c.P.appendChild(d)
    }
    c.Cc.subscribe(a,
        "workspaceBackgroundColour", "background-color");
    c.translate(0, 0);
    C(c, g.GH(c));
    g.tn(c);
    g.na.eb();
    g.G.eb();
    g.L.eb();
    return c
};
g.BI = function(a, c) {
    var d = null;
    switch (c.type) {
        case g.h.si:
        case g.h.ui:
            (d = a.Fd(c.qb)) && (d = d.Zf());
            break;
        case g.h.Sq:
        case g.h.Hn:
            d = a.Yr[c.Cg] || null
    }
    return d
};
g.TA = function(a) {
    var c = a.ke;
    if (!(xb(c.s) && yb(c.s) || a.Ac())) {
        c = c.jj(!0);
        for (var d = [].concat(a.mq), e = 0, f; f = d[e]; e++) g.xv(a, c, f)
    }
};
g.GH = function(a) {
    return function(c) {
        var d = a.ke;
        if (!(xb(d.s) && yb(d.s) || a.Ac()))
            if (-1 !== g.h.sE.indexOf(c.type)) {
                d = d.jj(!0);
                var e = g.BI(a, c);
                if (e) {
                    var f = g.h.tc();
                    g.h.oa(c.group);
                    g.xv(a, d, e) && !c.group && console.warn("Moved object in bounds but there was no event group. This may break undo.");
                    null !== f && g.h.oa(f)
                }
            } else c.type === g.h.lo && c.scale > c.Bp && g.TA(a)
    }
};
g.xv = function(a, c, d) {
    var e = d.Im(),
        f = g.g.od.vm(c.top, e.top, c.top + c.height - (e.bottom - e.top)) - e.top,
        h = c.left;
    c = c.left + c.width - (e.right - e.left);
    a.M ? h = Math.min(c, h) : c = Math.max(h, c);
    return (a = g.g.od.vm(h, e.left, c) - e.left) || f ? (d.moveBy(a, f), !0) : !1
};
g.oJ = function(a) {
    var c = a.options,
        d = t(a);
    g.N.ta(d.parentNode, "contextmenu", null, function(f) {
        g.g.Ns(f) || f.preventDefault()
    });
    d = g.N.ta(window, "resize", null, function() {
        g.Uc(!0);
        g.tn(a);
        g.TA(a)
    });
    a.Et = d;
    g.sj.AH();
    if (c.Ug) {
        d = a.Sb;
        var e = a.Se(!0);
        d ? d.T() : e && (e.T(a), e.show(c.Ug), "function" == typeof e.Cy && e.Cy())
    }
    c.lC && a.wn.T();
    c.Ub && c.Ub.controls && a.Bq.T();
    c.Ld && c.Ld.scrollbars ? (a.tb = new g.Su(a, !0 === c.Ld.scrollbars || !!c.Ld.scrollbars.hp, !0 === c.Ld.scrollbars || !!c.Ld.scrollbars.vertical, "blocklyMainWorkspaceScrollbar"),
        a.tb.resize()) : a.Xp({
        x: .5,
        y: .5
    });
    c.jJ && g.sj.zJ(c.Ij, a)
};
g.sj.AH = function() {
    g.rI || (g.N.ta(document, "scroll", null, function() {
        for (var a = g.Wb.getAll(), c = 0, d; d = a[c]; c++) d.rq && d.rq()
    }), g.N.ta(document, "keydown", null, g.Cp), g.N.bind(document, "touchend", null, g.Bj), g.N.bind(document, "touchcancel", null, g.Bj), g.g.userAgent.Yl && g.N.ta(window, "orientationchange", document, function() {
        g.tn(g.hj())
    }));
    g.rI = !0
};
g.sj.zJ = function(a, c) {
    function d() {
        for (; f.length;) g.N.Pa(f.pop());
        e.preload()
    }
    var e = c.zg;
    e.load([a + "click.mp3", a + "click.wav", a + "click.ogg"], "click");
    e.load([a + "disconnect.wav", a + "disconnect.mp3", a + "disconnect.ogg"], "disconnect");
    e.load([a + "delete.mp3", a + "delete.ogg", a + "delete.wav"], "delete");
    var f = [];
    f.push(g.N.ta(document, "mousemove", null, d, !0));
    f.push(g.N.ta(document, "touchstart", null, d, !0))
};
g.Rd = function(a, c) {
    this.$D = c || "";
    this.zD = Object.create(null);
    if (a)
        for (a = a.split(","), c = 0; c < a.length; c++) this.zD[a[c]] = !0;
    this.reset()
};
g.Rd.fu = "DEVELOPER_VARIABLE";
g.Rd.prototype.reset = function() {
    this.Hg = Object.create(null);
    this.tB = Object.create(null);
    this.Ua = null
};
g.Rd.prototype.Jy = function(a) {
    this.Ua = a
};
g.Rd.prototype.Gd = function(a, c) {
    var d = a;
    c == g.ic && (this.Ua ? a = (a = this.Ua.$f(a)) ? a.name : null : (console.warn("Deprecated call to Blockly.Names.prototype.getName without defining a variable map. To fix, add the following code in your generator's init() function:\nBlockly.YourGeneratorName.nameDB_.setVariableMap(workspace.getVariableMap());"), a = null), a && (d = a));
    a = d.toLowerCase();
    var e = c == g.ic || c == g.Rd.fu ? this.$D : "";
    c in this.Hg || (this.Hg[c] = Object.create(null));
    var f = this.Hg[c];
    if (a in f) return e + f[a];
    c =
        vd(this, d, c);
    f[a] = c.substr(e.length);
    return c
};

function vd(a, c, d) {
    c ? (c = encodeURI(c.replace(/ /g, "_")).replace(/[^\w]/g, "_"), -1 != "0123456789".indexOf(c[0]) && (c = "my_" + c)) : c = g.i.UNNAMED_KEY || "unnamed";
    for (var e = ""; a.tB[c + e] || c + e in a.zD;) e = e ? e + 1 : 2;
    c += e;
    a.tB[c] = !0;
    return (d == g.ic || d == g.Rd.fu ? a.$D : "") + c
}
g.Rd.wf = function(a, c) {
    return a.toLowerCase() == c.toLowerCase()
};
g.Da = {};
g.Da.iG = g.hm;
g.Da.xz = "x";
g.Da.NA = function(a) {
    var c = Ma(a, "procedures_defnoreturn").map(function(d) {
        return d.ij()
    });
    a = Ma(a, "procedures_defreturn").map(function(d) {
        return d.ij()
    });
    c.sort(g.Da.tD);
    a.sort(g.Da.tD);
    return [c, a]
};
g.Da.tD = function(a, c) {
    return a[0].localeCompare(c[0], void 0, {
        sensitivity: "base"
    })
};
g.Da.us = function(a, c) {
    if (c.Yb) return a;
    for (a = a || g.i.UNNAMED_KEY || "unnamed"; !g.Da.tJ(a, c.u, c);) {
        var d = a.match(/^(.*?)(\d+)$/);
        a = d ? d[1] + (parseInt(d[2], 10) + 1) : a + "2"
    }
    return a
};
g.Da.tJ = function(a, c, d) {
    return !g.Da.vJ(a, c, d)
};
g.Da.vJ = function(a, c, d) {
    c = z(c, !1);
    for (var e = 0; e < c.length; e++)
        if (c[e] != d && c[e].ij) {
            var f = c[e].ij();
            if (g.Rd.wf(f[0], a)) return !0
        } return !1
};
g.Da.yD = function(a) {
    a = a.trim();
    var c = g.Da.us(a, this.ea()),
        d = this.getValue();
    if (d != a && d != c) {
        a = z(this.ea().u, !1);
        for (var e = 0; e < a.length; e++) a[e].jn && a[e].jn(d, c)
    }
    return c
};
g.Da.Lk = function(a) {
    function c(h, k) {
        for (var l = 0; l < h.length; l++) {
            var m = h[l][0],
                n = h[l][1],
                q = g.g.xml.createElement("block");
            q.setAttribute("type", k);
            q.setAttribute("gap", 16);
            var v = g.g.xml.createElement("mutation");
            v.setAttribute("name", m);
            q.appendChild(v);
            for (m = 0; m < n.length; m++) {
                var A = g.g.xml.createElement("arg");
                A.setAttribute("name", n[m]);
                v.appendChild(A)
            }
            d.push(q)
        }
    }
    var d = [];
    if (g.W.procedures_defnoreturn) {
        var e = g.g.xml.createElement("block");
        e.setAttribute("type", "procedures_defnoreturn");
        e.setAttribute("gap",
            16);
        var f = g.g.xml.createElement("field");
        f.setAttribute("name", "NAME");
        f.appendChild(g.g.xml.createTextNode(g.i.PROCEDURES_DEFNORETURN_PROCEDURE));
        e.appendChild(f);
        d.push(e)
    }
    g.W.procedures_defreturn && (e = g.g.xml.createElement("block"), e.setAttribute("type", "procedures_defreturn"), e.setAttribute("gap", 16), f = g.g.xml.createElement("field"), f.setAttribute("name", "NAME"), f.appendChild(g.g.xml.createTextNode(g.i.PROCEDURES_DEFRETURN_PROCEDURE)), e.appendChild(f), d.push(e));
    g.W.procedures_ifreturn && (e = g.g.xml.createElement("block"),
        e.setAttribute("type", "procedures_ifreturn"), e.setAttribute("gap", 16), d.push(e));
    d.length && d[d.length - 1].setAttribute("gap", 24);
    a = g.Da.NA(a);
    c(a[0], "procedures_callnoreturn");
    c(a[1], "procedures_callreturn");
    return d
};
g.Da.WD = function(a) {
    for (var c = [], d = Ma(a, "procedures_mutatorarg"), e = 0, f; f = d[e]; e++) c.push(B(f, "NAME"));
    d = g.g.xml.createElement("xml");
    e = g.g.xml.createElement("block");
    e.setAttribute("type", "procedures_mutatorarg");
    f = g.g.xml.createElement("field");
    f.setAttribute("name", "NAME");
    c = g.g.xml.createTextNode(g.ka.KB(g.Da.xz, c));
    f.appendChild(c);
    e.appendChild(f);
    d.appendChild(e);
    if (c = g.g.Z.Lv(d)) {
        if (!a.options.Ug) throw Error("Existing toolbox is null.  Can't create new toolbox.");
        if (g.g.Z.ep(c)) {
            if (!a.Sb) throw Error("Existing toolbox has no categories.  Can't change mode.");
            a.options.Ug = c;
            a.Sb.Ja(c)
        } else {
            if (!a.za) throw Error("Existing toolbox has categories.  Can't change mode.");
            a.options.Ug = c;
            a.za.show(c)
        }
    } else if (a.options.Ug) throw Error("Can't nullify an existing toolbox.");
};
g.Da.NJ = function(a) {
    if (a.type == g.h.Zj && "mutator" === a.wv && a.Wm) {
        a = g.Wb.Vo(a.Zc).Fd(a.qb);
        var c = a.type;
        if ("procedures_defnoreturn" == c || "procedures_defreturn" == c) a = a.qd.s, g.Da.WD(a), C(a, g.Da.MJ)
    }
};
g.Da.MJ = function(a) {
    a.type != g.h.si && a.type != g.h.Hq && a.type != g.h.lg || g.Da.WD(g.Wb.Vo(a.Zc))
};
g.Da.LI = function(a, c) {
    var d = [];
    c = z(c, !1);
    for (var e = 0; e < c.length; e++)
        if (c[e].Te) {
            var f = c[e].Te();
            f && g.Rd.wf(f, a) && d.push(c[e])
        } return d
};
g.Da.Ap = function(a) {
    var c = g.h.ab,
        d = a.ij()[0],
        e = a.Wa(!0);
    a = g.Da.LI(d, a.u);
    d = 0;
    for (var f; f = a[d]; d++) {
        var h = f.Wa();
        h = h && g.O.Zd(h);
        f.yb(e);
        var k = f.Wa();
        k = k && g.O.Zd(k);
        h != k && (g.h.ab = !1, g.h.Ia(new(g.h.get(g.h.lg))(f, "mutation", null, h, k)), g.h.ab = c)
    }
};
g.Da.Xo = function(a, c) {
    c = z(c, !1);
    for (var d = 0; d < c.length; d++)
        if (c[d].ij) {
            var e = c[d].ij();
            if (e && g.Rd.wf(e[0], a)) return c[d]
        } return null
};
g.Rc = function() {
    g.Rc.B = this;
    this.Gf = Object.create(null);
    this.Ym = Object.create(null)
};
g.Rc.Zs = {
    Shift: g.g.la.wr,
    Control: g.g.la.dk,
    Alt: g.g.la.Ol,
    Meta: g.g.la.cm
};
g.Rc.prototype.register = function(a, c) {
    if (this.Gf[a.name] && !c) throw Error('Shortcut with name "' + a.name + '" already exists.');
    this.Gf[a.name] = a
};
g.Rc.prototype.unregister = function(a) {
    if (!this.Gf[a]) return console.warn('Keyboard shortcut with name "' + a + '" not found.'), !1;
    for (var c in this.Ym) {
        var d = c,
            e = this.Ym[d],
            f = e.indexOf(a); - 1 < f && (e.splice(f, 1), 0 == e.length && delete this.Ym[d])
    }
    delete this.Gf[a];
    return !0
};

function I(a, c) {
    var d = g.Rc.B;
    a = String(a);
    var e = d.Ym[a];
    if (e) throw Error('Shortcut with name "' + c + '" collides with shortcuts ' + e.toString());
    d.Ym[a] = [c]
}
g.Rc.prototype.Cp = function(a, c) {
    var d = "";
    for (e in g.Rc.Zs) c.getModifierState(e) && ("" != d && (d += "+"), d += e);
    "" != d && c.keyCode ? d = d + "+" + c.keyCode : c.keyCode && (d = c.keyCode.toString());
    d = this.Ym[d] || [];
    if (!d) return !1;
    var e = 0;
    for (var f; f = d[e]; e++)
        if (f = this.Gf[f], (!f.vc || f.vc(a)) && f.cb && f.cb(a, c, f)) return !0;
    return !1
};

function J(a, c) {
    var d = "";
    if (c) {
        for (var e = g.g.object.values(g.Rc.Zs), f = 0, h; h = c[f]; f++)
            if (0 > e.indexOf(h)) throw Error(h + " is not a valid modifier key.");
        for (var k in g.Rc.Zs) - 1 < c.indexOf(g.Rc.Zs[k]) && ("" != d && (d += "+"), d += k)
    }
    "" != d && a ? d = d + "+" + a : a && (d = a.toString());
    return d
}
new g.Rc;
g.mo = function(a, c, d, e) {
    this.u = a;
    this.name = c;
    this.type = d || "";
    this.Vw = e || g.g.Mg();
    g.h.Ia(new(g.h.get(g.h.jo))(this))
};
g.mo.prototype.Oa = function() {
    return this.Vw
};
g.mo.dB = function(a, c) {
    return a.name.localeCompare(c.name, void 0, {
        sensitivity: "base"
    })
};
g.ka = {};
g.ka.iG = g.ic;
g.ka.gv = function(a) {
    var c = z(a, !1);
    a = Object.create(null);
    for (var d = 0; d < c.length; d++) {
        var e = c[d].Oh();
        if (e)
            for (var f = 0; f < e.length; f++) {
                var h = e[f],
                    k = h.Oa();
                k && (a[k] = h)
            }
    }
    c = [];
    for (k in a) c.push(a[k]);
    return c
};
g.ka.hz = {};
g.ka.qH = function(a) {
    a = z(a, !1);
    for (var c = Object.create(null), d = 0, e; e = a[d]; d++) {
        var f = e.cP;
        !f && e.RI && (f = e.RI, g.ka.hz[e.type] || (console.warn("Function getDeveloperVars() deprecated. Use getDeveloperVariables() (block type '" + e.type + "')"), g.ka.hz[e.type] = !0));
        if (f)
            for (e = f(), f = 0; f < e.length; f++) c[e[f]] = !0
    }
    return Object.keys(c)
};
g.ka.Lk = function(a) {
    var c = [],
        d = document.createElement("button");
    d.setAttribute("text", "%{BKY_NEW_VARIABLE}");
    d.setAttribute("callbackKey", "CREATE_VARIABLE");
    nd(a, function(e) {
        g.ka.qB(e.Pt)
    });
    c.push(d);
    a = g.ka.FI(a);
    return c = c.concat(a)
};
g.ka.FI = function(a) {
    a = a.bp("");
    var c = [];
    if (0 < a.length) {
        var d = a[a.length - 1];
        if (g.W.variables_set) {
            var e = g.g.xml.createElement("block");
            e.setAttribute("type", "variables_set");
            e.setAttribute("gap", g.W.math_change ? 8 : 24);
            e.appendChild(g.ka.Uo(d));
            c.push(e)
        }
        g.W.math_change && (e = g.g.xml.createElement("block"), e.setAttribute("type", "math_change"), e.setAttribute("gap", g.W.variables_get ? 20 : 8), e.appendChild(g.ka.Uo(d)), d = g.O.ze('<value name="DELTA"><shadow type="math_number"><field name="NUM">1</field></shadow></value>'),
            e.appendChild(d), c.push(e));
        if (g.W.variables_get) {
            a.sort(g.mo.dB);
            d = 0;
            for (var f; f = a[d]; d++) e = g.g.xml.createElement("block"), e.setAttribute("type", "variables_get"), e.setAttribute("gap", 8), e.appendChild(g.ka.Uo(f)), c.push(e)
        }
    }
    return c
};
g.ka.zA = "ijkmnopqrstuvwxyzabcdefgh";
g.ka.HI = function(a) {
    return g.ka.KB(g.ka.zA.charAt(0), a.zw())
};
g.ka.KB = function(a, c) {
    if (!c.length) return a;
    for (var d = g.ka.zA, e = "", f = d.indexOf(a);;) {
        for (var h = !1, k = 0; k < c.length; k++)
            if (c[k].toLowerCase() == a) {
                h = !0;
                break
            } if (!h) return a;
        f++;
        f == d.length && (f = 0, e = Number(e) + 1);
        a = d.charAt(f) + e
    }
};
g.ka.qB = function(a, c, d) {
    function e(h) {
        g.ka.uD(g.i.NEW_VARIABLE_TITLE, h, function(k) {
            if (k) {
                var l = g.ka.PJ(k, a);
                if (l) {
                    if (l.type == f) var m = g.i.VARIABLE_ALREADY_EXISTS.replace("%1", l.name);
                    else m = g.i.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE, m = m.replace("%1", l.name).replace("%2", l.type);
                    g.alert(m, function() {
                        e(k)
                    })
                } else a.sf(k, f), c && c(k)
            } else c && c(null)
        })
    }
    var f = d || "";
    e("")
};
g.ka.sf = g.ka.qB;
g.ka.Ct = function(a, c) {
    function d(e) {
        var f = g.i.RENAME_VARIABLE_TITLE.replace("%1", c.name);
        g.ka.uD(f, e, function(h) {
            if (h) {
                var k = g.ka.QJ(h, c.type, a);
                k ? (k = g.i.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE.replace("%1", k.name).replace("%2", k.type), g.alert(k, function() {
                    d(h)
                })) : a.Mj(c.Oa(), h)
            }
        })
    }
    d("")
};
g.ka.uD = function(a, c, d) {
    g.prompt(a, c, function(e) {
        e && (e = e.replace(/[\s\xa0]+/g, " ").trim(), e == g.i.RENAME_VARIABLE || e == g.i.NEW_VARIABLE) && (e = null);
        d(e)
    })
};
g.ka.QJ = function(a, c, d) {
    d = d.Ua.Nk();
    a = a.toLowerCase();
    for (var e = 0, f; f = d[e]; e++)
        if (f.name.toLowerCase() == a && f.type != c) return f;
    return null
};
g.ka.PJ = function(a, c) {
    c = c.Ua.Nk();
    a = a.toLowerCase();
    for (var d = 0, e; e = c[d]; d++)
        if (e.name.toLowerCase() == a) return e;
    return null
};
g.ka.Uo = function(a) {
    var c = g.g.xml.createElement("field");
    c.setAttribute("name", "VAR");
    c.setAttribute("id", a.Oa());
    c.setAttribute("variabletype", a.type);
    a = g.g.xml.createTextNode(a.name);
    c.appendChild(a);
    return c
};
g.ka.As = function(a, c, d, e) {
    var f = g.ka.Id(a, c, d, e);
    f || (f = g.ka.cI(a, c, d, e));
    return f
};
g.ka.Id = function(a, c, d, e) {
    var f = a.Jj,
        h = null;
    if (c && (h = a.$f(c), !h && f && (h = f.$f(c)), h)) return h;
    if (d) {
        if (void 0 == e) throw Error("Tried to look up a variable by name without a type");
        h = a.Id(d, e);
        !h && f && (h = f.Id(d, e))
    }
    return h
};
g.ka.cI = function(a, c, d, e) {
    var f = a.Jj;
    d || (d = g.ka.HI(a.ag ? a.Ta : a));
    return f ? f.sf(d, e, c) : a.sf(d, e, c)
};
g.ka.LB = function(a, c) {
    a = a.Nk();
    var d = [];
    if (c.length != a.length)
        for (var e = 0; e < a.length; e++) {
            var f = a[e]; - 1 == c.indexOf(f) && d.push(f)
        }
    return d
};
g.VERSION = "uncompiled";
g.rp = null;
g.selected = null;
g.Fm = [];
g.wm = null;
g.Wr = null;
g.Gv = null;
g.QO = null;
g.ut = null;
g.AP = function(a) {
    g.g.Dm.warn("Blockly.svgSize", "March 2021", "March 2022", "workspace.getCachedParentSvgSize");
    return new g.g.ad(a.IH, a.HH)
};
g.qP = function(a) {
    Aa(a)
};
g.tn = function(a) {
    for (; a.options.uc;) a = a.options.uc;
    var c = t(a),
        d = ad(a),
        e = c.parentNode;
    if (e) {
        var f = e.offsetWidth;
        e = e.offsetHeight;
        d.width != f && (c.setAttribute("width", f + "px"), jd(a, f, null));
        d.height != e && (c.setAttribute("height", e + "px"), jd(a, null, e));
        a.resize()
    }
};
g.Cp = function(a) {
    var c = g.rp;
    !c || g.g.Ns(a) || c.ua && !c.isVisible() || g.Rc.B.Cp(c, a)
};
g.Vv = function(a) {
    a.u.ag || (g.h.oa(!0), g.Uc(), a.R ? a.J(!1, !0) : a.J(!0, !0), g.h.oa(!1))
};
g.Mv = function(a) {
    if (a.Um) a = null;
    else {
        var c = g.O.Ah(a, !0);
        g.O.lI(c);
        var d = a.kb();
        c.setAttribute("x", a.M ? -d.x : d.x);
        c.setAttribute("y", d.y);
        a = {
            xml: c,
            source: a.u,
            qL: g.g.Aw(a, !0)
        }
    }
    a && (g.wm = a.xml, g.Wr = a.source, g.Gv = a.qL)
};
g.wt = function() {
    if (!g.wm) return !1;
    var a = g.Wr;
    a.ag && (a = a.Ta);
    return g.Gv && Oa(a, g.Gv) ? (g.h.oa(!0), a.wt(g.wm), g.h.oa(!1), !0) : !1
};
g.duplicate = function(a) {
    var c = g.wm,
        d = g.Wr;
    g.Mv(a);
    a.u.wt(g.wm);
    g.wm = c;
    g.Wr = d
};
g.mP = function(a) {
    g.g.Ns(a) || a.preventDefault()
};
g.Uc = function(a) {
    g.L.$a();
    g.na.$a();
    g.G.nj();
    var c = !!a;
    hb(g.hj().Me, g.Vb.fc.Yt).forEach(function(d) {
        d.OA(c)
    })
};
g.hj = function() {
    return g.rp
};
g.alert = function(a, c) {
    alert(a);
    c && c()
};
g.confirm = function(a, c) {
    c(confirm(a))
};
g.prompt = function(a, c, d) {
    d(prompt(a, c))
};
g.xJ = function(a) {
    return function() {
        kc(this, a)
    }
};
g.ej = function(a) {
    for (var c = 0; c < a.length; c++) {
        var d = a[c];
        if (d) {
            var e = d.type;
            null == e || "" === e ? console.warn("Block definition #" + c + " in JSON array is missing a type attribute. Skipping.") : (g.W[e] && console.warn("Block definition #" + c + ' in JSON array overwrites prior definition of "' + e + '".'), g.W[e] = {
                T: g.xJ(d)
            })
        } else console.warn("Block definition #" + c + " in JSON array is " + d + ". Skipping.")
    }
};
g.yj = function(a) {
    return /^\s*-?\d+(\.\d+)?\s*$/.test(a)
};
g.lJ = function(a) {
    return g.g.rb.sC(a)
};
g.LH = function() {
    g.Bd("LOGIC_HUE", ["Blocks", "logic", "HUE"], void 0);
    g.Bd("LOGIC_HUE", ["Constants", "Logic", "HUE"], 210);
    g.Bd("LOOPS_HUE", ["Blocks", "loops", "HUE"], void 0);
    g.Bd("LOOPS_HUE", ["Constants", "Loops", "HUE"], 120);
    g.Bd("MATH_HUE", ["Blocks", "math", "HUE"], void 0);
    g.Bd("MATH_HUE", ["Constants", "Math", "HUE"], 230);
    g.Bd("TEXTS_HUE", ["Blocks", "texts", "HUE"], void 0);
    g.Bd("TEXTS_HUE", ["Constants", "Text", "HUE"], 160);
    g.Bd("LISTS_HUE", ["Blocks", "lists", "HUE"], void 0);
    g.Bd("LISTS_HUE", ["Constants", "Lists", "HUE"],
        260);
    g.Bd("COLOUR_HUE", ["Blocks", "colour", "HUE"], void 0);
    g.Bd("COLOUR_HUE", ["Constants", "Colour", "HUE"], 20);
    g.Bd("VARIABLES_HUE", ["Blocks", "variables", "HUE"], void 0);
    g.Bd("VARIABLES_HUE", ["Constants", "Variables", "HUE"], 330);
    g.Bd("VARIABLES_DYNAMIC_HUE", ["Constants", "VariablesDynamic", "HUE"], 310);
    g.Bd("PROCEDURES_HUE", ["Blocks", "procedures", "HUE"], void 0)
};
g.Bd = function(a, c, d) {
    for (var e = "Blockly", f = g, h = 0; h < c.length; ++h) e += "." + c[h], f && (f = f[c[h]]);
    f && f !== d && (a = (void 0 === d ? '%1 has been removed. Use Blockly.Msg["%2"].' : '%1 is deprecated and unused. Override Blockly.Msg["%2"].').replace("%1", e).replace("%2", a), console.warn(a))
};
g.vP = function(a) {
    g.ut = a
};
g.pv = g.N.bind;
g.Zy = g.N.Pa;
g.PO = g.N.ta;
g.FL = g.Ob.Nf.Nb;
g.EL = g.Ob.Nf.Mq;
g.Fq = g.Ob.Nf.Qc;
g.$b = g.pa.$b;
g.qe = g.pa.qe;
g.$c = g.pa.$c;
g.Ge = g.pa.Ge;
g.dM = g.ob.pg;
g.EO = g.g.Z.Ma.zd;
g.BO = g.g.Z.Ma.hh;
g.CO = g.g.Z.Ma.Nb;
g.DO = g.g.Z.Ma.Qc;
var wd = {
        ar: "\u0627\u0644\u0639\u0631\u0628\u064a\u0629",
        be: "\u0431\u0435\u043b\u0430\u0440\u0443\u0441\u043a\u0456",
        "be-tarask": "Tara\u0161kievica",
        bg: "\u0431\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438 \u0435\u0437\u0438\u043a",
        bn: "\u09ac\u09be\u0982\u09b2\u09be",
        br: "Brezhoneg",
        cs: "\u010cesky",
        da: "Dansk",
        de: "Deutsch",
        el: "\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac",
        en: "English",
        eo: "Esperanto",
        es: "Espa\u00f1ol",
        eu: "Euskara",
        fa: "\u0641\u0627\u0631\u0633\u06cc",
        fi: "Suomi",
        fo: "F\u00f8royskt",
        fr: "Fran\u00e7ais",
        gl: "Galego",
        ha: "Hausa",
        he: "\u05e2\u05d1\u05e8\u05d9\u05ea",
        hi: "\u0939\u093f\u0928\u094d\u0926\u0940",
        hu: "Magyar",
        hy: "\u0570\u0561\u0575\u0565\u0580\u0567\u0576",
        ia: "Interlingua",
        id: "Bahasa Indonesia",
        ig: "As\u1ee5s\u1ee5 Igbo",
        is: "\u00cdslenska",
        it: "Italiano",
        ja: "\u65e5\u672c\u8a9e",
        kab: "Taqbaylit",
        ko: "\ud55c\uad6d\uc5b4",
        lt: "Lietuvi\u0173",
        lv: "Latvie\u0161u",
        ms: "Bahasa Melayu",
        my: "\u1019\u103c\u1014\u103a\u1019\u102c\u1005\u102c",
        nb: "Norsk Bokm\u00e5l",
        nl: "Nederlands, Vlaams",
        pl: "Polski",
        pms: "Piemont\u00e8is",
        pt: "Portugu\u00eas",
        "pt-br": "Portugu\u00eas Brasileiro",
        ro: "Rom\u00e2n\u0103",
        ru: "\u0420\u0443\u0441\u0441\u043a\u0438\u0439",
        sc: "Sardu",
        sk: "Sloven\u010dina",
        sl: "Sloven\u0161\u010dina",
        sq: "Shqip",
        sr: "\u0421\u0440\u043f\u0441\u043a\u0438",
        sv: "Svenska",
        th: "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22",
        ti: "\u1275\u130d\u122d\u129b",
        tr: "T\u00fcrk\u00e7e",
        uk: "\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430",
        ur: "\u0627\u064f\u0631\u062f\u064f\u0648\u202c",
        vi: "Ti\u1ebfng Vi\u1ec7t",
        yo: "\u00c8d\u00e8 Yor\u00f9b\u00e1",
        "zh-hans": "\u7b80\u4f53\u4e2d\u6587",
        "zh-hant": "\u6b63\u9ad4\u4e2d\u6587"
    },
    xd = "ace ar fa he mzn ps ur".split(" "),
    yd = window.BlocklyGamesLang,
    zd = window.BlocklyGamesLanguages,
    Ad = /\.html$/.test(window.location.pathname);

function Bd() {
    return -1 != xd.indexOf(yd)
}
var K, Cd = Number,
    Dd, Ed = window.location.search.match(/[?&]level=([^&]+)/);
Dd = Ed ? decodeURIComponent(Ed[1].replace(/\+/g, "%20")) : "NaN";
var Fd = Cd(Dd);
K = isNaN(Fd) ? 1 : g.g.od.vm(1, Fd, 10);

function Gd() {
    document.title = document.getElementById("title").textContent;
    document.dir = Bd() ? "rtl" : "ltr";
    document.head.parentElement.setAttribute("lang", yd);
    var a = document.getElementById("languageMenu");
    if (a) {
        for (var c = [], d = 0; d < zd.length; d++) {
            var e = zd[d];
            c.push([wd[e], e])
        }
        c.sort(function(h, k) {
            return h[0] > k[0] ? 1 : h[0] < k[0] ? -1 : 0
        });
        for (d = a.options.length = 0; d < c.length; d++) {
            var f = c[d];
            e = f[1];
            f = new Option(f[0], e);
            e == yd && (f.selected = !0);
            a.options.add(f)
        }
        1 >= a.options.length && (a.style.display = "none")
    }
    for (d =
        1; 10 >= d; d++) a = document.getElementById("level" + d), c = !!Hd(d), a && c && (a.className += " level_done");
    (d = document.querySelector('meta[name="viewport"]')) && 725 > screen.availWidth && d.setAttribute("content", "width=725, initial-scale=.35, user-scalable=no");
    setTimeout(Id, 1)
}

function Hd(a) {
    var c = Jd;
    try {
        var d = window.localStorage[c + a]
    } catch (e) {}
    return d
}

function L(a) {
    var c;
    (c = document.getElementById(a)) ? (c = c.textContent, c = c.replace(/\\n/g, "\n")) : c = null;
    return null === c ? "[Unknown message: " + a + "]" : c
}

function Kd(a, c) {
    if (!a) throw TypeError("Element not found: " + a);
    "string" == typeof a && (a = document.getElementById(a));
    a.addEventListener("click", c, !0);
    a.addEventListener("touchend", function(d) {
        d.preventDefault();
        c(d)
    }, !0)
}

function Id() {
    if (!Ad) {
        window.GoogleAnalyticsObject = "GoogleAnalyticsFunction";
        var a = function(d) {
            (a.q = a.q || []).push(arguments)
        };
        window.GoogleAnalyticsFunction = a;
        a.l = 1 * new Date;
        var c = document.createElement("script");
        c.async = 1;
        c.src = "//www.google-analytics.com/analytics.js";
        document.head.appendChild(c);
        a("create", "UA-50448074-1", "auto");
        a("send", "pageview")
    }
};
g.Ca = {};
g.Ca.vy = function() {
    g.Va.B.register({
        Yd: function() {
            return g.i.UNDO
        },
        vc: function(a) {
            return 0 < a.u.Hl.length ? "enabled" : "disabled"
        },
        cb: function(a) {
            Qa(a.u, !1)
        },
        $e: g.Va.Vd.ue,
        id: "undoWorkspace",
        weight: 1
    })
};
g.Ca.uy = function() {
    g.Va.B.register({
        Yd: function() {
            return g.i.REDO
        },
        vc: function(a) {
            return 0 < a.u.Lp.length ? "enabled" : "disabled"
        },
        cb: function(a) {
            Qa(a.u, !0)
        },
        $e: g.Va.Vd.ue,
        id: "redoWorkspace",
        weight: 2
    })
};
g.Ca.vK = function() {
    g.Va.B.register({
        Yd: function() {
            return g.i.CLEAN_UP
        },
        vc: function(a) {
            return a.u.Hc() ? 1 < a.u.zc(!1).length ? "enabled" : "disabled" : "hidden"
        },
        cb: function(a) {
            a = a.u;
            a.fd(!1);
            g.h.oa(!0);
            for (var c = a.zc(!0), d = 0, e = 0, f; f = c[e]; e++)
                if (f.Hc()) {
                    var h = f.kb();
                    f.moveBy(-h.x, d - h.y);
                    Fc(f);
                    d = f.kb().y + D(f).height + a.Rb.V().Tn
                } g.h.oa(!1);
            a.fd(!0)
        },
        $e: g.Va.Vd.ue,
        id: "cleanWorkspace",
        weight: 3
    })
};
g.Ca.RD = function(a, c) {
    for (var d = 0, e = 0; e < c.length; e++)
        for (var f = c[e]; f;) setTimeout(f.Oj.bind(f, a), d), f = r(f), d += 10
};
g.Ca.wK = function() {
    g.Va.B.register({
        Yd: function() {
            return g.i.COLLAPSE_ALL
        },
        vc: function(a) {
            if (a.u.options.collapse) {
                a = a.u.zc(!1);
                for (var c = 0; c < a.length; c++)
                    for (var d = a[c]; d;) {
                        if (!d.isCollapsed()) return "enabled";
                        d = r(d)
                    }
                return "disabled"
            }
            return "hidden"
        },
        cb: function(a) {
            g.Ca.RD(!0, a.u.zc(!0))
        },
        $e: g.Va.Vd.ue,
        id: "collapseWorkspace",
        weight: 4
    })
};
g.Ca.HK = function() {
    g.Va.B.register({
        Yd: function() {
            return g.i.EXPAND_ALL
        },
        vc: function(a) {
            if (a.u.options.collapse) {
                a = a.u.zc(!1);
                for (var c = 0; c < a.length; c++)
                    for (var d = a[c]; d;) {
                        if (d.isCollapsed()) return "enabled";
                        d = r(d)
                    }
                return "disabled"
            }
            return "hidden"
        },
        cb: function(a) {
            g.Ca.RD(!1, a.u.zc(!0))
        },
        $e: g.Va.Vd.ue,
        id: "expandWorkspace",
        weight: 5
    })
};
g.Ca.KA = function(a, c) {
    if (a.Af()) Array.prototype.push.apply(c, p(a, !1));
    else {
        a = wa(a, !1);
        for (var d = 0; d < a.length; d++) g.Ca.KA(a[d], c)
    }
};
g.Ca.Fw = function(a) {
    var c = [];
    a = a.zc(!0);
    for (var d = 0; d < a.length; d++) g.Ca.KA(a[d], c);
    return c
};
g.Ca.hs = function(a, c) {
    g.h.oa(c);
    var d = a.shift();
    d && (d.u ? (d.J(!1, !0), setTimeout(g.Ca.hs, 10, a, c)) : g.Ca.hs(a, c));
    g.h.oa(!1)
};
g.Ca.DK = function() {
    g.Va.B.register({
        Yd: function(a) {
            if (a.u) return a = g.Ca.Fw(a.u).length, 1 == a ? g.i.DELETE_BLOCK : g.i.DELETE_X_BLOCKS.replace("%1", String(a))
        },
        vc: function(a) {
            if (a.u) return 0 < g.Ca.Fw(a.u).length ? "enabled" : "disabled"
        },
        cb: function(a) {
            if (a.u) {
                Hc(a.u);
                var c = g.Ca.Fw(a.u),
                    d = g.g.Mg();
                2 > c.length ? g.Ca.hs(c, d) : g.confirm(g.i.DELETE_ALL_BLOCKS.replace("%1", c.length), function(e) {
                    e && g.Ca.hs(c, d)
                })
            }
        },
        $e: g.Va.Vd.ue,
        id: "workspaceDelete",
        weight: 6
    })
};
g.Ca.LK = function() {
    g.Ca.vy();
    g.Ca.uy();
    g.Ca.vK();
    g.Ca.wK();
    g.Ca.HK();
    g.Ca.DK()
};
g.Ca.FK = function() {
    g.Va.B.register({
        Yd: function() {
            return g.i.DUPLICATE_BLOCK
        },
        vc: function(a) {
            a = a.block;
            return !a.Yb && a.Af() && a.Hc() ? (Pa(a.u) ? Oa(a.u, g.g.Aw(a, !0)) : 1) ? "enabled" : "disabled" : "hidden"
        },
        cb: function(a) {
            a.block && g.duplicate(a.block)
        },
        $e: g.Va.Vd.Nc,
        id: "blockDuplicate",
        weight: 1
    })
};
g.Ca.yK = function() {
    g.Va.B.register({
        Yd: function(a) {
            return a.block.rf ? g.i.REMOVE_COMMENT : g.i.ADD_COMMENT
        },
        vc: function(a) {
            a = a.block;
            return g.g.userAgent.ff || a.Yb || !a.u.options.Co || a.isCollapsed() || !a.ge() ? "hidden" : "enabled"
        },
        cb: function(a) {
            a = a.block;
            a.rf ? a.Pj(null) : a.Pj("")
        },
        $e: g.Va.Vd.Nc,
        id: "blockComment",
        weight: 2
    })
};
g.Ca.JK = function() {
    g.Va.B.register({
        Yd: function(a) {
            return ob(a.block) ? g.i.EXTERNAL_INPUTS : g.i.INLINE_INPUTS
        },
        vc: function(a) {
            a = a.block;
            if (!a.Yb && a.Hc() && !a.isCollapsed())
                for (var c = 1; c < a.Y.length; c++)
                    if (a.Y[c - 1].type != g.ob.lf && a.Y[c].type != g.ob.lf) return "enabled";
            return "hidden"
        },
        cb: function(a) {
            a.block.ye(!ob(a.block))
        },
        $e: g.Va.Vd.Nc,
        id: "blockInline",
        weight: 3
    })
};
g.Ca.xK = function() {
    g.Va.B.register({
        Yd: function(a) {
            return a.block.isCollapsed() ? g.i.EXPAND_BLOCK : g.i.COLLAPSE_BLOCK
        },
        vc: function(a) {
            a = a.block;
            return !a.Yb && a.Hc() && a.u.options.collapse ? "enabled" : "hidden"
        },
        cb: function(a) {
            a.block.Oj(!a.block.isCollapsed())
        },
        $e: g.Va.Vd.Nc,
        id: "blockCollapseExpand",
        weight: 4
    })
};
g.Ca.EK = function() {
    g.Va.B.register({
        Yd: function(a) {
            return a.block.isEnabled() ? g.i.DISABLE_BLOCK : g.i.ENABLE_BLOCK
        },
        vc: function(a) {
            a = a.block;
            return !a.Yb && a.u.options.disable && a.ge() ? ic(a) ? "disabled" : "enabled" : "hidden"
        },
        cb: function(a) {
            a = a.block;
            var c = g.h.tc();
            c || g.h.oa(!0);
            a.le(!a.isEnabled());
            c || g.h.oa(!1)
        },
        $e: g.Va.Vd.Nc,
        id: "blockDisable",
        weight: 5
    })
};
g.Ca.ty = function() {
    g.Va.B.register({
        Yd: function(a) {
            var c = a.block;
            a = p(c, !1).length;
            (c = r(c)) && (a -= p(c, !1).length);
            return 1 == a ? g.i.DELETE_BLOCK : g.i.DELETE_X_BLOCKS.replace("%1", String(a))
        },
        vc: function(a) {
            return !a.block.Yb && a.block.Af() ? "enabled" : "hidden"
        },
        cb: function(a) {
            g.h.oa(!0);
            a.block && g.Vv(a.block);
            g.h.oa(!1)
        },
        $e: g.Va.Vd.Nc,
        id: "blockDelete",
        weight: 6
    })
};
g.Ca.IK = function() {
    g.Va.B.register({
        Yd: function() {
            return g.i.HELP
        },
        vc: function(a) {
            a = a.block;
            return ("function" == typeof a.dc ? a.dc() : a.dc) ? "enabled" : "hidden"
        },
        cb: function(a) {
            a.block.showHelp()
        },
        $e: g.Va.Vd.Nc,
        id: "blockHelp",
        weight: 7
    })
};
g.Ca.uK = function() {
    g.Ca.FK();
    g.Ca.yK();
    g.Ca.JK();
    g.Ca.xK();
    g.Ca.EK();
    g.Ca.ty();
    g.Ca.IK()
};
g.Ca.BK = function() {
    g.Ca.LK();
    g.Ca.uK()
};
g.Ca.BK();
g.ac = {};
g.ac.names = {
    ZE: "escape",
    gk: "delete",
    CE: "copy",
    JE: "cut",
    rG: "paste",
    fH: "undo",
    HG: "redo"
};
g.ac.GK = function() {
    var a = {
        name: g.ac.names.ZE,
        vc: function(c) {
            return !c.options.readOnly
        },
        cb: function() {
            g.Uc();
            return !0
        }
    };
    g.Rc.B.register(a);
    I(g.g.la.Cz, a.name)
};
g.ac.ty = function() {
    var a = {
        name: g.ac.names.gk,
        vc: function(c) {
            return !c.options.readOnly && g.selected && g.selected.Af()
        },
        cb: function(c, d) {
            d.preventDefault();
            if (g.sg.Uk()) return !1;
            g.Vv(g.selected);
            return !0
        }
    };
    g.Rc.B.register(a);
    I(g.g.la.gk, a.name);
    I(g.g.la.nE, a.name)
};
g.ac.zK = function() {
    var a = {
        name: g.ac.names.CE,
        vc: function(d) {
            return !d.options.readOnly && !g.sg.Uk() && g.selected && g.selected.Af() && g.selected.Hc()
        },
        cb: function(d, e) {
            e.preventDefault();
            g.Uc();
            g.Mv(g.selected);
            return !0
        }
    };
    g.Rc.B.register(a);
    var c = J(g.g.la.au, [g.g.la.dk]);
    I(c, a.name);
    c = J(g.g.la.au, [g.g.la.Ol]);
    I(c, a.name);
    c = J(g.g.la.au, [g.g.la.cm]);
    I(c, a.name)
};
g.ac.AK = function() {
    var a = {
        name: g.ac.names.JE,
        vc: function(d) {
            return !d.options.readOnly && !g.sg.Uk() && g.selected && g.selected.Af() && g.selected.Hc() && !g.selected.u.ag
        },
        cb: function() {
            g.Mv(g.selected);
            g.Vv(g.selected);
            return !0
        }
    };
    g.Rc.B.register(a);
    var c = J(g.g.la.dv, [g.g.la.dk]);
    I(c, a.name);
    c = J(g.g.la.dv, [g.g.la.Ol]);
    I(c, a.name);
    c = J(g.g.la.dv, [g.g.la.cm]);
    I(c, a.name)
};
g.ac.KK = function() {
    var a = {
        name: g.ac.names.rG,
        vc: function(d) {
            return !d.options.readOnly && !g.sg.Uk()
        },
        cb: function() {
            return g.wt()
        }
    };
    g.Rc.B.register(a);
    var c = J(g.g.la.$u, [g.g.la.dk]);
    I(c, a.name);
    c = J(g.g.la.$u, [g.g.la.Ol]);
    I(c, a.name);
    c = J(g.g.la.$u, [g.g.la.cm]);
    I(c, a.name)
};
g.ac.vy = function() {
    var a = {
        name: g.ac.names.fH,
        vc: function(d) {
            return !d.options.readOnly && !g.sg.Uk()
        },
        cb: function(d) {
            g.Uc();
            Qa(d, !1);
            return !0
        }
    };
    g.Rc.B.register(a);
    var c = J(g.g.la.om, [g.g.la.dk]);
    I(c, a.name);
    c = J(g.g.la.om, [g.g.la.Ol]);
    I(c, a.name);
    c = J(g.g.la.om, [g.g.la.cm]);
    I(c, a.name)
};
g.ac.uy = function() {
    var a = {
        name: g.ac.names.HG,
        vc: function(d) {
            return !g.sg.Uk() && !d.options.readOnly
        },
        cb: function(d) {
            g.Uc();
            Qa(d, !0);
            return !0
        }
    };
    g.Rc.B.register(a);
    var c = J(g.g.la.om, [g.g.la.wr, g.g.la.dk]);
    I(c, a.name);
    c = J(g.g.la.om, [g.g.la.wr, g.g.la.Ol]);
    I(c, a.name);
    c = J(g.g.la.om, [g.g.la.wr, g.g.la.cm]);
    I(c, a.name);
    c = J(g.g.la.mH, [g.g.la.dk]);
    I(c, a.name)
};
g.ac.CK = function() {
    g.ac.GK();
    g.ac.ty();
    g.ac.zK();
    g.ac.AK();
    g.ac.KK();
    g.ac.vy();
    g.ac.uy()
};
g.ac.CK();
g.g.F = {};
g.g.F.Xa = function(a, c) {
    return " " + a + "," + c + " "
};
g.g.F.curve = function(a, c) {
    return " " + a + c.join("")
};
g.g.F.moveTo = function(a, c) {
    return " M " + a + "," + c + " "
};
g.g.F.moveBy = function(a, c) {
    return " m " + a + "," + c + " "
};
g.g.F.lineTo = function(a, c) {
    return " l " + a + "," + c + " "
};
g.g.F.line = function(a) {
    return " l" + a.join("")
};
g.g.F.sa = function(a, c) {
    return " " + a + " " + c + " "
};
g.g.F.arc = function(a, c, d, e) {
    return a + " " + d + " " + d + " " + c + e
};
g.m.lh = function() {
    this.tg = 0;
    this.MG = 3;
    this.jf = 5;
    this.bA = 8;
    this.Qd = 10;
    this.tA = this.jf;
    this.ho = 15;
    this.km = 5;
    this.Br = 8;
    this.jG = 15;
    this.Bu = 4;
    this.fG = 12;
    this.UE = 16;
    this.TE = this.Az = this.ho;
    this.Mb = 8;
    this.SG = this.Xn = 15;
    this.qA = 0;
    this.sA = 20;
    this.oE = 4;
    this.bH = this.jf;
    this.cH = this.Qd;
    this.qE = this.jf;
    this.pE = this.Qd;
    this.Eq = !1;
    this.PG = 15;
    this.QG = 100;
    this.OG = 15;
    this.Tn = 24;
    this.WE = 14.5;
    this.VE = this.ho + 11;
    this.$E = 2;
    this.XE = this.Tn;
    this.pA = g.g.F.moveBy(0, 0);
    this.JF = 12;
    this.KF = 6;
    this.rg = 11;
    this.oh = "normal";
    this.nh =
        "sans-serif";
    this.cr = this.jk = -1;
    this.$q = 4;
    this.iu = 16;
    this.mh = 5;
    this.Vl = 3;
    this.Fz = "#fff";
    this.ku = !g.g.userAgent.ff && !g.g.userAgent.ik;
    this.Hz = this.iu;
    this.kF = this.jF = this.ju = !1;
    this.mF = this.mh;
    this.Mn = 12;
    this.lF = "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMi43MSIgaGVpZ2h0PSI4Ljc5IiB2aWV3Qm94PSIwIDAgMTIuNzEgOC43OSI+PHRpdGxlPmRyb3Bkb3duLWFycm93PC90aXRsZT48ZyBvcGFjaXR5PSIwLjEiPjxwYXRoIGQ9Ik0xMi43MSwyLjQ0QTIuNDEsMi40MSwwLDAsMSwxMiw0LjE2TDguMDgsOC4wOGEyLjQ1LDIuNDUsMCwwLDEtMy40NSwwTDAuNzIsNC4xNkEyLjQyLDIuNDIsMCwwLDEsMCwyLjQ0LDIuNDgsMi40OCwwLDAsMSwuNzEuNzFDMSwwLjQ3LDEuNDMsMCw2LjM2LDBTMTEuNzUsMC40NiwxMiwuNzFBMi40NCwyLjQ0LDAsMCwxLDEyLjcxLDIuNDRaIiBmaWxsPSIjMjMxZjIwIi8+PC9nPjxwYXRoIGQ9Ik02LjM2LDcuNzlhMS40MywxLjQzLDAsMCwxLTEtLjQyTDEuNDIsMy40NWExLjQ0LDEuNDQsMCwwLDEsMC0yYzAuNTYtLjU2LDkuMzEtMC41Niw5Ljg3LDBhMS40NCwxLjQ0LDAsMCwxLDAsMkw3LjM3LDcuMzdBMS40MywxLjQzLDAsMCwxLDYuMzYsNy43OVoiIGZpbGw9IiNmZmYiLz48L3N2Zz4=";
    this.Gz = this.nF = !1;
    this.iF = 26;
    this.hF = this.iu;
    this.gF = this.mh - 3;
    this.Kp = String(Math.random()).substring(2);
    this.rs = "";
    this.rw = null;
    this.yB = "";
    this.$v = null;
    this.uB = "";
    this.Io = this.Rv = null;
    this.Uq = "#cc0a0a";
    this.lr = "#4286f4";
    this.Wq = 100;
    this.DA = 5;
    this.Vq = 10;
    this.EE = 2;
    this.GE = 4;
    this.Kz = !1;
    this.pu = "#000000";
    this.gr = .2;
    this.nA = {
        uG: 1,
        dm: 2
    }
};
b = g.m.lh.prototype;
b.T = function() {
    this.$l = this.sx();
    this.dm = this.tx();
    this.im = this.vx();
    this.Ju = this.ux();
    var a = this.Mb,
        c = g.g.F.arc("a", "0 0,0", a, g.g.F.Xa(-a, a)),
        d = g.g.F.arc("a", "0 0,0", a, g.g.F.Xa(a, a));
    this.hr = {
        width: a,
        height: a,
        iy: c,
        xt: d
    };
    a = this.Mb;
    c = g.g.F.moveBy(0, a) + g.g.F.arc("a", "0 0,1", a, g.g.F.Xa(a, -a));
    d = g.g.F.arc("a", "0 0,1", a, g.g.F.Xa(a, a));
    var e = g.g.F.arc("a", "0 0,1", a, g.g.F.Xa(-a, -a)),
        f = g.g.F.arc("a", "0 0,1", a, g.g.F.Xa(-a, a));
    this.bo = {
        Xy: c,
        mL: d,
        DH: f,
        uv: e,
        PK: a
    }
};
b.Yp = function(a) {
    this.Vi = Object.create(null);
    var c = a.Vi,
        d;
    for (d in c) this.Vi[d] = Ld(c[d]);
    this.nh = a.fontStyle && void 0 != a.fontStyle.family ? a.fontStyle.family : this.nh;
    this.oh = a.fontStyle && void 0 != a.fontStyle.weight ? a.fontStyle.weight : this.oh;
    this.rg = a.fontStyle && void 0 != a.fontStyle.size ? a.fontStyle.size : this.rg;
    c = g.g.o.OC("Hg", this.rg + "pt", this.oh, this.nh);
    this.jk = c.height;
    this.cr = c.pf;
    this.Uq = Ja(a, "cursorColour") || this.Uq;
    this.lr = Ja(a, "markerColour") || this.lr;
    this.pu = Ja(a, "insertionMarkerColour") ||
        this.pu;
    this.gr = Number(Ja(a, "insertionMarkerOpacity")) || this.gr;
    this.Eq = null != a.Qy ? a.Qy : this.Eq
};

function Ic(a, c) {
    var d = "auto_" + c;
    a.Vi[d] || (a.Vi[d] = Ld({
        colourPrimary: c
    }));
    return {
        style: a.Vi[d],
        name: d
    }
}

function Ec(a, c) {
    return a.Vi[c || ""] || (c && 0 == c.indexOf("auto_") ? Ic(a, c.substring(5)).style : Ld({
        colourPrimary: "#000000"
    }))
}

function Ld(a) {
    var c = {};
    a && g.g.object.Kd(c, a);
    a = g.g.vt(c.colourPrimary || "#000");
    c.Yi = a.fp;
    c.colourSecondary ? a = g.g.vt(c.colourSecondary).fp : (a = c.Yi, a = g.g.rb.qv("#fff", a, .6) || a);
    c.Xr = a;
    c.colourTertiary ? a = g.g.vt(c.colourTertiary).fp : (a = c.Yi, a = g.g.rb.qv("#fff", a, .3) || a);
    c.Eh = a;
    c.Pg = c.hat || "";
    return c
}
b.J = function() {
    this.rw && g.g.o.removeNode(this.rw);
    this.$v && g.g.o.removeNode(this.$v);
    this.Rv && g.g.o.removeNode(this.Rv);
    this.Io = null
};
b.sx = function() {
    var a = this.JF,
        c = this.KF,
        d = g.g.F.line([g.g.F.Xa(c, a / 4), g.g.F.Xa(2 * -c, a / 2), g.g.F.Xa(c, a / 4)]);
    return {
        height: a,
        width: c,
        path: d
    }
};
b.vx = function() {
    var a = this.PG,
        c = this.QG,
        d = g.g.F.curve("c", [g.g.F.Xa(30, -a), g.g.F.Xa(70, -a), g.g.F.Xa(c, 0)]);
    return {
        height: a,
        width: c,
        path: d
    }
};
b.ux = function() {
    function a(h) {
        h = h ? -1 : 1;
        var k = -h,
            l = d / 2,
            m = g.g.F.Xa(c, h * l);
        return g.g.F.curve("c", [g.g.F.Xa(0, h * (l + 2.5)), g.g.F.Xa(-c, k * (l + .5)), g.g.F.Xa(-c, h * l)]) + g.g.F.curve("s", [g.g.F.Xa(c, 2.5 * k), m])
    }
    var c = this.Br,
        d = this.ho,
        e = a(!0),
        f = a(!1);
    return {
        type: this.nA.uG,
        width: c,
        height: d,
        Ff: f,
        Ep: e
    }
};
b.tx = function() {
    function a(k) {
        return g.g.F.line([g.g.F.Xa(k * e, d), g.g.F.Xa(3 * k, 0), g.g.F.Xa(k * e, -d)])
    }
    var c = this.jG,
        d = this.Bu,
        e = (c - 3) / 2,
        f = a(1),
        h = a(-1);
    return {
        type: this.nA.dm,
        width: c,
        height: d,
        Hj: f,
        kD: h
    }
};

function nb(a, c) {
    switch (c.type) {
        case g.pa.$b:
        case g.pa.qe:
            return a.Ju;
        case g.pa.Ge:
        case g.pa.$c:
            return a.dm;
        default:
            throw Error("Unknown connection type");
    }
}
b.eb = function(a, c, d) {
    d = this.Cw(d);
    c = "blockly-renderer-style-" + c;
    this.Io = document.getElementById(c);
    var e = d.join("\n");
    this.Io ? this.Io.firstChild.textContent = e : (d = document.createElement("style"), d.id = c, c = document.createTextNode(e), d.appendChild(c), document.head.insertBefore(d, document.head.firstChild), this.Io = d);
    a = g.g.o.K(g.g.D.yz, {}, a);
    c = g.g.o.K(g.g.D.Iz, {
        id: "blocklyEmbossFilter" + this.Kp
    }, a);
    g.g.o.K(g.g.D.dF, {
        "in": "SourceAlpha",
        stdDeviation: 1,
        result: "blur"
    }, c);
    d = g.g.o.K(g.g.D.fF, {
        "in": "blur",
        surfaceScale: 1,
        specularConstant: .5,
        specularExponent: 10,
        "lighting-color": "white",
        result: "specOut"
    }, c);
    g.g.o.K(g.g.D.eF, {
        x: -5E3,
        y: -1E4,
        z: 2E4
    }, d);
    g.g.o.K(g.g.D.gu, {
        "in": "specOut",
        in2: "SourceAlpha",
        operator: "in",
        result: "specOut"
    }, c);
    g.g.o.K(g.g.D.gu, {
        "in": "SourceGraphic",
        in2: "specOut",
        operator: "arithmetic",
        k1: 0,
        k2: 1,
        k3: 1,
        k4: 0
    }, c);
    this.rs = c.id;
    this.rw = c;
    c = g.g.o.K(g.g.D.jA, {
        id: "blocklyDisabledPattern" + this.Kp,
        patternUnits: "userSpaceOnUse",
        width: 10,
        height: 10
    }, a);
    g.g.o.K(g.g.D.Hb, {
        width: 10,
        height: 10,
        fill: "#aaa"
    }, c);
    g.g.o.K(g.g.D.re, {
        d: "M 0 0 L 10 10 M 10 0 L 0 10",
        stroke: "#cc0"
    }, c);
    this.yB = c.id;
    this.$v = c;
    g.m.ne && (a = g.g.o.K(g.g.D.Iz, {
        id: "blocklyDebugFilter" + this.Kp,
        height: "160%",
        width: "180%",
        y: "-30%",
        x: "-40%"
    }, a), c = g.g.o.K(g.g.D.aF, {
        result: "outBlur"
    }, a), g.g.o.K(g.g.D.cF, {
        type: "table",
        tableValues: "0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1"
    }, c), g.g.o.K(g.g.D.bF, {
        "flood-color": "#ff0000",
        "flood-opacity": .5,
        result: "outColor"
    }, a), g.g.o.K(g.g.D.gu, {
        "in": "outColor",
        in2: "outBlur",
        operator: "in",
        result: "outGlow"
    }, a), this.uB = a.id, this.Rv = a)
};
b.Cw = function(a) {
    return [a + " .blocklyText, ", a + " .blocklyFlyoutLabelText {", "font: " + this.oh + " " + this.rg + "pt " + this.nh + ";", "}", a + " .blocklyText {", "fill: #fff;", "}", a + " .blocklyNonEditableText>rect,", a + " .blocklyEditableText>rect {", "fill: " + this.Fz + ";", "fill-opacity: .6;", "stroke: none;", "}", a + " .blocklyNonEditableText>text,", a + " .blocklyEditableText>text {", "fill: #000;", "}", a + " .blocklyFlyoutLabelText {", "fill: #000;", "}", a + " .blocklyText.blocklyBubbleText {", "fill: #000;", "}", a + " .blocklyEditableText:not(.editing):hover>rect {",
        "stroke: #fff;", "stroke-width: 2;", "}", a + " .blocklyHtmlInput {", "font-family: " + this.nh + ";", "font-weight: " + this.oh + ";", "}", a + " .blocklySelected>.blocklyPath {", "stroke: #fc3;", "stroke-width: 3px;", "}", a + " .blocklyHighlightedConnectionPath {", "stroke: #fc3;", "}", a + " .blocklyReplaceable .blocklyPath {", "fill-opacity: .5;", "}", a + " .blocklyReplaceable .blocklyPathLight,", a + " .blocklyReplaceable .blocklyPathDark {", "display: none;", "}", a + " .blocklyInsertionMarker>.blocklyPath {", "fill-opacity: " + this.gr +
        ";", "stroke: none;", "}"
    ]
};
g.m.A = {
    NONE: 0,
    yd: 1,
    Mz: 2,
    Pz: 4,
    Pu: 8,
    mz: 16,
    Sz: 32,
    Ez: 64,
    gf: 128,
    Qz: 256,
    rA: 512,
    zE: 1024,
    Iu: 2048,
    Au: 4096,
    nG: 8192,
    du: 16384,
    uu: 32768,
    tu: 65536,
    Ou: 131072,
    Nu: 262144,
    Wz: 524288,
    rr: 1048576,
    Wu: 2097152,
    Zt: 4194304,
    Rz: 8388608
};
g.m.A.iN = g.m.A.uu | g.m.A.tu;
g.m.A.pO = g.m.A.Ou | g.m.A.Nu;
g.m.A.Gx = 16777216;
g.m.A.cc = function() {
    Object.prototype.hasOwnProperty.call(g.m.A, void 0) || (g.m.A[void 0] = g.m.A.Gx, g.m.A.Gx <<= 1);
    return g.m.A[void 0]
};
g.m.A.Tg = function(a) {
    return a.type & g.m.A.yd
};
g.m.A.al = function(a) {
    return a.type & g.m.A.Mz
};
g.m.A.Sm = function(a) {
    return a.type & g.m.A.Pz
};
g.m.A.We = function(a) {
    return a.type & g.m.A.Pu
};
g.m.A.gP = function(a) {
    return a.type & g.m.A.Sz
};
g.m.A.Th = function(a) {
    return a.type & g.m.A.gf
};
g.m.A.op = function(a) {
    return a.type & g.m.A.Ez
};
g.m.A.vj = function(a) {
    return a.type & g.m.A.Qz
};
g.m.A.cl = function(a) {
    return a.type & g.m.A.rA
};
g.m.A.Xm = function(a) {
    return a.type & g.m.A.Iu
};
g.m.A.xj = function(a) {
    return a.type & g.m.A.Au
};
g.m.A.wJ = function(a) {
    return a.type & (g.m.A.Iu | g.m.A.Au)
};
g.m.A.wj = function(a) {
    return a.type & g.m.A.tu
};
g.m.A.AC = function(a) {
    return a.type & g.m.A.Nu
};
g.m.A.pp = function(a) {
    return a.type & g.m.A.uu
};
g.m.A.hP = function(a) {
    return a.type & g.m.A.Ou
};
g.m.A.fP = function(a) {
    return a.type & g.m.A.du
};
g.m.A.yC = function(a) {
    return a.type & g.m.A.Wz
};
g.m.A.jP = function(a) {
    return a.type & g.m.A.rr
};
g.m.A.qJ = function(a) {
    return a.type & g.m.A.mz
};
g.m.A.Ps = function(a) {
    return a.type & g.m.A.Wu
};
g.m.A.Gs = function(a) {
    return a.type & g.m.A.Zt
};
g.m.A.DC = function(a) {
    return a.type & (g.m.A.Wu | g.m.A.Zt)
};
g.m.A.sJ = function(a) {
    return a.type & g.m.A.Rz
};
g.m.Hi = function(a) {
    this.height = this.width = 0;
    this.type = g.m.A.NONE;
    this.Xi = this.Ha = 0;
    this.C = a;
    this.Cf = this.C.Xn
};
g.m.Ka = function(a, c) {
    g.m.Ka.v.constructor.call(this, a);
    this.Cd = c;
    this.shape = nb(this.C, c);
    this.$k = !!this.shape.isDynamic;
    this.type |= g.m.A.zE
};
g.g.object.X(g.m.Ka, g.m.Hi);
g.m.Gu = function(a, c) {
    g.m.Gu.v.constructor.call(this, a, c);
    this.type |= g.m.A.nG;
    this.height = this.$k ? 0 : this.shape.height;
    this.Jf = this.width = this.$k ? 0 : this.shape.width;
    this.Ne = this.C.km;
    this.Eo = 0
};
g.g.object.X(g.m.Gu, g.m.Ka);
g.m.Ku = function(a, c) {
    g.m.Ku.v.constructor.call(this, a, c);
    this.type |= g.m.A.Iu;
    this.height = this.shape.height;
    this.width = this.shape.width
};
g.g.object.X(g.m.Ku, g.m.Ka);
g.m.Cu = function(a, c) {
    g.m.Cu.v.constructor.call(this, a, c);
    this.type |= g.m.A.Au;
    this.height = this.shape.height;
    this.width = this.shape.width
};
g.g.object.X(g.m.Cu, g.m.Ka);
g.m.Qn = function(a, c) {
    g.m.Qn.v.constructor.call(this, a, c.connection);
    this.type |= g.m.A.gf;
    this.input = c;
    this.align = c.align;
    (this.aj = c.connection && c.connection.ra() ? c.connection.ra() : null) ? (a = D(this.aj), this.Do = a.width, this.$r = a.height) : this.$r = this.Do = 0;
    this.Ne = this.Eo = 0
};
g.g.object.X(g.m.Qn, g.m.Ka);
g.m.Ei = function(a, c) {
    g.m.Ei.v.constructor.call(this, a, c);
    this.type |= g.m.A.Qz;
    this.aj ? (this.width = this.Do, this.height = this.$r) : (this.height = this.C.VE, this.width = this.C.WE);
    this.xm = this.$k ? this.shape.height(this.height) : this.shape.height;
    this.Gg = this.$k ? this.shape.width(this.height) : this.shape.width;
    this.aj || (this.width += this.Gg * (this.$k ? 2 : 1));
    this.Ne = this.$k ? this.shape.Ne(this.xm) : this.C.km;
    this.Eo = this.$k ? this.shape.Eo(this.Gg) : 0
};
g.g.object.X(g.m.Ei, g.m.Qn);
g.m.Oi = function(a, c) {
    g.m.Oi.v.constructor.call(this, a, c);
    this.type |= g.m.A.rA;
    this.height = this.aj ? this.$r + this.C.qA : this.C.XE;
    this.width = this.C.SG + this.shape.width
};
g.g.object.X(g.m.Oi, g.m.Qn);
g.m.Zq = function(a, c) {
    g.m.Zq.v.constructor.call(this, a, c);
    this.type |= g.m.A.Ez;
    this.height = this.aj ? this.$r - this.C.km - this.C.jf : this.shape.height;
    this.width = this.shape.width + this.C.$E;
    this.Ne = this.C.km;
    this.xm = this.shape.height;
    this.Gg = this.shape.width
};
g.g.object.X(g.m.Zq, g.m.Qn);
g.m.pe = function(a, c) {
    g.m.pe.v.constructor.call(this, a);
    this.icon = c;
    this.isVisible = c.isVisible();
    this.type |= g.m.A.Pz;
    a = new g.g.ad(g.pe.prototype.xr, g.pe.prototype.xr - 2);
    this.height = a.height;
    this.width = a.width
};
g.g.object.X(g.m.pe, g.m.Hi);
g.m.qu = function(a) {
    g.m.qu.v.constructor.call(this, a);
    this.type |= g.m.A.Wz;
    this.height = this.C.$l.height;
    this.width = this.C.$l.width
};
g.g.object.X(g.m.qu, g.m.Hi);
g.m.hd = function(a, c) {
    g.m.hd.v.constructor.call(this, a);
    this.Gm = c;
    this.ge = c.Kn;
    this.EI = c.TB();
    this.type |= g.m.A.yd;
    a = this.Gm.Nh();
    this.height = a.height;
    this.width = a.width
};
g.g.object.X(g.m.hd, g.m.Hi);
g.m.nu = function(a) {
    g.m.nu.v.constructor.call(this, a);
    this.type |= g.m.A.Mz;
    this.height = this.C.im.height;
    this.width = this.C.im.width;
    this.qm = this.height
};
g.g.object.X(g.m.nu, g.m.Hi);
g.m.jm = function(a, c) {
    g.m.jm.v.constructor.call(this, a);
    this.type = (c && "left" != c ? g.m.A.Ou : g.m.A.uu) | g.m.A.du;
    this.width = this.height = this.C.tg
};
g.g.object.X(g.m.jm, g.m.Hi);
g.m.vr = function(a, c) {
    g.m.vr.v.constructor.call(this, a);
    this.type = (c && "left" != c ? g.m.A.Nu : g.m.A.tu) | g.m.A.du;
    this.width = this.C.Mb;
    this.height = this.C.Mb / 2
};
g.g.object.X(g.m.vr, g.m.Hi);
g.m.ph = function(a, c) {
    g.m.ph.v.constructor.call(this, a);
    this.type = this.type | g.m.A.Pu | g.m.A.Sz;
    this.width = c;
    this.height = this.C.OG
};
g.g.object.X(g.m.ph, g.m.Hi);
g.m.vk = function(a) {
    this.type = g.m.A.rr;
    this.elements = [];
    this.Ha = this.Dc = this.df = this.minWidth = this.minHeight = this.width = this.height = 0;
    this.jC = this.Pm = this.Qw = this.Gc = this.lj = !1;
    this.C = a;
    this.Cf = this.C.Xn;
    this.align = null
};
g.m.vk.prototype.measure = function() {
    throw Error("Unexpected attempt to measure a base Row.");
};

function Md(a) {
    for (var c = a.elements.length - 1, d; d = a.elements[c]; c--)
        if (g.m.A.Th(d)) return d;
    return null
}
g.m.vk.prototype.Nt = function() {
    return !0
};
g.m.vk.prototype.Oo = function() {
    return !0
};
g.m.Bk = function(a) {
    g.m.Bk.v.constructor.call(this, a);
    this.type |= g.m.A.Wu;
    this.qm = this.Bh = 0;
    this.iJ = !1;
    this.connection = null
};
g.g.object.X(g.m.Bk, g.m.vk);
g.m.Bk.prototype.Rw = function(a) {
    var c = (a.Pg ? "cap" === a.Pg : this.C.Eq) && !a.R && !a.qa,
        d = a.qa && a.qa.ra();
    return !!a.R || c || (d ? r(d) == a : !1)
};
g.m.Bk.prototype.measure = function() {
    for (var a = 0, c = 0, d = 0, e = 0, f; f = this.elements[e]; e++) c += f.width, g.m.A.We(f) || (g.m.A.al(f) ? d = Math.max(d, f.qm) : a = Math.max(a, f.height));
    this.width = Math.max(this.minWidth, c);
    this.height = Math.max(this.minHeight, a) + d;
    this.Bh = this.qm = d;
    this.df = this.width
};
g.m.Bk.prototype.Nt = function() {
    return !1
};
g.m.Bk.prototype.Oo = function() {
    return !1
};
g.m.bk = function(a) {
    g.m.bk.v.constructor.call(this, a);
    this.type |= g.m.A.Zt;
    this.kC = !1;
    this.connection = null;
    this.pf = this.Ko = 0
};
g.g.object.X(g.m.bk, g.m.vk);
g.m.bk.prototype.Rw = function(a) {
    return !!a.R || !!r(a)
};
g.m.bk.prototype.measure = function() {
    for (var a = 0, c = 0, d = 0, e = 0, f; f = this.elements[e]; e++) c += f.width, g.m.A.We(f) || (g.m.A.xj(f) ? d = Math.max(d, f.height) : a = Math.max(a, f.height));
    this.width = Math.max(this.minWidth, c);
    this.height = Math.max(this.minHeight, a) + d;
    this.Ko = d;
    this.df = this.width
};
g.m.bk.prototype.Nt = function() {
    return !1
};
g.m.bk.prototype.Oo = function() {
    return !1
};
g.m.Ar = function(a, c, d) {
    g.m.Ar.v.constructor.call(this, a);
    this.type = this.type | g.m.A.Pu | g.m.A.mz;
    this.width = d;
    this.height = c;
    this.JB = !1;
    this.df = 0;
    this.elements = [new g.m.ph(this.C, d)]
};
g.g.object.X(g.m.Ar, g.m.vk);
g.m.Ar.prototype.measure = function() {};
g.m.Zl = function(a) {
    g.m.Zl.v.constructor.call(this, a);
    this.type |= g.m.A.Rz;
    this.hB = 0
};
g.g.object.X(g.m.Zl, g.m.vk);
g.m.Zl.prototype.measure = function() {
    this.width = this.minWidth;
    this.height = this.minHeight;
    for (var a = 0, c = 0, d; d = this.elements[c]; c++) this.width += d.width, g.m.A.Th(d) && (g.m.A.cl(d) ? a += d.Do : g.m.A.op(d) && 0 != d.Do && (a += d.Do - d.Gg)), g.m.A.We(d) || (this.height = Math.max(this.height, d.height));
    this.hB = a;
    this.df = this.width + a
};
g.m.Zl.prototype.Oo = function() {
    return !this.lj && !this.Gc
};
g.m.Rf = function(a, c) {
    this.U = c;
    this.Rb = a;
    this.C = this.Rb.V();
    this.R = c.R ? new g.m.Gu(this.C, c.R) : null;
    this.Tm = ob(c) && !c.isCollapsed();
    this.isCollapsed = c.isCollapsed();
    this.nd = c.nd();
    this.M = c.M;
    this.Sj = this.width = this.Yj = this.height = 0;
    this.rows = [];
    this.uC = [];
    this.oC = [];
    this.Lc = new g.m.Bk(this.C);
    this.Xb = new g.m.bk(this.C);
    this.Mt = this.Jf = 0
};
b = g.m.Rf.prototype;
b.measure = function() {
    var a = !!this.U.qa,
        c = (this.U.Pg ? "cap" === this.U.Pg : this.C.Eq) && !this.R && !a,
        d = this.Lc.Rw(this.U) ? g.m.jm : g.m.vr;
    this.Lc.elements.push(new d(this.C));
    c ? (a = new g.m.nu(this.C), this.Lc.elements.push(a), this.Lc.Bh = a.qm) : a && (this.Lc.iJ = !0, this.Lc.connection = new g.m.Ku(this.C, this.U.qa), this.Lc.elements.push(this.Lc.connection));
    this.U.Y.length && this.U.Y[0].type == g.ob.lf && !this.U.isCollapsed() ? this.Lc.minHeight = this.C.cH : this.Lc.minHeight = this.C.bH;
    d = g.m.jm;
    this.Lc.elements.push(new d(this.C,
        "right"));
    this.rows.push(this.Lc);
    a = new g.m.Zl(this.C);
    this.uC.push(a);
    d = pb(this.U);
    c = 0;
    for (var e; e = d[c]; c++) {
        var f = new g.m.pe(this.C, e);
        this.isCollapsed && e.cB ? this.oC.push(f) : a.elements.push(f)
    }
    e = null;
    for (c = 0; d = this.U.Y[c]; c++)
        if (d.isVisible()) {
            !e || d.type != g.ob.lf && e.type != g.ob.lf && (d.type != g.ob.yg && d.type != g.ob.pg || this.Tm) || (this.rows.push(a), a = new g.m.Zl(this.C), this.uC.push(a));
            for (e = 0; f = d.fb[e]; e++) a.elements.push(new g.m.hd(this.C, f, d));
            this.MA(d, a);
            e = d
        } this.isCollapsed && (a.jC = !0, a.elements.push(new g.m.qu(this.C)));
    (a.elements.length || a.Pm) && this.rows.push(a);
    this.ly();
    this.rows.push(this.Xb);
    this.LA();
    a = this.rows;
    this.rows = [];
    for (c = 0; c < a.length; c++)
        if (this.rows.push(a[c]), c != a.length - 1) {
            d = this.rows;
            e = d.push;
            f = a[c];
            var h = a[c + 1],
                k = new g.m.Ar(this.C, this.aC(f, h), this.width - this.Jf);
            f.Gc && (k.JB = !0);
            h.Gc && (k.nP = !0);
            e.call(d, k)
        } for (e = d = c = a = 0; f = this.rows[e]; e++) f.measure(), c = Math.max(c, f.width), f.Gc && (a = Math.max(a, f.width - Md(f).width)), d = Math.max(d, f.df);
    this.Sj = a;
    this.width = c;
    for (e = 0; f = this.rows[e]; e++) f.Gc && (f.Sj =
        this.Sj);
    this.Yj = Math.max(c, d);
    this.R && (this.Jf = this.R.width, this.width += this.R.width, this.Yj += this.R.width);
    this.fv();
    this.FB()
};
b.ly = function() {
    this.Xb.kC = !!this.U.aa;
    this.Xb.minHeight = this.U.Y.length && this.U.Y[this.U.Y.length - 1].type == g.ob.lf ? this.C.pE : this.C.qE;
    this.Xb.Rw(this.U) ? this.Xb.elements.push(new g.m.jm(this.C)) : this.Xb.elements.push(new g.m.vr(this.C));
    this.Xb.kC && (this.Xb.connection = new g.m.Cu(this.C, this.U.aa), this.Xb.elements.push(this.Xb.connection));
    this.Xb.elements.push(new g.m.jm(this.C, "right"))
};
b.MA = function(a, c) {
    this.Tm && a.type == g.ob.yg ? (c.elements.push(new g.m.Ei(this.C, a)), c.Qw = !0) : a.type == g.ob.lf ? (c.elements.push(new g.m.Oi(this.C, a)), c.Gc = !0) : a.type == g.ob.yg ? (c.elements.push(new g.m.Zq(this.C, a)), c.lj = !0) : a.type == g.ob.pg && (c.minHeight = Math.max(c.minHeight, a.ea() && a.ea().Sa ? this.C.TE : this.C.Az), c.Pm = !0);
    null == c.align && (c.align = a.align)
};
b.LA = function() {
    for (var a = 0, c; c = this.rows[a]; a++) {
        var d = c.elements;
        c.elements = [];
        c.Nt() && c.elements.push(new g.m.ph(this.C, this.Ok(null, d[0])));
        if (d.length) {
            for (var e = 0; e < d.length - 1; e++) c.elements.push(d[e]), c.elements.push(new g.m.ph(this.C, this.Ok(d[e], d[e + 1])));
            c.elements.push(d[d.length - 1]);
            c.Oo() && c.elements.push(new g.m.ph(this.C, this.Ok(d[d.length - 1], null)))
        }
    }
};
b.Ok = function(a, c) {
    if (!a && c && g.m.A.cl(c)) return this.C.sA;
    if (a && g.m.A.Th(a) && !c) {
        if (g.m.A.op(a)) return this.C.tg;
        if (g.m.A.vj(a)) return this.C.Qd;
        if (g.m.A.cl(a)) return this.C.tg
    }
    return a && g.m.A.pp(a) && c && (g.m.A.Xm(c) || g.m.A.xj(c)) ? c.Cf : a && g.m.A.wj(a) && c && (g.m.A.Xm(c) || g.m.A.xj(c)) ? c.Cf - this.C.Mb : this.C.jf
};
b.fv = function() {
    for (var a = 0, c; c = this.rows[a]; a++)
        if (c.Gc) Nd(this, c);
        else {
            var d = this.Yo(c) - c.width;
            0 < d && Od(c, d);
            g.m.A.DC(c) && (c.df = c.width)
        }
};
b.Yo = function() {
    return this.width - this.Jf
};

function Od(a, c) {
    a: {
        var d = 0;
        for (var e; e = a.elements[d]; d++)
            if (g.m.A.We(e)) {
                d = e;
                break a
            } d = null
    }
    a: {
        e = a.elements.length - 1;
        for (var f; f = a.elements[e]; e--)
            if (g.m.A.We(f)) {
                e = f;
                break a
            } e = null
    }
    if (a.lj || a.Gc) a.df += c;a.align == g.Ob.Nf.Nb ? e.width += c : a.align == g.Ob.Nf.Mq ? (d.width += c / 2, e.width += c / 2) : a.align == g.Ob.Nf.Qc ? d.width += c : e.width += c;a.width += c
}

function Nd(a, c) {
    var d = Md(c),
        e = c.width - d.width,
        f = a.Sj;
    e = f - e;
    0 < e && Od(c, e);
    e = c.width;
    f = a.Yo(c);
    d.width += f - e;
    d.height = Math.max(d.height, c.height);
    c.width += f - e;
    c.df = Math.max(c.width, a.Sj + c.hB)
}
b.aC = function() {
    return this.C.jf
};
b.RB = function(a, c) {
    return g.m.A.We(c) ? a.Dc + c.height / 2 : g.m.A.Gs(a) ? (a = a.Dc + a.height - a.Ko, g.m.A.xj(c) ? a + c.height / 2 : a - c.height / 2) : g.m.A.Ps(a) ? g.m.A.al(c) ? a.Bh - c.height / 2 : a.Bh + c.height / 2 : a.Dc + a.height / 2
};

function Pd(a, c) {
    for (var d = c.Ha, e = 0, f; f = c.elements[e]; e++) g.m.A.We(f) && (f.height = c.height), f.Ha = d, f.Xi = a.RB(c, f), d += f.width
}
b.FB = function() {
    for (var a = 0, c = 0, d = 0, e; e = this.rows[d]; d++) e.Dc = c, e.Ha = this.Jf, c += e.height, a = Math.max(a, e.df), Pd(this, e);
    this.R && this.U.aa && this.U.aa.isConnected() && (a = Math.max(a, D(this.U.aa.ra()).width));
    this.Yj = a + this.Jf;
    this.height = c;
    this.Mt = this.Lc.Bh;
    this.Xb.pf = c - this.Xb.Ko
};
g.m.ne = function(a) {
    this.Uf = [];
    this.gh = null;
    this.C = a
};
g.m.ne.Fg = {
    RK: !0,
    wI: !0,
    rows: !0,
    xI: !0,
    kB: !0,
    BH: !0,
    gB: !0,
    Ja: !0
};

function Qd(a, c, d) {
    if (g.m.ne.Fg.xI) {
        var e = c.Ha;
        d && (e = -(e + c.width));
        d = c.Xi - c.height / 2;
        a.Uf.push(g.g.o.K(g.g.D.Hb, {
            "class": "rowRenderingRect blockRenderDebug",
            x: e,
            y: d,
            width: c.width,
            height: c.height,
            stroke: "black",
            fill: "none",
            "stroke-width": "1px"
        }, a.gh));
        g.m.A.Tg(c) && c.Gm instanceof g.oe && a.Uf.push(g.g.o.K(g.g.D.Hb, {
            "class": "rowRenderingRect blockRenderDebug",
            x: e,
            y: d + a.C.cr,
            width: c.width,
            height: "0.1px",
            stroke: "red",
            fill: "none",
            "stroke-width": "0.5px"
        }, a.gh))
    }
    g.m.A.Th(c) && g.m.ne.Fg.kB && Rd(a, c.Cd)
}

function Rd(a, c) {
    if (g.m.ne.Fg.kB) {
        if (c.type == g.pa.$b) {
            var d = 4;
            var e = "magenta";
            var f = "none"
        } else c.type == g.pa.qe ? (d = 2, f = e = "magenta") : c.type == g.pa.$c ? (d = 4, e = "goldenrod", f = "none") : c.type == g.pa.Ge && (d = 2, f = e = "goldenrod");
        a.Uf.push(g.g.o.K(g.g.D.Nq, {
            "class": "blockRenderDebug",
            cx: c.Zh.x,
            cy: c.Zh.y,
            r: d,
            fill: f,
            stroke: e
        }, a.gh))
    }
}

function Sd(a, c, d) {
    for (var e = 0, f; f = a.Uf[e]; e++) g.g.o.removeNode(f);
    a.Uf = [];
    a.gh = c.Na();
    a.rK = "#" + Math.floor(16777215 * Math.random()).toString(16);
    f = e = 0;
    for (var h; h = d.rows[f]; f++) {
        if (g.m.A.qJ(h)) {
            var k = e;
            if (g.m.ne.Fg.RK) {
                var l = Math.abs(h.height),
                    m = 0 > h.height;
                m && (k -= l);
                a.Uf.push(g.g.o.K(g.g.D.Hb, {
                    "class": "rowSpacerRect blockRenderDebug",
                    x: d.M ? -(h.Ha + h.width) : h.Ha,
                    y: k,
                    width: h.width,
                    height: l,
                    stroke: m ? "black" : "blue",
                    fill: "blue",
                    "fill-opacity": "0.5",
                    "stroke-width": "1px"
                }, a.gh))
            }
        } else {
            m = a;
            l = h;
            k = d.M;
            for (var n =
                    0, q = l.elements.length; n < q; n++) {
                var v = l.elements[n];
                if (v)
                    if (g.m.A.We(v)) {
                        if (g.m.ne.Fg.wI) {
                            var A = Math.abs(v.width),
                                S = 0 > v.width,
                                U = S ? v.Ha - A : v.Ha;
                            k && (U = -(U + A));
                            m.Uf.push(g.g.o.K(g.g.D.Hb, {
                                "class": "elemSpacerRect blockRenderDebug",
                                x: U,
                                y: v.Xi - v.height / 2,
                                width: A,
                                height: v.height,
                                stroke: "pink",
                                fill: S ? "black" : "pink",
                                "fill-opacity": "0.5",
                                "stroke-width": "1px"
                            }, m.gh))
                        }
                    } else Qd(m, v, k);
                else console.warn("A row has an undefined or null element.", l, v)
            }
            g.m.ne.Fg.rows && (m.Uf.push(g.g.o.K(g.g.D.Hb, {
                "class": "elemRenderingRect blockRenderDebug",
                x: k ? -(l.Ha + l.width) : l.Ha,
                y: l.Dc,
                width: l.width,
                height: l.height,
                stroke: "red",
                fill: "none",
                "stroke-width": "1px"
            }, m.gh)), g.m.A.DC(l) || g.m.ne.Fg.gB && m.Uf.push(g.g.o.K(g.g.D.Hb, {
                "class": "connectedBlockWidth blockRenderDebug",
                x: k ? -(l.Ha + l.df) : l.Ha,
                y: l.Dc,
                width: l.df,
                height: l.height,
                stroke: m.rK,
                fill: "none",
                "stroke-width": "1px",
                "stroke-dasharray": "3,3"
            }, m.gh)))
        }
        e += h.height
    }
    c.qa && Rd(a, c.qa);
    c.aa && Rd(a, c.aa);
    c.R && Rd(a, c.R);
    d.QK && Qd(a, d.QK, d.M);
    g.m.ne.Fg.BH && (e = d.M ? -d.width : 0, a.Uf.push(g.g.o.K(g.g.D.Hb, {
        "class": "blockBoundingBox blockRenderDebug",
        x: e,
        y: 0,
        width: d.width,
        height: d.height,
        stroke: "black",
        fill: "none",
        "stroke-width": "1px",
        "stroke-dasharray": "5,5"
    }, a.gh)), g.m.ne.Fg.gB && (e = d.M ? -d.Yj : 0, a.Uf.push(g.g.o.K(g.g.D.Hb, {
        "class": "blockRenderDebug",
        x: e,
        y: 0,
        width: d.Yj,
        height: d.height,
        stroke: "#DF57BC",
        fill: "none",
        "stroke-width": "1px",
        "stroke-dasharray": "3,3"
    }, a.gh))));
    Td(a, c.sb.Gb)
}

function Td(a, c) {
    g.m.ne.Fg.Ja && (c.setAttribute("filter", "url(#" + a.C.uB + ")"), setTimeout(function() {
        c.setAttribute("filter", "")
    }, 100))
};
g.m.Nd = function(a, c) {
    this.U = a;
    this.Ea = c;
    a.kb();
    this.Fs = this.gb = "";
    this.C = c.Rb.V()
};
b = g.m.Nd.prototype;
b.draw = function() {
    Ud(this);
    Vd(this);
    Wd(this);
    this.U.sb.Fy(this.gb + "\n" + this.Fs);
    this.Ea.M && this.U.sb.ww();
    g.m.wq && Sd(this.U.xy, this.U, this.Ea);
    Xd(this)
};

function Xd(a) {
    a.U.height = a.Ea.height;
    a.U.width = a.Ea.Yj
}

function Ud(a) {
    for (var c = 0, d; d = a.Ea.oC[c]; c++) d.icon.ee.setAttribute("display", "none")
}

function Vd(a) {
    a.nw();
    for (var c = 1; c < a.Ea.rows.length - 1; c++) {
        var d = a.Ea.rows[c];
        d.jC ? a.Mo(d) : d.Gc ? a.mw(d) : d.lj ? a.ow(d) : a.DB(d)
    }
    a.iw();
    a.lw()
}
b.nw = function() {
    var a = this.Ea.Lc,
        c = a.elements,
        d = this.Ea.Lc;
    if (d.connection) {
        var e = d.Ha + d.Cf;
        xc(d.connection.Cd, this.Ea.M ? -e : e, 0)
    }
    this.gb += g.g.F.moveBy(a.Ha, this.Ea.Mt);
    for (d = 0; e = c[d]; d++) g.m.A.wj(e) ? this.gb += this.C.bo.Xy : g.m.A.AC(e) ? this.gb += this.C.bo.mL : g.m.A.Xm(e) ? this.gb += e.shape.Hj : g.m.A.al(e) ? this.gb += this.C.im.path : g.m.A.We(e) && (this.gb += g.g.F.sa("h", e.width));
    this.gb += g.g.F.sa("v", a.height)
};
b.Mo = function(a) {
    this.gb += this.C.$l.path + g.g.F.sa("v", a.height - this.C.$l.height)
};
b.ow = function(a) {
    var c = Md(a);
    this.nD(a);
    var d = "function" == typeof c.shape.Ff ? c.shape.Ff(c.height) : c.shape.Ff;
    this.gb += g.g.F.sa("H", c.Ha + c.width) + d + g.g.F.sa("v", a.height - c.xm)
};
b.mw = function(a) {
    var c = Md(a);
    this.gb += g.g.F.sa("H", c.Ha + c.Cf + c.shape.width) + (c.shape.kD + g.g.F.sa("h", -(c.Cf - this.C.hr.width)) + this.C.hr.iy) + g.g.F.sa("v", a.height - 2 * this.C.hr.height) + this.C.hr.xt + g.g.F.sa("H", a.Ha + a.width);
    this.qD(a)
};
b.DB = function(a) {
    this.gb += g.g.F.sa("V", a.Dc + a.height)
};
b.iw = function() {
    var a = this.Ea.Xb,
        c = a.elements;
    this.pD();
    for (var d = 0, e = "", f = c.length - 1, h; h = c[f]; f--) g.m.A.xj(h) ? e += h.shape.kD : g.m.A.pp(h) ? e += g.g.F.sa("H", a.Ha) : g.m.A.wj(h) ? e += this.C.bo.uv : g.m.A.AC(h) ? (e += this.C.bo.DH, d = this.C.bo.PK) : g.m.A.We(h) && (e += g.g.F.sa("h", -1 * h.width));
    this.gb += g.g.F.sa("V", a.pf - d);
    this.gb += e
};
b.lw = function() {
    var a = this.Ea.R;
    if (this.Ea.R) {
        var c = this.Ea.Jf + this.Ea.R.Eo;
        xc(this.U.R, this.Ea.M ? -c : c, this.Ea.R.Ne)
    }
    a && (c = a.Ne + a.height, a = "function" == typeof a.shape.Ep ? a.shape.Ep(a.height) : a.shape.Ep, this.gb += g.g.F.sa("V", c) + a);
    this.gb += "z"
};

function Wd(a) {
    for (var c = 0, d; d = a.Ea.rows[c]; c++)
        for (var e = 0, f; f = d.elements[e]; e++)
            if (g.m.A.vj(f)) a.kw(f);
            else if (g.m.A.Sm(f) || g.m.A.Tg(f)) {
        var h = a;
        if (g.m.A.Tg(f)) var k = f.Gm.Na();
        else g.m.A.Sm(f) && (k = f.icon.ee);
        var l = f.Xi - f.height / 2,
            m = f.Ha,
            n = "";
        h.Ea.M && (m = -(m + f.width), f.EI && (m += f.width, n = "scale(-1 1)"));
        g.m.A.Sm(f) ? (k.setAttribute("display", "block"), k.setAttribute("transform", "translate(" + m + "," + l + ")"), $a(f.icon)) : k.setAttribute("transform", "translate(" + m + "," + l + ")" + n);
        h.Ea.nd && k.setAttribute("display",
            "none")
    }
}
b.kw = function(a) {
    var c = a.width,
        d = a.height,
        e = a.Ne,
        f = a.xm + e;
    this.Fs += g.g.F.moveTo(a.Ha + a.Gg, a.Xi - d / 2) + g.g.F.sa("v", e) + a.shape.Ff + g.g.F.sa("v", d - f) + g.g.F.sa("h", c - a.Gg) + g.g.F.sa("v", -d) + "z";
    this.oD(a)
};
b.oD = function(a) {
    var c = a.Xi - a.height / 2;
    if (a.Cd) {
        var d = a.Ha + a.Gg + a.Eo;
        this.Ea.M && (d *= -1);
        xc(a.Cd, d, c + a.Ne)
    }
};
b.qD = function(a) {
    var c = Md(a);
    if (c.Cd) {
        var d = a.Ha + a.Sj + c.Cf;
        this.Ea.M && (d *= -1);
        xc(c.Cd, d, a.Dc)
    }
};
b.nD = function(a) {
    var c = Md(a);
    if (c.Cd) {
        var d = a.Ha + a.width;
        this.Ea.M && (d *= -1);
        xc(c.Cd, d, a.Dc)
    }
};
b.pD = function() {
    var a = this.Ea.Xb;
    if (a.connection) {
        var c = a.connection,
            d = c.Ha;
        xc(c.Cd, this.Ea.M ? -d : d, a.pf)
    }
};
g.h.Fi = function(a, c, d, e) {
    var f = a ? a.u.id : void 0;
    e && e.cc() == g.I.types.ue && (f = e.Qa.id);
    g.h.Fi.v.constructor.call(this, f);
    this.qb = a ? a.id : null;
    this.aD = d;
    this.WC = e;
    this.Rg = c
};
g.g.object.X(g.h.Fi, g.h.Ie);
g.h.Fi.prototype.type = g.h.xu;
g.h.Fi.prototype.Ba = function() {
    var a = g.h.Fi.v.Ba.call(this);
    a.isCursor = this.Rg;
    a.blockId = this.qb;
    a.oldNode = this.aD;
    a.newNode = this.WC;
    return a
};
g.h.Fi.prototype.ma = function(a) {
    g.h.Fi.v.ma.call(this, a);
    this.Rg = a.isCursor;
    this.qb = a.blockId;
    this.aD = a.oldNode;
    this.WC = a.newNode
};
g.B.register(g.B.S.hc, g.h.xu, g.h.Fi);
g.m.Gi = function(a, c, d) {
    this.s = a;
    this.xx = d;
    this.bi = null;
    this.C = c;
    this.Am = null;
    a = this.Rg() ? this.C.Uq : this.C.lr;
    this.ld = d.rb || a
};
g.m.Gi.FE = "blocklyCursor";
g.m.Gi.bG = "blocklyMarker";
g.m.Gi.yF = .75;
b = g.m.Gi.prototype;
b.Na = function() {
    return this.P
};
b.ap = function() {
    return this.xx
};
b.Rg = function() {
    return "cursor" == this.xx.type
};
b.eb = function() {
    var a = this.Rg() ? g.m.Gi.FE : g.m.Gi.bG;
    this.P = g.g.o.K(g.g.D.oc, {
        "class": a
    }, null);
    this.Yh = g.g.o.K(g.g.D.oc, {
        width: this.C.Wq,
        height: this.C.DA
    }, this.P);
    this.Cj = g.g.o.K(g.g.D.Hb, {
        width: this.C.Wq,
        height: this.C.DA,
        style: "display: none"
    }, this.Yh);
    this.il = g.g.o.K(g.g.D.Hb, {
        "class": "blocklyVerticalMarker",
        rx: 10,
        ry: 10,
        style: "display: none"
    }, this.Yh);
    this.hl = g.g.o.K(g.g.D.re, {
        transform: "",
        style: "display: none"
    }, this.Yh);
    this.Xh = g.g.o.K(g.g.D.re, {
            transform: "",
            style: "display: none",
            fill: "none",
            "stroke-width": this.C.GE
        },
        this.Yh);
    this.Rg() && (a = {
        attributeType: "XML",
        attributeName: "fill",
        dur: "1s",
        values: this.ld + ";transparent;transparent;",
        repeatCount: "indefinite"
    }, g.g.o.K(g.g.D.Wt, a, this.Cj), g.g.o.K(g.g.D.Wt, a, this.hl), a.attributeName = "stroke", g.g.o.K(g.g.D.Wt, a, this.Xh));
    return this.P
};

function Yd(a, c) {
    a.Rg() ? (a.bi && a.bi.gi(null), c.gi(a.Na())) : (a.bi && a.bi.Rj(null), c.Rj(a.Na()));
    a.bi = c
}
b.draw = function(a, c) {
    if (c) {
        this.C = this.s.Rb.V();
        var d = this.Rg() ? this.C.Uq : this.C.lr;
        this.ld = this.xx.rb || d;
        this.Cj.setAttribute("fill", this.ld);
        this.il.setAttribute("stroke", this.ld);
        this.hl.setAttribute("fill", this.ld);
        this.Xh.setAttribute("stroke", this.ld);
        this.Rg() && (d = this.ld + ";transparent;transparent;", this.Cj.firstChild.setAttribute("values", d), this.hl.firstChild.setAttribute("values", d), this.Xh.firstChild.setAttribute("values", d));
        d = c.Qa.type;
        if (c.cc() == g.I.types.Nc) Zd(this, c);
        else if (c.cc() ==
            g.I.types.tk) Zd(this, c);
        else if (d == g.pa.$b) {
            var e = c.Qa;
            d = e.ea();
            var f = e.Zh.x,
                h = e.Zh.y;
            e = g.g.F.moveTo(0, 0) + nb(this.C, e).Ff;
            this.hl.setAttribute("d", e);
            this.hl.setAttribute("transform", "translate(" + f + "," + h + ")" + (this.s.M ? " scale(-1 1)" : ""));
            this.Am = this.hl;
            Yd(this, d);
            $d(this)
        } else if (d == g.pa.$c) h = c.Qa, d = h.ea(), f = 0, h = h.Zh.y, e = D(d).width, this.s.M && (f = -e), ae(this, f, h, e), Yd(this, d), $d(this);
        else if (c.cc() == g.I.types.Mi) Zd(this, c);
        else if (c.cc() == g.I.types.yd) d = c.Qa, f = d.Nh().width, h = d.Nh().height, be(this,
            0, 0, f, h), Yd(this, d), $d(this);
        else if (c.cc() == g.I.types.ue) f = c.fE, d = f.x, f = f.y, this.s.M && (d -= this.C.Wq), ae(this, d, f, this.C.Wq), Yd(this, this.s), $d(this);
        else if (c.cc() == g.I.types.xk) {
            d = c.Qa;
            h = D(d);
            f = h.width + this.C.Vq;
            h = h.height + this.C.Vq;
            var k = e = -this.C.Vq / 2,
                l = -this.C.Vq / 2;
            this.s.M && (k = -(f + e));
            be(this, k, l, f, h);
            Yd(this, d);
            $d(this)
        }
        d = c.ea();
        a = new(g.h.get(g.h.xu))(d, this.Rg(), a, c);
        g.h.Ia(a);
        a = this.Am.childNodes[0];
        void 0 !== a && a.beginElement && a.beginElement()
    } else this.$a()
};

function Zd(a, c) {
    c = c.ea();
    var d = c.width,
        e = c.height,
        f = e * g.m.Gi.yF,
        h = a.C.EE;
    if (c.qa) {
        var k = nb(a.C, c.qa);
        e = k;
        d = g.g.F.moveBy(-h, f) + g.g.F.sa("V", -h) + g.g.F.sa("H", a.C.Xn) + e.Hj + g.g.F.sa("H", d + 2 * h) + g.g.F.sa("V", f);
        a.Xh.setAttribute("d", d)
    } else c.R ? (f = k = nb(a.C, c.R), d = g.g.F.moveBy(d, 0) + g.g.F.sa("h", -(d - f.width)) + g.g.F.sa("v", a.C.km) + f.Ff + g.g.F.sa("V", e) + g.g.F.sa("H", d), a.Xh.setAttribute("d", d)) : (d = g.g.F.moveBy(-h, f) + g.g.F.sa("V", -h) + g.g.F.sa("H", d + 2 * h) + g.g.F.sa("V", f), a.Xh.setAttribute("d", d));
    a.s.M && a.So(a.Xh);
    a.Am = a.Xh;
    Yd(a, c);
    $d(a)
}

function $d(a) {
    a.$a();
    a.Am.style.display = ""
}

function ae(a, c, d, e) {
    a.Cj.setAttribute("x", c);
    a.Cj.setAttribute("y", d);
    a.Cj.setAttribute("width", e);
    a.Am = a.Cj
}

function be(a, c, d, e, f) {
    a.il.setAttribute("x", c);
    a.il.setAttribute("y", d);
    a.il.setAttribute("width", e);
    a.il.setAttribute("height", f);
    a.Am = a.il
}
b.So = function(a) {
    a.setAttribute("transform", "scale(-1 1)")
};
b.$a = function() {
    this.Cj.style.display = "none";
    this.il.style.display = "none";
    this.hl.style.display = "none";
    this.Xh.style.display = "none"
};
b.J = function() {
    this.P && g.g.o.removeNode(this.P)
};
g.m.qh = function(a, c, d) {
    this.Ob = d;
    this.fh = a;
    this.Gb = g.g.o.K(g.g.D.re, {
        "class": "blocklyPath"
    }, this.fh);
    this.style = c;
    this.wx = this.Jo = null
};
b = g.m.qh.prototype;
b.Fy = function(a) {
    this.Gb.setAttribute("d", a)
};
b.ww = function() {
    this.Gb.setAttribute("transform", "scale(-1 1)")
};
b.gi = function(a) {
    a ? (this.fh.appendChild(a), this.Jo = a) : this.Jo = null
};
b.Rj = function(a) {
    a ? (this.Jo ? this.fh.insertBefore(a, this.Jo) : this.fh.appendChild(a), this.wx = a) : this.wx = null
};
b.jc = function(a) {
    this.Gb.setAttribute("stroke", this.style.Eh);
    this.Gb.setAttribute("fill", this.style.Yi);
    this.XD(a.Sa);
    this.bz(!a.isEnabled() || ic(a))
};
b.Fb = function(a) {
    this.style = a
};

function mb(a, c, d) {
    d ? g.g.o.Ga(a.fh, c) : g.g.o.Zb(a.fh, c)
}
b.VD = function(a) {
    a ? this.Gb.setAttribute("filter", "url(#" + this.Ob.rs + ")") : this.Gb.setAttribute("filter", "none")
};
b.XD = function(a) {
    a && (this.Gb.setAttribute("stroke", "none"), this.Gb.setAttribute("fill", this.style.Xr))
};
b.bz = function(a) {
    mb(this, "blocklyDisabled", a);
    a && this.Gb.setAttribute("fill", "url(#" + this.Ob.yB + ")")
};
g.m.rh = function(a) {
    this.name = a;
    this.ay = this.C = null
};
b = g.m.rh.prototype;
b.Xf = function() {
    return this.name + "-renderer"
};
b.T = function(a, c) {
    this.C = this.px();
    c && (this.ay = c, g.g.object.Kd(this.C, c));
    this.C.Yp(a);
    this.C.T()
};
b.eb = function(a, c) {
    this.C.eb(a, this.name + "-" + c.name, "." + this.Xf() + "." + c.Xf())
};
b.sy = function(a, c) {
    var d = this.V();
    d.J();
    this.C = this.px();
    this.ay && g.g.object.Kd(this.C, this.ay);
    this.C.Kp = d.Kp;
    this.C.Yp(c);
    this.C.T();
    this.eb(a, c)
};
b.J = function() {
    this.C && this.C.J()
};
b.px = function() {
    return new g.m.lh
};
b.NC = function(a) {
    return new g.m.Rf(this, a)
};
b.LC = function(a, c) {
    return new g.m.Nd(a, c)
};
b.MC = function(a, c) {
    return new g.m.qh(a, c, this.C)
};
b.V = function() {
    return this.C
};
b.Ja = function(a) {
    if (g.m.wq && !a.xy) {
        if (!g.m.ne) throw Error("Missing require for Blockly.blockRendering.Debug");
        var c = new g.m.ne(this.V());
        a.xy = c
    }
    c = this.NC(a);
    c.measure();
    this.LC(a, c).draw()
};
g.wa = {};
g.wa.lh = function() {
    g.wa.lh.v.constructor.call(this);
    this.ku = !1;
    this.gd = 1;
    this.cG = 30;
    this.qA = -this.Bu / 2
};
g.g.object.X(g.wa.lh, g.m.lh);
g.wa.lh.prototype.Cw = function(a) {
    return g.wa.lh.v.Cw.call(this, a).concat([a + " .blocklyInsertionMarker>.blocklyPathLight,", a + " .blocklyInsertionMarker>.blocklyPathDark {", "fill-opacity: " + this.gr + ";", "stroke: none;", "}"])
};
g.wa.Oz = function(a) {
    this.Ea = a;
    this.lp = this.Aa = "";
    this.jd = this.Ea.M;
    a = a.Rb;
    this.C = a.V();
    this.Ue = a.Ue;
    this.we = this.Ue.OFFSET;
    this.$x = this.Ue.oG;
    this.Rm = this.Ue.GF;
    this.Jp = this.Ue.Ju;
    this.UJ = this.Ue.dm;
    this.dL = this.Ue.im;
    this.EC = this.Ue.$l
};
g.wa.Oz.prototype.Mo = function(a) {
    this.Ea.M && (this.Aa += this.EC.Hj + g.g.F.sa("v", a.height - this.EC.height - this.we))
};

function ce(a, c) {
    var d = c.Ha + c.width - a.we;
    c.JB && (a.Aa += g.g.F.sa("H", d));
    a.jd && (a.Aa += g.g.F.sa("H", d), c.height > a.we && (a.Aa += g.g.F.sa("V", c.Dc + c.height - a.we)))
};
g.wa.Ei = function(a, c) {
    g.wa.Ei.v.constructor.call(this, a, c);
    this.aj && (this.width += this.C.gd, this.height += this.C.gd)
};
g.g.object.X(g.wa.Ei, g.m.Ei);
g.wa.Oi = function(a, c) {
    g.wa.Oi.v.constructor.call(this, a, c);
    this.aj && (this.height += this.C.gd)
};
g.g.object.X(g.wa.Oi, g.m.Oi);
g.wa.Rf = function(a, c) {
    g.wa.Rf.v.constructor.call(this, a, c)
};
g.g.object.X(g.wa.Rf, g.m.Rf);
b = g.wa.Rf.prototype;
b.ly = function() {
    g.wa.Rf.v.ly.call(this);
    this.U.Y.length && this.U.Y[this.U.Y.length - 1].type == g.ob.lf || (this.Xb.minHeight = this.C.jf - this.C.gd)
};
b.MA = function(a, c) {
    this.Tm && a.type == g.ob.yg ? (c.elements.push(new g.wa.Ei(this.C, a)), c.Qw = !0) : a.type == g.ob.lf ? (c.elements.push(new g.wa.Oi(this.C, a)), c.Gc = !0) : a.type == g.ob.yg ? (c.elements.push(new g.m.Zq(this.C, a)), c.lj = !0) : a.type == g.ob.pg && (c.minHeight = Math.max(c.minHeight, this.C.Az), c.Pm = !0);
    this.Tm || null != c.align || (c.align = a.align)
};
b.LA = function() {
    for (var a = !1, c = 0, d; d = this.rows[c]; c++) d.lj && (a = !0);
    for (c = 0; d = this.rows[c]; c++) {
        var e = d.elements;
        d.elements = [];
        d.Nt() && d.elements.push(new g.m.ph(this.C, this.Ok(null, e[0])));
        if (e.length) {
            for (var f = 0; f < e.length - 1; f++) {
                d.elements.push(e[f]);
                var h = this.Ok(e[f], e[f + 1]);
                d.elements.push(new g.m.ph(this.C, h))
            }
            d.elements.push(e[e.length - 1]);
            d.Oo() && (h = this.Ok(e[e.length - 1], null), a && d.Pm && (h += this.C.Br), d.elements.push(new g.m.ph(this.C, h)))
        }
    }
};
b.Ok = function(a, c) {
    if (!a) return c && g.m.A.Tg(c) && c.ge ? this.C.jf : c && g.m.A.vj(c) ? this.C.bA : c && g.m.A.cl(c) ? this.C.sA : this.C.Qd;
    if (!g.m.A.Th(a) && (!c || g.m.A.cl(c))) return g.m.A.Tg(a) && a.ge ? this.C.jf : g.m.A.Sm(a) ? 2 * this.C.Qd + 1 : g.m.A.al(a) ? this.C.tg : g.m.A.wJ(a) ? this.C.Qd : g.m.A.wj(a) ? this.C.fG : g.m.A.yC(a) ? this.C.tg : this.C.Qd;
    if (g.m.A.Th(a) && !c) {
        if (g.m.A.op(a)) return this.C.tg;
        if (g.m.A.vj(a)) return this.C.Qd;
        if (g.m.A.cl(a)) return this.C.tg
    }
    if (!g.m.A.Th(a) && c && g.m.A.Th(c)) {
        if (g.m.A.Tg(a) && a.ge) {
            if (g.m.A.vj(c) ||
                g.m.A.op(c)) return this.C.MG
        } else {
            if (g.m.A.vj(c) || g.m.A.op(c)) return this.C.bA;
            if (g.m.A.cl(c)) return this.C.Qd
        }
        return this.C.Qd - 1
    }
    if (g.m.A.Sm(a) && c && !g.m.A.Th(c)) return this.C.Qd;
    if (g.m.A.vj(a) && c && g.m.A.Tg(c)) return c.ge ? this.C.jf : this.C.Qd;
    if (g.m.A.pp(a) && c) {
        if (g.m.A.al(c)) return this.C.tg;
        if (g.m.A.Xm(c)) return c.Cf;
        if (g.m.A.xj(c)) return a = (this.M ? 1 : -1) * this.C.gd / 2, c.Cf + a
    }
    if (g.m.A.wj(a) && c) {
        if (g.m.A.Xm(c)) return c.Cf - this.C.Mb;
        if (g.m.A.xj(c)) return a = (this.M ? 1 : -1) * this.C.gd / 2, c.Cf - this.C.Mb + a
    }
    return g.m.A.Tg(a) &&
        c && g.m.A.Tg(c) && a.ge == c.ge || c && g.m.A.yC(c) ? this.C.Qd : this.C.jf
};
b.aC = function(a, c) {
    return g.m.A.Ps(a) && g.m.A.Gs(c) ? this.C.UE : g.m.A.Ps(a) || g.m.A.Gs(c) ? this.C.tg : a.lj && c.lj ? this.C.Qd : !a.Gc && c.Gc ? this.C.oE : a.Gc && c.Gc || !a.Gc && c.Pm || a.Pm ? this.C.Qd : this.C.jf
};
b.RB = function(a, c) {
    if (g.m.A.We(c)) return a.Dc + c.height / 2;
    if (g.m.A.Gs(a)) return a = a.Dc + a.height - a.Ko, g.m.A.xj(c) ? a + c.height / 2 : a - c.height / 2;
    if (g.m.A.Ps(a)) return g.m.A.al(c) ? a.Bh - c.height / 2 : a.Bh + c.height / 2;
    var d = a.Dc;
    g.m.A.Tg(c) || g.m.A.Sm(c) ? (d += c.height / 2, (a.Qw || a.Gc) && c.height + this.C.tA <= a.height && (d += this.C.tA)) : d = g.m.A.vj(c) ? d + c.height / 2 : d + a.height / 2;
    return d
};
b.fv = function() {
    if (this.Tm) {
        for (var a = 0, c = null, d = this.rows.length - 1, e; e = this.rows[d]; d--) e.Fx = a, g.m.A.sJ(e) && (e.Gc && Nd(this, e), c && c.Gc && e.width < c.width ? e.Fx = c.width : a = e.width, c = e);
        for (d = a = 0; e = this.rows[d]; d++) e.Gc ? a = this.Yo(e) : g.m.A.We(e) ? e.width = Math.max(a, e.Fx) : (a = Math.max(a, e.Fx) - e.width, 0 < a && Od(e, a), a = e.width)
    } else g.wa.Rf.v.fv.call(this)
};
b.Yo = function(a) {
    return this.Tm && a.Gc ? this.Sj + this.C.cG + this.Jf : g.wa.Rf.v.Yo.call(this, a)
};
b.FB = function() {
    for (var a = 0, c = 0, d = 0, e; e = this.rows[d]; d++) {
        e.Dc = c;
        e.Ha = this.Jf;
        c += e.height;
        a = Math.max(a, e.df);
        var f = c - this.Lc.qm;
        e == this.Xb && f < this.C.Tn && (f = this.C.Tn - f, this.Xb.height += f, c += f);
        Pd(this, e)
    }
    this.R && this.U.aa && this.U.aa.isConnected() && (a = Math.max(a, D(this.U.aa.ra()).width - this.C.gd));
    this.Xb.pf = c - this.Xb.Ko;
    this.Yj = a + this.Jf + this.C.gd;
    this.width += this.C.gd;
    this.height = c + this.C.gd;
    this.Mt = this.Lc.Bh
};
g.wa.Nd = function(a, c) {
    g.wa.Nd.v.constructor.call(this, a, c);
    this.Qg = new g.wa.Oz(c)
};
g.g.object.X(g.wa.Nd, g.m.Nd);
b = g.wa.Nd.prototype;
b.draw = function() {
    Ud(this);
    Vd(this);
    Wd(this);
    var a = this.U.sb;
    a.Fy(this.gb + "\n" + this.Fs);
    var c = this.Qg;
    a.El.setAttribute("d", c.Aa + "\n" + c.lp);
    this.Ea.M && a.ww();
    g.m.wq && Sd(this.U.xy, this.U, this.Ea);
    Xd(this)
};
b.nw = function() {
    var a = this.Qg,
        c = this.Ea.Lc;
    a.Aa += g.g.F.moveBy(c.Ha, a.Ea.Mt);
    for (var d = 0, e; e = c.elements[d]; d++) g.m.A.pp(e) ? a.Aa += a.Ue.pA : g.m.A.wj(e) ? a.Aa += a.$x.Xy(a.jd) : g.m.A.Xm(e) ? a.Aa += a.UJ.Hj : g.m.A.al(e) ? a.Aa += a.dL.path(a.jd) : g.m.A.We(e) && 0 != e.width && (a.Aa += g.g.F.sa("H", e.Ha + e.width - a.we));
    a.Aa += g.g.F.sa("H", c.Ha + c.width - a.we);
    ce(this.Qg, this.Ea.Lc);
    g.wa.Nd.v.nw.call(this)
};
b.Mo = function(a) {
    this.Qg.Mo(a);
    g.wa.Nd.v.Mo.call(this, a)
};
b.ow = function(a) {
    var c = this.Qg,
        d = Md(a);
    if (c.jd) {
        var e = a.height - d.xm;
        c.Aa += g.g.F.moveTo(d.Ha + d.width - c.we, a.Dc) + c.Jp.Ff(c.jd) + g.g.F.sa("v", e)
    } else c.Aa += g.g.F.moveTo(d.Ha + d.width, a.Dc) + c.Jp.Ff(c.jd);
    g.wa.Nd.v.ow.call(this, a)
};
b.mw = function(a) {
    var c = this.Qg,
        d = Md(a);
    if (c.jd) {
        var e = a.height - 2 * c.Rm.height;
        c.Aa += g.g.F.moveTo(d.Ha, a.Dc) + c.Rm.iy(c.jd) + g.g.F.sa("v", e) + c.Rm.xt(c.jd) + g.g.F.lineTo(a.width - d.Ha - c.Rm.width, 0)
    } else c.Aa += g.g.F.moveTo(d.Ha, a.Dc + a.height) + c.Rm.xt(c.jd) + g.g.F.lineTo(a.width - d.Ha - c.Rm.width, 0);
    g.wa.Nd.v.mw.call(this, a)
};
b.DB = function(a) {
    ce(this.Qg, a);
    this.gb += g.g.F.sa("H", a.Ha + a.width) + g.g.F.sa("V", a.Dc + a.height)
};
b.iw = function() {
    var a = this.Qg,
        c = this.Ea.Xb;
    if (a.jd) a.Aa += g.g.F.sa("V", c.pf - a.we);
    else {
        var d = a.Ea.Xb.elements[0];
        g.m.A.pp(d) ? a.Aa += g.g.F.moveTo(c.Ha + a.we, c.pf - a.we) : g.m.A.wj(d) && (a.Aa += g.g.F.moveTo(c.Ha, c.pf), a.Aa += a.$x.uv())
    }
    g.wa.Nd.v.iw.call(this)
};
b.lw = function() {
    var a = this.Qg,
        c = a.Ea.R;
    c && (c = c.Ne + c.height, a.jd ? a.Aa += g.g.F.moveTo(a.Ea.Jf, c) : (a.Aa += g.g.F.moveTo(a.Ea.Jf + a.we, a.Ea.Xb.pf - a.we), a.Aa += g.g.F.sa("V", c)), a.Aa += a.Jp.Ep(a.jd));
    a.jd || (c = a.Ea.Lc, a.Aa = g.m.A.wj(c.elements[0]) ? a.Aa + g.g.F.sa("V", a.$x.height) : a.Aa + g.g.F.sa("V", c.Bh + a.we));
    g.wa.Nd.v.lw.call(this)
};
b.kw = function(a) {
    var c = this.Qg,
        d = c.we,
        e = a.Ha + a.Gg,
        f = a.Xi - a.height / 2,
        h = a.width - a.Gg,
        k = f + d;
    if (c.jd) {
        f = a.Ne - d;
        var l = a.height - (a.Ne + a.xm) + d;
        c.lp += g.g.F.moveTo(e - d, k) + g.g.F.sa("v", f) + c.Jp.Ff(c.jd) + g.g.F.sa("v", l) + g.g.F.sa("h", h)
    } else c.lp += g.g.F.moveTo(a.Ha + a.width + d, k) + g.g.F.sa("v", a.height) + g.g.F.sa("h", -h) + g.g.F.moveTo(e, f + a.Ne) + c.Jp.Ff(c.jd);
    g.wa.Nd.v.kw.call(this, a)
};
b.oD = function(a) {
    var c = a.Xi - a.height / 2;
    if (a.Cd) {
        var d = a.Ha + a.Gg + this.C.gd;
        this.Ea.M && (d *= -1);
        xc(a.Cd, d, c + a.Ne + this.C.gd)
    }
};
b.qD = function(a) {
    var c = Md(a);
    if (c.Cd) {
        var d = a.Ha + a.Sj + c.Cf;
        d = this.Ea.M ? -1 * d : d + this.C.gd;
        xc(c.Cd, d, a.Dc + this.C.gd)
    }
};
b.nD = function(a) {
    var c = Md(a);
    if (c.Cd) {
        var d = a.Ha + a.width + this.C.gd;
        this.Ea.M && (d *= -1);
        xc(c.Cd, d, a.Dc)
    }
};
b.pD = function() {
    var a = this.Ea.Xb;
    if (a.connection) {
        var c = a.connection,
            d = c.Ha;
        xc(c.Cd, (this.Ea.M ? -d : d) + this.C.gd / 2, a.pf + this.C.gd)
    }
};
g.wa.Nz = function(a) {
    this.ym = a;
    this.OFFSET = .5;
    this.pA = g.g.F.moveBy(this.OFFSET, this.OFFSET)
};
b = g.wa.Nz.prototype;
b.T = function() {
    this.GF = de(this);
    this.oG = ee(this);
    this.Ju = this.ux();
    this.dm = this.tx();
    this.$l = this.sx();
    this.im = this.vx()
};

function de(a) {
    var c = a.ym.Mb;
    a = a.OFFSET;
    var d = (1 - Math.SQRT1_2) * (c + a) - a,
        e = g.g.F.moveBy(d, d) + g.g.F.arc("a", "0 0,0", c, g.g.F.Xa(-d - a, c - d)),
        f = g.g.F.arc("a", "0 0,0", c + a, g.g.F.Xa(c + a, c + a)),
        h = g.g.F.moveBy(d, -d) + g.g.F.arc("a", "0 0,0", c + a, g.g.F.Xa(c - d, d + a));
    return {
        width: c + a,
        height: c,
        iy: function(k) {
            return k ? e : ""
        },
        xt: function(k) {
            return k ? f : h
        }
    }
}

function ee(a) {
    var c = a.ym.Mb;
    a = a.OFFSET;
    var d = (1 - Math.SQRT1_2) * (c - a) + a,
        e = g.g.F.moveBy(d, d) + g.g.F.arc("a", "0 0,1", c - a, g.g.F.Xa(c - d, -d + a)),
        f = g.g.F.moveBy(a, c) + g.g.F.arc("a", "0 0,1", c - a, g.g.F.Xa(c, -c + a)),
        h = -d,
        k = g.g.F.moveBy(d, h) + g.g.F.arc("a", "0 0,1", c - a, g.g.F.Xa(-d + a, -h - c));
    return {
        height: c,
        Xy: function(l) {
            return l ? e : f
        },
        uv: function() {
            return k
        }
    }
}
b.ux = function() {
    var a = this.ym.Br,
        c = this.ym.ho,
        d = g.g.F.moveBy(-2, -c + 3.4) + g.g.F.lineTo(-.45 * a, -2.1),
        e = g.g.F.sa("v", 2.5) + g.g.F.moveBy(.97 * -a, 2.5) + g.g.F.curve("q", [g.g.F.Xa(.05 * -a, 10), g.g.F.Xa(.3 * a, 9.5)]) + g.g.F.moveBy(.67 * a, -1.9) + g.g.F.sa("v", 2.5),
        f = g.g.F.sa("v", -1.5) + g.g.F.moveBy(-.92 * a, -.5) + g.g.F.curve("q", [g.g.F.Xa(-.19 * a, -5.5), g.g.F.Xa(0, -11)]) + g.g.F.moveBy(.92 * a, 1),
        h = g.g.F.moveBy(-5, c - .7) + g.g.F.lineTo(.46 * a, -2.1);
    return {
        width: a,
        height: c,
        Ep: function(k) {
            return k ? d : f
        },
        Ff: function(k) {
            return k ? e : h
        }
    }
};
b.tx = function() {
    return {
        Hj: g.g.F.sa("h", this.OFFSET) + this.ym.dm.Hj
    }
};
b.sx = function() {
    return {
        Hj: g.g.F.lineTo(5.1, 2.6) + g.g.F.moveBy(-10.2, 6.8) + g.g.F.lineTo(5.1, 2.6),
        height: 12,
        width: 10.2
    }
};
b.vx = function() {
    var a = this.ym.im.height,
        c = g.g.F.moveBy(25, -8.7) + g.g.F.curve("c", [g.g.F.Xa(29.7, -6.2), g.g.F.Xa(57.2, -.5), g.g.F.Xa(75, 8.7)]),
        d = g.g.F.curve("c", [g.g.F.Xa(17.8, -9.2), g.g.F.Xa(45.3, -14.9), g.g.F.Xa(75, -8.7)]) + g.g.F.moveTo(100.5, a + .5);
    return {
        path: function(e) {
            return e ? c : d
        }
    }
};
g.wa.qh = function(a, c, d) {
    this.Ob = d;
    this.fh = a;
    this.jq = g.g.o.K(g.g.D.re, {
        "class": "blocklyPathDark",
        transform: "translate(1,1)"
    }, this.fh);
    this.Gb = g.g.o.K(g.g.D.re, {
        "class": "blocklyPath"
    }, this.fh);
    this.El = g.g.o.K(g.g.D.re, {
        "class": "blocklyPathLight"
    }, this.fh);
    this.Hv = "#000000";
    this.style = c
};
g.g.object.X(g.wa.qh, g.m.qh);
b = g.wa.qh.prototype;
b.Fy = function(a) {
    this.Gb.setAttribute("d", a);
    this.jq.setAttribute("d", a)
};
b.ww = function() {
    this.Gb.setAttribute("transform", "scale(-1 1)");
    this.El.setAttribute("transform", "scale(-1 1)");
    this.jq.setAttribute("transform", "translate(1,1) scale(-1 1)")
};
b.jc = function(a) {
    this.El.style.display = "";
    this.jq.style.display = "";
    this.El.setAttribute("stroke", this.style.Eh);
    this.jq.setAttribute("fill", this.Hv);
    g.wa.qh.v.jc.call(this, a);
    this.Gb.setAttribute("stroke", "none")
};
b.Fb = function(a) {
    this.style = a;
    this.Hv = g.g.rb.qv("#000", this.style.Yi, .2) || this.Hv
};
b.VD = function(a) {
    a ? (this.Gb.setAttribute("filter", "url(#" + this.Ob.rs + ")"), this.El.style.display = "none") : (this.Gb.setAttribute("filter", "none"), this.El.style.display = "inline")
};
b.XD = function(a) {
    a && (this.El.style.display = "none", this.jq.setAttribute("fill", this.style.Xr), this.Gb.setAttribute("stroke", "none"), this.Gb.setAttribute("fill", this.style.Xr))
};
b.bz = function(a) {
    g.wa.qh.v.bz.call(this, a);
    a && this.Gb.setAttribute("stroke", "none")
};
g.wa.rh = function(a) {
    g.wa.rh.v.constructor.call(this, a);
    this.Ue = null
};
g.g.object.X(g.wa.rh, g.m.rh);
b = g.wa.rh.prototype;
b.T = function(a, c) {
    g.wa.rh.v.T.call(this, a, c);
    this.Ue = new g.wa.Nz(this.V());
    this.Ue.T()
};
b.sy = function(a, c) {
    g.wa.rh.v.sy.call(this, a, c);
    this.Ue.T()
};
b.px = function() {
    return new g.wa.lh
};
b.NC = function(a) {
    return new g.wa.Rf(this, a)
};
b.LC = function(a, c) {
    return new g.wa.Nd(a, c)
};
b.MC = function(a, c) {
    return new g.wa.qh(a, c, this.V())
};
g.m.register("geras", g.wa.rh);
g.i.ADD_COMMENT = "Add Comment";
g.i.CANNOT_DELETE_VARIABLE_PROCEDURE = "Can't delete the variable '%1' because it's part of the definition of the function '%2'";
g.i.CHANGE_VALUE_TITLE = "Change value:";
g.i.CLEAN_UP = "Clean up Blocks";
g.i.COLLAPSED_WARNINGS_WARNING = "Collapsed blocks contain warnings.";
g.i.COLLAPSE_ALL = "Collapse Blocks";
g.i.COLLAPSE_BLOCK = "Collapse Block";
g.i.COLOUR_BLEND_COLOUR1 = "colour 1";
g.i.COLOUR_BLEND_COLOUR2 = "colour 2";
g.i.COLOUR_BLEND_HELPURL = "https://meyerweb.com/eric/tools/color-blend/#:::rgbp";
g.i.COLOUR_BLEND_RATIO = "ratio";
g.i.COLOUR_BLEND_TITLE = "blend";
g.i.COLOUR_BLEND_TOOLTIP = "Blends two colours together with a given ratio (0.0 - 1.0).";
g.i.COLOUR_PICKER_HELPURL = "https://en.wikipedia.org/wiki/Color";
g.i.COLOUR_PICKER_TOOLTIP = "Choose a colour from the palette.";
g.i.COLOUR_RANDOM_HELPURL = "http://randomcolour.com";
g.i.COLOUR_RANDOM_TITLE = "random colour";
g.i.COLOUR_RANDOM_TOOLTIP = "Choose a colour at random.";
g.i.COLOUR_RGB_BLUE = "blue";
g.i.COLOUR_RGB_GREEN = "green";
g.i.COLOUR_RGB_HELPURL = "https://www.december.com/html/spec/colorpercompact.html";
g.i.COLOUR_RGB_RED = "red";
g.i.COLOUR_RGB_TITLE = "colour with";
g.i.COLOUR_RGB_TOOLTIP = "Create a colour with the specified amount of red, green, and blue. All values must be between 0 and 100.";
g.i.CONTROLS_FLOW_STATEMENTS_HELPURL = "https://github.com/google/blockly/wiki/Loops#loop-termination-blocks";
g.i.CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK = "break out of loop";
g.i.CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE = "continue with next iteration of loop";
g.i.CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK = "Break out of the containing loop.";
g.i.CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE = "Skip the rest of this loop, and continue with the next iteration.";
g.i.CONTROLS_FLOW_STATEMENTS_WARNING = "Warning: This block may only be used within a loop.";
g.i.CONTROLS_FOREACH_HELPURL = "https://github.com/google/blockly/wiki/Loops#for-each";
g.i.CONTROLS_FOREACH_TITLE = "for each item %1 in list %2";
g.i.CONTROLS_FOREACH_TOOLTIP = "For each item in a list, set the variable '%1' to the item, and then do some statements.";
g.i.CONTROLS_FOR_HELPURL = "https://github.com/google/blockly/wiki/Loops#count-with";
g.i.CONTROLS_FOR_TITLE = "count with %1 from %2 to %3 by %4";
g.i.CONTROLS_FOR_TOOLTIP = "Have the variable '%1' take on the values from the start number to the end number, counting by the specified interval, and do the specified blocks.";
g.i.CONTROLS_IF_ELSEIF_TOOLTIP = "Add a condition to the if block.";
g.i.CONTROLS_IF_ELSE_TOOLTIP = "Add a final, catch-all condition to the if block.";
g.i.CONTROLS_IF_HELPURL = "https://github.com/google/blockly/wiki/IfElse";
g.i.CONTROLS_IF_IF_TOOLTIP = "Add, remove, or reorder sections to reconfigure this if block.";
g.i.CONTROLS_IF_MSG_ELSE = "else";
g.i.CONTROLS_IF_MSG_ELSEIF = "else if";
g.i.CONTROLS_IF_MSG_IF = "if";
g.i.CONTROLS_IF_TOOLTIP_1 = "If a value is true, then do some statements.";
g.i.CONTROLS_IF_TOOLTIP_2 = "If a value is true, then do the first block of statements. Otherwise, do the second block of statements.";
g.i.CONTROLS_IF_TOOLTIP_3 = "If the first value is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements.";
g.i.CONTROLS_IF_TOOLTIP_4 = "If the first value is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements. If none of the values are true, do the last block of statements.";
g.i.CONTROLS_REPEAT_HELPURL = "https://en.wikipedia.org/wiki/For_loop";
g.i.CONTROLS_REPEAT_INPUT_DO = "do";
g.i.CONTROLS_REPEAT_TITLE = "repeat %1 times";
g.i.CONTROLS_REPEAT_TOOLTIP = "Do some statements several times.";
g.i.CONTROLS_WHILEUNTIL_HELPURL = "https://github.com/google/blockly/wiki/Loops#repeat";
g.i.CONTROLS_WHILEUNTIL_OPERATOR_UNTIL = "repeat until";
g.i.CONTROLS_WHILEUNTIL_OPERATOR_WHILE = "repeat while";
g.i.CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL = "While a value is false, then do some statements.";
g.i.CONTROLS_WHILEUNTIL_TOOLTIP_WHILE = "While a value is true, then do some statements.";
g.i.DELETE_ALL_BLOCKS = "Delete all %1 blocks?";
g.i.DELETE_BLOCK = "Delete Block";
g.i.DELETE_VARIABLE = "Delete the '%1' variable";
g.i.DELETE_VARIABLE_CONFIRMATION = "Delete %1 uses of the '%2' variable?";
g.i.DELETE_X_BLOCKS = "Delete %1 Blocks";
g.i.DISABLE_BLOCK = "Disable Block";
g.i.DUPLICATE_BLOCK = "Duplicate";
g.i.DUPLICATE_COMMENT = "Duplicate Comment";
g.i.ENABLE_BLOCK = "Enable Block";
g.i.EXPAND_ALL = "Expand Blocks";
g.i.EXPAND_BLOCK = "Expand Block";
g.i.EXTERNAL_INPUTS = "External Inputs";
g.i.HELP = "Help";
g.i.INLINE_INPUTS = "Inline Inputs";
g.i.LISTS_CREATE_EMPTY_HELPURL = "https://github.com/google/blockly/wiki/Lists#create-empty-list";
g.i.LISTS_CREATE_EMPTY_TITLE = "create empty list";
g.i.LISTS_CREATE_EMPTY_TOOLTIP = "Returns a list, of length 0, containing no data records";
g.i.LISTS_CREATE_WITH_CONTAINER_TITLE_ADD = "list";
g.i.LISTS_CREATE_WITH_CONTAINER_TOOLTIP = "Add, remove, or reorder sections to reconfigure this list block.";
g.i.LISTS_CREATE_WITH_HELPURL = "https://github.com/google/blockly/wiki/Lists#create-list-with";
g.i.LISTS_CREATE_WITH_INPUT_WITH = "create list with";
g.i.LISTS_CREATE_WITH_ITEM_TOOLTIP = "Add an item to the list.";
g.i.LISTS_CREATE_WITH_TOOLTIP = "Create a list with any number of items.";
g.i.LISTS_GET_INDEX_FIRST = "first";
g.i.LISTS_GET_INDEX_FROM_END = "# from end";
g.i.LISTS_GET_INDEX_FROM_START = "#";
g.i.LISTS_GET_INDEX_GET = "get";
g.i.LISTS_GET_INDEX_GET_REMOVE = "get and remove";
g.i.LISTS_GET_INDEX_LAST = "last";
g.i.LISTS_GET_INDEX_RANDOM = "random";
g.i.LISTS_GET_INDEX_REMOVE = "remove";
g.i.LISTS_GET_INDEX_TAIL = "";
g.i.LISTS_GET_INDEX_TOOLTIP_GET_FIRST = "Returns the first item in a list.";
g.i.LISTS_GET_INDEX_TOOLTIP_GET_FROM = "Returns the item at the specified position in a list.";
g.i.LISTS_GET_INDEX_TOOLTIP_GET_LAST = "Returns the last item in a list.";
g.i.LISTS_GET_INDEX_TOOLTIP_GET_RANDOM = "Returns a random item in a list.";
g.i.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST = "Removes and returns the first item in a list.";
g.i.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM = "Removes and returns the item at the specified position in a list.";
g.i.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST = "Removes and returns the last item in a list.";
g.i.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM = "Removes and returns a random item in a list.";
g.i.LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST = "Removes the first item in a list.";
g.i.LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM = "Removes the item at the specified position in a list.";
g.i.LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST = "Removes the last item in a list.";
g.i.LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM = "Removes a random item in a list.";
g.i.LISTS_GET_SUBLIST_END_FROM_END = "to # from end";
g.i.LISTS_GET_SUBLIST_END_FROM_START = "to #";
g.i.LISTS_GET_SUBLIST_END_LAST = "to last";
g.i.LISTS_GET_SUBLIST_HELPURL = "https://github.com/google/blockly/wiki/Lists#getting-a-sublist";
g.i.LISTS_GET_SUBLIST_START_FIRST = "get sub-list from first";
g.i.LISTS_GET_SUBLIST_START_FROM_END = "get sub-list from # from end";
g.i.LISTS_GET_SUBLIST_START_FROM_START = "get sub-list from #";
g.i.LISTS_GET_SUBLIST_TAIL = "";
g.i.LISTS_GET_SUBLIST_TOOLTIP = "Creates a copy of the specified portion of a list.";
g.i.LISTS_INDEX_FROM_END_TOOLTIP = "%1 is the last item.";
g.i.LISTS_INDEX_FROM_START_TOOLTIP = "%1 is the first item.";
g.i.LISTS_INDEX_OF_FIRST = "find first occurrence of item";
g.i.LISTS_INDEX_OF_HELPURL = "https://github.com/google/blockly/wiki/Lists#getting-items-from-a-list";
g.i.LISTS_INDEX_OF_LAST = "find last occurrence of item";
g.i.LISTS_INDEX_OF_TOOLTIP = "Returns the index of the first/last occurrence of the item in the list. Returns %1 if item is not found.";
g.i.LISTS_INLIST = "in list";
g.i.LISTS_ISEMPTY_HELPURL = "https://github.com/google/blockly/wiki/Lists#is-empty";
g.i.LISTS_ISEMPTY_TITLE = "%1 is empty";
g.i.LISTS_ISEMPTY_TOOLTIP = "Returns true if the list is empty.";
g.i.LISTS_LENGTH_HELPURL = "https://github.com/google/blockly/wiki/Lists#length-of";
g.i.LISTS_LENGTH_TITLE = "length of %1";
g.i.LISTS_LENGTH_TOOLTIP = "Returns the length of a list.";
g.i.LISTS_REPEAT_HELPURL = "https://github.com/google/blockly/wiki/Lists#create-list-with";
g.i.LISTS_REPEAT_TITLE = "create list with item %1 repeated %2 times";
g.i.LISTS_REPEAT_TOOLTIP = "Creates a list consisting of the given value repeated the specified number of times.";
g.i.LISTS_REVERSE_HELPURL = "https://github.com/google/blockly/wiki/Lists#reversing-a-list";
g.i.LISTS_REVERSE_MESSAGE0 = "reverse %1";
g.i.LISTS_REVERSE_TOOLTIP = "Reverse a copy of a list.";
g.i.LISTS_SET_INDEX_HELPURL = "https://github.com/google/blockly/wiki/Lists#in-list--set";
g.i.LISTS_SET_INDEX_INPUT_TO = "as";
g.i.LISTS_SET_INDEX_INSERT = "insert at";
g.i.LISTS_SET_INDEX_SET = "set";
g.i.LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST = "Inserts the item at the start of a list.";
g.i.LISTS_SET_INDEX_TOOLTIP_INSERT_FROM = "Inserts the item at the specified position in a list.";
g.i.LISTS_SET_INDEX_TOOLTIP_INSERT_LAST = "Append the item to the end of a list.";
g.i.LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM = "Inserts the item randomly in a list.";
g.i.LISTS_SET_INDEX_TOOLTIP_SET_FIRST = "Sets the first item in a list.";
g.i.LISTS_SET_INDEX_TOOLTIP_SET_FROM = "Sets the item at the specified position in a list.";
g.i.LISTS_SET_INDEX_TOOLTIP_SET_LAST = "Sets the last item in a list.";
g.i.LISTS_SET_INDEX_TOOLTIP_SET_RANDOM = "Sets a random item in a list.";
g.i.LISTS_SORT_HELPURL = "https://github.com/google/blockly/wiki/Lists#sorting-a-list";
g.i.LISTS_SORT_ORDER_ASCENDING = "ascending";
g.i.LISTS_SORT_ORDER_DESCENDING = "descending";
g.i.LISTS_SORT_TITLE = "sort %1 %2 %3";
g.i.LISTS_SORT_TOOLTIP = "Sort a copy of a list.";
g.i.LISTS_SORT_TYPE_IGNORECASE = "alphabetic, ignore case";
g.i.LISTS_SORT_TYPE_NUMERIC = "numeric";
g.i.LISTS_SORT_TYPE_TEXT = "alphabetic";
g.i.LISTS_SPLIT_HELPURL = "https://github.com/google/blockly/wiki/Lists#splitting-strings-and-joining-lists";
g.i.LISTS_SPLIT_LIST_FROM_TEXT = "make list from text";
g.i.LISTS_SPLIT_TEXT_FROM_LIST = "make text from list";
g.i.LISTS_SPLIT_TOOLTIP_JOIN = "Join a list of texts into one text, separated by a delimiter.";
g.i.LISTS_SPLIT_TOOLTIP_SPLIT = "Split text into a list of texts, breaking at each delimiter.";
g.i.LISTS_SPLIT_WITH_DELIMITER = "with delimiter";
g.i.LOGIC_BOOLEAN_FALSE = "false";
g.i.LOGIC_BOOLEAN_HELPURL = "https://github.com/google/blockly/wiki/Logic#values";
g.i.LOGIC_BOOLEAN_TOOLTIP = "Returns either true or false.";
g.i.LOGIC_BOOLEAN_TRUE = "true";
g.i.LOGIC_COMPARE_HELPURL = "https://en.wikipedia.org/wiki/Inequality_(mathematics)";
g.i.LOGIC_COMPARE_TOOLTIP_EQ = "Return true if both inputs equal each other.";
g.i.LOGIC_COMPARE_TOOLTIP_GT = "Return true if the first input is greater than the second input.";
g.i.LOGIC_COMPARE_TOOLTIP_GTE = "Return true if the first input is greater than or equal to the second input.";
g.i.LOGIC_COMPARE_TOOLTIP_LT = "Return true if the first input is smaller than the second input.";
g.i.LOGIC_COMPARE_TOOLTIP_LTE = "Return true if the first input is smaller than or equal to the second input.";
g.i.LOGIC_COMPARE_TOOLTIP_NEQ = "Return true if both inputs are not equal to each other.";
g.i.LOGIC_NEGATE_HELPURL = "https://github.com/google/blockly/wiki/Logic#not";
g.i.LOGIC_NEGATE_TITLE = "not %1";
g.i.LOGIC_NEGATE_TOOLTIP = "Returns true if the input is false. Returns false if the input is true.";
g.i.LOGIC_NULL = "null";
g.i.LOGIC_NULL_HELPURL = "https://en.wikipedia.org/wiki/Nullable_type";
g.i.LOGIC_NULL_TOOLTIP = "Returns null.";
g.i.LOGIC_OPERATION_AND = "and";
g.i.LOGIC_OPERATION_HELPURL = "https://github.com/google/blockly/wiki/Logic#logical-operations";
g.i.LOGIC_OPERATION_OR = "or";
g.i.LOGIC_OPERATION_TOOLTIP_AND = "Return true if both inputs are true.";
g.i.LOGIC_OPERATION_TOOLTIP_OR = "Return true if at least one of the inputs is true.";
g.i.LOGIC_TERNARY_CONDITION = "test";
g.i.LOGIC_TERNARY_HELPURL = "https://en.wikipedia.org/wiki/%3F:";
g.i.LOGIC_TERNARY_IF_FALSE = "if false";
g.i.LOGIC_TERNARY_IF_TRUE = "if true";
g.i.LOGIC_TERNARY_TOOLTIP = "Check the condition in 'test'. If the condition is true, returns the 'if true' value; otherwise returns the 'if false' value.";
g.i.MATH_ADDITION_SYMBOL = "+";
g.i.MATH_ARITHMETIC_HELPURL = "https://en.wikipedia.org/wiki/Arithmetic";
g.i.MATH_ARITHMETIC_TOOLTIP_ADD = "Return the sum of the two numbers.";
g.i.MATH_ARITHMETIC_TOOLTIP_DIVIDE = "Return the quotient of the two numbers.";
g.i.MATH_ARITHMETIC_TOOLTIP_MINUS = "Return the difference of the two numbers.";
g.i.MATH_ARITHMETIC_TOOLTIP_MULTIPLY = "Return the product of the two numbers.";
g.i.MATH_ARITHMETIC_TOOLTIP_POWER = "Return the first number raised to the power of the second number.";
g.i.MATH_ATAN2_HELPURL = "https://en.wikipedia.org/wiki/Atan2";
g.i.MATH_ATAN2_TITLE = "atan2 of X:%1 Y:%2";
g.i.MATH_ATAN2_TOOLTIP = "Return the arctangent of point (X, Y) in degrees from -180 to 180.";
g.i.MATH_CHANGE_HELPURL = "https://en.wikipedia.org/wiki/Programming_idiom#Incrementing_a_counter";
g.i.MATH_CHANGE_TITLE = "change %1 by %2";
g.i.MATH_CHANGE_TOOLTIP = "Add a number to variable '%1'.";
g.i.MATH_CONSTANT_HELPURL = "https://en.wikipedia.org/wiki/Mathematical_constant";
g.i.MATH_CONSTANT_TOOLTIP = "Return one of the common constants: \u03c0 (3.141\u2026), e (2.718\u2026), \u03c6 (1.618\u2026), sqrt(2) (1.414\u2026), sqrt(\u00bd) (0.707\u2026), or \u221e (infinity).";
g.i.MATH_CONSTRAIN_HELPURL = "https://en.wikipedia.org/wiki/Clamping_(graphics)";
g.i.MATH_CONSTRAIN_TITLE = "constrain %1 low %2 high %3";
g.i.MATH_CONSTRAIN_TOOLTIP = "Constrain a number to be between the specified limits (inclusive).";
g.i.MATH_DIVISION_SYMBOL = "\u00f7";
g.i.MATH_IS_DIVISIBLE_BY = "is divisible by";
g.i.MATH_IS_EVEN = "is even";
g.i.MATH_IS_NEGATIVE = "is negative";
g.i.MATH_IS_ODD = "is odd";
g.i.MATH_IS_POSITIVE = "is positive";
g.i.MATH_IS_PRIME = "is prime";
g.i.MATH_IS_TOOLTIP = "Check if a number is an even, odd, prime, whole, positive, negative, or if it is divisible by certain number. Returns true or false.";
g.i.MATH_IS_WHOLE = "is whole";
g.i.MATH_MODULO_HELPURL = "https://en.wikipedia.org/wiki/Modulo_operation";
g.i.MATH_MODULO_TITLE = "remainder of %1 \u00f7 %2";
g.i.MATH_MODULO_TOOLTIP = "Return the remainder from dividing the two numbers.";
g.i.MATH_MULTIPLICATION_SYMBOL = "\u00d7";
g.i.MATH_NUMBER_HELPURL = "https://en.wikipedia.org/wiki/Number";
g.i.MATH_NUMBER_TOOLTIP = "A number.";
g.i.MATH_ONLIST_HELPURL = "";
g.i.MATH_ONLIST_OPERATOR_AVERAGE = "average of list";
g.i.MATH_ONLIST_OPERATOR_MAX = "max of list";
g.i.MATH_ONLIST_OPERATOR_MEDIAN = "median of list";
g.i.MATH_ONLIST_OPERATOR_MIN = "min of list";
g.i.MATH_ONLIST_OPERATOR_MODE = "modes of list";
g.i.MATH_ONLIST_OPERATOR_RANDOM = "random item of list";
g.i.MATH_ONLIST_OPERATOR_STD_DEV = "standard deviation of list";
g.i.MATH_ONLIST_OPERATOR_SUM = "sum of list";
g.i.MATH_ONLIST_TOOLTIP_AVERAGE = "Return the average (arithmetic mean) of the numeric values in the list.";
g.i.MATH_ONLIST_TOOLTIP_MAX = "Return the largest number in the list.";
g.i.MATH_ONLIST_TOOLTIP_MEDIAN = "Return the median number in the list.";
g.i.MATH_ONLIST_TOOLTIP_MIN = "Return the smallest number in the list.";
g.i.MATH_ONLIST_TOOLTIP_MODE = "Return a list of the most common item(s) in the list.";
g.i.MATH_ONLIST_TOOLTIP_RANDOM = "Return a random element from the list.";
g.i.MATH_ONLIST_TOOLTIP_STD_DEV = "Return the standard deviation of the list.";
g.i.MATH_ONLIST_TOOLTIP_SUM = "Return the sum of all the numbers in the list.";
g.i.MATH_POWER_SYMBOL = "^";
g.i.MATH_RANDOM_FLOAT_HELPURL = "https://en.wikipedia.org/wiki/Random_number_generation";
g.i.MATH_RANDOM_FLOAT_TITLE_RANDOM = "random fraction";
g.i.MATH_RANDOM_FLOAT_TOOLTIP = "Return a random fraction between 0.0 (inclusive) and 1.0 (exclusive).";
g.i.MATH_RANDOM_INT_HELPURL = "https://en.wikipedia.org/wiki/Random_number_generation";
g.i.MATH_RANDOM_INT_TITLE = "random integer from %1 to %2";
g.i.MATH_RANDOM_INT_TOOLTIP = "Return a random integer between the two specified limits, inclusive.";
g.i.MATH_ROUND_HELPURL = "https://en.wikipedia.org/wiki/Rounding";
g.i.MATH_ROUND_OPERATOR_ROUND = "round";
g.i.MATH_ROUND_OPERATOR_ROUNDDOWN = "round down";
g.i.MATH_ROUND_OPERATOR_ROUNDUP = "round up";
g.i.MATH_ROUND_TOOLTIP = "Round a number up or down.";
g.i.MATH_SINGLE_HELPURL = "https://en.wikipedia.org/wiki/Square_root";
g.i.MATH_SINGLE_OP_ABSOLUTE = "absolute";
g.i.MATH_SINGLE_OP_ROOT = "square root";
g.i.MATH_SINGLE_TOOLTIP_ABS = "Return the absolute value of a number.";
g.i.MATH_SINGLE_TOOLTIP_EXP = "Return e to the power of a number.";
g.i.MATH_SINGLE_TOOLTIP_LN = "Return the natural logarithm of a number.";
g.i.MATH_SINGLE_TOOLTIP_LOG10 = "Return the base 10 logarithm of a number.";
g.i.MATH_SINGLE_TOOLTIP_NEG = "Return the negation of a number.";
g.i.MATH_SINGLE_TOOLTIP_POW10 = "Return 10 to the power of a number.";
g.i.MATH_SINGLE_TOOLTIP_ROOT = "Return the square root of a number.";
g.i.MATH_SUBTRACTION_SYMBOL = "-";
g.i.MATH_TRIG_ACOS = "acos";
g.i.MATH_TRIG_ASIN = "asin";
g.i.MATH_TRIG_ATAN = "atan";
g.i.MATH_TRIG_COS = "cos";
g.i.MATH_TRIG_HELPURL = "https://en.wikipedia.org/wiki/Trigonometric_functions";
g.i.MATH_TRIG_SIN = "sin";
g.i.MATH_TRIG_TAN = "tan";
g.i.MATH_TRIG_TOOLTIP_ACOS = "Return the arccosine of a number.";
g.i.MATH_TRIG_TOOLTIP_ASIN = "Return the arcsine of a number.";
g.i.MATH_TRIG_TOOLTIP_ATAN = "Return the arctangent of a number.";
g.i.MATH_TRIG_TOOLTIP_COS = "Return the cosine of a degree (not radian).";
g.i.MATH_TRIG_TOOLTIP_SIN = "Return the sine of a degree (not radian).";
g.i.MATH_TRIG_TOOLTIP_TAN = "Return the tangent of a degree (not radian).";
g.i.NEW_VARIABLE = "Create variable...";
g.i.NEW_VARIABLE_TITLE = "New variable name:";
g.i.ORDINAL_NUMBER_SUFFIX = "";
g.i.PROCEDURES_ALLOW_STATEMENTS = "allow statements";
g.i.PROCEDURES_BEFORE_PARAMS = "with:";
g.i.PROCEDURES_CALLNORETURN_HELPURL = "https://en.wikipedia.org/wiki/Subroutine";
g.i.PROCEDURES_CALLNORETURN_TOOLTIP = "Run the user-defined function '%1'.";
g.i.PROCEDURES_CALLRETURN_HELPURL = "https://en.wikipedia.org/wiki/Subroutine";
g.i.PROCEDURES_CALLRETURN_TOOLTIP = "Run the user-defined function '%1' and use its output.";
g.i.PROCEDURES_CALL_BEFORE_PARAMS = "with:";
g.i.PROCEDURES_CREATE_DO = "Create '%1'";
g.i.PROCEDURES_DEFNORETURN_COMMENT = "Describe this function...";
g.i.PROCEDURES_DEFNORETURN_DO = "";
g.i.PROCEDURES_DEFNORETURN_HELPURL = "https://en.wikipedia.org/wiki/Subroutine";
g.i.PROCEDURES_DEFNORETURN_PROCEDURE = "do something";
g.i.PROCEDURES_DEFNORETURN_TITLE = "to";
g.i.PROCEDURES_DEFNORETURN_TOOLTIP = "Creates a function with no output.";
g.i.PROCEDURES_DEFRETURN_HELPURL = "https://en.wikipedia.org/wiki/Subroutine";
g.i.PROCEDURES_DEFRETURN_RETURN = "return";
g.i.PROCEDURES_DEFRETURN_TOOLTIP = "Creates a function with an output.";
g.i.PROCEDURES_HIGHLIGHT_DEF = "Highlight function definition";
g.i.PROCEDURES_IFRETURN_HELPURL = "http://c2.com/cgi/wiki?GuardClause";
g.i.PROCEDURES_IFRETURN_TOOLTIP = "If a value is true, then return a second value.";
g.i.PROCEDURES_IFRETURN_WARNING = "Warning: This block may be used only within a function definition.";
g.i.PROCEDURES_MUTATORARG_TITLE = "input name:";
g.i.PROCEDURES_MUTATORARG_TOOLTIP = "Add an input to the function.";
g.i.PROCEDURES_MUTATORCONTAINER_TITLE = "inputs";
g.i.PROCEDURES_MUTATORCONTAINER_TOOLTIP = "Add, remove, or reorder inputs to this function.";
g.i.REDO = "Redo";
g.i.REMOVE_COMMENT = "Remove Comment";
g.i.RENAME_VARIABLE = "Rename variable...";
g.i.RENAME_VARIABLE_TITLE = "Rename all '%1' variables to:";
g.i.TEXT_APPEND_TITLE = "to %1 append text %2";
g.i.TEXT_APPEND_TOOLTIP = "Append some text to variable '%1'.";
g.i.TEXT_CHANGECASE_HELPURL = "https://github.com/google/blockly/wiki/Text#adjusting-text-case";
g.i.TEXT_CHANGECASE_OPERATOR_LOWERCASE = "to lower case";
g.i.TEXT_CHANGECASE_OPERATOR_TITLECASE = "to Title Case";
g.i.TEXT_CHANGECASE_OPERATOR_UPPERCASE = "to UPPER CASE";
g.i.TEXT_CHANGECASE_TOOLTIP = "Return a copy of the text in a different case.";
g.i.TEXT_CHARAT_FIRST = "get first letter";
g.i.TEXT_CHARAT_FROM_END = "get letter # from end";
g.i.TEXT_CHARAT_FROM_START = "get letter #";
g.i.TEXT_CHARAT_HELPURL = "https://github.com/google/blockly/wiki/Text#extracting-text";
g.i.TEXT_CHARAT_LAST = "get last letter";
g.i.TEXT_CHARAT_RANDOM = "get random letter";
g.i.TEXT_CHARAT_TAIL = "";
g.i.TEXT_CHARAT_TITLE = "in text %1 %2";
g.i.TEXT_CHARAT_TOOLTIP = "Returns the letter at the specified position.";
g.i.TEXT_COUNT_HELPURL = "https://github.com/google/blockly/wiki/Text#counting-substrings";
g.i.TEXT_COUNT_MESSAGE0 = "count %1 in %2";
g.i.TEXT_COUNT_TOOLTIP = "Count how many times some text occurs within some other text.";
g.i.TEXT_CREATE_JOIN_ITEM_TOOLTIP = "Add an item to the text.";
g.i.TEXT_CREATE_JOIN_TITLE_JOIN = "join";
g.i.TEXT_CREATE_JOIN_TOOLTIP = "Add, remove, or reorder sections to reconfigure this text block.";
g.i.TEXT_GET_SUBSTRING_END_FROM_END = "to letter # from end";
g.i.TEXT_GET_SUBSTRING_END_FROM_START = "to letter #";
g.i.TEXT_GET_SUBSTRING_END_LAST = "to last letter";
g.i.TEXT_GET_SUBSTRING_HELPURL = "https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text";
g.i.TEXT_GET_SUBSTRING_INPUT_IN_TEXT = "in text";
g.i.TEXT_GET_SUBSTRING_START_FIRST = "get substring from first letter";
g.i.TEXT_GET_SUBSTRING_START_FROM_END = "get substring from letter # from end";
g.i.TEXT_GET_SUBSTRING_START_FROM_START = "get substring from letter #";
g.i.TEXT_GET_SUBSTRING_TAIL = "";
g.i.TEXT_GET_SUBSTRING_TOOLTIP = "Returns a specified portion of the text.";
g.i.TEXT_INDEXOF_HELPURL = "https://github.com/google/blockly/wiki/Text#finding-text";
g.i.TEXT_INDEXOF_OPERATOR_FIRST = "find first occurrence of text";
g.i.TEXT_INDEXOF_OPERATOR_LAST = "find last occurrence of text";
g.i.TEXT_INDEXOF_TITLE = "in text %1 %2 %3";
g.i.TEXT_INDEXOF_TOOLTIP = "Returns the index of the first/last occurrence of the first text in the second text. Returns %1 if text is not found.";
g.i.TEXT_ISEMPTY_HELPURL = "https://github.com/google/blockly/wiki/Text#checking-for-empty-text";
g.i.TEXT_ISEMPTY_TITLE = "%1 is empty";
g.i.TEXT_ISEMPTY_TOOLTIP = "Returns true if the provided text is empty.";
g.i.TEXT_JOIN_HELPURL = "https://github.com/google/blockly/wiki/Text#text-creation";
g.i.TEXT_JOIN_TITLE_CREATEWITH = "create text with";
g.i.TEXT_JOIN_TOOLTIP = "Create a piece of text by joining together any number of items.";
g.i.TEXT_LENGTH_HELPURL = "https://github.com/google/blockly/wiki/Text#text-modification";
g.i.TEXT_LENGTH_TITLE = "length of %1";
g.i.TEXT_LENGTH_TOOLTIP = "Returns the number of letters (including spaces) in the provided text.";
g.i.TEXT_PRINT_HELPURL = "https://github.com/google/blockly/wiki/Text#printing-text";
g.i.TEXT_PRINT_TITLE = "print %1";
g.i.TEXT_PRINT_TOOLTIP = "Print the specified text, number or other value.";
g.i.TEXT_PROMPT_HELPURL = "https://github.com/google/blockly/wiki/Text#getting-input-from-the-user";
g.i.TEXT_PROMPT_TOOLTIP_NUMBER = "Prompt for user for a number.";
g.i.TEXT_PROMPT_TOOLTIP_TEXT = "Prompt for user for some text.";
g.i.TEXT_PROMPT_TYPE_NUMBER = "prompt for number with message";
g.i.TEXT_PROMPT_TYPE_TEXT = "prompt for text with message";
g.i.TEXT_REPLACE_HELPURL = "https://github.com/google/blockly/wiki/Text#replacing-substrings";
g.i.TEXT_REPLACE_MESSAGE0 = "replace %1 with %2 in %3";
g.i.TEXT_REPLACE_TOOLTIP = "Replace all occurances of some text within some other text.";
g.i.TEXT_REVERSE_HELPURL = "https://github.com/google/blockly/wiki/Text#reversing-text";
g.i.TEXT_REVERSE_MESSAGE0 = "reverse %1";
g.i.TEXT_REVERSE_TOOLTIP = "Reverses the order of the characters in the text.";
g.i.TEXT_TEXT_HELPURL = "https://en.wikipedia.org/wiki/String_(computer_science)";
g.i.TEXT_TEXT_TOOLTIP = "A letter, word, or line of text.";
g.i.TEXT_TRIM_HELPURL = "https://github.com/google/blockly/wiki/Text#trimming-removing-spaces";
g.i.TEXT_TRIM_OPERATOR_BOTH = "trim spaces from both sides of";
g.i.TEXT_TRIM_OPERATOR_LEFT = "trim spaces from left side of";
g.i.TEXT_TRIM_OPERATOR_RIGHT = "trim spaces from right side of";
g.i.TEXT_TRIM_TOOLTIP = "Return a copy of the text with spaces removed from one or both ends.";
g.i.UNDO = "Undo";
g.i.UNNAMED_KEY = "unnamed";
g.i.VARIABLES_DEFAULT_NAME = "item";
g.i.VARIABLES_GET_CREATE_SET = "Create 'set %1'";
g.i.VARIABLES_GET_HELPURL = "https://github.com/google/blockly/wiki/Variables#get";
g.i.VARIABLES_GET_TOOLTIP = "Returns the value of this variable.";
g.i.VARIABLES_SET = "set %1 to %2";
g.i.VARIABLES_SET_CREATE_GET = "Create 'get %1'";
g.i.VARIABLES_SET_HELPURL = "https://github.com/google/blockly/wiki/Variables#set";
g.i.VARIABLES_SET_TOOLTIP = "Sets this variable to be equal to the input.";
g.i.VARIABLE_ALREADY_EXISTS = "A variable named '%1' already exists.";
g.i.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE = "A variable named '%1' already exists for another type: '%2'.";
g.i.WORKSPACE_ARIA_LABEL = "Blockly Workspace";
g.i.WORKSPACE_COMMENT_DEFAULT_TEXT = "Say something...";
g.i.CONTROLS_IF_ELSEIF_TITLE_ELSEIF = g.i.CONTROLS_IF_MSG_ELSEIF;
g.i.CONTROLS_IF_ELSE_TITLE_ELSE = g.i.CONTROLS_IF_MSG_ELSE;
g.i.CONTROLS_IF_IF_TITLE_IF = g.i.CONTROLS_IF_MSG_IF;
g.i.CONTROLS_IF_MSG_THEN = g.i.CONTROLS_REPEAT_INPUT_DO;
g.i.LISTS_CREATE_WITH_ITEM_TITLE = g.i.VARIABLES_DEFAULT_NAME;
g.i.LISTS_GET_INDEX_HELPURL = g.i.LISTS_INDEX_OF_HELPURL;
g.i.LISTS_GET_INDEX_INPUT_IN_LIST = g.i.LISTS_INLIST;
g.i.LISTS_GET_SUBLIST_INPUT_IN_LIST = g.i.LISTS_INLIST;
g.i.LISTS_INDEX_OF_INPUT_IN_LIST = g.i.LISTS_INLIST;
g.i.LISTS_SET_INDEX_INPUT_IN_LIST = g.i.LISTS_INLIST;
g.i.MATH_CHANGE_TITLE_ITEM = g.i.VARIABLES_DEFAULT_NAME;
g.i.PROCEDURES_DEFRETURN_COMMENT = g.i.PROCEDURES_DEFNORETURN_COMMENT;
g.i.PROCEDURES_DEFRETURN_PROCEDURE = g.i.PROCEDURES_DEFNORETURN_PROCEDURE;
g.i.PROCEDURES_DEFRETURN_TITLE = g.i.PROCEDURES_DEFNORETURN_TITLE;
g.i.TEXT_APPEND_VARIABLE = g.i.VARIABLES_DEFAULT_NAME;
g.i.TEXT_CREATE_JOIN_ITEM_TITLE_ITEM = g.i.VARIABLES_DEFAULT_NAME;
g.i.LOOPS_HUE = "120";
g.i.COLOUR_HUE = "20";
var BlocklyStorage = {},
    fe = null,
    ge = null,
    he = null;

function ie() {
    var a = fe();
    je("/storage", "xml=" + encodeURIComponent(a), ke)
}
var le = {};

function je(a, c, d, e, f) {
    le[a] && le[a].abort();
    le[a] = new XMLHttpRequest;
    le[a].onload = function() {
        200 === this.status ? d && d.call(this) : e ? e.call(this) : me(L("Games_httpRequestError") + "\nXHR status: " + this.status);
        le[a] = null
    };
    f = f || "POST";
    le[a].open(f, a);
    "POST" === f && le[a].setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    le[a].send(c)
}

function ke() {
    window.location.hash = this.responseText.trim();
    me(L("Games_linkAlert").replace("%1", window.location.href));
    he = fe()
}

function ne() {
    var a = this.responseText.trim();
    a.length ? ge(a) : me(L("Games_hashError").replace("%1", window.location.hash));
    he = fe()
}

function me(a) {
    if ("object" === typeof M) {
        var c = document.getElementById("linkButton");
        M.KD(c, a)
    } else alert(a)
};
var u = null,
    oe = "",
    pe = "";

function qe() {
    Gd();
    var a = document.getElementById("linkButton");
    a && (Ad ? a.style.display = "none" : (fe = re, ge = se, Kd(a, ie)));
    (a = document.getElementById("languageMenu")) && a.addEventListener("change", te, !0)
}

function ue() {
    var a = 10 == K ? '<xml><block type="turtle_move" x="70" y="70"><value name="VALUE"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block></xml>' : '<xml><block type="turtle_move_internal" x="70" y="70"><field name="VALUE">100</field></block></xml>',
        c = 10 != K || ve;
    if (!Ad && 1 < window.location.hash.length) je("/storage", "key=" + encodeURIComponent(window.location.hash.substring(1)), ne);
    else {
        var d = null;
        try {
            d = window.sessionStorage.KC
        } catch (h) {}
        d && delete window.sessionStorage.KC;
        var e = Hd(K),
            f = c && Hd(K - 1);
        f && "function" == typeof c && (f = c(f));
        (a = d || e || f || a) && se(a)
    }
}

function se(a) {
    a = g.O.ze(a);
    u.clear();
    g.O.fj(a, u);
    a = u;
    a.Hl.length = 0;
    a.Lp.length = 0;
    g.h.RH()
}

function re() {
    var a = g.O.AL();
    if (1 == u.zc(!1).length && a.querySelector) {
        var c = a.querySelector("block");
        c && (c.removeAttribute("x"), c.removeAttribute("y"))
    }
    return g.O.Zd(a)
}

function we() {
    "object" == typeof BlocklyStorage && null !== he && he != re() && (window.location.hash = "", he = null)
}

function xe(a) {
    var c = document.getElementById("toolbox");
    c && (a.toolbox = c);
    a.media = "third-party/blockly/media/";
    a.oneBasedIndex = !1;
    u = g.sj("blockly", a);
    C(u, we)
}

function ye() {
    window.location = (Ad ? "index.html" : "./") + "?lang=" + yd
}

function te() {
    window.sessionStorage && (window.sessionStorage.KC = re());
    var a = document.getElementById("languageMenu");
    a = encodeURIComponent(a.options[a.selectedIndex].value);
    var c = window.location.search;
    c = 1 >= c.length ? "?lang=" + a : /[?&]lang=[^&]*/.test(c) ? c.replace(/([?&]lang=)[^&]*/, "$1" + a) : c.replace(/\?/, "?lang=" + a + "&");
    window.location = window.location.protocol + "//" + window.location.host + window.location.pathname + c
}

function ze() {
    10 > K ? window.location = window.location.protocol + "//" + window.location.host + window.location.pathname + "?lang=" + yd + "&level=" + (K + 1) : ye()
}

function Ae(a, c) {
    a = document.getElementById(a);
    a.firstChild || (a = g.sj(a, {
        rtl: Bd(),
        readOnly: !0
    }), "string" != typeof c && (c = c.join("")), g.O.fj(g.O.ze(c), a))
}

function Be(a) {
    a = a.replace(/(,\s*)?'block_id_[^']+'\)/g, ")");
    return a.replace(/\s+$/, "")
}

function Ce(a) {
    if ("click" == a.type && "touchend" == De && Ee + 2E3 > Date.now() || De == a.type && Ee + 400 > Date.now()) return a.preventDefault(), a.stopPropagation(), !0;
    De = a.type;
    Ee = Date.now();
    return !1
}
var De = null,
    Ee = 0;

function Fe() {
    setTimeout(function() {
        var a = document.createElement("script");
        a.type = "text/javascript";
        a.src = "third-party/JS-Interpreter/compressed.js";
        document.head.appendChild(a)
    }, 1)
}

function Ge() {
    setTimeout(function() {
        var a = document.createElement("link");
        a.rel = "stylesheet";
        a.type = "text/css";
        a.href = "common/prettify.css";
        document.head.appendChild(a);
        a = document.createElement("script");
        a.type = "text/javascript";
        a.src = "common/prettify.js";
        document.head.appendChild(a)
    }, 1)
};
var M = {
    uj: !1,
    vB: null,
    js: null,
    Cl: function(a, c, d, e, f, h) {
        function k() {
            if (M.uj) {
                l.style.visibility = "visible";
                l.style.zIndex = 10;
                m.style.visibility = "hidden";
                var q = a.getElementsByClassName("primary");
                q.length || (q = a.getElementsByClassName("secondary"), q.length || (q = a.getElementsByTagName("button")));
                q.length && q[0].focus()
            }
        }
        if (!a) throw TypeError("Content not found: " + a);
        M.uj && M.zf(!1);
        g.hj() && g.Uc(!0);
        M.uj = !0;
        M.vB = c;
        M.js = h;
        var l = document.getElementById("dialog");
        h = document.getElementById("dialogShadow");
        var m =
            document.getElementById("dialogBorder"),
            n;
        for (n in f) l.style[n] = f[n];
        e && (h.style.visibility = "visible", h.style.opacity = .3, h.style.zIndex = 9, e = document.createElement("div"), e.id = "dialogHeader", l.appendChild(e), M.Wv = g.pv(e, "mousedown", null, M.mI));
        f = a.getElementsByClassName("dialogOk");
        for (e = 0; e < f.length; e++) f[e].textContent = g.i.ZL;
        f = a.getElementsByClassName("dialogCancel");
        for (e = 0; e < f.length; e++) f[e].textContent = g.i.YL;
        l.appendChild(a);
        a.className = a.className.replace("dialogHiddenContent", "");
        try {
            c.blur()
        } catch (q) {}
        d &&
            c ? (M.Us(c, !1, .2), M.Us(l, !0, .8), setTimeout(k, 175)) : k()
    },
    wB: 0,
    xB: 0,
    mI: function(a) {
        M.Zv();
        if (!g.g.bl(a)) {
            var c = document.getElementById("dialog");
            M.wB = c.offsetLeft - a.clientX;
            M.xB = c.offsetTop - a.clientY;
            M.Yv = g.pv(document, "mouseup", null, M.Zv);
            M.Xv = g.pv(document, "mousemove", null, M.nI);
            a.stopPropagation()
        }
    },
    nI: function(a) {
        var c = document.getElementById("dialog"),
            d = M.wB + a.clientX;
        a = M.xB + a.clientY;
        a = Math.max(a, 0);
        a = Math.min(a, window.innerHeight - c.offsetHeight);
        d = Math.max(d, 0);
        d = Math.min(d, window.innerWidth -
            c.offsetWidth);
        c.style.left = d + "px";
        c.style.top = a + "px"
    },
    Zv: function() {
        M.Yv && (g.Zy(M.Yv), M.Yv = null);
        M.Xv && (g.Zy(M.Xv), M.Xv = null)
    },
    zf: function(a) {
        function c() {
            e.style.zIndex = -1;
            e.style.visibility = "hidden";
            document.getElementById("dialogBorder").style.visibility = "hidden"
        }
        if (M.uj) {
            M.Zv();
            M.Wv && (g.Zy(M.Wv), M.Wv = null);
            M.uj = !1;
            M.js && M.js();
            M.js = null;
            var d = !1 === a ? null : M.vB;
            a = document.getElementById("dialog");
            var e = document.getElementById("dialogShadow");
            e.style.opacity = 0;
            d && a ? (M.Us(a, !1, .8), M.Us(d, !0, .2),
                setTimeout(c, 175)) : c();
            a.style.visibility = "hidden";
            a.style.zIndex = -1;
            for ((d = document.getElementById("dialogHeader")) && d.parentNode.removeChild(d); a.firstChild;) d = a.firstChild, d.className += " dialogHiddenContent", document.body.appendChild(d)
        }
    },
    Us: function(a, c, d) {
        function e() {
            f.style.width = h.width + "px";
            f.style.height = h.height + "px";
            f.style.left = h.x + "px";
            f.style.top = h.y + "px";
            f.style.opacity = d
        }
        if (a) {
            var f = document.getElementById("dialogBorder"),
                h = M.II(a);
            c ? (f.className = "dialogAnimate", setTimeout(e, 1)) :
                (f.className = "", e());
            f.style.visibility = "visible"
        }
    },
    II: function(a) {
        var c = g.g.style.Pk(a);
        c = {
            x: c.x,
            y: c.y
        };
        a.getBBox ? (a = a.getBBox(), c.height = a.height, c.width = a.width) : (c.height = a.offsetHeight, c.width = a.offsetWidth);
        return c
    },
    KD: function(a, c) {
        var d = document.getElementById("containerStorage");
        d.textContent = "";
        c = c.split("\n");
        for (var e = 0; e < c.length; e++) {
            var f = document.createElement("p");
            f.appendChild(document.createTextNode(c[e]));
            d.appendChild(f)
        }
        d = document.getElementById("dialogStorage");
        M.Cl(d, a, !0,
            !0, {
                width: "50%",
                left: "25%",
                top: "5em"
            }, M.Ry);
        M.Py()
    },
    IA: function() {
        if (!Hd(K))
            if (M.uj || u.Ac()) setTimeout(M.IA, 15E3);
            else {
                var a = document.getElementById("dialogAbort"),
                    c = document.getElementById("abortCancel");
                c.addEventListener("click", M.zf, !0);
                c.addEventListener("touchend", M.zf, !0);
                c = document.getElementById("abortOk");
                c.addEventListener("click", ye, !0);
                c.addEventListener("touchend", ye, !0);
                M.Cl(a, null, !1, !0, {
                    width: "40%",
                    left: "30%",
                    top: "3em"
                }, function() {
                    document.body.removeEventListener("keydown", M.HA,
                        !0)
                });
                document.body.addEventListener("keydown", M.HA, !0)
            }
    },
    WH: function() {
        var a = document.getElementById("dialogDone");
        if (u) {
            var c = document.getElementById("dialogLinesText");
            c.textContent = "";
            var d = pe;
            d = Be(d);
            var e = d.replace(/\/\/[^\n]*/g, "");
            e = e.replace(/\/\*.*\*\//g, "");
            e = e.replace(/[ \t]+\n/g, "\n");
            e = e.replace(/\n+/g, "\n");
            e = e.trim();
            e = e.split("\n").length;
            var f = document.getElementById("containerCode");
            f.textContent = d;
            "function" == typeof prettyPrintOne && (d = f.innerHTML, d = prettyPrintOne(d, "js"), f.innerHTML =
                d);
            d = 1 == e ? L("Games_linesOfCode1") : L("Games_linesOfCode2").replace("%1", String(e));
            c.appendChild(document.createTextNode(d))
        }
        d = 10 > K ? L("Games_nextLevel").replace("%1", String(K + 1)) : L("Games_finalLevel");
        c = document.getElementById("doneCancel");
        c.addEventListener("click", M.zf, !0);
        c.addEventListener("touchend", M.zf, !0);
        c = document.getElementById("doneOk");
        c.addEventListener("click", ze, !0);
        c.addEventListener("touchend", ze, !0);
        M.Cl(a, null, !1, !0, {
            width: "40%",
            left: "30%",
            top: "3em"
        }, function() {
            document.body.removeEventListener("keydown",
                M.fB, !0)
        });
        document.body.addEventListener("keydown", M.fB, !0);
        document.getElementById("dialogDoneText").textContent = d
    },
    ks: function(a) {
        !M.uj || 13 != a.keyCode && 27 != a.keyCode && 32 != a.keyCode || (M.zf(!0), a.stopPropagation(), a.preventDefault())
    },
    Py: function() {
        document.body.addEventListener("keydown", M.ks, !0)
    },
    Ry: function() {
        document.body.removeEventListener("keydown", M.ks, !0)
    },
    fB: function(a) {
        M.ks(a);
        13 != a.keyCode && 32 != a.keyCode || ze()
    },
    HA: function(a) {
        M.ks(a);
        13 != a.keyCode && 32 != a.keyCode || ye()
    }
};
window.BlocklyDialogs = M;
M.hideDialog = M.zf;

function He() {
    document.getElementById("galleryXml").value = re();
    var a = document.getElementById("galleryDialog");
    if (!Ie) {
        var c = document.getElementById("galleryCancel");
        c.addEventListener("click", M.zf, !0);
        c.addEventListener("touchend", M.zf, !0);
        c = document.getElementById("galleryOk");
        c.addEventListener("click", Je, !0);
        c.addEventListener("touchend", Je, !0);
        Ie = !0
    }
    c = document.getElementById("submitButton");
    M.Cl(a, c, !0, !0, {
        width: "40%",
        left: "30%",
        top: "3em"
    }, function() {
        document.body.removeEventListener("keydown",
            Ke, !0)
    });
    document.body.addEventListener("keydown", Ke, !0);
    setTimeout(function() {
        document.getElementById("galleryTitle").focus()
    }, 250)
}
var Ie;

function Ke(a) {
    27 == a.keyCode ? M.zf(!0) : 13 == a.keyCode && Je()
}

function Le(a, c) {
    for (var d = [], e = 0, f; f = a.elements[e]; e++) f.name && d.push(encodeURIComponent(f.name) + "=" + encodeURIComponent(f.value));
    je(a.action, d.join("&"), c, void 0, void 0)
}

function Je() {
    var a = document.getElementById("galleryTitle");
    a.value.trim() ? (a = document.getElementById("galleryForm"), Le(a, function() {
        M.KD(null, L("Games_submitted"))
    }), M.zf(!0)) : (a.value = "", a.focus())
};

function Me(a) {
    this.MF = 23;
    this.am = 18;
    this.su = 132;
    this.zk = 20;
    this.ib = .5;
    this.WA = void 0;
    this.kv = [];
    g.g.o.K("line", {
        "class": "sliderTrack",
        x1: 10,
        y1: 35,
        x2: 140,
        y2: 35
    }, a);
    this.nL = g.g.o.K("rect", {
        style: "opacity: 0",
        x: 10 - this.zk,
        y: 35 - this.zk,
        width: 130 + 2 * this.zk,
        height: 2 * this.zk,
        rx: this.zk,
        ry: this.zk
    }, a);
    this.GC = g.g.o.K("path", {
        "class": "sliderKnob",
        d: "m 0,0 l -8,8 v 12 h 16 v -12 z"
    }, a);
    this.gx = g.g.o.K("circle", {
        style: "opacity: 0",
        r: this.zk,
        cy: 35
    }, a);
    for (this.setValue(.5); a && "svg" != a.nodeName.toLowerCase();) a =
        a.parentNode;
    this.Za = a;
    Ne(this.gx, "mousedown", this, this.FC);
    Ne(this.gx, "touchstart", this, this.FC);
    Ne(this.nL, "mousedown", this, this.tK);
    Ne(this.Za, "mouseup", null, Oe);
    Ne(this.Za, "touchend", null, Oe);
    Ne(this.Za, "mousemove", null, Pe);
    Ne(this.Za, "touchmove", null, Pe);
    Ne(document, "mouseover", null, Qe)
}
var Re = null,
    Se = 0,
    Te = 0;
Me.prototype.FC = function(a) {
    if ("touchstart" == a.type) {
        if (1 != a.changedTouches.length) return;
        Ue(a)
    }
    Re = this;
    Se = Ve(this, a).x;
    Te = 0;
    var c = this.GC.getAttribute("transform");
    c && (c = c.match(/translate\(\s*([-\d.]+)/)) && (Te = Number(c[1]));
    a.preventDefault()
};

function Oe() {
    Re = null
}

function Qe(a) {
    if (Re) {
        a = a.target;
        do
            if (a == Re.Za) return; while (a = a.parentNode);
        Re = null
    }
}

function Pe(a) {
    var c = Re;
    if (c) {
        if ("touchmove" == a.type) {
            if (1 != a.changedTouches.length) return;
            Ue(a)
        }
        a = Ve(c, a).x - Se + Te;
        c.setValue((a - c.am) / (c.su - c.am))
    }
}
Me.prototype.tK = function(a) {
    if ("touchstart" == a.type) {
        if (1 != a.changedTouches.length) return;
        Ue(a)
    }
    a = Ve(this, a).x;
    We(this, (a - this.am) / (this.su - this.am))
};
Me.prototype.getValue = function() {
    return this.ib
};

function We(a, c) {
    function d(h) {
        return function() {
            a.setValue(h * (c - e) / 9 + e)
        }
    }
    for (; a.kv.length;) clearTimeout(a.kv.pop());
    for (var e = a.getValue(), f = 0; 10 > f; f++) a.kv.push(setTimeout(d(f), 200 * f / 10))
}
Me.prototype.setValue = function(a) {
    this.ib = g.g.od.vm(a, 0, 1);
    a = this.am + (this.su - this.am) * this.ib;
    this.GC.setAttribute("transform", "translate(" + a + "," + this.MF + ")");
    this.gx.setAttribute("cx", a);
    this.WA && this.WA(this.ib)
};

function Ve(a, c) {
    var d = a.Za.createSVGPoint();
    d.x = c.clientX;
    d.y = c.clientY;
    a = a.Za.getScreenCTM().inverse();
    return d.matrixTransform(a)
}

function Ne(a, c, d, e) {
    a.addEventListener(c, function(f) {
        e.apply(d, arguments)
    }, !1)
}

function Ue(a) {
    var c = a.changedTouches[0];
    a.clientX = c.clientX;
    a.clientY = c.clientY
};
var Xe, N, Ye, O, Ze, $e, af, bf;

function cf() {
    function a(d) {
        for (var e = 0; 5 > e; e++) P(d), Q(144)
    }
    switch (K) {
        case 1:
            for (var c = 0; 4 > c; c++) P(100), Q(90);
            break;
        case 2:
            for (c = 0; 5 > c; c++) P(100), Q(72);
            break;
        case 3:
            R("#ffff00");
            a(100);
            break;
        case 4:
            R("#ffff00");
            a(50);
            V(!1);
            P(150);
            V(!0);
            P(20);
            break;
        case 5:
            R("#ffff00");
            for (c = 0; 4 > c; c++) V(!1), P(150), Q(90), V(!0), a(50);
            break;
        case 6:
            R("#ffff00");
            for (c = 0; 3 > c; c++) V(!1), P(150), Q(120), V(!0), a(50);
            V(!1);
            Q(-90);
            P(100);
            V(!0);
            R("#ffffff");
            P(50);
            break;
        case 7:
            R("#ffff00");
            for (c = 0; 3 > c; c++) V(!1), P(150), Q(120), V(!0),
                a(50);
            V(!1);
            Q(-90);
            P(100);
            V(!0);
            R("#ffffff");
            for (c = 0; 4 > c; c++) P(50), P(-50), Q(45);
            break;
        case 8:
            R("#ffff00");
            for (c = 0; 3 > c; c++) V(!1), P(150), Q(120), V(!0), a(50);
            V(!1);
            Q(-90);
            P(100);
            V(!0);
            R("#ffffff");
            for (c = 0; 360 > c; c++) P(50), P(-50), Q(1);
            break;
        case 9:
            R("#ffff00");
            for (c = 0; 3 > c; c++) V(!1), P(150), Q(120), V(!0), a(50);
            V(!1);
            Q(-90);
            P(100);
            V(!0);
            R("#ffffff");
            for (c = 0; 360 > c; c++) P(50), P(-50), Q(1);
            Q(120);
            P(20);
            R("#000000");
            for (c = 0; 360 > c; c++) P(50), P(-50), Q(1)
    }
}

function df(a) {
    if (10 == K) return 1 < z(u).length;
    console.log("Pixel errors: " + a);
    if (a > (9 == K ? 600 : 8 == K ? 150 : 100)) return !1;
    a = z(u).length;
    return 2 >= K && 3 < a || 3 == K && 4 < a || 5 == K && 10 < a ? (a = document.getElementById("helpUseLoop"), M.Cl(a, null, !1, !0, {
        width: "30%",
        left: "35%",
        top: "12em"
    }, M.Ry), M.Py(), !1) : !0
};
g.W.rb = {};
g.ca = {};
g.ca.LE = {};
g.ca.LE.Xl = 20;
g.ej([{
    type: "colour_picker",
    message0: "%1",
    args0: [{
        type: "field_colour",
        name: "COLOUR",
        colour: "#ff0000"
    }],
    output: "Colour",
    helpUrl: "%{BKY_COLOUR_PICKER_HELPURL}",
    style: "colour_blocks",
    tooltip: "%{BKY_COLOUR_PICKER_TOOLTIP}",
    extensions: ["parent_tooltip_when_inline"]
}, {
    type: "colour_random",
    message0: "%{BKY_COLOUR_RANDOM_TITLE}",
    output: "Colour",
    helpUrl: "%{BKY_COLOUR_RANDOM_HELPURL}",
    style: "colour_blocks",
    tooltip: "%{BKY_COLOUR_RANDOM_TOOLTIP}"
}, {
    type: "colour_rgb",
    message0: "%{BKY_COLOUR_RGB_TITLE} %{BKY_COLOUR_RGB_RED} %1 %{BKY_COLOUR_RGB_GREEN} %2 %{BKY_COLOUR_RGB_BLUE} %3",
    args0: [{
        type: "input_value",
        name: "RED",
        check: "Number",
        align: "RIGHT"
    }, {
        type: "input_value",
        name: "GREEN",
        check: "Number",
        align: "RIGHT"
    }, {
        type: "input_value",
        name: "BLUE",
        check: "Number",
        align: "RIGHT"
    }],
    output: "Colour",
    helpUrl: "%{BKY_COLOUR_RGB_HELPURL}",
    style: "colour_blocks",
    tooltip: "%{BKY_COLOUR_RGB_TOOLTIP}"
}, {
    type: "colour_blend",
    message0: "%{BKY_COLOUR_BLEND_TITLE} %{BKY_COLOUR_BLEND_COLOUR1} %1 %{BKY_COLOUR_BLEND_COLOUR2} %2 %{BKY_COLOUR_BLEND_RATIO} %3",
    args0: [{
        type: "input_value",
        name: "COLOUR1",
        check: "Colour",
        align: "RIGHT"
    }, {
        type: "input_value",
        name: "COLOUR2",
        check: "Colour",
        align: "RIGHT"
    }, {
        type: "input_value",
        name: "RATIO",
        check: "Number",
        align: "RIGHT"
    }],
    output: "Colour",
    helpUrl: "%{BKY_COLOUR_BLEND_HELPURL}",
    style: "colour_blocks",
    tooltip: "%{BKY_COLOUR_BLEND_TOOLTIP}"
}]);
g.Fa = function(a, c, d) {
    "function" != typeof a && g.Fa.ZD(a);
    this.an = a;
    this.Sy = this.ny = this.ws = null;
    a = this.an;
    if (Array.isArray(a)) {
        for (var e = !1, f = 0; f < a.length; f++) {
            var h = a[f][0];
            "string" == typeof h ? a[f][0] = g.g.Ic(h) : (null != h.alt && (a[f][0].alt = g.g.Ic(h.alt)), e = !0)
        }
        if (!(e || 2 > a.length)) {
            e = [];
            for (f = 0; f < a.length; f++) e.push(a[f][0]);
            f = g.g.Ab.Ky(e);
            h = g.g.Ab.TH(e, f);
            var k = g.g.Ab.UH(e, f);
            !h && !k || f <= h + k || (h && (this.ny = e[0].substring(0, h - 1)), k && (this.Sy = e[0].substr(1 - k)), this.an = g.Fa.yH(a, h, k))
        }
    }
    this.kn = this.getOptions(!1)[0];
    g.Fa.v.constructor.call(this, this.kn[1], c, d);
    this.sn = this.nf = this.fe = this.je = this.Up = null
};
g.g.object.X(g.Fa, g.hd);
g.Fa.ma = function(a) {
    return new g.Fa(a.options, void 0, a)
};
g.Fa.prototype.Mk = function(a) {
    bc(this) && this.getOptions(!1);
    this.setValue(a.textContent)
};
g.Fa.prototype.wk = !0;
g.Fa.PL = 25;
g.Fa.oN = .45;
g.Fa.DF = 5;
g.Fa.EF = 2 * g.Fa.DF;
g.Fa.kz = g.g.userAgent.Dn ? "\u25bc" : "\u25be";
b = g.Fa.prototype;
b.yi = "default";
b.Rh = function() {
    this.Ly() ? Pb(this) : this.Vr = this.H.Na();
    Qb(this);
    this.fe = g.g.o.K(g.g.D.Di, {}, this.$d);
    this.V().kF ? (this.sn = g.g.o.K(g.g.D.Di, {
        height: this.V().Mn + "px",
        width: this.V().Mn + "px"
    }, this.$d), this.sn.setAttributeNS(g.g.o.mf, "xlink:href", this.V().lF)) : (this.nf = g.g.o.K(g.g.D.wA, {}, this.Kc), this.nf.appendChild(document.createTextNode(this.H.M ? g.Fa.kz + " " : " " + g.Fa.kz)), this.H.M ? this.Kc.insertBefore(this.nf, this.ji) : this.Kc.appendChild(this.nf));
    this.xb && g.g.o.Ga(this.xb, "blocklyDropdownRect")
};
b.Ly = function() {
    return !this.V().ju || this.V().ju && !this.H.Sa
};
b.If = function(a) {
    this.pw();
    this.je.Yx = a && "number" === typeof a.clientX ? new g.g.ba(a.clientX, a.clientY) : null;
    this.je.Ja(g.G.OB());
    g.g.o.Ga(this.je.Jb, "blocklyDropdownMenu");
    if (this.V().jF) {
        a = this.H.Sa ? this.H.getParent().Ew() : this.H.Ew();
        var c = this.H.Sa ? this.H.getParent().style.Eh : this.H.style.Eh;
        g.G.td(a, c)
    }
    g.G.ED(this, this.qw.bind(this));
    this.je.focus();
    this.Up && this.je.fg(this.Up);
    this.jc()
};
b.pw = function() {
    var a = new g.yu;
    a.me(g.g.$.Sf.QF);
    this.je = a;
    var c = this.getOptions(!1);
    this.Up = null;
    for (var d = 0; d < c.length; d++) {
        var e = c[d][0],
            f = c[d][1];
        if ("object" == typeof e) {
            var h = new Image(e.width, e.height);
            h.src = e.src;
            h.alt = e.alt || "";
            e = h
        }
        e = new g.zu(e, f);
        e.me(g.g.$.Sf.lG);
        e.By = this.H.M;
        e.Ev = !0;
        a.dg.push(e);
        e.Fv = f == this.ib;
        f == this.ib && (this.Up = e);
        rc(e, this.bJ, this)
    }
};
b.qw = function() {
    this.je && this.je.J();
    this.Up = this.je = null;
    this.jc()
};
b.bJ = function(a) {
    g.G.Qm(this, !0);
    this.fD(a)
};
b.fD = function(a) {
    this.setValue(a.getValue())
};
g.Fa.yH = function(a, c, d) {
    for (var e = [], f = 0; f < a.length; f++) {
        var h = a[f][0],
            k = a[f][1];
        h = h.substring(c, h.length - d);
        e[f] = [h, k]
    }
    return e
};

function bc(a) {
    return "function" == typeof a.an
}
b = g.Fa.prototype;
b.getOptions = function(a) {
    return bc(this) ? (this.ws && a || (this.ws = this.an.call(this), g.Fa.ZD(this.ws)), this.ws) : this.an
};
b.Kh = function(a) {
    for (var c = !1, d = this.getOptions(!0), e = 0, f; f = d[e]; e++)
        if (f[1] == a) {
            c = !0;
            break
        } return c ? a : (this.H && console.warn("Cannot set the dropdown's value to an unavailable option. Block type: " + this.H.type + ", Field name: " + this.name + ", Value: " + a), null)
};
b.Qe = function(a) {
    g.Fa.v.Qe.call(this, a);
    a = this.getOptions(!0);
    for (var c = 0, d; d = a[c]; c++) d[1] == this.ib && (this.kn = d)
};
b.jc = function() {
    this.xb && (this.xb.setAttribute("stroke", this.H.style.Eh), this.je ? this.xb.setAttribute("fill", this.H.style.Eh) : this.xb.setAttribute("fill", "transparent"));
    this.H && this.nf && (this.nf.style.fill = this.H.Sa ? this.H.style.Xr : this.H.style.Yi)
};
b.xl = function() {
    this.ji.nodeValue = "";
    this.fe.style.display = "none";
    var a = this.kn && this.kn[0];
    if (a && "object" == typeof a) {
        this.fe.style.display = "";
        this.fe.setAttributeNS(g.g.o.mf, "xlink:href", a.src);
        this.fe.setAttribute("height", a.height);
        this.fe.setAttribute("width", a.width);
        var c = Number(a.height);
        a = Number(a.width);
        var d = !!this.xb,
            e = Math.max(d ? this.V().Hz : 0, c + g.Fa.EF);
        d = d ? this.V().mh : 0;
        var f = this.sn ? ff(this, a + d, e / 2 - this.V().Mn / 2) : g.g.o.ys(this.nf, this.V().rg, this.V().oh, this.V().nh);
        this.Jc.width = a +
            f + 2 * d;
        this.Jc.height = e;
        var h = 0;
        this.H.M ? this.fe.setAttribute("x", d + f) : (h = a + f, this.Kc.setAttribute("text-anchor", "end"), this.fe.setAttribute("x", d));
        this.fe.setAttribute("y", e / 2 - c / 2);
        Sb(this, h + d, a + f)
    } else this.ji.nodeValue = this.Km(), g.g.o.Ga(this.Kc, "blocklyDropdownText"), this.Kc.setAttribute("text-anchor", "start"), e = !!this.xb, c = Math.max(e ? this.V().Hz : 0, this.V().jk), a = g.g.o.ys(this.Kc, this.V().rg, this.V().oh, this.V().nh), e = e ? this.V().mh : 0, d = 0, this.sn && (d = ff(this, a + e, c / 2 - this.V().Mn / 2)), this.Jc.width =
        a + d + 2 * e, this.Jc.height = c, Sb(this, e, a);
    Tb(this)
};

function ff(a, c, d) {
    if (!a.sn) return 0;
    var e = a.xb ? a.V().mh : 0,
        f = a.V().mF,
        h = a.V().Mn;
    a.sn.setAttribute("transform", "translate(" + (a.H.M ? e : c + f) + "," + d + ")");
    return h + f
}
b.Bs = function() {
    if (!this.kn) return null;
    var a = this.kn[0];
    return "object" == typeof a ? a.alt : a
};
g.Fa.ZD = function(a) {
    if (!Array.isArray(a)) throw TypeError("FieldDropdown options must be an array.");
    if (!a.length) throw TypeError("FieldDropdown options must not be an empty array.");
    for (var c = !1, d = 0; d < a.length; ++d) {
        var e = a[d];
        Array.isArray(e) ? "string" != typeof e[1] ? (c = !0, console.error("Invalid option[" + d + "]: Each FieldDropdown option id must be a string. Found " + e[1] + " in: ", e)) : e[0] && "string" != typeof e[0] && "string" != typeof e[0].src && (c = !0, console.error("Invalid option[" + d + "]: Each FieldDropdown option must have a string label or image description. Found" +
            e[0] + " in: ", e)) : (c = !0, console.error("Invalid option[" + d + "]: Each FieldDropdown option must be an array. Found: ", e))
    }
    if (c) throw TypeError("Found invalid FieldDropdown options.");
};
g.ve.register("field_dropdown", g.Fa);
g.wc = function(a) {
    g.wc.v.constructor.call(this, null);
    this.vD = a
};
g.g.object.X(g.wc, g.pe);
b = g.wc.prototype;
b.s = null;
b.An = 0;
b.zq = 0;
b.jw = function(a) {
    g.g.o.K(g.g.D.Hb, {
        "class": "blocklyIconShape",
        rx: "4",
        ry: "4",
        height: "16",
        width: "16"
    }, a);
    g.g.o.K(g.g.D.re, {
        "class": "blocklyIconSymbol",
        d: "m4.203,7.296 0,1.368 -0.92,0.677 -0.11,0.41 0.9,1.559 0.41,0.11 1.043,-0.457 1.187,0.683 0.127,1.134 0.3,0.3 1.8,0 0.3,-0.299 0.127,-1.138 1.185,-0.682 1.046,0.458 0.409,-0.11 0.9,-1.559 -0.11,-0.41 -0.92,-0.677 0,-1.366 0.92,-0.677 0.11,-0.41 -0.9,-1.559 -0.409,-0.109 -1.046,0.458 -1.185,-0.682 -0.127,-1.138 -0.3,-0.299 -1.8,0 -0.3,0.3 -0.126,1.135 -1.187,0.682 -1.043,-0.457 -0.41,0.11 -0.899,1.559 0.108,0.409z"
    }, a);
    g.g.o.K(g.g.D.Nq, {
        "class": "blocklyIconShape",
        r: "2.7",
        cx: "8",
        cy: "8"
    }, a)
};
b.Uw = function(a) {
    this.U.ge() && g.pe.prototype.Uw.call(this, a)
};
b.Ov = function() {
    this.iq = g.g.o.K(g.g.D.yk, {
        x: g.xa.xd,
        y: g.xa.xd
    }, null);
    if (this.vD.length)
        for (var a = g.g.xml.createElement("xml"), c = 0, d; d = this.vD[c]; c++) {
            var e = g.g.xml.createElement("block");
            e.setAttribute("type", d);
            a.appendChild(e)
        } else a = null;
    c = new g.Sd({
        disable: !1,
        parentWorkspace: this.U.u,
        media: this.U.u.options.Ij,
        rtl: this.U.M,
        horizontalLayout: !1,
        renderer: this.U.u.options.Pp,
        rendererOverrides: this.U.u.options.Qp
    });
    c.Lb = this.U.M ? g.g.Z.Ma.Qc : g.g.Z.Ma.Nb;
    if (d = !!a) c.Ug = g.g.Z.Lv(a);
    this.s = new g.bd(c);
    this.s.qp = !0;
    C(this.s, g.h.oI);
    a = d ? id(this.s, g.g.D.oc) : null;
    c = this.s.eb("blocklyMutatorBackground");
    a && c.insertBefore(a, this.s.Bb);
    this.iq.appendChild(c);
    return this.iq
};
b.pi = function() {
    g.wc.v.pi.call(this);
    this.U.Yb || (this.U.ge() ? this.ee && g.g.o.Zb(this.ee, "blocklyIconGroupReadonly") : (this.ub(!1), this.ee && g.g.o.Ga(this.ee, "blocklyIconGroupReadonly")))
};

function gf(a) {
    var c = 2 * g.xa.xd,
        d = a.s.Bb.getBBox(),
        e = d.width + d.x,
        f = d.height + 3 * c,
        h = a.s.Se();
    if (h) {
        var k = h.s.ke.jj();
        f = Math.max(f, k.height + 20);
        e += h.Qh()
    }
    a.U.M && (e = -d.x);
    e += 3 * c;
    if (Math.abs(a.An - e) > c || Math.abs(a.zq - f) > c) a.An = e, a.zq = f, a.kc.Vp(e + c, f + c), a.iq.setAttribute("width", a.An), a.iq.setAttribute("height", a.zq), jd(a.s, a.An, a.zq);
    a.U.M && a.s.Bb.setAttribute("transform", "translate(" + a.An + ",0)");
    a.s.resize()
}
b.WJ = function() {
    this.s && Uc(this.s)
};
b.ub = function(a) {
    if (a != this.isVisible())
        if (g.h.Ia(new(g.h.get(g.h.Zj))(this.U, a, "mutator")), a) {
            this.kc = new g.xa(this.U.u, this.Ov(), this.U.sb.Gb, this.pj, null, null);
            Ua(this.kc, this.U.id);
            Wa(this.kc, this.WJ.bind(this));
            var c = this.s.options.Ug;
            a = this.s.Se();
            c && (a.T(this.s), a.show(c));
            this.bh = this.U.Ig(this.s);
            c = p(this.bh, !1);
            for (var d = 0, e; e = c[d]; d++) e.Ja();
            this.bh.Gt(!1);
            this.bh.Uv = !1;
            a ? (c = 2 * a.Mb, a = this.bh.M ? a.Qh() + c : c) : a = c = 16;
            this.U.M && (a = -a);
            this.bh.moveBy(a, c);
            if (this.U.Tp) {
                var f = this,
                    h = this.U;
                h.Tp(this.bh);
                this.Lt = function() {
                    h.Tp(f.bh)
                };
                C(this.U.u, this.Lt)
            }
            gf(this);
            C(this.s, this.zL.bind(this));
            this.jc()
        } else this.iq = null, this.s.J(), this.bh = this.s = null, this.kc.J(), this.kc = null, this.zq = this.An = 0, this.Lt && (Ra(this.U.u, this.Lt), this.Lt = null)
};
b.zL = function(a) {
    if (!(a.ex || a.type == g.h.ck && "disabled" == a.element)) {
        if (!this.s.Ac()) {
            a = this.s.zc(!1);
            for (var c = 0, d; d = a[c]; c++) {
                var e = d.kb();
                20 > e.y && d.moveBy(0, 20 - e.y);
                if (d.M) {
                    var f = -20,
                        h = this.s.Se();
                    h && (f -= h.Qh());
                    e.x > f && d.moveBy(f - e.x, 0)
                } else 20 > e.x && d.moveBy(20 - e.x, 0)
            }
        }
        if (this.bh.u == this.s) {
            g.h.oa(!0);
            d = this.U;
            a = (a = d.Wa()) && g.O.Zd(a);
            c = d.ua;
            d.ua = !1;
            d.Eg(this.bh);
            d.ua = c;
            d.xe();
            d.ua && d.Ja();
            c = (c = d.Wa()) && g.O.Zd(c);
            if (a != c) {
                g.h.Ia(new(g.h.get(g.h.lg))(d, "mutation", null, a, c));
                var k = g.h.tc();
                setTimeout(function() {
                    g.h.oa(k);
                    d.bc();
                    g.h.oa(!1)
                }, g.Kq)
            }
            this.s.Ac() || gf(this);
            g.h.oa(!1)
        }
    }
};
b.J = function() {
    this.U.qd = null;
    g.pe.prototype.J.call(this)
};
g.wc.vl = function(a, c, d) {
    if (!a || !a.ea().u) return !1;
    d = w(c, d).connection;
    var e = a.ra();
    return e && e != c || d.va == a ? !1 : (d.isConnected() && d.disconnect(), d.connect(a), !0)
};
g.wc.HB = function(a) {
    var c = null;
    if (a && a.options) {
        var d = a.options.uc;
        a.ag ? d && d.options && (c = d.options.uc) : d && (c = d)
    }
    return c
};
g.ca.YF = {};
g.ca.YF.Xl = 260;
g.ej([{
    type: "lists_create_empty",
    message0: "%{BKY_LISTS_CREATE_EMPTY_TITLE}",
    output: "Array",
    style: "list_blocks",
    tooltip: "%{BKY_LISTS_CREATE_EMPTY_TOOLTIP}",
    helpUrl: "%{BKY_LISTS_CREATE_EMPTY_HELPURL}"
}, {
    type: "lists_repeat",
    message0: "%{BKY_LISTS_REPEAT_TITLE}",
    args0: [{
        type: "input_value",
        name: "ITEM"
    }, {
        type: "input_value",
        name: "NUM",
        check: "Number"
    }],
    output: "Array",
    style: "list_blocks",
    tooltip: "%{BKY_LISTS_REPEAT_TOOLTIP}",
    helpUrl: "%{BKY_LISTS_REPEAT_HELPURL}"
}, {
    type: "lists_reverse",
    message0: "%{BKY_LISTS_REVERSE_MESSAGE0}",
    args0: [{
        type: "input_value",
        name: "LIST",
        check: "Array"
    }],
    output: "Array",
    inputsInline: !0,
    style: "list_blocks",
    tooltip: "%{BKY_LISTS_REVERSE_TOOLTIP}",
    helpUrl: "%{BKY_LISTS_REVERSE_HELPURL}"
}, {
    type: "lists_isEmpty",
    message0: "%{BKY_LISTS_ISEMPTY_TITLE}",
    args0: [{
        type: "input_value",
        name: "VALUE",
        check: ["String", "Array"]
    }],
    output: "Boolean",
    style: "list_blocks",
    tooltip: "%{BKY_LISTS_ISEMPTY_TOOLTIP}",
    helpUrl: "%{BKY_LISTS_ISEMPTY_HELPURL}"
}, {
    type: "lists_length",
    message0: "%{BKY_LISTS_LENGTH_TITLE}",
    args0: [{
        type: "input_value",
        name: "VALUE",
        check: ["String", "Array"]
    }],
    output: "Number",
    style: "list_blocks",
    tooltip: "%{BKY_LISTS_LENGTH_TOOLTIP}",
    helpUrl: "%{BKY_LISTS_LENGTH_HELPURL}"
}]);
g.W.lists_create_with = {
    T: function() {
        this.dc = g.i.LISTS_CREATE_WITH_HELPURL;
        this.Fb("list_blocks");
        this.ec = 3;
        this.wd();
        this.Md(!0, "Array");
        this.mn(new g.wc(["lists_create_with_item"]));
        this.Ra(g.i.LISTS_CREATE_WITH_TOOLTIP)
    },
    Wa: function() {
        var a = g.g.xml.createElement("mutation");
        a.setAttribute("items", this.ec);
        return a
    },
    yb: function(a) {
        this.ec = parseInt(a.getAttribute("items"), 10);
        this.wd()
    },
    Ig: function(a) {
        var c = a.Wg("lists_create_with_container");
        c.xe();
        for (var d = w(c, "STACK").connection, e = 0; e < this.ec; e++) {
            var f =
                a.Wg("lists_create_with_item");
            f.xe();
            d.connect(f.qa);
            d = f.aa
        }
        return c
    },
    Eg: function(a) {
        var c = H(a, "STACK");
        for (a = []; c && !c.nd();) a.push(c.yq), c = c.aa && c.aa.ra();
        for (c = 0; c < this.ec; c++) {
            var d = w(this, "ADD" + c).connection.va;
            d && -1 == a.indexOf(d) && d.disconnect()
        }
        this.ec = a.length;
        this.wd();
        for (c = 0; c < this.ec; c++) g.wc.vl(a[c], this, "ADD" + c)
    },
    Tp: function(a) {
        a = H(a, "STACK");
        for (var c = 0; a;) {
            var d = w(this, "ADD" + c);
            a.yq = d && d.connection.va;
            c++;
            a = a.aa && a.aa.ra()
        }
    },
    wd: function() {
        this.ec && w(this, "EMPTY") ? this.Db("EMPTY") :
            this.ec || w(this, "EMPTY") || E(G(this, "EMPTY"), g.i.LISTS_CREATE_EMPTY_TITLE);
        for (var a = 0; a < this.ec; a++)
            if (!w(this, "ADD" + a)) {
                var c = fc(F(this, "ADD" + a), g.Fq);
                0 == a && E(c, g.i.LISTS_CREATE_WITH_INPUT_WITH)
            } for (; w(this, "ADD" + a);) this.Db("ADD" + a), a++
    }
};
g.W.lists_create_with_container = {
    T: function() {
        this.Fb("list_blocks");
        E(G(this), g.i.LISTS_CREATE_WITH_CONTAINER_TITLE_ADD);
        jc(this, "STACK");
        this.Ra(g.i.LISTS_CREATE_WITH_CONTAINER_TOOLTIP);
        this.contextMenu = !1
    }
};
g.W.lists_create_with_item = {
    T: function() {
        this.Fb("list_blocks");
        E(G(this), g.i.LISTS_CREATE_WITH_ITEM_TITLE);
        this.Xc(!0);
        this.Wc(!0);
        this.Ra(g.i.LISTS_CREATE_WITH_ITEM_TOOLTIP);
        this.contextMenu = !1
    }
};
g.W.lists_indexOf = {
    T: function() {
        var a = [
            [g.i.LISTS_INDEX_OF_FIRST, "FIRST"],
            [g.i.LISTS_INDEX_OF_LAST, "LAST"]
        ];
        this.dc = g.i.LISTS_INDEX_OF_HELPURL;
        this.Fb("list_blocks");
        this.Md(!0, "Number");
        E(F(this, "VALUE").hb("Array"), g.i.LISTS_INDEX_OF_INPUT_IN_LIST);
        E(F(this, "FIND"), new g.Fa(a), "END");
        this.ye(!0);
        var c = this;
        this.Ra(function() {
            return g.i.LISTS_INDEX_OF_TOOLTIP.replace("%1", c.u.options.Df ? "0" : "-1")
        })
    }
};
g.W.lists_getIndex = {
    T: function() {
        var a = [
            [g.i.LISTS_GET_INDEX_GET, "GET"],
            [g.i.LISTS_GET_INDEX_GET_REMOVE, "GET_REMOVE"],
            [g.i.LISTS_GET_INDEX_REMOVE, "REMOVE"]
        ];
        this.cv = [
            [g.i.LISTS_GET_INDEX_FROM_START, "FROM_START"],
            [g.i.LISTS_GET_INDEX_FROM_END, "FROM_END"],
            [g.i.LISTS_GET_INDEX_FIRST, "FIRST"],
            [g.i.LISTS_GET_INDEX_LAST, "LAST"],
            [g.i.LISTS_GET_INDEX_RANDOM, "RANDOM"]
        ];
        this.dc = g.i.LISTS_GET_INDEX_HELPURL;
        this.Fb("list_blocks");
        a = new g.Fa(a, function(d) {
            d = "REMOVE" == d;
            this.ea().YD(d)
        });
        E(F(this, "VALUE").hb("Array"),
            g.i.LISTS_GET_INDEX_INPUT_IN_LIST);
        E(E(G(this), a, "MODE"), "", "SPACE");
        G(this, "AT");
        g.i.LISTS_GET_INDEX_TAIL && E(G(this, "TAIL"), g.i.LISTS_GET_INDEX_TAIL);
        this.ye(!0);
        this.Md(!0);
        this.mc(!0);
        var c = this;
        this.Ra(function() {
            var d = B(c, "MODE"),
                e = B(c, "WHERE"),
                f = "";
            switch (d + " " + e) {
                case "GET FROM_START":
                case "GET FROM_END":
                    f = g.i.LISTS_GET_INDEX_TOOLTIP_GET_FROM;
                    break;
                case "GET FIRST":
                    f = g.i.LISTS_GET_INDEX_TOOLTIP_GET_FIRST;
                    break;
                case "GET LAST":
                    f = g.i.LISTS_GET_INDEX_TOOLTIP_GET_LAST;
                    break;
                case "GET RANDOM":
                    f =
                        g.i.LISTS_GET_INDEX_TOOLTIP_GET_RANDOM;
                    break;
                case "GET_REMOVE FROM_START":
                case "GET_REMOVE FROM_END":
                    f = g.i.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM;
                    break;
                case "GET_REMOVE FIRST":
                    f = g.i.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST;
                    break;
                case "GET_REMOVE LAST":
                    f = g.i.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST;
                    break;
                case "GET_REMOVE RANDOM":
                    f = g.i.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM;
                    break;
                case "REMOVE FROM_START":
                case "REMOVE FROM_END":
                    f = g.i.LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM;
                    break;
                case "REMOVE FIRST":
                    f =
                        g.i.LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST;
                    break;
                case "REMOVE LAST":
                    f = g.i.LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST;
                    break;
                case "REMOVE RANDOM":
                    f = g.i.LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM
            }
            if ("FROM_START" == e || "FROM_END" == e) f += "  " + ("FROM_START" == e ? g.i.LISTS_INDEX_FROM_START_TOOLTIP : g.i.LISTS_INDEX_FROM_END_TOOLTIP).replace("%1", c.u.options.Df ? "#1" : "#0");
            return f
        })
    },
    Wa: function() {
        var a = g.g.xml.createElement("mutation");
        a.setAttribute("statement", !this.R);
        a.setAttribute("at", w(this, "AT").type == g.$b);
        return a
    },
    yb: function(a) {
        var c = "true" == a.getAttribute("statement");
        this.YD(c);
        a = "false" != a.getAttribute("at");
        this.mc(a)
    },
    YD: function(a) {
        a != !this.R && (y(this, !0), a ? (this.Md(!1), this.Xc(!0), this.Wc(!0)) : (this.Xc(!1), this.Wc(!1), this.Md(!0)))
    },
    mc: function(a) {
        this.Db("AT");
        this.Db("ORDINAL", !0);
        a ? (F(this, "AT").hb("Number"), g.i.ORDINAL_NUMBER_SUFFIX && E(G(this, "ORDINAL"), g.i.ORDINAL_NUMBER_SUFFIX)) : G(this, "AT");
        var c = new g.Fa(this.cv, function(d) {
            var e = "FROM_START" == d || "FROM_END" == d;
            if (e != a) {
                var f = this.ea();
                f.mc(e);
                hc(f, d, "WHERE");
                return null
            }
        });
        E(w(this, "AT"), c, "WHERE");
        g.i.LISTS_GET_INDEX_TAIL && oc(this, "TAIL", null)
    }
};
g.W.lists_setIndex = {
    T: function() {
        var a = [
            [g.i.LISTS_SET_INDEX_SET, "SET"],
            [g.i.LISTS_SET_INDEX_INSERT, "INSERT"]
        ];
        this.cv = [
            [g.i.LISTS_GET_INDEX_FROM_START, "FROM_START"],
            [g.i.LISTS_GET_INDEX_FROM_END, "FROM_END"],
            [g.i.LISTS_GET_INDEX_FIRST, "FIRST"],
            [g.i.LISTS_GET_INDEX_LAST, "LAST"],
            [g.i.LISTS_GET_INDEX_RANDOM, "RANDOM"]
        ];
        this.dc = g.i.LISTS_SET_INDEX_HELPURL;
        this.Fb("list_blocks");
        E(F(this, "LIST").hb("Array"), g.i.LISTS_SET_INDEX_INPUT_IN_LIST);
        E(E(G(this), new g.Fa(a), "MODE"), "", "SPACE");
        G(this, "AT");
        E(F(this,
            "TO"), g.i.LISTS_SET_INDEX_INPUT_TO);
        this.ye(!0);
        this.Xc(!0);
        this.Wc(!0);
        this.Ra(g.i.LISTS_SET_INDEX_TOOLTIP);
        this.mc(!0);
        var c = this;
        this.Ra(function() {
            var d = B(c, "MODE"),
                e = B(c, "WHERE"),
                f = "";
            switch (d + " " + e) {
                case "SET FROM_START":
                case "SET FROM_END":
                    f = g.i.LISTS_SET_INDEX_TOOLTIP_SET_FROM;
                    break;
                case "SET FIRST":
                    f = g.i.LISTS_SET_INDEX_TOOLTIP_SET_FIRST;
                    break;
                case "SET LAST":
                    f = g.i.LISTS_SET_INDEX_TOOLTIP_SET_LAST;
                    break;
                case "SET RANDOM":
                    f = g.i.LISTS_SET_INDEX_TOOLTIP_SET_RANDOM;
                    break;
                case "INSERT FROM_START":
                case "INSERT FROM_END":
                    f =
                        g.i.LISTS_SET_INDEX_TOOLTIP_INSERT_FROM;
                    break;
                case "INSERT FIRST":
                    f = g.i.LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST;
                    break;
                case "INSERT LAST":
                    f = g.i.LISTS_SET_INDEX_TOOLTIP_INSERT_LAST;
                    break;
                case "INSERT RANDOM":
                    f = g.i.LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM
            }
            if ("FROM_START" == e || "FROM_END" == e) f += "  " + g.i.LISTS_INDEX_FROM_START_TOOLTIP.replace("%1", c.u.options.Df ? "#1" : "#0");
            return f
        })
    },
    Wa: function() {
        var a = g.g.xml.createElement("mutation");
        a.setAttribute("at", w(this, "AT").type == g.$b);
        return a
    },
    yb: function(a) {
        a =
            "false" != a.getAttribute("at");
        this.mc(a)
    },
    mc: function(a) {
        this.Db("AT");
        this.Db("ORDINAL", !0);
        a ? (F(this, "AT").hb("Number"), g.i.ORDINAL_NUMBER_SUFFIX && E(G(this, "ORDINAL"), g.i.ORDINAL_NUMBER_SUFFIX)) : G(this, "AT");
        var c = new g.Fa(this.cv, function(d) {
            var e = "FROM_START" == d || "FROM_END" == d;
            if (e != a) {
                var f = this.ea();
                f.mc(e);
                hc(f, d, "WHERE");
                return null
            }
        });
        oc(this, "AT", "TO");
        w(this, "ORDINAL") && oc(this, "ORDINAL", "TO");
        E(w(this, "AT"), c, "WHERE")
    }
};
g.W.lists_getSublist = {
    T: function() {
        this.WHERE_OPTIONS_1 = [
            [g.i.LISTS_GET_SUBLIST_START_FROM_START, "FROM_START"],
            [g.i.LISTS_GET_SUBLIST_START_FROM_END, "FROM_END"],
            [g.i.LISTS_GET_SUBLIST_START_FIRST, "FIRST"]
        ];
        this.WHERE_OPTIONS_2 = [
            [g.i.LISTS_GET_SUBLIST_END_FROM_START, "FROM_START"],
            [g.i.LISTS_GET_SUBLIST_END_FROM_END, "FROM_END"],
            [g.i.LISTS_GET_SUBLIST_END_LAST, "LAST"]
        ];
        this.dc = g.i.LISTS_GET_SUBLIST_HELPURL;
        this.Fb("list_blocks");
        E(F(this, "LIST").hb("Array"), g.i.LISTS_GET_SUBLIST_INPUT_IN_LIST);
        G(this,
            "AT1");
        G(this, "AT2");
        g.i.LISTS_GET_SUBLIST_TAIL && E(G(this, "TAIL"), g.i.LISTS_GET_SUBLIST_TAIL);
        this.ye(!0);
        this.Md(!0, "Array");
        this.mc(1, !0);
        this.mc(2, !0);
        this.Ra(g.i.LISTS_GET_SUBLIST_TOOLTIP)
    },
    Wa: function() {
        var a = g.g.xml.createElement("mutation");
        a.setAttribute("at1", w(this, "AT1").type == g.$b);
        a.setAttribute("at2", w(this, "AT2").type == g.$b);
        return a
    },
    yb: function(a) {
        var c = "true" == a.getAttribute("at1");
        a = "true" == a.getAttribute("at2");
        this.mc(1, c);
        this.mc(2, a)
    },
    mc: function(a, c) {
        this.Db("AT" + a);
        this.Db("ORDINAL" +
            a, !0);
        c ? (F(this, "AT" + a).hb("Number"), g.i.ORDINAL_NUMBER_SUFFIX && E(G(this, "ORDINAL" + a), g.i.ORDINAL_NUMBER_SUFFIX)) : G(this, "AT" + a);
        var d = new g.Fa(this["WHERE_OPTIONS_" + a], function(e) {
            var f = "FROM_START" == e || "FROM_END" == e;
            if (f != c) {
                var h = this.ea();
                h.mc(a, f);
                hc(h, e, "WHERE" + a);
                return null
            }
        });
        E(w(this, "AT" + a), d, "WHERE" + a);
        1 == a && (oc(this, "AT1", "AT2"), w(this, "ORDINAL1") && oc(this, "ORDINAL1", "AT2"));
        g.i.LISTS_GET_SUBLIST_TAIL && oc(this, "TAIL", null)
    }
};
g.W.lists_sort = {
    T: function() {
        kc(this, {
            message0: g.i.LISTS_SORT_TITLE,
            args0: [{
                type: "field_dropdown",
                name: "TYPE",
                options: [
                    [g.i.LISTS_SORT_TYPE_NUMERIC, "NUMERIC"],
                    [g.i.LISTS_SORT_TYPE_TEXT, "TEXT"],
                    [g.i.LISTS_SORT_TYPE_IGNORECASE, "IGNORE_CASE"]
                ]
            }, {
                type: "field_dropdown",
                name: "DIRECTION",
                options: [
                    [g.i.LISTS_SORT_ORDER_ASCENDING, "1"],
                    [g.i.LISTS_SORT_ORDER_DESCENDING, "-1"]
                ]
            }, {
                type: "input_value",
                name: "LIST",
                check: "Array"
            }],
            output: "Array",
            style: "list_blocks",
            tooltip: g.i.LISTS_SORT_TOOLTIP,
            helpUrl: g.i.LISTS_SORT_HELPURL
        })
    }
};
g.W.lists_split = {
    T: function() {
        var a = this,
            c = new g.Fa([
                [g.i.LISTS_SPLIT_LIST_FROM_TEXT, "SPLIT"],
                [g.i.LISTS_SPLIT_TEXT_FROM_LIST, "JOIN"]
            ], function(d) {
                a.jg(d)
            });
        this.dc = g.i.LISTS_SPLIT_HELPURL;
        this.Fb("list_blocks");
        E(F(this, "INPUT").hb("String"), c, "MODE");
        E(F(this, "DELIM").hb("String"), g.i.LISTS_SPLIT_WITH_DELIMITER);
        this.ye(!0);
        this.Md(!0, "Array");
        this.Ra(function() {
            var d = B(a, "MODE");
            if ("SPLIT" == d) return g.i.LISTS_SPLIT_TOOLTIP_SPLIT;
            if ("JOIN" == d) return g.i.LISTS_SPLIT_TOOLTIP_JOIN;
            throw Error("Unknown mode: " +
                d);
        })
    },
    jg: function(a) {
        if (B(this, "MODE") != a) {
            var c = w(this, "INPUT").connection;
            c.nn(null);
            var d = c.ra();
            d && (c.disconnect(), d.Sa ? d.J() : this.bc())
        }
        "SPLIT" == a ? (this.R.hb("Array"), w(this, "INPUT").hb("String")) : (this.R.hb("String"), w(this, "INPUT").hb("Array"))
    },
    Wa: function() {
        var a = g.g.xml.createElement("mutation");
        a.setAttribute("mode", B(this, "MODE"));
        return a
    },
    yb: function(a) {
        this.jg(a.getAttribute("mode"))
    }
};
g.W.AJ = {};
g.ca.Fe = {};
g.ca.Fe.Xl = 210;
g.ej([{
    type: "logic_boolean",
    message0: "%1",
    args0: [{
        type: "field_dropdown",
        name: "BOOL",
        options: [
            ["%{BKY_LOGIC_BOOLEAN_TRUE}", "TRUE"],
            ["%{BKY_LOGIC_BOOLEAN_FALSE}", "FALSE"]
        ]
    }],
    output: "Boolean",
    style: "logic_blocks",
    tooltip: "%{BKY_LOGIC_BOOLEAN_TOOLTIP}",
    helpUrl: "%{BKY_LOGIC_BOOLEAN_HELPURL}"
}, {
    type: "controls_if",
    message0: "%{BKY_CONTROLS_IF_MSG_IF} %1",
    args0: [{
        type: "input_value",
        name: "IF0",
        check: "Boolean"
    }],
    message1: "%{BKY_CONTROLS_IF_MSG_THEN} %1",
    args1: [{
        type: "input_statement",
        name: "DO0"
    }],
    previousStatement: null,
    nextStatement: null,
    style: "logic_blocks",
    helpUrl: "%{BKY_CONTROLS_IF_HELPURL}",
    mutator: "controls_if_mutator",
    extensions: ["controls_if_tooltip"]
}, {
    type: "controls_ifelse",
    message0: "%{BKY_CONTROLS_IF_MSG_IF} %1",
    args0: [{
        type: "input_value",
        name: "IF0",
        check: "Boolean"
    }],
    message1: "%{BKY_CONTROLS_IF_MSG_THEN} %1",
    args1: [{
        type: "input_statement",
        name: "DO0"
    }],
    message2: "%{BKY_CONTROLS_IF_MSG_ELSE} %1",
    args2: [{
        type: "input_statement",
        name: "ELSE"
    }],
    previousStatement: null,
    nextStatement: null,
    style: "logic_blocks",
    tooltip: "%{BKYCONTROLS_IF_TOOLTIP_2}",
    helpUrl: "%{BKY_CONTROLS_IF_HELPURL}",
    extensions: ["controls_if_tooltip"]
}, {
    type: "logic_compare",
    message0: "%1 %2 %3",
    args0: [{
        type: "input_value",
        name: "A"
    }, {
        type: "field_dropdown",
        name: "OP",
        options: [
            ["=", "EQ"],
            ["\u2260", "NEQ"],
            ["\u200f<", "LT"],
            ["\u200f\u2264", "LTE"],
            ["\u200f>", "GT"],
            ["\u200f\u2265", "GTE"]
        ]
    }, {
        type: "input_value",
        name: "B"
    }],
    inputsInline: !0,
    output: "Boolean",
    style: "logic_blocks",
    helpUrl: "%{BKY_LOGIC_COMPARE_HELPURL}",
    extensions: ["logic_compare", "logic_op_tooltip"]
}, {
    type: "logic_operation",
    message0: "%1 %2 %3",
    args0: [{
        type: "input_value",
        name: "A",
        check: "Boolean"
    }, {
        type: "field_dropdown",
        name: "OP",
        options: [
            ["%{BKY_LOGIC_OPERATION_AND}", "AND"],
            ["%{BKY_LOGIC_OPERATION_OR}", "OR"]
        ]
    }, {
        type: "input_value",
        name: "B",
        check: "Boolean"
    }],
    inputsInline: !0,
    output: "Boolean",
    style: "logic_blocks",
    helpUrl: "%{BKY_LOGIC_OPERATION_HELPURL}",
    extensions: ["logic_op_tooltip"]
}, {
    type: "logic_negate",
    message0: "%{BKY_LOGIC_NEGATE_TITLE}",
    args0: [{
        type: "input_value",
        name: "BOOL",
        check: "Boolean"
    }],
    output: "Boolean",
    style: "logic_blocks",
    tooltip: "%{BKY_LOGIC_NEGATE_TOOLTIP}",
    helpUrl: "%{BKY_LOGIC_NEGATE_HELPURL}"
}, {
    type: "logic_null",
    message0: "%{BKY_LOGIC_NULL}",
    output: null,
    style: "logic_blocks",
    tooltip: "%{BKY_LOGIC_NULL_TOOLTIP}",
    helpUrl: "%{BKY_LOGIC_NULL_HELPURL}"
}, {
    type: "logic_ternary",
    message0: "%{BKY_LOGIC_TERNARY_CONDITION} %1",
    args0: [{
        type: "input_value",
        name: "IF",
        check: "Boolean"
    }],
    message1: "%{BKY_LOGIC_TERNARY_IF_TRUE} %1",
    args1: [{
        type: "input_value",
        name: "THEN"
    }],
    message2: "%{BKY_LOGIC_TERNARY_IF_FALSE} %1",
    args2: [{
        type: "input_value",
        name: "ELSE"
    }],
    output: null,
    style: "logic_blocks",
    tooltip: "%{BKY_LOGIC_TERNARY_TOOLTIP}",
    helpUrl: "%{BKY_LOGIC_TERNARY_HELPURL}",
    extensions: ["logic_ternary"]
}]);
g.ej([{
    type: "controls_if_if",
    message0: "%{BKY_CONTROLS_IF_IF_TITLE_IF}",
    nextStatement: null,
    enableContextMenu: !1,
    style: "logic_blocks",
    tooltip: "%{BKY_CONTROLS_IF_IF_TOOLTIP}"
}, {
    type: "controls_if_elseif",
    message0: "%{BKY_CONTROLS_IF_ELSEIF_TITLE_ELSEIF}",
    previousStatement: null,
    nextStatement: null,
    enableContextMenu: !1,
    style: "logic_blocks",
    tooltip: "%{BKY_CONTROLS_IF_ELSEIF_TOOLTIP}"
}, {
    type: "controls_if_else",
    message0: "%{BKY_CONTROLS_IF_ELSE_TITLE_ELSE}",
    previousStatement: null,
    enableContextMenu: !1,
    style: "logic_blocks",
    tooltip: "%{BKY_CONTROLS_IF_ELSE_TOOLTIP}"
}]);
g.ca.Fe.Vu = {
    EQ: "%{BKY_LOGIC_COMPARE_TOOLTIP_EQ}",
    NEQ: "%{BKY_LOGIC_COMPARE_TOOLTIP_NEQ}",
    LT: "%{BKY_LOGIC_COMPARE_TOOLTIP_LT}",
    LTE: "%{BKY_LOGIC_COMPARE_TOOLTIP_LTE}",
    GT: "%{BKY_LOGIC_COMPARE_TOOLTIP_GT}",
    GTE: "%{BKY_LOGIC_COMPARE_TOOLTIP_GTE}",
    AND: "%{BKY_LOGIC_OPERATION_TOOLTIP_AND}",
    OR: "%{BKY_LOGIC_OPERATION_TOOLTIP_OR}"
};
g.ga.register("logic_op_tooltip", g.ga.Nr("OP", g.ca.Fe.Vu));
g.ca.Fe.AE = {
    Re: 0,
    Vf: 0,
    Tj: !0,
    Wa: function() {
        if (!this.Re && !this.Vf) return null;
        var a = g.g.xml.createElement("mutation");
        this.Re && a.setAttribute("elseif", this.Re);
        this.Vf && a.setAttribute("else", 1);
        return a
    },
    yb: function(a) {
        this.Re = parseInt(a.getAttribute("elseif"), 10) || 0;
        this.Vf = parseInt(a.getAttribute("else"), 10) || 0;
        this.sK()
    },
    Ig: function(a) {
        var c = a.Wg("controls_if_if");
        c.xe();
        for (var d = c.aa, e = 1; e <= this.Re; e++) {
            var f = a.Wg("controls_if_elseif");
            f.xe();
            d.connect(f.qa);
            d = f.aa
        }
        this.Vf && (a = a.Wg("controls_if_else"),
            a.xe(), d.connect(a.qa));
        return c
    },
    Eg: function(a) {
        a = a.aa.ra();
        this.Vf = this.Re = 0;
        for (var c = [null], d = [null], e = null; a && !a.nd();) {
            switch (a.type) {
                case "controls_if_elseif":
                    this.Re++;
                    c.push(a.yq);
                    d.push(a.ii);
                    break;
                case "controls_if_else":
                    this.Vf++;
                    e = a.ii;
                    break;
                default:
                    throw TypeError("Unknown block type: " + a.type);
            }
            a = a.aa && a.aa.ra()
        }
        this.wd();
        this.wD(c, d, e)
    },
    Tp: function(a) {
        a = a.aa.ra();
        for (var c = 1; a;) {
            switch (a.type) {
                case "controls_if_elseif":
                    var d = w(this, "IF" + c),
                        e = w(this, "DO" + c);
                    a.yq = d && d.connection.va;
                    a.ii = e && e.connection.va;
                    c++;
                    break;
                case "controls_if_else":
                    e = w(this, "ELSE");
                    a.ii = e && e.connection.va;
                    break;
                default:
                    throw TypeError("Unknown block type: " + a.type);
            }
            a = a.aa && a.aa.ra()
        }
    },
    sK: function() {
        var a = [null],
            c = [null],
            d = null;
        w(this, "ELSE") && (d = w(this, "ELSE").connection.va);
        for (var e = 1; w(this, "IF" + e);) {
            var f = w(this, "DO" + e);
            a.push(w(this, "IF" + e).connection.va);
            c.push(f.connection.va);
            e++
        }
        this.wd();
        this.wD(a, c, d)
    },
    wd: function() {
        w(this, "ELSE") && this.Db("ELSE");
        for (var a = 1; w(this, "IF" + a);) this.Db("IF" +
            a), this.Db("DO" + a), a++;
        for (a = 1; a <= this.Re; a++) E(F(this, "IF" + a).hb("Boolean"), g.i.CONTROLS_IF_MSG_ELSEIF), E(jc(this, "DO" + a), g.i.CONTROLS_IF_MSG_THEN);
        this.Vf && E(jc(this, "ELSE"), g.i.CONTROLS_IF_MSG_ELSE)
    },
    wD: function(a, c, d) {
        for (var e = 1; e <= this.Re; e++) g.wc.vl(a[e], this, "IF" + e), g.wc.vl(c[e], this, "DO" + e);
        g.wc.vl(d, this, "ELSE")
    }
};
g.ga.Np("controls_if_mutator", g.ca.Fe.AE, null, ["controls_if_elseif", "controls_if_else"]);
g.ca.Fe.BE = function() {
    this.Ra(function() {
        if (this.Re || this.Vf) {
            if (!this.Re && this.Vf) return g.i.CONTROLS_IF_TOOLTIP_2;
            if (this.Re && !this.Vf) return g.i.CONTROLS_IF_TOOLTIP_3;
            if (this.Re && this.Vf) return g.i.CONTROLS_IF_TOOLTIP_4
        } else return g.i.CONTROLS_IF_TOOLTIP_1;
        return ""
    }.bind(this))
};
g.ga.register("controls_if_tooltip", g.ca.Fe.BE);
g.ca.Fe.UF = {
    onchange: function(a) {
        this.Hp || (this.Hp = [null, null]);
        var c = H(this, "A"),
            d = H(this, "B");
        c && d && !Ga(c.R, d.R) && (g.h.oa(a.group), a = this.Hp[0], a !== c && (y(c), !a || a.uf || a.Sa || w(this, "A").connection.connect(a.R)), c = this.Hp[1], c !== d && (y(d), !c || c.uf || c.Sa || w(this, "B").connection.connect(c.R)), this.bc(), g.h.oa(!1));
        this.Hp[0] = H(this, "A");
        this.Hp[1] = H(this, "B")
    }
};
g.ca.Fe.TF = function() {
    this.Kd(g.ca.Fe.UF)
};
g.ga.register("logic_compare", g.ca.Fe.TF);
g.ca.Fe.VF = {
    sD: null,
    onchange: function(a) {
        var c = H(this, "THEN"),
            d = H(this, "ELSE"),
            e = this.R.va;
        if ((c || d) && e)
            for (var f = 0; 2 > f; f++) {
                var h = 1 == f ? c : d;
                h && !Ga(h.R, e) && (g.h.oa(a.group), e === this.sD ? (y(this), e.ea().bc()) : (y(h), h.bc()), g.h.oa(!1))
            }
        this.sD = e
    }
};
g.ga.zt("logic_ternary", g.ca.Fe.VF);
g.Pc = function(a, c, d) {
    this.pn = !0;
    g.Pc.v.constructor.call(this, a, c, d);
    this.mt = this.$h = this.ed = null;
    this.vs = !1;
    this.s = null
};
g.g.object.X(g.Pc, g.hd);
g.Pc.prototype.fk = "";
g.Pc.ma = function(a) {
    var c = g.g.Ic(a.text);
    return new g.Pc(c, void 0, a)
};
g.Pc.prototype.wk = !0;
g.Pc.oz = 4;
b = g.Pc.prototype;
b.yi = "text";
b.cd = function(a) {
    g.Pc.v.cd.call(this, a);
    "boolean" == typeof a.spellcheck && (this.pn = a.spellcheck)
};
b.Rh = function() {
    if (this.V().Kz) {
        for (var a = 0, c = 0, d = 0, e; e = this.H.Y[d]; d++) {
            for (var f = 0; e.fb[f]; f++) a++;
            e.connection && c++
        }
        this.vs = 1 >= a && this.H.R && !c
    } else this.vs = !1;
    this.vs ? this.Vr = this.H.Na() : Pb(this);
    Qb(this)
};
b.Kh = function(a) {
    return null === a || void 0 === a ? null : String(a)
};
b.BB = function() {
    if (this.tj) {
        this.Os = !1;
        var a = this.ib;
        this.ib = this.ed.az;
        this.H && g.h.isEnabled() && g.h.Ia(new(g.h.get(g.h.lg))(this.H, "field", this.name || null, a, this.ib))
    }
};
b.Qe = function(a) {
    this.Os = !0;
    this.ib = a;
    this.tj || (this.Sg = !0)
};
b.jc = function() {
    this.H && this.V().Kz && (this.xb ? this.xb.setAttribute("stroke", this.H.style.Eh) : this.H.sb.Gb.setAttribute("fill", this.V().Fz))
};
b.xl = function() {
    g.Pc.v.xl.call(this);
    if (this.tj) {
        this.yl();
        var a = this.ed;
        this.Os ? (g.g.o.Zb(a, "blocklyInvalidInput"), g.g.$.lc(a, g.g.$.State.ir, !1)) : (g.g.o.Ga(a, "blocklyInvalidInput"), g.g.$.lc(a, g.g.$.State.ir, !0))
    }
};

function hf(a) {
    0 != a.pn && (a.pn = !1, a.ed && a.ed.setAttribute("spellcheck", a.pn))
}
b.If = function(a, c) {
    this.s = this.H.u;
    a = c || !1;
    !a && (g.g.userAgent.gG || g.g.userAgent.Dn || g.g.userAgent.Yl) ? jf(this) : (g.na.show(this, this.H.M, this.yL.bind(this)), this.ed = this.Vt(), this.tj = !0, a || (this.ed.focus({
        preventScroll: !0
    }), this.ed.select()))
};

function jf(a) {
    g.prompt(g.i.CHANGE_VALUE_TITLE, a.Hd(), function(c) {
        this.setValue(c)
    }.bind(a))
}
b.Vt = function() {
    var a = g.na.mb;
    g.g.o.Ga(Ob(this), "editing");
    var c = document.createElement("input");
    c.className = "blocklyHtmlInput";
    c.setAttribute("spellcheck", this.pn);
    var d = md(this.s),
        e = this.V().rg * d + "pt";
    a.style.fontSize = e;
    c.style.fontSize = e;
    e = g.Pc.oz * d + "px";
    if (this.vs) {
        e = cb(this);
        e = (e.bottom - e.top) / 2 + "px";
        var f = this.H.getParent() ? this.H.getParent().style.Eh : this.H.style.Eh;
        c.style.border = 1 * d + "px solid " + f;
        a.style.borderRadius = e;
        a.style.transition = "box-shadow 0.25s ease 0s";
        this.V().nF && (a.style.boxShadow =
            "rgba(255, 255, 255, 0.3) 0px 0px 0px " + 4 * d + "px")
    }
    c.style.borderRadius = e;
    a.appendChild(c);
    c.value = c.defaultValue = String(this.ib);
    c.az = this.ib;
    c.Kx = null;
    this.yl();
    kf(this, c);
    return c
};
b.yL = function() {
    this.tj = !1;
    this.Os = !0;
    Ub(this);
    this.Px && this.Px(this.ib);
    this.$h && (g.N.Pa(this.$h), this.$h = null);
    this.mt && (g.N.Pa(this.mt), this.mt = null);
    var a = g.na.mb.style;
    a.width = "auto";
    a.height = "auto";
    a.fontSize = "";
    a.transition = "";
    a.boxShadow = "";
    this.ed = null;
    g.g.o.Zb(Ob(this), "editing")
};

function kf(a, c) {
    a.$h = g.N.ta(c, "keydown", a, a.Qx);
    a.mt = g.N.ta(c, "input", a, a.ZJ)
}
b.Qx = function(a) {
    if (a.keyCode == g.g.la.Ln) g.na.$a(), g.G.nj();
    else if (a.keyCode == g.g.la.Cz) this.setValue(this.ed.az), g.na.$a(), g.G.nj();
    else if (a.keyCode == g.g.la.TG) {
        g.na.$a();
        g.G.nj();
        var c = this.H,
            d = !a.shiftKey,
            e = new g.Dr;
        Nb(e, g.I.zm(this));
        var f = e.Pe;
        d ? e.next() : e.di();
        (d = e.Pe) && d !== f && (f = d.Qa, Fb(f) && f.If(void 0), c.u.Zm && Nb(c.u.Jm(), d));
        a.preventDefault()
    }
};
b.ZJ = function() {
    var a = this.ed.value;
    a !== this.ed.Kx && (this.ed.Kx = a, g.h.oa(!0), this.setValue(a), Ub(this), this.yl(), g.h.oa(!1))
};
b.yl = function() {
    var a = g.na.mb,
        c = cb(this);
    a.style.width = c.right - c.left + "px";
    a.style.height = c.bottom - c.top + "px";
    c = new g.g.ba(this.H.M ? c.right - a.offsetWidth : c.left, c.top);
    a.style.left = c.x + "px";
    a.style.top = c.y + "px"
};
b.CC = function() {
    return !0
};
b.Bs = function() {
    return this.tj && this.ed ? this.ed.value : null
};
g.ve.register("field_input", g.Pc);
g.Ce = function(a, c, d, e, f, h) {
    this.yp = -Infinity;
    this.wp = Infinity;
    this.gn = 0;
    this.Sv = null;
    g.Ce.v.constructor.call(this, a, f, h);
    h || (lf(this, c), mf(this, d), nf(this, e), this.setValue(this.getValue()))
};
g.g.object.X(g.Ce, g.Pc);
g.Ce.prototype.fk = 0;
g.Ce.ma = function(a) {
    return new g.Ce(a.value, void 0, void 0, void 0, void 0, a)
};
g.Ce.prototype.wk = !0;
g.Ce.prototype.cd = function(a) {
    g.Ce.v.cd.call(this, a);
    lf(this, a.min);
    mf(this, a.max);
    nf(this, a.precision)
};

function lf(a, c) {
    null == c ? a.yp = -Infinity : (c = Number(c), isNaN(c) || (a.yp = c))
}

function mf(a, c) {
    null == c ? a.wp = Infinity : (c = Number(c), isNaN(c) || (a.wp = c))
}

function nf(a, c) {
    a.gn = Number(c) || 0;
    var d = String(a.gn); - 1 != d.indexOf("e") && (d = a.gn.toLocaleString("en-US", {
        maximumFractionDigits: 20
    }));
    var e = d.indexOf(".");
    a.Sv = -1 == e ? c ? 0 : null : d.length - e - 1
}
g.Ce.prototype.Kh = function(a) {
    if (null === a) return null;
    a = String(a);
    a = a.replace(/O/ig, "0");
    a = a.replace(/,/g, "");
    a = a.replace(/infinity/i, "Infinity");
    a = Number(a || 0);
    if (isNaN(a)) return null;
    a = Math.min(Math.max(a, this.yp), this.wp);
    this.gn && isFinite(a) && (a = Math.round(a / this.gn) * this.gn);
    null != this.Sv && (a = Number(a.toFixed(this.Sv)));
    return a
};
g.Ce.prototype.Vt = function() {
    var a = g.Ce.v.Vt.call(this); - Infinity < this.yp && g.g.$.lc(a, g.g.$.State.hH, this.yp);
    Infinity > this.wp && g.g.$.lc(a, g.g.$.State.gH, this.wp);
    return a
};
g.ve.register("field_number", g.Ce);
g.De = function(a, c, d, e, f) {
    this.an = g.De.vI;
    this.iI = "string" === typeof a ? a : "";
    this.Jc = new g.g.ad(0, 0);
    f && this.cd(f);
    c && (this.Il = c);
    f || of (this, d, e)
};
g.g.object.X(g.De, g.Fa);
g.De.ma = function(a) {
    var c = g.g.Ic(a.variable);
    return new g.De(c, void 0, void 0, void 0, a)
};
b = g.De.prototype;
b.wk = !0;
b.cd = function(a) {
    g.De.v.cd.call(this, a); of (this, a.variableTypes, a.defaultType)
};
b.Vk = function() {
    if (!this.Ae) {
        var a = g.ka.As(this.H.u, null, this.iI, this.hI);
        this.Qe(a.Oa())
    }
};
b.Ly = function() {
    return g.De.v.Ly.call(this) && (!this.V().ju || "variables_get" != this.H.type)
};
b.Mk = function(a) {
    var c = a.getAttribute("id"),
        d = a.textContent,
        e = a.getAttribute("variabletype") || a.getAttribute("variableType") || "";
    c = g.ka.As(this.H.u, c, d, e);
    if (null != e && e !== c.type) throw Error("Serialized variable type with id '" + c.Oa() + "' had type " + c.type + ", and does not match variable field that references it: " + g.O.Zd(a) + ".");
    this.setValue(c.Oa())
};
b.Uy = function(a) {
    this.Vk();
    a.id = this.Ae.Oa();
    a.textContent = this.Ae.name;
    this.Ae.type && a.setAttribute("variabletype", this.Ae.type);
    return a
};
b.Iy = function(a) {
    if (a.Sa) throw Error("Variable fields are not allowed to exist on shadow blocks.");
    g.De.v.Iy.call(this, a)
};
b.getValue = function() {
    return this.Ae ? this.Ae.Oa() : null
};
b.Hd = function() {
    return this.Ae ? this.Ae.name : ""
};
b.Id = function() {
    return this.Ae
};
b.fC = function() {
    return this.Ae ? this.Il : null
};
b.Kh = function(a) {
    if (null === a) return null;
    var c = g.ka.Id(this.H.u, a);
    if (!c) return console.warn("Variable id doesn't point to a real variable! ID was " + a), null;
    c = c.type;
    var d;
    a: if (d = pf(this)) {
        for (var e = 0; e < d.length; e++)
            if (c == d[e]) {
                d = !0;
                break a
            } d = !1
    } else d = !0;
    return d ? a : (console.warn("Variable type doesn't match this field!  Type was " + c), null)
};
b.Qe = function(a) {
    this.Ae = g.ka.Id(this.H.u, a);
    g.De.v.Qe.call(this, a)
};

function pf(a) {
    var c = a.uL;
    if (null === c && a.H && a.H.u) return a.H.u.Mw();
    c = c || [""];
    if (0 == c.length) throw a = a.Hd(), Error("'variableTypes' of field variable " + a + " was an empty list");
    return c
}

function of (a, c, d) {
    d = d || "";
    if (null == c || void 0 == c) c = null;
    else if (Array.isArray(c)) {
        for (var e = !1, f = 0; f < c.length; f++) c[f] == d && (e = !0);
        if (!e) throw Error("Invalid default type '" + d + "' in the definition of a FieldVariable");
    } else throw Error("'variableTypes' was not an array in the definition of a FieldVariable");
    a.hI = d;
    a.uL = c
}
g.De.vI = function() {
    if (!this.Ae) throw Error("Tried to call dropdownCreate on a variable field with no variable selected.");
    var a = this.Hd(),
        c = [];
    if (this.H && this.H.u)
        for (var d = pf(this), e = 0; e < d.length; e++) c = c.concat(this.H.u.bp(d[e]));
    c.sort(g.mo.dB);
    d = [];
    for (e = 0; e < c.length; e++) d[e] = [c[e].name, c[e].Oa()];
    d.push([g.i.RENAME_VARIABLE, g.kA]);
    g.i.DELETE_VARIABLE && d.push([g.i.DELETE_VARIABLE.replace("%1", a), g.zz]);
    return d
};
g.De.prototype.fD = function(a) {
    a = a.getValue();
    if (this.H && this.H.u) {
        if (a == g.kA) {
            g.ka.Ct(this.H.u, this.Ae);
            return
        }
        if (a == g.zz) {
            this.H.u.Jh(this.Ae.Oa());
            return
        }
    }
    this.setValue(a)
};
g.De.prototype.Mp = function() {
    return !0
};
g.ve.register("field_variable", g.De);
g.W.CJ = {};
g.ca.hf = {};
g.ca.hf.Xl = 120;
g.ej([{
    type: "controls_repeat_ext",
    message0: "%{BKY_CONTROLS_REPEAT_TITLE}",
    args0: [{
        type: "input_value",
        name: "TIMES",
        check: "Number"
    }],
    message1: "%{BKY_CONTROLS_REPEAT_INPUT_DO} %1",
    args1: [{
        type: "input_statement",
        name: "DO"
    }],
    previousStatement: null,
    nextStatement: null,
    style: "loop_blocks",
    tooltip: "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
    helpUrl: "%{BKY_CONTROLS_REPEAT_HELPURL}"
}, {
    type: "controls_repeat",
    message0: "%{BKY_CONTROLS_REPEAT_TITLE}",
    args0: [{
        type: "field_number",
        name: "TIMES",
        value: 10,
        min: 0,
        precision: 1
    }],
    message1: "%{BKY_CONTROLS_REPEAT_INPUT_DO} %1",
    args1: [{
        type: "input_statement",
        name: "DO"
    }],
    previousStatement: null,
    nextStatement: null,
    style: "loop_blocks",
    tooltip: "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
    helpUrl: "%{BKY_CONTROLS_REPEAT_HELPURL}"
}, {
    type: "controls_whileUntil",
    message0: "%1 %2",
    args0: [{
        type: "field_dropdown",
        name: "MODE",
        options: [
            ["%{BKY_CONTROLS_WHILEUNTIL_OPERATOR_WHILE}", "WHILE"],
            ["%{BKY_CONTROLS_WHILEUNTIL_OPERATOR_UNTIL}", "UNTIL"]
        ]
    }, {
        type: "input_value",
        name: "BOOL",
        check: "Boolean"
    }],
    message1: "%{BKY_CONTROLS_REPEAT_INPUT_DO} %1",
    args1: [{
        type: "input_statement",
        name: "DO"
    }],
    previousStatement: null,
    nextStatement: null,
    style: "loop_blocks",
    helpUrl: "%{BKY_CONTROLS_WHILEUNTIL_HELPURL}",
    extensions: ["controls_whileUntil_tooltip"]
}, {
    type: "controls_for",
    message0: "%{BKY_CONTROLS_FOR_TITLE}",
    args0: [{
        type: "field_variable",
        name: "VAR",
        variable: null
    }, {
        type: "input_value",
        name: "FROM",
        check: "Number",
        align: "RIGHT"
    }, {
        type: "input_value",
        name: "TO",
        check: "Number",
        align: "RIGHT"
    }, {
        type: "input_value",
        name: "BY",
        check: "Number",
        align: "RIGHT"
    }],
    message1: "%{BKY_CONTROLS_REPEAT_INPUT_DO} %1",
    args1: [{
        type: "input_statement",
        name: "DO"
    }],
    inputsInline: !0,
    previousStatement: null,
    nextStatement: null,
    style: "loop_blocks",
    helpUrl: "%{BKY_CONTROLS_FOR_HELPURL}",
    extensions: ["contextMenu_newGetVariableBlock", "controls_for_tooltip"]
}, {
    type: "controls_forEach",
    message0: "%{BKY_CONTROLS_FOREACH_TITLE}",
    args0: [{
        type: "field_variable",
        name: "VAR",
        variable: null
    }, {
        type: "input_value",
        name: "LIST",
        check: "Array"
    }],
    message1: "%{BKY_CONTROLS_REPEAT_INPUT_DO} %1",
    args1: [{
        type: "input_statement",
        name: "DO"
    }],
    previousStatement: null,
    nextStatement: null,
    style: "loop_blocks",
    helpUrl: "%{BKY_CONTROLS_FOREACH_HELPURL}",
    extensions: ["contextMenu_newGetVariableBlock", "controls_forEach_tooltip"]
}, {
    type: "controls_flow_statements",
    message0: "%1",
    args0: [{
        type: "field_dropdown",
        name: "FLOW",
        options: [
            ["%{BKY_CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK}", "BREAK"],
            ["%{BKY_CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE}", "CONTINUE"]
        ]
    }],
    previousStatement: null,
    style: "loop_blocks",
    helpUrl: "%{BKY_CONTROLS_FLOW_STATEMENTS_HELPURL}",
    extensions: ["controls_flow_tooltip",
        "controls_flow_in_loop_check"
    ]
}]);
g.ca.hf.jH = {
    WHILE: "%{BKY_CONTROLS_WHILEUNTIL_TOOLTIP_WHILE}",
    UNTIL: "%{BKY_CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL}"
};
g.ga.register("controls_whileUntil_tooltip", g.ga.Nr("MODE", g.ca.hf.jH));
g.ca.hf.rE = {
    BREAK: "%{BKY_CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK}",
    CONTINUE: "%{BKY_CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE}"
};
g.ga.register("controls_flow_tooltip", g.ga.Nr("FLOW", g.ca.hf.rE));
g.ca.hf.HE = {
    Ih: function(a) {
        if (!this.Yb) {
            var c = x(this, "VAR").Id(),
                d = c.name;
            if (!this.isCollapsed() && null != d) {
                var e = {
                    enabled: !0
                };
                e.text = g.i.VARIABLES_SET_CREATE_GET.replace("%1", d);
                c = g.ka.Uo(c);
                d = g.g.xml.createElement("block");
                d.setAttribute("type", "variables_get");
                d.appendChild(c);
                e.cb = g.Ya.Pr(this, d);
                a.push(e)
            }
        }
    }
};
g.ga.zt("contextMenu_newGetVariableBlock", g.ca.hf.HE);
g.ga.register("controls_for_tooltip", g.ga.Or("%{BKY_CONTROLS_FOR_TOOLTIP}"));
g.ga.register("controls_forEach_tooltip", g.ga.Or("%{BKY_CONTROLS_FOREACH_TOOLTIP}"));
g.ca.hf.Tq = {
    XF: ["controls_repeat", "controls_repeat_ext", "controls_forEach", "controls_for", "controls_whileUntil"],
    Tj: !0,
    dC: function(a) {
        do {
            if (-1 != g.ca.hf.Tq.XF.indexOf(a.type)) return a;
            a = gc(a)
        } while (a);
        return null
    },
    onchange: function(a) {
        if (this.u.Ac && !this.u.Ac() && a.type == g.h.ui) {
            var c = g.ca.hf.Tq.dC(this);
            this.on(c ? null : g.i.CONTROLS_FLOW_STATEMENTS_WARNING);
            if (!this.Yb) {
                var d = g.h.tc();
                g.h.oa(a.group);
                this.le(c);
                g.h.oa(d)
            }
        }
    }
};
g.ga.zt("controls_flow_in_loop_check", g.ca.hf.Tq);
g.W.od = {};
g.ca.Math = {};
g.ca.Math.Xl = 230;
g.ej([{
    type: "math_number",
    message0: "%1",
    args0: [{
        type: "field_number",
        name: "NUM",
        value: 0
    }],
    output: "Number",
    helpUrl: "%{BKY_MATH_NUMBER_HELPURL}",
    style: "math_blocks",
    tooltip: "%{BKY_MATH_NUMBER_TOOLTIP}",
    extensions: ["parent_tooltip_when_inline"]
}, {
    type: "math_arithmetic",
    message0: "%1 %2 %3",
    args0: [{
        type: "input_value",
        name: "A",
        check: "Number"
    }, {
        type: "field_dropdown",
        name: "OP",
        options: [
            ["%{BKY_MATH_ADDITION_SYMBOL}", "ADD"],
            ["%{BKY_MATH_SUBTRACTION_SYMBOL}", "MINUS"],
            ["%{BKY_MATH_MULTIPLICATION_SYMBOL}", "MULTIPLY"],
            ["%{BKY_MATH_DIVISION_SYMBOL}", "DIVIDE"],
            ["%{BKY_MATH_POWER_SYMBOL}", "POWER"]
        ]
    }, {
        type: "input_value",
        name: "B",
        check: "Number"
    }],
    inputsInline: !0,
    output: "Number",
    style: "math_blocks",
    helpUrl: "%{BKY_MATH_ARITHMETIC_HELPURL}",
    extensions: ["math_op_tooltip"]
}, {
    type: "math_single",
    message0: "%1 %2",
    args0: [{
        type: "field_dropdown",
        name: "OP",
        options: [
            ["%{BKY_MATH_SINGLE_OP_ROOT}", "ROOT"],
            ["%{BKY_MATH_SINGLE_OP_ABSOLUTE}", "ABS"],
            ["-", "NEG"],
            ["ln", "LN"],
            ["log10", "LOG10"],
            ["e^", "EXP"],
            ["10^", "POW10"]
        ]
    }, {
        type: "input_value",
        name: "NUM",
        check: "Number"
    }],
    output: "Number",
    style: "math_blocks",
    helpUrl: "%{BKY_MATH_SINGLE_HELPURL}",
    extensions: ["math_op_tooltip"]
}, {
    type: "math_trig",
    message0: "%1 %2",
    args0: [{
        type: "field_dropdown",
        name: "OP",
        options: [
            ["%{BKY_MATH_TRIG_SIN}", "SIN"],
            ["%{BKY_MATH_TRIG_COS}", "COS"],
            ["%{BKY_MATH_TRIG_TAN}", "TAN"],
            ["%{BKY_MATH_TRIG_ASIN}", "ASIN"],
            ["%{BKY_MATH_TRIG_ACOS}", "ACOS"],
            ["%{BKY_MATH_TRIG_ATAN}", "ATAN"]
        ]
    }, {
        type: "input_value",
        name: "NUM",
        check: "Number"
    }],
    output: "Number",
    style: "math_blocks",
    helpUrl: "%{BKY_MATH_TRIG_HELPURL}",
    extensions: ["math_op_tooltip"]
}, {
    type: "math_constant",
    message0: "%1",
    args0: [{
        type: "field_dropdown",
        name: "CONSTANT",
        options: [
            ["\u03c0", "PI"],
            ["e", "E"],
            ["\u03c6", "GOLDEN_RATIO"],
            ["sqrt(2)", "SQRT2"],
            ["sqrt(\u00bd)", "SQRT1_2"],
            ["\u221e", "INFINITY"]
        ]
    }],
    output: "Number",
    style: "math_blocks",
    tooltip: "%{BKY_MATH_CONSTANT_TOOLTIP}",
    helpUrl: "%{BKY_MATH_CONSTANT_HELPURL}"
}, {
    type: "math_number_property",
    message0: "%1 %2",
    args0: [{
        type: "input_value",
        name: "NUMBER_TO_CHECK",
        check: "Number"
    }, {
        type: "field_dropdown",
        name: "PROPERTY",
        options: [
            ["%{BKY_MATH_IS_EVEN}", "EVEN"],
            ["%{BKY_MATH_IS_ODD}", "ODD"],
            ["%{BKY_MATH_IS_PRIME}", "PRIME"],
            ["%{BKY_MATH_IS_WHOLE}", "WHOLE"],
            ["%{BKY_MATH_IS_POSITIVE}", "POSITIVE"],
            ["%{BKY_MATH_IS_NEGATIVE}", "NEGATIVE"],
            ["%{BKY_MATH_IS_DIVISIBLE_BY}", "DIVISIBLE_BY"]
        ]
    }],
    inputsInline: !0,
    output: "Boolean",
    style: "math_blocks",
    tooltip: "%{BKY_MATH_IS_TOOLTIP}",
    mutator: "math_is_divisibleby_mutator"
}, {
    type: "math_change",
    message0: "%{BKY_MATH_CHANGE_TITLE}",
    args0: [{
            type: "field_variable",
            name: "VAR",
            variable: "%{BKY_MATH_CHANGE_TITLE_ITEM}"
        },
        {
            type: "input_value",
            name: "DELTA",
            check: "Number"
        }
    ],
    previousStatement: null,
    nextStatement: null,
    style: "variable_blocks",
    helpUrl: "%{BKY_MATH_CHANGE_HELPURL}",
    extensions: ["math_change_tooltip"]
}, {
    type: "math_round",
    message0: "%1 %2",
    args0: [{
        type: "field_dropdown",
        name: "OP",
        options: [
            ["%{BKY_MATH_ROUND_OPERATOR_ROUND}", "ROUND"],
            ["%{BKY_MATH_ROUND_OPERATOR_ROUNDUP}", "ROUNDUP"],
            ["%{BKY_MATH_ROUND_OPERATOR_ROUNDDOWN}", "ROUNDDOWN"]
        ]
    }, {
        type: "input_value",
        name: "NUM",
        check: "Number"
    }],
    output: "Number",
    style: "math_blocks",
    helpUrl: "%{BKY_MATH_ROUND_HELPURL}",
    tooltip: "%{BKY_MATH_ROUND_TOOLTIP}"
}, {
    type: "math_on_list",
    message0: "%1 %2",
    args0: [{
        type: "field_dropdown",
        name: "OP",
        options: [
            ["%{BKY_MATH_ONLIST_OPERATOR_SUM}", "SUM"],
            ["%{BKY_MATH_ONLIST_OPERATOR_MIN}", "MIN"],
            ["%{BKY_MATH_ONLIST_OPERATOR_MAX}", "MAX"],
            ["%{BKY_MATH_ONLIST_OPERATOR_AVERAGE}", "AVERAGE"],
            ["%{BKY_MATH_ONLIST_OPERATOR_MEDIAN}", "MEDIAN"],
            ["%{BKY_MATH_ONLIST_OPERATOR_MODE}", "MODE"],
            ["%{BKY_MATH_ONLIST_OPERATOR_STD_DEV}", "STD_DEV"],
            ["%{BKY_MATH_ONLIST_OPERATOR_RANDOM}",
                "RANDOM"
            ]
        ]
    }, {
        type: "input_value",
        name: "LIST",
        check: "Array"
    }],
    output: "Number",
    style: "math_blocks",
    helpUrl: "%{BKY_MATH_ONLIST_HELPURL}",
    mutator: "math_modes_of_list_mutator",
    extensions: ["math_op_tooltip"]
}, {
    type: "math_modulo",
    message0: "%{BKY_MATH_MODULO_TITLE}",
    args0: [{
        type: "input_value",
        name: "DIVIDEND",
        check: "Number"
    }, {
        type: "input_value",
        name: "DIVISOR",
        check: "Number"
    }],
    inputsInline: !0,
    output: "Number",
    style: "math_blocks",
    tooltip: "%{BKY_MATH_MODULO_TOOLTIP}",
    helpUrl: "%{BKY_MATH_MODULO_HELPURL}"
}, {
    type: "math_constrain",
    message0: "%{BKY_MATH_CONSTRAIN_TITLE}",
    args0: [{
        type: "input_value",
        name: "VALUE",
        check: "Number"
    }, {
        type: "input_value",
        name: "LOW",
        check: "Number"
    }, {
        type: "input_value",
        name: "HIGH",
        check: "Number"
    }],
    inputsInline: !0,
    output: "Number",
    style: "math_blocks",
    tooltip: "%{BKY_MATH_CONSTRAIN_TOOLTIP}",
    helpUrl: "%{BKY_MATH_CONSTRAIN_HELPURL}"
}, {
    type: "math_random_int",
    message0: "%{BKY_MATH_RANDOM_INT_TITLE}",
    args0: [{
        type: "input_value",
        name: "FROM",
        check: "Number"
    }, {
        type: "input_value",
        name: "TO",
        check: "Number"
    }],
    inputsInline: !0,
    output: "Number",
    style: "math_blocks",
    tooltip: "%{BKY_MATH_RANDOM_INT_TOOLTIP}",
    helpUrl: "%{BKY_MATH_RANDOM_INT_HELPURL}"
}, {
    type: "math_random_float",
    message0: "%{BKY_MATH_RANDOM_FLOAT_TITLE_RANDOM}",
    output: "Number",
    style: "math_blocks",
    tooltip: "%{BKY_MATH_RANDOM_FLOAT_TOOLTIP}",
    helpUrl: "%{BKY_MATH_RANDOM_FLOAT_HELPURL}"
}, {
    type: "math_atan2",
    message0: "%{BKY_MATH_ATAN2_TITLE}",
    args0: [{
        type: "input_value",
        name: "X",
        check: "Number"
    }, {
        type: "input_value",
        name: "Y",
        check: "Number"
    }],
    inputsInline: !0,
    output: "Number",
    style: "math_blocks",
    tooltip: "%{BKY_MATH_ATAN2_TOOLTIP}",
    helpUrl: "%{BKY_MATH_ATAN2_HELPURL}"
}]);
g.ca.Math.Vu = {
    ADD: "%{BKY_MATH_ARITHMETIC_TOOLTIP_ADD}",
    MINUS: "%{BKY_MATH_ARITHMETIC_TOOLTIP_MINUS}",
    MULTIPLY: "%{BKY_MATH_ARITHMETIC_TOOLTIP_MULTIPLY}",
    DIVIDE: "%{BKY_MATH_ARITHMETIC_TOOLTIP_DIVIDE}",
    POWER: "%{BKY_MATH_ARITHMETIC_TOOLTIP_POWER}",
    ROOT: "%{BKY_MATH_SINGLE_TOOLTIP_ROOT}",
    ABS: "%{BKY_MATH_SINGLE_TOOLTIP_ABS}",
    NEG: "%{BKY_MATH_SINGLE_TOOLTIP_NEG}",
    LN: "%{BKY_MATH_SINGLE_TOOLTIP_LN}",
    LOG10: "%{BKY_MATH_SINGLE_TOOLTIP_LOG10}",
    EXP: "%{BKY_MATH_SINGLE_TOOLTIP_EXP}",
    POW10: "%{BKY_MATH_SINGLE_TOOLTIP_POW10}",
    SIN: "%{BKY_MATH_TRIG_TOOLTIP_SIN}",
    COS: "%{BKY_MATH_TRIG_TOOLTIP_COS}",
    TAN: "%{BKY_MATH_TRIG_TOOLTIP_TAN}",
    ASIN: "%{BKY_MATH_TRIG_TOOLTIP_ASIN}",
    ACOS: "%{BKY_MATH_TRIG_TOOLTIP_ACOS}",
    ATAN: "%{BKY_MATH_TRIG_TOOLTIP_ATAN}",
    SUM: "%{BKY_MATH_ONLIST_TOOLTIP_SUM}",
    MIN: "%{BKY_MATH_ONLIST_TOOLTIP_MIN}",
    MAX: "%{BKY_MATH_ONLIST_TOOLTIP_MAX}",
    AVERAGE: "%{BKY_MATH_ONLIST_TOOLTIP_AVERAGE}",
    MEDIAN: "%{BKY_MATH_ONLIST_TOOLTIP_MEDIAN}",
    MODE: "%{BKY_MATH_ONLIST_TOOLTIP_MODE}",
    STD_DEV: "%{BKY_MATH_ONLIST_TOOLTIP_STD_DEV}",
    RANDOM: "%{BKY_MATH_ONLIST_TOOLTIP_RANDOM}"
};
g.ga.register("math_op_tooltip", g.ga.Nr("OP", g.ca.Math.Vu));
g.ca.Math.HF = {
    Wa: function() {
        var a = g.g.xml.createElement("mutation"),
            c = "DIVISIBLE_BY" == B(this, "PROPERTY");
        a.setAttribute("divisor_input", c);
        return a
    },
    yb: function(a) {
        a = "true" == a.getAttribute("divisor_input");
        this.wd(a)
    },
    wd: function(a) {
        var c = w(this, "DIVISOR");
        a ? c || F(this, "DIVISOR").hb("Number") : c && this.Db("DIVISOR")
    }
};
g.ca.Math.IF = function() {
    Rb(x(this, "PROPERTY"), function(a) {
        a = "DIVISIBLE_BY" == a;
        this.ea().wd(a)
    })
};
g.ga.Np("math_is_divisibleby_mutator", g.ca.Math.HF, g.ca.Math.IF);
g.ga.register("math_change_tooltip", g.ga.Or("%{BKY_MATH_CHANGE_TOOLTIP}"));
g.ca.Math.SF = {
    jg: function(a) {
        "MODE" == a ? this.R.hb("Array") : this.R.hb("Number")
    },
    Wa: function() {
        var a = g.g.xml.createElement("mutation");
        a.setAttribute("op", B(this, "OP"));
        return a
    },
    yb: function(a) {
        this.jg(a.getAttribute("op"))
    }
};
g.ca.Math.RF = function() {
    Rb(x(this, "OP"), function(a) {
        this.jg(a)
    }.bind(this))
};
g.ga.Np("math_modes_of_list_mutator", g.ca.Math.SF, g.ca.Math.RF);
g.ef = function(a, c, d) {
    this.XA = null;
    g.ef.v.constructor.call(this, a, c, d)
};
g.g.object.X(g.ef, g.hd);
g.ef.prototype.fk = !1;
g.ef.ma = function(a) {
    return new g.ef(a.checked, void 0, a)
};
g.ef.tE = "\u2713";
b = g.ef.prototype;
b.wk = !0;
b.yi = "default";
b.cd = function(a) {
    g.ef.v.cd.call(this, a);
    a.checkCharacter && (this.XA = a.checkCharacter)
};
b.Rh = function() {
    g.ef.v.Rh.call(this);
    g.g.o.Ga(this.Kc, "blocklyCheckbox");
    this.Kc.style.display = this.ib ? "block" : "none"
};
b.xl = function() {
    this.ji && (this.ji.nodeValue = this.Km());
    this.uq(this.V().gF)
};
b.Km = function() {
    return this.XA || g.ef.tE
};
b.If = function() {
    this.setValue(!this.ib)
};
b.Kh = function(a) {
    return !0 === a || "TRUE" === a ? "TRUE" : !1 === a || "FALSE" === a ? "FALSE" : null
};
b.Qe = function(a) {
    this.ib = qf(a);
    this.Kc && (this.Kc.style.display = this.ib ? "block" : "none")
};
b.getValue = function() {
    return this.ib ? "TRUE" : "FALSE"
};
b.Hd = function() {
    return String(qf(this.ib))
};

function qf(a) {
    return "string" == typeof a ? "TRUE" == a : !!a
}
g.ve.register("field_checkbox", g.ef);
g.W.pK = {};
g.W.procedures_defnoreturn = {
    T: function() {
        var a = g.Da.us("", this);
        a = new g.Pc(a, g.Da.yD);
        hf(a);
        E(E(E(G(this), g.i.PROCEDURES_DEFNORETURN_TITLE), a, "NAME"), "", "PARAMS");
        this.mn(new g.wc(["procedures_mutatorarg"]));
        (this.u.options.Co || this.u.options.uc && this.u.options.uc.options.Co) && g.i.PROCEDURES_DEFNORETURN_COMMENT && this.Pj(g.i.PROCEDURES_DEFNORETURN_COMMENT);
        this.Fb("procedure_blocks");
        this.Ra(g.i.PROCEDURES_DEFNORETURN_TOOLTIP);
        this.dc = g.i.PROCEDURES_DEFNORETURN_HELPURL;
        this.jb = [];
        this.Fc = [];
        this.Bl(!0);
        this.ii = null
    },
    Bl: function(a) {
        this.Es !== a && (a ? (E(jc(this, "STACK"), g.i.PROCEDURES_DEFNORETURN_DO), w(this, "RETURN") && oc(this, "STACK", "RETURN")) : this.Db("STACK", !0), this.Es = a)
    },
    tq: function() {
        var a = "";
        this.jb.length && (a = g.i.PROCEDURES_BEFORE_PARAMS + " " + this.jb.join(", "));
        g.h.disable();
        try {
            hc(this, a, "PARAMS")
        } finally {
            g.h.enable()
        }
    },
    Wa: function(a) {
        var c = g.g.xml.createElement("mutation");
        a && c.setAttribute("name", B(this, "NAME"));
        for (var d = 0; d < this.Fc.length; d++) {
            var e = g.g.xml.createElement("arg"),
                f = this.Fc[d];
            e.setAttribute("name", f.name);
            e.setAttribute("varid", f.Oa());
            a && this.by && e.setAttribute("paramId", this.by[d]);
            c.appendChild(e)
        }
        this.Es || c.setAttribute("statements", "false");
        return c
    },
    yb: function(a) {
        this.jb = [];
        this.Fc = [];
        for (var c = 0, d; d = a.childNodes[c]; c++)
            if ("arg" == d.nodeName.toLowerCase()) {
                var e = d.getAttribute("name");
                d = d.getAttribute("varid") || d.getAttribute("varId");
                this.jb.push(e);
                d = g.ka.As(this.u, d, e, "");
                null != d ? this.Fc.push(d) : console.log("Failed to create a variable with name " + e + ", ignoring.")
            } this.tq();
        g.Da.Ap(this);
        this.Bl("false" !== a.getAttribute("statements"))
    },
    Ig: function(a) {
        var c = g.g.xml.createElement("block");
        c.setAttribute("type", "procedures_mutatorcontainer");
        var d = g.g.xml.createElement("statement");
        d.setAttribute("name", "STACK");
        c.appendChild(d);
        for (var e = 0; e < this.jb.length; e++) {
            var f = g.g.xml.createElement("block");
            f.setAttribute("type", "procedures_mutatorarg");
            var h = g.g.xml.createElement("field");
            h.setAttribute("name", "NAME");
            var k = g.g.xml.createTextNode(this.jb[e]);
            h.appendChild(k);
            f.appendChild(h);
            h = g.g.xml.createElement("next");
            f.appendChild(h);
            d.appendChild(f);
            d = h
        }
        a = g.O.Ik(c, a);
        "procedures_defreturn" == this.type ? hc(a, this.Es, "STATEMENTS") : a.Db("STATEMENT_INPUT");
        g.Da.Ap(this);
        return a
    },
    Eg: function(a) {
        this.jb = [];
        this.by = [];
        this.Fc = [];
        for (var c = H(a, "STACK"); c && !c.nd();) {
            var d = B(c, "NAME");
            this.jb.push(d);
            d = this.u.Id(d, "");
            this.Fc.push(d);
            this.by.push(c.id);
            c = c.aa && c.aa.ra()
        }
        this.tq();
        g.Da.Ap(this);
        a = B(a, "STATEMENTS");
        if (null !== a && (a = "TRUE" == a, this.Es != a))
            if (a) this.Bl(!0), g.wc.vl(this.ii, this,
                "STACK"), this.ii = null;
            else {
                a = w(this, "STACK").connection;
                if (this.ii = a.va) a = a.ra(), y(a), a.bc();
                this.Bl(!1)
            }
    },
    ij: function() {
        return [B(this, "NAME"), this.jb, !1]
    },
    Ph: function() {
        return this.jb
    },
    Oh: function() {
        return this.Fc
    },
    Bt: function(a, c) {
        var d = this.u.$f(a);
        if ("" == d.type) {
            d = d.name;
            c = this.u.$f(c);
            for (var e = !1, f = 0; f < this.Fc.length; f++) this.Fc[f].Oa() == a && (this.jb[f] = c.name, this.Fc[f] = c, e = !0);
            e && (this.ns(d, c.name), g.Da.Ap(this))
        }
    },
    Tt: function(a) {
        for (var c = a.name, d = !1, e = 0; e < this.Fc.length; e++)
            if (this.Fc[e].Oa() ==
                a.Oa()) {
                var f = this.jb[e];
                this.jb[e] = c;
                d = !0
            } d && (this.ns(f, c), g.Da.Ap(this))
    },
    ns: function(a, c) {
        this.tq();
        if (this.qd && this.qd.isVisible())
            for (var d = z(this.qd.s, !1), e = 0, f; f = d[e]; e++) "procedures_mutatorarg" == f.type && g.Rd.wf(a, B(f, "NAME")) && hc(f, c, "NAME")
    },
    Ih: function(a) {
        if (!this.Yb) {
            var c = {
                    enabled: !0
                },
                d = B(this, "NAME");
            c.text = g.i.PROCEDURES_CREATE_DO.replace("%1", d);
            var e = g.g.xml.createElement("mutation");
            e.setAttribute("name", d);
            for (d = 0; d < this.jb.length; d++) {
                var f = g.g.xml.createElement("arg");
                f.setAttribute("name",
                    this.jb[d]);
                e.appendChild(f)
            }
            d = g.g.xml.createElement("block");
            d.setAttribute("type", this.UA);
            d.appendChild(e);
            c.cb = g.Ya.Pr(this, d);
            a.push(c);
            if (!this.isCollapsed())
                for (d = 0; d < this.Fc.length; d++) c = {
                    enabled: !0
                }, e = this.Fc[d], c.text = g.i.VARIABLES_SET_CREATE_GET.replace("%1", e.name), e = g.ka.Uo(e), f = g.g.xml.createElement("block"), f.setAttribute("type", "variables_get"), f.appendChild(e), c.cb = g.Ya.Pr(this, f), a.push(c)
        }
    },
    UA: "procedures_callnoreturn"
};
g.W.procedures_defreturn = {
    T: function() {
        var a = g.Da.us("", this);
        a = new g.Pc(a, g.Da.yD);
        hf(a);
        E(E(E(G(this), g.i.PROCEDURES_DEFRETURN_TITLE), a, "NAME"), "", "PARAMS");
        E(fc(F(this, "RETURN"), g.Fq), g.i.PROCEDURES_DEFRETURN_RETURN);
        this.mn(new g.wc(["procedures_mutatorarg"]));
        (this.u.options.Co || this.u.options.uc && this.u.options.uc.options.Co) && g.i.PROCEDURES_DEFRETURN_COMMENT && this.Pj(g.i.PROCEDURES_DEFRETURN_COMMENT);
        this.Fb("procedure_blocks");
        this.Ra(g.i.PROCEDURES_DEFRETURN_TOOLTIP);
        this.dc = g.i.PROCEDURES_DEFRETURN_HELPURL;
        this.jb = [];
        this.Fc = [];
        this.Bl(!0);
        this.ii = null
    },
    Bl: g.W.procedures_defnoreturn.Bl,
    tq: g.W.procedures_defnoreturn.tq,
    Wa: g.W.procedures_defnoreturn.Wa,
    yb: g.W.procedures_defnoreturn.yb,
    Ig: g.W.procedures_defnoreturn.Ig,
    Eg: g.W.procedures_defnoreturn.Eg,
    ij: function() {
        return [B(this, "NAME"), this.jb, !0]
    },
    Ph: g.W.procedures_defnoreturn.Ph,
    Oh: g.W.procedures_defnoreturn.Oh,
    Bt: g.W.procedures_defnoreturn.Bt,
    Tt: g.W.procedures_defnoreturn.Tt,
    ns: g.W.procedures_defnoreturn.ns,
    Ih: g.W.procedures_defnoreturn.Ih,
    UA: "procedures_callreturn"
};
g.W.procedures_mutatorcontainer = {
    T: function() {
        E(G(this), g.i.PROCEDURES_MUTATORCONTAINER_TITLE);
        jc(this, "STACK");
        E(E(G(this, "STATEMENT_INPUT"), g.i.PROCEDURES_ALLOW_STATEMENTS), new g.ef("TRUE"), "STATEMENTS");
        this.Fb("procedure_blocks");
        this.Ra(g.i.PROCEDURES_MUTATORCONTAINER_TOOLTIP);
        this.contextMenu = !1
    }
};
g.W.procedures_mutatorarg = {
    T: function() {
        var a = new g.Pc(g.Da.xz, this.Il);
        a.VJ = a.If;
        a.If = function() {
            this.Ho = [];
            this.VJ()
        };
        E(E(G(this), g.i.PROCEDURES_MUTATORARG_TITLE), a, "NAME");
        this.Xc(!0);
        this.Wc(!0);
        this.Fb("procedure_blocks");
        this.Ra(g.i.PROCEDURES_MUTATORARG_TOOLTIP);
        this.contextMenu = !1;
        a.Px = this.kI;
        a.Ho = [];
        a.Px("x")
    },
    Il: function(a) {
        var c = this.ea(),
            d = g.wc.HB(c.u);
        a = a.replace(/[\s\xa0]+/g, " ").replace(/^ | $/g, "");
        if (!a) return null;
        for (var e = z(c.u.Ta || c.u, !1), f = a.toLowerCase(), h = 0; h < e.length; h++)
            if (e[h].id !=
                this.ea().id) {
                var k = B(e[h], "NAME");
                if (k && k.toLowerCase() == f) return null
            } if (c.Yb) return a;
        (c = d.Id(a, "")) && c.name != a && d.Mj(c.Oa(), a);
        c || (c = d.sf(a, "")) && this.Ho && this.Ho.push(c);
        return a
    },
    kI: function(a) {
        var c = g.wc.HB(this.ea().u);
        if (c)
            for (var d = 0; d < this.Ho.length; d++) {
                var e = this.Ho[d];
                e.name != a && c.Jh(e.Oa())
            }
    }
};
g.W.procedures_callnoreturn = {
    T: function() {
        E(G(this, "TOPROW"), "", "NAME");
        this.Xc(!0);
        this.Wc(!0);
        this.Fb("procedure_blocks");
        this.dc = g.i.PROCEDURES_CALLNORETURN_HELPURL;
        this.jb = [];
        this.Fc = [];
        this.tl = {};
        this.Zg = null;
        this.oy = !0
    },
    Te: function() {
        return B(this, "NAME")
    },
    jn: function(a, c) {
        g.Rd.wf(a, this.Te()) && (hc(this, c, "NAME"), this.Ra((this.R ? g.i.PROCEDURES_CALLRETURN_TOOLTIP : g.i.PROCEDURES_CALLNORETURN_TOOLTIP).replace("%1", c)))
    },
    Gy: function(a, c) {
        var d = g.Da.Xo(this.Te(), this.u),
            e = d && d.qd && d.qd.isVisible();
        e || (this.tl = {}, this.Zg = null);
        if (c)
            if (a.join("\n") == this.jb.join("\n")) this.Zg = c;
            else {
                if (c.length != a.length) throw RangeError("paramNames and paramIds must be the same length.");
                this.Oj(!1);
                this.Zg || (this.tl = {}, this.Zg = []);
                d = this.ua;
                this.ua = !1;
                for (var f = 0; f < this.jb.length; f++) {
                    var h = w(this, "ARG" + f);
                    h && (h = h.connection.va, this.tl[this.Zg[f]] = h, e && h && -1 == c.indexOf(this.Zg[f]) && (h.disconnect(), h.ea().bc()))
                }
                this.jb = [].concat(a);
                this.Fc = [];
                for (f = 0; f < this.jb.length; f++) a = g.ka.As(this.u, null, this.jb[f], ""),
                    this.Fc.push(a);
                this.wd();
                if (this.Zg = c)
                    for (f = 0; f < this.jb.length; f++) c = this.Zg[f], c in this.tl && (h = this.tl[c], g.wc.vl(h, this, "ARG" + f) || delete this.tl[c]);
                (this.ua = d) && this.Ja()
            }
    },
    wd: function() {
        for (var a = 0; a < this.jb.length; a++) {
            var c = x(this, "ARGNAME" + a);
            if (c) {
                g.h.disable();
                try {
                    c.setValue(this.jb[a])
                } finally {
                    g.h.enable()
                }
            } else c = new g.oe(this.jb[a]), E(fc(F(this, "ARG" + a), g.Fq), c, "ARGNAME" + a).T()
        }
        for (; w(this, "ARG" + a);) this.Db("ARG" + a), a++;
        if (a = w(this, "TOPROW"))
            if (this.jb.length) x(this, "WITH") || (E(a, g.i.PROCEDURES_CALL_BEFORE_PARAMS,
                "WITH"), a.T());
            else if (x(this, "WITH")) a: {
            c = 0;
            for (var d; d = a.fb[c]; c++)
                if ("WITH" === d.name) {
                    d.J();
                    a.fb.splice(c, 1);
                    a.H.ua && (a.H = a.H, a.H.Ja(), a.H.bc());
                    break a
                } throw Error('Field "WITH" not found.');
        }
    },
    Wa: function() {
        var a = g.g.xml.createElement("mutation");
        a.setAttribute("name", this.Te());
        for (var c = 0; c < this.jb.length; c++) {
            var d = g.g.xml.createElement("arg");
            d.setAttribute("name", this.jb[c]);
            a.appendChild(d)
        }
        return a
    },
    yb: function(a) {
        var c = a.getAttribute("name");
        this.jn(this.Te(), c);
        c = [];
        for (var d = [], e = 0,
                f; f = a.childNodes[e]; e++) "arg" == f.nodeName.toLowerCase() && (c.push(f.getAttribute("name")), d.push(f.getAttribute("paramId")));
        this.Gy(c, d)
    },
    Ph: function() {
        return this.jb
    },
    Oh: function() {
        return this.Fc
    },
    onchange: function(a) {
        if (this.u && !this.u.ag && a.ab)
            if (a.type == g.h.si && -1 != a.qj.indexOf(this.id)) {
                var c = this.Te();
                c = g.Da.Xo(c, this.u);
                !c || c.type == this.Tv && JSON.stringify(c.Ph()) == JSON.stringify(this.jb) || (c = null);
                if (!c) {
                    g.h.oa(a.group);
                    a = g.g.xml.createElement("xml");
                    c = g.g.xml.createElement("block");
                    c.setAttribute("type",
                        this.Tv);
                    var d = this.kb(),
                        e = d.y + 2 * g.Td;
                    c.setAttribute("x", d.x + g.Td * (this.M ? -1 : 1));
                    c.setAttribute("y", e);
                    d = this.Wa();
                    c.appendChild(d);
                    d = g.g.xml.createElement("field");
                    d.setAttribute("name", "NAME");
                    e = this.Te();
                    e || (e = g.Da.us("", this), this.jn("", e));
                    d.appendChild(g.g.xml.createTextNode(e));
                    c.appendChild(d);
                    a.appendChild(c);
                    g.O.fj(a, this.u);
                    g.h.oa(!1)
                }
            } else a.type == g.h.Hq ? (c = this.Te(), c = g.Da.Xo(c, this.u), c || (g.h.oa(a.group), this.J(!0), g.h.oa(!1))) : a.type == g.h.ck && "disabled" == a.element && (c = this.Te(), (c =
                g.Da.Xo(c, this.u)) && c.id == a.qb && ((c = g.h.tc()) && console.log("Saw an existing group while responding to a definition change"), g.h.oa(a.group), a.newValue ? (this.oy = this.isEnabled(), this.le(!1)) : this.le(this.oy), g.h.oa(c)))
    },
    Ih: function(a) {
        if (this.u.Hc()) {
            var c = {
                enabled: !0
            };
            c.text = g.i.PROCEDURES_HIGHLIGHT_DEF;
            var d = this.Te(),
                e = this.u;
            c.cb = function() {
                var f = g.Da.Xo(d, e);
                if (f) {
                    var h = f.id;
                    if (e.Hc()) {
                        if (h = h ? e.Fd(h) : null) {
                            var k = h.kb(),
                                l = D(h),
                                m = e.scale;
                            h = (k.x + (e.M ? -1 : 1) * l.width / 2) * m;
                            k = (k.y + l.height / 2) * m;
                            l = e.ae();
                            e.scroll(-(h - l.Mc / 2), -(k - l.Yc / 2))
                        }
                    } else console.warn("Tried to move a non-movable workspace. This could result in blocks becoming inaccessible.");
                    f.select()
                }
            };
            a.push(c)
        }
    },
    Tv: "procedures_defnoreturn"
};
g.W.procedures_callreturn = {
    T: function() {
        E(G(this, "TOPROW"), "", "NAME");
        this.Md(!0);
        this.Fb("procedure_blocks");
        this.dc = g.i.PROCEDURES_CALLRETURN_HELPURL;
        this.jb = [];
        this.Fc = [];
        this.tl = {};
        this.Zg = null;
        this.oy = !0
    },
    Te: g.W.procedures_callnoreturn.Te,
    jn: g.W.procedures_callnoreturn.jn,
    Gy: g.W.procedures_callnoreturn.Gy,
    wd: g.W.procedures_callnoreturn.wd,
    Wa: g.W.procedures_callnoreturn.Wa,
    yb: g.W.procedures_callnoreturn.yb,
    Ph: g.W.procedures_callnoreturn.Ph,
    Oh: g.W.procedures_callnoreturn.Oh,
    onchange: g.W.procedures_callnoreturn.onchange,
    Ih: g.W.procedures_callnoreturn.Ih,
    Tv: "procedures_defreturn"
};
g.W.procedures_ifreturn = {
    T: function() {
        E(F(this, "CONDITION").hb("Boolean"), g.i.CONTROLS_IF_MSG_IF);
        E(F(this, "VALUE"), g.i.PROCEDURES_DEFRETURN_RETURN);
        this.ye(!0);
        this.Xc(!0);
        this.Wc(!0);
        this.Fb("procedure_blocks");
        this.Ra(g.i.PROCEDURES_IFRETURN_TOOLTIP);
        this.dc = g.i.PROCEDURES_IFRETURN_HELPURL;
        this.mj = !0
    },
    Wa: function() {
        var a = g.g.xml.createElement("mutation");
        a.setAttribute("value", Number(this.mj));
        return a
    },
    yb: function(a) {
        this.mj = 1 == a.getAttribute("value");
        this.mj || (this.Db("VALUE"), E(G(this, "VALUE"),
            g.i.PROCEDURES_DEFRETURN_RETURN))
    },
    onchange: function() {
        if (this.u.Ac && !this.u.Ac()) {
            var a = !1,
                c = this;
            do {
                if (-1 != this.rF.indexOf(c.type)) {
                    a = !0;
                    break
                }
                c = gc(c)
            } while (c);
            a ? ("procedures_defnoreturn" == c.type && this.mj ? (this.Db("VALUE"), E(G(this, "VALUE"), g.i.PROCEDURES_DEFRETURN_RETURN), this.mj = !1) : "procedures_defreturn" != c.type || this.mj || (this.Db("VALUE"), E(F(this, "VALUE"), g.i.PROCEDURES_DEFRETURN_RETURN), this.mj = !0), this.on(null), this.Yb || this.le(!0)) : (this.on(g.i.PROCEDURES_IFRETURN_WARNING), this.Yb || ic(this) ||
                this.le(!1))
        }
    },
    rF: ["procedures_defnoreturn", "procedures_defreturn"]
};
g.Pf = function(a, c, d, e, f, h, k) {
    if (!a) throw Error("Src value of an image field is required");
    a = g.g.Ic(a);
    d = Number(g.g.Ic(d));
    c = Number(g.g.Ic(c));
    if (isNaN(d) || isNaN(c)) throw Error("Height and width values of an image field must cast to numbers.");
    if (0 >= d || 0 >= c) throw Error("Height and width values of an image field must be greater than 0.");
    this.So = !1;
    this.Jr = "";
    g.Pf.v.constructor.call(this, a, null, k);
    k || (this.So = !!h, this.Jr = g.g.Ic(e) || "");
    this.Jc = new g.g.ad(c, d + g.Pf.nH);
    this.mJ = d;
    this.Dh = null;
    "function" ==
    typeof f && (this.Dh = f);
    this.fe = null
};
g.g.object.X(g.Pf, g.hd);
g.Pf.prototype.fk = "";
g.Pf.ma = function(a) {
    return new g.Pf(a.src, a.width, a.height, void 0, void 0, void 0, a)
};
g.Pf.nH = 1;
b = g.Pf.prototype;
b.Kn = !1;
b.Sg = !1;
b.cd = function(a) {
    g.Pf.v.cd.call(this, a);
    this.So = !!a.flipRtl;
    this.Jr = g.g.Ic(a.alt) || ""
};
b.Rh = function() {
    this.fe = g.g.o.K(g.g.D.Di, {
        height: this.mJ + "px",
        width: this.Jc.width + "px",
        alt: this.Jr
    }, this.$d);
    this.fe.setAttributeNS(g.g.o.mf, "xlink:href", this.ib);
    this.Dh && (this.fe.style.cursor = "pointer")
};
b.uq = function() {};
b.Kh = function(a) {
    return "string" != typeof a ? null : a
};
b.Qe = function(a) {
    this.ib = a;
    this.fe && this.fe.setAttributeNS(g.g.o.mf, "xlink:href", String(this.ib))
};
b.TB = function() {
    return this.So
};
b.If = function() {
    this.Dh && this.Dh(this)
};
b.Bs = function() {
    return this.Jr
};
g.ve.register("field_image", g.Pf);
g.Qf = function(a, c, d) {
    g.Qf.v.constructor.call(this, a, c, d);
    this.kq = null;
    this.Xs = Infinity;
    this.Ms = !1
};
g.g.object.X(g.Qf, g.Pc);
g.Qf.prototype.cd = function(a) {
    g.Qf.v.cd.call(this, a);
    a.FJ && (a = a.FJ, "number" === typeof a && 0 < a && a !== this.Xs && (this.Xs = a, Ub(this)))
};
g.Qf.ma = function(a) {
    var c = g.g.Ic(a.text);
    return new g.Qf(c, void 0, a)
};
b = g.Qf.prototype;
b.Uy = function(a) {
    a.textContent = this.getValue().replace(/\n/g, "&#10;");
    return a
};
b.Mk = function(a) {
    this.setValue(a.textContent.replace(/&#10;/g, "\n"))
};
b.Rh = function() {
    Pb(this);
    this.kq = g.g.o.K(g.g.D.oc, {
        "class": "blocklyEditableText"
    }, this.$d)
};
b.Km = function() {
    var a = this.Hd();
    if (!a) return g.hd.nr;
    var c = a.split("\n");
    a = "";
    for (var d = this.Ms ? this.Xs : c.length, e = 0; e < d; e++) {
        var f = c[e];
        f.length > this.$m ? f = f.substring(0, this.$m - 4) + "..." : this.Ms && e === d - 1 && (f = f.substring(0, f.length - 3) + "...");
        f = f.replace(/\s/g, g.hd.nr);
        a += f;
        e !== d - 1 && (a += "\n")
    }
    this.H.M && (a += "\u200f");
    return a
};
b.Qe = function(a) {
    g.Qf.v.Qe.call(this, a);
    this.Ms = this.ib.split("\n").length > this.Xs
};
b.xl = function() {
    for (var a; a = this.kq.firstChild;) this.kq.removeChild(a);
    a = this.Km().split("\n");
    for (var c = 0, d = 0; d < a.length; d++) {
        var e = this.V().jk + this.V().Vl;
        g.g.o.K(g.g.D.io, {
            "class": "blocklyText blocklyMultilineText",
            x: this.V().mh,
            y: c + this.V().Vl,
            dy: this.V().cr
        }, this.kq).appendChild(document.createTextNode(a[d]));
        c += e
    }
    this.tj && (a = this.ed, this.Ms ? g.g.o.Ga(a, "blocklyHtmlTextAreaInputOverflowedY") : g.g.o.Zb(a, "blocklyHtmlTextAreaInputOverflowedY"));
    this.uq();
    this.tj && (this.H.M ? setTimeout(this.yl.bind(this),
        0) : this.yl(), a = this.ed, this.Os ? (g.g.o.Zb(a, "blocklyInvalidInput"), g.g.$.lc(a, g.g.$.State.ir, !1)) : (g.g.o.Ga(a, "blocklyInvalidInput"), g.g.$.lc(a, g.g.$.State.ir, !0)))
};
b.uq = function() {
    for (var a = this.kq.childNodes, c = 0, d = 0, e = 0; e < a.length; e++) {
        var f = g.g.o.WI(a[e]);
        f > c && (c = f);
        d += this.V().jk + (0 < e ? this.V().Vl : 0)
    }
    if (this.tj) {
        a = this.ib.split("\n");
        f = g.g.o.K(g.g.D.io, {
            "class": "blocklyText blocklyMultilineText"
        });
        var h = this.V().rg,
            k = this.V().oh,
            l = this.V().nh;
        for (e = 0; e < a.length; e++) {
            a[e].length > this.$m && (a[e] = a[e].substring(0, this.$m));
            f.textContent = a[e];
            var m = g.g.o.ys(f, h, k, l);
            m > c && (c = m)
        }
        c += this.ed.offsetWidth - this.ed.clientWidth
    }
    this.xb && (d += 2 * this.V().Vl, c += 2 * this.V().mh,
        this.xb.setAttribute("width", c), this.xb.setAttribute("height", d));
    this.Jc.width = c;
    this.Jc.height = d;
    Tb(this)
};
b.If = function(a, c) {
    g.Qf.v.If.call(this, a, c);
    Ub(this)
};
b.Vt = function() {
    var a = g.na.mb,
        c = md(this.s),
        d = document.createElement("textarea");
    d.className = "blocklyHtmlInput blocklyHtmlTextAreaInput";
    d.setAttribute("spellcheck", this.pn);
    var e = this.V().rg * c + "pt";
    a.style.fontSize = e;
    d.style.fontSize = e;
    d.style.borderRadius = g.Pc.oz * c + "px";
    e = this.V().mh * c;
    var f = this.V().Vl * c / 2;
    d.style.padding = f + "px " + e + "px " + f + "px " + e + "px";
    e = this.V().jk + this.V().Vl;
    d.style.lineHeight = e * c + "px";
    a.appendChild(d);
    d.value = d.defaultValue = String(this.ib);
    d.az = this.ib;
    d.Kx = null;
    g.g.userAgent.Lz ?
        setTimeout(this.yl.bind(this), 0) : this.yl();
    kf(this, d);
    return d
};
b.Qx = function(a) {
    a.keyCode !== g.g.la.Ln && g.Qf.v.Qx.call(this, a)
};
g.Oc.register(".blocklyHtmlTextAreaInput {,font-family: monospace;,resize: none;,overflow: hidden;,height: 100%;,text-align: left;,},.blocklyHtmlTextAreaInputOverflowedY {,overflow-y: scroll;,}".split(","));
g.ve.register("field_multilinetext", g.Qf);
g.W.iL = {};
g.ca.Text = {};
g.ca.Text.Xl = 160;
g.ej([{
    type: "text",
    message0: "%1",
    args0: [{
        type: "field_input",
        name: "TEXT",
        text: ""
    }],
    output: "String",
    style: "text_blocks",
    helpUrl: "%{BKY_TEXT_TEXT_HELPURL}",
    tooltip: "%{BKY_TEXT_TEXT_TOOLTIP}",
    extensions: ["text_quotes", "parent_tooltip_when_inline"]
}, {
    type: "text_multiline",
    message0: "%1 %2",
    args0: [{
        type: "field_image",
        src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAARCAYAAADpPU2iAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAdhgAAHYYBXaITgQAAABh0RVh0U29mdHdhcmUAcGFpbnQubmV0IDQuMS42/U4J6AAAAP1JREFUOE+Vks0KQUEYhjmRIja4ABtZ2dm5A3t3Ia6AUm7CylYuQRaUhZSlLZJiQbFAyRnPN33y01HOW08z8873zpwzM4F3GWOCruvGIE4/rLaV+Nq1hVGMBqzhqlxgCys4wJA65xnogMHsQ5lujnYHTejBBCK2mE4abjCgMGhNxHgDFWjDSG07kdfVa2pZMf4ZyMAdWmpZMfYOsLiDMYMjlMB+K613QISRhTnITnsYg5yUd0DETmEoMlkFOeIT/A58iyK5E18BuTBfgYXfwNJv4P9/oEBerLylOnRhygmGdPpTTBZAPkde61lbQe4moWUvYUZYLfUNftIY4zwA5X2Z9AYnQrEAAAAASUVORK5CYII=",
        width: 12,
        height: 17,
        alt: "\u00b6"
    }, {
        type: "field_multilinetext",
        name: "TEXT",
        text: ""
    }],
    output: "String",
    style: "text_blocks",
    helpUrl: "%{BKY_TEXT_TEXT_HELPURL}",
    tooltip: "%{BKY_TEXT_TEXT_TOOLTIP}",
    extensions: ["parent_tooltip_when_inline"]
}, {
    type: "text_join",
    message0: "",
    output: "String",
    style: "text_blocks",
    helpUrl: "%{BKY_TEXT_JOIN_HELPURL}",
    tooltip: "%{BKY_TEXT_JOIN_TOOLTIP}",
    mutator: "text_join_mutator"
}, {
    type: "text_create_join_container",
    message0: "%{BKY_TEXT_CREATE_JOIN_TITLE_JOIN} %1 %2",
    args0: [{
            type: "input_dummy"
        },
        {
            type: "input_statement",
            name: "STACK"
        }
    ],
    style: "text_blocks",
    tooltip: "%{BKY_TEXT_CREATE_JOIN_TOOLTIP}",
    enableContextMenu: !1
}, {
    type: "text_create_join_item",
    message0: "%{BKY_TEXT_CREATE_JOIN_ITEM_TITLE_ITEM}",
    previousStatement: null,
    nextStatement: null,
    style: "text_blocks",
    tooltip: "%{BKY_TEXT_CREATE_JOIN_ITEM_TOOLTIP}",
    enableContextMenu: !1
}, {
    type: "text_append",
    message0: "%{BKY_TEXT_APPEND_TITLE}",
    args0: [{
        type: "field_variable",
        name: "VAR",
        variable: "%{BKY_TEXT_APPEND_VARIABLE}"
    }, {
        type: "input_value",
        name: "TEXT"
    }],
    previousStatement: null,
    nextStatement: null,
    style: "text_blocks",
    extensions: ["text_append_tooltip"]
}, {
    type: "text_length",
    message0: "%{BKY_TEXT_LENGTH_TITLE}",
    args0: [{
        type: "input_value",
        name: "VALUE",
        check: ["String", "Array"]
    }],
    output: "Number",
    style: "text_blocks",
    tooltip: "%{BKY_TEXT_LENGTH_TOOLTIP}",
    helpUrl: "%{BKY_TEXT_LENGTH_HELPURL}"
}, {
    type: "text_isEmpty",
    message0: "%{BKY_TEXT_ISEMPTY_TITLE}",
    args0: [{
        type: "input_value",
        name: "VALUE",
        check: ["String", "Array"]
    }],
    output: "Boolean",
    style: "text_blocks",
    tooltip: "%{BKY_TEXT_ISEMPTY_TOOLTIP}",
    helpUrl: "%{BKY_TEXT_ISEMPTY_HELPURL}"
}, {
    type: "text_indexOf",
    message0: "%{BKY_TEXT_INDEXOF_TITLE}",
    args0: [{
        type: "input_value",
        name: "VALUE",
        check: "String"
    }, {
        type: "field_dropdown",
        name: "END",
        options: [
            ["%{BKY_TEXT_INDEXOF_OPERATOR_FIRST}", "FIRST"],
            ["%{BKY_TEXT_INDEXOF_OPERATOR_LAST}", "LAST"]
        ]
    }, {
        type: "input_value",
        name: "FIND",
        check: "String"
    }],
    output: "Number",
    style: "text_blocks",
    helpUrl: "%{BKY_TEXT_INDEXOF_HELPURL}",
    inputsInline: !0,
    extensions: ["text_indexOf_tooltip"]
}, {
    type: "text_charAt",
    message0: "%{BKY_TEXT_CHARAT_TITLE}",
    args0: [{
        type: "input_value",
        name: "VALUE",
        check: "String"
    }, {
        type: "field_dropdown",
        name: "WHERE",
        options: [
            ["%{BKY_TEXT_CHARAT_FROM_START}", "FROM_START"],
            ["%{BKY_TEXT_CHARAT_FROM_END}", "FROM_END"],
            ["%{BKY_TEXT_CHARAT_FIRST}", "FIRST"],
            ["%{BKY_TEXT_CHARAT_LAST}", "LAST"],
            ["%{BKY_TEXT_CHARAT_RANDOM}", "RANDOM"]
        ]
    }],
    output: "String",
    style: "text_blocks",
    helpUrl: "%{BKY_TEXT_CHARAT_HELPURL}",
    inputsInline: !0,
    mutator: "text_charAt_mutator"
}]);
g.W.text_getSubstring = {
    T: function() {
        this.WHERE_OPTIONS_1 = [
            [g.i.TEXT_GET_SUBSTRING_START_FROM_START, "FROM_START"],
            [g.i.TEXT_GET_SUBSTRING_START_FROM_END, "FROM_END"],
            [g.i.TEXT_GET_SUBSTRING_START_FIRST, "FIRST"]
        ];
        this.WHERE_OPTIONS_2 = [
            [g.i.TEXT_GET_SUBSTRING_END_FROM_START, "FROM_START"],
            [g.i.TEXT_GET_SUBSTRING_END_FROM_END, "FROM_END"],
            [g.i.TEXT_GET_SUBSTRING_END_LAST, "LAST"]
        ];
        this.dc = g.i.TEXT_GET_SUBSTRING_HELPURL;
        this.Fb("text_blocks");
        E(F(this, "STRING").hb("String"), g.i.TEXT_GET_SUBSTRING_INPUT_IN_TEXT);
        G(this, "AT1");
        G(this, "AT2");
        g.i.TEXT_GET_SUBSTRING_TAIL && E(G(this, "TAIL"), g.i.TEXT_GET_SUBSTRING_TAIL);
        this.ye(!0);
        this.Md(!0, "String");
        this.mc(1, !0);
        this.mc(2, !0);
        this.Ra(g.i.TEXT_GET_SUBSTRING_TOOLTIP)
    },
    Wa: function() {
        var a = g.g.xml.createElement("mutation");
        a.setAttribute("at1", w(this, "AT1").type == g.$b);
        a.setAttribute("at2", w(this, "AT2").type == g.$b);
        return a
    },
    yb: function(a) {
        var c = "true" == a.getAttribute("at1");
        a = "true" == a.getAttribute("at2");
        this.mc(1, c);
        this.mc(2, a)
    },
    mc: function(a, c) {
        this.Db("AT" +
            a);
        this.Db("ORDINAL" + a, !0);
        c ? (F(this, "AT" + a).hb("Number"), g.i.ORDINAL_NUMBER_SUFFIX && E(G(this, "ORDINAL" + a), g.i.ORDINAL_NUMBER_SUFFIX)) : G(this, "AT" + a);
        2 == a && g.i.TEXT_GET_SUBSTRING_TAIL && (this.Db("TAIL", !0), E(G(this, "TAIL"), g.i.TEXT_GET_SUBSTRING_TAIL));
        var d = new g.Fa(this["WHERE_OPTIONS_" + a], function(e) {
            var f = "FROM_START" == e || "FROM_END" == e;
            if (f != c) {
                var h = this.ea();
                h.mc(a, f);
                hc(h, e, "WHERE" + a);
                return null
            }
        });
        E(w(this, "AT" + a), d, "WHERE" + a);
        1 == a && (oc(this, "AT1", "AT2"), w(this, "ORDINAL1") && oc(this, "ORDINAL1",
            "AT2"))
    }
};
g.W.text_changeCase = {
    T: function() {
        var a = [
            [g.i.TEXT_CHANGECASE_OPERATOR_UPPERCASE, "UPPERCASE"],
            [g.i.TEXT_CHANGECASE_OPERATOR_LOWERCASE, "LOWERCASE"],
            [g.i.TEXT_CHANGECASE_OPERATOR_TITLECASE, "TITLECASE"]
        ];
        this.dc = g.i.TEXT_CHANGECASE_HELPURL;
        this.Fb("text_blocks");
        E(F(this, "TEXT").hb("String"), new g.Fa(a), "CASE");
        this.Md(!0, "String");
        this.Ra(g.i.TEXT_CHANGECASE_TOOLTIP)
    }
};
g.W.text_trim = {
    T: function() {
        var a = [
            [g.i.TEXT_TRIM_OPERATOR_BOTH, "BOTH"],
            [g.i.TEXT_TRIM_OPERATOR_LEFT, "LEFT"],
            [g.i.TEXT_TRIM_OPERATOR_RIGHT, "RIGHT"]
        ];
        this.dc = g.i.TEXT_TRIM_HELPURL;
        this.Fb("text_blocks");
        E(F(this, "TEXT").hb("String"), new g.Fa(a), "MODE");
        this.Md(!0, "String");
        this.Ra(g.i.TEXT_TRIM_TOOLTIP)
    }
};
g.W.text_print = {
    T: function() {
        kc(this, {
            message0: g.i.TEXT_PRINT_TITLE,
            args0: [{
                type: "input_value",
                name: "TEXT"
            }],
            previousStatement: null,
            nextStatement: null,
            style: "text_blocks",
            tooltip: g.i.TEXT_PRINT_TOOLTIP,
            helpUrl: g.i.TEXT_PRINT_HELPURL
        })
    }
};
g.W.text_prompt_ext = {
    T: function() {
        var a = [
            [g.i.TEXT_PROMPT_TYPE_TEXT, "TEXT"],
            [g.i.TEXT_PROMPT_TYPE_NUMBER, "NUMBER"]
        ];
        this.dc = g.i.TEXT_PROMPT_HELPURL;
        this.Fb("text_blocks");
        var c = this;
        a = new g.Fa(a, function(d) {
            c.jg(d)
        });
        E(F(this, "TEXT"), a, "TYPE");
        this.Md(!0, "String");
        this.Ra(function() {
            return "TEXT" == B(c, "TYPE") ? g.i.TEXT_PROMPT_TOOLTIP_TEXT : g.i.TEXT_PROMPT_TOOLTIP_NUMBER
        })
    },
    jg: function(a) {
        this.R.hb("NUMBER" == a ? "Number" : "String")
    },
    Wa: function() {
        var a = g.g.xml.createElement("mutation");
        a.setAttribute("type",
            B(this, "TYPE"));
        return a
    },
    yb: function(a) {
        this.jg(a.getAttribute("type"))
    }
};
g.W.text_prompt = {
    T: function() {
        this.Kd(g.ca.Text.Lu);
        var a = [
                [g.i.TEXT_PROMPT_TYPE_TEXT, "TEXT"],
                [g.i.TEXT_PROMPT_TYPE_NUMBER, "NUMBER"]
            ],
            c = this;
        this.dc = g.i.TEXT_PROMPT_HELPURL;
        this.Fb("text_blocks");
        a = new g.Fa(a, function(d) {
            c.jg(d)
        });
        E(E(E(E(G(this), a, "TYPE"), this.cn(!0)), new g.Pc(""), "TEXT"), this.cn(!1));
        this.Md(!0, "String");
        this.Ra(function() {
            return "TEXT" == B(c, "TYPE") ? g.i.TEXT_PROMPT_TOOLTIP_TEXT : g.i.TEXT_PROMPT_TOOLTIP_NUMBER
        })
    },
    jg: g.W.text_prompt_ext.jg,
    Wa: g.W.text_prompt_ext.Wa,
    yb: g.W.text_prompt_ext.yb
};
g.W.text_count = {
    T: function() {
        kc(this, {
            message0: g.i.TEXT_COUNT_MESSAGE0,
            args0: [{
                type: "input_value",
                name: "SUB",
                check: "String"
            }, {
                type: "input_value",
                name: "TEXT",
                check: "String"
            }],
            output: "Number",
            inputsInline: !0,
            style: "text_blocks",
            tooltip: g.i.TEXT_COUNT_TOOLTIP,
            helpUrl: g.i.TEXT_COUNT_HELPURL
        })
    }
};
g.W.text_replace = {
    T: function() {
        kc(this, {
            message0: g.i.TEXT_REPLACE_MESSAGE0,
            args0: [{
                type: "input_value",
                name: "FROM",
                check: "String"
            }, {
                type: "input_value",
                name: "TO",
                check: "String"
            }, {
                type: "input_value",
                name: "TEXT",
                check: "String"
            }],
            output: "String",
            inputsInline: !0,
            style: "text_blocks",
            tooltip: g.i.TEXT_REPLACE_TOOLTIP,
            helpUrl: g.i.TEXT_REPLACE_HELPURL
        })
    }
};
g.W.text_reverse = {
    T: function() {
        kc(this, {
            message0: g.i.TEXT_REVERSE_MESSAGE0,
            args0: [{
                type: "input_value",
                name: "TEXT",
                check: "String"
            }],
            output: "String",
            inputsInline: !0,
            style: "text_blocks",
            tooltip: g.i.TEXT_REVERSE_TOOLTIP,
            helpUrl: g.i.TEXT_REVERSE_HELPURL
        })
    }
};
g.ca.Text.Lu = {
    wG: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAn0lEQVQI1z3OMa5BURSF4f/cQhAKjUQhuQmFNwGJEUi0RKN5rU7FHKhpjEH3TEMtkdBSCY1EIv8r7nFX9e29V7EBAOvu7RPjwmWGH/VuF8CyN9/OAdvqIXYLvtRaNjx9mMTDyo+NjAN1HNcl9ZQ5oQMM3dgDUqDo1l8DzvwmtZN7mnD+PkmLa+4mhrxVA9fRowBWmVBhFy5gYEjKMfz9AylsaRRgGzvZAAAAAElFTkSuQmCC",
    xG: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAqUlEQVQI1z3KvUpCcRiA8ef9E4JNHhI0aFEacm1o0BsI0Slx8wa8gLauoDnoBhq7DcfWhggONDmJJgqCPA7neJ7p934EOOKOnM8Q7PDElo/4x4lFb2DmuUjcUzS3URnGib9qaPNbuXvBO3sGPHJDRG6fGVdMSeWDP2q99FQdFrz26Gu5Tq7dFMzUvbXy8KXeAj57cOklgA+u1B5AoslLtGIHQMaCVnwDnADZIFIrXsoXrgAAAABJRU5ErkJggg==",
    yG: 12,
    vG: 12,
    qK: function(a) {
        for (var c = 0, d; d = this.Y[c]; c++)
            for (var e = 0, f; f = d.fb[e]; e++)
                if (a == f.name) {
                    cc(d, e, this.cn(!0));
                    cc(d, e + 2, this.cn(!1));
                    return
                } console.warn('field named "' + a + '" not found in ' + Fa(this))
    },
    cn: function(a) {
        a = this.M ? !a : a;
        return new g.Pf(a ? this.wG : this.xG, this.yG, this.vG, a ? "\u201c" : "\u201d")
    }
};
g.ca.Text.$G = function() {
    this.Kd(g.ca.Text.Lu);
    this.qK("TEXT")
};
g.ca.Text.ZG = {
    Wa: function() {
        var a = g.g.xml.createElement("mutation");
        a.setAttribute("items", this.ec);
        return a
    },
    yb: function(a) {
        this.ec = parseInt(a.getAttribute("items"), 10);
        this.wd()
    },
    Ig: function(a) {
        var c = a.Wg("text_create_join_container");
        c.xe();
        for (var d = w(c, "STACK").connection, e = 0; e < this.ec; e++) {
            var f = a.Wg("text_create_join_item");
            f.xe();
            d.connect(f.qa);
            d = f.aa
        }
        return c
    },
    Eg: function(a) {
        var c = H(a, "STACK");
        for (a = []; c && !c.nd();) a.push(c.yq), c = c.aa && c.aa.ra();
        for (c = 0; c < this.ec; c++) {
            var d = w(this, "ADD" +
                c).connection.va;
            d && -1 == a.indexOf(d) && d.disconnect()
        }
        this.ec = a.length;
        this.wd();
        for (c = 0; c < this.ec; c++) g.wc.vl(a[c], this, "ADD" + c)
    },
    Tp: function(a) {
        a = H(a, "STACK");
        for (var c = 0; a;) {
            var d = w(this, "ADD" + c);
            a.yq = d && d.connection.va;
            c++;
            a = a.aa && a.aa.ra()
        }
    },
    wd: function() {
        this.ec && w(this, "EMPTY") ? this.Db("EMPTY") : this.ec || w(this, "EMPTY") || E(E(G(this, "EMPTY"), this.cn(!0)), this.cn(!1));
        for (var a = 0; a < this.ec; a++)
            if (!w(this, "ADD" + a)) {
                var c = fc(F(this, "ADD" + a), g.Fq);
                0 == a && E(c, g.i.TEXT_JOIN_TITLE_CREATEWITH)
            } for (; w(this,
                "ADD" + a);) this.Db("ADD" + a), a++
    }
};
g.ca.Text.YG = function() {
    this.Kd(g.ca.Text.Lu);
    this.ec = 2;
    this.wd();
    this.mn(new g.wc(["text_create_join_item"]))
};
g.ga.register("text_append_tooltip", g.ga.Or("%{BKY_TEXT_APPEND_TOOLTIP}"));
g.ca.Text.XG = function() {
    var a = this;
    this.Ra(function() {
        return g.i.TEXT_INDEXOF_TOOLTIP.replace("%1", a.u.options.Df ? "0" : "-1")
    })
};
g.ca.Text.WG = {
    Wa: function() {
        var a = g.g.xml.createElement("mutation");
        a.setAttribute("at", !!this.wC);
        return a
    },
    yb: function(a) {
        a = "false" != a.getAttribute("at");
        this.mc(a)
    },
    mc: function(a) {
        this.Db("AT", !0);
        this.Db("ORDINAL", !0);
        a && (F(this, "AT").hb("Number"), g.i.ORDINAL_NUMBER_SUFFIX && E(G(this, "ORDINAL"), g.i.ORDINAL_NUMBER_SUFFIX));
        g.i.TEXT_CHARAT_TAIL && (this.Db("TAIL", !0), E(G(this, "TAIL"), g.i.TEXT_CHARAT_TAIL));
        this.wC = a
    }
};
g.ca.Text.VG = function() {
    Rb(x(this, "WHERE"), function(c) {
        c = "FROM_START" == c || "FROM_END" == c;
        c != this.wC && this.ea().mc(c)
    });
    this.mc(!0);
    var a = this;
    this.Ra(function() {
        var c = B(a, "WHERE"),
            d = g.i.TEXT_CHARAT_TOOLTIP;
        ("FROM_START" == c || "FROM_END" == c) && (c = "FROM_START" == c ? g.i.LISTS_INDEX_FROM_START_TOOLTIP : g.i.LISTS_INDEX_FROM_END_TOOLTIP) && (d += "  " + c.replace("%1", a.u.options.Df ? "#1" : "#0"));
        return d
    })
};
g.ga.register("text_indexOf_tooltip", g.ca.Text.XG);
g.ga.register("text_quotes", g.ca.Text.$G);
g.ga.Np("text_join_mutator", g.ca.Text.ZG, g.ca.Text.YG);
g.ga.Np("text_charAt_mutator", g.ca.Text.WG, g.ca.Text.VG);
g.W.vL = {};
g.ca.ka = {};
g.ca.ka.Xl = 330;
g.ej([{
    type: "variables_get",
    message0: "%1",
    args0: [{
        type: "field_variable",
        name: "VAR",
        variable: "%{BKY_VARIABLES_DEFAULT_NAME}"
    }],
    output: null,
    style: "variable_blocks",
    helpUrl: "%{BKY_VARIABLES_GET_HELPURL}",
    tooltip: "%{BKY_VARIABLES_GET_TOOLTIP}",
    extensions: ["contextMenu_variableSetterGetter"]
}, {
    type: "variables_set",
    message0: "%{BKY_VARIABLES_SET}",
    args0: [{
        type: "field_variable",
        name: "VAR",
        variable: "%{BKY_VARIABLES_DEFAULT_NAME}"
    }, {
        type: "input_value",
        name: "VALUE"
    }],
    previousStatement: null,
    nextStatement: null,
    style: "variable_blocks",
    tooltip: "%{BKY_VARIABLES_SET_TOOLTIP}",
    helpUrl: "%{BKY_VARIABLES_SET_HELPURL}",
    extensions: ["contextMenu_variableSetterGetter"]
}]);
g.ca.ka.IE = {
    Ih: function(a) {
        if (!this.Yb) {
            if ("variables_get" == this.type) var c = "variables_set",
                d = g.i.VARIABLES_GET_CREATE_SET;
            else c = "variables_get", d = g.i.VARIABLES_SET_CREATE_GET;
            var e = {
                    enabled: 0 < Na(this.u)
                },
                f = x(this, "VAR").Hd();
            e.text = d.replace("%1", f);
            d = g.g.xml.createElement("field");
            d.setAttribute("name", "VAR");
            d.appendChild(g.g.xml.createTextNode(f));
            f = g.g.xml.createElement("block");
            f.setAttribute("type", c);
            f.appendChild(d);
            e.cb = g.Ya.Pr(this, f);
            a.push(e)
        } else if ("variables_get" == this.type || "variables_get_reporter" ==
            this.type) c = {
            text: g.i.oO,
            enabled: !0,
            cb: g.ca.ka.IG(this)
        }, f = x(this, "VAR").Hd(), e = {
            text: g.i.XL.replace("%1", f),
            enabled: !0,
            cb: g.ca.ka.PE(this)
        }, a.unshift(c), a.unshift(e)
    }
};
g.ca.ka.IG = function(a) {
    return function() {
        var c = a.u,
            d = x(a, "VAR").Id();
        g.ka.Ct(c, d)
    }
};
g.ca.ka.PE = function(a) {
    return function() {
        var c = a.u,
            d = x(a, "VAR").Id();
        c.Jh(d.Oa());
        hd(c)
    }
};
g.ga.zt("contextMenu_variableSetterGetter", g.ca.ka.IE);
g.Generator = function(a) {
    this.Vg = a;
    this.qF = new RegExp(this.Ec, "g")
};
b = g.Generator.prototype;
b.er = null;
b.se = null;
b.kd = null;
b.Od = "  ";
b.xE = 60;
b.qr = [];
b.Js = null;

function rf(a, c) {
    return c + a.replace(/(?!\n$)\n/g, "\n" + c)
}

function sf(a, c) {
    !1 === a.Js && console.warn("Generator init was not called before blockToCode was called.");
    if (!c) return "";
    if (!c.isEnabled()) return sf(a, r(c));
    if (c.nd()) return sf(a, wa(c, !1)[0]);
    var d = a[c.type];
    if ("function" != typeof d) throw Error('Language "' + a.Vg + '" does not know how to generate code for block type "' + c.type + '".');
    d = d.call(c, c);
    if (Array.isArray(d)) {
        if (!c.R) throw TypeError("Expecting string from statement block: " + c.type);
        return [a.Ft(c, d[0], void 0), d[1]]
    }
    if ("string" == typeof d) return a.se &&
        !c.Tj && (d = W(a.se, c) + d), a.kd && !c.Tj && (d += W(a.kd, c)), a.Ft(c, d, void 0);
    if (null === d) return "";
    throw SyntaxError("Invalid code generated: " + d);
}

function X(a, c, d, e) {
    if (isNaN(e)) throw TypeError("Expecting valid order from block: " + c.type);
    var f = H(c, d);
    if (!f) return "";
    d = sf(a, f);
    if ("" === d) return "";
    if (!Array.isArray(d)) throw TypeError("Expecting tuple from value block: " + f.type);
    c = d[0];
    d = d[1];
    if (isNaN(d)) throw TypeError("Expecting valid order from value block: " + f.type);
    if (!c) return "";
    f = !1;
    var h = Math.floor(e),
        k = Math.floor(d);
    if (h <= k && (h != k || 0 != h && 99 != h))
        for (f = !0, h = 0; h < a.qr.length; h++)
            if (a.qr[h][0] == e && a.qr[h][1] == d) {
                f = !1;
                break
            } f && (c = "(" + c + ")");
    return c
}

function tf(a, c) {
    var d = g.j;
    a = H(a, c);
    c = sf(d, a);
    if ("string" != typeof c) throw TypeError("Expecting code from statement block: " + (a && a.type));
    c && (c = rf(c, d.Od));
    return c
}

function uf(a, c) {
    var d = g.j;
    d.er && (a = rf(W(d.er, c), d.Od) + a);
    d.kd && !c.Tj && (a = rf(W(d.kd, c), d.Od) + a);
    d.se && !c.Tj && (a += rf(W(d.se, c), d.Od));
    return a
}

function W(a, c) {
    c = c.id.replace(/\$/g, "$$$$");
    return a.replace(/%1/g, "'" + c + "'")
}
b.Mu = "";

function vf(a, c) {
    a.Mu += c + ","
}
b.Ec = "{leCUI8hutHZI4480Dc}";
Object.defineProperty(g.Generator.prototype, "variableDB_", {
    get: function() {
        g.g.Dm.warn("variableDB_", "May 2021", "May 2026", "nameDB_");
        return this.Cb
    },
    set: function(a) {
        g.g.Dm.warn("variableDB_", "May 2021", "May 2026", "nameDB_");
        this.Cb = a
    }
});

function Y(a, c) {
    var d = g.j;
    if (!d.Cm[a]) {
        var e = vd(d.Cb, a, g.hm);
        d.yw[a] = e;
        c = c.join("\n").replace(d.qF, e);
        for (var f; f != c;) f = c, c = c.replace(/^(( {2})*) {2}/gm, "$1\x00");
        c = c.replace(/\0/g, d.Od);
        d.Cm[a] = c
    }
    return d.yw[a]
}
g.Generator.prototype.T = function() {
    this.Cm = Object.create(null);
    this.yw = Object.create(null)
};
g.Generator.prototype.Ft = function(a, c) {
    return c
};
g.Generator.prototype.finish = function(a) {
    delete this.Cm;
    delete this.yw;
    return a
};
g.Generator.prototype.CD = function(a) {
    return a
};
g.j = new g.Generator("JavaScript");
vf(g.j, "break,case,catch,class,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,in,instanceof,new,return,super,switch,this,throw,try,typeof,var,void,while,with,yield,enum,implements,interface,let,package,private,protected,public,static,await,null,true,false,arguments," + Object.getOwnPropertyNames(g.g.global).join(","));
g.j.kf = 0;
g.j.$N = 1.1;
g.j.pb = 1.2;
g.j.La = 2;
g.j.YN = 3;
g.j.UN = 3;
g.j.QN = 4.1;
g.j.bO = 4.2;
g.j.ao = 4.3;
g.j.fm = 4.4;
g.j.aO = 4.5;
g.j.cO = 4.6;
g.j.VN = 4.7;
g.j.ON = 4.8;
g.j.WN = 5;
g.j.Fu = 5.1;
g.j.Zn = 5.2;
g.j.$n = 5.3;
g.j.Li = 6.1;
g.j.ug = 6.2;
g.j.SN = 7;
g.j.mG = 8;
g.j.XN = 8;
g.j.ZN = 8;
g.j.gA = 9;
g.j.PN = 10;
g.j.TN = 11;
g.j.RN = 12;
g.j.Du = 13;
g.j.Eu = 14;
g.j.pr = 15;
g.j.rk = 16;
g.j.dO = 17;
g.j.Yn = 18;
g.j.ya = 99;
g.j.qr = [
    [g.j.La, g.j.pb],
    [g.j.La, g.j.La],
    [g.j.pb, g.j.pb],
    [g.j.pb, g.j.La],
    [g.j.fm, g.j.fm],
    [g.j.Fu, g.j.Fu],
    [g.j.ug, g.j.ug],
    [g.j.Du, g.j.Du],
    [g.j.Eu, g.j.Eu]
];
g.j.Js = !1;
g.j.T = function(a) {
    Object.getPrototypeOf(this).T.call(this);
    this.Cb ? this.Cb.reset() : this.Cb = new g.Rd(this.Mu);
    this.Cb.Jy(a.Ua);
    for (var c = this.Cb, d = g.ka.gv(a), e = 0; e < d.length; e++) c.Gd(d[e].Oa(), g.ic);
    c = this.Cb;
    d = g.Da.NA(a);
    d = d[0].concat(d[1]);
    for (e = 0; e < d.length; e++) c.Gd(d[e][0], g.hm);
    c = [];
    e = g.ka.qH(a);
    for (d = 0; d < e.length; d++) c.push(this.Cb.Gd(e[d], g.Rd.fu));
    a = g.ka.gv(a);
    for (d = 0; d < a.length; d++) c.push(this.Cb.Gd(a[d].Oa(), g.ic));
    c.length && (this.Cm.variables = "var " + c.join(", ") + ";");
    this.Js = !0
};
g.j.finish = function(a) {
    var c = g.g.object.values(this.Cm);
    a = Object.getPrototypeOf(this).finish.call(this, a);
    this.Js = !1;
    this.Cb.reset();
    return c.join("\n\n") + "\n\n\n" + a
};
g.j.CD = function(a) {
    return a + ";\n"
};
g.j.ul = function(a) {
    a = a.replace(/\\/g, "\\\\").replace(/\n/g, "\\\n").replace(/'/g, "\\'");
    return "'" + a + "'"
};
g.j.LJ = function(a) {
    return a.split(/\n/g).map(this.ul).join(" + '\\n' +\n")
};
g.j.Ft = function(a, c, d) {
    var e = "";
    if (!a.R || !a.R.va) {
        var f = a.Le.text;
        f && (f = g.g.Ab.cE(f, this.xE - 3), e += rf(f + "\n", "// "));
        for (var h = 0; h < a.Y.length; h++)
            if (a.Y[h].type == g.ob.yg) {
                var k = a.Y[h].connection.ra();
                if (k) {
                    f = [];
                    k = p(k, !0);
                    for (var l = 0; l < k.length; l++) {
                        var m = k[l].Le.text;
                        m && f.push(m)
                    }
                    f.length && f.push("");
                    (f = f.join("\n")) && (e += rf(f, "// "))
                }
            }
    }
    a = a.aa && a.aa.ra();
    d = d ? "" : sf(this, a);
    return e + c + d
};
g.j.dd = function(a, c, d, e, f) {
    d = d || 0;
    f = f || this.ya;
    a.u.options.Df && d--;
    var h = a.u.options.Df ? "1" : "0";
    a = 0 < d ? X(this, a, c, this.ug) || h : 0 > d ? X(this, a, c, this.Li) || h : e ? X(this, a, c, this.ao) || h : X(this, a, c, f) || h;
    if (g.yj(a)) a = Number(a) + d, e && (a = -a);
    else {
        if (0 < d) {
            a = a + " + " + d;
            var k = this.ug
        } else 0 > d && (a = a + " - " + -d, k = this.Li);
        e && (a = d ? "-(" + a + ")" : "-" + a, k = this.ao);
        k = Math.floor(k);
        f = Math.floor(f);
        k && f >= k && (a = "(" + a + ")")
    }
    return a
};
g.j.rb = {};
g.j.colour_picker = function(a) {
    return [g.j.ul(B(a, "COLOUR")), g.j.kf]
};
g.j.colour_random = function() {
    return [Y("colourRandom", ["function " + g.j.Ec + "() {", "  var num = Math.floor(Math.random() * Math.pow(2, 24));", "  return '#' + ('00000' + num.toString(16)).substr(-6);", "}"]) + "()", g.j.La]
};
g.j.colour_rgb = function(a) {
    var c = X(g.j, a, "RED", g.j.ya) || 0,
        d = X(g.j, a, "GREEN", g.j.ya) || 0;
    a = X(g.j, a, "BLUE", g.j.ya) || 0;
    return [Y("colourRgb", ["function " + g.j.Ec + "(r, g, b) {", "  r = Math.max(Math.min(Number(r), 100), 0) * 2.55;", "  g = Math.max(Math.min(Number(g), 100), 0) * 2.55;", "  b = Math.max(Math.min(Number(b), 100), 0) * 2.55;", "  r = ('0' + (Math.round(r) || 0).toString(16)).slice(-2);", "  g = ('0' + (Math.round(g) || 0).toString(16)).slice(-2);", "  b = ('0' + (Math.round(b) || 0).toString(16)).slice(-2);",
        "  return '#' + r + g + b;", "}"
    ]) + "(" + c + ", " + d + ", " + a + ")", g.j.La]
};
g.j.colour_blend = function(a) {
    var c = X(g.j, a, "COLOUR1", g.j.ya) || "'#000000'",
        d = X(g.j, a, "COLOUR2", g.j.ya) || "'#000000'";
    a = X(g.j, a, "RATIO", g.j.ya) || .5;
    return [Y("colourBlend", ["function " + g.j.Ec + "(c1, c2, ratio) {", "  ratio = Math.max(Math.min(Number(ratio), 1), 0);", "  var r1 = parseInt(c1.substring(1, 3), 16);", "  var g1 = parseInt(c1.substring(3, 5), 16);", "  var b1 = parseInt(c1.substring(5, 7), 16);", "  var r2 = parseInt(c2.substring(1, 3), 16);", "  var g2 = parseInt(c2.substring(3, 5), 16);", "  var b2 = parseInt(c2.substring(5, 7), 16);",
        "  var r = Math.round(r1 * (1 - ratio) + r2 * ratio);", "  var g = Math.round(g1 * (1 - ratio) + g2 * ratio);", "  var b = Math.round(b1 * (1 - ratio) + b2 * ratio);", "  r = ('0' + (r || 0).toString(16)).slice(-2);", "  g = ('0' + (g || 0).toString(16)).slice(-2);", "  b = ('0' + (b || 0).toString(16)).slice(-2);", "  return '#' + r + g + b;", "}"
    ]) + "(" + c + ", " + d + ", " + a + ")", g.j.La]
};
g.j.JC = {};
g.j.lists_create_empty = function() {
    return ["[]", g.j.kf]
};
g.j.lists_create_with = function(a) {
    for (var c = Array(a.ec), d = 0; d < a.ec; d++) c[d] = X(g.j, a, "ADD" + d, g.j.ya) || "null";
    return ["[" + c.join(", ") + "]", g.j.kf]
};
g.j.lists_repeat = function(a) {
    var c = Y("listsRepeat", ["function " + g.j.Ec + "(value, n) {", "  var array = [];", "  for (var i = 0; i < n; i++) {", "    array[i] = value;", "  }", "  return array;", "}"]),
        d = X(g.j, a, "ITEM", g.j.ya) || "null";
    a = X(g.j, a, "NUM", g.j.ya) || "0";
    return [c + "(" + d + ", " + a + ")", g.j.La]
};
g.j.lists_length = function(a) {
    return [(X(g.j, a, "VALUE", g.j.pb) || "[]") + ".length", g.j.pb]
};
g.j.lists_isEmpty = function(a) {
    return ["!" + (X(g.j, a, "VALUE", g.j.pb) || "[]") + ".length", g.j.fm]
};
g.j.lists_indexOf = function(a) {
    var c = "FIRST" == B(a, "END") ? "indexOf" : "lastIndexOf",
        d = X(g.j, a, "FIND", g.j.ya) || "''";
    c = (X(g.j, a, "VALUE", g.j.pb) || "[]") + "." + c + "(" + d + ")";
    return a.u.options.Df ? [c + " + 1", g.j.ug] : [c, g.j.La]
};
g.j.lists_getIndex = function(a) {
    var c = B(a, "MODE") || "GET",
        d = B(a, "WHERE") || "FROM_START",
        e = X(g.j, a, "VALUE", "RANDOM" == d ? g.j.ya : g.j.pb) || "[]";
    switch (d) {
        case "FIRST":
            if ("GET" == c) return [e + "[0]", g.j.pb];
            if ("GET_REMOVE" == c) return [e + ".shift()", g.j.pb];
            if ("REMOVE" == c) return e + ".shift();\n";
            break;
        case "LAST":
            if ("GET" == c) return [e + ".slice(-1)[0]", g.j.pb];
            if ("GET_REMOVE" == c) return [e + ".pop()", g.j.pb];
            if ("REMOVE" == c) return e + ".pop();\n";
            break;
        case "FROM_START":
            a = g.j.dd(a, "AT");
            if ("GET" == c) return [e + "[" + a + "]", g.j.pb];
            if ("GET_REMOVE" == c) return [e + ".splice(" + a + ", 1)[0]", g.j.La];
            if ("REMOVE" == c) return e + ".splice(" + a + ", 1);\n";
            break;
        case "FROM_END":
            a = g.j.dd(a, "AT", 1, !0);
            if ("GET" == c) return [e + ".slice(" + a + ")[0]", g.j.La];
            if ("GET_REMOVE" == c) return [e + ".splice(" + a + ", 1)[0]", g.j.La];
            if ("REMOVE" == c) return e + ".splice(" + a + ", 1);";
            break;
        case "RANDOM":
            e = Y("listsGetRandomItem", ["function " + g.j.Ec + "(list, remove) {", "  var x = Math.floor(Math.random() * list.length);", "  if (remove) {", "    return list.splice(x, 1)[0];", "  } else {",
                "    return list[x];", "  }", "}"
            ]) + "(" + e + ", " + ("GET" != c) + ")";
            if ("GET" == c || "GET_REMOVE" == c) return [e, g.j.La];
            if ("REMOVE" == c) return e + ";\n"
    }
    throw Error("Unhandled combination (lists_getIndex).");
};
g.j.lists_setIndex = function(a) {
    function c() {
        if (d.match(/^\w+$/)) return "";
        var k = vd(g.j.Cb, "tmpList", g.ic),
            l = "var " + k + " = " + d + ";\n";
        d = k;
        return l
    }
    var d = X(g.j, a, "LIST", g.j.pb) || "[]",
        e = B(a, "MODE") || "GET",
        f = B(a, "WHERE") || "FROM_START",
        h = X(g.j, a, "TO", g.j.rk) || "null";
    switch (f) {
        case "FIRST":
            if ("SET" == e) return d + "[0] = " + h + ";\n";
            if ("INSERT" == e) return d + ".unshift(" + h + ");\n";
            break;
        case "LAST":
            if ("SET" == e) return a = c(), a + (d + "[" + d + ".length - 1] = " + h + ";\n");
            if ("INSERT" == e) return d + ".push(" + h + ");\n";
            break;
        case "FROM_START":
            f =
                g.j.dd(a, "AT");
            if ("SET" == e) return d + "[" + f + "] = " + h + ";\n";
            if ("INSERT" == e) return d + ".splice(" + f + ", 0, " + h + ");\n";
            break;
        case "FROM_END":
            f = g.j.dd(a, "AT", 1, !1, g.j.Li);
            a = c();
            if ("SET" == e) return a + (d + "[" + d + ".length - " + f + "] = " + h + ";\n");
            if ("INSERT" == e) return a + (d + ".splice(" + d + ".length - " + f + ", 0, " + h + ");\n");
            break;
        case "RANDOM":
            a = c();
            f = vd(g.j.Cb, "tmpX", g.ic);
            a += "var " + f + " = Math.floor(Math.random() * " + d + ".length);\n";
            if ("SET" == e) return a + (d + "[" + f + "] = " + h + ";\n");
            if ("INSERT" == e) return a + (d + ".splice(" + f + ", 0, " +
                h + ");\n")
    }
    throw Error("Unhandled combination (lists_setIndex).");
};
g.j.JC.Gw = function(a, c, d) {
    return "FIRST" == c ? "0" : "FROM_END" == c ? a + ".length - 1 - " + d : "LAST" == c ? a + ".length - 1" : d
};
g.j.lists_getSublist = function(a) {
    var c = X(g.j, a, "LIST", g.j.pb) || "[]",
        d = B(a, "WHERE1"),
        e = B(a, "WHERE2");
    if ("FIRST" == d && "LAST" == e) c += ".slice(0)";
    else if (c.match(/^\w+$/) || "FROM_END" != d && "FROM_START" == e) {
        switch (d) {
            case "FROM_START":
                var f = g.j.dd(a, "AT1");
                break;
            case "FROM_END":
                f = g.j.dd(a, "AT1", 1, !1, g.j.Li);
                f = c + ".length - " + f;
                break;
            case "FIRST":
                f = "0";
                break;
            default:
                throw Error("Unhandled option (lists_getSublist).");
        }
        switch (e) {
            case "FROM_START":
                a = g.j.dd(a, "AT2", 1);
                break;
            case "FROM_END":
                a = g.j.dd(a, "AT2", 0, !1,
                    g.j.Li);
                a = c + ".length - " + a;
                break;
            case "LAST":
                a = c + ".length";
                break;
            default:
                throw Error("Unhandled option (lists_getSublist).");
        }
        c = c + ".slice(" + f + ", " + a + ")"
    } else {
        f = g.j.dd(a, "AT1");
        a = g.j.dd(a, "AT2");
        var h = g.j.JC.Gw,
            k = {
                FIRST: "First",
                LAST: "Last",
                FROM_START: "FromStart",
                FROM_END: "FromEnd"
            };
        c = Y("subsequence" + k[d] + k[e], ["function " + g.j.Ec + "(sequence" + ("FROM_END" == d || "FROM_START" == d ? ", at1" : "") + ("FROM_END" == e || "FROM_START" == e ? ", at2" : "") + ") {", "  var start = " + h("sequence", d, "at1") + ";", "  var end = " + h("sequence",
            e, "at2") + " + 1;", "  return sequence.slice(start, end);", "}"]) + "(" + c + ("FROM_END" == d || "FROM_START" == d ? ", " + f : "") + ("FROM_END" == e || "FROM_START" == e ? ", " + a : "") + ")"
    }
    return [c, g.j.La]
};
g.j.lists_sort = function(a) {
    var c = X(g.j, a, "LIST", g.j.La) || "[]",
        d = "1" === B(a, "DIRECTION") ? 1 : -1;
    a = B(a, "TYPE");
    var e = Y("listsGetSortCompare", ["function " + g.j.Ec + "(type, direction) {", "  var compareFuncs = {", '    "NUMERIC": function(a, b) {', "        return Number(a) - Number(b); },", '    "TEXT": function(a, b) {', "        return a.toString() > b.toString() ? 1 : -1; },", '    "IGNORE_CASE": function(a, b) {', "        return a.toString().toLowerCase() > b.toString().toLowerCase() ? 1 : -1; },", "  };", "  var compare = compareFuncs[type];",
        "  return function(a, b) { return compare(a, b) * direction; }", "}"
    ]);
    return [c + ".slice().sort(" + e + '("' + a + '", ' + d + "))", g.j.La]
};
g.j.lists_split = function(a) {
    var c = X(g.j, a, "INPUT", g.j.pb),
        d = X(g.j, a, "DELIM", g.j.ya) || "''";
    a = B(a, "MODE");
    if ("SPLIT" == a) c || (c = "''"), a = "split";
    else if ("JOIN" == a) c || (c = "[]"), a = "join";
    else throw Error("Unknown mode: " + a);
    return [c + "." + a + "(" + d + ")", g.j.La]
};
g.j.lists_reverse = function(a) {
    return [(X(g.j, a, "LIST", g.j.La) || "[]") + ".slice().reverse()", g.j.La]
};
g.j.AJ = {};
g.j.controls_if = function(a) {
    var c = 0,
        d = "";
    g.j.se && (d += W(g.j.se, a));
    do {
        var e = X(g.j, a, "IF" + c, g.j.ya) || "false";
        var f = tf(a, "DO" + c);
        g.j.kd && (f = rf(W(g.j.kd, a), g.j.Od) + f);
        d += (0 < c ? " else " : "") + "if (" + e + ") {\n" + f + "}";
        ++c
    } while (w(a, "IF" + c));
    if (w(a, "ELSE") || g.j.kd) f = tf(a, "ELSE"), g.j.kd && (f = rf(W(g.j.kd, a), g.j.Od) + f), d += " else {\n" + f + "}";
    return d + "\n"
};
g.j.controls_ifelse = g.j.controls_if;
g.j.logic_compare = function(a) {
    var c = {
            EQ: "==",
            NEQ: "!=",
            LT: "<",
            LTE: "<=",
            GT: ">",
            GTE: ">="
        } [B(a, "OP")],
        d = "==" == c || "!=" == c ? g.j.gA : g.j.mG,
        e = X(g.j, a, "A", d) || "0";
    a = X(g.j, a, "B", d) || "0";
    return [e + " " + c + " " + a, d]
};
g.j.logic_operation = function(a) {
    var c = "AND" == B(a, "OP") ? "&&" : "||",
        d = "&&" == c ? g.j.Du : g.j.Eu,
        e = X(g.j, a, "A", d);
    a = X(g.j, a, "B", d);
    if (e || a) {
        var f = "&&" == c ? "true" : "false";
        e || (e = f);
        a || (a = f)
    } else a = e = "false";
    return [e + " " + c + " " + a, d]
};
g.j.logic_negate = function(a) {
    var c = g.j.fm;
    return ["!" + (X(g.j, a, "BOOL", c) || "true"), c]
};
g.j.logic_boolean = function(a) {
    return ["TRUE" == B(a, "BOOL") ? "true" : "false", g.j.kf]
};
g.j.logic_null = function() {
    return ["null", g.j.kf]
};
g.j.logic_ternary = function(a) {
    var c = X(g.j, a, "IF", g.j.pr) || "false",
        d = X(g.j, a, "THEN", g.j.pr) || "null";
    a = X(g.j, a, "ELSE", g.j.pr) || "null";
    return [c + " ? " + d + " : " + a, g.j.pr]
};
g.j.CJ = {};
g.j.controls_repeat_ext = function(a) {
    var c = x(a, "TIMES") ? String(Number(B(a, "TIMES"))) : X(g.j, a, "TIMES", g.j.rk) || "0",
        d = tf(a, "DO");
    d = uf(d, a);
    a = "";
    var e = vd(g.j.Cb, "count", g.ic),
        f = c;
    c.match(/^\w+$/) || g.yj(c) || (f = vd(g.j.Cb, "repeat_end", g.ic), a += "var " + f + " = " + c + ";\n");
    return a + ("for (var " + e + " = 0; " + e + " < " + f + "; " + e + "++) {\n" + d + "}\n")
};
g.j.controls_repeat = g.j.controls_repeat_ext;
g.j.controls_whileUntil = function(a) {
    var c = "UNTIL" == B(a, "MODE"),
        d = X(g.j, a, "BOOL", c ? g.j.fm : g.j.ya) || "false",
        e = tf(a, "DO");
    e = uf(e, a);
    c && (d = "!" + d);
    return "while (" + d + ") {\n" + e + "}\n"
};
g.j.controls_for = function(a) {
    var c = g.j.Cb.Gd(B(a, "VAR"), g.ic),
        d = X(g.j, a, "FROM", g.j.rk) || "0",
        e = X(g.j, a, "TO", g.j.rk) || "0",
        f = X(g.j, a, "BY", g.j.rk) || "1",
        h = tf(a, "DO");
    h = uf(h, a);
    if (g.yj(d) && g.yj(e) && g.yj(f)) {
        var k = Number(d) <= Number(e);
        a = "for (" + c + " = " + d + "; " + c + (k ? " <= " : " >= ") + e + "; " + c;
        c = Math.abs(Number(f));
        a = (1 == c ? a + (k ? "++" : "--") : a + ((k ? " += " : " -= ") + c)) + (") {\n" + h + "}\n")
    } else a = "", k = d, d.match(/^\w+$/) || g.yj(d) || (k = vd(g.j.Cb, c + "_start", g.ic), a += "var " + k + " = " + d + ";\n"), d = e, e.match(/^\w+$/) || g.yj(e) || (d =
        vd(g.j.Cb, c + "_end", g.ic), a += "var " + d + " = " + e + ";\n"), e = vd(g.j.Cb, c + "_inc", g.ic), a += "var " + e + " = ", a = g.yj(f) ? a + (Math.abs(f) + ";\n") : a + ("Math.abs(" + f + ");\n"), a = a + ("if (" + k + " > " + d + ") {\n") + (g.j.Od + e + " = -" + e + ";\n"), a += "}\n", a += "for (" + c + " = " + k + "; " + e + " >= 0 ? " + c + " <= " + d + " : " + c + " >= " + d + "; " + c + " += " + e + ") {\n" + h + "}\n";
    return a
};
g.j.controls_forEach = function(a) {
    var c = g.j.Cb.Gd(B(a, "VAR"), g.ic),
        d = X(g.j, a, "LIST", g.j.rk) || "[]",
        e = tf(a, "DO");
    e = uf(e, a);
    a = "";
    var f = d;
    d.match(/^\w+$/) || (f = vd(g.j.Cb, c + "_list", g.ic), a += "var " + f + " = " + d + ";\n");
    d = vd(g.j.Cb, c + "_index", g.ic);
    e = g.j.Od + c + " = " + f + "[" + d + "];\n" + e;
    return a + ("for (var " + d + " in " + f + ") {\n" + e + "}\n")
};
g.j.controls_flow_statements = function(a) {
    var c = "";
    g.j.se && (c += W(g.j.se, a));
    g.j.kd && (c += W(g.j.kd, a));
    if (g.j.se) {
        var d = g.ca.hf.Tq.dC(a);
        d && !d.Tj && (c += W(g.j.se, d))
    }
    switch (B(a, "FLOW")) {
        case "BREAK":
            return c + "break;\n";
        case "CONTINUE":
            return c + "continue;\n"
    }
    throw Error("Unknown flow statement.");
};
g.j.od = {};
g.j.math_number = function(a) {
    a = Number(B(a, "NUM"));
    return [a, 0 <= a ? g.j.kf : g.j.ao]
};
g.j.math_arithmetic = function(a) {
    var c = {
            ADD: [" + ", g.j.ug],
            MINUS: [" - ", g.j.Li],
            MULTIPLY: [" * ", g.j.Fu],
            DIVIDE: [" / ", g.j.Zn],
            POWER: [null, g.j.ya]
        } [B(a, "OP")],
        d = c[0];
    c = c[1];
    var e = X(g.j, a, "A", c) || "0";
    a = X(g.j, a, "B", c) || "0";
    return d ? [e + d + a, c] : ["Math.pow(" + e + ", " + a + ")", g.j.La]
};
g.j.math_single = function(a) {
    var c = B(a, "OP");
    if ("NEG" == c) return a = X(g.j, a, "NUM", g.j.ao) || "0", "-" == a[0] && (a = " " + a), ["-" + a, g.j.ao];
    a = "SIN" == c || "COS" == c || "TAN" == c ? X(g.j, a, "NUM", g.j.Zn) || "0" : X(g.j, a, "NUM", g.j.ya) || "0";
    switch (c) {
        case "ABS":
            var d = "Math.abs(" + a + ")";
            break;
        case "ROOT":
            d = "Math.sqrt(" + a + ")";
            break;
        case "LN":
            d = "Math.log(" + a + ")";
            break;
        case "EXP":
            d = "Math.exp(" + a + ")";
            break;
        case "POW10":
            d = "Math.pow(10," + a + ")";
            break;
        case "ROUND":
            d = "Math.round(" + a + ")";
            break;
        case "ROUNDUP":
            d = "Math.ceil(" + a + ")";
            break;
        case "ROUNDDOWN":
            d = "Math.floor(" + a + ")";
            break;
        case "SIN":
            d = "Math.sin(" + a + " / 180 * Math.PI)";
            break;
        case "COS":
            d = "Math.cos(" + a + " / 180 * Math.PI)";
            break;
        case "TAN":
            d = "Math.tan(" + a + " / 180 * Math.PI)"
    }
    if (d) return [d, g.j.La];
    switch (c) {
        case "LOG10":
            d = "Math.log(" + a + ") / Math.log(10)";
            break;
        case "ASIN":
            d = "Math.asin(" + a + ") / Math.PI * 180";
            break;
        case "ACOS":
            d = "Math.acos(" + a + ") / Math.PI * 180";
            break;
        case "ATAN":
            d = "Math.atan(" + a + ") / Math.PI * 180";
            break;
        default:
            throw Error("Unknown math operator: " + c);
    }
    return [d,
        g.j.Zn
    ]
};
g.j.math_constant = function(a) {
    return {
        PI: ["Math.PI", g.j.pb],
        E: ["Math.E", g.j.pb],
        GOLDEN_RATIO: ["(1 + Math.sqrt(5)) / 2", g.j.Zn],
        SQRT2: ["Math.SQRT2", g.j.pb],
        SQRT1_2: ["Math.SQRT1_2", g.j.pb],
        INFINITY: ["Infinity", g.j.kf]
    } [B(a, "CONSTANT")]
};
g.j.math_number_property = function(a) {
    var c = X(g.j, a, "NUMBER_TO_CHECK", g.j.$n) || "0",
        d = B(a, "PROPERTY");
    if ("PRIME" == d) {
        var e = Y("mathIsPrime", ["function " + g.j.Ec + "(n) {", "  // https://en.wikipedia.org/wiki/Primality_test#Naive_methods", "  if (n == 2 || n == 3) {", "    return true;", "  }", "  // False if n is NaN, negative, is 1, or not whole.", "  // And false if n is divisible by 2 or 3.", "  if (isNaN(n) || n <= 1 || n % 1 != 0 || n % 2 == 0 || n % 3 == 0) {", "    return false;", "  }", "  // Check all the numbers of form 6k +/- 1, up to sqrt(n).",
            "  for (var x = 6; x <= Math.sqrt(n) + 1; x += 6) {", "    if (n % (x - 1) == 0 || n % (x + 1) == 0) {", "      return false;", "    }", "  }", "  return true;", "}"
        ]) + "(" + c + ")";
        return [e, g.j.La]
    }
    switch (d) {
        case "EVEN":
            e = c + " % 2 == 0";
            break;
        case "ODD":
            e = c + " % 2 == 1";
            break;
        case "WHOLE":
            e = c + " % 1 == 0";
            break;
        case "POSITIVE":
            e = c + " > 0";
            break;
        case "NEGATIVE":
            e = c + " < 0";
            break;
        case "DIVISIBLE_BY":
            a = X(g.j, a, "DIVISOR", g.j.$n) || "0", e = c + " % " + a + " == 0"
    }
    return [e, g.j.gA]
};
g.j.math_change = function(a) {
    var c = X(g.j, a, "DELTA", g.j.ug) || "0";
    a = g.j.Cb.Gd(B(a, "VAR"), g.ic);
    return a + " = (typeof " + a + " == 'number' ? " + a + " : 0) + " + c + ";\n"
};
g.j.math_round = g.j.math_single;
g.j.math_trig = g.j.math_single;
g.j.math_on_list = function(a) {
    var c = B(a, "OP");
    switch (c) {
        case "SUM":
            a = X(g.j, a, "LIST", g.j.pb) || "[]";
            a += ".reduce(function(x, y) {return x + y;})";
            break;
        case "MIN":
            a = X(g.j, a, "LIST", g.j.ya) || "[]";
            a = "Math.min.apply(null, " + a + ")";
            break;
        case "MAX":
            a = X(g.j, a, "LIST", g.j.ya) || "[]";
            a = "Math.max.apply(null, " + a + ")";
            break;
        case "AVERAGE":
            c = Y("mathMean", ["function " + g.j.Ec + "(myList) {", "  return myList.reduce(function(x, y) {return x + y;}) / myList.length;", "}"]);
            a = X(g.j, a, "LIST", g.j.ya) || "[]";
            a = c + "(" + a + ")";
            break;
        case "MEDIAN":
            c = Y("mathMedian", ["function " + g.j.Ec + "(myList) {", "  var localList = myList.filter(function (x) {return typeof x == 'number';});", "  if (!localList.length) return null;", "  localList.sort(function(a, b) {return b - a;});", "  if (localList.length % 2 == 0) {", "    return (localList[localList.length / 2 - 1] + localList[localList.length / 2]) / 2;", "  } else {", "    return localList[(localList.length - 1) / 2];", "  }", "}"]);
            a = X(g.j, a, "LIST", g.j.ya) || "[]";
            a = c + "(" + a + ")";
            break;
        case "MODE":
            c =
                Y("mathModes", ["function " + g.j.Ec + "(values) {", "  var modes = [];", "  var counts = [];", "  var maxCount = 0;", "  for (var i = 0; i < values.length; i++) {", "    var value = values[i];", "    var found = false;", "    var thisCount;", "    for (var j = 0; j < counts.length; j++) {", "      if (counts[j][0] === value) {", "        thisCount = ++counts[j][1];", "        found = true;", "        break;", "      }", "    }", "    if (!found) {", "      counts.push([value, 1]);", "      thisCount = 1;", "    }", "    maxCount = Math.max(thisCount, maxCount);",
                    "  }", "  for (var j = 0; j < counts.length; j++) {", "    if (counts[j][1] == maxCount) {", "        modes.push(counts[j][0]);", "    }", "  }", "  return modes;", "}"
                ]);
            a = X(g.j, a, "LIST", g.j.ya) || "[]";
            a = c + "(" + a + ")";
            break;
        case "STD_DEV":
            c = Y("mathStandardDeviation", ["function " + g.j.Ec + "(numbers) {", "  var n = numbers.length;", "  if (!n) return null;", "  var mean = numbers.reduce(function(x, y) {return x + y;}) / n;", "  var variance = 0;", "  for (var j = 0; j < n; j++) {", "    variance += Math.pow(numbers[j] - mean, 2);",
                "  }", "  variance = variance / n;", "  return Math.sqrt(variance);", "}"
            ]);
            a = X(g.j, a, "LIST", g.j.ya) || "[]";
            a = c + "(" + a + ")";
            break;
        case "RANDOM":
            c = Y("mathRandomList", ["function " + g.j.Ec + "(list) {", "  var x = Math.floor(Math.random() * list.length);", "  return list[x];", "}"]);
            a = X(g.j, a, "LIST", g.j.ya) || "[]";
            a = c + "(" + a + ")";
            break;
        default:
            throw Error("Unknown operator: " + c);
    }
    return [a, g.j.La]
};
g.j.math_modulo = function(a) {
    var c = X(g.j, a, "DIVIDEND", g.j.$n) || "0";
    a = X(g.j, a, "DIVISOR", g.j.$n) || "0";
    return [c + " % " + a, g.j.$n]
};
g.j.math_constrain = function(a) {
    var c = X(g.j, a, "VALUE", g.j.ya) || "0",
        d = X(g.j, a, "LOW", g.j.ya) || "0";
    a = X(g.j, a, "HIGH", g.j.ya) || "Infinity";
    return ["Math.min(Math.max(" + c + ", " + d + "), " + a + ")", g.j.La]
};
g.j.math_random_int = function(a) {
    var c = X(g.j, a, "FROM", g.j.ya) || "0";
    a = X(g.j, a, "TO", g.j.ya) || "0";
    return [Y("mathRandomInt", ["function " + g.j.Ec + "(a, b) {", "  if (a > b) {", "    // Swap a and b to ensure a is smaller.", "    var c = a;", "    a = b;", "    b = c;", "  }", "  return Math.floor(Math.random() * (b - a + 1) + a);", "}"]) + "(" + c + ", " + a + ")", g.j.La]
};
g.j.math_random_float = function() {
    return ["Math.random()", g.j.La]
};
g.j.math_atan2 = function(a) {
    var c = X(g.j, a, "X", g.j.ya) || "0";
    return ["Math.atan2(" + (X(g.j, a, "Y", g.j.ya) || "0") + ", " + c + ") / Math.PI * 180", g.j.Zn]
};
g.j.pK = {};
g.j.procedures_defreturn = function(a) {
    var c = g.j.Cb.Gd(B(a, "NAME"), g.hm),
        d = "";
    g.j.se && (d += W(g.j.se, a));
    g.j.kd && (d += W(g.j.kd, a));
    d && (d = rf(d, g.j.Od));
    var e = "";
    g.j.er && (e = rf(W(g.j.er, a), g.j.Od));
    var f = tf(a, "STACK"),
        h = X(g.j, a, "RETURN", g.j.ya) || "",
        k = "";
    f && h && (k = d);
    h && (h = g.j.Od + "return " + h + ";\n");
    for (var l = [], m = a.Ph(), n = 0; n < m.length; n++) l[n] = g.j.Cb.Gd(m[n], g.ic);
    d = "function " + c + "(" + l.join(", ") + ") {\n" + d + e + f + k + h + "}";
    d = g.j.Ft(a, d);
    g.j.Cm["%" + c] = d;
    return null
};
g.j.procedures_defnoreturn = g.j.procedures_defreturn;
g.j.procedures_callreturn = function(a) {
    for (var c = g.j.Cb.Gd(B(a, "NAME"), g.hm), d = [], e = a.Ph(), f = 0; f < e.length; f++) d[f] = X(g.j, a, "ARG" + f, g.j.ya) || "null";
    return [c + "(" + d.join(", ") + ")", g.j.La]
};
g.j.procedures_callnoreturn = function(a) {
    return g.j.procedures_callreturn(a)[0] + ";\n"
};
g.j.procedures_ifreturn = function(a) {
    var c = "if (" + (X(g.j, a, "CONDITION", g.j.ya) || "false") + ") {\n";
    g.j.kd && (c += rf(W(g.j.kd, a), g.j.Od));
    a.mj ? (a = X(g.j, a, "VALUE", g.j.ya) || "null", c += g.j.Od + "return " + a + ";\n") : c += g.j.Od + "return;\n";
    return c + "}\n"
};
g.j.iL = {};
g.j.text = function(a) {
    return [g.j.ul(B(a, "TEXT")), g.j.kf]
};
g.j.text_multiline = function(a) {
    a = g.j.LJ(B(a, "TEXT"));
    return [a, -1 != a.indexOf("+") ? g.j.ug : g.j.kf]
};
g.j.text.Hm = function(a) {
    return g.j.text.Hm.fL.test(a) ? [a, g.j.kf] : ["String(" + a + ")", g.j.La]
};
g.j.text.Hm.fL = /^\s*'([^']|\\')*'\s*$/;
g.j.text_join = function(a) {
    switch (a.ec) {
        case 0:
            return ["''", g.j.kf];
        case 1:
            return a = X(g.j, a, "ADD0", g.j.ya) || "''", g.j.text.Hm(a);
        case 2:
            var c = X(g.j, a, "ADD0", g.j.ya) || "''";
            a = X(g.j, a, "ADD1", g.j.ya) || "''";
            a = g.j.text.Hm(c)[0] + " + " + g.j.text.Hm(a)[0];
            return [a, g.j.ug];
        default:
            c = Array(a.ec);
            for (var d = 0; d < a.ec; d++) c[d] = X(g.j, a, "ADD" + d, g.j.ya) || "''";
            a = "[" + c.join(",") + "].join('')";
            return [a, g.j.La]
    }
};
g.j.text_append = function(a) {
    var c = g.j.Cb.Gd(B(a, "VAR"), g.ic);
    a = X(g.j, a, "TEXT", g.j.ya) || "''";
    return c + " += " + g.j.text.Hm(a)[0] + ";\n"
};
g.j.text_length = function(a) {
    return [(X(g.j, a, "VALUE", g.j.pb) || "''") + ".length", g.j.pb]
};
g.j.text_isEmpty = function(a) {
    return ["!" + (X(g.j, a, "VALUE", g.j.pb) || "''") + ".length", g.j.fm]
};
g.j.text_indexOf = function(a) {
    var c = "FIRST" == B(a, "END") ? "indexOf" : "lastIndexOf",
        d = X(g.j, a, "FIND", g.j.ya) || "''";
    c = (X(g.j, a, "VALUE", g.j.pb) || "''") + "." + c + "(" + d + ")";
    return a.u.options.Df ? [c + " + 1", g.j.ug] : [c, g.j.La]
};
g.j.text_charAt = function(a) {
    var c = B(a, "WHERE") || "FROM_START",
        d = X(g.j, a, "VALUE", "RANDOM" == c ? g.j.ya : g.j.pb) || "''";
    switch (c) {
        case "FIRST":
            return [d + ".charAt(0)", g.j.La];
        case "LAST":
            return [d + ".slice(-1)", g.j.La];
        case "FROM_START":
            return a = g.j.dd(a, "AT"), [d + ".charAt(" + a + ")", g.j.La];
        case "FROM_END":
            return a = g.j.dd(a, "AT", 1, !0), [d + ".slice(" + a + ").charAt(0)", g.j.La];
        case "RANDOM":
            return d = Y("textRandomLetter", ["function " + g.j.Ec + "(text) {", "  var x = Math.floor(Math.random() * text.length);", "  return text[x];",
                "}"
            ]) + "(" + d + ")", [d, g.j.La]
    }
    throw Error("Unhandled option (text_charAt).");
};
g.j.text.Gw = function(a, c, d) {
    return "FIRST" == c ? "0" : "FROM_END" == c ? a + ".length - 1 - " + d : "LAST" == c ? a + ".length - 1" : d
};
g.j.text_getSubstring = function(a) {
    var c = B(a, "WHERE1"),
        d = B(a, "WHERE2"),
        e = "FROM_END" != c && "LAST" != c && "FROM_END" != d && "LAST" != d,
        f = X(g.j, a, "STRING", e ? g.j.pb : g.j.ya) || "''";
    if ("FIRST" == c && "LAST" == d) return [f, g.j.ya];
    if (f.match(/^'?\w+'?$/) || e) {
        switch (c) {
            case "FROM_START":
                e = g.j.dd(a, "AT1");
                break;
            case "FROM_END":
                e = g.j.dd(a, "AT1", 1, !1, g.j.Li);
                e = f + ".length - " + e;
                break;
            case "FIRST":
                e = "0";
                break;
            default:
                throw Error("Unhandled option (text_getSubstring).");
        }
        switch (d) {
            case "FROM_START":
                a = g.j.dd(a, "AT2", 1);
                break;
            case "FROM_END":
                a =
                    g.j.dd(a, "AT2", 0, !1, g.j.Li);
                a = f + ".length - " + a;
                break;
            case "LAST":
                a = f + ".length";
                break;
            default:
                throw Error("Unhandled option (text_getSubstring).");
        }
        c = f + ".slice(" + e + ", " + a + ")"
    } else {
        e = g.j.dd(a, "AT1");
        a = g.j.dd(a, "AT2");
        var h = g.j.text.Gw,
            k = {
                FIRST: "First",
                LAST: "Last",
                FROM_START: "FromStart",
                FROM_END: "FromEnd"
            };
        c = Y("subsequence" + k[c] + k[d], ["function " + g.j.Ec + "(sequence" + ("FROM_END" == c || "FROM_START" == c ? ", at1" : "") + ("FROM_END" == d || "FROM_START" == d ? ", at2" : "") + ") {", "  var start = " + h("sequence", c, "at1") + ";",
            "  var end = " + h("sequence", d, "at2") + " + 1;", "  return sequence.slice(start, end);", "}"
        ]) + "(" + f + ("FROM_END" == c || "FROM_START" == c ? ", " + e : "") + ("FROM_END" == d || "FROM_START" == d ? ", " + a : "") + ")"
    }
    return [c, g.j.La]
};
g.j.text_changeCase = function(a) {
    var c = {
        UPPERCASE: ".toUpperCase()",
        LOWERCASE: ".toLowerCase()",
        TITLECASE: null
    } [B(a, "CASE")];
    a = X(g.j, a, "TEXT", c ? g.j.pb : g.j.ya) || "''";
    return [c ? a + c : Y("textToTitleCase", ["function " + g.j.Ec + "(str) {", "  return str.replace(/\\S+/g,", "      function(txt) {return txt[0].toUpperCase() + txt.substring(1).toLowerCase();});", "}"]) + "(" + a + ")", g.j.La]
};
g.j.text_trim = function(a) {
    var c = {
        LEFT: ".replace(/^[\\s\\xa0]+/, '')",
        RIGHT: ".replace(/[\\s\\xa0]+$/, '')",
        BOTH: ".trim()"
    } [B(a, "MODE")];
    return [(X(g.j, a, "TEXT", g.j.pb) || "''") + c, g.j.La]
};
g.j.text_print = function(a) {
    return "window.alert(" + (X(g.j, a, "TEXT", g.j.ya) || "''") + ");\n"
};
g.j.text_prompt_ext = function(a) {
    var c = "window.prompt(" + (x(a, "TEXT") ? g.j.ul(B(a, "TEXT")) : X(g.j, a, "TEXT", g.j.ya) || "''") + ")";
    "NUMBER" == B(a, "TYPE") && (c = "Number(" + c + ")");
    return [c, g.j.La]
};
g.j.text_prompt = g.j.text_prompt_ext;
g.j.text_count = function(a) {
    var c = X(g.j, a, "TEXT", g.j.ya) || "''";
    a = X(g.j, a, "SUB", g.j.ya) || "''";
    return [Y("textCount", ["function " + g.j.Ec + "(haystack, needle) {", "  if (needle.length === 0) {", "    return haystack.length + 1;", "  } else {", "    return haystack.split(needle).length - 1;", "  }", "}"]) + "(" + c + ", " + a + ")", g.j.La]
};
g.j.text_replace = function(a) {
    var c = X(g.j, a, "TEXT", g.j.ya) || "''",
        d = X(g.j, a, "FROM", g.j.ya) || "''";
    a = X(g.j, a, "TO", g.j.ya) || "''";
    return [Y("textReplace", ["function " + g.j.Ec + "(haystack, needle, replacement) {", '  needle = needle.replace(/([-()\\[\\]{}+?*.$\\^|,:#<!\\\\])/g,"\\\\$1")', '                 .replace(/\\x08/g,"\\\\x08");', "  return haystack.replace(new RegExp(needle, 'g'), replacement);", "}"]) + "(" + c + ", " + d + ", " + a + ")", g.j.La]
};
g.j.text_reverse = function(a) {
    return [(X(g.j, a, "TEXT", g.j.pb) || "''") + ".split('').reverse().join('')", g.j.La]
};
g.j.vL = {};
g.j.variables_get = function(a) {
    return [g.j.Cb.Gd(B(a, "VAR"), g.ic), g.j.kf]
};
g.j.variables_set = function(a) {
    var c = X(g.j, a, "VALUE", g.j.rk) || "0";
    return g.j.Cb.Gd(B(a, "VAR"), g.ic) + " = " + c + ";\n"
};
g.W.turtle_move = {
    T: function() {
        var a = [
            [L("Turtle_moveForward"), "moveForward"],
            [L("Turtle_moveBackward"), "moveBackward"]
        ];
        this.td(160);
        E(F(this, "VALUE").hb("Number"), new g.Fa(a), "DIR");
        this.Xc(!0);
        this.Wc(!0);
        this.Ra(L("Turtle_moveTooltip"))
    }
};
g.j.turtle_move = function(a) {
    var c = X(g.j, a, "VALUE", g.j.Yn) || "0";
    return B(a, "DIR") + "(" + c + ", 'block_id_" + a.id + "');\n"
};
g.W.turtle_move_internal = {
    T: function() {
        var a = [
            [L("Turtle_moveForward"), "moveForward"],
            [L("Turtle_moveBackward"), "moveBackward"]
        ];
        this.td(160);
        E(E(G(this), new g.Fa(a), "DIR"), new g.Fa([
            ["20", "20"],
            ["50", "50"],
            ["100", "100"],
            ["150", "150"]
        ]), "VALUE");
        this.Xc(!0);
        this.Wc(!0);
        this.Ra(L("Turtle_moveTooltip"))
    }
};
g.j.turtle_move_internal = function(a) {
    var c = Number(B(a, "VALUE"));
    return B(a, "DIR") + "(" + c + ", 'block_id_" + a.id + "');\n"
};
g.W.turtle_turn = {
    T: function() {
        var a = [
            [L("Turtle_turnRight"), "turnRight"],
            [L("Turtle_turnLeft"), "turnLeft"]
        ];
        a[0][0] += " \u21bb";
        a[1][0] += " \u21ba";
        this.td(160);
        E(F(this, "VALUE").hb("Number"), new g.Fa(a), "DIR");
        this.Xc(!0);
        this.Wc(!0);
        this.Ra(L("Turtle_turnTooltip"))
    }
};
g.j.turtle_turn = function(a) {
    var c = X(g.j, a, "VALUE", g.j.Yn) || "0";
    return B(a, "DIR") + "(" + c + ", 'block_id_" + a.id + "');\n"
};
g.W.turtle_turn_internal = {
    T: function() {
        var a = [
            [L("Turtle_turnRight"), "turnRight"],
            [L("Turtle_turnLeft"), "turnLeft"]
        ];
        a[0][0] += " \u21bb";
        a[1][0] += " \u21ba";
        this.td(160);
        E(E(G(this), new g.Fa(a), "DIR"), new g.Fa([
            ["1\u00b0", "1"],
            ["45\u00b0", "45"],
            ["72\u00b0", "72"],
            ["90\u00b0", "90"],
            ["120\u00b0", "120"],
            ["144\u00b0", "144"]
        ]), "VALUE");
        this.Xc(!0);
        this.Wc(!0);
        this.Ra(L("Turtle_turnTooltip"))
    }
};
g.j.turtle_turn_internal = function(a) {
    var c = Number(B(a, "VALUE"));
    return B(a, "DIR") + "(" + c + ", 'block_id_" + a.id + "');\n"
};
g.W.turtle_width = {
    T: function() {
        this.td(160);
        E(F(this, "WIDTH").hb("Number"), L("Turtle_setWidth"));
        this.Xc(!0);
        this.Wc(!0);
        this.Ra(L("Turtle_widthTooltip"))
    }
};
g.j.turtle_width = function(a) {
    return "penWidth(" + (X(g.j, a, "WIDTH", g.j.Yn) || "1") + ", 'block_id_" + a.id + "');\n"
};
g.W.turtle_pen = {
    T: function() {
        kc(this, {
            message0: "%1",
            args0: [{
                type: "field_dropdown",
                name: "PEN",
                options: [
                    [L("Turtle_penUp"), "penUp"],
                    [L("Turtle_penDown"), "penDown"]
                ]
            }],
            previousStatement: null,
            nextStatement: null,
            colour: 160,
            tooltip: L("Turtle_penTooltip")
        })
    }
};
g.j.turtle_pen = function(a) {
    return B(a, "PEN") + "('block_id_" + a.id + "');\n"
};
g.W.turtle_colour = {
    T: function() {
        this.td(g.i.COLOUR_HUE);
        E(F(this, "COLOUR").hb("Colour"), L("Turtle_setColour"));
        this.Xc(!0);
        this.Wc(!0);
        this.Ra(L("Turtle_colourTooltip"))
    }
};
g.j.turtle_colour = function(a) {
    return "penColour(" + (X(g.j, a, "COLOUR", g.j.Yn) || "'#000000'") + ", 'block_id_" + a.id + "');\n"
};
g.W.turtle_colour_internal = {
    T: function() {
        this.td(g.i.COLOUR_HUE);
        E(E(G(this), L("Turtle_setColour")), new g.nc("#ff0000"), "COLOUR");
        this.Xc(!0);
        this.Wc(!0);
        this.Ra(L("Turtle_colourTooltip"))
    }
};
g.j.turtle_colour_internal = function(a) {
    return "penColour(" + g.j.ul(B(a, "COLOUR")) + ", 'block_id_" + a.id + "');\n"
};
g.W.turtle_visibility = {
    T: function() {
        kc(this, {
            message0: "%1",
            args0: [{
                type: "field_dropdown",
                name: "VISIBILITY",
                options: [
                    [L("Turtle_hideTurtle"), "hideTurtle"],
                    [L("Turtle_showTurtle"), "showTurtle"]
                ]
            }],
            previousStatement: null,
            nextStatement: null,
            colour: 160,
            tooltip: L("Turtle_turtleVisibilityTooltip")
        })
    }
};
g.j.turtle_visibility = function(a) {
    return B(a, "VISIBILITY") + "('block_id_" + a.id + "');\n"
};
g.W.turtle_print = {
    T: function() {
        this.dc = L("Turtle_printHelpUrl");
        this.td(160);
        E(F(this, "TEXT"), L("Turtle_print"));
        this.Xc(!0);
        this.Wc(!0);
        this.Ra(L("Turtle_printTooltip"))
    }
};
g.j.turtle_print = function(a) {
    return "print(" + String(X(g.j, a, "TEXT", g.j.Yn) || "''") + ", 'block_id_" + a.id + "');\n"
};
g.W.turtle_font = {
    T: function() {
        var a = [
            [L("Turtle_fontNormal"), "normal"],
            [L("Turtle_fontItalic"), "italic"],
            [L("Turtle_fontBold"), "bold"]
        ];
        this.dc = L("Turtle_fontHelpUrl");
        this.td(160);
        E(E(G(this), L("Turtle_font")), new g.Fa([
            ["Arial", "Arial"],
            ["Courier New", "Courier New"],
            ["Georgia", "Georgia"],
            ["Impact", "Impact"],
            ["Times New Roman", "Times New Roman"],
            ["Trebuchet MS", "Trebuchet MS"],
            ["Verdana", "Verdana"]
        ]), "FONT");
        E(E(G(this), L("Turtle_fontSize")), new g.Ce(18, 1, 1E3), "FONTSIZE");
        E(G(this), new g.Fa(a), "FONTSTYLE");
        this.Xc(!0);
        this.Wc(!0);
        this.Ra(L("Turtle_fontTooltip"))
    }
};
g.j.turtle_font = function(a) {
    var c = g.j.ul(B(a, "FONT")),
        d = Number(B(a, "FONTSIZE")),
        e = g.j.ul(B(a, "FONTSTYLE"));
    return "font(" + c + "," + d + "," + e + ", 'block_id_" + a.id + "');\n"
};
g.W.turtle_repeat_internal = {
    T: function() {
        kc(this, {
            message0: g.i.CONTROLS_REPEAT_TITLE,
            args0: [{
                type: "field_dropdown",
                name: "TIMES",
                options: [
                    ["3", "3"],
                    ["4", "4"],
                    ["5", "5"],
                    ["360", "360"]
                ]
            }],
            previousStatement: null,
            nextStatement: null,
            colour: g.i.LOOPS_HUE,
            tooltip: g.i.CONTROLS_REPEAT_TOOLTIP,
            helpUrl: g.i.CONTROLS_REPEAT_HELPURL
        });
        E(jc(this, "DO"), g.i.CONTROLS_REPEAT_INPUT_DO)
    }
};
g.j.turtle_repeat_internal = g.j.controls_repeat;
var wf = wf || {};

function xf(a, c) {
    function d() {}
    d.prototype = c.prototype;
    a.v = c.prototype;
    a.prototype = new d;
    a.prototype.constructor = a;
    a.OO = function(e, f, h) {
        return c.prototype[f].apply(e, Array.prototype.slice.call(arguments, 2))
    }
}
if (!yf) {
    var yf, zf = "";
    "undefined" !== typeof navigator && navigator && "string" == typeof navigator.userAgent && (zf = navigator.userAgent);
    var Af = 0 == zf.indexOf("Opera");
    yf = {
        lP: {
            BM: "ScriptEngine" in window
        },
        NN: Af,
        ff: !Af && -1 != zf.indexOf("MSIE"),
        BA: !Af && -1 != zf.indexOf("WebKit")
    }
}
if (!Bf) var Bf = {};
if (!Cf) var Cf = {};
if (!Df) var Df = {};
if (!Ef) var Ef = {};
if (!Ff) var Ff = {};
if (!Gf) var Gf = {};
var Hf = wf.WL ? {
    rP: !0
} : {};

function If() {
    throw Error("Do not instantiate directly");
}
If.prototype.lB = null;
If.prototype.toString = function() {
    return this.content
};

function Jf(a) {
    if (null != a) switch (a.lB) {
        case 1:
            return 1;
        case -1:
            return -1;
        case 0:
            return 0
    }
    return null
}

function Kf() {
    If.call(this)
}
xf(Kf, If);
Kf.prototype.ZH = Hf;

function Z(a) {
    return null != a && a.ZH === Hf ? a : Lf(String(String(a)).replace(Mf, Nf), Jf(a))
}
var Lf = function(a) {
        function c() {}
        c.prototype = a.prototype;
        return function(d, e) {
            var f = new c;
            f.content = String(d);
            void 0 !== e && (f.lB = e);
            return f
        }
    }(Kf),
    Of = {
        "\x00": "&#0;",
        '"': "&quot;",
        "&": "&amp;",
        "'": "&#39;",
        "<": "&lt;",
        ">": "&gt;",
        "\t": "&#9;",
        "\n": "&#10;",
        "\x0B": "&#11;",
        "\f": "&#12;",
        "\r": "&#13;",
        " ": "&#32;",
        "-": "&#45;",
        "/": "&#47;",
        "=": "&#61;",
        "`": "&#96;",
        "\u0085": "&#133;",
        "\u00a0": "&#160;",
        "\u2028": "&#8232;",
        "\u2029": "&#8233;"
    };

function Nf(a) {
    return Of[a]
}
var Mf = /[\x00\x22\x26\x27\x3c\x3e]/g;

function Pf() {
    return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary dialogOk" onclick="BlocklyDialogs.hideDialog(true)"></button></div>'
};

function Qf() {
    var a = '<table width="100%"><tr><td><h1><span id="title">' + ((Ad ? '<a href="index.html?lang=' + Z(yd) + '">' : '<a href="./?lang=' + Z(yd) + '">') + "Blockly Games</a> : " + Z("Turtle") + "</span>");
    if (K) {
        var c = " &nbsp; ";
        for (var d = 1; 11 > d; d++) {
            var e = "?lang=" + Z(yd) + "&level=" + Z(d);
            c += " " + (d == K ? '<span class="level_number level_done" id="level' + Z(d) + '">' + Z(d) + "</span>" : 10 == d ? '<a class="level_number" id="level' + Z(d) + '" href="' + Z(e) + '">' + Z(d) + "</a>" : '<a class="level_dot" id="level' + Z(d) + '" href="' + Z(e) + '"></a>')
        }
    } else c =
        "";
    return '<div style="display: none"><span id="Games_name">Blockly Games</span><span id="Games_puzzle">Puzzle</span><span id="Games_maze">Maze</span><span id="Games_bird">Bird</span><span id="Games_turtle">Turtle</span><span id="Games_movie">Movie</span><span id="Games_music">Music</span><span id="Games_pondTutor">Pond Tutor</span><span id="Games_pond">Pond</span><span id="Games_genetics">Genetics</span><span id="Games_linesOfCode1">You solved this level with 1 line of JavaScript:</span><span id="Games_linesOfCode2">You solved this level with %1 lines of JavaScript:</span><span id="Games_nextLevel">Are you ready for level %1?</span><span id="Games_finalLevel">Are you ready for the next challenge?</span><span id="Games_submitTitle">Title:</span><span id="Games_linkTooltip">Save and link to blocks.</span><span id="Games_runTooltip">Run the program you wrote.</span><span id="Games_runProgram">Run Program</span><span id="Games_resetTooltip">Stop the program and reset the level.</span><span id="Games_resetProgram">Reset</span><span id="Games_help">Help</span><span id="Games_catLogic">Logic</span><span id="Games_catLoops">Loops</span><span id="Games_catMath">Math</span><span id="Games_catText">Text</span><span id="Games_catLists">Lists</span><span id="Games_catColour">Colour</span><span id="Games_catVariables">Variables</span><span id="Games_catProcedures">Functions</span><span id="Games_httpRequestError">There was a problem with the request.</span><span id="Games_linkAlert">Share your blocks with this link:\\n\\n%1</span><span id="Games_hashError">Sorry, \'%1\' doesn\'t correspond with any saved program.</span><span id="Games_xmlError">Could not load your saved file. Perhaps it was created with a different version of Blockly?</span><span id="Games_submitted">Thank you for this program!  If our staff of trained monkeys like it, they will publish it to the gallery within a couple of days.</span><span id="Games_listVariable">list</span><span id="Games_textVariable">text</span><span id="Games_breakLink">Once you start editing JavaScript, you can\'t go back to editing blocks. Is this OK?</span><span id="Games_blocks">Blocks</div></div><div style="display: none"><span id="Turtle_moveTooltip">Moves the turtle forward or backward by the specified amount.</span><span id="Turtle_moveForward">move forward by</span><span id="Turtle_moveBackward">move backward by</span><span id="Turtle_turnTooltip">Turns the turtle left or right by the specified number of degrees.</span><span id="Turtle_turnRight">turn right by</span><span id="Turtle_turnLeft">turn left by</span><span id="Turtle_widthTooltip">Changes the width of the pen.</span><span id="Turtle_setWidth">set width to</span><span id="Turtle_colourTooltip">Changes the colour of the pen.</span><span id="Turtle_setColour">set colour to</span><span id="Turtle_penTooltip">Lifts or lowers the pen, to stop or start drawing.</span><span id="Turtle_penUp">pen up</span><span id="Turtle_penDown">pen down</span><span id="Turtle_turtleVisibilityTooltip">Makes the turtle (circle and arrow) visible or invisible.</span><span id="Turtle_hideTurtle">hide turtle</span><span id="Turtle_showTurtle">show turtle</span><span id="Turtle_printHelpUrl">https://en.wikipedia.org/wiki/Printing</span><span id="Turtle_printTooltip">Draws text in the turtle\'s direction at its location.</span><span id="Turtle_print">print</span><span id="Turtle_fontHelpUrl">https://en.wikipedia.org/wiki/Font</span><span id="Turtle_fontTooltip">Sets the font used by the print block.</span><span id="Turtle_font">font</span><span id="Turtle_fontSize">font size</span><span id="Turtle_fontNormal">normal</span><span id="Turtle_fontBold">bold</span><span id="Turtle_fontItalic">italic</span><span id="Turtle_submitDisabled">Run your program until it stops. Then you may submit your drawing to the gallery.</span></div>' +
        (a + c + '</h1></td><td id="header_cta" class="farSide"><select id="languageMenu"></select>&nbsp;<button id="linkButton" title="Save and link to blocks."><img src="common/1x1.gif" class="link icon21"></button>&nbsp;<button id="helpButton">Help</button></td></tr></table><div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="answer" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table style="padding-top: 1em;"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><svg id="slider" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="150" height="50">\x3c!-- Slow icon. --\x3e<clipPath id="slowClipPath"><rect width=26 height=12 x=5 y=14 /></clipPath><image xlink:href="common/icons.png" height=63 width=84 x=-21 y=-10 clip-path="url(#slowClipPath)" />\x3c!-- Fast icon. --\x3e<clipPath id="fastClipPath"><rect width=26 height=16 x=120 y=10 /></clipPath><image xlink:href="common/icons.png" height=63 width=84 x=120 y=-11 clip-path="url(#fastClipPath)" /></svg></td><td style="width: 15px;"><img id="spinner" style="visibility: hidden;" src="common/loading.gif" height=15 width=15></td><td style="width: 190px; text-align: center"><button id="runButton" class="primary" title="Run the program you wrote."><img src="common/1x1.gif" class="run icon21"> Run Program</button><button id="resetButton" class="primary" style="display: none" title="Stop the program and reset the level."><img src="common/1x1.gif" class="stop icon21"> Reset</button></td></tr></table>') +
        (10 != K || Ad ? "" : '<table style="padding-top: 1em; width: 400px;"><tr><td style="text-align: center;"><form action="/gallery" target="turtle-gallery"><input type="hidden" name="app" value="turtle"><input type="hidden" name="lang" value="' + Z(yd) + '"><button type="submit" title="Open the gallery of drawings."><img src="common/1x1.gif" class="gallery icon21"> See Gallery</button></form></td><td style="text-align: center;"><button id="submitButton" title="Submit your drawing to the gallery."><img src="common/1x1.gif" class="camera icon21"> Submit to Gallery</button></td></tr></table><div id="galleryDialog" class="dialogHiddenContent"><form id="galleryForm" action="/gallery-api/submit" method="post" onsubmit="return false"><header>Submit your drawing to the gallery.</header><canvas id="thumbnail" width="200" height="200"></canvas><input type="hidden" name="app" value="turtle"><input id="galleryThumb" type="hidden" name="thumb"><input id="galleryXml" type="hidden" name="xml"><div>Title: <input id="galleryTitle" type="text" name="title" required></div><div class="farSide"><button id="galleryCancel" class="dialogCancel" type="button"></button><button id="galleryOk" class="secondary dialogOk" type="submit"></button></div></form></div>') +
        ('<xml id="toolbox" xmlns="https://developers.google.com/blockly/xml">' + (10 == K ? '<category name="Turtle"><block type="turtle_move"><value name="VALUE"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="turtle_turn"><value name="VALUE"><shadow type="math_number"><field name="NUM">90</field></shadow></value></block><block type="turtle_width"><value name="WIDTH"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="turtle_pen"></block><block type="turtle_visibility"></block><block type="turtle_print"><value name="TEXT"><shadow type="text"></shadow></value></block><block type="turtle_font"></block></category><category name="Colour"><block type="turtle_colour"><value name="COLOUR"><shadow type="colour_picker"></shadow></value></block><block type="colour_picker"></block><block type="colour_random"></block><block type="colour_rgb"><value name="RED"><shadow type="math_number"><field name="NUM">100</field></shadow></value><value name="GREEN"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="BLUE"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="colour_blend"><value name="COLOUR1"><shadow type="colour_picker"><field name="COLOUR">#ff0000</field></shadow></value><value name="COLOUR2"><shadow type="colour_picker"><field name="COLOUR">#3333ff</field></shadow></value><value name="RATIO"><shadow type="math_number"><field name="NUM">0.5</field></shadow></value></block></category><category name="Logic"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block><block type="logic_ternary"></block></category><category name="Loops"><block type="controls_repeat_ext"><value name="TIMES"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="controls_whileUntil"></block><block type="controls_for"><value name="FROM"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="TO"><shadow type="math_number"><field name="NUM">10</field></shadow></value><value name="BY"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="controls_flow_statements"></block></category><category name="Math"><block type="math_number"></block><block type="math_arithmetic"><value name="A"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="B"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="math_single"><value name="NUM"><shadow type="math_number"><field name="NUM">9</field></shadow></value></block><block type="math_trig"><value name="NUM"><shadow type="math_number"><field name="NUM">45</field></shadow></value></block><block type="math_constant"></block><block type="math_number_property"><value name="NUMBER_TO_CHECK"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="math_round"><value name="NUM"><shadow type="math_number"><field name="NUM">3.1</field></shadow></value></block><block type="math_modulo"><value name="DIVIDEND"><shadow type="math_number"><field name="NUM">64</field></shadow></value><value name="DIVISOR"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="math_constrain"><value name="VALUE"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="LOW"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="HIGH"><shadow type="math_number"><field name="NUM">100</field></shadow></value></block><block type="math_random_int"><value name="FROM"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="TO"><shadow type="math_number"><field name="NUM">100</field></shadow></value></block><block type="math_random_float"></block></category><category name="Lists"><block type="lists_create_with"><mutation items="0"></mutation></block><block type="lists_create_with"></block><block type="lists_repeat"><value name="NUM"><shadow type="math_number"><field name="NUM">5</field></shadow></value></block><block type="lists_length"></block><block type="lists_isEmpty"></block><block type="lists_indexOf"><value name="VALUE"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_getIndex"><value name="VALUE"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_setIndex"><value name="LIST"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_getSublist"><value name="LIST"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_sort"></block><block type="lists_reverse"></block></category><sep></sep><category name="Variables" custom="VARIABLE"></category><category name="Functions" custom="PROCEDURE"></category>' :
            '<category name="Turtle"><block type="turtle_move_internal"><field name="VALUE">100</field></block><block type="turtle_turn_internal"><field name="VALUE">90</field></block>' + (3 < K ? '<block type="turtle_pen"></block>' : "") + "</category>" + (2 < K ? '<category name="Colour"><block type="turtle_colour_internal"></block></category>' : "") + '<category name="Loops"><block type="turtle_repeat_internal"><field name="TIMES">4</field></block></category>') + '</xml><div id="blockly"></div><div id="dialogShadow" class="dialogAnimate"></div><div id="dialogBorder"></div><div id="dialog"></div><div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">Congratulations!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel" class="dialogCancel"></button><button id="doneOk" class="secondary dialogOk"></button></div></div><div id="dialogAbort" class="dialogHiddenContent">This level is extremely difficult. Would you like to skip it and go onto the next game? You can always come back later.<div class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel" class="dialogCancel"></button><button id="abortOk" class="secondary dialogOk"></button></div></div><div id="dialogStorage" class="dialogHiddenContent"><div id="containerStorage"></div>') +
        (Pf() + "</div>") + (4 > K ? '<div id="helpUseLoop" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">Your solution works, but you can do better. ' + (3 > K ? "Draw the shape with just three blocks." : "Draw the star with just four blocks.") + "</div>" + Pf() + "</div>" : "") + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">' + (1 == K ? 'Create a program that draws a square.<br><img src="turtle/square.gif" height=146 width=146 style="margin-bottom: -50px">' : 2 == K ? "Change your program to draw a pentagon instead of a square." :
            3 == K ? 'There\'s a new block that allows you to change the colour:<div id="sampleHelp3" class="readonly"></div>Draw a yellow star.' : 4 == K ? 'There\'s a new block that allows you to lift your pen off the paper when you move:<div id="sampleHelp4" class="readonly"></div>Draw a small yellow star, then draw a line above it.' : 5 == K ? "Instead of one star, can you draw four stars arranged in a square?" : 6 == K ? "Draw three yellow stars, and one white line." : 7 == K ? "Draw the stars, then draw four white lines." : 8 == K ? "Drawing 360 white lines will look like the full moon." :
            9 == K ? "Can you add a black circle so that the moon becomes a crescent?" : 10 == K ? "Draw anything you want. You've got a huge number of new blocks you can explore. Have fun!" + (Ad ? "" : '<br><br>Use the "See Gallery" button to see what other people have drawn. If you draw something interesting, use the "Submit to Gallery" button to publish it.') : "") + "</div>" + Pf() + "</div>" + (1 == K ? '<div id="helpToolbox" class="dialogHiddenContent"><div><img src="turtle/help_left.png" class="mirrorImg" height=23 width=64></div>Choose a category to see the blocks.</div>' :
            "")
};
var Jd = "turtle",
    Rf = [],
    Sf = 0,
    Tf = null,
    Uf = !0,
    Vf = !1;
window.addEventListener("load", function() {
    function a() {
        d.style.top = Math.max(10, e.offsetTop - window.pageYOffset) + "px";
        d.style.left = c ? "10px" : "420px";
        d.style.width = window.innerWidth - 440 + "px"
    }
    document.body.innerHTML = Qf();
    qe();
    var c = Bd(),
        d = document.getElementById("blockly"),
        e = document.getElementById("visualization");
    window.addEventListener("scroll", function() {
        a(null);
        g.tn(u)
    });
    window.addEventListener("resize", a);
    a(null);
    10 > K && (g.nc.Rq = 3, g.nc.Qq = "#ff0000 #ffcc33 #ffff00 #009900 #3333ff #cc33cc #ffffff #999999 #000000".split(" "));
    xe({
        rtl: c,
        trashcan: !0,
        zoom: 10 == K ? {
            controls: !0,
            wheel: !0
        } : null
    });
    vf(g.j, "moveForward,moveBackward,turnRight,turnLeft,penUp,penDown,penWidth,penColour,hideTurtle,showTurtle,print,font");
    document.getElementById("submitButton") && Kd("submitButton", Wf);
    var f = document.getElementById("slider");
    Xe = new Me(f);
    ue();
    N = document.getElementById("display").getContext("2d");
    Ye = document.getElementById("answer").getContext("2d");
    O = document.getElementById("scratch").getContext("2d");
    Xf();
    cf();
    Ye.globalCompositeOperation = "copy";
    Ye.drawImage(O.canvas, 0, 0);
    Ye.globalCompositeOperation = "source-over";
    Xf();
    Kd("runButton", Yf);
    Kd("resetButton", Zf);
    u.zg.load(["turtle/win.mp3", "turtle/win.ogg"], "win");
    Fe();
    Ge();
    Kd("helpButton", $f);
    2 > location.hash.length && !Hd(K) && (setTimeout($f, 1E3), 9 == K && setTimeout(M.IA, 3E5));
    1 == K && C(u, ag)
});

function ve(a) {
    for (var c = a = g.O.ze(a); c;) {
        if ("block" == c.nodeName.toLowerCase()) {
            for (var d = c.getAttribute("type"), e = c.lastChild; e && "field" != e.nodeName.toLowerCase();) e = e.previousSibling;
            var f = e && e.getAttribute("name");
            if ("turtle_colour_internal" == d && "COLOUR" == f) {
                c.setAttribute("type", "turtle_colour");
                c.removeChild(e);
                var h = document.createElement("value");
                h.setAttribute("name", "COLOUR");
                c.appendChild(h);
                var k = document.createElement("shadow");
                k.setAttribute("type", "colour_picker");
                h.appendChild(k);
                k.appendChild(e)
            }
            "turtle_repeat_internal" ==
            d && "TIMES" == f && (c.setAttribute("type", "controls_repeat_ext"), c.removeChild(e), h = document.createElement("value"), h.setAttribute("name", "TIMES"), c.appendChild(h), k = document.createElement("shadow"), k.setAttribute("type", "math_number"), h.appendChild(k), e.setAttribute("name", "NUM"), k.appendChild(e));
            "turtle_move_internal" == d && "VALUE" == f && (c.setAttribute("type", "turtle_move"), c.removeChild(e), h = document.createElement("value"), h.setAttribute("name", "VALUE"), c.appendChild(h), k = document.createElement("shadow"),
                k.setAttribute("type", "math_number"), h.appendChild(k), e.setAttribute("name", "NUM"), k.appendChild(e));
            "turtle_turn_internal" == d && "VALUE" == f && (c.setAttribute("type", "turtle_turn"), c.removeChild(e), h = document.createElement("value"), h.setAttribute("name", "VALUE"), c.appendChild(h), k = document.createElement("shadow"), k.setAttribute("type", "math_number"), h.appendChild(k), e.setAttribute("name", "NUM"), k.appendChild(e))
        }
        c = bg(c)
    }
    return g.O.Zd(a)
}

function bg(a) {
    if (a.firstChild) return a.firstChild;
    do
        if (a.nextSibling) return a.nextSibling; while (a = a.parentNode);
    return a
}

function $f() {
    var a = document.getElementById("help"),
        c = document.getElementById("helpButton");
    3 == K ? Ae("sampleHelp3", '<xml><block type="turtle_colour_internal" x="5" y="10"><field name="COLOUR">#ffff00</field></block></xml>') : 4 == K && Ae("sampleHelp4", '<xml><block type="turtle_pen" x="5" y="10"></block></xml>');
    M.Cl(a, c, !0, !0, {
        width: "50%",
        left: "25%",
        top: "5em"
    }, cg);
    M.Py()
}

function cg() {
    M.Ry();
    1 == K && setTimeout(dg, 5E3)
}

function dg() {
    if (!eg && !M.uj) {
        var a = document.getElementById("helpToolbox"),
            c = {
                width: "25%",
                top: "3.3em"
            };
        Bd() ? c.right = "525px" : c.left = "525px";
        var d = document.getElementById(":0");
        M.Cl(a, d, !0, !1, c, null)
    }
}
var eg = !1;

function ag(a) {
    a.type == g.h.Cr && (eg = !0, M.zf(!1), Ra(u, ag))
}

function Xf() {
    $e = Ze = 200;
    af = 0;
    Uf = bf = !0;
    O.canvas.width = O.canvas.width;
    O.strokeStyle = "#ffffff";
    O.fillStyle = "#ffffff";
    O.lineWidth = 5;
    O.lineCap = "round";
    O.font = "normal 18pt Arial";
    fg();
    for (var a = 0; a < Rf.length; a++) clearTimeout(Rf[a]);
    Rf.length = 0;
    Tf = null
}

function fg() {
    N.beginPath();
    N.rect(0, 0, N.canvas.width, N.canvas.height);
    N.fillStyle = "#000000";
    N.fill();
    N.globalCompositeOperation = "source-over";
    N.globalAlpha = .2;
    N.drawImage(Ye.canvas, 0, 0);
    N.globalAlpha = 1;
    N.globalCompositeOperation = "source-over";
    N.drawImage(O.canvas, 0, 0);
    if (Uf) {
        N.strokeStyle = O.strokeStyle;
        N.fillStyle = O.fillStyle;
        var a = O.lineWidth / 2 + 10;
        N.beginPath();
        N.arc(Ze, $e, a, 0, 2 * Math.PI, !1);
        N.lineWidth = 3;
        N.stroke();
        var c = g.g.od.vn(af),
            d = Ze + (a + 10) * Math.sin(c),
            e = $e - (a + 10) * Math.cos(c);
        c -= .3;
        var f =
            Ze + (a + 4) * Math.sin(c),
            h = $e - (a + 4) * Math.cos(c);
        c += .15;
        var k = Ze + (a + 6) * Math.sin(c),
            l = $e - (a + 6) * Math.cos(c);
        c += .3;
        var m = Ze + (a + 6) * Math.sin(c),
            n = $e - (a + 6) * Math.cos(c);
        c += .15;
        var q = Ze + (a + 4) * Math.sin(c);
        a = $e - (a + 4) * Math.cos(c);
        N.beginPath();
        N.moveTo(d, e);
        N.lineTo(f, h);
        N.bezierCurveTo(k, l, m, n, q, a);
        N.closePath();
        N.fill()
    }
}

function Yf(a) {
    if (!Ce(a)) {
        a = document.getElementById("runButton");
        var c = document.getElementById("resetButton");
        c.style.minWidth || (c.style.minWidth = a.offsetWidth + "px");
        a.style.display = "none";
        c.style.display = "inline";
        document.getElementById("spinner").style.visibility = "visible";
        gg()
    }
}

function Zf(a) {
    Ce(a) || (document.getElementById("runButton").style.display = "inline", document.getElementById("resetButton").style.display = "none", document.getElementById("spinner").style.visibility = "hidden", kd(null), Xf(), Vf = !1)
}

function hg(a, c) {
    var d = function(e, f) {
        P(e, f)
    };
    a.setProperty(c, "moveForward", a.createNativeFunction(d));
    d = function(e, f) {
        P(-e, f)
    };
    a.setProperty(c, "moveBackward", a.createNativeFunction(d));
    d = function(e, f) {
        Q(e, f)
    };
    a.setProperty(c, "turnRight", a.createNativeFunction(d));
    d = function(e, f) {
        Q(-e, f)
    };
    a.setProperty(c, "turnLeft", a.createNativeFunction(d));
    d = function(e) {
        V(!1, e)
    };
    a.setProperty(c, "penUp", a.createNativeFunction(d));
    d = function(e) {
        V(!0, e)
    };
    a.setProperty(c, "penDown", a.createNativeFunction(d));
    d = function(e,
        f) {
        O.lineWidth = e;
        ig(f)
    };
    a.setProperty(c, "penWidth", a.createNativeFunction(d));
    d = function(e, f) {
        R(e, f)
    };
    a.setProperty(c, "penColour", a.createNativeFunction(d));
    d = function(e) {
        Uf = !1;
        ig(e)
    };
    a.setProperty(c, "hideTurtle", a.createNativeFunction(d));
    d = function(e) {
        Uf = !0;
        ig(e)
    };
    a.setProperty(c, "showTurtle", a.createNativeFunction(d));
    d = function(e, f) {
        O.save();
        O.translate(Ze, $e);
        O.rotate(g.g.od.vn(af - 90));
        O.fillText(e, 0, 0);
        O.restore();
        ig(f)
    };
    a.setProperty(c, "print", a.createNativeFunction(d));
    d = function(e, f, h, k) {
        O.font =
            h + " " + f + "pt " + e;
        ig(k)
    };
    a.setProperty(c, "font", a.createNativeFunction(d))
}

function gg() {
    if ("Interpreter" in window) {
        Xf();
        g.selected && zb(g.selected);
        var a = g.j;
        var c = u;
        c || (console.warn("No workspace specified in workspaceToCode call.  Guessing."), c = g.hj());
        var d = [];
        a.T(c);
        c = c.zc(!0);
        for (var e = 0, f; f = c[e]; e++) {
            var h = sf(a, f);
            Array.isArray(h) && (h = h[0]);
            h && (f.R && (h = a.CD(h), a.se && !f.Tj && (h = W(a.se, f) + h), a.kd && !f.Tj && (h += W(a.kd, f))), d.push(h))
        }
        d = d.join("\n");
        d = a.finish(d);
        d = d.replace(/^\s+\n/, "");
        d = d.replace(/\n\s+$/, "\n");
        pe = a = d = d.replace(/[ \t]+\n/g, "\n");
        oe = re();
        Tf = new Interpreter(a,
            hg);
        Rf.push(setTimeout(jg, 100))
    } else setTimeout(gg, 250)
}

function jg() {
    Sf = Rf.length = 0;
    do {
        try {
            var a = Tf.step()
        } catch (h) {
            alert(h), a = !1
        }
        a && Sf && (a = !1, Rf.push(setTimeout(jg, Sf)))
    } while (a);
    if (!Sf) {
        document.getElementById("spinner").style.visibility = "hidden";
        kd(null);
        a = O.getImageData(0, 0, 400, 400);
        for (var c = Ye.getImageData(0, 0, 400, 400), d = Math.min(a.data.length, c.data.length), e = 0, f = 3; f < d; f += 4) 64 < Math.abs(a.data[f] - c.data[f]) && e++;
        df(e) ? (window.localStorage && (window.localStorage[Jd + K] = oe), 10 > K && (u.zg.play("win", .5), M.WH())) : R("#ff0000");
        Vf = !0
    }
}

function ig(a) {
    if (a) {
        fg();
        if (a) {
            var c = a.match(/^block_id_([^']+)$/);
            c && (a = c[1])
        }
        kd(a, void 0);
        a = 1E3 * Math.pow(1 - Xe.getValue(), 2);
        Sf = Math.max(1, a)
    }
}

function P(a, c) {
    bf && (O.beginPath(), O.moveTo(Ze, $e));
    if (a) {
        var d = g.g.od.vn(af);
        Ze += a * Math.sin(d);
        $e -= a * Math.cos(d);
        a = 0
    } else a = .1;
    bf && (O.lineTo(Ze, $e + a), O.stroke());
    ig(c)
}

function Q(a, c) {
    a = af + a;
    a %= 360;
    0 > a && (a += 360);
    af = a;
    ig(c)
}

function V(a, c) {
    bf = a;
    ig(c)
}

function R(a, c) {
    O.strokeStyle = a;
    O.fillStyle = a;
    ig(c)
}

function Wf() {
    if (Vf) {
        var a = document.getElementById("thumbnail"),
            c = a.getContext("2d");
        c.globalCompositeOperation = "copy";
        c.drawImage(N.canvas, 0, 0, 200, 200);
        a = a.toDataURL("image/png");
        document.getElementById("galleryThumb").value = a;
        He()
    } else alert(L("Turtle_submitDisabled"))
};