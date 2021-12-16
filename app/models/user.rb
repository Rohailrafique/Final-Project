class User < ApplicationRecord
    has_many :purchased_items, class_name: 'Item', foreign_key: 'buyer_id', dependent: :destroy
    has_many :sold_items, class_name: 'Item', foreign_key: 'seller_id', dependent: :destroy
    
    # has_many :purchased_categories, through: :purchased_items, source: :categories 
    # has_many :sold_categories, through: :sold_items, source: :categories 
end
