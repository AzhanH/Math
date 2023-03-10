import {useFocusEffect} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {View} from 'react-native';
import {BackgroundWrapper, Loader, Text} from '../../components';
import {useGeneral} from '../../hooks';
import styles from './styles';

const PrivacyPolicy = () => {
  const {getPrivacyPolicy} = useGeneral();
  const [loading, setLoading] = useState(false);
  const [description, setDescription] = useState(false);

  const loadData = async () => {
    try {
      setLoading(true);
      let res = await getPrivacyPolicy();
      setLoading(false);
      setDescription(res);
    } catch (e) {
      setLoading(false);
      console.log('Error', e);
    }
  };

  useFocusEffect(
    useCallback(() => {
      loadData();
    }, []),
  );
  return (
    <BackgroundWrapper>
      <View style={styles.mainView}>
        {loading ? <Loader /> : <Text style={styles.text} text={description} />}
      </View>
    </BackgroundWrapper>
  );
};
export default PrivacyPolicy;
