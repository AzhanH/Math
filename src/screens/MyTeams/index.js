import React from 'react';
import MyTeamView from '../../views/MyTeamsView';
import useMyTeamModelView from '../../viewmodels/useMyTeamsModelView';

const MyTeams = () => {
  const {functions, states} = useMyTeamModelView();
  const {
    onEndReached,
    loadData,
    onPressCreateTeam,
    onPressTeamDetail,
    onRefresh,
  } = functions;
  const {avatarImage, backgroundColor, loading, data, page} = states;
  return (
    <MyTeamView
      onRefresh={onRefresh}
      onPressTeamDetail={onPressTeamDetail}
      onPressCreateTeam={onPressCreateTeam}
      loadData={loadData}
      onEndReached={onEndReached}
      loading={loading}
      data={data}
      page={page}
      avatarImage={avatarImage}
      backgroundColor={backgroundColor}
    />
  );
};
export default MyTeams;
