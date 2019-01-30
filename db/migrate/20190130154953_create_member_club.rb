class CreateMemberClub < ActiveRecord::Migration[5.2]
  def change
    create_table :member_clubs do |t|
      t.integer :user_id, null: false
      t.integer :club_id, null: false

      t.timestamps
    end
    add_index :member_clubs, :user_id
    add_index :member_clubs, :club_id
    add_index :member_clubs, [:user_id, :club_id], unique: true
  end
end
