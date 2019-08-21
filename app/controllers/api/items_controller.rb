class Api::ItemsController < ApplicationController
  def create
    @item = Item.new(item_params)
    if @item.save
      render "api/items/show_item"
    else
      render json: @item.errors.full_messages, status: 422
    end
  end

  def item_params
    params.require(:item).permit(:description, :price, :subtitle, :name, :expiration_date, :condition, :user_id, :school_id)
  end
end