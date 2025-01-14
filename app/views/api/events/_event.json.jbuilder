json.extract! event, :id, :name, :address, :description, :user_id, :club_id,
  :date, :start_time, :event_repeat, :weekly_interval, :weekly_day_of_week,
  :monthly_day_of_week, :week_of_month, :next_occurrence_time, :next_occurrence_time_string,
  :recurrence_rule_description
json.followerIds event.followers.pluck(:id)
json.eventCommentIds event.event_comments.pluck(:id)