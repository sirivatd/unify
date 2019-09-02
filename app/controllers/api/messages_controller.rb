class Api::MessagesController < ApplicationController
  def create

  end

  def message_params
    params.require(:message).permit(:conversation_id, :body)
  end
end 