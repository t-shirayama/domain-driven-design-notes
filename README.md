# Domain-Driven Design Notes

ドメイン駆動設計の概念と .NET/C# での実装パターンを整理する学習メモです。

`docs/` 配下の Markdown を React / Vite で読み込み、GitHub Pages に公開します。

## このリポジトリで扱うこと

- DDD の目的と向いている場面
- ユビキタス言語、境界づけられたコンテキスト、コンテキストマップ
- Entity、Value Object、Aggregate、Domain Service
- Application Service、DTO、トランザクション境界
- Repository、ORM との距離、Infrastructure への依存分離
- Domain Event と Integration Event
- .NET/C# での小さな実装例
- よくある迷いどころとアンチパターン

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
  01_DDD の全体像/
    01_DDD とは何か.md
    02_DDD が向いている場面.md
    03_このリポジトリで扱う範囲.md
    04_参考サイト.md
  02_戦略的設計/
    01_ユビキタス言語.md
    02_境界づけられたコンテキスト.md
    03_コンテキストマップ.md
    04_腐敗防止層.md
    05_参考サイト.md
  08_DotNet での実装例/
    01_小さな注文モデル.md
    02_Entity と Value Object の実装.md
    03_Aggregate の実装.md
    04_Application Service の実装.md
    05_Repository Interface と EF Core.md
    06_参考サイト.md
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
- 全体像の draw.io 図は `public/ddd-overview.drawio` にあります。diagrams.net に読み込むと編集できます。

## 公開

GitHub Pages は `.github/workflows/pages.yml` で公開します。

- `main` への push で GitHub Actions が実行されます。
- Node.js 22 で `npm ci`、`npm run typecheck`、`npm run build` を実行します。
- `dist` を GitHub Pages にデプロイします。
