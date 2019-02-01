class AddDefaultForClubDeleted < ActiveRecord::Migration[5.2]
  def change
    remove_column :clubs, :deleted
    add_column :clubs, :deleted, :boolean, default: false
  end
end
