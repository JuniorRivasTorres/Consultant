# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#subject numero 1 récupéré son ex 
require "open-uri"

puts "destroying everything"
Subject.destroy_all
User.destroy_all

puts "Creating Récupérer son ex subject"
subject1 = Subject.create!(name:'Récupéré son ex', price:100, short_description:'comment récupéréet survivre à une rupture', long_description:'etre efficace', user_id:1 )
#img_indian_cuisine = URI.open('https://img.mobygeek.com/crop/1200x628/2020/02/23/indian-food-salinda-41c0.jpg')
#indian.photo.attach(io: img_indian_cuisine, filename: 'indian_cuisine', content_type: 'image/jpg')


puts"Creating User"
junior = User.create!(first_name: 'Junior', last_name:'Rivas', email:'junior@coach.com', password:'123456', bio:'je suis bon ')