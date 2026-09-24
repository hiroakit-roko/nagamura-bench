import fs from 'node:fs';
import path from 'node:path';

const root=process.cwd();
const html=[];
const walk=dir=>{for(const ent of fs.readdirSync(dir,{withFileTypes:true})){if(['.git','node_modules','assets','tools'].includes(ent.name))continue;const p=path.join(dir,ent.name);if(ent.isDirectory())walk(p);else if(ent.name.endsWith('.html'))html.push(p)}};
walk(root);
let errors=[];
for(const file of html){const body=fs.readFileSync(file,'utf8');for(const [,attr,url] of body.matchAll(/\b(src|href)="([^"]+)"/g)){if(/^(https?:|tel:|mailto:|data:|#)/.test(url))continue;const [pathname,hash='']=url.split('#');const noQuery=pathname.split('?')[0];let target=path.resolve(path.dirname(file),noQuery||'.');if(fs.existsSync(target)&&fs.statSync(target).isDirectory())target=path.join(target,'index.html');if(!fs.existsSync(target)){errors.push(`${path.relative(root,file)} ${attr} ${url} → missing`);continue}if(hash&&target.endsWith('.html')){const id=decodeURIComponent(hash);const targetBody=fs.readFileSync(target,'utf8');if(!targetBody.includes(`id="${id}"`)&&!targetBody.includes(`name="${id}"`))errors.push(`${path.relative(root,file)} ${url} → missing anchor`)} }}
console.log(`${html.length} HTML files checked; ${errors.length} local link issues`);
errors.forEach(x=>console.error(x));
if(errors.length)process.exitCode=1;
