# Entity

Entity は、属性ではなく同一性で識別するオブジェクトです。名前や状態が変わっても、同じものとして追跡したい場合に Entity として扱います。

たとえば注文は、配送先や状態が変わっても同じ注文です。この場合は `OrderId` のような識別子を持たせます。

```csharp
public sealed class Order
{
    public OrderId Id { get; }
    public OrderStatus Status { get; private set; }

    public void Confirm()
    {
        if (Status != OrderStatus.Draft)
            throw new InvalidOperationException("下書き以外は確定できません。");

        Status = OrderStatus.Confirmed;
    }
}
```

Entity には業務ルールを置きます。状態を書き換えるだけの `set` を公開すると、ルールを通らない変更が増えます。

**Entity は、識別子と状態変更のルールを持つドメインオブジェクト**です。
