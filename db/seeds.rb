# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Club.delete_all
User.delete_all

logan = User.create!(
  email: 'yu.logan@gmail.com',
  password: 'password'
)

jess = User.create!(
  email: 'jess@gmail.com',
  password: 'password'
)

ryan = User.create!(
  email: 'ryan@gmail.com',
  password: 'password'
)

caitlin = User.create!(
  email: 'caitlin@gmail.com',
  password: 'password'
)

kevin = User.create!(
  email: 'kevin@gmail.com',
  password: 'password'
)

alex = User.create!(
  email: 'alex@gmail.com',
  password: 'password'
)

sarah = User.create!(
  email: 'sarah@gmail.com',
  password: 'password'
)

nbr = Club.create!(
  name: 'North Brooklyn Runners',
  city: 'Brooklyn, NY',
  description: 'Hipster running club in Williamsburg',
  owner_id: logan.id
)

dwrt = Club.create!(
  name: 'Dashing Whippets',
  city: 'New York, NY',
  description: 'Ryan\'s favorite club',
  owner_id: ryan.id
)

qdr = Club.create!(
  name: 'Queens Distance Runners',
  city: 'Queens, NY',
  description: 'Running in Queens',
  owner_id: kevin.id
)

nbr.admins.concat([caitlin])
nbr.members.concat([jess, alex, kevin, sarah])
dwrt.admins.concat([jess, sarah])
dwrt.members.concat([kevin])
qdr.admins.concat([jess])
qdr.members.concat([logan, alex, sarah])