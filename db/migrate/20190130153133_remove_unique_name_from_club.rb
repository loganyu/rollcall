class RemoveUniqueNameFromClub < ActiveRecord::Migration[5.2]
  def change
    remove_index :clubs, :name
    add_index :clubs, :name
  end
end
