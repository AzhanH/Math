import React from 'react';
import {FlatList, RefreshControl} from 'react-native';
import {BackgroundWrapper, SinglePlayerView, SearchBar} from '../../components';
import styles from './styles';

const AddMoreStudents = ({
  data,
  loading,
  backgroundColors,
  onPressViewDetail,
  loadData,
  onEndReached,
}) => {
  const renderItem = ({item, index}) => (
    <SinglePlayerView
      onPressViewDetail={() => onPressViewDetail(item?.id)}
      playerName={item?.first_name + ' ' + item?.last_name}
      playerId={item?.username}
      grade={item?.class_grade?.class_grade}
      btnName="ADD"
      image={item?.image_path}
      color={backgroundColors[index]}
      key={index}
    />
  );

  return (
    <BackgroundWrapper>
      <SearchBar style={styles.searchView} placeholder="Search a name" />
      <FlatList
        refreshControl={
          <RefreshControl onRefresh={loadData} refreshing={loading} />
        }
        data={data}
        contentContainerStyle={styles.contentContainer}
        style={styles.container}
        renderItem={renderItem}
        onEndReached={onEndReached}
      />
    </BackgroundWrapper>
  );
};
export default AddMoreStudents;
