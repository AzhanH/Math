import React from 'react';
import AddMoreStudentsView from '../../views/AddMoreStudentsView';
import useAddMoreStudentsModelView from '../../viewmodels/useAddMoreStudentsModelView';
const AddMoreStudents = ({route}) => {
  const {states, functions} = useAddMoreStudentsModelView({route});
  const {loading, data, backgroundColors, selectedIndex, addLoading} = states;
  const {loadData, onEndReached, onPressAdd} = functions;

  return (
    <AddMoreStudentsView
      selectedIndex={selectedIndex}
      addLoading={addLoading}
      backgroundColors={backgroundColors}
      onEndReached={onEndReached}
      onPressAdd={onPressAdd}
      data={data}
      loadData={loadData}
      loading={loading}
    />
  );
};
export default AddMoreStudents;
