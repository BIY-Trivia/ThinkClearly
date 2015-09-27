class CreateImages < ActiveRecord::Migration
  def change
    create_table :images do |t|
      t.string :answer
      t.references :category, index: true

      t.timestamps
    end
  end
end
