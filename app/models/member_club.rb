class MemberClub < ApplicationRecord
  validates :user, uniqueness: { scope: :club }

  belongs_to :user
  belongs_to :club
end
