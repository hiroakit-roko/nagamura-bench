import { head, pageHero, btn, SITE, telIcon, ext } from '../lib.mjs';

const TYPES = [
  ['板金加工のご相談・お見積り', SITE.form, '公式お問合せフォームを開く'],
  ['製品（配線盤・ラック・電話室 等）について', SITE.form, '公式お問合せフォームを開く'],
  ['SMOX（喫煙ブース）', SITE.smoxForm, 'SMOX 資料請求フォームを開く'],
  ['KOVAKO（ファクトリーブース）', SITE.kovakoForm, 'KOVAKO 資料請求フォームを開く'],
  ['Monobo（テレワークブース）', SITE.monoboForm, 'Monobo 資料請求フォームを開く'],
  ['採用について', '', 'メールソフトで採用担当へ送る', SITE.recruitMail],
  ['その他', SITE.form, '公式お問合せフォームを開く'],
];

export default {
  path: 'contact/',
  render(r) {
    return {
      title: 'お問合せ',
      description: '株式会社長村製作所へのお問合せ。お電話（0282-45-1341 受付時間 8:25〜17:00 平日）、FAX（0282-45-1508）、Webフォームからご相談・お見積りを承ります。',
      body: `
${pageHero(r, { no: 'CONTACT', en: 'Contact', ja: 'お問合せ', image: 'floor', crumbs: [{ label: 'お問合せ' }], lead: 'お見積り・技術的なご相談・製品のお問合せなど、お気軽にご連絡ください。' })}

<section class="sec" aria-labelledby="route-title">
  <div class="wrap">
    ${head({ no: '01', en: 'Contact Channels', ja: 'お問合せ窓口', id: 'route-title' })}
    <div class="croute">
      <div class="croute__card rv">
        <p class="sh__meta"><span class="sh__no">TEL</span><span class="sh__line"></span>お電話（本社工場）</p>
        <a class="bigtel" href="${SITE.telHref}">${telIcon}${SITE.tel}</a>
        <p>受付時間：${SITE.hours}<br>FAX：${SITE.fax}</p>
        <p class="note">${SITE.zip} ${SITE.addr}</p>
      </div>
      <div class="croute__card rv" style="--d:.08s">
        <p class="sh__meta"><span class="sh__no">WEB</span><span class="sh__line"></span>公式お問合せフォーム</p>
        <h3>Webフォーム（Microsoft Forms）</h3>
        <p>当社の公式お問合せフォームは Microsoft Forms で運用しています。下のボタンから直接ご入力いただけます。</p>
        ${btn(SITE.form, '公式お問合せフォームを開く', { external: true, variant: 'btn--red' })}
      </div>
      <div class="croute__card rv">
        <p class="sh__meta"><span class="sh__no">TOKYO</span><span class="sh__line"></span>東京本部</p>
        <h3>${SITE.tokyoTel}</h3>
        <p>FAX：${SITE.tokyoFax}<br>${SITE.tokyoZip} ${SITE.tokyoAddr}</p>
      </div>
      <div class="croute__card rv" style="--d:.08s">
        <p class="sh__meta"><span class="sh__no">RECRUIT</span><span class="sh__line"></span>採用に関するお問合せ</p>
        <h3>経営企画室 採用担当</h3>
        <p>TEL：${SITE.tokyoTel}<br>Mail：<a href="mailto:${SITE.recruitMail}" style="text-decoration:underline">${SITE.recruitMail}</a></p>
      </div>
    </div>
  </div>
</section>

<section class="sec is-light" aria-labelledby="form-title">
  <div class="wrap split">
    <div class="sticky-col">
      ${head({ no: '02', en: 'Inquiry Form', ja: 'お問合せ内容の作成', id: 'form-title' })}
      <p class="rv">このページはサーバーを持たない静的サイトのため、入力内容をここから直接送信することはできません。<br>ご入力いただいた内容を<strong>自動で整形・コピー</strong>し、ご用件に合わせた<strong>公式フォーム</strong>（採用はメール）へご案内します。</p>
      <ol class="olist" style="margin-top:28px">
        <li><b>必要事項を入力</b><p>ご用件を選び、内容をご記入ください。</p></li>
        <li><b>「内容を作成して次へ」</b><p>お問合せ文を作成し、クリップボードにコピーします。</p></li>
        <li><b>公式フォームに貼り付けて送信</b><p>開いたフォームに貼り付けてご送信ください。</p></li>
      </ol>
      <p class="note" style="margin-top:20px">ご入力いただいた個人情報は、<a href="${r}privacy/" style="text-decoration:underline">個人情報保護方針</a>に基づき適切に取り扱います。</p>
    </div>
    <div>
      <form class="cform" data-cform novalidate>
        <fieldset class="field" style="border:0;padding:0;margin:0">
          <legend>ご用件<span class="req">必須</span></legend>
          <div class="chips" style="margin-top:10px">
            ${TYPES.map(([t, href, label, mail], i) => `<label><input type="radio" name="type" value="${t}" data-href="${href}" data-label="${label}"${mail ? ` data-mail="${mail}"` : ''}${i === 0 ? ' checked' : ''}><span>${t}</span></label>`).join('')}
          </div>
        </fieldset>
        <div class="field"><label for="f-company">会社名・団体名<span class="opt">任意</span></label><input id="f-company" name="company" autocomplete="organization"></div>
        <div class="field"><label for="f-name">お名前<span class="req">必須</span></label><input id="f-name" name="name" autocomplete="name" required aria-describedby="f-name-err"><p class="err" id="f-name-err" aria-live="polite"></p></div>
        <div class="field"><label for="f-email">メールアドレス<span class="req">必須</span></label><input id="f-email" name="email" type="email" autocomplete="email" inputmode="email" required aria-describedby="f-email-err"><p class="err" id="f-email-err" aria-live="polite"></p></div>
        <div class="field"><label for="f-tel">電話番号<span class="opt">任意</span></label><input id="f-tel" name="tel" type="tel" autocomplete="tel" inputmode="tel"></div>
        <div class="field"><label for="f-reply">ご希望の連絡方法<span class="opt">任意</span></label><select id="f-reply" name="reply"><option value="">指定なし</option><option>メール</option><option>お電話</option></select></div>
        <div class="field"><label for="f-msg">お問合せ内容<span class="req">必須</span></label><textarea id="f-msg" name="message" required aria-describedby="f-msg-hint f-msg-err" placeholder="例）SUS304 t1.5 の筐体を10台。図面あり、納期は◯月中旬希望。"></textarea><p class="hint" id="f-msg-hint">材質・板厚・数量・納期・図面の有無などをご記入いただくとスムーズです。</p><p class="err" id="f-msg-err" aria-live="polite"></p></div>
        <p><button type="submit" class="btn btn--red"><span class="btn__label">内容を作成して次へ</span></button></p>
      </form>
      <div class="cform__out" data-cform-out tabindex="-1" aria-live="polite" style="margin-top:28px">
        <p class="lead-l" style="font-size:1.05rem">お問合せ内容を作成しました</p>
        <p class="note" data-copied></p>
        <label class="sr-only" for="f-out">作成されたお問合せ内容</label>
        <textarea id="f-out" readonly></textarea>
        <div class="btn-row">
          <a class="btn btn--red" data-open href="${SITE.form}" target="_blank" rel="noopener"><span class="btn__label">公式お問合せフォームを開く</span>${ext}</a>
          <button type="button" class="btn btn--dark" data-copy><span class="btn__label">もう一度コピー</span></button>
        </div>
        <p class="note">お急ぎの場合はお電話（<a href="${SITE.telHref}">${SITE.tel}</a>／受付時間 ${SITE.hours}）でもご相談いただけます。</p>
      </div>
    </div>
  </div>
</section>
`,
    };
  },
};
