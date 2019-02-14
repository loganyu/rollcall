json.extract! user, :id, :email
json.eventFollowingIds user.event_followings.pluck(:id)