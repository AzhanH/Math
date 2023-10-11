import React from 'react';
import useTermsAndConditionModelView from '../../viewmodels/useTermsAndConditionsModelView';
import TermsAndConditionsView from '../../views/TermsAndConditionsView';

const TermsAndConditions = () => {
  const {states} = useTermsAndConditionModelView();
  const {data, loading} = states;
  return <TermsAndConditionsView loading={loading} data={data} />;
};

export default TermsAndConditions;
