Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create] do
      resources :items, only: [:create, :index, :show, :update]
      resources :listed_items, only: [:index]
    end
    get '/categories', to: 'categories#index'
    get '/items', to: 'items#index'
    resource :session, only: [:create, :destroy, :show]
  end
  
  root "static_pages#root"
end
