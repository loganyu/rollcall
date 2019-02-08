class EventAddAddressRemoveLocation < ActiveRecord::Migration[5.2]
  def change
    remove_column :events, :location
    add_column :events, :address, :string
  end
end
