class Club < ApplicationRecord
  belongs_to :creator,
    class_name: :User,
    foreign_key: :creator_id,
    primary_key: :id,
    inverse_of: :created_clubs

  has_many :member_clubs, inverse_of: :club, dependent: :destroy
  has_many :members, through: :member_clubs, source: :user

  has_many :club_leader_clubs, inverse_of: :club, dependent: :destroy
  has_many :club_leaders, through: :club_leader_clubs, source: :user
end
