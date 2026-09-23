# CREDITS — 使用素材・フォント・ライブラリと出典

## 写真・動画・ロゴ（すべて株式会社長村製作所の公式サイトから取得した実物素材）

| 素材 | 出典 | 加工内容 |
|---|---|---|
| ヒーロー動画 `assets/video/hero.mp4` / `hero.webm` | https://nagamura.co.jp/video/top_movie.mp4（1920×1080, 12s） | ffmpeg で 1280×720 / 30fps に再エンコード（H.264 CRF27、VP9 CRF36）、音声なし |
| ヒーロー静止画 `assets/img/hero/*.webp` | 上記動画から切り出し（溶接 4.6s／レーザー 7.5s／組立 11.6s／工場 1.5s） | sharp で彩度 −8%・コントラスト +6%、1920/1280/768px の WebP |
| 各ページ写真 `assets/img/photo/*.webp` | https://nagamura.co.jp/images/, /advantage/images/, /technology/images/, /equipment/images/, /management/images/, /company/images/ | WebP 変換、軽い色調補正（彩度 −8%、コントラスト +6%） |
| 製品写真 `assets/img/products/*.webp` | https://nagamura.co.jp/products/images/ | WebP 変換（色調補正なし） |
| ISO 登録証・品質環境方針 `assets/img/doc/*.webp` | https://nagamura.co.jp/advantage/images/ | WebP 変換、724/400px |
| 採用サイト写真 `assets/img/recruit/*.webp` | https://nagamura.co.jp/recruit/wp-content/themes/nagamura-recruit/images/top/ | WebP 変換、色調補正、複数サイズ |
| SMOX 画像・アイコン `assets/img/brands/smox/` | https://nagamura.co.jp/smox/assets/img/lp/ | WebP 変換（SVG はそのまま） |
| KOVAKO 画像 `assets/img/brands/kovako/` | https://nagamura.co.jp/kovako/wp-content/themes/diver_child/images/ | WebP 変換（SVG はそのまま） |
| Monobo 画像 `assets/img/brands/monobo/` | https://nagamura.co.jp/monobo/wp-content/themes/nagamura_monobo_2025/assets/img/, /monobo/wp-content/uploads/ | WebP 再圧縮・リサイズ |
| 会社ロゴ `assets/img/brand/*.png` | https://nagamura.co.jp/images/img_logo01.png, img_logo02.png | 切り出し（ファビコン用）のみ |
| OG 画像 `assets/img/og.jpg` | 上記ヒーロー動画の切り出しにグラデーションを合成 | sharp |

※ 実在しない製品・設備・人物の画像は使用していません。外部のストックフォトも使用していません。

## フォント（Google Fonts, SIL Open Font License 1.1）

- Noto Sans JP — https://fonts.google.com/noto/specimen/Noto+Sans+JP
- Sora — https://fonts.google.com/specimen/Sora
- JetBrains Mono — https://fonts.google.com/specimen/JetBrains+Mono

## ライブラリ（`assets/vendor/` に同梱）

| ライブラリ | バージョン | ライセンス | 用途 |
|---|---|---|---|
| three.js（`three.module.min.js`, `RoomEnvironment.js`） | 0.170.0 | MIT（`assets/vendor/three/LICENSE`） | トップページ「PROCESS」のスクロール連動 WebGL（板金のレーザーカット→抜き→曲げ→溶接） |
| GSAP + ScrollTrigger | 3.13.0 | GSAP Standard "no charge" License（https://gsap.com/standard-license） | ピン留めスクロール、パララックス |

## 外部サービス（埋め込み・リンク）

- Google Maps 埋め込み（会社概要ページ）— 元サイトと同一の embed URL
- YouTube（youtube-nocookie.com）— クリック時のみ読み込むファサード方式。動画ID：xfs6-VBcCpQ（ロボット溶接）、yHSOGVdjLnE（SMOX 排気実験）、3RTlb3yrHM0（SMOX 開発ストーリー）、L2UgGfBdmT8（KOVAKO 開発ストーリー）
- Microsoft Forms — お問合せ／資料請求フォーム（元サイトと同一 URL へ誘導）
- マイナビ2027 — 新卒採用エントリー（リンクのみ）

## 制作ツール

- sharp 0.35（画像処理）、ffmpeg-static 6.0（動画再エンコード・フレーム切り出し）、Node.js 25（静的ビルド `tools/build.mjs`）、Playwright（検証用スクリーンショット）
