import React from 'react';
import CreateProfileView from '../../views/CreateProfileView';
import useProfileCreationModelView from '../../viewmodels/useProfileCreationModelView';

const ProfileCreation = ({route}) => {
  const {functions, states} = useProfileCreationModelView({route});
  const {
    validationSchema,
    initialValues,
    dropDownFor,
    showDropDown,
    dropDownArray,
    loading,
    fieldName,
    createLoading,
  } = states;
  const {
    onPressDropDown,
    closeDropDown,
    onPressDropDownItem,
    onPressConfirmDate,
    onPressCreate,
    goToPlans,
  } = functions;
  return (
    <CreateProfileView
      loading={loading}
      fieldName={fieldName}
      initialValues={initialValues}
      onPressDropDown={onPressDropDown}
      validationSchema={validationSchema}
      dropDownFor={dropDownFor}
      showDropDown={showDropDown}
      dropDownArray={dropDownArray}
      onPressDropDownItem={onPressDropDownItem}
      closeDropDown={closeDropDown}
      createLoading={createLoading}
      onPressCreate={onPressCreate}
      onPressSkip={goToPlans}
      onPressConfirmDate={onPressConfirmDate}
    />
  );
};

export default ProfileCreation;
