# 課題1

### 自分の回答

- CHECK 制約とは
  - 指定した条件を満たすかチェック
  - 検査タイミングは書き込み時
- ステータスの数が増えた場合
  - なにかあるだろうか？
- ステータスの数が減った場合
  - 減った種類のデータがそのまま残る？
  - もしくは事前に減った種類のデータを書き換える必要がある

### 参考記事

- [サーティンワンフレーバー](https://qiita.com/aconit96/items/e3e92a69e168009ff64d)
  - 値のリストを取得できない
  - 各データベース製品で私用が統一されていない

# 課題2

```
TABLE Student {
	id: varchar
	name: varchar
	status_id: varchar
}

TABLE StudentStatus [
	id: varchar
	name: varchar
}
```

# 課題3

- EC サイトで商品の状態を表現するとき
