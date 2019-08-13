# == Schema Information
#
# Table name: items
#
#  id              :bigint           not null, primary key
#  description     :text             not null
#  price           :float
#  subtitle        :string
#  name            :string           not null
#  user_id         :integer
#  expiration_date :date
#  condition       :string
#  school_id       :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Item < ApplicationRecord

  validates :name, presence: true
  validates :condition, presence: true
  validates :price, presence: true

  has_many :item_images
end
