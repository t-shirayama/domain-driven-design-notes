# Repository Interface と EF Core

Repository Interface は Application 側に置き、EF Core を使った実装は Infrastructure 側に置きます。UseCase は `DbContext` を知らず、抽象に依存します。

```csharp
public interface IOrderRepository
{
    Task<Order> GetAsync(OrderId id, CancellationToken ct);
    Task SaveAsync(Order order, CancellationToken ct);
}

public sealed class EfOrderRepository(OrderingDbContext db) : IOrderRepository
{
    public Task<Order> GetAsync(OrderId id, CancellationToken ct)
        => db.Orders.SingleAsync(order => order.Id == id, ct);

    public Task SaveAsync(Order order, CancellationToken ct)
        => db.SaveChangesAsync(ct);
}
```

EF Core のマッピング都合でドメインモデルを壊しすぎないようにします。必要なら private field mapping や owned entity を使います。

**Repository 実装は技術詳細、Repository Interface はユースケース側の要求**として分けます。
