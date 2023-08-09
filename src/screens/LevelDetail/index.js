import React from 'react';
import {View} from 'react-native';
import {BackgroundWrapper, TableView, Text} from '../../components';
import {addSuffixToWord} from '../../config';
import {colors} from '../../utils/theme';
import styles from './styles';

const LevelDetail = ({route}) => {
  const {data} = route?.params;

  const options = [
    {
      label: 'Level of play:',
      value:
        data?.type === 'class'
          ? 'Classroom'
          : data?.type === 'school'
          ? 'School Level'
          : data?.type == 'state'
          ? 'State Level'
          : 'NATIONAL MATH BEE®',
      
    },
    
    {
      label: 'Mode:',
      value: data?.type === 'national' ? 'Division' : 'Addition',
      editable : true,
    },
    {label: 'Grade:', value: 'First'                        },
    {label: 'State:', value: data?.state},
    {label: 'Country:', value: data?.country},
    {label: 'Last Date of Play:', value: '06/22/2022'},
  ];

  return (
    <BackgroundWrapper>
      <View style={styles.mainView}>
        <View style={styles.levelContainer}>
          <View style={styles.levelSubContainer}>
            <Text
              style={styles.positionText}
              text={addSuffixToWord(data?.id)}
            />
            <View>
              <Text style={styles.positionText} text={data?.name} />
              <Text
                style={[
                  styles.playerType,
                  {
                    color:
                      data?.teamType === 'Single-Player'
                        ? colors.green
                        : colors.red,
                  },
                ]}
                text={data?.teamType}
              />
            </View>
            <Text style={styles.scoreText} text={data?.score} />
          </View>
        </View>
        <View style={styles.tableContainer}>
          {data?.type !== 'class' && (
            <View>
              <Text style={styles.schoolText} text={'School Name'} />
              <Text style={styles.schoolName} text={data?.schoolName} />
            </View>
          )}
          <TableView array={options} />
        </View>
      </View>
    </BackgroundWrapper>
  );
};
export default LevelDetail;
