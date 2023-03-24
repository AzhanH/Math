import React, {useCallback, useState} from 'react';
import {
  BackgroundWrapper,
  Text,
  Button,
  Rectangle,
  TableView,
  Loader,
} from '../../components';
import styles from './styles';
import {Image, ScrollView, View} from 'react-native';
import {vh, vw} from '../../utils/units';
import images from '../../assets/images';
import {colors} from '../../utils/theme';
import useContest from '../../hooks/useContest';
import {useFocusEffect} from '@react-navigation/native';
import {capitalize} from '../../utils/helperFunctions';
import moment from 'moment';
const ContestDetail = ({navigation, route}) => {
  const id = route?.params?.id;
  const {getContestDetail} = useContest();
  const [loading, setLoading] = useState(false);
  const [details, setDetails] = useState(null);
  const options = [
    {label: 'Level of play:', value: capitalize(details?.level_of_play)},
    {label: 'Mode:', value: capitalize(details?.mode)},
    {label: 'Grade:', value: capitalize(details?.class_grade?.class_grade)},
    {label: 'State:', value: capitalize(details?.state?.name)},
    {label: 'Country:', value: capitalize(details?.country?.name)},
    {label: 'Team Type:', value: details?.team_type_name},
  ];

  useFocusEffect(
    useCallback(() => {
      loadData();
    }, []),
  );

  const loadData = async () => {
    try {
      setLoading(true);
      let res = await getContestDetail(id);
      setDetails(res);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log('Error', e);
    }
  };
  return (
    <BackgroundWrapper>
      {loading ? (
        <Loader />
      ) : (
        <ScrollView style={styles.mainView}>
          <Rectangle
            rightSideStyle={styles.rightSide}
            midViewStyle={styles.midView}>
            <View style={[styles.row, styles.contestDetailView]}>
              <View style={styles.textView}>
                <Text
                  style={styles.contestName}
                  text={details?.title?.toUpperCase()}
                />
                <View style={[styles.row, {justifyContent: 'flex-start'}]}>
                  <Image style={styles.icons} source={images.calendarWhite} />
                  <Text
                    style={styles.dateText}
                    text={moment(details?.start_date).format('MMM DD , YYYY')}
                  />
                  <Image
                    style={[styles.icons, {marginLeft: vw}]}
                    source={images.time}
                  />

                  <Text
                    style={styles.dateText}
                    text={moment(details?.start_time, 'hh:mm:ss').format(
                      'hh:mm A',
                    )}
                  />
                </View>
                <Text style={styles.contestDesc} text={details?.description} />
              </View>
              <Image style={styles.image} source={{uri: details?.image_path}} />
            </View>
          </Rectangle>
          <View style={styles.timeView}>
            <View style={styles.row}>
              <View>
                <Text style={styles.dateHeading} text={'START DATE'} />
                <Text
                  style={styles.dateValue}
                  text={moment(details?.start_date).format('MMM DD,YYYY')}
                />
              </View>
              <View>
                <Text style={styles.dateHeading} text={'START TIME'} />
                <Text
                  style={styles.dateValue}
                  text={moment(details?.start_time, 'hh:mm:ss').format(
                    'hh:mm A',
                  )}
                />
              </View>
            </View>
            <View style={[styles.row, {marginTop: vh * 3}]}>
              <View>
                <Text style={styles.dateHeading} text={'END DATE'} />
                <Text
                  style={styles.dateValue}
                  text={moment(details?.end_time, 'hh:mm:ss').format('hh:mm A')}
                />
              </View>
              <View>
                <Text style={styles.dateHeading} text={'END TIME'} />
                <Text style={styles.dateValue} text={'May 13,2022'} />
              </View>
            </View>
          </View>
          <View style={styles.centeredView}>
            <Text style={styles.chooseText} text={'CHOOSE OPTIONS'} />
            <Text
              text={
                <>
                  <Text style={styles.status} text={'STATUS: '} />
                  <Text
                    style={[
                      styles.statusActive,
                      details?.status === 'Inactive' && {color: colors.red},
                    ]}
                    text={details?.status}
                  />
                </>
              }
            />

            <TableView array={options} />
            <Button
              onPress={() =>
                navigation.navigate('CreateAndEditContest', {type: 'Update'})
              }
              btnText={'EDIT'}
            />
          </View>
        </ScrollView>
      )}
    </BackgroundWrapper>
  );
};
export default ContestDetail;
