# Application Service の実装

Application Service は、ユースケースの流れを表します。Repository から Aggregate を取得し、ドメインモデルのメソッドを呼び、保存します。

```csharp
public sealed class ConfirmOrderUseCase(IOrderRepository orders)
{
    public async Task ExecuteAsync(ConfirmOrderCommand command, CancellationToken ct)
    {
        var order = await orders.GetAsync(new OrderId(command.OrderId), ct);
        order.Confirm();
        await orders.SaveAsync(order, ct);
    }
}

public sealed record ConfirmOrderCommand(Guid OrderId);
```

Application Service に `if (order.Status == ...)` のような業務判断が増えたら、ドメインモデルへ移せないかを確認します。

**Application Service は判断の置き場ではなく、ユースケースの進行役**です。
