# GitHub Pages Notes Template

React / Vite で `docs/` 配下の Markdown を読み込み、GitHub Pages に公開するための学習メモ用テンプレートです。

## テンプレートとして使う

1. このリポジトリの Settings で **Template repository** を有効にします。
2. GitHub の **Use this template** から新しい notes リポジトリを作成します。
3. 新しいリポジトリで `site.config.ts` を編集します。
4. Repository Settings の Pages で Source を **GitHub Actions** に設定します。
5. `docs/NN_章タイトル/NN_本文タイトル.md` の形式で Markdown を追加します。

## ローカルで動かす

初回セットアップ:

```bash
npm install
```

開発サーバー:

```bash
npm run dev
```

型チェック:

```bash
npm run typecheck
```

本番ビルド:

```bash
npm run build
```

プレビュー:

```bash
npm run preview
```

## サイト設定

サイト固有の値は `site.config.ts` に集約しています。

- `repositoryName`: GitHub Pages の base path に使うリポジトリ名
- `siteTitle`: ブラウザタイトルとヘッダー名
- `siteDescription`: meta description
- `brandMark`: ヘッダー左側の短い表示
- `brandSubtitle`: ヘッダーの補足文
- `homeEyebrow`, `homeTitle`, `homeDescription`: ホーム画面の文言
- `emptyDocsHint`: `docs/` が空のときに表示するヒント

## ドキュメント構成

ドキュメントは `docs/` に章ごとのフォルダで整理します。

```text
docs/
  01_概要/
    01_概要.md
    02_基本.md
    99_参考サイト.md
```

基本ルール:

- 章フォルダ名は `NN_章タイトル` の形式にします。
- 章内の Markdown は `NN_タイトル.md` の形式にします。
- 表示順はファイル名先頭の番号で決まります。
- 各章の参考リンクは、章末尾の `NN_参考サイト.md` にまとめます。
- 通常の本文ファイル末尾には個別の参考サイト欄を作りません。

## Markdown 機能

- GitHub Flavored Markdown を表示できます。
- コードブロックは highlight.js でハイライトします。
- `mermaid` コードブロックは図として描画します。
- Markdown 内の外部リンクは別タブで開きます。
- 各ノートには直接リンクできる `Link` が表示されます。

## 公開

GitHub Pages は `.github/workflows/pages.yml` で公開します。

- `main` への push で GitHub Actions が実行されます。
- Node.js 22 で `npm ci`、`npm run typecheck`、`npm run build` を実行します。
- `dist` を GitHub Pages にデプロイします。
