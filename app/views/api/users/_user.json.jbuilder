json.extract! user, :username, :id, :headline, :bio, :f_name, :l_name

if user.profile_photo.attached?
    json.profilePhotoUrl url_for(user.profile_photo)
end
