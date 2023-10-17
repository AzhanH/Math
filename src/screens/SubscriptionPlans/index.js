import React from 'react';
import SubscriptionPlansView from '../../views/SubscriptionPlansView';
import useSubscriptionPlansModelView from '../../viewmodels/useSubscriptionPlansModelView';

const SubscriptionPlans = ({route}) => {
  const {functions, states} = useSubscriptionPlansModelView({route});
  const {loading, data, planImages, selectedPlan, selectedIndex} = states;
  const {onPressSelectedPlan} = functions;
  return (
    <SubscriptionPlansView
      planImages={planImages}
      data={data}
      onPressSelectedPlan={onPressSelectedPlan}
      selectedPlan={selectedPlan}
      selectedIndex={selectedIndex}
      loading={loading}
    />
  );
};
export default SubscriptionPlans;
