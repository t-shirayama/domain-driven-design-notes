# Domain Service

Domain Service は、特定の Entity や Value Object に自然に置けない業務ルールを表します。処理の主語が単一のオブジェクトではなく、複数の Aggregate や外部条件にまたがるときに使います。

ただし、Domain Service に業務処理を何でも集めると、ドメインモデルが貧血になります。まず Entity や Value Object に置けないかを確認します。

| 置き場所 | 向いている処理 |
| --- | --- |
| Entity | 自分の状態を変えるルール |
| Value Object | 値の制約や計算 |
| Domain Service | 複数のドメイン概念にまたがる判断 |
| Application Service | ユースケースの進行 |

Domain Service は状態を持たないことが多く、ドメイン層のインターフェースとして表すこともあります。

**Domain Service は、ドメイン上の判断だが単一オブジェクトに属さない処理**です。
