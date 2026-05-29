# Domain Event

Domain Event は、ドメイン内で起きた重要な事実を表します。命令ではなく、すでに起きたことなので、名前は過去形にします。

たとえば `OrderConfirmed` は「注文を確定しろ」ではなく「注文が確定された」という事実です。

```csharp
public sealed record OrderConfirmed(
    OrderId OrderId,
    DateTimeOffset ConfirmedAt);
```

Domain Event を使うと、ある Aggregate の状態変更をきっかけに別の処理を起動できます。メール送信、在庫引当、監査ログなどを直接 Entity に書かずに済みます。

ただし、Domain Event も乱用すると処理の流れが追いにくくなります。重要な事実だけをイベントにします。

**Domain Event は、ドメインで起きた重要な事実を明示するための型**です。
