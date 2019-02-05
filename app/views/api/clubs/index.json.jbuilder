@clubs.each do |club|
  json.set! club.id do
    json.partial! 'club', club: club
  end
end
