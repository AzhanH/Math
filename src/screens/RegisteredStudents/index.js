import React from 'react';
import RegisteredStudentsView from '../../views/RegisteredStudentsView';
import useRegisteredStudentsModelView from '../../viewmodels/useRegisteredStudentsModelView';

const RegisteredStudents = () => {
  const {states, functions} = useRegisteredStudentsModelView();
  const {isLoading, data, backgroundColors} = states;
  const {onPressViewDetail} = functions;

  return (
    <RegisteredStudentsView
      onPressViewDetail={onPressViewDetail}
      backgroundColors={backgroundColors}
      data={data?.data}
      loading={isLoading}
    />
  );
};
export default RegisteredStudents;
