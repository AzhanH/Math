import React from 'react';
import PaymentView from '../../views/PaymentView';
import usePaymentModelView from '../../viewmodels/usePaymentModelView';
const Payment = ({route}) => {
  const {states, functions, refs} = usePaymentModelView({route});
  const {handleCreatePaymentMethod, onChangeCardHolderName, onPressOk} =
    functions;
  const {plan, loading} = states;
  const {modalRef} = refs;
  return (
    <PaymentView
      loading={loading}
      onChangeCardHolderName={onChangeCardHolderName}
      handleCreatePaymentMethod={handleCreatePaymentMethod}
      plan={plan}
      onPressOk={onPressOk}
      modalRef={modalRef}
    />
  );
};
export default Payment;
