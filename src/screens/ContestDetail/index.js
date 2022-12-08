import React from 'react';
import {BackgroundWrapper, Text, Button} from '../../components';
import styles from './styles';
import {View} from 'react-native';
import {vh} from '../../utils/units';
const ContestDetail = () => {
  return (
    <BackgroundWrapper>
      <View style={styles.mainView}>
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
          <Text style={styles.chooseText} text={'Choose options'} />
          <Text
            text={
              <>
                <Text style={styles.status} text={'STATUS:'} />
                <Text style={styles.statusActive} text={'ACTIVE'} />
              </>
            }
          />
          <View style={styles.tableView}>
            <View style={styles.tableRow}>
              <Text style={styles.rowText} text={'Level of play:'} />
              <Text style={styles.rowText} text={'Classroom'} />
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.rowText} text={'Mode:'} />
              <Text style={styles.rowText} text={'Addition'} />
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.rowText} text={'Grade:'} />
              <Text style={styles.rowText} text={'First'} />
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.rowText} text={'State'} />
              <Text style={styles.rowText} text={'PA'} />
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.rowText} text={'Country'} />
              <Text style={styles.rowText} text={'USA'} />
            </View>
            <View style={[styles.tableRow, {marginBottom: vh * 2}]}>
              <Text style={styles.rowText} text={'Team Type'} />
              <Text style={styles.rowText} text={'Multi-player'} />
            </View>
          </View>
          <Button btnText={'EDIT'} />
        </View>
      </View>
    </BackgroundWrapper>
  );
};
export default ContestDetail;
