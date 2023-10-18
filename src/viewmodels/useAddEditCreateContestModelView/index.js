import moment from 'moment/moment';
import {useState} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';
import {useDispatch, useSelector} from 'react-redux';
import {GetStateViaCountry} from '../../state/general';
import {Toast, getMessage} from '../../api/APIHelpers';
import {validateEmptyInputs} from '../../utils/helperFunctions';
import {CreateContest, UpdateContest} from '../../state/contest';
import {useNavigation} from '@react-navigation/native';
const useAddEditCreateContestModelView = ({route}) => {
  const navigation = useNavigation();
  const details = route?.params?.details;
  const [title, setTitle] = useState(details ? details?.title : null);
  const dispatch = useDispatch();
  const {general} = useSelector(state => state.general);
  const [description, setDescription] = useState(
    details ? details?.description : null,
  );
  const [image, setImage] = useState(details ? details?.image : null);
  const [contestStartDate, setContestStartDate] = useState(
    details ? moment(details?.start_date).format('YYYY-MM-DD') : null,
  );
  const [contestEndDate, setContestEndDate] = useState(
    details ? moment(details?.end_date).format('YYYY-MM-DD') : null,
  );
  const [showDropDown, setShowDropDown] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(null);
  const [contestStartTime, setContestStartTime] = useState(
    details ? details?.start_time : null,
  );
  const [contestEndTime, setContestEndTime] = useState(
    details ? details?.end_time : null,
  );
  const [status, setStatus] = useState(details ? details?.status : null);
  const [stateLoading, setStateLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [dropDownFor, setDropDownFor] = useState(null);
  const [states, setStates] = useState([]);
  const [options, setOptions] = useState([
    {
      label: 'Level of Play',
      value: details
        ? {
            value: details?.competition_level?.id,
            name: details?.competition_level?.name,
          }
        : null,
    },
    {
      label: 'Mode',
      value: details
        ? {
            value: details?.mode?.id,
            name: details?.mode?.name,
          }
        : null,
    },
    {
      label: 'Grade',
      value: details
        ? {
            value: details?.class_grade?.id,
            name: details?.class_grade?.name,
          }
        : null,
    },
    {
      label: 'Country',
      value: details
        ? {
            value: details?.country?.id,
            name: details?.country?.name,
          }
        : null,
    },
    {
      label: 'State',
      value: details
        ? {
            value: details?.state?.id,
            name: details?.state?.name,
          }
        : null,
    },
  ]);

  const onPressImage = async () => {
    try {
      let option = {
        mediaType: 'photo',
        quality: 0.5,
        selectionLimit: 1,
      };
      const result = await launchImageLibrary(option);
      let _res = result?.assets[0];
      let _img = {
        uri: _res?.uri,
        type: _res?.type,
        name: _res?.fileName,
      };
      setImage(_img);
    } catch (e) {
      console.log('Error');
    }
  };
  const onPressTableItem = async (v, i) => {
    try {
      setFocusedIndex(i);
      setDropDownFor(v?.label);
      if (v?.label === 'State') {
        if (!options[3]?.value) {
          Toast.error('Please Select Coutry before selecting state');
          throw new Error('Please Select Coutry before selecting state');
        }
        setStateLoading(true);
        let apiData = {
          country_id: options[3]?.value?.value,
        };
        const res = await dispatch(GetStateViaCountry(apiData)).unwrap();
        if (res?.data?.length > 0) {
          setStates(res?.data?.map(v => ({name: v?.name, value: v?.id})));
        }
        setShowDropDown(true);
        setStateLoading(false);
      } else {
        setShowDropDown(true);
      }
    } catch (e) {
      setFocusedIndex(null);
      setStateLoading(false);
    }
  };

  const clearImage = () => setImage(null);
  const onChangeTitle = text => setTitle(text);
  const onChangeDescription = text => setDescription(text);
  const onConfirmStartTime = time =>
    setContestStartTime(moment(time).format('hh:mm'));
  const onConfirmEndTime = time =>
    setContestEndTime(moment(time).format('hh:mm'));
  const onConfirmStartDate = date =>
    setContestStartDate(moment(date).format('YYYY-MM-DD'));
  const onConfirmEndDate = date =>
    setContestEndDate(moment(date).format('YYYY-MM-DD'));
  const onCloseDropDown = () => setShowDropDown(false);

  const onPressDropDownItem = item => {
    if (dropDownFor !== 'Status') {
      let temp = [...options];
      temp[focusedIndex].value = {
        name: item?.name,
        value: item?.value,
      };
      setOptions(temp);
    } else {
      setStatus(item?.value);
    }
  };
  const createOrUpdateContest = async () => {
    try {
      let data = [
        {label: 'Title', title},
        {label: 'Contest Image', image: image},
        {label: 'Description', description},
        {
          label: 'Level Of Play',
          competition_level_id: options[0]?.value?.value,
        },
        {
          label: 'Mode',
          mode_id: options[1]?.value?.value,
        },
        {
          label: 'Class Grade',
          class_grade_id: options[2]?.value?.value,
        },
        {
          label: 'Country',
          country_id: options[3]?.value?.value,
        },
        {
          label: 'State',
          state_id: options[4]?.value?.value,
        },
        {
          label: 'Start Date',
          start_date: contestStartDate,
        },
        {
          label: 'Start Time',
          start_time: contestStartTime,
        },
        {
          label: 'End Date',
          end_date: contestEndDate,
        },
        {
          label: 'End Time',
          end_time: contestEndTime,
        },
        {
          label: 'Status',
          status,
        },
      ];
      if (details) {
        data = [
          ...data,
          {label: 'Method', _method: 'put'},
          {label: 'Id', id: details?.id},
        ];
      }
      setLoading(true);
      const apiData = validateEmptyInputs(data);

      if (details) {
        if (typeof apiData.image == 'string') {
          delete apiData.image;
        }
        res = await dispatch(UpdateContest(apiData)).unwrap();
      } else {
        res = await dispatch(CreateContest(apiData)).unwrap();
      }
      Toast.success(
        details ? 'Contest Updated Successfully' : 'Contest Added Successfully',
      );
      navigation.goBack();
      setLoading(false);
    } catch (e) {
      setLoading(false);
      Toast.error(getMessage(e));
      console.log('Error', e);
    }
  };

  const onPressValuePicker = () => {
    setShowDropDown(true);
    setDropDownFor('Status');
  };

  return {
    functions: {
      onPressImage,
      onChangeTitle,
      onChangeDescription,
      onConfirmStartTime,
      onConfirmEndTime,
      onConfirmStartDate,
      onConfirmEndDate,
      onPressTableItem,
      onCloseDropDown,
      onPressDropDownItem,
      createOrUpdateContest,
      onPressValuePicker,
      clearImage,
    },
    states: {
      loading,
      stateLoading,
      dropDownArray:
        dropDownFor === 'Level of Play'
          ? general?.levels?.map(v => ({name: v?.name, value: v?.id}))
          : dropDownFor === 'Mode'
          ? general?.modes?.map(v => ({name: v?.name, value: v?.id}))
          : dropDownFor === 'Grade'
          ? general?.classes?.map(v => ({name: v?.name, value: v?.id}))
          : dropDownFor === 'Country'
          ? general?.countries?.map(v => ({name: v?.name, value: v?.id}))
          : dropDownFor === 'State'
          ? states
          : [
              {name: 'Active', value: 1},
              {name: 'In-Active', value: 0},
            ],
      contestStartDate,
      contestStartTime,
      contestEndTime,
      contestEndDate,
      title,
      description,
      image,
      isUpdate: details ? true : false,
      options,
      status,
      dropDownFor,
      showDropDown,
    },
  };
};
export default useAddEditCreateContestModelView;
