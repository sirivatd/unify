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

Category.create(name: "Electronics", image_url: "https://firebasestorage.googleapis.com/v0/b/unify-aaba7.appspot.com/o/images%2Felectronics_category.png?alt=media&token=5466136c-46ad-426b-aa7b-f5d191b64a05")
Category.create(name: "Textbooks", image_url: "https://firebasestorage.googleapis.com/v0/b/unify-aaba7.appspot.com/o/images%2Ftextbooks_category.png?alt=media&token=b837df7b-ef7c-4db0-94cd-5a93ce41b461")
Category.create(name: "Apparel", image_url: "https://firebasestorage.googleapis.com/v0/b/unify-aaba7.appspot.com/o/images%2Fapparel_category.png?alt=media&token=22a08df4-3f0e-4f42-873b-eaca6f4c7828")
Category.create(name: "Tickets", image_url: "https://firebasestorage.googleapis.com/v0/b/unify-aaba7.appspot.com/o/images%2Ftickets_category.png?alt=media&token=e4ae9b76-c8b4-4e07-b20e-e372f7376ace")
Category.create(name: "Furniture", image_url: "https://firebasestorage.googleapis.com/v0/b/unify-aaba7.appspot.com/o/images%2Ffurniture_category.png?alt=media&token=43cdd7aa-3744-47f3-be46-1b82181630c9")
Category.create(name: "Beauty & Health", image_url: "https://firebasestorage.googleapis.com/v0/b/unify-aaba7.appspot.com/o/images%2Fbeauty_category.png?alt=media&token=76dc0e26-a255-4039-9cfd-f6b4d1c04069")
Category.create(name: "Sports & Outdoor", image_url: "https://firebasestorage.googleapis.com/v0/b/unify-aaba7.appspot.com/o/images%2Fsports_category.png?alt=media&token=376209f0-a075-48f2-a32f-403ec5f16456")
Category.create(name: "Other", image_url: "https://firebasestorage.googleapis.com/v0/b/unify-aaba7.appspot.com/o/images%2Fother_category.png?alt=media&token=538fc42a-3c8a-44ab-b385-b9bbde849643")

# Create conditions

Condition.create(name: "New")
Condition.create(name: "Mint")
Condition.create(name: "Excellent")
Condition.create(name: "Good")
Condition.create(name: "Fair")
Condition.create(name: "Salvage")

