import React from 'react';
import ClassDetailsView from '../../views/ClassDetailsView';
import useClassDetailsModelView from '../../viewmodels/useClassDetailsModelView';

const ClassDetails = ({route}) => {
  const {functions, states} = useClassDetailsModelView({route});
  const {data, loading, backgroundColor} = states;
  const {onPressEditClass, onPressViewDetail} = functions;
  return (
    <ClassDetailsView
      onPressEditClass={onPressEditClass}
      backgroundColor={backgroundColor}
      loading={loading}
      data={data}
      onPressViewDetail={onPressViewDetail}
    />
  );
};
export default ClassDetails;
