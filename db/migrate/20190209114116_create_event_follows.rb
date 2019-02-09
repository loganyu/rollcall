class CreateEventFollows < ActiveRecord::Migration[5.2]
  def change
    create_table :event_follows do |t|
      t.integer :user_id, null: false
      t.integer :event_id, null: false

      t.timestamps
    end

    add_index :event_follows, :user_id
    add_index :event_follows, :event_id
    add_index :event_follows, [:user_id, :event_id], unique: true
  end
end
