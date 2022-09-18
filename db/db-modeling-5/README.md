# 課題1

### 回答

```mermaid
erDiagram

writers ||--o{ articles : many
writers ||--o{ edit_articles : many
writers {
  int id
  string name
}

articles ||--|{ edit_articles : many
articles {
  int id PK
  int writer_id FK
  string title
  string body
  datetime last_edited_at
}

edit_articles {
  int article_id PK "FK"
  datetime edited_at PK
  int edit_writer_id FK
  string title
  string body
}

```

# 課題2

### 分析のみに利用するデータでも DB に保存しておくべきか？(ドメイン領域では使用しない履歴データなど)

- 結論
  - BI ツールに保存したほうが筋がいい気がする
    - DB の目的はアプリケーションで使用するデータの保存
    - DB でもなしではないが、BI ツールでも良い
- メリデメ整理
  - DB に保存
    - メリット
      - データの整合性を DB 制約レベルで保てる
      - SQL による柔軟なデータ検索
    - デメリット
      - 実アプリケーションでは使用しないデータの存在
        - 不要な情報があることによる混乱
        - 本処理では使用しないエンティティ
  - BI ツールに保存
    - メリット
      - エンジニア以外の人でも扱うことができる
    - デメリット
      - どのみちデータを保存するための処理が必要

### 履歴データの表現の別の方法は？そのメリデメは？

- 1つのテーブルのみでデータを表現する
  - 構成
    - 履歴テーブル = エンティティの役割 + 履歴の役割
  - メリット
    - データ容量が少なくなる
    - 更新テーブルが 1つ で良い
  - デメリット
    - 2つの役割が混合している
    - 最新エンティティのみの一覧取得がやりにくい










