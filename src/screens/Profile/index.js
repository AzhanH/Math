import React from 'react';
import ProfileView from '../../views/ProfileView';
import useProfileModelView from '../../viewmodels/useProfileModelView';

const Profile = () => {
  const {states} = useProfileModelView();

  const {data, isLoading} = states;
  return <ProfileView loading={isLoading} userData={data} />;
};
export default Profile;
