import React from 'react';
import {FlatList} from 'react-native';
import {BackgroundWrapper, Header} from '../../components';
import {subscriptionLogs} from '../../config';
import {SingleLogView} from './components';
import styles from './styles';

const SubsscriptionLogs = ({navigation}) => {
  const renderItem = ({item, index}) => (
    <SingleLogView color={item?.color} key={index} />
  );
  return (
    <BackgroundWrapper>
      <Header heading={'My Subscription Logs'} nav={navigation} />

      <FlatList
        contentContainerStyle={styles.contentContainerStyle}
        style={styles.container}
        data={subscriptionLogs}
        renderItem={renderItem}
      />
    </BackgroundWrapper>
  );
};
export default SubsscriptionLogs;
