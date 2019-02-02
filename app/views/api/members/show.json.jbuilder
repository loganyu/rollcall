json.member do
  json.partial! "api/users/user", user: @member
end

json.club do
  json.partial! '/api/clubs/club', club: @club
end
