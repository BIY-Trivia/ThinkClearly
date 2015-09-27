ThinkClearly::Application.routes.draw do
  root 'categories#index'

  resources :categories do
    resources :images
  end
end
