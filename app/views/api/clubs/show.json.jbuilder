json.club do
  json.partial! '/api/clubs/club', club: @club
  json.memberIds @club.members.pluck(:id)
  json.adminIds @club.admins.pluck(:id)
  json.ownerId @club.owner_id
end

@club.members.each do |member|
  json.members do
    json.set! member.id do
      json.partial! 'api/users/user', user: member
    end
  end
end

@club.admins.each do |admin|
  json.admins do
    json.set! admin.id do
      json.partial! 'api/users/user', user: admin
    end
  end
end

json.owner do
  json.partial! '/api/users/user', user: @club.owner
end