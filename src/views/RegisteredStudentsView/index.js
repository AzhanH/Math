import React from 'react';
import {FlatList, RefreshControl} from 'react-native';
import {SearchBar} from 'react-native-screens';
import {BackgroundWrapper, SinglePlayerView} from '../../components';
import styles from './styles';

const RegisteredStudentsView = ({
  data,
  loading,
  backgroundColors,
  onPressViewDetail,
}) => {
  const renderItem = ({item, index}) => (
    <SinglePlayerView
      onPressViewDetail={() => onPressViewDetail(item?.id)}
      playerName={item?.first_name + ' ' + item?.last_name}
      playerId={item?.username}
      grade={item?.class_grade?.class_grade}
      btnName="VIEW PROFILE"
      image={item?.image_path}
      color={backgroundColors[index]}
      key={index}
    />
  );

  const listHeaderComponet = (
    <SearchBar style={styles.searchView} placeholder="Search a name" />
  );

  return (
    <BackgroundWrapper>
      <FlatList
        refreshControl={<RefreshControl refreshing={loading} />}
        ListHeaderComponent={listHeaderComponet}
        data={data}
        contentContainerStyle={styles.contentContainer}
        style={styles.container}
        renderItem={renderItem}
      />
    </BackgroundWrapper>
  );
};
export default RegisteredStudentsView;
