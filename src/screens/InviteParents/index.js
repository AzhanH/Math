import React from 'react';
import InviteParentView from '../../views/InviteParentView';
import useInviteParentModelView from '../../viewmodels/useInviteParentModelView';

const InviteParent = () => {
  const {states, functions} = useInviteParentModelView();
  const {backgroundColor, data, loading} = states;
  const {loadData, onEndReached} = functions;
  return (
    <InviteParentView
      loading={loading}
      backgroundColor={backgroundColor}
      data={data}
      onEndReached={onEndReached}
      loadData={loadData}
    />
  );
};
export default InviteParent;
