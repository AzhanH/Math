import {useDispatch} from 'react-redux';
import {getMessage, Toast} from '../../api/APIHelpers';
import {CreateTeam, GetAllTeams} from '../../state/teams';

const useTeams = () => {
  const dispatch = useDispatch();
  const createTeam = async data => {
    try {
      let apiData = {};
      if (data?.ids?.length > 0) {
        data?.ids?.map((v, i) => {
          apiData[`student_ids[${i}]`] = v;
        });
      }
      if (!data?.title) {
        throw new Error('Please Enter Team Name');
      }
      if (apiData) {
        apiData.title = data?.title;
        let res = await dispatch(CreateTeam(apiData)).unwrap();
        return res;
      }
    } catch (e) {
      Toast.error(getMessage(e));
      throw new Error(e);
    }
  };

  const getAllTeams = async data => {
    try {
      let res = await dispatch(GetAllTeams(data)).unwrap();
      return {
        perPage: res?.data?.per_page,
        teams: res?.data?.data,
      };
    } catch (e) {
      Toast.error(getMessage(e));
      throw new Error(e);
    }
  };
  return {
    createTeam,
    getAllTeams,
  };
};

export default useTeams;
