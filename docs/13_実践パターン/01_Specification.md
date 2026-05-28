# Specification

Specification は、業務条件をオブジェクトとして表すパターンです。条件が複数箇所で使われる場合や、条件に名前を付けたい場合に使います。

```csharp
public sealed class CanConfirmOrderSpecification
{
    public bool IsSatisfiedBy(Order order)
        => order.Status == OrderStatus.Draft && order.Lines.Any();
}
```

ただし、単純な条件まで Specification にすると過剰です。Entity のメソッド内に置いた方が自然なルールもあります。

**Specification は、再利用したい業務条件に名前を付けるための道具**です。
