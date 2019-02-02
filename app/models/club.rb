class Club < ApplicationRecord
  validates :name, :city, presence: true

  belongs_to :owner,
    class_name: :User,
    foreign_key: :owner_id,
    primary_key: :id,
    inverse_of: :club_ownerships

  has_many :member_clubs, inverse_of: :club, dependent: :destroy
  has_many :members, through: :member_clubs, source: :user

  has_many :admin_clubs, inverse_of: :club, dependent: :destroy
  has_many :admins, through: :admin_clubs, source: :user
end
