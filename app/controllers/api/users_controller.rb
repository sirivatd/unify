class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    @user.assign_attributes({ school_id: 1})
    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:email_address, :password, :first_name, :last_name)
  end
end
