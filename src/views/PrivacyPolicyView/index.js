import React from 'react';
import {BackgroundWrapper, Loader, Text} from '../../components';
import {ScrollView} from 'react-native';
import styles from './styles';

const PrivacyPolicyView = ({data, loading}) => {
  return (
    <BackgroundWrapper>
      {loading ? (
        <Loader />
      ) : (
        <ScrollView style={styles.mainView}>
          <Text style={styles.text} text={data?.description} />
        </ScrollView>
      )}
    </BackgroundWrapper>
  );
};
export default PrivacyPolicyView;
