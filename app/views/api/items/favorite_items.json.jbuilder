@favorite_items.each do |item|
  json.set! item.id do
      json.extract! item, :id, :description, :price, :subtitle, :name, :user_id, :image_urls, :category
  end
end