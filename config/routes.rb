Rails.application.routes.draw do
  root to: 'subjects#index'
  #get'about', to: 'subjects#about'
  #get'show', to: 'subjects#show'
  #get'index', to: 'subjects#index'
  #resources :subjects, only: [ :index ]
  resources :subjects, only: [:index, :show]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
