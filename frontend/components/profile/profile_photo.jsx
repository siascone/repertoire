import React from 'react';

const ProfilePhoto = ({ url }) => (
    <img 
        className="profile-photo not-resized"
        src={url || '/assets/default-profile-photo.png'} 
        alt="avitar"
    />
);

export default ProfilePhoto;