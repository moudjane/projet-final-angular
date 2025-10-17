'use strict'; const mu = Object.create; const Jt = Object.defineProperty; const fu = Object.getOwnPropertyDescriptor; const gu = Object.getOwnPropertyNames; const hu = Object.getPrototypeOf; const yu = Object.prototype.hasOwnProperty; const Eu = (e, t, r) => t in e ? Jt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r; const K = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports); function Wt(e, t) { for (const r in t)Jt(e, r, { get: t[r], enumerable: !0 }) } function Ao(e, t, r, n) {
  if (t && typeof t == 'object' || typeof t == 'function') {
    for (const i of gu(t))!yu.call(e, i) && i !== r && Jt(e, i, { get: () => t[i], enumerable: !(n = fu(t, i)) || n.enumerable })
  } return e
} const D = (e, t, r) => (r = e != null ? mu(hu(e)) : {}, Ao(t || !e || !e.__esModule ? Jt(r, 'default', { value: e, enumerable: !0 }) : r, e)); const bu = e => Ao(Jt({}, '__esModule', { value: !0 }), e); const d = (e, t, r) => Eu(e, typeof t != 'symbol' ? `${t}` : t, r); const Zo = K((Kf, pi) => {
  'use strict'; const v = pi.exports; pi.exports.default = v; const N = '\x1B['; const Zt = '\x1B]'; const gt = '\x07'; const Kr = ';'; const zo = process.env.TERM_PROGRAM === 'Apple_Terminal'; v.cursorTo = (e, t) => {
    if (typeof e != 'number')
      throw new TypeError('The `x` argument is required'); return typeof t != 'number' ? `${N + (e + 1)}G` : `${N + (t + 1)};${e + 1}H`
  }; v.cursorMove = (e, t) => {
    if (typeof e != 'number')
      throw new TypeError('The `x` argument is required'); let r = ''; return e < 0 ? r += `${N + -e}D` : e > 0 && (r += `${N + e}C`), t < 0 ? r += `${N + -t}A` : t > 0 && (r += `${N + t}B`), r
  }; v.cursorUp = (e = 1) => `${N + e}A`; v.cursorDown = (e = 1) => `${N + e}B`; v.cursorForward = (e = 1) => `${N + e}C`; v.cursorBackward = (e = 1) => `${N + e}D`; v.cursorLeft = `${N}G`; v.cursorSavePosition = zo ? '\x1B7' : `${N}s`; v.cursorRestorePosition = zo ? '\x1B8' : `${N}u`; v.cursorGetPosition = `${N}6n`; v.cursorNextLine = `${N}E`; v.cursorPrevLine = `${N}F`; v.cursorHide = `${N}?25l`; v.cursorShow = `${N}?25h`; v.eraseLines = (e) => { let t = ''; for (let r = 0; r < e; r++)t += v.eraseLine + (r < e - 1 ? v.cursorUp() : ''); return e && (t += v.cursorLeft), t }; v.eraseEndLine = `${N}K`; v.eraseStartLine = `${N}1K`; v.eraseLine = `${N}2K`; v.eraseDown = `${N}J`; v.eraseUp = `${N}1J`; v.eraseScreen = `${N}2J`; v.scrollUp = `${N}S`; v.scrollDown = `${N}T`; v.clearScreen = '\x1Bc'; v.clearTerminal = process.platform === 'win32' ? `${v.eraseScreen}${N}0f` : `${v.eraseScreen}${N}3J${N}H`; v.beep = gt; v.link = (e, t) => [Zt, '8', Kr, Kr, t, gt, e, Zt, '8', Kr, Kr, gt].join(''); v.image = (e, t = {}) => { let r = `${Zt}1337;File=inline=1`; return t.width && (r += `;width=${t.width}`), t.height && (r += `;height=${t.height}`), t.preserveAspectRatio === !1 && (r += ';preserveAspectRatio=0'), `${r}:${e.toString('base64')}${gt}` }; v.iTerm = { setCwd: (e = process.cwd()) => `${Zt}50;CurrentDir=${e}${gt}`, annotation: (e, t = {}) => {
    let r = `${Zt}1337;`; const n = typeof t.x < 'u'; const i = typeof t.y < 'u'; if ((n || i) && !(n && i && typeof t.length < 'u'))
      throw new Error('`x`, `y` and `length` must be defined when `x` or `y` is defined'); return e = e.replace(/\|/g, ''), r += t.isHidden ? 'AddHiddenAnnotation=' : 'AddAnnotation=', t.length > 0 ? r += (n ? [e, t.length, t.x, t.y] : [t.length, e]).join('|') : r += e, r + gt
  } }
}); const di = K((Yf, Xo) => { 'use strict'; Xo.exports = (e, t = process.argv) => { const r = e.startsWith('-') ? '' : e.length === 1 ? '-' : '--'; const n = t.indexOf(r + e); const i = t.indexOf('--'); return n !== -1 && (i === -1 || n < i) } }); const rs = K((zf, ts) => {
  'use strict'; const ac = require('node:os'); const es = require('node:tty'); const he = di(); const { env: W } = process; let We; he('no-color') || he('no-colors') || he('color=false') || he('color=never') ? We = 0 : (he('color') || he('colors') || he('color=true') || he('color=always')) && (We = 1); 'FORCE_COLOR' in W && (W.FORCE_COLOR === 'true' ? We = 1 : W.FORCE_COLOR === 'false' ? We = 0 : We = W.FORCE_COLOR.length === 0 ? 1 : Math.min(Number.parseInt(W.FORCE_COLOR, 10), 3)); function mi(e) { return e === 0 ? !1 : { level: e, hasBasic: !0, has256: e >= 2, has16m: e >= 3 } } function fi(e, t) {
    if (We === 0)
      return 0; if (he('color=16m') || he('color=full') || he('color=truecolor'))
      return 3; if (he('color=256'))
      return 2; if (e && !t && We === void 0)
      return 0; const r = We || 0; if (W.TERM === 'dumb')
      return r; if (process.platform === 'win32') { const n = ac.release().split('.'); return Number(n[0]) >= 10 && Number(n[2]) >= 10586 ? Number(n[2]) >= 14931 ? 3 : 2 : 1 } if ('CI' in W)
      return ['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI', 'GITHUB_ACTIONS', 'BUILDKITE'].some(n => n in W) || W.CI_NAME === 'codeship' ? 1 : r; if ('TEAMCITY_VERSION' in W)
      return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(W.TEAMCITY_VERSION) ? 1 : 0; if (W.COLORTERM === 'truecolor')
      return 3; if ('TERM_PROGRAM' in W) { const n = Number.parseInt((W.TERM_PROGRAM_VERSION || '').split('.')[0], 10); switch (W.TERM_PROGRAM) { case 'iTerm.app':return n >= 3 ? 3 : 2; case 'Apple_Terminal':return 2 } } return /-256(color)?$/i.test(W.TERM) ? 2 : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(W.TERM) || 'COLORTERM' in W ? 1 : r
  } function lc(e) { const t = fi(e, e && e.isTTY); return mi(t) }ts.exports = { supportsColor: lc, stdout: mi(fi(!0, es.isatty(1))), stderr: mi(fi(!0, es.isatty(2))) }
}); const os = K((Zf, is) => {
  'use strict'; const uc = rs(); const ht = di(); function ns(e) { if (/^\d{3,4}$/.test(e)) { const r = /(\d{1,2})(\d{2})/.exec(e); return { major: 0, minor: Number.parseInt(r[1], 10), patch: Number.parseInt(r[2], 10) } } const t = (e || '').split('.').map(r => Number.parseInt(r, 10)); return { major: t[0], minor: t[1], patch: t[2] } } function gi(e) {
    const { env: t } = process; if ('FORCE_HYPERLINK' in t)
      return !(t.FORCE_HYPERLINK.length > 0 && Number.parseInt(t.FORCE_HYPERLINK, 10) === 0); if (ht('no-hyperlink') || ht('no-hyperlinks') || ht('hyperlink=false') || ht('hyperlink=never'))
      return !1; if (ht('hyperlink=true') || ht('hyperlink=always') || 'NETLIFY' in t)
      return !0; if (!uc.supportsColor(e) || e && !e.isTTY || process.platform === 'win32' || 'CI' in t || 'TEAMCITY_VERSION' in t)
      return !1; if ('TERM_PROGRAM' in t) { const r = ns(t.TERM_PROGRAM_VERSION); switch (t.TERM_PROGRAM) { case 'iTerm.app':return r.major === 3 ? r.minor >= 1 : r.major > 3; case 'WezTerm':return r.major >= 20200620; case 'vscode':return r.major > 1 || r.major === 1 && r.minor >= 72 } } if ('VTE_VERSION' in t) {
      if (t.VTE_VERSION === '0.50.0')
        return !1; const r = ns(t.VTE_VERSION); return r.major > 0 || r.minor >= 50
    } return !1
  }is.exports = { supportsHyperlink: gi, stdout: gi(process.stdout), stderr: gi(process.stderr) }
}); const as = K((Xf, Xt) => { 'use strict'; const cc = Zo(); const hi = os(); const ss = (e, t, { target: r = 'stdout', ...n } = {}) => hi[r] ? cc.link(e, t) : n.fallback === !1 ? e : typeof n.fallback == 'function' ? n.fallback(e, t) : `${e} (\u200B${t}\u200B)`; Xt.exports = (e, t, r = {}) => ss(e, t, r); Xt.exports.stderr = (e, t, r = {}) => ss(e, t, { target: 'stderr', ...r }); Xt.exports.isSupported = hi.stdout; Xt.exports.stderr.isSupported = hi.stderr }); const us = K((ug, pc) => { pc.exports = { name: '@prisma/internals', version: '6.5.0', description: 'This package is intended for Prisma\'s internal use', main: 'dist/index.js', types: 'dist/index.d.ts', repository: { type: 'git', url: 'https://github.com/prisma/prisma.git', directory: 'packages/internals' }, homepage: 'https://www.prisma.io', author: 'Tim Suchanek <suchanek@prisma.io>', bugs: 'https://github.com/prisma/prisma/issues', license: 'Apache-2.0', scripts: { dev: 'DEV=true tsx helpers/build.ts', build: 'tsx helpers/build.ts', test: 'dotenv -e ../../.db.env -- jest --silent', prepublishOnly: 'pnpm run build' }, files: ['README.md', 'dist', '!**/libquery_engine*', '!dist/get-generators/engines/*', 'scripts'], devDependencies: { '@antfu/ni': '0.21.12', '@babel/helper-validator-identifier': '7.25.9', '@opentelemetry/api': '1.9.0', '@swc/core': '1.11.5', '@swc/jest': '0.2.37', '@types/babel__helper-validator-identifier': '7.15.2', '@types/jest': '29.5.14', '@types/node': '18.19.76', '@types/resolve': '1.20.6', 'archiver': '6.0.2', 'checkpoint-client': '1.1.33', 'cli-truncate': '4.0.0', 'dotenv': '16.4.7', 'esbuild': '0.24.2', 'escape-string-regexp': '4.0.0', 'execa': '5.1.1', 'fast-glob': '3.3.3', 'find-up': '7.0.0', 'fp-ts': '2.16.9', 'fs-extra': '11.3.0', 'fs-jetpack': '5.1.0', 'global-dirs': '4.0.0', 'globby': '11.1.0', 'identifier-regex': '1.0.0', 'indent-string': '4.0.0', 'is-windows': '1.0.2', 'is-wsl': '3.1.0', 'jest': '29.7.0', 'jest-junit': '16.0.0', 'kleur': '4.1.5', 'mock-stdin': '1.0.0', 'new-github-issue-url': '0.2.1', 'node-fetch': '3.3.2', 'npm-packlist': '5.1.3', 'open': '7.4.2', 'p-map': '4.0.0', 'read-package-up': '11.0.0', 'resolve': '1.22.10', 'string-width': '4.2.3', 'strip-ansi': '6.0.1', 'strip-indent': '3.0.0', 'temp-dir': '2.0.0', 'tempy': '1.0.1', 'terminal-link': '2.1.1', 'tmp': '0.2.3', 'ts-node': '10.9.2', 'ts-pattern': '5.6.2', 'ts-toolbelt': '9.6.0', 'typescript': '5.4.5', 'yarn': '1.22.22' }, dependencies: { '@prisma/config': 'workspace:*', '@prisma/debug': 'workspace:*', '@prisma/engines': 'workspace:*', '@prisma/fetch-engine': 'workspace:*', '@prisma/generator-helper': 'workspace:*', '@prisma/get-platform': 'workspace:*', '@prisma/prisma-schema-wasm': '6.5.0-73.173f8d54f8d52e692c7e27e72a88314ec7aeff60', '@prisma/schema-files-loader': 'workspace:*', 'arg': '5.0.2', 'prompts': '2.4.2' }, peerDependencies: { typescript: '>=5.1.0' }, peerDependenciesMeta: { typescript: { optional: !0 } }, sideEffects: !1 } }); const bi = K((pg, mc) => { mc.exports = { name: '@prisma/engines-version', version: '6.5.0-73.173f8d54f8d52e692c7e27e72a88314ec7aeff60', main: 'index.js', types: 'index.d.ts', license: 'Apache-2.0', author: 'Tim Suchanek <suchanek@prisma.io>', prisma: { enginesVersion: '173f8d54f8d52e692c7e27e72a88314ec7aeff60' }, repository: { type: 'git', url: 'https://github.com/prisma/engines-wrapper.git', directory: 'packages/engines-version' }, devDependencies: { '@types/node': '18.19.76', 'typescript': '4.9.5' }, files: ['index.js', 'index.d.ts'], scripts: { build: 'tsc -d' } } }); const wi = K((Yr) => { 'use strict'; Object.defineProperty(Yr, '__esModule', { value: !0 }); Yr.enginesVersion = void 0; Yr.enginesVersion = bi().prisma.enginesVersion }); const ds = K((kg, hc) => { hc.exports = { name: 'dotenv', version: '16.4.7', description: 'Loads environment variables from .env file', main: 'lib/main.js', types: 'lib/main.d.ts', exports: { '.': { types: './lib/main.d.ts', require: './lib/main.js', default: './lib/main.js' }, './config': './config.js', './config.js': './config.js', './lib/env-options': './lib/env-options.js', './lib/env-options.js': './lib/env-options.js', './lib/cli-options': './lib/cli-options.js', './lib/cli-options.js': './lib/cli-options.js', './package.json': './package.json' }, scripts: { 'dts-check': 'tsc --project tests/types/tsconfig.json', 'lint': 'standard', 'pretest': 'npm run lint && npm run dts-check', 'test': 'tap run --allow-empty-coverage --disable-coverage --timeout=60000', 'test:coverage': 'tap run --show-full-coverage --timeout=60000 --coverage-report=lcov', 'prerelease': 'npm test', 'release': 'standard-version' }, repository: { type: 'git', url: 'git://github.com/motdotla/dotenv.git' }, funding: 'https://dotenvx.com', keywords: ['dotenv', 'env', '.env', 'environment', 'variables', 'config', 'settings'], readmeFilename: 'README.md', license: 'BSD-2-Clause', devDependencies: { '@types/node': '^18.11.3', 'decache': '^4.6.2', 'sinon': '^14.0.1', 'standard': '^17.0.0', 'standard-version': '^9.5.0', 'tap': '^19.2.0', 'typescript': '^4.8.4' }, engines: { node: '>=12' }, browser: { fs: !1 } } }); const hs = K((Og, Fe) => {
  'use strict'; const Ec = require('node:crypto'); const Ti = require('node:fs'); const yc = require('node:os'); const Ci = require('node:path'); const bc = ds(); const Ri = bc.version; const wc = /(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/gm; function xc(e) {
    const t = {}; let r = e.toString(); r = r.replace(/\r\n?/g, `
`); let n; for (;(n = wc.exec(r)) != null;) {
      const i = n[1]; let o = n[2] || ''; o = o.trim(); const s = o[0]; o = o.replace(/^(['"`])([\s\S]*)\1$/gm, '$2'), s === '"' && (o = o.replace(/\\n/g, `
`), o = o.replace(/\\r/g, '\r')), t[i] = o
    } return t
  } function Pc(e) {
    const t = gs(e); const r = G.configDotenv({ path: t }); if (!r.parsed) { const s = new Error(`MISSING_DATA: Cannot parse ${t} for an unknown reason`); throw s.code = 'MISSING_DATA', s } const n = fs(e).split(','); const i = n.length; let o; for (let s = 0; s < i; s++) {
      try { const a = n[s].trim(); const l = Cc(r, a); o = G.decrypt(l.ciphertext, l.key); break }
      catch (a) {
        if (s + 1 >= i)
          throw a
      }
    } return G.parse(o)
  } function vc(e) { console.log(`[dotenv@${Ri}][INFO] ${e}`) } function Tc(e) { console.log(`[dotenv@${Ri}][WARN] ${e}`) } function zr(e) { console.log(`[dotenv@${Ri}][DEBUG] ${e}`) } function fs(e) { return e && e.DOTENV_KEY && e.DOTENV_KEY.length > 0 ? e.DOTENV_KEY : process.env.DOTENV_KEY && process.env.DOTENV_KEY.length > 0 ? process.env.DOTENV_KEY : '' } function Cc(e, t) {
    let r; try { r = new URL(t) }
    catch (a) { if (a.code === 'ERR_INVALID_URL') { const l = new Error('INVALID_DOTENV_KEY: Wrong format. Must be in valid uri format like dotenv://:key_1234@dotenvx.com/vault/.env.vault?environment=development'); throw l.code = 'INVALID_DOTENV_KEY', l } throw a } const n = r.password; if (!n) { const a = new Error('INVALID_DOTENV_KEY: Missing key part'); throw a.code = 'INVALID_DOTENV_KEY', a } const i = r.searchParams.get('environment'); if (!i) { const a = new Error('INVALID_DOTENV_KEY: Missing environment part'); throw a.code = 'INVALID_DOTENV_KEY', a } const o = `DOTENV_VAULT_${i.toUpperCase()}`; const s = e.parsed[o]; if (!s) { const a = new Error(`NOT_FOUND_DOTENV_ENVIRONMENT: Cannot locate environment ${o} in your .env.vault file.`); throw a.code = 'NOT_FOUND_DOTENV_ENVIRONMENT', a } return { ciphertext: s, key: n }
  } function gs(e) {
    let t = null; if (e && e.path && e.path.length > 0) {
      if (Array.isArray(e.path)) {
        for (const r of e.path)Ti.existsSync(r) && (t = r.endsWith('.vault') ? r : `${r}.vault`)
      }
      else {
        t = e.path.endsWith('.vault') ? e.path : `${e.path}.vault`
      }
    }
    else {
      t = Ci.resolve(process.cwd(), '.env.vault')
    } return Ti.existsSync(t) ? t : null
  } function ms(e) { return e[0] === '~' ? Ci.join(yc.homedir(), e.slice(1)) : e } function Rc(e) { vc('Loading env from encrypted .env.vault'); const t = G._parseVault(e); let r = process.env; return e && e.processEnv != null && (r = e.processEnv), G.populate(r, t, e), { parsed: t } } function Sc(e) {
    const t = Ci.resolve(process.cwd(), '.env'); let r = 'utf8'; const n = !!(e && e.debug); e && e.encoding ? r = e.encoding : n && zr('No encoding is specified. UTF-8 is used by default'); let i = [t]; if (e && e.path) {
      if (!Array.isArray(e.path)) {
        i = [ms(e.path)]
      }
      else { i = []; for (const l of e.path)i.push(ms(l)) }
    } let o; const s = {}; for (const l of i) {
      try { const u = G.parse(Ti.readFileSync(l, { encoding: r })); G.populate(s, u, e) }
      catch (u) { n && zr(`Failed to load ${l} ${u.message}`), o = u }
    } let a = process.env; return e && e.processEnv != null && (a = e.processEnv), G.populate(a, s, e), o ? { parsed: s, error: o } : { parsed: s }
  } function Ac(e) {
    if (fs(e).length === 0)
      return G.configDotenv(e); const t = gs(e); return t ? G._configVault(e) : (Tc(`You set DOTENV_KEY but you are missing a .env.vault file at ${t}. Did you forget to build it?`), G.configDotenv(e))
  } function Ic(e, t) {
    const r = Buffer.from(t.slice(-64), 'hex'); let n = Buffer.from(e, 'base64'); const i = n.subarray(0, 12); const o = n.subarray(-16); n = n.subarray(12, -16); try { const s = Ec.createDecipheriv('aes-256-gcm', r, i); return s.setAuthTag(o), `${s.update(n)}${s.final()}` }
    catch (s) {
      const a = s instanceof RangeError; const l = s.message === 'Invalid key length'; const u = s.message === 'Unsupported state or unable to authenticate data'; if (a || l) { const c = new Error('INVALID_DOTENV_KEY: It must be 64 characters long (or more)'); throw c.code = 'INVALID_DOTENV_KEY', c }
      else if (u) { const c = new Error('DECRYPTION_FAILED: Please check your DOTENV_KEY'); throw c.code = 'DECRYPTION_FAILED', c }
      else {
        throw s
      }
    }
  } function kc(e, t, r = {}) { const n = !!(r && r.debug); const i = !!(r && r.override); if (typeof t != 'object') { const o = new Error('OBJECT_REQUIRED: Please check the processEnv argument being passed to populate'); throw o.code = 'OBJECT_REQUIRED', o } for (const o of Object.keys(t))Object.prototype.hasOwnProperty.call(e, o) ? (i === !0 && (e[o] = t[o]), n && zr(i === !0 ? `"${o}" is already defined and WAS overwritten` : `"${o}" is already defined and was NOT overwritten`)) : e[o] = t[o] } var G = { configDotenv: Sc, _configVault: Rc, _parseVault: Pc, config: Ac, decrypt: Ic, parse: xc, populate: kc }; Fe.exports.configDotenv = G.configDotenv; Fe.exports._configVault = G._configVault; Fe.exports._parseVault = G._parseVault; Fe.exports.config = G.config; Fe.exports.decrypt = G.decrypt; Fe.exports.parse = G.parse; Fe.exports.populate = G.populate; Fe.exports = G
}); const Ps = K(($g, xs) => { 'use strict'; xs.exports = (e) => { const t = e.match(/^[ \t]*(?=\S)/gm); return t ? t.reduce((r, n) => Math.min(r, n.length), 1 / 0) : 0 } }); const Ts = K((qg, vs) => {
  'use strict'; const Nc = Ps(); vs.exports = (e) => {
    const t = Nc(e); if (t === 0)
      return e; const r = new RegExp(`^[ \\t]{${t}}`, 'gm'); return e.replace(r, '')
  }
}); const Oi = K((Jg, Rs) => {
  'use strict'; Rs.exports = (e, t = 1, r) => {
    if (r = { indent: ' ', includeEmptyLines: !1, ...r }, typeof e != 'string')
      throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof e}\``); if (typeof t != 'number')
      throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof t}\``); if (typeof r.indent != 'string')
      throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof r.indent}\``); if (t === 0)
      return e; const n = r.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm; return e.replace(n, r.indent.repeat(t))
  }
}); const ks = K((Kg, Is) => { 'use strict'; Is.exports = ({ onlyFirst: e = !1 } = {}) => { const t = ['[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)', '(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))'].join('|'); return new RegExp(t, e ? void 0 : 'g') } }); const Li = K((Yg, Os) => { 'use strict'; const Bc = ks(); Os.exports = e => typeof e == 'string' ? e.replace(Bc(), '') : e }); const _s = K((Xg, tn) => {
  'use strict'; tn.exports = (e = {}) => {
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
  }; tn.exports.default = tn.exports
}); const Qi = K((hy, ea) => {
  'use strict'; ea.exports = (function () {
    function e(t, r, n, i, o) { return t < r || n < r ? t > n ? n + 1 : t + 1 : i === o ? r : r + 1 } return function (t, r) {
      if (t === r)
        return 0; if (t.length > r.length) { const n = t; t = r, r = n } for (var i = t.length, o = r.length; i > 0 && t.charCodeAt(i - 1) === r.charCodeAt(o - 1);)i--, o--; for (var s = 0; s < i && t.charCodeAt(s) === r.charCodeAt(s);)s++; if (i -= s, o -= s, i === 0 || o < 3)
        return o; let a = 0; let l; let u; let c; let p; let m; let g; let h; let y; let O; let T; let S; let R; const _ = []; for (l = 0; l < i; l++)_.push(l + 1), _.push(t.charCodeAt(s + l)); for (var I = _.length - 1; a < o - 3;) {
        for (O = r.charCodeAt(s + (u = a)), T = r.charCodeAt(s + (c = a + 1)), S = r.charCodeAt(s + (p = a + 2)), R = r.charCodeAt(s + (m = a + 3)), g = a += 4, l = 0; l < I; l += 2)h = _[l], y = _[l + 1], u = e(h, u, c, O, y), c = e(u, c, p, T, y), p = e(c, p, m, S, y), g = e(p, m, g, R, y), _[l] = g, m = p, p = c, c = u, u = h
      } for (;a < o;) {
        for (O = r.charCodeAt(s + (u = a)), g = ++a, l = 0; l < I; l += 2)h = _[l], _[l] = g = e(h, u, g, O, _[l + 1]), u = h
      } return g
    }
  }())
}); const pf = {}; Wt(pf, { Debug: () => ri, Decimal: () => Ce, Extensions: () => Kn, MetricsClient: () => Dt, PrismaClientInitializationError: () => C, PrismaClientKnownRequestError: () => te, PrismaClientRustPanicError: () => pe, PrismaClientUnknownRequestError: () => U, PrismaClientValidationError: () => re, Public: () => Yn, Sql: () => le, createParam: () => xa, defineDmmfProperty: () => Aa, deserializeJsonResponse: () => Pt, deserializeRawResult: () => Jn, dmmfToRuntimeDataModel: () => Sa, empty: () => Oa, getPrismaClient: () => cu, getRuntime: () => Fn, join: () => ka, makeStrictEnum: () => pu, makeTypedQueryFactory: () => Ia, objectEnumValues: () => Pn, raw: () => Xi, serializeJsonQuery: () => In, skip: () => An, sqltag: () => eo, warnEnvConflicts: () => du, warnOnce: () => or }); module.exports = bu(pf); var Kn = {}; Wt(Kn, { defineExtension: () => Io, getExtensionContext: () => ko }); function Io(e) { return typeof e == 'function' ? e : t => t.$extends(e) } function ko(e) { return e } var Yn = {}; Wt(Yn, { validator: () => Oo }); function Oo(...e) { return t => t } function zn(e) { return e.name === 'DriverAdapterError' && typeof e.cause == 'object' } function qr(e) { return { ok: !0, value: e, map(t) { return qr(t(e)) }, flatMap(t) { return t(e) } } } function nt(e) { return { ok: !1, error: e, map() { return nt(e) }, flatMap() { return nt(e) } } } const Zn = class {constructor() { d(this, 'registeredErrors', []) }consumeError(t) { return this.registeredErrors[t] }registerNewError(t) { let r = 0; for (;this.registeredErrors[r] !== void 0;)r++; return this.registeredErrors[r] = { error: t }, r }}; function Xn(e) { const t = new Zn(); const r = me(t, e.transactionContext.bind(e)); const n = { adapterName: e.adapterName, errorRegistry: t, queryRaw: me(t, e.queryRaw.bind(e)), executeRaw: me(t, e.executeRaw.bind(e)), executeScript: me(t, e.executeScript.bind(e)), dispose: me(t, e.dispose.bind(e)), provider: e.provider, transactionContext: async (...i) => (await r(...i)).map(s => wu(t, s)) }; return e.getConnectionInfo && (n.getConnectionInfo = Pu(t, e.getConnectionInfo.bind(e))), n } var wu = (e, t) => { const r = me(e, t.startTransaction.bind(t)); return { adapterName: t.adapterName, provider: t.provider, queryRaw: me(e, t.queryRaw.bind(t)), executeRaw: me(e, t.executeRaw.bind(t)), startTransaction: async (...n) => (await r(...n)).map(o => xu(e, o)) } }; var xu = (e, t) => ({ adapterName: t.adapterName, provider: t.provider, options: t.options, queryRaw: me(e, t.queryRaw.bind(t)), executeRaw: me(e, t.executeRaw.bind(t)), commit: me(e, t.commit.bind(t)), rollback: me(e, t.rollback.bind(t)) }); function me(e, t) {
  return async (...r) => {
    try { return qr(await t(...r)) }
    catch (n) {
      if (zn(n))
        return nt(n.cause); const i = e.registerNewError(n); return nt({ kind: 'GenericJs', id: i })
    }
  }
} function Pu(e, t) {
  return (...r) => {
    try { return qr(t(...r)) }
    catch (n) {
      if (zn(n))
        return nt(n.cause); const i = e.registerNewError(n); return nt({ kind: 'GenericJs', id: i })
    }
  }
} const Vr = {}; Wt(Vr, { $: () => Fo, bgBlack: () => _u, bgBlue: () => Fu, bgCyan: () => $u, bgGreen: () => Nu, bgMagenta: () => Mu, bgRed: () => Du, bgWhite: () => qu, bgYellow: () => Lu, black: () => Au, blue: () => it, bold: () => Y, cyan: () => Ne, dim: () => _e, gray: () => Ht, green: () => je, grey: () => Ou, hidden: () => Ru, inverse: () => Cu, italic: () => Tu, magenta: () => Iu, red: () => fe, reset: () => vu, strikethrough: () => Su, underline: () => ee, white: () => ku, yellow: () => De }); let ei; let _o; let Do; let No; let Lo = !0; typeof process < 'u' && ({ FORCE_COLOR: ei, NODE_DISABLE_COLORS: _o, NO_COLOR: Do, TERM: No } = process.env || {}, Lo = process.stdout && process.stdout.isTTY); var Fo = { enabled: !_o && Do == null && No !== 'dumb' && (ei != null && ei !== '0' || Lo) }; function q(e, t) { const r = new RegExp(`\\x1b\\[${t}m`, 'g'); const n = `\x1B[${e}m`; const i = `\x1B[${t}m`; return function (o) { return !Fo.enabled || o == null ? o : n + (~(`${o}`).indexOf(i) ? o.replace(r, i + n) : o) + i } } var vu = q(0, 0); var Y = q(1, 22); var _e = q(2, 22); var Tu = q(3, 23); var ee = q(4, 24); var Cu = q(7, 27); var Ru = q(8, 28); var Su = q(9, 29); var Au = q(30, 39); var fe = q(31, 39); var je = q(32, 39); var De = q(33, 39); var it = q(34, 39); var Iu = q(35, 39); var Ne = q(36, 39); var ku = q(37, 39); var Ht = q(90, 39); var Ou = q(90, 39); var _u = q(40, 49); var Du = q(41, 49); var Nu = q(42, 49); var Lu = q(43, 49); var Fu = q(44, 49); var Mu = q(45, 49); var $u = q(46, 49); var qu = q(47, 49); const Vu = 100; const Mo = ['green', 'yellow', 'blue', 'magenta', 'cyan', 'red']; const Kt = []; let $o = Date.now(); let ju = 0; const ti = typeof process < 'u' ? process.env : {}; globalThis.DEBUG ??= ti.DEBUG ?? ''; globalThis.DEBUG_COLORS ??= ti.DEBUG_COLORS ? ti.DEBUG_COLORS === 'true' : !0; const Yt = { enable(e) { typeof e == 'string' && (globalThis.DEBUG = e) }, disable() { const e = globalThis.DEBUG; return globalThis.DEBUG = '', e }, enabled(e) { const t = globalThis.DEBUG.split(',').map(i => i.replace(/[.+?^${}()|[\]\\]/g, '\\$&')); const r = t.some(i => i === '' || i[0] === '-' ? !1 : e.match(new RegExp(`${i.split('*').join('.*')}$`))); const n = t.some(i => i === '' || i[0] !== '-' ? !1 : e.match(new RegExp(`${i.slice(1).split('*').join('.*')}$`))); return r && !n }, log: (...e) => { const [t, r, ...n] = e; (console.warn ?? console.log)(`${t} ${r}`, ...n) }, formatters: {} }; function Bu(e) { const t = { color: Mo[ju++ % Mo.length], enabled: Yt.enabled(e), namespace: e, log: Yt.log, extend: () => {} }; const r = (...n) => { const { enabled: i, namespace: o, color: s, log: a } = t; if (n.length !== 0 && Kt.push([o, ...n]), Kt.length > Vu && Kt.shift(), Yt.enabled(o) || i) { const l = n.map(c => typeof c == 'string' ? c : Uu(c)); const u = `+${Date.now() - $o}ms`; $o = Date.now(), globalThis.DEBUG_COLORS ? a(Vr[s](Y(o)), ...l, Vr[s](u)) : a(o, ...l, u) } }; return new Proxy(r, { get: (n, i) => t[i], set: (n, i, o) => t[i] = o }) } var ri = new Proxy(Bu, { get: (e, t) => Yt[t], set: (e, t, r) => Yt[t] = r }); function Uu(e, t = 2) {
  const r = new Set(); return JSON.stringify(e, (n, i) => {
    if (typeof i == 'object' && i !== null) {
      if (r.has(i))
        return '[Circular *]'; r.add(i)
    }
    else if (typeof i == 'bigint') {
      return i.toString()
    } return i
  }, t)
} function qo(e = 7500) {
  const t = Kt.map(([r, ...n]) => `${r} ${n.map(i => typeof i == 'string' ? i : JSON.stringify(i)).join(' ')}`).join(`
`); return t.length < e ? t : t.slice(-e)
} function Vo() { Kt.length = 0 } const M = ri; const jo = D(require('node:fs'))

function ni() {
  const e = process.env.PRISMA_QUERY_ENGINE_LIBRARY; if (!(e && jo.default.existsSync(e)) && process.arch === 'ia32')
    throw new Error('The default query engine type (Node-API, "library") is currently not supported for 32bit Node. Please set `engineType = "binary"` in the "generator" block of your "schema.prisma" file (or use the environment variables "PRISMA_CLIENT_ENGINE_TYPE=binary" and/or "PRISMA_CLI_QUERY_ENGINE_TYPE=binary".)')
} const ii = ['darwin', 'darwin-arm64', 'debian-openssl-1.0.x', 'debian-openssl-1.1.x', 'debian-openssl-3.0.x', 'rhel-openssl-1.0.x', 'rhel-openssl-1.1.x', 'rhel-openssl-3.0.x', 'linux-arm64-openssl-1.1.x', 'linux-arm64-openssl-1.0.x', 'linux-arm64-openssl-3.0.x', 'linux-arm-openssl-1.1.x', 'linux-arm-openssl-1.0.x', 'linux-arm-openssl-3.0.x', 'linux-musl', 'linux-musl-openssl-3.0.x', 'linux-musl-arm64-openssl-1.1.x', 'linux-musl-arm64-openssl-3.0.x', 'linux-nixos', 'linux-static-x64', 'linux-static-arm64', 'windows', 'freebsd11', 'freebsd12', 'freebsd13', 'freebsd14', 'freebsd15', 'openbsd', 'netbsd', 'arm']; const jr = 'libquery_engine'; function Br(e, t) { const r = t === 'url'; return e.includes('windows') ? r ? 'query_engine.dll.node' : `query_engine-${e}.dll.node` : e.includes('darwin') ? r ? `${jr}.dylib.node` : `${jr}-${e}.dylib.node` : r ? `${jr}.so.node` : `${jr}-${e}.so.node` } const Go = D(require('node:child_process')); const ui = D(require('node:fs/promises')); const Wr = D(require('node:os'))

const Le = Symbol.for('@ts-pattern/matcher'); const Qu = Symbol.for('@ts-pattern/isVariadic'); const Qr = '@ts-pattern/anonymous-select-key'; const oi = e => !!(e && typeof e == 'object'); const Ur = e => e && !!e[Le]; function Pe(e, t, r) {
  if (Ur(e)) { const n = e[Le](); const { matched: i, selections: o } = n.match(t); return i && o && Object.keys(o).forEach(s => r(s, o[s])), i } if (oi(e)) {
    if (!oi(t))
      return !1; if (Array.isArray(e)) {
      if (!Array.isArray(t))
        return !1; const n = []; const i = []; const o = []; for (const s of e.keys()) { const a = e[s]; Ur(a) && a[Qu] ? o.push(a) : o.length ? i.push(a) : n.push(a) } if (o.length) {
        if (o.length > 1)
          throw new Error('Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.'); if (t.length < n.length + i.length)
          return !1; const s = t.slice(0, n.length); const a = i.length === 0 ? [] : t.slice(-i.length); const l = t.slice(n.length, i.length === 0 ? 1 / 0 : -i.length); return n.every((u, c) => Pe(u, s[c], r)) && i.every((u, c) => Pe(u, a[c], r)) && (o.length === 0 || Pe(o[0], l, r))
      } return e.length === t.length && e.every((s, a) => Pe(s, t[a], r))
    } return Reflect.ownKeys(e).every((n) => { const i = e[n]; return (n in t || Ur(o = i) && o[Le]().matcherType === 'optional') && Pe(i, t[n], r); let o })
  } return Object.is(t, e)
} function Je(e) { let t, r, n; return oi(e) ? Ur(e) ? (t = (r = (n = e[Le]()).getSelectionKeys) == null ? void 0 : r.call(n)) != null ? t : [] : Array.isArray(e) ? zt(e, Je) : zt(Object.values(e), Je) : [] } var zt = (e, t) => e.reduce((r, n) => r.concat(t(n)), []); function ge(e) { return Object.assign(e, { optional: () => Gu(e), and: t => B(e, t), or: t => Ju(e, t), select: t => t === void 0 ? Bo(e) : Bo(t, e) }) } function Gu(e) { return ge({ [Le]: () => ({ match: (t) => { const r = {}; const n = (i, o) => { r[i] = o }; return t === void 0 ? (Je(e).forEach(i => n(i, void 0)), { matched: !0, selections: r }) : { matched: Pe(e, t, n), selections: r } }, getSelectionKeys: () => Je(e), matcherType: 'optional' }) }) } function B(...e) { return ge({ [Le]: () => ({ match: (t) => { const r = {}; const n = (i, o) => { r[i] = o }; return { matched: e.every(i => Pe(i, t, n)), selections: r } }, getSelectionKeys: () => zt(e, Je), matcherType: 'and' }) }) } function Ju(...e) { return ge({ [Le]: () => ({ match: (t) => { const r = {}; const n = (i, o) => { r[i] = o }; return zt(e, Je).forEach(i => n(i, void 0)), { matched: e.some(i => Pe(i, t, n)), selections: r } }, getSelectionKeys: () => zt(e, Je), matcherType: 'or' }) }) } function k(e) { return { [Le]: () => ({ match: t => ({ matched: !!e(t) }) }) } } function Bo(...e) { const t = typeof e[0] == 'string' ? e[0] : void 0; const r = e.length === 2 ? e[1] : typeof e[0] == 'string' ? void 0 : e[0]; return ge({ [Le]: () => ({ match: (n) => { const i = { [t ?? Qr]: n }; return { matched: r === void 0 || Pe(r, n, (o, s) => { i[o] = s }), selections: i } }, getSelectionKeys: () => [t ?? Qr].concat(r === void 0 ? [] : Je(r)) }) }) } function we(e) { return typeof e == 'number' } function Be(e) { return typeof e == 'string' } function Ue(e) { return typeof e == 'bigint' } const Nf = ge(k((e) => { return !0 })); const Qe = e => Object.assign(ge(e), { startsWith: (t) => { return Qe(B(e, (r = t, k(n => Be(n) && n.startsWith(r))))); let r }, endsWith: (t) => { return Qe(B(e, (r = t, k(n => Be(n) && n.endsWith(r))))); let r }, minLength: t => Qe(B(e, (r => k(n => Be(n) && n.length >= r))(t))), length: t => Qe(B(e, (r => k(n => Be(n) && n.length === r))(t))), maxLength: t => Qe(B(e, (r => k(n => Be(n) && n.length <= r))(t))), includes: (t) => { return Qe(B(e, (r = t, k(n => Be(n) && n.includes(r))))); let r }, regex: (t) => { return Qe(B(e, (r = t, k(n => Be(n) && !!n.match(r))))); let r } }); const Lf = Qe(k(Be)); const xe = e => Object.assign(ge(e), { between: (t, r) => xe(B(e, ((n, i) => k(o => we(o) && n <= o && i >= o))(t, r))), lt: t => xe(B(e, (r => k(n => we(n) && n < r))(t))), gt: t => xe(B(e, (r => k(n => we(n) && n > r))(t))), lte: t => xe(B(e, (r => k(n => we(n) && n <= r))(t))), gte: t => xe(B(e, (r => k(n => we(n) && n >= r))(t))), int: () => xe(B(e, k(t => we(t) && Number.isInteger(t)))), finite: () => xe(B(e, k(t => we(t) && Number.isFinite(t)))), positive: () => xe(B(e, k(t => we(t) && t > 0))), negative: () => xe(B(e, k(t => we(t) && t < 0))) }); const Ff = xe(k(we)); const Ge = e => Object.assign(ge(e), { between: (t, r) => Ge(B(e, ((n, i) => k(o => Ue(o) && n <= o && i >= o))(t, r))), lt: t => Ge(B(e, (r => k(n => Ue(n) && n < r))(t))), gt: t => Ge(B(e, (r => k(n => Ue(n) && n > r))(t))), lte: t => Ge(B(e, (r => k(n => Ue(n) && n <= r))(t))), gte: t => Ge(B(e, (r => k(n => Ue(n) && n >= r))(t))), positive: () => Ge(B(e, k(t => Ue(t) && t > 0))), negative: () => Ge(B(e, k(t => Ue(t) && t < 0))) }); const Mf = Ge(k(Ue)); const $f = ge(k((e) => { return typeof e == 'boolean' })); const qf = ge(k((e) => { return typeof e == 'symbol' })); const Vf = ge(k((e) => { return e == null })); const jf = ge(k((e) => { return e != null })); const si = class extends Error {
  constructor(t) {
    let r; try { r = JSON.stringify(t) }
    catch { r = t } super(`Pattern matching error: no pattern matches value ${r}`), this.input = void 0, this.input = t
  }
}; const ai = { matched: !1, value: void 0 }; function ft(e) { return new li(e, ai) } var li = class e {
  constructor(t, r) { this.input = void 0, this.state = void 0, this.input = t, this.state = r }with(...t) {
    if (this.state.matched)
      return this; const r = t[t.length - 1]; const n = [t[0]]; let i; t.length === 3 && typeof t[1] == 'function' ? i = t[1] : t.length > 2 && n.push(...t.slice(1, t.length - 1)); let o = !1; const s = {}; const a = (u, c) => { o = !0, s[u] = c }; const l = !n.some(u => Pe(u, this.input, a)) || i && !i(this.input) ? ai : { matched: !0, value: r(o ? Qr in s ? s[Qr] : s : this.input, this.input) }; return new e(this.input, l)
  }

  when(t, r) {
    if (this.state.matched)
      return this; const n = !!t(this.input); return new e(this.input, n ? { matched: !0, value: r(this.input, this.input) } : ai)
  }

  otherwise(t) { return this.state.matched ? this.state.value : t(this.input) }exhaustive() {
    if (this.state.matched)
      return this.state.value; throw new si(this.input)
  }

  run() { return this.exhaustive() }returnType() { return this }
}; const Jo = require('node:util')

const Wu = { warn: De('prisma:warn') }; const Hu = { warn: () => !process.env.PRISMA_DISABLE_WARNINGS }; function Gr(e, ...t) { Hu.warn() && console.warn(`${Wu.warn} ${e}`, ...t) } const Ku = (0, Jo.promisify)(Go.default.exec); const ie = M('prisma:get-platform'); const Yu = ['1.0.x', '1.1.x', '3.0.x']; async function Wo() {
  const e = Wr.default.platform(); const t = process.arch; if (e === 'freebsd') {
    const s = await Hr('freebsd-version'); if (s && s.trim().length > 0) {
      const l = /^(\d+)\.?/.exec(s); if (l)
        return { platform: 'freebsd', targetDistro: `freebsd${l[1]}`, arch: t }
    }
  } if (e !== 'linux')
    return { platform: e, arch: t }; const r = await Zu(); const n = await sc(); const i = ec({ arch: t, archFromUname: n, familyDistro: r.familyDistro }); const { libssl: o } = await tc(i); return { platform: 'linux', libssl: o, arch: t, archFromUname: n, ...r }
} function zu(e) {
  const t = /^ID="?([^"\n]*)"?$/im; const r = /^ID_LIKE="?([^"\n]*)"?$/im; const n = t.exec(e); const i = n && n[1] && n[1].toLowerCase() || ''; const o = r.exec(e); const s = o && o[1] && o[1].toLowerCase() || ''; const a = ft({ id: i, idLike: s }).with({ id: 'alpine' }, ({ id: l }) => ({ targetDistro: 'musl', familyDistro: l, originalDistro: l })).with({ id: 'raspbian' }, ({ id: l }) => ({ targetDistro: 'arm', familyDistro: 'debian', originalDistro: l })).with({ id: 'nixos' }, ({ id: l }) => ({ targetDistro: 'nixos', originalDistro: l, familyDistro: 'nixos' })).with({ id: 'debian' }, { id: 'ubuntu' }, ({ id: l }) => ({ targetDistro: 'debian', familyDistro: 'debian', originalDistro: l })).with({ id: 'rhel' }, { id: 'centos' }, { id: 'fedora' }, ({ id: l }) => ({ targetDistro: 'rhel', familyDistro: 'rhel', originalDistro: l })).when(({ idLike: l }) => l.includes('debian') || l.includes('ubuntu'), ({ id: l }) => ({ targetDistro: 'debian', familyDistro: 'debian', originalDistro: l })).when(({ idLike: l }) => i === 'arch' || l.includes('arch'), ({ id: l }) => ({ targetDistro: 'debian', familyDistro: 'arch', originalDistro: l })).when(({ idLike: l }) => l.includes('centos') || l.includes('fedora') || l.includes('rhel') || l.includes('suse'), ({ id: l }) => ({ targetDistro: 'rhel', familyDistro: 'rhel', originalDistro: l })).otherwise(({ id: l }) => ({ targetDistro: void 0, familyDistro: void 0, originalDistro: l })); return ie(`Found distro info:
${JSON.stringify(a, null, 2)}`), a
} async function Zu() {
  const e = '/etc/os-release'; try { const t = await ui.default.readFile(e, { encoding: 'utf-8' }); return zu(t) }
  catch { return { targetDistro: void 0, familyDistro: void 0, originalDistro: void 0 } }
} function Xu(e) { const t = /^OpenSSL\s(\d+\.\d+)\.\d+/.exec(e); if (t) { const r = `${t[1]}.x`; return Ho(r) } } function Uo(e) { const t = /libssl\.so\.(\d)(\.\d)?/.exec(e); if (t) { const r = `${t[1]}${t[2] ?? '.0'}.x`; return Ho(r) } } function Ho(e) {
  const t = (() => {
    if (Yo(e))
      return e; const r = e.split('.'); return r[1] = '0', r.join('.')
  })(); if (Yu.includes(t))
    return t
} function ec(e) { return ft(e).with({ familyDistro: 'musl' }, () => (ie('Trying platform-specific paths for "alpine"'), ['/lib', '/usr/lib'])).with({ familyDistro: 'debian' }, ({ archFromUname: t }) => (ie('Trying platform-specific paths for "debian" (and "ubuntu")'), [`/usr/lib/${t}-linux-gnu`, `/lib/${t}-linux-gnu`])).with({ familyDistro: 'rhel' }, () => (ie('Trying platform-specific paths for "rhel"'), ['/lib64', '/usr/lib64'])).otherwise(({ familyDistro: t, arch: r, archFromUname: n }) => (ie(`Don't know any platform-specific paths for "${t}" on ${r} (${n})`), [])) } async function tc(e) {
  const t = 'grep -v "libssl.so.0"'; const r = await Qo(e); if (r) {
    ie(`Found libssl.so file using platform-specific paths: ${r}`); const o = Uo(r); if (ie(`The parsed libssl version is: ${o}`), o)
      return { libssl: o, strategy: 'libssl-specific-path' }
  }ie('Falling back to "ldconfig" and other generic paths'); let n = await Hr(`ldconfig -p | sed "s/.*=>s*//" | sed "s|.*/||" | grep libssl | sort | ${t}`); if (n || (n = await Qo(['/lib64', '/usr/lib64', '/lib', '/usr/lib'])), n) {
    ie(`Found libssl.so file using "ldconfig" or other generic paths: ${n}`); const o = Uo(n); if (ie(`The parsed libssl version is: ${o}`), o)
      return { libssl: o, strategy: 'ldconfig' }
  } const i = await Hr('openssl version -v'); if (i) {
    ie(`Found openssl binary with version: ${i}`); const o = Xu(i); if (ie(`The parsed openssl version is: ${o}`), o)
      return { libssl: o, strategy: 'openssl-binary' }
  } return ie('Couldn\'t find any version of libssl or OpenSSL in the system'), {}
} async function Qo(e) {
  for (const t of e) {
    const r = await rc(t); if (r)
      return r
  }
} async function rc(e) {
  try { return (await ui.default.readdir(e)).find(r => r.startsWith('libssl.so.') && !r.startsWith('libssl.so.0')) }
  catch (t) {
    if (t.code === 'ENOENT')
      return; throw t
  }
} async function ot() { const { binaryTarget: e } = await Ko(); return e } function nc(e) { return e.binaryTarget !== void 0 } async function ci() { const { memoized: e, ...t } = await Ko(); return t } let Jr = {}; async function Ko() {
  if (nc(Jr))
    return Promise.resolve({ ...Jr, memoized: !0 }); const e = await Wo(); const t = ic(e); return Jr = { ...e, binaryTarget: t }, { ...Jr, memoized: !1 }
} function ic(e) {
  const { platform: t, arch: r, archFromUname: n, libssl: i, targetDistro: o, familyDistro: s, originalDistro: a } = e; t === 'linux' && !['x64', 'arm64'].includes(r) && Gr(`Prisma only officially supports Linux on amd64 (x86_64) and arm64 (aarch64) system architectures (detected "${r}" instead). If you are using your own custom Prisma engines, you can ignore this warning, as long as you've compiled the engines for your system architecture "${n}".`); const l = '1.1.x'; if (t === 'linux' && i === void 0) {
    const c = ft({ familyDistro: s }).with({ familyDistro: 'debian' }, () => 'Please manually install OpenSSL via `apt-get update -y && apt-get install -y openssl` and try installing Prisma again. If you\'re running Prisma on Docker, add this command to your Dockerfile, or switch to an image that already has OpenSSL installed.').otherwise(() => 'Please manually install OpenSSL and try installing Prisma again.'); Gr(`Prisma failed to detect the libssl/openssl version to use, and may not work as expected. Defaulting to "openssl-${l}".
${c}`)
  } const u = 'debian'; if (t === 'linux' && o === void 0 && ie(`Distro is "${a}". Falling back to Prisma engines built for "${u}".`), t === 'darwin' && r === 'arm64')
    return 'darwin-arm64'; if (t === 'darwin')
    return 'darwin'; if (t === 'win32')
    return 'windows'; if (t === 'freebsd')
    return o; if (t === 'openbsd')
    return 'openbsd'; if (t === 'netbsd')
    return 'netbsd'; if (t === 'linux' && o === 'nixos')
    return 'linux-nixos'; if (t === 'linux' && r === 'arm64')
    return `${o === 'musl' ? 'linux-musl-arm64' : 'linux-arm64'}-openssl-${i || l}`; if (t === 'linux' && r === 'arm')
    return `linux-arm-openssl-${i || l}`; if (t === 'linux' && o === 'musl') { const c = 'linux-musl'; return !i || Yo(i) ? c : `${c}-openssl-${i}` } return t === 'linux' && o && i ? `${o}-openssl-${i}` : (t !== 'linux' && Gr(`Prisma detected unknown OS "${t}" and may not work as expected. Defaulting to "linux".`), i ? `${u}-openssl-${i}` : o ? `${o}-openssl-${l}` : `${u}-openssl-${l}`)
} async function oc(e) {
  try { return await e() }
  catch { }
} function Hr(e) { return oc(async () => { const t = await Ku(e); return ie(`Command "${e}" successfully returned "${t.stdout}"`), t.stdout }) } async function sc() { return typeof Wr.default.machine == 'function' ? Wr.default.machine() : (await Hr('uname -m'))?.trim() } function Yo(e) { return e.startsWith('1.') } const ls = D(as()); function yi(e) { return (0, ls.default)(e, e, { fallback: ee }) } const dc = us(); const Ei = dc.version; const fc = D(wi()); const V = D(require('node:path'))

const gc = D(wi()); const xg = M('prisma:engines')

function cs() { return V.default.join(__dirname, '../') } const Pg = 'libquery-engine'; V.default.join(__dirname, '../query-engine-darwin'); V.default.join(__dirname, '../query-engine-darwin-arm64'); V.default.join(__dirname, '../query-engine-debian-openssl-1.0.x'); V.default.join(__dirname, '../query-engine-debian-openssl-1.1.x'); V.default.join(__dirname, '../query-engine-debian-openssl-3.0.x'); V.default.join(__dirname, '../query-engine-linux-static-x64'); V.default.join(__dirname, '../query-engine-linux-static-arm64'); V.default.join(__dirname, '../query-engine-rhel-openssl-1.0.x'); V.default.join(__dirname, '../query-engine-rhel-openssl-1.1.x'); V.default.join(__dirname, '../query-engine-rhel-openssl-3.0.x'); V.default.join(__dirname, '../libquery_engine-darwin.dylib.node'); V.default.join(__dirname, '../libquery_engine-darwin-arm64.dylib.node'); V.default.join(__dirname, '../libquery_engine-debian-openssl-1.0.x.so.node'); V.default.join(__dirname, '../libquery_engine-debian-openssl-1.1.x.so.node'); V.default.join(__dirname, '../libquery_engine-debian-openssl-3.0.x.so.node'); V.default.join(__dirname, '../libquery_engine-linux-arm64-openssl-1.0.x.so.node'); V.default.join(__dirname, '../libquery_engine-linux-arm64-openssl-1.1.x.so.node'); V.default.join(__dirname, '../libquery_engine-linux-arm64-openssl-3.0.x.so.node'); V.default.join(__dirname, '../libquery_engine-linux-musl.so.node'); V.default.join(__dirname, '../libquery_engine-linux-musl-openssl-3.0.x.so.node'); V.default.join(__dirname, '../libquery_engine-rhel-openssl-1.0.x.so.node'); V.default.join(__dirname, '../libquery_engine-rhel-openssl-1.1.x.so.node'); V.default.join(__dirname, '../libquery_engine-rhel-openssl-3.0.x.so.node'); V.default.join(__dirname, '../query_engine-windows.dll.node'); const xi = D(require('node:fs'))

const ps = M('chmodPlusX')

function Pi(e) {
  if (process.platform === 'win32')
    return; const t = xi.default.statSync(e); const r = t.mode | 64 | 8 | 1; if (t.mode === r) { ps(`Execution permissions of ${e} are fine`); return } const n = r.toString(8).slice(-3); ps(`Have to call chmodPlusX on ${e}`), xi.default.chmodSync(e, n)
} function vi(e) {
  const t = e.e; const r = a => `Prisma cannot find the required \`${a}\` system library in your system`; const n = t.message.includes('cannot open shared object file'); const i = `Please refer to the documentation about Prisma's system requirements: ${yi('https://pris.ly/d/system-requirements')}`; const o = `Unable to require(\`${_e(e.id)}\`).`; const s = ft({ message: t.message, code: t.code }).with({ code: 'ENOENT' }, () => 'File does not exist.').when(({ message: a }) => n && a.includes('libz'), () => `${r('libz')}. Please install it and try again.`).when(({ message: a }) => n && a.includes('libgcc_s'), () => `${r('libgcc_s')}. Please install it and try again.`).when(({ message: a }) => n && a.includes('libssl'), () => { const a = e.platformInfo.libssl ? `openssl-${e.platformInfo.libssl}` : 'openssl'; return `${r('libssl')}. Please install ${a} and try again.` }).when(({ message: a }) => a.includes('GLIBC'), () => `Prisma has detected an incompatible version of the \`glibc\` C standard library installed in your system. This probably means your system may be too old to run Prisma. ${i}`).when(({ message: a }) => e.platformInfo.platform === 'linux' && a.includes('symbol not found'), () => `The Prisma engines are not compatible with your system ${e.platformInfo.originalDistro} on (${e.platformInfo.archFromUname}) which uses the \`${e.platformInfo.binaryTarget}\` binaryTarget by default. ${i}`).otherwise(() => `The Prisma engines do not seem to be compatible with your system. ${i}`); return `${o}
${s}

Details: ${t.message}`
} const Ai = D(hs()); const Zr = D(require('node:fs')); const yt = D(require('node:path'))

function ys(e) {
  const t = e.ignoreProcessEnv ? {} : process.env; const r = n => n.match(/(.?\$\{\w*\})/g)?.reduce((o, s) => {
    const a = /(.?)\$\{(\w+)?\}/.exec(s); if (!a)
      return o; const l = a[1]; let u; let c; if (l === '\\') {
      c = a[0], u = c.replace('\\$', '$')
    }
    else { const p = a[2]; c = a[0].substring(l.length), u = Object.hasOwnProperty.call(t, p) ? t[p] : e.parsed[p] || '', u = r(u) } return o.replace(c, u)
  }, n) ?? n; for (const n in e.parsed) { const i = Object.hasOwnProperty.call(t, n) ? t[n] : e.parsed[n]; e.parsed[n] = r(i) } for (const n in e.parsed)t[n] = e.parsed[n]; return e
} const Si = M('prisma:tryLoadEnv'); function er({ rootEnvPath: e, schemaEnvPath: t }, r = { conflictCheck: 'none' }) {
  const n = Es(e); r.conflictCheck !== 'none' && Oc(n, t, r.conflictCheck); let i = null; return bs(n?.path, t) || (i = Es(t)), !n && !i && Si('No Environment variables loaded'), i?.dotenvResult.error
    ? console.error(fe(Y('Schema Env Error: ')) + i.dotenvResult.error)
    : { message: [n?.message, i?.message].filter(Boolean).join(`
`), parsed: { ...n?.dotenvResult?.parsed, ...i?.dotenvResult?.parsed } }
} function Oc(e, t, r) {
  const n = e?.dotenvResult.parsed; const i = !bs(e?.path, t); if (n && t && i && Zr.default.existsSync(t)) {
    const o = Ai.default.parse(Zr.default.readFileSync(t)); const s = []; for (const a in o)n[a] === o[a] && s.push(a); if (s.length > 0) {
      const a = yt.default.relative(process.cwd(), e.path); const l = yt.default.relative(process.cwd(), t); if (r === 'error') {
        const u = `There is a conflict between env var${s.length > 1 ? 's' : ''} in ${ee(a)} and ${ee(l)}
Conflicting env vars:
${s.map(c => `  ${Y(c)}`).join(`
`)}

We suggest to move the contents of ${ee(l)} to ${ee(a)} to consolidate your env vars.
`;throw new Error(u)
      }
      else if (r === 'warn') {
        const u = `Conflict for env var${s.length > 1 ? 's' : ''} ${s.map(c => Y(c)).join(', ')} in ${ee(a)} and ${ee(l)}
Env vars from ${ee(l)} overwrite the ones from ${ee(a)}
      `;console.warn(`${De('warn(prisma)')} ${u}`)
      }
    }
  }
} function Es(e) {
  if (_c(e)) { Si(`Environment variables loaded from ${e}`); const t = Ai.default.config({ path: e, debug: process.env.DOTENV_CONFIG_DEBUG ? !0 : void 0 }); return { dotenvResult: ys(t), message: _e(`Environment variables loaded from ${yt.default.relative(process.cwd(), e)}`), path: e } }
  else {
    Si(`Environment variables not found at ${e}`)
  } return null
} function bs(e, t) { return e && t && yt.default.resolve(e) === yt.default.resolve(t) } function _c(e) { return !!(e && Zr.default.existsSync(e)) } const ws = 'library'; function Et(e) { const t = Dc(); return t || (e?.config.engineType === 'library' ? 'library' : e?.config.engineType === 'binary' ? 'binary' : e?.config.engineType === 'client' ? 'client' : ws) } function Dc() { const e = process.env.PRISMA_CLIENT_ENGINE_TYPE; return e === 'library' ? 'library' : e === 'binary' ? 'binary' : e === 'client' ? 'client' : void 0 } const Cs = 'prisma+postgres'; const Xr = `${Cs}:`; function Ii(e) { return e?.startsWith(`${Xr}//`) ?? !1 } let tr; ((t) => { let e; (I => (I.findUnique = 'findUnique', I.findUniqueOrThrow = 'findUniqueOrThrow', I.findFirst = 'findFirst', I.findFirstOrThrow = 'findFirstOrThrow', I.findMany = 'findMany', I.create = 'create', I.createMany = 'createMany', I.createManyAndReturn = 'createManyAndReturn', I.update = 'update', I.updateMany = 'updateMany', I.updateManyAndReturn = 'updateManyAndReturn', I.upsert = 'upsert', I.delete = 'delete', I.deleteMany = 'deleteMany', I.groupBy = 'groupBy', I.count = 'count', I.aggregate = 'aggregate', I.findRaw = 'findRaw', I.aggregateRaw = 'aggregateRaw'))(e = t.ModelAction ||= {}) })(tr ||= {}); const rr = D(require('node:path'))

function ki(e) { return rr.default.sep === rr.default.posix.sep ? e : e.split(rr.default.sep).join(rr.default.posix.sep) } const Ss = D(Oi()); function Di(e) { return String(new _i(e)) } var _i = class {
  constructor(t) { this.config = t }toString() {
    const { config: t } = this; const r = t.provider.fromEnvVar ? `env("${t.provider.fromEnvVar}")` : t.provider.value; const n = JSON.parse(JSON.stringify({ provider: r, binaryTargets: Lc(t.binaryTargets) })); return `generator ${t.name} {
${(0, Ss.default)(Fc(n), 2)}
}`
  }
}; function Lc(e) {
  let t; if (e.length > 0) { const r = e.find(n => n.fromEnvVar !== null); r ? t = `env("${r.fromEnvVar}")` : t = e.map(n => n.native ? 'native' : n.value) }
  else {
    t = void 0
  } return t
} function Fc(e) {
  const t = Object.keys(e).reduce((r, n) => Math.max(r, n.length), 0); return Object.entries(e).map(([r, n]) => `${r.padEnd(t)} = ${Mc(n)}`).join(`
`)
} function Mc(e) { return JSON.parse(JSON.stringify(e, (t, r) => Array.isArray(r) ? `[${r.map(n => JSON.stringify(n)).join(', ')}]` : JSON.stringify(r))) } const ir = {}; Wt(ir, { error: () => Vc, info: () => qc, log: () => $c, query: () => jc, should: () => As, tags: () => nr, warn: () => Ni }); var nr = { error: fe('prisma:error'), warn: De('prisma:warn'), info: Ne('prisma:info'), query: it('prisma:query') }; var As = { warn: () => !process.env.PRISMA_DISABLE_WARNINGS }; function $c(...e) { console.log(...e) } function Ni(e, ...t) { As.warn() && console.warn(`${nr.warn} ${e}`, ...t) } function qc(e, ...t) { console.info(`${nr.info} ${e}`, ...t) } function Vc(e, ...t) { console.error(`${nr.error} ${e}`, ...t) } function jc(e, ...t) { console.log(`${nr.query} ${e}`, ...t) } function en(e, t) {
  if (!e)
    throw new Error(`${t}. This should never happen. If you see this error, please, open an issue at https://pris.ly/prisma-prisma-bug-report`)
} function Me(e, t) { throw new Error(t) } function Fi(e, t) { return Object.prototype.hasOwnProperty.call(e, t) } const Mi = (e, t) => e.reduce((r, n) => (r[t(n)] = n, r), {}); function bt(e, t) { const r = {}; for (const n of Object.keys(e))r[n] = t(e[n], n); return r } function $i(e, t) {
  if (e.length === 0)
    return; let r = e[0]; for (let n = 1; n < e.length; n++)t(r, e[n]) < 0 && (r = e[n]); return r
} function x(e, t) { Object.defineProperty(e, 'name', { value: t, configurable: !0 }) } const Ds = new Set(); var or = (e, t, ...r) => { Ds.has(e) || (Ds.add(e), Ni(t, ...r)) }; var C = class e extends Error {constructor(r, n, i) { super(r); d(this, 'clientVersion'); d(this, 'errorCode'); d(this, 'retryable'); this.name = 'PrismaClientInitializationError', this.clientVersion = n, this.errorCode = i, Error.captureStackTrace(e) } get [Symbol.toStringTag]() { return 'PrismaClientInitializationError' }}; x(C, 'PrismaClientInitializationError'); var te = class extends Error {constructor(r, { code: n, clientVersion: i, meta: o, batchRequestIdx: s }) { super(r); d(this, 'code'); d(this, 'meta'); d(this, 'clientVersion'); d(this, 'batchRequestIdx'); this.name = 'PrismaClientKnownRequestError', this.code = n, this.clientVersion = i, this.meta = o, Object.defineProperty(this, 'batchRequestIdx', { value: s, enumerable: !1, writable: !0 }) } get [Symbol.toStringTag]() { return 'PrismaClientKnownRequestError' }}; x(te, 'PrismaClientKnownRequestError'); var pe = class extends Error {constructor(r, n) { super(r); d(this, 'clientVersion'); this.name = 'PrismaClientRustPanicError', this.clientVersion = n } get [Symbol.toStringTag]() { return 'PrismaClientRustPanicError' }}; x(pe, 'PrismaClientRustPanicError'); var U = class extends Error {constructor(r, { clientVersion: n, batchRequestIdx: i }) { super(r); d(this, 'clientVersion'); d(this, 'batchRequestIdx'); this.name = 'PrismaClientUnknownRequestError', this.clientVersion = n, Object.defineProperty(this, 'batchRequestIdx', { value: i, writable: !0, enumerable: !1 }) } get [Symbol.toStringTag]() { return 'PrismaClientUnknownRequestError' }}; x(U, 'PrismaClientUnknownRequestError'); var re = class extends Error {constructor(r, { clientVersion: n }) { super(r); d(this, 'name', 'PrismaClientValidationError'); d(this, 'clientVersion'); this.clientVersion = n } get [Symbol.toStringTag]() { return 'PrismaClientValidationError' }}; x(re, 'PrismaClientValidationError'); const wt = 9e15; const ze = 1e9; const qi = '0123456789abcdef'; let sn = '2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058'; let an = '3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789'; const Vi = { precision: 20, rounding: 4, modulo: 1, toExpNeg: -7, toExpPos: 21, minE: -wt, maxE: wt, crypto: !1 }; let Ms; let $e; let w = !0; const un = '[DecimalError] '; const Ye = `${un}Invalid argument: `; const $s = `${un}Precision limit exceeded`; const qs = `${un}crypto unavailable`; const Vs = '[object Decimal]'; const ne = Math.floor; const J = Math.pow; const Uc = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i; const Qc = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i; const Gc = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i; const js = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i; const ye = 1e7; const b = 7; const Jc = 9007199254740991; const Wc = sn.length - 1; const ji = an.length - 1; const f = { toStringTag: Vs }; f.absoluteValue = f.abs = function () { const e = new this.constructor(this); return e.s < 0 && (e.s = 1), E(e) }; f.ceil = function () { return E(new this.constructor(this), this.e + 1, 2) }; f.clampedTo = f.clamp = function (e, t) {
  let r; const n = this; const i = n.constructor; if (e = new i(e), t = new i(t), !e.s || !t.s)
    return new i(Number.NaN); if (e.gt(t))
    throw new Error(Ye + t); return r = n.cmp(e), r < 0 ? e : n.cmp(t) > 0 ? t : new i(n)
}; f.comparedTo = f.cmp = function (e) {
  let t; let r; let n; let i; const o = this; const s = o.d; const a = (e = new o.constructor(e)).d; const l = o.s; const u = e.s; if (!s || !a)
    return !l || !u ? Number.NaN : l !== u ? l : s === a ? 0 : !s ^ l < 0 ? 1 : -1; if (!s[0] || !a[0])
    return s[0] ? l : a[0] ? -u : 0; if (l !== u)
    return l; if (o.e !== e.e)
    return o.e > e.e ^ l < 0 ? 1 : -1; for (n = s.length, i = a.length, t = 0, r = n < i ? n : i; t < r; ++t) {
    if (s[t] !== a[t])
      return s[t] > a[t] ^ l < 0 ? 1 : -1
  } return n === i ? 0 : n > i ^ l < 0 ? 1 : -1
}; f.cosine = f.cos = function () { let e; let t; let r = this; const n = r.constructor; return r.d ? r.d[0] ? (e = n.precision, t = n.rounding, n.precision = e + Math.max(r.e, r.sd()) + b, n.rounding = 1, r = Hc(n, Js(n, r)), n.precision = e, n.rounding = t, E($e == 2 || $e == 3 ? r.neg() : r, e, t, !0)) : new n(1) : new n(Number.NaN) }; f.cubeRoot = f.cbrt = function () {
  let e; let t; let r; let n; let i; let o; let s; let a; let l; let u; const c = this; const p = c.constructor; if (!c.isFinite() || c.isZero())
    return new p(c); for (w = !1, o = c.s * (c.s * c) ** (1 / 3), !o || Math.abs(o) == 1 / 0 ? (r = z(c.d), e = c.e, (o = (e - r.length + 1) % 3) && (r += o == 1 || o == -2 ? '0' : '00'), o = r ** (1 / 3), e = ne((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), o == 1 / 0 ? r = `5e${e}` : (r = o.toExponential(), r = r.slice(0, r.indexOf('e') + 1) + e), n = new p(r), n.s = c.s) : n = new p(o.toString()), s = (e = p.precision) + 3; ;) {
    if (a = n, l = a.times(a).times(a), u = l.plus(c), n = $(u.plus(c).times(a), u.plus(l), s + 2, 1), z(a.d).slice(0, s) === (r = z(n.d)).slice(0, s)) {
      if (r = r.slice(s - 3, s + 1), r == '9999' || !i && r == '4999') { if (!i && (E(a, e + 1, 0), a.times(a).times(a).eq(c))) { n = a; break }s += 4, i = 1 }
      else { (!+r || !+r.slice(1) && r.charAt(0) == '5') && (E(n, e + 1, 1), t = !n.times(n).times(n).eq(c)); break }
    }
  } return w = !0, E(n, e, p.rounding, t)
}; f.decimalPlaces = f.dp = function () {
  let e; const t = this.d; let r = Number.NaN; if (t) {
    if (e = t.length - 1, r = (e - ne(this.e / b)) * b, e = t[e], e) {
      for (;e % 10 == 0; e /= 10)r--
    } r < 0 && (r = 0)
  } return r
}; f.dividedBy = f.div = function (e) { return $(this, new this.constructor(e)) }; f.dividedToIntegerBy = f.divToInt = function (e) { const t = this; const r = t.constructor; return E($(t, new r(e), 0, 1, 1), r.precision, r.rounding) }; f.equals = f.eq = function (e) { return this.cmp(e) === 0 }; f.floor = function () { return E(new this.constructor(this), this.e + 1, 3) }; f.greaterThan = f.gt = function (e) { return this.cmp(e) > 0 }; f.greaterThanOrEqualTo = f.gte = function (e) { const t = this.cmp(e); return t == 1 || t === 0 }; f.hyperbolicCosine = f.cosh = function () {
  let e; let t; let r; let n; let i; let o = this; const s = o.constructor; const a = new s(1); if (!o.isFinite())
    return new s(o.s ? 1 / 0 : Number.NaN); if (o.isZero())
    return a; r = s.precision, n = s.rounding, s.precision = r + Math.max(o.e, o.sd()) + 4, s.rounding = 1, i = o.d.length, i < 32 ? (e = Math.ceil(i / 3), t = (1 / pn(4, e)).toString()) : (e = 16, t = '2.3283064365386962890625e-10'), o = xt(s, 1, o.times(t), new s(1), !0); for (var l, u = e, c = new s(8); u--;)l = o.times(o), o = a.minus(l.times(c.minus(l.times(c)))); return E(o, s.precision = r, s.rounding = n, !0)
}; f.hyperbolicSine = f.sinh = function () {
  let e; let t; let r; let n; let i = this; const o = i.constructor; if (!i.isFinite() || i.isZero())
    return new o(i); if (t = o.precision, r = o.rounding, o.precision = t + Math.max(i.e, i.sd()) + 4, o.rounding = 1, n = i.d.length, n < 3) {
    i = xt(o, 2, i, i, !0)
  }
  else { e = 1.4 * Math.sqrt(n), e = e > 16 ? 16 : e | 0, i = i.times(1 / pn(5, e)), i = xt(o, 2, i, i, !0); for (var s, a = new o(5), l = new o(16), u = new o(20); e--;)s = i.times(i), i = i.times(a.plus(s.times(l.times(s).plus(u)))) } return o.precision = t, o.rounding = r, E(i, t, r, !0)
}; f.hyperbolicTangent = f.tanh = function () { let e; let t; const r = this; const n = r.constructor; return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 7, n.rounding = 1, $(r.sinh(), r.cosh(), n.precision = e, n.rounding = t)) : new n(r.s) }; f.inverseCosine = f.acos = function () { let e = this; const t = e.constructor; const r = e.abs().cmp(1); const n = t.precision; const i = t.rounding; return r !== -1 ? r === 0 ? e.isNeg() ? ve(t, n, i) : new t(0) : new t(Number.NaN) : e.isZero() ? ve(t, n + 4, i).times(0.5) : (t.precision = n + 6, t.rounding = 1, e = new t(1).minus(e).div(e.plus(1)).sqrt().atan(), t.precision = n, t.rounding = i, e.times(2)) }; f.inverseHyperbolicCosine = f.acosh = function () { let e; let t; let r = this; const n = r.constructor; return r.lte(1) ? new n(r.eq(1) ? 0 : Number.NaN) : r.isFinite() ? (e = n.precision, t = n.rounding, n.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4, n.rounding = 1, w = !1, r = r.times(r).minus(1).sqrt().plus(r), w = !0, n.precision = e, n.rounding = t, r.ln()) : new n(r) }; f.inverseHyperbolicSine = f.asinh = function () { let e; let t; let r = this; const n = r.constructor; return !r.isFinite() || r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6, n.rounding = 1, w = !1, r = r.times(r).plus(1).sqrt().plus(r), w = !0, n.precision = e, n.rounding = t, r.ln()) }; f.inverseHyperbolicTangent = f.atanh = function () { let e; let t; let r; let n; let i = this; const o = i.constructor; return i.isFinite() ? i.e >= 0 ? new o(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : Number.NaN) : (e = o.precision, t = o.rounding, n = i.sd(), Math.max(n, e) < 2 * -i.e - 1 ? E(new o(i), e, t, !0) : (o.precision = r = n - i.e, i = $(i.plus(1), new o(1).minus(i), r + e, 1), o.precision = e + 4, o.rounding = 1, i = i.ln(), o.precision = e, o.rounding = t, i.times(0.5))) : new o(Number.NaN) }; f.inverseSine = f.asin = function () { let e; let t; let r; let n; let i = this; const o = i.constructor; return i.isZero() ? new o(i) : (t = i.abs().cmp(1), r = o.precision, n = o.rounding, t !== -1 ? t === 0 ? (e = ve(o, r + 4, n).times(0.5), e.s = i.s, e) : new o(Number.NaN) : (o.precision = r + 6, o.rounding = 1, i = i.div(new o(1).minus(i.times(i)).sqrt().plus(1)).atan(), o.precision = r, o.rounding = n, i.times(2))) }; f.inverseTangent = f.atan = function () {
  let e; let t; let r; let n; let i; let o; let s; let a; let l; let u = this; const c = u.constructor; const p = c.precision; const m = c.rounding; if (u.isFinite()) {
    if (u.isZero())
      return new c(u); if (u.abs().eq(1) && p + 4 <= ji)
      return s = ve(c, p + 4, m).times(0.25), s.s = u.s, s
  }
  else {
    if (!u.s)
      return new c(Number.NaN); if (p + 4 <= ji)
      return s = ve(c, p + 4, m).times(0.5), s.s = u.s, s
  } for (c.precision = a = p + 10, c.rounding = 1, r = Math.min(28, a / b + 2 | 0), e = r; e; --e)u = u.div(u.times(u).plus(1).sqrt().plus(1)); for (w = !1, t = Math.ceil(a / b), n = 1, l = u.times(u), s = new c(u), i = u; e !== -1;) {
    if (i = i.times(l), o = s.minus(i.div(n += 2)), i = i.times(l), s = o.plus(i.div(n += 2)), s.d[t] !== void 0) {
      for (e = t; s.d[e] === o.d[e] && e--;);
    }
  } return r && (s = s.times(2 << r - 1)), w = !0, E(s, c.precision = p, c.rounding = m, !0)
}; f.isFinite = function () { return !!this.d }; f.isInteger = f.isInt = function () { return !!this.d && ne(this.e / b) > this.d.length - 2 }; f.isNaN = function () { return !this.s }; f.isNegative = f.isNeg = function () { return this.s < 0 }; f.isPositive = f.isPos = function () { return this.s > 0 }; f.isZero = function () { return !!this.d && this.d[0] === 0 }; f.lessThan = f.lt = function (e) { return this.cmp(e) < 0 }; f.lessThanOrEqualTo = f.lte = function (e) { return this.cmp(e) < 1 }; f.logarithm = f.log = function (e) {
  let t; let r; let n; let i; let o; let s; let a; let l; const u = this; const c = u.constructor; const p = c.precision; const m = c.rounding; const g = 5; if (e == null) {
    e = new c(10), t = !0
  }
  else {
    if (e = new c(e), r = e.d, e.s < 0 || !r || !r[0] || e.eq(1))
      return new c(Number.NaN); t = e.eq(10)
  } if (r = u.d, u.s < 0 || !r || !r[0] || u.eq(1))
    return new c(r && !r[0] ? -1 / 0 : u.s != 1 ? Number.NaN : r ? 0 : 1 / 0); if (t) {
    if (r.length > 1) {
      o = !0
    }
    else { for (i = r[0]; i % 10 === 0;)i /= 10; o = i !== 1 }
  } if (w = !1, a = p + g, s = Ke(u, a), n = t ? ln(c, a + 10) : Ke(e, a), l = $(s, n, a, 1), sr(l.d, i = p, m)) {
    do {
      if (a += 10, s = Ke(u, a), n = t ? ln(c, a + 10) : Ke(e, a), l = $(s, n, a, 1), !o) { +z(l.d).slice(i + 1, i + 15) + 1 == 1e14 && (l = E(l, p + 1, 0)); break }
    } while (sr(l.d, i += 10, m))
  } return w = !0, E(l, p, m)
}; f.minus = f.sub = function (e) {
  let t; let r; let n; let i; let o; let s; let a; let l; let u; let c; let p; let m; const g = this; const h = g.constructor; if (e = new h(e), !g.d || !e.d)
    return !g.s || !e.s ? e = new h(Number.NaN) : g.d ? e.s = -e.s : e = new h(e.d || g.s !== e.s ? g : Number.NaN), e; if (g.s != e.s)
    return e.s = -e.s, g.plus(e); if (u = g.d, m = e.d, a = h.precision, l = h.rounding, !u[0] || !m[0]) {
    if (m[0])
      e.s = -e.s; else if (u[0])
      e = new h(g); else return new h(l === 3 ? -0 : 0); return w ? E(e, a, l) : e
  } if (r = ne(e.e / b), c = ne(g.e / b), u = u.slice(), o = c - r, o) { for (p = o < 0, p ? (t = u, o = -o, s = m.length) : (t = m, r = c, s = u.length), n = Math.max(Math.ceil(a / b), s) + 2, o > n && (o = n, t.length = 1), t.reverse(), n = o; n--;)t.push(0); t.reverse() }
  else {
    for (n = u.length, s = m.length, p = n < s, p && (s = n), n = 0; n < s; n++) {
      if (u[n] != m[n]) { p = u[n] < m[n]; break }
    }o = 0
  } for (p && (t = u, u = m, m = t, e.s = -e.s), s = u.length, n = m.length - s; n > 0; --n)u[s++] = 0; for (n = m.length; n > o;) { if (u[--n] < m[n]) { for (i = n; i && u[--i] === 0;)u[i] = ye - 1; --u[i], u[n] += ye }u[n] -= m[n] } for (;u[--s] === 0;)u.pop(); for (;u[0] === 0; u.shift())--r; return u[0] ? (e.d = u, e.e = cn(u, r), w ? E(e, a, l) : e) : new h(l === 3 ? -0 : 0)
}; f.modulo = f.mod = function (e) { let t; const r = this; const n = r.constructor; return e = new n(e), !r.d || !e.s || e.d && !e.d[0] ? new n(Number.NaN) : !e.d || r.d && !r.d[0] ? E(new n(r), n.precision, n.rounding) : (w = !1, n.modulo == 9 ? (t = $(r, e.abs(), 0, 3, 1), t.s *= e.s) : t = $(r, e, 0, n.modulo, 1), t = t.times(e), w = !0, r.minus(t)) }; f.naturalExponential = f.exp = function () { return Bi(this) }; f.naturalLogarithm = f.ln = function () { return Ke(this) }; f.negated = f.neg = function () { const e = new this.constructor(this); return e.s = -e.s, E(e) }; f.plus = f.add = function (e) {
  let t; let r; let n; let i; let o; let s; let a; let l; let u; let c; const p = this; const m = p.constructor; if (e = new m(e), !p.d || !e.d)
    return !p.s || !e.s ? e = new m(Number.NaN) : p.d || (e = new m(e.d || p.s === e.s ? p : Number.NaN)), e; if (p.s != e.s)
    return e.s = -e.s, p.minus(e); if (u = p.d, c = e.d, a = m.precision, l = m.rounding, !u[0] || !c[0])
    return c[0] || (e = new m(p)), w ? E(e, a, l) : e; if (o = ne(p.e / b), n = ne(e.e / b), u = u.slice(), i = o - n, i) { for (i < 0 ? (r = u, i = -i, s = c.length) : (r = c, n = o, s = u.length), o = Math.ceil(a / b), s = o > s ? o + 1 : s + 1, i > s && (i = s, r.length = 1), r.reverse(); i--;)r.push(0); r.reverse() } for (s = u.length, i = c.length, s - i < 0 && (i = s, r = c, c = u, u = r), t = 0; i;)t = (u[--i] = u[i] + c[i] + t) / ye | 0, u[i] %= ye; for (t && (u.unshift(t), ++n), s = u.length; u[--s] == 0;)u.pop(); return e.d = u, e.e = cn(u, n), w ? E(e, a, l) : e
}; f.precision = f.sd = function (e) {
  let t; const r = this; if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
    throw new Error(Ye + e); return r.d ? (t = Bs(r.d), e && r.e + 1 > t && (t = r.e + 1)) : t = Number.NaN, t
}; f.round = function () { const e = this; const t = e.constructor; return E(new t(e), e.e + 1, t.rounding) }; f.sine = f.sin = function () { let e; let t; let r = this; const n = r.constructor; return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + Math.max(r.e, r.sd()) + b, n.rounding = 1, r = Yc(n, Js(n, r)), n.precision = e, n.rounding = t, E($e > 2 ? r.neg() : r, e, t, !0)) : new n(Number.NaN) }; f.squareRoot = f.sqrt = function () {
  let e; let t; let r; let n; let i; let o; const s = this; const a = s.d; let l = s.e; let u = s.s; const c = s.constructor; if (u !== 1 || !a || !a[0])
    return new c(!u || u < 0 && (!a || a[0]) ? Number.NaN : a ? s : 1 / 0); for (w = !1, u = Math.sqrt(+s), u == 0 || u == 1 / 0 ? (t = z(a), (t.length + l) % 2 == 0 && (t += '0'), u = Math.sqrt(t), l = ne((l + 1) / 2) - (l < 0 || l % 2), u == 1 / 0 ? t = `5e${l}` : (t = u.toExponential(), t = t.slice(0, t.indexOf('e') + 1) + l), n = new c(t)) : n = new c(u.toString()), r = (l = c.precision) + 3; ;) {
    if (o = n, n = o.plus($(s, o, r + 2, 1)).times(0.5), z(o.d).slice(0, r) === (t = z(n.d)).slice(0, r)) {
      if (t = t.slice(r - 3, r + 1), t == '9999' || !i && t == '4999') { if (!i && (E(o, l + 1, 0), o.times(o).eq(s))) { n = o; break }r += 4, i = 1 }
      else { (!+t || !+t.slice(1) && t.charAt(0) == '5') && (E(n, l + 1, 1), e = !n.times(n).eq(s)); break }
    }
  } return w = !0, E(n, l, c.rounding, e)
}; f.tangent = f.tan = function () { let e; let t; let r = this; const n = r.constructor; return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 10, n.rounding = 1, r = r.sin(), r.s = 1, r = $(r, new n(1).minus(r.times(r)).sqrt(), e + 10, 0), n.precision = e, n.rounding = t, E($e == 2 || $e == 4 ? r.neg() : r, e, t, !0)) : new n(Number.NaN) }; f.times = f.mul = function (e) {
  let t; let r; let n; let i; let o; let s; let a; let l; let u; const c = this; const p = c.constructor; let m = c.d; let g = (e = new p(e)).d; if (e.s *= c.s, !m || !m[0] || !g || !g[0])
    return new p(!e.s || m && !m[0] && !g || g && !g[0] && !m ? Number.NaN : !m || !g ? e.s / 0 : e.s * 0); for (r = ne(c.e / b) + ne(e.e / b), l = m.length, u = g.length, l < u && (o = m, m = g, g = o, s = l, l = u, u = s), o = [], s = l + u, n = s; n--;)o.push(0); for (n = u; --n >= 0;) { for (t = 0, i = l + n; i > n;)a = o[i] + g[n] * m[i - n - 1] + t, o[i--] = a % ye | 0, t = a / ye | 0; o[i] = (o[i] + t) % ye | 0 } for (;!o[--s];)o.pop(); return t ? ++r : o.shift(), e.d = o, e.e = cn(o, r), w ? E(e, p.precision, p.rounding) : e
}; f.toBinary = function (e, t) { return Ui(this, 2, e, t) }; f.toDecimalPlaces = f.toDP = function (e, t) { let r = this; const n = r.constructor; return r = new n(r), e === void 0 ? r : (ae(e, 0, ze), t === void 0 ? t = n.rounding : ae(t, 0, 8), E(r, e + r.e + 1, t)) }; f.toExponential = function (e, t) { let r; let n = this; const i = n.constructor; return e === void 0 ? r = Te(n, !0) : (ae(e, 0, ze), t === void 0 ? t = i.rounding : ae(t, 0, 8), n = E(new i(n), e + 1, t), r = Te(n, !0, e + 1)), n.isNeg() && !n.isZero() ? `-${r}` : r }; f.toFixed = function (e, t) { let r; let n; const i = this; const o = i.constructor; return e === void 0 ? r = Te(i) : (ae(e, 0, ze), t === void 0 ? t = o.rounding : ae(t, 0, 8), n = E(new o(i), e + i.e + 1, t), r = Te(n, !1, e + n.e + 1)), i.isNeg() && !i.isZero() ? `-${r}` : r }; f.toFraction = function (e) {
  let t; let r; let n; let i; let o; let s; let a; let l; let u; let c; let p; let m; const g = this; const h = g.d; const y = g.constructor; if (!h)
    return new y(g); if (u = r = new y(1), n = l = new y(0), t = new y(n), o = t.e = Bs(h) - g.e - 1, s = o % b, t.d[0] = 10 ** (s < 0 ? b + s : s), e == null) {
    e = o > 0 ? t : u
  }
  else {
    if (a = new y(e), !a.isInt() || a.lt(u))
      throw new Error(Ye + a); e = a.gt(t) ? o > 0 ? t : u : a
  } for (w = !1, a = new y(z(h)), c = y.precision, y.precision = o = h.length * b * 2; p = $(a, t, 0, 1, 1), i = r.plus(p.times(n)), i.cmp(e) != 1;)r = n, n = i, i = u, u = l.plus(p.times(i)), l = i, i = t, t = a.minus(p.times(i)), a = i; return i = $(e.minus(r), n, 0, 1, 1), l = l.plus(i.times(u)), r = r.plus(i.times(n)), l.s = u.s = g.s, m = $(u, n, o, 1).minus(g).abs().cmp($(l, r, o, 1).minus(g).abs()) < 1 ? [u, n] : [l, r], y.precision = c, w = !0, m
}; f.toHexadecimal = f.toHex = function (e, t) { return Ui(this, 16, e, t) }; f.toNearest = function (e, t) {
  let r = this; const n = r.constructor; if (r = new n(r), e == null) {
    if (!r.d)
      return r; e = new n(1), t = n.rounding
  }
  else {
    if (e = new n(e), t === void 0 ? t = n.rounding : ae(t, 0, 8), !r.d)
      return e.s ? r : e; if (!e.d)
      return e.s && (e.s = r.s), e
  } return e.d[0] ? (w = !1, r = $(r, e, 0, t, 1).times(e), w = !0, E(r)) : (e.s = r.s, r = e), r
}; f.toNumber = function () { return +this }; f.toOctal = function (e, t) { return Ui(this, 8, e, t) }; f.toPower = f.pow = function (e) {
  let t; let r; let n; let i; let o; let s; let a = this; const l = a.constructor; const u = +(e = new l(e)); if (!a.d || !e.d || !a.d[0] || !e.d[0])
    return new l((+a) ** u); if (a = new l(a), a.eq(1))
    return a; if (n = l.precision, o = l.rounding, e.eq(1))
    return E(a, n, o); if (t = ne(e.e / b), t >= e.d.length - 1 && (r = u < 0 ? -u : u) <= Jc)
    return i = Us(l, a, r, n), e.s < 0 ? new l(1).div(i) : E(i, n, o); if (s = a.s, s < 0) {
    if (t < e.d.length - 1)
      return new l(Number.NaN); if (e.d[t] & 1 || (s = 1), a.e == 0 && a.d[0] == 1 && a.d.length == 1)
      return a.s = s, a
  } return r = (+a) ** u, t = r == 0 || !isFinite(r) ? ne(u * (Math.log(`0.${z(a.d)}`) / Math.LN10 + a.e + 1)) : new l(`${r}`).e, t > l.maxE + 1 || t < l.minE - 1 ? new l(t > 0 ? s / 0 : 0) : (w = !1, l.rounding = a.s = 1, r = Math.min(12, (`${t}`).length), i = Bi(e.times(Ke(a, n + r)), n), i.d && (i = E(i, n + 5, 1), sr(i.d, n, o) && (t = n + 10, i = E(Bi(e.times(Ke(a, t + r)), t), t + 5, 1), +z(i.d).slice(n + 1, n + 15) + 1 == 1e14 && (i = E(i, n + 1, 0)))), i.s = s, w = !0, l.rounding = o, E(i, n, o))
}; f.toPrecision = function (e, t) { let r; let n = this; const i = n.constructor; return e === void 0 ? r = Te(n, n.e <= i.toExpNeg || n.e >= i.toExpPos) : (ae(e, 1, ze), t === void 0 ? t = i.rounding : ae(t, 0, 8), n = E(new i(n), e, t), r = Te(n, e <= n.e || n.e <= i.toExpNeg, e)), n.isNeg() && !n.isZero() ? `-${r}` : r }; f.toSignificantDigits = f.toSD = function (e, t) { const r = this; const n = r.constructor; return e === void 0 ? (e = n.precision, t = n.rounding) : (ae(e, 1, ze), t === void 0 ? t = n.rounding : ae(t, 0, 8)), E(new n(r), e, t) }; f.toString = function () { const e = this; const t = e.constructor; const r = Te(e, e.e <= t.toExpNeg || e.e >= t.toExpPos); return e.isNeg() && !e.isZero() ? `-${r}` : r }; f.truncated = f.trunc = function () { return E(new this.constructor(this), this.e + 1, 1) }; f.valueOf = f.toJSON = function () { const e = this; const t = e.constructor; const r = Te(e, e.e <= t.toExpNeg || e.e >= t.toExpPos); return e.isNeg() ? `-${r}` : r }; function z(e) {
  let t; let r; let n; const i = e.length - 1; let o = ''; let s = e[0]; if (i > 0) { for (o += s, t = 1; t < i; t++)n = `${e[t]}`, r = b - n.length, r && (o += He(r)), o += n; s = e[t], n = `${s}`, r = b - n.length, r && (o += He(r)) }
  else if (s === 0) {
    return '0'
  } for (;s % 10 === 0;)s /= 10; return o + s
} function ae(e, t, r) {
  if (e !== ~~e || e < t || e > r)
    throw new Error(Ye + e)
} function sr(e, t, r, n) { let i, o, s, a; for (o = e[0]; o >= 10; o /= 10)--t; return --t < 0 ? (t += b, i = 0) : (i = Math.ceil((t + 1) / b), t %= b), o = 10 ** (b - t), a = e[i] % o | 0, n == null ? t < 3 ? (t == 0 ? a = a / 100 | 0 : t == 1 && (a = a / 10 | 0), s = r < 4 && a == 99999 || r > 3 && a == 49999 || a == 5e4 || a == 0) : s = (r < 4 && a + 1 == o || r > 3 && a + 1 == o / 2) && (e[i + 1] / o / 100 | 0) == 10 ** (t - 2) - 1 || (a == o / 2 || a == 0) && (e[i + 1] / o / 100 | 0) == 0 : t < 4 ? (t == 0 ? a = a / 1e3 | 0 : t == 1 ? a = a / 100 | 0 : t == 2 && (a = a / 10 | 0), s = (n || r < 4) && a == 9999 || !n && r > 3 && a == 4999) : s = ((n || r < 4) && a + 1 == o || !n && r > 3 && a + 1 == o / 2) && (e[i + 1] / o / 1e3 | 0) == 10 ** (t - 3) - 1, s } function nn(e, t, r) { for (var n, i = [0], o, s = 0, a = e.length; s < a;) { for (o = i.length; o--;)i[o] *= t; for (i[0] += qi.indexOf(e.charAt(s++)), n = 0; n < i.length; n++)i[n] > r - 1 && (i[n + 1] === void 0 && (i[n + 1] = 0), i[n + 1] += i[n] / r | 0, i[n] %= r) } return i.reverse() } function Hc(e, t) {
  let r, n, i; if (t.isZero())
    return t; n = t.d.length, n < 32 ? (r = Math.ceil(n / 3), i = (1 / pn(4, r)).toString()) : (r = 16, i = '2.3283064365386962890625e-10'), e.precision += r, t = xt(e, 1, t.times(i), new e(1)); for (let o = r; o--;) { const s = t.times(t); t = s.times(s).minus(s).times(8).plus(1) } return e.precision -= r, t
} var $ = (function () {
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
    let u; let c; let p; let m; let g; let h; let y; let O; let T; let S; let R; let _; let I; let ce; let Gt; let Q; let se; let Oe; let Z; let mt; const $r = n.constructor; const Hn = n.s == i.s ? 1 : -1; let X = n.d; let F = i.d; if (!X || !X[0] || !F || !F[0])
      return new $r(!n.s || !i.s || (X ? F && X[0] == F[0] : !F) ? Number.NaN : X && X[0] == 0 || !F ? Hn * 0 : Hn / 0); for (l ? (g = 1, c = n.e - i.e) : (l = ye, g = b, c = ne(n.e / g) - ne(i.e / g)), Z = F.length, se = X.length, T = new $r(Hn), S = T.d = [], p = 0; F[p] == (X[p] || 0); p++);if (F[p] > (X[p] || 0) && c--, o == null ? (ce = o = $r.precision, s = $r.rounding) : a ? ce = o + (n.e - i.e) + 1 : ce = o, ce < 0) {
      S.push(1), h = !0
    }
    else {
      if (ce = ce / g + 2 | 0, p = 0, Z == 1) { for (m = 0, F = F[0], ce++; (p < se || m) && ce--; p++)Gt = m * l + (X[p] || 0), S[p] = Gt / F | 0, m = Gt % F | 0; h = m || p < se }
      else { for (m = l / (F[0] + 1) | 0, m > 1 && (F = e(F, m, l), X = e(X, m, l), Z = F.length, se = X.length), Q = Z, R = X.slice(0, Z), _ = R.length; _ < Z;)R[_++] = 0; mt = F.slice(), mt.unshift(0), Oe = F[0], F[1] >= l / 2 && ++Oe; do m = 0, u = t(F, R, Z, _), u < 0 ? (I = R[0], Z != _ && (I = I * l + (R[1] || 0)), m = I / Oe | 0, m > 1 ? (m >= l && (m = l - 1), y = e(F, m, l), O = y.length, _ = R.length, u = t(y, R, O, _), u == 1 && (m--, r(y, Z < O ? mt : F, O, l))) : (m == 0 && (u = m = 1), y = F.slice()), O = y.length, O < _ && y.unshift(0), r(R, y, _, l), u == -1 && (_ = R.length, u = t(F, R, Z, _), u < 1 && (m++, r(R, Z < _ ? mt : F, _, l))), _ = R.length) : u === 0 && (m++, R = [0]), S[p++] = m, u && R[0] ? R[_++] = X[Q] || 0 : (R = [X[Q]], _ = 1); while ((Q++ < se || R[0] !== void 0) && ce--); h = R[0] !== void 0 }S[0] || S.shift()
    } if (g == 1) {
      T.e = c, Ms = h
    }
    else { for (p = 1, m = S[0]; m >= 10; m /= 10)p++; T.e = p + c * g - 1, E(T, a ? o + T.e + 1 : o, s, h) } return T
  }
}()); function E(e, t, r, n) {
  let i; let o; let s; let a; let l; let u; let c; let p; let m; const g = e.constructor; e:if (t != null) {
    if (p = e.d, !p)
      return e; for (i = 1, a = p[0]; a >= 10; a /= 10)i++; if (o = t - i, o < 0) {
      o += b, s = t, c = p[m = 0], l = c / 10 ** (i - s - 1) % 10 | 0
    }
    else if (m = Math.ceil((o + 1) / b), a = p.length, m >= a) {
      if (n) { for (;a++ <= m;)p.push(0); c = l = 0, i = 1, o %= b, s = o - b + 1 }
      else {
        break e
      }
    }
    else { for (c = a = p[m], i = 1; a >= 10; a /= 10)i++; o %= b, s = o - b + i, l = s < 0 ? 0 : c / 10 ** (i - s - 1) % 10 | 0 } if (n = n || t < 0 || p[m + 1] !== void 0 || (s < 0 ? c : c % 10 ** (i - s - 1)), u = r < 4 ? (l || n) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : l > 5 || l == 5 && (r == 4 || n || r == 6 && (o > 0 ? s > 0 ? c / 10 ** (i - s) : 0 : p[m - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7)), t < 1 || !p[0])
      return p.length = 0, u ? (t -= e.e + 1, p[0] = 10 ** ((b - t % b) % b), e.e = -t || 0) : p[0] = e.e = 0, e; if (o == 0 ? (p.length = m, a = 1, m--) : (p.length = m + 1, a = 10 ** (b - o), p[m] = s > 0 ? (c / 10 ** (i - s) % 10 ** s | 0) * a : 0), u) {
      for (;;) {
        if (m == 0) { for (o = 1, s = p[0]; s >= 10; s /= 10)o++; for (s = p[0] += a, a = 1; s >= 10; s /= 10)a++; o != a && (e.e++, p[0] == ye && (p[0] = 1)); break }
        else {
          if (p[m] += a, p[m] != ye)
            break; p[m--] = 0, a = 1
        }
      }
    } for (o = p.length; p[--o] === 0;)p.pop()
  } return w && (e.e > g.maxE ? (e.d = null, e.e = Number.NaN) : e.e < g.minE && (e.e = 0, e.d = [0])), e
} function Te(e, t, r) {
  if (!e.isFinite())
    return Gs(e); let n; const i = e.e; let o = z(e.d); const s = o.length; return t ? (r && (n = r - s) > 0 ? o = `${o.charAt(0)}.${o.slice(1)}${He(n)}` : s > 1 && (o = `${o.charAt(0)}.${o.slice(1)}`), o = o + (e.e < 0 ? 'e' : 'e+') + e.e) : i < 0 ? (o = `0.${He(-i - 1)}${o}`, r && (n = r - s) > 0 && (o += He(n))) : i >= s ? (o += He(i + 1 - s), r && (n = r - i - 1) > 0 && (o = `${o}.${He(n)}`)) : ((n = i + 1) < s && (o = `${o.slice(0, n)}.${o.slice(n)}`), r && (n = r - s) > 0 && (i + 1 === s && (o += '.'), o += He(n))), o
} function cn(e, t) { let r = e[0]; for (t *= b; r >= 10; r /= 10)t++; return t } function ln(e, t, r) {
  if (t > Wc)
    throw w = !0, r && (e.precision = r), new Error($s); return E(new e(sn), t, 1, !0)
} function ve(e, t, r) {
  if (t > ji)
    throw new Error($s); return E(new e(an), t, r, !0)
} function Bs(e) { let t = e.length - 1; let r = t * b + 1; if (t = e[t], t) { for (;t % 10 == 0; t /= 10)r--; for (t = e[0]; t >= 10; t /= 10)r++ } return r } function He(e) { for (var t = ''; e--;)t += '0'; return t } function Us(e, t, r, n) { let i; let o = new e(1); const s = Math.ceil(n / b + 4); for (w = !1; ;) { if (r % 2 && (o = o.times(t), Ls(o.d, s) && (i = !0)), r = ne(r / 2), r === 0) { r = o.d.length - 1, i && o.d[r] === 0 && ++o.d[r]; break }t = t.times(t), Ls(t.d, s) } return w = !0, o } function Ns(e) { return e.d[e.d.length - 1] & 1 } function Qs(e, t, r) { for (var n, i, o = new e(t[0]), s = 0; ++s < t.length;) { if (i = new e(t[s]), !i.s) { o = i; break }n = o.cmp(i), (n === r || n === 0 && o.s === r) && (o = i) } return o } function Bi(e, t) {
  let r; let n; let i; let o; let s; let a; let l; let u = 0; let c = 0; let p = 0; const m = e.constructor; const g = m.rounding; const h = m.precision; if (!e.d || !e.d[0] || e.e > 17)
    return new m(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : Number.NaN); for (t == null ? (w = !1, l = h) : l = t, a = new m(0.03125); e.e > -2;)e = e.times(a), p += 5; for (n = Math.log(2 ** p) / Math.LN10 * 2 + 5 | 0, l += n, r = o = s = new m(1), m.precision = l; ;) {
    if (o = E(o.times(e), l, 1), r = r.times(++c), a = s.plus($(o, r, l, 1)), z(a.d).slice(0, l) === z(s.d).slice(0, l)) {
      for (i = p; i--;)s = E(s.times(s), l, 1); if (t == null) {
        if (u < 3 && sr(s.d, l - n, g, u))
          m.precision = l += 10, r = o = a = new m(1), c = 0, u++; else return E(s, m.precision = h, g, w = !0)
      }
      else {
        return m.precision = h, s
      }
    }s = a
  }
} function Ke(e, t) {
  let r; let n; let i; let o; let s; let a; let l; let u; let c; let p; let m; let g = 1; const h = 10; let y = e; const O = y.d; const T = y.constructor; const S = T.rounding; const R = T.precision; if (y.s < 0 || !O || !O[0] || !y.e && O[0] == 1 && O.length == 1)
    return new T(O && !O[0] ? -1 / 0 : y.s != 1 ? Number.NaN : O ? 0 : y); if (t == null ? (w = !1, c = R) : c = t, T.precision = c += h, r = z(O), n = r.charAt(0), Math.abs(o = y.e) < 15e14) { for (;n < 7 && n != 1 || n == 1 && r.charAt(1) > 3;)y = y.times(e), r = z(y.d), n = r.charAt(0), g++; o = y.e, n > 1 ? (y = new T(`0.${r}`), o++) : y = new T(`${n}.${r.slice(1)}`) }
  else {
    return u = ln(T, c + 2, R).times(`${o}`), y = Ke(new T(`${n}.${r.slice(1)}`), c - h).plus(u), T.precision = R, t == null ? E(y, R, S, w = !0) : y
  } for (p = y, l = s = y = $(y.minus(1), y.plus(1), c, 1), m = E(y.times(y), c, 1), i = 3; ;) {
    if (s = E(s.times(m), c, 1), u = l.plus($(s, new T(i), c, 1)), z(u.d).slice(0, c) === z(l.d).slice(0, c)) {
      if (l = l.times(2), o !== 0 && (l = l.plus(ln(T, c + 2, R).times(`${o}`))), l = $(l, new T(g), c, 1), t == null) {
        if (sr(l.d, c - h, S, a))
          T.precision = c += h, u = s = y = $(p.minus(1), p.plus(1), c, 1), m = E(y.times(y), c, 1), i = a = 1; else return E(l, T.precision = R, S, w = !0)
      }
      else {
        return T.precision = R, l
      }
    }l = u, i += 2
  }
} function Gs(e) { return String(e.s * e.s / 0) } function on(e, t) {
  let r, n, i; for ((r = t.indexOf('.')) > -1 && (t = t.replace('.', '')), (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), n = 0; t.charCodeAt(n) === 48; n++);for (i = t.length; t.charCodeAt(i - 1) === 48; --i);if (t = t.slice(n, i), t) {
    if (i -= n, e.e = r = r - n - 1, e.d = [], n = (r + 1) % b, r < 0 && (n += b), n < i) { for (n && e.d.push(+t.slice(0, n)), i -= b; n < i;)e.d.push(+t.slice(n, n += b)); t = t.slice(n), n = b - t.length }
    else {
      n -= i
    } for (;n--;)t += '0'; e.d.push(+t), w && (e.e > e.constructor.maxE ? (e.d = null, e.e = Number.NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]))
  }
  else {
    e.e = 0, e.d = [0]
  } return e
} function Kc(e, t) {
  let r, n, i, o, s, a, l, u, c; if (t.includes('_')) {
    if (t = t.replace(/(\d)_(?=\d)/g, '$1'), js.test(t))
      return on(e, t)
  }
  else if (t === 'Infinity' || t === 'NaN') {
    return +t || (e.s = Number.NaN), e.e = Number.NaN, e.d = null, e
  } if (Qc.test(t))
    r = 16, t = t.toLowerCase(); else if (Uc.test(t))
    r = 2; else if (Gc.test(t))
    r = 8; else throw new Error(Ye + t); for (o = t.search(/p/i), o > 0 ? (l = +t.slice(o + 1), t = t.substring(2, o)) : t = t.slice(2), o = t.indexOf('.'), s = o >= 0, n = e.constructor, s && (t = t.replace('.', ''), a = t.length, o = a - o, i = Us(n, new n(r), o, o * 2)), u = nn(t, r, ye), c = u.length - 1, o = c; u[o] === 0; --o)u.pop(); return o < 0 ? new n(e.s * 0) : (e.e = cn(u, c), e.d = u, w = !1, s && (e = $(e, i, a * 4)), l && (e = e.times(Math.abs(l) < 54 ? 2 ** l : st.pow(2, l))), w = !0, e)
} function Yc(e, t) {
  let r; const n = t.d.length; if (n < 3)
    return t.isZero() ? t : xt(e, 2, t, t); r = 1.4 * Math.sqrt(n), r = r > 16 ? 16 : r | 0, t = t.times(1 / pn(5, r)), t = xt(e, 2, t, t); for (var i, o = new e(5), s = new e(16), a = new e(20); r--;)i = t.times(t), t = t.times(o.plus(i.times(s.times(i).minus(a)))); return t
} function xt(e, t, r, n, i) {
  let o; let s; let a; let l; let u = 1; const c = e.precision; const p = Math.ceil(c / b); for (w = !1, l = r.times(r), a = new e(n); ;) {
    if (s = $(a.times(l), new e(t++ * t++), c, 1), a = i ? n.plus(s) : n.minus(s), n = $(s.times(l), new e(t++ * t++), c, 1), s = a.plus(n), s.d[p] !== void 0) {
      for (o = p; s.d[o] === a.d[o] && o--;);if (o == -1)
        break
    }o = a, a = n, n = s, s = o, u++
  } return w = !0, s.d.length = p + 1, s
} function pn(e, t) { for (var r = e; --t;)r *= e; return r } function Js(e, t) {
  let r; const n = t.s < 0; const i = ve(e, e.precision, 1); const o = i.times(0.5); if (t = t.abs(), t.lte(o))
    return $e = n ? 4 : 1, t; if (r = t.divToInt(i), r.isZero()) {
    $e = n ? 3 : 2
  }
  else {
    if (t = t.minus(r.times(i)), t.lte(o))
      return $e = Ns(r) ? n ? 2 : 3 : n ? 4 : 1, t; $e = Ns(r) ? n ? 1 : 4 : n ? 3 : 2
  } return t.minus(i).abs()
} function Ui(e, t, r, n) {
  let i; let o; let s; let a; let l; let u; let c; let p; let m; const g = e.constructor; const h = r !== void 0; if (h ? (ae(r, 1, ze), n === void 0 ? n = g.rounding : ae(n, 0, 8)) : (r = g.precision, n = g.rounding), !e.isFinite()) {
    c = Gs(e)
  }
  else {
    for (c = Te(e), s = c.indexOf('.'), h ? (i = 2, t == 16 ? r = r * 4 - 3 : t == 8 && (r = r * 3 - 2)) : i = t, s >= 0 && (c = c.replace('.', ''), m = new g(1), m.e = c.length - s, m.d = nn(Te(m), 10, i), m.e = m.d.length), p = nn(c, 10, i), o = l = p.length; p[--l] == 0;)p.pop(); if (!p[0]) {
      c = h ? '0p+0' : '0'
    }
    else {
      if (s < 0 ? o-- : (e = new g(e), e.d = p, e.e = o, e = $(e, m, r, n, 0, i), p = e.d, o = e.e, u = Ms), s = p[r], a = i / 2, u = u || p[r + 1] !== void 0, u = n < 4 ? (s !== void 0 || u) && (n === 0 || n === (e.s < 0 ? 3 : 2)) : s > a || s === a && (n === 4 || u || n === 6 && p[r - 1] & 1 || n === (e.s < 0 ? 8 : 7)), p.length = r, u) {
        for (;++p[--r] > i - 1;)p[r] = 0, r || (++o, p.unshift(1))
      } for (l = p.length; !p[l - 1]; --l);for (s = 0, c = ''; s < l; s++)c += qi.charAt(p[s]); if (h) {
        if (l > 1) {
          if (t == 16 || t == 8) { for (s = t == 16 ? 4 : 3, --l; l % s; l++)c += '0'; for (p = nn(c, i, t), l = p.length; !p[l - 1]; --l);for (s = 1, c = '1.'; s < l; s++)c += qi.charAt(p[s]) }
          else {
            c = `${c.charAt(0)}.${c.slice(1)}`
          }
        }c = c + (o < 0 ? 'p' : 'p+') + o
      }
      else if (o < 0) { for (;++o;)c = `0${c}`; c = `0.${c}` }
      else if (++o > l) {
        for (o -= l; o--;)c += '0'
      }
      else {
        o < l && (c = `${c.slice(0, o)}.${c.slice(o)}`)
      }
    }c = (t == 16 ? '0x' : t == 2 ? '0b' : t == 8 ? '0o' : '') + c
  } return e.s < 0 ? `-${c}` : c
} function Ls(e, t) {
  if (e.length > t)
    return e.length = t, !0
} function zc(e) { return new this(e).abs() } function Zc(e) { return new this(e).acos() } function Xc(e) { return new this(e).acosh() } function ep(e, t) { return new this(e).plus(t) } function tp(e) { return new this(e).asin() } function rp(e) { return new this(e).asinh() } function np(e) { return new this(e).atan() } function ip(e) { return new this(e).atanh() } function op(e, t) { e = new this(e), t = new this(t); let r; const n = this.precision; const i = this.rounding; const o = n + 4; return !e.s || !t.s ? r = new this(Number.NaN) : !e.d && !t.d ? (r = ve(this, o, 1).times(t.s > 0 ? 0.25 : 0.75), r.s = e.s) : !t.d || e.isZero() ? (r = t.s < 0 ? ve(this, n, i) : new this(0), r.s = e.s) : !e.d || t.isZero() ? (r = ve(this, o, 1).times(0.5), r.s = e.s) : t.s < 0 ? (this.precision = o, this.rounding = 1, r = this.atan($(e, t, o, 1)), t = ve(this, o, 1), this.precision = n, this.rounding = i, r = e.s < 0 ? r.minus(t) : r.plus(t)) : r = this.atan($(e, t, o, 1)), r } function sp(e) { return new this(e).cbrt() } function ap(e) { return E(e = new this(e), e.e + 1, 2) } function lp(e, t, r) { return new this(e).clamp(t, r) } function up(e) {
  if (!e || typeof e != 'object')
    throw new Error(`${un}Object expected`); let t; let r; let n; const i = e.defaults === !0; const o = ['precision', 1, ze, 'rounding', 0, 8, 'toExpNeg', -wt, 0, 'toExpPos', 0, wt, 'maxE', 0, wt, 'minE', -wt, 0, 'modulo', 0, 9]; for (t = 0; t < o.length; t += 3) {
    if (r = o[t], i && (this[r] = Vi[r]), (n = e[r]) !== void 0) {
      if (ne(n) === n && n >= o[t + 1] && n <= o[t + 2])
        this[r] = n; else throw new Error(`${Ye + r}: ${n}`)
    }
  } if (r = 'crypto', i && (this[r] = Vi[r]), (n = e[r]) !== void 0) {
    if (n === !0 || n === !1 || n === 0 || n === 1) {
      if (n) {
        if (typeof crypto < 'u' && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[r] = !0; else throw new Error(qs)
      }
      else {
        this[r] = !1
      }
    }
    else {
      throw new Error(`${Ye + r}: ${n}`)
    }
  } return this
} function cp(e) { return new this(e).cos() } function pp(e) { return new this(e).cosh() } function Ws(e) {
  let t, r, n; function i(o) {
    let s; let a; let l; const u = this; if (!(u instanceof i))
      return new i(o); if (u.constructor = i, Fs(o)) { u.s = o.s, w ? !o.d || o.e > i.maxE ? (u.e = Number.NaN, u.d = null) : o.e < i.minE ? (u.e = 0, u.d = [0]) : (u.e = o.e, u.d = o.d.slice()) : (u.e = o.e, u.d = o.d ? o.d.slice() : o.d); return } if (l = typeof o, l === 'number') { if (o === 0) { u.s = 1 / o < 0 ? -1 : 1, u.e = 0, u.d = [0]; return } if (o < 0 ? (o = -o, u.s = -1) : u.s = 1, o === ~~o && o < 1e7) { for (s = 0, a = o; a >= 10; a /= 10)s++; w ? s > i.maxE ? (u.e = Number.NaN, u.d = null) : s < i.minE ? (u.e = 0, u.d = [0]) : (u.e = s, u.d = [o]) : (u.e = s, u.d = [o]); return } if (o * 0 !== 0) { o || (u.s = Number.NaN), u.e = Number.NaN, u.d = null; return } return on(u, o.toString()) } if (l === 'string')
      return (a = o.charCodeAt(0)) === 45 ? (o = o.slice(1), u.s = -1) : (a === 43 && (o = o.slice(1)), u.s = 1), js.test(o) ? on(u, o) : Kc(u, o); if (l === 'bigint')
      return o < 0 ? (o = -o, u.s = -1) : u.s = 1, on(u, o.toString()); throw new Error(Ye + o)
  } if (i.prototype = f, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.EUCLID = 9, i.config = i.set = up, i.clone = Ws, i.isDecimal = Fs, i.abs = zc, i.acos = Zc, i.acosh = Xc, i.add = ep, i.asin = tp, i.asinh = rp, i.atan = np, i.atanh = ip, i.atan2 = op, i.cbrt = sp, i.ceil = ap, i.clamp = lp, i.cos = cp, i.cosh = pp, i.div = dp, i.exp = mp, i.floor = fp, i.hypot = gp, i.ln = hp, i.log = yp, i.log10 = bp, i.log2 = Ep, i.max = wp, i.min = xp, i.mod = Pp, i.mul = vp, i.pow = Tp, i.random = Cp, i.round = Rp, i.sign = Sp, i.sin = Ap, i.sinh = Ip, i.sqrt = kp, i.sub = Op, i.sum = _p, i.tan = Dp, i.tanh = Np, i.trunc = Lp, e === void 0 && (e = {}), e && e.defaults !== !0) {
    for (n = ['precision', 'rounding', 'toExpNeg', 'toExpPos', 'maxE', 'minE', 'modulo', 'crypto'], t = 0; t < n.length;)e.hasOwnProperty(r = n[t++]) || (e[r] = this[r])
  } return i.config(e), i
} function dp(e, t) { return new this(e).div(t) } function mp(e) { return new this(e).exp() } function fp(e) { return E(e = new this(e), e.e + 1, 3) } function gp() {
  let e; let t; let r = new this(0); for (w = !1, e = 0; e < arguments.length;) {
    if (t = new this(arguments[e++]), t.d) {
      r.d && (r = r.plus(t.times(t)))
    }
    else {
      if (t.s)
        return w = !0, new this(1 / 0); r = t
    }
  } return w = !0, r.sqrt()
} function Fs(e) { return e instanceof st || e && e.toStringTag === Vs || !1 } function hp(e) { return new this(e).ln() } function yp(e, t) { return new this(e).log(t) } function Ep(e) { return new this(e).log(2) } function bp(e) { return new this(e).log(10) } function wp() { return Qs(this, arguments, -1) } function xp() { return Qs(this, arguments, 1) } function Pp(e, t) { return new this(e).mod(t) } function vp(e, t) { return new this(e).mul(t) } function Tp(e, t) { return new this(e).pow(t) } function Cp(e) {
  let t; let r; let n; let i; let o = 0; const s = new this(1); let a = []; if (e === void 0 ? e = this.precision : ae(e, 1, ze), n = Math.ceil(e / b), this.crypto) {
    if (crypto.getRandomValues) {
      for (t = crypto.getRandomValues(new Uint32Array(n)); o < n;)i = t[o], i >= 429e7 ? t[o] = crypto.getRandomValues(new Uint32Array(1))[0] : a[o++] = i % 1e7
    }
    else if (crypto.randomBytes) { for (t = crypto.randomBytes(n *= 4); o < n;)i = t[o] + (t[o + 1] << 8) + (t[o + 2] << 16) + ((t[o + 3] & 127) << 24), i >= 214e7 ? crypto.randomBytes(4).copy(t, o) : (a.push(i % 1e7), o += 4); o = n / 4 }
    else {
      throw new Error(qs)
    }
  }
  else {
    for (;o < n;)a[o++] = Math.random() * 1e7 | 0
  } for (n = a[--o], e %= b, n && e && (i = 10 ** (b - e), a[o] = (n / i | 0) * i); a[o] === 0; o--)a.pop(); if (o < 0) {
    r = 0, a = [0]
  }
  else { for (r = -1; a[0] === 0; r -= b)a.shift(); for (n = 1, i = a[0]; i >= 10; i /= 10)n++; n < b && (r -= b - n) } return s.e = r, s.d = a, s
} function Rp(e) { return E(e = new this(e), e.e + 1, this.rounding) } function Sp(e) { return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || Number.NaN } function Ap(e) { return new this(e).sin() } function Ip(e) { return new this(e).sinh() } function kp(e) { return new this(e).sqrt() } function Op(e, t) { return new this(e).sub(t) } function _p() { let e = 0; const t = arguments; let r = new this(t[e]); for (w = !1; r.s && ++e < t.length;)r = r.plus(t[e]); return w = !0, E(r, this.precision, this.rounding) } function Dp(e) { return new this(e).tan() } function Np(e) { return new this(e).tanh() } function Lp(e) { return E(e = new this(e), e.e + 1, 1) }f[Symbol.for('nodejs.util.inspect.custom')] = f.toString; f[Symbol.toStringTag] = 'Decimal'; var st = f.constructor = Ws(Vi); sn = new st(sn); an = new st(an); var Ce = st; function Pt(e) { return e === null ? e : Array.isArray(e) ? e.map(Pt) : typeof e == 'object' ? Fp(e) ? Mp(e) : bt(e, Pt) : e } function Fp(e) { return e !== null && typeof e == 'object' && typeof e.$type == 'string' } function Mp({ $type: e, value: t }) { switch (e) { case 'BigInt':return BigInt(t); case 'Bytes':{ const { buffer: r, byteOffset: n, byteLength: i } = Buffer.from(t, 'base64'); return new Uint8Array(r, n, i) } case 'DateTime':return new Date(t); case 'Decimal':return new Ce(t); case 'Json':return JSON.parse(t); default:Me(t, 'Unknown tagged value') } } function vt(e) { return e.substring(0, 1).toLowerCase() + e.substring(1) } function Tt(e) { return e instanceof Date || Object.prototype.toString.call(e) === '[object Date]' } function dn(e) { return e.toString() !== 'Invalid Date' } function Ct(e) { return st.isDecimal(e) ? !0 : e !== null && typeof e == 'object' && typeof e.s == 'number' && typeof e.e == 'number' && typeof e.toFixed == 'function' && Array.isArray(e.d) } const Xs = D(Oi()); const Zs = D(require('node:fs'))

const Hs = { keyword: Ne, entity: Ne, value: e => Y(it(e)), punctuation: it, directive: Ne, function: Ne, variable: e => Y(it(e)), string: e => Y(je(e)), boolean: De, number: Ne, comment: Ht }; const $p = e => e; const mn = {}; let qp = 0; var P = { manual: mn.Prism && mn.Prism.manual, disableWorkerMessageHandler: mn.Prism && mn.Prism.disableWorkerMessageHandler, util: { encode(e) {
  if (e instanceof Ee) { const t = e; return new Ee(t.type, P.util.encode(t.content), t.alias) }
  else {
    return Array.isArray(e) ? e.map(P.util.encode) : e.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00A0/g, ' ')
  }
}, type(e) { return Object.prototype.toString.call(e).slice(8, -1) }, objId(e) { return e.__id || Object.defineProperty(e, '__id', { value: ++qp }), e.__id }, clone: function e(t, r) {
  let n; let i; const o = P.util.type(t); switch (r = r || { }, o) {
    case 'Object':if (i = P.util.objId(t), r[i])
      return r[i]; n = {}, r[i] = n; for (const s in t)t.hasOwnProperty(s) && (n[s] = e(t[s], r)); return n; case 'Array':return i = P.util.objId(t), r[i] ? r[i] : (n = [], r[i] = n, t.forEach((s, a) => { n[a] = e(s, r) }), n); default:return t
  }
} }, languages: { extend(e, t) { const r = P.util.clone(P.languages[e]); for (const n in t)r[n] = t[n]; return r }, insertBefore(e, t, r, n) {
  n = n || P.languages; const i = n[e]; const o = {}; for (const a in i) {
    if (i.hasOwnProperty(a)) {
      if (a == t) {
        for (const l in r)r.hasOwnProperty(l) && (o[l] = r[l])
      } r.hasOwnProperty(a) || (o[a] = i[a])
    }
  } const s = n[e]; return n[e] = o, P.languages.DFS(P.languages, function (a, l) { l === s && a != e && (this[a] = o) }), o
}, DFS: function e(t, r, n, i) {
  i = i || {}; const o = P.util.objId; for (const s in t) {
    if (t.hasOwnProperty(s)) { r.call(t, s, t[s], n || s); const a = t[s]; const l = P.util.type(a); l === 'Object' && !i[o(a)] ? (i[o(a)] = !0, e(a, r, null, i)) : l === 'Array' && !i[o(a)] && (i[o(a)] = !0, e(a, r, s, i)) }
  }
} }, plugins: {}, highlight(e, t, r) { const n = { code: e, grammar: t, language: r }; return P.hooks.run('before-tokenize', n), n.tokens = P.tokenize(n.code, n.grammar), P.hooks.run('after-tokenize', n), Ee.stringify(P.util.encode(n.tokens), n.language) }, matchGrammar(e, t, r, n, i, o, s) {
  for (const y in r) {
    if (!r.hasOwnProperty(y) || !r[y])
      continue; if (y == s)
      return; let O = r[y]; O = P.util.type(O) === 'Array' ? O : [O]; for (let T = 0; T < O.length; ++T) {
      let S = O[T]; const R = S.inside; const _ = !!S.lookbehind; const I = !!S.greedy; let ce = 0; const Gt = S.alias; if (I && !S.pattern.global) { const Q = S.pattern.toString().match(/[imuy]*$/)[0]; S.pattern = new RegExp(S.pattern.source, `${Q}g`) }S = S.pattern || S; for (let Q = n, se = i; Q < t.length; se += t[Q].length, ++Q) {
        let Oe = t[Q]; if (t.length > e.length)
          return; if (Oe instanceof Ee)
          continue; if (I && Q != t.length - 1) {
          S.lastIndex = se; var p = S.exec(e); if (!p)
            break; var c = p.index + (_ ? p[1].length : 0); var m = p.index + p[0].length; let a = Q; let l = se; for (let F = t.length; a < F && (l < m || !t[a].type && !t[a - 1].greedy); ++a)l += t[a].length, c >= l && (++Q, se = l); if (t[Q] instanceof Ee)
            continue; u = a - Q, Oe = e.slice(se, l), p.index -= se
        }
        else { S.lastIndex = 0; var p = S.exec(Oe); var u = 1 } if (!p) {
          if (o)
            break; continue
        }_ && (ce = p[1] ? p[1].length : 0); var c = p.index + ce; var p = p[0].slice(ce); var m = c + p.length; const g = Oe.slice(0, c); const h = Oe.slice(m); const Z = [Q, u]; g && (++Q, se += g.length, Z.push(g)); const mt = new Ee(y, R ? P.tokenize(p, R) : p, Gt, p, I); if (Z.push(mt), h && Z.push(h), Array.prototype.splice.apply(t, Z), u != 1 && P.matchGrammar(e, t, r, Q, se, !0, y), o)
          break
      }
    }
  }
}, tokenize(e, t) { const r = [e]; const n = t.rest; if (n) { for (const i in n)t[i] = n[i]; delete t.rest } return P.matchGrammar(e, r, t, 0, 0, !1), r }, hooks: { all: {}, add(e, t) { const r = P.hooks.all; r[e] = r[e] || [], r[e].push(t) }, run(e, t) {
  const r = P.hooks.all[e]; if (!(!r || !r.length)) {
    for (var n = 0, i; i = r[n++];)i(t)
  }
} }, Token: Ee }; P.languages.clike = { 'comment': [{ pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0 }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 }], 'string': { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0 }, 'class-name': { pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|catch\s+\()[\w.\\]+/i, lookbehind: !0, inside: { punctuation: /[.\\]/ } }, 'keyword': /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/, 'boolean': /\b(?:true|false)\b/, 'function': /\w+(?=\()/, 'number': /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i, 'operator': /--?|\+\+?|!={0,2}|<=?|>=?|={1,3}|&&?|\|\|?|[?*/~^%]/, 'punctuation': /[{}[\];(),.:]/ }; P.languages.javascript = P.languages.extend('clike', { 'class-name': [P.languages.clike['class-name'], { pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/, lookbehind: !0 }], 'keyword': [{ pattern: /((?:^|\})\s*)(?:catch|finally)\b/, lookbehind: !0 }, { pattern: /(^|[^.])\b(?:as|async(?=\s*(?:function\b|[($\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/, lookbehind: !0 }], 'number': /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/, 'function': /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/, 'operator': /-[-=]?|\+[+=]?|!={0,2}|<<?=?|>{1,3}=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/ }); P.languages.javascript['class-name'][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/; P.languages.insertBefore('javascript', 'keyword', { 'regex': { pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/, lookbehind: !0, greedy: !0 }, 'function-variable': { pattern: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/, alias: 'function' }, 'parameter': [{ pattern: /(function(?:\s(?:[\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*[\x09-\x0D ])*(?:[^\s\d\0-\x08\x0E-\x1F!"#\x25-\x2F\x3A-\x40[\\\]^`\x7B-\x9F][\w$\xA0-\uFFFF]*|[\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+(?:[^\s\0-\x08\x0E-\x1F!"#\x25-\x2F\x3A-\x40[\\\]^`\x7B-\x9F][\w$\xA0-\uFFFF]*)?))?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/, lookbehind: !0, inside: P.languages.javascript }, { pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i, inside: P.languages.javascript }, { pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/, lookbehind: !0, inside: P.languages.javascript }, { pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?:[\x09-\x0D ]\s*)?\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/, lookbehind: !0, inside: P.languages.javascript }], 'constant': /\b[A-Z](?:[A-Z_]|\dx?)*\b/ }); P.languages.markup && P.languages.markup.tag.addInlined('script', 'javascript'); P.languages.js = P.languages.javascript; P.languages.typescript = P.languages.extend('javascript', { keyword: /\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\b/, builtin: /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/ }); P.languages.ts = P.languages.typescript; function Ee(e, t, r, n, i) { this.type = e, this.content = t, this.alias = r, this.length = (n || '').length | 0, this.greedy = !!i }Ee.stringify = function (e, t) { return typeof e == 'string' ? e : Array.isArray(e) ? e.map((r) => { return Ee.stringify(r, t) }).join('') : Vp(e.type)(e.content) }; function Vp(e) { return Hs[e] || $p } function Ks(e) { return jp(e, P.languages.javascript) } function jp(e, t) { return P.tokenize(e, t).map(n => Ee.stringify(n)).join('') } const Ys = D(Ts()); function zs(e) { return (0, Ys.default)(e) } const fn = class e {
  constructor(t, r) { d(this, 'firstLineNumber'); d(this, 'lines'); this.firstLineNumber = t, this.lines = r } static read(t) {
    let r; try { r = Zs.default.readFileSync(t, 'utf-8') }
    catch { return null } return e.fromContent(r)
  }

  static fromContent(t) { const r = t.split(/\r?\n/); return new e(1, r) } get lastLineNumber() { return this.firstLineNumber + this.lines.length - 1 }mapLineAt(t, r) {
    if (t < this.firstLineNumber || t > this.lines.length + this.firstLineNumber)
      return this; const n = t - this.firstLineNumber; const i = [...this.lines]; return i[n] = r(i[n]), new e(this.firstLineNumber, i)
  }

  mapLines(t) { return new e(this.firstLineNumber, this.lines.map((r, n) => t(r, this.firstLineNumber + n))) }lineAt(t) { return this.lines[t - this.firstLineNumber] }prependSymbolAt(t, r) { return this.mapLines((n, i) => i === t ? `${r} ${n}` : `  ${n}`) }slice(t, r) {
    const n = this.lines.slice(t - 1, r).join(`
`); return new e(t, zs(n).split(`
`))
  }

  highlight() {
    const t = Ks(this.toString()); return new e(this.firstLineNumber, t.split(`
`))
  }

  toString() {
    return this.lines.join(`
`)
  }
}; const Bp = { red: fe, gray: Ht, dim: _e, bold: Y, underline: ee, highlightSource: e => e.highlight() }; const Up = { red: e => e, gray: e => e, dim: e => e, bold: e => e, underline: e => e, highlightSource: e => e }; function Qp({ message: e, originalMethod: t, isPanic: r, callArguments: n }) { return { functionName: `prisma.${t}()`, message: e, isPanic: r ?? !1, callArguments: n } } function Gp({ callsite: e, message: t, originalMethod: r, isPanic: n, callArguments: i }, o) {
  const s = Qp({ message: t, originalMethod: r, isPanic: n, callArguments: i }); if (!e || typeof window < 'u' || process.env.NODE_ENV === 'production')
    return s; const a = e.getLocation(); if (!a || !a.lineNumber || !a.columnNumber)
    return s; const l = Math.max(1, a.lineNumber - 3); let u = fn.read(a.fileName)?.slice(l, a.lineNumber); const c = u?.lineAt(a.lineNumber); if (u && c) {
    const p = Wp(c); const m = Jp(c); if (!m)
      return s; s.functionName = `${m.code})`, s.location = a, n || (u = u.mapLineAt(a.lineNumber, h => h.slice(0, m.openingBraceIndex))), u = o.highlightSource(u); const g = String(u.lastLineNumber).length; if (s.contextLines = u.mapLines((h, y) => `${o.gray(String(y).padStart(g))} ${h}`).mapLines(h => o.dim(h)).prependSymbolAt(a.lineNumber, o.bold(o.red('\u2192'))), i) { let h = p + g + 1; h += 2, s.callArguments = (0, Xs.default)(i, h).slice(h) }
  } return s
} function Jp(e) { const t = Object.keys(tr.ModelAction).join('|'); const n = new RegExp(String.raw`\.(${t})\(`).exec(e); if (n) { const i = n.index + n[0].length; const o = e.lastIndexOf(' ', n.index) + 1; return { code: e.slice(o, i), openingBraceIndex: i } } return null } function Wp(e) {
  let t = 0; for (let r = 0; r < e.length; r++) {
    if (e.charAt(r) !== ' ')
      return t; t++
  } return t
} function Hp({ functionName: e, location: t, message: r, isPanic: n, contextLines: i, callArguments: o }, s) {
  const a = ['']; const l = t ? ' in' : ':'; if (n ? (a.push(s.red(`Oops, an unknown error occurred! This is ${s.bold('on us')}, you did nothing wrong.`)), a.push(s.red(`It occurred in the ${s.bold(`\`${e}\``)} invocation${l}`))) : a.push(s.red(`Invalid ${s.bold(`\`${e}\``)} invocation${l}`)), t && a.push(s.underline(Kp(t))), i) { a.push(''); const u = [i.toString()]; o && (u.push(o), u.push(s.dim(')'))), a.push(u.join('')), o && a.push('') }
  else {
    a.push(''), o && a.push(o), a.push('')
  } return a.push(r), a.join(`
`)
} function Kp(e) { const t = [e.fileName]; return e.lineNumber && t.push(String(e.lineNumber)), e.columnNumber && t.push(String(e.columnNumber)), t.join(':') } function gn(e) { const t = e.showColors ? Bp : Up; let r; return r = Gp(e, t), Hp(r, t) } const sa = D(Qi()); function na(e, t, r) { const n = ia(e); const i = Yp(n); const o = Zp(i); o ? hn(o, t, r) : t.addErrorMessage(() => 'Unknown error') } function ia(e) { return e.errors.flatMap(t => t.kind === 'Union' ? ia(t) : [t]) } function Yp(e) { const t = new Map(); const r = []; for (const n of e) { if (n.kind !== 'InvalidArgumentType') { r.push(n); continue } const i = `${n.selectionPath.join('.')}:${n.argumentPath.join('.')}`; const o = t.get(i); o ? t.set(i, { ...n, argument: { ...n.argument, typeNames: zp(o.argument.typeNames, n.argument.typeNames) } }) : t.set(i, n) } return r.push(...t.values()), r } function zp(e, t) { return [...new Set(e.concat(t))] } function Zp(e) { return $i(e, (t, r) => { const n = ta(t); const i = ta(r); return n !== i ? n - i : ra(t) - ra(r) }) } function ta(e) { let t = 0; return Array.isArray(e.selectionPath) && (t += e.selectionPath.length), Array.isArray(e.argumentPath) && (t += e.argumentPath.length), t } function ra(e) { switch (e.kind) { case 'InvalidArgumentValue':case 'ValueTooLarge':return 20; case 'InvalidArgumentType':return 10; case 'RequiredArgumentMissing':return -10; default:return 0 } } const de = class {constructor(t, r) { this.name = t; this.value = r; d(this, 'isRequired', !1) }makeRequired() { return this.isRequired = !0, this }write(t) { const { colors: { green: r } } = t.context; t.addMarginSymbol(r(this.isRequired ? '+' : '?')), t.write(r(this.name)), this.isRequired || t.write(r('?')), t.write(r(': ')), typeof this.value == 'string' ? t.write(r(this.value)) : t.write(this.value) }}; const Rt = class {
  constructor(t = 0, r) { this.context = r; d(this, 'lines', []); d(this, 'currentLine', ''); d(this, 'currentIndent', 0); d(this, 'marginSymbol'); d(this, 'afterNextNewLineCallback'); this.currentIndent = t }write(t) { return typeof t == 'string' ? this.currentLine += t : t.write(this), this }writeJoined(t, r, n = (i, o) => o.write(i)) { const i = r.length - 1; for (let o = 0; o < r.length; o++)n(r[o], this), o !== i && this.write(t); return this }writeLine(t) { return this.write(t).newLine() }newLine() { this.lines.push(this.indentedCurrentLine()), this.currentLine = '', this.marginSymbol = void 0; const t = this.afterNextNewLineCallback; return this.afterNextNewLineCallback = void 0, t?.(), this }withIndent(t) { return this.indent(), t(this), this.unindent(), this }afterNextNewline(t) { return this.afterNextNewLineCallback = t, this }indent() { return this.currentIndent++, this }unindent() { return this.currentIndent > 0 && this.currentIndent--, this }addMarginSymbol(t) { return this.marginSymbol = t, this }toString() {
    return this.lines.concat(this.indentedCurrentLine()).join(`
`)
  }

  getCurrentLineLength() { return this.currentLine.length }indentedCurrentLine() { const t = this.currentLine.padStart(this.currentLine.length + 2 * this.currentIndent); return this.marginSymbol ? this.marginSymbol + t.slice(1) : t }
}; const yn = class {constructor(t) { this.value = t }write(t) { t.write(this.value) }markAsError() { this.value.markAsError() }}; const En = e => e; const bn = { bold: En, red: En, green: En, dim: En, enabled: !1 }; const oa = { bold: Y, red: fe, green: je, dim: _e, enabled: !0 }; const St = { write(e) { e.writeLine(',') } }; const Re = class {constructor(t) { this.contents = t; d(this, 'isUnderlined', !1); d(this, 'color', t => t) }underline() { return this.isUnderlined = !0, this }setColor(t) { return this.color = t, this }write(t) { const r = t.getCurrentLineLength(); t.write(this.color(this.contents)), this.isUnderlined && t.afterNextNewline(() => { t.write(' '.repeat(r)).writeLine(this.color('~'.repeat(this.contents.length))) }) }}; const Ze = class {constructor() { d(this, 'hasError', !1) }markAsError() { return this.hasError = !0, this }}; const At = class extends Ze {constructor() { super(...arguments); d(this, 'items', []) }addItem(r) { return this.items.push(new yn(r)), this }getField(r) { return this.items[r] }getPrintWidth() { return this.items.length === 0 ? 2 : Math.max(...this.items.map(n => n.value.getPrintWidth())) + 2 }write(r) { if (this.items.length === 0) { this.writeEmpty(r); return } this.writeWithItems(r) }writeEmpty(r) { const n = new Re('[]'); this.hasError && n.setColor(r.context.colors.red).underline(), r.write(n) }writeWithItems(r) { const { colors: n } = r.context; r.writeLine('[').withIndent(() => r.writeJoined(St, this.items).newLine()).write(']'), this.hasError && r.afterNextNewline(() => { r.writeLine(n.red('~'.repeat(this.getPrintWidth()))) }) }asObject() {}}; const It = class e extends Ze {
  constructor() { super(...arguments); d(this, 'fields', {}); d(this, 'suggestions', []) }addField(r) { this.fields[r.name] = r }addSuggestion(r) { this.suggestions.push(r) }getField(r) { return this.fields[r] }getDeepField(r) {
    const [n, ...i] = r; const o = this.getField(n); if (!o)
      return; let s = o; for (const a of i) {
      let l; if (s.value instanceof e ? l = s.value.getField(a) : s.value instanceof At && (l = s.value.getField(Number(a))), !l)
        return; s = l
    } return s
  }

  getDeepFieldValue(r) { return r.length === 0 ? this : this.getDeepField(r)?.value }hasField(r) { return !!this.getField(r) }removeAllFields() { this.fields = {} }removeField(r) { delete this.fields[r] }getFields() { return this.fields }isEmpty() { return Object.keys(this.fields).length === 0 }getFieldValue(r) { return this.getField(r)?.value }getDeepSubSelectionValue(r) {
    let n = this; for (const i of r) {
      if (!(n instanceof e))
        return; const o = n.getSubSelectionValue(i); if (!o)
        return; n = o
    } return n
  }

  getDeepSelectionParent(r) {
    const n = this.getSelectionParent(); if (!n)
      return; let i = n; for (const o of r) {
      const s = i.value.getFieldValue(o); if (!s || !(s instanceof e))
        return; const a = s.getSelectionParent(); if (!a)
        return; i = a
    } return i
  }

  getSelectionParent() {
    const r = this.getField('select')?.value.asObject(); if (r)
      return { kind: 'select', value: r }; const n = this.getField('include')?.value.asObject(); if (n)
      return { kind: 'include', value: n }
  }

  getSubSelectionValue(r) { return this.getSelectionParent()?.value.fields[r].value }getPrintWidth() { const r = Object.values(this.fields); return r.length == 0 ? 2 : Math.max(...r.map(i => i.getPrintWidth())) + 2 }write(r) { const n = Object.values(this.fields); if (n.length === 0 && this.suggestions.length === 0) { this.writeEmpty(r); return } this.writeWithContents(r, n) }asObject() { return this }writeEmpty(r) { const n = new Re('{}'); this.hasError && n.setColor(r.context.colors.red).underline(), r.write(n) }writeWithContents(r, n) { r.writeLine('{').withIndent(() => { r.writeJoined(St, [...n, ...this.suggestions]).newLine() }), r.write('}'), this.hasError && r.afterNextNewline(() => { r.writeLine(r.context.colors.red('~'.repeat(this.getPrintWidth()))) }) }
}; const H = class extends Ze {constructor(r) { super(); this.text = r }getPrintWidth() { return this.text.length }write(r) { const n = new Re(this.text); this.hasError && n.underline().setColor(r.context.colors.red), r.write(n) }asObject() {}}; const ar = class {constructor() { d(this, 'fields', []) }addField(t, r) { return this.fields.push({ write(n) { const { green: i, dim: o } = n.context.colors; n.write(i(o(`${t}: ${r}`))).addMarginSymbol(i(o('+'))) } }), this }write(t) { const { colors: { green: r } } = t.context; t.writeLine(r('{')).withIndent(() => { t.writeJoined(St, this.fields).newLine() }).write(r('}')).addMarginSymbol(r('+')) }}; function hn(e, t, r) { switch (e.kind) { case 'MutuallyExclusiveFields':ed(e, t); break; case 'IncludeOnScalar':td(e, t); break; case 'EmptySelection':rd(e, t, r); break; case 'UnknownSelectionField':sd(e, t); break; case 'InvalidSelectionValue':ad(e, t); break; case 'UnknownArgument':ld(e, t); break; case 'UnknownInputField':ud(e, t); break; case 'RequiredArgumentMissing':cd(e, t); break; case 'InvalidArgumentType':pd(e, t); break; case 'InvalidArgumentValue':dd(e, t); break; case 'ValueTooLarge':md(e, t); break; case 'SomeFieldsMissing':fd(e, t); break; case 'TooManyFieldsGiven':gd(e, t); break; case 'Union':na(e, t, r); break; default:throw new Error(`not implemented: ${e.kind}`) } } function ed(e, t) { const r = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject(); r && (r.getField(e.firstField)?.markAsError(), r.getField(e.secondField)?.markAsError()), t.addErrorMessage(n => `Please ${n.bold('either')} use ${n.green(`\`${e.firstField}\``)} or ${n.green(`\`${e.secondField}\``)}, but ${n.red('not both')} at the same time.`) } function td(e, t) {
  const [r, n] = lr(e.selectionPath); const i = e.outputType; const o = t.arguments.getDeepSelectionParent(r)?.value; if (o && (o.getField(n)?.markAsError(), i)) {
    for (const s of i.fields)s.isRelation && o.addSuggestion(new de(s.name, 'true'))
  } t.addErrorMessage((s) => {
    let a = `Invalid scalar field ${s.red(`\`${n}\``)} for ${s.bold('include')} statement`; return i ? a += ` on model ${s.bold(i.name)}. ${ur(s)}` : a += '.', a += `
Note that ${s.bold('include')} statements only accept relation fields.`, a
  })
} function rd(e, t, r) { const n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject(); if (n) { const i = n.getField('omit')?.value.asObject(); if (i) { nd(e, t, i); return } if (n.hasField('select')) { id(e, t); return } } if (r?.[vt(e.outputType.name)]) { od(e, t); return }t.addErrorMessage(() => `Unknown field at "${e.selectionPath.join('.')} selection"`) } function nd(e, t, r) { r.removeAllFields(); for (const n of e.outputType.fields)r.addSuggestion(new de(n.name, 'false')); t.addErrorMessage(n => `The ${n.red('omit')} statement includes every field of the model ${n.bold(e.outputType.name)}. At least one field must be included in the result`) } function id(e, t) { const r = e.outputType; const n = t.arguments.getDeepSelectionParent(e.selectionPath)?.value; const i = n?.isEmpty() ?? !1; n && (n.removeAllFields(), ua(n, r)), t.addErrorMessage(o => i ? `The ${o.red('`select`')} statement for type ${o.bold(r.name)} must not be empty. ${ur(o)}` : `The ${o.red('`select`')} statement for type ${o.bold(r.name)} needs ${o.bold('at least one truthy value')}.`) } function od(e, t) {
  const r = new ar(); for (const i of e.outputType.fields)i.isRelation || r.addField(i.name, 'false'); const n = new de('omit', r).makeRequired(); if (e.selectionPath.length === 0) {
    t.arguments.addSuggestion(n)
  }
  else { const [i, o] = lr(e.selectionPath); const a = t.arguments.getDeepSelectionParent(i)?.value.asObject()?.getField(o); if (a) { const l = a?.value.asObject() ?? new It(); l.addSuggestion(n), a.value = l } }t.addErrorMessage(i => `The global ${i.red('omit')} configuration excludes every field of the model ${i.bold(e.outputType.name)}. At least one field must be included in the result`)
} function sd(e, t) { const r = ca(e.selectionPath, t); if (r.parentKind !== 'unknown') { r.field.markAsError(); const n = r.parent; switch (r.parentKind) { case 'select':ua(n, e.outputType); break; case 'include':hd(n, e.outputType); break; case 'omit':yd(n, e.outputType); break } }t.addErrorMessage((n) => { const i = [`Unknown field ${n.red(`\`${r.fieldName}\``)}`]; return r.parentKind !== 'unknown' && i.push(`for ${n.bold(r.parentKind)} statement`), i.push(`on model ${n.bold(`\`${e.outputType.name}\``)}.`), i.push(ur(n)), i.join(' ') }) } function ad(e, t) { const r = ca(e.selectionPath, t); r.parentKind !== 'unknown' && r.field.value.markAsError(), t.addErrorMessage(n => `Invalid value for selection field \`${n.red(r.fieldName)}\`: ${e.underlyingError}`) } function ld(e, t) { const r = e.argumentPath[0]; const n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject(); n && (n.getField(r)?.markAsError(), Ed(n, e.arguments)), t.addErrorMessage(i => aa(i, r, e.arguments.map(o => o.name))) } function ud(e, t) { const [r, n] = lr(e.argumentPath); const i = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject(); if (i) { i.getDeepField(e.argumentPath)?.markAsError(); const o = i.getDeepFieldValue(r)?.asObject(); o && pa(o, e.inputType) }t.addErrorMessage(o => aa(o, n, e.inputType.fields.map(s => s.name))) } function aa(e, t, r) { const n = [`Unknown argument \`${e.red(t)}\`.`]; const i = wd(t, r); return i && n.push(`Did you mean \`${e.green(i)}\`?`), r.length > 0 && n.push(ur(e)), n.join(' ') } function cd(e, t) {
  let r; t.addErrorMessage(l => r?.value instanceof H && r.value.text === 'null' ? `Argument \`${l.green(o)}\` must not be ${l.red('null')}.` : `Argument \`${l.green(o)}\` is missing.`); const n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject(); if (!n)
    return; let [i, o] = lr(e.argumentPath); const s = new ar(); const a = n.getDeepFieldValue(i)?.asObject(); if (a) {
    if (r = a.getField(o), r && a.removeField(o), e.inputTypes.length === 1 && e.inputTypes[0].kind === 'object') { for (const l of e.inputTypes[0].fields)s.addField(l.name, l.typeNames.join(' | ')); a.addSuggestion(new de(o, s).makeRequired()) }
    else { const l = e.inputTypes.map(la).join(' | '); a.addSuggestion(new de(o, l).makeRequired()) }
  }
} function la(e) { return e.kind === 'list' ? `${la(e.elementType)}[]` : e.name } function pd(e, t) { const r = e.argument.name; const n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject(); n && n.getDeepFieldValue(e.argumentPath)?.markAsError(), t.addErrorMessage((i) => { const o = wn('or', e.argument.typeNames.map(s => i.green(s))); return `Argument \`${i.bold(r)}\`: Invalid value provided. Expected ${o}, provided ${i.red(e.inferredType)}.` }) } function dd(e, t) { const r = e.argument.name; const n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject(); n && n.getDeepFieldValue(e.argumentPath)?.markAsError(), t.addErrorMessage((i) => { const o = [`Invalid value for argument \`${i.bold(r)}\``]; if (e.underlyingError && o.push(`: ${e.underlyingError}`), o.push('.'), e.argument.typeNames.length > 0) { const s = wn('or', e.argument.typeNames.map(a => i.green(a))); o.push(` Expected ${s}.`) } return o.join('') }) } function md(e, t) { const r = e.argument.name; const n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject(); let i; if (n) { const s = n.getDeepField(e.argumentPath)?.value; s?.markAsError(), s instanceof H && (i = s.text) }t.addErrorMessage((o) => { const s = ['Unable to fit value']; return i && s.push(o.red(i)), s.push(`into a 64-bit signed integer for field \`${o.bold(r)}\``), s.join(' ') }) } function fd(e, t) { const r = e.argumentPath[e.argumentPath.length - 1]; const n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject(); if (n) { const i = n.getDeepFieldValue(e.argumentPath)?.asObject(); i && pa(i, e.inputType) }t.addErrorMessage((i) => { const o = [`Argument \`${i.bold(r)}\` of type ${i.bold(e.inputType.name)} needs`]; return e.constraints.minFieldCount === 1 ? e.constraints.requiredFields ? o.push(`${i.green('at least one of')} ${wn('or', e.constraints.requiredFields.map(s => `\`${i.bold(s)}\``))} arguments.`) : o.push(`${i.green('at least one')} argument.`) : o.push(`${i.green(`at least ${e.constraints.minFieldCount}`)} arguments.`), o.push(ur(i)), o.join(' ') }) } function gd(e, t) { const r = e.argumentPath[e.argumentPath.length - 1]; const n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject(); let i = []; if (n) { const o = n.getDeepFieldValue(e.argumentPath)?.asObject(); o && (o.markAsError(), i = Object.keys(o.getFields())) }t.addErrorMessage((o) => { const s = [`Argument \`${o.bold(r)}\` of type ${o.bold(e.inputType.name)} needs`]; return e.constraints.minFieldCount === 1 && e.constraints.maxFieldCount == 1 ? s.push(`${o.green('exactly one')} argument,`) : e.constraints.maxFieldCount == 1 ? s.push(`${o.green('at most one')} argument,`) : s.push(`${o.green(`at most ${e.constraints.maxFieldCount}`)} arguments,`), s.push(`but you provided ${wn('and', i.map(a => o.red(a)))}. Please choose`), e.constraints.maxFieldCount === 1 ? s.push('one.') : s.push(`${e.constraints.maxFieldCount}.`), s.join(' ') }) } function ua(e, t) { for (const r of t.fields)e.hasField(r.name) || e.addSuggestion(new de(r.name, 'true')) } function hd(e, t) { for (const r of t.fields)r.isRelation && !e.hasField(r.name) && e.addSuggestion(new de(r.name, 'true')) } function yd(e, t) { for (const r of t.fields)!e.hasField(r.name) && !r.isRelation && e.addSuggestion(new de(r.name, 'true')) } function Ed(e, t) { for (const r of t)e.hasField(r.name) || e.addSuggestion(new de(r.name, r.typeNames.join(' | '))) } function ca(e, t) {
  const [r, n] = lr(e); const i = t.arguments.getDeepSubSelectionValue(r)?.asObject(); if (!i)
    return { parentKind: 'unknown', fieldName: n }; const o = i.getFieldValue('select')?.asObject(); const s = i.getFieldValue('include')?.asObject(); const a = i.getFieldValue('omit')?.asObject(); let l = o?.getField(n); return o && l ? { parentKind: 'select', parent: o, field: l, fieldName: n } : (l = s?.getField(n), s && l ? { parentKind: 'include', field: l, parent: s, fieldName: n } : (l = a?.getField(n), a && l ? { parentKind: 'omit', field: l, parent: a, fieldName: n } : { parentKind: 'unknown', fieldName: n }))
} function pa(e, t) {
  if (t.kind === 'object') {
    for (const r of t.fields)e.hasField(r.name) || e.addSuggestion(new de(r.name, r.typeNames.join(' | ')))
  }
} function lr(e) {
  const t = [...e]; const r = t.pop(); if (!r)
    throw new Error('unexpected empty path'); return [t, r]
} function ur({ green: e, enabled: t }) { return `Available options are ${t ? `listed in ${e('green')}` : 'marked with ?'}.` } function wn(e, t) {
  if (t.length === 1)
    return t[0]; const r = [...t]; const n = r.pop(); return `${r.join(', ')} ${e} ${n}`
} const bd = 3; function wd(e, t) { let r = 1 / 0; let n; for (const i of t) { const o = (0, sa.default)(e, i); o > bd || o < r && (r = o, n = i) } return n } function da(e) { return e.substring(0, 1).toLowerCase() + e.substring(1) } const cr = class {constructor(t, r, n, i, o) { d(this, 'modelName'); d(this, 'name'); d(this, 'typeName'); d(this, 'isList'); d(this, 'isEnum'); this.modelName = t, this.name = r, this.typeName = n, this.isList = i, this.isEnum = o }_toGraphQLInputType() { const t = this.isList ? 'List' : ''; const r = this.isEnum ? 'Enum' : ''; return `${t}${r}${this.typeName}FieldRefInput<${this.modelName}>` }}; function kt(e) { return e instanceof cr } const xn = Symbol(); const Gi = new WeakMap(); const qe = class {constructor(t) { t === xn ? Gi.set(this, `Prisma.${this._getName()}`) : Gi.set(this, `new Prisma.${this._getNamespace()}.${this._getName()}()`) }_getName() { return this.constructor.name }toString() { return Gi.get(this) }}; const pr = class extends qe {_getNamespace() { return 'NullTypes' }}; const dr = class extends pr {}; Ji(dr, 'DbNull'); const mr = class extends pr {}; Ji(mr, 'JsonNull'); const fr = class extends pr {}; Ji(fr, 'AnyNull'); var Pn = { classes: { DbNull: dr, JsonNull: mr, AnyNull: fr }, instances: { DbNull: new dr(xn), JsonNull: new mr(xn), AnyNull: new fr(xn) } }; function Ji(e, t) { Object.defineProperty(e, 'name', { value: t, configurable: !0 }) } const ma = ': '; const vn = class {constructor(t, r) { this.name = t; this.value = r; d(this, 'hasError', !1) }markAsError() { this.hasError = !0 }getPrintWidth() { return this.name.length + this.value.getPrintWidth() + ma.length }write(t) { const r = new Re(this.name); this.hasError && r.underline().setColor(t.context.colors.red), t.write(r).write(ma).write(this.value) }}; const Wi = class {
  constructor(t) { d(this, 'arguments'); d(this, 'errorMessages', []); this.arguments = t }write(t) { t.write(this.arguments) }addErrorMessage(t) { this.errorMessages.push(t) }renderAllMessages(t) {
    return this.errorMessages.map(r => r(t)).join(`
`)
  }
}; function Ot(e) { return new Wi(fa(e)) } function fa(e) { const t = new It(); for (const [r, n] of Object.entries(e)) { const i = new vn(r, ga(n)); t.addField(i) } return t } function ga(e) {
  if (typeof e == 'string')
    return new H(JSON.stringify(e)); if (typeof e == 'number' || typeof e == 'boolean')
    return new H(String(e)); if (typeof e == 'bigint')
    return new H(`${e}n`); if (e === null)
    return new H('null'); if (e === void 0)
    return new H('undefined'); if (Ct(e))
    return new H(`new Prisma.Decimal("${e.toFixed()}")`); if (e instanceof Uint8Array)
    return Buffer.isBuffer(e) ? new H(`Buffer.alloc(${e.byteLength})`) : new H(`new Uint8Array(${e.byteLength})`); if (e instanceof Date) { const t = dn(e) ? e.toISOString() : 'Invalid Date'; return new H(`new Date("${t}")`) } return e instanceof qe ? new H(`Prisma.${e._getName()}`) : kt(e) ? new H(`prisma.${da(e.modelName)}.$fields.${e.name}`) : Array.isArray(e) ? xd(e) : typeof e == 'object' ? fa(e) : new H(Object.prototype.toString.call(e))
} function xd(e) { const t = new At(); for (const r of e)t.addItem(ga(r)); return t } function Tn(e, t) { const r = t === 'pretty' ? oa : bn; const n = e.renderAllMessages(r); const i = new Rt(0, { colors: r }).write(e).toString(); return { message: n, args: i } } function Cn({ args: e, errors: t, errorFormat: r, callsite: n, originalMethod: i, clientVersion: o, globalOmit: s }) { const a = Ot(e); for (const p of t)hn(p, a, s); const { message: l, args: u } = Tn(a, r); const c = gn({ message: l, callsite: n, originalMethod: i, showColors: r === 'pretty', callArguments: u }); throw new re(c, { clientVersion: o }) } const Se = class {
  constructor() { d(this, '_map', new Map()) }get(t) { return this._map.get(t)?.value }set(t, r) { this._map.set(t, { value: r }) }getOrCreate(t, r) {
    const n = this._map.get(t); if (n)
      return n.value; const i = r(); return this.set(t, i), i
  }
}; function gr(e) { let t; return { get() { return t || (t = { value: e() }), t.value } } } function Ae(e) { return e.replace(/^./, t => t.toLowerCase()) } function ya(e, t, r) { const n = Ae(r); return !t.result || !(t.result.$allModels || t.result[n]) ? e : Pd({ ...e, ...ha(t.name, e, t.result.$allModels), ...ha(t.name, e, t.result[n]) }) } function Pd(e) { const t = new Se(); const r = (n, i) => t.getOrCreate(n, () => i.has(n) ? [n] : (i.add(n), e[n] ? e[n].needs.flatMap(o => r(o, i)) : [n])); return bt(e, n => ({ ...n, needs: r(n.name, new Set()) })) } function ha(e, t, r) { return r ? bt(r, ({ needs: n, compute: i }, o) => ({ name: o, needs: n ? Object.keys(n).filter(s => n[s]) : [], compute: vd(t, o, i) })) : {} } function vd(e, t, r) { const n = e?.[t]?.compute; return n ? i => r({ ...i, [t]: n(i) }) : r } function Ea(e, t) {
  if (!t)
    return e; const r = { ...e }; for (const n of Object.values(t)) {
    if (e[n.name]) {
      for (const i of n.needs)r[i] = !0
    }
  } return r
} function ba(e, t) {
  if (!t)
    return e; const r = { ...e }; for (const n of Object.values(t)) {
    if (!e[n.name]) {
      for (const i of n.needs) delete r[i]
    }
  } return r
} const Rn = class {constructor(t, r) { this.extension = t; this.previous = r; d(this, 'computedFieldsCache', new Se()); d(this, 'modelExtensionsCache', new Se()); d(this, 'queryCallbacksCache', new Se()); d(this, 'clientExtensions', gr(() => this.extension.client ? { ...this.previous?.getAllClientExtensions(), ...this.extension.client } : this.previous?.getAllClientExtensions())); d(this, 'batchCallbacks', gr(() => { const t = this.previous?.getAllBatchQueryCallbacks() ?? []; const r = this.extension.query?.$__internalBatch; return r ? t.concat(r) : t })) }getAllComputedFields(t) { return this.computedFieldsCache.getOrCreate(t, () => ya(this.previous?.getAllComputedFields(t), this.extension, t)) }getAllClientExtensions() { return this.clientExtensions.get() }getAllModelExtensions(t) { return this.modelExtensionsCache.getOrCreate(t, () => { const r = Ae(t); return !this.extension.model || !(this.extension.model[r] || this.extension.model.$allModels) ? this.previous?.getAllModelExtensions(t) : { ...this.previous?.getAllModelExtensions(t), ...this.extension.model.$allModels, ...this.extension.model[r] } }) }getAllQueryCallbacks(t, r) { return this.queryCallbacksCache.getOrCreate(`${t}:${r}`, () => { const n = this.previous?.getAllQueryCallbacks(t, r) ?? []; const i = []; const o = this.extension.query; return !o || !(o[t] || o.$allModels || o[r] || o.$allOperations) ? n : (o[t] !== void 0 && (o[t][r] !== void 0 && i.push(o[t][r]), o[t].$allOperations !== void 0 && i.push(o[t].$allOperations)), t !== '$none' && o.$allModels !== void 0 && (o.$allModels[r] !== void 0 && i.push(o.$allModels[r]), o.$allModels.$allOperations !== void 0 && i.push(o.$allModels.$allOperations)), o[r] !== void 0 && i.push(o[r]), o.$allOperations !== void 0 && i.push(o.$allOperations), n.concat(i)) }) }getAllBatchQueryCallbacks() { return this.batchCallbacks.get() }}; const _t = class e {constructor(t) { this.head = t } static empty() { return new e() } static single(t) { return new e(new Rn(t)) }isEmpty() { return this.head === void 0 }append(t) { return new e(new Rn(t, this.head)) }getAllComputedFields(t) { return this.head?.getAllComputedFields(t) }getAllClientExtensions() { return this.head?.getAllClientExtensions() }getAllModelExtensions(t) { return this.head?.getAllModelExtensions(t) }getAllQueryCallbacks(t, r) { return this.head?.getAllQueryCallbacks(t, r) ?? [] }getAllBatchQueryCallbacks() { return this.head?.getAllBatchQueryCallbacks() ?? [] }}; const Sn = class {constructor(t) { this.name = t }}; function wa(e) { return e instanceof Sn } function xa(e) { return new Sn(e) } const Pa = Symbol(); const hr = class {
  constructor(t) {
    if (t !== Pa)
      throw new Error('Skip instance can not be constructed directly')
  }

  ifUndefined(t) { return t === void 0 ? An : t }
}; var An = new hr(Pa); function Ie(e) { return e instanceof hr } const Td = { findUnique: 'findUnique', findUniqueOrThrow: 'findUniqueOrThrow', findFirst: 'findFirst', findFirstOrThrow: 'findFirstOrThrow', findMany: 'findMany', count: 'aggregate', create: 'createOne', createMany: 'createMany', createManyAndReturn: 'createManyAndReturn', update: 'updateOne', updateMany: 'updateMany', updateManyAndReturn: 'updateManyAndReturn', upsert: 'upsertOne', delete: 'deleteOne', deleteMany: 'deleteMany', executeRaw: 'executeRaw', queryRaw: 'queryRaw', aggregate: 'aggregate', groupBy: 'groupBy', runCommandRaw: 'runCommandRaw', findRaw: 'findRaw', aggregateRaw: 'aggregateRaw' }; const va = 'explicitly `undefined` values are not allowed'; function In({ modelName: e, action: t, args: r, runtimeDataModel: n, extensions: i = _t.empty(), callsite: o, clientMethod: s, errorFormat: a, clientVersion: l, previewFeatures: u, globalOmit: c }) { const p = new Hi({ runtimeDataModel: n, modelName: e, action: t, rootArgs: r, callsite: o, extensions: i, selectionPath: [], argumentPath: [], originalMethod: s, errorFormat: a, clientVersion: l, previewFeatures: u, globalOmit: c }); return { modelName: e, action: Td[t], query: yr(r, p) } } function yr({ select: e, include: t, ...r } = {}, n) { const i = r.omit; return delete r.omit, { arguments: Ca(r, n), selection: Cd(e, t, i, n) } } function Cd(e, t, r, n) { return e ? (t ? n.throwValidationError({ kind: 'MutuallyExclusiveFields', firstField: 'include', secondField: 'select', selectionPath: n.getSelectionPath() }) : r && n.throwValidationError({ kind: 'MutuallyExclusiveFields', firstField: 'omit', secondField: 'select', selectionPath: n.getSelectionPath() }), Id(e, n)) : Rd(n, t, r) } function Rd(e, t, r) { const n = {}; return e.modelOrType && !e.isRawAction() && (n.$composites = !0, n.$scalars = !0), t && Sd(n, t, e), Ad(n, r, e), n } function Sd(e, t, r) {
  for (const [n, i] of Object.entries(t)) {
    if (Ie(i))
      continue; const o = r.nestSelection(n); if (Ki(i, o), i === !1 || i === void 0) { e[n] = !1; continue } const s = r.findField(n); if (s && s.kind !== 'object' && r.throwValidationError({ kind: 'IncludeOnScalar', selectionPath: r.getSelectionPath().concat(n), outputType: r.getOutputTypeDescription() }), s) { e[n] = yr(i === !0 ? {} : i, o); continue } if (i === !0) { e[n] = !0; continue }e[n] = yr(i, o)
  }
} function Ad(e, t, r) {
  const n = r.getComputedFields(); const i = { ...r.getGlobalOmit(), ...t }; const o = ba(i, n); for (const [s, a] of Object.entries(o)) {
    if (Ie(a))
      continue; Ki(a, r.nestSelection(s)); const l = r.findField(s); n?.[s] && !l || (e[s] = !a)
  }
} function Id(e, t) {
  const r = {}; const n = t.getComputedFields(); const i = Ea(e, n); for (const [o, s] of Object.entries(i)) {
    if (Ie(s))
      continue; const a = t.nestSelection(o); Ki(s, a); const l = t.findField(o); if (!(n?.[o] && !l)) { if (s === !1 || s === void 0 || Ie(s)) { r[o] = !1; continue } if (s === !0) { l?.kind === 'object' ? r[o] = yr({}, a) : r[o] = !0; continue }r[o] = yr(s, a) }
  } return r
} function Ta(e, t) {
  if (e === null)
    return null; if (typeof e == 'string' || typeof e == 'number' || typeof e == 'boolean')
    return e; if (typeof e == 'bigint')
    return { $type: 'BigInt', value: String(e) }; if (Tt(e)) {
    if (dn(e))
      return { $type: 'DateTime', value: e.toISOString() }; t.throwValidationError({ kind: 'InvalidArgumentValue', selectionPath: t.getSelectionPath(), argumentPath: t.getArgumentPath(), argument: { name: t.getArgumentName(), typeNames: ['Date'] }, underlyingError: 'Provided Date object is invalid' })
  } if (wa(e))
    return { $type: 'Param', value: e.name }; if (kt(e))
    return { $type: 'FieldRef', value: { _ref: e.name, _container: e.modelName } }; if (Array.isArray(e))
    return kd(e, t); if (ArrayBuffer.isView(e)) { const { buffer: r, byteOffset: n, byteLength: i } = e; return { $type: 'Bytes', value: Buffer.from(r, n, i).toString('base64') } } if (Od(e))
    return e.values; if (Ct(e))
    return { $type: 'Decimal', value: e.toFixed() }; if (e instanceof qe) {
    if (e !== Pn.instances[e._getName()])
      throw new Error('Invalid ObjectEnumValue'); return { $type: 'Enum', value: e._getName() }
  } if (_d(e))
    return e.toJSON(); if (typeof e == 'object')
    return Ca(e, t); t.throwValidationError({ kind: 'InvalidArgumentValue', selectionPath: t.getSelectionPath(), argumentPath: t.getArgumentPath(), argument: { name: t.getArgumentName(), typeNames: [] }, underlyingError: `We could not serialize ${Object.prototype.toString.call(e)} value. Serialize the object to JSON or implement a ".toJSON()" method on it` })
} function Ca(e, t) {
  if (e.$type)
    return { $type: 'Raw', value: e }; const r = {}; for (const n in e) { const i = e[n]; const o = t.nestArgument(n); Ie(i) || (i !== void 0 ? r[n] = Ta(i, o) : t.isPreviewFeatureOn('strictUndefinedChecks') && t.throwValidationError({ kind: 'InvalidArgumentValue', argumentPath: o.getArgumentPath(), selectionPath: t.getSelectionPath(), argument: { name: t.getArgumentName(), typeNames: [] }, underlyingError: va })) } return r
} function kd(e, t) { const r = []; for (let n = 0; n < e.length; n++) { const i = t.nestArgument(String(n)); const o = e[n]; if (o === void 0 || Ie(o)) { const s = o === void 0 ? 'undefined' : 'Prisma.skip'; t.throwValidationError({ kind: 'InvalidArgumentValue', selectionPath: i.getSelectionPath(), argumentPath: i.getArgumentPath(), argument: { name: `${t.getArgumentName()}[${n}]`, typeNames: [] }, underlyingError: `Can not use \`${s}\` value within array. Use \`null\` or filter out \`${s}\` values` }) }r.push(Ta(o, i)) } return r } function Od(e) { return typeof e == 'object' && e !== null && e.__prismaRawParameters__ === !0 } function _d(e) { return typeof e == 'object' && e !== null && typeof e.toJSON == 'function' } function Ki(e, t) { e === void 0 && t.isPreviewFeatureOn('strictUndefinedChecks') && t.throwValidationError({ kind: 'InvalidSelectionValue', selectionPath: t.getSelectionPath(), underlyingError: va }) } var Hi = class e {
  constructor(t) { this.params = t; d(this, 'modelOrType'); this.params.modelName && (this.modelOrType = this.params.runtimeDataModel.models[this.params.modelName] ?? this.params.runtimeDataModel.types[this.params.modelName]) }throwValidationError(t) { Cn({ errors: [t], originalMethod: this.params.originalMethod, args: this.params.rootArgs ?? {}, callsite: this.params.callsite, errorFormat: this.params.errorFormat, clientVersion: this.params.clientVersion, globalOmit: this.params.globalOmit }) }getSelectionPath() { return this.params.selectionPath }getArgumentPath() { return this.params.argumentPath }getArgumentName() { return this.params.argumentPath[this.params.argumentPath.length - 1] }getOutputTypeDescription() {
    if (!(!this.params.modelName || !this.modelOrType))
      return { name: this.params.modelName, fields: this.modelOrType.fields.map(t => ({ name: t.name, typeName: 'boolean', isRelation: t.kind === 'object' })) }
  }

  isRawAction() { return ['executeRaw', 'queryRaw', 'runCommandRaw', 'findRaw', 'aggregateRaw'].includes(this.params.action) }isPreviewFeatureOn(t) { return this.params.previewFeatures.includes(t) }getComputedFields() {
    if (this.params.modelName)
      return this.params.extensions.getAllComputedFields(this.params.modelName)
  }

  findField(t) { return this.modelOrType?.fields.find(r => r.name === t) }nestSelection(t) { const r = this.findField(t); const n = r?.kind === 'object' ? r.type : void 0; return new e({ ...this.params, modelName: n, selectionPath: this.params.selectionPath.concat(t) }) }getGlobalOmit() { return this.params.modelName && this.shouldApplyGlobalOmit() ? this.params.globalOmit?.[vt(this.params.modelName)] ?? {} : {} }shouldApplyGlobalOmit() { switch (this.params.action) { case 'findFirst':case 'findFirstOrThrow':case 'findUniqueOrThrow':case 'findMany':case 'upsert':case 'findUnique':case 'createManyAndReturn':case 'create':case 'update':case 'updateManyAndReturn':case 'delete':return !0; case 'executeRaw':case 'aggregateRaw':case 'runCommandRaw':case 'findRaw':case 'createMany':case 'deleteMany':case 'groupBy':case 'updateMany':case 'count':case 'aggregate':case 'queryRaw':return !1; default:Me(this.params.action, 'Unknown action') } }nestArgument(t) { return new e({ ...this.params, argumentPath: this.params.argumentPath.concat(t) }) }
}; function Ra(e) {
  if (!e._hasPreviewFlag('metrics'))
    throw new re('`metrics` preview feature must be enabled in order to access metrics API', { clientVersion: e._clientVersion })
} var Dt = class {constructor(t) { d(this, '_client'); this._client = t }prometheus(t) { return Ra(this._client), this._client._engine.metrics({ format: 'prometheus', ...t }) }json(t) { return Ra(this._client), this._client._engine.metrics({ format: 'json', ...t }) }}; function Sa(e) { return { models: Yi(e.models), enums: Yi(e.enums), types: Yi(e.types) } } function Yi(e) { const t = {}; for (const { name: r, ...n } of e)t[r] = n; return t } function Aa(e, t) { const r = gr(() => Dd(t)); Object.defineProperty(e, 'dmmf', { get: () => r.get() }) } function Dd(e) { return { datamodel: { models: zi(e.models), enums: zi(e.enums), types: zi(e.types) } } } function zi(e) { return Object.entries(e).map(([t, r]) => ({ name: t, ...r })) } const Zi = new WeakMap(); const kn = '$$PrismaTypedSql'; const Er = class {constructor(t, r) { Zi.set(this, { sql: t, values: r }), Object.defineProperty(this, kn, { value: kn }) } get sql() { return Zi.get(this).sql } get values() { return Zi.get(this).values }}; function Ia(e) { return (...t) => new Er(e, t) } function On(e) { return e != null && e[kn] === kn } const su = D(bi()); const au = require('node:async_hooks'); const lu = require('node:events'); const uu = D(require('node:fs')); const Mr = D(require('node:path'))

var le = class e {
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
}; function ka(e, t = ',', r = '', n = '') {
  if (e.length === 0)
    throw new TypeError('Expected `join([])` to be called with an array of multiple elements, but got an empty array'); return new le([r, ...Array.from({ length: e.length - 1 }).fill(t), n], e)
} function Xi(e) { return new le([e], []) } var Oa = Xi(''); function eo(e, ...t) { return new le(e, t) } function br(e) { return { getKeys() { return Object.keys(e) }, getPropertyValue(t) { return e[t] } } } function oe(e, t) { return { getKeys() { return [e] }, getPropertyValue() { return t() } } } function at(e) { const t = new Se(); return { getKeys() { return e.getKeys() }, getPropertyValue(r) { return t.getOrCreate(r, () => e.getPropertyValue(r)) }, getPropertyDescriptor(r) { return e.getPropertyDescriptor?.(r) } } } const _n = { enumerable: !0, configurable: !0, writable: !0 }; function Dn(e) { const t = new Set(e); return { getPrototypeOf: () => Object.prototype, getOwnPropertyDescriptor: () => _n, has: (r, n) => t.has(n), set: (r, n, i) => t.add(n) && Reflect.set(r, n, i), ownKeys: () => [...t] } } const _a = Symbol.for('nodejs.util.inspect.custom'); function be(e, t) {
  const r = Nd(t); const n = new Set(); const i = new Proxy(e, { get(o, s) {
    if (n.has(s))
      return o[s]; const a = r.get(s); return a ? a.getPropertyValue(s) : o[s]
  }, has(o, s) {
    if (n.has(s))
      return !0; const a = r.get(s); return a ? a.has?.(s) ?? !0 : Reflect.has(o, s)
  }, ownKeys(o) { const s = Da(Reflect.ownKeys(o), r); const a = Da(Array.from(r.keys()), r); return [...new Set([...s, ...a, ...n])] }, set(o, s, a) { return r.get(s)?.getPropertyDescriptor?.(s)?.writable === !1 ? !1 : (n.add(s), Reflect.set(o, s, a)) }, getOwnPropertyDescriptor(o, s) {
    const a = Reflect.getOwnPropertyDescriptor(o, s); if (a && !a.configurable)
      return a; const l = r.get(s); return l ? l.getPropertyDescriptor ? { ..._n, ...l?.getPropertyDescriptor(s) } : _n : a
  }, defineProperty(o, s, a) { return n.add(s), Reflect.defineProperty(o, s, a) }, getPrototypeOf: () => Object.prototype }); return i[_a] = function () { const o = { ...this }; return delete o[_a], o }, i
} function Nd(e) { const t = new Map(); for (const r of e) { const n = r.getKeys(); for (const i of n)t.set(i, r) } return t } function Da(e, t) { return e.filter(r => t.get(r)?.has?.(r) ?? !0) } function Nt(e) { return { getKeys() { return e }, has() { return !1 }, getPropertyValue() {} } } function Lt(e, t) { return { batch: e, transaction: t?.kind === 'batch' ? { isolationLevel: t.options.isolationLevel } : void 0 } } function Na(e) {
  if (e === void 0)
    return ''; const t = Ot(e); return new Rt(0, { colors: bn }).write(t).toString()
} const Ld = 'P2037'; function Ft({ error: e, user_facing_error: t }, r, n) { return t.error_code ? new te(Fd(t, n), { code: t.error_code, clientVersion: r, meta: t.meta, batchRequestIdx: t.batch_request_idx }) : new U(e, { clientVersion: r, batchRequestIdx: t.batch_request_idx }) } function Fd(e, t) {
  let r = e.message; return (t === 'postgresql' || t === 'postgres' || t === 'mysql') && e.error_code === Ld && (r += `
Prisma Accelerate has built-in connection pooling to prevent such errors: https://pris.ly/client/error-accelerate`), r
} const wr = '<unknown>'; function La(e) {
  const t = e.split(`
`); return t.reduce((r, n) => { const i = qd(n) || jd(n) || Qd(n) || Hd(n) || Jd(n); return i && r.push(i), r }, [])
} const Md = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|rsc|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i; const $d = /\((\S*):(\d+):(\d+)\)/; function qd(e) {
  const t = Md.exec(e); if (!t)
    return null; const r = t[2] && t[2].indexOf('native') === 0; const n = t[2] && t[2].indexOf('eval') === 0; const i = $d.exec(t[2]); return n && i != null && (t[2] = i[1], t[3] = i[2], t[4] = i[3]), { file: r ? null : t[2], methodName: t[1] || wr, arguments: r ? [t[2]] : [], lineNumber: t[3] ? +t[3] : null, column: t[4] ? +t[4] : null }
} const Vd = /^\s*at (?:(.+) )?\(?((?:file|ms-appx|https?|webpack|rsc|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i; function jd(e) { const t = Vd.exec(e); return t ? { file: t[2], methodName: t[1] || wr, arguments: [], lineNumber: +t[3], column: t[4] ? +t[4] : null } : null } const Bd = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|rsc|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i; const Ud = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i; function Qd(e) {
  const t = Bd.exec(e); if (!t)
    return null; const r = t[3] && t[3].includes(' > eval'); const n = Ud.exec(t[3]); return r && n != null && (t[3] = n[1], t[4] = n[2], t[5] = null), { file: t[3], methodName: t[1] || wr, arguments: t[2] ? t[2].split(',') : [], lineNumber: t[4] ? +t[4] : null, column: t[5] ? +t[5] : null }
} const Gd = /^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/; function Jd(e) { const t = Gd.exec(e); return t ? { file: t[3], methodName: t[1] || wr, arguments: [], lineNumber: +t[4], column: t[5] ? +t[5] : null } : null } const Wd = /^\s*at (?:([^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i; function Hd(e) { const t = Wd.exec(e); return t ? { file: t[2], methodName: t[1] || wr, arguments: [], lineNumber: +t[3], column: t[4] ? +t[4] : null } : null } const to = class {getLocation() { return null }}; const ro = class {
  constructor() { d(this, '_error'); this._error = new Error() }getLocation() {
    const t = this._error.stack; if (!t)
      return null; const n = La(t).find((i) => {
      if (!i.file)
        return !1; const o = ki(i.file); return o !== '<anonymous>' && !o.includes('@prisma') && !o.includes('/packages/client/src/runtime/') && !o.endsWith('/runtime/binary.js') && !o.endsWith('/runtime/library.js') && !o.endsWith('/runtime/edge.js') && !o.endsWith('/runtime/edge-esm.js') && !o.startsWith('internal/') && !i.methodName.includes('new ') && !i.methodName.includes('getCallSite') && !i.methodName.includes('Proxy.') && i.methodName.split('.').length < 4
    }); return !n || !n.file ? null : { fileName: n.file, lineNumber: n.lineNumber, columnNumber: n.column }
  }
}; function Xe(e) { return e === 'minimal' ? typeof $EnabledCallSite == 'function' && e !== 'minimal' ? new $EnabledCallSite() : new to() : new ro() } const Fa = { _avg: !0, _count: !0, _sum: !0, _min: !0, _max: !0 }; function Mt(e = {}) { const t = Yd(e); return Object.entries(t).reduce((n, [i, o]) => (Fa[i] !== void 0 ? n.select[i] = { select: o } : n[i] = o, n), { select: {} }) } function Yd(e = {}) { return typeof e._count == 'boolean' ? { ...e, _count: { _all: e._count } } : e } function Nn(e = {}) { return t => (typeof e._count == 'boolean' && (t._count = t._count._all), t) } function Ma(e, t) { const r = Nn(e); return t({ action: 'aggregate', unpacker: r, argsMapper: Mt })(e) } function zd(e = {}) { const { select: t, ...r } = e; return typeof t == 'object' ? Mt({ ...r, _count: t }) : Mt({ ...r, _count: { _all: !0 } }) } function Zd(e = {}) { return typeof e.select == 'object' ? t => Nn(e)(t)._count : t => Nn(e)(t)._count._all } function $a(e, t) { return t({ action: 'count', unpacker: Zd(e), argsMapper: zd })(e) } function Xd(e = {}) {
  const t = Mt(e); if (Array.isArray(t.by)) {
    for (const r of t.by) typeof r == 'string' && (t.select[r] = !0)
  }
  else {
    typeof t.by == 'string' && (t.select[t.by] = !0)
  } return t
} function em(e = {}) { return t => (typeof e?._count == 'boolean' && t.forEach((r) => { r._count = r._count._all }), t) } function qa(e, t) { return t({ action: 'groupBy', unpacker: em(e), argsMapper: Xd })(e) } function Va(e, t, r) {
  if (t === 'aggregate')
    return n => Ma(n, r); if (t === 'count')
    return n => $a(n, r); if (t === 'groupBy')
    return n => qa(n, r)
} function ja(e, t) {
  const r = t.fields.filter(i => !i.relationName); const n = Mi(r, i => i.name); return new Proxy({}, { get(i, o) {
    if (o in i || typeof o == 'symbol')
      return i[o]; const s = n[o]; if (s)
      return new cr(e, o, s.type, s.isList, s.kind === 'enum')
  }, ...Dn(Object.keys(n)) })
} const Ba = e => Array.isArray(e) ? e : e.split('.'); const no = (e, t) => Ba(t).reduce((r, n) => r && r[n], e); const Ua = (e, t, r) => Ba(t).reduceRight((n, i, o, s) => Object.assign({}, no(e, s.slice(0, o)), { [i]: n }), r); function tm(e, t) { return e === void 0 || t === void 0 ? [] : [...t, 'select', e] } function rm(e, t, r) { return t === void 0 ? e ?? {} : Ua(t, r, e || !0) } function io(e, t, r, n, i, o) {
  const a = e._runtimeDataModel.models[t].fields.reduce((l, u) => ({ ...l, [u.name]: u }), {}); return (l) => {
    const u = Xe(e._errorFormat); const c = tm(n, i); const p = rm(l, o, c); const m = r({ dataPath: c, callsite: u })(p); const g = nm(e, t); return new Proxy(m, { get(h, y) {
      if (!g.includes(y))
        return h[y]; const T = [a[y].type, r, y]; const S = [c, p]; return io(e, ...T, ...S)
    }, ...Dn([...g, ...Object.getOwnPropertyNames(m)]) })
  }
} function nm(e, t) { return e._runtimeDataModel.models[t].fields.filter(r => r.kind === 'object').map(r => r.name) } const im = ['findUnique', 'findUniqueOrThrow', 'findFirst', 'findFirstOrThrow', 'create', 'update', 'upsert', 'delete']; const om = ['aggregate', 'count', 'groupBy']; function oo(e, t) { const r = e._extensions.getAllModelExtensions(t) ?? {}; const n = [sm(e, t), lm(e, t), br(r), oe('name', () => t), oe('$name', () => t), oe('$parent', () => e._appliedParent)]; return be({}, n) } function sm(e, t) { const r = Ae(t); const n = Object.keys(tr.ModelAction).concat('count'); return { getKeys() { return n }, getPropertyValue(i) { const o = i; const s = a => (l) => { const u = Xe(e._errorFormat); return e._createPrismaPromise((c) => { const p = { args: l, dataPath: [], action: o, model: t, clientMethod: `${r}.${i}`, jsModelName: r, transaction: c, callsite: u }; return e._request({ ...p, ...a }) }, { action: o, args: l, model: t }) }; return im.includes(o) ? io(e, t, s) : am(i) ? Va(e, i, s) : s({}) } } } function am(e) { return om.includes(e) } function lm(e, t) { return at(oe('fields', () => { const r = e._runtimeDataModel.models[t]; return ja(t, r) })) } function Qa(e) { return e.replace(/^./, t => t.toUpperCase()) } const so = Symbol(); function xr(e) { const t = [um(e), cm(e), oe(so, () => e), oe('$parent', () => e._appliedParent)]; const r = e._extensions.getAllClientExtensions(); return r && t.push(br(r)), be(e, t) } function um(e) { const t = Object.getPrototypeOf(e._originalClient); const r = [...new Set(Object.getOwnPropertyNames(t))]; return { getKeys() { return r }, getPropertyValue(n) { return e[n] } } } function cm(e) {
  const t = Object.keys(e._runtimeDataModel.models); const r = t.map(Ae); const n = [...new Set(t.concat(r))]; return at({ getKeys() { return n }, getPropertyValue(i) {
    const o = Qa(i); if (e._runtimeDataModel.models[o] !== void 0)
      return oo(e, o); if (e._runtimeDataModel.models[i] !== void 0)
      return oo(e, i)
  }, getPropertyDescriptor(i) {
    if (!r.includes(i))
      return { enumerable: !1 }
  } })
} function Ga(e) { return e[so] ? e[so] : e } function Ja(e) {
  if (typeof e == 'function')
    return e(this); if (e.client?.__AccelerateEngine) { const r = e.client.__AccelerateEngine; this._originalClient._engine = new r(this._originalClient._accelerateEngineConfig) } const t = Object.create(this._originalClient, { _extensions: { value: this._extensions.append(e) }, _appliedParent: { value: this, configurable: !0 }, $use: { value: void 0 }, $on: { value: void 0 } }); return xr(t)
} function Wa({ result: e, modelName: t, select: r, omit: n, extensions: i }) {
  const o = i.getAllComputedFields(t); if (!o)
    return e; const s = []; const a = []; for (const l of Object.values(o)) {
    if (n) {
      if (n[l.name])
        continue; const u = l.needs.filter(c => n[c]); u.length > 0 && a.push(Nt(u))
    }
    else if (r) {
      if (!r[l.name])
        continue; const u = l.needs.filter(c => !r[c]); u.length > 0 && a.push(Nt(u))
    }pm(e, l.needs) && s.push(dm(l, be(e, s)))
  } return s.length > 0 || a.length > 0 ? be(e, [...s, ...a]) : e
} function pm(e, t) { return t.every(r => Fi(e, r)) } function dm(e, t) { return at(oe(e.name, () => e.compute(t))) } function Ln({ visitor: e, result: t, args: r, runtimeDataModel: n, modelName: i }) { if (Array.isArray(t)) { for (let s = 0; s < t.length; s++)t[s] = Ln({ result: t[s], args: r, modelName: i, runtimeDataModel: n, visitor: e }); return t } const o = e(t, i, r) ?? t; return r.include && Ha({ includeOrSelect: r.include, result: o, parentModelName: i, runtimeDataModel: n, visitor: e }), r.select && Ha({ includeOrSelect: r.select, result: o, parentModelName: i, runtimeDataModel: n, visitor: e }), o } function Ha({ includeOrSelect: e, result: t, parentModelName: r, runtimeDataModel: n, visitor: i }) {
  for (const [o, s] of Object.entries(e)) {
    if (!s || t[o] == null || Ie(s))
      continue; const l = n.models[r].fields.find(c => c.name === o); if (!l || l.kind !== 'object' || !l.relationName)
      continue; const u = typeof s == 'object' ? s : {}; t[o] = Ln({ visitor: i, result: t[o], args: u, modelName: l.type, runtimeDataModel: n })
  }
} function Ka({ result: e, modelName: t, args: r, extensions: n, runtimeDataModel: i, globalOmit: o }) { return n.isEmpty() || e == null || typeof e != 'object' || !i.models[t] ? e : Ln({ result: e, args: r ?? {}, modelName: t, runtimeDataModel: i, visitor: (a, l, u) => { const c = Ae(l); return Wa({ result: a, modelName: c, select: u.select, omit: u.select ? void 0 : { ...o?.[c], ...u.omit }, extensions: n }) } }) } const mm = ['$connect', '$disconnect', '$on', '$transaction', '$use', '$extends']; const Ya = mm; function za(e) {
  if (e instanceof le)
    return fm(e); if (On(e))
    return gm(e); if (Array.isArray(e)) { const r = [e[0]]; for (let n = 1; n < e.length; n++)r[n] = Pr(e[n]); return r } const t = {}; for (const r in e)t[r] = Pr(e[r]); return t
} function fm(e) { return new le(e.strings, e.values) } function gm(e) { return new Er(e.sql, e.values) } function Pr(e) {
  if (typeof e != 'object' || e == null || e instanceof qe || kt(e))
    return e; if (Ct(e))
    return new Ce(e.toFixed()); if (Tt(e))
    return new Date(+e); if (ArrayBuffer.isView(e))
    return e.slice(0); if (Array.isArray(e)) { let t = e.length; let r; for (r = new Array(t); t--;)r[t] = Pr(e[t]); return r } if (typeof e == 'object') { const t = {}; for (const r in e)r === '__proto__' ? Object.defineProperty(t, r, { value: Pr(e[r]), configurable: !0, enumerable: !0, writable: !0 }) : t[r] = Pr(e[r]); return t }Me(e, 'Unknown value')
} function Xa(e, t, r, n = 0) { return e._createPrismaPromise((i) => { const o = t.customDataProxyFetch; return 'transaction' in t && i !== void 0 && (t.transaction?.kind === 'batch' && t.transaction.lock.then(), t.transaction = i), n === r.length ? e._executeRequest(t) : r[n]({ model: t.model, operation: t.model ? t.action : t.clientMethod, args: za(t.args ?? {}), __internalParams: t, query: (s, a = t) => { const l = a.customDataProxyFetch; return a.customDataProxyFetch = nl(o, l), a.args = s, Xa(e, a, r, n + 1) } }) }) } function el(e, t) {
  const { jsModelName: r, action: n, clientMethod: i } = t; const o = r ? n : i; if (e._extensions.isEmpty())
    return e._executeRequest(t); const s = e._extensions.getAllQueryCallbacks(r ?? '$none', o); return Xa(e, t, s)
} function tl(e) { return (t) => { const r = { requests: t }; const n = t[0].extensions.getAllBatchQueryCallbacks(); return n.length ? rl(r, n, 0, e) : e(r) } } function rl(e, t, r, n) {
  if (r === t.length)
    return n(e); const i = e.customDataProxyFetch; const o = e.requests[0].transaction; return t[r]({ args: { queries: e.requests.map(s => ({ model: s.modelName, operation: s.action, args: s.args })), transaction: o ? { isolationLevel: o.kind === 'batch' ? o.isolationLevel : void 0 } : void 0 }, __internalParams: e, query(s, a = e) { const l = a.customDataProxyFetch; return a.customDataProxyFetch = nl(i, l), rl(a, t, r + 1, n) } })
} const Za = e => e; function nl(e = Za, t = Za) { return r => e(t(r)) } const il = M('prisma:client'); const ol = { 'Vercel': 'vercel', 'Netlify CI': 'netlify' }; function sl({ postinstall: e, ciName: t, clientVersion: r }) {
  if (il('checkPlatformCaching:postinstall', e), il('checkPlatformCaching:ciName', t), e === !0 && t && t in ol) {
    const n = `Prisma has detected that this project was built on ${t}, which caches dependencies. This leads to an outdated Prisma Client because Prisma's auto-generation isn't triggered. To fix this, make sure to run the \`prisma generate\` command during the build process.

Learn how: https://pris.ly/d/${ol[t]}-build`; throw console.error(n), new C(n, r)
  }
} function al(e, t) { return e ? e.datasources ? e.datasources : e.datasourceUrl ? { [t[0]]: { url: e.datasourceUrl } } : {} : {} } const hm = () => globalThis.process?.release?.name === 'node'; const ym = () => !!globalThis.Bun || !!globalThis.process?.versions?.bun; const Em = () => !!globalThis.Deno; const bm = () => typeof globalThis.Netlify == 'object'; const wm = () => typeof globalThis.EdgeRuntime == 'object'; const xm = () => globalThis.navigator?.userAgent === 'Cloudflare-Workers'; function Pm() { return [[bm, 'netlify'], [wm, 'edge-light'], [xm, 'workerd'], [Em, 'deno'], [ym, 'bun'], [hm, 'node']].flatMap(r => r[0]() ? [r[1]] : []).at(0) ?? '' } const vm = { 'node': 'Node.js', 'workerd': 'Cloudflare Workers', 'deno': 'Deno and Deno Deploy', 'netlify': 'Netlify Edge Functions', 'edge-light': 'Edge Runtime (Vercel Edge Functions, Vercel Edge Middleware, Next.js (Pages Router) Edge API Routes, Next.js (App Router) Edge Route Handlers or Next.js Middleware)' }; function Fn() { const e = Pm(); return { id: e, prettyName: vm[e] || e, isEdge: ['workerd', 'deno', 'netlify', 'edge-light'].includes(e) } } const dl = D(require('node:fs')); const vr = D(require('node:path'))

function Mn(e) {
  const { runtimeBinaryTarget: t } = e; return `Add "${t}" to \`binaryTargets\` in the "schema.prisma" file and run \`prisma generate\` after saving it:

${Tm(e)}`
} function Tm(e) { const { generator: t, generatorBinaryTargets: r, runtimeBinaryTarget: n } = e; const i = { fromEnvVar: null, value: n }; const o = [...r, i]; return Di({ ...t, binaryTargets: o }) } function et(e) { const { runtimeBinaryTarget: t } = e; return `Prisma Client could not locate the Query Engine for runtime "${t}".` } function tt(e) {
  const { searchedLocations: t } = e; return `The following locations have been searched:
${[...new Set(t)].map(i => `  ${i}`).join(`
`)}`
} function ll(e) {
  const { runtimeBinaryTarget: t } = e; return `${et(e)}

This happened because \`binaryTargets\` have been pinned, but the actual deployment also required "${t}".
${Mn(e)}

${tt(e)}`
} function $n(e) {
  return `We would appreciate if you could take the time to share some information with us.
Please help us by answering a few questions: https://pris.ly/${e}`
} function qn(e) {
  const { errorStack: t } = e; return t?.match(/\/\.next|\/next@|\/next\//)
    ? `

We detected that you are using Next.js, learn how to fix this: https://pris.ly/d/engine-not-found-nextjs.`
    : ''
} function ul(e) {
  const { queryEngineName: t } = e; return `${et(e)}${qn(e)}

This is likely caused by a bundler that has not copied "${t}" next to the resulting bundle.
Ensure that "${t}" has been copied next to the bundle or in "${e.expectedLocation}".

${$n('engine-not-found-bundler-investigation')}

${tt(e)}`
} function cl(e) {
  const { runtimeBinaryTarget: t, generatorBinaryTargets: r } = e; const n = r.find(i => i.native); return `${et(e)}

This happened because Prisma Client was generated for "${n?.value ?? 'unknown'}", but the actual deployment required "${t}".
${Mn(e)}

${tt(e)}`
} function pl(e) {
  const { queryEngineName: t } = e; return `${et(e)}${qn(e)}

This is likely caused by tooling that has not copied "${t}" to the deployment folder.
Ensure that you ran \`prisma generate\` and that "${t}" has been copied to "${e.expectedLocation}".

${$n('engine-not-found-tooling-investigation')}

${tt(e)}`
} const Cm = M('prisma:client:engines:resolveEnginePath'); const Rm = () => new RegExp('runtime[\\\\/]library\\.m?js$'); async function ml(e, t) {
  const r = { binary: process.env.PRISMA_QUERY_ENGINE_BINARY, library: process.env.PRISMA_QUERY_ENGINE_LIBRARY }[e] ?? t.prismaPath; if (r !== void 0)
    return r; const { enginePath: n, searchedLocations: i } = await Sm(e, t); if (Cm('enginePath', n), n !== void 0 && e === 'binary' && Pi(n), n !== void 0)
    return t.prismaPath = n; const o = await ot(); const s = t.generator?.binaryTargets ?? []; const a = s.some(m => m.native); const l = !s.some(m => m.value === o); const u = __filename.match(Rm()) === null; const c = { searchedLocations: i, generatorBinaryTargets: s, generator: t.generator, runtimeBinaryTarget: o, queryEngineName: fl(e, o), expectedLocation: vr.default.relative(process.cwd(), t.dirname), errorStack: new Error().stack }; let p; throw a && l ? p = cl(c) : l ? p = ll(c) : u ? p = ul(c) : p = pl(c), new C(p, t.clientVersion)
} async function Sm(engineType, config) {
  const binaryTarget = await ot(); const searchedLocations = []; const dirname = eval('__dirname'); const searchLocations = [config.dirname, vr.default.resolve(dirname, '..'), config.generator?.output?.value ?? dirname, vr.default.resolve(dirname, '../../../.prisma/client'), '/tmp/prisma-engines', config.cwd]; __filename.includes('resolveEnginePath') && searchLocations.push(cs()); for (const e of searchLocations) {
    const t = fl(engineType, binaryTarget); const r = vr.default.join(e, t); if (searchedLocations.push(e), dl.default.existsSync(r))
      return { enginePath: r, searchedLocations }
  } return { enginePath: void 0, searchedLocations }
} function fl(e, t) { return e === 'library' ? Br(t, 'fs') : `query-engine-${t}${t === 'windows' ? '.exe' : ''}` } const ao = D(Li()); function gl(e) { return e ? e.replace(/".*"/g, '"X"').replace(/[\s:[]([+-]?(\d*\.)?\d+)/g, t => `${t[0]}5`) : '' } function hl(e) {
  return e.split(`
`).map(t => t.replace(/^\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)\s*/, '').replace(/\+\d+\s*ms$/, '')).join(`
`)
} const yl = D(_s()); function El({ title: e, user: t = 'prisma', repo: r = 'prisma', template: n = 'bug_report.yml', body: i }) { return (0, yl.default)({ user: t, repo: r, template: n, title: e, body: i }) } function bl({ version: e, binaryTarget: t, title: r, description: n, engineVersion: i, database: o, query: s }) {
  const a = qo(6e3 - (s?.length ?? 0)); const l = hl((0, ao.default)(a)); const u = n
    ? `# Description
\`\`\`
${n}
\`\`\``
    : ''; const c = (0, ao.default)(`Hi Prisma Team! My Prisma Client just crashed. This is the report:
## Versions

| Name            | Version            |
|-----------------|--------------------|
| Node            | ${process.version?.padEnd(19)}| 
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
${s ? gl(s) : ''}
\`\`\`
`); const p = El({ title: r, body: c }); return `${r}

This is a non-recoverable error which probably happens when the Prisma Query Engine has a panic.

${ee(p)}

If you want the Prisma team to look into it, please open the link above \u{1F64F}
To increase the chance of success, please post your schema and a snippet of
how you used Prisma Client in the issue. 
`
} function $t({ inlineDatasources: e, overrideDatasources: t, env: r, clientVersion: n }) {
  let i; const o = Object.keys(e)[0]; const s = e[o]?.url; const a = t[o]?.url; if (o === void 0 ? i = void 0 : a ? i = a : s?.value ? i = s.value : s?.fromEnvVar && (i = r[s.fromEnvVar]), s?.fromEnvVar !== void 0 && i === void 0)
    throw new C(`error: Environment variable not found: ${s.fromEnvVar}.`, n); if (i === void 0)
    throw new C('error: Missing URL environment variable, value, or override.', n); return i
} const Vn = class extends Error {constructor(r, n) { super(r); d(this, 'clientVersion'); d(this, 'cause'); this.clientVersion = n.clientVersion, this.cause = n.cause } get [Symbol.toStringTag]() { return this.name }}; const ue = class extends Vn {constructor(r, n) { super(r, n); d(this, 'isRetryable'); this.isRetryable = n.isRetryable ?? !0 }}; function A(e, t) { return { ...e, isRetryable: t } } const qt = class extends ue {constructor(r) { super('This request must be retried', A(r, !0)); d(this, 'name', 'ForcedRetryError'); d(this, 'code', 'P5001') }}; x(qt, 'ForcedRetryError'); const lt = class extends ue {constructor(r, n) { super(r, A(n, !1)); d(this, 'name', 'InvalidDatasourceError'); d(this, 'code', 'P6001') }}; x(lt, 'InvalidDatasourceError'); const ut = class extends ue {constructor(r, n) { super(r, A(n, !1)); d(this, 'name', 'NotImplementedYetError'); d(this, 'code', 'P5004') }}; x(ut, 'NotImplementedYetError'); const j = class extends ue {constructor(r, n) { super(r, n); d(this, 'response'); this.response = n.response; const i = this.response.headers.get('prisma-request-id'); if (i) { const o = `(The request id was: ${i})`; this.message = `${this.message} ${o}` } }}; const ct = class extends j {constructor(r) { super('Schema needs to be uploaded', A(r, !0)); d(this, 'name', 'SchemaMissingError'); d(this, 'code', 'P5005') }}; x(ct, 'SchemaMissingError'); const lo = 'This request could not be understood by the server'; const Tr = class extends j {constructor(r, n, i) { super(n || lo, A(r, !1)); d(this, 'name', 'BadRequestError'); d(this, 'code', 'P5000'); i && (this.code = i) }}; x(Tr, 'BadRequestError'); const Cr = class extends j {constructor(r, n) { super('Engine not started: healthcheck timeout', A(r, !0)); d(this, 'name', 'HealthcheckTimeoutError'); d(this, 'code', 'P5013'); d(this, 'logs'); this.logs = n }}; x(Cr, 'HealthcheckTimeoutError'); const Rr = class extends j {constructor(r, n, i) { super(n, A(r, !0)); d(this, 'name', 'EngineStartupError'); d(this, 'code', 'P5014'); d(this, 'logs'); this.logs = i }}; x(Rr, 'EngineStartupError'); const Sr = class extends j {constructor(r) { super('Engine version is not supported', A(r, !1)); d(this, 'name', 'EngineVersionNotSupportedError'); d(this, 'code', 'P5012') }}; x(Sr, 'EngineVersionNotSupportedError'); const uo = 'Request timed out'; const Ar = class extends j {constructor(r, n = uo) { super(n, A(r, !1)); d(this, 'name', 'GatewayTimeoutError'); d(this, 'code', 'P5009') }}; x(Ar, 'GatewayTimeoutError'); const Am = 'Interactive transaction error'; const Ir = class extends j {constructor(r, n = Am) { super(n, A(r, !1)); d(this, 'name', 'InteractiveTransactionError'); d(this, 'code', 'P5015') }}; x(Ir, 'InteractiveTransactionError'); const Im = 'Request parameters are invalid'; const kr = class extends j {constructor(r, n = Im) { super(n, A(r, !1)); d(this, 'name', 'InvalidRequestError'); d(this, 'code', 'P5011') }}; x(kr, 'InvalidRequestError'); const co = 'Requested resource does not exist'; const Or = class extends j {constructor(r, n = co) { super(n, A(r, !1)); d(this, 'name', 'NotFoundError'); d(this, 'code', 'P5003') }}; x(Or, 'NotFoundError'); const po = 'Unknown server error'; const Vt = class extends j {constructor(r, n, i) { super(n || po, A(r, !0)); d(this, 'name', 'ServerError'); d(this, 'code', 'P5006'); d(this, 'logs'); this.logs = i }}; x(Vt, 'ServerError'); const mo = 'Unauthorized, check your connection string'; const _r = class extends j {constructor(r, n = mo) { super(n, A(r, !1)); d(this, 'name', 'UnauthorizedError'); d(this, 'code', 'P5007') }}; x(_r, 'UnauthorizedError'); const fo = 'Usage exceeded, retry again later'; const Dr = class extends j {constructor(r, n = fo) { super(n, A(r, !0)); d(this, 'name', 'UsageExceededError'); d(this, 'code', 'P5008') }}; x(Dr, 'UsageExceededError'); async function km(e) {
  let t; try { t = await e.text() }
  catch { return { type: 'EmptyError' } } try {
    const r = JSON.parse(t); if (typeof r == 'string')
      switch (r) { case 'InternalDataProxyError':return { type: 'DataProxyError', body: r }; default:return { type: 'UnknownTextError', body: r } } if (typeof r == 'object' && r !== null) {
      if ('is_panic' in r && 'message' in r && 'error_code' in r)
        return { type: 'QueryEngineError', body: r }; if ('EngineNotStarted' in r || 'InteractiveTransactionMisrouted' in r || 'InvalidRequestError' in r) { const n = Object.values(r)[0].reason; return typeof n == 'string' && !['SchemaMissing', 'EngineVersionNotSupported'].includes(n) ? { type: 'UnknownJsonError', body: r } : { type: 'DataProxyError', body: r } }
    } return { type: 'UnknownJsonError', body: r }
  }
  catch { return t === '' ? { type: 'EmptyError' } : { type: 'UnknownTextError', body: t } }
} async function Nr(e, t) {
  if (e.ok)
    return; const r = { clientVersion: t, response: e }; const n = await km(e); if (n.type === 'QueryEngineError')
    throw new te(n.body.message, { code: n.body.error_code, clientVersion: t }); if (n.type === 'DataProxyError') {
    if (n.body === 'InternalDataProxyError')
      throw new Vt(r, 'Internal Data Proxy error'); if ('EngineNotStarted' in n.body) {
      if (n.body.EngineNotStarted.reason === 'SchemaMissing')
        return new ct(r); if (n.body.EngineNotStarted.reason === 'EngineVersionNotSupported')
        throw new Sr(r); if ('EngineStartupError' in n.body.EngineNotStarted.reason) { const { msg: i, logs: o } = n.body.EngineNotStarted.reason.EngineStartupError; throw new Rr(r, i, o) } if ('KnownEngineStartupError' in n.body.EngineNotStarted.reason) { const { msg: i, error_code: o } = n.body.EngineNotStarted.reason.KnownEngineStartupError; throw new C(i, t, o) } if ('HealthcheckTimeout' in n.body.EngineNotStarted.reason) { const { logs: i } = n.body.EngineNotStarted.reason.HealthcheckTimeout; throw new Cr(r, i) }
    } if ('InteractiveTransactionMisrouted' in n.body) { const i = { IDParseError: 'Could not parse interactive transaction ID', NoQueryEngineFoundError: 'Could not find Query Engine for the specified host and transaction ID', TransactionStartError: 'Could not start interactive transaction' }; throw new Ir(r, i[n.body.InteractiveTransactionMisrouted.reason]) } if ('InvalidRequestError' in n.body)
      throw new kr(r, n.body.InvalidRequestError.reason)
  } if (e.status === 401 || e.status === 403)
    throw new _r(r, jt(mo, n)); if (e.status === 404)
    return new Or(r, jt(co, n)); if (e.status === 429)
    throw new Dr(r, jt(fo, n)); if (e.status === 504)
    throw new Ar(r, jt(uo, n)); if (e.status >= 500)
    throw new Vt(r, jt(po, n)); if (e.status >= 400)
    throw new Tr(r, jt(lo, n))
} function jt(e, t) { return t.type === 'EmptyError' ? e : `${e}: ${JSON.stringify(t)}` } function wl(e) { const t = 2 ** e * 50; const r = Math.ceil(Math.random() * t) - Math.ceil(t / 2); const n = t + r; return new Promise(i => setTimeout(() => i(n), n)) } const Ve = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'; function xl(e) { const t = new TextEncoder().encode(e); let r = ''; const n = t.byteLength; const i = n % 3; const o = n - i; let s; let a; let l; let u; let c; for (let p = 0; p < o; p = p + 3)c = t[p] << 16 | t[p + 1] << 8 | t[p + 2], s = (c & 16515072) >> 18, a = (c & 258048) >> 12, l = (c & 4032) >> 6, u = c & 63, r += Ve[s] + Ve[a] + Ve[l] + Ve[u]; return i == 1 ? (c = t[o], s = (c & 252) >> 2, a = (c & 3) << 4, r += `${Ve[s] + Ve[a]}==`) : i == 2 && (c = t[o] << 8 | t[o + 1], s = (c & 64512) >> 10, a = (c & 1008) >> 4, l = (c & 15) << 2, r += `${Ve[s] + Ve[a] + Ve[l]}=`), r } function Pl(e) {
  if (e.generator?.previewFeatures.some(r => r.toLowerCase().includes('metrics')))
    throw new C('The `metrics` preview feature is not yet available with Accelerate.\nPlease remove `metrics` from the `previewFeatures` in your schema.\n\nMore information about Accelerate: https://pris.ly/d/accelerate', e.clientVersion)
} function Om(e) { return e[0] * 1e3 + e[1] / 1e6 } function go(e) { return new Date(Om(e)) } const vl = { '@prisma/debug': 'workspace:*', '@prisma/engines-version': '6.5.0-73.173f8d54f8d52e692c7e27e72a88314ec7aeff60', '@prisma/fetch-engine': 'workspace:*', '@prisma/get-platform': 'workspace:*' }; const Lr = class extends ue {
  constructor(r, n) {
    super(`Cannot fetch data from service:
${r}`, A(n, !0)); d(this, 'name', 'RequestError'); d(this, 'code', 'P5010')
  }
}; x(Lr, 'RequestError'); async function pt(e, t, r = n => n) {
  const { clientVersion: n, ...i } = t; const o = r(fetch); try { return await o(e, i) }
  catch (s) { const a = s.message ?? 'Unknown error'; throw new Lr(a, { clientVersion: n, cause: s }) }
} const Dm = /^[1-9]\d*\.\d+\.\d+$/; const Tl = M('prisma:client:dataproxyEngine'); async function Nm(e, t) {
  const r = vl['@prisma/engines-version']; const n = t.clientVersion ?? 'unknown'; if (process.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION)
    return process.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION; if (e.includes('accelerate') && n !== '0.0.0' && n !== 'in-memory')
    return n; const [i, o] = n?.split('-') ?? []; if (o === void 0 && Dm.test(i))
    return i; if (o !== void 0 || n === '0.0.0' || n === 'in-memory') {
    if (e.startsWith('localhost') || e.startsWith('127.0.0.1'))
      return '0.0.0'; const [s] = r.split('-') ?? []; const [a, l, u] = s.split('.'); const c = Lm(`<=${a}.${l}.${u}`); const p = await pt(c, { clientVersion: n }); if (!p.ok)
      throw new Error(`Failed to fetch stable Prisma version, unpkg.com status ${p.status} ${p.statusText}, response body: ${await p.text() || '<empty body>'}`); const m = await p.text(); Tl('length of body fetched from unpkg.com', m.length); let g; try { g = JSON.parse(m) }
    catch (h) { throw console.error('JSON.parse error: body fetched from unpkg.com: ', m), h } return g.version
  } throw new ut('Only `major.minor.patch` versions are supported by Accelerate.', { clientVersion: n })
} async function Cl(e, t) { const r = await Nm(e, t); return Tl('version', r), r } function Lm(e) { return encodeURI(`https://unpkg.com/prisma@${e}/package.json`) } const Rl = 3; const jn = M('prisma:client:dataproxyEngine'); const ho = class {constructor({ apiKey: t, tracingHelper: r, logLevel: n, logQueries: i, engineHash: o }) { d(this, 'apiKey'); d(this, 'tracingHelper'); d(this, 'logLevel'); d(this, 'logQueries'); d(this, 'engineHash'); this.apiKey = t, this.tracingHelper = r, this.logLevel = n, this.logQueries = i, this.engineHash = o }build({ traceparent: t, interactiveTransaction: r } = {}) { const n = { 'Authorization': `Bearer ${this.apiKey}`, 'Prisma-Engine-Hash': this.engineHash }; this.tracingHelper.isEnabled() && (n.traceparent = t ?? this.tracingHelper.getTraceParent()), r && (n['X-transaction-id'] = r.id); const i = this.buildCaptureSettings(); return i.length > 0 && (n['X-capture-telemetry'] = i.join(', ')), n }buildCaptureSettings() { const t = []; return this.tracingHelper.isEnabled() && t.push('tracing'), this.logLevel && t.push(this.logLevel), this.logQueries && t.push('query'), t }}; const Fr = class {
  constructor(t) { d(this, 'name', 'DataProxyEngine'); d(this, 'inlineSchema'); d(this, 'inlineSchemaHash'); d(this, 'inlineDatasources'); d(this, 'config'); d(this, 'logEmitter'); d(this, 'env'); d(this, 'clientVersion'); d(this, 'engineHash'); d(this, 'tracingHelper'); d(this, 'remoteClientVersion'); d(this, 'host'); d(this, 'headerBuilder'); d(this, 'startPromise'); Pl(t), this.config = t, this.env = { ...t.env, ...typeof process < 'u' ? process.env : {} }, this.inlineSchema = xl(t.inlineSchema), this.inlineDatasources = t.inlineDatasources, this.inlineSchemaHash = t.inlineSchemaHash, this.clientVersion = t.clientVersion, this.engineHash = t.engineVersion, this.logEmitter = t.logEmitter, this.tracingHelper = t.tracingHelper }apiKey() { return this.headerBuilder.apiKey }version() { return this.engineHash } async start() { this.startPromise !== void 0 && await this.startPromise, this.startPromise = (async () => { const [t, r] = this.extractHostAndApiKey(); this.host = t, this.headerBuilder = new ho({ apiKey: r, tracingHelper: this.tracingHelper, logLevel: this.config.logLevel, logQueries: this.config.logQueries, engineHash: this.engineHash }), this.remoteClientVersion = await Cl(t, this.config), jn('host', this.host) })(), await this.startPromise } async stop() {}propagateResponseExtensions(t) { t?.logs?.length && t.logs.forEach((r) => { switch (r.level) { case 'debug':case 'trace':jn(r); break; case 'error':case 'warn':case 'info':{ this.logEmitter.emit(r.level, { timestamp: go(r.timestamp), message: r.attributes.message ?? '', target: r.target }); break } case 'query':{ this.logEmitter.emit('query', { query: r.attributes.query ?? '', timestamp: go(r.timestamp), duration: r.attributes.duration_ms ?? 0, params: r.attributes.params ?? '', target: r.target }); break } default:r.level } }), t?.traces?.length && this.tracingHelper.dispatchEngineSpans(t.traces) }onBeforeExit() { throw new Error('"beforeExit" hook is not applicable to the remote query engine') } async url(t) { return await this.start(), `https://${this.host}/${this.remoteClientVersion}/${this.inlineSchemaHash}/${t}` } async uploadSchema() {
    const t = { name: 'schemaUpload', internal: !0 }; return this.tracingHelper.runInChildSpan(t, async () => {
      const r = await pt(await this.url('schema'), { method: 'PUT', headers: this.headerBuilder.build(), body: this.inlineSchema, clientVersion: this.clientVersion }); r.ok || jn('schema response status', r.status); const n = await Nr(r, this.clientVersion); if (n)
        throw this.logEmitter.emit('warn', { message: `Error while uploading schema: ${n.message}`, timestamp: new Date(), target: '' }), n; this.logEmitter.emit('info', { message: `Schema (re)uploaded (hash: ${this.inlineSchemaHash})`, timestamp: new Date(), target: '' })
    })
  }

  request(t, { traceparent: r, interactiveTransaction: n, customDataProxyFetch: i }) { return this.requestInternal({ body: t, traceparent: r, interactiveTransaction: n, customDataProxyFetch: i }) } async requestBatch(t, { traceparent: r, transaction: n, customDataProxyFetch: i }) { const o = n?.kind === 'itx' ? n.options : void 0; const s = Lt(t, n); return (await this.requestInternal({ body: s, customDataProxyFetch: i, interactiveTransaction: o, traceparent: r })).map(l => (l.extensions && this.propagateResponseExtensions(l.extensions), 'errors' in l ? this.convertProtocolErrorsToClientError(l.errors) : l)) }requestInternal({ body: t, traceparent: r, customDataProxyFetch: n, interactiveTransaction: i }) {
    return this.withRetry({ actionGerund: 'querying', callback: async ({ logHttpCall: o }) => {
      const s = i ? `${i.payload.endpoint}/graphql` : await this.url('graphql'); o(s); const a = await pt(s, { method: 'POST', headers: this.headerBuilder.build({ traceparent: r, interactiveTransaction: i }), body: JSON.stringify(t), clientVersion: this.clientVersion }, n); a.ok || jn('graphql response status', a.status), await this.handleError(await Nr(a, this.clientVersion)); const l = await a.json(); if (l.extensions && this.propagateResponseExtensions(l.extensions), 'errors' in l)
        throw this.convertProtocolErrorsToClientError(l.errors); return 'batchResult' in l ? l.batchResult : l
    } })
  }

  async transaction(t, r, n) {
    const i = { start: 'starting', commit: 'committing', rollback: 'rolling back' }; return this.withRetry({ actionGerund: `${i[t]} transaction`, callback: async ({ logHttpCall: o }) => {
      if (t === 'start') { const s = JSON.stringify({ max_wait: n.maxWait, timeout: n.timeout, isolation_level: n.isolationLevel }); const a = await this.url('transaction/start'); o(a); const l = await pt(a, { method: 'POST', headers: this.headerBuilder.build({ traceparent: r.traceparent }), body: s, clientVersion: this.clientVersion }); await this.handleError(await Nr(l, this.clientVersion)); const u = await l.json(); const { extensions: c } = u; c && this.propagateResponseExtensions(c); const p = u.id; const m = u['data-proxy'].endpoint; return { id: p, payload: { endpoint: m } } }
      else { const s = `${n.payload.endpoint}/${t}`; o(s); const a = await pt(s, { method: 'POST', headers: this.headerBuilder.build({ traceparent: r.traceparent }), clientVersion: this.clientVersion }); await this.handleError(await Nr(a, this.clientVersion)); const l = await a.json(); const { extensions: u } = l; u && this.propagateResponseExtensions(u) }
    } })
  }

  extractHostAndApiKey() {
    const t = { clientVersion: this.clientVersion }; const r = Object.keys(this.inlineDatasources)[0]; const n = $t({ inlineDatasources: this.inlineDatasources, overrideDatasources: this.config.overrideDatasources, clientVersion: this.clientVersion, env: this.env }); let i; try { i = new URL(n) }
    catch { throw new lt(`Error validating datasource \`${r}\`: the URL must start with the protocol \`prisma://\``, t) } const { protocol: o, host: s, searchParams: a } = i; if (o !== 'prisma:' && o !== Xr)
      throw new lt(`Error validating datasource \`${r}\`: the URL must start with the protocol \`prisma://\``, t); const l = a.get('api_key'); if (l === null || l.length < 1)
      throw new lt(`Error validating datasource \`${r}\`: the URL must contain a valid API key`, t); return [s, l]
  }

  metrics() { throw new ut('Metrics are not yet supported for Accelerate', { clientVersion: this.clientVersion }) } async withRetry(t) {
    for (let r = 0; ;r++) {
      const n = (i) => { this.logEmitter.emit('info', { message: `Calling ${i} (n=${r})`, timestamp: new Date(), target: '' }) }; try { return await t.callback({ logHttpCall: n }) }
      catch (i) {
        if (!(i instanceof ue) || !i.isRetryable)
          throw i; if (r >= Rl)
          throw i instanceof qt ? i.cause : i; this.logEmitter.emit('warn', { message: `Attempt ${r + 1}/${Rl} failed for ${t.actionGerund}: ${i.message ?? '(unknown)'}`, timestamp: new Date(), target: '' }); const o = await wl(r); this.logEmitter.emit('warn', { message: `Retrying after ${o}ms`, timestamp: new Date(), target: '' })
      }
    }
  }

  async handleError(t) {
    if (t instanceof ct)
      throw await this.uploadSchema(), new qt({ clientVersion: this.clientVersion, cause: t }); if (t)
      throw t
  }

  convertProtocolErrorsToClientError(t) { return t.length === 1 ? Ft(t[0], this.config.clientVersion, this.config.activeProvider) : new U(JSON.stringify(t), { clientVersion: this.config.clientVersion }) }applyPendingMigrations() { throw new Error('Method not implemented.') }
}; function Sl(e) {
  if (e?.kind === 'itx')
    return e.options.id
} const Eo = D(require('node:os')); const Al = D(require('node:path'))

const yo = Symbol('PrismaLibraryEngineCache'); function Fm() { const e = globalThis; return e[yo] === void 0 && (e[yo] = {}), e[yo] } function Mm(e) {
  const t = Fm(); if (t[e] !== void 0)
    return t[e]; const r = Al.default.toNamespacedPath(e); const n = { exports: {} }; let i = 0; return process.platform !== 'win32' && (i = Eo.default.constants.dlopen.RTLD_LAZY | Eo.default.constants.dlopen.RTLD_DEEPBIND), process.dlopen(n, r, i), t[e] = n.exports, n.exports
} const Il = { async loadLibrary(e) {
  const t = await ci(); const r = await ml('library', e); try { return e.tracingHelper.runInChildSpan({ name: 'loadLibrary', internal: !0 }, () => Mm(r)) }
  catch (n) { const i = vi({ e: n, platformInfo: t, id: r }); throw new C(i, e.clientVersion) }
} }; let bo; const kl = { async loadLibrary(e) {
  const { clientVersion: t, adapter: r, engineWasm: n } = e; if (r === void 0)
    throw new C(`The \`adapter\` option for \`PrismaClient\` is required in this context (${Fn().prettyName})`, t); if (n === void 0)
    throw new C('WASM engine was unexpectedly `undefined`', t); bo === void 0 && (bo = (async () => {
    const o = n.getRuntime(); const s = await n.getQueryEngineWasmModule(); if (s == null)
      throw new C('The loaded wasm module was unexpectedly `undefined` or `null` once loaded', t); const a = { './query_engine_bg.js': o }; const l = new WebAssembly.Instance(s, a); const u = l.exports.__wbindgen_start; return o.__wbg_set_wasm(l.exports), u(), o.QueryEngine
  })()); const i = await bo; return { debugPanic() { return Promise.reject('{}') }, dmmf() { return Promise.resolve('{}') }, version() { return { commit: 'unknown', version: 'unknown' } }, QueryEngine: i }
} }; const $m = 'P2036'; const ke = M('prisma:client:libraryEngine'); function qm(e) { return e.item_type === 'query' && 'query' in e } function Vm(e) { return 'level' in e ? e.level === 'error' && e.message === 'PANIC' : !1 } const Ol = [...ii, 'native']; const jm = 0xFFFFFFFFFFFFFFFFn; let wo = 1n; function Bm() { const e = wo++; return wo > jm && (wo = 1n), e } const Bt = class {
  constructor(t, r) { d(this, 'name', 'LibraryEngine'); d(this, 'engine'); d(this, 'libraryInstantiationPromise'); d(this, 'libraryStartingPromise'); d(this, 'libraryStoppingPromise'); d(this, 'libraryStarted'); d(this, 'executingQueryPromise'); d(this, 'config'); d(this, 'QueryEngineConstructor'); d(this, 'libraryLoader'); d(this, 'library'); d(this, 'logEmitter'); d(this, 'libQueryEnginePath'); d(this, 'binaryTarget'); d(this, 'datasourceOverrides'); d(this, 'datamodel'); d(this, 'logQueries'); d(this, 'logLevel'); d(this, 'lastQuery'); d(this, 'loggerRustPanic'); d(this, 'tracingHelper'); d(this, 'versionInfo'); this.libraryLoader = r ?? Il, t.engineWasm !== void 0 && (this.libraryLoader = r ?? kl), this.config = t, this.libraryStarted = !1, this.logQueries = t.logQueries ?? !1, this.logLevel = t.logLevel ?? 'error', this.logEmitter = t.logEmitter, this.datamodel = t.inlineSchema, this.tracingHelper = t.tracingHelper, t.enableDebugLogs && (this.logLevel = 'debug'); const n = Object.keys(t.overrideDatasources)[0]; const i = t.overrideDatasources[n]?.url; n !== void 0 && i !== void 0 && (this.datasourceOverrides = { [n]: i }), this.libraryInstantiationPromise = this.instantiateLibrary() }wrapEngine(t) { return { applyPendingMigrations: t.applyPendingMigrations?.bind(t), commitTransaction: this.withRequestId(t.commitTransaction.bind(t)), connect: this.withRequestId(t.connect.bind(t)), disconnect: this.withRequestId(t.disconnect.bind(t)), metrics: t.metrics?.bind(t), query: this.withRequestId(t.query.bind(t)), rollbackTransaction: this.withRequestId(t.rollbackTransaction.bind(t)), sdlSchema: t.sdlSchema?.bind(t), startTransaction: this.withRequestId(t.startTransaction.bind(t)), trace: t.trace.bind(t) } }withRequestId(t) {
    return async (...r) => {
      const n = Bm().toString(); try { return await t(...r, n) }
      finally { if (this.tracingHelper.isEnabled()) { const i = await this.engine?.trace(n); if (i) { const o = JSON.parse(i); this.tracingHelper.dispatchEngineSpans(o.spans) } } }
    }
  }

  async applyPendingMigrations() { throw new Error('Cannot call this method from this type of engine instance') } async transaction(t, r, n) {
    await this.start(); const i = JSON.stringify(r); let o; if (t === 'start') { const a = JSON.stringify({ max_wait: n.maxWait, timeout: n.timeout, isolation_level: n.isolationLevel }); o = await this.engine?.startTransaction(a, i) }
    else {
      t === 'commit' ? o = await this.engine?.commitTransaction(n.id, i) : t === 'rollback' && (o = await this.engine?.rollbackTransaction(n.id, i))
    } const s = this.parseEngineResponse(o); if (Um(s)) { const a = this.getExternalAdapterError(s); throw a ? a.error : new te(s.message, { code: s.error_code, clientVersion: this.config.clientVersion, meta: s.meta }) }
    else if (typeof s.message == 'string') {
      throw new U(s.message, { clientVersion: this.config.clientVersion })
    } return s
  }

  async instantiateLibrary() {
    if (ke('internalSetup'), this.libraryInstantiationPromise)
      return this.libraryInstantiationPromise; ni(), this.binaryTarget = await this.getCurrentBinaryTarget(), await this.tracingHelper.runInChildSpan('load_engine', () => this.loadEngine()), this.version()
  }

  async getCurrentBinaryTarget() {
    { if (this.binaryTarget)
      return this.binaryTarget; const t = await this.tracingHelper.runInChildSpan('detect_platform', () => ot()); if (!Ol.includes(t)) {
      throw new C(`Unknown ${fe('PRISMA_QUERY_ENGINE_LIBRARY')} ${fe(Y(t))}. Possible binaryTargets: ${je(Ol.join(', '))} or a path to the query engine library.
You may have to run ${je('prisma generate')} for your changes to take effect.`, this.config.clientVersion)
    } return t }
  }

  parseEngineResponse(t) {
    if (!t)
      throw new U('Response from the Engine was empty', { clientVersion: this.config.clientVersion }); try { return JSON.parse(t) }
    catch { throw new U('Unable to JSON.parse response from engine', { clientVersion: this.config.clientVersion }) }
  }

  async loadEngine() {
    if (!this.engine) {
      this.QueryEngineConstructor || (this.library = await this.libraryLoader.loadLibrary(this.config), this.QueryEngineConstructor = this.library.QueryEngine); try { const t = new WeakRef(this); const { adapter: r } = this.config; r && ke('Using driver adapter: %O', r), this.engine = this.wrapEngine(new this.QueryEngineConstructor({ datamodel: this.datamodel, env: process.env, logQueries: this.config.logQueries ?? !1, ignoreEnvVarErrors: !0, datasourceOverrides: this.datasourceOverrides ?? {}, logLevel: this.logLevel, configDir: this.config.cwd, engineProtocol: 'json', enableTracing: this.tracingHelper.isEnabled() }, (n) => { t.deref()?.logger(n) }, r)) }
      catch (t) { const r = t; const n = this.parseInitError(r.message); throw typeof n == 'string' ? r : new C(n.message, this.config.clientVersion, n.error_code) }
    }
  }

  logger(t) { const r = this.parseEngineResponse(t); r && (r.level = r?.level.toLowerCase() ?? 'unknown', qm(r) ? this.logEmitter.emit('query', { timestamp: new Date(), query: r.query, params: r.params, duration: Number(r.duration_ms), target: r.module_path }) : Vm(r) ? this.loggerRustPanic = new pe(xo(this, `${r.message}: ${r.reason} in ${r.file}:${r.line}:${r.column}`), this.config.clientVersion) : this.logEmitter.emit(r.level, { timestamp: new Date(), message: r.message, target: r.module_path })) }parseInitError(t) {
    try { return JSON.parse(t) }
    catch {} return t
  }

  parseRequestError(t) {
    try { return JSON.parse(t) }
    catch {} return t
  }

  onBeforeExit() { throw new Error('"beforeExit" hook is not applicable to the library engine since Prisma 5.0.0, it is only relevant and implemented for the binary engine. Please add your event listener to the `process` object directly instead.') } async start() {
    if (await this.libraryInstantiationPromise, await this.libraryStoppingPromise, this.libraryStartingPromise)
      return ke(`library already starting, this.libraryStarted: ${this.libraryStarted}`), this.libraryStartingPromise; if (this.libraryStarted)
      return; const t = async () => {
      ke('library starting'); try { const r = { traceparent: this.tracingHelper.getTraceParent() }; await this.engine?.connect(JSON.stringify(r)), this.libraryStarted = !0, ke('library started') }
      catch (r) { const n = this.parseInitError(r.message); throw typeof n == 'string' ? r : new C(n.message, this.config.clientVersion, n.error_code) }
      finally { this.libraryStartingPromise = void 0 }
    }; return this.libraryStartingPromise = this.tracingHelper.runInChildSpan('connect', t), this.libraryStartingPromise
  }

  async stop() {
    if (await this.libraryStartingPromise, await this.executingQueryPromise, this.libraryStoppingPromise)
      return ke('library is already stopping'), this.libraryStoppingPromise; if (!this.libraryStarted)
      return; const t = async () => { await new Promise(n => setTimeout(n, 5)), ke('library stopping'); const r = { traceparent: this.tracingHelper.getTraceParent() }; await this.engine?.disconnect(JSON.stringify(r)), this.libraryStarted = !1, this.libraryStoppingPromise = void 0, ke('library stopped') }; return this.libraryStoppingPromise = this.tracingHelper.runInChildSpan('disconnect', t), this.libraryStoppingPromise
  }

  version() { return this.versionInfo = this.library?.version(), this.versionInfo?.version ?? 'unknown' }debugPanic(t) { return this.library?.debugPanic(t) } async request(t, { traceparent: r, interactiveTransaction: n }) {
    ke(`sending request, this.libraryStarted: ${this.libraryStarted}`); const i = JSON.stringify({ traceparent: r }); const o = JSON.stringify(t); try {
      await this.start(), this.executingQueryPromise = this.engine?.query(o, i, n?.id), this.lastQuery = o; const s = this.parseEngineResponse(await this.executingQueryPromise); if (s.errors)
        throw s.errors.length === 1 ? this.buildQueryError(s.errors[0]) : new U(JSON.stringify(s.errors), { clientVersion: this.config.clientVersion }); if (this.loggerRustPanic)
        throw this.loggerRustPanic; return { data: s }
    }
    catch (s) {
      if (s instanceof C)
        throw s; if (s.code === 'GenericFailure' && s.message?.startsWith('PANIC:'))
        throw new pe(xo(this, s.message), this.config.clientVersion); const a = this.parseRequestError(s.message); throw typeof a == 'string'
        ? s
        : new U(`${a.message}
${a.backtrace}`, { clientVersion: this.config.clientVersion })
    }
  }

  async requestBatch(t, { transaction: r, traceparent: n }) {
    ke('requestBatch'); const i = Lt(t, r); await this.start(), this.lastQuery = JSON.stringify(i), this.executingQueryPromise = this.engine.query(this.lastQuery, JSON.stringify({ traceparent: n }), Sl(r)); const o = await this.executingQueryPromise; const s = this.parseEngineResponse(o); if (s.errors)
      throw s.errors.length === 1 ? this.buildQueryError(s.errors[0]) : new U(JSON.stringify(s.errors), { clientVersion: this.config.clientVersion }); const { batchResult: a, errors: l } = s; if (Array.isArray(a))
      return a.map(u => u.errors && u.errors.length > 0 ? this.loggerRustPanic ?? this.buildQueryError(u.errors[0]) : { data: u }); throw l && l.length === 1 ? new Error(l[0].error) : new Error(JSON.stringify(s))
  }

  buildQueryError(t) {
    if (t.user_facing_error.is_panic)
      return new pe(xo(this, t.user_facing_error.message), this.config.clientVersion); const r = this.getExternalAdapterError(t.user_facing_error); return r ? r.error : Ft(t, this.config.clientVersion, this.config.activeProvider)
  }

  getExternalAdapterError(t) { if (t.error_code === $m && this.config.adapter) { const r = t.meta?.id; en(typeof r == 'number', 'Malformed external JS error received from the engine'); const n = this.config.adapter.errorRegistry.consumeError(r); return en(n, 'External error with reported id was not registered'), n } } async metrics(t) { await this.start(); const r = await this.engine.metrics(JSON.stringify(t)); return t.format === 'prometheus' ? r : this.parseEngineResponse(r) }
}; function Um(e) { return typeof e == 'object' && e !== null && e.error_code !== void 0 } function xo(e, t) { return bl({ binaryTarget: e.binaryTarget, title: t, version: e.config.clientVersion, engineVersion: e.versionInfo?.commit, database: e.config.activeProvider, query: e.lastQuery }) } function _l({ copyEngine: e = !0 }, t) {
  let r; try { r = $t({ inlineDatasources: t.inlineDatasources, overrideDatasources: t.overrideDatasources, env: { ...t.env, ...process.env }, clientVersion: t.clientVersion }) }
  catch {} const n = !!(r?.startsWith('prisma://') || Ii(r)); e && n && or('recommend--no-engine', 'In production, we recommend using `prisma generate --no-engine` (See: `prisma generate --help`)'); const i = Et(t.generator); const o = n || !e; const s = !!t.adapter; const a = i === 'library'; const l = i === 'binary'; const u = i === 'client'; if (o && s || s && !1) {
    let c; throw e ? r?.startsWith('prisma://') ? c = ['Prisma Client was configured to use the `adapter` option but the URL was a `prisma://` URL.', 'Please either use the `prisma://` URL or remove the `adapter` from the Prisma Client constructor.'] : c = ['Prisma Client was configured to use both the `adapter` and Accelerate, please chose one.'] : c = ['Prisma Client was configured to use the `adapter` option but `prisma generate` was run with `--no-engine`.', 'Please run `prisma generate` without `--no-engine` to be able to use Prisma Client with the adapter.'], new re(c.join(`
`), { clientVersion: t.clientVersion })
  } return o ? new Fr(t) : a ? new Bt(t) : new Bt(t)
} function Bn({ generator: e }) { return e?.previewFeatures ?? [] } const Dl = e => ({ command: e }); const Nl = e => e.strings.reduce((t, r, n) => `${t}@P${n}${r}`); function Ut(e) {
  try { return Ll(e, 'fast') }
  catch { return Ll(e, 'slow') }
} function Ll(e, t) { return JSON.stringify(e.map(r => Ml(r, t))) } function Ml(e, t) {
  if (Array.isArray(e))
    return e.map(r => Ml(r, t)); if (typeof e == 'bigint')
    return { prisma__type: 'bigint', prisma__value: e.toString() }; if (Tt(e))
    return { prisma__type: 'date', prisma__value: e.toJSON() }; if (Ce.isDecimal(e))
    return { prisma__type: 'decimal', prisma__value: e.toJSON() }; if (Buffer.isBuffer(e))
    return { prisma__type: 'bytes', prisma__value: e.toString('base64') }; if (Qm(e))
    return { prisma__type: 'bytes', prisma__value: Buffer.from(e).toString('base64') }; if (ArrayBuffer.isView(e)) { const { buffer: r, byteOffset: n, byteLength: i } = e; return { prisma__type: 'bytes', prisma__value: Buffer.from(r, n, i).toString('base64') } } return typeof e == 'object' && t === 'slow' ? $l(e) : e
} function Qm(e) { return e instanceof ArrayBuffer || e instanceof SharedArrayBuffer ? !0 : typeof e == 'object' && e !== null ? e[Symbol.toStringTag] === 'ArrayBuffer' || e[Symbol.toStringTag] === 'SharedArrayBuffer' : !1 } function $l(e) {
  if (typeof e != 'object' || e === null)
    return e; if (typeof e.toJSON == 'function')
    return e.toJSON(); if (Array.isArray(e))
    return e.map(Fl); const t = {}; for (const r of Object.keys(e))t[r] = Fl(e[r]); return t
} function Fl(e) { return typeof e == 'bigint' ? e.toString() : $l(e) } const Gm = /^(\s*alter\s)/i; const ql = M('prisma:client'); function Po(e, t, r, n) {
  if (!(e !== 'postgresql' && e !== 'cockroachdb') && r.length > 0 && Gm.exec(t)) {
    throw new Error(`Running ALTER using ${n} is not supported
Using the example below you can still execute your query with Prisma, but please note that it is vulnerable to SQL injection attacks and requires you to take care of input sanitization.

Example:
  await prisma.$executeRawUnsafe(\`ALTER USER prisma WITH PASSWORD '\${password}'\`)

More Information: https://pris.ly/d/execute-raw
`)
  }
} function vo({ clientMethod: e, activeProvider: t }) {
  return (r) => {
    let n = ''; let i; if (On(r)) {
      n = r.sql, i = { values: Ut(r.values), __prismaRawParameters__: !0 }
    }
    else if (Array.isArray(r)) { const [o, ...s] = r; n = o, i = { values: Ut(s || []), __prismaRawParameters__: !0 } }
    else {
      switch (t) { case 'sqlite':case 'mysql':{ n = r.sql, i = { values: Ut(r.values), __prismaRawParameters__: !0 }; break } case 'cockroachdb':case 'postgresql':case 'postgres':{ n = r.text, i = { values: Ut(r.values), __prismaRawParameters__: !0 }; break } case 'sqlserver':{ n = Nl(r), i = { values: Ut(r.values), __prismaRawParameters__: !0 }; break } default:throw new Error(`The ${t} provider does not support ${e}`) }
    } return i?.values ? ql(`prisma.${e}(${n}, ${i.values})`) : ql(`prisma.${e}(${n})`), { query: n, parameters: i }
  }
} const Vl = { requestArgsToMiddlewareArgs(e) { return [e.strings, ...e.values] }, middlewareArgsToRequestArgs(e) { const [t, ...r] = e; return new le(t, r) } }; const jl = { requestArgsToMiddlewareArgs(e) { return [e] }, middlewareArgsToRequestArgs(e) { return e[0] } }; function To(e) {
  return function (r, n) {
    let i; const o = (s = e) => {
      try { return s === void 0 || s?.kind === 'itx' ? i ??= Bl(r(s)) : Bl(r(s)) }
      catch (a) { return Promise.reject(a) }
    }; return { get spec() { return n }, then(s, a) { return o().then(s, a) }, catch(s) { return o().catch(s) }, finally(s) { return o().finally(s) }, requestTransaction(s) { const a = o(s); return a.requestTransaction ? a.requestTransaction(s) : a }, [Symbol.toStringTag]: 'PrismaPromise' }
  }
} function Bl(e) { return typeof e.then == 'function' ? e : Promise.resolve(e) } const Jm = Ei.split('.')[0]; const Wm = { isEnabled() { return !1 }, getTraceParent() { return '00-10-10-00' }, dispatchEngineSpans() {}, getActiveContext() {}, runInChildSpan(e, t) { return t() } }; const Co = class {isEnabled() { return this.getGlobalTracingHelper().isEnabled() }getTraceParent(t) { return this.getGlobalTracingHelper().getTraceParent(t) }dispatchEngineSpans(t) { return this.getGlobalTracingHelper().dispatchEngineSpans(t) }getActiveContext() { return this.getGlobalTracingHelper().getActiveContext() }runInChildSpan(t, r) { return this.getGlobalTracingHelper().runInChildSpan(t, r) }getGlobalTracingHelper() { const t = globalThis[`V${Jm}_PRISMA_INSTRUMENTATION`]; const r = globalThis.PRISMA_INSTRUMENTATION; return t?.helper ?? r?.helper ?? Wm }}; function Ul() { return new Co() } function Ql(e, t = () => {}) { let r; const n = new Promise(i => r = i); return { then(i) { return --e === 0 && r(t()), i?.(n) } } } function Gl(e) { return typeof e == 'string' ? e : e.reduce((t, r) => { const n = typeof r == 'string' ? r : r.level; return n === 'query' ? t : t && (r === 'info' || t === 'info') ? 'info' : n }, void 0) } const Un = class {constructor() { d(this, '_middlewares', []) }use(t) { this._middlewares.push(t) }get(t) { return this._middlewares[t] }has(t) { return !!this._middlewares[t] }length() { return this._middlewares.length }}; const Wl = D(Li()); function Qn(e) { return typeof e.batchRequestIdx == 'number' } function Jl(e) {
  if (e.action !== 'findUnique' && e.action !== 'findUniqueOrThrow')
    return; const t = []; return e.modelName && t.push(e.modelName), e.query.arguments && t.push(Ro(e.query.arguments)), t.push(Ro(e.query.selection)), t.join('')
} function Ro(e) { return `(${Object.keys(e).sort().map((r) => { const n = e[r]; return typeof n == 'object' && n !== null ? `(${r} ${Ro(n)})` : r }).join(' ')})` } const Hm = { aggregate: !1, aggregateRaw: !1, createMany: !0, createManyAndReturn: !0, createOne: !0, deleteMany: !0, deleteOne: !0, executeRaw: !0, findFirst: !1, findFirstOrThrow: !1, findMany: !1, findRaw: !1, findUnique: !1, findUniqueOrThrow: !1, groupBy: !1, queryRaw: !1, runCommandRaw: !0, updateMany: !0, updateManyAndReturn: !0, updateOne: !0, upsertOne: !0 }; function So(e) { return Hm[e] } const Gn = class {
  constructor(t) { this.options = t; d(this, 'batches'); d(this, 'tickActive', !1); this.batches = {} }request(t) { const r = this.options.batchBy(t); return r ? (this.batches[r] || (this.batches[r] = [], this.tickActive || (this.tickActive = !0, process.nextTick(() => { this.dispatchBatches(), this.tickActive = !1 }))), new Promise((n, i) => { this.batches[r].push({ request: t, resolve: n, reject: i }) })) : this.options.singleLoader(t) }dispatchBatches() {
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
}; function dt(e, t) {
  if (t === null)
    return t; switch (e) { case 'bigint':return BigInt(t); case 'bytes':{ const { buffer: r, byteOffset: n, byteLength: i } = Buffer.from(t, 'base64'); return new Uint8Array(r, n, i) } case 'decimal':return new Ce(t); case 'datetime':case 'date':return new Date(t); case 'time':return new Date(`1970-01-01T${t}Z`); case 'bigint-array':return t.map(r => dt('bigint', r)); case 'bytes-array':return t.map(r => dt('bytes', r)); case 'decimal-array':return t.map(r => dt('decimal', r)); case 'datetime-array':return t.map(r => dt('datetime', r)); case 'date-array':return t.map(r => dt('date', r)); case 'time-array':return t.map(r => dt('time', r)); default:return t }
} function Jn(e) { const t = []; const r = Km(e); for (let n = 0; n < e.rows.length; n++) { const i = e.rows[n]; const o = { ...r }; for (let s = 0; s < i.length; s++)o[e.columns[s]] = dt(e.types[s], i[s]); t.push(o) } return t } function Km(e) { const t = {}; for (let r = 0; r < e.columns.length; r++)t[e.columns[r]] = null; return t } const Ym = M('prisma:client:request_handler'); const Wn = class {
  constructor(t, r) {
    d(this, 'client'); d(this, 'dataloader'); d(this, 'logEmitter'); this.logEmitter = r, this.client = t, this.dataloader = new Gn({ batchLoader: tl(async ({ requests: n, customDataProxyFetch: i }) => {
      const { transaction: o, otelParentCtx: s } = n[0]; const a = n.map(p => p.protocolQuery); const l = this.client._tracingHelper.getTraceParent(s); const u = n.some(p => So(p.protocolQuery.action)); return (await this.client._engine.requestBatch(a, { traceparent: l, transaction: zm(o), containsWrite: u, customDataProxyFetch: i })).map((p, m) => {
        if (p instanceof Error)
          return p; try { return this.mapQueryEngineResult(n[m], p) }
        catch (g) { return g }
      })
    }), singleLoader: async (n) => { const i = n.transaction?.kind === 'itx' ? Hl(n.transaction) : void 0; const o = await this.client._engine.request(n.protocolQuery, { traceparent: this.client._tracingHelper.getTraceParent(), interactiveTransaction: i, isWrite: So(n.protocolQuery.action), customDataProxyFetch: n.customDataProxyFetch }); return this.mapQueryEngineResult(n, o) }, batchBy: n => n.transaction?.id ? `transaction-${n.transaction.id}` : Jl(n.protocolQuery), batchOrder(n, i) { return n.transaction?.kind === 'batch' && i.transaction?.kind === 'batch' ? n.transaction.index - i.transaction.index : 0 } })
  }

  async request(t) {
    try { return await this.dataloader.request(t) }
    catch (r) { const { clientMethod: n, callsite: i, transaction: o, args: s, modelName: a } = t; this.handleAndLogRequestError({ error: r, clientMethod: n, callsite: i, transaction: o, args: s, modelName: a, globalOmit: t.globalOmit }) }
  }

  mapQueryEngineResult({ dataPath: t, unpacker: r }, n) { const i = n?.data; const o = this.unpack(i, t, r); return process.env.PRISMA_CLIENT_GET_TIME ? { data: o } : o }handleAndLogRequestError(t) {
    try { this.handleRequestError(t) }
    catch (r) { throw this.logEmitter && this.logEmitter.emit('error', { message: r.message, target: t.clientMethod, timestamp: new Date() }), r }
  }

  handleRequestError({ error: t, clientMethod: r, callsite: n, transaction: i, args: o, modelName: s, globalOmit: a }) {
    if (Ym(t), Zm(t, i))
      throw t; if (t instanceof te && Xm(t)) { const u = Kl(t.meta); Cn({ args: o, errors: [u], callsite: n, errorFormat: this.client._errorFormat, originalMethod: r, clientVersion: this.client._clientVersion, globalOmit: a }) } let l = t.message; if (n && (l = gn({ callsite: n, originalMethod: r, isPanic: t.isPanic, showColors: this.client._errorFormat === 'pretty', message: l })), l = this.sanitizeMessage(l), t.code) { const u = s ? { modelName: s, ...t.meta } : t.meta; throw new te(l, { code: t.code, clientVersion: this.client._clientVersion, meta: u, batchRequestIdx: t.batchRequestIdx }) }
    else {
      if (t.isPanic)
        throw new pe(l, this.client._clientVersion); if (t instanceof U)
        throw new U(l, { clientVersion: this.client._clientVersion, batchRequestIdx: t.batchRequestIdx }); if (t instanceof C)
        throw new C(l, this.client._clientVersion); if (t instanceof pe)
        throw new pe(l, this.client._clientVersion)
    } throw t.clientVersion = this.client._clientVersion, t
  }

  sanitizeMessage(t) { return this.client._errorFormat && this.client._errorFormat !== 'pretty' ? (0, Wl.default)(t) : t }unpack(t, r, n) {
    if (!t || (t.data && (t = t.data), !t))
      return t; const i = Object.keys(t)[0]; const o = Object.values(t)[0]; const s = r.filter(u => u !== 'select' && u !== 'include'); const a = no(o, s); const l = i === 'queryRaw' ? Jn(a) : Pt(a); return n ? n(l) : l
  }

  get [Symbol.toStringTag]() { return 'RequestHandler' }
}; function zm(e) {
  if (e) {
    if (e.kind === 'batch')
      return { kind: 'batch', options: { isolationLevel: e.isolationLevel } }; if (e.kind === 'itx')
      return { kind: 'itx', options: Hl(e) }; Me(e, 'Unknown transaction kind')
  }
} function Hl(e) { return { id: e.id, payload: e.payload } } function Zm(e, t) { return Qn(e) && t?.kind === 'batch' && e.batchRequestIdx !== t.index } function Xm(e) { return e.code === 'P2009' || e.code === 'P2012' } function Kl(e) {
  if (e.kind === 'Union')
    return { kind: 'Union', errors: e.errors.map(Kl) }; if (Array.isArray(e.selectionPath)) { const [,...t] = e.selectionPath; return { ...e, selectionPath: t } } return e
} const Yl = '6.5.0'; const zl = Yl; const ru = D(Qi()); const L = class extends Error {
  constructor(t) {
    super(`${t}
Read more at https://pris.ly/d/client-constructor`), this.name = 'PrismaClientConstructorValidationError'
  }

  get [Symbol.toStringTag]() { return 'PrismaClientConstructorValidationError' }
}; x(L, 'PrismaClientConstructorValidationError'); const Zl = ['datasources', 'datasourceUrl', 'errorFormat', 'adapter', 'log', 'transactionOptions', 'omit', '__internal']; const Xl = ['pretty', 'colorless', 'minimal']; const eu = ['info', 'query', 'warn', 'error']; const tf = { datasources: (e, { datasourceNames: t }) => {
  if (e) {
    if (typeof e != 'object' || Array.isArray(e))
      throw new L(`Invalid value ${JSON.stringify(e)} for "datasources" provided to PrismaClient constructor`); for (const [r, n] of Object.entries(e)) {
      if (!t.includes(r)) { const i = Qt(r, t) || ` Available datasources: ${t.join(', ')}`; throw new L(`Unknown datasource ${r} provided to PrismaClient constructor.${i}`) } if (typeof n != 'object' || Array.isArray(n)) {
        throw new L(`Invalid value ${JSON.stringify(e)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`)
      } if (n && typeof n == 'object') {
        for (const [i, o] of Object.entries(n)) {
          if (i !== 'url') {
            throw new L(`Invalid value ${JSON.stringify(e)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`)
          } if (typeof o != 'string') {
            throw new L(`Invalid value ${JSON.stringify(o)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`)
          }
        }
      }
    }
  }
}, adapter: (e, t) => {
  if (!e && Et(t.generator) === 'client')
    throw new L('Using engine type "client" requires a driver adapter to be provided to PrismaClient constructor.'); if (e === null)
    return; if (e === void 0)
    throw new L('"adapter" property must not be undefined, use null to conditionally disable driver adapters.'); if (!Bn(t).includes('driverAdapters'))
    throw new L('"adapter" property can only be provided to PrismaClient constructor when "driverAdapters" preview feature is enabled.'); if (Et(t.generator) === 'binary')
    throw new L('Cannot use a driver adapter with the "binary" Query Engine. Please use the "library" Query Engine.')
}, datasourceUrl: (e) => {
  if (typeof e < 'u' && typeof e != 'string') {
    throw new L(`Invalid value ${JSON.stringify(e)} for "datasourceUrl" provided to PrismaClient constructor.
Expected string or undefined.`)
  }
}, errorFormat: (e) => {
  if (e) {
    if (typeof e != 'string')
      throw new L(`Invalid value ${JSON.stringify(e)} for "errorFormat" provided to PrismaClient constructor.`); if (!Xl.includes(e)) { const t = Qt(e, Xl); throw new L(`Invalid errorFormat ${e} provided to PrismaClient constructor.${t}`) }
  }
}, log: (e) => {
  if (!e)
    return; if (!Array.isArray(e))
    throw new L(`Invalid value ${JSON.stringify(e)} for "log" provided to PrismaClient constructor.`); function t(r) { if (typeof r == 'string' && !eu.includes(r)) { const n = Qt(r, eu); throw new L(`Invalid log level "${r}" provided to PrismaClient constructor.${n}`) } } for (const r of e) {
    t(r); const n = { level: t, emit: (i) => { const o = ['stdout', 'event']; if (!o.includes(i)) { const s = Qt(i, o); throw new L(`Invalid value ${JSON.stringify(i)} for "emit" in logLevel provided to PrismaClient constructor.${s}`) } } }; if (r && typeof r == 'object') {
      for (const [i, o] of Object.entries(r)) {
        if (n[i])
          n[i](o); else throw new L(`Invalid property ${i} for "log" provided to PrismaClient constructor`)
      }
    }
  }
}, transactionOptions: (e) => {
  if (!e)
    return; const t = e.maxWait; if (t != null && t <= 0)
    throw new L(`Invalid value ${t} for maxWait in "transactionOptions" provided to PrismaClient constructor. maxWait needs to be greater than 0`); const r = e.timeout; if (r != null && r <= 0)
    throw new L(`Invalid value ${r} for timeout in "transactionOptions" provided to PrismaClient constructor. timeout needs to be greater than 0`)
}, omit: (e, t) => {
  if (typeof e != 'object')
    throw new L('"omit" option is expected to be an object.'); if (e === null)
    throw new L('"omit" option can not be `null`'); const r = []; for (const [n, i] of Object.entries(e)) { const o = nf(n, t.runtimeDataModel); if (!o) { r.push({ kind: 'UnknownModel', modelKey: n }); continue } for (const [s, a] of Object.entries(i)) { const l = o.fields.find(u => u.name === s); if (!l) { r.push({ kind: 'UnknownField', modelKey: n, fieldName: s }); continue } if (l.relationName) { r.push({ kind: 'RelationInOmit', modelKey: n, fieldName: s }); continue } typeof a != 'boolean' && r.push({ kind: 'InvalidFieldValue', modelKey: n, fieldName: s }) } } if (r.length > 0)
    throw new L(of(e, r))
}, __internal: (e) => {
  if (!e)
    return; const t = ['debug', 'engine', 'configOverride']; if (typeof e != 'object')
    throw new L(`Invalid value ${JSON.stringify(e)} for "__internal" to PrismaClient constructor`); for (const [r] of Object.entries(e)) {
    if (!t.includes(r)) { const n = Qt(r, t); throw new L(`Invalid property ${JSON.stringify(r)} for "__internal" provided to PrismaClient constructor.${n}`) }
  }
} }; function nu(e, t) {
  for (const [r, n] of Object.entries(e)) { if (!Zl.includes(r)) { const i = Qt(r, Zl); throw new L(`Unknown property ${r} provided to PrismaClient constructor.${i}`) }tf[r](n, t) } if (e.datasourceUrl && e.datasources)
    throw new L('Can not use "datasourceUrl" and "datasources" options at the same time. Pick one of them')
} function Qt(e, t) {
  if (t.length === 0 || typeof e != 'string')
    return ''; const r = rf(e, t); return r ? ` Did you mean "${r}"?` : ''
} function rf(e, t) {
  if (t.length === 0)
    return null; const r = t.map(i => ({ value: i, distance: (0, ru.default)(e, i) })); r.sort((i, o) => i.distance < o.distance ? -1 : 1); const n = r[0]; return n.distance < 3 ? n.value : null
} function nf(e, t) { return tu(t.models, e) ?? tu(t.types, e) } function tu(e, t) {
  const r = Object.keys(e).find(n => vt(n) === t); if (r)
    return e[r]
} function of(e, t) {
  const r = Ot(e); for (const o of t) switch (o.kind) { case 'UnknownModel':r.arguments.getField(o.modelKey)?.markAsError(), r.addErrorMessage(() => `Unknown model name: ${o.modelKey}.`); break; case 'UnknownField':r.arguments.getDeepField([o.modelKey, o.fieldName])?.markAsError(), r.addErrorMessage(() => `Model "${o.modelKey}" does not have a field named "${o.fieldName}".`); break; case 'RelationInOmit':r.arguments.getDeepField([o.modelKey, o.fieldName])?.markAsError(), r.addErrorMessage(() => 'Relations are already excluded by default and can not be specified in "omit".'); break; case 'InvalidFieldValue':r.arguments.getDeepFieldValue([o.modelKey, o.fieldName])?.markAsError(), r.addErrorMessage(() => 'Omit field option value must be a boolean.'); break } const { message: n, args: i } = Tn(r, 'colorless'); return `Error validating "omit" option:

${i}

${n}`
} function iu(e) { return e.length === 0 ? Promise.resolve([]) : new Promise((t, r) => { const n = Array.from({ length: e.length }); let i = null; let o = !1; let s = 0; const a = () => { o || (s++, s === e.length && (o = !0, i ? r(i) : t(n))) }; const l = (u) => { o || (o = !0, r(u)) }; for (let u = 0; u < e.length; u++)e[u].then((c) => { n[u] = c, a() }, (c) => { if (!Qn(c)) { l(c); return }c.batchRequestIdx === u ? l(c) : (i || (i = c), a()) }) }) } const rt = M('prisma:client'); typeof globalThis == 'object' && (globalThis.NODE_CLIENT = !0); const sf = { requestArgsToMiddlewareArgs: e => e, middlewareArgsToRequestArgs: e => e }; const af = Symbol.for('prisma.client.transaction.id'); const lf = { id: 0, nextId() { return ++this.id } }; function cu(e) {
  class t {
    constructor(n) {
      d(this, '_originalClient', this); d(this, '_runtimeDataModel'); d(this, '_requestHandler'); d(this, '_connectionPromise'); d(this, '_disconnectionPromise'); d(this, '_engineConfig'); d(this, '_accelerateEngineConfig'); d(this, '_clientVersion'); d(this, '_errorFormat'); d(this, '_tracingHelper'); d(this, '_middlewares', new Un()); d(this, '_previewFeatures'); d(this, '_activeProvider'); d(this, '_globalOmit'); d(this, '_extensions'); d(this, '_engine'); d(this, '_appliedParent'); d(this, '_createPrismaPromise', To()); d(this, '$metrics', new Dt(this)); d(this, '$extends', Ja); e = n?.__internal?.configOverride?.(e) ?? e, sl(e), n && nu(n, e); const i = new lu.EventEmitter().on('error', () => {}); this._extensions = _t.empty(), this._previewFeatures = Bn(e), this._clientVersion = e.clientVersion ?? zl, this._activeProvider = e.activeProvider, this._globalOmit = n?.omit, this._tracingHelper = Ul(); const o = { rootEnvPath: e.relativeEnvPaths.rootEnvPath && Mr.default.resolve(e.dirname, e.relativeEnvPaths.rootEnvPath), schemaEnvPath: e.relativeEnvPaths.schemaEnvPath && Mr.default.resolve(e.dirname, e.relativeEnvPaths.schemaEnvPath) }; let s; if (n?.adapter) {
        s = Xn(n.adapter); const l = e.activeProvider === 'postgresql' ? 'postgres' : e.activeProvider; if (s.provider !== l)
          throw new C(`The Driver Adapter \`${s.adapterName}\`, based on \`${s.provider}\`, is not compatible with the provider \`${l}\` specified in the Prisma schema.`, this._clientVersion); if (n.datasources || n.datasourceUrl !== void 0)
          throw new C('Custom datasource configuration is not compatible with Prisma Driver Adapters. Please define the database connection string directly in the Driver Adapter configuration.', this._clientVersion)
      } const a = !s && er(o, { conflictCheck: 'none' }) || e.injectableEdgeEnv?.(); try {
        const l = n ?? {}; const u = l.__internal ?? {}; const c = u.debug === !0; c && M.enable('prisma:client'); let p = Mr.default.resolve(e.dirname, e.relativePath); uu.default.existsSync(p) || (p = e.dirname), rt('dirname', e.dirname), rt('relativePath', e.relativePath), rt('cwd', p); const m = u.engine || {}; if (l.errorFormat ? this._errorFormat = l.errorFormat : process.env.NODE_ENV === 'production' ? this._errorFormat = 'minimal' : process.env.NO_COLOR ? this._errorFormat = 'colorless' : this._errorFormat = 'colorless', this._runtimeDataModel = e.runtimeDataModel, this._engineConfig = { cwd: p, dirname: e.dirname, enableDebugLogs: c, allowTriggerPanic: m.allowTriggerPanic, datamodelPath: Mr.default.join(e.dirname, e.filename ?? 'schema.prisma'), prismaPath: m.binaryPath ?? void 0, engineEndpoint: m.endpoint, generator: e.generator, showColors: this._errorFormat === 'pretty', logLevel: l.log && Gl(l.log), logQueries: l.log && !!(typeof l.log == 'string' ? l.log === 'query' : l.log.find(g => typeof g == 'string' ? g === 'query' : g.level === 'query')), env: a?.parsed ?? {}, flags: [], engineWasm: e.engineWasm, compilerWasm: e.compilerWasm, clientVersion: e.clientVersion, engineVersion: e.engineVersion, previewFeatures: this._previewFeatures, activeProvider: e.activeProvider, inlineSchema: e.inlineSchema, overrideDatasources: al(l, e.datasourceNames), inlineDatasources: e.inlineDatasources, inlineSchemaHash: e.inlineSchemaHash, tracingHelper: this._tracingHelper, transactionOptions: { maxWait: l.transactionOptions?.maxWait ?? 2e3, timeout: l.transactionOptions?.timeout ?? 5e3, isolationLevel: l.transactionOptions?.isolationLevel }, logEmitter: i, isBundled: e.isBundled, adapter: s }, this._accelerateEngineConfig = { ...this._engineConfig, accelerateUtils: { resolveDatasourceUrl: $t, getBatchRequestPayload: Lt, prismaGraphQLToJSError: Ft, PrismaClientUnknownRequestError: U, PrismaClientInitializationError: C, PrismaClientKnownRequestError: te, debug: M('prisma:client:accelerateEngine'), engineVersion: su.version, clientVersion: e.clientVersion } }, rt('clientVersion', e.clientVersion), this._engine = _l(e, this._engineConfig), this._requestHandler = new Wn(this, i), l.log) {
          for (const g of l.log) { const h = typeof g == 'string' ? g : g.emit === 'stdout' ? g.level : null; h && this.$on(h, (y) => { ir.log(`${ir.tags[h] ?? ''}`, y.message || y.query) }) }
        }
      }
      catch (l) { throw l.clientVersion = this._clientVersion, l } return this._appliedParent = xr(this)
    }

    get [Symbol.toStringTag]() { return 'PrismaClient' }$use(n) { this._middlewares.use(n) }$on(n, i) { return n === 'beforeExit' ? this._engine.onBeforeExit(i) : n && this._engineConfig.logEmitter.on(n, i), this }$connect() {
      try { return this._engine.start() }
      catch (n) { throw n.clientVersion = this._clientVersion, n }
    }

    async $disconnect() {
      try { await this._engine.stop() }
      catch (n) { throw n.clientVersion = this._clientVersion, n }
      finally { Vo() }
    }

    $executeRawInternal(n, i, o, s) { const a = this._activeProvider; return this._request({ action: 'executeRaw', args: o, transaction: n, clientMethod: i, argsMapper: vo({ clientMethod: i, activeProvider: a }), callsite: Xe(this._errorFormat), dataPath: [], middlewareArgsMapper: s }) }$executeRaw(n, ...i) { return this._createPrismaPromise((o) => { if (n.raw !== void 0 || n.sql !== void 0) { const [s, a] = ou(n, i); return Po(this._activeProvider, s.text, s.values, Array.isArray(n) ? 'prisma.$executeRaw`<SQL>`' : 'prisma.$executeRaw(sql`<SQL>`)'), this.$executeRawInternal(o, '$executeRaw', s, a) } throw new re('`$executeRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${\'user@email.com\'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#executeraw\n', { clientVersion: this._clientVersion }) }) }$executeRawUnsafe(n, ...i) { return this._createPrismaPromise(o => (Po(this._activeProvider, n, i, 'prisma.$executeRawUnsafe(<SQL>, [...values])'), this.$executeRawInternal(o, '$executeRawUnsafe', [n, ...i]))) }$runCommandRaw(n) {
      if (e.activeProvider !== 'mongodb')
        throw new re(`The ${e.activeProvider} provider does not support $runCommandRaw. Use the mongodb provider.`, { clientVersion: this._clientVersion }); return this._createPrismaPromise(i => this._request({ args: n, clientMethod: '$runCommandRaw', dataPath: [], action: 'runCommandRaw', argsMapper: Dl, callsite: Xe(this._errorFormat), transaction: i }))
    }

    async $queryRawInternal(n, i, o, s) { const a = this._activeProvider; return this._request({ action: 'queryRaw', args: o, transaction: n, clientMethod: i, argsMapper: vo({ clientMethod: i, activeProvider: a }), callsite: Xe(this._errorFormat), dataPath: [], middlewareArgsMapper: s }) }$queryRaw(n, ...i) {
      return this._createPrismaPromise((o) => {
        if (n.raw !== void 0 || n.sql !== void 0)
          return this.$queryRawInternal(o, '$queryRaw', ...ou(n, i)); throw new re('`$queryRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${\'user@email.com\'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#queryraw\n', { clientVersion: this._clientVersion })
      })
    }

    $queryRawTyped(n) {
      return this._createPrismaPromise((i) => {
        if (!this._hasPreviewFlag('typedSql'))
          throw new re('`typedSql` preview feature must be enabled in order to access $queryRawTyped API', { clientVersion: this._clientVersion }); return this.$queryRawInternal(i, '$queryRawTyped', n)
      })
    }

    $queryRawUnsafe(n, ...i) { return this._createPrismaPromise(o => this.$queryRawInternal(o, '$queryRawUnsafe', [n, ...i])) }_transactionWithArray({ promises: n, options: i }) {
      const o = lf.nextId(); const s = Ql(n.length); const a = n.map((l, u) => {
        if (l?.[Symbol.toStringTag] !== 'PrismaPromise')
          throw new Error('All elements of the array need to be Prisma Client promises. Hint: Please make sure you are not awaiting the Prisma client calls you intended to pass in the $transaction function.'); const c = i?.isolationLevel ?? this._engineConfig.transactionOptions.isolationLevel; const p = { kind: 'batch', id: o, index: u, isolationLevel: c, lock: s }; return l.requestTransaction?.(p) ?? l
      }); return iu(a)
    }

    async _transactionWithCallback({ callback: n, options: i }) {
      const o = { traceparent: this._tracingHelper.getTraceParent() }; const s = { maxWait: i?.maxWait ?? this._engineConfig.transactionOptions.maxWait, timeout: i?.timeout ?? this._engineConfig.transactionOptions.timeout, isolationLevel: i?.isolationLevel ?? this._engineConfig.transactionOptions.isolationLevel }; const a = await this._engine.transaction('start', o, s); let l; try { const u = { kind: 'itx', ...a }; l = await n(this._createItxClient(u)), await this._engine.transaction('commit', o, a) }
      catch (u) { throw await this._engine.transaction('rollback', o, a).catch(() => {}), u } return l
    }

    _createItxClient(n) { return be(xr(be(Ga(this), [oe('_appliedParent', () => this._appliedParent._createItxClient(n)), oe('_createPrismaPromise', () => To(n)), oe(af, () => n.id)])), [Nt(Ya)]) }$transaction(n, i) { let o; typeof n == 'function' ? this._engineConfig.adapter?.adapterName === '@prisma/adapter-d1' ? o = () => { throw new Error('Cloudflare D1 does not support interactive transactions. We recommend you to refactor your queries with that limitation in mind, and use batch transactions with `prisma.$transactions([])` where applicable.') } : o = () => this._transactionWithCallback({ callback: n, options: i }) : o = () => this._transactionWithArray({ promises: n, options: i }); const s = { name: 'transaction', attributes: { method: '$transaction' } }; return this._tracingHelper.runInChildSpan(s, o) }_request(n) {
      n.otelParentCtx = this._tracingHelper.getActiveContext(); const i = n.middlewareArgsMapper ?? sf; const o = { args: i.requestArgsToMiddlewareArgs(n.args), dataPath: n.dataPath, runInTransaction: !!n.transaction, action: n.action, model: n.model }; const s = { middleware: { name: 'middleware', middleware: !0, attributes: { method: '$use' }, active: !1 }, operation: { name: 'operation', attributes: { method: o.action, model: o.model, name: o.model ? `${o.model}.${o.action}` : o.action } } }; let a = -1; const l = async (u) => {
        const c = this._middlewares.get(++a); if (c)
          return this._tracingHelper.runInChildSpan(s.middleware, O => c(u, T => (O?.end(), l(T)))); const { runInTransaction: p, args: m, ...g } = u; const h = { ...n, ...g }; m && (h.args = i.middlewareArgsToRequestArgs(m)), n.transaction !== void 0 && p === !1 && delete h.transaction; const y = await el(this, h); return h.model ? Ka({ result: y, modelName: h.model, args: h.args, extensions: this._extensions, runtimeDataModel: this._runtimeDataModel, globalOmit: this._globalOmit }) : y
      }; return this._tracingHelper.runInChildSpan(s.operation, () => new au.AsyncResource('prisma-client-request').runInAsyncScope(() => l(o)))
    }

    async _executeRequest({ args: n, clientMethod: i, dataPath: o, callsite: s, action: a, model: l, argsMapper: u, transaction: c, unpacker: p, otelParentCtx: m, customDataProxyFetch: g }) {
      try {
        n = u ? u(n) : n; const h = { name: 'serialize' }; const y = this._tracingHelper.runInChildSpan(h, () => In({ modelName: l, runtimeDataModel: this._runtimeDataModel, action: a, args: n, clientMethod: i, callsite: s, extensions: this._extensions, errorFormat: this._errorFormat, clientVersion: this._clientVersion, previewFeatures: this._previewFeatures, globalOmit: this._globalOmit })); return M.enabled('prisma:client') && (rt('Prisma Client call:'), rt(`prisma.${i}(${Na(n)})`), rt('Generated request:'), rt(`${JSON.stringify(y, null, 2)}
`)), c?.kind === 'batch' && await c.lock, this._requestHandler.request({ protocolQuery: y, modelName: l, action: a, clientMethod: i, dataPath: o, callsite: s, args: n, extensions: this._extensions, transaction: c, unpacker: p, otelParentCtx: m, otelChildCtx: this._tracingHelper.getActiveContext(), globalOmit: this._globalOmit, customDataProxyFetch: g })
      }
      catch (h) { throw h.clientVersion = this._clientVersion, h }
    }

    _hasPreviewFlag(n) { return !!this._engineConfig.previewFeatures?.includes(n) }$applyPendingMigrations() { return this._engine.applyPendingMigrations() }
  } return t
} function ou(e, t) { return uf(e) ? [new le(e, t), Vl] : [e, jl] } function uf(e) { return Array.isArray(e) && Array.isArray(e.raw) } const cf = new Set(['toJSON', '$$typeof', 'asymmetricMatch', Symbol.iterator, Symbol.toStringTag, Symbol.isConcatSpreadable, Symbol.toPrimitive]); function pu(e) {
  return new Proxy(e, { get(t, r) {
    if (r in t)
      return t[r]; if (!cf.has(r))
      throw new TypeError(`Invalid enum value: ${String(r)}`)
  } })
} function du(e) { er(e, { conflictCheck: 'warn' }) }0 && (module.exports = { Debug, Decimal, Extensions, MetricsClient, PrismaClientInitializationError, PrismaClientKnownRequestError, PrismaClientRustPanicError, PrismaClientUnknownRequestError, PrismaClientValidationError, Public, Sql, createParam, defineDmmfProperty, deserializeJsonResponse, deserializeRawResult, dmmfToRuntimeDataModel, empty, getPrismaClient, getRuntime, join, makeStrictEnum, makeTypedQueryFactory, objectEnumValues, raw, serializeJsonQuery, skip, sqltag, warnEnvConflicts, warnOnce })
/*! Bundled license information:

decimal.js/decimal.mjs:
  (*!
   *  decimal.js v10.5.0
   *  An arbitrary-precision Decimal type for JavaScript.
   *  https://github.com/MikeMcl/decimal.js
   *  Copyright (c) 2025 Michael Mclaughlin <M8ch88l@gmail.com>
   *  MIT Licence
   *)
*/
// # sourceMappingURL=library.js.map
