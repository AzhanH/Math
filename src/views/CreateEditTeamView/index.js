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
  players,
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
}) => {
  const renderItem = ({item, index}) => (
    <SinglePlayerView
      playerName={
        type == 'Edit'
          ? item?.user?.first_name + ' ' + item?.user?.last_name
          : item?.first_name + ' ' + item?.last_name
      }
      playerId={type === 'Edit' ? item?.user?.id : item?.id}
      grade={type === 'Edit' ? item?.user?.class_grade : item?.class_grade}
      onPressButton={() => {
        if (type === 'Edit') {
          onPressRemove(index);
        } else {
          onPressAdd(index);
        }
      }}
      btnName={type == 'Edit' ? 'REMOVE' : item?.added ? 'REMOVE' : 'ADD'}
      image={item?.image}
      color={backgroundColors[index]}
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
        data={type == 'Edit' ? players : data?.data}
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
