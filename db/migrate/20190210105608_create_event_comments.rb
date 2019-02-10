class CreateEventComments < ActiveRecord::Migration[5.2]
  def change
    create_table :event_comments do |t|
      t.text :body, null: false
      t.integer :event_id, null: false
      t.integer :user_id, null: false

      t.timestamps
    end

    add_index :event_comments, :event_id
    add_index :event_comments, :user_id
  end
end
