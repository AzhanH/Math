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
    deleteLoading,
    addEditLoading,
    selectedDeleteIndex,
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
      selectedDeleteIndex={selectedDeleteIndex}
      onPressRemove={onPressRemove}
      page={page}
      deleteLoading={deleteLoading}
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
