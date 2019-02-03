class AddUserandClubToEvents < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :user_id, :integer
    add_column :events, :club_id, :integer

    add_index :events, :user_id
    add_index :events, :club_id
  end
end
