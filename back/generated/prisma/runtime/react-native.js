'use strict'; const ya = Object.create; const er = Object.defineProperty; const wa = Object.getOwnPropertyDescriptor; const ba = Object.getOwnPropertyNames; const Ea = Object.getPrototypeOf; const xa = Object.prototype.hasOwnProperty; const Fe = (e, t) => () => (e && (t = e(e = 0)), t); const he = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports); function Pt(e, t) { for (const r in t)er(e, r, { get: t[r], enumerable: !0 }) } function ri(e, t, r, n) {
  if (t && typeof t == 'object' || typeof t == 'function') {
    for (const i of ba(t))!xa.call(e, i) && i !== r && er(e, i, { get: () => t[i], enumerable: !(n = wa(t, i)) || n.enumerable })
  } return e
} const Re = (e, t, r) => (r = e != null ? ya(Ea(e)) : {}, ri(t || !e || !e.__esModule ? er(r, 'default', { value: e, enumerable: !0 }) : r, e)); const Pa = e => ri(er({}, '__esModule', { value: !0 }), e); let y; const c = Fe(() => { 'use strict'; y = { nextTick: (e, ...t) => { setTimeout(() => { e(...t) }, 0) }, env: {}, version: '', cwd: () => '/', stderr: {}, argv: ['/bin/node'] } }); let x; const p = Fe(() => { 'use strict'; x = globalThis.performance ?? (() => { const e = Date.now(); return { now: () => Date.now() - e } })() }); let E; const d = Fe(() => { 'use strict'; E = () => {}; E.prototype = E }); let b; const f = Fe(() => { 'use strict'; b = class {value; constructor(t) { this.value = t }deref() { return this.value }} }); const xi = he((et) => {
  'use strict'; m(); c(); p(); d(); f(); const ai = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports); const va = ai((e) => {
    'use strict'; e.byteLength = l, e.toByteArray = g, e.fromByteArray = R; const t = []; const r = []; const n = typeof Uint8Array < 'u' ? Uint8Array : Array; const i = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'; for (o = 0, s = i.length; o < s; ++o)t[o] = i[o], r[i.charCodeAt(o)] = o; let o, s; r[45] = 62, r[95] = 63; function a(C) {
      const A = C.length; if (A % 4 > 0)
        throw new Error('Invalid string. Length must be a multiple of 4'); let O = C.indexOf('='); O === -1 && (O = A); const _ = O === A ? 0 : 4 - O % 4; return [O, _]
    } function l(C) { const A = a(C); const O = A[0]; const _ = A[1]; return (O + _) * 3 / 4 - _ } function u(C, A, O) { return (A + O) * 3 / 4 - O } function g(C) { let A; const O = a(C); const _ = O[0]; const L = O[1]; const I = new n(u(C, _, L)); let D = 0; const $ = L > 0 ? _ - 4 : _; let U; for (U = 0; U < $; U += 4)A = r[C.charCodeAt(U)] << 18 | r[C.charCodeAt(U + 1)] << 12 | r[C.charCodeAt(U + 2)] << 6 | r[C.charCodeAt(U + 3)], I[D++] = A >> 16 & 255, I[D++] = A >> 8 & 255, I[D++] = A & 255; return L === 2 && (A = r[C.charCodeAt(U)] << 2 | r[C.charCodeAt(U + 1)] >> 4, I[D++] = A & 255), L === 1 && (A = r[C.charCodeAt(U)] << 10 | r[C.charCodeAt(U + 1)] << 4 | r[C.charCodeAt(U + 2)] >> 2, I[D++] = A >> 8 & 255, I[D++] = A & 255), I } function h(C) { return t[C >> 18 & 63] + t[C >> 12 & 63] + t[C >> 6 & 63] + t[C & 63] } function v(C, A, O) { for (var _, L = [], I = A; I < O; I += 3)_ = (C[I] << 16 & 16711680) + (C[I + 1] << 8 & 65280) + (C[I + 2] & 255), L.push(h(_)); return L.join('') } function R(C) { for (var A, O = C.length, _ = O % 3, L = [], I = 16383, D = 0, $ = O - _; D < $; D += I)L.push(v(C, D, D + I > $ ? $ : D + I)); return _ === 1 ? (A = C[O - 1], L.push(`${t[A >> 2] + t[A << 4 & 63]}==`)) : _ === 2 && (A = (C[O - 2] << 8) + C[O - 1], L.push(`${t[A >> 10] + t[A >> 4 & 63] + t[A << 2 & 63]}=`)), L.join('') }
  }); const Ta = ai((e) => {
    e.read = function (t, r, n, i, o) {
      let s; let a; const l = o * 8 - i - 1; const u = (1 << l) - 1; const g = u >> 1; let h = -7; let v = n ? o - 1 : 0; const R = n ? -1 : 1; let C = t[r + v]; for (v += R, s = C & (1 << -h) - 1, C >>= -h, h += l; h > 0; s = s * 256 + t[r + v], v += R, h -= 8);for (a = s & (1 << -h) - 1, s >>= -h, h += i; h > 0; a = a * 256 + t[r + v], v += R, h -= 8);if (s === 0) {
        s = 1 - g
      }
      else {
        if (s === u)
          return a ? Number.NaN : (C ? -1 : 1) * (1 / 0); a = a + 2 ** i, s = s - g
      } return (C ? -1 : 1) * a * 2 ** (s - i)
    }, e.write = function (t, r, n, i, o, s) { let a; let l; let u; let g = s * 8 - o - 1; const h = (1 << g) - 1; const v = h >> 1; const R = o === 23 ? 2 ** -24 - 2 ** -77 : 0; let C = i ? 0 : s - 1; const A = i ? 1 : -1; const O = r < 0 || r === 0 && 1 / r < 0 ? 1 : 0; for (r = Math.abs(r), isNaN(r) || r === 1 / 0 ? (l = isNaN(r) ? 1 : 0, a = h) : (a = Math.floor(Math.log(r) / Math.LN2), r * (u = 2 ** -a) < 1 && (a--, u *= 2), a + v >= 1 ? r += R / u : r += R * 2 ** (1 - v), r * u >= 2 && (a++, u /= 2), a + v >= h ? (l = 0, a = h) : a + v >= 1 ? (l = (r * u - 1) * 2 ** o, a = a + v) : (l = r * 2 ** (v - 1) * 2 ** o, a = 0)); o >= 8; t[n + C] = l & 255, C += A, l /= 256, o -= 8);for (a = a << o | l, g += o; g > 0; t[n + C] = a & 255, C += A, a /= 256, g -= 8);t[n + C - A] |= O * 128 }
  }); const Yr = va(); const Ze = Ta(); const ni = typeof Symbol == 'function' && typeof Symbol.for == 'function' ? Symbol.for('nodejs.util.inspect.custom') : null; et.Buffer = T; et.SlowBuffer = Oa; et.INSPECT_MAX_BYTES = 50; const tr = 2147483647; et.kMaxLength = tr; T.TYPED_ARRAY_SUPPORT = Ca(); !T.TYPED_ARRAY_SUPPORT && typeof console < 'u' && typeof console.error == 'function' && console.error('This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.'); function Ca() {
    try { const e = new Uint8Array(1); const t = { foo() { return 42 } }; return Object.setPrototypeOf(t, Uint8Array.prototype), Object.setPrototypeOf(e, t), e.foo() === 42 }
    catch { return !1 }
  }Object.defineProperty(T.prototype, 'parent', { enumerable: !0, get() {
    if (T.isBuffer(this))
      return this.buffer
  } }); Object.defineProperty(T.prototype, 'offset', { enumerable: !0, get() {
    if (T.isBuffer(this))
      return this.byteOffset
  } }); function ke(e) {
    if (e > tr)
      throw new RangeError(`The value "${e}" is invalid for option "size"`); const t = new Uint8Array(e); return Object.setPrototypeOf(t, T.prototype), t
  } function T(e, t, r) {
    if (typeof e == 'number') {
      if (typeof t == 'string')
        throw new TypeError('The "string" argument must be of type string. Received type number'); return en(e)
    } return li(e, t, r)
  }T.poolSize = 8192; function li(e, t, r) {
    if (typeof e == 'string')
      return Sa(e, t); if (ArrayBuffer.isView(e))
      return Ra(e); if (e == null)
      throw new TypeError(`The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ${typeof e}`); if (ye(e, ArrayBuffer) || e && ye(e.buffer, ArrayBuffer) || typeof SharedArrayBuffer < 'u' && (ye(e, SharedArrayBuffer) || e && ye(e.buffer, SharedArrayBuffer)))
      return ci(e, t, r); if (typeof e == 'number')
      throw new TypeError('The "value" argument must not be of type number. Received type number'); const n = e.valueOf && e.valueOf(); if (n != null && n !== e)
      return T.from(n, t, r); const i = ka(e); if (i)
      return i; if (typeof Symbol < 'u' && Symbol.toPrimitive != null && typeof e[Symbol.toPrimitive] == 'function')
      return T.from(e[Symbol.toPrimitive]('string'), t, r); throw new TypeError(`The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ${typeof e}`)
  }T.from = function (e, t, r) { return li(e, t, r) }; Object.setPrototypeOf(T.prototype, Uint8Array.prototype); Object.setPrototypeOf(T, Uint8Array); function ui(e) {
    if (typeof e != 'number')
      throw new TypeError('"size" argument must be of type number'); if (e < 0)
      throw new RangeError(`The value "${e}" is invalid for option "size"`)
  } function Aa(e, t, r) { return ui(e), e <= 0 ? ke(e) : t !== void 0 ? typeof r == 'string' ? ke(e).fill(t, r) : ke(e).fill(t) : ke(e) }T.alloc = function (e, t, r) { return Aa(e, t, r) }; function en(e) { return ui(e), ke(e < 0 ? 0 : tn(e) | 0) }T.allocUnsafe = function (e) { return en(e) }; T.allocUnsafeSlow = function (e) { return en(e) }; function Sa(e, t) {
    if ((typeof t != 'string' || t === '') && (t = 'utf8'), !T.isEncoding(t))
      throw new TypeError(`Unknown encoding: ${t}`); const r = pi(e, t) | 0; let n = ke(r); const i = n.write(e, t); return i !== r && (n = n.slice(0, i)), n
  } function Zr(e) { const t = e.length < 0 ? 0 : tn(e.length) | 0; const r = ke(t); for (let n = 0; n < t; n += 1)r[n] = e[n] & 255; return r } function Ra(e) { if (ye(e, Uint8Array)) { const t = new Uint8Array(e); return ci(t.buffer, t.byteOffset, t.byteLength) } return Zr(e) } function ci(e, t, r) {
    if (t < 0 || e.byteLength < t)
      throw new RangeError('"offset" is outside of buffer bounds'); if (e.byteLength < t + (r || 0))
      throw new RangeError('"length" is outside of buffer bounds'); let n; return t === void 0 && r === void 0 ? n = new Uint8Array(e) : r === void 0 ? n = new Uint8Array(e, t) : n = new Uint8Array(e, t, r), Object.setPrototypeOf(n, T.prototype), n
  } function ka(e) {
    if (T.isBuffer(e)) { const t = tn(e.length) | 0; const r = ke(t); return r.length === 0 || e.copy(r, 0, 0, t), r } if (e.length !== void 0)
      return typeof e.length != 'number' || nn(e.length) ? ke(0) : Zr(e); if (e.type === 'Buffer' && Array.isArray(e.data))
      return Zr(e.data)
  } function tn(e) {
    if (e >= tr)
      throw new RangeError(`Attempt to allocate Buffer larger than maximum size: 0x${tr.toString(16)} bytes`); return e | 0
  } function Oa(e) { return +e != e && (e = 0), T.alloc(+e) }T.isBuffer = function (e) { return e != null && e._isBuffer === !0 && e !== T.prototype }; T.compare = function (e, t) {
    if (ye(e, Uint8Array) && (e = T.from(e, e.offset, e.byteLength)), ye(t, Uint8Array) && (t = T.from(t, t.offset, t.byteLength)), !T.isBuffer(e) || !T.isBuffer(t))
      throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'); if (e === t)
      return 0; let r = e.length; let n = t.length; for (let i = 0, o = Math.min(r, n); i < o; ++i) {
      if (e[i] !== t[i]) { r = e[i], n = t[i]; break }
    } return r < n ? -1 : n < r ? 1 : 0
  }; T.isEncoding = function (e) { switch (String(e).toLowerCase()) { case 'hex':case 'utf8':case 'utf-8':case 'ascii':case 'latin1':case 'binary':case 'base64':case 'ucs2':case 'ucs-2':case 'utf16le':case 'utf-16le':return !0; default:return !1 } }; T.concat = function (e, t) {
    if (!Array.isArray(e))
      throw new TypeError('"list" argument must be an Array of Buffers'); if (e.length === 0)
      return T.alloc(0); let r; if (t === void 0) {
      for (t = 0, r = 0; r < e.length; ++r)t += e[r].length
    } const n = T.allocUnsafe(t); let i = 0; for (r = 0; r < e.length; ++r) {
      let o = e[r]; if (ye(o, Uint8Array))
        i + o.length > n.length ? (T.isBuffer(o) || (o = T.from(o)), o.copy(n, i)) : Uint8Array.prototype.set.call(n, o, i); else if (T.isBuffer(o))
        o.copy(n, i); else throw new TypeError('"list" argument must be an Array of Buffers'); i += o.length
    } return n
  }; function pi(e, t) {
    if (T.isBuffer(e))
      return e.length; if (ArrayBuffer.isView(e) || ye(e, ArrayBuffer))
      return e.byteLength; if (typeof e != 'string')
      throw new TypeError(`The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ${typeof e}`); const r = e.length; const n = arguments.length > 2 && arguments[2] === !0; if (!n && r === 0)
      return 0; let i = !1; for (;;) {
      switch (t) {
        case 'ascii':case 'latin1':case 'binary':return r; case 'utf8':case 'utf-8':return Xr(e).length; case 'ucs2':case 'ucs-2':case 'utf16le':case 'utf-16le':return r * 2; case 'hex':return r >>> 1; case 'base64':return Ei(e).length; default:if (i)
          return n ? -1 : Xr(e).length; t = (`${t}`).toLowerCase(), i = !0
      }
    }
  }T.byteLength = pi; function Ia(e, t, r) {
    let n = !1; if ((t === void 0 || t < 0) && (t = 0), t > this.length || ((r === void 0 || r > this.length) && (r = this.length), r <= 0) || (r >>>= 0, t >>>= 0, r <= t))
      return ''; for (e || (e = 'utf8'); ;) {
      switch (e) {
        case 'hex':return qa(this, t, r); case 'utf8':case 'utf-8':return fi(this, t, r); case 'ascii':return Ba(this, t, r); case 'latin1':case 'binary':return ja(this, t, r); case 'base64':return Da(this, t, r); case 'ucs2':case 'ucs-2':case 'utf16le':case 'utf-16le':return Ua(this, t, r); default:if (n)
          throw new TypeError(`Unknown encoding: ${e}`); e = (`${e}`).toLowerCase(), n = !0
      }
    }
  }T.prototype._isBuffer = !0; function Ve(e, t, r) { const n = e[t]; e[t] = e[r], e[r] = n }T.prototype.swap16 = function () {
    const e = this.length; if (e % 2 !== 0)
      throw new RangeError('Buffer size must be a multiple of 16-bits'); for (let t = 0; t < e; t += 2)Ve(this, t, t + 1); return this
  }; T.prototype.swap32 = function () {
    const e = this.length; if (e % 4 !== 0)
      throw new RangeError('Buffer size must be a multiple of 32-bits'); for (let t = 0; t < e; t += 4)Ve(this, t, t + 3), Ve(this, t + 1, t + 2); return this
  }; T.prototype.swap64 = function () {
    const e = this.length; if (e % 8 !== 0)
      throw new RangeError('Buffer size must be a multiple of 64-bits'); for (let t = 0; t < e; t += 8)Ve(this, t, t + 7), Ve(this, t + 1, t + 6), Ve(this, t + 2, t + 5), Ve(this, t + 3, t + 4); return this
  }; T.prototype.toString = function () { const e = this.length; return e === 0 ? '' : arguments.length === 0 ? fi(this, 0, e) : Ia.apply(this, arguments) }; T.prototype.toLocaleString = T.prototype.toString; T.prototype.equals = function (e) {
    if (!T.isBuffer(e))
      throw new TypeError('Argument must be a Buffer'); return this === e ? !0 : T.compare(this, e) === 0
  }; T.prototype.inspect = function () { let e = ''; const t = et.INSPECT_MAX_BYTES; return e = this.toString('hex', 0, t).replace(/(.{2})/g, '$1 ').trim(), this.length > t && (e += ' ... '), `<Buffer ${e}>` }; ni && (T.prototype[ni] = T.prototype.inspect); T.prototype.compare = function (e, t, r, n, i) {
    if (ye(e, Uint8Array) && (e = T.from(e, e.offset, e.byteLength)), !T.isBuffer(e))
      throw new TypeError(`The "target" argument must be one of type Buffer or Uint8Array. Received type ${typeof e}`); if (t === void 0 && (t = 0), r === void 0 && (r = e ? e.length : 0), n === void 0 && (n = 0), i === void 0 && (i = this.length), t < 0 || r > e.length || n < 0 || i > this.length)
      throw new RangeError('out of range index'); if (n >= i && t >= r)
      return 0; if (n >= i)
      return -1; if (t >= r)
      return 1; if (t >>>= 0, r >>>= 0, n >>>= 0, i >>>= 0, this === e)
      return 0; let o = i - n; let s = r - t; const a = Math.min(o, s); const l = this.slice(n, i); const u = e.slice(t, r); for (let g = 0; g < a; ++g) {
      if (l[g] !== u[g]) { o = l[g], s = u[g]; break }
    } return o < s ? -1 : s < o ? 1 : 0
  }; function di(e, t, r, n, i) {
    if (e.length === 0)
      return -1; if (typeof r == 'string' ? (n = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), r = +r, nn(r) && (r = i ? 0 : e.length - 1), r < 0 && (r = e.length + r), r >= e.length) {
      if (i)
        return -1; r = e.length - 1
    }
    else if (r < 0) {
      if (i)
        r = 0; else return -1
    } if (typeof t == 'string' && (t = T.from(t, n)), T.isBuffer(t))
      return t.length === 0 ? -1 : ii(e, t, r, n, i); if (typeof t == 'number')
      return t = t & 255, typeof Uint8Array.prototype.indexOf == 'function' ? i ? Uint8Array.prototype.indexOf.call(e, t, r) : Uint8Array.prototype.lastIndexOf.call(e, t, r) : ii(e, [t], r, n, i); throw new TypeError('val must be string, number or Buffer')
  } function ii(e, t, r, n, i) {
    let o = 1; let s = e.length; let a = t.length; if (n !== void 0 && (n = String(n).toLowerCase(), n === 'ucs2' || n === 'ucs-2' || n === 'utf16le' || n === 'utf-16le')) {
      if (e.length < 2 || t.length < 2)
        return -1; o = 2, s /= 2, a /= 2, r /= 2
    } function l(g, h) { return o === 1 ? g[h] : g.readUInt16BE(h * o) } let u; if (i) {
      let g = -1; for (u = r; u < s; u++) {
        if (l(e, u) === l(t, g === -1 ? 0 : u - g)) {
          if (g === -1 && (g = u), u - g + 1 === a)
            return g * o
        }
        else {
          g !== -1 && (u -= u - g), g = -1
        }
      }
    }
    else {
      for (r + a > s && (r = s - a), u = r; u >= 0; u--) {
        let g = !0; for (let h = 0; h < a; h++) {
          if (l(e, u + h) !== l(t, h)) { g = !1; break }
        } if (g)
          return u
      }
    } return -1
  }T.prototype.includes = function (e, t, r) { return this.indexOf(e, t, r) !== -1 }; T.prototype.indexOf = function (e, t, r) { return di(this, e, t, r, !0) }; T.prototype.lastIndexOf = function (e, t, r) { return di(this, e, t, r, !1) }; function Ma(e, t, r, n) {
    r = Number(r) || 0; const i = e.length - r; n ? (n = Number(n), n > i && (n = i)) : n = i; const o = t.length; n > o / 2 && (n = o / 2); let s; for (s = 0; s < n; ++s) {
      const a = Number.parseInt(t.substr(s * 2, 2), 16); if (nn(a))
        return s; e[r + s] = a
    } return s
  } function _a(e, t, r, n) { return rr(Xr(t, e.length - r), e, r, n) } function Fa(e, t, r, n) { return rr(Ga(t), e, r, n) } function La(e, t, r, n) { return rr(Ei(t), e, r, n) } function Na(e, t, r, n) { return rr(Wa(t, e.length - r), e, r, n) }T.prototype.write = function (e, t, r, n) {
    if (t === void 0)
      n = 'utf8', r = this.length, t = 0; else if (r === void 0 && typeof t == 'string')
      n = t, r = this.length, t = 0; else if (isFinite(t))
      t = t >>> 0, isFinite(r) ? (r = r >>> 0, n === void 0 && (n = 'utf8')) : (n = r, r = void 0); else throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported'); const i = this.length - t; if ((r === void 0 || r > i) && (r = i), e.length > 0 && (r < 0 || t < 0) || t > this.length)
      throw new RangeError('Attempt to write outside buffer bounds'); n || (n = 'utf8'); let o = !1; for (;;) {
      switch (n) {
        case 'hex':return Ma(this, e, t, r); case 'utf8':case 'utf-8':return _a(this, e, t, r); case 'ascii':case 'latin1':case 'binary':return Fa(this, e, t, r); case 'base64':return La(this, e, t, r); case 'ucs2':case 'ucs-2':case 'utf16le':case 'utf-16le':return Na(this, e, t, r); default:if (o)
          throw new TypeError(`Unknown encoding: ${n}`); n = (`${n}`).toLowerCase(), o = !0
      }
    }
  }; T.prototype.toJSON = function () { return { type: 'Buffer', data: Array.prototype.slice.call(this._arr || this, 0) } }; function Da(e, t, r) { return t === 0 && r === e.length ? Yr.fromByteArray(e) : Yr.fromByteArray(e.slice(t, r)) } function fi(e, t, r) { r = Math.min(e.length, r); const n = []; let i = t; for (;i < r;) { const o = e[i]; let s = null; let a = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1; if (i + a <= r) { let l, u, g, h; switch (a) { case 1:o < 128 && (s = o); break; case 2:l = e[i + 1], (l & 192) === 128 && (h = (o & 31) << 6 | l & 63, h > 127 && (s = h)); break; case 3:l = e[i + 1], u = e[i + 2], (l & 192) === 128 && (u & 192) === 128 && (h = (o & 15) << 12 | (l & 63) << 6 | u & 63, h > 2047 && (h < 55296 || h > 57343) && (s = h)); break; case 4:l = e[i + 1], u = e[i + 2], g = e[i + 3], (l & 192) === 128 && (u & 192) === 128 && (g & 192) === 128 && (h = (o & 15) << 18 | (l & 63) << 12 | (u & 63) << 6 | g & 63, h > 65535 && h < 1114112 && (s = h)) } }s === null ? (s = 65533, a = 1) : s > 65535 && (s -= 65536, n.push(s >>> 10 & 1023 | 55296), s = 56320 | s & 1023), n.push(s), i += a } return $a(n) } const oi = 4096; function $a(e) {
    const t = e.length; if (t <= oi)
      return String.fromCharCode.apply(String, e); let r = ''; let n = 0; for (;n < t;)r += String.fromCharCode.apply(String, e.slice(n, n += oi)); return r
  } function Ba(e, t, r) { let n = ''; r = Math.min(e.length, r); for (let i = t; i < r; ++i)n += String.fromCharCode(e[i] & 127); return n } function ja(e, t, r) { let n = ''; r = Math.min(e.length, r); for (let i = t; i < r; ++i)n += String.fromCharCode(e[i]); return n } function qa(e, t, r) { const n = e.length; (!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n); let i = ''; for (let o = t; o < r; ++o)i += Ka[e[o]]; return i } function Ua(e, t, r) { const n = e.slice(t, r); let i = ''; for (let o = 0; o < n.length - 1; o += 2)i += String.fromCharCode(n[o] + n[o + 1] * 256); return i }T.prototype.slice = function (e, t) { const r = this.length; e = ~~e, t = t === void 0 ? r : ~~t, e < 0 ? (e += r, e < 0 && (e = 0)) : e > r && (e = r), t < 0 ? (t += r, t < 0 && (t = 0)) : t > r && (t = r), t < e && (t = e); const n = this.subarray(e, t); return Object.setPrototypeOf(n, T.prototype), n }; function K(e, t, r) {
    if (e % 1 !== 0 || e < 0)
      throw new RangeError('offset is not uint'); if (e + t > r)
      throw new RangeError('Trying to access beyond buffer length')
  }T.prototype.readUintLE = T.prototype.readUIntLE = function (e, t, r) { e = e >>> 0, t = t >>> 0, r || K(e, t, this.length); let n = this[e]; let i = 1; let o = 0; for (;++o < t && (i *= 256);)n += this[e + o] * i; return n }; T.prototype.readUintBE = T.prototype.readUIntBE = function (e, t, r) { e = e >>> 0, t = t >>> 0, r || K(e, t, this.length); let n = this[e + --t]; let i = 1; for (;t > 0 && (i *= 256);)n += this[e + --t] * i; return n }; T.prototype.readUint8 = T.prototype.readUInt8 = function (e, t) { return e = e >>> 0, t || K(e, 1, this.length), this[e] }; T.prototype.readUint16LE = T.prototype.readUInt16LE = function (e, t) { return e = e >>> 0, t || K(e, 2, this.length), this[e] | this[e + 1] << 8 }; T.prototype.readUint16BE = T.prototype.readUInt16BE = function (e, t) { return e = e >>> 0, t || K(e, 2, this.length), this[e] << 8 | this[e + 1] }; T.prototype.readUint32LE = T.prototype.readUInt32LE = function (e, t) { return e = e >>> 0, t || K(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216 }; T.prototype.readUint32BE = T.prototype.readUInt32BE = function (e, t) { return e = e >>> 0, t || K(e, 4, this.length), this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]) }; T.prototype.readBigUInt64LE = Le(function (e) { e = e >>> 0, Xe(e, 'offset'); const t = this[e]; const r = this[e + 7]; (t === void 0 || r === void 0) && vt(e, this.length - 8); const n = t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24; const i = this[++e] + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + r * 2 ** 24; return BigInt(n) + (BigInt(i) << BigInt(32)) }); T.prototype.readBigUInt64BE = Le(function (e) { e = e >>> 0, Xe(e, 'offset'); const t = this[e]; const r = this[e + 7]; (t === void 0 || r === void 0) && vt(e, this.length - 8); const n = t * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e]; const i = this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + r; return (BigInt(n) << BigInt(32)) + BigInt(i) }); T.prototype.readIntLE = function (e, t, r) { e = e >>> 0, t = t >>> 0, r || K(e, t, this.length); let n = this[e]; let i = 1; let o = 0; for (;++o < t && (i *= 256);)n += this[e + o] * i; return i *= 128, n >= i && (n -= 2 ** (8 * t)), n }; T.prototype.readIntBE = function (e, t, r) { e = e >>> 0, t = t >>> 0, r || K(e, t, this.length); let n = t; let i = 1; let o = this[e + --n]; for (;n > 0 && (i *= 256);)o += this[e + --n] * i; return i *= 128, o >= i && (o -= 2 ** (8 * t)), o }; T.prototype.readInt8 = function (e, t) { return e = e >>> 0, t || K(e, 1, this.length), this[e] & 128 ? (255 - this[e] + 1) * -1 : this[e] }; T.prototype.readInt16LE = function (e, t) { e = e >>> 0, t || K(e, 2, this.length); const r = this[e] | this[e + 1] << 8; return r & 32768 ? r | 4294901760 : r }; T.prototype.readInt16BE = function (e, t) { e = e >>> 0, t || K(e, 2, this.length); const r = this[e + 1] | this[e] << 8; return r & 32768 ? r | 4294901760 : r }; T.prototype.readInt32LE = function (e, t) { return e = e >>> 0, t || K(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24 }; T.prototype.readInt32BE = function (e, t) { return e = e >>> 0, t || K(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3] }; T.prototype.readBigInt64LE = Le(function (e) { e = e >>> 0, Xe(e, 'offset'); const t = this[e]; const r = this[e + 7]; (t === void 0 || r === void 0) && vt(e, this.length - 8); const n = this[e + 4] + this[e + 5] * 2 ** 8 + this[e + 6] * 2 ** 16 + (r << 24); return (BigInt(n) << BigInt(32)) + BigInt(t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24) }); T.prototype.readBigInt64BE = Le(function (e) { e = e >>> 0, Xe(e, 'offset'); const t = this[e]; const r = this[e + 7]; (t === void 0 || r === void 0) && vt(e, this.length - 8); const n = (t << 24) + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e]; return (BigInt(n) << BigInt(32)) + BigInt(this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + r) }); T.prototype.readFloatLE = function (e, t) { return e = e >>> 0, t || K(e, 4, this.length), Ze.read(this, e, !0, 23, 4) }; T.prototype.readFloatBE = function (e, t) { return e = e >>> 0, t || K(e, 4, this.length), Ze.read(this, e, !1, 23, 4) }; T.prototype.readDoubleLE = function (e, t) { return e = e >>> 0, t || K(e, 8, this.length), Ze.read(this, e, !0, 52, 8) }; T.prototype.readDoubleBE = function (e, t) { return e = e >>> 0, t || K(e, 8, this.length), Ze.read(this, e, !1, 52, 8) }; function ne(e, t, r, n, i, o) {
    if (!T.isBuffer(e))
      throw new TypeError('"buffer" argument must be a Buffer instance'); if (t > i || t < o)
      throw new RangeError('"value" argument is out of bounds'); if (r + n > e.length)
      throw new RangeError('Index out of range')
  }T.prototype.writeUintLE = T.prototype.writeUIntLE = function (e, t, r, n) { if (e = +e, t = t >>> 0, r = r >>> 0, !n) { const s = 2 ** (8 * r) - 1; ne(this, e, t, r, s, 0) } let i = 1; let o = 0; for (this[t] = e & 255; ++o < r && (i *= 256);) this[t + o] = e / i & 255; return t + r }; T.prototype.writeUintBE = T.prototype.writeUIntBE = function (e, t, r, n) { if (e = +e, t = t >>> 0, r = r >>> 0, !n) { const s = 2 ** (8 * r) - 1; ne(this, e, t, r, s, 0) } let i = r - 1; let o = 1; for (this[t + i] = e & 255; --i >= 0 && (o *= 256);) this[t + i] = e / o & 255; return t + r }; T.prototype.writeUint8 = T.prototype.writeUInt8 = function (e, t, r) { return e = +e, t = t >>> 0, r || ne(this, e, t, 1, 255, 0), this[t] = e & 255, t + 1 }; T.prototype.writeUint16LE = T.prototype.writeUInt16LE = function (e, t, r) { return e = +e, t = t >>> 0, r || ne(this, e, t, 2, 65535, 0), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2 }; T.prototype.writeUint16BE = T.prototype.writeUInt16BE = function (e, t, r) { return e = +e, t = t >>> 0, r || ne(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2 }; T.prototype.writeUint32LE = T.prototype.writeUInt32LE = function (e, t, r) { return e = +e, t = t >>> 0, r || ne(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = e & 255, t + 4 }; T.prototype.writeUint32BE = T.prototype.writeUInt32BE = function (e, t, r) { return e = +e, t = t >>> 0, r || ne(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4 }; function mi(e, t, r, n, i) { bi(t, n, i, e, r, 7); let o = Number(t & BigInt(4294967295)); e[r++] = o, o = o >> 8, e[r++] = o, o = o >> 8, e[r++] = o, o = o >> 8, e[r++] = o; let s = Number(t >> BigInt(32) & BigInt(4294967295)); return e[r++] = s, s = s >> 8, e[r++] = s, s = s >> 8, e[r++] = s, s = s >> 8, e[r++] = s, r } function gi(e, t, r, n, i) { bi(t, n, i, e, r, 7); let o = Number(t & BigInt(4294967295)); e[r + 7] = o, o = o >> 8, e[r + 6] = o, o = o >> 8, e[r + 5] = o, o = o >> 8, e[r + 4] = o; let s = Number(t >> BigInt(32) & BigInt(4294967295)); return e[r + 3] = s, s = s >> 8, e[r + 2] = s, s = s >> 8, e[r + 1] = s, s = s >> 8, e[r] = s, r + 8 }T.prototype.writeBigUInt64LE = Le(function (e, t = 0) { return mi(this, e, t, BigInt(0), BigInt('0xffffffffffffffff')) }); T.prototype.writeBigUInt64BE = Le(function (e, t = 0) { return gi(this, e, t, BigInt(0), BigInt('0xffffffffffffffff')) }); T.prototype.writeIntLE = function (e, t, r, n) { if (e = +e, t = t >>> 0, !n) { const a = 2 ** (8 * r - 1); ne(this, e, t, r, a - 1, -a) } let i = 0; let o = 1; let s = 0; for (this[t] = e & 255; ++i < r && (o *= 256);)e < 0 && s === 0 && this[t + i - 1] !== 0 && (s = 1), this[t + i] = (e / o >> 0) - s & 255; return t + r }; T.prototype.writeIntBE = function (e, t, r, n) { if (e = +e, t = t >>> 0, !n) { const a = 2 ** (8 * r - 1); ne(this, e, t, r, a - 1, -a) } let i = r - 1; let o = 1; let s = 0; for (this[t + i] = e & 255; --i >= 0 && (o *= 256);)e < 0 && s === 0 && this[t + i + 1] !== 0 && (s = 1), this[t + i] = (e / o >> 0) - s & 255; return t + r }; T.prototype.writeInt8 = function (e, t, r) { return e = +e, t = t >>> 0, r || ne(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = e & 255, t + 1 }; T.prototype.writeInt16LE = function (e, t, r) { return e = +e, t = t >>> 0, r || ne(this, e, t, 2, 32767, -32768), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2 }; T.prototype.writeInt16BE = function (e, t, r) { return e = +e, t = t >>> 0, r || ne(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2 }; T.prototype.writeInt32LE = function (e, t, r) { return e = +e, t = t >>> 0, r || ne(this, e, t, 4, 2147483647, -2147483648), this[t] = e & 255, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4 }; T.prototype.writeInt32BE = function (e, t, r) { return e = +e, t = t >>> 0, r || ne(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4 }; T.prototype.writeBigInt64LE = Le(function (e, t = 0) { return mi(this, e, t, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff')) }); T.prototype.writeBigInt64BE = Le(function (e, t = 0) { return gi(this, e, t, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff')) }); function hi(e, t, r, n, i, o) {
    if (r + n > e.length)
      throw new RangeError('Index out of range'); if (r < 0)
      throw new RangeError('Index out of range')
  } function yi(e, t, r, n, i) { return t = +t, r = r >>> 0, i || hi(e, t, r, 4, 34028234663852886e22, -34028234663852886e22), Ze.write(e, t, r, n, 23, 4), r + 4 }T.prototype.writeFloatLE = function (e, t, r) { return yi(this, e, t, !0, r) }; T.prototype.writeFloatBE = function (e, t, r) { return yi(this, e, t, !1, r) }; function wi(e, t, r, n, i) { return t = +t, r = r >>> 0, i || hi(e, t, r, 8, 17976931348623157e292, -17976931348623157e292), Ze.write(e, t, r, n, 52, 8), r + 8 }T.prototype.writeDoubleLE = function (e, t, r) { return wi(this, e, t, !0, r) }; T.prototype.writeDoubleBE = function (e, t, r) { return wi(this, e, t, !1, r) }; T.prototype.copy = function (e, t, r, n) {
    if (!T.isBuffer(e))
      throw new TypeError('argument should be a Buffer'); if (r || (r = 0), !n && n !== 0 && (n = this.length), t >= e.length && (t = e.length), t || (t = 0), n > 0 && n < r && (n = r), n === r || e.length === 0 || this.length === 0)
      return 0; if (t < 0)
      throw new RangeError('targetStart out of bounds'); if (r < 0 || r >= this.length)
      throw new RangeError('Index out of range'); if (n < 0)
      throw new RangeError('sourceEnd out of bounds'); n > this.length && (n = this.length), e.length - t < n - r && (n = e.length - t + r); const i = n - r; return this === e && typeof Uint8Array.prototype.copyWithin == 'function' ? this.copyWithin(t, r, n) : Uint8Array.prototype.set.call(e, this.subarray(r, n), t), i
  }; T.prototype.fill = function (e, t, r, n) {
    if (typeof e == 'string') {
      if (typeof t == 'string' ? (n = t, t = 0, r = this.length) : typeof r == 'string' && (n = r, r = this.length), n !== void 0 && typeof n != 'string')
        throw new TypeError('encoding must be a string'); if (typeof n == 'string' && !T.isEncoding(n))
        throw new TypeError(`Unknown encoding: ${n}`); if (e.length === 1) { const o = e.charCodeAt(0); (n === 'utf8' && o < 128 || n === 'latin1') && (e = o) }
    }
    else {
      typeof e == 'number' ? e = e & 255 : typeof e == 'boolean' && (e = Number(e))
    } if (t < 0 || this.length < t || this.length < r)
      throw new RangeError('Out of range index'); if (r <= t)
      return this; t = t >>> 0, r = r === void 0 ? this.length : r >>> 0, e || (e = 0); let i; if (typeof e == 'number') {
      for (i = t; i < r; ++i) this[i] = e
    }
    else {
      const o = T.isBuffer(e) ? e : T.from(e, n); const s = o.length; if (s === 0)
        throw new TypeError(`The value "${e}" is invalid for argument "value"`); for (i = 0; i < r - t; ++i) this[i + t] = o[i % s]
    } return this
  }; const Ye = {}; function rn(e, t, r) { Ye[e] = class extends r {constructor() { super(), Object.defineProperty(this, 'message', { value: t.apply(this, arguments), writable: !0, configurable: !0 }), this.name = `${this.name} [${e}]`, this.stack, delete this.name } get code() { return e } set code(n) { Object.defineProperty(this, 'code', { configurable: !0, enumerable: !0, value: n, writable: !0 }) }toString() { return `${this.name} [${e}]: ${this.message}` }} }rn('ERR_BUFFER_OUT_OF_BOUNDS', (e) => { return e ? `${e} is outside of buffer bounds` : 'Attempt to access memory outside buffer bounds' }, RangeError); rn('ERR_INVALID_ARG_TYPE', (e, t) => { return `The "${e}" argument must be of type number. Received type ${typeof t}` }, TypeError); rn('ERR_OUT_OF_RANGE', (e, t, r) => { let n = `The value of "${e}" is out of range.`; let i = r; return Number.isInteger(r) && Math.abs(r) > 2 ** 32 ? i = si(String(r)) : typeof r == 'bigint' && (i = String(r), (r > BigInt(2) ** BigInt(32) || r < -(BigInt(2) ** BigInt(32))) && (i = si(i)), i += 'n'), n += ` It must be ${t}. Received ${i}`, n }, RangeError); function si(e) { let t = ''; let r = e.length; const n = e[0] === '-' ? 1 : 0; for (;r >= n + 4; r -= 3)t = `_${e.slice(r - 3, r)}${t}`; return `${e.slice(0, r)}${t}` } function Va(e, t, r) { Xe(t, 'offset'), (e[t] === void 0 || e[t + r] === void 0) && vt(t, e.length - (r + 1)) } function bi(e, t, r, n, i, o) { if (e > r || e < t) { const s = typeof t == 'bigint' ? 'n' : ''; let a; throw o > 3 ? t === 0 || t === BigInt(0) ? a = `>= 0${s} and < 2${s} ** ${(o + 1) * 8}${s}` : a = `>= -(2${s} ** ${(o + 1) * 8 - 1}${s}) and < 2 ** ${(o + 1) * 8 - 1}${s}` : a = `>= ${t}${s} and <= ${r}${s}`, new Ye.ERR_OUT_OF_RANGE('value', a, e) }Va(n, i, o) } function Xe(e, t) {
    if (typeof e != 'number')
      throw new Ye.ERR_INVALID_ARG_TYPE(t, 'number', e)
  } function vt(e, t, r) { throw Math.floor(e) !== e ? (Xe(e, r), new Ye.ERR_OUT_OF_RANGE(r || 'offset', 'an integer', e)) : t < 0 ? new Ye.ERR_BUFFER_OUT_OF_BOUNDS() : new Ye.ERR_OUT_OF_RANGE(r || 'offset', `>= ${r ? 1 : 0} and <= ${t}`, e) } const Qa = /[^+/\w-]/g; function Ja(e) {
    if (e = e.split('=')[0], e = e.trim().replace(Qa, ''), e.length < 2)
      return ''; for (;e.length % 4 !== 0;)e = `${e}=`; return e
  } function Xr(e, t) {
    t = t || 1 / 0; let r; const n = e.length; let i = null; const o = []; for (let s = 0; s < n; ++s) {
      if (r = e.charCodeAt(s), r > 55295 && r < 57344) {
        if (!i) {
          if (r > 56319) { (t -= 3) > -1 && o.push(239, 191, 189); continue }
          else if (s + 1 === n) { (t -= 3) > -1 && o.push(239, 191, 189); continue }i = r; continue
        } if (r < 56320) { (t -= 3) > -1 && o.push(239, 191, 189), i = r; continue }r = (i - 55296 << 10 | r - 56320) + 65536
      }
      else {
        i && (t -= 3) > -1 && o.push(239, 191, 189)
      } if (i = null, r < 128) {
        if ((t -= 1) < 0)
          break; o.push(r)
      }
      else if (r < 2048) {
        if ((t -= 2) < 0)
          break; o.push(r >> 6 | 192, r & 63 | 128)
      }
      else if (r < 65536) {
        if ((t -= 3) < 0)
          break; o.push(r >> 12 | 224, r >> 6 & 63 | 128, r & 63 | 128)
      }
      else if (r < 1114112) {
        if ((t -= 4) < 0)
          break; o.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, r & 63 | 128)
      }
      else {
        throw new Error('Invalid code point')
      }
    } return o
  } function Ga(e) { const t = []; for (let r = 0; r < e.length; ++r)t.push(e.charCodeAt(r) & 255); return t } function Wa(e, t) { let r; let n; let i; const o = []; for (let s = 0; s < e.length && !((t -= 2) < 0); ++s)r = e.charCodeAt(s), n = r >> 8, i = r % 256, o.push(i), o.push(n); return o } function Ei(e) { return Yr.toByteArray(Ja(e)) } function rr(e, t, r, n) { let i; for (i = 0; i < n && !(i + r >= t.length || i >= e.length); ++i)t[i + r] = e[i]; return i } function ye(e, t) { return e instanceof t || e != null && e.constructor != null && e.constructor.name != null && e.constructor.name === t.name } function nn(e) { return e !== e } var Ka = (function () { const e = '0123456789abcdef'; const t = Array.from({ length: 256 }); for (let r = 0; r < 16; ++r) { const n = r * 16; for (let i = 0; i < 16; ++i)t[n + i] = e[r] + e[i] } return t }()); function Le(e) { return typeof BigInt > 'u' ? Ha : e } function Ha() { throw new Error('BigInt not supported') }
}); let w; var m = Fe(() => { 'use strict'; w = Re(xi()) }); function El() { return !1 } function Fi() { return { dev: 0, ino: 0, mode: 0, nlink: 0, uid: 0, gid: 0, rdev: 0, size: 0, blksize: 0, blocks: 0, atimeMs: 0, mtimeMs: 0, ctimeMs: 0, birthtimeMs: 0, atime: new Date(), mtime: new Date(), ctime: new Date(), birthtime: new Date() } } function xl() { return Fi() } function Pl() { return [] } function vl(e) { e(null, []) } function Tl() { return '' } function Cl() { return '' } function Al() {} function Sl() {} function Rl() {} function kl() {} function Ol() {} function Il() {} let Ml; let _l; let or; const fn = Fe(() => { 'use strict'; m(); c(); p(); d(); f(); Ml = {}, _l = { existsSync: El, lstatSync: Fi, statSync: xl, readdirSync: Pl, readdir: vl, readlinkSync: Tl, realpathSync: Cl, chmodSync: Al, renameSync: Sl, mkdirSync: Rl, rmdirSync: kl, rmSync: Ol, unlinkSync: Il, promises: Ml }, or = _l }); function Fl(...e) { return e.join('/') } function Ll(...e) { return e.join('/') } function Nl(e) { const t = Li(e); const r = Ni(e); const [n, i] = t.split('.'); return { root: '/', dir: r, base: t, ext: i, name: n } } function Li(e) { const t = e.split('/'); return t[t.length - 1] } function Ni(e) { return e.split('/').slice(0, -1).join('/') } let Di; let Dl; let $l; let we; const gn = Fe(() => { 'use strict'; m(); c(); p(); d(); f(); Di = '/', Dl = { sep: Di }, $l = { basename: Li, dirname: Ni, join: Ll, parse: Nl, posix: Dl, resolve: Fl, sep: Di }, we = $l }); const $i = he((sm, Bl) => { Bl.exports = { name: '@prisma/internals', version: '6.5.0', description: 'This package is intended for Prisma\'s internal use', main: 'dist/index.js', types: 'dist/index.d.ts', repository: { type: 'git', url: 'https://github.com/prisma/prisma.git', directory: 'packages/internals' }, homepage: 'https://www.prisma.io', author: 'Tim Suchanek <suchanek@prisma.io>', bugs: 'https://github.com/prisma/prisma/issues', license: 'Apache-2.0', scripts: { dev: 'DEV=true tsx helpers/build.ts', build: 'tsx helpers/build.ts', test: 'dotenv -e ../../.db.env -- jest --silent', prepublishOnly: 'pnpm run build' }, files: ['README.md', 'dist', '!**/libquery_engine*', '!dist/get-generators/engines/*', 'scripts'], devDependencies: { '@antfu/ni': '0.21.12', '@babel/helper-validator-identifier': '7.25.9', '@opentelemetry/api': '1.9.0', '@swc/core': '1.11.5', '@swc/jest': '0.2.37', '@types/babel__helper-validator-identifier': '7.15.2', '@types/jest': '29.5.14', '@types/node': '18.19.76', '@types/resolve': '1.20.6', 'archiver': '6.0.2', 'checkpoint-client': '1.1.33', 'cli-truncate': '4.0.0', 'dotenv': '16.4.7', 'esbuild': '0.24.2', 'escape-string-regexp': '4.0.0', 'execa': '5.1.1', 'fast-glob': '3.3.3', 'find-up': '7.0.0', 'fp-ts': '2.16.9', 'fs-extra': '11.3.0', 'fs-jetpack': '5.1.0', 'global-dirs': '4.0.0', 'globby': '11.1.0', 'identifier-regex': '1.0.0', 'indent-string': '4.0.0', 'is-windows': '1.0.2', 'is-wsl': '3.1.0', 'jest': '29.7.0', 'jest-junit': '16.0.0', 'kleur': '4.1.5', 'mock-stdin': '1.0.0', 'new-github-issue-url': '0.2.1', 'node-fetch': '3.3.2', 'npm-packlist': '5.1.3', 'open': '7.4.2', 'p-map': '4.0.0', 'read-package-up': '11.0.0', 'resolve': '1.22.10', 'string-width': '4.2.3', 'strip-ansi': '6.0.1', 'strip-indent': '3.0.0', 'temp-dir': '2.0.0', 'tempy': '1.0.1', 'terminal-link': '2.1.1', 'tmp': '0.2.3', 'ts-node': '10.9.2', 'ts-pattern': '5.6.2', 'ts-toolbelt': '9.6.0', 'typescript': '5.4.5', 'yarn': '1.22.22' }, dependencies: { '@prisma/config': 'workspace:*', '@prisma/debug': 'workspace:*', '@prisma/engines': 'workspace:*', '@prisma/fetch-engine': 'workspace:*', '@prisma/generator-helper': 'workspace:*', '@prisma/get-platform': 'workspace:*', '@prisma/prisma-schema-wasm': '6.5.0-73.173f8d54f8d52e692c7e27e72a88314ec7aeff60', '@prisma/schema-files-loader': 'workspace:*', 'arg': '5.0.2', 'prompts': '2.4.2' }, peerDependencies: { typescript: '>=5.1.0' }, peerDependenciesMeta: { typescript: { optional: !0 } }, sideEffects: !1 } }); const qi = he((bm, ji) => { 'use strict'; m(); c(); p(); d(); f(); ji.exports = (e) => { const t = e.match(/^[ \t]*(?=\S)/gm); return t ? t.reduce((r, n) => Math.min(r, n.length), 1 / 0) : 0 } }); const Vi = he((Cm, Ui) => {
  'use strict'; m(); c(); p(); d(); f(); const Ul = qi(); Ui.exports = (e) => {
    const t = Ul(e); if (t === 0)
      return e; const r = new RegExp(`^[ \\t]{${t}}`, 'gm'); return e.replace(r, '')
  }
}); let sr; const Gi = Fe(() => { 'use strict'; m(); c(); p(); d(); f(); sr = class {events = {}; on(t, r) { return this.events[t] || (this.events[t] = []), this.events[t].push(r), this }emit(t, ...r) { return this.events[t] ? (this.events[t].forEach((n) => { n(...r) }), !0) : !1 }} }); const Ki = he((cg, Wi) => {
  'use strict'; m(); c(); p(); d(); f(); Wi.exports = (e, t = 1, r) => {
    if (r = { indent: ' ', includeEmptyLines: !1, ...r }, typeof e != 'string')
      throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof e}\``); if (typeof t != 'number')
      throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof t}\``); if (typeof r.indent != 'string')
      throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof r.indent}\``); if (t === 0)
      return e; const n = r.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm; return e.replace(n, r.indent.repeat(t))
  }
}); const Yi = he((Pg, zi) => { 'use strict'; m(); c(); p(); d(); f(); zi.exports = ({ onlyFirst: e = !1 } = {}) => { const t = ['[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)', '(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))'].join('|'); return new RegExp(t, e ? void 0 : 'g') } }); const En = he((Rg, Zi) => { 'use strict'; m(); c(); p(); d(); f(); const Wl = Yi(); Zi.exports = e => typeof e == 'string' ? e.replace(Wl(), '') : e }); const Xi = he((Gg, lr) => {
  'use strict'; m(); c(); p(); d(); f(); lr.exports = (e = {}) => {
    let t; if (e.repoUrl)
      t = e.repoUrl; else if (e.user && e.repo)
      t = `https://github.com/${e.user}/${e.repo}`; else throw new Error('You need to specify either the `repoUrl` option or both the `user` and `repo` options'); const r = new URL(`${t}/issues/new`); const n = ['body', 'title', 'labels', 'template', 'milestone', 'assignee', 'projects']; for (const i of n) {
      let o = e[i]; if (o !== void 0) {
        if (i === 'labels' || i === 'projects') {
          if (!Array.isArray(o))
            throw new TypeError(`The \`${i}\` option should be an array`); o = o.join(',')
        }r.searchParams.set(i, o)
      }
    } return r.toString()
  }; lr.exports.default = lr.exports
}); const kn = he((mb, Po) => {
  'use strict'; m(); c(); p(); d(); f(); Po.exports = (function () {
    function e(t, r, n, i, o) { return t < r || n < r ? t > n ? n + 1 : t + 1 : i === o ? r : r + 1 } return function (t, r) {
      if (t === r)
        return 0; if (t.length > r.length) { const n = t; t = r, r = n } for (var i = t.length, o = r.length; i > 0 && t.charCodeAt(i - 1) === r.charCodeAt(o - 1);)i--, o--; for (var s = 0; s < i && t.charCodeAt(s) === r.charCodeAt(s);)s++; if (i -= s, o -= s, i === 0 || o < 3)
        return o; let a = 0; let l; let u; let g; let h; let v; let R; let C; let A; let O; let _; let L; let I; const D = []; for (l = 0; l < i; l++)D.push(l + 1), D.push(t.charCodeAt(s + l)); for (var $ = D.length - 1; a < o - 3;) {
        for (O = r.charCodeAt(s + (u = a)), _ = r.charCodeAt(s + (g = a + 1)), L = r.charCodeAt(s + (h = a + 2)), I = r.charCodeAt(s + (v = a + 3)), R = a += 4, l = 0; l < $; l += 2)C = D[l], A = D[l + 1], u = e(C, u, g, O, A), g = e(u, g, h, _, A), h = e(g, h, v, L, A), R = e(h, v, R, I, A), D[l] = R, v = h, h = g, g = u, u = C
      } for (;a < o;) {
        for (O = r.charCodeAt(s + (u = a)), R = ++a, l = 0; l < $; l += 2)C = D[l], D[l] = R = e(C, u, R, O, D[l + 1]), u = C
      } return R
    }
  }())
}); const Zo = he((zx, Bc) => { Bc.exports = { name: '@prisma/engines-version', version: '6.5.0-73.173f8d54f8d52e692c7e27e72a88314ec7aeff60', main: 'index.js', types: 'index.d.ts', license: 'Apache-2.0', author: 'Tim Suchanek <suchanek@prisma.io>', prisma: { enginesVersion: '173f8d54f8d52e692c7e27e72a88314ec7aeff60' }, repository: { type: 'git', url: 'https://github.com/prisma/engines-wrapper.git', directory: 'packages/engines-version' }, devDependencies: { '@types/node': '18.19.76', 'typescript': '4.9.5' }, files: ['index.js', 'index.d.ts'], scripts: { build: 'tsc -d' } } }); const rd = {}; Pt(rd, { Debug: () => dn, Decimal: () => xe, Extensions: () => on, MetricsClient: () => ht, PrismaClientInitializationError: () => Q, PrismaClientKnownRequestError: () => ie, PrismaClientRustPanicError: () => ue, PrismaClientUnknownRequestError: () => G, PrismaClientValidationError: () => X, Public: () => sn, Sql: () => se, createParam: () => Vo, defineDmmfProperty: () => zo, deserializeJsonResponse: () => ot, deserializeRawResult: () => Kr, dmmfToRuntimeDataModel: () => Ho, empty: () => es, getPrismaClient: () => ma, getRuntime: () => Is, join: () => Xo, makeStrictEnum: () => ga, makeTypedQueryFactory: () => Yo, objectEnumValues: () => Sr, raw: () => $n, serializeJsonQuery: () => Fr, skip: () => _r, sqltag: () => Bn, warnEnvConflicts: () => void 0, warnOnce: () => Ft }); module.exports = Pa(rd); m(); c(); p(); d(); f(); var on = {}; Pt(on, { defineExtension: () => Pi, getExtensionContext: () => vi }); m(); c(); p(); d(); f(); m(); c(); p(); d(); f(); function Pi(e) { return typeof e == 'function' ? e : t => t.$extends(e) }m(); c(); p(); d(); f(); function vi(e) { return e } var sn = {}; Pt(sn, { validator: () => Ti }); m(); c(); p(); d(); f(); m(); c(); p(); d(); f(); function Ti(...e) { return t => t }m(); c(); p(); d(); f(); m(); c(); p(); d(); f(); m(); c(); p(); d(); f(); m(); c(); p(); d(); f(); m(); c(); p(); d(); f(); function an(e) { return e.name === 'DriverAdapterError' && typeof e.cause == 'object' }m(); c(); p(); d(); f(); function nr(e) { return { ok: !0, value: e, map(t) { return nr(t(e)) }, flatMap(t) { return t(e) } } } function Qe(e) { return { ok: !1, error: e, map() { return Qe(e) }, flatMap() { return Qe(e) } } } const ln = class {registeredErrors = []; consumeError(t) { return this.registeredErrors[t] }registerNewError(t) { let r = 0; for (;this.registeredErrors[r] !== void 0;)r++; return this.registeredErrors[r] = { error: t }, r }}; function un(e) { const t = new ln(); const r = pe(t, e.transactionContext.bind(e)); const n = { adapterName: e.adapterName, errorRegistry: t, queryRaw: pe(t, e.queryRaw.bind(e)), executeRaw: pe(t, e.executeRaw.bind(e)), executeScript: pe(t, e.executeScript.bind(e)), dispose: pe(t, e.dispose.bind(e)), provider: e.provider, transactionContext: async (...i) => (await r(...i)).map(s => za(t, s)) }; return e.getConnectionInfo && (n.getConnectionInfo = Za(t, e.getConnectionInfo.bind(e))), n } var za = (e, t) => { const r = pe(e, t.startTransaction.bind(t)); return { adapterName: t.adapterName, provider: t.provider, queryRaw: pe(e, t.queryRaw.bind(t)), executeRaw: pe(e, t.executeRaw.bind(t)), startTransaction: async (...n) => (await r(...n)).map(o => Ya(e, o)) } }; var Ya = (e, t) => ({ adapterName: t.adapterName, provider: t.provider, options: t.options, queryRaw: pe(e, t.queryRaw.bind(t)), executeRaw: pe(e, t.executeRaw.bind(t)), commit: pe(e, t.commit.bind(t)), rollback: pe(e, t.rollback.bind(t)) }); function pe(e, t) {
  return async (...r) => {
    try { return nr(await t(...r)) }
    catch (n) {
      if (an(n))
        return Qe(n.cause); const i = e.registerNewError(n); return Qe({ kind: 'GenericJs', id: i })
    }
  }
} function Za(e, t) {
  return (...r) => {
    try { return nr(t(...r)) }
    catch (n) {
      if (an(n))
        return Qe(n.cause); const i = e.registerNewError(n); return Qe({ kind: 'GenericJs', id: i })
    }
  }
}m(); c(); p(); d(); f(); const ir = {}; Pt(ir, { $: () => ki, bgBlack: () => ll, bgBlue: () => dl, bgCyan: () => ml, bgGreen: () => cl, bgMagenta: () => fl, bgRed: () => ul, bgWhite: () => gl, bgYellow: () => pl, black: () => il, blue: () => Ge, bold: () => de, cyan: () => Oe, dim: () => Tt, gray: () => Rt, green: () => At, grey: () => al, hidden: () => rl, inverse: () => tl, italic: () => el, magenta: () => ol, red: () => Je, reset: () => Xa, strikethrough: () => nl, underline: () => Ct, white: () => sl, yellow: () => St }); m(); c(); p(); d(); f(); let cn; let Ci; let Ai; let Si; let Ri = !0; typeof y < 'u' && ({ FORCE_COLOR: cn, NODE_DISABLE_COLORS: Ci, NO_COLOR: Ai, TERM: Si } = y.env || {}, Ri = y.stdout && y.stdout.isTTY); var ki = { enabled: !Ci && Ai == null && Si !== 'dumb' && (cn != null && cn !== '0' || Ri) }; function V(e, t) { const r = new RegExp(`\\x1b\\[${t}m`, 'g'); const n = `\x1B[${e}m`; const i = `\x1B[${t}m`; return function (o) { return !ki.enabled || o == null ? o : n + (~(`${o}`).indexOf(i) ? o.replace(r, i + n) : o) + i } } var Xa = V(0, 0); var de = V(1, 22); var Tt = V(2, 22); var el = V(3, 23); var Ct = V(4, 24); var tl = V(7, 27); var rl = V(8, 28); var nl = V(9, 29); var il = V(30, 39); var Je = V(31, 39); var At = V(32, 39); var St = V(33, 39); var Ge = V(34, 39); var ol = V(35, 39); var Oe = V(36, 39); var sl = V(37, 39); var Rt = V(90, 39); var al = V(90, 39); var ll = V(40, 49); var ul = V(41, 49); var cl = V(42, 49); var pl = V(43, 49); var dl = V(44, 49); var fl = V(45, 49); var ml = V(46, 49); var gl = V(47, 49); const hl = 100; const Oi = ['green', 'yellow', 'blue', 'magenta', 'cyan', 'red']; const kt = []; let Ii = Date.now(); let yl = 0; const pn = typeof y < 'u' ? y.env : {}; globalThis.DEBUG ??= pn.DEBUG ?? ''; globalThis.DEBUG_COLORS ??= pn.DEBUG_COLORS ? pn.DEBUG_COLORS === 'true' : !0; const Ot = { enable(e) { typeof e == 'string' && (globalThis.DEBUG = e) }, disable() { const e = globalThis.DEBUG; return globalThis.DEBUG = '', e }, enabled(e) { const t = globalThis.DEBUG.split(',').map(i => i.replace(/[.+?^${}()|[\]\\]/g, '\\$&')); const r = t.some(i => i === '' || i[0] === '-' ? !1 : e.match(new RegExp(`${i.split('*').join('.*')}$`))); const n = t.some(i => i === '' || i[0] !== '-' ? !1 : e.match(new RegExp(`${i.slice(1).split('*').join('.*')}$`))); return r && !n }, log: (...e) => { const [t, r, ...n] = e; (console.warn ?? console.log)(`${t} ${r}`, ...n) }, formatters: {} }; function wl(e) { const t = { color: Oi[yl++ % Oi.length], enabled: Ot.enabled(e), namespace: e, log: Ot.log, extend: () => {} }; const r = (...n) => { const { enabled: i, namespace: o, color: s, log: a } = t; if (n.length !== 0 && kt.push([o, ...n]), kt.length > hl && kt.shift(), Ot.enabled(o) || i) { const l = n.map(g => typeof g == 'string' ? g : bl(g)); const u = `+${Date.now() - Ii}ms`; Ii = Date.now(), globalThis.DEBUG_COLORS ? a(ir[s](de(o)), ...l, ir[s](u)) : a(o, ...l, u) } }; return new Proxy(r, { get: (n, i) => t[i], set: (n, i, o) => t[i] = o }) } var dn = new Proxy(wl, { get: (e, t) => Ot[t], set: (e, t, r) => Ot[t] = r }); function bl(e, t = 2) {
  const r = new Set(); return JSON.stringify(e, (n, i) => {
    if (typeof i == 'object' && i !== null) {
      if (r.has(i))
        return '[Circular *]'; r.add(i)
    }
    else if (typeof i == 'bigint') {
      return i.toString()
    } return i
  }, t)
} function Mi(e = 7500) {
  const t = kt.map(([r, ...n]) => `${r} ${n.map(i => typeof i == 'string' ? i : JSON.stringify(i)).join(' ')}`).join(`
`); return t.length < e ? t : t.slice(-e)
} function _i() { kt.length = 0 } const ae = dn; m(); c(); p(); d(); f(); m(); c(); p(); d(); f(); const mn = ['darwin', 'darwin-arm64', 'debian-openssl-1.0.x', 'debian-openssl-1.1.x', 'debian-openssl-3.0.x', 'rhel-openssl-1.0.x', 'rhel-openssl-1.1.x', 'rhel-openssl-3.0.x', 'linux-arm64-openssl-1.1.x', 'linux-arm64-openssl-1.0.x', 'linux-arm64-openssl-3.0.x', 'linux-arm-openssl-1.1.x', 'linux-arm-openssl-1.0.x', 'linux-arm-openssl-3.0.x', 'linux-musl', 'linux-musl-openssl-3.0.x', 'linux-musl-arm64-openssl-1.1.x', 'linux-musl-arm64-openssl-3.0.x', 'linux-nixos', 'linux-static-x64', 'linux-static-arm64', 'windows', 'freebsd11', 'freebsd12', 'freebsd13', 'freebsd14', 'freebsd15', 'openbsd', 'netbsd', 'arm']; m(); c(); p(); d(); f(); const jl = $i(); const hn = jl.version; m(); c(); p(); d(); f(); const Bi = 'library'; function tt(e) { const t = ql(); return t || (e?.config.engineType === 'library' ? 'library' : e?.config.engineType === 'binary' ? 'binary' : e?.config.engineType === 'client' ? 'client' : Bi) } function ql() { const e = y.env.PRISMA_CLIENT_ENGINE_TYPE; return e === 'library' ? 'library' : e === 'binary' ? 'binary' : e === 'client' ? 'client' : void 0 }m(); c(); p(); d(); f(); const Qi = 'prisma+postgres'; const Ji = `${Qi}:`; function yn(e) { return e?.startsWith(`${Ji}//`) ?? !1 }m(); c(); p(); d(); f(); m(); c(); p(); d(); f(); let It; ((t) => { let e; ($ => ($.findUnique = 'findUnique', $.findUniqueOrThrow = 'findUniqueOrThrow', $.findFirst = 'findFirst', $.findFirstOrThrow = 'findFirstOrThrow', $.findMany = 'findMany', $.create = 'create', $.createMany = 'createMany', $.createManyAndReturn = 'createManyAndReturn', $.update = 'update', $.updateMany = 'updateMany', $.updateManyAndReturn = 'updateManyAndReturn', $.upsert = 'upsert', $.delete = 'delete', $.deleteMany = 'deleteMany', $.groupBy = 'groupBy', $.count = 'count', $.aggregate = 'aggregate', $.findRaw = 'findRaw', $.aggregateRaw = 'aggregateRaw'))(e = t.ModelAction ||= {}) })(It ||= {}); m(); c(); p(); d(); f(); gn(); function wn(e) { return we.sep === we.posix.sep ? e : e.split(we.sep).join(we.posix.sep) } const _t = {}; Pt(_t, { error: () => Jl, info: () => Ql, log: () => Vl, query: () => Gl, should: () => Hi, tags: () => Mt, warn: () => bn }); m(); c(); p(); d(); f(); var Mt = { error: Je('prisma:error'), warn: St('prisma:warn'), info: Oe('prisma:info'), query: Ge('prisma:query') }; var Hi = { warn: () => !y.env.PRISMA_DISABLE_WARNINGS }; function Vl(...e) { console.log(...e) } function bn(e, ...t) { Hi.warn() && console.warn(`${Mt.warn} ${e}`, ...t) } function Ql(e, ...t) { console.info(`${Mt.info} ${e}`, ...t) } function Jl(e, ...t) { console.error(`${Mt.error} ${e}`, ...t) } function Gl(e, ...t) { console.log(`${Mt.query} ${e}`, ...t) }m(); c(); p(); d(); f(); function ar(e, t) {
  if (!e)
    throw new Error(`${t}. This should never happen. If you see this error, please, open an issue at https://pris.ly/prisma-prisma-bug-report`)
}m(); c(); p(); d(); f(); function Ie(e, t) { throw new Error(t) }m(); c(); p(); d(); f(); function xn(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }m(); c(); p(); d(); f(); const Pn = (e, t) => e.reduce((r, n) => (r[t(n)] = n, r), {}); m(); c(); p(); d(); f(); function rt(e, t) { const r = {}; for (const n of Object.keys(e))r[n] = t(e[n], n); return r }m(); c(); p(); d(); f(); function vn(e, t) {
  if (e.length === 0)
    return; let r = e[0]; for (let n = 1; n < e.length; n++)t(r, e[n]) < 0 && (r = e[n]); return r
}m(); c(); p(); d(); f(); function le(e, t) { Object.defineProperty(e, 'name', { value: t, configurable: !0 }) }m(); c(); p(); d(); f(); const eo = new Set(); var Ft = (e, t, ...r) => { eo.has(e) || (eo.add(e), bn(t, ...r)) }; var Q = class e extends Error {clientVersion; errorCode; retryable; constructor(t, r, n) { super(t), this.name = 'PrismaClientInitializationError', this.clientVersion = r, this.errorCode = n, Error.captureStackTrace(e) } get [Symbol.toStringTag]() { return 'PrismaClientInitializationError' }}; le(Q, 'PrismaClientInitializationError'); m(); c(); p(); d(); f(); var ie = class extends Error {code; meta; clientVersion; batchRequestIdx; constructor(t, { code: r, clientVersion: n, meta: i, batchRequestIdx: o }) { super(t), this.name = 'PrismaClientKnownRequestError', this.code = r, this.clientVersion = n, this.meta = i, Object.defineProperty(this, 'batchRequestIdx', { value: o, enumerable: !1, writable: !0 }) } get [Symbol.toStringTag]() { return 'PrismaClientKnownRequestError' }}; le(ie, 'PrismaClientKnownRequestError'); m(); c(); p(); d(); f(); var ue = class extends Error {clientVersion; constructor(t, r) { super(t), this.name = 'PrismaClientRustPanicError', this.clientVersion = r } get [Symbol.toStringTag]() { return 'PrismaClientRustPanicError' }}; le(ue, 'PrismaClientRustPanicError'); m(); c(); p(); d(); f(); var G = class extends Error {clientVersion; batchRequestIdx; constructor(t, { clientVersion: r, batchRequestIdx: n }) { super(t), this.name = 'PrismaClientUnknownRequestError', this.clientVersion = r, Object.defineProperty(this, 'batchRequestIdx', { value: n, writable: !0, enumerable: !1 }) } get [Symbol.toStringTag]() { return 'PrismaClientUnknownRequestError' }}; le(G, 'PrismaClientUnknownRequestError'); m(); c(); p(); d(); f(); var X = class extends Error {name = 'PrismaClientValidationError'; clientVersion; constructor(t, { clientVersion: r }) { super(t), this.clientVersion = r } get [Symbol.toStringTag]() { return 'PrismaClientValidationError' }}; le(X, 'PrismaClientValidationError'); m(); c(); p(); d(); f(); m(); c(); p(); d(); f(); const nt = 9e15; const Be = 1e9; const Tn = '0123456789abcdef'; let pr = '2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058'; let dr = '3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789'; const Cn = { precision: 20, rounding: 4, modulo: 1, toExpNeg: -7, toExpPos: 21, minE: -nt, maxE: nt, crypto: !1 }; let oo; let Me; let F = !0; const mr = '[DecimalError] '; const $e = `${mr}Invalid argument: `; const so = `${mr}Precision limit exceeded`; const ao = `${mr}crypto unavailable`; const lo = '[object Decimal]'; const ee = Math.floor; const W = Math.pow; const Kl = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i; const Hl = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i; const zl = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i; const uo = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i; const fe = 1e7; const M = 7; const Yl = 9007199254740991; const Zl = pr.length - 1; const An = dr.length - 1; const S = { toStringTag: lo }; S.absoluteValue = S.abs = function () { const e = new this.constructor(this); return e.s < 0 && (e.s = 1), k(e) }; S.ceil = function () { return k(new this.constructor(this), this.e + 1, 2) }; S.clampedTo = S.clamp = function (e, t) {
  let r; const n = this; const i = n.constructor; if (e = new i(e), t = new i(t), !e.s || !t.s)
    return new i(Number.NaN); if (e.gt(t))
    throw new Error($e + t); return r = n.cmp(e), r < 0 ? e : n.cmp(t) > 0 ? t : new i(n)
}; S.comparedTo = S.cmp = function (e) {
  let t; let r; let n; let i; const o = this; const s = o.d; const a = (e = new o.constructor(e)).d; const l = o.s; const u = e.s; if (!s || !a)
    return !l || !u ? Number.NaN : l !== u ? l : s === a ? 0 : !s ^ l < 0 ? 1 : -1; if (!s[0] || !a[0])
    return s[0] ? l : a[0] ? -u : 0; if (l !== u)
    return l; if (o.e !== e.e)
    return o.e > e.e ^ l < 0 ? 1 : -1; for (n = s.length, i = a.length, t = 0, r = n < i ? n : i; t < r; ++t) {
    if (s[t] !== a[t])
      return s[t] > a[t] ^ l < 0 ? 1 : -1
  } return n === i ? 0 : n > i ^ l < 0 ? 1 : -1
}; S.cosine = S.cos = function () { let e; let t; let r = this; const n = r.constructor; return r.d ? r.d[0] ? (e = n.precision, t = n.rounding, n.precision = e + Math.max(r.e, r.sd()) + M, n.rounding = 1, r = Xl(n, go(n, r)), n.precision = e, n.rounding = t, k(Me == 2 || Me == 3 ? r.neg() : r, e, t, !0)) : new n(1) : new n(Number.NaN) }; S.cubeRoot = S.cbrt = function () {
  let e; let t; let r; let n; let i; let o; let s; let a; let l; let u; const g = this; const h = g.constructor; if (!g.isFinite() || g.isZero())
    return new h(g); for (F = !1, o = g.s * (g.s * g) ** (1 / 3), !o || Math.abs(o) == 1 / 0 ? (r = z(g.d), e = g.e, (o = (e - r.length + 1) % 3) && (r += o == 1 || o == -2 ? '0' : '00'), o = r ** (1 / 3), e = ee((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), o == 1 / 0 ? r = `5e${e}` : (r = o.toExponential(), r = r.slice(0, r.indexOf('e') + 1) + e), n = new h(r), n.s = g.s) : n = new h(o.toString()), s = (e = h.precision) + 3; ;) {
    if (a = n, l = a.times(a).times(a), u = l.plus(g), n = q(u.plus(g).times(a), u.plus(l), s + 2, 1), z(a.d).slice(0, s) === (r = z(n.d)).slice(0, s)) {
      if (r = r.slice(s - 3, s + 1), r == '9999' || !i && r == '4999') { if (!i && (k(a, e + 1, 0), a.times(a).times(a).eq(g))) { n = a; break }s += 4, i = 1 }
      else { (!+r || !+r.slice(1) && r.charAt(0) == '5') && (k(n, e + 1, 1), t = !n.times(n).times(n).eq(g)); break }
    }
  } return F = !0, k(n, e, h.rounding, t)
}; S.decimalPlaces = S.dp = function () {
  let e; const t = this.d; let r = Number.NaN; if (t) {
    if (e = t.length - 1, r = (e - ee(this.e / M)) * M, e = t[e], e) {
      for (;e % 10 == 0; e /= 10)r--
    } r < 0 && (r = 0)
  } return r
}; S.dividedBy = S.div = function (e) { return q(this, new this.constructor(e)) }; S.dividedToIntegerBy = S.divToInt = function (e) { const t = this; const r = t.constructor; return k(q(t, new r(e), 0, 1, 1), r.precision, r.rounding) }; S.equals = S.eq = function (e) { return this.cmp(e) === 0 }; S.floor = function () { return k(new this.constructor(this), this.e + 1, 3) }; S.greaterThan = S.gt = function (e) { return this.cmp(e) > 0 }; S.greaterThanOrEqualTo = S.gte = function (e) { const t = this.cmp(e); return t == 1 || t === 0 }; S.hyperbolicCosine = S.cosh = function () {
  let e; let t; let r; let n; let i; let o = this; const s = o.constructor; const a = new s(1); if (!o.isFinite())
    return new s(o.s ? 1 / 0 : Number.NaN); if (o.isZero())
    return a; r = s.precision, n = s.rounding, s.precision = r + Math.max(o.e, o.sd()) + 4, s.rounding = 1, i = o.d.length, i < 32 ? (e = Math.ceil(i / 3), t = (1 / hr(4, e)).toString()) : (e = 16, t = '2.3283064365386962890625e-10'), o = it(s, 1, o.times(t), new s(1), !0); for (var l, u = e, g = new s(8); u--;)l = o.times(o), o = a.minus(l.times(g.minus(l.times(g)))); return k(o, s.precision = r, s.rounding = n, !0)
}; S.hyperbolicSine = S.sinh = function () {
  let e; let t; let r; let n; let i = this; const o = i.constructor; if (!i.isFinite() || i.isZero())
    return new o(i); if (t = o.precision, r = o.rounding, o.precision = t + Math.max(i.e, i.sd()) + 4, o.rounding = 1, n = i.d.length, n < 3) {
    i = it(o, 2, i, i, !0)
  }
  else { e = 1.4 * Math.sqrt(n), e = e > 16 ? 16 : e | 0, i = i.times(1 / hr(5, e)), i = it(o, 2, i, i, !0); for (var s, a = new o(5), l = new o(16), u = new o(20); e--;)s = i.times(i), i = i.times(a.plus(s.times(l.times(s).plus(u)))) } return o.precision = t, o.rounding = r, k(i, t, r, !0)
}; S.hyperbolicTangent = S.tanh = function () { let e; let t; const r = this; const n = r.constructor; return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 7, n.rounding = 1, q(r.sinh(), r.cosh(), n.precision = e, n.rounding = t)) : new n(r.s) }; S.inverseCosine = S.acos = function () { let e = this; const t = e.constructor; const r = e.abs().cmp(1); const n = t.precision; const i = t.rounding; return r !== -1 ? r === 0 ? e.isNeg() ? be(t, n, i) : new t(0) : new t(Number.NaN) : e.isZero() ? be(t, n + 4, i).times(0.5) : (t.precision = n + 6, t.rounding = 1, e = new t(1).minus(e).div(e.plus(1)).sqrt().atan(), t.precision = n, t.rounding = i, e.times(2)) }; S.inverseHyperbolicCosine = S.acosh = function () { let e; let t; let r = this; const n = r.constructor; return r.lte(1) ? new n(r.eq(1) ? 0 : Number.NaN) : r.isFinite() ? (e = n.precision, t = n.rounding, n.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4, n.rounding = 1, F = !1, r = r.times(r).minus(1).sqrt().plus(r), F = !0, n.precision = e, n.rounding = t, r.ln()) : new n(r) }; S.inverseHyperbolicSine = S.asinh = function () { let e; let t; let r = this; const n = r.constructor; return !r.isFinite() || r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6, n.rounding = 1, F = !1, r = r.times(r).plus(1).sqrt().plus(r), F = !0, n.precision = e, n.rounding = t, r.ln()) }; S.inverseHyperbolicTangent = S.atanh = function () { let e; let t; let r; let n; let i = this; const o = i.constructor; return i.isFinite() ? i.e >= 0 ? new o(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : Number.NaN) : (e = o.precision, t = o.rounding, n = i.sd(), Math.max(n, e) < 2 * -i.e - 1 ? k(new o(i), e, t, !0) : (o.precision = r = n - i.e, i = q(i.plus(1), new o(1).minus(i), r + e, 1), o.precision = e + 4, o.rounding = 1, i = i.ln(), o.precision = e, o.rounding = t, i.times(0.5))) : new o(Number.NaN) }; S.inverseSine = S.asin = function () { let e; let t; let r; let n; let i = this; const o = i.constructor; return i.isZero() ? new o(i) : (t = i.abs().cmp(1), r = o.precision, n = o.rounding, t !== -1 ? t === 0 ? (e = be(o, r + 4, n).times(0.5), e.s = i.s, e) : new o(Number.NaN) : (o.precision = r + 6, o.rounding = 1, i = i.div(new o(1).minus(i.times(i)).sqrt().plus(1)).atan(), o.precision = r, o.rounding = n, i.times(2))) }; S.inverseTangent = S.atan = function () {
  let e; let t; let r; let n; let i; let o; let s; let a; let l; let u = this; const g = u.constructor; const h = g.precision; const v = g.rounding; if (u.isFinite()) {
    if (u.isZero())
      return new g(u); if (u.abs().eq(1) && h + 4 <= An)
      return s = be(g, h + 4, v).times(0.25), s.s = u.s, s
  }
  else {
    if (!u.s)
      return new g(Number.NaN); if (h + 4 <= An)
      return s = be(g, h + 4, v).times(0.5), s.s = u.s, s
  } for (g.precision = a = h + 10, g.rounding = 1, r = Math.min(28, a / M + 2 | 0), e = r; e; --e)u = u.div(u.times(u).plus(1).sqrt().plus(1)); for (F = !1, t = Math.ceil(a / M), n = 1, l = u.times(u), s = new g(u), i = u; e !== -1;) {
    if (i = i.times(l), o = s.minus(i.div(n += 2)), i = i.times(l), s = o.plus(i.div(n += 2)), s.d[t] !== void 0) {
      for (e = t; s.d[e] === o.d[e] && e--;);
    }
  } return r && (s = s.times(2 << r - 1)), F = !0, k(s, g.precision = h, g.rounding = v, !0)
}; S.isFinite = function () { return !!this.d }; S.isInteger = S.isInt = function () { return !!this.d && ee(this.e / M) > this.d.length - 2 }; S.isNaN = function () { return !this.s }; S.isNegative = S.isNeg = function () { return this.s < 0 }; S.isPositive = S.isPos = function () { return this.s > 0 }; S.isZero = function () { return !!this.d && this.d[0] === 0 }; S.lessThan = S.lt = function (e) { return this.cmp(e) < 0 }; S.lessThanOrEqualTo = S.lte = function (e) { return this.cmp(e) < 1 }; S.logarithm = S.log = function (e) {
  let t; let r; let n; let i; let o; let s; let a; let l; const u = this; const g = u.constructor; const h = g.precision; const v = g.rounding; const R = 5; if (e == null) {
    e = new g(10), t = !0
  }
  else {
    if (e = new g(e), r = e.d, e.s < 0 || !r || !r[0] || e.eq(1))
      return new g(Number.NaN); t = e.eq(10)
  } if (r = u.d, u.s < 0 || !r || !r[0] || u.eq(1))
    return new g(r && !r[0] ? -1 / 0 : u.s != 1 ? Number.NaN : r ? 0 : 1 / 0); if (t) {
    if (r.length > 1) {
      o = !0
    }
    else { for (i = r[0]; i % 10 === 0;)i /= 10; o = i !== 1 }
  } if (F = !1, a = h + R, s = De(u, a), n = t ? fr(g, a + 10) : De(e, a), l = q(s, n, a, 1), Lt(l.d, i = h, v)) {
    do {
      if (a += 10, s = De(u, a), n = t ? fr(g, a + 10) : De(e, a), l = q(s, n, a, 1), !o) { +z(l.d).slice(i + 1, i + 15) + 1 == 1e14 && (l = k(l, h + 1, 0)); break }
    } while (Lt(l.d, i += 10, v))
  } return F = !0, k(l, h, v)
}; S.minus = S.sub = function (e) {
  let t; let r; let n; let i; let o; let s; let a; let l; let u; let g; let h; let v; const R = this; const C = R.constructor; if (e = new C(e), !R.d || !e.d)
    return !R.s || !e.s ? e = new C(Number.NaN) : R.d ? e.s = -e.s : e = new C(e.d || R.s !== e.s ? R : Number.NaN), e; if (R.s != e.s)
    return e.s = -e.s, R.plus(e); if (u = R.d, v = e.d, a = C.precision, l = C.rounding, !u[0] || !v[0]) {
    if (v[0])
      e.s = -e.s; else if (u[0])
      e = new C(R); else return new C(l === 3 ? -0 : 0); return F ? k(e, a, l) : e
  } if (r = ee(e.e / M), g = ee(R.e / M), u = u.slice(), o = g - r, o) { for (h = o < 0, h ? (t = u, o = -o, s = v.length) : (t = v, r = g, s = u.length), n = Math.max(Math.ceil(a / M), s) + 2, o > n && (o = n, t.length = 1), t.reverse(), n = o; n--;)t.push(0); t.reverse() }
  else {
    for (n = u.length, s = v.length, h = n < s, h && (s = n), n = 0; n < s; n++) {
      if (u[n] != v[n]) { h = u[n] < v[n]; break }
    }o = 0
  } for (h && (t = u, u = v, v = t, e.s = -e.s), s = u.length, n = v.length - s; n > 0; --n)u[s++] = 0; for (n = v.length; n > o;) { if (u[--n] < v[n]) { for (i = n; i && u[--i] === 0;)u[i] = fe - 1; --u[i], u[n] += fe }u[n] -= v[n] } for (;u[--s] === 0;)u.pop(); for (;u[0] === 0; u.shift())--r; return u[0] ? (e.d = u, e.e = gr(u, r), F ? k(e, a, l) : e) : new C(l === 3 ? -0 : 0)
}; S.modulo = S.mod = function (e) { let t; const r = this; const n = r.constructor; return e = new n(e), !r.d || !e.s || e.d && !e.d[0] ? new n(Number.NaN) : !e.d || r.d && !r.d[0] ? k(new n(r), n.precision, n.rounding) : (F = !1, n.modulo == 9 ? (t = q(r, e.abs(), 0, 3, 1), t.s *= e.s) : t = q(r, e, 0, n.modulo, 1), t = t.times(e), F = !0, r.minus(t)) }; S.naturalExponential = S.exp = function () { return Sn(this) }; S.naturalLogarithm = S.ln = function () { return De(this) }; S.negated = S.neg = function () { const e = new this.constructor(this); return e.s = -e.s, k(e) }; S.plus = S.add = function (e) {
  let t; let r; let n; let i; let o; let s; let a; let l; let u; let g; const h = this; const v = h.constructor; if (e = new v(e), !h.d || !e.d)
    return !h.s || !e.s ? e = new v(Number.NaN) : h.d || (e = new v(e.d || h.s === e.s ? h : Number.NaN)), e; if (h.s != e.s)
    return e.s = -e.s, h.minus(e); if (u = h.d, g = e.d, a = v.precision, l = v.rounding, !u[0] || !g[0])
    return g[0] || (e = new v(h)), F ? k(e, a, l) : e; if (o = ee(h.e / M), n = ee(e.e / M), u = u.slice(), i = o - n, i) { for (i < 0 ? (r = u, i = -i, s = g.length) : (r = g, n = o, s = u.length), o = Math.ceil(a / M), s = o > s ? o + 1 : s + 1, i > s && (i = s, r.length = 1), r.reverse(); i--;)r.push(0); r.reverse() } for (s = u.length, i = g.length, s - i < 0 && (i = s, r = g, g = u, u = r), t = 0; i;)t = (u[--i] = u[i] + g[i] + t) / fe | 0, u[i] %= fe; for (t && (u.unshift(t), ++n), s = u.length; u[--s] == 0;)u.pop(); return e.d = u, e.e = gr(u, n), F ? k(e, a, l) : e
}; S.precision = S.sd = function (e) {
  let t; const r = this; if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
    throw new Error($e + e); return r.d ? (t = co(r.d), e && r.e + 1 > t && (t = r.e + 1)) : t = Number.NaN, t
}; S.round = function () { const e = this; const t = e.constructor; return k(new t(e), e.e + 1, t.rounding) }; S.sine = S.sin = function () { let e; let t; let r = this; const n = r.constructor; return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + Math.max(r.e, r.sd()) + M, n.rounding = 1, r = tu(n, go(n, r)), n.precision = e, n.rounding = t, k(Me > 2 ? r.neg() : r, e, t, !0)) : new n(Number.NaN) }; S.squareRoot = S.sqrt = function () {
  let e; let t; let r; let n; let i; let o; const s = this; const a = s.d; let l = s.e; let u = s.s; const g = s.constructor; if (u !== 1 || !a || !a[0])
    return new g(!u || u < 0 && (!a || a[0]) ? Number.NaN : a ? s : 1 / 0); for (F = !1, u = Math.sqrt(+s), u == 0 || u == 1 / 0 ? (t = z(a), (t.length + l) % 2 == 0 && (t += '0'), u = Math.sqrt(t), l = ee((l + 1) / 2) - (l < 0 || l % 2), u == 1 / 0 ? t = `5e${l}` : (t = u.toExponential(), t = t.slice(0, t.indexOf('e') + 1) + l), n = new g(t)) : n = new g(u.toString()), r = (l = g.precision) + 3; ;) {
    if (o = n, n = o.plus(q(s, o, r + 2, 1)).times(0.5), z(o.d).slice(0, r) === (t = z(n.d)).slice(0, r)) {
      if (t = t.slice(r - 3, r + 1), t == '9999' || !i && t == '4999') { if (!i && (k(o, l + 1, 0), o.times(o).eq(s))) { n = o; break }r += 4, i = 1 }
      else { (!+t || !+t.slice(1) && t.charAt(0) == '5') && (k(n, l + 1, 1), e = !n.times(n).eq(s)); break }
    }
  } return F = !0, k(n, l, g.rounding, e)
}; S.tangent = S.tan = function () { let e; let t; let r = this; const n = r.constructor; return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 10, n.rounding = 1, r = r.sin(), r.s = 1, r = q(r, new n(1).minus(r.times(r)).sqrt(), e + 10, 0), n.precision = e, n.rounding = t, k(Me == 2 || Me == 4 ? r.neg() : r, e, t, !0)) : new n(Number.NaN) }; S.times = S.mul = function (e) {
  let t; let r; let n; let i; let o; let s; let a; let l; let u; const g = this; const h = g.constructor; let v = g.d; let R = (e = new h(e)).d; if (e.s *= g.s, !v || !v[0] || !R || !R[0])
    return new h(!e.s || v && !v[0] && !R || R && !R[0] && !v ? Number.NaN : !v || !R ? e.s / 0 : e.s * 0); for (r = ee(g.e / M) + ee(e.e / M), l = v.length, u = R.length, l < u && (o = v, v = R, R = o, s = l, l = u, u = s), o = [], s = l + u, n = s; n--;)o.push(0); for (n = u; --n >= 0;) { for (t = 0, i = l + n; i > n;)a = o[i] + R[n] * v[i - n - 1] + t, o[i--] = a % fe | 0, t = a / fe | 0; o[i] = (o[i] + t) % fe | 0 } for (;!o[--s];)o.pop(); return t ? ++r : o.shift(), e.d = o, e.e = gr(o, r), F ? k(e, h.precision, h.rounding) : e
}; S.toBinary = function (e, t) { return Rn(this, 2, e, t) }; S.toDecimalPlaces = S.toDP = function (e, t) { let r = this; const n = r.constructor; return r = new n(r), e === void 0 ? r : (oe(e, 0, Be), t === void 0 ? t = n.rounding : oe(t, 0, 8), k(r, e + r.e + 1, t)) }; S.toExponential = function (e, t) { let r; let n = this; const i = n.constructor; return e === void 0 ? r = Ee(n, !0) : (oe(e, 0, Be), t === void 0 ? t = i.rounding : oe(t, 0, 8), n = k(new i(n), e + 1, t), r = Ee(n, !0, e + 1)), n.isNeg() && !n.isZero() ? `-${r}` : r }; S.toFixed = function (e, t) { let r; let n; const i = this; const o = i.constructor; return e === void 0 ? r = Ee(i) : (oe(e, 0, Be), t === void 0 ? t = o.rounding : oe(t, 0, 8), n = k(new o(i), e + i.e + 1, t), r = Ee(n, !1, e + n.e + 1)), i.isNeg() && !i.isZero() ? `-${r}` : r }; S.toFraction = function (e) {
  let t; let r; let n; let i; let o; let s; let a; let l; let u; let g; let h; let v; const R = this; const C = R.d; const A = R.constructor; if (!C)
    return new A(R); if (u = r = new A(1), n = l = new A(0), t = new A(n), o = t.e = co(C) - R.e - 1, s = o % M, t.d[0] = 10 ** (s < 0 ? M + s : s), e == null) {
    e = o > 0 ? t : u
  }
  else {
    if (a = new A(e), !a.isInt() || a.lt(u))
      throw new Error($e + a); e = a.gt(t) ? o > 0 ? t : u : a
  } for (F = !1, a = new A(z(C)), g = A.precision, A.precision = o = C.length * M * 2; h = q(a, t, 0, 1, 1), i = r.plus(h.times(n)), i.cmp(e) != 1;)r = n, n = i, i = u, u = l.plus(h.times(i)), l = i, i = t, t = a.minus(h.times(i)), a = i; return i = q(e.minus(r), n, 0, 1, 1), l = l.plus(i.times(u)), r = r.plus(i.times(n)), l.s = u.s = R.s, v = q(u, n, o, 1).minus(R).abs().cmp(q(l, r, o, 1).minus(R).abs()) < 1 ? [u, n] : [l, r], A.precision = g, F = !0, v
}; S.toHexadecimal = S.toHex = function (e, t) { return Rn(this, 16, e, t) }; S.toNearest = function (e, t) {
  let r = this; const n = r.constructor; if (r = new n(r), e == null) {
    if (!r.d)
      return r; e = new n(1), t = n.rounding
  }
  else {
    if (e = new n(e), t === void 0 ? t = n.rounding : oe(t, 0, 8), !r.d)
      return e.s ? r : e; if (!e.d)
      return e.s && (e.s = r.s), e
  } return e.d[0] ? (F = !1, r = q(r, e, 0, t, 1).times(e), F = !0, k(r)) : (e.s = r.s, r = e), r
}; S.toNumber = function () { return +this }; S.toOctal = function (e, t) { return Rn(this, 8, e, t) }; S.toPower = S.pow = function (e) {
  let t; let r; let n; let i; let o; let s; let a = this; const l = a.constructor; const u = +(e = new l(e)); if (!a.d || !e.d || !a.d[0] || !e.d[0])
    return new l((+a) ** u); if (a = new l(a), a.eq(1))
    return a; if (n = l.precision, o = l.rounding, e.eq(1))
    return k(a, n, o); if (t = ee(e.e / M), t >= e.d.length - 1 && (r = u < 0 ? -u : u) <= Yl)
    return i = po(l, a, r, n), e.s < 0 ? new l(1).div(i) : k(i, n, o); if (s = a.s, s < 0) {
    if (t < e.d.length - 1)
      return new l(Number.NaN); if (e.d[t] & 1 || (s = 1), a.e == 0 && a.d[0] == 1 && a.d.length == 1)
      return a.s = s, a
  } return r = (+a) ** u, t = r == 0 || !isFinite(r) ? ee(u * (Math.log(`0.${z(a.d)}`) / Math.LN10 + a.e + 1)) : new l(`${r}`).e, t > l.maxE + 1 || t < l.minE - 1 ? new l(t > 0 ? s / 0 : 0) : (F = !1, l.rounding = a.s = 1, r = Math.min(12, (`${t}`).length), i = Sn(e.times(De(a, n + r)), n), i.d && (i = k(i, n + 5, 1), Lt(i.d, n, o) && (t = n + 10, i = k(Sn(e.times(De(a, t + r)), t), t + 5, 1), +z(i.d).slice(n + 1, n + 15) + 1 == 1e14 && (i = k(i, n + 1, 0)))), i.s = s, F = !0, l.rounding = o, k(i, n, o))
}; S.toPrecision = function (e, t) { let r; let n = this; const i = n.constructor; return e === void 0 ? r = Ee(n, n.e <= i.toExpNeg || n.e >= i.toExpPos) : (oe(e, 1, Be), t === void 0 ? t = i.rounding : oe(t, 0, 8), n = k(new i(n), e, t), r = Ee(n, e <= n.e || n.e <= i.toExpNeg, e)), n.isNeg() && !n.isZero() ? `-${r}` : r }; S.toSignificantDigits = S.toSD = function (e, t) { const r = this; const n = r.constructor; return e === void 0 ? (e = n.precision, t = n.rounding) : (oe(e, 1, Be), t === void 0 ? t = n.rounding : oe(t, 0, 8)), k(new n(r), e, t) }; S.toString = function () { const e = this; const t = e.constructor; const r = Ee(e, e.e <= t.toExpNeg || e.e >= t.toExpPos); return e.isNeg() && !e.isZero() ? `-${r}` : r }; S.truncated = S.trunc = function () { return k(new this.constructor(this), this.e + 1, 1) }; S.valueOf = S.toJSON = function () { const e = this; const t = e.constructor; const r = Ee(e, e.e <= t.toExpNeg || e.e >= t.toExpPos); return e.isNeg() ? `-${r}` : r }; function z(e) {
  let t; let r; let n; const i = e.length - 1; let o = ''; let s = e[0]; if (i > 0) { for (o += s, t = 1; t < i; t++)n = `${e[t]}`, r = M - n.length, r && (o += Ne(r)), o += n; s = e[t], n = `${s}`, r = M - n.length, r && (o += Ne(r)) }
  else if (s === 0) {
    return '0'
  } for (;s % 10 === 0;)s /= 10; return o + s
} function oe(e, t, r) {
  if (e !== ~~e || e < t || e > r)
    throw new Error($e + e)
} function Lt(e, t, r, n) { let i, o, s, a; for (o = e[0]; o >= 10; o /= 10)--t; return --t < 0 ? (t += M, i = 0) : (i = Math.ceil((t + 1) / M), t %= M), o = 10 ** (M - t), a = e[i] % o | 0, n == null ? t < 3 ? (t == 0 ? a = a / 100 | 0 : t == 1 && (a = a / 10 | 0), s = r < 4 && a == 99999 || r > 3 && a == 49999 || a == 5e4 || a == 0) : s = (r < 4 && a + 1 == o || r > 3 && a + 1 == o / 2) && (e[i + 1] / o / 100 | 0) == 10 ** (t - 2) - 1 || (a == o / 2 || a == 0) && (e[i + 1] / o / 100 | 0) == 0 : t < 4 ? (t == 0 ? a = a / 1e3 | 0 : t == 1 ? a = a / 100 | 0 : t == 2 && (a = a / 10 | 0), s = (n || r < 4) && a == 9999 || !n && r > 3 && a == 4999) : s = ((n || r < 4) && a + 1 == o || !n && r > 3 && a + 1 == o / 2) && (e[i + 1] / o / 1e3 | 0) == 10 ** (t - 3) - 1, s } function ur(e, t, r) { for (var n, i = [0], o, s = 0, a = e.length; s < a;) { for (o = i.length; o--;)i[o] *= t; for (i[0] += Tn.indexOf(e.charAt(s++)), n = 0; n < i.length; n++)i[n] > r - 1 && (i[n + 1] === void 0 && (i[n + 1] = 0), i[n + 1] += i[n] / r | 0, i[n] %= r) } return i.reverse() } function Xl(e, t) {
  let r, n, i; if (t.isZero())
    return t; n = t.d.length, n < 32 ? (r = Math.ceil(n / 3), i = (1 / hr(4, r)).toString()) : (r = 16, i = '2.3283064365386962890625e-10'), e.precision += r, t = it(e, 1, t.times(i), new e(1)); for (let o = r; o--;) { const s = t.times(t); t = s.times(s).minus(s).times(8).plus(1) } return e.precision -= r, t
} var q = (function () {
  function e(n, i, o) { let s; let a = 0; let l = n.length; for (n = n.slice(); l--;)s = n[l] * i + a, n[l] = s % o | 0, a = s / o | 0; return a && n.unshift(a), n } function t(n, i, o, s) {
    let a, l; if (o != s) {
      l = o > s ? 1 : -1
    }
    else {
      for (a = l = 0; a < o; a++) {
        if (n[a] != i[a]) { l = n[a] > i[a] ? 1 : -1; break }
      }
    } return l
  } function r(n, i, o, s) { for (let a = 0; o--;)n[o] -= a, a = n[o] < i[o] ? 1 : 0, n[o] = a * s + n[o] - i[o]; for (;!n[0] && n.length > 1;)n.shift() } return function (n, i, o, s, a, l) {
    let u; let g; let h; let v; let R; let C; let A; let O; let _; let L; let I; let D; let $; let U; let xt; let J; let re; let Se; let Y; let ze; const Xt = n.constructor; const zr = n.s == i.s ? 1 : -1; let Z = n.d; let j = i.d; if (!Z || !Z[0] || !j || !j[0])
      return new Xt(!n.s || !i.s || (Z ? j && Z[0] == j[0] : !j) ? Number.NaN : Z && Z[0] == 0 || !j ? zr * 0 : zr / 0); for (l ? (R = 1, g = n.e - i.e) : (l = fe, R = M, g = ee(n.e / R) - ee(i.e / R)), Y = j.length, re = Z.length, _ = new Xt(zr), L = _.d = [], h = 0; j[h] == (Z[h] || 0); h++);if (j[h] > (Z[h] || 0) && g--, o == null ? (U = o = Xt.precision, s = Xt.rounding) : a ? U = o + (n.e - i.e) + 1 : U = o, U < 0) {
      L.push(1), C = !0
    }
    else {
      if (U = U / R + 2 | 0, h = 0, Y == 1) { for (v = 0, j = j[0], U++; (h < re || v) && U--; h++)xt = v * l + (Z[h] || 0), L[h] = xt / j | 0, v = xt % j | 0; C = v || h < re }
      else { for (v = l / (j[0] + 1) | 0, v > 1 && (j = e(j, v, l), Z = e(Z, v, l), Y = j.length, re = Z.length), J = Y, I = Z.slice(0, Y), D = I.length; D < Y;)I[D++] = 0; ze = j.slice(), ze.unshift(0), Se = j[0], j[1] >= l / 2 && ++Se; do v = 0, u = t(j, I, Y, D), u < 0 ? ($ = I[0], Y != D && ($ = $ * l + (I[1] || 0)), v = $ / Se | 0, v > 1 ? (v >= l && (v = l - 1), A = e(j, v, l), O = A.length, D = I.length, u = t(A, I, O, D), u == 1 && (v--, r(A, Y < O ? ze : j, O, l))) : (v == 0 && (u = v = 1), A = j.slice()), O = A.length, O < D && A.unshift(0), r(I, A, D, l), u == -1 && (D = I.length, u = t(j, I, Y, D), u < 1 && (v++, r(I, Y < D ? ze : j, D, l))), D = I.length) : u === 0 && (v++, I = [0]), L[h++] = v, u && I[0] ? I[D++] = Z[J] || 0 : (I = [Z[J]], D = 1); while ((J++ < re || I[0] !== void 0) && U--); C = I[0] !== void 0 }L[0] || L.shift()
    } if (R == 1) {
      _.e = g, oo = C
    }
    else { for (h = 1, v = L[0]; v >= 10; v /= 10)h++; _.e = h + g * R - 1, k(_, a ? o + _.e + 1 : o, s, C) } return _
  }
}()); function k(e, t, r, n) {
  let i; let o; let s; let a; let l; let u; let g; let h; let v; const R = e.constructor; e:if (t != null) {
    if (h = e.d, !h)
      return e; for (i = 1, a = h[0]; a >= 10; a /= 10)i++; if (o = t - i, o < 0) {
      o += M, s = t, g = h[v = 0], l = g / 10 ** (i - s - 1) % 10 | 0
    }
    else if (v = Math.ceil((o + 1) / M), a = h.length, v >= a) {
      if (n) { for (;a++ <= v;)h.push(0); g = l = 0, i = 1, o %= M, s = o - M + 1 }
      else {
        break e
      }
    }
    else { for (g = a = h[v], i = 1; a >= 10; a /= 10)i++; o %= M, s = o - M + i, l = s < 0 ? 0 : g / 10 ** (i - s - 1) % 10 | 0 } if (n = n || t < 0 || h[v + 1] !== void 0 || (s < 0 ? g : g % 10 ** (i - s - 1)), u = r < 4 ? (l || n) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : l > 5 || l == 5 && (r == 4 || n || r == 6 && (o > 0 ? s > 0 ? g / 10 ** (i - s) : 0 : h[v - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7)), t < 1 || !h[0])
      return h.length = 0, u ? (t -= e.e + 1, h[0] = 10 ** ((M - t % M) % M), e.e = -t || 0) : h[0] = e.e = 0, e; if (o == 0 ? (h.length = v, a = 1, v--) : (h.length = v + 1, a = 10 ** (M - o), h[v] = s > 0 ? (g / 10 ** (i - s) % 10 ** s | 0) * a : 0), u) {
      for (;;) {
        if (v == 0) { for (o = 1, s = h[0]; s >= 10; s /= 10)o++; for (s = h[0] += a, a = 1; s >= 10; s /= 10)a++; o != a && (e.e++, h[0] == fe && (h[0] = 1)); break }
        else {
          if (h[v] += a, h[v] != fe)
            break; h[v--] = 0, a = 1
        }
      }
    } for (o = h.length; h[--o] === 0;)h.pop()
  } return F && (e.e > R.maxE ? (e.d = null, e.e = Number.NaN) : e.e < R.minE && (e.e = 0, e.d = [0])), e
} function Ee(e, t, r) {
  if (!e.isFinite())
    return mo(e); let n; const i = e.e; let o = z(e.d); const s = o.length; return t ? (r && (n = r - s) > 0 ? o = `${o.charAt(0)}.${o.slice(1)}${Ne(n)}` : s > 1 && (o = `${o.charAt(0)}.${o.slice(1)}`), o = o + (e.e < 0 ? 'e' : 'e+') + e.e) : i < 0 ? (o = `0.${Ne(-i - 1)}${o}`, r && (n = r - s) > 0 && (o += Ne(n))) : i >= s ? (o += Ne(i + 1 - s), r && (n = r - i - 1) > 0 && (o = `${o}.${Ne(n)}`)) : ((n = i + 1) < s && (o = `${o.slice(0, n)}.${o.slice(n)}`), r && (n = r - s) > 0 && (i + 1 === s && (o += '.'), o += Ne(n))), o
} function gr(e, t) { let r = e[0]; for (t *= M; r >= 10; r /= 10)t++; return t } function fr(e, t, r) {
  if (t > Zl)
    throw F = !0, r && (e.precision = r), new Error(so); return k(new e(pr), t, 1, !0)
} function be(e, t, r) {
  if (t > An)
    throw new Error(so); return k(new e(dr), t, r, !0)
} function co(e) { let t = e.length - 1; let r = t * M + 1; if (t = e[t], t) { for (;t % 10 == 0; t /= 10)r--; for (t = e[0]; t >= 10; t /= 10)r++ } return r } function Ne(e) { for (var t = ''; e--;)t += '0'; return t } function po(e, t, r, n) { let i; let o = new e(1); const s = Math.ceil(n / M + 4); for (F = !1; ;) { if (r % 2 && (o = o.times(t), no(o.d, s) && (i = !0)), r = ee(r / 2), r === 0) { r = o.d.length - 1, i && o.d[r] === 0 && ++o.d[r]; break }t = t.times(t), no(t.d, s) } return F = !0, o } function ro(e) { return e.d[e.d.length - 1] & 1 } function fo(e, t, r) { for (var n, i, o = new e(t[0]), s = 0; ++s < t.length;) { if (i = new e(t[s]), !i.s) { o = i; break }n = o.cmp(i), (n === r || n === 0 && o.s === r) && (o = i) } return o } function Sn(e, t) {
  let r; let n; let i; let o; let s; let a; let l; let u = 0; let g = 0; let h = 0; const v = e.constructor; const R = v.rounding; const C = v.precision; if (!e.d || !e.d[0] || e.e > 17)
    return new v(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : Number.NaN); for (t == null ? (F = !1, l = C) : l = t, a = new v(0.03125); e.e > -2;)e = e.times(a), h += 5; for (n = Math.log(2 ** h) / Math.LN10 * 2 + 5 | 0, l += n, r = o = s = new v(1), v.precision = l; ;) {
    if (o = k(o.times(e), l, 1), r = r.times(++g), a = s.plus(q(o, r, l, 1)), z(a.d).slice(0, l) === z(s.d).slice(0, l)) {
      for (i = h; i--;)s = k(s.times(s), l, 1); if (t == null) {
        if (u < 3 && Lt(s.d, l - n, R, u))
          v.precision = l += 10, r = o = a = new v(1), g = 0, u++; else return k(s, v.precision = C, R, F = !0)
      }
      else {
        return v.precision = C, s
      }
    }s = a
  }
} function De(e, t) {
  let r; let n; let i; let o; let s; let a; let l; let u; let g; let h; let v; let R = 1; const C = 10; let A = e; const O = A.d; const _ = A.constructor; const L = _.rounding; const I = _.precision; if (A.s < 0 || !O || !O[0] || !A.e && O[0] == 1 && O.length == 1)
    return new _(O && !O[0] ? -1 / 0 : A.s != 1 ? Number.NaN : O ? 0 : A); if (t == null ? (F = !1, g = I) : g = t, _.precision = g += C, r = z(O), n = r.charAt(0), Math.abs(o = A.e) < 15e14) { for (;n < 7 && n != 1 || n == 1 && r.charAt(1) > 3;)A = A.times(e), r = z(A.d), n = r.charAt(0), R++; o = A.e, n > 1 ? (A = new _(`0.${r}`), o++) : A = new _(`${n}.${r.slice(1)}`) }
  else {
    return u = fr(_, g + 2, I).times(`${o}`), A = De(new _(`${n}.${r.slice(1)}`), g - C).plus(u), _.precision = I, t == null ? k(A, I, L, F = !0) : A
  } for (h = A, l = s = A = q(A.minus(1), A.plus(1), g, 1), v = k(A.times(A), g, 1), i = 3; ;) {
    if (s = k(s.times(v), g, 1), u = l.plus(q(s, new _(i), g, 1)), z(u.d).slice(0, g) === z(l.d).slice(0, g)) {
      if (l = l.times(2), o !== 0 && (l = l.plus(fr(_, g + 2, I).times(`${o}`))), l = q(l, new _(R), g, 1), t == null) {
        if (Lt(l.d, g - C, L, a))
          _.precision = g += C, u = s = A = q(h.minus(1), h.plus(1), g, 1), v = k(A.times(A), g, 1), i = a = 1; else return k(l, _.precision = I, L, F = !0)
      }
      else {
        return _.precision = I, l
      }
    }l = u, i += 2
  }
} function mo(e) { return String(e.s * e.s / 0) } function cr(e, t) {
  let r, n, i; for ((r = t.indexOf('.')) > -1 && (t = t.replace('.', '')), (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), n = 0; t.charCodeAt(n) === 48; n++);for (i = t.length; t.charCodeAt(i - 1) === 48; --i);if (t = t.slice(n, i), t) {
    if (i -= n, e.e = r = r - n - 1, e.d = [], n = (r + 1) % M, r < 0 && (n += M), n < i) { for (n && e.d.push(+t.slice(0, n)), i -= M; n < i;)e.d.push(+t.slice(n, n += M)); t = t.slice(n), n = M - t.length }
    else {
      n -= i
    } for (;n--;)t += '0'; e.d.push(+t), F && (e.e > e.constructor.maxE ? (e.d = null, e.e = Number.NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]))
  }
  else {
    e.e = 0, e.d = [0]
  } return e
} function eu(e, t) {
  let r, n, i, o, s, a, l, u, g; if (t.includes('_')) {
    if (t = t.replace(/(\d)_(?=\d)/g, '$1'), uo.test(t))
      return cr(e, t)
  }
  else if (t === 'Infinity' || t === 'NaN') {
    return +t || (e.s = Number.NaN), e.e = Number.NaN, e.d = null, e
  } if (Hl.test(t))
    r = 16, t = t.toLowerCase(); else if (Kl.test(t))
    r = 2; else if (zl.test(t))
    r = 8; else throw new Error($e + t); for (o = t.search(/p/i), o > 0 ? (l = +t.slice(o + 1), t = t.substring(2, o)) : t = t.slice(2), o = t.indexOf('.'), s = o >= 0, n = e.constructor, s && (t = t.replace('.', ''), a = t.length, o = a - o, i = po(n, new n(r), o, o * 2)), u = ur(t, r, fe), g = u.length - 1, o = g; u[o] === 0; --o)u.pop(); return o < 0 ? new n(e.s * 0) : (e.e = gr(u, g), e.d = u, F = !1, s && (e = q(e, i, a * 4)), l && (e = e.times(Math.abs(l) < 54 ? 2 ** l : We.pow(2, l))), F = !0, e)
} function tu(e, t) {
  let r; const n = t.d.length; if (n < 3)
    return t.isZero() ? t : it(e, 2, t, t); r = 1.4 * Math.sqrt(n), r = r > 16 ? 16 : r | 0, t = t.times(1 / hr(5, r)), t = it(e, 2, t, t); for (var i, o = new e(5), s = new e(16), a = new e(20); r--;)i = t.times(t), t = t.times(o.plus(i.times(s.times(i).minus(a)))); return t
} function it(e, t, r, n, i) {
  let o; let s; let a; let l; let u = 1; const g = e.precision; const h = Math.ceil(g / M); for (F = !1, l = r.times(r), a = new e(n); ;) {
    if (s = q(a.times(l), new e(t++ * t++), g, 1), a = i ? n.plus(s) : n.minus(s), n = q(s.times(l), new e(t++ * t++), g, 1), s = a.plus(n), s.d[h] !== void 0) {
      for (o = h; s.d[o] === a.d[o] && o--;);if (o == -1)
        break
    }o = a, a = n, n = s, s = o, u++
  } return F = !0, s.d.length = h + 1, s
} function hr(e, t) { for (var r = e; --t;)r *= e; return r } function go(e, t) {
  let r; const n = t.s < 0; const i = be(e, e.precision, 1); const o = i.times(0.5); if (t = t.abs(), t.lte(o))
    return Me = n ? 4 : 1, t; if (r = t.divToInt(i), r.isZero()) {
    Me = n ? 3 : 2
  }
  else {
    if (t = t.minus(r.times(i)), t.lte(o))
      return Me = ro(r) ? n ? 2 : 3 : n ? 4 : 1, t; Me = ro(r) ? n ? 1 : 4 : n ? 3 : 2
  } return t.minus(i).abs()
} function Rn(e, t, r, n) {
  let i; let o; let s; let a; let l; let u; let g; let h; let v; const R = e.constructor; const C = r !== void 0; if (C ? (oe(r, 1, Be), n === void 0 ? n = R.rounding : oe(n, 0, 8)) : (r = R.precision, n = R.rounding), !e.isFinite()) {
    g = mo(e)
  }
  else {
    for (g = Ee(e), s = g.indexOf('.'), C ? (i = 2, t == 16 ? r = r * 4 - 3 : t == 8 && (r = r * 3 - 2)) : i = t, s >= 0 && (g = g.replace('.', ''), v = new R(1), v.e = g.length - s, v.d = ur(Ee(v), 10, i), v.e = v.d.length), h = ur(g, 10, i), o = l = h.length; h[--l] == 0;)h.pop(); if (!h[0]) {
      g = C ? '0p+0' : '0'
    }
    else {
      if (s < 0 ? o-- : (e = new R(e), e.d = h, e.e = o, e = q(e, v, r, n, 0, i), h = e.d, o = e.e, u = oo), s = h[r], a = i / 2, u = u || h[r + 1] !== void 0, u = n < 4 ? (s !== void 0 || u) && (n === 0 || n === (e.s < 0 ? 3 : 2)) : s > a || s === a && (n === 4 || u || n === 6 && h[r - 1] & 1 || n === (e.s < 0 ? 8 : 7)), h.length = r, u) {
        for (;++h[--r] > i - 1;)h[r] = 0, r || (++o, h.unshift(1))
      } for (l = h.length; !h[l - 1]; --l);for (s = 0, g = ''; s < l; s++)g += Tn.charAt(h[s]); if (C) {
        if (l > 1) {
          if (t == 16 || t == 8) { for (s = t == 16 ? 4 : 3, --l; l % s; l++)g += '0'; for (h = ur(g, i, t), l = h.length; !h[l - 1]; --l);for (s = 1, g = '1.'; s < l; s++)g += Tn.charAt(h[s]) }
          else {
            g = `${g.charAt(0)}.${g.slice(1)}`
          }
        }g = g + (o < 0 ? 'p' : 'p+') + o
      }
      else if (o < 0) { for (;++o;)g = `0${g}`; g = `0.${g}` }
      else if (++o > l) {
        for (o -= l; o--;)g += '0'
      }
      else {
        o < l && (g = `${g.slice(0, o)}.${g.slice(o)}`)
      }
    }g = (t == 16 ? '0x' : t == 2 ? '0b' : t == 8 ? '0o' : '') + g
  } return e.s < 0 ? `-${g}` : g
} function no(e, t) {
  if (e.length > t)
    return e.length = t, !0
} function ru(e) { return new this(e).abs() } function nu(e) { return new this(e).acos() } function iu(e) { return new this(e).acosh() } function ou(e, t) { return new this(e).plus(t) } function su(e) { return new this(e).asin() } function au(e) { return new this(e).asinh() } function lu(e) { return new this(e).atan() } function uu(e) { return new this(e).atanh() } function cu(e, t) { e = new this(e), t = new this(t); let r; const n = this.precision; const i = this.rounding; const o = n + 4; return !e.s || !t.s ? r = new this(Number.NaN) : !e.d && !t.d ? (r = be(this, o, 1).times(t.s > 0 ? 0.25 : 0.75), r.s = e.s) : !t.d || e.isZero() ? (r = t.s < 0 ? be(this, n, i) : new this(0), r.s = e.s) : !e.d || t.isZero() ? (r = be(this, o, 1).times(0.5), r.s = e.s) : t.s < 0 ? (this.precision = o, this.rounding = 1, r = this.atan(q(e, t, o, 1)), t = be(this, o, 1), this.precision = n, this.rounding = i, r = e.s < 0 ? r.minus(t) : r.plus(t)) : r = this.atan(q(e, t, o, 1)), r } function pu(e) { return new this(e).cbrt() } function du(e) { return k(e = new this(e), e.e + 1, 2) } function fu(e, t, r) { return new this(e).clamp(t, r) } function mu(e) {
  if (!e || typeof e != 'object')
    throw new Error(`${mr}Object expected`); let t; let r; let n; const i = e.defaults === !0; const o = ['precision', 1, Be, 'rounding', 0, 8, 'toExpNeg', -nt, 0, 'toExpPos', 0, nt, 'maxE', 0, nt, 'minE', -nt, 0, 'modulo', 0, 9]; for (t = 0; t < o.length; t += 3) {
    if (r = o[t], i && (this[r] = Cn[r]), (n = e[r]) !== void 0) {
      if (ee(n) === n && n >= o[t + 1] && n <= o[t + 2])
        this[r] = n; else throw new Error(`${$e + r}: ${n}`)
    }
  } if (r = 'crypto', i && (this[r] = Cn[r]), (n = e[r]) !== void 0) {
    if (n === !0 || n === !1 || n === 0 || n === 1) {
      if (n) {
        if (typeof crypto < 'u' && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[r] = !0; else throw new Error(ao)
      }
      else {
        this[r] = !1
      }
    }
    else {
      throw new Error(`${$e + r}: ${n}`)
    }
  } return this
} function gu(e) { return new this(e).cos() } function hu(e) { return new this(e).cosh() } function ho(e) {
  let t, r, n; function i(o) {
    let s; let a; let l; const u = this; if (!(u instanceof i))
      return new i(o); if (u.constructor = i, io(o)) { u.s = o.s, F ? !o.d || o.e > i.maxE ? (u.e = Number.NaN, u.d = null) : o.e < i.minE ? (u.e = 0, u.d = [0]) : (u.e = o.e, u.d = o.d.slice()) : (u.e = o.e, u.d = o.d ? o.d.slice() : o.d); return } if (l = typeof o, l === 'number') { if (o === 0) { u.s = 1 / o < 0 ? -1 : 1, u.e = 0, u.d = [0]; return } if (o < 0 ? (o = -o, u.s = -1) : u.s = 1, o === ~~o && o < 1e7) { for (s = 0, a = o; a >= 10; a /= 10)s++; F ? s > i.maxE ? (u.e = Number.NaN, u.d = null) : s < i.minE ? (u.e = 0, u.d = [0]) : (u.e = s, u.d = [o]) : (u.e = s, u.d = [o]); return } if (o * 0 !== 0) { o || (u.s = Number.NaN), u.e = Number.NaN, u.d = null; return } return cr(u, o.toString()) } if (l === 'string')
      return (a = o.charCodeAt(0)) === 45 ? (o = o.slice(1), u.s = -1) : (a === 43 && (o = o.slice(1)), u.s = 1), uo.test(o) ? cr(u, o) : eu(u, o); if (l === 'bigint')
      return o < 0 ? (o = -o, u.s = -1) : u.s = 1, cr(u, o.toString()); throw new Error($e + o)
  } if (i.prototype = S, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.EUCLID = 9, i.config = i.set = mu, i.clone = ho, i.isDecimal = io, i.abs = ru, i.acos = nu, i.acosh = iu, i.add = ou, i.asin = su, i.asinh = au, i.atan = lu, i.atanh = uu, i.atan2 = cu, i.cbrt = pu, i.ceil = du, i.clamp = fu, i.cos = gu, i.cosh = hu, i.div = yu, i.exp = wu, i.floor = bu, i.hypot = Eu, i.ln = xu, i.log = Pu, i.log10 = Tu, i.log2 = vu, i.max = Cu, i.min = Au, i.mod = Su, i.mul = Ru, i.pow = ku, i.random = Ou, i.round = Iu, i.sign = Mu, i.sin = _u, i.sinh = Fu, i.sqrt = Lu, i.sub = Nu, i.sum = Du, i.tan = $u, i.tanh = Bu, i.trunc = ju, e === void 0 && (e = {}), e && e.defaults !== !0) {
    for (n = ['precision', 'rounding', 'toExpNeg', 'toExpPos', 'maxE', 'minE', 'modulo', 'crypto'], t = 0; t < n.length;)e.hasOwnProperty(r = n[t++]) || (e[r] = this[r])
  } return i.config(e), i
} function yu(e, t) { return new this(e).div(t) } function wu(e) { return new this(e).exp() } function bu(e) { return k(e = new this(e), e.e + 1, 3) } function Eu() {
  let e; let t; let r = new this(0); for (F = !1, e = 0; e < arguments.length;) {
    if (t = new this(arguments[e++]), t.d) {
      r.d && (r = r.plus(t.times(t)))
    }
    else {
      if (t.s)
        return F = !0, new this(1 / 0); r = t
    }
  } return F = !0, r.sqrt()
} function io(e) { return e instanceof We || e && e.toStringTag === lo || !1 } function xu(e) { return new this(e).ln() } function Pu(e, t) { return new this(e).log(t) } function vu(e) { return new this(e).log(2) } function Tu(e) { return new this(e).log(10) } function Cu() { return fo(this, arguments, -1) } function Au() { return fo(this, arguments, 1) } function Su(e, t) { return new this(e).mod(t) } function Ru(e, t) { return new this(e).mul(t) } function ku(e, t) { return new this(e).pow(t) } function Ou(e) {
  let t; let r; let n; let i; let o = 0; const s = new this(1); let a = []; if (e === void 0 ? e = this.precision : oe(e, 1, Be), n = Math.ceil(e / M), this.crypto) {
    if (crypto.getRandomValues) {
      for (t = crypto.getRandomValues(new Uint32Array(n)); o < n;)i = t[o], i >= 429e7 ? t[o] = crypto.getRandomValues(new Uint32Array(1))[0] : a[o++] = i % 1e7
    }
    else if (crypto.randomBytes) { for (t = crypto.randomBytes(n *= 4); o < n;)i = t[o] + (t[o + 1] << 8) + (t[o + 2] << 16) + ((t[o + 3] & 127) << 24), i >= 214e7 ? crypto.randomBytes(4).copy(t, o) : (a.push(i % 1e7), o += 4); o = n / 4 }
    else {
      throw new Error(ao)
    }
  }
  else {
    for (;o < n;)a[o++] = Math.random() * 1e7 | 0
  } for (n = a[--o], e %= M, n && e && (i = 10 ** (M - e), a[o] = (n / i | 0) * i); a[o] === 0; o--)a.pop(); if (o < 0) {
    r = 0, a = [0]
  }
  else { for (r = -1; a[0] === 0; r -= M)a.shift(); for (n = 1, i = a[0]; i >= 10; i /= 10)n++; n < M && (r -= M - n) } return s.e = r, s.d = a, s
} function Iu(e) { return k(e = new this(e), e.e + 1, this.rounding) } function Mu(e) { return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || Number.NaN } function _u(e) { return new this(e).sin() } function Fu(e) { return new this(e).sinh() } function Lu(e) { return new this(e).sqrt() } function Nu(e, t) { return new this(e).sub(t) } function Du() { let e = 0; const t = arguments; let r = new this(t[e]); for (F = !1; r.s && ++e < t.length;)r = r.plus(t[e]); return F = !0, k(r, this.precision, this.rounding) } function $u(e) { return new this(e).tan() } function Bu(e) { return new this(e).tanh() } function ju(e) { return k(e = new this(e), e.e + 1, 1) }S[Symbol.for('nodejs.util.inspect.custom')] = S.toString; S[Symbol.toStringTag] = 'Decimal'; var We = S.constructor = ho(Cn); pr = new We(pr); dr = new We(dr); var xe = We; function ot(e) { return e === null ? e : Array.isArray(e) ? e.map(ot) : typeof e == 'object' ? qu(e) ? Uu(e) : rt(e, ot) : e } function qu(e) { return e !== null && typeof e == 'object' && typeof e.$type == 'string' } function Uu({ $type: e, value: t }) { switch (e) { case 'BigInt':return BigInt(t); case 'Bytes':{ const { buffer: r, byteOffset: n, byteLength: i } = w.Buffer.from(t, 'base64'); return new Uint8Array(r, n, i) } case 'DateTime':return new Date(t); case 'Decimal':return new xe(t); case 'Json':return JSON.parse(t); default:Ie(t, 'Unknown tagged value') } }m(); c(); p(); d(); f(); m(); c(); p(); d(); f(); function st(e) { return e.substring(0, 1).toLowerCase() + e.substring(1) }m(); c(); p(); d(); f(); function at(e) { return e instanceof Date || Object.prototype.toString.call(e) === '[object Date]' } function yr(e) { return e.toString() !== 'Invalid Date' }m(); c(); p(); d(); f(); function lt(e) { return We.isDecimal(e) ? !0 : e !== null && typeof e == 'object' && typeof e.s == 'number' && typeof e.e == 'number' && typeof e.toFixed == 'function' && Array.isArray(e.d) }m(); c(); p(); d(); f(); m(); c(); p(); d(); f(); const xo = Re(Ki()); m(); c(); p(); d(); f(); fn(); m(); c(); p(); d(); f(); m(); c(); p(); d(); f(); m(); c(); p(); d(); f(); const yo = { keyword: Oe, entity: Oe, value: e => de(Ge(e)), punctuation: Ge, directive: Oe, function: Oe, variable: e => de(Ge(e)), string: e => de(At(e)), boolean: St, number: Oe, comment: Rt }; const Vu = e => e; const wr = {}; let Qu = 0; var N = { manual: wr.Prism && wr.Prism.manual, disableWorkerMessageHandler: wr.Prism && wr.Prism.disableWorkerMessageHandler, util: { encode(e) {
  if (e instanceof me) { const t = e; return new me(t.type, N.util.encode(t.content), t.alias) }
  else {
    return Array.isArray(e) ? e.map(N.util.encode) : e.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00A0/g, ' ')
  }
}, type(e) { return Object.prototype.toString.call(e).slice(8, -1) }, objId(e) { return e.__id || Object.defineProperty(e, '__id', { value: ++Qu }), e.__id }, clone: function e(t, r) {
  let n; let i; const o = N.util.type(t); switch (r = r || { }, o) {
    case 'Object':if (i = N.util.objId(t), r[i])
      return r[i]; n = {}, r[i] = n; for (const s in t)t.hasOwnProperty(s) && (n[s] = e(t[s], r)); return n; case 'Array':return i = N.util.objId(t), r[i] ? r[i] : (n = [], r[i] = n, t.forEach((s, a) => { n[a] = e(s, r) }), n); default:return t
  }
} }, languages: { extend(e, t) { const r = N.util.clone(N.languages[e]); for (const n in t)r[n] = t[n]; return r }, insertBefore(e, t, r, n) {
  n = n || N.languages; const i = n[e]; const o = {}; for (const a in i) {
    if (i.hasOwnProperty(a)) {
      if (a == t) {
        for (const l in r)r.hasOwnProperty(l) && (o[l] = r[l])
      } r.hasOwnProperty(a) || (o[a] = i[a])
    }
  } const s = n[e]; return n[e] = o, N.languages.DFS(N.languages, function (a, l) { l === s && a != e && (this[a] = o) }), o
}, DFS: function e(t, r, n, i) {
  i = i || {}; const o = N.util.objId; for (const s in t) {
    if (t.hasOwnProperty(s)) { r.call(t, s, t[s], n || s); const a = t[s]; const l = N.util.type(a); l === 'Object' && !i[o(a)] ? (i[o(a)] = !0, e(a, r, null, i)) : l === 'Array' && !i[o(a)] && (i[o(a)] = !0, e(a, r, s, i)) }
  }
} }, plugins: {}, highlight(e, t, r) { const n = { code: e, grammar: t, language: r }; return N.hooks.run('before-tokenize', n), n.tokens = N.tokenize(n.code, n.grammar), N.hooks.run('after-tokenize', n), me.stringify(N.util.encode(n.tokens), n.language) }, matchGrammar(e, t, r, n, i, o, s) {
  for (const A in r) {
    if (!r.hasOwnProperty(A) || !r[A])
      continue; if (A == s)
      return; let O = r[A]; O = N.util.type(O) === 'Array' ? O : [O]; for (let _ = 0; _ < O.length; ++_) {
      let L = O[_]; const I = L.inside; const D = !!L.lookbehind; const $ = !!L.greedy; let U = 0; const xt = L.alias; if ($ && !L.pattern.global) { const J = L.pattern.toString().match(/[imuy]*$/)[0]; L.pattern = new RegExp(L.pattern.source, `${J}g`) }L = L.pattern || L; for (let J = n, re = i; J < t.length; re += t[J].length, ++J) {
        let Se = t[J]; if (t.length > e.length)
          return; if (Se instanceof me)
          continue; if ($ && J != t.length - 1) {
          L.lastIndex = re; var h = L.exec(e); if (!h)
            break; var g = h.index + (D ? h[1].length : 0); var v = h.index + h[0].length; let a = J; let l = re; for (let j = t.length; a < j && (l < v || !t[a].type && !t[a - 1].greedy); ++a)l += t[a].length, g >= l && (++J, re = l); if (t[J] instanceof me)
            continue; u = a - J, Se = e.slice(re, l), h.index -= re
        }
        else { L.lastIndex = 0; var h = L.exec(Se); var u = 1 } if (!h) {
          if (o)
            break; continue
        }D && (U = h[1] ? h[1].length : 0); var g = h.index + U; var h = h[0].slice(U); var v = g + h.length; const R = Se.slice(0, g); const C = Se.slice(v); const Y = [J, u]; R && (++J, re += R.length, Y.push(R)); const ze = new me(A, I ? N.tokenize(h, I) : h, xt, h, $); if (Y.push(ze), C && Y.push(C), Array.prototype.splice.apply(t, Y), u != 1 && N.matchGrammar(e, t, r, J, re, !0, A), o)
          break
      }
    }
  }
}, tokenize(e, t) { const r = [e]; const n = t.rest; if (n) { for (const i in n)t[i] = n[i]; delete t.rest } return N.matchGrammar(e, r, t, 0, 0, !1), r }, hooks: { all: {}, add(e, t) { const r = N.hooks.all; r[e] = r[e] || [], r[e].push(t) }, run(e, t) {
  const r = N.hooks.all[e]; if (!(!r || !r.length)) {
    for (var n = 0, i; i = r[n++];)i(t)
  }
} }, Token: me }; N.languages.clike = { 'comment': [{ pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0 }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 }], 'string': { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0 }, 'class-name': { pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|catch\s+\()[\w.\\]+/i, lookbehind: !0, inside: { punctuation: /[.\\]/ } }, 'keyword': /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/, 'boolean': /\b(?:true|false)\b/, 'function': /\w+(?=\()/, 'number': /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i, 'operator': /--?|\+\+?|!={0,2}|<=?|>=?|={1,3}|&&?|\|\|?|[?*/~^%]/, 'punctuation': /[{}[\];(),.:]/ }; N.languages.javascript = N.languages.extend('clike', { 'class-name': [N.languages.clike['class-name'], { pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/, lookbehind: !0 }], 'keyword': [{ pattern: /((?:^|\})\s*)(?:catch|finally)\b/, lookbehind: !0 }, { pattern: /(^|[^.])\b(?:as|async(?=\s*(?:function\b|[($\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/, lookbehind: !0 }], 'number': /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/, 'function': /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/, 'operator': /-[-=]?|\+[+=]?|!={0,2}|<<?=?|>{1,3}=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/ }); N.languages.javascript['class-name'][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/; N.languages.insertBefore('javascript', 'keyword', { 'regex': { pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/, lookbehind: !0, greedy: !0 }, 'function-variable': { pattern: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/, alias: 'function' }, 'parameter': [{ pattern: /(function(?:\s(?:[\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*[\x09-\x0D ])*(?:[^\s\d\0-\x08\x0E-\x1F!"#\x25-\x2F\x3A-\x40[\\\]^`\x7B-\x9F][\w$\xA0-\uFFFF]*|[\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+(?:[^\s\0-\x08\x0E-\x1F!"#\x25-\x2F\x3A-\x40[\\\]^`\x7B-\x9F][\w$\xA0-\uFFFF]*)?))?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/, lookbehind: !0, inside: N.languages.javascript }, { pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i, inside: N.languages.javascript }, { pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/, lookbehind: !0, inside: N.languages.javascript }, { pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?:[\x09-\x0D ]\s*)?\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/, lookbehind: !0, inside: N.languages.javascript }], 'constant': /\b[A-Z](?:[A-Z_]|\dx?)*\b/ }); N.languages.markup && N.languages.markup.tag.addInlined('script', 'javascript'); N.languages.js = N.languages.javascript; N.languages.typescript = N.languages.extend('javascript', { keyword: /\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\b/, builtin: /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/ }); N.languages.ts = N.languages.typescript; function me(e, t, r, n, i) { this.type = e, this.content = t, this.alias = r, this.length = (n || '').length | 0, this.greedy = !!i }me.stringify = function (e, t) { return typeof e == 'string' ? e : Array.isArray(e) ? e.map((r) => { return me.stringify(r, t) }).join('') : Ju(e.type)(e.content) }; function Ju(e) { return yo[e] || Vu } function wo(e) { return Gu(e, N.languages.javascript) } function Gu(e, t) { return N.tokenize(e, t).map(n => me.stringify(n)).join('') }m(); c(); p(); d(); f(); const bo = Re(Vi()); function Eo(e) { return (0, bo.default)(e) } const br = class e {
  firstLineNumber; lines; static read(t) {
    let r; try { r = or.readFileSync(t, 'utf-8') }
    catch { return null } return e.fromContent(r)
  }

  static fromContent(t) { const r = t.split(/\r?\n/); return new e(1, r) }constructor(t, r) { this.firstLineNumber = t, this.lines = r } get lastLineNumber() { return this.firstLineNumber + this.lines.length - 1 }mapLineAt(t, r) {
    if (t < this.firstLineNumber || t > this.lines.length + this.firstLineNumber)
      return this; const n = t - this.firstLineNumber; const i = [...this.lines]; return i[n] = r(i[n]), new e(this.firstLineNumber, i)
  }

  mapLines(t) { return new e(this.firstLineNumber, this.lines.map((r, n) => t(r, this.firstLineNumber + n))) }lineAt(t) { return this.lines[t - this.firstLineNumber] }prependSymbolAt(t, r) { return this.mapLines((n, i) => i === t ? `${r} ${n}` : `  ${n}`) }slice(t, r) {
    const n = this.lines.slice(t - 1, r).join(`
`); return new e(t, Eo(n).split(`
`))
  }

  highlight() {
    const t = wo(this.toString()); return new e(this.firstLineNumber, t.split(`
`))
  }

  toString() {
    return this.lines.join(`
`)
  }
}; const Wu = { red: Je, gray: Rt, dim: Tt, bold: de, underline: Ct, highlightSource: e => e.highlight() }; const Ku = { red: e => e, gray: e => e, dim: e => e, bold: e => e, underline: e => e, highlightSource: e => e }; function Hu({ message: e, originalMethod: t, isPanic: r, callArguments: n }) { return { functionName: `prisma.${t}()`, message: e, isPanic: r ?? !1, callArguments: n } } function zu({ callsite: e, message: t, originalMethod: r, isPanic: n, callArguments: i }, o) {
  const s = Hu({ message: t, originalMethod: r, isPanic: n, callArguments: i }); if (!e || typeof window < 'u' || y.env.NODE_ENV === 'production')
    return s; const a = e.getLocation(); if (!a || !a.lineNumber || !a.columnNumber)
    return s; const l = Math.max(1, a.lineNumber - 3); let u = br.read(a.fileName)?.slice(l, a.lineNumber); const g = u?.lineAt(a.lineNumber); if (u && g) {
    const h = Zu(g); const v = Yu(g); if (!v)
      return s; s.functionName = `${v.code})`, s.location = a, n || (u = u.mapLineAt(a.lineNumber, C => C.slice(0, v.openingBraceIndex))), u = o.highlightSource(u); const R = String(u.lastLineNumber).length; if (s.contextLines = u.mapLines((C, A) => `${o.gray(String(A).padStart(R))} ${C}`).mapLines(C => o.dim(C)).prependSymbolAt(a.lineNumber, o.bold(o.red('\u2192'))), i) { let C = h + R + 1; C += 2, s.callArguments = (0, xo.default)(i, C).slice(C) }
  } return s
} function Yu(e) { const t = Object.keys(It.ModelAction).join('|'); const n = new RegExp(String.raw`\.(${t})\(`).exec(e); if (n) { const i = n.index + n[0].length; const o = e.lastIndexOf(' ', n.index) + 1; return { code: e.slice(o, i), openingBraceIndex: i } } return null } function Zu(e) {
  let t = 0; for (let r = 0; r < e.length; r++) {
    if (e.charAt(r) !== ' ')
      return t; t++
  } return t
} function Xu({ functionName: e, location: t, message: r, isPanic: n, contextLines: i, callArguments: o }, s) {
  const a = ['']; const l = t ? ' in' : ':'; if (n ? (a.push(s.red(`Oops, an unknown error occurred! This is ${s.bold('on us')}, you did nothing wrong.`)), a.push(s.red(`It occurred in the ${s.bold(`\`${e}\``)} invocation${l}`))) : a.push(s.red(`Invalid ${s.bold(`\`${e}\``)} invocation${l}`)), t && a.push(s.underline(ec(t))), i) { a.push(''); const u = [i.toString()]; o && (u.push(o), u.push(s.dim(')'))), a.push(u.join('')), o && a.push('') }
  else {
    a.push(''), o && a.push(o), a.push('')
  } return a.push(r), a.join(`
`)
} function ec(e) { const t = [e.fileName]; return e.lineNumber && t.push(String(e.lineNumber)), e.columnNumber && t.push(String(e.columnNumber)), t.join(':') } function Er(e) { const t = e.showColors ? Wu : Ku; let r; return r = zu(e, t), Xu(r, t) }m(); c(); p(); d(); f(); const Ro = Re(kn()); m(); c(); p(); d(); f(); function Co(e, t, r) { const n = Ao(e); const i = tc(n); const o = nc(i); o ? xr(o, t, r) : t.addErrorMessage(() => 'Unknown error') } function Ao(e) { return e.errors.flatMap(t => t.kind === 'Union' ? Ao(t) : [t]) } function tc(e) { const t = new Map(); const r = []; for (const n of e) { if (n.kind !== 'InvalidArgumentType') { r.push(n); continue } const i = `${n.selectionPath.join('.')}:${n.argumentPath.join('.')}`; const o = t.get(i); o ? t.set(i, { ...n, argument: { ...n.argument, typeNames: rc(o.argument.typeNames, n.argument.typeNames) } }) : t.set(i, n) } return r.push(...t.values()), r } function rc(e, t) { return [...new Set(e.concat(t))] } function nc(e) { return vn(e, (t, r) => { const n = vo(t); const i = vo(r); return n !== i ? n - i : To(t) - To(r) }) } function vo(e) { let t = 0; return Array.isArray(e.selectionPath) && (t += e.selectionPath.length), Array.isArray(e.argumentPath) && (t += e.argumentPath.length), t } function To(e) { switch (e.kind) { case 'InvalidArgumentValue':case 'ValueTooLarge':return 20; case 'InvalidArgumentType':return 10; case 'RequiredArgumentMissing':return -10; default:return 0 } }m(); c(); p(); d(); f(); const ce = class {constructor(t, r) { this.name = t; this.value = r }isRequired = !1; makeRequired() { return this.isRequired = !0, this }write(t) { const { colors: { green: r } } = t.context; t.addMarginSymbol(r(this.isRequired ? '+' : '?')), t.write(r(this.name)), this.isRequired || t.write(r('?')), t.write(r(': ')), typeof this.value == 'string' ? t.write(r(this.value)) : t.write(this.value) }}; m(); c(); p(); d(); f(); m(); c(); p(); d(); f(); const ut = class {
  constructor(t = 0, r) { this.context = r; this.currentIndent = t }lines = []; currentLine = ''; currentIndent = 0; marginSymbol; afterNextNewLineCallback; write(t) { return typeof t == 'string' ? this.currentLine += t : t.write(this), this }writeJoined(t, r, n = (i, o) => o.write(i)) { const i = r.length - 1; for (let o = 0; o < r.length; o++)n(r[o], this), o !== i && this.write(t); return this }writeLine(t) { return this.write(t).newLine() }newLine() { this.lines.push(this.indentedCurrentLine()), this.currentLine = '', this.marginSymbol = void 0; const t = this.afterNextNewLineCallback; return this.afterNextNewLineCallback = void 0, t?.(), this }withIndent(t) { return this.indent(), t(this), this.unindent(), this }afterNextNewline(t) { return this.afterNextNewLineCallback = t, this }indent() { return this.currentIndent++, this }unindent() { return this.currentIndent > 0 && this.currentIndent--, this }addMarginSymbol(t) { return this.marginSymbol = t, this }toString() {
    return this.lines.concat(this.indentedCurrentLine()).join(`
`)
  }

  getCurrentLineLength() { return this.currentLine.length }indentedCurrentLine() { const t = this.currentLine.padStart(this.currentLine.length + 2 * this.currentIndent); return this.marginSymbol ? this.marginSymbol + t.slice(1) : t }
}; m(); c(); p(); d(); f(); m(); c(); p(); d(); f(); const Pr = class {constructor(t) { this.value = t }write(t) { t.write(this.value) }markAsError() { this.value.markAsError() }}; m(); c(); p(); d(); f(); const vr = e => e; const Tr = { bold: vr, red: vr, green: vr, dim: vr, enabled: !1 }; const So = { bold: de, red: Je, green: At, dim: Tt, enabled: !0 }; const ct = { write(e) { e.writeLine(',') } }; m(); c(); p(); d(); f(); const Pe = class {constructor(t) { this.contents = t }isUnderlined = !1; color = t => t; underline() { return this.isUnderlined = !0, this }setColor(t) { return this.color = t, this }write(t) { const r = t.getCurrentLineLength(); t.write(this.color(this.contents)), this.isUnderlined && t.afterNextNewline(() => { t.write(' '.repeat(r)).writeLine(this.color('~'.repeat(this.contents.length))) }) }}; m(); c(); p(); d(); f(); const je = class {hasError = !1; markAsError() { return this.hasError = !0, this }}; const pt = class extends je {items = []; addItem(t) { return this.items.push(new Pr(t)), this }getField(t) { return this.items[t] }getPrintWidth() { return this.items.length === 0 ? 2 : Math.max(...this.items.map(r => r.value.getPrintWidth())) + 2 }write(t) { if (this.items.length === 0) { this.writeEmpty(t); return } this.writeWithItems(t) }writeEmpty(t) { const r = new Pe('[]'); this.hasError && r.setColor(t.context.colors.red).underline(), t.write(r) }writeWithItems(t) { const { colors: r } = t.context; t.writeLine('[').withIndent(() => t.writeJoined(ct, this.items).newLine()).write(']'), this.hasError && t.afterNextNewline(() => { t.writeLine(r.red('~'.repeat(this.getPrintWidth()))) }) }asObject() {}}; const dt = class e extends je {
  fields = {}; suggestions = []; addField(t) { this.fields[t.name] = t }addSuggestion(t) { this.suggestions.push(t) }getField(t) { return this.fields[t] }getDeepField(t) {
    const [r, ...n] = t; const i = this.getField(r); if (!i)
      return; let o = i; for (const s of n) {
      let a; if (o.value instanceof e ? a = o.value.getField(s) : o.value instanceof pt && (a = o.value.getField(Number(s))), !a)
        return; o = a
    } return o
  }

  getDeepFieldValue(t) { return t.length === 0 ? this : this.getDeepField(t)?.value }hasField(t) { return !!this.getField(t) }removeAllFields() { this.fields = {} }removeField(t) { delete this.fields[t] }getFields() { return this.fields }isEmpty() { return Object.keys(this.fields).length === 0 }getFieldValue(t) { return this.getField(t)?.value }getDeepSubSelectionValue(t) {
    let r = this; for (const n of t) {
      if (!(r instanceof e))
        return; const i = r.getSubSelectionValue(n); if (!i)
        return; r = i
    } return r
  }

  getDeepSelectionParent(t) {
    const r = this.getSelectionParent(); if (!r)
      return; let n = r; for (const i of t) {
      const o = n.value.getFieldValue(i); if (!o || !(o instanceof e))
        return; const s = o.getSelectionParent(); if (!s)
        return; n = s
    } return n
  }

  getSelectionParent() {
    const t = this.getField('select')?.value.asObject(); if (t)
      return { kind: 'select', value: t }; const r = this.getField('include')?.value.asObject(); if (r)
      return { kind: 'include', value: r }
  }

  getSubSelectionValue(t) { return this.getSelectionParent()?.value.fields[t].value }getPrintWidth() { const t = Object.values(this.fields); return t.length == 0 ? 2 : Math.max(...t.map(n => n.getPrintWidth())) + 2 }write(t) { const r = Object.values(this.fields); if (r.length === 0 && this.suggestions.length === 0) { this.writeEmpty(t); return } this.writeWithContents(t, r) }asObject() { return this }writeEmpty(t) { const r = new Pe('{}'); this.hasError && r.setColor(t.context.colors.red).underline(), t.write(r) }writeWithContents(t, r) { t.writeLine('{').withIndent(() => { t.writeJoined(ct, [...r, ...this.suggestions]).newLine() }), t.write('}'), this.hasError && t.afterNextNewline(() => { t.writeLine(t.context.colors.red('~'.repeat(this.getPrintWidth()))) }) }
}; m(); c(); p(); d(); f(); const H = class extends je {constructor(r) { super(); this.text = r }getPrintWidth() { return this.text.length }write(r) { const n = new Pe(this.text); this.hasError && n.underline().setColor(r.context.colors.red), r.write(n) }asObject() {}}; m(); c(); p(); d(); f(); const Nt = class {fields = []; addField(t, r) { return this.fields.push({ write(n) { const { green: i, dim: o } = n.context.colors; n.write(i(o(`${t}: ${r}`))).addMarginSymbol(i(o('+'))) } }), this }write(t) { const { colors: { green: r } } = t.context; t.writeLine(r('{')).withIndent(() => { t.writeJoined(ct, this.fields).newLine() }).write(r('}')).addMarginSymbol(r('+')) }}; function xr(e, t, r) { switch (e.kind) { case 'MutuallyExclusiveFields':oc(e, t); break; case 'IncludeOnScalar':sc(e, t); break; case 'EmptySelection':ac(e, t, r); break; case 'UnknownSelectionField':pc(e, t); break; case 'InvalidSelectionValue':dc(e, t); break; case 'UnknownArgument':fc(e, t); break; case 'UnknownInputField':mc(e, t); break; case 'RequiredArgumentMissing':gc(e, t); break; case 'InvalidArgumentType':hc(e, t); break; case 'InvalidArgumentValue':yc(e, t); break; case 'ValueTooLarge':wc(e, t); break; case 'SomeFieldsMissing':bc(e, t); break; case 'TooManyFieldsGiven':Ec(e, t); break; case 'Union':Co(e, t, r); break; default:throw new Error(`not implemented: ${e.kind}`) } } function oc(e, t) { const r = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject(); r && (r.getField(e.firstField)?.markAsError(), r.getField(e.secondField)?.markAsError()), t.addErrorMessage(n => `Please ${n.bold('either')} use ${n.green(`\`${e.firstField}\``)} or ${n.green(`\`${e.secondField}\``)}, but ${n.red('not both')} at the same time.`) } function sc(e, t) {
  const [r, n] = Dt(e.selectionPath); const i = e.outputType; const o = t.arguments.getDeepSelectionParent(r)?.value; if (o && (o.getField(n)?.markAsError(), i)) {
    for (const s of i.fields)s.isRelation && o.addSuggestion(new ce(s.name, 'true'))
  } t.addErrorMessage((s) => {
    let a = `Invalid scalar field ${s.red(`\`${n}\``)} for ${s.bold('include')} statement`; return i ? a += ` on model ${s.bold(i.name)}. ${$t(s)}` : a += '.', a += `
Note that ${s.bold('include')} statements only accept relation fields.`, a
  })
} function ac(e, t, r) { const n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject(); if (n) { const i = n.getField('omit')?.value.asObject(); if (i) { lc(e, t, i); return } if (n.hasField('select')) { uc(e, t); return } } if (r?.[st(e.outputType.name)]) { cc(e, t); return }t.addErrorMessage(() => `Unknown field at "${e.selectionPath.join('.')} selection"`) } function lc(e, t, r) { r.removeAllFields(); for (const n of e.outputType.fields)r.addSuggestion(new ce(n.name, 'false')); t.addErrorMessage(n => `The ${n.red('omit')} statement includes every field of the model ${n.bold(e.outputType.name)}. At least one field must be included in the result`) } function uc(e, t) { const r = e.outputType; const n = t.arguments.getDeepSelectionParent(e.selectionPath)?.value; const i = n?.isEmpty() ?? !1; n && (n.removeAllFields(), Io(n, r)), t.addErrorMessage(o => i ? `The ${o.red('`select`')} statement for type ${o.bold(r.name)} must not be empty. ${$t(o)}` : `The ${o.red('`select`')} statement for type ${o.bold(r.name)} needs ${o.bold('at least one truthy value')}.`) } function cc(e, t) {
  const r = new Nt(); for (const i of e.outputType.fields)i.isRelation || r.addField(i.name, 'false'); const n = new ce('omit', r).makeRequired(); if (e.selectionPath.length === 0) {
    t.arguments.addSuggestion(n)
  }
  else { const [i, o] = Dt(e.selectionPath); const a = t.arguments.getDeepSelectionParent(i)?.value.asObject()?.getField(o); if (a) { const l = a?.value.asObject() ?? new dt(); l.addSuggestion(n), a.value = l } }t.addErrorMessage(i => `The global ${i.red('omit')} configuration excludes every field of the model ${i.bold(e.outputType.name)}. At least one field must be included in the result`)
} function pc(e, t) { const r = Mo(e.selectionPath, t); if (r.parentKind !== 'unknown') { r.field.markAsError(); const n = r.parent; switch (r.parentKind) { case 'select':Io(n, e.outputType); break; case 'include':xc(n, e.outputType); break; case 'omit':Pc(n, e.outputType); break } }t.addErrorMessage((n) => { const i = [`Unknown field ${n.red(`\`${r.fieldName}\``)}`]; return r.parentKind !== 'unknown' && i.push(`for ${n.bold(r.parentKind)} statement`), i.push(`on model ${n.bold(`\`${e.outputType.name}\``)}.`), i.push($t(n)), i.join(' ') }) } function dc(e, t) { const r = Mo(e.selectionPath, t); r.parentKind !== 'unknown' && r.field.value.markAsError(), t.addErrorMessage(n => `Invalid value for selection field \`${n.red(r.fieldName)}\`: ${e.underlyingError}`) } function fc(e, t) { const r = e.argumentPath[0]; const n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject(); n && (n.getField(r)?.markAsError(), vc(n, e.arguments)), t.addErrorMessage(i => ko(i, r, e.arguments.map(o => o.name))) } function mc(e, t) { const [r, n] = Dt(e.argumentPath); const i = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject(); if (i) { i.getDeepField(e.argumentPath)?.markAsError(); const o = i.getDeepFieldValue(r)?.asObject(); o && _o(o, e.inputType) }t.addErrorMessage(o => ko(o, n, e.inputType.fields.map(s => s.name))) } function ko(e, t, r) { const n = [`Unknown argument \`${e.red(t)}\`.`]; const i = Cc(t, r); return i && n.push(`Did you mean \`${e.green(i)}\`?`), r.length > 0 && n.push($t(e)), n.join(' ') } function gc(e, t) {
  let r; t.addErrorMessage(l => r?.value instanceof H && r.value.text === 'null' ? `Argument \`${l.green(o)}\` must not be ${l.red('null')}.` : `Argument \`${l.green(o)}\` is missing.`); const n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject(); if (!n)
    return; let [i, o] = Dt(e.argumentPath); const s = new Nt(); const a = n.getDeepFieldValue(i)?.asObject(); if (a) {
    if (r = a.getField(o), r && a.removeField(o), e.inputTypes.length === 1 && e.inputTypes[0].kind === 'object') { for (const l of e.inputTypes[0].fields)s.addField(l.name, l.typeNames.join(' | ')); a.addSuggestion(new ce(o, s).makeRequired()) }
    else { const l = e.inputTypes.map(Oo).join(' | '); a.addSuggestion(new ce(o, l).makeRequired()) }
  }
} function Oo(e) { return e.kind === 'list' ? `${Oo(e.elementType)}[]` : e.name } function hc(e, t) { const r = e.argument.name; const n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject(); n && n.getDeepFieldValue(e.argumentPath)?.markAsError(), t.addErrorMessage((i) => { const o = Cr('or', e.argument.typeNames.map(s => i.green(s))); return `Argument \`${i.bold(r)}\`: Invalid value provided. Expected ${o}, provided ${i.red(e.inferredType)}.` }) } function yc(e, t) { const r = e.argument.name; const n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject(); n && n.getDeepFieldValue(e.argumentPath)?.markAsError(), t.addErrorMessage((i) => { const o = [`Invalid value for argument \`${i.bold(r)}\``]; if (e.underlyingError && o.push(`: ${e.underlyingError}`), o.push('.'), e.argument.typeNames.length > 0) { const s = Cr('or', e.argument.typeNames.map(a => i.green(a))); o.push(` Expected ${s}.`) } return o.join('') }) } function wc(e, t) { const r = e.argument.name; const n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject(); let i; if (n) { const s = n.getDeepField(e.argumentPath)?.value; s?.markAsError(), s instanceof H && (i = s.text) }t.addErrorMessage((o) => { const s = ['Unable to fit value']; return i && s.push(o.red(i)), s.push(`into a 64-bit signed integer for field \`${o.bold(r)}\``), s.join(' ') }) } function bc(e, t) { const r = e.argumentPath[e.argumentPath.length - 1]; const n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject(); if (n) { const i = n.getDeepFieldValue(e.argumentPath)?.asObject(); i && _o(i, e.inputType) }t.addErrorMessage((i) => { const o = [`Argument \`${i.bold(r)}\` of type ${i.bold(e.inputType.name)} needs`]; return e.constraints.minFieldCount === 1 ? e.constraints.requiredFields ? o.push(`${i.green('at least one of')} ${Cr('or', e.constraints.requiredFields.map(s => `\`${i.bold(s)}\``))} arguments.`) : o.push(`${i.green('at least one')} argument.`) : o.push(`${i.green(`at least ${e.constraints.minFieldCount}`)} arguments.`), o.push($t(i)), o.join(' ') }) } function Ec(e, t) { const r = e.argumentPath[e.argumentPath.length - 1]; const n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject(); let i = []; if (n) { const o = n.getDeepFieldValue(e.argumentPath)?.asObject(); o && (o.markAsError(), i = Object.keys(o.getFields())) }t.addErrorMessage((o) => { const s = [`Argument \`${o.bold(r)}\` of type ${o.bold(e.inputType.name)} needs`]; return e.constraints.minFieldCount === 1 && e.constraints.maxFieldCount == 1 ? s.push(`${o.green('exactly one')} argument,`) : e.constraints.maxFieldCount == 1 ? s.push(`${o.green('at most one')} argument,`) : s.push(`${o.green(`at most ${e.constraints.maxFieldCount}`)} arguments,`), s.push(`but you provided ${Cr('and', i.map(a => o.red(a)))}. Please choose`), e.constraints.maxFieldCount === 1 ? s.push('one.') : s.push(`${e.constraints.maxFieldCount}.`), s.join(' ') }) } function Io(e, t) { for (const r of t.fields)e.hasField(r.name) || e.addSuggestion(new ce(r.name, 'true')) } function xc(e, t) { for (const r of t.fields)r.isRelation && !e.hasField(r.name) && e.addSuggestion(new ce(r.name, 'true')) } function Pc(e, t) { for (const r of t.fields)!e.hasField(r.name) && !r.isRelation && e.addSuggestion(new ce(r.name, 'true')) } function vc(e, t) { for (const r of t)e.hasField(r.name) || e.addSuggestion(new ce(r.name, r.typeNames.join(' | '))) } function Mo(e, t) {
  const [r, n] = Dt(e); const i = t.arguments.getDeepSubSelectionValue(r)?.asObject(); if (!i)
    return { parentKind: 'unknown', fieldName: n }; const o = i.getFieldValue('select')?.asObject(); const s = i.getFieldValue('include')?.asObject(); const a = i.getFieldValue('omit')?.asObject(); let l = o?.getField(n); return o && l ? { parentKind: 'select', parent: o, field: l, fieldName: n } : (l = s?.getField(n), s && l ? { parentKind: 'include', field: l, parent: s, fieldName: n } : (l = a?.getField(n), a && l ? { parentKind: 'omit', field: l, parent: a, fieldName: n } : { parentKind: 'unknown', fieldName: n }))
} function _o(e, t) {
  if (t.kind === 'object') {
    for (const r of t.fields)e.hasField(r.name) || e.addSuggestion(new ce(r.name, r.typeNames.join(' | ')))
  }
} function Dt(e) {
  const t = [...e]; const r = t.pop(); if (!r)
    throw new Error('unexpected empty path'); return [t, r]
} function $t({ green: e, enabled: t }) { return `Available options are ${t ? `listed in ${e('green')}` : 'marked with ?'}.` } function Cr(e, t) {
  if (t.length === 1)
    return t[0]; const r = [...t]; const n = r.pop(); return `${r.join(', ')} ${e} ${n}`
} const Tc = 3; function Cc(e, t) { let r = 1 / 0; let n; for (const i of t) { const o = (0, Ro.default)(e, i); o > Tc || o < r && (r = o, n = i) } return n }m(); c(); p(); d(); f(); m(); c(); p(); d(); f(); function Fo(e) { return e.substring(0, 1).toLowerCase() + e.substring(1) }m(); c(); p(); d(); f(); const Bt = class {modelName; name; typeName; isList; isEnum; constructor(t, r, n, i, o) { this.modelName = t, this.name = r, this.typeName = n, this.isList = i, this.isEnum = o }_toGraphQLInputType() { const t = this.isList ? 'List' : ''; const r = this.isEnum ? 'Enum' : ''; return `${t}${r}${this.typeName}FieldRefInput<${this.modelName}>` }}; function ft(e) { return e instanceof Bt }m(); c(); p(); d(); f(); const Ar = Symbol(); const On = new WeakMap(); const _e = class {constructor(t) { t === Ar ? On.set(this, `Prisma.${this._getName()}`) : On.set(this, `new Prisma.${this._getNamespace()}.${this._getName()}()`) }_getName() { return this.constructor.name }toString() { return On.get(this) }}; const jt = class extends _e {_getNamespace() { return 'NullTypes' }}; const qt = class extends jt {}; In(qt, 'DbNull'); const Ut = class extends jt {}; In(Ut, 'JsonNull'); const Vt = class extends jt {}; In(Vt, 'AnyNull'); var Sr = { classes: { DbNull: qt, JsonNull: Ut, AnyNull: Vt }, instances: { DbNull: new qt(Ar), JsonNull: new Ut(Ar), AnyNull: new Vt(Ar) } }; function In(e, t) { Object.defineProperty(e, 'name', { value: t, configurable: !0 }) }m(); c(); p(); d(); f(); const Lo = ': '; const Rr = class {constructor(t, r) { this.name = t; this.value = r }hasError = !1; markAsError() { this.hasError = !0 }getPrintWidth() { return this.name.length + this.value.getPrintWidth() + Lo.length }write(t) { const r = new Pe(this.name); this.hasError && r.underline().setColor(t.context.colors.red), t.write(r).write(Lo).write(this.value) }}; const Mn = class {
  arguments; errorMessages = []; constructor(t) { this.arguments = t }write(t) { t.write(this.arguments) }addErrorMessage(t) { this.errorMessages.push(t) }renderAllMessages(t) {
    return this.errorMessages.map(r => r(t)).join(`
`)
  }
}; function mt(e) { return new Mn(No(e)) } function No(e) { const t = new dt(); for (const [r, n] of Object.entries(e)) { const i = new Rr(r, Do(n)); t.addField(i) } return t } function Do(e) {
  if (typeof e == 'string')
    return new H(JSON.stringify(e)); if (typeof e == 'number' || typeof e == 'boolean')
    return new H(String(e)); if (typeof e == 'bigint')
    return new H(`${e}n`); if (e === null)
    return new H('null'); if (e === void 0)
    return new H('undefined'); if (lt(e))
    return new H(`new Prisma.Decimal("${e.toFixed()}")`); if (e instanceof Uint8Array)
    return w.Buffer.isBuffer(e) ? new H(`Buffer.alloc(${e.byteLength})`) : new H(`new Uint8Array(${e.byteLength})`); if (e instanceof Date) { const t = yr(e) ? e.toISOString() : 'Invalid Date'; return new H(`new Date("${t}")`) } return e instanceof _e ? new H(`Prisma.${e._getName()}`) : ft(e) ? new H(`prisma.${Fo(e.modelName)}.$fields.${e.name}`) : Array.isArray(e) ? Ac(e) : typeof e == 'object' ? No(e) : new H(Object.prototype.toString.call(e))
} function Ac(e) { const t = new pt(); for (const r of e)t.addItem(Do(r)); return t } function kr(e, t) { const r = t === 'pretty' ? So : Tr; const n = e.renderAllMessages(r); const i = new ut(0, { colors: r }).write(e).toString(); return { message: n, args: i } } function Or({ args: e, errors: t, errorFormat: r, callsite: n, originalMethod: i, clientVersion: o, globalOmit: s }) { const a = mt(e); for (const h of t)xr(h, a, s); const { message: l, args: u } = kr(a, r); const g = Er({ message: l, callsite: n, originalMethod: i, showColors: r === 'pretty', callArguments: u }); throw new X(g, { clientVersion: o }) }m(); c(); p(); d(); f(); m(); c(); p(); d(); f(); const ve = class {
  _map = new Map(); get(t) { return this._map.get(t)?.value }set(t, r) { this._map.set(t, { value: r }) }getOrCreate(t, r) {
    const n = this._map.get(t); if (n)
      return n.value; const i = r(); return this.set(t, i), i
  }
}; m(); c(); p(); d(); f(); function Qt(e) { let t; return { get() { return t || (t = { value: e() }), t.value } } }m(); c(); p(); d(); f(); function Te(e) { return e.replace(/^./, t => t.toLowerCase()) }m(); c(); p(); d(); f(); function Bo(e, t, r) { const n = Te(r); return !t.result || !(t.result.$allModels || t.result[n]) ? e : Sc({ ...e, ...$o(t.name, e, t.result.$allModels), ...$o(t.name, e, t.result[n]) }) } function Sc(e) { const t = new ve(); const r = (n, i) => t.getOrCreate(n, () => i.has(n) ? [n] : (i.add(n), e[n] ? e[n].needs.flatMap(o => r(o, i)) : [n])); return rt(e, n => ({ ...n, needs: r(n.name, new Set()) })) } function $o(e, t, r) { return r ? rt(r, ({ needs: n, compute: i }, o) => ({ name: o, needs: n ? Object.keys(n).filter(s => n[s]) : [], compute: Rc(t, o, i) })) : {} } function Rc(e, t, r) { const n = e?.[t]?.compute; return n ? i => r({ ...i, [t]: n(i) }) : r } function jo(e, t) {
  if (!t)
    return e; const r = { ...e }; for (const n of Object.values(t)) {
    if (e[n.name]) {
      for (const i of n.needs)r[i] = !0
    }
  } return r
} function qo(e, t) {
  if (!t)
    return e; const r = { ...e }; for (const n of Object.values(t)) {
    if (!e[n.name]) {
      for (const i of n.needs) delete r[i]
    }
  } return r
} const Ir = class {constructor(t, r) { this.extension = t; this.previous = r }computedFieldsCache = new ve(); modelExtensionsCache = new ve(); queryCallbacksCache = new ve(); clientExtensions = Qt(() => this.extension.client ? { ...this.previous?.getAllClientExtensions(), ...this.extension.client } : this.previous?.getAllClientExtensions()); batchCallbacks = Qt(() => { const t = this.previous?.getAllBatchQueryCallbacks() ?? []; const r = this.extension.query?.$__internalBatch; return r ? t.concat(r) : t }); getAllComputedFields(t) { return this.computedFieldsCache.getOrCreate(t, () => Bo(this.previous?.getAllComputedFields(t), this.extension, t)) }getAllClientExtensions() { return this.clientExtensions.get() }getAllModelExtensions(t) { return this.modelExtensionsCache.getOrCreate(t, () => { const r = Te(t); return !this.extension.model || !(this.extension.model[r] || this.extension.model.$allModels) ? this.previous?.getAllModelExtensions(t) : { ...this.previous?.getAllModelExtensions(t), ...this.extension.model.$allModels, ...this.extension.model[r] } }) }getAllQueryCallbacks(t, r) { return this.queryCallbacksCache.getOrCreate(`${t}:${r}`, () => { const n = this.previous?.getAllQueryCallbacks(t, r) ?? []; const i = []; const o = this.extension.query; return !o || !(o[t] || o.$allModels || o[r] || o.$allOperations) ? n : (o[t] !== void 0 && (o[t][r] !== void 0 && i.push(o[t][r]), o[t].$allOperations !== void 0 && i.push(o[t].$allOperations)), t !== '$none' && o.$allModels !== void 0 && (o.$allModels[r] !== void 0 && i.push(o.$allModels[r]), o.$allModels.$allOperations !== void 0 && i.push(o.$allModels.$allOperations)), o[r] !== void 0 && i.push(o[r]), o.$allOperations !== void 0 && i.push(o.$allOperations), n.concat(i)) }) }getAllBatchQueryCallbacks() { return this.batchCallbacks.get() }}; const gt = class e {constructor(t) { this.head = t } static empty() { return new e() } static single(t) { return new e(new Ir(t)) }isEmpty() { return this.head === void 0 }append(t) { return new e(new Ir(t, this.head)) }getAllComputedFields(t) { return this.head?.getAllComputedFields(t) }getAllClientExtensions() { return this.head?.getAllClientExtensions() }getAllModelExtensions(t) { return this.head?.getAllModelExtensions(t) }getAllQueryCallbacks(t, r) { return this.head?.getAllQueryCallbacks(t, r) ?? [] }getAllBatchQueryCallbacks() { return this.head?.getAllBatchQueryCallbacks() ?? [] }}; m(); c(); p(); d(); f(); const Mr = class {constructor(t) { this.name = t }}; function Uo(e) { return e instanceof Mr } function Vo(e) { return new Mr(e) }m(); c(); p(); d(); f(); m(); c(); p(); d(); f(); const Qo = Symbol(); const Jt = class {
  constructor(t) {
    if (t !== Qo)
      throw new Error('Skip instance can not be constructed directly')
  }

  ifUndefined(t) { return t === void 0 ? _r : t }
}; var _r = new Jt(Qo); function Ce(e) { return e instanceof Jt } const kc = { findUnique: 'findUnique', findUniqueOrThrow: 'findUniqueOrThrow', findFirst: 'findFirst', findFirstOrThrow: 'findFirstOrThrow', findMany: 'findMany', count: 'aggregate', create: 'createOne', createMany: 'createMany', createManyAndReturn: 'createManyAndReturn', update: 'updateOne', updateMany: 'updateMany', updateManyAndReturn: 'updateManyAndReturn', upsert: 'upsertOne', delete: 'deleteOne', deleteMany: 'deleteMany', executeRaw: 'executeRaw', queryRaw: 'queryRaw', aggregate: 'aggregate', groupBy: 'groupBy', runCommandRaw: 'runCommandRaw', findRaw: 'findRaw', aggregateRaw: 'aggregateRaw' }; const Jo = 'explicitly `undefined` values are not allowed'; function Fr({ modelName: e, action: t, args: r, runtimeDataModel: n, extensions: i = gt.empty(), callsite: o, clientMethod: s, errorFormat: a, clientVersion: l, previewFeatures: u, globalOmit: g }) { const h = new _n({ runtimeDataModel: n, modelName: e, action: t, rootArgs: r, callsite: o, extensions: i, selectionPath: [], argumentPath: [], originalMethod: s, errorFormat: a, clientVersion: l, previewFeatures: u, globalOmit: g }); return { modelName: e, action: kc[t], query: Gt(r, h) } } function Gt({ select: e, include: t, ...r } = {}, n) { const i = r.omit; return delete r.omit, { arguments: Wo(r, n), selection: Oc(e, t, i, n) } } function Oc(e, t, r, n) { return e ? (t ? n.throwValidationError({ kind: 'MutuallyExclusiveFields', firstField: 'include', secondField: 'select', selectionPath: n.getSelectionPath() }) : r && n.throwValidationError({ kind: 'MutuallyExclusiveFields', firstField: 'omit', secondField: 'select', selectionPath: n.getSelectionPath() }), Fc(e, n)) : Ic(n, t, r) } function Ic(e, t, r) { const n = {}; return e.modelOrType && !e.isRawAction() && (n.$composites = !0, n.$scalars = !0), t && Mc(n, t, e), _c(n, r, e), n } function Mc(e, t, r) {
  for (const [n, i] of Object.entries(t)) {
    if (Ce(i))
      continue; const o = r.nestSelection(n); if (Fn(i, o), i === !1 || i === void 0) { e[n] = !1; continue } const s = r.findField(n); if (s && s.kind !== 'object' && r.throwValidationError({ kind: 'IncludeOnScalar', selectionPath: r.getSelectionPath().concat(n), outputType: r.getOutputTypeDescription() }), s) { e[n] = Gt(i === !0 ? {} : i, o); continue } if (i === !0) { e[n] = !0; continue }e[n] = Gt(i, o)
  }
} function _c(e, t, r) {
  const n = r.getComputedFields(); const i = { ...r.getGlobalOmit(), ...t }; const o = qo(i, n); for (const [s, a] of Object.entries(o)) {
    if (Ce(a))
      continue; Fn(a, r.nestSelection(s)); const l = r.findField(s); n?.[s] && !l || (e[s] = !a)
  }
} function Fc(e, t) {
  const r = {}; const n = t.getComputedFields(); const i = jo(e, n); for (const [o, s] of Object.entries(i)) {
    if (Ce(s))
      continue; const a = t.nestSelection(o); Fn(s, a); const l = t.findField(o); if (!(n?.[o] && !l)) { if (s === !1 || s === void 0 || Ce(s)) { r[o] = !1; continue } if (s === !0) { l?.kind === 'object' ? r[o] = Gt({}, a) : r[o] = !0; continue }r[o] = Gt(s, a) }
  } return r
} function Go(e, t) {
  if (e === null)
    return null; if (typeof e == 'string' || typeof e == 'number' || typeof e == 'boolean')
    return e; if (typeof e == 'bigint')
    return { $type: 'BigInt', value: String(e) }; if (at(e)) {
    if (yr(e))
      return { $type: 'DateTime', value: e.toISOString() }; t.throwValidationError({ kind: 'InvalidArgumentValue', selectionPath: t.getSelectionPath(), argumentPath: t.getArgumentPath(), argument: { name: t.getArgumentName(), typeNames: ['Date'] }, underlyingError: 'Provided Date object is invalid' })
  } if (Uo(e))
    return { $type: 'Param', value: e.name }; if (ft(e))
    return { $type: 'FieldRef', value: { _ref: e.name, _container: e.modelName } }; if (Array.isArray(e))
    return Lc(e, t); if (ArrayBuffer.isView(e)) { const { buffer: r, byteOffset: n, byteLength: i } = e; return { $type: 'Bytes', value: w.Buffer.from(r, n, i).toString('base64') } } if (Nc(e))
    return e.values; if (lt(e))
    return { $type: 'Decimal', value: e.toFixed() }; if (e instanceof _e) {
    if (e !== Sr.instances[e._getName()])
      throw new Error('Invalid ObjectEnumValue'); return { $type: 'Enum', value: e._getName() }
  } if (Dc(e))
    return e.toJSON(); if (typeof e == 'object')
    return Wo(e, t); t.throwValidationError({ kind: 'InvalidArgumentValue', selectionPath: t.getSelectionPath(), argumentPath: t.getArgumentPath(), argument: { name: t.getArgumentName(), typeNames: [] }, underlyingError: `We could not serialize ${Object.prototype.toString.call(e)} value. Serialize the object to JSON or implement a ".toJSON()" method on it` })
} function Wo(e, t) {
  if (e.$type)
    return { $type: 'Raw', value: e }; const r = {}; for (const n in e) { const i = e[n]; const o = t.nestArgument(n); Ce(i) || (i !== void 0 ? r[n] = Go(i, o) : t.isPreviewFeatureOn('strictUndefinedChecks') && t.throwValidationError({ kind: 'InvalidArgumentValue', argumentPath: o.getArgumentPath(), selectionPath: t.getSelectionPath(), argument: { name: t.getArgumentName(), typeNames: [] }, underlyingError: Jo })) } return r
} function Lc(e, t) { const r = []; for (let n = 0; n < e.length; n++) { const i = t.nestArgument(String(n)); const o = e[n]; if (o === void 0 || Ce(o)) { const s = o === void 0 ? 'undefined' : 'Prisma.skip'; t.throwValidationError({ kind: 'InvalidArgumentValue', selectionPath: i.getSelectionPath(), argumentPath: i.getArgumentPath(), argument: { name: `${t.getArgumentName()}[${n}]`, typeNames: [] }, underlyingError: `Can not use \`${s}\` value within array. Use \`null\` or filter out \`${s}\` values` }) }r.push(Go(o, i)) } return r } function Nc(e) { return typeof e == 'object' && e !== null && e.__prismaRawParameters__ === !0 } function Dc(e) { return typeof e == 'object' && e !== null && typeof e.toJSON == 'function' } function Fn(e, t) { e === void 0 && t.isPreviewFeatureOn('strictUndefinedChecks') && t.throwValidationError({ kind: 'InvalidSelectionValue', selectionPath: t.getSelectionPath(), underlyingError: Jo }) } var _n = class e {
  constructor(t) { this.params = t; this.params.modelName && (this.modelOrType = this.params.runtimeDataModel.models[this.params.modelName] ?? this.params.runtimeDataModel.types[this.params.modelName]) }modelOrType; throwValidationError(t) { Or({ errors: [t], originalMethod: this.params.originalMethod, args: this.params.rootArgs ?? {}, callsite: this.params.callsite, errorFormat: this.params.errorFormat, clientVersion: this.params.clientVersion, globalOmit: this.params.globalOmit }) }getSelectionPath() { return this.params.selectionPath }getArgumentPath() { return this.params.argumentPath }getArgumentName() { return this.params.argumentPath[this.params.argumentPath.length - 1] }getOutputTypeDescription() {
    if (!(!this.params.modelName || !this.modelOrType))
      return { name: this.params.modelName, fields: this.modelOrType.fields.map(t => ({ name: t.name, typeName: 'boolean', isRelation: t.kind === 'object' })) }
  }

  isRawAction() { return ['executeRaw', 'queryRaw', 'runCommandRaw', 'findRaw', 'aggregateRaw'].includes(this.params.action) }isPreviewFeatureOn(t) { return this.params.previewFeatures.includes(t) }getComputedFields() {
    if (this.params.modelName)
      return this.params.extensions.getAllComputedFields(this.params.modelName)
  }

  findField(t) { return this.modelOrType?.fields.find(r => r.name === t) }nestSelection(t) { const r = this.findField(t); const n = r?.kind === 'object' ? r.type : void 0; return new e({ ...this.params, modelName: n, selectionPath: this.params.selectionPath.concat(t) }) }getGlobalOmit() { return this.params.modelName && this.shouldApplyGlobalOmit() ? this.params.globalOmit?.[st(this.params.modelName)] ?? {} : {} }shouldApplyGlobalOmit() { switch (this.params.action) { case 'findFirst':case 'findFirstOrThrow':case 'findUniqueOrThrow':case 'findMany':case 'upsert':case 'findUnique':case 'createManyAndReturn':case 'create':case 'update':case 'updateManyAndReturn':case 'delete':return !0; case 'executeRaw':case 'aggregateRaw':case 'runCommandRaw':case 'findRaw':case 'createMany':case 'deleteMany':case 'groupBy':case 'updateMany':case 'count':case 'aggregate':case 'queryRaw':return !1; default:Ie(this.params.action, 'Unknown action') } }nestArgument(t) { return new e({ ...this.params, argumentPath: this.params.argumentPath.concat(t) }) }
}; m(); c(); p(); d(); f(); function Ko(e) {
  if (!e._hasPreviewFlag('metrics'))
    throw new X('`metrics` preview feature must be enabled in order to access metrics API', { clientVersion: e._clientVersion })
} var ht = class {_client; constructor(t) { this._client = t }prometheus(t) { return Ko(this._client), this._client._engine.metrics({ format: 'prometheus', ...t }) }json(t) { return Ko(this._client), this._client._engine.metrics({ format: 'json', ...t }) }}; m(); c(); p(); d(); f(); function Ho(e) { return { models: Ln(e.models), enums: Ln(e.enums), types: Ln(e.types) } } function Ln(e) { const t = {}; for (const { name: r, ...n } of e)t[r] = n; return t } function zo(e, t) { const r = Qt(() => $c(t)); Object.defineProperty(e, 'dmmf', { get: () => r.get() }) } function $c(e) { return { datamodel: { models: Nn(e.models), enums: Nn(e.enums), types: Nn(e.types) } } } function Nn(e) { return Object.entries(e).map(([t, r]) => ({ name: t, ...r })) }m(); c(); p(); d(); f(); const Dn = new WeakMap(); const Lr = '$$PrismaTypedSql'; const Wt = class {constructor(t, r) { Dn.set(this, { sql: t, values: r }), Object.defineProperty(this, Lr, { value: Lr }) } get sql() { return Dn.get(this).sql } get values() { return Dn.get(this).values }}; function Yo(e) { return (...t) => new Wt(e, t) } function Nr(e) { return e != null && e[Lr] === Lr }m(); c(); p(); d(); f(); const fa = Re(Zo()); m(); c(); p(); d(); f(); Gi(); fn(); gn(); m(); c(); p(); d(); f(); var se = class e {
  constructor(t, r) {
    if (t.length - 1 !== r.length)
      throw t.length === 0 ? new TypeError('Expected at least 1 string') : new TypeError(`Expected ${t.length} strings to have ${t.length - 1} values`); const n = r.reduce((s, a) => s + (a instanceof e ? a.values.length : 1), 0); this.values = new Array(n), this.strings = new Array(n + 1), this.strings[0] = t[0]; let i = 0; let o = 0; for (;i < r.length;) {
      const s = r[i++]; const a = t[i]; if (s instanceof e) { this.strings[o] += s.strings[0]; let l = 0; for (;l < s.values.length;) this.values[o++] = s.values[l++], this.strings[o] = s.strings[l]; this.strings[o] += a }
      else {
        this.values[o++] = s, this.strings[o] = a
      }
    }
  }

  get sql() { const t = this.strings.length; let r = 1; let n = this.strings[0]; for (;r < t;)n += `?${this.strings[r++]}`; return n } get statement() { const t = this.strings.length; let r = 1; let n = this.strings[0]; for (;r < t;)n += `:${r}${this.strings[r++]}`; return n } get text() { const t = this.strings.length; let r = 1; let n = this.strings[0]; for (;r < t;)n += `$${r}${this.strings[r++]}`; return n }inspect() { return { sql: this.sql, statement: this.statement, text: this.text, values: this.values } }
}; function Xo(e, t = ',', r = '', n = '') {
  if (e.length === 0)
    throw new TypeError('Expected `join([])` to be called with an array of multiple elements, but got an empty array'); return new se([r, ...Array.from({ length: e.length - 1 }).fill(t), n], e)
} function $n(e) { return new se([e], []) } var es = $n(''); function Bn(e, ...t) { return new se(e, t) }m(); c(); p(); d(); f(); m(); c(); p(); d(); f(); function Kt(e) { return { getKeys() { return Object.keys(e) }, getPropertyValue(t) { return e[t] } } }m(); c(); p(); d(); f(); function te(e, t) { return { getKeys() { return [e] }, getPropertyValue() { return t() } } }m(); c(); p(); d(); f(); function Ke(e) { const t = new ve(); return { getKeys() { return e.getKeys() }, getPropertyValue(r) { return t.getOrCreate(r, () => e.getPropertyValue(r)) }, getPropertyDescriptor(r) { return e.getPropertyDescriptor?.(r) } } }m(); c(); p(); d(); f(); m(); c(); p(); d(); f(); const Dr = { enumerable: !0, configurable: !0, writable: !0 }; function $r(e) { const t = new Set(e); return { getPrototypeOf: () => Object.prototype, getOwnPropertyDescriptor: () => Dr, has: (r, n) => t.has(n), set: (r, n, i) => t.add(n) && Reflect.set(r, n, i), ownKeys: () => [...t] } } const ts = Symbol.for('nodejs.util.inspect.custom'); function ge(e, t) {
  const r = jc(t); const n = new Set(); const i = new Proxy(e, { get(o, s) {
    if (n.has(s))
      return o[s]; const a = r.get(s); return a ? a.getPropertyValue(s) : o[s]
  }, has(o, s) {
    if (n.has(s))
      return !0; const a = r.get(s); return a ? a.has?.(s) ?? !0 : Reflect.has(o, s)
  }, ownKeys(o) { const s = rs(Reflect.ownKeys(o), r); const a = rs(Array.from(r.keys()), r); return [...new Set([...s, ...a, ...n])] }, set(o, s, a) { return r.get(s)?.getPropertyDescriptor?.(s)?.writable === !1 ? !1 : (n.add(s), Reflect.set(o, s, a)) }, getOwnPropertyDescriptor(o, s) {
    const a = Reflect.getOwnPropertyDescriptor(o, s); if (a && !a.configurable)
      return a; const l = r.get(s); return l ? l.getPropertyDescriptor ? { ...Dr, ...l?.getPropertyDescriptor(s) } : Dr : a
  }, defineProperty(o, s, a) { return n.add(s), Reflect.defineProperty(o, s, a) }, getPrototypeOf: () => Object.prototype }); return i[ts] = function () { const o = { ...this }; return delete o[ts], o }, i
} function jc(e) { const t = new Map(); for (const r of e) { const n = r.getKeys(); for (const i of n)t.set(i, r) } return t } function rs(e, t) { return e.filter(r => t.get(r)?.has?.(r) ?? !0) }m(); c(); p(); d(); f(); function yt(e) { return { getKeys() { return e }, has() { return !1 }, getPropertyValue() {} } }m(); c(); p(); d(); f(); function Br(e, t) { return { batch: e, transaction: t?.kind === 'batch' ? { isolationLevel: t.options.isolationLevel } : void 0 } }m(); c(); p(); d(); f(); function ns(e) {
  if (e === void 0)
    return ''; const t = mt(e); return new ut(0, { colors: Tr }).write(t).toString()
}m(); c(); p(); d(); f(); const qc = 'P2037'; function jr({ error: e, user_facing_error: t }, r, n) { return t.error_code ? new ie(Uc(t, n), { code: t.error_code, clientVersion: r, meta: t.meta, batchRequestIdx: t.batch_request_idx }) : new G(e, { clientVersion: r, batchRequestIdx: t.batch_request_idx }) } function Uc(e, t) {
  let r = e.message; return (t === 'postgresql' || t === 'postgres' || t === 'mysql') && e.error_code === qc && (r += `
Prisma Accelerate has built-in connection pooling to prevent such errors: https://pris.ly/client/error-accelerate`), r
}m(); c(); p(); d(); f(); m(); c(); p(); d(); f(); m(); c(); p(); d(); f(); m(); c(); p(); d(); f(); m(); c(); p(); d(); f(); const Ht = '<unknown>'; function is(e) {
  const t = e.split(`
`); return t.reduce((r, n) => { const i = Jc(n) || Wc(n) || zc(n) || ep(n) || Zc(n); return i && r.push(i), r }, [])
} const Vc = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|rsc|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i; const Qc = /\((\S*):(\d+):(\d+)\)/; function Jc(e) {
  const t = Vc.exec(e); if (!t)
    return null; const r = t[2] && t[2].indexOf('native') === 0; const n = t[2] && t[2].indexOf('eval') === 0; const i = Qc.exec(t[2]); return n && i != null && (t[2] = i[1], t[3] = i[2], t[4] = i[3]), { file: r ? null : t[2], methodName: t[1] || Ht, arguments: r ? [t[2]] : [], lineNumber: t[3] ? +t[3] : null, column: t[4] ? +t[4] : null }
} const Gc = /^\s*at (?:(.+) )?\(?((?:file|ms-appx|https?|webpack|rsc|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i; function Wc(e) { const t = Gc.exec(e); return t ? { file: t[2], methodName: t[1] || Ht, arguments: [], lineNumber: +t[3], column: t[4] ? +t[4] : null } : null } const Kc = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|rsc|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i; const Hc = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i; function zc(e) {
  const t = Kc.exec(e); if (!t)
    return null; const r = t[3] && t[3].includes(' > eval'); const n = Hc.exec(t[3]); return r && n != null && (t[3] = n[1], t[4] = n[2], t[5] = null), { file: t[3], methodName: t[1] || Ht, arguments: t[2] ? t[2].split(',') : [], lineNumber: t[4] ? +t[4] : null, column: t[5] ? +t[5] : null }
} const Yc = /^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/; function Zc(e) { const t = Yc.exec(e); return t ? { file: t[3], methodName: t[1] || Ht, arguments: [], lineNumber: +t[4], column: t[5] ? +t[5] : null } : null } const Xc = /^\s*at (?:([^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i; function ep(e) { const t = Xc.exec(e); return t ? { file: t[2], methodName: t[1] || Ht, arguments: [], lineNumber: +t[3], column: t[4] ? +t[4] : null } : null } const jn = class {getLocation() { return null }}; const qn = class {
  _error; constructor() { this._error = new Error() }getLocation() {
    const t = this._error.stack; if (!t)
      return null; const n = is(t).find((i) => {
      if (!i.file)
        return !1; const o = wn(i.file); return o !== '<anonymous>' && !o.includes('@prisma') && !o.includes('/packages/client/src/runtime/') && !o.endsWith('/runtime/binary.js') && !o.endsWith('/runtime/library.js') && !o.endsWith('/runtime/edge.js') && !o.endsWith('/runtime/edge-esm.js') && !o.startsWith('internal/') && !i.methodName.includes('new ') && !i.methodName.includes('getCallSite') && !i.methodName.includes('Proxy.') && i.methodName.split('.').length < 4
    }); return !n || !n.file ? null : { fileName: n.file, lineNumber: n.lineNumber, columnNumber: n.column }
  }
}; function qe(e) { return e === 'minimal' ? typeof $EnabledCallSite == 'function' && e !== 'minimal' ? new $EnabledCallSite() : new jn() : new qn() }m(); c(); p(); d(); f(); m(); c(); p(); d(); f(); m(); c(); p(); d(); f(); const os = { _avg: !0, _count: !0, _sum: !0, _min: !0, _max: !0 }; function wt(e = {}) { const t = rp(e); return Object.entries(t).reduce((n, [i, o]) => (os[i] !== void 0 ? n.select[i] = { select: o } : n[i] = o, n), { select: {} }) } function rp(e = {}) { return typeof e._count == 'boolean' ? { ...e, _count: { _all: e._count } } : e } function qr(e = {}) { return t => (typeof e._count == 'boolean' && (t._count = t._count._all), t) } function ss(e, t) { const r = qr(e); return t({ action: 'aggregate', unpacker: r, argsMapper: wt })(e) }m(); c(); p(); d(); f(); function np(e = {}) { const { select: t, ...r } = e; return typeof t == 'object' ? wt({ ...r, _count: t }) : wt({ ...r, _count: { _all: !0 } }) } function ip(e = {}) { return typeof e.select == 'object' ? t => qr(e)(t)._count : t => qr(e)(t)._count._all } function as(e, t) { return t({ action: 'count', unpacker: ip(e), argsMapper: np })(e) }m(); c(); p(); d(); f(); function op(e = {}) {
  const t = wt(e); if (Array.isArray(t.by)) {
    for (const r of t.by) typeof r == 'string' && (t.select[r] = !0)
  }
  else {
    typeof t.by == 'string' && (t.select[t.by] = !0)
  } return t
} function sp(e = {}) { return t => (typeof e?._count == 'boolean' && t.forEach((r) => { r._count = r._count._all }), t) } function ls(e, t) { return t({ action: 'groupBy', unpacker: sp(e), argsMapper: op })(e) } function us(e, t, r) {
  if (t === 'aggregate')
    return n => ss(n, r); if (t === 'count')
    return n => as(n, r); if (t === 'groupBy')
    return n => ls(n, r)
}m(); c(); p(); d(); f(); function cs(e, t) {
  const r = t.fields.filter(i => !i.relationName); const n = Pn(r, i => i.name); return new Proxy({}, { get(i, o) {
    if (o in i || typeof o == 'symbol')
      return i[o]; const s = n[o]; if (s)
      return new Bt(e, o, s.type, s.isList, s.kind === 'enum')
  }, ...$r(Object.keys(n)) })
}m(); c(); p(); d(); f(); m(); c(); p(); d(); f(); const ps = e => Array.isArray(e) ? e : e.split('.'); const Un = (e, t) => ps(t).reduce((r, n) => r && r[n], e); const ds = (e, t, r) => ps(t).reduceRight((n, i, o, s) => Object.assign({}, Un(e, s.slice(0, o)), { [i]: n }), r); function ap(e, t) { return e === void 0 || t === void 0 ? [] : [...t, 'select', e] } function lp(e, t, r) { return t === void 0 ? e ?? {} : ds(t, r, e || !0) } function Vn(e, t, r, n, i, o) {
  const a = e._runtimeDataModel.models[t].fields.reduce((l, u) => ({ ...l, [u.name]: u }), {}); return (l) => {
    const u = qe(e._errorFormat); const g = ap(n, i); const h = lp(l, o, g); const v = r({ dataPath: g, callsite: u })(h); const R = up(e, t); return new Proxy(v, { get(C, A) {
      if (!R.includes(A))
        return C[A]; const _ = [a[A].type, r, A]; const L = [g, h]; return Vn(e, ..._, ...L)
    }, ...$r([...R, ...Object.getOwnPropertyNames(v)]) })
  }
} function up(e, t) { return e._runtimeDataModel.models[t].fields.filter(r => r.kind === 'object').map(r => r.name) } const cp = ['findUnique', 'findUniqueOrThrow', 'findFirst', 'findFirstOrThrow', 'create', 'update', 'upsert', 'delete']; const pp = ['aggregate', 'count', 'groupBy']; function Qn(e, t) { const r = e._extensions.getAllModelExtensions(t) ?? {}; const n = [dp(e, t), mp(e, t), Kt(r), te('name', () => t), te('$name', () => t), te('$parent', () => e._appliedParent)]; return ge({}, n) } function dp(e, t) { const r = Te(t); const n = Object.keys(It.ModelAction).concat('count'); return { getKeys() { return n }, getPropertyValue(i) { const o = i; const s = a => (l) => { const u = qe(e._errorFormat); return e._createPrismaPromise((g) => { const h = { args: l, dataPath: [], action: o, model: t, clientMethod: `${r}.${i}`, jsModelName: r, transaction: g, callsite: u }; return e._request({ ...h, ...a }) }, { action: o, args: l, model: t }) }; return cp.includes(o) ? Vn(e, t, s) : fp(i) ? us(e, i, s) : s({}) } } } function fp(e) { return pp.includes(e) } function mp(e, t) { return Ke(te('fields', () => { const r = e._runtimeDataModel.models[t]; return cs(t, r) })) }m(); c(); p(); d(); f(); function fs(e) { return e.replace(/^./, t => t.toUpperCase()) } const Jn = Symbol(); function zt(e) { const t = [gp(e), hp(e), te(Jn, () => e), te('$parent', () => e._appliedParent)]; const r = e._extensions.getAllClientExtensions(); return r && t.push(Kt(r)), ge(e, t) } function gp(e) { const t = Object.getPrototypeOf(e._originalClient); const r = [...new Set(Object.getOwnPropertyNames(t))]; return { getKeys() { return r }, getPropertyValue(n) { return e[n] } } } function hp(e) {
  const t = Object.keys(e._runtimeDataModel.models); const r = t.map(Te); const n = [...new Set(t.concat(r))]; return Ke({ getKeys() { return n }, getPropertyValue(i) {
    const o = fs(i); if (e._runtimeDataModel.models[o] !== void 0)
      return Qn(e, o); if (e._runtimeDataModel.models[i] !== void 0)
      return Qn(e, i)
  }, getPropertyDescriptor(i) {
    if (!r.includes(i))
      return { enumerable: !1 }
  } })
} function ms(e) { return e[Jn] ? e[Jn] : e } function gs(e) {
  if (typeof e == 'function')
    return e(this); if (e.client?.__AccelerateEngine) { const r = e.client.__AccelerateEngine; this._originalClient._engine = new r(this._originalClient._accelerateEngineConfig) } const t = Object.create(this._originalClient, { _extensions: { value: this._extensions.append(e) }, _appliedParent: { value: this, configurable: !0 }, $use: { value: void 0 }, $on: { value: void 0 } }); return zt(t)
}m(); c(); p(); d(); f(); m(); c(); p(); d(); f(); function hs({ result: e, modelName: t, select: r, omit: n, extensions: i }) {
  const o = i.getAllComputedFields(t); if (!o)
    return e; const s = []; const a = []; for (const l of Object.values(o)) {
    if (n) {
      if (n[l.name])
        continue; const u = l.needs.filter(g => n[g]); u.length > 0 && a.push(yt(u))
    }
    else if (r) {
      if (!r[l.name])
        continue; const u = l.needs.filter(g => !r[g]); u.length > 0 && a.push(yt(u))
    }yp(e, l.needs) && s.push(wp(l, ge(e, s)))
  } return s.length > 0 || a.length > 0 ? ge(e, [...s, ...a]) : e
} function yp(e, t) { return t.every(r => xn(e, r)) } function wp(e, t) { return Ke(te(e.name, () => e.compute(t))) }m(); c(); p(); d(); f(); function Ur({ visitor: e, result: t, args: r, runtimeDataModel: n, modelName: i }) { if (Array.isArray(t)) { for (let s = 0; s < t.length; s++)t[s] = Ur({ result: t[s], args: r, modelName: i, runtimeDataModel: n, visitor: e }); return t } const o = e(t, i, r) ?? t; return r.include && ys({ includeOrSelect: r.include, result: o, parentModelName: i, runtimeDataModel: n, visitor: e }), r.select && ys({ includeOrSelect: r.select, result: o, parentModelName: i, runtimeDataModel: n, visitor: e }), o } function ys({ includeOrSelect: e, result: t, parentModelName: r, runtimeDataModel: n, visitor: i }) {
  for (const [o, s] of Object.entries(e)) {
    if (!s || t[o] == null || Ce(s))
      continue; const l = n.models[r].fields.find(g => g.name === o); if (!l || l.kind !== 'object' || !l.relationName)
      continue; const u = typeof s == 'object' ? s : {}; t[o] = Ur({ visitor: i, result: t[o], args: u, modelName: l.type, runtimeDataModel: n })
  }
} function ws({ result: e, modelName: t, args: r, extensions: n, runtimeDataModel: i, globalOmit: o }) { return n.isEmpty() || e == null || typeof e != 'object' || !i.models[t] ? e : Ur({ result: e, args: r ?? {}, modelName: t, runtimeDataModel: i, visitor: (a, l, u) => { const g = Te(l); return hs({ result: a, modelName: g, select: u.select, omit: u.select ? void 0 : { ...o?.[g], ...u.omit }, extensions: n }) } }) }m(); c(); p(); d(); f(); m(); c(); p(); d(); f(); m(); c(); p(); d(); f(); const bp = ['$connect', '$disconnect', '$on', '$transaction', '$use', '$extends']; const bs = bp; function Es(e) {
  if (e instanceof se)
    return Ep(e); if (Nr(e))
    return xp(e); if (Array.isArray(e)) { const r = [e[0]]; for (let n = 1; n < e.length; n++)r[n] = Yt(e[n]); return r } const t = {}; for (const r in e)t[r] = Yt(e[r]); return t
} function Ep(e) { return new se(e.strings, e.values) } function xp(e) { return new Wt(e.sql, e.values) } function Yt(e) {
  if (typeof e != 'object' || e == null || e instanceof _e || ft(e))
    return e; if (lt(e))
    return new xe(e.toFixed()); if (at(e))
    return new Date(+e); if (ArrayBuffer.isView(e))
    return e.slice(0); if (Array.isArray(e)) { let t = e.length; let r; for (r = new Array(t); t--;)r[t] = Yt(e[t]); return r } if (typeof e == 'object') { const t = {}; for (const r in e)r === '__proto__' ? Object.defineProperty(t, r, { value: Yt(e[r]), configurable: !0, enumerable: !0, writable: !0 }) : t[r] = Yt(e[r]); return t }Ie(e, 'Unknown value')
} function Ps(e, t, r, n = 0) { return e._createPrismaPromise((i) => { const o = t.customDataProxyFetch; return 'transaction' in t && i !== void 0 && (t.transaction?.kind === 'batch' && t.transaction.lock.then(), t.transaction = i), n === r.length ? e._executeRequest(t) : r[n]({ model: t.model, operation: t.model ? t.action : t.clientMethod, args: Es(t.args ?? {}), __internalParams: t, query: (s, a = t) => { const l = a.customDataProxyFetch; return a.customDataProxyFetch = As(o, l), a.args = s, Ps(e, a, r, n + 1) } }) }) } function vs(e, t) {
  const { jsModelName: r, action: n, clientMethod: i } = t; const o = r ? n : i; if (e._extensions.isEmpty())
    return e._executeRequest(t); const s = e._extensions.getAllQueryCallbacks(r ?? '$none', o); return Ps(e, t, s)
} function Ts(e) { return (t) => { const r = { requests: t }; const n = t[0].extensions.getAllBatchQueryCallbacks(); return n.length ? Cs(r, n, 0, e) : e(r) } } function Cs(e, t, r, n) {
  if (r === t.length)
    return n(e); const i = e.customDataProxyFetch; const o = e.requests[0].transaction; return t[r]({ args: { queries: e.requests.map(s => ({ model: s.modelName, operation: s.action, args: s.args })), transaction: o ? { isolationLevel: o.kind === 'batch' ? o.isolationLevel : void 0 } : void 0 }, __internalParams: e, query(s, a = e) { const l = a.customDataProxyFetch; return a.customDataProxyFetch = As(i, l), Cs(a, t, r + 1, n) } })
} const xs = e => e; function As(e = xs, t = xs) { return r => e(t(r)) }m(); c(); p(); d(); f(); const Ss = ae('prisma:client'); const Rs = { 'Vercel': 'vercel', 'Netlify CI': 'netlify' }; function ks({ postinstall: e, ciName: t, clientVersion: r }) {
  if (Ss('checkPlatformCaching:postinstall', e), Ss('checkPlatformCaching:ciName', t), e === !0 && t && t in Rs) {
    const n = `Prisma has detected that this project was built on ${t}, which caches dependencies. This leads to an outdated Prisma Client because Prisma's auto-generation isn't triggered. To fix this, make sure to run the \`prisma generate\` command during the build process.

Learn how: https://pris.ly/d/${Rs[t]}-build`; throw console.error(n), new Q(n, r)
  }
}m(); c(); p(); d(); f(); function Os(e, t) { return e ? e.datasources ? e.datasources : e.datasourceUrl ? { [t[0]]: { url: e.datasourceUrl } } : {} : {} }m(); c(); p(); d(); f(); m(); c(); p(); d(); f(); const Pp = () => globalThis.process?.release?.name === 'node'; const vp = () => !!globalThis.Bun || !!globalThis.process?.versions?.bun; const Tp = () => !!globalThis.Deno; const Cp = () => typeof globalThis.Netlify == 'object'; const Ap = () => typeof globalThis.EdgeRuntime == 'object'; const Sp = () => globalThis.navigator?.userAgent === 'Cloudflare-Workers'; function Rp() { return [[Cp, 'netlify'], [Ap, 'edge-light'], [Sp, 'workerd'], [Tp, 'deno'], [vp, 'bun'], [Pp, 'node']].flatMap(r => r[0]() ? [r[1]] : []).at(0) ?? '' } const kp = { 'node': 'Node.js', 'workerd': 'Cloudflare Workers', 'deno': 'Deno and Deno Deploy', 'netlify': 'Netlify Edge Functions', 'edge-light': 'Edge Runtime (Vercel Edge Functions, Vercel Edge Middleware, Next.js (Pages Router) Edge API Routes, Next.js (App Router) Edge Route Handlers or Next.js Middleware)' }; function Is() { const e = Rp(); return { id: e, prettyName: kp[e] || e, isEdge: ['workerd', 'deno', 'netlify', 'edge-light'].includes(e) } }m(); c(); p(); d(); f(); m(); c(); p(); d(); f(); const Gn = Re(En()); m(); c(); p(); d(); f(); function Ms(e) { return e ? e.replace(/".*"/g, '"X"').replace(/[\s:[]([+-]?(\d*\.)?\d+)/g, t => `${t[0]}5`) : '' }m(); c(); p(); d(); f(); function _s(e) {
  return e.split(`
`).map(t => t.replace(/^\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)\s*/, '').replace(/\+\d+\s*ms$/, '')).join(`
`)
}m(); c(); p(); d(); f(); const Fs = Re(Xi()); function Ls({ title: e, user: t = 'prisma', repo: r = 'prisma', template: n = 'bug_report.yml', body: i }) { return (0, Fs.default)({ user: t, repo: r, template: n, title: e, body: i }) } function Ns({ version: e, binaryTarget: t, title: r, description: n, engineVersion: i, database: o, query: s }) {
  const a = Mi(6e3 - (s?.length ?? 0)); const l = _s((0, Gn.default)(a)); const u = n
    ? `# Description
\`\`\`
${n}
\`\`\``
    : ''; const g = (0, Gn.default)(`Hi Prisma Team! My Prisma Client just crashed. This is the report:
## Versions

| Name            | Version            |
|-----------------|--------------------|
| Node            | ${y.version?.padEnd(19)}| 
| OS              | ${t?.padEnd(19)}|
| Prisma Client   | ${e?.padEnd(19)}|
| Query Engine    | ${i?.padEnd(19)}|
| Database        | ${o?.padEnd(19)}|

${u}

## Logs
\`\`\`
${l}
\`\`\`

## Client Snippet
\`\`\`ts
// PLEASE FILL YOUR CODE SNIPPET HERE
\`\`\`

## Schema
\`\`\`prisma
// PLEASE ADD YOUR SCHEMA HERE IF POSSIBLE
\`\`\`

## Prisma Engine Query
\`\`\`
${s ? Ms(s) : ''}
\`\`\`
`); const h = Ls({ title: r, body: g }); return `${r}

This is a non-recoverable error which probably happens when the Prisma Query Engine has a panic.

${Ct(h)}

If you want the Prisma team to look into it, please open the link above \u{1F64F}
To increase the chance of success, please post your schema and a snippet of
how you used Prisma Client in the issue. 
`
}m(); c(); p(); d(); f(); function Vr({ inlineDatasources: e, overrideDatasources: t, env: r, clientVersion: n }) {
  let i; const o = Object.keys(e)[0]; const s = e[o]?.url; const a = t[o]?.url; if (o === void 0 ? i = void 0 : a ? i = a : s?.value ? i = s.value : s?.fromEnvVar && (i = r[s.fromEnvVar]), s?.fromEnvVar !== void 0 && i === void 0)
    throw new Q(`error: Environment variable not found: ${s.fromEnvVar}.`, n); if (i === void 0)
    throw new Q('error: Missing URL environment variable, value, or override.', n); return i
}m(); c(); p(); d(); f(); m(); c(); p(); d(); f(); function Ds(e) {
  if (e?.kind === 'itx')
    return e.options.id
}m(); c(); p(); d(); f(); const Wn = class {engineObject; constructor(t, r, n) { this.engineObject = __PrismaProxy.create({ datamodel: t.datamodel, env: y.env, ignoreEnvVarErrors: !0, datasourceOverrides: t.datasourceOverrides ?? {}, logLevel: t.logLevel, logQueries: t.logQueries ?? !1, logCallback: r, enableTracing: t.enableTracing }) } async connect(t, r) { return __PrismaProxy.connect(this.engineObject, t, r) } async disconnect(t, r) { return __PrismaProxy.disconnect(this.engineObject, t, r) }query(t, r, n, i) { return __PrismaProxy.execute(this.engineObject, t, r, n, i) }compile() { throw new Error('not implemented') }sdlSchema() { return Promise.resolve('{}') }dmmf(t) { return Promise.resolve('{}') } async startTransaction(t, r, n) { return __PrismaProxy.startTransaction(this.engineObject, t, r, n) } async commitTransaction(t, r, n) { return __PrismaProxy.commitTransaction(this.engineObject, t, r, n) } async rollbackTransaction(t, r, n) { return __PrismaProxy.rollbackTransaction(this.engineObject, t, r, n) }metrics(t) { return Promise.resolve('{}') } async applyPendingMigrations() { return __PrismaProxy.applyPendingMigrations(this.engineObject) }trace(t) { return __PrismaProxy.trace(this.engineObject, t) }}; const $s = { async loadLibrary(e) {
  if (!__PrismaProxy)
    throw new Q('__PrismaProxy not detected make sure React Native bindings are installed', e.clientVersion); return { debugPanic() { return Promise.reject('{}') }, dmmf() { return Promise.resolve('{}') }, version() { return { commit: 'unknown', version: 'unknown' } }, QueryEngine: Wn }
} }; const Op = 'P2036'; const Ae = ae('prisma:client:libraryEngine'); function Ip(e) { return e.item_type === 'query' && 'query' in e } function Mp(e) { return 'level' in e ? e.level === 'error' && e.message === 'PANIC' : !1 } const lR = [...mn, 'native']; const _p = 0xFFFFFFFFFFFFFFFFn; let Kn = 1n; function Fp() { const e = Kn++; return Kn > _p && (Kn = 1n), e } const Zt = class {
  name = 'LibraryEngine'; engine; libraryInstantiationPromise; libraryStartingPromise; libraryStoppingPromise; libraryStarted; executingQueryPromise; config; QueryEngineConstructor; libraryLoader; library; logEmitter; libQueryEnginePath; binaryTarget; datasourceOverrides; datamodel; logQueries; logLevel; lastQuery; loggerRustPanic; tracingHelper; versionInfo; constructor(t, r) { this.libraryLoader = $s, this.config = t, this.libraryStarted = !1, this.logQueries = t.logQueries ?? !1, this.logLevel = t.logLevel ?? 'error', this.logEmitter = t.logEmitter, this.datamodel = t.inlineSchema, this.tracingHelper = t.tracingHelper, t.enableDebugLogs && (this.logLevel = 'debug'); const n = Object.keys(t.overrideDatasources)[0]; const i = t.overrideDatasources[n]?.url; n !== void 0 && i !== void 0 && (this.datasourceOverrides = { [n]: i }), this.libraryInstantiationPromise = this.instantiateLibrary() }wrapEngine(t) { return { applyPendingMigrations: t.applyPendingMigrations?.bind(t), commitTransaction: this.withRequestId(t.commitTransaction.bind(t)), connect: this.withRequestId(t.connect.bind(t)), disconnect: this.withRequestId(t.disconnect.bind(t)), metrics: t.metrics?.bind(t), query: this.withRequestId(t.query.bind(t)), rollbackTransaction: this.withRequestId(t.rollbackTransaction.bind(t)), sdlSchema: t.sdlSchema?.bind(t), startTransaction: this.withRequestId(t.startTransaction.bind(t)), trace: t.trace.bind(t) } }withRequestId(t) {
    return async (...r) => {
      const n = Fp().toString(); try { return await t(...r, n) }
      finally { if (this.tracingHelper.isEnabled()) { const i = await this.engine?.trace(n); if (i) { const o = JSON.parse(i); this.tracingHelper.dispatchEngineSpans(o.spans) } } }
    }
  }

  async applyPendingMigrations() { await this.start(), await this.engine?.applyPendingMigrations() } async transaction(t, r, n) {
    await this.start(); const i = JSON.stringify(r); let o; if (t === 'start') { const a = JSON.stringify({ max_wait: n.maxWait, timeout: n.timeout, isolation_level: n.isolationLevel }); o = await this.engine?.startTransaction(a, i) }
    else {
      t === 'commit' ? o = await this.engine?.commitTransaction(n.id, i) : t === 'rollback' && (o = await this.engine?.rollbackTransaction(n.id, i))
    } const s = this.parseEngineResponse(o); if (Lp(s)) { const a = this.getExternalAdapterError(s); throw a ? a.error : new ie(s.message, { code: s.error_code, clientVersion: this.config.clientVersion, meta: s.meta }) }
    else if (typeof s.message == 'string') {
      throw new G(s.message, { clientVersion: this.config.clientVersion })
    } return s
  }

  async instantiateLibrary() {
    if (Ae('internalSetup'), this.libraryInstantiationPromise)
      return this.libraryInstantiationPromise; this.binaryTarget = await this.getCurrentBinaryTarget(), await this.tracingHelper.runInChildSpan('load_engine', () => this.loadEngine()), this.version()
  }

  async getCurrentBinaryTarget() {}parseEngineResponse(t) {
    if (!t)
      throw new G('Response from the Engine was empty', { clientVersion: this.config.clientVersion }); try { return JSON.parse(t) }
    catch { throw new G('Unable to JSON.parse response from engine', { clientVersion: this.config.clientVersion }) }
  }

  async loadEngine() {
    if (!this.engine) {
      this.QueryEngineConstructor || (this.library = await this.libraryLoader.loadLibrary(this.config), this.QueryEngineConstructor = this.library.QueryEngine); try { const t = new b(this); const { adapter: r } = this.config; r && Ae('Using driver adapter: %O', r), this.engine = this.wrapEngine(new this.QueryEngineConstructor({ datamodel: this.datamodel, env: y.env, logQueries: this.config.logQueries ?? !1, ignoreEnvVarErrors: !0, datasourceOverrides: this.datasourceOverrides ?? {}, logLevel: this.logLevel, configDir: this.config.cwd, engineProtocol: 'json', enableTracing: this.tracingHelper.isEnabled() }, (n) => { t.deref()?.logger(n) }, r)) }
      catch (t) { const r = t; const n = this.parseInitError(r.message); throw typeof n == 'string' ? r : new Q(n.message, this.config.clientVersion, n.error_code) }
    }
  }

  logger(t) { const r = this.parseEngineResponse(t); r && (r.level = r?.level.toLowerCase() ?? 'unknown', Ip(r) ? this.logEmitter.emit('query', { timestamp: new Date(), query: r.query, params: r.params, duration: Number(r.duration_ms), target: r.module_path }) : Mp(r) ? this.loggerRustPanic = new ue(Hn(this, `${r.message}: ${r.reason} in ${r.file}:${r.line}:${r.column}`), this.config.clientVersion) : this.logEmitter.emit(r.level, { timestamp: new Date(), message: r.message, target: r.module_path })) }parseInitError(t) {
    try { return JSON.parse(t) }
    catch {} return t
  }

  parseRequestError(t) {
    try { return JSON.parse(t) }
    catch {} return t
  }

  onBeforeExit() { throw new Error('"beforeExit" hook is not applicable to the library engine since Prisma 5.0.0, it is only relevant and implemented for the binary engine. Please add your event listener to the `process` object directly instead.') } async start() {
    if (await this.libraryInstantiationPromise, await this.libraryStoppingPromise, this.libraryStartingPromise)
      return Ae(`library already starting, this.libraryStarted: ${this.libraryStarted}`), this.libraryStartingPromise; if (this.libraryStarted)
      return; const t = async () => {
      Ae('library starting'); try { const r = { traceparent: this.tracingHelper.getTraceParent() }; await this.engine?.connect(JSON.stringify(r)), this.libraryStarted = !0, Ae('library started') }
      catch (r) { const n = this.parseInitError(r.message); throw typeof n == 'string' ? r : new Q(n.message, this.config.clientVersion, n.error_code) }
      finally { this.libraryStartingPromise = void 0 }
    }; return this.libraryStartingPromise = this.tracingHelper.runInChildSpan('connect', t), this.libraryStartingPromise
  }

  async stop() {
    if (await this.libraryStartingPromise, await this.executingQueryPromise, this.libraryStoppingPromise)
      return Ae('library is already stopping'), this.libraryStoppingPromise; if (!this.libraryStarted)
      return; const t = async () => { await new Promise(n => setTimeout(n, 5)), Ae('library stopping'); const r = { traceparent: this.tracingHelper.getTraceParent() }; await this.engine?.disconnect(JSON.stringify(r)), this.libraryStarted = !1, this.libraryStoppingPromise = void 0, Ae('library stopped') }; return this.libraryStoppingPromise = this.tracingHelper.runInChildSpan('disconnect', t), this.libraryStoppingPromise
  }

  version() { return this.versionInfo = this.library?.version(), this.versionInfo?.version ?? 'unknown' }debugPanic(t) { return this.library?.debugPanic(t) } async request(t, { traceparent: r, interactiveTransaction: n }) {
    Ae(`sending request, this.libraryStarted: ${this.libraryStarted}`); const i = JSON.stringify({ traceparent: r }); const o = JSON.stringify(t); try {
      await this.start(), this.executingQueryPromise = this.engine?.query(o, i, n?.id), this.lastQuery = o; const s = this.parseEngineResponse(await this.executingQueryPromise); if (s.errors)
        throw s.errors.length === 1 ? this.buildQueryError(s.errors[0]) : new G(JSON.stringify(s.errors), { clientVersion: this.config.clientVersion }); if (this.loggerRustPanic)
        throw this.loggerRustPanic; return { data: s }
    }
    catch (s) {
      if (s instanceof Q)
        throw s; if (s.code === 'GenericFailure' && s.message?.startsWith('PANIC:'))
        throw new ue(Hn(this, s.message), this.config.clientVersion); const a = this.parseRequestError(s.message); throw typeof a == 'string'
        ? s
        : new G(`${a.message}
${a.backtrace}`, { clientVersion: this.config.clientVersion })
    }
  }

  async requestBatch(t, { transaction: r, traceparent: n }) {
    Ae('requestBatch'); const i = Br(t, r); await this.start(), this.lastQuery = JSON.stringify(i), this.executingQueryPromise = this.engine.query(this.lastQuery, JSON.stringify({ traceparent: n }), Ds(r)); const o = await this.executingQueryPromise; const s = this.parseEngineResponse(o); if (s.errors)
      throw s.errors.length === 1 ? this.buildQueryError(s.errors[0]) : new G(JSON.stringify(s.errors), { clientVersion: this.config.clientVersion }); const { batchResult: a, errors: l } = s; if (Array.isArray(a))
      return a.map(u => u.errors && u.errors.length > 0 ? this.loggerRustPanic ?? this.buildQueryError(u.errors[0]) : { data: u }); throw l && l.length === 1 ? new Error(l[0].error) : new Error(JSON.stringify(s))
  }

  buildQueryError(t) {
    if (t.user_facing_error.is_panic)
      return new ue(Hn(this, t.user_facing_error.message), this.config.clientVersion); const r = this.getExternalAdapterError(t.user_facing_error); return r ? r.error : jr(t, this.config.clientVersion, this.config.activeProvider)
  }

  getExternalAdapterError(t) { if (t.error_code === Op && this.config.adapter) { const r = t.meta?.id; ar(typeof r == 'number', 'Malformed external JS error received from the engine'); const n = this.config.adapter.errorRegistry.consumeError(r); return ar(n, 'External error with reported id was not registered'), n } } async metrics(t) { await this.start(); const r = await this.engine.metrics(JSON.stringify(t)); return t.format === 'prometheus' ? r : this.parseEngineResponse(r) }
}; function Lp(e) { return typeof e == 'object' && e !== null && e.error_code !== void 0 } function Hn(e, t) { return Ns({ binaryTarget: e.binaryTarget, title: t, version: e.config.clientVersion, engineVersion: e.versionInfo?.commit, database: e.config.activeProvider, query: e.lastQuery }) } function Bs({ copyEngine: e = !0 }, t) {
  let r; try { r = Vr({ inlineDatasources: t.inlineDatasources, overrideDatasources: t.overrideDatasources, env: { ...t.env, ...y.env }, clientVersion: t.clientVersion }) }
  catch {} const n = !!(r?.startsWith('prisma://') || yn(r)); e && n && Ft('recommend--no-engine', 'In production, we recommend using `prisma generate --no-engine` (See: `prisma generate --help`)'); const i = tt(t.generator); const o = n || !e; const s = !!t.adapter; const a = i === 'library'; const l = i === 'binary'; const u = i === 'client'; if (o && s || s && !1) {
    let g; throw e ? r?.startsWith('prisma://') ? g = ['Prisma Client was configured to use the `adapter` option but the URL was a `prisma://` URL.', 'Please either use the `prisma://` URL or remove the `adapter` from the Prisma Client constructor.'] : g = ['Prisma Client was configured to use both the `adapter` and Accelerate, please chose one.'] : g = ['Prisma Client was configured to use the `adapter` option but `prisma generate` was run with `--no-engine`.', 'Please run `prisma generate` without `--no-engine` to be able to use Prisma Client with the adapter.'], new X(g.join(`
`), { clientVersion: t.clientVersion })
  } return new Zt(t)
}m(); c(); p(); d(); f(); function Qr({ generator: e }) { return e?.previewFeatures ?? [] }m(); c(); p(); d(); f(); const js = e => ({ command: e }); m(); c(); p(); d(); f(); m(); c(); p(); d(); f(); const qs = e => e.strings.reduce((t, r, n) => `${t}@P${n}${r}`); m(); c(); p(); d(); f(); function bt(e) {
  try { return Us(e, 'fast') }
  catch { return Us(e, 'slow') }
} function Us(e, t) { return JSON.stringify(e.map(r => Qs(r, t))) } function Qs(e, t) {
  if (Array.isArray(e))
    return e.map(r => Qs(r, t)); if (typeof e == 'bigint')
    return { prisma__type: 'bigint', prisma__value: e.toString() }; if (at(e))
    return { prisma__type: 'date', prisma__value: e.toJSON() }; if (xe.isDecimal(e))
    return { prisma__type: 'decimal', prisma__value: e.toJSON() }; if (w.Buffer.isBuffer(e))
    return { prisma__type: 'bytes', prisma__value: e.toString('base64') }; if (Np(e))
    return { prisma__type: 'bytes', prisma__value: w.Buffer.from(e).toString('base64') }; if (ArrayBuffer.isView(e)) { const { buffer: r, byteOffset: n, byteLength: i } = e; return { prisma__type: 'bytes', prisma__value: w.Buffer.from(r, n, i).toString('base64') } } return typeof e == 'object' && t === 'slow' ? Js(e) : e
} function Np(e) { return e instanceof ArrayBuffer || e instanceof SharedArrayBuffer ? !0 : typeof e == 'object' && e !== null ? e[Symbol.toStringTag] === 'ArrayBuffer' || e[Symbol.toStringTag] === 'SharedArrayBuffer' : !1 } function Js(e) {
  if (typeof e != 'object' || e === null)
    return e; if (typeof e.toJSON == 'function')
    return e.toJSON(); if (Array.isArray(e))
    return e.map(Vs); const t = {}; for (const r of Object.keys(e))t[r] = Vs(e[r]); return t
} function Vs(e) { return typeof e == 'bigint' ? e.toString() : Js(e) } const Dp = /^(\s*alter\s)/i; const Gs = ae('prisma:client'); function zn(e, t, r, n) {
  if (!(e !== 'postgresql' && e !== 'cockroachdb') && r.length > 0 && Dp.exec(t)) {
    throw new Error(`Running ALTER using ${n} is not supported
Using the example below you can still execute your query with Prisma, but please note that it is vulnerable to SQL injection attacks and requires you to take care of input sanitization.

Example:
  await prisma.$executeRawUnsafe(\`ALTER USER prisma WITH PASSWORD '\${password}'\`)

More Information: https://pris.ly/d/execute-raw
`)
  }
} function Yn({ clientMethod: e, activeProvider: t }) {
  return (r) => {
    let n = ''; let i; if (Nr(r)) {
      n = r.sql, i = { values: bt(r.values), __prismaRawParameters__: !0 }
    }
    else if (Array.isArray(r)) { const [o, ...s] = r; n = o, i = { values: bt(s || []), __prismaRawParameters__: !0 } }
    else {
      switch (t) { case 'sqlite':case 'mysql':{ n = r.sql, i = { values: bt(r.values), __prismaRawParameters__: !0 }; break } case 'cockroachdb':case 'postgresql':case 'postgres':{ n = r.text, i = { values: bt(r.values), __prismaRawParameters__: !0 }; break } case 'sqlserver':{ n = qs(r), i = { values: bt(r.values), __prismaRawParameters__: !0 }; break } default:throw new Error(`The ${t} provider does not support ${e}`) }
    } return i?.values ? Gs(`prisma.${e}(${n}, ${i.values})`) : Gs(`prisma.${e}(${n})`), { query: n, parameters: i }
  }
} const Ws = { requestArgsToMiddlewareArgs(e) { return [e.strings, ...e.values] }, middlewareArgsToRequestArgs(e) { const [t, ...r] = e; return new se(t, r) } }; const Ks = { requestArgsToMiddlewareArgs(e) { return [e] }, middlewareArgsToRequestArgs(e) { return e[0] } }; m(); c(); p(); d(); f(); function Zn(e) {
  return function (r, n) {
    let i; const o = (s = e) => {
      try { return s === void 0 || s?.kind === 'itx' ? i ??= Hs(r(s)) : Hs(r(s)) }
      catch (a) { return Promise.reject(a) }
    }; return { get spec() { return n }, then(s, a) { return o().then(s, a) }, catch(s) { return o().catch(s) }, finally(s) { return o().finally(s) }, requestTransaction(s) { const a = o(s); return a.requestTransaction ? a.requestTransaction(s) : a }, [Symbol.toStringTag]: 'PrismaPromise' }
  }
} function Hs(e) { return typeof e.then == 'function' ? e : Promise.resolve(e) }m(); c(); p(); d(); f(); const $p = hn.split('.')[0]; const Bp = { isEnabled() { return !1 }, getTraceParent() { return '00-10-10-00' }, dispatchEngineSpans() {}, getActiveContext() {}, runInChildSpan(e, t) { return t() } }; const Xn = class {isEnabled() { return this.getGlobalTracingHelper().isEnabled() }getTraceParent(t) { return this.getGlobalTracingHelper().getTraceParent(t) }dispatchEngineSpans(t) { return this.getGlobalTracingHelper().dispatchEngineSpans(t) }getActiveContext() { return this.getGlobalTracingHelper().getActiveContext() }runInChildSpan(t, r) { return this.getGlobalTracingHelper().runInChildSpan(t, r) }getGlobalTracingHelper() { const t = globalThis[`V${$p}_PRISMA_INSTRUMENTATION`]; const r = globalThis.PRISMA_INSTRUMENTATION; return t?.helper ?? r?.helper ?? Bp }}; function zs() { return new Xn() }m(); c(); p(); d(); f(); function Ys(e, t = () => {}) { let r; const n = new Promise(i => r = i); return { then(i) { return --e === 0 && r(t()), i?.(n) } } }m(); c(); p(); d(); f(); function Zs(e) { return typeof e == 'string' ? e : e.reduce((t, r) => { const n = typeof r == 'string' ? r : r.level; return n === 'query' ? t : t && (r === 'info' || t === 'info') ? 'info' : n }, void 0) }m(); c(); p(); d(); f(); const Jr = class {_middlewares = []; use(t) { this._middlewares.push(t) }get(t) { return this._middlewares[t] }has(t) { return !!this._middlewares[t] }length() { return this._middlewares.length }}; m(); c(); p(); d(); f(); const ea = Re(En()); m(); c(); p(); d(); f(); function Gr(e) { return typeof e.batchRequestIdx == 'number' }m(); c(); p(); d(); f(); function Xs(e) {
  if (e.action !== 'findUnique' && e.action !== 'findUniqueOrThrow')
    return; const t = []; return e.modelName && t.push(e.modelName), e.query.arguments && t.push(ei(e.query.arguments)), t.push(ei(e.query.selection)), t.join('')
} function ei(e) { return `(${Object.keys(e).sort().map((r) => { const n = e[r]; return typeof n == 'object' && n !== null ? `(${r} ${ei(n)})` : r }).join(' ')})` }m(); c(); p(); d(); f(); const jp = { aggregate: !1, aggregateRaw: !1, createMany: !0, createManyAndReturn: !0, createOne: !0, deleteMany: !0, deleteOne: !0, executeRaw: !0, findFirst: !1, findFirstOrThrow: !1, findMany: !1, findRaw: !1, findUnique: !1, findUniqueOrThrow: !1, groupBy: !1, queryRaw: !1, runCommandRaw: !0, updateMany: !0, updateManyAndReturn: !0, updateOne: !0, upsertOne: !0 }; function ti(e) { return jp[e] }m(); c(); p(); d(); f(); const Wr = class {
  constructor(t) { this.options = t; this.batches = {} }batches; tickActive = !1; request(t) { const r = this.options.batchBy(t); return r ? (this.batches[r] || (this.batches[r] = [], this.tickActive || (this.tickActive = !0, y.nextTick(() => { this.dispatchBatches(), this.tickActive = !1 }))), new Promise((n, i) => { this.batches[r].push({ request: t, resolve: n, reject: i }) })) : this.options.singleLoader(t) }dispatchBatches() {
    for (const t in this.batches) {
      const r = this.batches[t]; delete this.batches[t], r.length === 1
        ? this.options.singleLoader(r[0].request).then((n) => { n instanceof Error ? r[0].reject(n) : r[0].resolve(n) }).catch((n) => { r[0].reject(n) })
        : (r.sort((n, i) => this.options.batchOrder(n.request, i.request)), this.options.batchLoader(r.map(n => n.request)).then((n) => {
            if (n instanceof Error) {
              for (let i = 0; i < r.length; i++)r[i].reject(n)
            }
            else {
              for (let i = 0; i < r.length; i++) { const o = n[i]; o instanceof Error ? r[i].reject(o) : r[i].resolve(o) }
            }
          }).catch((n) => { for (let i = 0; i < r.length; i++)r[i].reject(n) }))
    }
  }

  get [Symbol.toStringTag]() { return 'DataLoader' }
}; m(); c(); p(); d(); f(); function He(e, t) {
  if (t === null)
    return t; switch (e) { case 'bigint':return BigInt(t); case 'bytes':{ const { buffer: r, byteOffset: n, byteLength: i } = w.Buffer.from(t, 'base64'); return new Uint8Array(r, n, i) } case 'decimal':return new xe(t); case 'datetime':case 'date':return new Date(t); case 'time':return new Date(`1970-01-01T${t}Z`); case 'bigint-array':return t.map(r => He('bigint', r)); case 'bytes-array':return t.map(r => He('bytes', r)); case 'decimal-array':return t.map(r => He('decimal', r)); case 'datetime-array':return t.map(r => He('datetime', r)); case 'date-array':return t.map(r => He('date', r)); case 'time-array':return t.map(r => He('time', r)); default:return t }
} function Kr(e) { const t = []; const r = qp(e); for (let n = 0; n < e.rows.length; n++) { const i = e.rows[n]; const o = { ...r }; for (let s = 0; s < i.length; s++)o[e.columns[s]] = He(e.types[s], i[s]); t.push(o) } return t } function qp(e) { const t = {}; for (let r = 0; r < e.columns.length; r++)t[e.columns[r]] = null; return t } const Up = ae('prisma:client:request_handler'); const Hr = class {
  client; dataloader; logEmitter; constructor(t, r) {
    this.logEmitter = r, this.client = t, this.dataloader = new Wr({ batchLoader: Ts(async ({ requests: n, customDataProxyFetch: i }) => {
      const { transaction: o, otelParentCtx: s } = n[0]; const a = n.map(h => h.protocolQuery); const l = this.client._tracingHelper.getTraceParent(s); const u = n.some(h => ti(h.protocolQuery.action)); return (await this.client._engine.requestBatch(a, { traceparent: l, transaction: Vp(o), containsWrite: u, customDataProxyFetch: i })).map((h, v) => {
        if (h instanceof Error)
          return h; try { return this.mapQueryEngineResult(n[v], h) }
        catch (R) { return R }
      })
    }), singleLoader: async (n) => { const i = n.transaction?.kind === 'itx' ? ta(n.transaction) : void 0; const o = await this.client._engine.request(n.protocolQuery, { traceparent: this.client._tracingHelper.getTraceParent(), interactiveTransaction: i, isWrite: ti(n.protocolQuery.action), customDataProxyFetch: n.customDataProxyFetch }); return this.mapQueryEngineResult(n, o) }, batchBy: n => n.transaction?.id ? `transaction-${n.transaction.id}` : Xs(n.protocolQuery), batchOrder(n, i) { return n.transaction?.kind === 'batch' && i.transaction?.kind === 'batch' ? n.transaction.index - i.transaction.index : 0 } })
  }

  async request(t) {
    try { return await this.dataloader.request(t) }
    catch (r) { const { clientMethod: n, callsite: i, transaction: o, args: s, modelName: a } = t; this.handleAndLogRequestError({ error: r, clientMethod: n, callsite: i, transaction: o, args: s, modelName: a, globalOmit: t.globalOmit }) }
  }

  mapQueryEngineResult({ dataPath: t, unpacker: r }, n) { const i = n?.data; const o = this.unpack(i, t, r); return y.env.PRISMA_CLIENT_GET_TIME ? { data: o } : o }handleAndLogRequestError(t) {
    try { this.handleRequestError(t) }
    catch (r) { throw this.logEmitter && this.logEmitter.emit('error', { message: r.message, target: t.clientMethod, timestamp: new Date() }), r }
  }

  handleRequestError({ error: t, clientMethod: r, callsite: n, transaction: i, args: o, modelName: s, globalOmit: a }) {
    if (Up(t), Qp(t, i))
      throw t; if (t instanceof ie && Jp(t)) { const u = ra(t.meta); Or({ args: o, errors: [u], callsite: n, errorFormat: this.client._errorFormat, originalMethod: r, clientVersion: this.client._clientVersion, globalOmit: a }) } let l = t.message; if (n && (l = Er({ callsite: n, originalMethod: r, isPanic: t.isPanic, showColors: this.client._errorFormat === 'pretty', message: l })), l = this.sanitizeMessage(l), t.code) { const u = s ? { modelName: s, ...t.meta } : t.meta; throw new ie(l, { code: t.code, clientVersion: this.client._clientVersion, meta: u, batchRequestIdx: t.batchRequestIdx }) }
    else {
      if (t.isPanic)
        throw new ue(l, this.client._clientVersion); if (t instanceof G)
        throw new G(l, { clientVersion: this.client._clientVersion, batchRequestIdx: t.batchRequestIdx }); if (t instanceof Q)
        throw new Q(l, this.client._clientVersion); if (t instanceof ue)
        throw new ue(l, this.client._clientVersion)
    } throw t.clientVersion = this.client._clientVersion, t
  }

  sanitizeMessage(t) { return this.client._errorFormat && this.client._errorFormat !== 'pretty' ? (0, ea.default)(t) : t }unpack(t, r, n) {
    if (!t || (t.data && (t = t.data), !t))
      return t; const i = Object.keys(t)[0]; const o = Object.values(t)[0]; const s = r.filter(u => u !== 'select' && u !== 'include'); const a = Un(o, s); const l = i === 'queryRaw' ? Kr(a) : ot(a); return n ? n(l) : l
  }

  get [Symbol.toStringTag]() { return 'RequestHandler' }
}; function Vp(e) {
  if (e) {
    if (e.kind === 'batch')
      return { kind: 'batch', options: { isolationLevel: e.isolationLevel } }; if (e.kind === 'itx')
      return { kind: 'itx', options: ta(e) }; Ie(e, 'Unknown transaction kind')
  }
} function ta(e) { return { id: e.id, payload: e.payload } } function Qp(e, t) { return Gr(e) && t?.kind === 'batch' && e.batchRequestIdx !== t.index } function Jp(e) { return e.code === 'P2009' || e.code === 'P2012' } function ra(e) {
  if (e.kind === 'Union')
    return { kind: 'Union', errors: e.errors.map(ra) }; if (Array.isArray(e.selectionPath)) { const [,...t] = e.selectionPath; return { ...e, selectionPath: t } } return e
}m(); c(); p(); d(); f(); const na = '6.5.0'; const ia = na; m(); c(); p(); d(); f(); const ua = Re(kn()); m(); c(); p(); d(); f(); const B = class extends Error {
  constructor(t) {
    super(`${t}
Read more at https://pris.ly/d/client-constructor`), this.name = 'PrismaClientConstructorValidationError'
  }

  get [Symbol.toStringTag]() { return 'PrismaClientConstructorValidationError' }
}; le(B, 'PrismaClientConstructorValidationError'); const oa = ['datasources', 'datasourceUrl', 'errorFormat', 'adapter', 'log', 'transactionOptions', 'omit', '__internal']; const sa = ['pretty', 'colorless', 'minimal']; const aa = ['info', 'query', 'warn', 'error']; const Wp = { datasources: (e, { datasourceNames: t }) => {
  if (e) {
    if (typeof e != 'object' || Array.isArray(e))
      throw new B(`Invalid value ${JSON.stringify(e)} for "datasources" provided to PrismaClient constructor`); for (const [r, n] of Object.entries(e)) {
      if (!t.includes(r)) { const i = Et(r, t) || ` Available datasources: ${t.join(', ')}`; throw new B(`Unknown datasource ${r} provided to PrismaClient constructor.${i}`) } if (typeof n != 'object' || Array.isArray(n)) {
        throw new B(`Invalid value ${JSON.stringify(e)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`)
      } if (n && typeof n == 'object') {
        for (const [i, o] of Object.entries(n)) {
          if (i !== 'url') {
            throw new B(`Invalid value ${JSON.stringify(e)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`)
          } if (typeof o != 'string') {
            throw new B(`Invalid value ${JSON.stringify(o)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`)
          }
        }
      }
    }
  }
}, adapter: (e, t) => {
  if (!e && tt(t.generator) === 'client')
    throw new B('Using engine type "client" requires a driver adapter to be provided to PrismaClient constructor.'); if (e === null)
    return; if (e === void 0)
    throw new B('"adapter" property must not be undefined, use null to conditionally disable driver adapters.'); if (!Qr(t).includes('driverAdapters'))
    throw new B('"adapter" property can only be provided to PrismaClient constructor when "driverAdapters" preview feature is enabled.'); if (tt(t.generator) === 'binary')
    throw new B('Cannot use a driver adapter with the "binary" Query Engine. Please use the "library" Query Engine.')
}, datasourceUrl: (e) => {
  if (typeof e < 'u' && typeof e != 'string') {
    throw new B(`Invalid value ${JSON.stringify(e)} for "datasourceUrl" provided to PrismaClient constructor.
Expected string or undefined.`)
  }
}, errorFormat: (e) => {
  if (e) {
    if (typeof e != 'string')
      throw new B(`Invalid value ${JSON.stringify(e)} for "errorFormat" provided to PrismaClient constructor.`); if (!sa.includes(e)) { const t = Et(e, sa); throw new B(`Invalid errorFormat ${e} provided to PrismaClient constructor.${t}`) }
  }
}, log: (e) => {
  if (!e)
    return; if (!Array.isArray(e))
    throw new B(`Invalid value ${JSON.stringify(e)} for "log" provided to PrismaClient constructor.`); function t(r) { if (typeof r == 'string' && !aa.includes(r)) { const n = Et(r, aa); throw new B(`Invalid log level "${r}" provided to PrismaClient constructor.${n}`) } } for (const r of e) {
    t(r); const n = { level: t, emit: (i) => { const o = ['stdout', 'event']; if (!o.includes(i)) { const s = Et(i, o); throw new B(`Invalid value ${JSON.stringify(i)} for "emit" in logLevel provided to PrismaClient constructor.${s}`) } } }; if (r && typeof r == 'object') {
      for (const [i, o] of Object.entries(r)) {
        if (n[i])
          n[i](o); else throw new B(`Invalid property ${i} for "log" provided to PrismaClient constructor`)
      }
    }
  }
}, transactionOptions: (e) => {
  if (!e)
    return; const t = e.maxWait; if (t != null && t <= 0)
    throw new B(`Invalid value ${t} for maxWait in "transactionOptions" provided to PrismaClient constructor. maxWait needs to be greater than 0`); const r = e.timeout; if (r != null && r <= 0)
    throw new B(`Invalid value ${r} for timeout in "transactionOptions" provided to PrismaClient constructor. timeout needs to be greater than 0`)
}, omit: (e, t) => {
  if (typeof e != 'object')
    throw new B('"omit" option is expected to be an object.'); if (e === null)
    throw new B('"omit" option can not be `null`'); const r = []; for (const [n, i] of Object.entries(e)) { const o = Hp(n, t.runtimeDataModel); if (!o) { r.push({ kind: 'UnknownModel', modelKey: n }); continue } for (const [s, a] of Object.entries(i)) { const l = o.fields.find(u => u.name === s); if (!l) { r.push({ kind: 'UnknownField', modelKey: n, fieldName: s }); continue } if (l.relationName) { r.push({ kind: 'RelationInOmit', modelKey: n, fieldName: s }); continue } typeof a != 'boolean' && r.push({ kind: 'InvalidFieldValue', modelKey: n, fieldName: s }) } } if (r.length > 0)
    throw new B(zp(e, r))
}, __internal: (e) => {
  if (!e)
    return; const t = ['debug', 'engine', 'configOverride']; if (typeof e != 'object')
    throw new B(`Invalid value ${JSON.stringify(e)} for "__internal" to PrismaClient constructor`); for (const [r] of Object.entries(e)) {
    if (!t.includes(r)) { const n = Et(r, t); throw new B(`Invalid property ${JSON.stringify(r)} for "__internal" provided to PrismaClient constructor.${n}`) }
  }
} }; function ca(e, t) {
  for (const [r, n] of Object.entries(e)) { if (!oa.includes(r)) { const i = Et(r, oa); throw new B(`Unknown property ${r} provided to PrismaClient constructor.${i}`) }Wp[r](n, t) } if (e.datasourceUrl && e.datasources)
    throw new B('Can not use "datasourceUrl" and "datasources" options at the same time. Pick one of them')
} function Et(e, t) {
  if (t.length === 0 || typeof e != 'string')
    return ''; const r = Kp(e, t); return r ? ` Did you mean "${r}"?` : ''
} function Kp(e, t) {
  if (t.length === 0)
    return null; const r = t.map(i => ({ value: i, distance: (0, ua.default)(e, i) })); r.sort((i, o) => i.distance < o.distance ? -1 : 1); const n = r[0]; return n.distance < 3 ? n.value : null
} function Hp(e, t) { return la(t.models, e) ?? la(t.types, e) } function la(e, t) {
  const r = Object.keys(e).find(n => st(n) === t); if (r)
    return e[r]
} function zp(e, t) {
  const r = mt(e); for (const o of t) switch (o.kind) { case 'UnknownModel':r.arguments.getField(o.modelKey)?.markAsError(), r.addErrorMessage(() => `Unknown model name: ${o.modelKey}.`); break; case 'UnknownField':r.arguments.getDeepField([o.modelKey, o.fieldName])?.markAsError(), r.addErrorMessage(() => `Model "${o.modelKey}" does not have a field named "${o.fieldName}".`); break; case 'RelationInOmit':r.arguments.getDeepField([o.modelKey, o.fieldName])?.markAsError(), r.addErrorMessage(() => 'Relations are already excluded by default and can not be specified in "omit".'); break; case 'InvalidFieldValue':r.arguments.getDeepFieldValue([o.modelKey, o.fieldName])?.markAsError(), r.addErrorMessage(() => 'Omit field option value must be a boolean.'); break } const { message: n, args: i } = kr(r, 'colorless'); return `Error validating "omit" option:

${i}

${n}`
}m(); c(); p(); d(); f(); function pa(e) { return e.length === 0 ? Promise.resolve([]) : new Promise((t, r) => { const n = Array.from({ length: e.length }); let i = null; let o = !1; let s = 0; const a = () => { o || (s++, s === e.length && (o = !0, i ? r(i) : t(n))) }; const l = (u) => { o || (o = !0, r(u)) }; for (let u = 0; u < e.length; u++)e[u].then((g) => { n[u] = g, a() }, (g) => { if (!Gr(g)) { l(g); return }g.batchRequestIdx === u ? l(g) : (i || (i = g), a()) }) }) } const Ue = ae('prisma:client'); typeof globalThis == 'object' && (globalThis.NODE_CLIENT = !0); const Yp = { requestArgsToMiddlewareArgs: e => e, middlewareArgsToRequestArgs: e => e }; const Zp = Symbol.for('prisma.client.transaction.id'); const Xp = { id: 0, nextId() { return ++this.id } }; function ma(e) {
  class t {
    _originalClient = this; _runtimeDataModel; _requestHandler; _connectionPromise; _disconnectionPromise; _engineConfig; _accelerateEngineConfig; _clientVersion; _errorFormat; _tracingHelper; _middlewares = new Jr(); _previewFeatures; _activeProvider; _globalOmit; _extensions; _engine; _appliedParent; _createPrismaPromise = Zn(); constructor(n) {
      e = n?.__internal?.configOverride?.(e) ?? e, ks(e), n && ca(n, e); const i = new sr().on('error', () => {}); this._extensions = gt.empty(), this._previewFeatures = Qr(e), this._clientVersion = e.clientVersion ?? ia, this._activeProvider = e.activeProvider, this._globalOmit = n?.omit, this._tracingHelper = zs(); const o = { rootEnvPath: e.relativeEnvPaths.rootEnvPath && we.resolve(e.dirname, e.relativeEnvPaths.rootEnvPath), schemaEnvPath: e.relativeEnvPaths.schemaEnvPath && we.resolve(e.dirname, e.relativeEnvPaths.schemaEnvPath) }; let s; if (n?.adapter) {
        s = un(n.adapter); const l = e.activeProvider === 'postgresql' ? 'postgres' : e.activeProvider; if (s.provider !== l)
          throw new Q(`The Driver Adapter \`${s.adapterName}\`, based on \`${s.provider}\`, is not compatible with the provider \`${l}\` specified in the Prisma schema.`, this._clientVersion); if (n.datasources || n.datasourceUrl !== void 0)
          throw new Q('Custom datasource configuration is not compatible with Prisma Driver Adapters. Please define the database connection string directly in the Driver Adapter configuration.', this._clientVersion)
      } const a = e.injectableEdgeEnv?.(); try {
        const l = n ?? {}; const u = l.__internal ?? {}; const g = u.debug === !0; g && ae.enable('prisma:client'); let h = we.resolve(e.dirname, e.relativePath); or.existsSync(h) || (h = e.dirname), Ue('dirname', e.dirname), Ue('relativePath', e.relativePath), Ue('cwd', h); const v = u.engine || {}; if (l.errorFormat ? this._errorFormat = l.errorFormat : y.env.NODE_ENV === 'production' ? this._errorFormat = 'minimal' : y.env.NO_COLOR ? this._errorFormat = 'colorless' : this._errorFormat = 'colorless', this._runtimeDataModel = e.runtimeDataModel, this._engineConfig = { cwd: h, dirname: e.dirname, enableDebugLogs: g, allowTriggerPanic: v.allowTriggerPanic, datamodelPath: we.join(e.dirname, e.filename ?? 'schema.prisma'), prismaPath: v.binaryPath ?? void 0, engineEndpoint: v.endpoint, generator: e.generator, showColors: this._errorFormat === 'pretty', logLevel: l.log && Zs(l.log), logQueries: l.log && !!(typeof l.log == 'string' ? l.log === 'query' : l.log.find(R => typeof R == 'string' ? R === 'query' : R.level === 'query')), env: a?.parsed ?? {}, flags: [], engineWasm: e.engineWasm, compilerWasm: e.compilerWasm, clientVersion: e.clientVersion, engineVersion: e.engineVersion, previewFeatures: this._previewFeatures, activeProvider: e.activeProvider, inlineSchema: e.inlineSchema, overrideDatasources: Os(l, e.datasourceNames), inlineDatasources: e.inlineDatasources, inlineSchemaHash: e.inlineSchemaHash, tracingHelper: this._tracingHelper, transactionOptions: { maxWait: l.transactionOptions?.maxWait ?? 2e3, timeout: l.transactionOptions?.timeout ?? 5e3, isolationLevel: l.transactionOptions?.isolationLevel }, logEmitter: i, isBundled: e.isBundled, adapter: s }, this._accelerateEngineConfig = { ...this._engineConfig, accelerateUtils: { resolveDatasourceUrl: Vr, getBatchRequestPayload: Br, prismaGraphQLToJSError: jr, PrismaClientUnknownRequestError: G, PrismaClientInitializationError: Q, PrismaClientKnownRequestError: ie, debug: ae('prisma:client:accelerateEngine'), engineVersion: fa.version, clientVersion: e.clientVersion } }, Ue('clientVersion', e.clientVersion), this._engine = Bs(e, this._engineConfig), this._requestHandler = new Hr(this, i), l.log) {
          for (const R of l.log) { const C = typeof R == 'string' ? R : R.emit === 'stdout' ? R.level : null; C && this.$on(C, (A) => { _t.log(`${_t.tags[C] ?? ''}`, A.message || A.query) }) }
        }
      }
      catch (l) { throw l.clientVersion = this._clientVersion, l } return this._appliedParent = zt(this)
    }

    get [Symbol.toStringTag]() { return 'PrismaClient' }$use(n) { this._middlewares.use(n) }$on(n, i) { return n === 'beforeExit' ? this._engine.onBeforeExit(i) : n && this._engineConfig.logEmitter.on(n, i), this }$connect() {
      try { return this._engine.start() }
      catch (n) { throw n.clientVersion = this._clientVersion, n }
    }

    async $disconnect() {
      try { await this._engine.stop() }
      catch (n) { throw n.clientVersion = this._clientVersion, n }
      finally { _i() }
    }

    $executeRawInternal(n, i, o, s) { const a = this._activeProvider; return this._request({ action: 'executeRaw', args: o, transaction: n, clientMethod: i, argsMapper: Yn({ clientMethod: i, activeProvider: a }), callsite: qe(this._errorFormat), dataPath: [], middlewareArgsMapper: s }) }$executeRaw(n, ...i) { return this._createPrismaPromise((o) => { if (n.raw !== void 0 || n.sql !== void 0) { const [s, a] = da(n, i); return zn(this._activeProvider, s.text, s.values, Array.isArray(n) ? 'prisma.$executeRaw`<SQL>`' : 'prisma.$executeRaw(sql`<SQL>`)'), this.$executeRawInternal(o, '$executeRaw', s, a) } throw new X('`$executeRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${\'user@email.com\'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#executeraw\n', { clientVersion: this._clientVersion }) }) }$executeRawUnsafe(n, ...i) { return this._createPrismaPromise(o => (zn(this._activeProvider, n, i, 'prisma.$executeRawUnsafe(<SQL>, [...values])'), this.$executeRawInternal(o, '$executeRawUnsafe', [n, ...i]))) }$runCommandRaw(n) {
      if (e.activeProvider !== 'mongodb')
        throw new X(`The ${e.activeProvider} provider does not support $runCommandRaw. Use the mongodb provider.`, { clientVersion: this._clientVersion }); return this._createPrismaPromise(i => this._request({ args: n, clientMethod: '$runCommandRaw', dataPath: [], action: 'runCommandRaw', argsMapper: js, callsite: qe(this._errorFormat), transaction: i }))
    }

    async $queryRawInternal(n, i, o, s) { const a = this._activeProvider; return this._request({ action: 'queryRaw', args: o, transaction: n, clientMethod: i, argsMapper: Yn({ clientMethod: i, activeProvider: a }), callsite: qe(this._errorFormat), dataPath: [], middlewareArgsMapper: s }) }$queryRaw(n, ...i) {
      return this._createPrismaPromise((o) => {
        if (n.raw !== void 0 || n.sql !== void 0)
          return this.$queryRawInternal(o, '$queryRaw', ...da(n, i)); throw new X('`$queryRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${\'user@email.com\'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#queryraw\n', { clientVersion: this._clientVersion })
      })
    }

    $queryRawTyped(n) {
      return this._createPrismaPromise((i) => {
        if (!this._hasPreviewFlag('typedSql'))
          throw new X('`typedSql` preview feature must be enabled in order to access $queryRawTyped API', { clientVersion: this._clientVersion }); return this.$queryRawInternal(i, '$queryRawTyped', n)
      })
    }

    $queryRawUnsafe(n, ...i) { return this._createPrismaPromise(o => this.$queryRawInternal(o, '$queryRawUnsafe', [n, ...i])) }_transactionWithArray({ promises: n, options: i }) {
      const o = Xp.nextId(); const s = Ys(n.length); const a = n.map((l, u) => {
        if (l?.[Symbol.toStringTag] !== 'PrismaPromise')
          throw new Error('All elements of the array need to be Prisma Client promises. Hint: Please make sure you are not awaiting the Prisma client calls you intended to pass in the $transaction function.'); const g = i?.isolationLevel ?? this._engineConfig.transactionOptions.isolationLevel; const h = { kind: 'batch', id: o, index: u, isolationLevel: g, lock: s }; return l.requestTransaction?.(h) ?? l
      }); return pa(a)
    }

    async _transactionWithCallback({ callback: n, options: i }) {
      const o = { traceparent: this._tracingHelper.getTraceParent() }; const s = { maxWait: i?.maxWait ?? this._engineConfig.transactionOptions.maxWait, timeout: i?.timeout ?? this._engineConfig.transactionOptions.timeout, isolationLevel: i?.isolationLevel ?? this._engineConfig.transactionOptions.isolationLevel }; const a = await this._engine.transaction('start', o, s); let l; try { const u = { kind: 'itx', ...a }; l = await n(this._createItxClient(u)), await this._engine.transaction('commit', o, a) }
      catch (u) { throw await this._engine.transaction('rollback', o, a).catch(() => {}), u } return l
    }

    _createItxClient(n) { return ge(zt(ge(ms(this), [te('_appliedParent', () => this._appliedParent._createItxClient(n)), te('_createPrismaPromise', () => Zn(n)), te(Zp, () => n.id)])), [yt(bs)]) }$transaction(n, i) { let o; typeof n == 'function' ? this._engineConfig.adapter?.adapterName === '@prisma/adapter-d1' ? o = () => { throw new Error('Cloudflare D1 does not support interactive transactions. We recommend you to refactor your queries with that limitation in mind, and use batch transactions with `prisma.$transactions([])` where applicable.') } : o = () => this._transactionWithCallback({ callback: n, options: i }) : o = () => this._transactionWithArray({ promises: n, options: i }); const s = { name: 'transaction', attributes: { method: '$transaction' } }; return this._tracingHelper.runInChildSpan(s, o) }_request(n) {
      n.otelParentCtx = this._tracingHelper.getActiveContext(); const i = n.middlewareArgsMapper ?? Yp; const o = { args: i.requestArgsToMiddlewareArgs(n.args), dataPath: n.dataPath, runInTransaction: !!n.transaction, action: n.action, model: n.model }; const s = { middleware: { name: 'middleware', middleware: !0, attributes: { method: '$use' }, active: !1 }, operation: { name: 'operation', attributes: { method: o.action, model: o.model, name: o.model ? `${o.model}.${o.action}` : o.action } } }; let a = -1; const l = async (u) => {
        const g = this._middlewares.get(++a); if (g)
          return this._tracingHelper.runInChildSpan(s.middleware, O => g(u, _ => (O?.end(), l(_)))); const { runInTransaction: h, args: v, ...R } = u; const C = { ...n, ...R }; v && (C.args = i.middlewareArgsToRequestArgs(v)), n.transaction !== void 0 && h === !1 && delete C.transaction; const A = await vs(this, C); return C.model ? ws({ result: A, modelName: C.model, args: C.args, extensions: this._extensions, runtimeDataModel: this._runtimeDataModel, globalOmit: this._globalOmit }) : A
      }; return this._tracingHelper.runInChildSpan(s.operation, () => l(o))
    }

    async _executeRequest({ args: n, clientMethod: i, dataPath: o, callsite: s, action: a, model: l, argsMapper: u, transaction: g, unpacker: h, otelParentCtx: v, customDataProxyFetch: R }) {
      try {
        n = u ? u(n) : n; const C = { name: 'serialize' }; const A = this._tracingHelper.runInChildSpan(C, () => Fr({ modelName: l, runtimeDataModel: this._runtimeDataModel, action: a, args: n, clientMethod: i, callsite: s, extensions: this._extensions, errorFormat: this._errorFormat, clientVersion: this._clientVersion, previewFeatures: this._previewFeatures, globalOmit: this._globalOmit })); return ae.enabled('prisma:client') && (Ue('Prisma Client call:'), Ue(`prisma.${i}(${ns(n)})`), Ue('Generated request:'), Ue(`${JSON.stringify(A, null, 2)}
`)), g?.kind === 'batch' && await g.lock, this._requestHandler.request({ protocolQuery: A, modelName: l, action: a, clientMethod: i, dataPath: o, callsite: s, args: n, extensions: this._extensions, transaction: g, unpacker: h, otelParentCtx: v, otelChildCtx: this._tracingHelper.getActiveContext(), globalOmit: this._globalOmit, customDataProxyFetch: R })
      }
      catch (C) { throw C.clientVersion = this._clientVersion, C }
    }

    $metrics = new ht(this); _hasPreviewFlag(n) { return !!this._engineConfig.previewFeatures?.includes(n) }$applyPendingMigrations() { return this._engine.applyPendingMigrations() }$extends = gs
  } return t
} function da(e, t) { return ed(e) ? [new se(e, t), Ws] : [e, Ks] } function ed(e) { return Array.isArray(e) && Array.isArray(e.raw) }m(); c(); p(); d(); f(); const td = new Set(['toJSON', '$$typeof', 'asymmetricMatch', Symbol.iterator, Symbol.toStringTag, Symbol.isConcatSpreadable, Symbol.toPrimitive]); function ga(e) {
  return new Proxy(e, { get(t, r) {
    if (r in t)
      return t[r]; if (!td.has(r))
      throw new TypeError(`Invalid enum value: ${String(r)}`)
  } })
}m(); c(); p(); d(); f(); 0 && (module.exports = { Debug, Decimal, Extensions, MetricsClient, PrismaClientInitializationError, PrismaClientKnownRequestError, PrismaClientRustPanicError, PrismaClientUnknownRequestError, PrismaClientValidationError, Public, Sql, createParam, defineDmmfProperty, deserializeJsonResponse, deserializeRawResult, dmmfToRuntimeDataModel, empty, getPrismaClient, getRuntime, join, makeStrictEnum, makeTypedQueryFactory, objectEnumValues, raw, serializeJsonQuery, skip, sqltag, warnEnvConflicts, warnOnce })
// # sourceMappingURL=react-native.js.map
