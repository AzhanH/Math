import React from 'react';
import ContestDetailView from '../../views/ContestDetailView';
import useContestDetailsModelView from '../../viewmodels/useContenetDetailsModelView';

const ContestDetail = ({route}) => {
  const {functions, states} = useContestDetailsModelView({route});
  const {onPressEdit, updateContestInviteStatus} = functions;
  const {loading, details, options, isInvited, inviteStatusLoading} = states;
  return (
    <ContestDetailView
      isInvited={isInvited}
      onPressEdit={onPressEdit}
      options={options}
      details={details}
      loading={loading}
      updateContestInviteStatus={updateContestInviteStatus}
      inviteStatusLoading={inviteStatusLoading}
    />
  );
};
export default ContestDetail;
