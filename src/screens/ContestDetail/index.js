import React from 'react';
import ContestDetailView from '../../views/ContestDetailView';
import useContestDetailsModelView from '../../viewmodels/useContenetDetailsModelView';

const ContestDetail = ({route}) => {
  const {functions, states} = useContestDetailsModelView({route});
  const {onPressEdit} = functions;
  const {loading, details, options} = states;
  return (
    <ContestDetailView
      onPressEdit={onPressEdit}
      options={options}
      details={details}
      loading={loading}
    />
  );
};
export default ContestDetail;
