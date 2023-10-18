import React from 'react';
import AddMoreStudentsView from '../../views/AddMoreStudentsView';
import useAddMoreStudentsModelView from '../../viewmodels/useAddMoreStudentsModelView';
const AddMoreStudents = ({route}) => {
  const {states, functions} = useAddMoreStudentsModelView({route});
  const {loading, data, backgroundColors, selectedIndex, addLoading, page} =
    states;
  const {loadData, onEndReached, onPressAdd, onChangeSearch} = functions;

  return (
    <AddMoreStudentsView
      page={page}
      selectedIndex={selectedIndex}
      addLoading={addLoading}
      backgroundColors={backgroundColors}
      onEndReached={onEndReached}
      onPressAdd={onPressAdd}
      data={data}
      onChangeSearch={onChangeSearch}
      loadData={loadData}
      loading={loading}
    />
  );
};
export default AddMoreStudents;
