class DeleteRunFollow < ActiveRecord::Migration[5.2]
  def change
    drop_table :run_follows
  end
end
