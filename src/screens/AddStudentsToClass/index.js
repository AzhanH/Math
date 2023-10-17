import React from 'react';
import AddStudentsToClassView from '../../views/AddStudentsToClassView';
import useAddMoreStudentsToClassModeView from '../../viewmodels/useAddMoreStudentsToClassModelView';
const AddMoreStudents = ({route}) => {
  const {states, functions} = useAddMoreStudentsToClassModeView({route});
  const {loading, data, backgroundColors, selectedIndex, addLoading} = states;
  const {loadData, onEndReached, onPressAdd, onChangeSearch} = functions;

  return (
    <AddStudentsToClassView
      onChangeSearch={onChangeSearch}
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
