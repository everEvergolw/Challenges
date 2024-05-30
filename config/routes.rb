Rails.application.routes.draw do
  devise_for :users, controllers: {
        sessions: 'users/sessions',
        registrations: 'users/registrations',

      }

  
  #/api/v1/challenges
  #/api/v1/challenges
  #/api/v1/challenges/:id

  namespace :api do
    namespace :v1 do
      resources :challenges
      
    end
  end    



end
