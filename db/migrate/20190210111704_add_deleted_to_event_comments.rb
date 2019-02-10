class AddDeletedToEventComments < ActiveRecord::Migration[5.2]
  def change
    add_column :event_comments, :deleted, :boolean, default: false
  end
end
