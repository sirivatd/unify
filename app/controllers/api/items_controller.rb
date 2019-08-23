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
    params.require(:item).permit(:category, :description, :price, :subtitle, :name, :condition)
  end
end