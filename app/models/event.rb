class Event < ApplicationRecord

  belongs_to :user
  belongs_to :club
  module Repeat
    DAILY = "daily"
    WEEKLY = "weekly"
    MONTHLY = "monthly"
  end

  event_params = {
    :name => "Event Name",
    :location => "New York",
    :description => "Description",
  }
  schedule_params = {
    :event_repeat => "weekly",
    :weekly_interval => 4
    :weekly_days_of_week => ["monday", "friday"]
  }
  def self.create_event(event_params, user_id, club_id, schedule_params)
    schedule = IceCube::Schedule.new(schedule_params[:start_time])

    case schedule_params[:event_repeat]
    when Repeat::DAILY
      schedule.add_recurrence_rule(IceCube::Rule.daily)
    when Repeat::WEEKLY
      schedule.add_recurrence_rule(
        IceCube::Rule.
          weekly(schedule_params[:weekly_interval]).
          day(schedule_params[:weekly_days_of_week])
      )
    when Repeat::MONTHLY
      schedule.add_recurrence_rule(
        IceCube::Rule.
          monthly.
          day_of_week(
            schedule_params[:monthly_day_of_week] => schedule_params[:week_of_month]
          )
      )
    end

    event = Event.create(event_params.merge({:schedule => schedule.to_yaml}))

    return event
  end
end
