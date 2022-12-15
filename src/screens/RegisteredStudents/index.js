import React from 'react';
import {FlatList} from 'react-native';
import {SearchBar} from 'react-native-screens';
import {BackgroundWrapper, SinglePlayerView} from '../../components';
import {classes} from '../../config';
import styles from './styles';

const RegisteredStudents = ({navigation}) => {
  const renderItem = ({item, index}) => (
    <SinglePlayerView
      onPressViewDetail={() =>
        navigation.navigate('ProfileStack', {screen: 'Profile', params: item})
      }
      playerName={item?.name}
      playerId={item?.playerId}
      grade={item?.grade}
      btnName="VIEW DETAIL"
      image={item?.image}
      color={item?.color}
      key={index}
    />
  );

  const listHeaderComponet = (
    <SearchBar style={styles.searchView} placeholder="Search a name" />
  );
  return (
    <BackgroundWrapper>
      <FlatList
        ListHeaderComponent={listHeaderComponet}
        data={classes}
        contentContainerStyle={styles.contentContainer}
        style={styles.container}
        renderItem={renderItem}
      />
    </BackgroundWrapper>
  );
};
export default RegisteredStudents;
