class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :gender, :picture, :password_digest
end
