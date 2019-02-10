class Event < ApplicationRecord
  belongs_to :user
  belongs_to :club

  has_many :event_follows, inverse_of: :event, dependent: :destroy
  has_many :followers, through: :event_follows, source: :user
  has_many :event_comments

  module Repeat
    DAILY = "daily"
    WEEKLY = "weekly"
    MONTHLY = "monthly"

    ICE_CUBE_RULE_TO_EVENT_REPEAT = {
      IceCube::DailyRule.to_s => DAILY,
      IceCube::WeeklyRule.to_s => WEEKLY,
      IceCube::MonthlyRule.to_s => MONTHLY,
    }
  end

  def self.create_schedule(schedule_params)
    schedule = IceCube::Schedule.new(Time.parse("#{schedule_params[:date]} #{schedule_params[:start_time]} +0000"))
    case schedule_params[:event_repeat]
    when Repeat::DAILY
      schedule.add_recurrence_rule(IceCube::Rule.daily)
    when Repeat::WEEKLY
      schedule.add_recurrence_rule(
        IceCube::Rule.
          weekly(schedule_params[:weekly_interval].to_i).
          day(schedule_params[:weekly_day_of_week].to_i)
      )
    when Repeat::MONTHLY
      schedule.add_recurrence_rule(
        IceCube::Rule.
          monthly.
          day_of_week(
            schedule_params[:monthly_day_of_week].to_i => [schedule_params[:week_of_month].to_i]
          )
      )
    end

    return schedule
  end

  def next_occurrence_time
    IceCube::Schedule.from_yaml(self.schedule).first.to_i
  end

  def date
    schedule_hash[:start_time].strftime("%Y-%m-%d")
  end

  def start_time
    schedule_hash[:start_time].strftime("%H:%m")
  end

  def event_repeat
    if !schedule_hash[:rrules].empty?
      Event::Repeat::ICE_CUBE_RULE_TO_EVENT_REPEAT[schedule_hash[:rrules][0][:rule_type]]
    else
      nil
    end
  end

  def weekly_interval
    if event_repeat() && schedule_hash[:rrules][0][:rule_type] == IceCube::WeeklyRule.to_s
      schedule_hash[:rrules][0][:interval]
    else
      nil
    end
  end

  def weekly_day_of_week
    if event_repeat() && schedule_hash[:rrules][0][:rule_type] == IceCube::WeeklyRule.to_s
      schedule_hash[:rrules][0][:validations][:day][0]
    else
      nil
    end
  end

  def monthly_day_of_week
    if event_repeat() && schedule_hash[:rrules][0][:rule_type] == IceCube::MonthlyRule.to_s
      schedule_hash[:rrules][0][:validations][:day_of_week].keys[0]
    else
      nil
    end
  end
  
  def week_of_month
    if event_repeat() && schedule_hash[:rrules][0][:rule_type] == IceCube::MonthlyRule.to_s
      schedule_hash[:rrules][0][:validations][:day_of_week][monthly_day_of_week][0]
    else
      nil
    end
  end

  private

  def schedule_hash
    IceCube::Schedule.from_yaml(self.schedule).to_h
  end
end
