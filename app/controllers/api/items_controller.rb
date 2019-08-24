class Api::ItemsController < ApplicationController
  def create
    @category = Category.find_by(name: item_params[:category])
    @condition = Condition.find_by(name: item_params[:condition])
    @item = Item.new(name: item_params[:name], description: item_params[:description], price: item_params[:price], subtitle: item_params[:subtitle], condition_id: @condition&.id, category_id: @category&.id)

    if @item.save
      render "api/items/show_item"
    else
      render json: @item.errors.full_messages, status: 422
    end
  end

  def item_params
    params.require(:item).permit(:category, :description, :price, :subtitle, :name, :condition, :user_id)
  end
end