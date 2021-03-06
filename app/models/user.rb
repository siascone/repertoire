# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  bio             :text
#  headline        :string
#  f_name          :string
#  l_name          :string
#
class User < ApplicationRecord
    validates :username, presence:true, uniqueness:true
    validates :password_digest, presence:true
    validates :session_token, presence:true
    validates :password, length: { minimum: 6 }, allow_nil:true

    before_validation :enusre_session_token
    attr_reader :password

    def password=(password)
        self.password_digest = BCrypt::Password.create(password)
        @password = password
    end

    def enusre_session_token
        self.session_token ||= SecureRandom.urlsafe_base64(16)
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64(16)
        self.save
        self.session_token
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        user && user.is_password?(password) ? user : nil
    end

    # add associations later

    has_one_attached :profile_photo
end
