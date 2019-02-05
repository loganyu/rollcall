json.extract! club, :id, :name, :city, :description, :owner_id
json.memberIds @club.members.pluck(:id)
json.adminIds @club.admins.pluck(:id)
json.eventIds @club.events.pluck(:id)