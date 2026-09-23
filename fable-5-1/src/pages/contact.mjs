import { heading, pageHero, btn } from '../helpers.mjs';

const FORM = 'https://forms.office.com/r/qFG6T0Yqej/';

const body = `
${pageHero({ en: 'CONTACT', ja: 'お問い合わせ', lead: 'お見積り・ご相談は、お電話または公式お問合せフォームから。図面や手描きのイラストからの試作、短納期のご相談も歓迎します。', image: 'hero/assembly', crumbs: [{ label: 'お問い合わせ' }] })}
<section class="section section--dark section--grid">
  <div class="container contact-grid">
    <div class="reveal">
      ${heading({ num: '01', en: 'INQUIRY FORM', ja: 'お問合せ内容の入力', lead: '下記に入力後「公式フォームへ進む」を押すと、入力内容がクリップボードにコピーされ、長村製作所の公式お問合せフォーム（Microsoft Forms）が新しいタブで開きます。フォームに貼り付けて送信してください。' })}
      <form class="form" id="contact-form" data-target="${FORM}" novalidate>
        <div class="form__row"><label for="f-subject">お問合せ種別 <span class="req">必須</span></label>
          <select id="f-subject" name="subject" required>
            <option value="">選択してください</option>
            <option>お見積り依頼（精密板金加工）</option>
            <option>製品について（配線盤・ラック・公衆電話室・公共製品）</option>
            <option>SMOX（喫煙ブース）について</option>
            <option>KOVAKO（ファクトリーブース）について</option>
            <option>Monobo（テレワークブース）について</option>
            <option>採用について</option>
            <option>その他</option>
          </select></div>
        <div class="form__row form__row--2">
          <div class="form__row"><label for="f-company">会社名</label><input id="f-company" name="company" type="text" autocomplete="organization" placeholder="株式会社〇〇"></div>
          <div class="form__row"><label for="f-name">お名前 <span class="req">必須</span></label><input id="f-name" name="name" type="text" autocomplete="name" required placeholder="長村 太郎"></div>
        </div>
        <div class="form__row form__row--2">
          <div class="form__row"><label for="f-email">メールアドレス <span class="req">必須</span></label><input id="f-email" name="email" type="email" autocomplete="email" required placeholder="you@example.com"></div>
          <div class="form__row"><label for="f-tel">電話番号</label><input id="f-tel" name="tel" type="tel" autocomplete="tel" placeholder="0282-45-1341"></div>
        </div>
        <div class="form__row"><label for="f-message">お問合せ内容 <span class="req">必須</span></label><textarea id="f-message" name="message" required placeholder="ご依頼内容、数量、希望納期、素材・板厚などをご記入ください。"></textarea></div>
        <p class="form__note">ご入力いただいた個人情報は、<a class="text-link" href="management.html#privacy">個人情報保護方針</a>に基づき適正に取り扱います。このページからは送信されません（送信は公式フォーム上で行います）。</p>
        <div class="form__actions">
          <button type="submit" class="btn btn--accent btn--lg"><span>公式フォームへ進む</span><svg class="btn__arrow" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></button>
          <button type="button" class="btn btn--line" id="copy-draft"><span>入力内容をコピーのみ</span></button>
        </div>
      </form>
    </div>
    <aside class="contact-side reveal">
      <div class="contact-card">
        <p class="contact-card__label">TEL — お電話でのお問合せ</p>
        <a class="contact-card__big" href="tel:0282451341">0282-45-1341</a>
        <p class="mt-2">受付時間：8:25〜17:00（平日）</p>
        <p>FAX：0282(45)1508</p>
      </div>
      <div class="contact-card">
        <p class="contact-card__label">OFFICIAL FORM — 公式お問合せフォーム</p>
        <p>フォームは Microsoft Forms で運用しています。直接開く場合はこちら。</p>
        ${btn(FORM, 'お問合せフォームを開く', 'btn--gold', 'target="_blank" rel="noopener"')}
      </div>
      <div class="contact-card">
        <p class="contact-card__label">HEAD OFFICE — 本社工場</p>
        <p>〒329-4411 栃木県栃木市大平町横堀みずほ5-1</p>
        <p class="contact-card__label mt-3">TOKYO — 東京本部</p>
        <p>〒170-0013 東京都豊島区東池袋1-21-11 オーク池袋ビル5F<br>TEL：03-5985-4472　FAX：03-5985-4473</p>
        <p class="mt-2"><a class="link-arrow" href="company.html#access">アクセス・地図を見る <svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a></p>
      </div>
      <div class="contact-card">
        <p class="contact-card__label">RECRUIT — 採用に関するお問合せ</p>
        <p>経営企画室：採用担当<br>TEL：03-5985-4472　FAX：03-5985-4473<br>Mail：<a class="text-link" href="mailto:recruit@nagamura.co.jp">recruit@nagamura.co.jp</a></p>
      </div>
      <div class="contact-card">
        <p class="contact-card__label">BRAND FORMS — 製品ブランド専用フォーム</p>
        <p><a class="text-link" href="smox.html">SMOX 資料請求</a>／<a class="text-link" href="kovako.html">KOVAKO 資料請求</a>／<a class="text-link" href="monobo.html">Monobo 資料請求・見積もり</a></p>
      </div>
    </aside>
  </div>
</section>
<div class="toast" id="toast" role="status" aria-live="polite"></div>
`;

export default { slug: 'contact', title: 'お問い合わせ', description: '株式会社長村製作所へのお問い合わせ：TEL 0282-45-1341（受付 8:25〜17:00 平日）、FAX 0282(45)1508、公式お問合せフォーム、本社工場・東京本部の所在地。', body };
