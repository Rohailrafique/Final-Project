class ItemsController < ApplicationController

    def index
        render json: Item.all.order(id: :desc)
    end
end


