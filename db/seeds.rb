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
rohail = User.create(username: "rohail", email: "rohail@123.com", password: "123", password_confirmation: "123", picture: "https://scontent.fymq1-2.fna.fbcdn.net/v/t1.18169-9/10489979_10152748186971292_3131980369161028094_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=174925&_nc_ohc=_d5AmIhYBlQAX9Hy0Q3&_nc_ht=scontent.fymq1-2.fna&oh=00_AT_11g_i2Nr87Js1qYnQODx1b57H2UK7jiglluVQajeFcg&oe=61FA49D5", gender:"male")
saim = User.create(username: 'saim', email: 'saim@123.com', password: "123", password_confirmation: "123")
tyler = User.create(username: 'tyler', email: 'tyler@123.com', password: "123", password_confirmation: "123")
william = User.create(username: 'william', email: 'william@123.com', password: "123", password_confirmation: "123")


# Creating categories:
shirts = Category.create(name: "shirts")
shoes = Category.create(name: "shoes")
jackets = Category.create(name: "jackets")
trousers = Category.create(name: "pants")

# Creating items
tshirt = Item.create(name: "t-shirt", description: "Crew-neck T-shirt in soft cotton jersey with a printed graphic design at front.", price: 10.00, seller_id: rohail.id)
coat = Item.create(name: "grey coat", description: "Single-breasted coat in a felted wool blend. Notched lapels, buttons at front, and decorative buttons at cuffs. Diagonal welt side pockets and two inner pockets. Vent at back. Lined.", price: 95.00, seller_id: rohail.id)
long_coat = Item.create(name: "black coat", description: "Single-breasted coat in felted fabric with wool content. Funnel-neck collar, front pockets with flap, and an inner pocket. Decorative buttons.", price: 50, seller_id: saim.id)
parka = Item.create(name: "sweater", description: "Relaxed-fit hooded jacket in soft faux shearling. Drawstring hood, zipper at front, and front pockets. Wide ribbing at cuffs and hem.", price: 150, seller_id: tyler.id)
joggers = Item.create(name: "slim joggers",  description: "Regular-fit sweatpant joggers in cotton-blend fabric with soft, brushed inside. Drawstring and covered elastic at waistband, side-seam pockets, ribbed hems.", price: 20, seller_id: saim.id)
pants = Item.create(name: "pants", description: "tapered trouser", price: 50, seller_id: saim.id)
chinos = Item.create(name: "brown chinos", description: "casual chinos in good condition", price: 25, seller_id: saim.id)

puts "test"
# Creating category_items
CategoryItem.create(item_id: tshirt.id, category_id: shirts.id)
CategoryItem.create(item_id: long_coat.id, category_id: jackets.id)
CategoryItem.create(item_id: parka.id, category_id: jackets.id)
CategoryItem.create(item_id: joggers.id, category_id: trousers.id)
CategoryItem.create(item_id: pants.id, category_id: trousers.id)
CategoryItem.create(item_id: chinos.id, category_id: trousers.id)

Image.create(name: "zara-t-shirt", item_id: tshirt.id, url: "https://static.zara.net/photos///2021/I/0/2/p/7878/300/250/2/w/1126/7878300250_2_4_1.jpg?ts=1629463776045")
Image.create(name: "zara-t-shirt", item_id: tshirt.id, url: "https://static.zara.net/photos///2021/I/0/2/p/7878/300/250/2/w/1126/7878300250_6_1_1.jpg?ts=1624000541111")
Image.create(name: "zara-t-shirt", item_id: tshirt.id, url: "https://static.zara.net/photos///2021/I/0/2/p/7878/300/250/2/w/1126/7878300250_6_3_1.jpg?ts=1624000210482")
Image.create(name: "long-coat", item_id: long_coat.id, url: "https://static.zara.net/photos///2021/I/0/2/p/1564/501/800/2/w/1126/1564501800_6_1_1.jpg?ts=1631611286197")
Image.create(name: "long-coat", item_id: long_coat.id, url: "https://static.zara.net/photos///2021/I/0/2/p/1564/501/800/2/w/1126/1564501800_6_2_1.jpg?ts=1631611064091")
Image.create(name: "long-coat", item_id: long_coat.id, url: "https://static.zara.net/photos///2021/I/0/2/p/1564/501/800/2/w/1126/1564501800_6_3_1.jpg?ts=1631611066561")
Image.create(name: "parka", item_id: parka.id, url: "https://static.zara.net/photos///2021/I/0/2/p/5320/310/710/2/w/1126/5320310710_6_1_1.jpg?ts=1634815324301")
Image.create(name: "parka", item_id: parka.id, url: "https://static.zara.net/photos///2021/I/0/2/p/5320/310/710/2/w/1126/5320310710_6_2_1.jpg?ts=1634815297130")
Image.create(name: "parka", item_id: parka.id, url: "https://static.zara.net/photos///2021/I/0/2/p/5320/310/710/2/w/1126/5320310710_6_3_1.jpg?ts=1634815517732")
Image.create(name: "joggers", item_id: joggers.id, url: "https://static.zara.net/photos///2021/I/0/2/p/5862/323/620/2/w/1126/5862323620_6_1_1.jpg?ts=1624000534458")
Image.create(name: "joggers", item_id: joggers.id, url: "https://static.zara.net/photos///2021/I/0/2/p/5862/323/620/2/w/1126/5862323620_6_3_1.jpg?ts=1624000848859")
Image.create(name: "pants", item_id: pants.id, url: "https://static.zara.net/photos///2021/I/0/2/p/0706/382/704/2/w/1126/0706382704_6_1_1.jpg?ts=1632239120150")
Image.create(name: "pants", item_id: pants.id, url: "https://static.zara.net/photos///2021/I/0/2/p/0706/382/704/2/w/1126/0706382704_6_3_1.jpg?ts=1632239309925")
Image.create(name: "chinos", item_id: chinos.id, url: "https://static.zara.net/photos///2021/I/0/2/p/6917/350/710/2/w/1126/6917350710_6_1_1.jpg?ts=1624441292860")
Image.create(name: "coat", item_id: coat.id, url: "https://static.zara.net/photos///2021/I/0/2/p/1564/501/807/2/w/1126/1564501807_6_1_1.jpg?ts=1631611050282")

