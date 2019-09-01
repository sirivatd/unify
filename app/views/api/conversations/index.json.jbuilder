@conversations.each do |conversation|
  json.set! conversation.id do
    json.extract! conversation, :id, :recipient_id, :sender_id, :item_id, :created_at, :updated_at
  end
end