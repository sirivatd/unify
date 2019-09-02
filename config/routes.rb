Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create] do
      resources :items, only: [:create, :index, :show, :update]
      resources :listed_items, only: [:index]
      resources :messages, only: [:create]
    end
    get '/categories', to: 'categories#index'
    get '/items', to: 'items#index'
    get '/conversations', to: 'conversations#index'
    resource :session, only: [:create, :destroy, :show]
    resource :favorites, only: [:create, :destroy]
    get '/favorites', to: 'favorites#index'
    get '/favorite_items', to: 'items#favorite_items'
    get '/category_items', to: 'items#category_items'
    get '/messages', to: 'messages#index'
    post '/conversations', to: 'conversations#create'
  end
  
  root "static_pages#root"
end
