class CreateClubLeaderClubs < ActiveRecord::Migration[5.2]
  def change
    create_table :club_leader_clubs do |t|

      t.timestamps
    end
  end
end
