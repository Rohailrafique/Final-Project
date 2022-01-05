class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :price, :sold
  has_one :seller
  has_one :buyer
  has_many :images
  has_many :categories
end
