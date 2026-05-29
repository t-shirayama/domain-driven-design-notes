# Entity と Value Object の実装

C# では、Entity は `class`、Value Object は `record` や `record struct` で表すことが多いです。重要なのは構文ではなく、識別子で見るか、値で見るかです。

```csharp
public sealed class Order
{
    public OrderId Id { get; }
    public OrderStatus Status { get; private set; }
}

public readonly record struct OrderId(Guid Value);

public readonly record struct Money(decimal Amount, string Currency);
```

`Order` は同じ `OrderId` なら状態が変わっても同じ注文です。`Money` は `Amount` と `Currency` が同じなら同じ値として扱います。

Value Object には、作成時の検証を入れます。負の金額や空の通貨を作れないようにすると、呼び出し側の検証漏れに強くなります。

**型で業務上の意味を表す**と、プリミティブ型の引数が増えすぎるのを防げます。
