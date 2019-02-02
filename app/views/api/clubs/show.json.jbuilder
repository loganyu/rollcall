json.club do
  json.partial! '/api/clubs/club', club: @club
  json.memberIds @club.members.pluck(:id)
  json.adminIds @club.admins.pluck(:id)
end

@club.members.each do |member|
  json.members do
    json.set! member.id do
      json.partial! 'api/users/user', user: member
    end
  end
end