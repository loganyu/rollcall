json.extract! user, :id, :email, :name
json.eventFollowingIds user.event_followings.pluck(:id)