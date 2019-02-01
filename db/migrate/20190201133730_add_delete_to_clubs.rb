class AddDeleteToClubs < ActiveRecord::Migration[5.2]
  def change
    add_column :clubs, :deleted, :boolean
  end
end
