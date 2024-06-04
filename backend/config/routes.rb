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
      resources :challenges do
        collection do
          get :active_and_upcoming  # Change here from put to get
        end
      end
    end
  end



end
