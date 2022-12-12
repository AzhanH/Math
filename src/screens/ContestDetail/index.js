import React from 'react';
import {
  BackgroundWrapper,
  Text,
  Button,
  Rectangle,
  TableView,
} from '../../components';
import styles from './styles';
import {Image, ScrollView, View} from 'react-native';
import {vh, vw} from '../../utils/units';
import images from '../../assets/images';
const ContestDetail = ({navigation}) => {
  const options = [
    {label: 'Level of play', value: 'Classroom'},
    {label: 'Mode', value: 'Additon'},
    {label: 'Grade', value: 'First'},
    {label: 'State', value: 'PA'},
    {label: 'Country', value: 'USA'},
    {label: 'Team Type', value: 'Multip-player'},
  ];
  return (
    <BackgroundWrapper>
      <ScrollView style={styles.mainView}>
        <Rectangle
          rightSideStyle={styles.rightSide}
          midViewStyle={styles.midView}>
          <View style={[styles.row, styles.contestDetailView]}>
            <View style={styles.textView}>
              <Text style={styles.contestName} text={'ABC CONTEST'} />
              <View style={[styles.row, {justifyContent: 'flex-start'}]}>
                <Image style={styles.icons} source={images.calendarWhite} />
                <Text style={styles.dateText} text={'May 5,2022'} />
                <Image
                  style={[styles.icons, {marginLeft: vw}]}
                  source={images.time}
                />
                <Text style={styles.dateText} text={'5:00PM'} />
              </View>
              <Text
                style={styles.contestDesc}
                text={
                  'You have the knowledge now put to use by playing along real games with real pros in real time'
                }
              />
            </View>
            <Image style={{right: 10}} source={images.contestPlayer} />
          </View>
        </Rectangle>
        <View style={styles.timeView}>
          <View style={styles.row}>
            <View>
              <Text style={styles.dateHeading} text={'START DATE'} />
              <Text style={styles.dateValue} text={'May 13,2022'} />
            </View>
            <View>
              <Text style={styles.dateHeading} text={'START TIME'} />
              <Text style={styles.dateValue} text={'May 13,2022'} />
            </View>
          </View>
          <View style={[styles.row, {marginTop: vh * 3}]}>
            <View>
              <Text style={styles.dateHeading} text={'END DATE'} />
              <Text style={styles.dateValue} text={'May 13,2022'} />
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
                <Text style={styles.status} text={'STATUS:'} />
                <Text style={styles.statusActive} text={'ACTIVE'} />
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
    </BackgroundWrapper>
  );
};
export default ContestDetail;
