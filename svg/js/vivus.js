"use strict"; !function () {
    function a(a) {
        if ("undefined" == typeof a)
            throw new Error('Pathformer [constructor]: "element" parameter is required');
        if (a.constructor === String && (a = document.getElementById(a), !a))
            throw new Error('Pathformer [constructor]: "element" parameter is not related to an existing ID');
        if (a.constructor !== SVGSVGElement)
            throw new Error('Pathformer [constructor]: "element" parameter must be a string or a SVGelement');
        this.el = a, this.scan(a)
    }
    function e(b, c, d) {
        this.setElement(b),
        this.setOptions(c),
        this.setCallback(d),
        this.frameLength = 0,
        this.currentFrame = 0,
        this.progressFrame = 0,
        this.map = [],
        new a(b),
        this.mapping(),
        this.starter()
    }
    a.prototype.TYPES = ["line", "elipse", "circle", "polygon", "polyline", "rect"],
    a.prototype.ATTR_WATCH = ["cx", "cy", "points", "r", "rx", "ry", "x", "x1", "x2", "y", "y1", "y2"],
    a.prototype.scan = function (a) {
        var b, c, d, e, g, f = a.querySelectorAll(this.TYPES.join(","));
        for (g = 0; g < f.length; g++) c = f[g], b = this[c.tagName.toLowerCase() + "ToPath"], d = b(this.parseAttr(c.attributes)), e = this.pathMaker(c, d), c.parentNode.replaceChild(e, c)
    },
    a.prototype.lineToPath = function (a) {
        var b = {}; return b.d = "M" + a.x1 + "," + a.y1 + "L" + a.x2 + "," + a.y2, b
    },
    a.prototype.rectToPath = function (a) {
        var b = {}, c = parseFloat(a.x) || 0, d = parseFloat(a.y) || 0, e = parseFloat(a.width) || 0, f = parseFloat(a.height) || 0; return b.d = "M" + c + " " + d + " ", b.d += "L" + (c + e) + " " + d + " ", b.d += "L" + (c + e) + " " + (d + f) + " ", b.d += "L" + c + " " + (d + f) + " Z", b
    },
    a.prototype.polylineToPath = function (a) {
        var e, b = {}, c = a.points.split(" "), d = "M" + c[0]; for (e = 1; e < c.length; e++) -1 !== c[e].indexOf(",") && (d += "L" + c[e]); return b.d = d, b
    },
    a.prototype.polygonToPath = function (b) {
        var c = a.prototype.polylineToPath(b); return c.d += "Z", c
    },
    a.prototype.elipseToPath = function (a) {
        var b = a.cx - a.rx, c = a.cy, d = parseFloat(a.cx) + parseFloat(a.rx), e = a.cy, f = {}; return f.d = "M" + b + "," + c + "A" + a.rx + "," + a.ry + " 0,1,1 " + d + "," + e + "A" + a.rx + "," + a.ry + " 0,1,1 " + b + "," + e, f
    },
    a.prototype.circleToPath = function (a) {
        var b = {}, c = a.cx - a.r, d = a.cy, e = parseFloat(a.cx) + parseFloat(a.r), f = a.cy; return b.d = "M" + c + "," + d + "A" + a.r + "," + a.r + " 0,1,1 " + e + "," + f + "A" + a.r + "," + a.r + " 0,1,1 " + c + "," + f, b
    },
    a.prototype.pathMaker = function (a, b) {
        var c, d, e = document.createElementNS("http://www.w3.org/2000/svg", "path"); for (c = 0; c < a.attributes.length; c++) d = a.attributes[c], -1 === this.ATTR_WATCH.indexOf(d.name) && e.setAttribute(d.name, d.value); for (c in b) e.setAttribute(c, b[c]); return e
    },
    a.prototype.parseAttr = function (a) {
        var b, d, c = {}; for (d = 0; d < a.length; d++) { if (b = a[d], -1 !== this.ATTR_WATCH.indexOf(b.name) && -1 !== b.value.indexOf("%")) throw new Error("Pathformer [parseAttr]: a SVG shape got values in percentage. This cannot be transformed into 'path' tags. Please use 'viewBox'."); c[b.name] = b.value } return c
    };
    var b, c, d;
    e.prototype.setElement = function (a) {
        if ("undefined" == typeof a) throw new Error('Vivus [constructor]: "element" parameter is required'); if (a.constructor === String && (a = document.getElementById(a), !a)) throw new Error('Vivus [constructor]: "element" parameter is not related to an existing ID'); if (a.constructor !== SVGSVGElement) throw new Error('Vivus [constructor]: "element" parameter must be a string or a SVGelement'); this.el = a
    },
    e.prototype.setOptions = function (a) {
        var b = ["delayed", "async", "oneByOne", "scenario", "scenario-sync"], c = ["inViewport", "manual", "autostart"]; if (void 0 !== a && a.constructor !== Object) throw new Error('Vivus [constructor]: "options" parameter must be an object'); if (a = a || {}, a.type && -1 === b.indexOf(a.type)) throw new Error("Vivus [constructor]: " + a.type + " is not an existing animation `type`"); if (this.type = a.type || b[0], a.start && -1 === c.indexOf(a.start)) throw new Error("Vivus [constructor]: " + a.start + " is not an existing `start` option"); if (this.start = a.start || c[0], this.isIE = -1 !== navigator.userAgent.indexOf("MSIE"), this.duration = d(a.duration, 120), this.delay = d(a.delay, null), this.dashGap = d(a.dashGap, 2), this.forceRender = a.hasOwnProperty("forceRender") ? !!a.forceRender : this.isIE, this.selfDestroy = !!a.selfDestroy, this.delay >= this.duration) throw new Error("Vivus [constructor]: delay must be shorter than duration")
    },
    e.prototype.setCallback = function (a) {
        if (a && a.constructor !== Function)
            throw new Error('Vivus [constructor]: "callback" parameter must be a function');
        this.callback = a || function () { }
    },
    e.prototype.mapping = function () {
        var a, b, c, e, f, g, h, i; for (i = g = h = 0, b = this.el.querySelectorAll("path"), a = 0; a < b.length; a++) c = b[a], f = { el: c, length: Math.ceil(c.getTotalLength()) }, isNaN(f.length) ? window.console && console.warn && console.warn("Vivus [mapping]: cannot retrieve a path element length", c) : (g += f.length, this.map.push(f), c.style.strokeDasharray = f.length + " " + (f.length + this.dashGap), c.style.strokeDashoffset = f.length, this.isIE && (f.length += this.dashGap), this.renderPath(a)); for (g = 0 === g ? 1 : g, this.delay = null === this.delay ? this.duration / 3 : this.delay, this.delayUnit = this.delay / (b.length > 1 ? b.length - 1 : 1), a = 0; a < this.map.length; a++) { switch (f = this.map[a], this.type) { case "delayed": f.startAt = this.delayUnit * a, f.duration = this.duration - this.delay; break; case "oneByOne": f.startAt = h / g * this.duration, f.duration = f.length / g * this.duration; break; case "async": f.startAt = 0, f.duration = this.duration; break; case "scenario-sync": c = b[a], e = this.parseAttr(c), f.startAt = i + (d(e["data-delay"], this.delayUnit) || 0), f.duration = d(e["data-duration"], this.duration), i = void 0 !== e["data-async"] ? f.startAt : f.startAt + f.duration, this.frameLength = Math.max(this.frameLength, f.startAt + f.duration); break; case "scenario": c = b[a], e = this.parseAttr(c), f.startAt = d(e["data-start"], this.delayUnit) || 0, f.duration = d(e["data-duration"], this.duration), this.frameLength = Math.max(this.frameLength, f.startAt + f.duration) } h += f.length, this.frameLength = this.frameLength || this.duration }
    },
    e.prototype.drawer = function () {
        var a = this; this.currentFrame += this.speed, this.currentFrame <= 0 ? (this.stop(), this.reset()) : this.currentFrame >= this.frameLength ? (this.stop(), this.currentFrame = this.frameLength, this.trace(), this.selfDestroy && this.destroy(), this.callback(this)) : (this.trace(), this.handle = b(function () { a.drawer() }))
    },
    e.prototype.progress = function (a, c) {
        var e, d = this; this.progressFrame += this.speed, e = c || function () { },
        this.progressFrame <= 0 ? (this.stop(), this.reset()) :
        this.progressFrame >= this.frameLength * a ? (this.stop(),
        this.progressFrame = this.frameLength * a,
        this.trace(this.progressFrame),
        this.selfDestroy && this.destroy(), e(this)) : (this.trace(this.progressFrame),
        this.handle = b(function () { d.progress(a, c) }));
    },
    e.prototype.trace = function (a) {
        var c, d, e, b = a || this.currentFrame;
        for (c = 0; c < this.map.length; c++) e = this.map[c], d = (b - e.startAt) / e.duration, d = Math.max(0, Math.min(1, d)),
            e.progress !== d && (e.progress = d,
            e.el.style.strokeDashoffset = Math.floor(e.length * (1 - d)),
            this.renderPath(c))
    },
    e.prototype.renderPath = function (a) {
        if (this.forceRender && this.map && this.map[a]) { var b = this.map[a], c = b.el.cloneNode(!0); b.el.parentNode.replaceChild(c, b.el), b.el = c }
    },
    e.prototype.starter = function () {
        switch (this.start) { case "manual": return; case "autostart": this.play(); break; case "inViewport": var a = this, b = function () { a.isInViewport(a.el, 1) && (a.play(), window.removeEventListener("scroll", b)) }; window.addEventListener("scroll", b), b() }
    },
    e.prototype.reset = function () {
        return this.currentFrame = 0, this.trace(), this
    },
    e.prototype.play = function (a) {
        if (a && "number" != typeof a) throw new Error("Vivus [play]: invalid speed"); return this.speed = a || 1, this.handle || this.drawer(), this
    },
    e.prototype.stop = function () {
        return this.handle && (c(this.handle), delete this.handle), this
    },
    e.prototype.destroy = function () {
        var a, b; for (a = 0; a < this.map.length; a++) b = this.map[a], b.el.style.strokeDashoffset = null, b.el.style.strokeDasharray = null, this.renderPath(a)
    },
    e.prototype.parseAttr = function (a) {
        var b, d, c = {}; if (a && a.attributes) for (d = 0; d < a.attributes.length; d++) b = a.attributes[d], c[b.name] = b.value; return c
    },
    e.prototype.isInViewport = function (a, b) {
        var c = this.scrollY(), d = c + this.getViewportH(), e = a.getBoundingClientRect(), f = e.height, g = c + e.top, h = g + f; return b = b || 0, d >= g + f * b && h >= c
    },
    e.prototype.docElem = window.document.documentElement,
    e.prototype.getViewportH = function () {
        var a = this.docElem.clientHeight, b = window.innerHeight; return b > a ? b : a
    },
    e.prototype.scrollY = function () {
        return window.pageYOffset || this.docElem.scrollTop
    },
    b = function () {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (a) {
            return window.setTimeout(a, 1e3 / 60)
        }
    }(),
    c = function () {
        return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || function (a) {
            return window.clearTimeout(a)
        }
    }(),
    d = function (a, b) { var c = parseInt(a, 10); return c >= 0 ? c : b }, window.Vivus = e
}();