import React from 'react';
import EditClassView from '../../views/EditClassView';
import useEditClassModelView from '../../viewmodels/useEditClassModelView';

const EditClass = ({route}) => {
  const {functions, states} = useEditClassModelView({route});
  const {loading, data, backgroundColors, removeLoading, selectedIndex} =
    states;
  const {removeStudent, onPressAddStudents} = functions;
  return (
    <EditClassView
      onPressAddStudents={onPressAddStudents}
      removeStudent={removeStudent}
      removeLoading={removeLoading}
      selectedIndex={selectedIndex}
      backgroundColors={backgroundColors}
      loading={loading}
      data={data}
    />
  );
};
export default EditClass;
