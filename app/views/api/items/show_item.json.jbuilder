json.set! @item.id do
  json.extract! @item, :id, :description, :price, :subtitle, :name, :user_id, :expiration_date, :condition, :school_id, :created_at, :updated_at
end