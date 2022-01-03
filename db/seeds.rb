# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Category.destroy_all
CategoryItem.destroy_all
Item.destroy_all
Category.reset_pk_sequence
User.reset_pk_sequence
CategoryItem.reset_pk_sequence
Item.reset_pk_sequence


# Creating users:
rohail = User.create(username: "rohail", email: "rohail@123.com", password: "123", password_confirmation: "123", picture: "https://static.zara.net/photos///2021/I/0/2/p/6917/402/506/3/w/670/6917402506_2_1_1.jpg?ts=1626302010169", gender:"male")
saim = User.create(username: 'saim', email: 'saim@123.com', password: "123", password_confirmation: "123")
tyler = User.create(username: 'tyler', email: 'tyler@123.com', password: "123", password_confirmation: "123")
william = User.create(username: 'william', email: 'william@123.com', password: "123", password_confirmation: "123")
brice = User.create(username: 'brice', email: 'brice@123.com', password: "123", password_confirmation: "123")
alejandro = User.create(username: 'alejandro', email: 'alejandro@123.com', password: "123", password_confirmation: "123")
puts rohail
# Creating categories:
shirts = Category.create(name: "shirts")
shoes = Category.create(name: "shoes")
jackets = Category.create(name: "jackets")
sweaters = Category.create(name: "hoodies/sweatshirts")
knits = Category.create(name: "knits")
suits = Category.create(name: "suits")
pants = Category.create(name: "pants")

# Creating items
tshirt = Item.create(name: "t-shirt", description: "really cool", price: 10.00, seller_id: rohail.id)
coat = Item.create(name: "coat", description: "cool coat", price: 5.00, seller_id: rohail.id)
long_coat = Item.create(name: "coat", description: "vintage coat", price: 30.50, seller_id: saim.id)
sweater = Item.create(name: "sweater", description: "warm", price: 27.50, seller_id: tyler.id)
pant = Item.create(name: "pant",  description: "tapered trouser", price: 5.25, seller_id: saim.id)
pant = Item.create(name: "pant", description: "tapered trouser", price: 5.25, seller_id: saim.id)
pant = Item.create(name: "pant", description: "tapered trouser", price: 5.25, seller_id: saim.id)
pant = Item.create(name: "pant", description: "tapered trouser", price: 5.25, seller_id: saim.id)
pant = Item.create(name: "pant", description: "tapered trouser", price: 5.25, seller_id: saim.id)
pant = Item.create(name: "pant", description: "tapered trouser", price: 5.25, seller_id: saim.id)
puts "test"
# Creating category_items
CategoryItem.create(item_id: tshirt.id, category_id: shirts.id)
CategoryItem.create(item_id: coat.id, category_id: jackets.id)
CategoryItem.create(item_id: long_coat.id, category_id: jackets.id)
CategoryItem.create(item_id: sweater.id, category_id: sweaters.id)
CategoryItem.create(item_id: pant.id, category_id: pants.id)

Image.create(name: "zara-pants", item_id: 1, url: "https://static.zara.net/photos///2021/I/0/2/p/6917/402/506/3/w/670/6917402506_2_1_1.jpg?ts=1626302010169")
Image.create(name: "zara-pants", item_id: 1, url: "https://static.zara.net/photos///2021/I/0/2/p/5937/142/700/2/w/2880/5937142700_6_1_1.jpg?ts=1632487955865")
Image.create(name: "coat1", item_id: 2, url: "https://static.zara.net/photos///2021/I/0/2/p/6917/340/822/2/w/1126/6917340822_6_4_1.jpg?ts=1629123593669")
Image.create(name: "coat 2", item_id: 2, url: "https://static.zara.net/photos///2021/I/0/2/p/6917/340/822/2/w/1126/6917340822_1_1_1.jpg?ts=1629283526808")
