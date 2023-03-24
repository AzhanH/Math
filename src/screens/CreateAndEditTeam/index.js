import React, {useCallback, useRef, useState} from 'react';
import {FlatList, View} from 'react-native';
import images from '../../assets/images';
import {
  BackgroundWrapper,
  CustomModal,
  InputField,
  Loader,
  SearchBar,
  SinglePlayerView,
  Button,
} from '../../components';
import styles from './styles';
import {useGeneral, useTeams} from '../../hooks';
import {useFocusEffect} from '@react-navigation/native';
import {colors} from '../../utils/theme';

const CreateAndEditTeam = ({navigation, route}) => {
  const type = route?.params?.type;
  const modalRef = useRef(null);
  const {getAllStudents} = useGeneral();
  const {createTeam} = useTeams();

  const [loading, setLoading] = useState(false);
  const [createLoading, setCreateLoading] = useState(false);
  const [perPage, setPerPage] = useState(null);
  const [students, setStudents] = useState(null);
  const [teamName, setTeamName] = useState(null);
  const [page, setPage] = useState(1);
  const [message, setMessage] = useState(null);
  const [showMore, setShowMore] = useState(true);
  const [studentIds, setStudentIds] = useState([]);

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

  const checkIfAnyStudentIsAdded = () => {
    return students?.some(v => v?.is_added);
  };

  const onPressCreate = async () => {
    try {
      setCreateLoading(true);
      let apiData = {
        ids: studentIds,
        title: teamName,
      };
      let res = await createTeam(apiData);
      setMessage(res?.message);
      modalRef.current.show();
      setCreateLoading(false);
    } catch (e) {
      setCreateLoading(false);
      console.log('error', e);
    }
  };

  const renderItem = ({item, index}) => (
    <SinglePlayerView
      playerName={item?.first_name + ' ' + item?.last_name}
      playerId={item?.username}
      grade={item?.class_grade?.class_grade}
      onPressRemove={() => modalRef.current.show()}
      onPressAdd={() => {
        if (!item?.is_added) {
          setStudentIds([...studentIds, item?.id]);
          let temp = [...students];
          temp[index].is_added = !temp[index].is_added;
          setStudents(temp);
        }
      }}
      btnName={type === 'Edit' ? 'REMOVE' : item?.is_added ? 'ADDED' : 'ADD'}
      image={item?.image}
      color={backgroundColor[index]}
      key={index}
    />
  );

  const listHeaderComponent = (
    <View>
      <SearchBar style={styles.searchView} />
      <InputField
        value={teamName}
        maxLength={25}
        onChangeText={setTeamName}
        placeholder="Team Name"
      />
    </View>
  );

  const ListFooterComponent = (
    <View>
      {checkIfAnyStudentIsAdded() &&
        (createLoading ? (
          <Loader />
        ) : (
          <Button onPress={onPressCreate} btnText={'Create'} />
        ))}
      {loading && page > 1 && <Loader />}
    </View>
  );
  return (
    <BackgroundWrapper>
      <FlatList
        onRefresh={() => {
          setPage(1);
          setShowMore(true);
          loadData(1);
        }}
        refreshing={loading}
        ListFooterComponent={ListFooterComponent}
        ListHeaderComponent={listHeaderComponent}
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
      <CustomModal
        ref={modalRef}
        heading={'success'}
        subHeading={message}
        image={images.success}
        onPressOk={() => navigation?.pop()}
      />
    </BackgroundWrapper>
  );
};
export default CreateAndEditTeam;
