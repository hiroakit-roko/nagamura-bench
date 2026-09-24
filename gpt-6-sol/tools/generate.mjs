import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const tmp = '/private/tmp';
const baseTitle = '株式会社長村製作所';
const routes = [
  ['advantage', '長村製作所の強み', 'ADVANTAGE', 'advantage-img_advantage01.jpg'],
  ['management', '経営方針', 'MANAGEMENT', 'technology-img_technology08.jpg'],
  ['company', '会社概要', 'COMPANY', 'global-img_footer01.jpg'],
  ['technology', '技術情報', 'TECHNOLOGY', 'technology-img_technology07.jpg'],
  ['equipment', '設備概要', 'EQUIPMENT', 'equipment-img_press01.jpg'],
  ['products', '製品紹介', 'PRODUCTS', 'products-img_products01_01.jpg'],
  ['faq', 'よくある質問', 'FAQ', 'technology-img_technology03.jpg'],
  ['info/news', '新着情報', 'NEWS', 'global-img_home10.jpg'],
];
const nav = [
  ['advantage/', '強み'], ['technology/', '技術'], ['equipment/', '設備'], ['products/', '製品'],
  ['company/', '会社'], ['recruit/', '採用'], ['contact/', 'お問い合わせ'],
];
const esc = s => String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const depthPrefix = route => route ? '../'.repeat(route.split('/').length) : './';
const pageLink = (prefix, route) => prefix + route;
const image = (prefix, file, alt='', extra='') => `<img src="${prefix}assets/${file}" alt="${esc(alt)}" loading="lazy" ${extra}>`;

function layout(route, title, english, heroImage, body, options={}) {
  const prefix = depthPrefix(route);
  const active = route.split('/')[0];
  const top = route === '';
  const menu = nav.map(([url, label]) => `<a href="${pageLink(prefix,url)}"${active===url.split('/')[0]?' aria-current="page"':''}>${label}</a>`).join('');
  const hero = top ? '' : `<section class="page-hero"><div class="page-hero__image" style="background-image:url('${prefix}assets/${heroImage}')"></div><div class="page-hero__inner"><p class="eyebrow">NAGAMURA / ${english}</p><h1>${esc(title)}</h1><p class="page-hero__eng">${english}</p></div><span class="hero-rule" aria-hidden="true"></span></section>`;
  const footer = `<footer class="site-footer"><div class="footer-top"><div><p class="eyebrow">PRECISION SHEET METAL / TOCHIGI</p><h2>次の形を、<br>一緒につくる。</h2></div><a class="contact-round" href="${prefix}contact/"><span>CONTACT</span><span aria-hidden="true">↗</span></a></div><div class="footer-grid"><div><a class="brand brand--footer" href="${prefix}"><span class="brand-mark">N<span>.</span></span><span class="brand-copy">株式会社<br>長村製作所</span></a><p>〒329-4411<br>栃木県栃木市大平町横堀みずほ5-1</p><p><a href="tel:0282451341">TEL 0282-45-1341</a><br>FAX 0282-45-1508<br>受付時間 8:25〜17:00（平日）</p></div><div class="footer-links"><a href="${prefix}advantage/">長村製作所の強み</a><a href="${prefix}management/">経営方針</a><a href="${prefix}company/">会社概要・アクセス</a><a href="${prefix}technology/">技術情報</a><a href="${prefix}equipment/">設備概要</a><a href="${prefix}products/">製品紹介</a></div><div class="footer-links"><a href="${prefix}recruit/">採用情報</a><a href="${prefix}faq/">よくある質問</a><a href="${prefix}blog/">社長ブログ</a><a href="${prefix}info/news/">新着情報</a><a href="${prefix}management/#privacy">個人情報保護方針</a><a href="${prefix}sitemap/">サイトマップ</a></div></div><div class="footer-bottom"><span>© Nagamura Manufacturing Co. All Rights Reserved.</span><a href="#top">BACK TO TOP ↑</a></div></footer>`;
  const html = `<!doctype html><html lang="ja"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="theme-color" content="#0b151c"><meta name="description" content="株式会社長村製作所。栃木県栃木市の精密板金加工。設計から製造、塗装、検査、出荷まで一貫して対応します。"><title>${esc(title)} | ${baseTitle}</title><link rel="stylesheet" href="${prefix}style.css"><link rel="icon" href="${prefix}assets/global-img_logo01.png"></head><body id="top" class="${top?'home':'interior'}"><div class="scroll-line" aria-hidden="true"></div><a class="skip" href="#main-content">本文へ移動</a><header class="site-header"><a class="brand" href="${prefix}" aria-label="長村製作所 ホーム"><span class="brand-mark">N<span>.</span></span><span class="brand-copy">株式会社<br>長村製作所</span></a><nav class="desktop-nav" aria-label="主なナビゲーション">${menu}</nav><div class="header-contact"><a href="tel:0282451341">0282-45-1341</a><span>MON–FRI 8:25–17:00</span></div><button class="menu-button" type="button" aria-label="メニューを開く" aria-expanded="false" aria-controls="mobile-nav"><span></span><span></span></button></header><nav id="mobile-nav" class="mobile-nav" aria-label="モバイルナビゲーション" inert><a href="${prefix}">ホーム</a>${menu}<a href="${prefix}management/">経営方針</a><a href="${prefix}blog/">社長ブログ</a><a href="${prefix}faq/">よくある質問</a></nav>${hero}<main id="main-content">${body}</main>${footer}<script src="${prefix}site.js" defer></script></body></html>`;
  const target = path.join(root, route, 'index.html');
  fs.mkdirSync(path.dirname(target), {recursive:true});
  fs.writeFileSync(target, html);
}

function sourceFragment(page, route) {
  const raw = fs.readFileSync(path.join(tmp,`nagamura-${page}.html`),'utf8');
  let fragment = raw.match(/<div id="main">([\s\S]*?)<!-- \/\/#main -->/i)?.[1];
  if (!fragment) throw new Error(`Missing main for ${page}`);
  const prefix = depthPrefix(route);
  fragment = fragment.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi,'').replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi,'');
  fragment = fragment.replace(/<img\b[^>]*\bsrc=""[^>]*>/gi,'');
  fragment = fragment.replace(/(?:src|href)="(?:images\/|\/images\/)([^"/]+)"/g,(full,file)=>{
    const attr=full.startsWith('src')?'src':'href';
    return `${attr}="${prefix}assets/${full.includes('="/images/')?'global':page}-${file}"`;
  });
  fragment = fragment.replace(/href="\/(?!\/)([^"#?]*)([^\"]*)"/g,(full,p,rest)=>`href="${prefix}${p}${rest}"`);
  fragment = fragment.replace(/href="https:\/\/nagamura\.co\.jp\/(smox|kovako|monobo)\/"/g,(full,p)=>`href="${prefix}${p}/"`);
  fragment = fragment.replace(/href="https:\/\/nagamura\.co\.jp\/info\/news\/5"/g,`href="${prefix}info/news/5/"`);
  fragment = fragment.replace(/src="\.\.\/smox\/assets\/img\/lp\/ogp\.png"/g,`src="${prefix}assets/smox-ogp.png"`);
  fragment = fragment.replace(/href="%url%"/g,'href="#main-content"');
  fragment = fragment.replace(/<img\b(?![^>]*\bloading=)/g,'<img loading="lazy"');
  fragment = fragment.replace(/<iframe\b/g,'<iframe loading="lazy" title="地図"');
  if (page==='management') fragment=fragment.replace('<a id="management05"></a>','<a id="privacy"></a><a id="management05"></a>');
  return `<div class="source-content">${fragment}</div>`;
}

for (const [route,title,english,heroImage] of routes) {
  const sourceName=route==='info/news'?'info-news':route;
  const body=`<div class="section-shell"><div class="section-aside"><p class="section-index">${english} / ${String(routes.indexOf(routes.find(r=>r[0]===route))+1).padStart(2,'0')}</p><p>精密板金加工の長村製作所。<br>確かな情報を、ここから。</p><a href="${depthPrefix(route)}contact/">ご相談・お問い合わせ ↗</a></div><div class="section-main">${sourceFragment(sourceName,route)}</div></div>`;
  layout(route,title,english,heroImage,body);
}
layout('info/news/5','ホームページをリニューアルいたしました。','NEWS','global-img_home10.jpg',`<div class="simple-page source-content">${sourceFragment('news-5','info/news/5')}</div>`);

const home=`<section class="home-hero"><video autoplay muted loop playsinline poster="assets/advantage-img_advantage01.jpg" aria-hidden="true"><source src="assets/top_movie.mp4" type="video/mp4"></video><div class="home-hero__shade"></div><div class="home-hero__grid"><p class="hero-kicker">EST. 1938 — TOCHIGI, JAPAN</p><div><p class="hero-small">HIGH TECHNOLOGY &amp; HIGH QUALITY</p><h1>金属に、<br><em>可能性を。</em></h1><p class="hero-lead">設計から出荷まで。精密板金加工を、一貫した技術で。</p><a class="text-link light" href="advantage/">長村製作所の強みを見る <span>↗</span></a></div><div class="hero-bottom"><span>01 / PRECISION SHEET METAL</span><a href="#intro">SCROLL TO EXPLORE ↓</a></div></div><div class="vertical-caption">NAGAMURA MANUFACTURING CO.</div></section>
<section id="intro" class="intro-section"><div class="section-label"><span class="count">01 / THE IDEA</span><span class="hairline"></span><span>WHAT WE DO</span></div><div class="intro-grid"><div><p class="eyebrow orange">THE INTEGRATED APPROACH</p><h2>一枚の板から、<br><em>社会を支える形へ。</em></h2></div><div><p>長村製作所は、精密板金加工を軸に、試作・単品・量産に柔軟に対応。綿密なお打ち合わせを重ね、設計・開発・製造から塗装・検査・出荷まで一貫して取り組みます。</p><a class="text-link" href="advantage/">一貫生産体制について <span>↗</span></a></div></div><div class="process-strip"><span>DESIGN</span><i></i><span>FABRICATION</span><i></i><span>COATING</span><i></i><span>INSPECTION</span><i></i><span>DELIVERY</span></div></section>
<section class="visual-break"><div class="break-image"></div><div class="break-copy"><span>PRECISION IS A PROMISE</span><strong>88<small>年</small></strong><p>1938年創業。通信社会のインフラを支えてきたものづくり。</p><a href="company/">私たちについて ↗</a></div></section>
<section class="work-section"><div class="section-label"><span class="count">02 / CAPABILITIES</span><span class="hairline"></span><span>TECHNOLOGY</span></div><div class="work-head"><h2>技術を、<br><em>次の解決へ。</em></h2><p>設備と職人の経験が交わる現場。大型製品から繊細な加工まで、用途に合わせた方法で応えます。</p></div><div class="work-grid"><a class="work-card" href="technology/#technology01"><div class="work-card__image"><img src="assets/technology-img_technology01.jpg" alt="金属板金加工の複合機" loading="lazy"></div><div class="work-card__meta"><span>01 / FABRICATION</span><span>↗</span></div><h3>金属板金加工</h3><p>複合機・NCタレパン・NCベンダーを用いた加工</p></a><a class="work-card" href="technology/#technology02"><div class="work-card__image"><img src="assets/technology-img_technology07.jpg" alt="6軸関節形アーク溶接ロボット" loading="lazy"></div><div class="work-card__meta"><span>02 / WELDING</span><span>↗</span></div><h3>各種溶接加工</h3><p>素材と用途に合わせた、美しさと強度の追求</p></a><a class="work-card" href="technology/#technology03"><div class="work-card__image"><img src="assets/technology-img_technology08.jpg" alt="工場での製品組立作業" loading="lazy"></div><div class="work-card__meta"><span>03 / ASSEMBLY</span><span>↗</span></div><h3>組立・検査</h3><p>箱物板金製品の社内組立と丁寧な品質確認</p></a></div><a class="button-outline" href="technology/">技術情報を見る <span>↗</span></a></section>
<section class="equipment-teaser"><div class="equipment-teaser__image"></div><div class="equipment-teaser__copy"><p class="eyebrow orange">MACHINES &amp; POSSIBILITIES</p><h2>現場を支える、<br>設備の力。</h2><p>レーザー複合機からプレスブレーキ、溶接ロボット、試験・計測器まで。設備構成と台数を公開しています。</p><a class="text-link light" href="equipment/">設備概要を見る <span>↗</span></a></div></section>
<section class="products-teaser"><div class="section-label"><span class="count">03 / OUR OUTPUT</span><span class="hairline"></span><span>PRODUCTS</span></div><div class="products-teaser__head"><h2>つくる、その先に。</h2><p>通信インフラを支える製品から、空間をつくるブースまで。</p></div><div class="products-row"><a href="products/#products01"><img src="assets/products-img_products01_01.jpg" alt="配線盤製品" loading="lazy"><span>各種配線盤類 ↗</span></a><a href="products/#products02"><img src="assets/products-img_products02_01.jpg" alt="19インチラック等の製品" loading="lazy"><span>19インチラック ↗</span></a><a href="products/#products03"><img src="assets/products-img_products03_01.jpg" alt="屋外公衆電話室" loading="lazy"><span>屋外公衆電話室 ↗</span></a><a href="products/#products04"><img src="assets/products-img_products04_01.jpg" alt="公共製品" loading="lazy"><span>公共製品 ↗</span></a></div><div class="brand-row"><a href="smox/">SMOX ↗</a><a href="kovako/">KOVAKO ↗</a><a href="monobo/">Monobo ↗</a></div></section>
<section class="people-section"><div class="people-image"></div><div class="people-copy"><span class="eyebrow orange">PEOPLE MAKE THE DIFFERENCE</span><h2>つくる人が、<br>未来をつくる。</h2><p>培ってきた技術を次の世代へ。長村製作所では、経験と挑戦が交わる現場づくりを続けています。</p><a class="button-solid" href="recruit/">採用情報を見る ↗</a></div></section>
<section class="updates-section"><div><p class="eyebrow orange">FROM NAGAMURA</p><h2>お知らせ・読みもの</h2></div><div class="updates-links"><a href="info/news/"><span>NEWS</span><strong>新着情報</strong><span>↗</span></a><a href="blog/"><span>JOURNAL</span><strong>飯山社長のものづくりブログ</strong><span>↗</span></a><a href="faq/"><span>FAQ</span><strong>よくある質問</strong><span>↗</span></a></div></section>`;
layout('','ホーム','HOME','',home.replaceAll(' loading="lazy"',''));

const recruit=`<section class="recruit-intro"><p class="eyebrow orange">“ありがとう”を道しるべに</p><h2>未来を創りつづける。</h2><p>お客様と一緒に考え、製品に付加価値と想いを込める。長村製作所が大切にしているものづくりです。社員一人ひとりの個性を尊重し、対話を重ねながら能力を伸ばし合っています。求めるのは「素直さ」「向上心」「行動力」を持つ人。挑戦する人を支えます。</p></section><section class="recruit-block"><div class="section-label"><span class="count">01 / WORK</span><span class="hairline"></span><span>職種</span></div><div class="job-grid">${[['設計','design.png','お客さまのご要望をもとに、CADソフトで設計図面を作成します。'],['板金加工','metal.png','金属板の切断、穴開け、曲げなどの加工作業を行います。'],['溶接','welding.png','素材と用途に合わせて強度のある美しい製品を製作します。'],['組立','assembly.png','部品を組立図面に従って完成品に仕上げ、品質を確認します。']].map(([name,img,desc])=>`<article><img src="../assets/recruit-${img}" alt="${name}の仕事" loading="lazy"><h3>${name}</h3><p>${desc}</p></article>`).join('')}</div></section><section class="recruit-block"><div class="section-label"><span class="count">02 / FACTS</span><span class="hairline"></span><span>数字で見る</span></div><div class="fact-grid"><div><strong>1938</strong><span>年創業</span></div><div><strong>58</strong><span>名／社員数（2026年1月時点・会社概要）</span></div><div><strong>127</strong><span>日／年間休日数（採用サイト掲載値）</span></div><div><strong>5.08</strong><span>時間／月平均残業時間（採用サイト掲載値）</span></div><div><strong>76.7</strong><span>%／有給休暇平均取得率（採用サイト掲載値）</span></div><div><strong>42.8</strong><span>歳／平均年齢（採用サイト掲載値）</span></div></div><p class="note">採用サイトには2025年8月1日時点の従業員数59名、2024年度売上高10.3億円、男女比68%／32%、平均勤続年数13年、公衆電話BOX製造会社は国内2社と掲載されています。女性社員のワーキングマザー比率73.6%、育児休業取得・復職率100%、女性管理職比率22.2%も同サイトの掲載値です。</p></section><section class="recruit-block"><div class="section-label"><span class="count">03 / BENEFITS</span><span class="hairline"></span><span>福利厚生</span></div><div class="benefits-grid"><div><h3>働く</h3><p>各種社会保険完備／通勤交通費全額支給／半日・1時間単位の有給休暇／資格手当／社内表彰制度／最大75歳までの再雇用制度</p></div><div><h3>暮らす・健やかに</h3><p>出産・育児休業制度／育児のための短時間勤務／子どものための看護休暇／介護休業制度／慶弔制度／退職金制度／健康診断（人間ドック）／リロクラブ</p></div></div></section><section class="recruit-cta"><h2>あなたの次の一歩を。</h2><div><a class="button-solid" href="newgrad/">新卒採用 ↗</a><a class="button-outline" href="career/">中途採用 ↗</a></div></section>`;
layout('recruit','採用情報','RECRUIT','technology-img_technology11.jpg',recruit);
layout('recruit/newgrad','新卒採用','NEW GRADUATE','recruit-design.png',`<div class="simple-page"><p>新卒採用の募集情報はマイナビ2027で案内しています。</p><a class="button-solid" href="https://job.mynavi.jp/27/pc/search/corp253705/outline.html" target="_blank" rel="noopener">マイナビ2027で詳細を見る ↗</a><p><a href="../">採用情報に戻る</a></p></div>`);
layout('recruit/career','中途採用','CAREER','recruit-metal.png',`<div class="simple-page"><p>中途採用の募集職種・応募については、公式採用ページをご確認ください。</p><a class="button-solid" href="https://nagamura.co.jp/recruit/career/" target="_blank" rel="noopener">現在の募集を確認する ↗</a><p><a href="../">採用情報に戻る</a></p></div>`);

const blogRaw=fs.readFileSync(path.join(tmp,'nagamura-blog.html'),'utf8');
const posts=[...blogRaw.matchAll(/<time[^>]*datetime="([^"]+)"[^>]*>([^<]+)<\/time>[\s\S]*?<h3 class="entry-title"><a href="([^"]+)"[^>]*>([^<]+)<\/a><\/h3>/g)].slice(0,10);
const blog=`<div class="simple-page"><p class="eyebrow orange">IYAMA'S JOURNAL</p><h2>飯山社長のものづくりブログ</h2><p>ものづくり、働くこと、会社の日々について綴るブログです。以下は最新記事の抜粋です。</p><div class="post-list">${posts.map(m=>`<a href="${m[3]}" target="_blank" rel="noopener"><time datetime="${m[1]}">${m[2]}</time><strong>${m[4]}</strong><span>↗</span></a>`).join('')}</div><a class="text-link" href="https://nagamura.co.jp/blog/" target="_blank" rel="noopener">ブログの全記事を見る <span>↗</span></a></div>`;
layout('blog','社長ブログ','JOURNAL','technology-img_technology08.jpg',blog);

const contact=`<div class="contact-page"><div><p class="eyebrow orange">LET'S TALK</p><h2>ご相談、お見積り、<br>採用について。</h2><p>加工のご相談や製品についてのお問い合わせは、電話または公式フォームからお送りください。概算費用や納期、1点からの試作についてもご相談いただけます。</p><a class="button-solid" href="https://nagamura.co.jp/contact/" target="_blank" rel="noopener">公式お問い合わせフォーム ↗</a></div><div class="contact-card"><span>HEAD OFFICE / TOCHIGI</span><h3>株式会社 長村製作所</h3><p>〒329-4411<br>栃木県栃木市大平町横堀みずほ5-1</p><a class="phone" href="tel:0282451341">0282-45-1341</a><p>FAX 0282-45-1508<br>受付時間 8:25〜17:00（平日）</p><hr><span>TOKYO OFFICE</span><p>〒170-0013<br>東京都豊島区東池袋1-21-11<br>オーク池袋ビル5F</p><a href="../company/#company04">アクセスを見る ↗</a></div></div>`;
layout('contact','お問い合わせ','CONTACT','global-img_home10.jpg',contact);

const siteMapItems=[['企業情報',[['長村製作所の強み','advantage/'],['経営方針','management/'],['会社概要・沿革・アクセス','company/']]],['技術・製品',[['技術情報','technology/'],['設備概要','equipment/'],['製品紹介','products/'],['SMOX','smox/'],['KOVAKO','kovako/'],['Monobo','monobo/']]],['その他',[['社長ブログ','blog/'],['採用情報','recruit/'],['よくある質問','faq/'],['新着情報','info/news/'],['お問い合わせ','contact/']]]];
layout('sitemap','サイトマップ','SITEMAP','global-img_home09.jpg',`<div class="simple-page sitemap-grid">${siteMapItems.map(([name,items])=>`<section><h2>${name}</h2>${items.map(([label,url])=>`<a href="../${url}">${label}<span>↗</span></a>`).join('')}</section>`).join('')}</div>`);

const brandPages=[
 ['smox','SMOX','SMOKING BOOTH','smox.png','屋内外に対応した喫煙ブース','公衆電話ボックスの型材を応用した強固な設計。風速36m/secの耐久性、約15秒で室内の空気を入れ替える換気性能、設置から保守までの一貫対応が特長です。設置後1年間の無料修理保証があります（お客様の過失による故障を除く）。','屋外・屋内設置の条件、ラインナップ、仕様、導入事例などは公式製品サイトをご覧ください。'],
 ['kovako','KOVAKO','FACTORY BOOTH','kovako.png','工場・倉庫の中に、安心できる空間を。','休憩室、事務室、検査室などに使えるファクトリーブース。換気設備を備え、最短1日で設置できる仕様もあります。設置場所に合わせたオーダーメイドで、最小900×900mmから3m四方以上まで対応します。照明、人感センサー、冷暖房も用途に応じて設置できます。','設置条件、導入の流れ、支払い方法、実例などは公式製品サイトをご覧ください。'],
 ['monobo','Monobo','TELEWORK BOOTH','monobo.webp','省スペースに、集中できる個室を。','公衆電話ボックス製造で培った技術から生まれたテレワークブース。1人用、2人用、4人用を展開。最低天井高2100mmからの設置が可能なモデルがあり、最短2時間で設置できます。','各モデルの寸法・重量・電源・換気などの仕様、導入事例、料金シミュレーションは公式製品サイトをご覧ください。']
];
for(const [route,title,english,img,headline,copy,more] of brandPages) layout(route,title,english,img,`<div class="brand-page"><div class="brand-page__image">${image('../',img,title)}</div><div><p class="eyebrow orange">NAGAMURA ORIGINAL PRODUCT</p><h2>${headline}</h2><p>${copy}</p><p>${more}</p><a class="button-solid" href="https://nagamura.co.jp/${route}/" target="_blank" rel="noopener">${title} 公式サイトで詳細を見る ↗</a></div></div>`);

console.log(`Generated ${routes.length+11} pages`);
