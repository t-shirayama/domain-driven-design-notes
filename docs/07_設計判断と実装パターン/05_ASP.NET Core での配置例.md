# ASP.NET Core での配置例

ASP.NET Core では、DDD のレイヤーをプロジェクトやフォルダで分けます。最初から細かく分けすぎず、依存方向を守れる単位で始めるのが現実的です。

```text
src/
  Ordering.Api/
    Controllers/
    Program.cs
  Ordering.Application/
    UseCases/
    Ports/
  Ordering.Domain/
    Orders/
    Shared/
  Ordering.Infrastructure/
    Persistence/
    ExternalServices/
```

`Ordering.Api` は HTTP の受け口です。Controller は Command を作って UseCase を呼び、業務判断は持たせません。

`Ordering.Application` はユースケースとポートを置きます。`IOrderRepository` のような抽象はここに置くと、UseCase が Infrastructure の実装を知らずに済みます。

`Ordering.Domain` は Entity、Value Object、Aggregate、Domain Event を置きます。ASP.NET Core や EF Core に依存しない状態を目指します。

`Ordering.Infrastructure` は EF Core の `DbContext`、Repository 実装、外部 API アダプターを置きます。

**ASP.NET Core の機能は外側に置き、ドメインモデルを内側に残す**のが基本です。
