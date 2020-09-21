class CreateSubjects < ActiveRecord::Migration[6.0]
  def change
    create_table :subjects do |t|
      t.string :name
      t.integer :price
      t.text :short_description
      t.text :long_description
      t.string :user_id

      t.timestamps
    end
  end
end
