import {useGetProfileQuery} from '../../api/profileApis';

const useProfileModelView = () => {
  const {data, isLoading, error} = useGetProfileQuery();

  return {
    states: {
      data,
      isLoading,
    },
  };
};
export default useProfileModelView;
