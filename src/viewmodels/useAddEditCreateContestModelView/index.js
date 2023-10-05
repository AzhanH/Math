import moment from 'moment/moment';
import {useState} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';
import {useDispatch, useSelector} from 'react-redux';
import {GetStateViaCountry} from '../../state/general';
import {Toast, getMessage} from '../../api/APIHelpers';
import {validateEmptyInputs} from '../../utils/helperFunctions';
import {CreateContest} from '../../state/contest';
const useAddEditCreateContestModelView = () => {
  const [title, setTitle] = useState(null);
  const dispatch = useDispatch();
  const {general} = useSelector(state => state.general);
  const [description, setDescription] = useState(null);
  const [image, setImage] = useState(null);
  const [contestStartDate, setContestStartDate] = useState(null);
  const [contestEndDate, setContestEndDate] = useState(null);
  const [showDropDown, setShowDropDown] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(null);
  const [contestStartTime, setContestStartTime] = useState(null);
  const [contestEndTime, setContestEndTime] = useState(null);
  const [stateLoading, setStateLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [dropDownFor, setDropDownFor] = useState(null);
  const [states, setStates] = useState([]);
  const [options, setOptions] = useState([
    {label: 'Level of Play', value: null},
    {label: 'Mode', value: null},
    {label: 'Grade', value: null},
    {label: 'Country', value: null},
    {label: 'State', value: null},
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
    let temp = [...options];
    temp[focusedIndex].value = {
      name: item?.name,
      value: item?.value,
    };
    setOptions(temp);
  };

  const createContest = async () => {
    try {
      const data = [
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
          label: 'End Date',
          end_time: contestEndTime,
        },
      ];
      setLoading(true);
      const apiData = validateEmptyInputs(data);
      const res = await dispatch(CreateContest(apiData)).unwrap();
      await setLoading(false);
    } catch (e) {
      setLoading(false);
      Toast.error(getMessage(e));
      console.log('Error', e);
    }
  };

  console.log(contestEndTime);
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
      createContest,
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
          : states,
      contestStartDate,
      contestStartTime,
      contestEndTime,
      contestEndDate,
      title,
      description,
      image,
      options,
      dropDownFor,
      showDropDown,
    },
  };
};
export default useAddEditCreateContestModelView;
