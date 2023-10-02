import React from 'react';
import AddMoreStudentsView from '../../views/AddMoreStudentsView';
import useAddMoreStudentsModelView from '../../viewmodels/useAddMoreStudentsModelView';
const AddMoreStudents = ({route}) => {
  const {states, functions} = useAddMoreStudentsModelView({route});
  const {loading, data, backgroundColors} = states;
  const {onPressViewDetail, loadData, onEndReached} = functions;

  return (
    <AddMoreStudentsView
      onPressViewDetail={onPressViewDetail}
      backgroundColors={backgroundColors}
      onEndReached={onEndReached}
      data={data}
      loadData={loadData}
      loading={loading}
    />
  );
};
export default AddMoreStudents;
