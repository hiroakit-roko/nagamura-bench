# Nagamura Bench — AI Web Design Benchmark

複数の AI モデルに **同一の課題**（[株式会社長村製作所](https://nagamura.co.jp/) の公式サイトのリニューアル）を与え、
Webデザイン力・写真加工・3D表現・実装・デプロイまでの総合力を比較するベンチマークです。

GitHub Pages のルート（`index.html`）が一覧ポータルになっており、各 AI が作ったサイトへ飛べます。

```
nagamura-bench/
├── index.html              # 一覧ポータル（models.json を読んでカードを表示）
├── models.json             # 参加モデルの一覧（slug / 表示名 / 実行ツール）
├── _template/              # 各モデルフォルダの雛形（課題文 AGENTS.md など）
├── scripts/new-model.sh    # モデルフォルダを追加するスクリプト
├── .github/workflows/      # main への push で全サイトをビルド & Pages 公開
├── fable-5-1/              # ← Claude Fable 5.1 の作業領域
├── opus-5-5/               # ← Claude Opus 5.5 の作業領域
└── gpt-6-sol/              # ← GPT-6 Sol の作業領域
```

## 使い方

### 1. 各 AI に課題をやらせる

課題文は各フォルダの `AGENTS.md` に入っています（Codex は `AGENTS.md`、Claude Code は `CLAUDE.md` 経由で同じ内容を読み込みます）。

```bash
# Claude Code の場合
cd fable-5-1 && claude --model claude-fable-5-1
cd opus-5-5  && claude --model claude-opus-5-5

# Codex の場合
cd gpt-6-sol && codex
```

起動したら、次のように話しかけるだけです：

> 課題を開始してください。

各 AI は、既存サイトの調査 → 素材収集・加工 → 実装 → 検証 → `main` への push（= デプロイ）→ `REPORT.md` 作成 まで自律的に行います。
複数の AI を同時並行で走らせても、各自が自分のフォルダしか触らないので衝突しません。

> 💡 途中で許可確認に止まらないよう、Claude Code は auto モード / `--permission-mode acceptEdits` 等、
> Codex は `--full-auto` 等で起動するのがおすすめです。

### 2. モデルを追加する

```bash
scripts/new-model.sh <slug> "<表示名>" "<実行ツール>"
# 例
scripts/new-model.sh gemini-4-pro "Gemini 4 Pro" "Gemini CLI"
git add -A && git commit -m "add gemini-4-pro" && git push
```

`_template/` から課題文が生成され、`models.json` に登録されてポータルに表示されます。
課題文を変えたい場合は **モデルを走らせる前に** `_template/AGENTS.md` を編集してからフォルダを作成してください
（公平性のため、全モデルで同じ課題文を使うこと）。

### 3. 結果を見る

- ポータル: `https://<owner>.github.io/<repo>/`
- 各サイト: `https://<owner>.github.io/<repo>/<slug>/`
- ポータルのサムネイルは Actions 内で Playwright により自動撮影されます。
- 各 AI のレポート: `<slug>/REPORT.md`、コンテンツ棚卸し: `<slug>/docs/content-inventory.md`

## デプロイの仕組み

`main` への push で `.github/workflows/deploy.yml` が走り、`models.json` の各モデルについて：

- `package.json` があれば `npm ci && npm run build` して `dist/` を `/<slug>/` に配置
- なければフォルダの中身をそのまま `/<slug>/` に配置（`AGENTS.md` / `CLAUDE.md` は除外）
- ビルドに失敗したモデルは「ビルド失敗」ページになり、他モデルの公開には影響しません

### 初回セットアップ（済んでいなければ）

```bash
gh repo create <repo> --public --source . --push
gh api -X POST repos/<owner>/<repo>/pages -f build_type=workflow
```
