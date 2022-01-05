class ImagesController < ApplicationController
    def index
        images = Image.all
        render json: images
    end

    def create
        if @current_user
            image = Image.create!(image_params)
            render json: image, status: :created
        else
            render json: {errors: ["You are not logged in"]}, status: :unauthorized
        end
    end

    private

    def image_params
        params.permit(:name, :url, :item_id)
    end
end
