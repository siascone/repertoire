class AddUserDataColumns < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :bio, :text
    add_column :users, :headline, :string
    add_column :users, :f_name, :string
    add_column :users, :l_name, :string
    add_column :users, :photo_url, :string
  end
end
