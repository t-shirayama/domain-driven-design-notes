# AGENTS.md

このリポジトリで Codex や自動化エージェントが作業するときの保守ルールです。

## Project Overview

- このリポジトリは、Markdown の学習メモを GitHub Pages に公開するためのテンプレートです。
- `docs/` 配下の Markdown を Vite の仮想モジュールで読み込み、React で表示します。
- サイト固有の値は `site.config.ts` に集約します。
- GitHub Pages への公開は `.github/workflows/pages.yml` が担当します。

## Commands

- 依存関係のインストール: `npm install`
- 開発サーバー: `npm run dev`
- 型チェック: `npm run typecheck`
- 本番ビルド: `npm run build`
- 本番プレビュー: `npm run preview`

変更後は、原則として `npm run build` を実行してください。

## Documentation Rules

- 章フォルダは `NN_章タイトル` の形式にします。
- 章内ファイルは `NN_タイトル.md` の形式にします。
- 番号は表示順に使われるため、既存番号との整合性を保ちます。
- 各章の参考リンクは、章末尾の `NN_参考サイト.md` にまとめます。
- 通常の本文ファイル末尾に個別の `参考サイト` セクションを追加しません。
- 公式サイトをもとにした場合は、対応する章の `参考サイト` にリンクを追加します。

## Writing Style

- 文体は短く、あとで読み返しやすい備忘録として書きます。
- 重要な定義、結論、注意点だけを `**太字**` で強調します。
- 太字は多用せず、1 ファイルあたり 2〜5 箇所程度を目安にします。
- `<u>` と `<mark>` は使いません。
- 型名、メソッド名、コマンド、演算子、キーワードはバッククォートで囲みます。
- コード例は短くし、思い出したいポイントに集中させます。

## Implementation Notes

- Markdown の並び順は `build/readNotes.ts` の `readOrder` がファイル名先頭の番号から決定します。
- Markdown のタイトルは、ファイル内の最初の `#` 見出しから取得されます。
- `dist/`, `node_modules/`, `*.tsbuildinfo` は生成物なのでコミットしません。
- 既存のユーザー変更を勝手に戻さないでください。

## Before Finishing

- `git diff` で意図しない変更がないか確認します。
- 変更後は `npm run build` を実行します。
- 検証用に追加したサンプル Markdown は、最終的に削除して `docs/.gitkeep` のみ残します。
- 変更内容を日本語で簡潔に報告します。
