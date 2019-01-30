class CreateClubs < ActiveRecord::Migration[5.2]
  def change
    create_table :clubs do |t|
      t.string :name, null: false
      t.string :city, null: false
      t.text   :description

      t.timestamps
    end
  end
end
