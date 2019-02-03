class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string    :name, null: false
      t.string    :location
      t.text      :description
      t.text      :schedule
      t.boolean   :beginners_welcome
      t.string    :workout_type

      t.timestamps
    end
  end
end
