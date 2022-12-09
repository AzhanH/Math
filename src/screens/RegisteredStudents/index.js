import React from 'react';
import {FlatList} from 'react-native';
import {SearchBar} from 'react-native-screens';
import {BackgroundWrapper, SinglePlayerView} from '../../components';
import {classes} from '../../config';
import styles from './styles';

const RegisteredStudents = () => {
  const renderItem = ({item, index}) => (
    <SinglePlayerView
      btnName="VIEW PROFILE"
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