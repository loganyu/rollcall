# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Club.delete_all
Event.delete_all
User.delete_all

logan = User.create!(
  email: 'yu.logan@gmail.com',
  password: 'password',
  name: 'Logan Yu'
)

jess = User.create!(
  email: 'jess@gmail.com',
  password: 'password',
  name: 'Jess Jones',
)

ryan = User.create!(
  email: 'ryan@gmail.com',
  password: 'password',
  name: 'Ryan Liu',
)

caitlin = User.create!(
  email: 'caitlin@gmail.com',
  password: 'password',
  name: 'Caitlin Shu',
)

kevin = User.create!(
  email: 'kevin@gmail.com',
  password: 'password',
  name: 'Kevin Montavo'
)

alex = User.create!(
  email: 'alex@gmail.com',
  password: 'password',
  name: 'Alex Swette',
)

sarah = User.create!(
  email: 'sarah@gmail.com',
  password: 'password',
  name: 'Sarah Mallory',
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
  :address => "The Bins",
  :description => "Easy 3-4 miles",
  :user_id => logan.id,
  :club_id => nbr.id,
}
schedule_params = {
  :start_time => "7:30PM",
  :start_date => "01/01/2019",
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
  :address => "The Bins",
  :description => "Tempo run",
  :user_id => logan.id,
  :club_id => nbr.id,
}
schedule_params = {
  :start_time => "7:30PM",
  :start_date => "01/01/2019",
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
  :address => "The Bins",
  :description => "10 miles",
  :user_id => logan.id,
  :club_id => nbr.id,
}
schedule_params = {
  :start_time => "7:30PM",
  :start_date => "01/01/2019",
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
  :address => "The Bins",
  :description => "Track workout",
  :user_id => logan.id,
  :club_id => nbr.id,
}
schedule_params = {
  :start_time => "7:30PM",
  :start_date => "01/01/2019",
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
  :address => "The Bins",
  :description => "Track workout",
  :user_id => logan.id,
  :club_id => nbr.id,
}
schedule_params = {
  :start_time => "7:30PM",
  :start_date => "01/01/2019",
  :event_repeat => "weekly",
  :weekly_interval => 1,
  :weekly_day_of_week => 6,
  :monthly_day_of_week => nil,
  :week_of_month => nil,
}
schedule = Event.create_schedule(schedule_params)
Event.create!(event_params.merge({:schedule => schedule.to_yaml}))

event_params = {
  :name => "Donut Run",
  :address => "Grand Army Plaza",
  :description => "Run to Dough :)",
  :user_id => logan.id,
  :club_id => nbr.id,
}
schedule_params = {
  :start_time => "7:30PM",
  :start_date => "01/01/2019",
  :event_repeat => "monthly",
  :weekly_interval => nil,
  :weekly_day_of_week => nil,
  :monthly_day_of_week => 5,
  :week_of_month => 2,
}
schedule = Event.create_schedule(schedule_params)
Event.create!(event_params.merge({:schedule => schedule.to_yaml}))

event_params = {
  :name => "Salmon Run",
  :address => "The Bins",
  :description => "Run to Salmon",
  :user_id => logan.id,
  :club_id => nbr.id,
}
schedule_params = {
  :start_time => "7:30PM",
  :start_date => "01/01/2019",
  :event_repeat => "monthly",
  :weekly_interval => nil,
  :weekly_day_of_week => nil,
  :monthly_day_of_week => 5,
  :week_of_month => 1,
}
schedule = Event.create_schedule(schedule_params)
Event.create!(event_params.merge({:schedule => schedule.to_yaml}))