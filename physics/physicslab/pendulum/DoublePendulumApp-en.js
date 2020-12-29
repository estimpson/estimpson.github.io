(/*Copyright_2016_Erik_Neumann_All_Rights_Reserved_www.myphysicslab.com*/
function() {
    'use strict';
    var f, aa = "function" == typeof Object.create ? Object.create : function(a) {
        function b() {}
        b.prototype = a;
        return new b
    }
    , ba;
    if ("function" == typeof Object.setPrototypeOf)
        ba = Object.setPrototypeOf;
    else {
        var ca;
        a: {
            var da = {
                Vc: !0
            }
              , ea = {};
            try {
                ea.__proto__ = da;
                ca = ea.Vc;
                break a
            } catch (a) {}
            ca = !1
        }
        ba = ca ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b)
                throw new TypeError(a + " is not extensible");
            return a
        }
        : null
    }
    var fa = ba;
    function l(a, b) {
        a.prototype = aa(b.prototype);
        a.prototype.constructor = a;
        if (fa)
            fa(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else
                        a[c] = b[c];
        a.mc = b.prototype
    }
    var ha = this;
    function t(a) {
        return void 0 !== a
    }
    function u(a) {
        return "string" == typeof a
    }
    function w(a) {
        return "number" == typeof a
    }
    function ia() {}
    function ka(a) {
        var b = typeof a;
        if ("object" == b)
            if (a) {
                if (a instanceof Array)
                    return "array";
                if (a instanceof Object)
                    return b;
                var c = Object.prototype.toString.call(a);
                if ("[object Window]" == c)
                    return "object";
                if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice"))
                    return "array";
                if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call"))
                    return "function"
            } else
                return "null";
        else if ("function" == b && "undefined" == typeof a.call)
            return "object";
        return b
    }
    function la(a) {
        var b = ka(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }
    function ma(a) {
        return "function" == ka(a)
    }
    function x(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }
    function na(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }
    function pa(a, b, c) {
        if (!a)
            throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }
    function y(a, b, c) {
        y = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? na : pa;
        return y.apply(null, arguments)
    }
    var qa = Date.now || function() {
        return +new Date
    }
    ;
    function ra(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.mc = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.Ae = function(a, c, g) {
            for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++)
                d[e - 2] = arguments[e];
            return b.prototype[c].apply(a, d)
        }
    }
    ;var sa = Array.prototype.indexOf ? function(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    }
    : function(a, b) {
        if (u(a))
            return u(b) && 1 == b.length ? a.indexOf(b, 0) : -1;
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b)
                return c;
        return -1
    }
      , z = Array.prototype.forEach ? function(a, b, c) {
        Array.prototype.forEach.call(a, b, c)
    }
    : function(a, b, c) {
        for (var d = a.length, e = u(a) ? a.split("") : a, g = 0; g < d; g++)
            g in e && b.call(c, e[g], g, a)
    }
    ;
    function ta(a, b) {
        var c = a.length
          , d = u(a) ? a.split("") : a;
        for (--c; 0 <= c; --c)
            c in d && b.call(void 0, d[c], c, a)
    }
    var ua = Array.prototype.filter ? function(a, b, c) {
        return Array.prototype.filter.call(a, b, c)
    }
    : function(a, b, c) {
        for (var d = a.length, e = [], g = 0, k = u(a) ? a.split("") : a, h = 0; h < d; h++)
            if (h in k) {
                var m = k[h];
                b.call(c, m, h, a) && (e[g++] = m)
            }
        return e
    }
      , C = Array.prototype.map ? function(a, b, c) {
        return Array.prototype.map.call(a, b, c)
    }
    : function(a, b, c) {
        for (var d = a.length, e = Array(d), g = u(a) ? a.split("") : a, k = 0; k < d; k++)
            k in g && (e[k] = b.call(c, g[k], k, a));
        return e
    }
      , va = Array.prototype.reduce ? function(a, b, c) {
        return Array.prototype.reduce.call(a, b, c)
    }
    : function(a, b, c) {
        var d = c;
        z(a, function(c, g) {
            d = b.call(void 0, d, c, g, a)
        });
        return d
    }
    ;
    function wa(a, b) {
        var c = 0;
        z(a, function(a, e, g) {
            b.call(void 0, a, e, g) && ++c
        }, void 0);
        return c
    }
    function xa(a, b) {
        b = ya(a, b, void 0);
        return 0 > b ? null : u(a) ? a.charAt(b) : a[b]
    }
    function ya(a, b, c) {
        for (var d = a.length, e = u(a) ? a.split("") : a, g = 0; g < d; g++)
            if (g in e && b.call(c, e[g], g, a))
                return g;
        return -1
    }
    function D(a, b) {
        return 0 <= sa(a, b)
    }
    function za(a, b) {
        b = sa(a, b);
        var c;
        (c = 0 <= b) && Aa(a, b);
        return c
    }
    function Aa(a, b) {
        return 1 == Array.prototype.splice.call(a, b, 1).length
    }
    function Ba(a, b, c) {
        var d = 0;
        ta(a, function(e, g) {
            b.call(c, e, g, a) && Aa(a, g) && d++
        })
    }
    function Ca(a) {
        return Array.prototype.concat.apply([], arguments)
    }
    function Da(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++)
                c[d] = a[d];
            return c
        }
        return []
    }
    function Ea(a, b, c, d) {
        Array.prototype.splice.apply(a, Fa(arguments, 1))
    }
    function Fa(a, b, c) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    }
    function Ga(a, b) {
        a.sort(b || Ha)
    }
    function Ia(a, b) {
        for (var c = Array(a.length), d = 0; d < a.length; d++)
            c[d] = {
                index: d,
                value: a[d]
            };
        var e = b || Ha;
        Ga(c, function(a, b) {
            return e(a.value, b.value) || a.index - b.index
        });
        for (d = 0; d < a.length; d++)
            a[d] = c[d].value
    }
    function Ha(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    }
    function Ja(a) {
        for (var b = [], c = 0; c < a; c++)
            b[c] = -1;
        return b
    }
    ;function Ka(a) {
        var b = document.createElement("img");
        b.src = a;
        b.width = 30;
        b.height = t(void 0) ? void 0 : 30;
        return b
    }
    function La(a) {
        if (a > Math.PI) {
            var b = Math.floor((a - -Math.PI) / (2 * Math.PI));
            return a - 2 * Math.PI * b
        }
        return a < -Math.PI ? (b = Math.floor(-(a - Math.PI) / (2 * Math.PI)),
        a + 2 * Math.PI * b) : a
    }
    function Ma(a) {
        return null != a ? a.toFixed(5).replace(/\.?0+$/, "") : null === a ? "null" : "undefined"
    }
    function Na(a) {
        var b, c;
        w(b) || (b = 2);
        u(c) || (c = "  ");
        var d = String(a)
          , e = ""
          , g = 0
          , k = d.length
          , h = !1
          , m = []
          , n = ""
          , q = 0;
        a: for (; q < k; q++) {
            var p = d.charAt(q);
            if (h)
                if (" " == p)
                    continue;
                else
                    h = !1;
            if ("{" == p || "[" == p) {
                g++;
                if (g <= b) {
                    e += p + "\n";
                    for (var r = 0; r < g; r++)
                        e += c;
                    h = !0
                } else
                    e += p;
                m.push(n);
                n = "{" == p ? "}" : "]"
            } else if (p == n) {
                if (g <= b)
                    for (g--,
                    e += "\n",
                    r = 0; r < g; r++)
                        e += c;
                else
                    g--;
                e += p;
                n = m.pop();
                if (0 > g)
                    throw Error("unbalanced " + n + " at " + q + " in " + a);
            } else {
                if ('"' == p || "'" == p) {
                    r = p;
                    var A = q;
                    for (e += p; ++q < k; )
                        if (p = d.charAt(q),
                        e += p,
                        p == r)
                            continue a;
                    throw Error("unbalanced quote at " + A + " in " + a);
                }
                if (("," == p || ";" == p) && g <= b) {
                    e += p + "\n";
                    for (r = 0; r < g; r++)
                        e += c;
                    h = !0
                } else
                    e += p
            }
        }
        return e = e.replace(/^\s+\n/gm, "")
    }
    function Qa() {
        window.onerror = function(a, b, c) {
            3 > Ra++ && alert(a + "\n" + b + ":" + c)
        }
    }
    function Sa(a) {
        void 0 !== a && (Ta = a)
    }
    function Ua() {
        return Va && !Wa ? .001 * performance.now() : .001 * qa()
    }
    function Xa(a) {
        if (!isFinite(a))
            throw Error("not a finite number " + a);
        return a
    }
    function Ya(a) {
        if (isNaN(a))
            throw Error("not a number " + a);
        return a
    }
    function E(a) {
        return a.toUpperCase().replace(/[ -]/g, "_")
    }
    function Za(a) {
        if (!a.match(/^[A-Z_][A-Z_0-9]*$/))
            throw Error("not a valid name: " + a);
        return a
    }
    function F(a, b, c) {
        c = c || 1E-14;
        if (0 >= c)
            throw Error("epsilon must be positive " + c);
        var d = d || 1;
        if (0 >= d)
            throw Error("magnitude must be positive " + d);
        var e = Math.max(Math.abs(a), Math.abs(b));
        return Math.abs(a - b) > (e > d ? e : d) * c
    }
    function $a(a) {
        for (var b = a.length, c = 0; c < b; c++)
            a[c] = 0
    }
    var Ta = "."
      , ab = Math.pow(2, 53)
      , Wa = !1
      , Va = x(performance) && ma(performance.now)
      , bb = Number.NaN
      , cb = Number.NEGATIVE_INFINITY
      , Ra = 0
      , db = Number.POSITIVE_INFINITY;
    function G(a, b, c) {
        this.a = Za(E(b));
        this.b = a;
        this.c = c
    }
    f = G.prototype;
    f.toString = function() {
        return ""
    }
    ;
    f.getName = function() {
        return this.a
    }
    ;
    f.L = function() {
        return this.b
    }
    ;
    f.A = function() {
        return this.c
    }
    ;
    f.D = function(a) {
        return this.a == E(a)
    }
    ;
    function eb(a, b, c, d, e) {
        this.i = a;
        this.b = Za(E(b));
        this.g = c;
        this.f = d;
        this.h = e;
        this.a = !1;
        this.c = [];
        this.j = []
    }
    f = eb.prototype;
    f.toString = function() {
        return ""
    }
    ;
    f.hb = function() {
        return this.A().toString()
    }
    ;
    f.Ga = function() {
        return Da(this.c)
    }
    ;
    f.getName = function(a) {
        return a ? this.g : this.b
    }
    ;
    f.L = function() {
        return this.i
    }
    ;
    f.A = function() {
        return this.f()
    }
    ;
    f.Ha = function() {
        return C(this.j, function(a) {
            return a.toString()
        })
    }
    ;
    f.wa = function() {
        return this.a
    }
    ;
    f.D = function(a) {
        return this.b == E(a)
    }
    ;
    f.Ia = function(a) {
        this.a = a
    }
    ;
    f.La = function(a) {
        this.jb("true" == a || "TRUE" == a)
    }
    ;
    f.jb = function(a) {
        if ("boolean" != typeof a)
            throw Error("non-boolean value: " + a);
        a !== this.A() && this.h(a)
    }
    ;
    function H(a, b, c, d, e) {
        this.g = a;
        this.j = Za(E(b));
        this.m = c;
        this.l = d;
        this.o = e;
        this.i = !1;
        this.f = 3;
        this.c = 0;
        this.b = db;
        this.h = [];
        this.a = []
    }
    f = H.prototype;
    f.toString = function() {
        return ""
    }
    ;
    f.hb = function() {
        return this.A().toString()
    }
    ;
    f.Ga = function() {
        return Da(this.h)
    }
    ;
    f.getName = function(a) {
        return a ? this.m : this.j
    }
    ;
    f.L = function() {
        return this.g
    }
    ;
    f.A = function() {
        return this.l()
    }
    ;
    f.Ha = function() {
        return C(this.a, function(a) {
            return a.toString()
        })
    }
    ;
    f.wa = function() {
        return this.i
    }
    ;
    f.D = function(a) {
        return this.j == E(a)
    }
    ;
    function fb(a, b, c) {
        if (c.length !== b.length)
            throw Error("choices and values not same length");
        a.h = b;
        a.a = c;
        b = new G(a.g,"CHOICES_MODIFIED",a);
        I(a.g, b)
    }
    f.Ia = function(a) {
        this.i = a
    }
    ;
    f.La = function(a) {
        var b = Number(a);
        if (isNaN(b))
            throw Error("not a number: " + a);
        this.Fb(b)
    }
    ;
    function gb(a, b) {
        if (b > a.A() || b > a.b)
            throw Error("out of range: " + b + " value=" + a.A() + " upper=" + a.b);
        a.c = b;
        return a
    }
    function hb(a) {
        a.f = 3;
        return a
    }
    f.Fb = function(a) {
        if (!w(a))
            throw Error("not a number: " + a);
        if (a < this.c || a > this.b)
            throw Error("out of range. " + a + " is not between " + this.c + " and " + this.b);
        if (0 < this.a.length && !D(this.a, a))
            throw Error(a + " is not an allowed value among: [" + this.a.join(",") + "]");
        a !== this.A() && this.o(a)
    }
    ;
    function ib(a, b, c, d, e, g, k) {
        this.l = a;
        this.g = Za(E(b));
        this.i = c;
        this.h = d;
        this.j = e;
        this.f = !1;
        this.b = db;
        this.c = [];
        this.a = [];
        if (null != g)
            if (null != k) {
                this.c = g;
                if (k.length !== g.length)
                    throw Error("different lengths choices:" + g + " values:" + k);
                this.a = k
            } else
                throw Error("values is not defined");
    }
    f = ib.prototype;
    f.toString = function() {
        return ""
    }
    ;
    f.hb = function() {
        return this.A()
    }
    ;
    f.Ga = function() {
        return Da(this.c)
    }
    ;
    f.getName = function(a) {
        return a ? this.i : this.g
    }
    ;
    f.L = function() {
        return this.l
    }
    ;
    f.A = function() {
        return this.h()
    }
    ;
    f.Ha = function() {
        return Da(this.a)
    }
    ;
    f.wa = function() {
        return this.f
    }
    ;
    f.D = function(a) {
        return this.g == E(a)
    }
    ;
    f.Ia = function(a) {
        this.f = a
    }
    ;
    f.La = function(a) {
        if (!u(a))
            throw Error("non-string value: " + a);
        if (a.length > this.b)
            throw Error("string too long: " + a + " maxLength=" + this.b);
        if (0 < this.a.length && !D(this.a, a))
            throw Error('"' + a + '" is not an allowed value among: [' + this.a.join(",") + "]");
        a !== this.A() && this.j(a)
    }
    ;
    function J(a) {
        if (!a)
            throw Error("no name");
        this.Bc = Za(E(a));
        this.N = [];
        this.sa = [];
        this.ra = !1;
        this.I = []
    }
    f = J.prototype;
    f.toString = function() {
        return ""
    }
    ;
    function jb(a, b) {
        a.I.push({
            action: !0,
            Hb: b
        });
        kb(a)
    }
    function kb(a) {
        if (!a.ra) {
            for (var b = 0, c = a.I.length; b < c; b++) {
                var d = a.I[b];
                d.action ? D(a.N, d.Hb) || a.N.push(d.Hb) : za(a.N, d.Hb)
            }
            a.I = []
        }
    }
    f.v = function(a) {
        var b = a.getName()
          , c = lb(this, b);
        if (null != c)
            throw Error("parameter " + b + " already exists: " + c);
        this.sa.push(a)
    }
    ;
    function I(a, b) {
        a.ra = !0;
        try {
            z(a.N, function(a) {
                a.O(b)
            })
        } finally {
            a.ra = !1,
            kb(a)
        }
    }
    function K(a, b) {
        var c = lb(a, b);
        if (null == c)
            throw Error("unknown Parameter " + b);
        I(a, c)
    }
    f.getName = function() {
        return this.Bc
    }
    ;
    function lb(a, b) {
        b = E(b);
        return xa(a.sa, function(a) {
            return a.getName() == b
        })
    }
    f.ib = function(a) {
        var b = lb(this, a);
        if (null != b)
            return b;
        throw Error("Parameter not found " + a);
    }
    ;
    function L(a, b) {
        a = lb(a, b);
        if (a instanceof H)
            return a;
        throw Error("ParameterNumber not found " + b);
    }
    function mb(a, b) {
        a = lb(a, b);
        if (a instanceof ib)
            return a;
        throw Error("ParameterString not found " + b);
    }
    f.getParameters = function() {
        return Da(this.sa)
    }
    ;
    function M(a, b, c) {
        c = w(c) ? c : 0;
        this.a = Ya(a);
        this.b = Ya(b);
        this.c = Ya(c)
    }
    f = M.prototype;
    f.toString = function() {
        return ""
    }
    ;
    function nb(a) {
        return a instanceof M ? a : new M(a.w(),a.s(),a.ka())
    }
    f.add = function(a) {
        return new M(this.a + a.w(),this.b + a.s(),this.c + a.ka())
    }
    ;
    function ob(a, b) {
        var c = a.a - b.w()
          , d = a.b - b.s();
        a = a.c - b.ka();
        return c * c + d * d + a * a
    }
    f.ta = function(a) {
        return null === a ? !1 : a.w() === this.a && a.s() === this.b && a.ka() === this.c
    }
    ;
    f.w = function() {
        return this.a
    }
    ;
    f.s = function() {
        return this.b
    }
    ;
    f.ka = function() {
        return this.c
    }
    ;
    f.length = function() {
        return Math.sqrt(pb(this))
    }
    ;
    function pb(a) {
        return 0 === a.c ? a.a * a.a + a.b * a.b : a.a * a.a + a.b * a.b + a.c * a.c
    }
    f.Ba = function(a, b) {
        return F(this.a, a.w(), b) || F(this.b, a.s(), b) || F(this.c, a.ka(), b) ? !1 : !0
    }
    ;
    function qb(a, b) {
        return new M(a.a - b.w(),a.b - b.s(),a.c - b.ka())
    }
    new M(1,0);
    new M(0,1);
    var rb = new M(0,0);
    new M(0,-1);
    new M(-1,0);
    function N(a, b, c, d) {
        this.c = Ya(a);
        this.a = Ya(c);
        this.b = Ya(b);
        this.f = Ya(d);
        if (a > c)
            throw Error("DoubleRect: left > right " + a + " > " + c);
        if (b > d)
            throw Error("DoubleRect: bottom > top " + b + " > " + d);
    }
    f = N.prototype;
    f.toString = function() {
        return ""
    }
    ;
    function sb(a, b) {
        return b.w() >= a.c && b.w() <= a.a && b.s() >= a.b && b.s() <= a.f
    }
    f.ta = function(a) {
        return a === this ? !0 : a instanceof N ? a.R() == this.c && a.a == this.a && a.b == this.b && a.M() == this.f : !1
    }
    ;
    function ub(a) {
        return new M(vb(a),wb(a))
    }
    function vb(a) {
        return (a.c + a.a) / 2
    }
    function wb(a) {
        return (a.b + a.f) / 2
    }
    f.F = function() {
        return this.f - this.b
    }
    ;
    f.R = function() {
        return this.c
    }
    ;
    f.M = function() {
        return this.f
    }
    ;
    f.H = function() {
        return this.a - this.c
    }
    ;
    f.W = function() {
        return 1E-16 > this.H() || 1E-16 > this.F()
    }
    ;
    function xb(a, b, c) {
        if (sb(a, b) || sb(a, c))
            return !0;
        var d = b.w();
        b = b.s();
        var e = c.w();
        c = c.s();
        var g = a.c;
        if (d < g && e < g)
            return !1;
        g = a.a;
        if (d > g && e > g)
            return !1;
        g = a.b;
        if (b < g && c < g)
            return !1;
        g = a.f;
        return b > g && c > g ? !1 : !0
    }
    f.Ba = function(a, b) {
        return F(this.c, a.R(), b) || F(this.b, a.b, b) || F(this.a, a.a, b) || F(this.f, a.M(), b) ? !1 : !0
    }
    ;
    f.scale = function(a, b) {
        b = void 0 === b ? a : b;
        var c = vb(this)
          , d = wb(this)
          , e = this.H()
          , g = this.F();
        return new N(c - a * e / 2,d - b * g / 2,c + a * e / 2,d + b * g / 2)
    }
    ;
    f.translate = function(a, b) {
        w(a) || (b = a.s(),
        a = a.w());
        if (!w(a) || !w(b))
            throw Error();
        return new N(this.c + a,this.b + b,this.a + a,this.f + b)
    }
    ;
    var yb = new N(0,0,0,0);
    function zb(a) {
        this.c = a || 3E3;
        if (2 > this.c)
            throw Error();
        this.b = this.g = this.a = 0;
        this.h = -1;
        this.f = Array(this.c)
    }
    zb.prototype.toString = function() {
        return ""
    }
    ;
    function Ab(a) {
        return 0 == a.a ? -1 : 0 == a.b ? Bb(a, a.a - 1) : Bb(a, a.b - 1)
    }
    function Cb(a) {
        var b = Ab(a);
        return -1 == b ? null : a.f[Db(a, b)]
    }
    zb.prototype.A = function(a) {
        return this.f[Db(this, a)]
    }
    ;
    function Db(a, b) {
        return a.a < a.c ? b : b - (a.g - (b % a.c < a.b ? 0 : 1)) * a.c
    }
    function Bb(a, b) {
        if (a.a < a.c)
            return b;
        a = b + (a.g - (b < a.b ? 0 : 1)) * a.c;
        if (a >= ab)
            throw Error("exceeded max int");
        return a
    }
    zb.prototype.reset = function() {
        this.g = this.b = this.a = 0;
        this.h = -1
    }
    ;
    zb.prototype.store = function(a) {
        this.h = this.b;
        this.f[this.b] = a;
        this.b++;
        this.a < this.c && this.a++;
        this.b >= this.c && (this.g++,
        this.b = 0);
        return Bb(this, this.h)
    }
    ;
    function Eb(a, b) {
        this.c = 0 < a.a;
        this.a = a;
        if (void 0 === b || 0 > b)
            b = a.a < a.c ? 0 : Bb(a, a.b);
        if (0 < a.a && (b < (a.a < a.c ? 0 : Bb(a, a.b)) || b > Ab(a)))
            throw Error("out of range startIndex=" + b);
        this.b = b;
        this.f = Db(a, b)
    }
    function Fb(a) {
        if (0 == a.a.a)
            throw Error("no data");
        return a.b
    }
    Eb.prototype.A = function() {
        if (0 == this.a.a)
            throw Error("no data");
        return this.a.f[this.f]
    }
    ;
    function Gb(a) {
        return a.c || a.b < Ab(a.a)
    }
    function Hb(a) {
        if (0 === a.a.a)
            throw Error("no data");
        if (a.c)
            a.c = !1;
        else {
            if (a.b + 1 > Ab(a.a))
                throw Error("cannot iterate past end of list");
            a.b++;
            a.f = Db(a.a, a.b)
        }
        return a.a.f[a.f]
    }
    ;function Ib(a) {
        for (var b = ["dots", "lines"], c = 0, d = b.length; c < d; c++)
            if (a == b[c])
                return b[c];
        throw Error("not found " + a);
    }
    var Jb = {
        qc: "Dots",
        LINES: "Lines"
    };
    function Kb(a, b, c, d) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.f = d
    }
    f = Kb.prototype;
    f.toString = function() {
        return ""
    }
    ;
    f.ta = function(a) {
        return this.a == a.a && this.b == a.b && this.c == a.c && this.f == a.f
    }
    ;
    f.w = function() {
        return this.a
    }
    ;
    f.s = function() {
        return this.b
    }
    ;
    f.ka = function() {
        return 0
    }
    ;
    function Lb(a, b, c, d) {
        this.f = a;
        this.c = b;
        this.a = c;
        this.b = d
    }
    Lb.prototype.toString = function() {
        return ""
    }
    ;
    function Mb(a, b, c) {
        this.h = a;
        this.f = Za(E(b));
        this.g = c;
        this.a = 0;
        this.c = !1;
        this.b = 0
    }
    f = Mb.prototype;
    f.toString = function() {
        return ""
    }
    ;
    f.hb = function() {
        return this.a.toString()
    }
    ;
    f.Ga = function() {
        return []
    }
    ;
    f.getName = function(a) {
        return a ? this.g : this.f
    }
    ;
    f.L = function() {
        return this.h
    }
    ;
    f.A = function() {
        return this.a
    }
    ;
    f.Ha = function() {
        return []
    }
    ;
    f.wa = function() {
        return this.c
    }
    ;
    f.D = function(a) {
        return this.f == E(a)
    }
    ;
    f.Ia = function(a) {
        this.c = a
    }
    ;
    f.La = function(a) {
        var b = Number(a);
        if (isNaN(b))
            throw Error("not a number: " + a + " (ConcreteVariable)");
        this.a != b && (this.a = b,
        this.b++)
    }
    ;
    function Nb(a, b, c) {
        J.call(this, t(c) ? c : "VARIABLES");
        this.b = -1;
        if (a.length != b.length)
            throw Error("varNames and localNames are different lengths");
        c = 0;
        for (var d = a.length; c < d; c++) {
            var e = a[c];
            if (!u(e))
                throw Error("variable name " + e + " is not a string i=" + c);
            e = Za(E(e));
            a[c] = e;
            "TIME" == e && (this.b = c)
        }
        a: {
            c = a.length;
            if (1 < c) {
                d = Array(c);
                for (e = 0; e < c; e++)
                    d[e] = a[e];
                Ga(d);
                var g = d[0];
                for (e = 1; e < c; e++) {
                    if (g == d[e]) {
                        c = !1;
                        break a
                    }
                    g = d[e]
                }
            }
            c = !0
        }
        if (!c)
            throw Error("duplicate variable names");
        this.a = [];
        c = 0;
        for (d = a.length; c < d; c++)
            this.a.push(new Mb(this,a[c],b[c]))
    }
    l(Nb, J);
    f = Nb.prototype;
    f.toString = function() {
        return ""
    }
    ;
    f.v = function() {
        throw Error("addParameter not allowed on VarsList");
    }
    ;
    function Ob(a, b) {
        if (0 > b || b >= a.a.length)
            throw Error("bad variable index=" + b + "; numVars=" + a.a.length);
    }
    f.ib = function(a) {
        a = E(a);
        var b = xa(this.a, function(b) {
            return b.getName() == a
        });
        if (null != b)
            return b;
        throw Error("Parameter not found " + a);
    }
    ;
    f.getParameters = function() {
        return Da(this.a)
    }
    ;
    f.A = function(a) {
        Ob(this, a);
        return this.a[a].A()
    }
    ;
    function Pb(a) {
        return C(a.a, function(a) {
            return a.wa() ? NaN : a.A()
        })
    }
    function Qb(a, b) {
        if (w(b))
            var c = b;
        else if (u(b)) {
            if (b = E(b),
            c = ya(a.a, function(a) {
                return a.getName() == b
            }),
            0 > c)
                throw Error("unknown variable name " + b);
        } else
            throw Error();
        Ob(a, c);
        return a.a[c]
    }
    f.Ja = function(a) {
        if (0 == arguments.length)
            for (var b = 0, c = this.a.length; b < c; b++)
                this.a[b].b++;
        else
            for (b = 0,
            c = arguments.length; b < c; b++) {
                var d = arguments[b];
                Ob(this, d);
                this.a[d].b++
            }
    }
    ;
    f.Ld = function(a) {
        for (var b = 0, c = arguments.length; b < c; b++) {
            var d = arguments[b];
            Ob(this, d);
            this.a[d].Ia(!0)
        }
    }
    ;
    function Rb(a, b, c, d) {
        Ob(a, b);
        a = a.a[b];
        if ("DELETED" != a.getName()) {
            if (isNaN(c) && !a.wa())
                throw Error("cannot set variable " + a.getName() + " to NaN");
            d ? a.a = c : a.a != c && (a.a = c,
            a.b++)
        }
    }
    function Sb(a, b, c) {
        var d = a.a.length
          , e = b.length;
        if (e > d)
            throw Error("setValues bad length n=" + e + " > N=" + d);
        for (var g = 0; g < d; g++)
            g < e && Rb(a, g, b[g], c)
    }
    var Tb = {
        Xb: "time"
    };
    function Ub(a, b, c) {
        J.call(this, a);
        this.b = b;
        jb(b, this);
        this.f = this.a = -1;
        this.m = gb(new H(this,P.ba,Vb.ba,y(this.zd, this),y(this.Da, this)), -1);
        this.v(this.m);
        this.l = gb(new H(this,P.ea,Vb.ea,y(this.yd, this),y(this.ja, this)), -1);
        this.v(this.l);
        Wb(this);
        this.c = new zb(c || 1E5);
        this.i = "lime";
        this.g = "lines";
        this.h = 1;
        this.j = [];
        Xb(this);
        this.o = function(a) {
            return a
        }
        ;
        this.u = function(a) {
            return a
        }
        ;
        this.v(new H(this,P.LINE_WIDTH,Vb.LINE_WIDTH,y(this.ld, this),y(this.de, this)));
        this.v(new ib(this,P.Ra,Vb.Ra,y(this.dd, this),y(function(a) {
            Yb(this, Ib(a))
        }, this),[Jb.qc, Jb.LINES],["dots", "lines"]));
        this.v(new ib(this,P.Sa,Vb.Sa,y(this.Kd, this),y(this.qa, this)))
    }
    l(Ub, J);
    f = Ub.prototype;
    f.toString = function() {
        return ""
    }
    ;
    function Xb(a) {
        a.j.push(new Lb(Ab(a.c) + 1,a.g,a.i,a.h))
    }
    function Wb(a) {
        for (var b = [Vb.NONE], c = [-1], d = 0, e = a.b.a.length; d < e; d++)
            b.push(Qb(a.b, d).getName(!0)),
            c.push(d);
        fb(a.m, b, c);
        fb(a.l, b, c)
    }
    function Zb(a) {
        return a instanceof Ub ? !0 : !1
    }
    f.Kd = function() {
        return this.i
    }
    ;
    f.dd = function() {
        return this.g
    }
    ;
    function $b(a, b) {
        a = a.j;
        if (0 == a.length)
            throw Error("graph styles list is empty");
        for (var c = a[0], d = 1, e = a.length; d < e; d++) {
            var g = a[d];
            if (g.f > b)
                break;
            c = g
        }
        return c
    }
    f.ld = function() {
        return this.h
    }
    ;
    f.G = function() {
        return this.b
    }
    ;
    f.yd = function() {
        return this.a
    }
    ;
    f.zd = function() {
        return this.f
    }
    ;
    f.T = function() {
        if (-1 < this.a && -1 < this.f) {
            var a = Qb(this.b, this.a)
              , b = Qb(this.b, this.f)
              , c = a.A()
              , d = b.A();
            a = new Kb(this.o(c),this.u(d),a.b,b.b);
            b = Cb(this.c);
            null != b && b.ta(a) || this.c.store(a)
        }
    }
    ;
    f.O = function(a) {
        a.L() == this.b && a.D("VARS_MODIFIED") && Wb(this)
    }
    ;
    f.reset = function() {
        this.c.reset();
        this.j = [];
        Xb(this);
        I(this, new G(this,"RESET"))
    }
    ;
    f.qa = function(a) {
        this.i != a && (this.i = a,
        Xb(this),
        K(this, P.Sa))
    }
    ;
    function Yb(a, b) {
        b = Ib(b);
        a.g != b && (a.g = b,
        Xb(a));
        K(a, P.Ra)
    }
    f.de = function(a) {
        F(a, this.h) && (this.h = a,
        Xb(this),
        K(this, P.LINE_WIDTH))
    }
    ;
    f.ja = function(a) {
        if (-1 > a || a > this.b.a.length - 1)
            throw Error("setXVariable bad index " + a);
        a != this.a && (this.a = a,
        this.reset(),
        K(this, P.ea))
    }
    ;
    f.Da = function(a) {
        if (-1 > a || a > this.b.a.length - 1)
            throw Error("setYVariable bad index " + a);
        a != this.f && (this.f = a,
        this.reset(),
        K(this, P.ba))
    }
    ;
    var P = {
        Ra: "draw mode",
        Sa: "graph color",
        we: "graph draw mode",
        xe: "graph points",
        LINE_WIDTH: "draw width",
        ea: "X variable",
        ba: "Y variable",
        Rb: "clear graph",
        NONE: "-none-"
    }
      , Vb = P;
    function ac(a, b, c, d, e, g) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.f = d;
        this.g = e;
        this.h = g
    }
    ac.prototype.toString = function() {
        return ""
    }
    ;
    function bc(a, b) {
        b.transform(a.a, a.b, a.c, a.f, a.g, a.h)
    }
    function cc(a, b) {
        return new ac(a.a * b.a + a.c * b.b,a.b * b.a + a.f * b.b,a.a * b.c + a.c * b.f,a.b * b.c + a.f * b.f,a.a * b.g + a.c * b.h + a.g,a.b * b.g + a.f * b.h + a.h)
    }
    function dc(a, b) {
        var c = Math.cos(b);
        b = Math.sin(b);
        return new ac(c * a.a + b * a.c,c * a.b + b * a.f,-b * a.a + c * a.c,-b * a.b + c * a.f,a.g,a.h)
    }
    ac.prototype.scale = function(a, b) {
        return new ac(this.a * a,this.b * a,this.c * b,this.f * b,this.g,this.h)
    }
    ;
    function ec(a, b) {
        b.setTransform(a.a, a.b, a.c, a.f, a.g, a.h)
    }
    ac.prototype.translate = function(a, b) {
        w(a) || (b = a.s(),
        a = a.w());
        if (!w(a) || !w(b))
            throw Error();
        return new ac(this.a,this.b,this.c,this.f,this.g + this.a * a + this.c * b,this.h + this.b * a + this.f * b)
    }
    ;
    var fc = new ac(1,0,0,1,0,0);
    function gc() {
        return ["LEFT", "MIDDLE", "RIGHT", "FULL", "VALUE"]
    }
    function hc(a) {
        for (var b = gc(), c = 0, d = b.length; c < d; c++)
            if (a === b[c])
                return b[c];
        throw Error("invalid HorizAlign value:  " + a);
    }
    var ic = {
        uc: "left",
        ub: "middle",
        Jc: "right",
        rb: "full",
        Bb: "value"
    };
    function jc(a, b) {
        if (!(w(0) && w(0) && w(a) && w(b)))
            throw Error();
        if (0 > a || 0 > b)
            throw Error();
        this.b = a;
        this.a = b
    }
    f = jc.prototype;
    f.toString = function() {
        return ""
    }
    ;
    f.ta = function(a) {
        return this.b == a.b && this.a == a.a
    }
    ;
    f.F = function() {
        return this.a
    }
    ;
    f.R = function() {
        return 0
    }
    ;
    f.M = function() {
        return 0
    }
    ;
    f.H = function() {
        return this.b
    }
    ;
    f.W = function() {
        return 1E-14 > this.b || 1E-14 > this.a
    }
    ;
    f.Ba = function(a, b) {
        return F(0, 0, b) || F(0, 0, b) || F(this.b, a.b, b) || F(this.a, a.a, b) ? !1 : !0
    }
    ;
    var kc = new jc(0,0);
    function lc() {
        return ["TOP", "MIDDLE", "BOTTOM", "FULL", "VALUE"]
    }
    function mc(a) {
        for (var b = lc(), c = 0, d = b.length; c < d; c++)
            if (a === b[c])
                return b[c];
        throw Error("invalid VerticalAlign value: " + a);
    }
    var nc = {
        Qc: "top",
        ub: "middle",
        pc: "bottom",
        rb: "full",
        Bb: "value"
    };
    function oc(a, b, c, d, e, g) {
        this.f = Xa(a);
        this.c = Xa(b);
        this.h = Xa(c);
        this.g = Xa(d);
        this.a = Xa(e);
        this.b = Xa(g);
        a = fc;
        a = a.translate(this.f, this.c);
        a = a.scale(this.a, -this.b);
        this.i = a = a.translate(-this.h, -this.g)
    }
    oc.prototype.toString = function() {
        return ""
    }
    ;
    function pc(a, b, c, d, e) {
        c = hc(c || "MIDDLE");
        d = mc(d || "MIDDLE");
        e = e || 1;
        if (1E-15 > e || !isFinite(e))
            throw Error("bad aspectRatio " + e);
        var g = b.R()
          , k = b.b
          , h = b.a - g
          , m = b.M() - k;
        if (1E-15 > h || 1E-15 > m)
            throw Error("simRect cannot be empty " + b);
        b = a.M();
        var n = a.R()
          , q = a.H();
        a = a.F();
        var p = 0
          , r = 0
          , A = 0
          , B = 0;
        "FULL" == c && (A = q / h,
        p = 0);
        "FULL" == d && (B = a / m,
        r = 0);
        if ("FULL" != c || "FULL" != d)
            if ("FULL" == c ? (B = A * e,
            p = !0) : "FULL" == d ? (A = B / e,
            p = !1) : (A = q / h,
            B = A * e,
            p = !0,
            r = Math.floor(.5 + B * m),
            a < r && (B = a / m,
            A = B / e,
            p = !1)),
            p)
                switch (p = 0,
                r = Math.floor(.5 + m * B),
                d) {
                case "BOTTOM":
                    r = 0;
                    break;
                case "MIDDLE":
                    r = (a - r) / 2;
                    break;
                case "TOP":
                    r = a - r;
                    break;
                default:
                    throw Error("unsupported alignment " + d);
                }
            else
                switch (r = 0,
                d = Math.floor(.5 + h * A),
                c) {
                case "LEFT":
                    p = 0;
                    break;
                case "MIDDLE":
                    p = (q - d) / 2;
                    break;
                case "RIGHT":
                    p = q - d;
                    break;
                default:
                    throw Error("unsupported alignment " + c);
                }
        return new oc(n,b + a,g - p / A,k - r / B,A,B)
    }
    function qc(a, b) {
        if (w(b))
            var c = void 0;
        else
            c = b.s(),
            b = b.w();
        if (!w(b) || !w(c))
            throw Error();
        return new M(a.h + (b - a.f) / a.a,a.g + (a.c - c) / a.b)
    }
    function rc(a, b) {
        return new N(a.h + (b.R() - a.f) / a.a,a.g + (a.c - (b.M() + b.F())) / a.b,a.h + (b.R() + b.H() - a.f) / a.a,a.g + (a.c - b.M()) / a.b)
    }
    function sc(a, b) {
        return new M(Q(a, b.w()),R(a, b.s()))
    }
    function Q(a, b) {
        return a.f + (b - a.h) * a.a
    }
    function R(a, b) {
        return a.c - (b - a.g) * a.b
    }
    ;var tc = {
        aliceblue: "#f0f8ff",
        antiquewhite: "#faebd7",
        aqua: "#00ffff",
        aquamarine: "#7fffd4",
        azure: "#f0ffff",
        beige: "#f5f5dc",
        bisque: "#ffe4c4",
        black: "#000000",
        blanchedalmond: "#ffebcd",
        blue: "#0000ff",
        blueviolet: "#8a2be2",
        brown: "#a52a2a",
        burlywood: "#deb887",
        cadetblue: "#5f9ea0",
        chartreuse: "#7fff00",
        chocolate: "#d2691e",
        coral: "#ff7f50",
        cornflowerblue: "#6495ed",
        cornsilk: "#fff8dc",
        crimson: "#dc143c",
        cyan: "#00ffff",
        darkblue: "#00008b",
        darkcyan: "#008b8b",
        darkgoldenrod: "#b8860b",
        darkgray: "#a9a9a9",
        darkgreen: "#006400",
        darkgrey: "#a9a9a9",
        darkkhaki: "#bdb76b",
        darkmagenta: "#8b008b",
        darkolivegreen: "#556b2f",
        darkorange: "#ff8c00",
        darkorchid: "#9932cc",
        darkred: "#8b0000",
        darksalmon: "#e9967a",
        darkseagreen: "#8fbc8f",
        darkslateblue: "#483d8b",
        darkslategray: "#2f4f4f",
        darkslategrey: "#2f4f4f",
        darkturquoise: "#00ced1",
        darkviolet: "#9400d3",
        deeppink: "#ff1493",
        deepskyblue: "#00bfff",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1e90ff",
        firebrick: "#b22222",
        floralwhite: "#fffaf0",
        forestgreen: "#228b22",
        fuchsia: "#ff00ff",
        gainsboro: "#dcdcdc",
        ghostwhite: "#f8f8ff",
        gold: "#ffd700",
        goldenrod: "#daa520",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#adff2f",
        grey: "#808080",
        honeydew: "#f0fff0",
        hotpink: "#ff69b4",
        indianred: "#cd5c5c",
        indigo: "#4b0082",
        ivory: "#fffff0",
        khaki: "#f0e68c",
        lavender: "#e6e6fa",
        lavenderblush: "#fff0f5",
        lawngreen: "#7cfc00",
        lemonchiffon: "#fffacd",
        lightblue: "#add8e6",
        lightcoral: "#f08080",
        lightcyan: "#e0ffff",
        lightgoldenrodyellow: "#fafad2",
        lightgray: "#d3d3d3",
        lightgreen: "#90ee90",
        lightgrey: "#d3d3d3",
        lightpink: "#ffb6c1",
        lightsalmon: "#ffa07a",
        lightseagreen: "#20b2aa",
        lightskyblue: "#87cefa",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#b0c4de",
        lightyellow: "#ffffe0",
        lime: "#00ff00",
        limegreen: "#32cd32",
        linen: "#faf0e6",
        magenta: "#ff00ff",
        maroon: "#800000",
        mediumaquamarine: "#66cdaa",
        mediumblue: "#0000cd",
        mediumorchid: "#ba55d3",
        mediumpurple: "#9370db",
        mediumseagreen: "#3cb371",
        mediumslateblue: "#7b68ee",
        mediumspringgreen: "#00fa9a",
        mediumturquoise: "#48d1cc",
        mediumvioletred: "#c71585",
        midnightblue: "#191970",
        mintcream: "#f5fffa",
        mistyrose: "#ffe4e1",
        moccasin: "#ffe4b5",
        navajowhite: "#ffdead",
        navy: "#000080",
        oldlace: "#fdf5e6",
        olive: "#808000",
        olivedrab: "#6b8e23",
        orange: "#ffa500",
        orangered: "#ff4500",
        orchid: "#da70d6",
        palegoldenrod: "#eee8aa",
        palegreen: "#98fb98",
        paleturquoise: "#afeeee",
        palevioletred: "#db7093",
        papayawhip: "#ffefd5",
        peachpuff: "#ffdab9",
        peru: "#cd853f",
        pink: "#ffc0cb",
        plum: "#dda0dd",
        powderblue: "#b0e0e6",
        purple: "#800080",
        red: "#ff0000",
        rosybrown: "#bc8f8f",
        royalblue: "#4169e1",
        saddlebrown: "#8b4513",
        salmon: "#fa8072",
        sandybrown: "#f4a460",
        seagreen: "#2e8b57",
        seashell: "#fff5ee",
        sienna: "#a0522d",
        silver: "#c0c0c0",
        skyblue: "#87ceeb",
        slateblue: "#6a5acd",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#fffafa",
        springgreen: "#00ff7f",
        steelblue: "#4682b4",
        tan: "#d2b48c",
        teal: "#008080",
        thistle: "#d8bfd8",
        tomato: "#ff6347",
        turquoise: "#40e0d0",
        violet: "#ee82ee",
        wheat: "#f5deb3",
        white: "#ffffff",
        whitesmoke: "#f5f5f5",
        yellow: "#ffff00",
        yellowgreen: "#9acd32"
    };
    function uc(a) {
        var b = {};
        a = String(a);
        var c = "#" == a.charAt(0) ? a : "#" + a;
        if (vc.test(c))
            return b.Db = wc(c),
            b.type = "hex",
            b;
        a: {
            var d = a.match(xc);
            if (d) {
                c = Number(d[1]);
                var e = Number(d[2]);
                d = Number(d[3]);
                if (0 <= c && 255 >= c && 0 <= e && 255 >= e && 0 <= d && 255 >= d) {
                    c = [c, e, d];
                    break a
                }
            }
            c = []
        }
        if (c.length) {
            a = c[0];
            e = c[1];
            c = c[2];
            a = Number(a);
            e = Number(e);
            c = Number(c);
            if (a != (a & 255) || e != (e & 255) || c != (c & 255))
                throw Error('"(' + a + "," + e + "," + c + '") is not a valid RGB color');
            b.Db = "#" + yc(a.toString(16)) + yc(e.toString(16)) + yc(c.toString(16));
            b.type = "rgb";
            return b
        }
        if (tc && (c = tc[a.toLowerCase()]))
            return b.Db = c,
            b.type = "named",
            b;
        throw Error(a + " is not a valid color string");
    }
    var zc = /#(.)(.)(.)/;
    function wc(a) {
        if (!vc.test(a))
            throw Error("'" + a + "' is not a valid hex color");
        4 == a.length && (a = a.replace(zc, "#$1$1$2$2$3$3"));
        return a.toLowerCase()
    }
    var vc = /^#(?:[0-9a-f]{3}){1,2}$/i
      , xc = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i;
    function yc(a) {
        return 1 == a.length ? "0" + a : a
    }
    ;function Ac(a, b) {
        a = a || "SIM_OBJ" + Bc++;
        this.N = Za(E(a));
        this.C = b || a;
        this.B = db
    }
    Ac.prototype.toString = function() {
        return ""
    }
    ;
    Ac.prototype.getName = function(a) {
        return a ? this.C : this.N
    }
    ;
    Ac.prototype.D = function(a) {
        return this.N == E(a)
    }
    ;
    Ac.prototype.u = function(a) {
        return a == this
    }
    ;
    var Bc = 1;
    function Cc(a, b) {
        Ac.call(this, a, b);
        this.b = 1;
        this.a = rb;
        this.j = this.l = 0;
        this.i = 1;
        this.I = rb;
        this.m = 0;
        this.g = rb;
        this.o = [rb]
    }
    l(Cc, Ac);
    Cc.prototype.toString = function() {
        return ""
    }
    ;
    function Dc(a) {
        var b = new ac(1,0,0,1,a.a.w(),a.a.s());
        b = dc(b, a.l);
        return b.translate(-a.g.w(), -a.g.s())
    }
    Cc.prototype.F = function() {
        return this.c / 2 - -this.c / 2
    }
    ;
    function Ec(a) {
        return .5 * a.b * pb(a.I) + 0 * a.b * a.m * a.m
    }
    Cc.prototype.H = function() {
        return this.f / 2 - -this.f / 2
    }
    ;
    function Fc(a) {
        if (!isFinite(void 0))
            throw Error("angular velocity must be finite undefined");
        a.m = void 0
    }
    Cc.prototype.h = function(a) {
        if (0 >= a || !w(a))
            throw Error("mass must be positive " + a);
        this.b = a;
        return this
    }
    ;
    function Gc(a, b) {
        a.a = nb(b);
        t(void 0) && void 0 != a.l && (a.l = void 0,
        a.j = Math.sin(void 0),
        a.i = Math.cos(void 0))
    }
    ;function Hc(a, b) {
        t(a) && "" != a ? b = b ? b : a : (b = Ic++,
        a = Jc.Tb + b,
        b = Kc.Tb + b);
        Cc.call(this, a, b);
        this.c = this.f = this.b = 1
    }
    l(Hc, Cc);
    Hc.prototype.toString = function() {
        return ""
    }
    ;
    function Lc(a) {
        a = new Hc(a,void 0);
        a.f = .2;
        a.c = .2;
        return a
    }
    function Mc(a, b) {
        b.beginPath();
        var c = a.c / 2;
        a = a.f / 2;
        ma(b.ellipse) ? (b.moveTo(a, 0),
        b.ellipse(0, 0, a, c, 0, 0, 2 * Math.PI, !1)) : (b.arc(0, 0, Math.min(a, c), 0, 2 * Math.PI, !1),
        b.closePath())
    }
    Hc.prototype.h = function(a) {
        if (0 > a || !w(a))
            throw Error("mass must be non-negative " + a);
        this.b = a;
        return this
    }
    ;
    Hc.prototype.u = function(a, b) {
        return a instanceof Hc && a.a.Ba(this.a, b) && !F(a.f, this.f, b) && !F(a.c, this.c, b) ? !0 : !1
    }
    ;
    var Ic = 1
      , Jc = {
        Tb: "PointMass"
    }
      , Kc = Jc;
    function Nc(a) {
        this.a = null != a ? a : new Hc("proto");
        this.h = isFinite(this.a.b) && 0 < Da(this.a.o).length;
        this.f = void 0 !== this.b ? this.b : "lightGray";
        this.c = Oc(this.f)
    }
    f = Nc.prototype;
    f.toString = function() {
        return ""
    }
    ;
    f.ya = function(a) {
        var b = this.a;
        var c = a.w() - b.a.w();
        a = a.s() - b.a.s();
        var d = -b.j
          , e = b.i;
        b = new M(b.g.w() + (c * e - a * d),b.g.s() + (c * d + a * e));
        c = this.a;
        c = new N(-c.f / 2,-c.c / 2,c.f / 2,c.c / 2);
        return sb(c, b)
    }
    ;
    function Oc(a) {
        if (!u(a) || "" == a)
            return !1;
        var b = a.match(/^rgba\((.*),\s*\d*\.?\d+\)/);
        null != b && (a = "rgb(" + b[1] + ")");
        a = uc(a).Db;
        a = wc(a);
        var c = [parseInt(a.substr(1, 2), 16), parseInt(a.substr(3, 2), 16), parseInt(a.substr(5, 2), 16)];
        a = c[0];
        b = c[1];
        var d = c[2];
        c = Math.max(Math.max(a, b), d);
        var e = Math.min(Math.min(a, b), d);
        if (e == c)
            e = a = 0;
        else {
            var g = c - e;
            e = g / c;
            a = 60 * (a == c ? (b - d) / g : b == c ? 2 + (d - a) / g : 4 + (a - b) / g);
            0 > a && (a += 360);
            360 < a && (a -= 360)
        }
        a = [a, e, c];
        return .65 > a[2] || .57 < a[1] && .11 > Math.abs(a[0] - .677)
    }
    f.za = function(a, b) {
        a.save();
        var c = 1 / b.a
          , d = cc(b.i, Dc(this.a));
        ec(d, a);
        Mc(this.a, a);
        void 0 !== this.u && this.u && a.clip();
        var e = void 0 !== this.b ? this.b : "lightGray";
        e && (a.fillStyle = e,
        a.fill());
        var g = void 0 !== this.i ? this.i : "";
        if (g) {
            a.lineWidth = (void 0 !== this.N ? this.N : 1) / b.a;
            var k = void 0 !== this.j ? this.j : [];
            0 < k.length && ma(a.setLineDash) && (k = C(k, function(a) {
                return a / b.a
            }),
            a.setLineDash(k));
            a.strokeStyle = g;
            a.stroke();
            a.setLineDash([])
        }
        g = void 0 !== this.B ? this.B : null;
        k = void 0 !== this.I ? this.I : null;
        if (null != g || null != k)
            a.translate(-this.a.f / 2, this.a.c / 2),
            a.scale(c, -c),
            bc(void 0 !== this.o ? this.o : fc, a),
            null != g && a.drawImage(g, 0, 0),
            null != k && k(a);
        if (this.a.b != db) {
            ec(d, a);
            this.f !== e && (this.f = e,
            this.c = Oc(e));
            e = 1 / b.a;
            a.lineWidth = e;
            if (void 0 !== this.l && this.l) {
                g = this.a.g;
                a.strokeStyle = this.c ? "#ccc" : "black";
                k = .2 * Math.min(this.a.H(), this.a.F());
                var h = 8 * e;
                k > h && (k = h);
                a.beginPath();
                a.moveTo(g.w() - k, g.s());
                a.lineTo(g.w() + k, g.s());
                a.stroke();
                a.beginPath();
                a.moveTo(g.w(), g.s() - k);
                a.lineTo(g.w(), g.s() + k);
                a.stroke()
            }
            if (void 0 !== this.m && this.m) {
                var m = 4 * e;
                e = .15 * Math.min(this.a.H(), this.a.F());
                e < m && (m = e);
                z(Da(this.a.o), function(b) {
                    a.fillStyle = this.c ? "#ccc" : "gray";
                    a.beginPath();
                    a.arc(b.w(), b.s(), m, 0, 2 * Math.PI, !1);
                    a.closePath();
                    a.fill()
                }, this)
            }
        }
        void 0 !== this.g && this.g && (d = d.translate(rb),
        (e = void 0 !== this.U ? this.U : 0) && (d = dc(d, e)),
        d = d.scale(c, -c),
        ec(d, a),
        a.fillStyle = void 0 !== this.J ? this.J : "black",
        a.font = void 0 !== this.g ? this.g : "",
        a.textAlign = "center",
        a.fillText(this.a.getName(!0), 0, a.measureText("M").width / 2));
        a.restore()
    }
    ;
    f.ua = function() {
        return [this.a]
    }
    ;
    f.Aa = function() {
        return this.a.a
    }
    ;
    f.va = function() {
        return [this.a]
    }
    ;
    f.S = function() {
        return void 0 !== this.C ? this.C : 0
    }
    ;
    f.xa = function() {
        return this.h
    }
    ;
    f.Ca = function(a) {
        this.h = a
    }
    ;
    function Pc(a, b) {
        a.b = b;
        return a
    }
    f.la = function(a) {
        Gc(this.a, a)
    }
    ;
    function Qc(a) {
        J.call(this, a || "DISPLAY_LIST_" + Rc++);
        this.a = []
    }
    l(Qc, J);
    f = Qc.prototype;
    f.toString = function() {
        return ""
    }
    ;
    f.add = function(a) {
        if (!x(a))
            throw Error("non-object passed to DisplayList.add");
        var b = a.S();
        Sc(this);
        for (var c = 0, d = this.a.length; c < d && !(b < this.a[c].S()); c++)
            ;
        Ea(this.a, c, 0, a);
        I(this, new G(this,"OBJECT_ADDED",a))
    }
    ;
    f.hc = function(a) {
        if (!x(a))
            throw Error("non-object passed to DisplayList.contains");
        return D(this.a, a)
    }
    ;
    function Tc(a, b, c) {
        Sc(a);
        z(a.a, function(a) {
            a.za(b, c)
        })
    }
    f.get = function(a) {
        var b = this.a.length;
        if (0 > a || a >= b)
            throw Error(a + " is not in range 0 to " + (b - 1));
        Sc(this);
        return this.a[a]
    }
    ;
    f.length = function() {
        return this.a.length
    }
    ;
    function Uc(a, b) {
        if (!x(b))
            throw Error("non-object passed to DisplayList.add");
        var c = b.S();
        Sc(a);
        for (var d = a.a.length; 0 < d && !(c > a.a[d - 1].S()); d--)
            ;
        Ea(a.a, d, 0, b);
        I(a, new G(a,"OBJECT_ADDED",b))
    }
    f.remove = function(a) {
        if (!x(a))
            throw Error("non-object passed to DisplayList.remove");
        var b = sa(this.a, a);
        -1 < b && (Aa(this.a, b),
        I(this, new G(this,"OBJECT_REMOVED",a)))
    }
    ;
    function Sc(a) {
        for (var b = !0, c = cb, d = 0, e = a.a.length; d < e; d++) {
            var g = a.a[d].S();
            if (g < c) {
                b = !1;
                break
            }
            c = g
        }
        b || Ia(a.a, function(a, b) {
            a = a.S();
            b = b.S();
            return a < b ? -1 : a > b ? 1 : 0
        })
    }
    var Rc = 1;
    function Vc() {
        this.b = [];
        this.a = !1
    }
    Vc.prototype.toString = function() {
        return ""
    }
    ;
    Vc.prototype.P = function(a) {
        if (this.a)
            throw Error("addMemo during memorize");
        D(this.b, a) || this.b.push(a)
    }
    ;
    Vc.prototype.T = function() {
        try {
            this.a = !0,
            z(this.b, function(a) {
                a.T()
            })
        } finally {
            this.a = !1
        }
    }
    ;
    Vc.prototype.oa = function(a) {
        if (this.a)
            throw Error("removeMemo during memorize");
        za(this.b, a)
    }
    ;
    function Wc(a, b) {
        J.call(this, a);
        if (!(b instanceof N) || b.W())
            throw Error("bad simRect: " + b);
        this.c = b;
        this.f = new jc(800,600);
        this.B = this.o = "MIDDLE";
        this.m = 1;
        this.h = new Qc;
        this.l = !0;
        this.J = 1;
        this.g = pc(this.f, this.c, this.o, this.B, this.m);
        this.b = b.H();
        this.a = b.F();
        this.i = vb(b);
        this.j = wb(b);
        this.u = this.a / this.b;
        this.C = new Vc;
        this.v(new H(this,S.aa,Xc.aa,y(this.H, this),y(this.Qd, this)));
        this.v(new H(this,S.Y,Xc.Y,y(this.F, this),y(this.Gb, this)));
        this.v(gb(new H(this,S.Oa,Xc.Oa,y(this.Od, this),y(this.kb, this)), Number.NEGATIVE_INFINITY));
        this.v(gb(new H(this,S.Pa,Xc.Pa,y(this.Pd, this),y(this.Ib, this)), Number.NEGATIVE_INFINITY));
        this.v(new eb(this,S.yb,Xc.yb,y(this.sd, this),y(this.jc, this)));
        this.v(new ib(this,S.Cb,Xc.Cb,y(this.xd, this),y(function(a) {
            Yc(this, mc(a))
        }, this),[nc.Qc, nc.ub, nc.pc, nc.rb, nc.Bb],lc()));
        this.v(new ib(this,S.tb,Xc.tb,y(this.jd, this),y(function(a) {
            Zc(this, hc(a))
        }, this),[ic.uc, ic.ub, ic.Jc, ic.rb, ic.Bb],gc()));
        this.v(new H(this,S.mb,Xc.mb,y(this.$c, this),y(this.Yd, this)))
    }
    l(Wc, J);
    f = Wc.prototype;
    f.toString = function() {
        return ""
    }
    ;
    f.P = function(a) {
        this.C.P(a)
    }
    ;
    f.$c = function() {
        return this.m
    }
    ;
    f.Od = function() {
        return this.i
    }
    ;
    f.Pd = function() {
        return this.j
    }
    ;
    f.F = function() {
        return this.a
    }
    ;
    f.jd = function() {
        return this.o
    }
    ;
    f.sd = function() {
        return this.l
    }
    ;
    f.xd = function() {
        return this.B
    }
    ;
    f.H = function() {
        return this.b
    }
    ;
    f.T = function() {
        this.C.T()
    }
    ;
    function $c(a) {
        var b = a.i - a.b / 2
          , c = a.j - a.a / 2;
        b = new N(b,c,b + a.b,c + a.a);
        ad(a, b)
    }
    f.Td = function() {
        this.Ib(this.j - .05 * this.a)
    }
    ;
    f.Ud = function() {
        this.kb(this.i - .05 * this.b)
    }
    ;
    f.Vd = function() {
        this.kb(this.i + .05 * this.b)
    }
    ;
    f.Wd = function() {
        this.Ib(this.j + .05 * this.a)
    }
    ;
    function bd(a) {
        var b = pc(a.f, a.c, a.o, a.B, a.m);
        if (!(b instanceof oc))
            throw Error("not a CoordMap: " + b);
        a.g = b;
        I(a, new G(a,"COORD_MAP_CHANGED"));
        a.b = a.c.H();
        a.a = a.c.F();
        a.i = vb(a.c);
        a.j = wb(a.c);
        a.u = a.a / a.b
    }
    f.oa = function(a) {
        this.C.oa(a)
    }
    ;
    f.Yd = function(a) {
        F(this.m, a) && (this.m = a,
        bd(this),
        K(this, S.mb))
    }
    ;
    f.kb = function(a) {
        F(this.i, a) && (this.i = a,
        $c(this))
    }
    ;
    f.Ib = function(a) {
        F(this.j, a) && (this.j = a,
        $c(this))
    }
    ;
    f.Gb = function(a) {
        F(this.a, a) && (this.a = a,
        this.l && (this.b = this.a / this.u),
        $c(this))
    }
    ;
    function Zc(a, b) {
        a.o = hc(b);
        bd(a);
        K(a, S.tb)
    }
    f.jc = function(a) {
        if (this.l != a) {
            if (this.l = a)
                this.u = this.a / this.b;
            K(this, S.yb)
        }
    }
    ;
    function cd(a, b) {
        if (!(b instanceof jc))
            throw Error("not a ScreenRect: " + b);
        if (b.W())
            throw Error("empty screenrect");
        a.f.ta(b) || (a.f = b,
        bd(a),
        I(a, new G(a,"SCREEN_RECT_CHANGED")))
    }
    function ad(a, b) {
        if (!(b instanceof N))
            throw Error("not a DoubleRect: " + b);
        b.ta(a.c) || (a.c = b,
        bd(a),
        K(a, S.aa),
        K(a, S.Y),
        K(a, S.Oa),
        K(a, S.Pa),
        I(a, new G(a,"SIM_RECT_CHANGED")))
    }
    function Yc(a, b) {
        a.B = mc(b);
        bd(a);
        K(a, S.Cb)
    }
    f.Qd = function(a) {
        F(this.b, a) && (this.b = a,
        this.l && (this.a = this.b * this.u),
        $c(this))
    }
    ;
    f.ue = function() {
        this.Gb(this.a / 1.1)
    }
    ;
    f.ve = function() {
        this.Gb(1.1 * this.a)
    }
    ;
    var S = {
        yb: "scale X-Y together",
        aa: "width",
        Y: "height",
        Oa: "center-x",
        Pa: "center-y",
        Cb: "vertical-align",
        tb: "horizontal-align",
        mb: "aspect-ratio"
    }
      , Xc = S;
    function dd(a, b, c) {
        J.call(this, a);
        if (t(b) && !Zb(b))
            throw Error("not a GraphLine " + b);
        this.i = [];
        Zb(b) && (this.i.push(b),
        jb(b, this));
        this.m = c;
        c.P(this);
        jb(c, this);
        this.j = this.u = !0;
        this.B = !1;
        this.o = "BOTH_AXES";
        this.l = Ja(this.i.length);
        this.J = this.C = !1;
        this.g = this.b = this.f = this.a = 0;
        this.c = 10;
        this.h = .01;
        this.v(hb(new H(this,ed.eb,fd.eb,y(this.wd, this),y(this.ne, this))));
        a = ["VERTICAL", "HORIZONTAL", "BOTH_AXES"];
        this.v(new ib(this,ed.nb,fd.nb,y(this.ad, this),y(this.Zd, this),a,a));
        this.v(new eb(this,ed.Ma,fd.Ma,y(this.Yc, this),y(this.ga, this)));
        this.v(new eb(this,ed.pb,fd.pb,y(this.ed, this),y(this.Jd, this)));
        gd(this, this.j)
    }
    l(dd, J);
    f = dd.prototype;
    f.toString = function() {
        return ""
    }
    ;
    function hd(a, b) {
        if (Zb(b))
            D(a.i, b) || (a.i.push(b),
            a.l.push(-1));
        else
            throw Error("not a GraphLine " + b);
    }
    f.Yc = function() {
        return this.j
    }
    ;
    f.ad = function() {
        return this.o
    }
    ;
    f.ed = function() {
        return this.u
    }
    ;
    f.wd = function() {
        return this.c
    }
    ;
    f.T = function() {
        for (var a = 0, b = this.i.length; a < b; a++) {
            var c = this.i[a].c;
            this.l[a] > Ab(c) && this.reset()
        }
        a = 0;
        for (b = this.i.length; a < b; a++)
            for (c = this.i[a].c,
            c = new Eb(c,this.l[a]); Gb(c); ) {
                var d = Hb(c)
                  , e = this.i[a]
                  , g = d.a;
                d = d.b;
                isFinite(g) || (g == Number.POSITIVE_INFINITY ? g = 1E308 : g == Number.NEGATIVE_INFINITY && (g = -1E308));
                isFinite(d) || (d == Number.POSITIVE_INFINITY ? d = 1E308 : d == Number.NEGATIVE_INFINITY && (d = -1E308));
                var k = e.G().b
                  , h = e.a == k;
                e = e.f == k;
                this.C ? (g < this.f && (h ? (this.f = g,
                this.a = g + this.c) : this.f = g - this.h * (this.a - this.f)),
                h ? g > this.a - this.h * this.c && (this.a = g + this.h * this.c,
                this.f = this.a - this.c) : g > this.a && (this.a = g + this.h * (this.a - this.f))) : (this.f = g,
                this.a = g + (h ? this.c : 0),
                this.C = !0);
                this.J ? (d < this.g && (e ? (this.g = d,
                this.b = d + this.c) : this.g = d - this.h * (this.b - this.g)),
                e ? d > this.b - this.h * this.c && (this.b = d + this.h * this.c,
                this.g = this.b - this.c) : d > this.b && (this.b = d + this.h * (this.b - this.g))) : (this.g = d,
                this.b = d + (e ? this.c : 0),
                this.J = !0);
                this.l[a] = Fb(c)
            }
        1E-14 > this.a - this.f && (a = (this.a + this.f) / 2,
        b = Math.max(1E-14 * a, 1E-14),
        this.a = a + b,
        this.f = a - b);
        1E-14 > this.b - this.g && (a = (this.b + this.g) / 2,
        b = Math.max(1E-14 * a, 1E-14),
        this.b = a + b,
        this.g = a - b);
        a = new N(this.f,this.g,this.a,this.b);
        b = this.m.c;
        "VERTICAL" == this.o ? a = new N(b.R(),a.b,b.a,a.M()) : "HORIZONTAL" == this.o && (a = new N(a.R(),b.b,a.a,b.M()));
        this.j && !a.Ba(b) && (this.B = !0,
        ad(this.m, a),
        this.B = !1,
        I(this, new G(this,"AUTO_SCALE",a)))
    }
    ;
    f.O = function(a) {
        a.L() == this.m ? a.D("SIM_RECT_CHANGED") && (this.B || this.ga(!1)) : D(this.i, a.L()) && (a.D(P.ea) || a.D(P.ba) ? this.reset() : a.D("RESET") && this.ga(!0))
    }
    ;
    f.reset = function() {
        this.a = this.f = 0;
        this.C = !1;
        this.b = this.g = 0;
        this.J = !1;
        for (var a = 0, b = this.l.length; a < b; a++)
            this.l[a] = -1
    }
    ;
    f.ga = function(a) {
        this.j != a && (a ? this.u && (this.reset(),
        this.m.P(this),
        gd(this, !0),
        this.j = !0,
        K(this, ed.Ma)) : (this.m.oa(this),
        gd(this, !1),
        this.j = !1,
        K(this, ed.Ma)))
    }
    ;
    f.Zd = function(a) {
        if ("VERTICAL" == a || "HORIZONTAL" == a || "BOTH_AXES" == a)
            this.o = a,
            K(this, ed.nb);
        else
            throw Error("unknown " + a);
    }
    ;
    function gd(a, b) {
        z([S.aa, S.Y, S.Oa, S.Pa], y(function(a) {
            this.m.ib(a).Ia(b)
        }, a))
    }
    f.Jd = function(a) {
        this.u != a && (this.u = a,
        this.ga(a),
        K(this, ed.pb))
    }
    ;
    f.ne = function(a) {
        F(a, this.c) && (this.c = a,
        this.reset(),
        this.ga(!0),
        K(this, ed.eb))
    }
    ;
    var ed = {
        nb: "axis",
        eb: "time window",
        Ma: "active",
        pb: "enabled"
    }
      , fd = ed;
    var id = String.prototype.trim ? function(a) {
        return a.trim()
    }
    : function(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }
    ;
    function jd(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    }
    ;var T;
    a: {
        var kd = ha.navigator;
        if (kd) {
            var ld = kd.userAgent;
            if (ld) {
                T = ld;
                break a
            }
        }
        T = ""
    }
    ;function md(a) {
        md[" "](a);
        return a
    }
    md[" "] = ia;
    function nd(a, b) {
        var c = od;
        return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
    }
    ;var pd = -1 != T.indexOf("Opera")
      , qd = -1 != T.indexOf("Trident") || -1 != T.indexOf("MSIE")
      , rd = -1 != T.indexOf("Edge")
      , sd = -1 != T.indexOf("Gecko") && !(-1 != T.toLowerCase().indexOf("webkit") && -1 == T.indexOf("Edge")) && !(-1 != T.indexOf("Trident") || -1 != T.indexOf("MSIE")) && -1 == T.indexOf("Edge")
      , td = -1 != T.toLowerCase().indexOf("webkit") && -1 == T.indexOf("Edge");
    function ud() {
        var a = ha.document;
        return a ? a.documentMode : void 0
    }
    var vd;
    a: {
        var wd = ""
          , xd = function() {
            var a = T;
            if (sd)
                return /rv:([^\);]+)(\)|;)/.exec(a);
            if (rd)
                return /Edge\/([\d\.]+)/.exec(a);
            if (qd)
                return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
            if (td)
                return /WebKit\/(\S+)/.exec(a);
            if (pd)
                return /(?:Version)[ \/]?(\S+)/.exec(a)
        }();
        xd && (wd = xd ? xd[1] : "");
        if (qd) {
            var yd = ud();
            if (null != yd && yd > parseFloat(wd)) {
                vd = String(yd);
                break a
            }
        }
        vd = wd
    }
    var od = {};
    function zd(a) {
        return nd(a, function() {
            for (var b = 0, c = id(String(vd)).split("."), d = id(String(a)).split("."), e = Math.max(c.length, d.length), g = 0; 0 == b && g < e; g++) {
                var k = c[g] || ""
                  , h = d[g] || "";
                do {
                    k = /(\d*)(\D*)(.*)/.exec(k) || ["", "", "", ""];
                    h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
                    if (0 == k[0].length && 0 == h[0].length)
                        break;
                    b = jd(0 == k[1].length ? 0 : parseInt(k[1], 10), 0 == h[1].length ? 0 : parseInt(h[1], 10)) || jd(0 == k[2].length, 0 == h[2].length) || jd(k[2], h[2]);
                    k = k[3];
                    h = h[3]
                } while (0 == b)
            }
            return 0 <= b
        })
    }
    var Ad;
    var Bd = ha.document;
    Ad = Bd && qd ? ud() || ("CSS1Compat" == Bd.compatMode ? parseInt(vd, 10) : 5) : void 0;
    var Cd;
    (Cd = !qd) || (Cd = 9 <= Number(Ad));
    var Dd = Cd
      , Ed = qd && !zd("9")
      , Fd = function() {
        if (!ha.addEventListener || !Object.defineProperty)
            return !1;
        var a = !1
          , b = Object.defineProperty({}, "passive", {
            get: function() {
                a = !0
            }
        });
        ha.addEventListener("test", ia, b);
        ha.removeEventListener("test", ia, b);
        return a
    }();
    function Gd(a, b) {
        this.type = a;
        this.c = this.target = b
    }
    Gd.prototype.b = function() {}
    ;
    function Hd(a, b) {
        Gd.call(this, a ? a.type : "");
        this.relatedTarget = this.c = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
        this.key = "";
        this.a = 0;
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.pointerId = 0;
        this.pointerType = "";
        this.f = null;
        if (a) {
            var c = this.type = a.type
              , d = a.changedTouches ? a.changedTouches[0] : null;
            this.target = a.target || a.srcElement;
            this.c = b;
            if (b = a.relatedTarget) {
                if (sd) {
                    a: {
                        try {
                            md(b.nodeName);
                            var e = !0;
                            break a
                        } catch (g) {}
                        e = !1
                    }
                    e || (b = null)
                }
            } else
                "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
            this.relatedTarget = b;
            null === d ? (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX,
            this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY,
            this.screenX = a.screenX || 0,
            this.screenY = a.screenY || 0) : (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX,
            this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY,
            this.screenX = d.screenX || 0,
            this.screenY = d.screenY || 0);
            this.button = a.button;
            this.a = a.keyCode || 0;
            this.key = a.key || "";
            this.ctrlKey = a.ctrlKey;
            this.altKey = a.altKey;
            this.shiftKey = a.shiftKey;
            this.metaKey = a.metaKey;
            this.pointerId = a.pointerId || 0;
            this.pointerType = u(a.pointerType) ? a.pointerType : Id[a.pointerType] || "";
            this.f = a;
            a.defaultPrevented && this.b()
        }
    }
    ra(Hd, Gd);
    var Id = {
        2: "touch",
        3: "pen",
        4: "mouse"
    };
    Hd.prototype.b = function() {
        Hd.mc.b.call(this);
        var a = this.f;
        if (a.preventDefault)
            a.preventDefault();
        else if (a.returnValue = !1,
        Ed)
            try {
                if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode)
                    a.keyCode = -1
            } catch (b) {}
    }
    ;
    var Jd = "closure_listenable_" + (1E6 * Math.random() | 0)
      , Kd = 0;
    function Ld(a, b, c, d, e) {
        this.listener = a;
        this.a = null;
        this.src = b;
        this.type = c;
        this.capture = !!d;
        this.c = e;
        this.key = ++Kd;
        this.Ka = this.b = !1
    }
    function Md(a) {
        a.Ka = !0;
        a.listener = null;
        a.a = null;
        a.src = null;
        a.c = null
    }
    ;function Nd(a) {
        this.src = a;
        this.a = {};
        this.b = 0
    }
    Nd.prototype.add = function(a, b, c, d, e) {
        var g = a.toString();
        a = this.a[g];
        a || (a = this.a[g] = [],
        this.b++);
        var k = Od(a, b, d, e);
        -1 < k ? (b = a[k],
        c || (b.b = !1)) : (b = new Ld(b,this.src,g,!!d,e),
        b.b = c,
        a.push(b));
        return b
    }
    ;
    Nd.prototype.remove = function(a, b, c, d) {
        a = a.toString();
        if (!(a in this.a))
            return !1;
        var e = this.a[a];
        b = Od(e, b, c, d);
        return -1 < b ? (Md(e[b]),
        Aa(e, b),
        0 == e.length && (delete this.a[a],
        this.b--),
        !0) : !1
    }
    ;
    function Pd(a, b) {
        var c = b.type;
        c in a.a && za(a.a[c], b) && (Md(b),
        0 == a.a[c].length && (delete a.a[c],
        a.b--))
    }
    function Od(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var g = a[e];
            if (!g.Ka && g.listener == b && g.capture == !!c && g.c == d)
                return e
        }
        return -1
    }
    ;var Qd = "closure_lm_" + (1E6 * Math.random() | 0)
      , Rd = {}
      , Sd = 0;
    function U(a, b, c, d, e) {
        if (d && d.once)
            Td(a, b, c, d, e);
        else if ("array" == ka(b))
            for (var g = 0; g < b.length; g++)
                U(a, b[g], c, d, e);
        else
            c = Ud(c),
            a && a[Jd] ? a.a.add(String(b), c, !1, x(d) ? !!d.capture : !!d, e) : Vd(a, b, c, !1, d, e)
    }
    function Vd(a, b, c, d, e, g) {
        if (!b)
            throw Error("Invalid event type");
        var k = x(e) ? !!e.capture : !!e
          , h = Wd(a);
        h || (a[Qd] = h = new Nd(a));
        c = h.add(b, c, d, k, g);
        if (!c.a) {
            d = Xd();
            c.a = d;
            d.src = a;
            d.listener = c;
            if (a.addEventListener)
                Fd || (e = k),
                void 0 === e && (e = !1),
                a.addEventListener(b.toString(), d, e);
            else if (a.attachEvent)
                a.attachEvent(Yd(b.toString()), d);
            else if (a.addListener && a.removeListener)
                a.addListener(d);
            else
                throw Error("addEventListener and attachEvent are unavailable.");
            Sd++
        }
    }
    function Xd() {
        var a = Zd
          , b = Dd ? function(c) {
            return a.call(b.src, b.listener, c)
        }
        : function(c) {
            c = a.call(b.src, b.listener, c);
            if (!c)
                return c
        }
        ;
        return b
    }
    function Td(a, b, c, d, e) {
        if ("array" == ka(b))
            for (var g = 0; g < b.length; g++)
                Td(a, b[g], c, d, e);
        else
            c = Ud(c),
            a && a[Jd] ? a.a.add(String(b), c, !0, x(d) ? !!d.capture : !!d, e) : Vd(a, b, c, !0, d, e)
    }
    function Yd(a) {
        return a in Rd ? Rd[a] : Rd[a] = "on" + a
    }
    function $d(a, b, c, d) {
        var e = !0;
        if (a = Wd(a))
            if (b = a.a[b.toString()])
                for (b = b.concat(),
                a = 0; a < b.length; a++) {
                    var g = b[a];
                    g && g.capture == c && !g.Ka && (g = ae(g, d),
                    e = e && !1 !== g)
                }
        return e
    }
    function ae(a, b) {
        var c = a.listener
          , d = a.c || a.src;
        if (a.b && !w(a) && a && !a.Ka) {
            var e = a.src;
            if (e && e[Jd])
                Pd(e.a, a);
            else {
                var g = a.type
                  , k = a.a;
                e.removeEventListener ? e.removeEventListener(g, k, a.capture) : e.detachEvent ? e.detachEvent(Yd(g), k) : e.addListener && e.removeListener && e.removeListener(k);
                Sd--;
                (g = Wd(e)) ? (Pd(g, a),
                0 == g.b && (g.src = null,
                e[Qd] = null)) : Md(a)
            }
        }
        return c.call(d, b)
    }
    function Zd(a, b) {
        if (a.Ka)
            return !0;
        if (!Dd) {
            if (!b)
                a: {
                    b = ["window", "event"];
                    for (var c = ha, d = 0; d < b.length; d++)
                        if (c = c[b[d]],
                        null == c) {
                            b = null;
                            break a
                        }
                    b = c
                }
            d = b;
            b = new Hd(d,this);
            c = !0;
            if (!(0 > d.keyCode || void 0 != d.returnValue)) {
                a: {
                    var e = !1;
                    if (0 == d.keyCode)
                        try {
                            d.keyCode = -1;
                            break a
                        } catch (k) {
                            e = !0
                        }
                    if (e || void 0 == d.returnValue)
                        d.returnValue = !0
                }
                d = [];
                for (e = b.c; e; e = e.parentNode)
                    d.push(e);
                a = a.type;
                for (e = d.length - 1; 0 <= e; e--) {
                    b.c = d[e];
                    var g = $d(d[e], a, !0, b);
                    c = c && g
                }
                for (e = 0; e < d.length; e++)
                    b.c = d[e],
                    g = $d(d[e], a, !1, b),
                    c = c && g
            }
            return c
        }
        return ae(a, new Hd(b,this))
    }
    function Wd(a) {
        a = a[Qd];
        return a instanceof Nd ? a : null
    }
    var be = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
    function Ud(a) {
        if (ma(a))
            return a;
        a[be] || (a[be] = function(b) {
            return a.handleEvent(b)
        }
        );
        return a[be]
    }
    ;function V(a, b, c) {
        this.b = document.createElement("button");
        this.b.type = "button";
        t(c) ? (this.b.className = "icon",
        this.b.appendChild(c)) : this.b.appendChild(document.createTextNode(a));
        this.f = b;
        U(this.b, "mousedown", this.Ed, !0, this);
        U(this.b, "mouseup", this.dc, !0, this);
        U(this.b, "dragleave", this.dc, !1, this);
        this.c = void 0;
        this.a = 0
    }
    f = V.prototype;
    f.toString = function() {
        return ""
    }
    ;
    f.K = function() {
        return this.b
    }
    ;
    f.Ed = function() {
        this.ec()
    }
    ;
    f.dc = function() {
        t(this.c) && (clearTimeout(this.c),
        this.c = void 0)
    }
    ;
    f.ec = function() {
        this.f();
        if (0 < this.a) {
            var a = t(this.c) ? this.a : 2 * this.a;
            this.c = setTimeout(y(this.ec, this), a)
        }
    }
    ;
    var ce = qd || pd || td;
    function de(a, b) {
        this.width = a;
        this.height = b
    }
    f = de.prototype;
    f.aspectRatio = function() {
        return this.width / this.height
    }
    ;
    f.W = function() {
        return !(this.width * this.height)
    }
    ;
    f.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    }
    ;
    f.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    }
    ;
    f.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    }
    ;
    f.scale = function(a, b) {
        b = w(b) ? b : a;
        this.width *= a;
        this.height *= b;
        return this
    }
    ;
    function ee() {
        var a = window.document;
        a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
        return new de(a.clientWidth,a.clientHeight)
    }
    function fe(a) {
        var b;
        if (ce && !(qd && zd("9") && !zd("10") && ha.SVGElement && a instanceof ha.SVGElement) && (b = a.parentElement))
            return b;
        b = a.parentNode;
        return x(b) && 1 == b.nodeType ? b : null
    }
    ;function ge(a, b, c, d) {
        this.g = a;
        this.a = b;
        this.h = c;
        this.c = b();
        a = null;
        x(d) ? (b = fe(d),
        null != b && "LABEL" == b.tagName && (a = b)) : (d = document.createElement("input"),
        d.type = "checkbox",
        a = document.createElement("LABEL"),
        a.appendChild(d),
        a.appendChild(document.createTextNode(this.g)));
        this.b = d;
        this.b.checked = this.c;
        this.i = null !== a ? a : this.b;
        U(this.b, "change", this.j, !0, this)
    }
    ge.prototype.toString = function() {
        return ""
    }
    ;
    ge.prototype.K = function() {
        return this.i
    }
    ;
    ge.prototype.j = function() {
        he(this, !this.a())
    }
    ;
    ge.prototype.O = function() {
        he(this, this.a())
    }
    ;
    function he(a, b) {
        a.a() != b && a.h(b);
        a.c != a.a() && (a.c = a.a(),
        a.b.checked = a.c)
    }
    ;function ie(a, b) {
        ge.call(this, a.getName(!0), y(a.A, a), y(a.jb, a), b);
        this.f = a;
        jb(this.f.L(), this)
    }
    l(ie, ge);
    ie.prototype.toString = function() {
        return ""
    }
    ;
    ie.prototype.O = function(a) {
        a == this.f && ge.prototype.O.call(this, a)
    }
    ;
    function je(a, b, c, d, e) {
        this.h = c;
        this.l = d;
        this.g = a;
        this.c = b;
        this.b = sa(this.c, c());
        this.a = document.createElement("select");
        ke(this);
        this.i = u(e) ? e : "";
        a = null;
        0 < this.i.length && (a = document.createElement("LABEL"),
        a.appendChild(document.createTextNode(this.i)),
        a.appendChild(this.a));
        this.a.selectedIndex = this.b;
        this.m = null !== a ? a : this.a;
        U(this.a, "change", this.j, !0, this)
    }
    je.prototype.toString = function() {
        return ""
    }
    ;
    function ke(a) {
        for (var b = a.a.options.length = 0, c = a.g.length; b < c; b++)
            a.a.options[b] = new Option(a.g[b])
    }
    je.prototype.K = function() {
        return this.m
    }
    ;
    je.prototype.j = function() {
        this.a.selectedIndex !== this.b && le(this, this.a.selectedIndex)
    }
    ;
    je.prototype.O = function() {
        var a = sa(this.c, this.h());
        le(this, a)
    }
    ;
    function le(a, b) {
        if (a.b !== b) {
            var c = a.a.options.length;
            if (a.c.length != c)
                throw Error("ChoiceControl: values_.length=" + a.c.length + " but menu.options.length=" + c);
            try {
                -1 > b ? b = -1 : b > c - 1 && (b = c - 1),
                a.b = b,
                -1 < b && a.l(a.c[b])
            } catch (d) {
                alert(d),
                a.b = sa(a.c, a.h())
            }
            a.a.selectedIndex = a.b
        }
    }
    ;function me(a, b, c, d) {
        c = void 0 !== c ? c : a.Ga();
        d = void 0 !== d ? d : a.Ha();
        b = void 0 !== b ? b : a.getName(!0);
        je.call(this, c, d, y(a.hb, a), y(a.La, a), b);
        this.f = a;
        jb(this.f.L(), this)
    }
    l(me, je);
    me.prototype.toString = function() {
        return ""
    }
    ;
    me.prototype.O = function(a) {
        a.A() == this.f && a.D("CHOICES_MODIFIED") ? setTimeout(y(this.o, this), 50) : a == this.f && je.prototype.O.call(this, a)
    }
    ;
    me.prototype.o = function() {
        var a = this.f.Ga();
        a: {
            var b = this.g;
            if (la(b) && la(a) && b.length == a.length) {
                for (var c = b.length, d = 0; d < c; d++)
                    if (b[d] !== a[d]) {
                        b = !1;
                        break a
                    }
                b = !0
            } else
                b = !1
        }
        if (!b) {
            b = this.f.Ha();
            if (a.length != b.length)
                throw Error();
            this.g = a;
            this.c = b;
            this.b = sa(this.c, this.h());
            ke(this);
            this.a.selectedIndex = this.b
        }
    }
    ;
    function ne(a) {
        J.call(this, a || "CLOCK");
        this.j = this.h = Ua();
        this.b = 1;
        this.f = this.c = 0;
        this.g = this.a = !1;
        this.i = [];
        this.v(new H(this,oe.bb,pe.bb,y(this.vd, this),y(this.me, this)))
    }
    l(ne, J);
    f = ne.prototype;
    f.toString = function() {
        return ""
    }
    ;
    function qe(a) {
        z(a.i, function(a) {
            a.cancel()
        })
    }
    function re(a, b, c) {
        z(a.i, function(a) {
            a.a() >= b && a.a() <= b + c && a.b(0)
        })
    }
    f.gb = function() {
        return this.a ? (Ua() - this.j) * this.b : this.f
    }
    ;
    function se(a) {
        return a.a ? (Ua() - a.h) * a.b : a.c
    }
    f.vd = function() {
        return this.b
    }
    ;
    function te(a) {
        a.g = !1;
        a.a && (a.c = se(a),
        a.f = a.gb(),
        qe(a),
        a.a = !1,
        I(a, new G(a,"CLOCK_PAUSE")))
    }
    function ue(a) {
        a.g = !1;
        a.a || (a.a = !0,
        ve(a, a.c),
        we(a, a.f),
        I(a, new G(a,"CLOCK_RESUME")))
    }
    f.Xd = function(a) {
        a.cancel();
        if (this.a) {
            var b = se(this) / this.b + this.h;
            var c = a.a() / this.b + this.h;
            F(c, b) ? c > b && a.b(c - b) : a.c()
        }
    }
    ;
    function we(a, b) {
        a.a ? a.j = Ua() - b / a.b : a.f = b
    }
    function xe(a, b) {
        var c = se(a);
        F(c, b, .001) && (ve(a, b),
        I(a, new G(a,"CLOCK_SET_TIME")))
    }
    function ve(a, b) {
        a.a ? (a.h = Ua() - b / a.b,
        z(a.i, y(a.Xd, a))) : a.c = b
    }
    f.me = function(a) {
        if (F(this.b, a)) {
            var b = se(this)
              , c = this.gb();
            this.b = a;
            ve(this, b);
            we(this, c);
            se(this);
            this.gb();
            K(this, oe.bb)
        }
    }
    ;
    var oe = {
        bb: "time rate"
    }
      , pe = oe;
    function ye(a) {
        this.a = a || yb;
        this.j = "14pt sans-serif";
        this.c = "gray";
        this.g = 0;
        this.h = "VALUE";
        this.i = 0;
        this.b = "VALUE";
        this.f = 0;
        this.Eb = "x";
        this.lb = "y"
    }
    f = ye.prototype;
    f.toString = function() {
        return ""
    }
    ;
    f.ya = function() {
        return !1
    }
    ;
    f.za = function(a, b) {
        a.save();
        a.strokeStyle = this.c;
        a.fillStyle = this.c;
        a.font = this.j;
        a.textAlign = "start";
        a.textBaseline = "alphabetic";
        var c = this.a;
        var d = c.R()
          , e = c.a
          , g = c.b
          , k = c.M();
        var h = e - .06 * (e - d);
        var m = d + .01 * (e - d);
        switch (this.b) {
        case "VALUE":
            var n = this.i;
            n < m ? n = m : n > h && (n = h);
            h = Q(b, n);
            break;
        case "RIGHT":
            h = Q(b, h);
            break;
        case "LEFT":
            h = Q(b, m);
            break;
        default:
            h = Q(b, vb(c))
        }
        m = R(b, k);
        n = R(b, g);
        switch (this.h) {
        case "VALUE":
            c = R(b, this.g);
            c < m + 30 ? c = m + 30 : c > n - 30 && (c = n - 30);
            break;
        case "TOP":
            c = m + 30;
            break;
        case "BOTTOM":
            c = n - 30;
            break;
        default:
            c = R(b, wb(c))
        }
        a.beginPath();
        a.moveTo(Q(b, d), c);
        a.lineTo(Q(b, e), c);
        a.stroke();
        d = c;
        m = this.a;
        e = d - 4;
        c = e + 8;
        var q = m.R();
        m = m.a;
        n = ze(this, m - q);
        for (var p = Math.ceil(q / n) * n; p < m; ) {
            q = Q(b, p);
            a.beginPath();
            a.moveTo(q, e);
            a.lineTo(q, c);
            a.stroke();
            var r = p + n;
            if (r > p)
                p = p.toFixed(this.f),
                a.fillText(p, q - a.measureText(p).width / 2, c + 12);
            else {
                a.fillText("scale is too small", q, c + 12);
                break
            }
            p = r
        }
        a.fillText(this.Eb, Q(b, m) - a.measureText(this.Eb).width - 5, d - 8);
        a.beginPath();
        a.moveTo(h, R(b, g));
        a.lineTo(h, R(b, k));
        a.stroke();
        g = h;
        d = this.a;
        k = g - 4;
        h = k + 8;
        c = d.b;
        d = d.M();
        e = ze(this, d - c);
        for (n = Math.ceil(c / e) * e; n < d; ) {
            c = R(b, n);
            a.beginPath();
            a.moveTo(k, c);
            a.lineTo(h, c);
            a.stroke();
            m = n + e;
            if (m > n)
                n = n.toFixed(this.f),
                q = a.measureText(n).width,
                "RIGHT" === this.b ? a.fillText(n, h - (q + 10), c + 6) : a.fillText(n, h + 5, c + 6);
            else {
                a.fillText("scale is too small", h, c);
                break
            }
            n = m
        }
        k = a.measureText(this.lb).width;
        "RIGHT" === this.b ? a.fillText(this.lb, g - (k + 6), R(b, d) + 13) : a.fillText(this.lb, g + 6, R(b, d) + 13);
        a.restore()
    }
    ;
    f.ua = function() {
        return []
    }
    ;
    function ze(a, b) {
        var c = Math.pow(10, Math.floor(Math.log(b) / Math.LN10));
        b /= c;
        c *= 8 <= b ? 2 : 5 <= b ? 1 : 3 <= b ? .5 : 2 <= b ? .4 : .2;
        b = Math.log(c) / Math.LN10;
        a.f = 0 > b ? Math.ceil(-b) : 0;
        return c
    }
    f.Aa = function() {
        return rb
    }
    ;
    f.va = function() {
        return []
    }
    ;
    f.S = function() {
        return 100
    }
    ;
    f.xa = function() {
        return !1
    }
    ;
    f.qa = function(a) {
        this.c = a
    }
    ;
    f.Ca = function() {}
    ;
    f.la = function() {}
    ;
    function Ae(a) {
        a.h = "BOTTOM";
        w(void 0) && (a.g = void 0)
    }
    function Be(a) {
        a.b = "LEFT";
        w(void 0) && (a.i = void 0)
    }
    ;function Ce(a, b) {
        this.m = a;
        this.l = b;
        this.b = w(2) ? 2 : 1;
        this.a = x(void 0) ? void 0 : rb;
        this.c = !0;
        this.f = "14pt sans-serif";
        this.o = "blue";
        this.j = this.g = 1;
        this.i = "black";
        this.h = "rgba(255, 255, 255, 0.75)"
    }
    f = Ce.prototype;
    f.toString = function() {
        return ""
    }
    ;
    f.ya = function(a) {
        return Math.sqrt(ob(a, this.a)) <= this.b
    }
    ;
    f.za = function(a, b) {
        var c = sc(b, this.a)
          , d = this.b * b.a;
        a.save();
        a.beginPath();
        a.arc(c.w(), c.s(), d, 0, 2 * Math.PI, !1);
        a.closePath();
        a.lineWidth = this.j;
        a.strokeStyle = this.i;
        a.stroke();
        a.fillStyle = this.h;
        a.fill();
        d = this.m();
        var e = this.l();
        De(this, a, b, "blue", d, c);
        De(this, a, b, "red", e, c);
        b = d.toFixed(3);
        a.fillStyle = this.o;
        a.font = this.f;
        a.textAlign = "center";
        a.fillText(b, c.w(), c.s());
        a.restore()
    }
    ;
    function De(a, b, c, d, e, g) {
        e -= 2 * Math.floor(e / 2);
        var k = e / 2;
        e = a.b * Math.sin(2 * Math.PI * k) * c.a;
        c = a.b * Math.cos(2 * Math.PI * k) * c.b;
        b.lineWidth = a.g;
        b.strokeStyle = d;
        b.beginPath();
        b.moveTo(g.w(), g.s());
        b.lineTo(g.w() + e, g.s() - c);
        b.stroke()
    }
    f.xa = function() {
        return this.c
    }
    ;
    f.ua = function() {
        return []
    }
    ;
    f.Aa = function() {
        return this.a
    }
    ;
    f.va = function() {
        return []
    }
    ;
    f.S = function() {
        return 0
    }
    ;
    f.Ca = function(a) {
        this.c = a
    }
    ;
    f.la = function(a) {
        this.a = a
    }
    ;
    var Ee = {
        ab: "show clock"
    };
    function Fe(a, b) {
        if (this.a = a)
            a.spellcheck = !1;
        if (this.f = b)
            b.spellcheck = !1;
        this.a && U(this.a, "keydown", this.u, !1, this);
        this.a && U(this.a, "change", this.I, !0, this);
        this.o = !1;
        this.g = [];
        this.b = -1;
        this.B = [];
        this.j = !1;
        this.l = [];
        this.N = "myphysicslab goog length name terminal find".split(" ");
        this.h = null;
        this.i = 0
    }
    Fe.prototype.toString = function() {
        return ""
    }
    ;
    function Ge(a) {
        return a.replace(/\\(x|u00)([0-9a-fA-F]{2})/g, function(a, c, d) {
            return String.fromCharCode(Number("0x" + d))
        })
    }
    function He(a) {
        return encodeURIComponent(a).replace(/[!'()*]/g, function(a) {
            return "%" + a.charCodeAt(0).toString(16)
        })
    }
    Fe.prototype.eval = function(a, b, c) {
        b = "boolean" == typeof b ? b : !0;
        if ((c = c || !1) && !b)
            throw Error();
        a = Ge(a).trim();
        if (!a.match(/^\s*$/)) {
            this.i++;
            1 < this.i && (b = !1);
            b ? (this.g.unshift(a),
            this.b = -1) : (this.l.push(this.c),
            this.c = void 0);
            try {
                var d = a
                  , e = /^\w\s*\[\s*\d*\s*\]$/
                  , g = d.match(/\w\s*\[[^\]]*?\]/g);
                if (null != g)
                    for (var k = 0, h = g.length; k < h; k++)
                        if (!e.test(g[k]))
                            throw Error("prohibited usage of square brackets in script: " + d + " Only positive integer is allowed in brackets.  Try using Util.get(array, index) or Util.set(array, index, value).");
                for (g = ["", a]; g = Ie(g[1]),
                g[0]; ) {
                    var m = g[0].trim();
                    if (0 != m.length)
                        a: {
                            b && Je(this, "> " + m);
                            if (null != this.h) {
                                b: {
                                    var n = this.h;
                                    h = m;
                                    ";" == h.slice(-1) && (h = h.slice(0, h.length - 1));
                                    d = 0;
                                    for (var q = n.b.length; d < q; d++)
                                        if (h.toLowerCase() == n.b[d]) {
                                            var p = n.j[d]();
                                            break b
                                        }
                                    var r = h.split("=")
                                      , A = E(r[0].trim())
                                      , B = Ke(n, A);
                                    if (null == B || 2 < r.length)
                                        p = void 0;
                                    else {
                                        if (2 == r.length)
                                            try {
                                                var v = r[1].trim();
                                                if (2 > v.length)
                                                    var O = v;
                                                else {
                                                    var Oa = v.charAt(0);
                                                    if (Oa != v.charAt(v.length - 1) || '"' != Oa && "'" != Oa)
                                                        O = v;
                                                    else {
                                                        h = "";
                                                        d = 1;
                                                        for (var tb = v.length - 1; d < tb; d++) {
                                                            var ja = v[d];
                                                            if ("\\" == ja)
                                                                if (d++,
                                                                d < tb)
                                                                    switch (ja = v[d],
                                                                    ja) {
                                                                    case "0":
                                                                        h += "\x00";
                                                                        break;
                                                                    case "b":
                                                                        h += "\b";
                                                                        break;
                                                                    case "t":
                                                                        h += "\t";
                                                                        break;
                                                                    case "n":
                                                                        h += "\n";
                                                                        break;
                                                                    case "v":
                                                                        h += "\v";
                                                                        break;
                                                                    case "f":
                                                                        h += "\f";
                                                                        break;
                                                                    case "r":
                                                                        h += "\r";
                                                                        break;
                                                                    case '"':
                                                                        h += '"';
                                                                        break;
                                                                    case "'":
                                                                        h += "'";
                                                                        break;
                                                                    case "\\":
                                                                        h += "\\";
                                                                        break;
                                                                    default:
                                                                        h += "\\" + ja
                                                                    }
                                                                else
                                                                    h += ja;
                                                            else
                                                                h += ja
                                                        }
                                                        O = h
                                                    }
                                                }
                                                B.La(O)
                                            } catch (Pa) {
                                                throw Pa.message += '\nwhile setting value "' + O + '" on parameter ' + A,
                                                Pa;
                                            }
                                        p = B.A()
                                    }
                                }
                                if (void 0 !== p) {
                                    this.c = p;
                                    break a
                                }
                            }
                            var oa = Le(this, m);
                            console.log("JavaScript is disabled due to advanced compilation; try a simple-compiled version: " + oa);
                            Je(this, "JavaScript is disabled due to advanced compilation; try a simple-compiled version");
                            this.c = void 0
                        }
                }
                b && t(this.c) && ";" != a.slice(-1) && Je(this, String(this.c));
                b && t(this.m) && this.m()
            } catch (Pa) {
                if (b ? (this.c = void 0,
                Je(this, Pa)) : this.c = this.l.pop(),
                !c)
                    throw this.i--,
                    Pa.message += "\nScript: " + a,
                    Pa;
            }
            this.i--;
            if (b)
                return Me(this),
                this.c;
            a = this.c;
            this.c = this.l.pop();
            return a
        }
    }
    ;
    function Le(a, b) {
        b = Ne(b);
        for (var c = "", d = 0; b; ) {
            if (1E4 < ++d)
                throw Error("Terminal.expand");
            var e = b.match(/^[^'"/]+/);
            if (null !== e && (e = e[0],
            b = b.slice(e.length),
            e = va(a.B, function(a, b) {
                return a.replace(b.Be, b.replace)
            }, e),
            Oe(e, a.N),
            c += e,
            0 == b.length))
                break;
            if (c.match(/.*[=(][ ]*$/) && (e = b.match(/^\/[^*/](\\\/|[^\\/])*\//),
            null !== e)) {
                e = e[0];
                b = b.slice(e.length);
                c += e;
                continue
            }
            0 < b.length && "/" == b[0] ? (c += "/",
            b = b.slice(1)) : (e = b.match(/^"(\\.|[^\\"])*"/),
            null !== e ? (e = e[0],
            b = b.slice(e.length),
            c += e) : 0 < b.length && '"' == b[0] ? (c += '"',
            b = b.slice(1)) : (e = b.match(/^'(\\.|[^\\'])*'/),
            null !== e ? (e = e[0],
            b = b.slice(e.length),
            c += e) : 0 < b.length && "'" == b[0] && (c += "'",
            b = b.slice(1))))
        }
        return c
    }
    Fe.prototype.u = function(a) {
        this.a && this.f && (a.metaKey && 75 == a.a ? (this.f.value = "",
        a.b()) : 38 == a.a || 40 == a.a ? (-1 == this.b && "" != this.a.value && (this.g.unshift(this.a.value),
        this.b = 0),
        38 == a.a ? this.b < this.g.length - 1 && (this.b++,
        this.a.value = this.g[this.b]) : 40 == a.a && (0 < this.b ? (this.b--,
        this.a.value = this.g[this.b]) : (this.b = -1,
        this.a.value = "")),
        a.b()) : 13 == a.a && this.eval(this.a.value, !0, !0))
    }
    ;
    Fe.prototype.I = function() {
        this.a && this.eval(this.a.value, !0, !0)
    }
    ;
    function Pe() {
        var a = window.location.href
          , b = a.indexOf("?");
        -1 < b && (a = a.slice(0, b));
        return a
    }
    function Je(a, b) {
        a.f && (a.f.value += b + "\n",
        Me(a))
    }
    function Qe(a) {
        a.j = !0;
        try {
            var b = window.localStorage;
            if (null != b) {
                var c = b.getItem(Pe());
                c && (Je(a, "//start of stored scripts"),
                z(c.split("\n"), function(a) {
                    this.eval(a)
                }, a),
                Je(a, "//end of stored scripts"))
            }
        } catch (d) {
            Je(a, "//cannot access localStorage due to: " + d)
        }
        a.j = !1
    }
    function Ne(a) {
        var b = a.match(/^\s*var\s+(\w[\w_\d]*)(.*)/);
        return b ? b[1] + b[2] : a
    }
    function Me(a) {
        a.a && a.f && (a.f.scrollTop = a.f.scrollHeight - a.f.offsetHeight,
        a.a.value = "")
    }
    function Re(a, b) {
        a.m = b
    }
    function Ie(a) {
        var b = 0, c = "", d = "", e = !1, g = !1, k = !1, h = "", m;
        var n = 0;
        for (m = a.length; n < m; n++) {
            var q = d;
            " " != d && "\t" != d && "\n" != d && (c = d);
            d = a[n];
            var p = n + 1 < m ? a[n + 1] : "\x00";
            if (e) {
                if ("\n" == d && (e = !1,
                0 == b))
                    break
            } else if (g)
                "/" == d && "\\" != q && (g = !1);
            else if (k)
                d == h && "\\" != q && (k = !1,
                h = "");
            else if ("/" == d)
                "/" == p ? e = !0 : "*" == p || !c || "=" != c && "(" != c || (g = !0);
            else if ('"' == d || "'" == d)
                k = !0,
                h = d;
            else if (";" == d && 0 == b)
                break;
            else
                "{" == d ? b++ : "}" == d && b--
        }
        return [a.slice(0, n + 1), a.slice(n + 1)]
    }
    function Oe(a, b) {
        for (var c in window) {
            a: {
                var d = 0;
                for (var e = b.length; d < e; d++)
                    if (c == b[d]) {
                        d = !1;
                        break a
                    }
                d = (new RegExp("\\b" + c + "\\b","g")).test(a)
            }
            if (d)
                throw Error('prohibited name: "' + c + '" found in script: ' + a);
        }
        if (/\b(myEval|Function|with|__proto__|call|apply|caller|callee|arguments|addWhiteList|vetCommand|badCommand|whiteList_|addRegex|addRegex2|regexs_|afterEvalFn_|setAfterEval|parentNode|parentElement|innerHTML|outerHTML|offsetParent|insertAdjacentHTML|appendChild|insertBefore|replaceChild|removeChild|ownerDocument|insertBefore|setParser|defineNames|globalEval|window|defineProperty|defineProperties|__defineGetter__|__defineSetter__)\b/g.test(a))
            throw Error("prohibited name in script: " + a);
    }
    ;function Se(a, b) {
        Te(a);
        this.c = a;
        this.h = "array" == ka(b) ? b : [];
        Ba(this.c, function(a) {
            return D(this.h, a)
        }, this);
        this.c = Ca(this.c, this.h);
        this.m = [];
        this.i = [];
        this.f = [];
        this.a = [];
        this.g = [];
        this.o = [];
        this.b = [];
        this.j = [];
        this.l = [];
        Ue(this, "url", y(function() {
            return Ve(this)
        }, this), "prints URL with script to recreate current state");
        Ue(this, "script", y(function() {
            return We(this)
        }, this), "prints script to recreate current state");
        Ue(this, "values", y(function() {
            return Na(Xe(this, !1, !0, !0) + Xe(this, !0, !0, !0))
        }, this), "shows available parameters and their current values");
        Ue(this, "names", y(function() {
            return Na(Da(this.f).join(";"))
        }, this), "shows available parameter names (format is SUBJECT.PARAMETER)");
        Ue(this, "help", y(function() {
            var a = 'myPhysicsLab version 2.0.0, advanced-compiled on 2020-02-21 12:42:55.\nUse the "values" command to see what can be set and the syntax.\n\ncommand-K            clear Terminal window\narrow up/down        retrieve previous or next command\n';
            for (var b = 0, e = this.b.length; b < e; b++) {
                for (var g = this.b[b]; 20 > g.length; )
                    g += " ";
                a += g + " " + this.l[b] + "\n"
            }
            return a
        }, this), "prints this help text");
        Ye(this)
    }
    Se.prototype.toString = function() {
        return ""
    }
    ;
    function Ue(a, b, c, d) {
        a.b.push(b);
        a.j.push(c);
        a.l.push(d)
    }
    function Te(a) {
        var b = [];
        z(a, function(a) {
            a = a.getName();
            if (D(b, a))
                throw Error("duplicate Subject name: " + a);
            b.push(a)
        })
    }
    function Ke(a, b) {
        b = E(b);
        var c = b.split(".");
        if (1 == c.length) {
            var d = "";
            var e = c[0]
        } else if (2 == c.length)
            d = c[0],
            e = c[1];
        else
            return null;
        if ("" == d) {
            if (1 < wa(a.a, function(a) {
                return a == e
            }))
                throw Error("multiple Subjects have Parameter " + e);
            b = sa(a.a, e)
        } else
            b = sa(a.f, b);
        return -1 < b ? a.g[b].ib(e) : null
    }
    Se.prototype.L = function() {
        var a = E(void 0);
        return xa(this.c, function(b) {
            return b.getName() == a
        })
    }
    ;
    function Xe(a, b, c, d) {
        b = 1 == b;
        var e = C(a.g, function(a, b) {
            return a.ib(this.a[b])
        }, a)
          , g = e;
        c || (g = ua(g, function(a) {
            return !a.wa()
        }));
        g = ua(g, function(a) {
            return D(this.h, a.L()) == b
        }, a);
        var k = /^[a-zA-Z0-9_]+$/;
        a = C(g, function(a) {
            var b = E(a.getName())
              , c = sa(e, a)
              , g = a.A();
            u(g) && !k.test(g) && (g = '"' + g + '"');
            return !d && this.o[c] ? b + "=" + g : E(a.L().getName()) + "." + b + "=" + g
        }, a);
        return 0 < a.length ? a.join(";") + ";" : ""
    }
    function We(a) {
        var b = Xe(a, !1).split(";");
        b = Ca(b, Xe(a, !0).split(";"));
        var c = Ca(a.m, a.i);
        Ba(b, function(a) {
            return D(c, a)
        });
        return b.join(";") + (0 < b.length ? ";" : "")
    }
    function Ve(a) {
        return window.location.href.replace(/\.html\?.*$/, ".html") + "?" + He(We(a))
    }
    function Ye(a) {
        var b = va(a.c, function(a, b) {
            b = ua(b.getParameters(), function(a) {
                return "DELETED" != a.getName()
            });
            return a.concat(b)
        }, []);
        a.g = C(b, function(a) {
            return a.L()
        });
        a.a = C(b, function(a) {
            return E(a.getName())
        });
        a.f = C(b, function(a) {
            return E(a.L().getName() + "." + a.getName())
        });
        a.o = C(a.a, function(a) {
            return 1 == wa(this.a, function(b) {
                return b == a
            })
        }, a);
        a.i = Xe(a, !0).split(";")
    }
    var Ze = {
        Sc: "share",
        Ec: "Press command-C to copy this URL to the clipboard, it will replicate this simulation with current parameters.",
        Tc: "WARNING: URL is longer than 2048 characters."
    };
    function $e(a, b) {
        this.a = a || 0;
        this.c = b || 0;
        this.b = bb
    }
    $e.prototype.toString = function() {
        return ""
    }
    ;
    function af(a) {
        var b = a.a + a.c;
        isNaN(a.b) || (b += a.b);
        return b
    }
    ;var bf = {
        Xa: "potential energy",
        $b: "translational energy",
        Ua: "kinetic energy",
        Ub: "rotational energy",
        Yb: "total",
        Zb: "total energy"
    };
    function cf(a) {
        this.Fa = "10pt sans-serif";
        this.vb = a;
        this.a = yb;
        this.o = this.f = this.b = 0;
        this.c = 10;
        this.l = 2;
        this.i = !0;
        this.Z = "#666";
        this.da = "#999";
        this.$ = "#ccc";
        this.B = Ua();
        this.U = this.J = this.ra = 0;
        this.ca = 1;
        this.sa = cb;
        this.g = this.N = this.I = this.h = 0;
        this.m = Array(12);
        this.u = 0;
        this.X = !0;
        this.j = yb;
        this.C = !0
    }
    f = cf.prototype;
    f.toString = function() {
        return ""
    }
    ;
    f.ya = function(a) {
        return sb(this.a, a)
    }
    ;
    f.za = function(a, b) {
        if (!this.j.W()) {
            a.save();
            a.font = this.Fa;
            a.textAlign = "start";
            a.textBaseline = "alphabetic";
            var c = df(this.vb)
              , d = c.c
              , e = c.a
              , g = c.b
              , k = ef.$b + ",";
            isNaN(g) && (k = ef.Ua + ",");
            var h = 58 / b.b;
            if (this.C || this.a.W() || F(h, this.a.F())) {
                var m = this.a.W() ? this.j.M() : this.a.M()
                  , n = m - h;
                m > this.j.M() || h > this.j.F() ? (m = this.j.M(),
                n = m - h) : n < this.j.b && (n = this.j.b,
                m = n + h);
                this.a = new N(this.j.R(),n,this.j.a,m);
                this.i = !0;
                this.C = !1
            }
            this.f = Q(b, this.a.R()) + 10;
            this.o = Q(b, this.a.a);
            h = this.o - this.f;
            b = R(b, this.a.M());
            a.fillStyle = "rgba(255,255,255,0.75)";
            a.fillRect(this.f - 10, b, h + 10, 58);
            this.g = d + e + (isNaN(g) ? 0 : g);
            this.N = 0 > e ? e : 0;
            .3 < Ua() - this.sa && (this.sa = Ua(),
            this.U = this.J,
            this.J = af(c));
            c = this.N;
            d = Ua();
            1 < d - this.ra ? (this.ra = d,
            ++this.u >= this.m.length && (this.u = 0),
            this.m[this.u] = c) : this.N < this.m[this.u] && (this.m[this.u] = c);
            12 < d - this.B ? (this.B = d,
            c = !0) : c = !1;
            m = d = 0;
            for (n = this.m.length; m < n; m++)
                this.m[m] < d && (d = this.m[m]);
            this.h = d;
            -1E-6 > this.h ? (this.b + Math.floor(.5 + this.h * this.c) < this.f - 10 && (this.i = !0),
            c && -this.h * this.c < .2 * (this.b - this.f) && (this.i = !0)) : 1E-6 < this.h ? this.b > this.f && (this.i = !0) : c && 10 < this.b - this.f && (this.i = !0);
            this.g > this.I && (this.I = this.g);
            1E-12 < this.g ? (this.b + this.g * this.c > this.o && (this.i = !0),
            this.o - this.b > .2 * (this.b - this.f) && this.g * this.c < .2 * (this.o - this.b) && (this.i = !0,
            this.I = this.g)) : -1E-12 > this.g && c && (0 > this.I && this.b < this.o && (this.i = !0),
            this.I = this.g);
            this.i && (this.B = Ua(),
            this.i = !1,
            c = 0 < this.g ? this.g : 0,
            c -= this.h,
            1E-16 > c && (c = 1),
            this.c = c * this.c > h ? .75 * h / c : .95 * h / c,
            this.b = -1E-12 > this.h ? this.f + Math.floor(.5 + this.c * -this.h) : this.f,
            h = Math.pow(10, Math.floor(Math.log(c) / Math.log(10))),
            c /= h,
            this.l = 8 <= c ? 2 : 5 <= c ? 1 : 3 <= c ? .5 : 2 <= c ? .4 : .2,
            this.l *= h);
            h = this.b;
            a.fillStyle = this.Z;
            0 > e ? (e = Math.floor(.5 - e * this.c),
            a.fillRect(h - e, b, e, 10),
            h -= e) : (e = Math.floor(.5 + e * this.c),
            a.fillRect(h, b + 10, e, 10),
            h += e);
            isNaN(g) || (e = Math.floor(.5 + g * this.c),
            a.fillStyle = this.$,
            a.fillRect(h, b + 10, e, 10),
            h += e);
            e = this.b + Math.floor(.5 + this.g * this.c) - h;
            a.fillStyle = this.da;
            a.fillRect(h, b + 10, e, 10);
            e = this.f;
            b += 10;
            h = (this.o - this.b) / this.c;
            if (1E-18 < Math.abs(h) && 1E-18 < this.l) {
                a.fillStyle = "#000";
                a.strokeStyle = "#000";
                c = 0;
                do
                    d = this.b + Math.floor(c * this.c),
                    a.beginPath(),
                    a.moveTo(d, b + 5),
                    a.lineTo(d, b + 12),
                    a.stroke(),
                    m = ff(c),
                    n = a.measureText(m).width,
                    a.fillText(m, d - n / 2, b + 25),
                    c += this.l;
                while (c < h + this.l + 1E-16);if (-1E-12 > this.h) {
                    c = -this.l;
                    do
                        d = this.b + Math.floor(c * this.c),
                        a.beginPath(),
                        a.moveTo(d, b + 5),
                        a.lineTo(d, b + 12),
                        a.stroke(),
                        m = ff(c),
                        n = a.measureText(m).width,
                        a.fillText(m, d - n / 2, b + 25),
                        c -= this.l;
                    while (c > this.h && d >= e)
                }
            }
            e = b + 33;
            b = this.f;
            b = gf(a, ef.Xa + ",", this.Z, b, e);
            isNaN(g) || (b = gf(a, ef.Ub + ",", this.$, b, e));
            b = gf(a, k, this.da, b, e);
            g = ef.Yb + " ";
            k = this.J;
            h = Math.abs(k - this.U);
            1E-15 < h && (h = -Math.floor(Math.log(h) / Math.log(10)),
            h = 0 < h ? h : 1,
            this.ca = 20 > h ? h : 20);
            h = Math.abs(k);
            k = 0 > k ? "-" : "+";
            g += 1E-6 > h ? k + h.toExponential(5) : k + h.toFixed(this.ca);
            a.fillStyle = "#000";
            a.fillText(g, b, e + 12);
            a.restore()
        }
    }
    ;
    function gf(a, b, c, d, e) {
        a.fillStyle = c;
        a.fillRect(d, e, 10, 10);
        d += 13;
        c = a.measureText(b).width;
        a.fillStyle = "#000";
        a.fillText(b, d, e + 12);
        return d + (c + 5)
    }
    f.va = function() {
        return []
    }
    ;
    f.ua = function() {
        return []
    }
    ;
    f.Aa = function() {
        return this.a.W() ? new M(0,0) : ub(this.a)
    }
    ;
    f.S = function() {
        return 0
    }
    ;
    f.xa = function() {
        return this.X
    }
    ;
    function ff(a) {
        var b = Math.abs(a);
        1E-16 > b ? b = "0" : .001 > b ? (b = b.toExponential(3),
        b = b.replace(/\.0+([eE])/, "$1"),
        b = b.replace(/(\.\d*[1-9])0+([eE])/, "$1$2")) : 10 > b ? (b = b.toFixed(4),
        b = b.replace(/\.0+$/, ""),
        b = b.replace(/(\.\d*[1-9])0+$/, "$1")) : 100 > b ? (b = b.toFixed(3),
        b = b.replace(/\.0+$/, ""),
        b = b.replace(/(\.\d*[1-9])0+$/, "$1")) : 1E3 > b ? (b = b.toFixed(2),
        b = b.replace(/\.0+$/, ""),
        b = b.replace(/(\.[1-9])0$/, "$1")) : 1E4 > b ? b = b.toFixed(0) : (b = b.toExponential(3),
        b = b.replace(/\.0+([eE])/, "$1"),
        b = b.replace(/(\.\d*[1-9])0+([eE])/, "$1$2"));
        return 0 > a ? "-" + b : b
    }
    f.Ca = function(a) {
        this.X = a
    }
    ;
    f.la = function(a) {
        if (this.a.W())
            this.a = new N(-5,a.s() - .5,5,a.s() + .5);
        else {
            var b = this.a.F() / 2;
            this.a = new N(this.a.R(),a.s() - b,this.a.a,a.s() + b)
        }
    }
    ;
    function hf(a, b) {
        a.j = b;
        a.C = !0
    }
    var jf = {
        Vb: "show energy",
        Xa: "potential",
        $b: "translational",
        Ua: "kinetic",
        Ub: "rotational",
        Yb: "total"
    }
      , ef = jf;
    function kf(a, b) {
        jb(a, this);
        this.a = b
    }
    kf.prototype.toString = function() {
        return ""
    }
    ;
    kf.prototype.O = function(a) {
        this.a(a)
    }
    ;
    function lf(a) {
        this.a = a
    }
    lf.prototype.toString = function() {
        return ""
    }
    ;
    lf.prototype.K = function() {
        return this.a
    }
    ;
    function mf(a, b) {
        J.call(this, b);
        this.a = a;
        a.contentEditable = !1;
        this.g = [];
        this.h = new Vc;
        this.f = null;
        this.c = 1;
        this.b = "";
        this.v(new H(this,nf.aa,of.aa,y(this.H, this),y(this.Nd, this)));
        this.v(new H(this,nf.Y,of.Y,y(this.F, this),y(this.Md, this)));
        this.v(new H(this,nf.ALPHA,of.ALPHA,y(this.Zc, this),y(this.pa, this)));
        this.v(new ib(this,nf.Ea,of.Ea,y(this.bd, this),y(this.ha, this)))
    }
    l(mf, J);
    f = mf.prototype;
    f.toString = function() {
        return ""
    }
    ;
    f.P = function(a) {
        this.h.P(a)
    }
    ;
    function pf(a, b) {
        if (0 < a.H() && 0 < a.F()) {
            var c = new jc(a.H(),a.F());
            cd(b, c)
        }
        a.g.push(b);
        a.P(b);
        I(a, new G(a,"VIEW_ADDED",b));
        I(a, new G(a,"VIEW_LIST_MODIFIED"));
        if (null == a.f) {
            if (null != b && !D(a.g, b))
                throw Error("cannot set focus to unknown view " + b);
            a.f != b && (a.f = b,
            I(a, new G(a,"FOCUS_VIEW_CHANGED",b)))
        }
    }
    f.Zc = function() {
        return this.c
    }
    ;
    f.bd = function() {
        return this.b
    }
    ;
    f.F = function() {
        return this.a.height
    }
    ;
    function qf(a) {
        return new jc(a.a.width,a.a.height)
    }
    f.H = function() {
        return this.a.width
    }
    ;
    f.T = function() {
        this.h.T()
    }
    ;
    function rf(a) {
        var b = qf(a);
        z(a.g, function(a) {
            cd(a, b)
        });
        I(a, new G(a,"SIZE_CHANGED"))
    }
    function sf(a) {
        if (null != a.a.offsetParent) {
            var b = a.a.getContext("2d");
            b.save();
            try {
                "" != a.b ? (b.globalAlpha = a.c,
                b.fillStyle = a.b,
                b.fillRect(0, 0, a.a.width, a.a.height),
                b.globalAlpha = 1) : b.clearRect(0, 0, a.a.width, a.a.height),
                z(a.g, function(a) {
                    b.save();
                    b.globalAlpha = a.J;
                    Tc(a.h, b, a.g);
                    b.restore()
                })
            } finally {
                b.restore()
            }
        }
    }
    f.oa = function(a) {
        this.h.oa(a)
    }
    ;
    f.pa = function(a) {
        F(this.c, a) && (this.c = a,
        F(a, 1) && "" == this.b && this.ha("white"),
        K(this, nf.ALPHA))
    }
    ;
    f.ha = function(a) {
        this.b != a && (this.b = a,
        K(this, nf.Ea))
    }
    ;
    f.Md = function(a) {
        F(a, this.a.height) && (this.a.height = a);
        rf(this);
        K(this, nf.Y)
    }
    ;
    function tf(a, b, c) {
        if (!w(b) || 0 >= b || !w(c) || 0 >= c)
            throw Error("bad size " + b + ", " + c);
        a.a.width = b;
        a.a.height = c;
        rf(a);
        K(a, nf.aa);
        K(a, nf.Y)
    }
    f.Nd = function(a) {
        F(a, this.a.width) && (this.a.width = a);
        rf(this);
        K(this, nf.aa)
    }
    ;
    var nf = {
        aa: "width",
        Y: "height",
        ALPHA: "alpha",
        Ea: "background"
    }
      , of = nf;
    function uf() {
        this.i = !ma(requestAnimationFrame);
        this.c = void 0;
        this.h = null;
        this.l = y(this.j, this);
        this.a = 0;
        this.b = !1;
        this.f = bb;
        this.g = 0
    }
    uf.prototype.toString = function() {
        return ""
    }
    ;
    uf.prototype.j = function() {
        if (null != this.h) {
            var a = Ua()
              , b = a - (this.f - this.g);
            b >= this.a && (this.h(),
            this.f = a,
            this.g = 0 < this.a ? b % this.a : 0);
            this.c = this.i ? setTimeout(this.l, 0 < this.a ? Math.round(1E3 * this.a) : 17) : requestAnimationFrame(this.l)
        }
    }
    ;
    function vf(a) {
        a.b || (a.b = !0,
        a.g = 0,
        a.f = Ua() - a.a - 1E-7,
        a.j())
    }
    function wf(a) {
        a.b = !1;
        t(a.c) && (a.i ? clearTimeout(a.c) : cancelAnimationFrame(a.c),
        a.c = void 0);
        a.f = NaN;
        a.g = 0
    }
    ;function xf(a, b) {
        J.call(this, b || "SIM_RUNNER");
        this.c = [a];
        this.f = .025;
        this.i = 0;
        this.g = !1;
        this.b = new uf;
        var c = this.i;
        if (0 > c)
            throw Error();
        this.b.a = c;
        c = this.b;
        var d = y(this.Wc, this);
        wf(c);
        c.h = d;
        this.a = new ne((b ? b + "_" : "") + "CLOCK");
        a = a.a.c();
        xe(this.a, a);
        we(this.a, a);
        jb(this.a, this);
        this.h = [];
        this.l = new Vc;
        this.j = [];
        this.v(hb(new H(this,yf.cb,zf.cb,y(this.Cd, this),y(this.Dd, this))));
        this.v(hb(new H(this,yf.ob,zf.ob,y(this.cd, this),y(this.$d, this))));
        this.v(new eb(this,yf.$a,zf.$a,y(this.rd, this),y(this.je, this)));
        this.v(new eb(this,yf.qb,zf.qb,y(this.fd, this),y(this.ae, this)));
        this.v(new eb(this,yf.wb,zf.wb,y(this.od, this),y(this.ge, this)))
    }
    l(xf, J);
    f = xf.prototype;
    f.toString = function() {
        return ""
    }
    ;
    function Af(a, b) {
        D(a.h, b) || (a.h.push(b),
        a.P(b))
    }
    function Bf(a, b) {
        D(a.j, b) || a.j.push(b)
    }
    f.P = function(a) {
        this.l.P(a)
    }
    ;
    f.Wc = function() {
        try {
            if (this.a.a || this.a.g) {
                var a = se(this.a)
                  , b = this.c[0].a.c();
                if (a > b + 1 || a < b - 1) {
                    var c = b + this.f;
                    xe(this.a, c);
                    we(this.a, c);
                    a = c
                }
                c = a;
                for (var d = 0, e = this.c.length; d < e; d++)
                    for (var g = this.c[d], k = c, h = g.a.c(); h < k; ) {
                        var m = g
                          , n = this.f;
                        Cf(m.a.j, m.a.c());
                        var q = m.b.b(n);
                        if (null != q)
                            throw Error("error during advance " + q);
                        m.a.fa();
                        void 0 !== this && this.T();
                        m = h;
                        h = g.a.c();
                        if (1E-15 >= h - m)
                            throw Error("SimRunner: time did not advance");
                        if (k - h < this.f)
                            break
                    }
                this.a.g ? this.a.g = !1 : (a = se(this.a),
                b = this.c[0].a.c(),
                a - b > 20 * this.f && xe(this.a, b))
            }
            Df(this)
        } catch (p) {
            Ef(this, p)
        }
    }
    ;
    f.cd = function() {
        return this.i
    }
    ;
    f.fd = function() {
        return this.b.b
    }
    ;
    f.od = function() {
        return this.g
    }
    ;
    f.rd = function() {
        return this.a.a
    }
    ;
    f.Cd = function() {
        return this.f
    }
    ;
    function Ef(a, b) {
        Ff(a);
        wf(a.b);
        z(a.j, function(a) {
            a.c && Gf(a)
        });
        alert(zf.Nc + (null != b ? " " + b : ""))
    }
    f.T = function() {
        this.l.T()
    }
    ;
    f.O = function(a) {
        a.L() == this.a && (a.D("CLOCK_RESUME") || a.D("CLOCK_PAUSE") ? (a = this.c[0].a.c(),
        xe(this.a, a),
        we(this.a, a),
        K(this, yf.$a)) : a.D("CLOCK_SET_TIME") && this.T())
    }
    ;
    function Df(a) {
        z(a.h, function(a) {
            sf(a)
        })
    }
    function Ff(a) {
        te(a.a);
        return se(a.a)
    }
    f.oa = function(a) {
        this.l.oa(a)
    }
    ;
    f.reset = function() {
        vf(this.b);
        te(this.a);
        z(this.c, function(a) {
            a.reset()
        });
        var a = this.c[0].a.c();
        xe(this.a, a);
        we(this.a, a);
        Df(this);
        I(this, new G(this,"RESET"));
        return se(this.a)
    }
    ;
    function Hf(a) {
        vf(a.b);
        ue(a.a);
        return se(a.a)
    }
    function If(a) {
        z(a.c, function(a) {
            Jf(a.a)
        });
        return se(a.a)
    }
    f.$d = function(a) {
        this.i = a;
        if (0 > a)
            throw Error();
        this.b.a = a;
        K(this, yf.ob)
    }
    ;
    f.ae = function(a) {
        a ? vf(this.b) : this.g || wf(this.b);
        K(this, yf.qb)
    }
    ;
    f.ge = function(a) {
        this.g = a;
        K(this, yf.wb)
    }
    ;
    f.je = function(a) {
        a ? Hf(this) : Ff(this)
    }
    ;
    f.Dd = function(a) {
        this.f = a;
        K(this, yf.cb)
    }
    ;
    f.gc = function() {
        var a = this.c[0].a.c() + this.f - se(this.a)
          , b = this.a;
        te(b);
        b.g = !0;
        var c = b.c;
        b.c += a;
        b.f += a;
        I(b, new G(b,"CLOCK_STEP"));
        re(b, c, a);
        vf(this.b);
        return se(this.a)
    }
    ;
    var yf = {
        cb: "time step",
        ob: "display period",
        Ic: "restart",
        $a: "running",
        qb: "firing",
        ye: "pause",
        ze: "resume",
        wb: "non-stop",
        Mc: "step",
        Nc: "Simulation is stuck; click reset and play to continue."
    }
      , zf = yf;
    function Kf(a, b, c) {
        this.b = a;
        this.c = this.b.A();
        this.g = b;
        this.f = c;
        this.a = document.createElement("button");
        this.a.type = "button";
        this.a.className = "icon";
        c.style.display = this.c ? "block" : "none";
        b.style.display = this.c ? "none" : "block";
        this.a.appendChild(b);
        this.a.appendChild(c);
        U(this.a, "click", this.h, !0, this);
        jb(this.b.L(), this)
    }
    Kf.prototype.toString = function() {
        return ""
    }
    ;
    Kf.prototype.K = function() {
        return this.a
    }
    ;
    Kf.prototype.h = function() {
        Lf(this, !this.c)
    }
    ;
    Kf.prototype.O = function(a) {
        a == this.b && Lf(this, this.b.A())
    }
    ;
    function Lf(a, b) {
        a.c != b && (a.b.jb(b),
        a.c = b,
        a.f.style.display = b ? "block" : "none",
        a.g.style.display = b ? "none" : "block")
    }
    ;function Mf(a, b) {
        var c = new ye(a.c);
        b && (Ae(c),
        Be(c));
        new kf(a,function(b) {
            b.D("COORD_MAP_CHANGED") && (b = rc(a.g, a.f),
            c.a = b)
        }
        );
        a.h.add(c);
        return c
    }
    function Nf(a) {
        var b = [Of.fb, Of.Na, Of.bc, Of.Qb, Of.ac, Of.Pb]
          , c = [Pf.fb, Pf.Na, Pf.bc, Pf.Qb, Pf.ac, Pf.Pb];
        c = C(c, function(a) {
            return E(a)
        });
        b = new je(b,c,function() {
            var b = a.b
              , e = a.c;
            if ("" == b)
                return c[0];
            if ("black" == b)
                if (F(e, 1)) {
                    if (!F(e, .1))
                        return c[3];
                    if (!F(e, .05))
                        return c[5]
                } else
                    return c[1];
            else if ("white" == b)
                if (F(e, 1)) {
                    if (!F(e, .1))
                        return c[2];
                    if (!F(e, .05))
                        return c[4]
                } else
                    return c[0];
            return -1
        }
        ,function(b) {
            switch (sa(c, b)) {
            case 0:
                a.ha("");
                a.pa(1);
                break;
            case 1:
                a.ha("black");
                a.pa(1);
                break;
            case 2:
                a.ha("white");
                a.pa(.1);
                break;
            case 3:
                a.ha("black");
                a.pa(.1);
                break;
            case 4:
                a.ha("white");
                a.pa(.05);
                break;
            case 5:
                a.ha("black"),
                a.pa(.05)
            }
        }
        ,Of.Ea);
        jb(a, b);
        return b
    }
    function Qf(a, b) {
        var c = Ta + "/"
          , d = document.createElement("div");
        d.style.width = "96px";
        var e = Ka(c + "up_gray.png");
        e = new V("up",y(a.Wd, a),e);
        e.a = 100;
        d.appendChild(e.K());
        var g = document.createElement("div");
        g.style.width = d.style.width;
        e = Ka(c + "backward_gray.png");
        e = new V("left",y(a.Ud, a),e);
        e.a = 100;
        g.appendChild(e.K());
        e = Ka(c + "target_gray.png");
        e = new V("reset",b,e);
        g.appendChild(e.K());
        e = Ka(c + "forward_gray.png");
        e = new V("right",y(a.Vd, a),e);
        e.a = 100;
        g.appendChild(e.K());
        var k = document.createElement("div");
        e = Ka(c + "down_gray.png");
        e = new V("down",y(a.Td, a),e);
        e.a = 100;
        k.appendChild(e.K());
        k.style.width = d.style.width;
        b = document.createElement("div");
        b.appendChild(d);
        b.appendChild(g);
        b.appendChild(k);
        b.style.textAlign = "center";
        d = document.createElement("div");
        e = Ka(c + "plus_gray.png");
        e = new V("zoomIn",y(a.ue, a),e);
        e.a = 100;
        d.appendChild(e.K());
        d.appendChild(document.createElement("BR"));
        e = Ka(c + "minus_gray.png");
        e = new V("zoomOut",y(a.ve, a),e);
        e.a = 100;
        d.appendChild(e.K());
        d.style.cssFloat = "right";
        d.style.marginTop = "18px";
        a = document.createElement("div");
        a.style.position = "absolute";
        a.style.right = "10%";
        a.style.bottom = "12%";
        a.style.width = "126px";
        a.appendChild(d);
        a.appendChild(b);
        a.style.display = "none";
        return a
    }
    function Rf(a) {
        var b = Ta + "/"
          , c = document.createElement("div");
        c.style.display = "block";
        var d = Ka(b + "rewind.png");
        d = new V(zf.Ic,y(a.reset, a),d);
        c.appendChild(d.K());
        d = Ka(b + "forward.png");
        var e = Ka(b + "pause.png");
        var g = yf.$a
          , k = lb(a, g);
        if (!(k instanceof eb))
            throw Error("ParameterBoolean not found " + g);
        d = new Kf(k,d,e);
        c.appendChild(d.K());
        d = Ka(b + "next.png");
        a = new V(zf.Mc,y(a.gc, a),d);
        a.a = 100;
        c.appendChild(a.K());
        return new lf(c)
    }
    function Sf(a, b, c, d) {
        a = new Se(a,b);
        Ue(a, "reset", function() {
            return c.reset()
        }, "sets simulation to initial conditions");
        Ue(a, "save", function() {
            return If(c)
        }, "saves simulation initial conditions");
        Ue(a, "step", function() {
            return c.gc()
        }, "advance simulation by a small time increment");
        Ue(a, "pause", function() {
            return Ff(c)
        }, "pause simulation");
        Ue(a, "resume", function() {
            return Hf(c)
        }, "resume simulation");
        return d.h = a
    }
    function Tf(a, b, c) {
        var d = b.h;
        b = new eb(c,Ee.ab,Ee.ab,y(d.hc, d, a),function(b) {
            b ? d.add(a) : d.remove(a);
            K(c, Ee.ab)
        }
        );
        c.v(b);
        new kf(d,function(b) {
            b.A() == a && K(c, Ee.ab)
        }
        );
        return b
    }
    function Uf(a, b, c) {
        var d = u(void 0) ? void 0 : jf.Vb
          , e = u(void 0) ? void 0 : ef.Vb
          , g = rc(b.g, b.f);
        hf(a, g);
        var k = b.h;
        b = new eb(c,d,e,y(k.hc, k, a),function(b) {
            b ? k.add(a) : k.remove(a);
            K(c, d)
        }
        );
        c.v(b);
        new kf(k,function(b) {
            b.A() == a && K(c, d)
        }
        );
        return b
    }
    function Vf(a, b) {
        var c = new eb(b,Pf.xb,Of.xb,function() {
            return "none" != a.style.display
        }
        ,function(c) {
            a.style.display = c ? "block" : "none";
            K(b, Pf.xb)
        }
        );
        b.v(c);
        return c
    }
    function Wf(a, b) {
        if (!t(a))
            throw Error();
        return new V(Ze.Sc,function() {
            var c = Ve(a)
              , d = Ze.Ec;
            2048 < c.length && (d = d + "  " + Ze.Tc);
            var e = b.b.b;
            e && (b.g || wf(b.b));
            window.prompt(d, c);
            e && vf(b.b)
        }
        )
    }
    var Pf = {
        xb: "pan-zoom",
        Ea: "background",
        fb: "white",
        Na: "black",
        bc: "white with trails",
        Qb: "black with trails",
        ac: "white with long trails",
        Pb: "black with long trails"
    }
      , Of = Pf;
    function Xf(a, b, c) {
        Ac.call(this, a);
        this.b = x(b) ? b : rb;
        this.a = x(c) ? c : rb
    }
    l(Xf, Ac);
    Xf.prototype.toString = function() {
        return ""
    }
    ;
    Xf.prototype.u = function(a, b) {
        return a instanceof Xf && a.b.Ba(this.b, b) ? a.a.Ba(this.a, b) : !1
    }
    ;
    function Yf() {
        J.call(this, "SIM_LIST");
        this.a = []
    }
    l(Yf, J);
    f = Yf.prototype;
    f.toString = function() {
        return ""
    }
    ;
    f.add = function(a) {
        for (var b = 0; b < arguments.length; b++) {
            var c = arguments[b];
            if (null == c)
                throw Error("cannot add invalid SimObject");
            if (isFinite(c.B))
                for (var d; d = Zf(this, c); )
                    this.remove(d);
            D(this.a, c) || (this.a.push(c),
            I(this, new G(this,"OBJECT_ADDED",c)))
        }
    }
    ;
    f.get = function(a) {
        if (w(a)) {
            if (0 <= a && a < this.a.length)
                return this.a[a]
        } else if (u(a)) {
            a = E(a);
            var b = xa(this.a, function(b) {
                return b.getName() == a
            });
            if (null != b)
                return b
        }
        throw Error("SimList did not find " + a);
    }
    ;
    function $f(a, b) {
        a = a.get(b);
        if (a instanceof Xf)
            return a;
        throw Error("no ConcreteLine named " + b);
    }
    function ag(a, b) {
        a = a.get(b);
        if (a instanceof Hc)
            return a;
        throw Error("no PointMass named " + b);
    }
    function Zf(a, b) {
        return xa(a.a, function(a) {
            return a.u(b, .1)
        })
    }
    f.indexOf = function(a) {
        return sa(this.a, a)
    }
    ;
    f.length = function() {
        return this.a.length
    }
    ;
    f.remove = function(a) {
        za(this.a, a) && I(this, new G(this,"OBJECT_REMOVED",a))
    }
    ;
    function Cf(a, b) {
        for (var c = a.a.length - 1; 0 <= c; c--) {
            var d = a.a[c];
            d.B < b && (a.a.splice(c, 1),
            I(a, new G(a,"OBJECT_REMOVED",d)))
        }
    }
    ;function bg(a, b, c) {
        this.a = a;
        this.c = b;
        this.f = c
    }
    bg.prototype.toString = function() {
        return ""
    }
    ;
    bg.prototype.getName = function(a) {
        return a ? cg.V + "-" + this.f.getName(!0) : E(dg.V) + "_" + this.f.getName(!1)
    }
    ;
    bg.prototype.D = function(a) {
        return this.getName() == E(a)
    }
    ;
    bg.prototype.b = function(a) {
        var b = this.a;
        b.u = Pb(b.f);
        b = this.a.c();
        var c = a;
        this.a.fa();
        var d = af(df(this.c))
          , e = db
          , g = db
          , k = !0;
        if (1E-15 > a)
            return null;
        do {
            var h = b;
            if (!k) {
                var m = this.a;
                null != m.u && Sb(m.f, m.u, !0);
                this.a.fa();
                df(this.c);
                c /= 5;
                if (1E-15 > c)
                    throw Error("time step too small " + c);
            }
            for (m = 0; h < b + a; ) {
                var n = c;
                h + n > b + a - 1E-10 && (n = b + a - h);
                m++;
                var q = this.f.b(n);
                this.a.fa();
                if (null != q)
                    return q;
                h += n
            }
            h = af(df(this.c));
            h = Math.abs(d - h);
            k || (g = Math.abs(h - e));
            e = h;
            k = !1
        } while (1E-6 < g);return null
    }
    ;
    var dg = {
        V: "Adaptive Step"
    }
      , cg = dg;
    function eg(a) {
        this.f = a;
        this.a = [];
        this.c = []
    }
    eg.prototype.toString = function() {
        return ""
    }
    ;
    eg.prototype.getName = function(a) {
        return a ? fg.V : E(gg.V)
    }
    ;
    eg.prototype.D = function(a) {
        return this.getName() == E(a)
    }
    ;
    eg.prototype.b = function(a) {
        var b, c = this.f.G(), d = Pb(c), e = d.length;
        this.a.length != e && (this.a = Array(e),
        this.c = Array(e));
        var g = this.a
          , k = this.c;
        for (b = 0; b < e; b++)
            g[b] = d[b];
        $a(k);
        b = hg(this.f, g, k);
        if (null !== b)
            return b;
        for (b = 0; b < e; b++)
            d[b] += k[b] * a;
        Sb(c, d, !0);
        return null
    }
    ;
    var gg = {
        V: "Eulers Method"
    }
      , fg = gg;
    function ig(a) {
        this.c = a;
        this.a = [];
        this.f = [];
        this.g = []
    }
    ig.prototype.toString = function() {
        return ""
    }
    ;
    ig.prototype.getName = function(a) {
        return a ? jg.V : E(kg.V)
    }
    ;
    ig.prototype.D = function(a) {
        return this.getName() == E(a)
    }
    ;
    ig.prototype.b = function(a) {
        var b, c = this.c.G(), d = Pb(c), e = d.length;
        this.a.length != e && (this.a = Array(e),
        this.f = Array(e),
        this.g = Array(e));
        var g = this.a
          , k = this.f
          , h = this.g;
        for (b = 0; b < e; b++)
            g[b] = d[b];
        $a(k);
        b = hg(this.c, g, k);
        if (null !== b)
            return b;
        for (b = 0; b < e; b++)
            g[b] = d[b] + k[b] * a;
        $a(h);
        b = hg(this.c, g, h);
        if (null !== b)
            return b;
        for (b = 0; b < e; b++)
            d[b] += (k[b] + h[b]) * a / 2;
        Sb(c, d, !0);
        return null
    }
    ;
    var kg = {
        V: "Modified Euler"
    }
      , jg = kg;
    function lg(a) {
        this.a = a;
        this.c = [];
        this.h = [];
        this.i = [];
        this.f = [];
        this.g = []
    }
    lg.prototype.toString = function() {
        return ""
    }
    ;
    lg.prototype.getName = function(a) {
        return a ? mg.V : E(ng.V)
    }
    ;
    lg.prototype.D = function(a) {
        return this.getName() == E(a)
    }
    ;
    lg.prototype.b = function(a) {
        var b, c = this.a.G(), d = Pb(c), e = d.length;
        this.c.length < e && (this.c = Array(e),
        this.h = Array(e),
        this.i = Array(e),
        this.f = Array(e),
        this.g = Array(e));
        var g = this.c
          , k = this.h
          , h = this.i
          , m = this.f
          , n = this.g;
        for (b = 0; b < e; b++)
            g[b] = d[b];
        $a(k);
        b = hg(this.a, g, k);
        if (null !== b)
            return b;
        for (b = 0; b < e; b++)
            g[b] = d[b] + k[b] * a / 2;
        $a(h);
        b = hg(this.a, g, h);
        if (null !== b)
            return b;
        for (b = 0; b < e; b++)
            g[b] = d[b] + h[b] * a / 2;
        $a(m);
        b = hg(this.a, g, m);
        if (null !== b)
            return b;
        for (b = 0; b < e; b++)
            g[b] = d[b] + m[b] * a;
        $a(n);
        b = hg(this.a, g, n);
        if (null !== b)
            return b;
        for (b = 0; b < e; b++)
            d[b] += (k[b] + 2 * h[b] + 2 * m[b] + n[b]) * a / 6;
        Sb(c, d, !0);
        return null
    }
    ;
    var ng = {
        V: "Runge-Kutta"
    }
      , mg = ng;
    function og(a, b, c, d) {
        J.call(this, d || "DIFF_EQ_SUBJECT");
        this.b = a;
        this.f = b;
        this.c = c;
        this.a = [];
        this.a.push(new eg(this.b));
        this.a.push(new ig(this.b));
        this.a.push(new lg(this.b));
        null != this.f && (a = new bg(this.b,this.f,new ig(this.b)),
        this.a.push(a),
        a = new bg(this.b,this.f,new lg(this.b)),
        this.a.push(a));
        a = C(this.a, function(a) {
            return a.getName(!0)
        });
        b = C(this.a, function(a) {
            return a.getName()
        });
        this.v(new ib(this,pg.Qa,qg.Qa,y(this.g, this),y(this.h, this),a,b))
    }
    l(og, J);
    og.prototype.toString = function() {
        return ""
    }
    ;
    og.prototype.g = function() {
        return this.c.b.getName()
    }
    ;
    og.prototype.h = function(a) {
        if (!this.c.b.D(a)) {
            var b = xa(this.a, function(b) {
                return b.D(a)
            });
            if (null != b)
                this.c.b = b,
                K(this, pg.Qa);
            else
                throw Error("unknown solver: " + a);
        }
    }
    ;
    var pg = {
        Qa: "Diff Eq Solver"
    }
      , qg = pg;
    function rg(a, b, c, d) {
        this.m = a;
        this.l = b;
        this.o = c;
        this.b = b();
        if (!w(this.b))
            throw Error("not a number " + this.b);
        this.c = 3;
        this.f = -1;
        this.g = Math.max(8, 1 + this.c);
        a = null;
        x(d) ? (b = fe(d),
        null != b && "LABEL" == b.tagName && (a = b)) : (d = document.createElement("input"),
        d.type = "text",
        d.size = this.g,
        a = document.createElement("LABEL"),
        a.appendChild(document.createTextNode(this.m)),
        a.appendChild(d));
        this.a = d;
        this.u = null !== a ? a : this.a;
        this.j = "";
        this.a.b = "right";
        U(this.a, "change", this.se, !0, this);
        U(this.a, "focus", this.Gd, !1, this);
        U(this.a, "click", this.Fd, !1, this);
        this.i = !1;
        sg(this)
    }
    f = rg.prototype;
    f.toString = function() {
        return ""
    }
    ;
    function tg(a, b, c) {
        if (-1 < a.f)
            return a.f;
        a = c - 1 - ug(b);
        16 < a && (a = 16);
        return 0 < a ? a : 0
    }
    f.Fd = function() {
        this.i && (this.a.select(),
        this.i = !1)
    }
    ;
    function sg(a) {
        var b = a.b;
        var c = ug(b);
        b = 2 + tg(a, b, a.c) + (0 < c ? c : 0);
        a.j = a.b.toFixed(tg(a, a.b, a.c));
        a.a.value = a.j;
        b != a.g && (a.g = b,
        a.a.size = a.g)
    }
    f.Gd = function() {
        this.i = !0
    }
    ;
    f.K = function() {
        return this.u
    }
    ;
    f.A = function() {
        return this.b
    }
    ;
    function ug(a) {
        return 1E-15 > Math.abs(a) ? 0 : Math.floor(Math.LOG10E * Math.log(Math.abs(a)))
    }
    f.O = function() {
        vg(this, this.l())
    }
    ;
    function vg(a, b) {
        if (b != a.b) {
            try {
                if (isNaN(b))
                    throw Error("not a number " + b);
                a.b = b;
                a.o(b)
            } catch (c) {
                alert(c),
                a.b = a.l()
            }
            sg(a)
        }
    }
    f.se = function() {
        var a = this.a.value.replace(/^\s*|\s*$/g, "");
        if (a != this.j) {
            var b = parseFloat(a);
            isNaN(b) ? (alert("not a number: " + a),
            sg(this)) : vg(this, b)
        }
    }
    ;
    function wg(a, b) {
        rg.call(this, a.getName(!0), y(a.A, a), y(a.Fb, a), b);
        this.h = a;
        a = a.f;
        this.c != a && (this.c = a,
        sg(this));
        -1 != this.f && (this.f = -1,
        sg(this));
        jb(this.h.L(), this)
    }
    l(wg, rg);
    wg.prototype.toString = function() {
        return ""
    }
    ;
    wg.prototype.O = function(a) {
        a == this.h && (rg.prototype.O.call(this, a),
        a = this.h.f,
        this.c != a && (this.c = a,
        sg(this)),
        -1 != this.f && (this.f = -1,
        sg(this)))
    }
    ;
    function xg(a, b, c, d) {
        if (null == a && null == d)
            throw Error();
        this.h = a;
        this.i = b;
        this.a = d;
        this.f = !1;
        this.b = null;
        null != a && (b = a.va(),
        0 < b.length && (this.b = b[0]));
        this.g = c;
        this.c = rb;
        null != a && (this.c = qb(c, a.Aa()))
    }
    ;function yg(a, b) {
        this.a = a;
        this.b = a.g;
        this.c = sc(this.b, ub(a.c));
        this.f = b
    }
    function zg(a, b) {
        b = qb(a.f, b);
        var c = qc(a.b, a.c.add(b))
          , d = a.a.c;
        b = d.H();
        d = d.F();
        var e = c.w();
        c = c.s();
        b = new N(e - b / 2,c - d / 2,e + b / 2,c + d / 2);
        ad(a.a, b)
    }
    ;function Ag(a, b, c) {
        this.a = a;
        this.h = b || null;
        this.g = null !== c;
        this.j = null != c ? 1 == c.control : !1;
        this.l = null != c ? 1 == c.fc : !1;
        this.m = null != c ? 1 == c.shift : !1;
        this.i = null != c ? 1 == c.alt : !0;
        this.c = !1;
        this.f = this.b = null;
        U(a.a, "mousedown", this.Rd, !1, this);
        U(document, "mousemove", this.Sd, !1, this);
        U(document, "mouseup", this.ic, !1, this);
        U(document, "keydown", this.Ad, !1, this);
        U(document, "keyup", this.Bd, !1, this);
        U(document, "touchstart", this.re, !1, this);
        U(document, "touchmove", this.qe, !1, this);
        U(document, "touchend", this.pe, !1, this)
    }
    f = Ag.prototype;
    f.toString = function() {
        return ""
    }
    ;
    f.Rd = function(a) {
        Bg(this, a, a.clientX, a.clientY)
    }
    ;
    function Bg(a, b, c, d) {
        if (b.target == a.a.a)
            if (a.a.a.focus(),
            a.c = !0,
            c = Cg(a, c, d),
            a.g && a.j == b.ctrlKey && a.l == b.metaKey && a.m == b.shiftKey && a.i == b.altKey) {
                var e = a.a.f;
                null != e && (a.f = new yg(e,c),
                zg(a.f, c))
            } else {
                a: {
                    var g = a.a;
                    b = a.h;
                    d = null;
                    var k = db
                      , h = Da(g.g)
                      , m = h.length - 1;
                    b: for (; 0 <= m; m--) {
                        var n = h[m]
                          , q = n.g
                          , p = qc(q, c);
                        var r = n.h;
                        Sc(r);
                        r = Da(r.a);
                        var A = r.length - 1;
                        c: for (; 0 <= A; A--) {
                            var B = r[A];
                            if (!B.xa())
                                continue c;
                            var v = B.ua();
                            if (!(1 < v.length))
                                if (0 == v.length) {
                                    if (B.ya(p)) {
                                        d = B;
                                        e = n;
                                        var O = p;
                                        break b
                                    }
                                } else {
                                    v = v[0];
                                    for (var Oa = Da(v.o), tb = Oa.length - 1; 0 <= tb; tb--) {
                                        var ja = Oa[tb];
                                        var oa = ja.w() - v.g.w();
                                        ja = ja.s() - v.g.s();
                                        oa = new M(v.a.w() + (oa * v.i - ja * v.j),v.a.s() + (oa * v.j + ja * v.i));
                                        oa = sc(q, oa);
                                        oa = Math.sqrt(ob(c, oa));
                                        oa <= k && (k = oa,
                                        d = B,
                                        e = n,
                                        O = p)
                                    }
                                }
                        }
                    }
                    if (null == d) {
                        e = g.f;
                        if (null != e)
                            O = qc(e.g, c);
                        else {
                            c = null;
                            break a
                        }
                        if (null == b) {
                            c = null;
                            break a
                        }
                    }
                    c = t(e) && t(O) ? new xg(d,e,O,b) : null
                }
                a.b = c;
                null != a.b && (a = a.b,
                null != a.a ? (c = a.a,
                e = a.b,
                c = e == c.a || e == c.b ? c.m = !0 : !1) : c = !1,
                a.f = c)
            }
    }
    function Cg(a, b, c) {
        var d = a.a.a
          , e = d.getBoundingClientRect();
        b = new M(b - e.left,c - e.top);
        a = d.offsetWidth / a.a.H();
        if (1 === a)
            a = b;
        else {
            if (1E-10 > a)
                throw Error("Vector.divide by near zero factor " + (null != a ? a.toExponential(7) : null === a ? "null" : "undefined"));
            a = new M(b.a / a,b.b / a,b.c / a)
        }
        return a
    }
    f.Sd = function(a) {
        Dg(this, a, a.clientX, a.clientY)
    }
    ;
    function Dg(a, b, c, d) {
        var e = a.a.a;
        if (null != e.offsetParent)
            if (c = Cg(a, c, d),
            (b.target == e || b.target == document.body) && a.c && b.b(),
            null != a.f)
                zg(a.f, c);
            else if (null != a.b)
                if (d = a.b,
                d.g = qc(d.i.g, c),
                null == d.h || null != d.b && d.f) {
                    if (null != d.a && d.f) {
                        a = d.a;
                        b = d.b;
                        e = d.g;
                        var g = d.c;
                        c = a.G();
                        d = Pb(c);
                        e = qb(e, g);
                        b == a.a ? (d[0] = Math.atan2(e.w(), -e.s()),
                        d[1] = 0,
                        d[3] = 0) : b == a.b && (d[2] = Math.atan2(e.w() - a.a.a.w(), -(e.s() - a.a.a.s())),
                        d[1] = 0,
                        d[3] = 0);
                        Sb(c, d);
                        Eg(a, d)
                    }
                } else
                    d.h.la(qb(d.g, d.c))
    }
    f.ic = function(a) {
        var b = this.a.a;
        null != b.offsetParent && ((a.target == b || a.target == document.body) && this.c && a.b(),
        Gf(this))
    }
    ;
    function Gf(a) {
        if (null == a.f && null != a.b) {
            var b = a.b;
            null != b.a && (b.a.m = !1)
        }
        a.b = null;
        a.f = null;
        a.c = !1
    }
    f.Ad = function() {}
    ;
    f.Bd = function() {}
    ;
    f.re = function(a) {
        if (a.target == this.a.a) {
            var b = a.f;
            null != b && ((b = b.touches) && 1 == b.length ? Bg(this, a, b[0].clientX, b[0].clientY) : Gf(this))
        }
    }
    ;
    f.qe = function(a) {
        var b = a.f;
        b = null != b ? b.touches : [];
        this.c && b && 1 == b.length ? Dg(this, a, b[0].clientX, b[0].clientY) : Gf(this)
    }
    ;
    f.pe = function(a) {
        this.c && this.ic(a)
    }
    ;
    function Fg(a, b, c, d) {
        this.g = a;
        this.h = b;
        var e = a.c;
        if (e > b)
            throw Error("lower limit on slider =" + Ma(b) + " is less than parameter lower limit =" + Ma(e));
        if (b >= c)
            throw Error("min >= max");
        e = a.b;
        if (e < c)
            throw Error("upper limit on slider =" + Ma(c) + " is greater than parameter upper limit =" + Ma(e));
        this.o = 1 == d;
        if (d && 0 >= b)
            throw Error("slider cannot have min <= 0 and also exponential scale");
        this.j = this.o ? Math.exp((Math.log(c) - Math.log(b)) / 100) : (c - b) / 100;
        this.m = a.f;
        this.i = Math.max(8, 1 + this.m);
        this.c = a.A();
        this.a = document.createElement("input");
        this.a.type = "range";
        if ("text" == this.a.type)
            throw Error("cannot make slider");
        this.a.min = "0";
        this.a.max = "100";
        this.a.step = "1";
        this.a.value = String(Gg(this, this.c));
        this.I = Hg(this, Number(this.a.value));
        this.b = document.createElement("input");
        this.b.type = "text";
        this.b.size = this.i;
        this.f = document.createElement("DIV");
        this.f.className = "slider";
        this.f.appendChild(document.createTextNode(a.getName(!0)));
        this.f.appendChild(this.a);
        this.f.appendChild(this.b);
        this.u = "";
        this.b.b = "right";
        U(this.a, "input", this.lc, !0, this);
        U(this.a, "change", this.lc, !0, this);
        U(this.a, "click", this.Xc, !0, this);
        U(this.b, "change", this.te, !0, this);
        U(this.b, "focus", this.Id, !1, this);
        U(this.b, "click", this.Hd, !0, this);
        this.l = !1;
        Ig(this);
        jb(this.g.L(), this)
    }
    f = Fg.prototype;
    f.toString = function() {
        return ""
    }
    ;
    function Jg(a, b) {
        a = b - 1 - Kg(a);
        16 < a && (a = 16);
        return 0 < a ? a : 0
    }
    f.Hd = function() {
        this.l && (this.b.select(),
        this.l = !1)
    }
    ;
    f.Xc = function() {
        this.a.focus()
    }
    ;
    function Ig(a) {
        var b = a.c;
        var c = Kg(b);
        b = 2 + Jg(b, a.m) + (0 < c ? c : 0);
        a.u = a.c.toFixed(Jg(a.c, a.m));
        a.b.value = a.u;
        b != a.i && (a.i = b,
        a.b.size = a.i)
    }
    f.Id = function() {
        this.l = !0
    }
    ;
    f.K = function() {
        return this.f
    }
    ;
    f.A = function() {
        return this.c
    }
    ;
    function Hg(a, b) {
        return a.o ? a.h * Math.pow(a.j, b) : a.h + b * a.j
    }
    function Kg(a) {
        return 1E-15 > Math.abs(a) ? 0 : Math.floor(Math.LOG10E * Math.log(Math.abs(a)))
    }
    f.O = function(a) {
        a == this.g && Lg(this, this.g.A())
    }
    ;
    function Lg(a, b) {
        if (b != a.c) {
            if (isNaN(b))
                throw Error("not a number: " + b);
            try {
                a.c = b,
                a.g.Fb(b)
            } catch (c) {
                alert(c),
                a.c = a.g.A()
            }
            Ig(a);
            b = Gg(a, a.c);
            a.I = Hg(a, b);
            a.a.value = String(b)
        }
    }
    f.lc = function() {
        var a = Hg(this, Number(this.a.value));
        F(a, this.I) && Lg(this, a)
    }
    ;
    f.te = function() {
        var a = this.b.value.trim();
        if (a != this.u) {
            var b = parseFloat(a);
            isNaN(b) ? (alert("not a number: " + a),
            Ig(this)) : Lg(this, b)
        }
    }
    ;
    function Gg(a, b) {
        return a.o ? Math.floor(.5 + (Math.log(b) - Math.log(a.h)) / Math.log(a.j)) : Math.floor(.5 + (b - a.h) / a.j)
    }
    ;function Mg(a) {
        if (t(a) && !Zb(a))
            throw Error("not a GraphLine " + a);
        this.a = t(a) ? [a] : [];
        this.f = Ja(this.a.length);
        this.h = this.c = null;
        this.g = kc;
        this.b = !1;
        this.i = !0
    }
    f = Mg.prototype;
    f.toString = function() {
        return ""
    }
    ;
    function Ng(a, b) {
        if (Zb(b))
            D(a.a, b) || (a.a.push(b),
            a.f.push(-1));
        else
            throw Error("not a GraphLine " + b);
    }
    f.ya = function() {
        return !1
    }
    ;
    f.za = function(a, b) {
        if (!this.g.W()) {
            a.save();
            if (null == this.h || this.h != b)
                this.h = b,
                this.b = !0;
            for (var c = 0, d = this.a.length; c < d; c++)
                if (this.f[c] > Ab(this.a[c].c)) {
                    this.reset();
                    break
                }
            if (this.i) {
                c = this.g.H();
                d = this.g.F();
                null == this.c && (this.c = document.createElement("canvas"),
                this.c.width = c,
                this.c.height = d,
                this.b = !0);
                var e = this.c.getContext("2d");
                this.b ? (e.clearRect(0, 0, c, d),
                this.f = Ja(this.a.length),
                Og(this, e, b),
                this.b = !1) : Og(this, e, b);
                a.drawImage(this.c, 0, 0, c, d)
            } else
                this.b = !0,
                this.f = Ja(this.a.length),
                Og(this, a, b),
                this.b = !1;
            c = 0;
            for (d = this.a.length; c < d; c++) {
                e = a;
                var g = b
                  , k = Cb(this.a[c].c);
                if (null != k) {
                    var h = Q(g, k.w());
                    g = R(g, k.s());
                    e.fillStyle = "red";
                    e.fillRect(h - 2, g - 2, 5, 5)
                }
            }
            a.restore()
        }
    }
    ;
    f.ua = function() {
        return []
    }
    ;
    f.Aa = function() {
        return rb
    }
    ;
    f.va = function() {
        return []
    }
    ;
    f.S = function() {
        return 0
    }
    ;
    function Og(a, b, c) {
        for (var d = 0, e = a.a.length; d < e; d++) {
            var g = a.f
              , k = d;
            var h = b;
            var m = c
              , n = a.f[d]
              , q = a.a[d]
              , p = rc(m, a.g)
              , r = new Eb(q.c,n);
            if (Gb(r)) {
                n = Hb(r);
                var A = $b(q, Fb(r));
                if ("dots" == A.c) {
                    var B = Q(m, n.a)
                      , v = R(m, n.b)
                      , O = A.b;
                    h.fillStyle = A.a;
                    h.fillRect(B, v, O, O)
                }
                for (; Gb(r); )
                    if (v = n,
                    n = Hb(r),
                    n.a != v.a || n.b != v.b)
                        if (A = $b(q, Fb(r)),
                        B = n.c == v.c && n.f == v.f,
                        "dots" != A.c && B) {
                            if (xb(p, v, n)) {
                                B = Q(m, v.a);
                                v = R(m, v.b);
                                O = Q(m, n.a);
                                var Oa = R(m, n.b);
                                h.strokeStyle = A.a;
                                h.lineWidth = A.b;
                                h.beginPath();
                                h.moveTo(B, v);
                                h.lineTo(O, Oa);
                                h.stroke()
                            }
                        } else
                            sb(p, n) && (B = Q(m, n.a),
                            v = R(m, n.b),
                            O = A.b,
                            h.fillStyle = A.a,
                            h.fillRect(B, v, O, O));
                h = Fb(r)
            } else
                h = n;
            g[k] = h
        }
    }
    f.xa = function() {
        return !1
    }
    ;
    f.reset = function() {
        this.f = Ja(this.a.length);
        this.b = !0
    }
    ;
    f.Ca = function() {}
    ;
    f.la = function() {}
    ;
    function Pg(a, b) {
        a.g = b;
        a.c = null
    }
    function Qg(a, b) {
        a.i = b;
        a.i || (a.c = null)
    }
    ;var W = {
        nc: "aqua",
        Na: "black",
        oc: "blue",
        rc: "fuchsia",
        sc: "gray",
        tc: "green",
        vc: "lime",
        zc: "maroon",
        Ac: "navy",
        Cc: "olive",
        Fc: "purple",
        Hc: "red",
        Lc: "silver",
        Pc: "teal",
        fb: "white",
        Uc: "yellow"
    };
    function Rg(a, b, c, d, e, g) {
        J.call(this, "GRAPH_LAYOUT");
        this.g = g || "block";
        Af(e, b);
        this.view = new Wc("X_Y_GRAPH_VIEW",new N(0,0,1,1));
        Zc(this.view, "FULL");
        Yc(this.view, "FULL");
        pf(b, this.view);
        this.i = this.view.h;
        this.a = new Ub("X_Y_GRAPH_LINE",a);
        this.a.ja(0);
        this.a.Da(1);
        this.a.qa("lime");
        this.view.P(this.a);
        this.f = Mf(this.view);
        a = y(function(a) {
            if (a.D(P.ea)) {
                var b = this.f;
                var c = this.a;
                c = -1 < c.a ? Qb(c.b, c.a).getName(!0) : "";
                b.Eb = c
            }
            a.D(P.ba) && (a = this.f,
            b = this.a,
            b = -1 < b.f ? Qb(b.b, b.f).getName(!0) : "",
            a.lb = b)
        }, this);
        new kf(this.a,a);
        a(new G(this.a,Vb.ea));
        this.c = new dd("X_Y_AUTO_SCALE",this.a,this.view);
        this.c.h = .05;
        this.b = new Mg(this.a);
        Pg(this.b, this.view.f);
        Qg(this.b, !0);
        Uc(this.i, this.b);
        new kf(this.view,y(function(a) {
            a.D("SCREEN_RECT_CHANGED") && Pg(this.b, this.view.f)
        }, this));
        this.h = [];
        this.j = c;
        Sg(this, Rf(e));
        c = L(this.a, P.ba);
        Sg(this, new me(c,"Y:"));
        c = L(this.a, P.ea);
        Sg(this, new me(c,"X:"));
        Sg(this, new V(Vb.Rb,y(this.a.reset, this.a)));
        c = mb(this.a, P.Sa);
        Sg(this, new me(c,void 0,[W.nc, W.Na, W.oc, W.rc, W.sc, W.tc, W.vc, W.zc, W.Ac, W.Cc, W.Fc, W.Hc, W.Lc, W.Pc, W.fb, W.Uc],"aqua black blue fuchsia gray green lime maroon navy olive purple red silver teal white yellow".split(" ")));
        c = L(this.a, P.LINE_WIDTH);
        Sg(this, new wg(c));
        c = mb(this.a, P.Ra);
        Sg(this, new me(c));
        new Ag(b,null,{
            alt: !1,
            control: !1,
            fc: !1,
            shift: !1
        });
        b = Qf(this.view, y(function() {
            this.c.ga(!0)
        }, this));
        d.appendChild(b);
        d = Vf(b, this);
        Sg(this, new ie(d))
    }
    l(Rg, J);
    Rg.prototype.toString = function() {
        return ""
    }
    ;
    Rg.prototype.ma = function() {
        return [this, this.a, this.view, this.c]
    }
    ;
    function Sg(a, b) {
        var c = b.K();
        c.style.display = a.g;
        a.j.appendChild(c);
        a.h.push(b)
    }
    ;function Tg(a) {
        a.style[qd ? "styleFloat" : "cssFloat"] = "left"
    }
    ;function Ug(a, b, c) {
        J.call(this, "TAB_LAYOUT");
        b = b || 800;
        c = c || 800;
        this.u = this.o = this.J = 1;
        Sa(a.images_dir);
        this.X = Vg(a, "tab_list");
        this.f = Wg(this);
        "" == this.f && (this.f = Xg,
        Yg(this, this.f));
        U(this.X, "click", y(function(a) {
            a = a.target;
            if (void 0 === a)
                throw Error("event target is undefined ");
            if (null != a && "LI" == a.tagName && !(-1 < a.className.indexOf("selected"))) {
                a = a.className;
                a = a.toLowerCase().trim();
                switch (a) {
                case Zg:
                    a = $g;
                    break;
                case ah:
                    a = bh;
                    break;
                case ch:
                    a = dh
                }
                this.ia(a)
            }
        }, this));
        U(window, "resize", y(this.na, this));
        U(window, "orientationchange", y(this.na, this));
        var d = eh(a, "term_output");
        this.Z = eh(a, "term_input");
        this.da = new Fe(this.Z,d);
        this.B = Vg(a, "container");
        this.c = Vg(a, "sim_applet");
        this.c.style.position = "relative";
        d = document.createElement("canvas");
        d.tabIndex = 0;
        this.m = new mf(d,"SIM_CANVAS");
        tf(this.m, b, c);
        this.c.appendChild(this.m.a);
        this.g = Vg(a, "show_sim");
        d = fe(this.g);
        if (null == d || "LABEL" != d.tagName)
            throw Error();
        this.l = d;
        U(this.g, "click", y(function() {
            var a = this.g.checked;
            switch (this.f) {
            case "":
            case Xg:
                break;
            case Zg:
                a && this.ia($g);
                break;
            case $g:
                a || this.ia(Zg);
                break;
            case ah:
                a && this.ia(bh);
                break;
            case bh:
                a || this.ia(ah);
                break;
            case ch:
                a && this.ia(dh);
                break;
            case dh:
                a || this.ia(ch);
                break;
            default:
                throw Error('showSim: no such layout "' + this.f + '"');
            }
        }, this));
        this.a = Vg(a, "div_graph");
        this.a.style.position = "relative";
        d = document.createElement("canvas");
        this.U = new mf(d,"GRAPH_CANVAS");
        b = Math.max(b, c);
        tf(this.U, b, b);
        this.a.appendChild(d);
        this.i = Vg(a, "graph_controls");
        this.Fa = [];
        this.h = Vg(a, "sim_controls");
        this.h.style.marginLeft = "10px";
        this.ca = Vg(a, "div_terminal");
        this.ca.style.display = "none";
        Vg(a, "label_terminal").style.display = "inline";
        this.C = Vg(a, "show_terminal");
        U(this.C, "click", y(function() {
            this.kc(this.C.checked)
        }, this));
        this.b = Vg(a, "div_time_graph");
        this.b.style.position = "relative";
        c = document.createElement("canvas");
        this.$ = new mf(c,"TIME_GRAPH_CANVAS");
        tf(this.$, b, b);
        this.b.appendChild(c);
        this.j = Vg(a, "time_graph_controls");
        this.na();
        this.v(new H(this,fh.zb,gh.zb,y(this.td, this),y(this.ke, this)));
        this.v(new H(this,fh.sb,gh.sb,y(this.gd, this),y(this.be, this)));
        this.v(new H(this,fh.Ab,gh.Ab,y(this.ud, this),y(this.le, this)));
        this.v(new ib(this,fh.Sb,gh.Sb,y(this.kd, this),y(this.ia, this),[Xg, Zg, $g, ah, bh, ch, dh],[Xg, Zg, $g, ah, bh, ch, dh]));
        this.v(new eb(this,fh.Wb,gh.Wb,y(function() {
            return this.C.checked
        }, this),y(this.kc, this)))
    }
    l(Ug, J);
    f = Ug.prototype;
    f.toString = function() {
        return ""
    }
    ;
    function Vg(a, b) {
        a = a[b];
        if (!u(a))
            throw Error("unknown elementId: " + b);
        b = document.getElementById(a);
        if (!x(b))
            throw Error("not found: element with id=" + a);
        return b
    }
    function eh(a, b) {
        a = a[b];
        if (!u(a))
            throw Error("unknown elementId: " + b);
        return document.getElementById(a)
    }
    function hh(a, b, c, d) {
        b.style.display = "block";
        c.style.display = "inline-block";
        c.style.a = "1";
        c.style.MozColumnCount = "1";
        c.style.webkitColumnCount = "1";
        c.style.width = "auto";
        var e = c.getBoundingClientRect().width;
        e = 150 < e ? e : 300;
        b = b.offsetWidth || b.getBoundingClientRect().width;
        null != d && (d.style.display = "block",
        b += d.offsetWidth || d.getBoundingClientRect().width);
        a = a.B.offsetWidth || a.B.getBoundingClientRect().width;
        a - b - 2 < e && a > 2 * e && (c.style.width = "100%",
        c.style.a = "2",
        c.style.MozColumnCount = "2",
        c.style.webkitColumnCount = "2")
    }
    f.gd = function() {
        return this.o
    }
    ;
    f.kd = function() {
        return this.f
    }
    ;
    function Wg(a) {
        a = xa(a.X.childNodes, function(a) {
            return a.nodeType != Node.ELEMENT_NODE || "LI" != a.tagName ? !1 : null != a.className.match(/.*selected/)
        });
        return null == a ? "" : a.className.replace(/[ ]*selected/, "")
    }
    f.td = function() {
        return this.J
    }
    ;
    f.ma = function() {
        return [this, this.m, this.U, this.$]
    }
    ;
    f.ud = function() {
        return this.u
    }
    ;
    f.na = function() {
        var a = ee();
        Tg(this.c);
        Tg(this.a);
        Tg(this.b);
        switch (this.f) {
        case "":
        case Xg:
            this.a.style.display = "none";
            this.i.style.display = "none";
            this.b.style.display = "none";
            this.j.style.display = "none";
            ih(this, .95 * this.J, this.a);
            hh(this, this.c, this.h);
            this.l.style.display = "none";
            break;
        case Zg:
            this.c.style.display = "none";
            this.h.style.display = "none";
            this.b.style.display = "none";
            this.j.style.display = "none";
            ih(this, .95 * this.o, this.a);
            hh(this, this.a, this.i);
            this.g.checked = !1;
            this.l.style.display = "inline";
            break;
        case $g:
            this.b.style.display = "none";
            this.h.style.display = "none";
            this.j.style.display = "none";
            600 < a.width ? ih(this, .49, this.a) : ih(this, .95 * this.o, this.a);
            hh(this, this.a, this.i, this.c);
            this.g.checked = !0;
            this.l.style.display = "inline";
            break;
        case ah:
            this.a.style.display = "none";
            this.i.style.display = "none";
            this.c.style.display = "none";
            this.h.style.display = "none";
            ih(this, .95 * this.u, this.b);
            hh(this, this.b, this.j);
            this.g.checked = !1;
            this.l.style.display = "inline";
            break;
        case bh:
            this.a.style.display = "none";
            this.h.style.display = "none";
            this.i.style.display = "none";
            600 < a.width ? ih(this, .49, this.b) : ih(this, .95 * this.u, this.b);
            hh(this, this.b, this.j, this.c);
            this.g.checked = !0;
            this.l.style.display = "inline";
            break;
        case ch:
            this.a.style.display = "block";
            this.b.style.display = "block";
            this.c.style.display = "none";
            this.h.style.display = "none";
            this.i.style.display = "none";
            this.j.style.display = "none";
            ih(this, .49, this.a);
            ih(this, .49, this.b);
            this.g.checked = !1;
            this.l.style.display = "inline";
            break;
        case dh:
            this.a.style.display = "block";
            this.b.style.display = "block";
            this.c.style.display = "block";
            this.h.style.display = "none";
            this.i.style.display = "none";
            this.j.style.display = "none";
            ih(this, .49, this.a);
            ih(this, .49, this.b);
            this.g.checked = !0;
            this.l.style.display = "inline";
            break;
        default:
            throw Error('redoLayout: no such layout "' + this.f + '"');
        }
    }
    ;
    function ih(a, b, c) {
        var d = ee().height - 80
          , e = a.B.offsetWidth || a.B.getBoundingClientRect().width
          , g = qf(a.m);
        b = Math.min(b, d / e * (g.H() / g.F()));
        b = Math.floor(100 * b) + "%";
        a.c.style.width = b;
        a.c.style.height = "auto";
        c.style.width = b;
        c.style.height = "auto"
    }
    f.be = function(a) {
        F(a, this.o) && (this.o = a);
        this.na();
        K(this, fh.sb)
    }
    ;
    f.ia = function(a) {
        a = a.toLowerCase().trim();
        if (this.f != a) {
            a = this.f = a;
            switch (a) {
            case $g:
                a = Zg;
                break;
            case bh:
                a = ah;
                break;
            case dh:
                a = ch
            }
            Yg(this, a);
            this.na()
        }
    }
    ;
    function Yg(a, b) {
        Wg(a) != b && z(a.X.childNodes, function(a) {
            a.nodeType == Node.ELEMENT_NODE && "LI" == a.tagName && (a.className.trim() == b ? a.className += " selected" : -1 < a.className.indexOf("selected") && (a.className = a.className.replace(/[ ]*selected/, "")))
        }, a)
    }
    f.ke = function(a) {
        F(a, this.J) && (this.J = a);
        this.na();
        K(this, fh.zb)
    }
    ;
    f.le = function(a) {
        F(a, this.u) && (this.u = a);
        this.na();
        K(this, fh.Ab)
    }
    ;
    f.kc = function(a) {
        this.ca.style.display = a ? "block" : "none";
        (this.C.checked = a) && this.Z && !this.da.j && this.Z.focus()
    }
    ;
    var Xg = "sim"
      , Zg = "graph"
      , $g = "sim+graph"
      , ah = "time_graph"
      , bh = "sim+time_graph"
      , ch = "multi_graph"
      , dh = "sim+multi_graph"
      , fh = {
        zb: "sim-width",
        sb: "graph-width",
        Ab: "time-graph-width",
        Sb: "layout",
        Wb: "show terminal"
    }
      , gh = fh;
    function jh(a, b, c, d, e) {
        J.call(this, "TIME_GRAPH_LAYOUT");
        Af(e, b);
        this.view = new Wc("TIME_GRAPH_VIEW",new N(0,0,1,1));
        Zc(this.view, "FULL");
        Yc(this.view, "FULL");
        pf(b, this.view);
        Mf(this.view);
        this.a = new Ub("TIME_GRAPH_LINE_1",a);
        this.a.qa("lime");
        this.view.P(this.a);
        this.f = new dd("TIME_GRAPH_AUTO_SCALE",this.a,this.view);
        this.f.h = .05;
        this.g = new Mg(this.a);
        Pg(this.g, this.view.f);
        Uc(this.view.h, this.g);
        new kf(this.view,y(function(a) {
            a.D("SCREEN_RECT_CHANGED") && Pg(this.g, this.view.f)
        }, this));
        var g = this.a.G().b;
        this.a.ja(g);
        this.a.Da(0);
        Qg(this.g, this.a.a != g);
        this.b = new Ub("TIME_GRAPH_LINE_2",a);
        hd(this.f, this.b);
        this.view.P(this.b);
        this.b.ja(g);
        this.b.Da(1);
        this.b.qa("red");
        Ng(this.g, this.b);
        this.c = new Ub("TIME_GRAPH_LINE_3",a);
        hd(this.f, this.c);
        this.view.P(this.c);
        this.c.ja(g);
        this.c.Da(-1);
        this.c.qa("blue");
        Ng(this.g, this.c);
        this.h = [];
        this.i = c;
        kh(this, Rf(e));
        a = L(this.a, P.ba);
        kh(this, new me(a,lh.wc));
        a = L(this.b, P.ba);
        kh(this, new me(a,lh.xc));
        a = L(this.c, P.ba);
        kh(this, new me(a,lh.yc));
        a = L(this.a, P.ea);
        kh(this, new me(a,"X:"));
        a = L(this.f, ed.eb);
        kh(this, new wg(a));
        a = new V(Vb.Rb,y(function() {
            this.a.reset();
            this.b.reset();
            this.c.reset()
        }, this));
        kh(this, a);
        new kf(this.a,y(function() {
            Qg(this.g, this.a.a != g);
            this.b.ja(this.a.a);
            this.c.ja(this.a.a)
        }, this));
        new Ag(b,null,{
            alt: !1,
            control: !1,
            fc: !1,
            shift: !1
        });
        this.view.jc(!1);
        new kf(e,y(function(a) {
            a.D("RESET") && (this.view.kb(this.view.H() / 2),
            this.f.ga(!0))
        }, this));
        b = Qf(this.view, y(function() {
            this.f.ga(!0)
        }, this));
        d.appendChild(b);
        d = Vf(b, this);
        kh(this, new ie(d))
    }
    l(jh, J);
    jh.prototype.toString = function() {
        return ""
    }
    ;
    function kh(a, b) {
        var c = b.K();
        c.style.display = "block";
        a.i.appendChild(c);
        a.h.push(b)
    }
    jh.prototype.ma = function() {
        return [this, this.a, this.b, this.c, this.view, this.f]
    }
    ;
    var lh = {
        wc: "line 1",
        xc: "line 2",
        yc: "line 3"
    };
    function X(a, b, c, d, e, g, k) {
        J.call(this, k || "APP");
        this.l = b;
        this.b = new Ug(a,800,Math.round(800 * this.l.F() / this.l.H()));
        this.h = this.b.da;
        a = this.b.m;
        this.B = c;
        Re(this.h, y(c.fa, c));
        new kf(c,y(function() {
            c.fa()
        }, this));
        this.Dc = d;
        this.j = c.j;
        this.da = c.G();
        this.Rc = new Ag(a,e);
        this.c = new Wc("SIM_VIEW",this.l);
        pf(a, this.c);
        this.g = this.c.h;
        this.m = new Wc("STATUS_VIEW",new N(-10,-10,10,10));
        pf(a, this.m);
        Mf(this.c, !0);
        this.a = new xf(this.Dc);
        Af(this.a, a);
        Bf(this.a, this.Rc);
        this.i = this.a.a;
        this.u = this.U = null;
        null != g && (this.U = new cf(g),
        this.u = Uf(this.U, this.m, this));
        this.J = new Ce(y(c.c, c),y(this.i.gb, this.i));
        this.J.la(new M(8,4));
        this.Oc = Tf(this.J, this.m, this);
        e = Qf(this.c, y(function() {
            ad(this.c, this.l)
        }, this));
        this.b.c.appendChild(e);
        this.$ = Vf(e, this);
        this.$.jb(!1);
        this.C = new og(c,g,d);
        this.f = new Rg(c.G(),this.b.U,this.b.i,this.b.a,this.a);
        Yb(this.f.a, "lines");
        this.ca = new jh(c.G(),this.b.$,this.b.j,this.b.b,this.a)
    }
    l(X, J);
    X.prototype.toString = function() {
        return ""
    }
    ;
    function Y(a, b) {
        a = a.b;
        var c = b.K();
        c.style.display = "block";
        a.h.appendChild(c);
        a.Fa.push(b)
    }
    X.prototype.cc = function() {}
    ;
    X.prototype.defineNames = X.prototype.cc;
    X.prototype.ma = function() {
        return Ca([this, this.B, this.C, this.a, this.i, this.c, this.m, this.da], this.b.ma(), this.f.ma(), this.ca.ma())
    }
    ;
    X.prototype.eval = function(a, b) {
        try {
            return this.h.eval(a, b)
        } catch (c) {
            a = this.h,
            b = c,
            a.o ? console.log(b) : (a.o = !0,
            alert(b))
        }
    }
    ;
    X.prototype.eval = X.prototype.eval;
    X.prototype.oe = function() {
        ue(this.i);
        var a = this.h;
        if (null != a.h) {
            var b = a.h;
            b.m = Xe(b, !1).split(";");
            b.i = Xe(b, !0).split(";")
        }
        b = window.location.href;
        var c = b.indexOf("?");
        -1 < c ? (b = b.slice(c + 1),
        b = decodeURIComponent(b),
        a.eval(b),
        b = !0) : b = !1;
        b || Qe(a);
        Jf(this.B);
        this.B.fa();
        this.a.T()
    }
    ;
    X.prototype.setup = X.prototype.oe;
    X.prototype.start = function() {
        vf(this.a.b)
    }
    ;
    X.prototype.start = X.prototype.start;
    function mh(a) {
        this.a = null != a ? a : new Xf("proto")
    }
    f = mh.prototype;
    f.toString = function() {
        return ""
    }
    ;
    f.ya = function() {
        return !1
    }
    ;
    f.za = function(a, b) {
        if (0 < (void 0 !== this.b ? this.b : 4)) {
            var c = sc(b, this.a.b);
            b = sc(b, this.a.a);
            if (!(1E-6 > Math.sqrt(ob(c, b)))) {
                a.save();
                var d = void 0 !== this.f ? this.f : [];
                0 < d.length && a.setLineDash && a.setLineDash(d);
                a.lineWidth = void 0 !== this.b ? this.b : 4;
                a.strokeStyle = void 0 !== this.c ? this.c : "gray";
                a.beginPath();
                a.moveTo(c.w(), c.s());
                a.lineTo(b.w(), b.s());
                a.stroke();
                a.restore()
            }
        }
    }
    ;
    f.ua = function() {
        return []
    }
    ;
    f.Aa = function() {
        var a = this.a.b.add(this.a.a);
        return new M(.5 * a.a,.5 * a.b,.5 * a.c)
    }
    ;
    f.va = function() {
        return [this.a]
    }
    ;
    f.S = function() {
        return void 0 !== this.g ? this.g : 0
    }
    ;
    f.xa = function() {
        return !1
    }
    ;
    f.qa = function(a) {
        this.c = a;
        return this
    }
    ;
    f.Ca = function() {}
    ;
    f.la = function() {}
    ;
    function nh(a, b, c) {
        J.call(this, a || "SIM");
        this.j = b || new Yf;
        this.f = c || new Nb([],[],this.getName() + "_VARS");
        this.u = this.l = null
    }
    l(nh, J);
    nh.prototype.toString = function() {
        return ""
    }
    ;
    nh.prototype.c = function() {
        var a = this.f;
        if (0 > a.b)
            throw Error("no time variable");
        return a.A(a.b)
    }
    ;
    nh.prototype.G = function() {
        return this.f
    }
    ;
    nh.prototype.reset = function() {
        null != this.l && Sb(this.f, this.l);
        Cf(this.j, db);
        this.fa();
        I(this, new G(this,"RESET"))
    }
    ;
    function Jf(a) {
        a.l = Pb(a.f);
        I(a, new G(a,"INITIAL_STATE_SAVED"))
    }
    ;function oh(a) {
        nh.call(this, a);
        this.f = new Nb([Z.Lb, Z.Mb, Z.Nb, Z.Ob, Z.Jb, Z.Kb, bf.Ua, bf.Xa, bf.Zb, Tb.Xb],[ph.Lb, ph.Mb, ph.Nb, ph.Ob, ph.Jb, ph.Kb, bf.Ua, bf.Xa, bf.Zb, Tb.Xb],this.getName() + "_VARS");
        this.G().Ld(4, 5, 6, 7, 8);
        this.i = this.h = 1;
        this.B = new Xf("rod1");
        this.C = new Xf("rod2");
        this.a = Lc("bob1").h(2);
        this.b = Lc("bob2").h(2);
        this.g = 9.8;
        this.o = 0;
        this.m = !1;
        this.j.add(this.B, this.C, this.a, this.b);
        a = this.G();
        for (var b = Pb(a), c = 0; 4 > c; c++)
            b[c] = 0;
        Sb(a, b);
        Eg(this, b);
        this.o = 0;
        this.o = -df(this).a;
        Rb(this.G(), 0, Math.PI / 8);
        Jf(this);
        this.v(new H(this,Z.Ya,ph.Ya,y(this.pd, this),y(this.he, this)));
        this.v(new H(this,Z.Za,ph.Za,y(this.qd, this),y(this.ie, this)));
        this.v(new H(this,Z.Va,ph.Va,y(this.md, this),y(this.ee, this)));
        this.v(new H(this,Z.Wa,ph.Wa,y(this.nd, this),y(this.fe, this)));
        this.v(new H(this,Z.Ta,ph.Ta,y(this.hd, this),y(this.ce, this)))
    }
    l(oh, nh);
    f = oh.prototype;
    f.toString = function() {
        return ""
    }
    ;
    function df(a) {
        var b = Pb(a.G());
        Eg(a, b);
        return qh(a)
    }
    function qh(a) {
        var b = a.h;
        return new $e(a.g * a.a.b * (a.a.a.s() - -b) + a.g * a.b.b * (a.b.a.s() - (-b - a.i)) + a.o,Ec(a.a) + Ec(a.b))
    }
    f.fa = function() {
        var a = this.G()
          , b = Pb(a)
          , c = La(b[0]);
        c != b[0] && (Rb(this.G(), 0, c, !1),
        b[0] = c);
        c = La(b[2]);
        c != b[2] && (Rb(this.G(), 2, c, !1),
        b[2] = c);
        Eg(this, b);
        c = Array(b.length);
        hg(this, b, c);
        b[4] = c[1];
        b[5] = c[3];
        c = qh(this);
        b[6] = c.c;
        b[7] = c.a;
        b[8] = af(c);
        Sb(a, b, !0)
    }
    ;
    function Eg(a, b) {
        var c = b[0]
          , d = Math.sin(c)
          , e = Math.cos(c)
          , g = b[2];
        c = Math.sin(g);
        var k = Math.cos(g)
          , h = a.h;
        g = a.i;
        var m = h * d
          , n = -h * e
          , q = m + g * c
          , p = n - g * k;
        Gc(a.a, new M(m,n));
        Gc(a.b, new M(q,p));
        e *= b[1] * h;
        h = b[1] * h * d;
        d = e + b[3] * g * k;
        b = h + b[3] * g * c;
        c = a.a;
        g = new M(e,h);
        c.I = nb(g);
        t(void 0) && Fc(c);
        c = a.b;
        b = new M(d,b);
        c.I = nb(b);
        t(void 0) && Fc(c);
        a.B.b = rb;
        a.B.a = a.a.a;
        a.C.b = a.a.a;
        a.C.a = a.b.a
    }
    function hg(a, b, c) {
        $a(c);
        c[9] = 1;
        if (!a.m) {
            var d = b[0]
              , e = b[1]
              , g = b[2];
            b = b[3];
            var k = a.b.b
              , h = a.a.b
              , m = a.h
              , n = a.i;
            a = a.g;
            c[0] = e;
            var q = -a * (2 * h + k) * Math.sin(d);
            q -= a * k * Math.sin(d - 2 * g);
            q -= 2 * k * b * b * n * Math.sin(d - g);
            q -= k * e * e * m * Math.sin(2 * (d - g));
            q /= m * (2 * h + k - k * Math.cos(2 * (d - g)));
            c[1] = q;
            c[2] = b;
            q = (h + k) * e * e * m + a * (h + k) * Math.cos(d);
            q += k * b * b * n * Math.cos(d - g);
            q = 2 * q * Math.sin(d - g);
            q /= n * (2 * h + k - k * Math.cos(2 * (d - g)));
            c[3] = q
        }
        return null
    }
    f.md = function() {
        return this.a.b
    }
    ;
    f.ee = function(a) {
        this.a.h(a);
        this.G().Ja(4, 5, 6, 7, 8);
        K(this, Z.Va)
    }
    ;
    f.nd = function() {
        return this.b.b
    }
    ;
    f.fe = function(a) {
        this.b.h(a);
        this.G().Ja(4, 5, 6, 7, 8);
        K(this, Z.Wa)
    }
    ;
    f.hd = function() {
        return this.g
    }
    ;
    f.ce = function(a) {
        this.g = a;
        this.G().Ja(4, 5, 7, 8);
        K(this, Z.Ta)
    }
    ;
    f.pd = function() {
        return this.h
    }
    ;
    f.he = function(a) {
        this.h = a;
        this.G().Ja(4, 5, 6, 7, 8);
        K(this, Z.Ya)
    }
    ;
    f.qd = function() {
        return this.i
    }
    ;
    f.ie = function(a) {
        this.i = a;
        this.G().Ja(4, 5, 6, 7, 8);
        K(this, Z.Za)
    }
    ;
    var Z = {
        Jb: "acceleration-1",
        Kb: "acceleration-2",
        Lb: "angle-1",
        Mb: "angle-1 velocity",
        Nb: "angle-2",
        Ob: "angle-2 velocity",
        Ta: "gravity",
        Va: "mass-1",
        Wa: "mass-2",
        Ya: "rod-1 length",
        Za: "rod-2 length"
    }
      , ph = Z;
    function rh(a) {
        this.a = a;
        this.b = new lg(a)
    }
    rh.prototype.toString = function() {
        return ""
    }
    ;
    rh.prototype.reset = function() {
        this.a.reset()
    }
    ;
    function sh(a) {
        Qa();
        var b = new N(-2,-2.2,2,1.5)
          , c = new oh;
        X.call(this, a, b, c, new rh(c), c, c);
        this.Gc = new mh($f(this.j, "rod1"));
        this.g.add(this.Gc);
        this.Kc = new mh($f(this.j, "rod2"));
        this.g.add(this.Kc);
        this.Fa = Pc(new Nc(ag(this.j, "bob1")), "blue");
        this.g.add(this.Fa);
        this.vb = Pc(new Nc(ag(this.j, "bob2")), "blue");
        this.g.add(this.vb);
        this.X = Lc("marker1");
        Gc(this.X, new M(-3,1));
        a = Pc(new Nc(this.X), "");
        a.i = "red";
        this.Z = a;
        this.Z.Ca(!0);
        this.g.add(this.Z);
        this.f.a.ja(0);
        this.f.a.Da(2);
        Y(this, Rf(this.a));
        a = L(c, Z.Ya);
        Y(this, new Fg(a,.1,10.1,!0));
        a = L(c, Z.Za);
        Y(this, new Fg(a,.1,10.1,!0));
        a = L(c, Z.Va);
        Y(this, new Fg(a,.2,20.2,!0));
        a = L(c, Z.Wa);
        Y(this, new Fg(a,.2,20.2,!0));
        a = L(c, Z.Ta);
        Y(this, new Fg(a,0,20,!1));
        null != this.u && Y(this, new ie(this.u));
        Y(this, new ie(this.Oc));
        Y(this, new ie(this.$));
        c = L(this.a, yf.cb);
        Y(this, new wg(c));
        c = L(this.a.a, oe.bb);
        Y(this, new wg(c));
        c = mb(this.C, pg.Qa);
        Y(this, new me(c));
        c = Nf(this.b.m);
        Y(this, c);
        c = [this.da];
        "array" == ka(void 0) && (c = Ca(c, void 0));
        this.o = Sf(this.ma(), c, this.a, this.h);
        Y(this, Wf(this.o, this.a));
        Sg(this.f, Wf(this.o, this.a));
        kh(this.ca, Wf(this.o, this.a))
    }
    l(sh, X);
    sh.prototype.toString = function() {
        return ""
    }
    ;
    sh.prototype.cc = function() {}
    ;
    function th(a) {
        return new sh(a)
    }
    var uh = ["makeDoublePendulumApp"]
      , vh = ha;
    uh[0]in vh || !vh.execScript || vh.execScript("var " + uh[0]);
    for (var wh; uh.length && (wh = uh.shift()); )
        !uh.length && t(th) ? vh[wh] = th : vh = vh[wh] && vh[wh] !== Object.prototype[wh] ? vh[wh] : vh[wh] = {};
}
).call(window)
