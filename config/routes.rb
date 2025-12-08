Rails.application.routes.draw do
  #get 'home', to: 'static_pages#home'
  root "static_pages#home" 
  get 'about', to: 'static_pages#about'
  #------------------------------------------------------
  get 'users', to: 'users#index'
  get 'users/new', to: 'users#new', as: 'new_user'
  get 'users/:id', to: 'users#show', as: 'user'
  post 'users', to: 'users#create'  
  delete 'users/:id',to: 'users#destroy'
  get 'users/:id/edit', to: 'users#edit', as: 'edit_user'
  patch 'users/:id', to: 'users#update'
  post 'users/validate_ids', to: 'users#validate_ids'
  #------------------------------------------------------
  get 'trips', to: 'trips#index', as: 'trip_index'
  get 'trips/new_trip', to: 'trips#new', as: 'new_trip'
  get 'trips/:id', to: 'trips#show', as: 'trip'
  post 'trips', to: 'trips#create'  
  delete 'trips/:id',to: 'trips#destroy'
  get 'trips/:id/edit', to: 'trips#edit', as: 'edit_trip'
  patch 'trips/:id', to: 'trips#update'  
  #------------------------------------------------------
  get 'trips/:trip_id/expenses/new', to: 'expenses#new', as: 'new_trip_expense'
  post 'trips/:trip_id/expenses', to: 'expenses#create', as: 'trip_expenses'
  get 'trips/:trip_id/expenses', to: 'expenses#index', as: 'trip_expenses_index'
end
