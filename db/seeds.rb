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
rohail = User.create(username: "rohail", email: "rohail@123.com")
saim = User.create(username: 'saim', email: 'saim@123.com')
tyler = User.create(username: 'tyler', email: 'tyler@123.com')
william = User.create(username: 'william', email: 'william@123.com')
brice = User.create(username: 'brice', email: 'brice@123.com')
alejandro = User.create(username: 'alejandro', email: 'alejandro@123.com')

# Creating categories:
shirts = Category.create(name: "shirts")
shoes = Category.create(name: "shoes")
jackets = Category.create(name: "jackets")
sweaters = Category.create(name: "hoodies/sweatshirts")
knits = Category.create(name: "knits")
suits = Category.create(name: "suits")
pants = Category.create(name: "pants")

# Creating items
tshirt = Item.create(name: "t-shirt", image: "testing", description: "really cool", price: 10.00, seller_id: rohail.id)
coat = Item.create(name: "coat", image: "testing", description: "cool coat", price: 5.00, seller_id: rohail.id)
long_coat = Item.create(name: "coat", image: "testing", description: "vintage coat", price: 30.50, seller_id: saim.id)
sweater = Item.create(name: "sweater", image: "testing", description: "warm", price: 27.50, seller_id: tyler.id)
pant = Item.create(name: "pant", image: "testing", description: "tapered trouser", price: 5.25, seller_id: saim.id)

# Creating category_items
CategoryItem.create(item_id: tshirt.id, category_id: shirts.id)
CategoryItem.create(item_id: coat.id, category_id: jackets.id)
CategoryItem.create(item_id: long_coat.id, category_id: jackets.id)
CategoryItem.create(item_id: sweater.id, category_id: sweaters.id)
CategoryItem.create(item_id: pant.id, category_id: pants.id)