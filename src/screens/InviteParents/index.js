import React from 'react';
import InviteParentView from '../../views/InviteParentView';
import useInviteParentModelView from '../../viewmodels/useInviteParentModelView';

const InviteParent = ({route}) => {
  const {states, functions} = useInviteParentModelView({route});
  const {backgroundColor, data, loading} = states;
  const {loadData, onEndReached, onPressIcon, onPressSendInvite} = functions;
  return (
    <InviteParentView
      loading={loading}
      backgroundColor={backgroundColor}
      data={data}
      onPressIcon={onPressIcon}
      onEndReached={onEndReached}
      loadData={loadData}
      onPressSendInvite={onPressSendInvite}
    />
  );
};
export default InviteParent;
