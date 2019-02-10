Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"
  
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :clubs, only: [:index, :show, :create, :destroy, :update] do
      resources :members, only: [:create, :destroy]
      resources :admins, only: [:create, :destroy]
      resources :events,  only: [:index, :show, :create, :destroy, :update]
    end
    resources :events, :only => [] do
      resource :event_follows, only: [:create, :destroy], shallow: true
      resource :event_comments, only: [:create, :destroy, :index]
    end
  end
end
