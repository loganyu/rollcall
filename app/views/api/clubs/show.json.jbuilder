json.club do
  json.partial! '/api/clubs/club', club: @club
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

@events.each do |event|
  json.events do
    json.set! event.id do
      json.partial! 'api/events/event', event: event
    end
  end
end


json.owner do
  json.partial! '/api/users/user', user: @club.owner
end