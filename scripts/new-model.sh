#!/usr/bin/env bash
# 新しいモデル用フォルダを作成し、models.json に登録する
# 使い方: scripts/new-model.sh <slug> "<表示名>" "<実行ツール>"
#   例:   scripts/new-model.sh opus-5-5 "Claude Opus 5.5" "Claude Code"
set -euo pipefail
cd "$(dirname "$0")/.."

slug="${1:?slug を指定してください（例: opus-5-5）}"
name="${2:?表示名を指定してください（例: \"Claude Opus 5.5\"）}"
tool="${3:-}"

if [[ ! "$slug" =~ ^[a-z0-9][a-z0-9-]*$ ]]; then
  echo "slug は英小文字・数字・ハイフンのみ使用できます: $slug" >&2; exit 1
fi
if [[ -e "$slug" ]]; then
  echo "既に存在します: $slug/" >&2; exit 1
fi

mkdir -p "$slug"
for f in AGENTS.md CLAUDE.md index.html; do
  sed -e "s/{{SLUG}}/$slug/g" -e "s/{{MODEL_NAME}}/$name/g" "_template/$f" > "$slug/$f"
done

SLUG="$slug" NAME="$name" TOOL="$tool" node -e '
  const fs = require("fs");
  const list = JSON.parse(fs.readFileSync("models.json", "utf8"));
  list.push({ slug: process.env.SLUG, name: process.env.NAME, tool: process.env.TOOL });
  fs.writeFileSync("models.json", JSON.stringify(list, null, 2) + "\n");
'
echo "作成しました: $slug/ （models.json に登録済み）"
echo "次: cd $slug && claude   （または codex）で起動し「課題を開始してください」と話しかける"
