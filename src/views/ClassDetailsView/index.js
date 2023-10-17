import React from 'react';
import {
  FlatList,
  RefreshControl,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import {BackgroundWrapper, SinglePlayerView, Text} from '../../components';
import NoDataView from '../../components/NoDataView';
import styles from './styles';
import moment from 'moment';
import images from '../../assets/images';

const ClassDetailsView = ({
  loading,
  data,
  loadData,
  backgroundColor,
  onPressEditClass,
  onPressViewDetail,
}) => {
  const renderItem = ({item, index}) => (
    <SinglePlayerView
      playerName={`${item?.student?.first_name} ${item?.student?.last_name}`}
      playerId={item?.user_id}
      grade={item?.user?.class_grade}
      onPressButton={() => onPressViewDetail(item?.student?.id)}
      btnName="VIEW DETAIL"
      image={
        item?.student?.image ? {uri: item?.student?.image} : images.childImage1
      }
      color={backgroundColor[index]}
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

      <TouchableOpacity onPress={onPressEditClass}>
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
        ListEmptyComponent={!loading && NoDataView}
        ListHeaderComponent={!loading && ListHeaderComponent}
        data={data?.classhasstudents}
        contentContainerStyle={styles.contentContainer}
        style={styles.container}
        renderItem={renderItem}
      />
    </BackgroundWrapper>
  );
};
export default ClassDetailsView;
