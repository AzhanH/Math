import React from 'react';
import {FlatList, RefreshControl} from 'react-native';
import {BackgroundWrapper, SinglePlayerView, SearchBar} from '../../components';
import styles from './styles';
import images from '../../assets/images';

const RegisteredStudentsView = ({
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
      btnName="VIEW PROFILE"
      image={item?.image ? {uri: item?.image} : images.childImage2}
      color={backgroundColors[index % 4]}
      key={index}
    />
  );

  const listHeaderComponet = (
    <SearchBar style={styles.searchView} placeholder="Search a name" />
  );

  return (
    <BackgroundWrapper>
      <FlatList
        refreshControl={
          <RefreshControl onRefresh={loadData} refreshing={loading} />
        }
        ListHeaderComponent={listHeaderComponet}
        data={data}
        contentContainerStyle={styles.contentContainer}
        style={styles.container}
        renderItem={renderItem}
        onEndReached={onEndReached}
      />
    </BackgroundWrapper>
  );
};
export default RegisteredStudentsView;
