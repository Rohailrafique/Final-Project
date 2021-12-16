class UsersController < ApplicationController
    def index
        render json: User.all.order(id: :desc)
    end
end
