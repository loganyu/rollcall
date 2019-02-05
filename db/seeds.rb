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


event_params = {
  :name => "Monday Night Easy Run",
  :location => "The Bins",
  :description => "Easy 3-4 miles",
  :user_id => logan.id,
  :club_id => nbr.id,
}
schedule_params = {
  :start_time => Time.parse("01/01/2019 7:30PM +0000"),
  :event_repeat => "weekly",
  :weekly_interval => 1,
  :weekly_day_of_week => 1,
  :monthly_day_of_week => nil,
  :week_of_month => nil,
}
schedule = Event.create_schedule(schedule_params)
Event.create!(event_params.merge({:schedule => schedule.to_yaml}))

event_params = {
  :name => "Tigerwolves",
  :location => "The Bins",
  :description => "Tempo run",
  :user_id => logan.id,
  :club_id => nbr.id,
}
schedule_params = {
  :start_time => Time.parse("01/01/2019 6:30AM +0000"),
  :event_repeat => "weekly",
  :weekly_interval => 1,
  :weekly_day_of_week => 2,
  :monthly_day_of_week => nil,
  :week_of_month => nil,
}
schedule = Event.create_schedule(schedule_params)
Event.create!(event_params.merge({:schedule => schedule.to_yaml}))

event_params = {
  :name => "Doves",
  :location => "The Bins",
  :description => "10 miles",
  :user_id => logan.id,
  :club_id => nbr.id,
}
schedule_params = {
  :start_time => Time.parse("01/01/2019 6:30AM +0000"),
  :event_repeat => "weekly",
  :weekly_interval => 1,
  :weekly_day_of_week => 3,
  :monthly_day_of_week => nil,
  :week_of_month => nil,
}
schedule = Event.create_schedule(schedule_params)
Event.create!(event_params.merge({:schedule => schedule.to_yaml}))

event_params = {
  :name => "Hellkatz",
  :location => "The Bins",
  :description => "Track workout",
  :user_id => logan.id,
  :club_id => nbr.id,
}
schedule_params = {
  :start_time => Time.parse("01/01/2019 6:30AM +0000"),
  :event_repeat => "weekly",
  :weekly_interval => 1,
  :weekly_day_of_week => 4,
  :monthly_day_of_week => nil,
  :week_of_month => nil,
}
schedule = Event.create_schedule(schedule_params)
Event.create!(event_params.merge({:schedule => schedule.to_yaml}))

event_params = {
  :name => "Bridge Run",
  :location => "The Bins",
  :description => "Track workout",
  :user_id => logan.id,
  :club_id => nbr.id,
}
schedule_params = {
  :start_time => Time.parse("01/01/2019 9:00AM +0000"),
  :event_repeat => "weekly",
  :weekly_interval => 1,
  :weekly_day_of_week => 6,
  :monthly_day_of_week => nil,
  :week_of_month => nil,
}
schedule = Event.create_schedule(schedule_params)
Event.create!(event_params.merge({:schedule => schedule.to_yaml}))