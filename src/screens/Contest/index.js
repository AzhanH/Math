import React, {useCallback, useState} from 'react';
import {Image, View, FlatList} from 'react-native';
import images from '../../assets/images';
import {BackgroundWrapper, SearchBar, Button} from '../../components';
import styles from './styles';
import {SingleContestView} from './components';
import {useFocusEffect} from '@react-navigation/native';
import useContest from '../../hooks/useContest';
import moment from 'moment/moment';
const Contests = ({navigation}) => {
  const {getAllContests} = useContest();
  const [loading, setLoading] = useState(false);
  const [contests, setContests] = useState(null);
  const loadData = async () => {
    try {
      setLoading(true);
      let res = await getAllContests();
      setContests(res);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log('Error', e);
    }
  };

  useFocusEffect(
    useCallback(() => {
      loadData();
    }, []),
  );

  const backgroundColor = {
    0: 'orange',
    1: 'red',
    2: 'blue',
    3: 'green',
  };
  const renderItem = ({item, index}) => (
    <SingleContestView
      onPressContainer={() =>
        navigation.navigate('ContestDetail', {id: item?.id})
      }
      onPressSendInvite={() => navigation.navigate('InviteParents')}
      key={index}
      name={item?.title}
      image={item?.image_path}
      date={moment(item?.start_date).format('MMM DD, YYYY')}
      time={moment(item?.start_time, 'hh:mm:s').format('hh:mm A')}
      color={backgroundColor[index % 4]}
    />
  );

  const listHeaderComponent = (
    <View style={styles.row}>
      <SearchBar />
      <View style={styles.sortView}>
        <Image style={styles.filterIcon} source={images.filter} />
      </View>
    </View>
  );

  const listFooterComponet = (
    <Button
      onPress={() => navigation.navigate('CreateAndEditContest')}
      btnText={'CREATE CONTEST'}
    />
  );
  return (
    <BackgroundWrapper>
      <FlatList
        onRefresh={loadData}
        refreshing={loading}
        style={styles.contanier}
        ListHeaderComponent={listHeaderComponent}
        ListFooterComponent={listFooterComponet}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        data={contests}
        renderItem={renderItem}
        numColumns={2}
      />
    </BackgroundWrapper>
  );
};
export default Contests;
