json.event do
  json.partial! '/api/events/event', event: @event
end

json.club do
  json.partial! '/api/clubs/club', club: @event.club
end

json.owner do
 json.partial! 'api/users/user', user: @event.user
end
