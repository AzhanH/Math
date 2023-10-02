import React from 'react';
import RegisteredStudentsView from '../../views/RegisteredStudentsView';
import useRegisteredStudentsModelView from '../../viewmodels/useRegisteredStudentsModelView';

const RegisteredStudents = () => {
  const {states, functions} = useRegisteredStudentsModelView();
  const {loading, data, backgroundColors} = states;
  const {onPressViewDetail, loadData, onEndReached} = functions;

  return (
    <RegisteredStudentsView
      onPressViewDetail={onPressViewDetail}
      backgroundColors={backgroundColors}
      onEndReached={onEndReached}
      data={data?.data}
      loadData={loadData}
      loading={loading}
    />
  );
};
export default RegisteredStudents;
