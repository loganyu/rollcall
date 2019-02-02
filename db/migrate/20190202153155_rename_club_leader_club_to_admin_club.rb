class RenameClubLeaderClubToAdminClub < ActiveRecord::Migration[5.2]
  def change
    drop_table :club_leader_clubs

    create_table :admin_clubs do |t|
      t.integer :user_id, null: false
      t.integer :club_id, null: false

    t.timestamps
    end
    add_index :admin_clubs, :user_id
    add_index :admin_clubs, :club_id
    add_index :admin_clubs, [:user_id, :club_id], unique: true
  end
end
