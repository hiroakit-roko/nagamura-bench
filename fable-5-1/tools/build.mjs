// Zero-dependency static site builder: src/pages/*.mjs -> ./*.html
import { readdir, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { layout } from '../src/layout.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const pagesDir = path.join(root, 'src', 'pages');
const files = (await readdir(pagesDir)).filter(f => f.endsWith('.mjs')).sort();
let n = 0;
for (const f of files) {
  const mod = await import(pathToFileURL(path.join(pagesDir, f)).href + `?t=${Date.now()}`);
  const page = mod.default;
  const html = layout(page);
  const out = path.join(root, page.slug + '.html');
  await writeFile(out, html, 'utf8');
  n++;
  console.log('built', page.slug + '.html', (html.length / 1024).toFixed(1) + 'KB');
}
console.log(`${n} pages built`);
