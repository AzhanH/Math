import React from 'react';
import {FlatList, RefreshControl} from 'react-native';
import {BackgroundWrapper} from '../../components';
import {SingleNotificationView} from './components';
import styles from './styles';
import moment from 'moment';

const NotificationView = ({
  data,
  selectedId,
  readNotification,
  loading,
  onEndReached,
  loadData,
  markLoading,
}) => {
  const renderItem = ({item, index}) => (
    <SingleNotificationView
      id={item?.id}
      selectedId={selectedId}
      loading={markLoading}
      seen={item?.read_at}
      time={moment(item?.created_at).format('hh:mm a')}
      date={moment(item?.created_at).format('YYYY/MM/DD')}
      desc={item?.data?.body}
      key={index}
      onPressMarkAsRead={() => readNotification(item?.id)}
    />
  );
  return (
    <BackgroundWrapper>
      <FlatList
        refreshControl={
          <RefreshControl onRefresh={loadData} refreshing={loading} />
        }
        renderItem={renderItem}
        style={styles.mainView}
        data={data}
      />
    </BackgroundWrapper>
  );
};
export default NotificationView;
