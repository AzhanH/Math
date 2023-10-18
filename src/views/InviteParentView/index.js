import React from 'react';
import {FlatList, RefreshControl, View} from 'react-native';
import images from '../../assets/images';
import {
  BackgroundWrapper,
  SearchBar,
  Button,
  Loader,
  CustomModal,
} from '../../components';
import {vh} from '../../utils/units';
import SingleInvitaionView from './components/SingleInvitationView';
import styles from './styles';
import NoDataView from '../../components/NoDataView';

const InviteParentView = ({
  loadData,
  data,
  backgroundColor,
  loading,
  onPressSendInvite,
  createContestLoading,
  onPressIcon,
  onEndReached,
  modalRef,
  page,
  onChangeSearch,
  onPressOk,
}) => {
  const renderItem = ({item, index}) => (
    <SingleInvitaionView
      index={index}
      name={item?.first_name + item?.last_name}
      image={item?.image ? {uri: item?.image} : images.childImage1}
      color={backgroundColor[index % 4]}
      onPressIcon={() => onPressIcon(index)}
      added={item?.added}
      grade={item?.class_grade?.name}
    />
  );
  const listHeaderComponent = (
    <SearchBar onChangeSearch={onChangeSearch} style={styles.searchBar} />
  );
  const listFooterComponent = (
    <View>
      {createContestLoading ? (
        <Loader />
      ) : (
        <Button onPress={onPressSendInvite} btnText={'SEND INVITE'} />
      )}
      {loading && page > 1 && <Loader />}
    </View>
  );

  return (
    <BackgroundWrapper>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={loadData} />
        }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: vh}}
        renderItem={renderItem}
        style={styles.container}
        ListEmptyComponent={!loading && NoDataView}
        ListHeaderComponent={listHeaderComponent}
        ListFooterComponent={listFooterComponent}
        data={data}
        onEndReached={onEndReached}
      />
      <CustomModal
        onPressOk={onPressOk}
        image={images.success}
        heading={'Invitation Sent'}
        subHeading={
          "The invitation has been sent to the Parent(s)/Teacher(s). You'll be notified once it is accepted or declined."
        }
        ref={modalRef}
      />
    </BackgroundWrapper>
  );
};
export default InviteParentView;
