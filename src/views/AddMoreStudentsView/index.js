import React from 'react';
import {FlatList, RefreshControl} from 'react-native';
import {BackgroundWrapper, SinglePlayerView, SearchBar} from '../../components';
import styles from './styles';
import images from '../../assets/images';
const AddMoreStudents = ({
  data,
  loading,
  backgroundColors,
  loadData,
  onEndReached,
  selectedIndex,
  addLoading,
  onPressAdd,
}) => {
  const renderItem = ({item, index}) => (
    <SinglePlayerView
      key={index}
      onPressButton={() => {
        if (!item?.added) {
          onPressAdd(index, item);
        }
      }}
      selectedIndex={selectedIndex}
      loading={addLoading}
      index={index}
      playerName={item?.first_name + ' ' + item?.last_name}
      playerId={item?.id}
      grade={item?.class_grade?.name}
      btnName={item?.added ? 'ADDED' : 'ADD'}
      image={item?.image ? {uri: item?.image} : images.childImage3}
      color={backgroundColors[index % 4]}
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
