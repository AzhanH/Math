import React from 'react';
import InviteParentView from '../../views/InviteParentView';
import useInviteParentModelView from '../../viewmodels/useInviteParentModelView';

const InviteParent = ({route}) => {
  const {states, functions, ref} = useInviteParentModelView({route});
  const {backgroundColor, data, loading, createContestLoading} = states;
  const {loadData, onEndReached, onPressIcon, onPressSendInvite, onPressOk} =
    functions;
  const {modalRef} = ref;
  return (
    <InviteParentView
      loading={loading}
      backgroundColor={backgroundColor}
      data={data}
      onPressIcon={onPressIcon}
      onEndReached={onEndReached}
      createContestLoading={createContestLoading}
      loadData={loadData}
      modalRef={modalRef}
      onPressOk={onPressOk}
      onPressSendInvite={onPressSendInvite}
    />
  );
};
export default InviteParent;
