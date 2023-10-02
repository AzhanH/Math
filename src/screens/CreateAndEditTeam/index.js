import React from 'react';
import CreateEditTeamView from '../../views/CreateEditTeamView';
import useCreateEditTeam from '../../viewmodels/useCreateEditTeam';

const CreateAndEditTeam = ({route}) => {
  const {functions, states, refs} = useCreateEditTeam({route});
  const {
    data,
    loading,
    backgroundColors,
    type,
    page,
    teamName,
    addEditLoading,
    players,
  } = states;
  const {
    loadData,
    onEndReached,
    onPressOk,
    onPressAdd,
    onChangeTeamName,
    onPressCreateTeam,
    onPressRemove,
    onPressAddMore,
  } = functions;
  const {modalRef} = refs;
  return (
    <CreateEditTeamView
      teamName={teamName}
      onChangeTeamName={onChangeTeamName}
      onEndReached={onEndReached}
      loadData={loadData}
      onPressOk={onPressOk}
      loading={loading}
      data={data}
      type={type}
      players={players}
      onPressRemove={onPressRemove}
      page={page}
      onPressAdd={onPressAdd}
      onPressAddMore={onPressAddMore}
      onPressCreateTeam={onPressCreateTeam}
      modalRef={modalRef}
      addEditLoading={addEditLoading}
      backgroundColors={backgroundColors}
    />
  );
};
export default CreateAndEditTeam;
