class ItemsController < ApplicationController
    # before_action :set_items, only: [:show, :update, :destroy]
    # before_action :is_authorized, only: [:update, :destroy]

    def index
        items = Item.where(sold: false)
        render json: items
    end

    # def show
    #     if @item 
    #         render json: @item 
    #     else 
    #         render json: { error: "Item does not exist" }, status: :not_found
    #     end
    # end

    def show 
        items = find_items
        render json: items
    end

    def create
        if @current_user
            item = @current_user.sold_items.create!(item_params)
            render json: item, status: :created
        else
            render json: {errors: ["You are not logged in"]}, status: :unauthorized
        end
    end

    # def update
    #     if @current_user
    #         item = @current_user.items.find(params[:id])
    #         item.update!(item_params)
    #         render json: item, status: :ok
    #     else
    #         render json: {errors: ["You are not logged in"]}, status: :unauthorized
    #     end
    # end
    def update
        items = find_items
        items.update!(item_params)
        render json: items
    end

    # def destroy
    #     item = Item.find(params[:id])
    #     if @current_user.id == item.user_id
    #          item.destroy
    #         render json: {message: "deleted"}
    #     else
    #         render json: {errors: ["Can't delete other user's item"]}, status: :unauthorized
    #     end
    def destroy
        item = find_items
        item.destroy!
        head :no_content
    end
    

    private

    def item_params
        params.permit(:name, :image, :description, :price, :colour, :seller_id)
    end

    def set_items 
        @item = Item.find_by(id: params[:id])
    end 

    def find_items
        Item.find(params[:id])
    end
    # def is_authorized 
    #     permitted = current_user || current_user == @item.seller
    #     render json: "Accessibility is not permitted", status: :forbidden unless permitted
    # end 
end
