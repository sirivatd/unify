class Api::ItemsController < ApplicationController
  def index
    @items = Item.where(school_id: current_user.school_id).order({ created_at: :desc }).limit(50)
  end

  def create
    @images = item_params[:images]
    @category = Category.find_by(name: item_params[:category])
    @condition = Condition.find_by(name: item_params[:condition])
    @item = Item.new(name: item_params[:name], description: item_params[:description], price: item_params[:price], subtitle: item_params[:subtitle], condition_id: @condition&.id, category_id: @category&.id, school_id: current_user.school_id, user_id: current_user.id)


    if @item.save
      # create item images
      @images.each do |image|
        ItemImage.create(item_id: @item.id, image_url: image)
      end

      render "api/items/show_item"
    else
      render json: @item.errors.full_messages, status: 422
    end
  end

  def listed_items
    @listed_items = Item.where(user_id: current_user.id)
  end

  def item_params
    params.require(:item).permit(:category, :description, :price, :subtitle, :name, :condition, :user_id, {images: []}, {categories: []}, {conditions: []}, :image, :url)
  end
end