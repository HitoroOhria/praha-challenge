# 課題1

### 回答

```mermaid
erDiagram

member ||--o{ tasks : "many"
member }|--|| task_assigned_members : "many"
member {
  int id PK
  string name
}

tasks ||--o{ task_assigned_members : "many"
tasks ||--|| remind_type : "one"
tasks ||--o| minute_reminders : "one"
tasks ||--o{ weekly_reminder_days : "many"
tasks ||--o| monthly_reminders : "one"
tasks {
  int id PK
  int request_user_id FK
  int remind_type FK
  string text
  boolean done
  date start_day
  int remind_period_minute
}

task_assigned_members {
  int task_id FK
  int assinged_member_id FK 
}

remind_type {
  int id PK "0: 毎分, 1: 毎週の曜日, 2: 毎月の日付"
  string name
}

minute_reminders {
  int task_id FK
  datetime start_time
  int remind_minute
}

weekly_reminder_days |o--|| days : "one"
weekly_reminder_days {
  int task_id FK
  int day_id 
}

monthly_reminders {
  int task_id PK "FK"
  int month 
  int day
}

days {
  int id PK "0: 月, 1: 火, 2: 水, 3: 木, 4: 金, 5: 土, 6: 日"
  string name
}
```

### テーブルの説明

- member: メンバー
- tasks: タスク
- task_assigned_members: タスクとアサインされたメンバーの中間テーブル
- remind_type: リマインドの種類
- minute_reminders: 毎分ごとリマインド
  - X分ごと、X時間ごと、毎日、X日ごと、X週ごとを扱う
- weekly_reminder_days: 毎週の曜日ごとリマインド
  - 毎週X曜日ごと、毎週平日ごと、毎週X曜日とX曜日と...ごとを扱う
  - 曜日は複数指定できる
- monthly_reminders: 毎月の日付ごとリマインド
  - 毎月X日ごとを扱う
  - 仕様として毎月のリマンドでは単一日のみの指定としました

### 考えたこと

- ユーザーの命名を何にするか？
  - 結論
    - member とする
  - 理由
    - Slack のドメインで使用されている用語と合わせるため
      - 前提として、本アプリはビジネス上 Slack 以外の展開の可能性は低いとした
- 曜日ごとのリマンドテーブルで、曜日を Enum テーブルに切り出すかどうか？
  - 結論
    - 切り出す
  - 理由
    - 正規化するため
      - 正直切り出さなくても良いが、できるかぎり正規化してみる
- タスクとリマンドタイプの関係を、テーブル上どのように表現するか？
  - 結論
    - リマンドタイプごとにテーブルを用意する
  - 理由
    - 正規化するため
      - すべてタスクテーブルに集めると、NULL となるカラムが出てくる
      - リマンドタイプごとにテーブルが増えるデメリットがあるが、正規化してみる
