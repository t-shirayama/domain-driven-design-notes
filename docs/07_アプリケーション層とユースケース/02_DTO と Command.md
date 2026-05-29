# DTO と Command

DTO は、層やプロセスの境界を越えるためのデータ構造です。API のリクエスト、レスポンス、画面表示、メッセージ送信などで使います。

Command は、ユーザーや外部システムが実行したい操作を表します。`CreateOrderCommand` や `ConfirmOrderCommand` のように、ユースケースの入力を明示できます。

```csharp
public sealed record ConfirmOrderCommand(Guid OrderId);

public sealed record OrderResponse(
    Guid Id,
    string Status,
    decimal TotalAmount);
```

DTO をそのまま Entity にしないことが大切です。DTO は通信や表示の都合で変わり、Entity は業務ルールで変わります。

Command は「何をしたいか」を表す入力です。Response DTO は「結果をどう返すか」を表します。どちらもドメインモデルそのものではなく、ユースケースの境界で使う形です。

同じ値を持っていても、変更理由が違うなら型を分けます。API の項目名変更で Entity が揺れる状態は、境界が近すぎる合図です。

**DTO とドメインモデルは、変更理由が違うため分けて考える**のが基本です。
