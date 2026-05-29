# Domain Service を増やしすぎない

Domain Service は便利ですが、増やしすぎると業務ルールが Entity や Value Object から外へ流れます。結果として、モデルはデータ構造だけになりやすくなります。

Domain Service を作る前に、次を確認します。

| 確認 | 見直し先 |
| --- | --- |
| 単一の Entity の状態変更か | Entity のメソッド |
| 値の計算や制約か | Value Object |
| 複数 Aggregate にまたがる判断か | Domain Service |
| ユースケースの手順か | Application Service |

Domain Service は「どこにも置けない業務判断」の置き場です。「とりあえず Service」ではありません。

**Domain Service は最後の逃げ場ではなく、明確なドメイン概念として使う**のが安全です。
