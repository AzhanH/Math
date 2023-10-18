import React from 'react';
import MyClassesView from '../../views/MyClassesView';
import useMyClassesModelView from '../../viewmodels/useMyClassesModelView';

const MyClasses = () => {
  const {functions, states} = useMyClassesModelView();
  const {
    loadData,
    onChangeClassName,
    onEndReached,
    onPressAddClass,
    onPressCreateClass,
    onCloseClassModal,
    onPressViewDetail,
  } = functions;
  const {
    createLoading,
    data,
    loading,
    showAddClassModal,
    className,
    avatarImage,
    backgroundColor,
    page,
  } = states;
  return (
    <MyClassesView
      loadData={loadData}
      onChangeClassName={onChangeClassName}
      onEndReached={onEndReached}
      onPressAddClass={onPressAddClass}
      onPressCreateClass={onPressCreateClass}
      showAddClassModal={showAddClassModal}
      onCloseClassModal={onCloseClassModal}
      loading={loading}
      createLoading={createLoading}
      data={data}
      page={page}
      onPressViewDetail={onPressViewDetail}
      avatarImage={avatarImage}
      backgroundColor={backgroundColor}
      className={className}
    />
  );
};
export default MyClasses;
