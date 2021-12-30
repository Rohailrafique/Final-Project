class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :gender, :picture
end
