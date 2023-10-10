import React from 'react';
import BackgroundWrapper from '../../components/BackgroundWrapper';
import {FlatList, RefreshControl, View} from 'react-native';
import {Button, SinglePlayerView} from '../../components';
import styles from './styles';
import images from '../../assets/images';
import NoDataView from '../../components/NoDataView';

const EditClassView = ({
  loading,
  data,
  backgroundColors,
  loadData,
  selectedIndex,
  removeLoading,
  removeStudent,
  onPressAddStudents,
}) => {
  const renderItem = ({item, index}) => (
    <SinglePlayerView
      index={index}
      selectedIndex={selectedIndex}
      loading={removeLoading}
      playerName={`${item?.student?.first_name} ${item?.student?.last_name}`}
      playerId={item?.student?.id}
      grade={item?.student?.class_grade}
      onPressButton={() => removeStudent(item?.id, index)}
      btnName={'Remove'}
      image={
        item?.student?.image ? {uri: item?.student?.image} : images.childImage1
      }
      color={backgroundColors[index % 4]}
    />
  );

  const ListFooterComponent = (
    <View>
      <Button onPress={onPressAddStudents} btnText={'Add Students'} />
    </View>
  );
  return (
    <BackgroundWrapper>
      <FlatList
        refreshControl={
          <RefreshControl onRefresh={loadData} refreshing={loading} />
        }
        ListEmptyComponent={NoDataView}
        ListFooterComponent={ListFooterComponent}
        data={data?.classhasstudents}
        contentContainerStyle={styles.contentContainer}
        style={styles.container}
        renderItem={renderItem}
      />
    </BackgroundWrapper>
  );
};

export default EditClassView;
