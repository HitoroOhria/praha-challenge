# 課題1

### 回答

```mermaid
erDiagram

users ||--o{ create_directory_events : "1:N"
users ||--o{ update_directory_events : "1:N"
users ||--o{ delete_directory_events : "1:N"
users ||--o{ create_document_events : "1:N"
users ||--o{ update_document_events : "1:N"
users ||--o{ delete_document_events : "1:N"
users {
  id int PK
}

create_directory_events ||--|| directories : "1:1"
create_directory_events {
  user_id int PK
  directory_id int PK
  created_at datetime
}

update_directory_events ||--|| directories : "1:1"
update_directory_events {
  user_id int PK
  directory_id int PK
  name string
  updated_at datetime
}

delete_directory_events ||--|| directories : "1:1"
delete_directory_events {
  user_id int PK
  directory_id int PK
  deleted_at datetime
}

directories ||--o{ directory_closure : "1:N"
directories ||--|{ documents : "1:N"
directories {
  id int PK
  name string
}

directory_closure ||--|{ directories : "1:N"
directory_closure {
  parent_id int PK
  child_id int PK
}

create_document_events ||--|| documents : "1:1"
create_document_events {
  user_id int PK
  document_id int PK
  created_at datetime
}

update_document_events ||--|| documents : "1:1"
update_document_events {
  user_id int PK
  document_id int PK
  text string
  updated_at datetime
}

delete_document_events ||--|| documents : "1:1"
delete_document_events {
  user_id int PK
  directory_id int PK
  deleted_at datetime
}

documents {
  id int PK
  document_id int FK
  text text
}

```

### テーブル説明

- users: ユーザー
- directory_XXX_events: ディレクトリのイベント
- directories: ディレクトリ
- directory_closure: ディレクトリの閉包テーブル
- document_XXX_events: ドキュメントのイベント
- documents: ドキュメント

### 考えたこと

- イベントテーブルをCRUDごとに複数持つか？1つにまとめてフラグで区別するか？
    - 結論
        - わける
    - 理由
        - イベントが異なるため
        - 1つのテーブルで管理するデメリット
            - NULLカラム
                - イベントごとに保存したい情報が違った場合、他のイベントでは NULL となるカラムが発生する
            - 何でもテーブルになりがち
                - とりあえず対象に関するイベントは全部入れる運用になるリスクがある

# 課題2

## ディレクトリ内のドキュメントの順番を変更できる

### 回答

### 考えたこと

ドキュメントテーブルに順番を表現する数値カラムを追加する。 イベントテーブルは作成しない

```mermaid
erDiagram

documents ||--|| document_orders : "1:1"
documents {
  id int PK
  document_id int FK
  order_number int
  text text
}

document_orders {
  document_id int PK
  previous_document_id int FK "NULL可(先頭のドキュメントを表現するため)"
  next_document_id int FK "NULL可(最後尾のドキュメントを表現するため)"
}
```

- ドキュメントの順番をどのように表現するか？
    - 連番で表現する
        - 入れ替えの変更が複数レコードに渡る
    - 何かしらの time 系で表現する
        - 上手く表現できれば、入れ替えの変更レコード数を小さくできるかも
    - 別テーブルで連番で表現する
        - あまり意味はない
    - ディレクトリテーブルに配列型を持つ
        - 第一正規形に反する
    - New!! 双方向リストを持つ
- 考えるべきリスクは何か？
    - 順番を入れ替えるときのコスト
    - 他のディレクトリへ移動させるときのコスト
- 入れ替えたときのイベントもテーブルとして表現すべきか？
    - どのように表現したらいい？
    - このイベントは重要か？
    - 全イベントを表現すべきか、重要なもののみに絞るべきか？

## 順番はユーザー間で共有される

順番はドキュメントに保持しているため、前課題の構成から変更はない

## food for thought

のちほど追記