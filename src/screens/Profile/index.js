import React from 'react';
import ProfileView from '../../views/ProfileView';
import useProfileModelView from '../../viewmodels/useProfileModelView';

const Profile = ({route}) => {
  const {states, functions} = useProfileModelView({route});
  const {loading, dataArray} = states;
  const {onPressChangePassword, onPressEditProfile} = functions;
  return (
    <ProfileView
      onPressChangePassword={onPressChangePassword}
      onPressEditProfile={onPressEditProfile}
      dataArray={dataArray}
      loading={loading}
    />
  );
};
export default Profile;
