# Factory

Factory は、複雑な生成手順を隠し、正しい状態のオブジェクトを作るために使います。生成時に複数の Value Object や初期イベントが必要な場合に役立ちます。

```csharp
public sealed class OrderFactory
{
    public Order Create(CustomerId customerId, DateTimeOffset now)
    {
        var order = Order.CreateDraft(customerId, now);
        return order;
    }
}
```

コンストラクタで十分なら Factory は不要です。生成ルールが増え、呼び出し側に知識が漏れ始めたら検討します。

**Factory は、生成の複雑さをドメインの言葉で閉じ込める**ために使います。
