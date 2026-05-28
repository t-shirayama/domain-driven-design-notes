# Outbox Pattern

Outbox Pattern は、DB 更新と外部メッセージ送信の不整合を減らすためのパターンです。Aggregate の保存と同じトランザクションで Outbox テーブルにメッセージを保存し、別プロセスが送信します。

```mermaid
sequenceDiagram
  participant U as UseCase
  participant D as Database
  participant O as Outbox Table
  participant P as Publisher
  participant B as Broker

  U->>D: Aggregate を保存
  U->>O: Event を保存
  P->>O: 未送信 Event を取得
  P->>B: publish
  P->>O: 送信済みにする
```

Outbox では、再送と冪等性が前提になります。受信側も同じメッセージを複数回受け取る可能性を考えます。

**外部送信は、DB トランザクションの外にある副作用として扱う**必要があります。
