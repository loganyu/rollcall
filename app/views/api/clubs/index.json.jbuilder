@clubs.each do |club|
  json.set! club.id do
    json.partial! 'club', club: club
    json.memberIds club.members.pluck(:id)
    json.adminIds club.admins.pluck(:id)
  end
end
