class RenameClubCreatorIdToOwnerId < ActiveRecord::Migration[5.2]
  def change
    remove_column :clubs, :creator_id

    add_column :clubs, :owner_id, :integer
    add_index :clubs, :owner_id
  end
end
