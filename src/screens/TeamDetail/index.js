import React from 'react';
import TeamDetailView from '../../views/TeamDetailView';
import useTeamDetailView from '../../viewmodels/useTeamDetailView';

const TeamDetail = ({route}) => {
  const {functions, states, ref} = useTeamDetailView({route});
  const {loadData, onPressViewDetail, onPressEdit} = functions;
  const {loading, data, backgroundColor} = states;
  const {modalRef} = ref;
  return (
    <TeamDetailView
      onPressViewDetail={onPressViewDetail}
      data={data}
      onPressEdit={onPressEdit}
      loadData={loadData}
      loading={loading}
      backgroundColor={backgroundColor}
      modalRef={modalRef}
    />
  );
};
export default TeamDetail;
