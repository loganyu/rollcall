class Event < ApplicationRecord

  belongs_to :user
  belongs_to :club
  module Repeat
    DAILY = "daily"
    WEEKLY = "weekly"
    MONTHLY = "monthly"
  end

  # event_params Hash
  #   :name => "Event Name",
  #   :location => "New York",
  #   :description => "Description",
  # }
  # schedule_params = {
  #   :event_repeat => "weekly",
  #   :weekly_interval => 4
  #   :weekly_days_of_week => ["monday", "friday"]
  # }
  def self.create_schedule(schedule_params)
    schedule = IceCube::Schedule.new(schedule_params[:start_time])

    case schedule_params[:event_repeat]
    when Repeat::DAILY
      schedule.add_recurrence_rule(IceCube::Rule.daily)
    when Repeat::WEEKLY
      schedule.add_recurrence_rule(
        IceCube::Rule.
          weekly(schedule_params[:weekly_interval]).
          day(schedule_params[:weekly_day_of_week])
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

    return schedule
  end

  def start_time
    IceCube::Schedule.from_yaml(self.schedule).first.to_i
  end
end
