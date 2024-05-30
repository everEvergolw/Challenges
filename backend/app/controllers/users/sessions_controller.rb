# frozen_string_literal: true

class Users::SessionsController < Devise::SessionsController
  include RackSessionFix

  respond_to :json

  private

  def respond_with(resource, _opts = {})
    if resource.id.nil?
      render json: {
        message: 'Login failed.',
        data: resource
      }, status: :unauthorized
    else
      render json: {
        message: 'Logged in successfully.',
        data: resource
      }, status: :ok
    end
  end

  def respond_to_on_destroy
    if current_user
      render json: {
        message: "Logged out successfully"
      }, status: :ok
    else
      render json: {
        message: "Couldn't find an active session."
      }, status: :unauthorized
    end
  end
end
