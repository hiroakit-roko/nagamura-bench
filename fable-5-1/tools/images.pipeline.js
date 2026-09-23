const sharp=require('sharp') /* run with sharp installed; source paths point at the crawl folder */;const fs=require('fs');const path=require('path');
const OUT='/Users/hiroakit/Projects/nagamura-bench/fable-5-1/assets/img';
const C='crawl/img/main', R='crawl/img/recruit/images/top', B='crawl/img/brands';
// [src, outName(without ext), {widths?, grade?, height?, q?, copy?}]
const M=[];
const add=(src,out,o={})=>M.push([src,out,o]);
// hero stills
for(const [s,n] of [['stills/welding2.jpg','hero/welding'],['stills/laser.jpg','hero/laser'],['stills/assembly2.jpg','hero/assembly'],['stills/factory.jpg','hero/factory']]) add(s,n,{widths:[1920,1280,768],grade:true,q:78});
// home / common
const home={'img_home01':'home-total','img_home02':'home-craft','img_home03':'home-quality','img_home04':'home-sheet','img_home05':'home-weld','img_home06':'home-assembly','img_footer01':'building'};
for(const k in home) add(`${C}/images/${k}.jpg`,`photo/${home[k]}`,{grade:true});
// advantage
add(`${C}/advantage/images/img_advantage01.jpg`,'photo/adv-factory',{grade:true});
add(`${C}/advantage/images/img_advantage02.jpg`,'photo/adv-meeting-1',{grade:true});
add(`${C}/advantage/images/img_advantage03.png`,'photo/adv-meeting-2',{grade:true});
for(let i=1;i<=5;i++) add(`${C}/advantage/images/img_flow0${i}.jpg`,`photo/flow-${i}`,{grade:true});
add(`${C}/advantage/images/img_houshin2020.jpg`,'doc/iso-policy',{widths:[724,400]});
add(`${C}/advantage/images/img_iso9001.jpg`,'doc/iso-9001',{widths:[724,400]});
add(`${C}/advantage/images/img_iso14001.jpg`,'doc/iso-14001',{widths:[724,400]});
// technology
for(let i=1;i<=12;i++){const k=String(i).padStart(2,'0');add(`${C}/technology/images/img_technology${k}.jpg`,`photo/tech-${k}`,{grade:true});}
// equipment
for(const [p,n,c] of [['press','press',8],['bending','bend',3],['machining','mach',2],['cutting','cut',2],['welding','weld',4]]) for(let i=1;i<=c;i++) add(`${C}/equipment/images/img_${p}0${i}.jpg`,`photo/eq-${n}-${i}`,{grade:true});
// management / company
add(`${C}/management/images/img01.png`,'photo/factory-wide',{widths:[1000,640],grade:true});
add(`${C}/management/images/img02.png`,'photo/team',{widths:[1000,640],grade:true});
add(`${C}/company/images/img_susumu_iiyama.jpg`,'photo/president',{grade:true});
// products (full-size)
const P=`${C}/products/images`;
for(let i=1;i<=4;i++) add(`${P}/img_products01_0${i}.jpg`,`products/panel-${i}`);
for(let i=1;i<=5;i++) add(`${P}/img_products02_0${i}.jpg`,`products/rack-${i}`);
add(`${P}/4A-L6844.png`,'products/rack-r04-1',{height:1000});
add(`${P}/4A-L7915s.png`,'products/rack-r04-2');add(`${P}/4C-T3415s.png`,'products/rack-r04-3');add(`${P}/4C-T1510s.png`,'products/rack-r04-4');add(`${P}/4C-T3330s.png`,'products/rack-r04-5');
for(let i=1;i<=2;i++) add(`${P}/img_products03_0${i}.jpg`,`products/booth-${i}`);
for(let i=1;i<=6;i++) add(`${P}/img_products04_0${i}.jpg`,`products/public-${i}`);
for(let i=1;i<=2;i++) add(`${P}/img_products08_0${i}.jpg`,`products/other-${i}`);
// recruit
add(`${R}/main-img.png`,'recruit/hero',{widths:[1500,1000,640],grade:true});
add(`${R}/about-img01.png`,'recruit/about-1',{widths:[1060,640],grade:true});
add(`${R}/about-img02.png`,'recruit/about-2',{widths:[1066,640],grade:true});
add(`${R}/meshiyama.png`,'recruit/president',{widths:[878,520],grade:true});
for(const j of ['design','metal','welding','assembly']) add(`${R}/${j}.png`,`recruit/job-${j}`,{widths:[1200,640],grade:true});
// brands: smox
const S=`${B}/smox`;
add(`${S}/fea_1.jpg`,'brands/smox/fea-1',{grade:true});add(`${S}/fea_2.jpg`,'brands/smox/fea-2',{grade:true});
add(`${S}/clear_3.png`,'brands/smox/clear');add(`${S}/mv_img.png`,'brands/smox/mv');
for(let i=1;i<=3;i++) add(`${S}/lineup_${i}.png`,`brands/smox/lineup-${i}`);
add(`${S}/case_1.jpg`,'brands/smox/case-1');add(`${S}/option.png`,'brands/smox/option');add(`${S}/dev_thum.jpg`,'brands/smox/dev-thumb');
add(`${S}/cond-1.png`,'brands/smox/cond-1');add(`${S}/cond-2.png`,'brands/smox/cond-2');
for(const s of ['logo.svg','booth_ico_1.svg','booth_ico_2.svg','booth_ico_3.svg','booth_ico_4.svg','booth_ico_5.svg']) add(`${S}/${s}`,`brands/smox/${s}`,{copy:true});
// kovako
const K=`${B}/kovako`;
add(`${K}/img_booth02.png`,'brands/kovako/booth',{widths:[1000,640]});
for(let i=1;i<=6;i++) add(`${K}/img_features0${i}.png`,`brands/kovako/feat-${i}`);
add(`${K}/img_conditions01.png`,'brands/kovako/conditions');
for(let i=1;i<=4;i++) add(`${K}/img_flow0${i}.png`,`brands/kovako/flow-${i}`);
add(`${K}/img_recommendation01.png`,'brands/kovako/recommend-1');add(`${K}/img_recommendation02.png`,'brands/kovako/recommend-2');
add(`${K}/img_logo01.png`,'brands/kovako/logo');add(`${K}/img_logo02.svg`,'brands/kovako/logo-white.svg',{copy:true});add(`${K}/img_booth03.svg`,'brands/kovako/booth-diagram.svg',{copy:true});
// monobo
const Mo=`${B}/monobo`;
add(`${Mo}/fv_pc_202609.webp`,'brands/monobo/fv',{widths:[1440,900]});
add(`${Mo}/case_main_202609.webp`,'brands/monobo/case-main');
add(`${Mo}/lineup_01_202609.webp`,'brands/monobo/lineup-1');add(`${Mo}/lineup_02.webp`,'brands/monobo/lineup-2');add(`${Mo}/lineup_04_202609.webp`,'brands/monobo/lineup-4');
for(let i=1;i<=4;i++) add(`${Mo}/features_0${i}.webp`,`brands/monobo/feat-${i}`,{widths:[900]});
add(`${Mo}/cta_main.webp`,'brands/monobo/cta',{widths:[700]});
add(`${Mo}/Image.jpg`,'brands/monobo/case-2p',{widths:[700]});
add(`${Mo}/85c2d241-bd57-4943-98bc-6f792e163862-1.jpg`,'brands/monobo/expo-2026',{widths:[700]});
add(`${Mo}/purchase_main.webp`,'brands/monobo/purchase');
add(`${Mo}/logo.png`,'brands/monobo/logo');add(`${Mo}/logo_monobo.png`,'brands/monobo/logo-mark');
for(let i=1;i<=5;i++){add(`${Mo}/equip_standard_0${i}.webp`,`brands/monobo/equip-std-${i}`);add(`${Mo}/equip_optional_0${i}.webp`,`brands/monobo/equip-opt-${i}`);}
for(let i=1;i<=4;i++){add(`${Mo}/flow_0${i}.webp`,`brands/monobo/flow-${i}`);add(`${Mo}/issues_0${i}.webp`,`brands/monobo/issue-${i}`);}
(async()=>{
 const manifest={};
 for(const [src,out,o] of M){
  const dst=path.join(OUT,out);fs.mkdirSync(path.dirname(dst),{recursive:true});
  if(!fs.existsSync(src)){console.log('MISSING',src);continue;}
  if(o.copy){fs.copyFileSync(src,dst);manifest[out]={copied:true};continue;}
  const meta=await sharp(src).metadata();
  const base=()=>{let s=sharp(src);if(o.grade)s=s.modulate({saturation:0.92}).linear(1.06,-7);return s;};
  const q=o.q||80;
  if(o.widths){
   const ws=o.widths.filter(w=>w<=meta.width);
   const sizes=[];
   for(const w of ws){const info=await base().resize({width:w}).webp({quality:q}).toFile(`${dst}-${w}.webp`);sizes.push([w,info.height]);}
   manifest[out]={sizes,w:ws[0],h:sizes[0][1]};
  } else if(o.height){
   const info=await base().resize({height:o.height}).webp({quality:q}).toFile(`${dst}.webp`);manifest[out]={w:info.width,h:info.height};
  } else {
   const info=await base().webp({quality:q}).toFile(`${dst}.webp`);manifest[out]={w:info.width,h:info.height};
  }
 }
 fs.writeFileSync('img_manifest.json',JSON.stringify(manifest,null,1));
 console.log('done',Object.keys(manifest).length,'entries');
 // OG image
 const og=await sharp('stills/welding2.jpg').resize(1200,630,{fit:'cover'}).modulate({saturation:0.9}).linear(1.05,-10).composite([{input:Buffer.from('<svg width="1200" height="630"><defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#05070a" stop-opacity="0.15"/><stop offset="1" stop-color="#05070a" stop-opacity="0.85"/></linearGradient></defs><rect width="1200" height="630" fill="url(#g)"/></svg>'),blend:'over'}]).jpeg({quality:80,mozjpeg:true}).toFile(`${OUT}/og.jpg`);
 console.log('og',og.width,og.height);
})();
