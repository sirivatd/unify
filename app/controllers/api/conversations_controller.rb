class Api::ConversationsController < ApplicationController
  def index
    @conversations = Conversation.where('recipient_id=? OR sender_id=?', current_user.id, current_user.id)
  end
end