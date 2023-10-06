import React from 'react';
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
import moment from 'moment';
const ContestDetailView = ({options, details, loading, onPressEdit}) => {
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
                <Text
                  numberOfLines={3}
                  style={styles.contestDesc}
                  text={details?.description}
                />
              </View>
              <Image
                style={styles.image}
                source={
                  details?.image ? {uri: details?.image} : images.contestPlayer
                }
              />
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
                      details?.status === 0 && {color: colors.red},
                    ]}
                    text={details?.status === 0 ? 'Inactive' : 'Active'}
                  />
                </>
              }
            />
            <TableView array={options} />
            <Button onPress={onPressEdit} btnText={'EDIT'} />
          </View>
        </ScrollView>
      )}
    </BackgroundWrapper>
  );
};
export default ContestDetailView;
