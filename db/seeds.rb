# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
School.destroy_all
Item.destroy_all
ItemImage.destroy_all
Condition.destroy_all
Category.destroy_all

# Create schools

school = School.create(name: "University of Redlands", description: "The Universirt of Redlands is a private, non-profit university situated on 160 acres near downtown", institution_size: 3169, location: "Redlands, California", phone: "(909) 793-2121")

# Create users

user = User.create(email_address: "admin@unify.com", school_id: school.id, first_name: "Admin", last_name: "Admin", password: "password")
user = User.create(email_address: "don@joinhandshake.com", school_id: school.id, first_name: "Don", last_name: "Sirivat", password: "password")
# Create categories

Category.create(name: "Electronics")
Category.create(name: "Textbooks")
Category.create(name: "Apparel")
Category.create(name: "Tickets")
Category.create(name: "Furniture")
Category.create(name: "Beauty & Health")
Category.create(name: "Services")
Category.create(name: "Other")

# Create conditions

Condition.create(name: "New")
Condition.create(name: "Mint")
Condition.create(name: "Excellent")
Condition.create(name: "Good")
Condition.create(name: "Fair")
Condition.create(name: "Salvage")

