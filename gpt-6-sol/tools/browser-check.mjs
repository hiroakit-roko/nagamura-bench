import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
const {chromium}=require(process.env.PLAYWRIGHT_PACKAGE);
const routes=['','advantage/','management/','company/','technology/','equipment/','products/','faq/','info/news/','info/news/5/','blog/','recruit/','recruit/newgrad/','recruit/career/','contact/','sitemap/','smox/','kovako/','monobo/'];
const browser=await chromium.launch({headless:true});
let issues=[];
for(const width of [1440,390]){
  const context=await browser.newContext({viewport:{width,height:900},reducedMotion:'reduce'});
  for(const route of routes){
    const page=await context.newPage();
    const errors=[];
    page.on('pageerror',err=>errors.push(err.message));
    page.on('response',res=>{if(res.url().startsWith('http://localhost:8000/')&&res.status()>=400)errors.push(`${res.status()} ${res.url()}`)});
    try{
      const response=await page.goto(`http://localhost:8000/${route}`,{waitUntil:'domcontentloaded',timeout:12000});
      await page.evaluate(()=>document.fonts.ready);
      const state=await page.evaluate(()=>({wide:document.documentElement.scrollWidth>innerWidth+2,title:document.title,images:[...document.images].filter(img=>!img.closest('dialog')&&img.loading!=='lazy'&&(!img.complete||img.naturalWidth===0)).map(img=>img.outerHTML.slice(0,180)),overflows:[...document.querySelectorAll('body *')].filter(el=>el.getBoundingClientRect().right>innerWidth+2).slice(0,5).map(el=>`${el.tagName}.${el.className} ${Math.round(el.getBoundingClientRect().right)}`)}));
      if(response.status()!==200)errors.push(`HTTP ${response.status()}`);
      if(state.wide)errors.push(`horizontal overflow: ${state.overflows.join('; ')}`);
      if(state.images.length)errors.push(`broken eager images: ${state.images.join(', ')}`);
      if(!state.title.includes('長村製作所'))errors.push('missing page title');
    }catch(e){errors.push(e.message)}
    if(errors.length)issues.push({width,route,errors});
    await page.close();
  }
  await context.close();
}
const mobile=await browser.newPage({viewport:{width:390,height:844}});
await mobile.goto('http://localhost:8000/',{waitUntil:'domcontentloaded'});
await mobile.locator('.menu-button').click();
if(await mobile.locator('.menu-button').getAttribute('aria-expanded')!=='true')issues.push({width:390,route:'menu',errors:['menu did not open']});
await mobile.keyboard.press('Escape');
if(await mobile.locator('.menu-button').getAttribute('aria-expanded')!=='false')issues.push({width:390,route:'menu',errors:['menu did not close']});
await mobile.close();
await browser.close();
console.log(`Checked ${routes.length} routes at desktop and mobile widths; ${issues.length} issues`);
for(const issue of issues)console.error(JSON.stringify(issue));
if(issues.length)process.exitCode=1;
