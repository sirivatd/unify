# == Schema Information
#
# Table name: conversations
#
#  id           :bigint           not null, primary key
#  recipient_id :integer
#  sender_id    :integer
#  item_id      :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

require 'test_helper'

class ConversationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
