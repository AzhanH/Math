import {useFocusEffect} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {View} from 'react-native';
import {BackgroundWrapper, Loader, Text} from '../../components';
import {useGeneral} from '../../hooks';
import styles from './styles';

const TermsAndCondition = () => {
  const {getTerms} = useGeneral();
  const [loading, setLoading] = useState(false);
  const [description, setDescription] = useState(null);

  useFocusEffect(
    useCallback(() => {
      loadData();
    }, []),
  );

  const loadData = async () => {
    try {
      setLoading(true);
      let res = await getTerms();
      setLoading(false);
      setDescription(res);
    } catch (e) {
      console.log('Error', e);
      setLoading(false);
    }
  };
  return (
    <BackgroundWrapper>
      <View style={styles.mainView}>
        {loading ? <Loader /> : <Text style={styles.text} text={description} />}
      </View>
    </BackgroundWrapper>
  );
};
export default TermsAndCondition;
