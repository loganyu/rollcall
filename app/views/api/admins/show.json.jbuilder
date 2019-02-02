json.admin do
  json.partial! "api/users/user", user: @admin
end

json.club do
  json.partial! '/api/clubs/club', club: @club
end
