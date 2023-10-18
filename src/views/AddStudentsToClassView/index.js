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
const AddStudentsToClassView = ({
  data,
  loading,
  backgroundColors,
  loadData,
  onEndReached,
  selectedIndex,
  addLoading,
  onPressAdd,
  page,
  onChangeSearch,
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
      grade={item?.class_grade?.class_grade}
      btnName={item?.added ? 'ADDED' : 'ADD'}
      image={item?.image ? {uri: item?.image} : images.childImage1}
      color={backgroundColors[index % 4]}
    />
  );

  const ListFooterComponent = page > 1 && loading && <Loader />;
  return (
    <BackgroundWrapper>
      <SearchBar
        onChangeSearch={onChangeSearch}
        style={styles.searchView}
        placeholder="Search a name"
      />
      <FlatList
        refreshControl={
          <RefreshControl onRefresh={loadData} refreshing={loading} />
        }
        showsVerticalScrollIndicator={false}
        data={data}
        ListEmptyComponent={!loading && NoDataView}
        contentContainerStyle={styles.contentContainer}
        style={styles.container}
        ListFooterComponent={ListFooterComponent}
        renderItem={renderItem}
        onEndReached={onEndReached}
      />
    </BackgroundWrapper>
  );
};
export default AddStudentsToClassView;
