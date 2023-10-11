import React from 'react';
import PrivacyPolicyView from '../../views/PrivacyPolicyView';
import usePrivacyPoliyModelView from '../../viewmodels/usePrivacyPolicyModelView';

const PrivacyPolicy = () => {
  const {states} = usePrivacyPoliyModelView();
  const {data, loading} = states;
  return <PrivacyPolicyView loading={loading} data={data} />;
};

export default PrivacyPolicy;
