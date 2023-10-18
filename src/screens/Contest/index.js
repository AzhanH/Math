import React from 'react';
import useCreateContestModelView from '../../viewmodels/useCreateContestModelView';
import ContestsView from '../../views/ContestsView';

const Contest = () => {
  const {functions, states} = useCreateContestModelView();
  const {
    loadData,
    onEndReached,
    onPressContestDetail,
    onPressSendInvite,
    onPressCreateContest,
  } = functions;
  const {backgroundColor, data, loading, page} = states;
  return (
    <ContestsView
      loadData={loadData}
      onEndReached={onEndReached}
      onPressSendInvite={onPressSendInvite}
      loading={loading}
      onPressCreateContest={onPressCreateContest}
      onPressContestDetail={onPressContestDetail}
      data={data}
      page={page}
      backgroundColor={backgroundColor}
    />
  );
};

export default Contest;
