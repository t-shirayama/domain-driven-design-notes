# Aggregate 間参照

Aggregate 間は、オブジェクト参照ではなく ID 参照にすることが多いです。直接参照すると、境界を越えて状態変更しやすくなります。

```csharp
public sealed class OrderLine
{
    public ProductId ProductId { get; }
    public Money UnitPrice { get; }
    public int Quantity { get; }
}
```

`OrderLine` が `Product` Entity を直接持つと、注文の変更時に商品 Aggregate の状態まで意識しやすくなります。注文時点の価格や商品名が必要なら、注文側の Value Object として保持します。

**Aggregate 間は ID でつなぎ、必要な情報だけを境界内に持つ**のが基本です。
