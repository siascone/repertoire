json.user do
    json.partial! 'api/users/user', user: @user
    if @user.profile_photo.attachment == nil
        json.profilePhotoUrl = ''
    else
        json.profilePhotoUrl = url_for(@user.profile_photo)
    end
end