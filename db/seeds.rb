# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


require 'open-uri'

User.destroy_all

demo = User.create!(username: 'demo', password: 'password')

hayden = open("https://repertoire-development.s3-us-west-1.amazonaws.com/hayden-user-photo.jpeg")
demo.profile_photo.attach(io: hayden, filename: "hayden-user-photo.jpeg")
