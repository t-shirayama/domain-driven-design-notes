# Aggregate の実装

Aggregate Root は、外部から操作できる入口です。内部の Entity やコレクションを直接変更させず、メソッドを通して不変条件を守ります。

```csharp
public sealed class Order
{
    private readonly List<OrderLine> _lines = [];

    public IReadOnlyCollection<OrderLine> Lines => _lines;
    public OrderStatus Status { get; private set; } = OrderStatus.Draft;

    public void AddLine(ProductId productId, Money unitPrice, int quantity)
    {
        if (Status != OrderStatus.Draft)
            throw new InvalidOperationException("下書き以外は明細を変更できません。");

        _lines.Add(new OrderLine(productId, unitPrice, quantity));
    }
}
```

`Lines` を読み取り専用で公開し、変更は `AddLine` に集約します。これにより、確定後に明細を追加するような不正な変更を防げます。

**Aggregate の実装では、コレクションを守ることが重要**です。
