class ImageSerializer < ActiveModel::Serializer
  attributes :id, :name, :url
  belongs_to :item
end
