import React from 'react';
import {FlatList} from 'react-native';
import {BackgroundWrapper} from '../../components';
import {notifications} from '../../config';
import {SingleNotificationView} from './components';
import styles from './styles';

const Notifications = () => {
  const renderItem = ({item, index}) => (
    <SingleNotificationView
      seen={item?.isSeen}
      time={item?.time}
      date={item?.date}
      desc={item?.desc}
      key={index}
    />
  );
  return (
    <BackgroundWrapper>
      <FlatList
        renderItem={renderItem}
        style={styles.mainView}
        data={notifications}
      />
    </BackgroundWrapper>
  );
};
export default Notifications;
