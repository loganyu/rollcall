class Club < ApplicationRecord
  validates :name, :city, presence: true

  belongs_to :creator,
    class_name: :User,
    foreign_key: :creator_id,
    primary_key: :id,
    inverse_of: :created_clubs

  has_many :member_clubs, inverse_of: :club, dependent: :destroy
  has_many :members, through: :member_clubs, source: :user

  has_many :admin_clubs, inverse_of: :club, dependent: :destroy
  has_many :admins, through: :admin_clubs, source: :user
end
