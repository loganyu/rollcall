class AddCreatorIdToClub < ActiveRecord::Migration[5.2]
  def change
    add_column :clubs, :creator_id, :integer

    add_index :clubs, :creator_id
  end
end
