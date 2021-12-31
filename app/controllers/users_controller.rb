class UsersController < ApplicationController
    
    def index
        render json: User.all
    end

    def show
        if current_user
            render json: current_user, status: :ok
        else 
            render json: "Not authenticated", status: :unauthorized
        end 
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    # def update

    # end

    def destroy
        # TODO: Verify you are logged in as this user first
        user = User.find(params[:id])
        user.destroy
        head :no_content
    end

    private

    def user_params
        params.permit(:email, :username, :password, :gender, :picture)
    end
end
