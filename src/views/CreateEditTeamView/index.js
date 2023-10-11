import React from 'react';
import {FlatList, View, RefreshControl} from 'react-native';
import images from '../../assets/images';
import {
  BackgroundWrapper,
  CustomModal,
  InputField,
  Loader,
  SearchBar,
  SinglePlayerView,
  Button,
} from '../../components';
import styles from './styles';

const CreateEditTeamView = ({
  onEndReached,
  loadData,
  loading,
  data,
  type,
  onPressOk,
  backgroundColors,
  onPressAdd,
  modalRef,
  page,
  onPressCreateTeam,
  teamName,
  onPressRemove,
  addEditLoading,
  onChangeTeamName,
  onPressAddMore,
  selectedDeleteIndex,
  deleteLoading,
}) => {
  const renderItem = ({item, index}) => (
    <SinglePlayerView
      selectedIndex={selectedDeleteIndex}
      index={index}
      loading={deleteLoading}
      playerName={
        type == 'Edit'
          ? item?.user?.first_name + ' ' + item?.user?.last_name
          : item?.first_name + ' ' + item?.last_name
      }
      playerId={type === 'Edit' ? item?.user?.id : item?.id}
      grade={
        type === 'Edit'
          ? item?.user?.class_grade?.name
          : item?.class_grade?.name
      }
      onPressButton={() => {
        if (type === 'Edit') {
          onPressRemove(item, index);
        } else {
          onPressAdd(index);
        }
      }}
      btnName={type == 'Edit' ? 'REMOVE' : item?.added ? 'REMOVE' : 'ADD'}
      image={
        type == 'Edit'
          ? item?.user?.image
            ? {uri: item?.user?.image}
            : images.childImage3
          : item?.image
          ? {uri: item?.image}
          : images.childImage3
      }
      color={backgroundColors[index % 4]}
      key={index}
    />
  );

  const listHeaderComponent = (
    <View>
      <SearchBar style={styles.searchView} />
      <InputField
        value={teamName}
        maxLength={25}
        onChangeText={onChangeTeamName}
        placeholder="Team Name"
      />
    </View>
  );

  const ListFooterComponent = (
    <View>
      {addEditLoading ? (
        <Loader />
      ) : (
        <Button
          onPress={() => {
            if (type === 'Edit') {
              onPressAddMore();
            } else {
              onPressCreateTeam();
            }
          }}
          btnText={type == 'Edit' ? 'Add More' : 'Create'}
        />
      )}
      {loading && page > 1 && <Loader />}
    </View>
  );
  return (
    <BackgroundWrapper>
      <FlatList
        refreshControl={
          <RefreshControl onRefresh={loadData} refreshing={loading} />
        }
        ListFooterComponent={ListFooterComponent}
        ListHeaderComponent={listHeaderComponent}
        data={data}
        contentContainerStyle={styles.contentContainer}
        style={styles.container}
        renderItem={renderItem}
        onEndReached={onEndReached}
      />
      <CustomModal
        ref={modalRef}
        heading={'success'}
        subHeading={
          'The team has been created successfully.\n And students have been notified'
        }
        image={images.success}
        onPressOk={onPressOk}
      />
    </BackgroundWrapper>
  );
};
export default CreateEditTeamView;
