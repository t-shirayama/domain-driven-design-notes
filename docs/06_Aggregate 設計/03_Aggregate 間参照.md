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

ID 参照にすると、必要な情報を毎回問い合わせるか、注文側にスナップショットとして残すかを選べます。参照先の最新状態が必要なのか、取引時点の情報が必要なのかで決めます。

Aggregate 間の参照を減らす目的は、関連を消すことではありません。境界を越えた状態変更を簡単に起こせないようにすることです。

**Aggregate 間は ID でつなぎ、必要な情報だけを境界内に持つ**のが基本です。
