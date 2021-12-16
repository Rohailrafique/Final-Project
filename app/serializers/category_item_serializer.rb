class CategoryItemSerializer < ActiveModel::Serializer
  attributes :id
  has_one :category
  has_one :item
end
