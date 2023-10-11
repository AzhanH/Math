import React from 'react';
import {
  FlatList,
  Image,
  RefreshControl,
  TouchableOpacity,
  View,
} from 'react-native';
import images from '../../assets/images';
import {
  BackgroundWrapper,
  CustomModal,
  SinglePlayerView,
  Text,
} from '../../components';
import styles from './styles';
import NoDataView from '../../components/NoDataView';
import moment from 'moment';
const TeamDetailView = ({
  data,
  loadData,
  loading,
  onPressViewDetail,
  onPressEdit,
  modalRef,
  backgroundColor,
}) => {
  const renderItem = ({item, index}) => (
    <SinglePlayerView
      playerName={`${item?.user?.first_name} ${item?.user?.last_name}`}
      playerId={item?.user?.id}
      grade={item?.user?.class_grade?.name}
      onPressButton={() => onPressViewDetail(item)}
      btnName="VIEW DETAIL"
      image={item?.user?.image ? {uri: item?.user?.image} : images.childImage3}
      color={backgroundColor[index % 3]}
      key={index}
    />
  );
  const ListHeaderComponent = (
    <View style={styles.row}>
      <View>
        <Text style={styles.teamName} text={data?.name?.toUpperCase()} />
        <Text
          style={styles.updatedText}
          text={`Last Updated On: ${moment(data?.updated_at).format(
            'MMM DD ,YYYY ',
          )}`}
        />
      </View>

      <TouchableOpacity onPress={onPressEdit}>
        <Image source={images.edit} />
      </TouchableOpacity>
    </View>
  );

  return (
    <BackgroundWrapper>
      <FlatList
        refreshControl={
          <RefreshControl onRefresh={loadData} refreshing={loading} />
        }
        ListEmptyComponent={NoDataView}
        ListHeaderComponent={!loading && ListHeaderComponent}
        data={data?.students}
        contentContainerStyle={styles.contentContainer}
        style={styles.container}
        renderItem={renderItem}
      />
      <CustomModal
        ref={modalRef}
        heading={'oops!!'}
        subHeading={
          "You can't edit team because the contest is already underway"
        }
        image={images.danger}
      />
    </BackgroundWrapper>
  );
};
export default TeamDetailView;
