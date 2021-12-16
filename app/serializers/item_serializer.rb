class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :price, :sold, :image
  has_one :seller
  has_one :buyer
end
