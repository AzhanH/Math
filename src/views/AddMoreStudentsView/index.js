import React from 'react';
import {FlatList, RefreshControl} from 'react-native';
import {
  BackgroundWrapper,
  SinglePlayerView,
  SearchBar,
  Loader,
} from '../../components';
import styles from './styles';
import images from '../../assets/images';
import NoDataView from '../../components/NoDataView';
const AddMoreStudents = ({
  data,
  loading,
  backgroundColors,
  loadData,
  onEndReached,
  selectedIndex,
  addLoading,
  onChangeSearch,
  onPressAdd,
  page,
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

  const ListFooterComponent = loading && page > 1 && <Loader />;

  return (
    <BackgroundWrapper>
      <SearchBar
        onChangeSearch={onChangeSearch}
        style={styles.searchView}
        placeholder="Search a name"
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl onRefresh={loadData} refreshing={loading} />
        }
        data={data}
        ListEmptyComponent={!loading && NoDataView}
        ListFooterComponent={ListFooterComponent}
        contentContainerStyle={styles.contentContainer}
        style={styles.container}
        renderItem={renderItem}
        onEndReached={onEndReached}
      />
    </BackgroundWrapper>
  );
};
export default AddMoreStudents;
