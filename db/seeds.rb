# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Club.delete_all
User.delete_all

User.create!(
  email: 'yu.logan@gmail.com',
  password: 'password'
)

logan = User.create!(
  email: 'ryan@gmail.com',
  password: 'password'
)

ryan = User.create!(
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
  creator_id: logan.id
)

dwrt = Club.create!(
  name: 'Dashing Whippets',
  city: 'New York, NY',
  description: 'Ryan\'s favorite club',
  creator_id: ryan.id
)

qdr = Club.create!(
  name: 'Queens Distance Runners',
  city: 'Queens, NY',
  description: 'Running in Queens',
  creator_id: kevin.id
)

ClubLeaderClub.create(
  user_id: logan.id,
  club_id: nbr.id,
)
ClubLeaderClub.create(
  user_id: alex.id,
  club_id: nbr.id,
)
ClubLeaderClub.create(
  user_id: ryan.id,
  club_id: dwrt.id,
)
ClubLeaderClub.create(
  user_id: kevin.id,
  club_id: qdr.id,
)
MemberClub.create(
  user_id: sarah.id,
  club_id: nbr.id,
)
MemberClub.create(
  user_id: kevin.id,
  club_id: nbr.id,
)
MemberClub.create(
  user_id: ryan.id,
  club_id: nbr.id,
)
MemberClub.create(
  user_id: alex.id,
  club_id: dwrt.id,
)
MemberClub.create(
  user_id: ryan.id,
  club_id: qdr.id,
)