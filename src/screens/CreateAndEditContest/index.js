import React from 'react';
import AddEditCreateContestView from '../../views/AddEditCreateContestView';
import useAddEditCreateContestModelView from '../../viewmodels/useAddEditCreateContestModelView';

const CreateAndEditContest = () => {
  const {states, functions} = useAddEditCreateContestModelView();
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
    createContest,
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
      createContest={createContest}
      onPressDropDownItem={onPressDropDownItem}
    />
  );
};
export default CreateAndEditContest;
