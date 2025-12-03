class CreateExpenses < ActiveRecord::Migration[7.2]
  def change
    create_table :expenses do |t|
      t.references :trip, null: false, foreign_key: true
      t.decimal :amount
      t.string :description
      t.integer :paid_by
      t.string :owed_by

      t.timestamps
    end
  end
end
