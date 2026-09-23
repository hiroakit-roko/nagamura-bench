// Static site generator: renders src/pages/*.mjs into dist/, bundles JS/CSS with esbuild.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import * as esbuild from 'esbuild';
import { layout } from './src/layout.mjs';

const root = path.dirname(fileURLToPath(import.meta.url));
const dist = path.join(root, 'dist');
fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });

// 1. assets
const copyDir = (from, to) => {
  fs.mkdirSync(to, { recursive: true });
  for (const e of fs.readdirSync(from, { withFileTypes: true })) {
    const s = path.join(from, e.name), d = path.join(to, e.name);
    if (e.isDirectory()) copyDir(s, d); else fs.copyFileSync(s, d);
  }
};
for (const dir of ['img', 'video', 'data', 'icons']) {
  const p = path.join(root, 'assets', dir);
  if (fs.existsSync(p)) copyDir(p, path.join(dist, 'assets', dir));
}
for (const f of ['favicon.ico', 'favicon.svg', 'favicon-32.png', 'apple-touch-icon.png']) {
  const p = path.join(root, 'assets', f);
  if (fs.existsSync(p)) fs.copyFileSync(p, path.join(dist, 'assets', f));
}

// 2. JS + CSS
await esbuild.build({
  entryPoints: [path.join(root, 'src/js/main.js')],
  bundle: true, splitting: true, format: 'esm', minify: true, target: ['es2020'],
  outdir: path.join(dist, 'assets/js'), chunkNames: 'chunks/[name]-[hash]', legalComments: 'linked',
});
await esbuild.build({
  entryPoints: [path.join(root, 'src/css/style.css')],
  bundle: true, minify: true, outfile: path.join(dist, 'assets/css/style.css'),
  loader: { '.svg': 'dataurl' }, target: ['chrome100', 'safari15', 'firefox100'],
});

// 3. pages
const pagesDir = path.join(root, 'src/pages');
let count = 0;
for (const f of fs.readdirSync(pagesDir).filter((f) => f.endsWith('.mjs')).sort()) {
  const mod = await import(pathToFileURL(path.join(pagesDir, f)).href);
  const defs = [].concat(mod.default);
  for (const def of defs) {
    const depth = def.path === '' ? 0 : def.path.split('/').filter(Boolean).length;
    const r = depth === 0 ? './' : '../'.repeat(depth);
    const page = def.render(r);
    const html = layout({ r, path: def.path, ...page });
    const out = path.join(dist, def.path, 'index.html');
    fs.mkdirSync(path.dirname(out), { recursive: true });
    fs.writeFileSync(out, html);
    count++;
  }
}
fs.writeFileSync(path.join(dist, '.nojekyll'), '');
console.log(`built ${count} pages → dist/`);
