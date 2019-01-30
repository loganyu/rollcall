class CreateMembersClubs < ActiveRecord::Migration[5.2]
  def change
    create_table :members_clubs do |t|
      t.integer :user_id, null: false
      t.integer :club_id, null: false

      t.timestamps
    end
    add_index :members_clubs, :user_id
    add_index :members_clubs, :club_id
    add_index :members_clubs, [:user_id, :club_id], unique: true
  end
end
