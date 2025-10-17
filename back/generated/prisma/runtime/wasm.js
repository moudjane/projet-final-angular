'use strict'; const Ko = Object.create; const St = Object.defineProperty; const Ho = Object.getOwnPropertyDescriptor; const zo = Object.getOwnPropertyNames; const Yo = Object.getPrototypeOf; const Xo = Object.prototype.hasOwnProperty; const ue = (t, e) => () => (t && (e = t(t = 0)), e); const _e = (t, e) => () => (e || t((e = { exports: {} }).exports, e), e.exports); function kt(t, e) { for (const r in e)St(t, r, { get: e[r], enumerable: !0 }) } function cn(t, e, r, n) {
  if (e && typeof e == 'object' || typeof e == 'function') {
    for (const i of zo(e))!Xo.call(t, i) && i !== r && St(t, i, { get: () => e[i], enumerable: !(n = Ho(e, i)) || n.enumerable })
  } return t
} const rt = (t, e, r) => (r = t != null ? Ko(Yo(t)) : {}, cn(e || !t || !t.__esModule ? St(r, 'default', { value: t, enumerable: !0 }) : r, t)); const Zo = t => cn(St({}, '__esModule', { value: !0 }), t); function wr(t, e) {
  if (e = e.toLowerCase(), e === 'utf8' || e === 'utf-8')
    return new y(ns.encode(t)); if (e === 'base64' || e === 'base64url')
    return t = t.replace(/-/g, '+').replace(/_/g, '/'), t = t.replace(/[^A-Z0-9+/]/gi, ''), new y([...atob(t)].map(r => r.charCodeAt(0))); if (e === 'binary' || e === 'ascii' || e === 'latin1' || e === 'latin-1')
    return new y([...t].map(r => r.charCodeAt(0))); if (e === 'ucs2' || e === 'ucs-2' || e === 'utf16le' || e === 'utf-16le') { const r = new y(t.length * 2); const n = new DataView(r.buffer); for (let i = 0; i < t.length; i++)n.setUint16(i * 2, t.charCodeAt(i), !0); return r } if (e === 'hex') { const r = new y(t.length / 2); for (let n = 0, i = 0; i < t.length; i += 2, n++)r[n] = Number.parseInt(t.slice(i, i + 2), 16); return r }pn(`encoding "${e}"`)
} function es(t) { const r = Object.getOwnPropertyNames(DataView.prototype).filter(a => a.startsWith('get') || a.startsWith('set')); const n = r.map(a => a.replace('get', 'read').replace('set', 'write')); const i = (a, f) => function (g = 0) { return B(g, 'offset'), z(g, 'offset'), $(g, 'offset', this.length - 1), new DataView(this.buffer)[r[a]](g, f) }; const o = (a, f) => function (g, T = 0) { const C = r[a].match(/set(\w+\d)/)[1].toLowerCase(); const k = rs[C]; return B(T, 'offset'), z(T, 'offset'), $(T, 'offset', this.length - 1), ts(g, 'value', k[0], k[1]), new DataView(this.buffer)[r[a]](T, g, f), T + Number.parseInt(r[a].match(/\d+/)[0]) / 8 }; const s = (a) => { a.forEach((f) => { f.includes('Uint') && (t[f.replace('Uint', 'UInt')] = t[f]), f.includes('Float64') && (t[f.replace('Float64', 'Double')] = t[f]), f.includes('Float32') && (t[f.replace('Float32', 'Float')] = t[f]) }) }; n.forEach((a, f) => { a.startsWith('read') && (t[a] = i(f, !1), t[`${a}LE`] = i(f, !0), t[`${a}BE`] = i(f, !1)), a.startsWith('write') && (t[a] = o(f, !1), t[`${a}LE`] = o(f, !0), t[`${a}BE`] = o(f, !1)), s([a, `${a}LE`, `${a}BE`]) }) } function pn(t) { throw new Error(`Buffer polyfill does not implement "${t}"`) } function Ot(t, e) {
  if (!(t instanceof Uint8Array))
    throw new TypeError(`The "${e}" argument must be an instance of Buffer or Uint8Array`)
} function $(t, e, r = ss + 1) { if (t < 0 || t > r) { const n = new RangeError(`The value of "${e}" is out of range. It must be >= 0 && <= ${r}. Received ${t}`); throw n.code = 'ERR_OUT_OF_RANGE', n } } function B(t, e) { if (typeof t != 'number') { const r = new TypeError(`The "${e}" argument must be of type number. Received type ${typeof t}.`); throw r.code = 'ERR_INVALID_ARG_TYPE', r } } function z(t, e) { if (!Number.isInteger(t) || Number.isNaN(t)) { const r = new RangeError(`The value of "${e}" is out of range. It must be an integer. Received ${t}`); throw r.code = 'ERR_OUT_OF_RANGE', r } } function ts(t, e, r, n) { if (t < r || t > n) { const i = new RangeError(`The value of "${e}" is out of range. It must be >= ${r} and <= ${n}. Received ${t}`); throw i.code = 'ERR_OUT_OF_RANGE', i } } function mn(t, e) { if (typeof t != 'string') { const r = new TypeError(`The "${e}" argument must be of type string. Received type ${typeof t}`); throw r.code = 'ERR_INVALID_ARG_TYPE', r } } function as(t, e = 'utf8') { return y.from(t, e) } let y; let rs; let ns; let is; let os; let ss; let b; let Er; const u = ue(() => {
  'use strict'; y = class t extends Uint8Array {
    _isBuffer = !0; get offset() { return this.byteOffset } static alloc(e, r = 0, n = 'utf8') { return mn(n, 'encoding'), t.allocUnsafe(e).fill(r, n) } static allocUnsafe(e) { return t.from(e) } static allocUnsafeSlow(e) { return t.from(e) } static isBuffer(e) { return e && !!e._isBuffer } static byteLength(e, r = 'utf8') {
      if (typeof e == 'string')
        return wr(e, r).byteLength; if (e && e.byteLength)
        return e.byteLength; const n = new TypeError('The "string" argument must be of type string or an instance of Buffer or ArrayBuffer.'); throw n.code = 'ERR_INVALID_ARG_TYPE', n
    }

    static isEncoding(e) { return os.includes(e) } static compare(e, r) {
      Ot(e, 'buff1'), Ot(r, 'buff2'); for (let n = 0; n < e.length; n++) {
        if (e[n] < r[n])
          return -1; if (e[n] > r[n])
          return 1
      } return e.length === r.length ? 0 : e.length > r.length ? 1 : -1
    }

    static from(e, r = 'utf8') {
      if (e && typeof e == 'object' && e.type === 'Buffer')
        return new t(e.data); if (typeof e == 'number')
        return new t(new Uint8Array(e)); if (typeof e == 'string')
        return wr(e, r); if (ArrayBuffer.isView(e)) { const { byteOffset: n, byteLength: i, buffer: o } = e; return 'map' in e && typeof e.map == 'function' ? new t(e.map(s => s % 256), n, i) : new t(o, n, i) } if (e && typeof e == 'object' && ('length' in e || 'byteLength' in e || 'buffer' in e))
        return new t(e); throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
    }

    static concat(e, r) {
      if (e.length === 0)
        return t.alloc(0); const n = [].concat(...e.map(o => [...o])); const i = t.alloc(r !== void 0 ? r : n.length); return i.set(r !== void 0 ? n.slice(0, r) : n), i
    }

    slice(e = 0, r = this.length) { return this.subarray(e, r) }subarray(e = 0, r = this.length) { return Object.setPrototypeOf(super.subarray(e, r), t.prototype) }reverse() { return super.reverse(), this }readIntBE(e, r) { B(e, 'offset'), z(e, 'offset'), $(e, 'offset', this.length - 1), B(r, 'byteLength'), z(r, 'byteLength'); const n = new DataView(this.buffer, e, r); let i = 0; for (let o = 0; o < r; o++)i = i * 256 + n.getUint8(o); return n.getUint8(0) & 128 && (i -= 256 ** r), i }readIntLE(e, r) { B(e, 'offset'), z(e, 'offset'), $(e, 'offset', this.length - 1), B(r, 'byteLength'), z(r, 'byteLength'); const n = new DataView(this.buffer, e, r); let i = 0; for (let o = 0; o < r; o++)i += n.getUint8(o) * 256 ** o; return n.getUint8(r - 1) & 128 && (i -= 256 ** r), i }readUIntBE(e, r) { B(e, 'offset'), z(e, 'offset'), $(e, 'offset', this.length - 1), B(r, 'byteLength'), z(r, 'byteLength'); const n = new DataView(this.buffer, e, r); let i = 0; for (let o = 0; o < r; o++)i = i * 256 + n.getUint8(o); return i }readUintBE(e, r) { return this.readUIntBE(e, r) }readUIntLE(e, r) { B(e, 'offset'), z(e, 'offset'), $(e, 'offset', this.length - 1), B(r, 'byteLength'), z(r, 'byteLength'); const n = new DataView(this.buffer, e, r); let i = 0; for (let o = 0; o < r; o++)i += n.getUint8(o) * 256 ** o; return i }readUintLE(e, r) { return this.readUIntLE(e, r) }writeIntBE(e, r, n) { return e = e < 0 ? e + 256 ** n : e, this.writeUIntBE(e, r, n) }writeIntLE(e, r, n) { return e = e < 0 ? e + 256 ** n : e, this.writeUIntLE(e, r, n) }writeUIntBE(e, r, n) { B(r, 'offset'), z(r, 'offset'), $(r, 'offset', this.length - 1), B(n, 'byteLength'), z(n, 'byteLength'); const i = new DataView(this.buffer, r, n); for (let o = n - 1; o >= 0; o--)i.setUint8(o, e & 255), e = e / 256; return r + n }writeUintBE(e, r, n) { return this.writeUIntBE(e, r, n) }writeUIntLE(e, r, n) { B(r, 'offset'), z(r, 'offset'), $(r, 'offset', this.length - 1), B(n, 'byteLength'), z(n, 'byteLength'); const i = new DataView(this.buffer, r, n); for (let o = 0; o < n; o++)i.setUint8(o, e & 255), e = e / 256; return r + n }writeUintLE(e, r, n) { return this.writeUIntLE(e, r, n) }toJSON() { return { type: 'Buffer', data: Array.from(this) } }swap16() { const e = new DataView(this.buffer, this.byteOffset, this.byteLength); for (let r = 0; r < this.length; r += 2)e.setUint16(r, e.getUint16(r, !0), !1); return this }swap32() { const e = new DataView(this.buffer, this.byteOffset, this.byteLength); for (let r = 0; r < this.length; r += 4)e.setUint32(r, e.getUint32(r, !0), !1); return this }swap64() { const e = new DataView(this.buffer, this.byteOffset, this.byteLength); for (let r = 0; r < this.length; r += 8)e.setBigUint64(r, e.getBigUint64(r, !0), !1); return this }compare(e, r = 0, n = e.length, i = 0, o = this.length) { return Ot(e, 'target'), B(r, 'targetStart'), B(n, 'targetEnd'), B(i, 'sourceStart'), B(o, 'sourceEnd'), $(r, 'targetStart'), $(n, 'targetEnd', e.length), $(i, 'sourceStart'), $(o, 'sourceEnd', this.length), t.compare(this.slice(i, o), e.slice(r, n)) }equals(e) { return Ot(e, 'otherBuffer'), this.length === e.length && this.every((r, n) => r === e[n]) }copy(e, r = 0, n = 0, i = this.length) { $(r, 'targetStart'), $(n, 'sourceStart', this.length), $(i, 'sourceEnd'), r >>>= 0, n >>>= 0, i >>>= 0; let o = 0; for (;n < i && !(this[n] === void 0 || e[r] === void 0);)e[r] = this[n], o++, n++, r++; return o }write(e, r, n, i = 'utf8') { const o = typeof r == 'string' ? 0 : r ?? 0; let s = typeof n == 'string' ? this.length - o : n ?? this.length - o; return i = typeof r == 'string' ? r : typeof n == 'string' ? n : i, B(o, 'offset'), B(s, 'length'), $(o, 'offset', this.length), $(s, 'length', this.length), (i === 'ucs2' || i === 'ucs-2' || i === 'utf16le' || i === 'utf-16le') && (s = s - s % 2), wr(e, i).copy(this, o, 0, s) }fill(e = 0, r = 0, n = this.length, i = 'utf-8') {
      const o = typeof r == 'string' ? 0 : r; const s = typeof n == 'string' ? this.length : n; if (i = typeof r == 'string' ? r : typeof n == 'string' ? n : i, e = t.from(typeof e == 'number' ? [e] : e ?? [], i), mn(i, 'encoding'), $(o, 'offset', this.length), $(s, 'end', this.length), e.length !== 0) {
        for (let a = o; a < s; a += e.length) super.set(e.slice(0, e.length + a >= this.length ? this.length - a : e.length), a)
      } return this
    }

    includes(e, r = null, n = 'utf-8') { return this.indexOf(e, r, n) !== -1 }lastIndexOf(e, r = null, n = 'utf-8') { return this.indexOf(e, r, n, !0) }indexOf(e, r = null, n = 'utf-8', i = !1) { const o = i ? this.findLastIndex.bind(this) : this.findIndex.bind(this); n = typeof r == 'string' ? r : n; const s = t.from(typeof e == 'number' ? [e] : e, n); let a = typeof r == 'string' ? 0 : r; return a = typeof r == 'number' ? a : null, a = Number.isNaN(a) ? null : a, a ??= i ? this.length : 0, a = a < 0 ? this.length + a : a, s.length === 0 && i === !1 ? a >= this.length ? this.length : a : s.length === 0 && i === !0 ? (a >= this.length ? this.length : a) || this.length : o((f, g) => (i ? g <= a : g >= a) && this[g] === s[0] && s.every((C, k) => this[g + k] === C)) }toString(e = 'utf8', r = 0, n = this.length) {
      if (r = r < 0 ? 0 : r, e = e.toString().toLowerCase(), n <= 0)
        return ''; if (e === 'utf8' || e === 'utf-8')
        return is.decode(this.slice(r, n)); if (e === 'base64' || e === 'base64url') { const i = btoa(this.reduce((o, s) => o + Er(s), '')); return e === 'base64url' ? i.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '') : i } if (e === 'binary' || e === 'ascii' || e === 'latin1' || e === 'latin-1')
        return this.slice(r, n).reduce((i, o) => i + Er(o & (e === 'ascii' ? 127 : 255)), ''); if (e === 'ucs2' || e === 'ucs-2' || e === 'utf16le' || e === 'utf-16le') { const i = new DataView(this.buffer.slice(r, n)); return Array.from({ length: i.byteLength / 2 }, (o, s) => s * 2 + 1 < i.byteLength ? Er(i.getUint16(s * 2, !0)) : '').join('') } if (e === 'hex')
        return this.slice(r, n).reduce((i, o) => i + o.toString(16).padStart(2, '0'), ''); pn(`encoding "${e}"`)
    }

    toLocaleString() { return this.toString() }inspect() { return `<Buffer ${this.toString('hex').match(/.{1,2}/g).join(' ')}>` }
  }; rs = { int8: [-128, 127], int16: [-32768, 32767], int32: [-2147483648, 2147483647], uint8: [0, 255], uint16: [0, 65535], uint32: [0, 4294967295], float32: [-1 / 0, 1 / 0], float64: [-1 / 0, 1 / 0], bigint64: [-0x8000000000000000n, 0x7FFFFFFFFFFFFFFFn], biguint64: [0n, 0xFFFFFFFFFFFFFFFFn] }, ns = new TextEncoder(), is = new TextDecoder(), os = ['utf8', 'utf-8', 'hex', 'base64', 'ascii', 'binary', 'base64url', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'latin1', 'latin-1'], ss = 4294967295; es(y.prototype); b = new Proxy(as, { construct(t, [e, r]) { return y.from(e, r) }, get(t, e) { return y[e] } }), Er = String.fromCodePoint
}); let h; const c = ue(() => { 'use strict'; h = { nextTick: (t, ...e) => { setTimeout(() => { t(...e) }, 0) }, env: {}, version: '', cwd: () => '/', stderr: {}, argv: ['/bin/node'] } }); let x; const m = ue(() => { 'use strict'; x = globalThis.performance ?? (() => { const t = Date.now(); return { now: () => Date.now() - t } })() }); let E; const p = ue(() => { 'use strict'; E = () => {}; E.prototype = E }); let w; const d = ue(() => { 'use strict'; w = class {value; constructor(e) { this.value = e }deref() { return this.value }} }); function hn(t, e) {
  let r; let n; let i; let o; let s; let a; let f; let g; const T = t.constructor; const C = T.precision; if (!t.s || !e.s)
    return e.s || (e = new T(t)), U ? D(e, C) : e; if (f = t.d, g = e.d, s = t.e, i = e.e, f = f.slice(), o = s - i, o) { for (o < 0 ? (n = f, o = -o, a = g.length) : (n = g, i = s, a = f.length), s = Math.ceil(C / N), a = s > a ? s + 1 : a + 1, o > a && (o = a, n.length = 1), n.reverse(); o--;)n.push(0); n.reverse() } for (a = f.length, o = g.length, a - o < 0 && (o = a, n = g, g = f, f = n), r = 0; o;)r = (f[--o] = f[o] + g[o] + r) / Q | 0, f[o] %= Q; for (r && (f.unshift(r), ++i), a = f.length; f[--a] == 0;)f.pop(); return e.d = f, e.e = i, U ? D(e, C) : e
} function me(t, e, r) {
  if (t !== ~~t || t < e || t > r)
    throw new Error(Se + t)
} function ce(t) {
  let e; let r; let n; const i = t.length - 1; let o = ''; let s = t[0]; if (i > 0) { for (o += s, e = 1; e < i; e++)n = `${t[e]}`, r = N - n.length, r && (o += Pe(r)), o += n; s = t[e], n = `${s}`, r = N - n.length, r && (o += Pe(r)) }
  else if (s === 0) {
    return '0'
  } for (;s % 10 === 0;)s /= 10; return o + s
} function yn(t, e) {
  let r; let n; let i; let o; let s; let a; let f = 0; let g = 0; const T = t.constructor; const C = T.precision; if (V(t) > 16)
    throw new Error(Pr + V(t)); if (!t.s)
    return new T(Z); for (e == null ? (U = !1, a = C) : a = e, s = new T(0.03125); t.abs().gte(0.1);)t = t.times(s), g += 5; for (n = Math.log(2 ** g) / Math.LN10 * 2 + 5 | 0, a += n, r = i = o = new T(Z), T.precision = a; ;) { if (i = D(i.times(t), a), r = r.times(++f), s = o.plus(be(i, r, a)), ce(s.d).slice(0, a) === ce(o.d).slice(0, a)) { for (;g--;)o = D(o.times(o), a); return T.precision = C, e == null ? (U = !0, D(o, C)) : o }o = s }
} function V(t) { for (var e = t.e * N, r = t.d[0]; r >= 10; r /= 10)e++; return e } function xr(t, e, r) {
  if (e > t.LN10.sd())
    throw U = !0, r && (t.precision = r), new Error(`${ne}LN10 precision limit exceeded`); return D(new t(t.LN10), e)
} function Pe(t) { for (var e = ''; t--;)e += '0'; return e } function nt(t, e) {
  let r; let n; let i; let o; let s; let a; let f; let g; let T; let C = 1; const k = 10; let A = t; const O = A.d; const S = A.constructor; const I = S.precision; if (A.s < 1)
    throw new Error(ne + (A.s ? 'NaN' : '-Infinity')); if (A.eq(Z))
    return new S(0); if (e == null ? (U = !1, g = I) : g = e, A.eq(10))
    return e == null && (U = !0), xr(S, g); if (g += k, S.precision = g, r = ce(O), n = r.charAt(0), o = V(A), Math.abs(o) < 15e14) { for (;n < 7 && n != 1 || n == 1 && r.charAt(1) > 3;)A = A.times(t), r = ce(A.d), n = r.charAt(0), C++; o = V(A), n > 1 ? (A = new S(`0.${r}`), o++) : A = new S(`${n}.${r.slice(1)}`) }
  else {
    return f = xr(S, g + 2, I).times(`${o}`), A = nt(new S(`${n}.${r.slice(1)}`), g - k).plus(f), S.precision = I, e == null ? (U = !0, D(A, I)) : A
  } for (a = s = A = be(A.minus(Z), A.plus(Z), g), T = D(A.times(A), g), i = 3; ;) {
    if (s = D(s.times(T), g), f = a.plus(be(s, new S(i), g)), ce(f.d).slice(0, g) === ce(a.d).slice(0, g))
      return a = a.times(2), o !== 0 && (a = a.plus(xr(S, g + 2, I).times(`${o}`))), a = be(a, new S(C), g), S.precision = I, e == null ? (U = !0, D(a, I)) : a; a = f, i += 2
  }
} function dn(t, e) {
  let r, n, i; for ((r = e.indexOf('.')) > -1 && (e = e.replace('.', '')), (n = e.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +e.slice(n + 1), e = e.substring(0, n)) : r < 0 && (r = e.length), n = 0; e.charCodeAt(n) === 48;)++n; for (i = e.length; e.charCodeAt(i - 1) === 48;)--i; if (e = e.slice(n, i), e) {
    if (i -= n, r = r - n - 1, t.e = Fe(r / N), t.d = [], n = (r + 1) % N, r < 0 && (n += N), n < i) { for (n && t.d.push(+e.slice(0, n)), i -= N; n < i;)t.d.push(+e.slice(n, n += N)); e = e.slice(n), n = N - e.length }
    else {
      n -= i
    } for (;n--;)e += '0'; if (t.d.push(+e), U && (t.e > It || t.e < -It))
      throw new Error(Pr + r)
  }
  else {
    t.s = 0, t.e = 0, t.d = [0]
  } return t
} function D(t, e, r) {
  let n; let i; let o; let s; let a; let f; let g; let T; const C = t.d; for (s = 1, o = C[0]; o >= 10; o /= 10)s++; if (n = e - s, n < 0) {
    n += N, i = e, g = C[T = 0]
  }
  else {
    if (T = Math.ceil((n + 1) / N), o = C.length, T >= o)
      return t; for (g = o = C[T], s = 1; o >= 10; o /= 10)s++; n %= N, i = n - N + s
  } if (r !== void 0 && (o = 10 ** (s - i - 1), a = g / o % 10 | 0, f = e < 0 || C[T + 1] !== void 0 || g % o, f = r < 4 ? (a || f) && (r == 0 || r == (t.s < 0 ? 3 : 2)) : a > 5 || a == 5 && (r == 4 || f || r == 6 && (n > 0 ? i > 0 ? g / 10 ** (s - i) : 0 : C[T - 1]) % 10 & 1 || r == (t.s < 0 ? 8 : 7))), e < 1 || !C[0])
    return f ? (o = V(t), C.length = 1, e = e - o - 1, C[0] = 10 ** ((N - e % N) % N), t.e = Fe(-e / N) || 0) : (C.length = 1, C[0] = t.e = t.s = 0), t; if (n == 0 ? (C.length = T, o = 1, T--) : (C.length = T + 1, o = 10 ** (N - n), C[T] = i > 0 ? (g / 10 ** (s - i) % 10 ** i | 0) * o : 0), f) {
    for (;;) {
      if (T == 0) { (C[0] += o) == Q && (C[0] = 1, ++t.e); break }
      else {
        if (C[T] += o, C[T] != Q)
          break; C[T--] = 0, o = 1
      }
    }
  } for (n = C.length; C[--n] === 0;)C.pop(); if (U && (t.e > It || t.e < -It))
    throw new Error(Pr + V(t)); return t
} function bn(t, e) {
  let r; let n; let i; let o; let s; let a; let f; let g; let T; let C; const k = t.constructor; const A = k.precision; if (!t.s || !e.s)
    return e.s ? e.s = -e.s : e = new k(t), U ? D(e, A) : e; if (f = t.d, C = e.d, n = e.e, g = t.e, f = f.slice(), s = g - n, s) { for (T = s < 0, T ? (r = f, s = -s, a = C.length) : (r = C, n = g, a = f.length), i = Math.max(Math.ceil(A / N), a) + 2, s > i && (s = i, r.length = 1), r.reverse(), i = s; i--;)r.push(0); r.reverse() }
  else {
    for (i = f.length, a = C.length, T = i < a, T && (a = i), i = 0; i < a; i++) {
      if (f[i] != C[i]) { T = f[i] < C[i]; break }
    }s = 0
  } for (T && (r = f, f = C, C = r, e.s = -e.s), a = f.length, i = C.length - a; i > 0; --i)f[a++] = 0; for (i = C.length; i > s;) { if (f[--i] < C[i]) { for (o = i; o && f[--o] === 0;)f[o] = Q - 1; --f[o], f[i] += Q }f[i] -= C[i] } for (;f[--a] === 0;)f.pop(); for (;f[0] === 0; f.shift())--n; return f[0] ? (e.d = f, e.e = n, U ? D(e, A) : e) : new k(0)
} function ke(t, e, r) { let n; const i = V(t); let o = ce(t.d); const s = o.length; return e ? (r && (n = r - s) > 0 ? o = `${o.charAt(0)}.${o.slice(1)}${Pe(n)}` : s > 1 && (o = `${o.charAt(0)}.${o.slice(1)}`), o = o + (i < 0 ? 'e' : 'e+') + i) : i < 0 ? (o = `0.${Pe(-i - 1)}${o}`, r && (n = r - s) > 0 && (o += Pe(n))) : i >= s ? (o += Pe(i + 1 - s), r && (n = r - i - 1) > 0 && (o = `${o}.${Pe(n)}`)) : ((n = i + 1) < s && (o = `${o.slice(0, n)}.${o.slice(n)}`), r && (n = r - s) > 0 && (i + 1 === s && (o += '.'), o += Pe(n))), t.s < 0 ? `-${o}` : o } function fn(t, e) {
  if (t.length > e)
    return t.length = e, !0
} function wn(t) {
  let e, r, n; function i(o) {
    const s = this; if (!(s instanceof i))
      return new i(o); if (s.constructor = i, o instanceof i) { s.s = o.s, s.e = o.e, s.d = (o = o.d) ? o.slice() : o; return } if (typeof o == 'number') {
      if (o * 0 !== 0)
        throw new Error(Se + o); if (o > 0) {
        s.s = 1
      }
      else if (o < 0) {
        o = -o, s.s = -1
      }
      else { s.s = 0, s.e = 0, s.d = [0]; return } if (o === ~~o && o < 1e7) { s.e = 0, s.d = [o]; return } return dn(s, o.toString())
    }
    else if (typeof o != 'string') {
      throw new TypeError(Se + o)
    } if (o.charCodeAt(0) === 45 ? (o = o.slice(1), s.s = -1) : s.s = 1, us.test(o))
      dn(s, o); else throw new Error(Se + o)
  } if (i.prototype = R, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.clone = wn, i.config = i.set = cs, t === void 0 && (t = {}), t) {
    for (n = ['precision', 'rounding', 'toExpNeg', 'toExpPos', 'LN10'], e = 0; e < n.length;)t.hasOwnProperty(r = n[e++]) || (t[r] = this[r])
  } return i.config(t), i
} function cs(t) {
  if (!t || typeof t != 'object')
    throw new Error(`${ne}Object expected`); let e; let r; let n; const i = ['precision', 1, De, 'rounding', 0, 8, 'toExpNeg', -1 / 0, 0, 'toExpPos', 0, 1 / 0]; for (e = 0; e < i.length; e += 3) {
    if ((n = t[r = i[e]]) !== void 0) {
      if (Fe(n) === n && n >= i[e + 1] && n <= i[e + 2])
        this[r] = n; else throw new Error(`${Se + r}: ${n}`)
    }
  } if ((n = t[r = 'LN10']) !== void 0) {
    if (n == Math.LN10)
      this[r] = new this(n); else throw new Error(`${Se + r}: ${n}`)
  } return this
} let De; let ls; var vr; let U; let ne; let Se; let Pr; let Fe; let Ae; let us; let Z; let Q; let N; let gn; let It; let R; let be; var vr; let Mt; const En = ue(() => {
  'use strict'; u(); c(); m(); p(); d(); l(); De = 1e9, ls = { precision: 20, rounding: 4, toExpNeg: -7, toExpPos: 21, LN10: '2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286' }, U = !0, ne = '[DecimalError] ', Se = `${ne}Invalid argument: `, Pr = `${ne}Exponent out of range: `, Fe = Math.floor, Ae = Math.pow, us = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Q = 1e7, N = 7, gn = 9007199254740991, It = Fe(gn / N), R = {}; R.absoluteValue = R.abs = function () { const t = new this.constructor(this); return t.s && (t.s = 1), t }; R.comparedTo = R.cmp = function (t) {
    let e; let r; let n; let i; const o = this; if (t = new o.constructor(t), o.s !== t.s)
      return o.s || -t.s; if (o.e !== t.e)
      return o.e > t.e ^ o.s < 0 ? 1 : -1; for (n = o.d.length, i = t.d.length, e = 0, r = n < i ? n : i; e < r; ++e) {
      if (o.d[e] !== t.d[e])
        return o.d[e] > t.d[e] ^ o.s < 0 ? 1 : -1
    } return n === i ? 0 : n > i ^ o.s < 0 ? 1 : -1
  }; R.decimalPlaces = R.dp = function () {
    const t = this; let e = t.d.length - 1; let r = (e - t.e) * N; if (e = t.d[e], e) {
      for (;e % 10 == 0; e /= 10)r--
    } return r < 0 ? 0 : r
  }; R.dividedBy = R.div = function (t) { return be(this, new this.constructor(t)) }; R.dividedToIntegerBy = R.idiv = function (t) { const e = this; const r = e.constructor; return D(be(e, new r(t), 0, 1), r.precision) }; R.equals = R.eq = function (t) { return !this.cmp(t) }; R.exponent = function () { return V(this) }; R.greaterThan = R.gt = function (t) { return this.cmp(t) > 0 }; R.greaterThanOrEqualTo = R.gte = function (t) { return this.cmp(t) >= 0 }; R.isInteger = R.isint = function () { return this.e > this.d.length - 2 }; R.isNegative = R.isneg = function () { return this.s < 0 }; R.isPositive = R.ispos = function () { return this.s > 0 }; R.isZero = function () { return this.s === 0 }; R.lessThan = R.lt = function (t) { return this.cmp(t) < 0 }; R.lessThanOrEqualTo = R.lte = function (t) { return this.cmp(t) < 1 }; R.logarithm = R.log = function (t) {
    let e; const r = this; const n = r.constructor; const i = n.precision; const o = i + 5; if (t === void 0)
      t = new n(10); else if (t = new n(t), t.s < 1 || t.eq(Z))
      throw new Error(`${ne}NaN`); if (r.s < 1)
      throw new Error(ne + (r.s ? 'NaN' : '-Infinity')); return r.eq(Z) ? new n(0) : (U = !1, e = be(nt(r, o), nt(t, o), o), U = !0, D(e, i))
  }; R.minus = R.sub = function (t) { const e = this; return t = new e.constructor(t), e.s == t.s ? bn(e, t) : hn(e, (t.s = -t.s, t)) }; R.modulo = R.mod = function (t) {
    let e; const r = this; const n = r.constructor; const i = n.precision; if (t = new n(t), !t.s)
      throw new Error(`${ne}NaN`); return r.s ? (U = !1, e = be(r, t, 0, 1).times(t), U = !0, r.minus(e)) : D(new n(r), i)
  }; R.naturalExponential = R.exp = function () { return yn(this) }; R.naturalLogarithm = R.ln = function () { return nt(this) }; R.negated = R.neg = function () { const t = new this.constructor(this); return t.s = -t.s || 0, t }; R.plus = R.add = function (t) { const e = this; return t = new e.constructor(t), e.s == t.s ? hn(e, t) : bn(e, (t.s = -t.s, t)) }; R.precision = R.sd = function (t) {
    let e; let r; let n; const i = this; if (t !== void 0 && t !== !!t && t !== 1 && t !== 0)
      throw new Error(Se + t); if (e = V(i) + 1, n = i.d.length - 1, r = n * N + 1, n = i.d[n], n) { for (;n % 10 == 0; n /= 10)r--; for (n = i.d[0]; n >= 10; n /= 10)r++ } return t && e > r ? e : r
  }; R.squareRoot = R.sqrt = function () {
    let t; let e; let r; let n; let i; let o; let s; const a = this; const f = a.constructor; if (a.s < 1) {
      if (!a.s)
        return new f(0); throw new Error(`${ne}NaN`)
    } for (t = V(a), U = !1, i = Math.sqrt(+a), i == 0 || i == 1 / 0 ? (e = ce(a.d), (e.length + t) % 2 == 0 && (e += '0'), i = Math.sqrt(e), t = Fe((t + 1) / 2) - (t < 0 || t % 2), i == 1 / 0 ? e = `5e${t}` : (e = i.toExponential(), e = e.slice(0, e.indexOf('e') + 1) + t), n = new f(e)) : n = new f(i.toString()), r = f.precision, i = s = r + 3; ;) {
      if (o = n, n = o.plus(be(a, o, s + 2)).times(0.5), ce(o.d).slice(0, s) === (e = ce(n.d)).slice(0, s)) {
        if (e = e.slice(s - 3, s + 1), i == s && e == '4999') { if (D(o, r + 1, 0), o.times(o).eq(a)) { n = o; break } }
        else if (e != '9999') {
          break
        } s += 4
      }
    } return U = !0, D(n, r)
  }; R.times = R.mul = function (t) {
    let e; let r; let n; let i; let o; let s; let a; let f; let g; const T = this; const C = T.constructor; let k = T.d; let A = (t = new C(t)).d; if (!T.s || !t.s)
      return new C(0); for (t.s *= T.s, r = T.e + t.e, f = k.length, g = A.length, f < g && (o = k, k = A, A = o, s = f, f = g, g = s), o = [], s = f + g, n = s; n--;)o.push(0); for (n = g; --n >= 0;) { for (e = 0, i = f + n; i > n;)a = o[i] + A[n] * k[i - n - 1] + e, o[i--] = a % Q | 0, e = a / Q | 0; o[i] = (o[i] + e) % Q | 0 } for (;!o[--s];)o.pop(); return e ? ++r : o.shift(), t.d = o, t.e = r, U ? D(t, C.precision) : t
  }; R.toDecimalPlaces = R.todp = function (t, e) { let r = this; const n = r.constructor; return r = new n(r), t === void 0 ? r : (me(t, 0, De), e === void 0 ? e = n.rounding : me(e, 0, 8), D(r, t + V(r) + 1, e)) }; R.toExponential = function (t, e) { let r; let n = this; const i = n.constructor; return t === void 0 ? r = ke(n, !0) : (me(t, 0, De), e === void 0 ? e = i.rounding : me(e, 0, 8), n = D(new i(n), t + 1, e), r = ke(n, !0, t + 1)), r }; R.toFixed = function (t, e) { let r; let n; const i = this; const o = i.constructor; return t === void 0 ? ke(i) : (me(t, 0, De), e === void 0 ? e = o.rounding : me(e, 0, 8), n = D(new o(i), t + V(i) + 1, e), r = ke(n.abs(), !1, t + V(n) + 1), i.isneg() && !i.isZero() ? `-${r}` : r) }; R.toInteger = R.toint = function () { const t = this; const e = t.constructor; return D(new e(t), V(t) + 1, e.rounding) }; R.toNumber = function () { return +this }; R.toPower = R.pow = function (t) {
    let e; let r; let n; let i; let o; let s; let a = this; const f = a.constructor; const g = 12; const T = +(t = new f(t)); if (!t.s)
      return new f(Z); if (a = new f(a), !a.s) {
      if (t.s < 1)
        throw new Error(`${ne}Infinity`); return a
    } if (a.eq(Z))
      return a; if (n = f.precision, t.eq(Z))
      return D(a, n); if (e = t.e, r = t.d.length - 1, s = e >= r, o = a.s, s) { if ((r = T < 0 ? -T : T) <= gn) { for (i = new f(Z), e = Math.ceil(n / N + 4), U = !1; r % 2 && (i = i.times(a), fn(i.d, e)), r = Fe(r / 2), r !== 0;)a = a.times(a), fn(a.d, e); return U = !0, t.s < 0 ? new f(Z).div(i) : D(i, n) } }
    else if (o < 0) {
      throw new Error(`${ne}NaN`)
    } return o = o < 0 && t.d[Math.max(e, r)] & 1 ? -1 : 1, a.s = 1, U = !1, i = t.times(nt(a, n + g)), U = !0, i = yn(i), i.s = o, i
  }; R.toPrecision = function (t, e) { let r; let n; let i = this; const o = i.constructor; return t === void 0 ? (r = V(i), n = ke(i, r <= o.toExpNeg || r >= o.toExpPos)) : (me(t, 1, De), e === void 0 ? e = o.rounding : me(e, 0, 8), i = D(new o(i), t, e), r = V(i), n = ke(i, t <= r || r <= o.toExpNeg, t)), n }; R.toSignificantDigits = R.tosd = function (t, e) { const r = this; const n = r.constructor; return t === void 0 ? (t = n.precision, e = n.rounding) : (me(t, 1, De), e === void 0 ? e = n.rounding : me(e, 0, 8)), D(new n(r), t, e) }; R.toString = R.valueOf = R.val = R.toJSON = R[Symbol.for('nodejs.util.inspect.custom')] = function () { const t = this; const e = V(t); const r = t.constructor; return ke(t, e <= r.toExpNeg || e >= r.toExpPos) }; be = (function () {
    function t(n, i) { let o; let s = 0; let a = n.length; for (n = n.slice(); a--;)o = n[a] * i + s, n[a] = o % Q | 0, s = o / Q | 0; return s && n.unshift(s), n } function e(n, i, o, s) {
      let a, f; if (o != s) {
        f = o > s ? 1 : -1
      }
      else {
        for (a = f = 0; a < o; a++) {
          if (n[a] != i[a]) { f = n[a] > i[a] ? 1 : -1; break }
        }
      } return f
    } function r(n, i, o) { for (let s = 0; o--;)n[o] -= s, s = n[o] < i[o] ? 1 : 0, n[o] = s * Q + n[o] - i[o]; for (;!n[0] && n.length > 1;)n.shift() } return function (n, i, o, s) {
      let a; let f; let g; let T; let C; let k; let A; let O; let S; let I; let oe; let K; let Le; let H; let _; let br; let se; let Rt; const At = n.constructor; const Wo = n.s == i.s ? 1 : -1; let le = n.d; let q = i.d; if (!n.s)
        return new At(n); if (!i.s)
        throw new Error(`${ne}Division by zero`); for (f = n.e - i.e, se = q.length, _ = le.length, A = new At(Wo), O = A.d = [], g = 0; q[g] == (le[g] || 0);)++g; if (q[g] > (le[g] || 0) && --f, o == null ? K = o = At.precision : s ? K = o + (V(n) - V(i)) + 1 : K = o, K < 0)
        return new At(0); if (K = K / N + 2 | 0, g = 0, se == 1) {
        for (T = 0, q = q[0], K++; (g < _ || T) && K--; g++)Le = T * Q + (le[g] || 0), O[g] = Le / q | 0, T = Le % q | 0
      }
      else { for (T = Q / (q[0] + 1) | 0, T > 1 && (q = t(q, T), le = t(le, T), se = q.length, _ = le.length), H = se, S = le.slice(0, se), I = S.length; I < se;)S[I++] = 0; Rt = q.slice(), Rt.unshift(0), br = q[0], q[1] >= Q / 2 && ++br; do T = 0, a = e(q, S, se, I), a < 0 ? (oe = S[0], se != I && (oe = oe * Q + (S[1] || 0)), T = oe / br | 0, T > 1 ? (T >= Q && (T = Q - 1), C = t(q, T), k = C.length, I = S.length, a = e(C, S, k, I), a == 1 && (T--, r(C, se < k ? Rt : q, k))) : (T == 0 && (a = T = 1), C = q.slice()), k = C.length, k < I && C.unshift(0), r(S, C, I), a == -1 && (I = S.length, a = e(q, S, se, I), a < 1 && (T++, r(S, se < I ? Rt : q, I))), I = S.length) : a === 0 && (T++, S = [0]), O[g++] = T, a && S[0] ? S[I++] = le[H] || 0 : (S = [le[H]], I = 1); while ((H++ < _ || S[0] !== void 0) && K--) } return O[0] || O.shift(), A.e = f, D(A, s ? o + V(A) + 1 : o)
    }
  }()); vr = wn(ls); Z = new vr(1); Mt = vr
}); let v; let pe; var l = ue(() => { 'use strict'; En(); v = class extends Mt {static isDecimal(e) { return e instanceof Mt } static random(e = 20) { { const n = globalThis.crypto.getRandomValues(new Uint8Array(e)).reduce((i, o) => i + o, ''); return new Mt(`0.${n.slice(0, e)}`) } }}, pe = v }); function ws() { return !1 } function Nn() { return { dev: 0, ino: 0, mode: 0, nlink: 0, uid: 0, gid: 0, rdev: 0, size: 0, blksize: 0, blocks: 0, atimeMs: 0, mtimeMs: 0, ctimeMs: 0, birthtimeMs: 0, atime: new Date(), mtime: new Date(), ctime: new Date(), birthtime: new Date() } } function Es() { return Nn() } function xs() { return [] } function Ps(t) { t(null, []) } function vs() { return '' } function Ts() { return '' } function Cs() {} function Rs() {} function As() {} function Ss() {} function ks() {} function Os() {} let Is; let Ms; let Un; const qn = ue(() => { 'use strict'; u(); c(); m(); p(); d(); l(); Is = {}, Ms = { existsSync: ws, lstatSync: Nn, statSync: Es, readdirSync: xs, readdir: Ps, readlinkSync: vs, realpathSync: Ts, chmodSync: Cs, renameSync: Rs, mkdirSync: As, rmdirSync: Ss, rmSync: ks, unlinkSync: Os, promises: Is }, Un = Ms }); function Ls(...t) { return t.join('/') } function _s(...t) { return t.join('/') } function Ds(t) { const e = Bn(t); const r = Vn(t); const [n, i] = e.split('.'); return { root: '/', dir: r, base: e, ext: i, name: n } } function Bn(t) { const e = t.split('/'); return e[e.length - 1] } function Vn(t) { return t.split('/').slice(0, -1).join('/') } let $n; let Fs; let Ns; let ot; const jn = ue(() => { 'use strict'; u(); c(); m(); p(); d(); l(); $n = '/', Fs = { sep: $n }, Ns = { basename: Bn, dirname: Vn, join: _s, parse: Ds, posix: Fs, resolve: Ls, sep: $n }, ot = Ns }); const Qn = _e((km, Us) => { Us.exports = { name: '@prisma/internals', version: '6.5.0', description: 'This package is intended for Prisma\'s internal use', main: 'dist/index.js', types: 'dist/index.d.ts', repository: { type: 'git', url: 'https://github.com/prisma/prisma.git', directory: 'packages/internals' }, homepage: 'https://www.prisma.io', author: 'Tim Suchanek <suchanek@prisma.io>', bugs: 'https://github.com/prisma/prisma/issues', license: 'Apache-2.0', scripts: { dev: 'DEV=true tsx helpers/build.ts', build: 'tsx helpers/build.ts', test: 'dotenv -e ../../.db.env -- jest --silent', prepublishOnly: 'pnpm run build' }, files: ['README.md', 'dist', '!**/libquery_engine*', '!dist/get-generators/engines/*', 'scripts'], devDependencies: { '@antfu/ni': '0.21.12', '@babel/helper-validator-identifier': '7.25.9', '@opentelemetry/api': '1.9.0', '@swc/core': '1.11.5', '@swc/jest': '0.2.37', '@types/babel__helper-validator-identifier': '7.15.2', '@types/jest': '29.5.14', '@types/node': '18.19.76', '@types/resolve': '1.20.6', 'archiver': '6.0.2', 'checkpoint-client': '1.1.33', 'cli-truncate': '4.0.0', 'dotenv': '16.4.7', 'esbuild': '0.24.2', 'escape-string-regexp': '4.0.0', 'execa': '5.1.1', 'fast-glob': '3.3.3', 'find-up': '7.0.0', 'fp-ts': '2.16.9', 'fs-extra': '11.3.0', 'fs-jetpack': '5.1.0', 'global-dirs': '4.0.0', 'globby': '11.1.0', 'identifier-regex': '1.0.0', 'indent-string': '4.0.0', 'is-windows': '1.0.2', 'is-wsl': '3.1.0', 'jest': '29.7.0', 'jest-junit': '16.0.0', 'kleur': '4.1.5', 'mock-stdin': '1.0.0', 'new-github-issue-url': '0.2.1', 'node-fetch': '3.3.2', 'npm-packlist': '5.1.3', 'open': '7.4.2', 'p-map': '4.0.0', 'read-package-up': '11.0.0', 'resolve': '1.22.10', 'string-width': '4.2.3', 'strip-ansi': '6.0.1', 'strip-indent': '3.0.0', 'temp-dir': '2.0.0', 'tempy': '1.0.1', 'terminal-link': '2.1.1', 'tmp': '0.2.3', 'ts-node': '10.9.2', 'ts-pattern': '5.6.2', 'ts-toolbelt': '9.6.0', 'typescript': '5.4.5', 'yarn': '1.22.22' }, dependencies: { '@prisma/config': 'workspace:*', '@prisma/debug': 'workspace:*', '@prisma/engines': 'workspace:*', '@prisma/fetch-engine': 'workspace:*', '@prisma/generator-helper': 'workspace:*', '@prisma/get-platform': 'workspace:*', '@prisma/prisma-schema-wasm': '6.5.0-73.173f8d54f8d52e692c7e27e72a88314ec7aeff60', '@prisma/schema-files-loader': 'workspace:*', 'arg': '5.0.2', 'prompts': '2.4.2' }, peerDependencies: { typescript: '>=5.1.0' }, peerDependenciesMeta: { typescript: { optional: !0 } }, sideEffects: !1 } }); let Ut; const Kn = ue(() => { 'use strict'; u(); c(); m(); p(); d(); l(); Ut = class {events = {}; on(e, r) { return this.events[e] || (this.events[e] = []), this.events[e].push(r), this }emit(e, ...r) { return this.events[e] ? (this.events[e].forEach((n) => { n(...r) }), !0) : !1 }} }); const zn = _e((Ep, Hn) => {
  'use strict'; u(); c(); m(); p(); d(); l(); Hn.exports = (t, e = 1, r) => {
    if (r = { indent: ' ', includeEmptyLines: !1, ...r }, typeof t != 'string')
      throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof t}\``); if (typeof e != 'number')
      throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof e}\``); if (typeof r.indent != 'string')
      throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof r.indent}\``); if (e === 0)
      return t; const n = r.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm; return t.replace(n, r.indent.repeat(e))
  }
}); const Zn = _e((_p, Xn) => { 'use strict'; u(); c(); m(); p(); d(); l(); Xn.exports = ({ onlyFirst: t = !1 } = {}) => { const e = ['[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)', '(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))'].join('|'); return new RegExp(e, t ? void 0 : 'g') } }); const ti = _e((Vp, ei) => { 'use strict'; u(); c(); m(); p(); d(); l(); const Js = Zn(); ei.exports = t => typeof t == 'string' ? t.replace(Js(), '') : t }); const qr = _e((Yg, ii) => {
  'use strict'; u(); c(); m(); p(); d(); l(); ii.exports = (function () {
    function t(e, r, n, i, o) { return e < r || n < r ? e > n ? n + 1 : e + 1 : i === o ? r : r + 1 } return function (e, r) {
      if (e === r)
        return 0; if (e.length > r.length) { const n = e; e = r, r = n } for (var i = e.length, o = r.length; i > 0 && e.charCodeAt(i - 1) === r.charCodeAt(o - 1);)i--, o--; for (var s = 0; s < i && e.charCodeAt(s) === r.charCodeAt(s);)s++; if (i -= s, o -= s, i === 0 || o < 3)
        return o; let a = 0; let f; let g; let T; let C; let k; let A; let O; let S; let I; let oe; let K; let Le; const H = []; for (f = 0; f < i; f++)H.push(f + 1), H.push(e.charCodeAt(s + f)); for (var _ = H.length - 1; a < o - 3;) {
        for (I = r.charCodeAt(s + (g = a)), oe = r.charCodeAt(s + (T = a + 1)), K = r.charCodeAt(s + (C = a + 2)), Le = r.charCodeAt(s + (k = a + 3)), A = a += 4, f = 0; f < _; f += 2)O = H[f], S = H[f + 1], g = t(O, g, T, I, S), T = t(g, T, C, oe, S), C = t(T, C, k, K, S), A = t(C, k, A, Le, S), H[f] = A, k = C, C = T, T = g, g = O
      } for (;a < o;) {
        for (I = r.charCodeAt(s + (g = a)), A = ++a, f = 0; f < _; f += 2)O = H[f], H[f] = A = t(O, g, A, I, H[f + 1]), g = O
      } return A
    }
  }())
}); const _i = _e((cx, Ua) => { Ua.exports = { name: '@prisma/engines-version', version: '6.5.0-73.173f8d54f8d52e692c7e27e72a88314ec7aeff60', main: 'index.js', types: 'index.d.ts', license: 'Apache-2.0', author: 'Tim Suchanek <suchanek@prisma.io>', prisma: { enginesVersion: '173f8d54f8d52e692c7e27e72a88314ec7aeff60' }, repository: { type: 'git', url: 'https://github.com/prisma/engines-wrapper.git', directory: 'packages/engines-version' }, devDependencies: { '@types/node': '18.19.76', 'typescript': '4.9.5' }, files: ['index.js', 'index.d.ts'], scripts: { build: 'tsc -d' } } }); const jl = {}; kt(jl, { Debug: () => Ir, Decimal: () => pe, Extensions: () => Tr, MetricsClient: () => Ye, PrismaClientInitializationError: () => M, PrismaClientKnownRequestError: () => Y, PrismaClientRustPanicError: () => Ee, PrismaClientUnknownRequestError: () => j, PrismaClientValidationError: () => G, Public: () => Cr, Sql: () => X, createParam: () => Ci, defineDmmfProperty: () => Mi, deserializeJsonResponse: () => Be, deserializeRawResult: () => hr, dmmfToRuntimeDataModel: () => Ii, empty: () => Fi, getPrismaClient: () => Qo, getRuntime: () => Ce, join: () => Di, makeStrictEnum: () => Jo, makeTypedQueryFactory: () => Li, objectEnumValues: () => Kt, raw: () => Kr, serializeJsonQuery: () => tr, skip: () => er, sqltag: () => Hr, warnEnvConflicts: () => void 0, warnOnce: () => lt }); module.exports = Zo(jl); u(); c(); m(); p(); d(); l(); var Tr = {}; kt(Tr, { defineExtension: () => xn, getExtensionContext: () => Pn }); u(); c(); m(); p(); d(); l(); u(); c(); m(); p(); d(); l(); function xn(t) { return typeof t == 'function' ? t : e => e.$extends(t) }u(); c(); m(); p(); d(); l(); function Pn(t) { return t } var Cr = {}; kt(Cr, { validator: () => vn }); u(); c(); m(); p(); d(); l(); u(); c(); m(); p(); d(); l(); function vn(...t) { return e => e }u(); c(); m(); p(); d(); l(); u(); c(); m(); p(); d(); l(); u(); c(); m(); p(); d(); l(); u(); c(); m(); p(); d(); l(); u(); c(); m(); p(); d(); l(); function Rr(t) { return t.name === 'DriverAdapterError' && typeof t.cause == 'object' }u(); c(); m(); p(); d(); l(); function Lt(t) { return { ok: !0, value: t, map(e) { return Lt(e(t)) }, flatMap(e) { return e(t) } } } function Oe(t) { return { ok: !1, error: t, map() { return Oe(t) }, flatMap() { return Oe(t) } } } const Ar = class {registeredErrors = []; consumeError(e) { return this.registeredErrors[e] }registerNewError(e) { let r = 0; for (;this.registeredErrors[r] !== void 0;)r++; return this.registeredErrors[r] = { error: e }, r }}; function Sr(t) { const e = new Ar(); const r = ie(e, t.transactionContext.bind(t)); const n = { adapterName: t.adapterName, errorRegistry: e, queryRaw: ie(e, t.queryRaw.bind(t)), executeRaw: ie(e, t.executeRaw.bind(t)), executeScript: ie(e, t.executeScript.bind(t)), dispose: ie(e, t.dispose.bind(t)), provider: t.provider, transactionContext: async (...i) => (await r(...i)).map(s => ms(e, s)) }; return t.getConnectionInfo && (n.getConnectionInfo = ds(e, t.getConnectionInfo.bind(t))), n } var ms = (t, e) => { const r = ie(t, e.startTransaction.bind(e)); return { adapterName: e.adapterName, provider: e.provider, queryRaw: ie(t, e.queryRaw.bind(e)), executeRaw: ie(t, e.executeRaw.bind(e)), startTransaction: async (...n) => (await r(...n)).map(o => ps(t, o)) } }; var ps = (t, e) => ({ adapterName: e.adapterName, provider: e.provider, options: e.options, queryRaw: ie(t, e.queryRaw.bind(e)), executeRaw: ie(t, e.executeRaw.bind(e)), commit: ie(t, e.commit.bind(e)), rollback: ie(t, e.rollback.bind(e)) }); function ie(t, e) {
  return async (...r) => {
    try { return Lt(await e(...r)) }
    catch (n) {
      if (Rr(n))
        return Oe(n.cause); const i = t.registerNewError(n); return Oe({ kind: 'GenericJs', id: i })
    }
  }
} function ds(t, e) {
  return (...r) => {
    try { return Lt(e(...r)) }
    catch (n) {
      if (Rr(n))
        return Oe(n.cause); const i = t.registerNewError(n); return Oe({ kind: 'GenericJs', id: i })
    }
  }
}u(); c(); m(); p(); d(); l(); u(); c(); m(); p(); d(); l(); let kr; let Tn; let Cn; let Rn; let An = !0; typeof h < 'u' && ({ FORCE_COLOR: kr, NODE_DISABLE_COLORS: Tn, NO_COLOR: Cn, TERM: Rn } = h.env || {}, An = h.stdout && h.stdout.isTTY); const fs = { enabled: !Tn && Cn == null && Rn !== 'dumb' && (kr != null && kr !== '0' || An) }; function F(t, e) { const r = new RegExp(`\\x1b\\[${e}m`, 'g'); const n = `\x1B[${t}m`; const i = `\x1B[${e}m`; return function (o) { return !fs.enabled || o == null ? o : n + (~(`${o}`).indexOf(i) ? o.replace(r, i + n) : o) + i } } const mc = F(0, 0); const _t = F(1, 22); const Dt = F(2, 22); const pc = F(3, 23); const Sn = F(4, 24); const dc = F(7, 27); const fc = F(8, 28); const gc = F(9, 29); const hc = F(30, 39); const Ne = F(31, 39); const kn = F(32, 39); const On = F(33, 39); const In = F(34, 39); const yc = F(35, 39); const Mn = F(36, 39); const bc = F(37, 39); const Ln = F(90, 39); const wc = F(90, 39); const Ec = F(40, 49); const xc = F(41, 49); const Pc = F(42, 49); const vc = F(43, 49); const Tc = F(44, 49); const Cc = F(45, 49); const Rc = F(46, 49); const Ac = F(47, 49); const gs = 100; const _n = ['green', 'yellow', 'blue', 'magenta', 'cyan', 'red']; const Ft = []; let Dn = Date.now(); let hs = 0; const Or = typeof h < 'u' ? h.env : {}; globalThis.DEBUG ??= Or.DEBUG ?? ''; globalThis.DEBUG_COLORS ??= Or.DEBUG_COLORS ? Or.DEBUG_COLORS === 'true' : !0; const it = { enable(t) { typeof t == 'string' && (globalThis.DEBUG = t) }, disable() { const t = globalThis.DEBUG; return globalThis.DEBUG = '', t }, enabled(t) { const e = globalThis.DEBUG.split(',').map(i => i.replace(/[.+?^${}()|[\]\\]/g, '\\$&')); const r = e.some(i => i === '' || i[0] === '-' ? !1 : t.match(new RegExp(`${i.split('*').join('.*')}$`))); const n = e.some(i => i === '' || i[0] !== '-' ? !1 : t.match(new RegExp(`${i.slice(1).split('*').join('.*')}$`))); return r && !n }, log: (...t) => { const [e, r, ...n] = t; (console.warn ?? console.log)(`${e} ${r}`, ...n) }, formatters: {} }; function ys(t) { const e = { color: _n[hs++ % _n.length], enabled: it.enabled(t), namespace: t, log: it.log, extend: () => {} }; const r = (...n) => { const { enabled: i, namespace: o, color: s, log: a } = e; if (n.length !== 0 && Ft.push([o, ...n]), Ft.length > gs && Ft.shift(), it.enabled(o) || i) { const f = n.map(T => typeof T == 'string' ? T : bs(T)); const g = `+${Date.now() - Dn}ms`; Dn = Date.now(), a(o, ...f, g) } }; return new Proxy(r, { get: (n, i) => e[i], set: (n, i, o) => e[i] = o }) } var Ir = new Proxy(ys, { get: (t, e) => it[e], set: (t, e, r) => it[e] = r }); function bs(t, e = 2) {
  const r = new Set(); return JSON.stringify(t, (n, i) => {
    if (typeof i == 'object' && i !== null) {
      if (r.has(i))
        return '[Circular *]'; r.add(i)
    }
    else if (typeof i == 'bigint') {
      return i.toString()
    } return i
  }, e)
} function Fn() { Ft.length = 0 } const ee = Ir; u(); c(); m(); p(); d(); l(); u(); c(); m(); p(); d(); l(); const Mr = ['darwin', 'darwin-arm64', 'debian-openssl-1.0.x', 'debian-openssl-1.1.x', 'debian-openssl-3.0.x', 'rhel-openssl-1.0.x', 'rhel-openssl-1.1.x', 'rhel-openssl-3.0.x', 'linux-arm64-openssl-1.1.x', 'linux-arm64-openssl-1.0.x', 'linux-arm64-openssl-3.0.x', 'linux-arm-openssl-1.1.x', 'linux-arm-openssl-1.0.x', 'linux-arm-openssl-3.0.x', 'linux-musl', 'linux-musl-openssl-3.0.x', 'linux-musl-arm64-openssl-1.1.x', 'linux-musl-arm64-openssl-3.0.x', 'linux-nixos', 'linux-static-x64', 'linux-static-arm64', 'windows', 'freebsd11', 'freebsd12', 'freebsd13', 'freebsd14', 'freebsd15', 'openbsd', 'netbsd', 'arm']; u(); c(); m(); p(); d(); l(); const qs = Qn(); const Lr = qs.version; u(); c(); m(); p(); d(); l(); const Jn = 'library'; function Ue(t) { const e = Bs(); return e || (t?.config.engineType === 'library' ? 'library' : t?.config.engineType === 'binary' ? 'binary' : t?.config.engineType === 'client' ? 'client' : Jn) } function Bs() { const t = h.env.PRISMA_CLIENT_ENGINE_TYPE; return t === 'library' ? 'library' : t === 'binary' ? 'binary' : t === 'client' ? 'client' : void 0 }u(); c(); m(); p(); d(); l(); const Gn = 'prisma+postgres'; const Wn = `${Gn}:`; function _r(t) { return t?.startsWith(`${Wn}//`) ?? !1 }u(); c(); m(); p(); d(); l(); u(); c(); m(); p(); d(); l(); let Nt; ((e) => { let t; (_ => (_.findUnique = 'findUnique', _.findUniqueOrThrow = 'findUniqueOrThrow', _.findFirst = 'findFirst', _.findFirstOrThrow = 'findFirstOrThrow', _.findMany = 'findMany', _.create = 'create', _.createMany = 'createMany', _.createManyAndReturn = 'createManyAndReturn', _.update = 'update', _.updateMany = 'updateMany', _.updateManyAndReturn = 'updateManyAndReturn', _.upsert = 'upsert', _.delete = 'delete', _.deleteMany = 'deleteMany', _.groupBy = 'groupBy', _.count = 'count', _.aggregate = 'aggregate', _.findRaw = 'findRaw', _.aggregateRaw = 'aggregateRaw'))(t = e.ModelAction ||= {}) })(Nt ||= {}); const at = {}; kt(at, { error: () => js, info: () => $s, log: () => Vs, query: () => Qs, should: () => Yn, tags: () => st, warn: () => Dr }); u(); c(); m(); p(); d(); l(); var st = { error: Ne('prisma:error'), warn: On('prisma:warn'), info: Mn('prisma:info'), query: In('prisma:query') }; var Yn = { warn: () => !h.env.PRISMA_DISABLE_WARNINGS }; function Vs(...t) { console.log(...t) } function Dr(t, ...e) { Yn.warn() && console.warn(`${st.warn} ${t}`, ...e) } function $s(t, ...e) { console.info(`${st.info} ${t}`, ...e) } function js(t, ...e) { console.error(`${st.error} ${t}`, ...e) } function Qs(t, ...e) { console.log(`${st.query} ${t}`, ...e) }u(); c(); m(); p(); d(); l(); function qt(t, e) {
  if (!t)
    throw new Error(`${e}. This should never happen. If you see this error, please, open an issue at https://pris.ly/prisma-prisma-bug-report`)
}u(); c(); m(); p(); d(); l(); function we(t, e) { throw new Error(e) }u(); c(); m(); p(); d(); l(); function Fr(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }u(); c(); m(); p(); d(); l(); const Nr = (t, e) => t.reduce((r, n) => (r[e(n)] = n, r), {}); u(); c(); m(); p(); d(); l(); function qe(t, e) { const r = {}; for (const n of Object.keys(t))r[n] = e(t[n], n); return r }u(); c(); m(); p(); d(); l(); function Ur(t, e) {
  if (t.length === 0)
    return; let r = t[0]; for (let n = 1; n < t.length; n++)e(r, t[n]) < 0 && (r = t[n]); return r
}u(); c(); m(); p(); d(); l(); function te(t, e) { Object.defineProperty(t, 'name', { value: e, configurable: !0 }) }u(); c(); m(); p(); d(); l(); const ri = new Set(); var lt = (t, e, ...r) => { ri.has(t) || (ri.add(t), Dr(e, ...r)) }; var M = class t extends Error {clientVersion; errorCode; retryable; constructor(e, r, n) { super(e), this.name = 'PrismaClientInitializationError', this.clientVersion = r, this.errorCode = n, Error.captureStackTrace(t) } get [Symbol.toStringTag]() { return 'PrismaClientInitializationError' }}; te(M, 'PrismaClientInitializationError'); u(); c(); m(); p(); d(); l(); var Y = class extends Error {code; meta; clientVersion; batchRequestIdx; constructor(e, { code: r, clientVersion: n, meta: i, batchRequestIdx: o }) { super(e), this.name = 'PrismaClientKnownRequestError', this.code = r, this.clientVersion = n, this.meta = i, Object.defineProperty(this, 'batchRequestIdx', { value: o, enumerable: !1, writable: !0 }) } get [Symbol.toStringTag]() { return 'PrismaClientKnownRequestError' }}; te(Y, 'PrismaClientKnownRequestError'); u(); c(); m(); p(); d(); l(); var Ee = class extends Error {clientVersion; constructor(e, r) { super(e), this.name = 'PrismaClientRustPanicError', this.clientVersion = r } get [Symbol.toStringTag]() { return 'PrismaClientRustPanicError' }}; te(Ee, 'PrismaClientRustPanicError'); u(); c(); m(); p(); d(); l(); var j = class extends Error {clientVersion; batchRequestIdx; constructor(e, { clientVersion: r, batchRequestIdx: n }) { super(e), this.name = 'PrismaClientUnknownRequestError', this.clientVersion = r, Object.defineProperty(this, 'batchRequestIdx', { value: n, writable: !0, enumerable: !1 }) } get [Symbol.toStringTag]() { return 'PrismaClientUnknownRequestError' }}; te(j, 'PrismaClientUnknownRequestError'); u(); c(); m(); p(); d(); l(); var G = class extends Error {name = 'PrismaClientValidationError'; clientVersion; constructor(e, { clientVersion: r }) { super(e), this.clientVersion = r } get [Symbol.toStringTag]() { return 'PrismaClientValidationError' }}; te(G, 'PrismaClientValidationError'); u(); c(); m(); p(); d(); l(); l(); function Be(t) { return t === null ? t : Array.isArray(t) ? t.map(Be) : typeof t == 'object' ? Gs(t) ? Ws(t) : qe(t, Be) : t } function Gs(t) { return t !== null && typeof t == 'object' && typeof t.$type == 'string' } function Ws({ $type: t, value: e }) { switch (t) { case 'BigInt':return BigInt(e); case 'Bytes':{ const { buffer: r, byteOffset: n, byteLength: i } = b.from(e, 'base64'); return new Uint8Array(r, n, i) } case 'DateTime':return new Date(e); case 'Decimal':return new pe(e); case 'Json':return JSON.parse(e); default:we(e, 'Unknown tagged value') } }u(); c(); m(); p(); d(); l(); u(); c(); m(); p(); d(); l(); function Ve(t) { return t.substring(0, 1).toLowerCase() + t.substring(1) }u(); c(); m(); p(); d(); l(); function $e(t) { return t instanceof Date || Object.prototype.toString.call(t) === '[object Date]' } function Bt(t) { return t.toString() !== 'Invalid Date' }u(); c(); m(); p(); d(); l(); l(); function je(t) { return v.isDecimal(t) ? !0 : t !== null && typeof t == 'object' && typeof t.s == 'number' && typeof t.e == 'number' && typeof t.toFixed == 'function' && Array.isArray(t.d) }u(); c(); m(); p(); d(); l(); u(); c(); m(); p(); d(); l(); const Ks = rt(zn()); const Hs = { red: Ne, gray: Ln, dim: Dt, bold: _t, underline: Sn, highlightSource: t => t.highlight() }; const zs = { red: t => t, gray: t => t, dim: t => t, bold: t => t, underline: t => t, highlightSource: t => t }; function Ys({ message: t, originalMethod: e, isPanic: r, callArguments: n }) { return { functionName: `prisma.${e}()`, message: t, isPanic: r ?? !1, callArguments: n } } function Xs({ functionName: t, location: e, message: r, isPanic: n, contextLines: i, callArguments: o }, s) {
  const a = ['']; const f = e ? ' in' : ':'; if (n ? (a.push(s.red(`Oops, an unknown error occurred! This is ${s.bold('on us')}, you did nothing wrong.`)), a.push(s.red(`It occurred in the ${s.bold(`\`${t}\``)} invocation${f}`))) : a.push(s.red(`Invalid ${s.bold(`\`${t}\``)} invocation${f}`)), e && a.push(s.underline(Zs(e))), i) { a.push(''); const g = [i.toString()]; o && (g.push(o), g.push(s.dim(')'))), a.push(g.join('')), o && a.push('') }
  else {
    a.push(''), o && a.push(o), a.push('')
  } return a.push(r), a.join(`
`)
} function Zs(t) { const e = [t.fileName]; return t.lineNumber && e.push(String(t.lineNumber)), t.columnNumber && e.push(String(t.columnNumber)), e.join(':') } function Vt(t) { const e = t.showColors ? Hs : zs; let r; return typeof $getTemplateParameters < 'u' ? r = $getTemplateParameters(t, e) : r = Ys(t), Xs(r, e) }u(); c(); m(); p(); d(); l(); const ci = rt(qr()); u(); c(); m(); p(); d(); l(); function ai(t, e, r) { const n = li(t); const i = ea(n); const o = ra(i); o ? $t(o, e, r) : e.addErrorMessage(() => 'Unknown error') } function li(t) { return t.errors.flatMap(e => e.kind === 'Union' ? li(e) : [e]) } function ea(t) { const e = new Map(); const r = []; for (const n of t) { if (n.kind !== 'InvalidArgumentType') { r.push(n); continue } const i = `${n.selectionPath.join('.')}:${n.argumentPath.join('.')}`; const o = e.get(i); o ? e.set(i, { ...n, argument: { ...n.argument, typeNames: ta(o.argument.typeNames, n.argument.typeNames) } }) : e.set(i, n) } return r.push(...e.values()), r } function ta(t, e) { return [...new Set(t.concat(e))] } function ra(t) { return Ur(t, (e, r) => { const n = oi(e); const i = oi(r); return n !== i ? n - i : si(e) - si(r) }) } function oi(t) { let e = 0; return Array.isArray(t.selectionPath) && (e += t.selectionPath.length), Array.isArray(t.argumentPath) && (e += t.argumentPath.length), e } function si(t) { switch (t.kind) { case 'InvalidArgumentValue':case 'ValueTooLarge':return 20; case 'InvalidArgumentType':return 10; case 'RequiredArgumentMissing':return -10; default:return 0 } }u(); c(); m(); p(); d(); l(); const re = class {constructor(e, r) { this.name = e; this.value = r }isRequired = !1; makeRequired() { return this.isRequired = !0, this }write(e) { const { colors: { green: r } } = e.context; e.addMarginSymbol(r(this.isRequired ? '+' : '?')), e.write(r(this.name)), this.isRequired || e.write(r('?')), e.write(r(': ')), typeof this.value == 'string' ? e.write(r(this.value)) : e.write(this.value) }}; u(); c(); m(); p(); d(); l(); u(); c(); m(); p(); d(); l(); const Qe = class {
  constructor(e = 0, r) { this.context = r; this.currentIndent = e }lines = []; currentLine = ''; currentIndent = 0; marginSymbol; afterNextNewLineCallback; write(e) { return typeof e == 'string' ? this.currentLine += e : e.write(this), this }writeJoined(e, r, n = (i, o) => o.write(i)) { const i = r.length - 1; for (let o = 0; o < r.length; o++)n(r[o], this), o !== i && this.write(e); return this }writeLine(e) { return this.write(e).newLine() }newLine() { this.lines.push(this.indentedCurrentLine()), this.currentLine = '', this.marginSymbol = void 0; const e = this.afterNextNewLineCallback; return this.afterNextNewLineCallback = void 0, e?.(), this }withIndent(e) { return this.indent(), e(this), this.unindent(), this }afterNextNewline(e) { return this.afterNextNewLineCallback = e, this }indent() { return this.currentIndent++, this }unindent() { return this.currentIndent > 0 && this.currentIndent--, this }addMarginSymbol(e) { return this.marginSymbol = e, this }toString() {
    return this.lines.concat(this.indentedCurrentLine()).join(`
`)
  }

  getCurrentLineLength() { return this.currentLine.length }indentedCurrentLine() { const e = this.currentLine.padStart(this.currentLine.length + 2 * this.currentIndent); return this.marginSymbol ? this.marginSymbol + e.slice(1) : e }
}; u(); c(); m(); p(); d(); l(); u(); c(); m(); p(); d(); l(); const jt = class {constructor(e) { this.value = e }write(e) { e.write(this.value) }markAsError() { this.value.markAsError() }}; u(); c(); m(); p(); d(); l(); const Qt = t => t; const Jt = { bold: Qt, red: Qt, green: Qt, dim: Qt, enabled: !1 }; const ui = { bold: _t, red: Ne, green: kn, dim: Dt, enabled: !0 }; const Je = { write(t) { t.writeLine(',') } }; u(); c(); m(); p(); d(); l(); const de = class {constructor(e) { this.contents = e }isUnderlined = !1; color = e => e; underline() { return this.isUnderlined = !0, this }setColor(e) { return this.color = e, this }write(e) { const r = e.getCurrentLineLength(); e.write(this.color(this.contents)), this.isUnderlined && e.afterNextNewline(() => { e.write(' '.repeat(r)).writeLine(this.color('~'.repeat(this.contents.length))) }) }}; u(); c(); m(); p(); d(); l(); const ve = class {hasError = !1; markAsError() { return this.hasError = !0, this }}; const Ge = class extends ve {items = []; addItem(e) { return this.items.push(new jt(e)), this }getField(e) { return this.items[e] }getPrintWidth() { return this.items.length === 0 ? 2 : Math.max(...this.items.map(r => r.value.getPrintWidth())) + 2 }write(e) { if (this.items.length === 0) { this.writeEmpty(e); return } this.writeWithItems(e) }writeEmpty(e) { const r = new de('[]'); this.hasError && r.setColor(e.context.colors.red).underline(), e.write(r) }writeWithItems(e) { const { colors: r } = e.context; e.writeLine('[').withIndent(() => e.writeJoined(Je, this.items).newLine()).write(']'), this.hasError && e.afterNextNewline(() => { e.writeLine(r.red('~'.repeat(this.getPrintWidth()))) }) }asObject() {}}; const We = class t extends ve {
  fields = {}; suggestions = []; addField(e) { this.fields[e.name] = e }addSuggestion(e) { this.suggestions.push(e) }getField(e) { return this.fields[e] }getDeepField(e) {
    const [r, ...n] = e; const i = this.getField(r); if (!i)
      return; let o = i; for (const s of n) {
      let a; if (o.value instanceof t ? a = o.value.getField(s) : o.value instanceof Ge && (a = o.value.getField(Number(s))), !a)
        return; o = a
    } return o
  }

  getDeepFieldValue(e) { return e.length === 0 ? this : this.getDeepField(e)?.value }hasField(e) { return !!this.getField(e) }removeAllFields() { this.fields = {} }removeField(e) { delete this.fields[e] }getFields() { return this.fields }isEmpty() { return Object.keys(this.fields).length === 0 }getFieldValue(e) { return this.getField(e)?.value }getDeepSubSelectionValue(e) {
    let r = this; for (const n of e) {
      if (!(r instanceof t))
        return; const i = r.getSubSelectionValue(n); if (!i)
        return; r = i
    } return r
  }

  getDeepSelectionParent(e) {
    const r = this.getSelectionParent(); if (!r)
      return; let n = r; for (const i of e) {
      const o = n.value.getFieldValue(i); if (!o || !(o instanceof t))
        return; const s = o.getSelectionParent(); if (!s)
        return; n = s
    } return n
  }

  getSelectionParent() {
    const e = this.getField('select')?.value.asObject(); if (e)
      return { kind: 'select', value: e }; const r = this.getField('include')?.value.asObject(); if (r)
      return { kind: 'include', value: r }
  }

  getSubSelectionValue(e) { return this.getSelectionParent()?.value.fields[e].value }getPrintWidth() { const e = Object.values(this.fields); return e.length == 0 ? 2 : Math.max(...e.map(n => n.getPrintWidth())) + 2 }write(e) { const r = Object.values(this.fields); if (r.length === 0 && this.suggestions.length === 0) { this.writeEmpty(e); return } this.writeWithContents(e, r) }asObject() { return this }writeEmpty(e) { const r = new de('{}'); this.hasError && r.setColor(e.context.colors.red).underline(), e.write(r) }writeWithContents(e, r) { e.writeLine('{').withIndent(() => { e.writeJoined(Je, [...r, ...this.suggestions]).newLine() }), e.write('}'), this.hasError && e.afterNextNewline(() => { e.writeLine(e.context.colors.red('~'.repeat(this.getPrintWidth()))) }) }
}; u(); c(); m(); p(); d(); l(); const J = class extends ve {constructor(r) { super(); this.text = r }getPrintWidth() { return this.text.length }write(r) { const n = new de(this.text); this.hasError && n.underline().setColor(r.context.colors.red), r.write(n) }asObject() {}}; u(); c(); m(); p(); d(); l(); const ut = class {fields = []; addField(e, r) { return this.fields.push({ write(n) { const { green: i, dim: o } = n.context.colors; n.write(i(o(`${e}: ${r}`))).addMarginSymbol(i(o('+'))) } }), this }write(e) { const { colors: { green: r } } = e.context; e.writeLine(r('{')).withIndent(() => { e.writeJoined(Je, this.fields).newLine() }).write(r('}')).addMarginSymbol(r('+')) }}; function $t(t, e, r) { switch (t.kind) { case 'MutuallyExclusiveFields':ia(t, e); break; case 'IncludeOnScalar':oa(t, e); break; case 'EmptySelection':sa(t, e, r); break; case 'UnknownSelectionField':ca(t, e); break; case 'InvalidSelectionValue':ma(t, e); break; case 'UnknownArgument':pa(t, e); break; case 'UnknownInputField':da(t, e); break; case 'RequiredArgumentMissing':fa(t, e); break; case 'InvalidArgumentType':ga(t, e); break; case 'InvalidArgumentValue':ha(t, e); break; case 'ValueTooLarge':ya(t, e); break; case 'SomeFieldsMissing':ba(t, e); break; case 'TooManyFieldsGiven':wa(t, e); break; case 'Union':ai(t, e, r); break; default:throw new Error(`not implemented: ${t.kind}`) } } function ia(t, e) { const r = e.arguments.getDeepSubSelectionValue(t.selectionPath)?.asObject(); r && (r.getField(t.firstField)?.markAsError(), r.getField(t.secondField)?.markAsError()), e.addErrorMessage(n => `Please ${n.bold('either')} use ${n.green(`\`${t.firstField}\``)} or ${n.green(`\`${t.secondField}\``)}, but ${n.red('not both')} at the same time.`) } function oa(t, e) {
  const [r, n] = ct(t.selectionPath); const i = t.outputType; const o = e.arguments.getDeepSelectionParent(r)?.value; if (o && (o.getField(n)?.markAsError(), i)) {
    for (const s of i.fields)s.isRelation && o.addSuggestion(new re(s.name, 'true'))
  } e.addErrorMessage((s) => {
    let a = `Invalid scalar field ${s.red(`\`${n}\``)} for ${s.bold('include')} statement`; return i ? a += ` on model ${s.bold(i.name)}. ${mt(s)}` : a += '.', a += `
Note that ${s.bold('include')} statements only accept relation fields.`, a
  })
} function sa(t, e, r) { const n = e.arguments.getDeepSubSelectionValue(t.selectionPath)?.asObject(); if (n) { const i = n.getField('omit')?.value.asObject(); if (i) { aa(t, e, i); return } if (n.hasField('select')) { la(t, e); return } } if (r?.[Ve(t.outputType.name)]) { ua(t, e); return }e.addErrorMessage(() => `Unknown field at "${t.selectionPath.join('.')} selection"`) } function aa(t, e, r) { r.removeAllFields(); for (const n of t.outputType.fields)r.addSuggestion(new re(n.name, 'false')); e.addErrorMessage(n => `The ${n.red('omit')} statement includes every field of the model ${n.bold(t.outputType.name)}. At least one field must be included in the result`) } function la(t, e) { const r = t.outputType; const n = e.arguments.getDeepSelectionParent(t.selectionPath)?.value; const i = n?.isEmpty() ?? !1; n && (n.removeAllFields(), di(n, r)), e.addErrorMessage(o => i ? `The ${o.red('`select`')} statement for type ${o.bold(r.name)} must not be empty. ${mt(o)}` : `The ${o.red('`select`')} statement for type ${o.bold(r.name)} needs ${o.bold('at least one truthy value')}.`) } function ua(t, e) {
  const r = new ut(); for (const i of t.outputType.fields)i.isRelation || r.addField(i.name, 'false'); const n = new re('omit', r).makeRequired(); if (t.selectionPath.length === 0) {
    e.arguments.addSuggestion(n)
  }
  else { const [i, o] = ct(t.selectionPath); const a = e.arguments.getDeepSelectionParent(i)?.value.asObject()?.getField(o); if (a) { const f = a?.value.asObject() ?? new We(); f.addSuggestion(n), a.value = f } }e.addErrorMessage(i => `The global ${i.red('omit')} configuration excludes every field of the model ${i.bold(t.outputType.name)}. At least one field must be included in the result`)
} function ca(t, e) { const r = fi(t.selectionPath, e); if (r.parentKind !== 'unknown') { r.field.markAsError(); const n = r.parent; switch (r.parentKind) { case 'select':di(n, t.outputType); break; case 'include':Ea(n, t.outputType); break; case 'omit':xa(n, t.outputType); break } }e.addErrorMessage((n) => { const i = [`Unknown field ${n.red(`\`${r.fieldName}\``)}`]; return r.parentKind !== 'unknown' && i.push(`for ${n.bold(r.parentKind)} statement`), i.push(`on model ${n.bold(`\`${t.outputType.name}\``)}.`), i.push(mt(n)), i.join(' ') }) } function ma(t, e) { const r = fi(t.selectionPath, e); r.parentKind !== 'unknown' && r.field.value.markAsError(), e.addErrorMessage(n => `Invalid value for selection field \`${n.red(r.fieldName)}\`: ${t.underlyingError}`) } function pa(t, e) { const r = t.argumentPath[0]; const n = e.arguments.getDeepSubSelectionValue(t.selectionPath)?.asObject(); n && (n.getField(r)?.markAsError(), Pa(n, t.arguments)), e.addErrorMessage(i => mi(i, r, t.arguments.map(o => o.name))) } function da(t, e) { const [r, n] = ct(t.argumentPath); const i = e.arguments.getDeepSubSelectionValue(t.selectionPath)?.asObject(); if (i) { i.getDeepField(t.argumentPath)?.markAsError(); const o = i.getDeepFieldValue(r)?.asObject(); o && gi(o, t.inputType) }e.addErrorMessage(o => mi(o, n, t.inputType.fields.map(s => s.name))) } function mi(t, e, r) { const n = [`Unknown argument \`${t.red(e)}\`.`]; const i = Ta(e, r); return i && n.push(`Did you mean \`${t.green(i)}\`?`), r.length > 0 && n.push(mt(t)), n.join(' ') } function fa(t, e) {
  let r; e.addErrorMessage(f => r?.value instanceof J && r.value.text === 'null' ? `Argument \`${f.green(o)}\` must not be ${f.red('null')}.` : `Argument \`${f.green(o)}\` is missing.`); const n = e.arguments.getDeepSubSelectionValue(t.selectionPath)?.asObject(); if (!n)
    return; let [i, o] = ct(t.argumentPath); const s = new ut(); const a = n.getDeepFieldValue(i)?.asObject(); if (a) {
    if (r = a.getField(o), r && a.removeField(o), t.inputTypes.length === 1 && t.inputTypes[0].kind === 'object') { for (const f of t.inputTypes[0].fields)s.addField(f.name, f.typeNames.join(' | ')); a.addSuggestion(new re(o, s).makeRequired()) }
    else { const f = t.inputTypes.map(pi).join(' | '); a.addSuggestion(new re(o, f).makeRequired()) }
  }
} function pi(t) { return t.kind === 'list' ? `${pi(t.elementType)}[]` : t.name } function ga(t, e) { const r = t.argument.name; const n = e.arguments.getDeepSubSelectionValue(t.selectionPath)?.asObject(); n && n.getDeepFieldValue(t.argumentPath)?.markAsError(), e.addErrorMessage((i) => { const o = Gt('or', t.argument.typeNames.map(s => i.green(s))); return `Argument \`${i.bold(r)}\`: Invalid value provided. Expected ${o}, provided ${i.red(t.inferredType)}.` }) } function ha(t, e) { const r = t.argument.name; const n = e.arguments.getDeepSubSelectionValue(t.selectionPath)?.asObject(); n && n.getDeepFieldValue(t.argumentPath)?.markAsError(), e.addErrorMessage((i) => { const o = [`Invalid value for argument \`${i.bold(r)}\``]; if (t.underlyingError && o.push(`: ${t.underlyingError}`), o.push('.'), t.argument.typeNames.length > 0) { const s = Gt('or', t.argument.typeNames.map(a => i.green(a))); o.push(` Expected ${s}.`) } return o.join('') }) } function ya(t, e) { const r = t.argument.name; const n = e.arguments.getDeepSubSelectionValue(t.selectionPath)?.asObject(); let i; if (n) { const s = n.getDeepField(t.argumentPath)?.value; s?.markAsError(), s instanceof J && (i = s.text) }e.addErrorMessage((o) => { const s = ['Unable to fit value']; return i && s.push(o.red(i)), s.push(`into a 64-bit signed integer for field \`${o.bold(r)}\``), s.join(' ') }) } function ba(t, e) { const r = t.argumentPath[t.argumentPath.length - 1]; const n = e.arguments.getDeepSubSelectionValue(t.selectionPath)?.asObject(); if (n) { const i = n.getDeepFieldValue(t.argumentPath)?.asObject(); i && gi(i, t.inputType) }e.addErrorMessage((i) => { const o = [`Argument \`${i.bold(r)}\` of type ${i.bold(t.inputType.name)} needs`]; return t.constraints.minFieldCount === 1 ? t.constraints.requiredFields ? o.push(`${i.green('at least one of')} ${Gt('or', t.constraints.requiredFields.map(s => `\`${i.bold(s)}\``))} arguments.`) : o.push(`${i.green('at least one')} argument.`) : o.push(`${i.green(`at least ${t.constraints.minFieldCount}`)} arguments.`), o.push(mt(i)), o.join(' ') }) } function wa(t, e) { const r = t.argumentPath[t.argumentPath.length - 1]; const n = e.arguments.getDeepSubSelectionValue(t.selectionPath)?.asObject(); let i = []; if (n) { const o = n.getDeepFieldValue(t.argumentPath)?.asObject(); o && (o.markAsError(), i = Object.keys(o.getFields())) }e.addErrorMessage((o) => { const s = [`Argument \`${o.bold(r)}\` of type ${o.bold(t.inputType.name)} needs`]; return t.constraints.minFieldCount === 1 && t.constraints.maxFieldCount == 1 ? s.push(`${o.green('exactly one')} argument,`) : t.constraints.maxFieldCount == 1 ? s.push(`${o.green('at most one')} argument,`) : s.push(`${o.green(`at most ${t.constraints.maxFieldCount}`)} arguments,`), s.push(`but you provided ${Gt('and', i.map(a => o.red(a)))}. Please choose`), t.constraints.maxFieldCount === 1 ? s.push('one.') : s.push(`${t.constraints.maxFieldCount}.`), s.join(' ') }) } function di(t, e) { for (const r of e.fields)t.hasField(r.name) || t.addSuggestion(new re(r.name, 'true')) } function Ea(t, e) { for (const r of e.fields)r.isRelation && !t.hasField(r.name) && t.addSuggestion(new re(r.name, 'true')) } function xa(t, e) { for (const r of e.fields)!t.hasField(r.name) && !r.isRelation && t.addSuggestion(new re(r.name, 'true')) } function Pa(t, e) { for (const r of e)t.hasField(r.name) || t.addSuggestion(new re(r.name, r.typeNames.join(' | '))) } function fi(t, e) {
  const [r, n] = ct(t); const i = e.arguments.getDeepSubSelectionValue(r)?.asObject(); if (!i)
    return { parentKind: 'unknown', fieldName: n }; const o = i.getFieldValue('select')?.asObject(); const s = i.getFieldValue('include')?.asObject(); const a = i.getFieldValue('omit')?.asObject(); let f = o?.getField(n); return o && f ? { parentKind: 'select', parent: o, field: f, fieldName: n } : (f = s?.getField(n), s && f ? { parentKind: 'include', field: f, parent: s, fieldName: n } : (f = a?.getField(n), a && f ? { parentKind: 'omit', field: f, parent: a, fieldName: n } : { parentKind: 'unknown', fieldName: n }))
} function gi(t, e) {
  if (e.kind === 'object') {
    for (const r of e.fields)t.hasField(r.name) || t.addSuggestion(new re(r.name, r.typeNames.join(' | ')))
  }
} function ct(t) {
  const e = [...t]; const r = e.pop(); if (!r)
    throw new Error('unexpected empty path'); return [e, r]
} function mt({ green: t, enabled: e }) { return `Available options are ${e ? `listed in ${t('green')}` : 'marked with ?'}.` } function Gt(t, e) {
  if (e.length === 1)
    return e[0]; const r = [...e]; const n = r.pop(); return `${r.join(', ')} ${t} ${n}`
} const va = 3; function Ta(t, e) { let r = 1 / 0; let n; for (const i of e) { const o = (0, ci.default)(t, i); o > va || o < r && (r = o, n = i) } return n }u(); c(); m(); p(); d(); l(); u(); c(); m(); p(); d(); l(); function hi(t) { return t.substring(0, 1).toLowerCase() + t.substring(1) }u(); c(); m(); p(); d(); l(); const pt = class {modelName; name; typeName; isList; isEnum; constructor(e, r, n, i, o) { this.modelName = e, this.name = r, this.typeName = n, this.isList = i, this.isEnum = o }_toGraphQLInputType() { const e = this.isList ? 'List' : ''; const r = this.isEnum ? 'Enum' : ''; return `${e}${r}${this.typeName}FieldRefInput<${this.modelName}>` }}; function Ke(t) { return t instanceof pt }u(); c(); m(); p(); d(); l(); const Wt = Symbol(); const Br = new WeakMap(); const xe = class {constructor(e) { e === Wt ? Br.set(this, `Prisma.${this._getName()}`) : Br.set(this, `new Prisma.${this._getNamespace()}.${this._getName()}()`) }_getName() { return this.constructor.name }toString() { return Br.get(this) }}; const dt = class extends xe {_getNamespace() { return 'NullTypes' }}; const ft = class extends dt {}; Vr(ft, 'DbNull'); const gt = class extends dt {}; Vr(gt, 'JsonNull'); const ht = class extends dt {}; Vr(ht, 'AnyNull'); var Kt = { classes: { DbNull: ft, JsonNull: gt, AnyNull: ht }, instances: { DbNull: new ft(Wt), JsonNull: new gt(Wt), AnyNull: new ht(Wt) } }; function Vr(t, e) { Object.defineProperty(t, 'name', { value: e, configurable: !0 }) }u(); c(); m(); p(); d(); l(); const yi = ': '; const Ht = class {constructor(e, r) { this.name = e; this.value = r }hasError = !1; markAsError() { this.hasError = !0 }getPrintWidth() { return this.name.length + this.value.getPrintWidth() + yi.length }write(e) { const r = new de(this.name); this.hasError && r.underline().setColor(e.context.colors.red), e.write(r).write(yi).write(this.value) }}; const $r = class {
  arguments; errorMessages = []; constructor(e) { this.arguments = e }write(e) { e.write(this.arguments) }addErrorMessage(e) { this.errorMessages.push(e) }renderAllMessages(e) {
    return this.errorMessages.map(r => r(e)).join(`
`)
  }
}; function He(t) { return new $r(bi(t)) } function bi(t) { const e = new We(); for (const [r, n] of Object.entries(t)) { const i = new Ht(r, wi(n)); e.addField(i) } return e } function wi(t) {
  if (typeof t == 'string')
    return new J(JSON.stringify(t)); if (typeof t == 'number' || typeof t == 'boolean')
    return new J(String(t)); if (typeof t == 'bigint')
    return new J(`${t}n`); if (t === null)
    return new J('null'); if (t === void 0)
    return new J('undefined'); if (je(t))
    return new J(`new Prisma.Decimal("${t.toFixed()}")`); if (t instanceof Uint8Array)
    return b.isBuffer(t) ? new J(`Buffer.alloc(${t.byteLength})`) : new J(`new Uint8Array(${t.byteLength})`); if (t instanceof Date) { const e = Bt(t) ? t.toISOString() : 'Invalid Date'; return new J(`new Date("${e}")`) } return t instanceof xe ? new J(`Prisma.${t._getName()}`) : Ke(t) ? new J(`prisma.${hi(t.modelName)}.$fields.${t.name}`) : Array.isArray(t) ? Ca(t) : typeof t == 'object' ? bi(t) : new J(Object.prototype.toString.call(t))
} function Ca(t) { const e = new Ge(); for (const r of t)e.addItem(wi(r)); return e } function zt(t, e) { const r = e === 'pretty' ? ui : Jt; const n = t.renderAllMessages(r); const i = new Qe(0, { colors: r }).write(t).toString(); return { message: n, args: i } } function Yt({ args: t, errors: e, errorFormat: r, callsite: n, originalMethod: i, clientVersion: o, globalOmit: s }) { const a = He(t); for (const C of e)$t(C, a, s); const { message: f, args: g } = zt(a, r); const T = Vt({ message: f, callsite: n, originalMethod: i, showColors: r === 'pretty', callArguments: g }); throw new G(T, { clientVersion: o }) }u(); c(); m(); p(); d(); l(); u(); c(); m(); p(); d(); l(); const fe = class {
  _map = new Map(); get(e) { return this._map.get(e)?.value }set(e, r) { this._map.set(e, { value: r }) }getOrCreate(e, r) {
    const n = this._map.get(e); if (n)
      return n.value; const i = r(); return this.set(e, i), i
  }
}; u(); c(); m(); p(); d(); l(); function yt(t) { let e; return { get() { return e || (e = { value: t() }), e.value } } }u(); c(); m(); p(); d(); l(); function ge(t) { return t.replace(/^./, e => e.toLowerCase()) }u(); c(); m(); p(); d(); l(); function xi(t, e, r) { const n = ge(r); return !e.result || !(e.result.$allModels || e.result[n]) ? t : Ra({ ...t, ...Ei(e.name, t, e.result.$allModels), ...Ei(e.name, t, e.result[n]) }) } function Ra(t) { const e = new fe(); const r = (n, i) => e.getOrCreate(n, () => i.has(n) ? [n] : (i.add(n), t[n] ? t[n].needs.flatMap(o => r(o, i)) : [n])); return qe(t, n => ({ ...n, needs: r(n.name, new Set()) })) } function Ei(t, e, r) { return r ? qe(r, ({ needs: n, compute: i }, o) => ({ name: o, needs: n ? Object.keys(n).filter(s => n[s]) : [], compute: Aa(e, o, i) })) : {} } function Aa(t, e, r) { const n = t?.[e]?.compute; return n ? i => r({ ...i, [e]: n(i) }) : r } function Pi(t, e) {
  if (!e)
    return t; const r = { ...t }; for (const n of Object.values(e)) {
    if (t[n.name]) {
      for (const i of n.needs)r[i] = !0
    }
  } return r
} function vi(t, e) {
  if (!e)
    return t; const r = { ...t }; for (const n of Object.values(e)) {
    if (!t[n.name]) {
      for (const i of n.needs) delete r[i]
    }
  } return r
} const Xt = class {constructor(e, r) { this.extension = e; this.previous = r }computedFieldsCache = new fe(); modelExtensionsCache = new fe(); queryCallbacksCache = new fe(); clientExtensions = yt(() => this.extension.client ? { ...this.previous?.getAllClientExtensions(), ...this.extension.client } : this.previous?.getAllClientExtensions()); batchCallbacks = yt(() => { const e = this.previous?.getAllBatchQueryCallbacks() ?? []; const r = this.extension.query?.$__internalBatch; return r ? e.concat(r) : e }); getAllComputedFields(e) { return this.computedFieldsCache.getOrCreate(e, () => xi(this.previous?.getAllComputedFields(e), this.extension, e)) }getAllClientExtensions() { return this.clientExtensions.get() }getAllModelExtensions(e) { return this.modelExtensionsCache.getOrCreate(e, () => { const r = ge(e); return !this.extension.model || !(this.extension.model[r] || this.extension.model.$allModels) ? this.previous?.getAllModelExtensions(e) : { ...this.previous?.getAllModelExtensions(e), ...this.extension.model.$allModels, ...this.extension.model[r] } }) }getAllQueryCallbacks(e, r) { return this.queryCallbacksCache.getOrCreate(`${e}:${r}`, () => { const n = this.previous?.getAllQueryCallbacks(e, r) ?? []; const i = []; const o = this.extension.query; return !o || !(o[e] || o.$allModels || o[r] || o.$allOperations) ? n : (o[e] !== void 0 && (o[e][r] !== void 0 && i.push(o[e][r]), o[e].$allOperations !== void 0 && i.push(o[e].$allOperations)), e !== '$none' && o.$allModels !== void 0 && (o.$allModels[r] !== void 0 && i.push(o.$allModels[r]), o.$allModels.$allOperations !== void 0 && i.push(o.$allModels.$allOperations)), o[r] !== void 0 && i.push(o[r]), o.$allOperations !== void 0 && i.push(o.$allOperations), n.concat(i)) }) }getAllBatchQueryCallbacks() { return this.batchCallbacks.get() }}; const ze = class t {constructor(e) { this.head = e } static empty() { return new t() } static single(e) { return new t(new Xt(e)) }isEmpty() { return this.head === void 0 }append(e) { return new t(new Xt(e, this.head)) }getAllComputedFields(e) { return this.head?.getAllComputedFields(e) }getAllClientExtensions() { return this.head?.getAllClientExtensions() }getAllModelExtensions(e) { return this.head?.getAllModelExtensions(e) }getAllQueryCallbacks(e, r) { return this.head?.getAllQueryCallbacks(e, r) ?? [] }getAllBatchQueryCallbacks() { return this.head?.getAllBatchQueryCallbacks() ?? [] }}; u(); c(); m(); p(); d(); l(); const Zt = class {constructor(e) { this.name = e }}; function Ti(t) { return t instanceof Zt } function Ci(t) { return new Zt(t) }u(); c(); m(); p(); d(); l(); u(); c(); m(); p(); d(); l(); const Ri = Symbol(); const bt = class {
  constructor(e) {
    if (e !== Ri)
      throw new Error('Skip instance can not be constructed directly')
  }

  ifUndefined(e) { return e === void 0 ? er : e }
}; var er = new bt(Ri); function he(t) { return t instanceof bt } const Sa = { findUnique: 'findUnique', findUniqueOrThrow: 'findUniqueOrThrow', findFirst: 'findFirst', findFirstOrThrow: 'findFirstOrThrow', findMany: 'findMany', count: 'aggregate', create: 'createOne', createMany: 'createMany', createManyAndReturn: 'createManyAndReturn', update: 'updateOne', updateMany: 'updateMany', updateManyAndReturn: 'updateManyAndReturn', upsert: 'upsertOne', delete: 'deleteOne', deleteMany: 'deleteMany', executeRaw: 'executeRaw', queryRaw: 'queryRaw', aggregate: 'aggregate', groupBy: 'groupBy', runCommandRaw: 'runCommandRaw', findRaw: 'findRaw', aggregateRaw: 'aggregateRaw' }; const Ai = 'explicitly `undefined` values are not allowed'; function tr({ modelName: t, action: e, args: r, runtimeDataModel: n, extensions: i = ze.empty(), callsite: o, clientMethod: s, errorFormat: a, clientVersion: f, previewFeatures: g, globalOmit: T }) { const C = new jr({ runtimeDataModel: n, modelName: t, action: e, rootArgs: r, callsite: o, extensions: i, selectionPath: [], argumentPath: [], originalMethod: s, errorFormat: a, clientVersion: f, previewFeatures: g, globalOmit: T }); return { modelName: t, action: Sa[e], query: wt(r, C) } } function wt({ select: t, include: e, ...r } = {}, n) { const i = r.omit; return delete r.omit, { arguments: ki(r, n), selection: ka(t, e, i, n) } } function ka(t, e, r, n) { return t ? (e ? n.throwValidationError({ kind: 'MutuallyExclusiveFields', firstField: 'include', secondField: 'select', selectionPath: n.getSelectionPath() }) : r && n.throwValidationError({ kind: 'MutuallyExclusiveFields', firstField: 'omit', secondField: 'select', selectionPath: n.getSelectionPath() }), La(t, n)) : Oa(n, e, r) } function Oa(t, e, r) { const n = {}; return t.modelOrType && !t.isRawAction() && (n.$composites = !0, n.$scalars = !0), e && Ia(n, e, t), Ma(n, r, t), n } function Ia(t, e, r) {
  for (const [n, i] of Object.entries(e)) {
    if (he(i))
      continue; const o = r.nestSelection(n); if (Qr(i, o), i === !1 || i === void 0) { t[n] = !1; continue } const s = r.findField(n); if (s && s.kind !== 'object' && r.throwValidationError({ kind: 'IncludeOnScalar', selectionPath: r.getSelectionPath().concat(n), outputType: r.getOutputTypeDescription() }), s) { t[n] = wt(i === !0 ? {} : i, o); continue } if (i === !0) { t[n] = !0; continue }t[n] = wt(i, o)
  }
} function Ma(t, e, r) {
  const n = r.getComputedFields(); const i = { ...r.getGlobalOmit(), ...e }; const o = vi(i, n); for (const [s, a] of Object.entries(o)) {
    if (he(a))
      continue; Qr(a, r.nestSelection(s)); const f = r.findField(s); n?.[s] && !f || (t[s] = !a)
  }
} function La(t, e) {
  const r = {}; const n = e.getComputedFields(); const i = Pi(t, n); for (const [o, s] of Object.entries(i)) {
    if (he(s))
      continue; const a = e.nestSelection(o); Qr(s, a); const f = e.findField(o); if (!(n?.[o] && !f)) { if (s === !1 || s === void 0 || he(s)) { r[o] = !1; continue } if (s === !0) { f?.kind === 'object' ? r[o] = wt({}, a) : r[o] = !0; continue }r[o] = wt(s, a) }
  } return r
} function Si(t, e) {
  if (t === null)
    return null; if (typeof t == 'string' || typeof t == 'number' || typeof t == 'boolean')
    return t; if (typeof t == 'bigint')
    return { $type: 'BigInt', value: String(t) }; if ($e(t)) {
    if (Bt(t))
      return { $type: 'DateTime', value: t.toISOString() }; e.throwValidationError({ kind: 'InvalidArgumentValue', selectionPath: e.getSelectionPath(), argumentPath: e.getArgumentPath(), argument: { name: e.getArgumentName(), typeNames: ['Date'] }, underlyingError: 'Provided Date object is invalid' })
  } if (Ti(t))
    return { $type: 'Param', value: t.name }; if (Ke(t))
    return { $type: 'FieldRef', value: { _ref: t.name, _container: t.modelName } }; if (Array.isArray(t))
    return _a(t, e); if (ArrayBuffer.isView(t)) { const { buffer: r, byteOffset: n, byteLength: i } = t; return { $type: 'Bytes', value: b.from(r, n, i).toString('base64') } } if (Da(t))
    return t.values; if (je(t))
    return { $type: 'Decimal', value: t.toFixed() }; if (t instanceof xe) {
    if (t !== Kt.instances[t._getName()])
      throw new Error('Invalid ObjectEnumValue'); return { $type: 'Enum', value: t._getName() }
  } if (Fa(t))
    return t.toJSON(); if (typeof t == 'object')
    return ki(t, e); e.throwValidationError({ kind: 'InvalidArgumentValue', selectionPath: e.getSelectionPath(), argumentPath: e.getArgumentPath(), argument: { name: e.getArgumentName(), typeNames: [] }, underlyingError: `We could not serialize ${Object.prototype.toString.call(t)} value. Serialize the object to JSON or implement a ".toJSON()" method on it` })
} function ki(t, e) {
  if (t.$type)
    return { $type: 'Raw', value: t }; const r = {}; for (const n in t) { const i = t[n]; const o = e.nestArgument(n); he(i) || (i !== void 0 ? r[n] = Si(i, o) : e.isPreviewFeatureOn('strictUndefinedChecks') && e.throwValidationError({ kind: 'InvalidArgumentValue', argumentPath: o.getArgumentPath(), selectionPath: e.getSelectionPath(), argument: { name: e.getArgumentName(), typeNames: [] }, underlyingError: Ai })) } return r
} function _a(t, e) { const r = []; for (let n = 0; n < t.length; n++) { const i = e.nestArgument(String(n)); const o = t[n]; if (o === void 0 || he(o)) { const s = o === void 0 ? 'undefined' : 'Prisma.skip'; e.throwValidationError({ kind: 'InvalidArgumentValue', selectionPath: i.getSelectionPath(), argumentPath: i.getArgumentPath(), argument: { name: `${e.getArgumentName()}[${n}]`, typeNames: [] }, underlyingError: `Can not use \`${s}\` value within array. Use \`null\` or filter out \`${s}\` values` }) }r.push(Si(o, i)) } return r } function Da(t) { return typeof t == 'object' && t !== null && t.__prismaRawParameters__ === !0 } function Fa(t) { return typeof t == 'object' && t !== null && typeof t.toJSON == 'function' } function Qr(t, e) { t === void 0 && e.isPreviewFeatureOn('strictUndefinedChecks') && e.throwValidationError({ kind: 'InvalidSelectionValue', selectionPath: e.getSelectionPath(), underlyingError: Ai }) } var jr = class t {
  constructor(e) { this.params = e; this.params.modelName && (this.modelOrType = this.params.runtimeDataModel.models[this.params.modelName] ?? this.params.runtimeDataModel.types[this.params.modelName]) }modelOrType; throwValidationError(e) { Yt({ errors: [e], originalMethod: this.params.originalMethod, args: this.params.rootArgs ?? {}, callsite: this.params.callsite, errorFormat: this.params.errorFormat, clientVersion: this.params.clientVersion, globalOmit: this.params.globalOmit }) }getSelectionPath() { return this.params.selectionPath }getArgumentPath() { return this.params.argumentPath }getArgumentName() { return this.params.argumentPath[this.params.argumentPath.length - 1] }getOutputTypeDescription() {
    if (!(!this.params.modelName || !this.modelOrType))
      return { name: this.params.modelName, fields: this.modelOrType.fields.map(e => ({ name: e.name, typeName: 'boolean', isRelation: e.kind === 'object' })) }
  }

  isRawAction() { return ['executeRaw', 'queryRaw', 'runCommandRaw', 'findRaw', 'aggregateRaw'].includes(this.params.action) }isPreviewFeatureOn(e) { return this.params.previewFeatures.includes(e) }getComputedFields() {
    if (this.params.modelName)
      return this.params.extensions.getAllComputedFields(this.params.modelName)
  }

  findField(e) { return this.modelOrType?.fields.find(r => r.name === e) }nestSelection(e) { const r = this.findField(e); const n = r?.kind === 'object' ? r.type : void 0; return new t({ ...this.params, modelName: n, selectionPath: this.params.selectionPath.concat(e) }) }getGlobalOmit() { return this.params.modelName && this.shouldApplyGlobalOmit() ? this.params.globalOmit?.[Ve(this.params.modelName)] ?? {} : {} }shouldApplyGlobalOmit() { switch (this.params.action) { case 'findFirst':case 'findFirstOrThrow':case 'findUniqueOrThrow':case 'findMany':case 'upsert':case 'findUnique':case 'createManyAndReturn':case 'create':case 'update':case 'updateManyAndReturn':case 'delete':return !0; case 'executeRaw':case 'aggregateRaw':case 'runCommandRaw':case 'findRaw':case 'createMany':case 'deleteMany':case 'groupBy':case 'updateMany':case 'count':case 'aggregate':case 'queryRaw':return !1; default:we(this.params.action, 'Unknown action') } }nestArgument(e) { return new t({ ...this.params, argumentPath: this.params.argumentPath.concat(e) }) }
}; u(); c(); m(); p(); d(); l(); function Oi(t) {
  if (!t._hasPreviewFlag('metrics'))
    throw new G('`metrics` preview feature must be enabled in order to access metrics API', { clientVersion: t._clientVersion })
} var Ye = class {_client; constructor(e) { this._client = e }prometheus(e) { return Oi(this._client), this._client._engine.metrics({ format: 'prometheus', ...e }) }json(e) { return Oi(this._client), this._client._engine.metrics({ format: 'json', ...e }) }}; u(); c(); m(); p(); d(); l(); function Ii(t) { return { models: Jr(t.models), enums: Jr(t.enums), types: Jr(t.types) } } function Jr(t) { const e = {}; for (const { name: r, ...n } of t)e[r] = n; return e } function Mi(t, e) { const r = yt(() => Na(e)); Object.defineProperty(t, 'dmmf', { get: () => r.get() }) } function Na(t) { throw new Error('Prisma.dmmf is not available when running in edge runtimes.') } function Gr(t) { return Object.entries(t).map(([e, r]) => ({ name: e, ...r })) }u(); c(); m(); p(); d(); l(); const Wr = new WeakMap(); const rr = '$$PrismaTypedSql'; const Et = class {constructor(e, r) { Wr.set(this, { sql: e, values: r }), Object.defineProperty(this, rr, { value: rr }) } get sql() { return Wr.get(this).sql } get values() { return Wr.get(this).values }}; function Li(t) { return (...e) => new Et(t, e) } function nr(t) { return t != null && t[rr] === rr }u(); c(); m(); p(); d(); l(); const jo = rt(_i()); u(); c(); m(); p(); d(); l(); Kn(); qn(); jn(); u(); c(); m(); p(); d(); l(); var X = class t {
  constructor(e, r) {
    if (e.length - 1 !== r.length)
      throw e.length === 0 ? new TypeError('Expected at least 1 string') : new TypeError(`Expected ${e.length} strings to have ${e.length - 1} values`); const n = r.reduce((s, a) => s + (a instanceof t ? a.values.length : 1), 0); this.values = new Array(n), this.strings = new Array(n + 1), this.strings[0] = e[0]; let i = 0; let o = 0; for (;i < r.length;) {
      const s = r[i++]; const a = e[i]; if (s instanceof t) { this.strings[o] += s.strings[0]; let f = 0; for (;f < s.values.length;) this.values[o++] = s.values[f++], this.strings[o] = s.strings[f]; this.strings[o] += a }
      else {
        this.values[o++] = s, this.strings[o] = a
      }
    }
  }

  get sql() { const e = this.strings.length; let r = 1; let n = this.strings[0]; for (;r < e;)n += `?${this.strings[r++]}`; return n } get statement() { const e = this.strings.length; let r = 1; let n = this.strings[0]; for (;r < e;)n += `:${r}${this.strings[r++]}`; return n } get text() { const e = this.strings.length; let r = 1; let n = this.strings[0]; for (;r < e;)n += `$${r}${this.strings[r++]}`; return n }inspect() { return { sql: this.sql, statement: this.statement, text: this.text, values: this.values } }
}; function Di(t, e = ',', r = '', n = '') {
  if (t.length === 0)
    throw new TypeError('Expected `join([])` to be called with an array of multiple elements, but got an empty array'); return new X([r, ...Array.from({ length: t.length - 1 }).fill(e), n], t)
} function Kr(t) { return new X([t], []) } var Fi = Kr(''); function Hr(t, ...e) { return new X(t, e) }u(); c(); m(); p(); d(); l(); u(); c(); m(); p(); d(); l(); function xt(t) { return { getKeys() { return Object.keys(t) }, getPropertyValue(e) { return t[e] } } }u(); c(); m(); p(); d(); l(); function W(t, e) { return { getKeys() { return [t] }, getPropertyValue() { return e() } } }u(); c(); m(); p(); d(); l(); function Ie(t) { const e = new fe(); return { getKeys() { return t.getKeys() }, getPropertyValue(r) { return e.getOrCreate(r, () => t.getPropertyValue(r)) }, getPropertyDescriptor(r) { return t.getPropertyDescriptor?.(r) } } }u(); c(); m(); p(); d(); l(); u(); c(); m(); p(); d(); l(); const ir = { enumerable: !0, configurable: !0, writable: !0 }; function or(t) { const e = new Set(t); return { getPrototypeOf: () => Object.prototype, getOwnPropertyDescriptor: () => ir, has: (r, n) => e.has(n), set: (r, n, i) => e.add(n) && Reflect.set(r, n, i), ownKeys: () => [...e] } } const Ni = Symbol.for('nodejs.util.inspect.custom'); function ae(t, e) {
  const r = qa(e); const n = new Set(); const i = new Proxy(t, { get(o, s) {
    if (n.has(s))
      return o[s]; const a = r.get(s); return a ? a.getPropertyValue(s) : o[s]
  }, has(o, s) {
    if (n.has(s))
      return !0; const a = r.get(s); return a ? a.has?.(s) ?? !0 : Reflect.has(o, s)
  }, ownKeys(o) { const s = Ui(Reflect.ownKeys(o), r); const a = Ui(Array.from(r.keys()), r); return [...new Set([...s, ...a, ...n])] }, set(o, s, a) { return r.get(s)?.getPropertyDescriptor?.(s)?.writable === !1 ? !1 : (n.add(s), Reflect.set(o, s, a)) }, getOwnPropertyDescriptor(o, s) {
    const a = Reflect.getOwnPropertyDescriptor(o, s); if (a && !a.configurable)
      return a; const f = r.get(s); return f ? f.getPropertyDescriptor ? { ...ir, ...f?.getPropertyDescriptor(s) } : ir : a
  }, defineProperty(o, s, a) { return n.add(s), Reflect.defineProperty(o, s, a) }, getPrototypeOf: () => Object.prototype }); return i[Ni] = function () { const o = { ...this }; return delete o[Ni], o }, i
} function qa(t) { const e = new Map(); for (const r of t) { const n = r.getKeys(); for (const i of n)e.set(i, r) } return e } function Ui(t, e) { return t.filter(r => e.get(r)?.has?.(r) ?? !0) }u(); c(); m(); p(); d(); l(); function Xe(t) { return { getKeys() { return t }, has() { return !1 }, getPropertyValue() {} } }u(); c(); m(); p(); d(); l(); function sr(t, e) { return { batch: t, transaction: e?.kind === 'batch' ? { isolationLevel: e.options.isolationLevel } : void 0 } }u(); c(); m(); p(); d(); l(); function qi(t) {
  if (t === void 0)
    return ''; const e = He(t); return new Qe(0, { colors: Jt }).write(e).toString()
}u(); c(); m(); p(); d(); l(); const Ba = 'P2037'; function ar({ error: t, user_facing_error: e }, r, n) { return e.error_code ? new Y(Va(e, n), { code: e.error_code, clientVersion: r, meta: e.meta, batchRequestIdx: e.batch_request_idx }) : new j(t, { clientVersion: r, batchRequestIdx: e.batch_request_idx }) } function Va(t, e) {
  let r = t.message; return (e === 'postgresql' || e === 'postgres' || e === 'mysql') && t.error_code === Ba && (r += `
Prisma Accelerate has built-in connection pooling to prevent such errors: https://pris.ly/client/error-accelerate`), r
}u(); c(); m(); p(); d(); l(); u(); c(); m(); p(); d(); l(); u(); c(); m(); p(); d(); l(); u(); c(); m(); p(); d(); l(); u(); c(); m(); p(); d(); l(); const zr = class {getLocation() { return null }}; function Te(t) { return typeof $EnabledCallSite == 'function' && t !== 'minimal' ? new $EnabledCallSite() : new zr() }u(); c(); m(); p(); d(); l(); u(); c(); m(); p(); d(); l(); u(); c(); m(); p(); d(); l(); const Bi = { _avg: !0, _count: !0, _sum: !0, _min: !0, _max: !0 }; function Ze(t = {}) { const e = ja(t); return Object.entries(e).reduce((n, [i, o]) => (Bi[i] !== void 0 ? n.select[i] = { select: o } : n[i] = o, n), { select: {} }) } function ja(t = {}) { return typeof t._count == 'boolean' ? { ...t, _count: { _all: t._count } } : t } function lr(t = {}) { return e => (typeof t._count == 'boolean' && (e._count = e._count._all), e) } function Vi(t, e) { const r = lr(t); return e({ action: 'aggregate', unpacker: r, argsMapper: Ze })(t) }u(); c(); m(); p(); d(); l(); function Qa(t = {}) { const { select: e, ...r } = t; return typeof e == 'object' ? Ze({ ...r, _count: e }) : Ze({ ...r, _count: { _all: !0 } }) } function Ja(t = {}) { return typeof t.select == 'object' ? e => lr(t)(e)._count : e => lr(t)(e)._count._all } function $i(t, e) { return e({ action: 'count', unpacker: Ja(t), argsMapper: Qa })(t) }u(); c(); m(); p(); d(); l(); function Ga(t = {}) {
  const e = Ze(t); if (Array.isArray(e.by)) {
    for (const r of e.by) typeof r == 'string' && (e.select[r] = !0)
  }
  else {
    typeof e.by == 'string' && (e.select[e.by] = !0)
  } return e
} function Wa(t = {}) { return e => (typeof t?._count == 'boolean' && e.forEach((r) => { r._count = r._count._all }), e) } function ji(t, e) { return e({ action: 'groupBy', unpacker: Wa(t), argsMapper: Ga })(t) } function Qi(t, e, r) {
  if (e === 'aggregate')
    return n => Vi(n, r); if (e === 'count')
    return n => $i(n, r); if (e === 'groupBy')
    return n => ji(n, r)
}u(); c(); m(); p(); d(); l(); function Ji(t, e) {
  const r = e.fields.filter(i => !i.relationName); const n = Nr(r, i => i.name); return new Proxy({}, { get(i, o) {
    if (o in i || typeof o == 'symbol')
      return i[o]; const s = n[o]; if (s)
      return new pt(t, o, s.type, s.isList, s.kind === 'enum')
  }, ...or(Object.keys(n)) })
}u(); c(); m(); p(); d(); l(); u(); c(); m(); p(); d(); l(); const Gi = t => Array.isArray(t) ? t : t.split('.'); const Yr = (t, e) => Gi(e).reduce((r, n) => r && r[n], t); const Wi = (t, e, r) => Gi(e).reduceRight((n, i, o, s) => Object.assign({}, Yr(t, s.slice(0, o)), { [i]: n }), r); function Ka(t, e) { return t === void 0 || e === void 0 ? [] : [...e, 'select', t] } function Ha(t, e, r) { return e === void 0 ? t ?? {} : Wi(e, r, t || !0) } function Xr(t, e, r, n, i, o) {
  const a = t._runtimeDataModel.models[e].fields.reduce((f, g) => ({ ...f, [g.name]: g }), {}); return (f) => {
    const g = Te(t._errorFormat); const T = Ka(n, i); const C = Ha(f, o, T); const k = r({ dataPath: T, callsite: g })(C); const A = za(t, e); return new Proxy(k, { get(O, S) {
      if (!A.includes(S))
        return O[S]; const oe = [a[S].type, r, S]; const K = [T, C]; return Xr(t, ...oe, ...K)
    }, ...or([...A, ...Object.getOwnPropertyNames(k)]) })
  }
} function za(t, e) { return t._runtimeDataModel.models[e].fields.filter(r => r.kind === 'object').map(r => r.name) } const Ya = ['findUnique', 'findUniqueOrThrow', 'findFirst', 'findFirstOrThrow', 'create', 'update', 'upsert', 'delete']; const Xa = ['aggregate', 'count', 'groupBy']; function Zr(t, e) { const r = t._extensions.getAllModelExtensions(e) ?? {}; const n = [Za(t, e), tl(t, e), xt(r), W('name', () => e), W('$name', () => e), W('$parent', () => t._appliedParent)]; return ae({}, n) } function Za(t, e) { const r = ge(e); const n = Object.keys(Nt.ModelAction).concat('count'); return { getKeys() { return n }, getPropertyValue(i) { const o = i; const s = a => (f) => { const g = Te(t._errorFormat); return t._createPrismaPromise((T) => { const C = { args: f, dataPath: [], action: o, model: e, clientMethod: `${r}.${i}`, jsModelName: r, transaction: T, callsite: g }; return t._request({ ...C, ...a }) }, { action: o, args: f, model: e }) }; return Ya.includes(o) ? Xr(t, e, s) : el(i) ? Qi(t, i, s) : s({}) } } } function el(t) { return Xa.includes(t) } function tl(t, e) { return Ie(W('fields', () => { const r = t._runtimeDataModel.models[e]; return Ji(e, r) })) }u(); c(); m(); p(); d(); l(); function Ki(t) { return t.replace(/^./, e => e.toUpperCase()) } const en = Symbol(); function Pt(t) { const e = [rl(t), nl(t), W(en, () => t), W('$parent', () => t._appliedParent)]; const r = t._extensions.getAllClientExtensions(); return r && e.push(xt(r)), ae(t, e) } function rl(t) { const e = Object.getPrototypeOf(t._originalClient); const r = [...new Set(Object.getOwnPropertyNames(e))]; return { getKeys() { return r }, getPropertyValue(n) { return t[n] } } } function nl(t) {
  const e = Object.keys(t._runtimeDataModel.models); const r = e.map(ge); const n = [...new Set(e.concat(r))]; return Ie({ getKeys() { return n }, getPropertyValue(i) {
    const o = Ki(i); if (t._runtimeDataModel.models[o] !== void 0)
      return Zr(t, o); if (t._runtimeDataModel.models[i] !== void 0)
      return Zr(t, i)
  }, getPropertyDescriptor(i) {
    if (!r.includes(i))
      return { enumerable: !1 }
  } })
} function Hi(t) { return t[en] ? t[en] : t } function zi(t) {
  if (typeof t == 'function')
    return t(this); if (t.client?.__AccelerateEngine) { const r = t.client.__AccelerateEngine; this._originalClient._engine = new r(this._originalClient._accelerateEngineConfig) } const e = Object.create(this._originalClient, { _extensions: { value: this._extensions.append(t) }, _appliedParent: { value: this, configurable: !0 }, $use: { value: void 0 }, $on: { value: void 0 } }); return Pt(e)
}u(); c(); m(); p(); d(); l(); u(); c(); m(); p(); d(); l(); function Yi({ result: t, modelName: e, select: r, omit: n, extensions: i }) {
  const o = i.getAllComputedFields(e); if (!o)
    return t; const s = []; const a = []; for (const f of Object.values(o)) {
    if (n) {
      if (n[f.name])
        continue; const g = f.needs.filter(T => n[T]); g.length > 0 && a.push(Xe(g))
    }
    else if (r) {
      if (!r[f.name])
        continue; const g = f.needs.filter(T => !r[T]); g.length > 0 && a.push(Xe(g))
    }il(t, f.needs) && s.push(ol(f, ae(t, s)))
  } return s.length > 0 || a.length > 0 ? ae(t, [...s, ...a]) : t
} function il(t, e) { return e.every(r => Fr(t, r)) } function ol(t, e) { return Ie(W(t.name, () => t.compute(e))) }u(); c(); m(); p(); d(); l(); function ur({ visitor: t, result: e, args: r, runtimeDataModel: n, modelName: i }) { if (Array.isArray(e)) { for (let s = 0; s < e.length; s++)e[s] = ur({ result: e[s], args: r, modelName: i, runtimeDataModel: n, visitor: t }); return e } const o = t(e, i, r) ?? e; return r.include && Xi({ includeOrSelect: r.include, result: o, parentModelName: i, runtimeDataModel: n, visitor: t }), r.select && Xi({ includeOrSelect: r.select, result: o, parentModelName: i, runtimeDataModel: n, visitor: t }), o } function Xi({ includeOrSelect: t, result: e, parentModelName: r, runtimeDataModel: n, visitor: i }) {
  for (const [o, s] of Object.entries(t)) {
    if (!s || e[o] == null || he(s))
      continue; const f = n.models[r].fields.find(T => T.name === o); if (!f || f.kind !== 'object' || !f.relationName)
      continue; const g = typeof s == 'object' ? s : {}; e[o] = ur({ visitor: i, result: e[o], args: g, modelName: f.type, runtimeDataModel: n })
  }
} function Zi({ result: t, modelName: e, args: r, extensions: n, runtimeDataModel: i, globalOmit: o }) { return n.isEmpty() || t == null || typeof t != 'object' || !i.models[e] ? t : ur({ result: t, args: r ?? {}, modelName: e, runtimeDataModel: i, visitor: (a, f, g) => { const T = ge(f); return Yi({ result: a, modelName: T, select: g.select, omit: g.select ? void 0 : { ...o?.[T], ...g.omit }, extensions: n }) } }) }u(); c(); m(); p(); d(); l(); u(); c(); m(); p(); d(); l(); l(); u(); c(); m(); p(); d(); l(); const sl = ['$connect', '$disconnect', '$on', '$transaction', '$use', '$extends']; const eo = sl; function to(t) {
  if (t instanceof X)
    return al(t); if (nr(t))
    return ll(t); if (Array.isArray(t)) { const r = [t[0]]; for (let n = 1; n < t.length; n++)r[n] = vt(t[n]); return r } const e = {}; for (const r in t)e[r] = vt(t[r]); return e
} function al(t) { return new X(t.strings, t.values) } function ll(t) { return new Et(t.sql, t.values) } function vt(t) {
  if (typeof t != 'object' || t == null || t instanceof xe || Ke(t))
    return t; if (je(t))
    return new pe(t.toFixed()); if ($e(t))
    return new Date(+t); if (ArrayBuffer.isView(t))
    return t.slice(0); if (Array.isArray(t)) { let e = t.length; let r; for (r = new Array(e); e--;)r[e] = vt(t[e]); return r } if (typeof t == 'object') { const e = {}; for (const r in t)r === '__proto__' ? Object.defineProperty(e, r, { value: vt(t[r]), configurable: !0, enumerable: !0, writable: !0 }) : e[r] = vt(t[r]); return e }we(t, 'Unknown value')
} function no(t, e, r, n = 0) { return t._createPrismaPromise((i) => { const o = e.customDataProxyFetch; return 'transaction' in e && i !== void 0 && (e.transaction?.kind === 'batch' && e.transaction.lock.then(), e.transaction = i), n === r.length ? t._executeRequest(e) : r[n]({ model: e.model, operation: e.model ? e.action : e.clientMethod, args: to(e.args ?? {}), __internalParams: e, query: (s, a = e) => { const f = a.customDataProxyFetch; return a.customDataProxyFetch = ao(o, f), a.args = s, no(t, a, r, n + 1) } }) }) } function io(t, e) {
  const { jsModelName: r, action: n, clientMethod: i } = e; const o = r ? n : i; if (t._extensions.isEmpty())
    return t._executeRequest(e); const s = t._extensions.getAllQueryCallbacks(r ?? '$none', o); return no(t, e, s)
} function oo(t) { return (e) => { const r = { requests: e }; const n = e[0].extensions.getAllBatchQueryCallbacks(); return n.length ? so(r, n, 0, t) : t(r) } } function so(t, e, r, n) {
  if (r === e.length)
    return n(t); const i = t.customDataProxyFetch; const o = t.requests[0].transaction; return e[r]({ args: { queries: t.requests.map(s => ({ model: s.modelName, operation: s.action, args: s.args })), transaction: o ? { isolationLevel: o.kind === 'batch' ? o.isolationLevel : void 0 } : void 0 }, __internalParams: t, query(s, a = t) { const f = a.customDataProxyFetch; return a.customDataProxyFetch = ao(i, f), so(a, e, r + 1, n) } })
} const ro = t => t; function ao(t = ro, e = ro) { return r => t(e(r)) }u(); c(); m(); p(); d(); l(); const lo = ee('prisma:client'); const uo = { 'Vercel': 'vercel', 'Netlify CI': 'netlify' }; function co({ postinstall: t, ciName: e, clientVersion: r }) {
  if (lo('checkPlatformCaching:postinstall', t), lo('checkPlatformCaching:ciName', e), t === !0 && e && e in uo) {
    const n = `Prisma has detected that this project was built on ${e}, which caches dependencies. This leads to an outdated Prisma Client because Prisma's auto-generation isn't triggered. To fix this, make sure to run the \`prisma generate\` command during the build process.

Learn how: https://pris.ly/d/${uo[e]}-build`; throw console.error(n), new M(n, r)
  }
}u(); c(); m(); p(); d(); l(); function mo(t, e) { return t ? t.datasources ? t.datasources : t.datasourceUrl ? { [e[0]]: { url: t.datasourceUrl } } : {} : {} }u(); c(); m(); p(); d(); l(); u(); c(); m(); p(); d(); l(); const ul = () => globalThis.process?.release?.name === 'node'; const cl = () => !!globalThis.Bun || !!globalThis.process?.versions?.bun; const ml = () => !!globalThis.Deno; const pl = () => typeof globalThis.Netlify == 'object'; const dl = () => typeof globalThis.EdgeRuntime == 'object'; const fl = () => globalThis.navigator?.userAgent === 'Cloudflare-Workers'; function gl() { return [[pl, 'netlify'], [dl, 'edge-light'], [fl, 'workerd'], [ml, 'deno'], [cl, 'bun'], [ul, 'node']].flatMap(r => r[0]() ? [r[1]] : []).at(0) ?? '' } const hl = { 'node': 'Node.js', 'workerd': 'Cloudflare Workers', 'deno': 'Deno and Deno Deploy', 'netlify': 'Netlify Edge Functions', 'edge-light': 'Edge Runtime (Vercel Edge Functions, Vercel Edge Middleware, Next.js (Pages Router) Edge API Routes, Next.js (App Router) Edge Route Handlers or Next.js Middleware)' }; function Ce() { const t = gl(); return { id: t, prettyName: hl[t] || t, isEdge: ['workerd', 'deno', 'netlify', 'edge-light'].includes(t) } }u(); c(); m(); p(); d(); l(); u(); c(); m(); p(); d(); l(); function cr({ inlineDatasources: t, overrideDatasources: e, env: r, clientVersion: n }) {
  let i; const o = Object.keys(t)[0]; const s = t[o]?.url; const a = e[o]?.url; if (o === void 0 ? i = void 0 : a ? i = a : s?.value ? i = s.value : s?.fromEnvVar && (i = r[s.fromEnvVar]), s?.fromEnvVar !== void 0 && i === void 0) {
    throw Ce().id === 'workerd'
      ? new M(`error: Environment variable not found: ${s.fromEnvVar}.

In Cloudflare module Workers, environment variables are available only in the Worker's \`env\` parameter of \`fetch\`.
To solve this, provide the connection string directly: https://pris.ly/d/cloudflare-datasource-url`, n)
      : new M(`error: Environment variable not found: ${s.fromEnvVar}.`, n)
  } if (i === void 0)
    throw new M('error: Missing URL environment variable, value, or override.', n); return i
}u(); c(); m(); p(); d(); l(); u(); c(); m(); p(); d(); l(); function po(t) {
  if (t?.kind === 'itx')
    return t.options.id
}u(); c(); m(); p(); d(); l(); let tn; const fo = { async loadLibrary(t) {
  const { clientVersion: e, adapter: r, engineWasm: n } = t; if (r === void 0)
    throw new M(`The \`adapter\` option for \`PrismaClient\` is required in this context (${Ce().prettyName})`, e); if (n === void 0)
    throw new M('WASM engine was unexpectedly `undefined`', e); tn === void 0 && (tn = (async () => {
    const o = n.getRuntime(); const s = await n.getQueryEngineWasmModule(); if (s == null)
      throw new M('The loaded wasm module was unexpectedly `undefined` or `null` once loaded', e); const a = { './query_engine_bg.js': o }; const f = new WebAssembly.Instance(s, a); const g = f.exports.__wbindgen_start; return o.__wbg_set_wasm(f.exports), g(), o.QueryEngine
  })()); const i = await tn; return { debugPanic() { return Promise.reject('{}') }, dmmf() { return Promise.resolve('{}') }, version() { return { commit: 'unknown', version: 'unknown' } }, QueryEngine: i }
} }; const yl = 'P2036'; const ye = ee('prisma:client:libraryEngine'); function bl(t) { return t.item_type === 'query' && 'query' in t } function wl(t) { return 'level' in t ? t.level === 'error' && t.message === 'PANIC' : !1 } const L0 = [...Mr, 'native']; const El = 0xFFFFFFFFFFFFFFFFn; let rn = 1n; function xl() { const t = rn++; return rn > El && (rn = 1n), t } const Tt = class {
  name = 'LibraryEngine'; engine; libraryInstantiationPromise; libraryStartingPromise; libraryStoppingPromise; libraryStarted; executingQueryPromise; config; QueryEngineConstructor; libraryLoader; library; logEmitter; libQueryEnginePath; binaryTarget; datasourceOverrides; datamodel; logQueries; logLevel; lastQuery; loggerRustPanic; tracingHelper; versionInfo; constructor(e, r) { this.libraryLoader = r ?? fo, this.config = e, this.libraryStarted = !1, this.logQueries = e.logQueries ?? !1, this.logLevel = e.logLevel ?? 'error', this.logEmitter = e.logEmitter, this.datamodel = e.inlineSchema, this.tracingHelper = e.tracingHelper, e.enableDebugLogs && (this.logLevel = 'debug'); const n = Object.keys(e.overrideDatasources)[0]; const i = e.overrideDatasources[n]?.url; n !== void 0 && i !== void 0 && (this.datasourceOverrides = { [n]: i }), this.libraryInstantiationPromise = this.instantiateLibrary() }wrapEngine(e) { return { applyPendingMigrations: e.applyPendingMigrations?.bind(e), commitTransaction: this.withRequestId(e.commitTransaction.bind(e)), connect: this.withRequestId(e.connect.bind(e)), disconnect: this.withRequestId(e.disconnect.bind(e)), metrics: e.metrics?.bind(e), query: this.withRequestId(e.query.bind(e)), rollbackTransaction: this.withRequestId(e.rollbackTransaction.bind(e)), sdlSchema: e.sdlSchema?.bind(e), startTransaction: this.withRequestId(e.startTransaction.bind(e)), trace: e.trace.bind(e) } }withRequestId(e) {
    return async (...r) => {
      const n = xl().toString(); try { return await e(...r, n) }
      finally { if (this.tracingHelper.isEnabled()) { const i = await this.engine?.trace(n); if (i) { const o = JSON.parse(i); this.tracingHelper.dispatchEngineSpans(o.spans) } } }
    }
  }

  async applyPendingMigrations() { throw new Error('Cannot call this method from this type of engine instance') } async transaction(e, r, n) {
    await this.start(); const i = JSON.stringify(r); let o; if (e === 'start') { const a = JSON.stringify({ max_wait: n.maxWait, timeout: n.timeout, isolation_level: n.isolationLevel }); o = await this.engine?.startTransaction(a, i) }
    else {
      e === 'commit' ? o = await this.engine?.commitTransaction(n.id, i) : e === 'rollback' && (o = await this.engine?.rollbackTransaction(n.id, i))
    } const s = this.parseEngineResponse(o); if (Pl(s)) { const a = this.getExternalAdapterError(s); throw a ? a.error : new Y(s.message, { code: s.error_code, clientVersion: this.config.clientVersion, meta: s.meta }) }
    else if (typeof s.message == 'string') {
      throw new j(s.message, { clientVersion: this.config.clientVersion })
    } return s
  }

  async instantiateLibrary() {
    if (ye('internalSetup'), this.libraryInstantiationPromise)
      return this.libraryInstantiationPromise; this.binaryTarget = await this.getCurrentBinaryTarget(), await this.tracingHelper.runInChildSpan('load_engine', () => this.loadEngine()), this.version()
  }

  async getCurrentBinaryTarget() {}parseEngineResponse(e) {
    if (!e)
      throw new j('Response from the Engine was empty', { clientVersion: this.config.clientVersion }); try { return JSON.parse(e) }
    catch { throw new j('Unable to JSON.parse response from engine', { clientVersion: this.config.clientVersion }) }
  }

  async loadEngine() {
    if (!this.engine) {
      this.QueryEngineConstructor || (this.library = await this.libraryLoader.loadLibrary(this.config), this.QueryEngineConstructor = this.library.QueryEngine); try { const e = new w(this); const { adapter: r } = this.config; r && ye('Using driver adapter: %O', r), this.engine = this.wrapEngine(new this.QueryEngineConstructor({ datamodel: this.datamodel, env: h.env, logQueries: this.config.logQueries ?? !1, ignoreEnvVarErrors: !0, datasourceOverrides: this.datasourceOverrides ?? {}, logLevel: this.logLevel, configDir: this.config.cwd, engineProtocol: 'json', enableTracing: this.tracingHelper.isEnabled() }, (n) => { e.deref()?.logger(n) }, r)) }
      catch (e) { const r = e; const n = this.parseInitError(r.message); throw typeof n == 'string' ? r : new M(n.message, this.config.clientVersion, n.error_code) }
    }
  }

  logger(e) { const r = this.parseEngineResponse(e); r && (r.level = r?.level.toLowerCase() ?? 'unknown', bl(r) ? this.logEmitter.emit('query', { timestamp: new Date(), query: r.query, params: r.params, duration: Number(r.duration_ms), target: r.module_path }) : (wl(r), this.logEmitter.emit(r.level, { timestamp: new Date(), message: r.message, target: r.module_path }))) }parseInitError(e) {
    try { return JSON.parse(e) }
    catch {} return e
  }

  parseRequestError(e) {
    try { return JSON.parse(e) }
    catch {} return e
  }

  onBeforeExit() { throw new Error('"beforeExit" hook is not applicable to the library engine since Prisma 5.0.0, it is only relevant and implemented for the binary engine. Please add your event listener to the `process` object directly instead.') } async start() {
    if (await this.libraryInstantiationPromise, await this.libraryStoppingPromise, this.libraryStartingPromise)
      return ye(`library already starting, this.libraryStarted: ${this.libraryStarted}`), this.libraryStartingPromise; if (this.libraryStarted)
      return; const e = async () => {
      ye('library starting'); try { const r = { traceparent: this.tracingHelper.getTraceParent() }; await this.engine?.connect(JSON.stringify(r)), this.libraryStarted = !0, ye('library started') }
      catch (r) { const n = this.parseInitError(r.message); throw typeof n == 'string' ? r : new M(n.message, this.config.clientVersion, n.error_code) }
      finally { this.libraryStartingPromise = void 0 }
    }; return this.libraryStartingPromise = this.tracingHelper.runInChildSpan('connect', e), this.libraryStartingPromise
  }

  async stop() {
    if (await this.libraryStartingPromise, await this.executingQueryPromise, this.libraryStoppingPromise)
      return ye('library is already stopping'), this.libraryStoppingPromise; if (!this.libraryStarted)
      return; const e = async () => { await new Promise(n => setTimeout(n, 5)), ye('library stopping'); const r = { traceparent: this.tracingHelper.getTraceParent() }; await this.engine?.disconnect(JSON.stringify(r)), this.libraryStarted = !1, this.libraryStoppingPromise = void 0, ye('library stopped') }; return this.libraryStoppingPromise = this.tracingHelper.runInChildSpan('disconnect', e), this.libraryStoppingPromise
  }

  version() { return this.versionInfo = this.library?.version(), this.versionInfo?.version ?? 'unknown' }debugPanic(e) { return this.library?.debugPanic(e) } async request(e, { traceparent: r, interactiveTransaction: n }) {
    ye(`sending request, this.libraryStarted: ${this.libraryStarted}`); const i = JSON.stringify({ traceparent: r }); const o = JSON.stringify(e); try {
      await this.start(), this.executingQueryPromise = this.engine?.query(o, i, n?.id), this.lastQuery = o; const s = this.parseEngineResponse(await this.executingQueryPromise); if (s.errors)
        throw s.errors.length === 1 ? this.buildQueryError(s.errors[0]) : new j(JSON.stringify(s.errors), { clientVersion: this.config.clientVersion }); if (this.loggerRustPanic)
        throw this.loggerRustPanic; return { data: s }
    }
    catch (s) {
      if (s instanceof M)
        throw s; s.code === 'GenericFailure' && s.message?.startsWith('PANIC:'); const a = this.parseRequestError(s.message); throw typeof a == 'string'
        ? s
        : new j(`${a.message}
${a.backtrace}`, { clientVersion: this.config.clientVersion })
    }
  }

  async requestBatch(e, { transaction: r, traceparent: n }) {
    ye('requestBatch'); const i = sr(e, r); await this.start(), this.lastQuery = JSON.stringify(i), this.executingQueryPromise = this.engine.query(this.lastQuery, JSON.stringify({ traceparent: n }), po(r)); const o = await this.executingQueryPromise; const s = this.parseEngineResponse(o); if (s.errors)
      throw s.errors.length === 1 ? this.buildQueryError(s.errors[0]) : new j(JSON.stringify(s.errors), { clientVersion: this.config.clientVersion }); const { batchResult: a, errors: f } = s; if (Array.isArray(a))
      return a.map(g => g.errors && g.errors.length > 0 ? this.loggerRustPanic ?? this.buildQueryError(g.errors[0]) : { data: g }); throw f && f.length === 1 ? new Error(f[0].error) : new Error(JSON.stringify(s))
  }

  buildQueryError(e) { e.user_facing_error.is_panic; const r = this.getExternalAdapterError(e.user_facing_error); return r ? r.error : ar(e, this.config.clientVersion, this.config.activeProvider) }getExternalAdapterError(e) { if (e.error_code === yl && this.config.adapter) { const r = e.meta?.id; qt(typeof r == 'number', 'Malformed external JS error received from the engine'); const n = this.config.adapter.errorRegistry.consumeError(r); return qt(n, 'External error with reported id was not registered'), n } } async metrics(e) { await this.start(); const r = await this.engine.metrics(JSON.stringify(e)); return e.format === 'prometheus' ? r : this.parseEngineResponse(r) }
}; function Pl(t) { return typeof t == 'object' && t !== null && t.error_code !== void 0 }u(); c(); m(); p(); d(); l(); const Ct = 'Accelerate has not been setup correctly. Make sure your client is using `.$extends(withAccelerate())`. See https://pris.ly/d/accelerate-getting-started'; const mr = class {constructor(e) { this.config = e; this.resolveDatasourceUrl = this.config.accelerateUtils?.resolveDatasourceUrl, this.getBatchRequestPayload = this.config.accelerateUtils?.getBatchRequestPayload, this.prismaGraphQLToJSError = this.config.accelerateUtils?.prismaGraphQLToJSError, this.PrismaClientUnknownRequestError = this.config.accelerateUtils?.PrismaClientUnknownRequestError, this.PrismaClientInitializationError = this.config.accelerateUtils?.PrismaClientInitializationError, this.PrismaClientKnownRequestError = this.config.accelerateUtils?.PrismaClientKnownRequestError, this.debug = this.config.accelerateUtils?.debug, this.engineVersion = this.config.accelerateUtils?.engineVersion, this.clientVersion = this.config.accelerateUtils?.clientVersion }name = 'AccelerateEngine'; resolveDatasourceUrl; getBatchRequestPayload; prismaGraphQLToJSError; PrismaClientUnknownRequestError; PrismaClientInitializationError; PrismaClientKnownRequestError; debug; engineVersion; clientVersion; onBeforeExit(e) {} async start() {} async stop() {}version(e) { return 'unknown' }transaction(e, r, n) { throw new M(Ct, this.config.clientVersion) }metrics(e) { throw new M(Ct, this.config.clientVersion) }request(e, r) { throw new M(Ct, this.config.clientVersion) }requestBatch(e, r) { throw new M(Ct, this.config.clientVersion) }applyPendingMigrations() { throw new M(Ct, this.config.clientVersion) }}; function go({ copyEngine: t = !0 }, e) {
  let r; try { r = cr({ inlineDatasources: e.inlineDatasources, overrideDatasources: e.overrideDatasources, env: { ...e.env, ...h.env }, clientVersion: e.clientVersion }) }
  catch {} const n = !!(r?.startsWith('prisma://') || _r(r)); t && n && lt('recommend--no-engine', 'In production, we recommend using `prisma generate --no-engine` (See: `prisma generate --help`)'); const i = Ue(e.generator); const o = n || !t; const s = !!e.adapter; const a = i === 'library'; const f = i === 'binary'; const g = i === 'client'; if (o && s || s && !1) {
    let T; throw t ? r?.startsWith('prisma://') ? T = ['Prisma Client was configured to use the `adapter` option but the URL was a `prisma://` URL.', 'Please either use the `prisma://` URL or remove the `adapter` from the Prisma Client constructor.'] : T = ['Prisma Client was configured to use both the `adapter` and Accelerate, please chose one.'] : T = ['Prisma Client was configured to use the `adapter` option but `prisma generate` was run with `--no-engine`.', 'Please run `prisma generate` without `--no-engine` to be able to use Prisma Client with the adapter.'], new G(T.join(`
`), { clientVersion: e.clientVersion })
  } if (s)
    return new Tt(e); if (o)
    return new mr(e); { const T = [`PrismaClient failed to initialize because it wasn't configured to run in this environment (${Ce().prettyName}).`, 'In order to run Prisma Client in an edge runtime, you will need to configure one of the following options:', '- Enable Driver Adapters: https://pris.ly/d/driver-adapters', '- Enable Accelerate: https://pris.ly/d/accelerate']; throw new G(T.join(`
`), { clientVersion: e.clientVersion }) } return 'wasm'
}u(); c(); m(); p(); d(); l(); function pr({ generator: t }) { return t?.previewFeatures ?? [] }u(); c(); m(); p(); d(); l(); const ho = t => ({ command: t }); u(); c(); m(); p(); d(); l(); u(); c(); m(); p(); d(); l(); const yo = t => t.strings.reduce((e, r, n) => `${e}@P${n}${r}`); u(); c(); m(); p(); d(); l(); l(); function et(t) {
  try { return bo(t, 'fast') }
  catch { return bo(t, 'slow') }
} function bo(t, e) { return JSON.stringify(t.map(r => Eo(r, e))) } function Eo(t, e) {
  if (Array.isArray(t))
    return t.map(r => Eo(r, e)); if (typeof t == 'bigint')
    return { prisma__type: 'bigint', prisma__value: t.toString() }; if ($e(t))
    return { prisma__type: 'date', prisma__value: t.toJSON() }; if (pe.isDecimal(t))
    return { prisma__type: 'decimal', prisma__value: t.toJSON() }; if (b.isBuffer(t))
    return { prisma__type: 'bytes', prisma__value: t.toString('base64') }; if (vl(t))
    return { prisma__type: 'bytes', prisma__value: b.from(t).toString('base64') }; if (ArrayBuffer.isView(t)) { const { buffer: r, byteOffset: n, byteLength: i } = t; return { prisma__type: 'bytes', prisma__value: b.from(r, n, i).toString('base64') } } return typeof t == 'object' && e === 'slow' ? xo(t) : t
} function vl(t) { return t instanceof ArrayBuffer || t instanceof SharedArrayBuffer ? !0 : typeof t == 'object' && t !== null ? t[Symbol.toStringTag] === 'ArrayBuffer' || t[Symbol.toStringTag] === 'SharedArrayBuffer' : !1 } function xo(t) {
  if (typeof t != 'object' || t === null)
    return t; if (typeof t.toJSON == 'function')
    return t.toJSON(); if (Array.isArray(t))
    return t.map(wo); const e = {}; for (const r of Object.keys(t))e[r] = wo(t[r]); return e
} function wo(t) { return typeof t == 'bigint' ? t.toString() : xo(t) } const Tl = /^(\s*alter\s)/i; const Po = ee('prisma:client'); function nn(t, e, r, n) {
  if (!(t !== 'postgresql' && t !== 'cockroachdb') && r.length > 0 && Tl.exec(e)) {
    throw new Error(`Running ALTER using ${n} is not supported
Using the example below you can still execute your query with Prisma, but please note that it is vulnerable to SQL injection attacks and requires you to take care of input sanitization.

Example:
  await prisma.$executeRawUnsafe(\`ALTER USER prisma WITH PASSWORD '\${password}'\`)

More Information: https://pris.ly/d/execute-raw
`)
  }
} function on({ clientMethod: t, activeProvider: e }) {
  return (r) => {
    let n = ''; let i; if (nr(r)) {
      n = r.sql, i = { values: et(r.values), __prismaRawParameters__: !0 }
    }
    else if (Array.isArray(r)) { const [o, ...s] = r; n = o, i = { values: et(s || []), __prismaRawParameters__: !0 } }
    else {
      switch (e) { case 'sqlite':case 'mysql':{ n = r.sql, i = { values: et(r.values), __prismaRawParameters__: !0 }; break } case 'cockroachdb':case 'postgresql':case 'postgres':{ n = r.text, i = { values: et(r.values), __prismaRawParameters__: !0 }; break } case 'sqlserver':{ n = yo(r), i = { values: et(r.values), __prismaRawParameters__: !0 }; break } default:throw new Error(`The ${e} provider does not support ${t}`) }
    } return i?.values ? Po(`prisma.${t}(${n}, ${i.values})`) : Po(`prisma.${t}(${n})`), { query: n, parameters: i }
  }
} const vo = { requestArgsToMiddlewareArgs(t) { return [t.strings, ...t.values] }, middlewareArgsToRequestArgs(t) { const [e, ...r] = t; return new X(e, r) } }; const To = { requestArgsToMiddlewareArgs(t) { return [t] }, middlewareArgsToRequestArgs(t) { return t[0] } }; u(); c(); m(); p(); d(); l(); function sn(t) {
  return function (r, n) {
    let i; const o = (s = t) => {
      try { return s === void 0 || s?.kind === 'itx' ? i ??= Co(r(s)) : Co(r(s)) }
      catch (a) { return Promise.reject(a) }
    }; return { get spec() { return n }, then(s, a) { return o().then(s, a) }, catch(s) { return o().catch(s) }, finally(s) { return o().finally(s) }, requestTransaction(s) { const a = o(s); return a.requestTransaction ? a.requestTransaction(s) : a }, [Symbol.toStringTag]: 'PrismaPromise' }
  }
} function Co(t) { return typeof t.then == 'function' ? t : Promise.resolve(t) }u(); c(); m(); p(); d(); l(); const Cl = Lr.split('.')[0]; const Rl = { isEnabled() { return !1 }, getTraceParent() { return '00-10-10-00' }, dispatchEngineSpans() {}, getActiveContext() {}, runInChildSpan(t, e) { return e() } }; const an = class {isEnabled() { return this.getGlobalTracingHelper().isEnabled() }getTraceParent(e) { return this.getGlobalTracingHelper().getTraceParent(e) }dispatchEngineSpans(e) { return this.getGlobalTracingHelper().dispatchEngineSpans(e) }getActiveContext() { return this.getGlobalTracingHelper().getActiveContext() }runInChildSpan(e, r) { return this.getGlobalTracingHelper().runInChildSpan(e, r) }getGlobalTracingHelper() { const e = globalThis[`V${Cl}_PRISMA_INSTRUMENTATION`]; const r = globalThis.PRISMA_INSTRUMENTATION; return e?.helper ?? r?.helper ?? Rl }}; function Ro() { return new an() }u(); c(); m(); p(); d(); l(); function Ao(t, e = () => {}) { let r; const n = new Promise(i => r = i); return { then(i) { return --t === 0 && r(e()), i?.(n) } } }u(); c(); m(); p(); d(); l(); function So(t) { return typeof t == 'string' ? t : t.reduce((e, r) => { const n = typeof r == 'string' ? r : r.level; return n === 'query' ? e : e && (r === 'info' || e === 'info') ? 'info' : n }, void 0) }u(); c(); m(); p(); d(); l(); const dr = class {_middlewares = []; use(e) { this._middlewares.push(e) }get(e) { return this._middlewares[e] }has(e) { return !!this._middlewares[e] }length() { return this._middlewares.length }}; u(); c(); m(); p(); d(); l(); const Oo = rt(ti()); u(); c(); m(); p(); d(); l(); function fr(t) { return typeof t.batchRequestIdx == 'number' }u(); c(); m(); p(); d(); l(); function ko(t) {
  if (t.action !== 'findUnique' && t.action !== 'findUniqueOrThrow')
    return; const e = []; return t.modelName && e.push(t.modelName), t.query.arguments && e.push(ln(t.query.arguments)), e.push(ln(t.query.selection)), e.join('')
} function ln(t) { return `(${Object.keys(t).sort().map((r) => { const n = t[r]; return typeof n == 'object' && n !== null ? `(${r} ${ln(n)})` : r }).join(' ')})` }u(); c(); m(); p(); d(); l(); const Al = { aggregate: !1, aggregateRaw: !1, createMany: !0, createManyAndReturn: !0, createOne: !0, deleteMany: !0, deleteOne: !0, executeRaw: !0, findFirst: !1, findFirstOrThrow: !1, findMany: !1, findRaw: !1, findUnique: !1, findUniqueOrThrow: !1, groupBy: !1, queryRaw: !1, runCommandRaw: !0, updateMany: !0, updateManyAndReturn: !0, updateOne: !0, upsertOne: !0 }; function un(t) { return Al[t] }u(); c(); m(); p(); d(); l(); const gr = class {
  constructor(e) { this.options = e; this.batches = {} }batches; tickActive = !1; request(e) { const r = this.options.batchBy(e); return r ? (this.batches[r] || (this.batches[r] = [], this.tickActive || (this.tickActive = !0, h.nextTick(() => { this.dispatchBatches(), this.tickActive = !1 }))), new Promise((n, i) => { this.batches[r].push({ request: e, resolve: n, reject: i }) })) : this.options.singleLoader(e) }dispatchBatches() {
    for (const e in this.batches) {
      const r = this.batches[e]; delete this.batches[e], r.length === 1
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
}; u(); c(); m(); p(); d(); l(); l(); function Me(t, e) {
  if (e === null)
    return e; switch (t) { case 'bigint':return BigInt(e); case 'bytes':{ const { buffer: r, byteOffset: n, byteLength: i } = b.from(e, 'base64'); return new Uint8Array(r, n, i) } case 'decimal':return new pe(e); case 'datetime':case 'date':return new Date(e); case 'time':return new Date(`1970-01-01T${e}Z`); case 'bigint-array':return e.map(r => Me('bigint', r)); case 'bytes-array':return e.map(r => Me('bytes', r)); case 'decimal-array':return e.map(r => Me('decimal', r)); case 'datetime-array':return e.map(r => Me('datetime', r)); case 'date-array':return e.map(r => Me('date', r)); case 'time-array':return e.map(r => Me('time', r)); default:return e }
} function hr(t) { const e = []; const r = Sl(t); for (let n = 0; n < t.rows.length; n++) { const i = t.rows[n]; const o = { ...r }; for (let s = 0; s < i.length; s++)o[t.columns[s]] = Me(t.types[s], i[s]); e.push(o) } return e } function Sl(t) { const e = {}; for (let r = 0; r < t.columns.length; r++)e[t.columns[r]] = null; return e } const kl = ee('prisma:client:request_handler'); const yr = class {
  client; dataloader; logEmitter; constructor(e, r) {
    this.logEmitter = r, this.client = e, this.dataloader = new gr({ batchLoader: oo(async ({ requests: n, customDataProxyFetch: i }) => {
      const { transaction: o, otelParentCtx: s } = n[0]; const a = n.map(C => C.protocolQuery); const f = this.client._tracingHelper.getTraceParent(s); const g = n.some(C => un(C.protocolQuery.action)); return (await this.client._engine.requestBatch(a, { traceparent: f, transaction: Ol(o), containsWrite: g, customDataProxyFetch: i })).map((C, k) => {
        if (C instanceof Error)
          return C; try { return this.mapQueryEngineResult(n[k], C) }
        catch (A) { return A }
      })
    }), singleLoader: async (n) => { const i = n.transaction?.kind === 'itx' ? Io(n.transaction) : void 0; const o = await this.client._engine.request(n.protocolQuery, { traceparent: this.client._tracingHelper.getTraceParent(), interactiveTransaction: i, isWrite: un(n.protocolQuery.action), customDataProxyFetch: n.customDataProxyFetch }); return this.mapQueryEngineResult(n, o) }, batchBy: n => n.transaction?.id ? `transaction-${n.transaction.id}` : ko(n.protocolQuery), batchOrder(n, i) { return n.transaction?.kind === 'batch' && i.transaction?.kind === 'batch' ? n.transaction.index - i.transaction.index : 0 } })
  }

  async request(e) {
    try { return await this.dataloader.request(e) }
    catch (r) { const { clientMethod: n, callsite: i, transaction: o, args: s, modelName: a } = e; this.handleAndLogRequestError({ error: r, clientMethod: n, callsite: i, transaction: o, args: s, modelName: a, globalOmit: e.globalOmit }) }
  }

  mapQueryEngineResult({ dataPath: e, unpacker: r }, n) { const i = n?.data; const o = this.unpack(i, e, r); return h.env.PRISMA_CLIENT_GET_TIME ? { data: o } : o }handleAndLogRequestError(e) {
    try { this.handleRequestError(e) }
    catch (r) { throw this.logEmitter && this.logEmitter.emit('error', { message: r.message, target: e.clientMethod, timestamp: new Date() }), r }
  }

  handleRequestError({ error: e, clientMethod: r, callsite: n, transaction: i, args: o, modelName: s, globalOmit: a }) {
    if (kl(e), Il(e, i))
      throw e; if (e instanceof Y && Ml(e)) { const g = Mo(e.meta); Yt({ args: o, errors: [g], callsite: n, errorFormat: this.client._errorFormat, originalMethod: r, clientVersion: this.client._clientVersion, globalOmit: a }) } let f = e.message; if (n && (f = Vt({ callsite: n, originalMethod: r, isPanic: e.isPanic, showColors: this.client._errorFormat === 'pretty', message: f })), f = this.sanitizeMessage(f), e.code) { const g = s ? { modelName: s, ...e.meta } : e.meta; throw new Y(f, { code: e.code, clientVersion: this.client._clientVersion, meta: g, batchRequestIdx: e.batchRequestIdx }) }
    else {
      if (e.isPanic)
        throw new Ee(f, this.client._clientVersion); if (e instanceof j)
        throw new j(f, { clientVersion: this.client._clientVersion, batchRequestIdx: e.batchRequestIdx }); if (e instanceof M)
        throw new M(f, this.client._clientVersion); if (e instanceof Ee)
        throw new Ee(f, this.client._clientVersion)
    } throw e.clientVersion = this.client._clientVersion, e
  }

  sanitizeMessage(e) { return this.client._errorFormat && this.client._errorFormat !== 'pretty' ? (0, Oo.default)(e) : e }unpack(e, r, n) {
    if (!e || (e.data && (e = e.data), !e))
      return e; const i = Object.keys(e)[0]; const o = Object.values(e)[0]; const s = r.filter(g => g !== 'select' && g !== 'include'); const a = Yr(o, s); const f = i === 'queryRaw' ? hr(a) : Be(a); return n ? n(f) : f
  }

  get [Symbol.toStringTag]() { return 'RequestHandler' }
}; function Ol(t) {
  if (t) {
    if (t.kind === 'batch')
      return { kind: 'batch', options: { isolationLevel: t.isolationLevel } }; if (t.kind === 'itx')
      return { kind: 'itx', options: Io(t) }; we(t, 'Unknown transaction kind')
  }
} function Io(t) { return { id: t.id, payload: t.payload } } function Il(t, e) { return fr(t) && e?.kind === 'batch' && t.batchRequestIdx !== e.index } function Ml(t) { return t.code === 'P2009' || t.code === 'P2012' } function Mo(t) {
  if (t.kind === 'Union')
    return { kind: 'Union', errors: t.errors.map(Mo) }; if (Array.isArray(t.selectionPath)) { const [,...e] = t.selectionPath; return { ...t, selectionPath: e } } return t
}u(); c(); m(); p(); d(); l(); const Lo = '6.5.0'; const _o = Lo; u(); c(); m(); p(); d(); l(); const qo = rt(qr()); u(); c(); m(); p(); d(); l(); const L = class extends Error {
  constructor(e) {
    super(`${e}
Read more at https://pris.ly/d/client-constructor`), this.name = 'PrismaClientConstructorValidationError'
  }

  get [Symbol.toStringTag]() { return 'PrismaClientConstructorValidationError' }
}; te(L, 'PrismaClientConstructorValidationError'); const Do = ['datasources', 'datasourceUrl', 'errorFormat', 'adapter', 'log', 'transactionOptions', 'omit', '__internal']; const Fo = ['pretty', 'colorless', 'minimal']; const No = ['info', 'query', 'warn', 'error']; const _l = { datasources: (t, { datasourceNames: e }) => {
  if (t) {
    if (typeof t != 'object' || Array.isArray(t))
      throw new L(`Invalid value ${JSON.stringify(t)} for "datasources" provided to PrismaClient constructor`); for (const [r, n] of Object.entries(t)) {
      if (!e.includes(r)) { const i = tt(r, e) || ` Available datasources: ${e.join(', ')}`; throw new L(`Unknown datasource ${r} provided to PrismaClient constructor.${i}`) } if (typeof n != 'object' || Array.isArray(n)) {
        throw new L(`Invalid value ${JSON.stringify(t)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`)
      } if (n && typeof n == 'object') {
        for (const [i, o] of Object.entries(n)) {
          if (i !== 'url') {
            throw new L(`Invalid value ${JSON.stringify(t)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`)
          } if (typeof o != 'string') {
            throw new L(`Invalid value ${JSON.stringify(o)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`)
          }
        }
      }
    }
  }
}, adapter: (t, e) => {
  if (!t && Ue(e.generator) === 'client')
    throw new L('Using engine type "client" requires a driver adapter to be provided to PrismaClient constructor.'); if (t === null)
    return; if (t === void 0)
    throw new L('"adapter" property must not be undefined, use null to conditionally disable driver adapters.'); if (!pr(e).includes('driverAdapters'))
    throw new L('"adapter" property can only be provided to PrismaClient constructor when "driverAdapters" preview feature is enabled.'); if (Ue(e.generator) === 'binary')
    throw new L('Cannot use a driver adapter with the "binary" Query Engine. Please use the "library" Query Engine.')
}, datasourceUrl: (t) => {
  if (typeof t < 'u' && typeof t != 'string') {
    throw new L(`Invalid value ${JSON.stringify(t)} for "datasourceUrl" provided to PrismaClient constructor.
Expected string or undefined.`)
  }
}, errorFormat: (t) => {
  if (t) {
    if (typeof t != 'string')
      throw new L(`Invalid value ${JSON.stringify(t)} for "errorFormat" provided to PrismaClient constructor.`); if (!Fo.includes(t)) { const e = tt(t, Fo); throw new L(`Invalid errorFormat ${t} provided to PrismaClient constructor.${e}`) }
  }
}, log: (t) => {
  if (!t)
    return; if (!Array.isArray(t))
    throw new L(`Invalid value ${JSON.stringify(t)} for "log" provided to PrismaClient constructor.`); function e(r) { if (typeof r == 'string' && !No.includes(r)) { const n = tt(r, No); throw new L(`Invalid log level "${r}" provided to PrismaClient constructor.${n}`) } } for (const r of t) {
    e(r); const n = { level: e, emit: (i) => { const o = ['stdout', 'event']; if (!o.includes(i)) { const s = tt(i, o); throw new L(`Invalid value ${JSON.stringify(i)} for "emit" in logLevel provided to PrismaClient constructor.${s}`) } } }; if (r && typeof r == 'object') {
      for (const [i, o] of Object.entries(r)) {
        if (n[i])
          n[i](o); else throw new L(`Invalid property ${i} for "log" provided to PrismaClient constructor`)
      }
    }
  }
}, transactionOptions: (t) => {
  if (!t)
    return; const e = t.maxWait; if (e != null && e <= 0)
    throw new L(`Invalid value ${e} for maxWait in "transactionOptions" provided to PrismaClient constructor. maxWait needs to be greater than 0`); const r = t.timeout; if (r != null && r <= 0)
    throw new L(`Invalid value ${r} for timeout in "transactionOptions" provided to PrismaClient constructor. timeout needs to be greater than 0`)
}, omit: (t, e) => {
  if (typeof t != 'object')
    throw new L('"omit" option is expected to be an object.'); if (t === null)
    throw new L('"omit" option can not be `null`'); const r = []; for (const [n, i] of Object.entries(t)) { const o = Fl(n, e.runtimeDataModel); if (!o) { r.push({ kind: 'UnknownModel', modelKey: n }); continue } for (const [s, a] of Object.entries(i)) { const f = o.fields.find(g => g.name === s); if (!f) { r.push({ kind: 'UnknownField', modelKey: n, fieldName: s }); continue } if (f.relationName) { r.push({ kind: 'RelationInOmit', modelKey: n, fieldName: s }); continue } typeof a != 'boolean' && r.push({ kind: 'InvalidFieldValue', modelKey: n, fieldName: s }) } } if (r.length > 0)
    throw new L(Nl(t, r))
}, __internal: (t) => {
  if (!t)
    return; const e = ['debug', 'engine', 'configOverride']; if (typeof t != 'object')
    throw new L(`Invalid value ${JSON.stringify(t)} for "__internal" to PrismaClient constructor`); for (const [r] of Object.entries(t)) {
    if (!e.includes(r)) { const n = tt(r, e); throw new L(`Invalid property ${JSON.stringify(r)} for "__internal" provided to PrismaClient constructor.${n}`) }
  }
} }; function Bo(t, e) {
  for (const [r, n] of Object.entries(t)) { if (!Do.includes(r)) { const i = tt(r, Do); throw new L(`Unknown property ${r} provided to PrismaClient constructor.${i}`) }_l[r](n, e) } if (t.datasourceUrl && t.datasources)
    throw new L('Can not use "datasourceUrl" and "datasources" options at the same time. Pick one of them')
} function tt(t, e) {
  if (e.length === 0 || typeof t != 'string')
    return ''; const r = Dl(t, e); return r ? ` Did you mean "${r}"?` : ''
} function Dl(t, e) {
  if (e.length === 0)
    return null; const r = e.map(i => ({ value: i, distance: (0, qo.default)(t, i) })); r.sort((i, o) => i.distance < o.distance ? -1 : 1); const n = r[0]; return n.distance < 3 ? n.value : null
} function Fl(t, e) { return Uo(e.models, t) ?? Uo(e.types, t) } function Uo(t, e) {
  const r = Object.keys(t).find(n => Ve(n) === e); if (r)
    return t[r]
} function Nl(t, e) {
  const r = He(t); for (const o of e) switch (o.kind) { case 'UnknownModel':r.arguments.getField(o.modelKey)?.markAsError(), r.addErrorMessage(() => `Unknown model name: ${o.modelKey}.`); break; case 'UnknownField':r.arguments.getDeepField([o.modelKey, o.fieldName])?.markAsError(), r.addErrorMessage(() => `Model "${o.modelKey}" does not have a field named "${o.fieldName}".`); break; case 'RelationInOmit':r.arguments.getDeepField([o.modelKey, o.fieldName])?.markAsError(), r.addErrorMessage(() => 'Relations are already excluded by default and can not be specified in "omit".'); break; case 'InvalidFieldValue':r.arguments.getDeepFieldValue([o.modelKey, o.fieldName])?.markAsError(), r.addErrorMessage(() => 'Omit field option value must be a boolean.'); break } const { message: n, args: i } = zt(r, 'colorless'); return `Error validating "omit" option:

${i}

${n}`
}u(); c(); m(); p(); d(); l(); function Vo(t) { return t.length === 0 ? Promise.resolve([]) : new Promise((e, r) => { const n = Array.from({ length: t.length }); let i = null; let o = !1; let s = 0; const a = () => { o || (s++, s === t.length && (o = !0, i ? r(i) : e(n))) }; const f = (g) => { o || (o = !0, r(g)) }; for (let g = 0; g < t.length; g++)t[g].then((T) => { n[g] = T, a() }, (T) => { if (!fr(T)) { f(T); return }T.batchRequestIdx === g ? f(T) : (i || (i = T), a()) }) }) } const Re = ee('prisma:client'); typeof globalThis == 'object' && (globalThis.NODE_CLIENT = !0); const Ul = { requestArgsToMiddlewareArgs: t => t, middlewareArgsToRequestArgs: t => t }; const ql = Symbol.for('prisma.client.transaction.id'); const Bl = { id: 0, nextId() { return ++this.id } }; function Qo(t) {
  class e {
    _originalClient = this; _runtimeDataModel; _requestHandler; _connectionPromise; _disconnectionPromise; _engineConfig; _accelerateEngineConfig; _clientVersion; _errorFormat; _tracingHelper; _middlewares = new dr(); _previewFeatures; _activeProvider; _globalOmit; _extensions; _engine; _appliedParent; _createPrismaPromise = sn(); constructor(n) {
      t = n?.__internal?.configOverride?.(t) ?? t, co(t), n && Bo(n, t); const i = new Ut().on('error', () => {}); this._extensions = ze.empty(), this._previewFeatures = pr(t), this._clientVersion = t.clientVersion ?? _o, this._activeProvider = t.activeProvider, this._globalOmit = n?.omit, this._tracingHelper = Ro(); const o = { rootEnvPath: t.relativeEnvPaths.rootEnvPath && ot.resolve(t.dirname, t.relativeEnvPaths.rootEnvPath), schemaEnvPath: t.relativeEnvPaths.schemaEnvPath && ot.resolve(t.dirname, t.relativeEnvPaths.schemaEnvPath) }; let s; if (n?.adapter) {
        s = Sr(n.adapter); const f = t.activeProvider === 'postgresql' ? 'postgres' : t.activeProvider; if (s.provider !== f)
          throw new M(`The Driver Adapter \`${s.adapterName}\`, based on \`${s.provider}\`, is not compatible with the provider \`${f}\` specified in the Prisma schema.`, this._clientVersion); if (n.datasources || n.datasourceUrl !== void 0)
          throw new M('Custom datasource configuration is not compatible with Prisma Driver Adapters. Please define the database connection string directly in the Driver Adapter configuration.', this._clientVersion)
      } const a = t.injectableEdgeEnv?.(); try {
        const f = n ?? {}; const g = f.__internal ?? {}; const T = g.debug === !0; T && ee.enable('prisma:client'); let C = ot.resolve(t.dirname, t.relativePath); Un.existsSync(C) || (C = t.dirname), Re('dirname', t.dirname), Re('relativePath', t.relativePath), Re('cwd', C); const k = g.engine || {}; if (f.errorFormat ? this._errorFormat = f.errorFormat : h.env.NODE_ENV === 'production' ? this._errorFormat = 'minimal' : h.env.NO_COLOR ? this._errorFormat = 'colorless' : this._errorFormat = 'colorless', this._runtimeDataModel = t.runtimeDataModel, this._engineConfig = { cwd: C, dirname: t.dirname, enableDebugLogs: T, allowTriggerPanic: k.allowTriggerPanic, datamodelPath: ot.join(t.dirname, t.filename ?? 'schema.prisma'), prismaPath: k.binaryPath ?? void 0, engineEndpoint: k.endpoint, generator: t.generator, showColors: this._errorFormat === 'pretty', logLevel: f.log && So(f.log), logQueries: f.log && !!(typeof f.log == 'string' ? f.log === 'query' : f.log.find(A => typeof A == 'string' ? A === 'query' : A.level === 'query')), env: a?.parsed ?? {}, flags: [], engineWasm: t.engineWasm, compilerWasm: t.compilerWasm, clientVersion: t.clientVersion, engineVersion: t.engineVersion, previewFeatures: this._previewFeatures, activeProvider: t.activeProvider, inlineSchema: t.inlineSchema, overrideDatasources: mo(f, t.datasourceNames), inlineDatasources: t.inlineDatasources, inlineSchemaHash: t.inlineSchemaHash, tracingHelper: this._tracingHelper, transactionOptions: { maxWait: f.transactionOptions?.maxWait ?? 2e3, timeout: f.transactionOptions?.timeout ?? 5e3, isolationLevel: f.transactionOptions?.isolationLevel }, logEmitter: i, isBundled: t.isBundled, adapter: s }, this._accelerateEngineConfig = { ...this._engineConfig, accelerateUtils: { resolveDatasourceUrl: cr, getBatchRequestPayload: sr, prismaGraphQLToJSError: ar, PrismaClientUnknownRequestError: j, PrismaClientInitializationError: M, PrismaClientKnownRequestError: Y, debug: ee('prisma:client:accelerateEngine'), engineVersion: jo.version, clientVersion: t.clientVersion } }, Re('clientVersion', t.clientVersion), this._engine = go(t, this._engineConfig), this._requestHandler = new yr(this, i), f.log) {
          for (const A of f.log) { const O = typeof A == 'string' ? A : A.emit === 'stdout' ? A.level : null; O && this.$on(O, (S) => { at.log(`${at.tags[O] ?? ''}`, S.message || S.query) }) }
        }
      }
      catch (f) { throw f.clientVersion = this._clientVersion, f } return this._appliedParent = Pt(this)
    }

    get [Symbol.toStringTag]() { return 'PrismaClient' }$use(n) { this._middlewares.use(n) }$on(n, i) { return n === 'beforeExit' ? this._engine.onBeforeExit(i) : n && this._engineConfig.logEmitter.on(n, i), this }$connect() {
      try { return this._engine.start() }
      catch (n) { throw n.clientVersion = this._clientVersion, n }
    }

    async $disconnect() {
      try { await this._engine.stop() }
      catch (n) { throw n.clientVersion = this._clientVersion, n }
      finally { Fn() }
    }

    $executeRawInternal(n, i, o, s) { const a = this._activeProvider; return this._request({ action: 'executeRaw', args: o, transaction: n, clientMethod: i, argsMapper: on({ clientMethod: i, activeProvider: a }), callsite: Te(this._errorFormat), dataPath: [], middlewareArgsMapper: s }) }$executeRaw(n, ...i) { return this._createPrismaPromise((o) => { if (n.raw !== void 0 || n.sql !== void 0) { const [s, a] = $o(n, i); return nn(this._activeProvider, s.text, s.values, Array.isArray(n) ? 'prisma.$executeRaw`<SQL>`' : 'prisma.$executeRaw(sql`<SQL>`)'), this.$executeRawInternal(o, '$executeRaw', s, a) } throw new G('`$executeRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${\'user@email.com\'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#executeraw\n', { clientVersion: this._clientVersion }) }) }$executeRawUnsafe(n, ...i) { return this._createPrismaPromise(o => (nn(this._activeProvider, n, i, 'prisma.$executeRawUnsafe(<SQL>, [...values])'), this.$executeRawInternal(o, '$executeRawUnsafe', [n, ...i]))) }$runCommandRaw(n) {
      if (t.activeProvider !== 'mongodb')
        throw new G(`The ${t.activeProvider} provider does not support $runCommandRaw. Use the mongodb provider.`, { clientVersion: this._clientVersion }); return this._createPrismaPromise(i => this._request({ args: n, clientMethod: '$runCommandRaw', dataPath: [], action: 'runCommandRaw', argsMapper: ho, callsite: Te(this._errorFormat), transaction: i }))
    }

    async $queryRawInternal(n, i, o, s) { const a = this._activeProvider; return this._request({ action: 'queryRaw', args: o, transaction: n, clientMethod: i, argsMapper: on({ clientMethod: i, activeProvider: a }), callsite: Te(this._errorFormat), dataPath: [], middlewareArgsMapper: s }) }$queryRaw(n, ...i) {
      return this._createPrismaPromise((o) => {
        if (n.raw !== void 0 || n.sql !== void 0)
          return this.$queryRawInternal(o, '$queryRaw', ...$o(n, i)); throw new G('`$queryRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${\'user@email.com\'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#queryraw\n', { clientVersion: this._clientVersion })
      })
    }

    $queryRawTyped(n) {
      return this._createPrismaPromise((i) => {
        if (!this._hasPreviewFlag('typedSql'))
          throw new G('`typedSql` preview feature must be enabled in order to access $queryRawTyped API', { clientVersion: this._clientVersion }); return this.$queryRawInternal(i, '$queryRawTyped', n)
      })
    }

    $queryRawUnsafe(n, ...i) { return this._createPrismaPromise(o => this.$queryRawInternal(o, '$queryRawUnsafe', [n, ...i])) }_transactionWithArray({ promises: n, options: i }) {
      const o = Bl.nextId(); const s = Ao(n.length); const a = n.map((f, g) => {
        if (f?.[Symbol.toStringTag] !== 'PrismaPromise')
          throw new Error('All elements of the array need to be Prisma Client promises. Hint: Please make sure you are not awaiting the Prisma client calls you intended to pass in the $transaction function.'); const T = i?.isolationLevel ?? this._engineConfig.transactionOptions.isolationLevel; const C = { kind: 'batch', id: o, index: g, isolationLevel: T, lock: s }; return f.requestTransaction?.(C) ?? f
      }); return Vo(a)
    }

    async _transactionWithCallback({ callback: n, options: i }) {
      const o = { traceparent: this._tracingHelper.getTraceParent() }; const s = { maxWait: i?.maxWait ?? this._engineConfig.transactionOptions.maxWait, timeout: i?.timeout ?? this._engineConfig.transactionOptions.timeout, isolationLevel: i?.isolationLevel ?? this._engineConfig.transactionOptions.isolationLevel }; const a = await this._engine.transaction('start', o, s); let f; try { const g = { kind: 'itx', ...a }; f = await n(this._createItxClient(g)), await this._engine.transaction('commit', o, a) }
      catch (g) { throw await this._engine.transaction('rollback', o, a).catch(() => {}), g } return f
    }

    _createItxClient(n) { return ae(Pt(ae(Hi(this), [W('_appliedParent', () => this._appliedParent._createItxClient(n)), W('_createPrismaPromise', () => sn(n)), W(ql, () => n.id)])), [Xe(eo)]) }$transaction(n, i) { let o; typeof n == 'function' ? this._engineConfig.adapter?.adapterName === '@prisma/adapter-d1' ? o = () => { throw new Error('Cloudflare D1 does not support interactive transactions. We recommend you to refactor your queries with that limitation in mind, and use batch transactions with `prisma.$transactions([])` where applicable.') } : o = () => this._transactionWithCallback({ callback: n, options: i }) : o = () => this._transactionWithArray({ promises: n, options: i }); const s = { name: 'transaction', attributes: { method: '$transaction' } }; return this._tracingHelper.runInChildSpan(s, o) }_request(n) {
      n.otelParentCtx = this._tracingHelper.getActiveContext(); const i = n.middlewareArgsMapper ?? Ul; const o = { args: i.requestArgsToMiddlewareArgs(n.args), dataPath: n.dataPath, runInTransaction: !!n.transaction, action: n.action, model: n.model }; const s = { middleware: { name: 'middleware', middleware: !0, attributes: { method: '$use' }, active: !1 }, operation: { name: 'operation', attributes: { method: o.action, model: o.model, name: o.model ? `${o.model}.${o.action}` : o.action } } }; let a = -1; const f = async (g) => {
        const T = this._middlewares.get(++a); if (T)
          return this._tracingHelper.runInChildSpan(s.middleware, I => T(g, oe => (I?.end(), f(oe)))); const { runInTransaction: C, args: k, ...A } = g; const O = { ...n, ...A }; k && (O.args = i.middlewareArgsToRequestArgs(k)), n.transaction !== void 0 && C === !1 && delete O.transaction; const S = await io(this, O); return O.model ? Zi({ result: S, modelName: O.model, args: O.args, extensions: this._extensions, runtimeDataModel: this._runtimeDataModel, globalOmit: this._globalOmit }) : S
      }; return this._tracingHelper.runInChildSpan(s.operation, () => f(o))
    }

    async _executeRequest({ args: n, clientMethod: i, dataPath: o, callsite: s, action: a, model: f, argsMapper: g, transaction: T, unpacker: C, otelParentCtx: k, customDataProxyFetch: A }) {
      try {
        n = g ? g(n) : n; const O = { name: 'serialize' }; const S = this._tracingHelper.runInChildSpan(O, () => tr({ modelName: f, runtimeDataModel: this._runtimeDataModel, action: a, args: n, clientMethod: i, callsite: s, extensions: this._extensions, errorFormat: this._errorFormat, clientVersion: this._clientVersion, previewFeatures: this._previewFeatures, globalOmit: this._globalOmit })); return ee.enabled('prisma:client') && (Re('Prisma Client call:'), Re(`prisma.${i}(${qi(n)})`), Re('Generated request:'), Re(`${JSON.stringify(S, null, 2)}
`)), T?.kind === 'batch' && await T.lock, this._requestHandler.request({ protocolQuery: S, modelName: f, action: a, clientMethod: i, dataPath: o, callsite: s, args: n, extensions: this._extensions, transaction: T, unpacker: C, otelParentCtx: k, otelChildCtx: this._tracingHelper.getActiveContext(), globalOmit: this._globalOmit, customDataProxyFetch: A })
      }
      catch (O) { throw O.clientVersion = this._clientVersion, O }
    }

    $metrics = new Ye(this); _hasPreviewFlag(n) { return !!this._engineConfig.previewFeatures?.includes(n) }$applyPendingMigrations() { return this._engine.applyPendingMigrations() }$extends = zi
  } return e
} function $o(t, e) { return Vl(t) ? [new X(t, e), vo] : [t, To] } function Vl(t) { return Array.isArray(t) && Array.isArray(t.raw) }u(); c(); m(); p(); d(); l(); const $l = new Set(['toJSON', '$$typeof', 'asymmetricMatch', Symbol.iterator, Symbol.toStringTag, Symbol.isConcatSpreadable, Symbol.toPrimitive]); function Jo(t) {
  return new Proxy(t, { get(e, r) {
    if (r in e)
      return e[r]; if (!$l.has(r))
      throw new TypeError(`Invalid enum value: ${String(r)}`)
  } })
}u(); c(); m(); p(); d(); l(); l(); 0 && (module.exports = { Debug, Decimal, Extensions, MetricsClient, PrismaClientInitializationError, PrismaClientKnownRequestError, PrismaClientRustPanicError, PrismaClientUnknownRequestError, PrismaClientValidationError, Public, Sql, createParam, defineDmmfProperty, deserializeJsonResponse, deserializeRawResult, dmmfToRuntimeDataModel, empty, getPrismaClient, getRuntime, join, makeStrictEnum, makeTypedQueryFactory, objectEnumValues, raw, serializeJsonQuery, skip, sqltag, warnEnvConflicts, warnOnce })
// # sourceMappingURL=wasm.js.map
