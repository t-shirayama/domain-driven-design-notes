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

**DTO とドメインモデルは、変更理由が違うため分けて考える**のが基本です。
