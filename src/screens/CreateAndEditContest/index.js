import React from 'react';
import AddEditCreateContestView from '../../views/AddEditCreateContestView';
import useAddEditCreateContestModelView from '../../viewmodels/useAddEditCreateContestModelView';

const CreateAndEditContest = ({route}) => {
  const {states, functions} = useAddEditCreateContestModelView({route});
  const {
    options,
    image,
    title,
    description,
    contestEndDate,
    contestStartDate,
    contestEndTime,
    contestStartTime,
    showDropDown,
    dropDownFor,
    dropDownArray,
    stateLoading,
    loading,
    isUpdate,
    status,
  } = states;
  const {
    onPressImage,
    onChangeTitle,
    onChangeDescription,
    onConfirmEndDate,
    onConfirmStartDate,
    onConfirmStartTime,
    onConfirmEndTime,
    onPressTableItem,
    onCloseDropDown,
    onPressDropDownItem,
    createOrUpdateContest,
    clearImage,
    onPressValuePicker,
  } = functions;
  return (
    <AddEditCreateContestView
      image={image}
      title={title}
      onChangeTitle={onChangeTitle}
      onChangeDescription={onChangeDescription}
      description={description}
      onPressImage={onPressImage}
      options={options}
      onConfirmEndDate={onConfirmEndDate}
      onConfirmStartDate={onConfirmStartDate}
      onConfirmStartTime={onConfirmStartTime}
      onConfirmEndTime={onConfirmEndTime}
      contestEndDate={contestEndDate}
      contestStartDate={contestStartDate}
      contestEndTime={contestEndTime}
      contestStartTime={contestStartTime}
      onPressTableItem={onPressTableItem}
      dropDownFor={dropDownFor}
      showDropDown={showDropDown}
      onCloseDropDown={onCloseDropDown}
      dropDownArray={dropDownArray}
      stateLoading={stateLoading}
      loading={loading}
      clearImage={clearImage}
      isUpdate={isUpdate}
      status={status}
      onPressValuePicker={onPressValuePicker}
      createOrUpdateContest={createOrUpdateContest}
      onPressDropDownItem={onPressDropDownItem}
    />
  );
};
export default CreateAndEditContest;
