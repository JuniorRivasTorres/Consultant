Rails.application.routes.draw do
  get'about', to: 'subjects#about'
  get'show', to: 'subjects#show'
 resources :subjects, only: [ :show, :index ]

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
