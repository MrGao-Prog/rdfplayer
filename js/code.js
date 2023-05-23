var hexcase = 0;
var chrsz = 8;
function hex_md5(s) {
    return binl2hex(core_md5(str2binl(s), s.length * chrsz));
}
function core_md5(x, len) {
    x[len >> 5] |= 0x80 << ((len) % 32);
    x[(((len + 64) >>> 9) << 4) + 14] = len;
    var a = 1732584193;
    var b = -271733879;
    var c = -1732584194;
    var d = 271733878;
    for (var i = 0; i < x.length; i += 16) {
        var olda = a;
        var oldb = b;
        var oldc = c;
        var oldd = d;
        a = md5_ff(a, b, c, d, x[i + 0], 7, -680876936);
        d = md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
        c = md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
        b = md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
        a = md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
        d = md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
        c = md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
        b = md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
        a = md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
        d = md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
        c = md5_ff(c, d, a, b, x[i + 10], 17, -42063);
        b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
        a = md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
        d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
        c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
        b = md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);
        a = md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
        d = md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
        c = md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
        b = md5_gg(b, c, d, a, x[i + 0], 20, -373897302);
        a = md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
        d = md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
        c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
        b = md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
        a = md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
        d = md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
        c = md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
        b = md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
        a = md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
        d = md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
        c = md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
        b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);
        a = md5_hh(a, b, c, d, x[i + 5], 4, -378558);
        d = md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
        c = md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
        b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
        a = md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
        d = md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
        c = md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
        b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
        a = md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
        d = md5_hh(d, a, b, c, x[i + 0], 11, -358537222);
        c = md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
        b = md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
        a = md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
        d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
        c = md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
        b = md5_hh(b, c, d, a, x[i + 2], 23, -995338651);
        a = md5_ii(a, b, c, d, x[i + 0], 6, -198630844);
        d = md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
        c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
        b = md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
        a = md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
        d = md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
        c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
        b = md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
        a = md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
        d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
        c = md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
        b = md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
        a = md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
        d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
        c = md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
        b = md5_ii(b, c, d, a, x[i + 9], 21, -343485551);
        a = safe_add(a, olda);
        b = safe_add(b, oldb);
        c = safe_add(c, oldc);
        d = safe_add(d, oldd);
    }
    return Array(a, b, c, d);
}
function md5_cmn(q, a, b, x, s, t) {
    return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b);
}
function md5_ff(a, b, c, d, x, s, t) {
    return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
}
function md5_gg(a, b, c, d, x, s, t) {
    return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
}
function md5_hh(a, b, c, d, x, s, t) {
    return md5_cmn(b ^ c ^ d, a, b, x, s, t);
}
function md5_ii(a, b, c, d, x, s, t) {
    return md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
}
function safe_add(x, y) {
    var lsw = (x & 0xFFFF) + (y & 0xFFFF);
    var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return (msw << 16) | (lsw & 0xFFFF);
}
function bit_rol(num, cnt) {
    return (num << cnt) | (num >>> (32 - cnt));
}
function str2binl(str) {
    var bin = Array();
    var mask = (1 << chrsz) - 1;
    for (var i = 0; i < str.length * chrsz; i += chrsz)
        bin[i >> 5] |= (str.charCodeAt(i / chrsz) & mask) << (i % 32);
    return bin;
}
function binl2hex(binarray) {
    var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
    var str = "";
    for (var i = 0; i < binarray.length * 4; i++) {
        str += hex_tab.charAt((binarray[i >> 2] >> ((i % 4) * 8 + 4)) & 0xF) + hex_tab.charAt((binarray[i >> 2] >> ((i % 4) * 8)) & 0xF);
    }
    return str;
}
function getNowDate() {
    var date = new Date();
    var sign2 = ":";
    var year = date.getFullYear()
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds()
    var weekArr = ['???', '???', '???', '???', '???', '???', '???'];
    var week = weekArr[date.getDay()];
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (day >= 0 && day <= 9) {
        day = "0" + day;
    }
    if (hour >= 0 && hour <= 9) {
        hour = "0" + hour;
    }
    if (minutes >= 0 && minutes <= 9) {
        minutes = "0" + minutes;
    }
    if (seconds >= 0 && seconds <= 9) {
        seconds = "0" + seconds;
    }
    return month + "-" + day + " " + hour + sign2 + minutes;
}
;(function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : (function() {
        var _Base64 = global.Base64;
        var gBase64 = factory();
        gBase64.noConflict = function() {
            global.Base64 = _Base64;
            return gBase64;
        }
        ;
        if (global.Meteor) {
            Base64 = gBase64;
        }
        global.Base64 = gBase64;
    }
    )();
}((typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this), function() {
    'use strict';
    var version = '3.7.2';
    var VERSION = version;
    var _hasatob = typeof atob === 'function';
    var _hasbtoa = typeof btoa === 'function';
    var _hasBuffer = typeof Buffer === 'function';
    var _TD = typeof TextDecoder === 'function' ? new TextDecoder() : undefined;
    var _TE = typeof TextEncoder === 'function' ? new TextEncoder() : undefined;
    var b64ch = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    var b64chs = Array.prototype.slice.call(b64ch);
    var b64tab = (function(a) {
        var tab = {};
        a.forEach(function(c, i) {
            return tab[c] = i;
        });
        return tab;
    }
    )(b64chs);
    var b64re = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;
    var _fromCC = String.fromCharCode.bind(String);
    var _U8Afrom = typeof Uint8Array.from === 'function' ? Uint8Array.from.bind(Uint8Array) : function(it, fn) {
        if (fn === void 0) {
            fn = function(x) {
                return x;
            }
            ;
        }
        return new Uint8Array(Array.prototype.slice.call(it, 0).map(fn));
    }
    ;
    var _mkUriSafe = function(src) {
        return src.replace(/=/g, '').replace(/[+\/]/g, function(m0) {
            return m0 == '+' ? '-' : '_';
        });
    };
    var _tidyB64 = function(s) {
        return s.replace(/[^A-Za-z0-9\+\/]/g, '');
    };
    var btoaPolyfill = function(bin) {
        var u32, c0, c1, c2, asc = '';
        var pad = bin.length % 3;
        for (var i = 0; i < bin.length; ) {
            if ((c0 = bin.charCodeAt(i++)) > 255 || (c1 = bin.charCodeAt(i++)) > 255 || (c2 = bin.charCodeAt(i++)) > 255)
                throw new TypeError('invalid character found');
            u32 = (c0 << 16) | (c1 << 8) | c2;
            asc += b64chs[u32 >> 18 & 63] + b64chs[u32 >> 12 & 63] + b64chs[u32 >> 6 & 63] + b64chs[u32 & 63];
        }
        return pad ? asc.slice(0, pad - 3) + "===".substring(pad) : asc;
    };
    var _btoa = _hasbtoa ? function(bin) {
        return btoa(bin);
    }
    : _hasBuffer ? function(bin) {
        return Buffer.from(bin, 'binary').toString('base64');
    }
    : btoaPolyfill;
    var _fromUint8Array = _hasBuffer ? function(u8a) {
        return Buffer.from(u8a).toString('base64');
    }
    : function(u8a) {
        var maxargs = 0x1000;
        var strs = [];
        for (var i = 0, l = u8a.length; i < l; i += maxargs) {
            strs.push(_fromCC.apply(null, u8a.subarray(i, i + maxargs)));
        }
        return _btoa(strs.join(''));
    }
    ;
    var fromUint8Array = function(u8a, urlsafe) {
        if (urlsafe === void 0) {
            urlsafe = false;
        }
        return urlsafe ? _mkUriSafe(_fromUint8Array(u8a)) : _fromUint8Array(u8a);
    };
    var cb_utob = function(c) {
        if (c.length < 2) {
            var cc = c.charCodeAt(0);
            return cc < 0x80 ? c : cc < 0x800 ? (_fromCC(0xc0 | (cc >>> 6)) + _fromCC(0x80 | (cc & 0x3f))) : (_fromCC(0xe0 | ((cc >>> 12) & 0x0f)) + _fromCC(0x80 | ((cc >>> 6) & 0x3f)) + _fromCC(0x80 | (cc & 0x3f)));
        } else {
            var cc = 0x10000 + (c.charCodeAt(0) - 0xD800) * 0x400 + (c.charCodeAt(1) - 0xDC00);
            return (_fromCC(0xf0 | ((cc >>> 18) & 0x07)) + _fromCC(0x80 | ((cc >>> 12) & 0x3f)) + _fromCC(0x80 | ((cc >>> 6) & 0x3f)) + _fromCC(0x80 | (cc & 0x3f)));
        }
    };
    var re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;
    var utob = function(u) {
        return u.replace(re_utob, cb_utob);
    };
    var _encode = _hasBuffer ? function(s) {
        return Buffer.from(s, 'utf8').toString('base64');
    }
    : _TE ? function(s) {
        return _fromUint8Array(_TE.encode(s));
    }
    : function(s) {
        return _btoa(utob(s));
    }
    ;
    var encode = function(src, urlsafe) {
        if (urlsafe === void 0) {
            urlsafe = false;
        }
        return urlsafe ? _mkUriSafe(_encode(src)) : _encode(src);
    };
    var encodeURI = function(src) {
        return encode(src, true);
    };
    var re_btou = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g;
    var cb_btou = function(cccc) {
        switch (cccc.length) {
        case 4:
            var cp = ((0x07 & cccc.charCodeAt(0)) << 18) | ((0x3f & cccc.charCodeAt(1)) << 12) | ((0x3f & cccc.charCodeAt(2)) << 6) | (0x3f & cccc.charCodeAt(3))
              , offset = cp - 0x10000;
            return (_fromCC((offset >>> 10) + 0xD800) + _fromCC((offset & 0x3FF) + 0xDC00));
        case 3:
            return _fromCC(((0x0f & cccc.charCodeAt(0)) << 12) | ((0x3f & cccc.charCodeAt(1)) << 6) | (0x3f & cccc.charCodeAt(2)));
        default:
            return _fromCC(((0x1f & cccc.charCodeAt(0)) << 6) | (0x3f & cccc.charCodeAt(1)));
        }
    };
    var btou = function(b) {
        return b.replace(re_btou, cb_btou);
    };
    var atobPolyfill = function(asc) {
        asc = asc.replace(/\s+/g, '');
        if (!b64re.test(asc))
            throw new TypeError('malformed base64.');
        asc += '=='.slice(2 - (asc.length & 3));
        var u24, bin = '', r1, r2;
        for (var i = 0; i < asc.length; ) {
            u24 = b64tab[asc.charAt(i++)] << 18 | b64tab[asc.charAt(i++)] << 12 | (r1 = b64tab[asc.charAt(i++)]) << 6 | (r2 = b64tab[asc.charAt(i++)]);
            bin += r1 === 64 ? _fromCC(u24 >> 16 & 255) : r2 === 64 ? _fromCC(u24 >> 16 & 255, u24 >> 8 & 255) : _fromCC(u24 >> 16 & 255, u24 >> 8 & 255, u24 & 255);
        }
        return bin;
    };
    var _atob = _hasatob ? function(asc) {
        return atob(_tidyB64(asc));
    }
    : _hasBuffer ? function(asc) {
        return Buffer.from(asc, 'base64').toString('binary');
    }
    : atobPolyfill;
    var _toUint8Array = _hasBuffer ? function(a) {
        return _U8Afrom(Buffer.from(a, 'base64'));
    }
    : function(a) {
        return _U8Afrom(_atob(a), function(c) {
            return c.charCodeAt(0);
        });
    }
    ;
    var toUint8Array = function(a) {
        return _toUint8Array(_unURI(a));
    };
    var _decode = _hasBuffer ? function(a) {
        return Buffer.from(a, 'base64').toString('utf8');
    }
    : _TD ? function(a) {
        return _TD.decode(_toUint8Array(a));
    }
    : function(a) {
        return btou(_atob(a));
    }
    ;
    var _unURI = function(a) {
        return _tidyB64(a.replace(/[-_]/g, function(m0) {
            return m0 == '-' ? '+' : '/';
        }));
    };
    var decode = function(src) {
        return _decode(_unURI(src));
    };
    var isValid = function(src) {
        if (typeof src !== 'string')
            return false;
        var s = src.replace(/\s+/g, '').replace(/={0,2}$/, '');
        return !/[^\s0-9a-zA-Z\+/]/.test(s) || !/[^\s0-9a-zA-Z\-_]/.test(s);
    };
    var _noEnum = function(v) {
        return {
            value: v,
            enumerable: false,
            writable: true,
            configurable: true
        };
    };
    var extendString = function() {
        var _add = function(name, body) {
            return Object.defineProperty(String.prototype, name, _noEnum(body));
        };
        _add('fromBase64', function() {
            return decode(this);
        });
        _add('toBase64', function(urlsafe) {
            return encode(this, urlsafe);
        });
        _add('toBase64URI', function() {
            return encode(this, true);
        });
        _add('toBase64URL', function() {
            return encode(this, true);
        });
        _add('toUint8Array', function() {
            return toUint8Array(this);
        });
    };
    var extendUint8Array = function() {
        var _add = function(name, body) {
            return Object.defineProperty(Uint8Array.prototype, name, _noEnum(body));
        };
        _add('toBase64', function(urlsafe) {
            return fromUint8Array(this, urlsafe);
        });
        _add('toBase64URI', function() {
            return fromUint8Array(this, true);
        });
        _add('toBase64URL', function() {
            return fromUint8Array(this, true);
        });
    };
    var extendBuiltins = function() {
        extendString();
        extendUint8Array();
    };
    var gBase64 = {
        version: version,
        VERSION: VERSION,
        atob: _atob,
        atobPolyfill: atobPolyfill,
        btoa: _btoa,
        btoaPolyfill: btoaPolyfill,
        fromBase64: decode,
        toBase64: encode,
        encode: encode,
        encodeURI: encodeURI,
        encodeURL: encodeURI,
        utob: utob,
        btou: btou,
        decode: decode,
        isValid: isValid,
        fromUint8Array: fromUint8Array,
        toUint8Array: toUint8Array,
        extendString: extendString,
        extendUint8Array: extendUint8Array,
        extendBuiltins: extendBuiltins
    };
    gBase64.Base64 = {};
    Object.keys(gBase64).forEach(function(k) {
        return gBase64.Base64[k] = gBase64[k];
    });
    return gBase64;
}));
