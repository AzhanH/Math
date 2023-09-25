import React from 'react';
import ProfileView from '../../views/ProfileView';
import useProfileModelView from '../../viewmodels/useProfileModelView';

const Profile = () => {
  const {states, functions} = useProfileModelView();
  const {isLoading, dataArray} = states;
  const {onPressChangePassword, onPressEditProfile} = functions;
  return (
    <ProfileView
      onPressChangePassword={onPressChangePassword}
      onPressEditProfile={onPressEditProfile}
      dataArray={dataArray}
      loading={isLoading}
    />
  );
};
export default Profile;
