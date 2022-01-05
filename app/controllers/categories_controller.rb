class CategoriesController < ApplicationController
    def index
        categories = Category.all
        render json: categories
    end

    def create
        if @current_user
            category = Cateogry.create!(category_params)
            render json: category, status: :created
        else
            render json: {errors: ["You are not logged in"]}, status: :unauthorized
        end
    end

    private

    def category_params
        params.permit(:name)
    end
end
