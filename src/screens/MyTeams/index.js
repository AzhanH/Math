import {useFocusEffect} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {FlatList, View} from 'react-native';
import images from '../../assets/images';
import {BackgroundWrapper, Button, Loader} from '../../components';
import {useTeams} from '../../hooks';
import {colors} from '../../utils/theme';
import {vw} from '../../utils/units';
import {SingleTeamView} from './components';
import styles from './styles';

const MyTeams = ({navigation}) => {
  const {getAllTeams} = useTeams();

  const [loading, setLoading] = useState(false);
  const [perPage, setPerPage] = useState(0);
  const [teams, setTeams] = useState(null);
  const [showMore, setShowMore] = useState(true);
  const [page, setPage] = useState(1);

  useFocusEffect(
    useCallback(() => {
      loadData(1);
    }, []),
  );

  const loadData = async pageNo => {
    try {
      setLoading(true);
      let apiData = {
        page: pageNo,
      };
      let res = await getAllTeams(apiData);
      setPerPage(res?.perPage);
      if (res?.students?.length > 0) {
        setTeams(
          teams?.length > 0 && pageNo > 1
            ? [...students, ...res?.teams]
            : res?.teams,
        );
      } else if (pageNo == 1) {
        setTeams(res?.teams);
      } else {
        setShowMore(false);
      }
      setLoading(false);
    } catch (e) {
      setTeams([]);
      setLoading(false);
      console.log('Error', e);
    }
  };

  const backgroundColor = {
    0: colors.darkPeach,
    1: colors.yellow,
    2: colors.green,
  };

  const avatarImage = {
    0: images.childImage1,
    1: images.childImage2,
    2: images.childImage3,
  };
  const renderItem = ({item, index}) => (
    <SingleTeamView
      onPressViewDetail={() => navigation.navigate('TeamDetail', {data: item})}
      key={index}
      teamName={item?.title}
      image={avatarImage[index % 3]}
      color={backgroundColor[index % 3]}
    />
  );

  const ListFooterComponent = (
    <View>
      {loading && page > 1 && <Loader />}
      <Button
        onPress={() => navigation.navigate('CreateAndEditTeam')}
        containerStyle={{width: vw * 50}}
        black
        btnText={'ADD'}
      />
    </View>
  );
  return (
    <BackgroundWrapper>
      <FlatList
        refreshing={loading}
        onRefresh={() => {
          setPage(1);
          setShowMore(true);
          loadData(1);
        }}
        ListFooterComponent={ListFooterComponent}
        data={teams}
        renderItem={renderItem}
        style={styles.mainView}
        onEndReached={() => {
          if (teams?.length % perPage == 0 && showMore && !loading) {
            setPage(page + 1);
            loadData(page + 1);
          }
        }}
      />
    </BackgroundWrapper>
  );
};
export default MyTeams;
