class RemoveContentFromArticles < ActiveRecord::Migration[7.2]
  def change
    remove_column :articles, :text
  end
end
