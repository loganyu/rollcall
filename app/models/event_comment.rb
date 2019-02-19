class EventComment < ApplicationRecord
  include ActionView::Helpers::DateHelper

  belongs_to :user
  belongs_to :event

  def time_ago
    "#{time_ago_in_words(self.updated_at)} ago"
  end

  def timestamp
    self.updated_at.to_i
  end
end
