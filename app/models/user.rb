class User < ApplicationRecord

  attr_reader :password

  validates :email, :password_digest, :session_token, presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  after_initialize :ensure_session_token

  has_many :club_ownerships,
    class_name: :Club,
    foreign_key: :owner_id,
    primary_key: :id,
    inverse_of: :owner

  has_many :member_clubs, inverse_of: :user, dependent: :destroy
  has_many :club_memberships, through: :member_clubs, source: :club

  has_many :admin_clubs, inverse_of: :user, dependent: :destroy
  has_many :club_admins, through: :admin_clubs, source: :club

  has_many :events

  has_many :event_follows, inverse_of: :user, dependent: :destroy
  has_many :event_followings, through: :event_follows, source: :event

  has_many :event_comments

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    generate_unique_session_token
    save!
    self.session_token
  end

  private

  def ensure_session_token
    generate_unique_session_token unless self.session_token
  end

  def new_session_token
    SecureRandom.urlsafe_base64
  end

  def generate_unique_session_token
    self.session_token = new_session_token
    while User.find_by(session_token: self.session_token)
      self.session_token = new_session_token
    end
    self.session_token
  end

end
