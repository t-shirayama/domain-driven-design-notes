# Integration Event との違い

Domain Event は、同じ境界づけられたコンテキスト内のドメイン上の事実を表します。Integration Event は、他のシステムやコンテキストへ通知するためのメッセージです。

| 種類 | 目的 | 例 |
| --- | --- | --- |
| Domain Event | 内部のドメイン処理を分離する | `OrderConfirmed` |
| Integration Event | 外部へ事実を通知する | `OrderConfirmedIntegrationEvent` |

Domain Event をそのまま外部公開すると、内部モデルの変更が外部契約に影響します。外部に出す場合は、Integration Event として変換します。

Integration Event は互換性を考えます。イベント名、フィールド、バージョン、再送、冪等性が重要になります。

**内部の事実と外部への契約は分けて考える**のが安全です。
