@items.each do |item|
  json.set! item.id do
    json.extract! item, :name, :id, :description, :price, :subtitle, :condition_name, :created_at, :category_name, :image_urls, :seller_name, :user_id
  end
end