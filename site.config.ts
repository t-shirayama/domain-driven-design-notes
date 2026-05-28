export type SiteConfig = {
  repositoryName: string;
  siteTitle: string;
  siteDescription: string;
  brandMark: string;
  brandSubtitle: string;
  homeEyebrow: string;
  homeTitle: string;
  homeDescription: string;
  emptyDocsHint: string;
};

export const siteConfig: SiteConfig = {
  repositoryName: "github-pages-notes-template",
  siteTitle: "Notes Template",
  siteDescription: "Markdown notes published with React, Vite, and GitHub Pages.",
  brandMark: "NT",
  brandSubtitle: "Markdown notes for GitHub Pages",
  homeEyebrow: "Notes",
  homeTitle: "学習メモテンプレート",
  homeDescription:
    "docs 配下の Markdown を章ごとに読み込み、GitHub Pages で公開するためのテンプレートです。",
  emptyDocsHint: "docs/01_概要/01_概要.md を追加すると、章一覧に表示されます。",
};
