class CreateClubLeadersClubsJoinTable < ActiveRecord::Migration[5.2]
  def change
    create_table :club_leader_clubs do |t|
      t.integer :user_id, null: false
      t.integer :club_id, null: false

    t.timestamps
    end
    add_index :club_leader_clubs, :user_id
    add_index :club_leader_clubs, :club_id
    add_index :club_leader_clubs, [:user_id, :club_id], unique: true
  end
end
