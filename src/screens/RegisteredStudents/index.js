import {useFocusEffect} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {FlatList} from 'react-native';
import {SearchBar} from 'react-native-screens';
import {BackgroundWrapper, SinglePlayerView} from '../../components';
import {classes} from '../../config';
import useGeneral from '../../hooks/useGeneral';
import {colors} from '../../utils/theme';
import styles from './styles';

const RegisteredStudents = ({navigation}) => {
  const {getAllStudents} = useGeneral();
  const [loading, setLoading] = useState(false);
  const [students, setStudents] = useState(null);
  const [perPage, setPerPage] = useState(null);
  const [page, setPage] = useState(1);
  const [showMore, setShowMore] = useState(true);

  const loadData = async pageNo => {
    try {
      setLoading(true);
      let apiData = {
        page: pageNo,
      };
      let res = await getAllStudents(apiData);
      setPerPage(res?.perPage);
      if (res?.students?.length > 0) {
        setStudents(
          students?.length > 0 && pageNo > 1
            ? [...students, ...res?.students]
            : res?.students,
        );
      } else if (pageNo == 1) {
        setStudents(res?.students);
      } else {
        setShowMore(false);
      }
      setLoading(false);
    } catch (e) {
      setStudents([]);
      setLoading(false);
      console.log('Error', e);
    }
  };

  useFocusEffect(
    useCallback(() => {
      loadData(1);
    }, []),
  );

  const backgroundColor = {
    0: colors.darkPeach,
    1: colors.yellow,
    2: colors.green,
    3: colors.sky,
  };
  const renderItem = ({item, index}) => (
    <SinglePlayerView
      onPressViewDetail={() =>
        navigation.navigate('ProfileStack', {
          screen: 'Profile',
          params: {id: item?.id},
        })
      }
      playerName={item?.first_name + ' ' + item?.last_name}
      playerId={item?.username}
      grade={item?.class_grade?.class_grade}
      btnName="VIEW PROFILE"
      image={item?.image_path}
      color={backgroundColor[index]}
      key={index}
    />
  );

  const listHeaderComponet = (
    <SearchBar style={styles.searchView} placeholder="Search a name" />
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
        ListHeaderComponent={listHeaderComponet}
        data={students}
        contentContainerStyle={styles.contentContainer}
        style={styles.container}
        renderItem={renderItem}
        onEndReached={() => {
          if (students?.length % perPage == 0 && showMore && !loading) {
            setPage(page + 1);
            loadData(page + 1);
          }
        }}
      />
    </BackgroundWrapper>
  );
};
export default RegisteredStudents;
