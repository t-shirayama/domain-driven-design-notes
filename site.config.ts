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
  repositoryName: "domain-driven-design-notes",
  siteTitle: "Domain-Driven Design Notes",
  siteDescription: "ドメイン駆動設計の概念と .NET/C# での実装パターンを整理した学習メモです。",
  brandMark: "DDD",
  brandSubtitle: "Domain-Driven Design notes",
  homeEyebrow: "Notes",
  homeTitle: "ドメイン駆動設計メモ",
  homeDescription:
    "ドメインの理解、境界づけられたコンテキスト、集約、アプリケーション層、永続化、ドメインイベントを短く整理します。",
  emptyDocsHint: "docs/01_DDD の全体像/01_DDD とは何か.md を追加すると、章一覧に表示されます。",
};
