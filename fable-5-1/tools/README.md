# tools/

- `build.mjs` — 静的ビルド。`node tools/build.mjs` で `src/pages/*.mjs` → ルートの `*.html` を生成（依存ゼロ）。
- `images.pipeline.js` — 元サイトから取得した画像を WebP 化・色調補正・複数サイズ生成するスクリプト（sharp）。参照用（入力パスはクロール作業フォルダ）。
- `verify.playwright.mjs` — ローカルサーバー（`python3 -m http.server 8765`）に対して全ページをデスクトップ／モバイル幅で開き、コンソールエラー・404・横スクロールを検出しスクリーンショットを保存。
- `crawl-extract.py` — 元サイト HTML から本文・画像・リンクを抽出したパーサ（調査用）。
