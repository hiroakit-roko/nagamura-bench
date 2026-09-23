import { chromium } from '/private/tmp/claude-501/-Users-hiroakit-Projects-nagamura-bench-fable-5-1/4f427be2-ba9d-4d9f-b2d9-078f697d1002/scratchpad/tools/node_modules/playwright/index.mjs';
const BASE = 'http://127.0.0.1:8765/';
const pages = (process.argv[2] ? process.argv[2].split(',') : ['index','advantage','management','company','technology','equipment','products','smox','kovako','monobo','blog','blog-cio','recruit','faq','contact','news','sitemap']);
const viewports = { desktop: { width: 1440, height: 900 }, mobile: { width: 390, height: 844 } };
const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const report = [];
for (const [vp, size] of Object.entries(viewports)) {
  for (const p of pages) {
    const ctx = await browser.newContext({ viewport: size, deviceScaleFactor: 1, isMobile: vp === 'mobile', hasTouch: vp === 'mobile' });
    const page = await ctx.newPage();
    const errors = [], failed = [];
    page.on('console', m => { if (m.type() === 'error' || m.type() === 'warning') errors.push(`[${m.type()}] ${m.text()}`.slice(0, 300)); });
    page.on('pageerror', e => errors.push('[pageerror] ' + e.message.slice(0, 300)));
    page.on('response', r => { if (r.status() >= 400) failed.push(`${r.status()} ${r.url()}`); });
    page.on('requestfailed', r => failed.push(`FAILED ${r.url()} ${r.failure()?.errorText}`));
    try {
      await page.goto(BASE + p + '.html', { waitUntil: 'networkidle', timeout: 45000 });
      await page.waitForTimeout(800);
      // scroll through to trigger reveals / pinned sections
      const h = await page.evaluate(() => document.documentElement.scrollHeight);
      for (let y = 0; y < h; y += size.height * 0.7) { await page.evaluate(y => window.scrollTo(0, y), y); await page.waitForTimeout(90); }
      await page.evaluate(() => window.scrollTo(0, 0)); await page.waitForTimeout(400);
      if (p !== 'index') await page.screenshot({ path: `shots/${vp}-${p}.jpg`, fullPage: true, type: 'jpeg', quality: 60 });
      else { const H = await page.evaluate(() => document.documentElement.scrollHeight); let k = 0; for (let y = 0; y < H; y += size.height) { await page.evaluate(y => window.scrollTo(0, y), y); await page.waitForTimeout(350); await page.screenshot({ path: `shots/${vp}-index-${String(k++).padStart(2,'0')}.jpg`, type: 'jpeg', quality: 60 }); } await page.evaluate(() => window.scrollTo(0, 0)); }
      if (p === 'index' && vp === 'desktop') {
        // capture process section at several scroll progresses
        const top = await page.evaluate(() => document.getElementById('process').getBoundingClientRect().top + window.scrollY);
        for (const [i, f] of [0.02, 0.28, 0.48, 0.7, 0.85, 0.97].entries()) { await page.evaluate(y => window.scrollTo(0, y), top + f * size.height * 3.2); await page.waitForTimeout(700); await page.screenshot({ path: `shots/process-${i}.jpg`, type: 'jpeg', quality: 70 }); }
        await page.evaluate(() => window.scrollTo(0, 0)); await page.waitForTimeout(300);
        await page.screenshot({ path: `shots/hero-desktop.jpg`, type: 'jpeg', quality: 70 });
      }
      const finalH = await page.evaluate(() => document.documentElement.scrollHeight);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
      report.push({ vp, p, height: finalH, overflowX: overflow, errors, failed });
    } catch (e) { report.push({ vp, p, errors: ['NAV ERROR ' + e.message], failed }); }
    await ctx.close();
  }
}
await browser.close();
for (const r of report) {
  const flag = (r.errors.length || r.failed.length || r.overflowX) ? '!!' : 'ok';
  console.log(`${flag} ${r.vp.padEnd(7)} ${r.p.padEnd(11)} h=${r.height} overflowX=${r.overflowX}`);
  r.errors.forEach(e => console.log('     ' + e)); r.failed.forEach(e => console.log('     ' + e));
}
