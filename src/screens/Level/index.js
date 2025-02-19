import React, {useLayoutEffect, useRef} from 'react';
import {BackgroundWrapper, TableView, Button} from '../../components';
import {Alert, FlatList, View} from 'react-native';
import {levels} from '../../config';
import styles from './styles';
import {SingleLevelView} from './components';
import Text from '../../components/Text';
import DecimalModal from '../../components/DecimalModal';

const Levels = ({navigation, route}) => {
  const {type} = route?.params;
  const decimalRef = useRef(null);

  useLayoutEffect(() => {
    if (type == 'private') {
      navigation.setOptions({title: 'My Scoreboard'.toUpperCase()});
    }
  }, [type]);
  // console.log(type,"------------------------")
  const options = [
    {
      label: 'Level of play:',
      value:
        type === 'class'
          ? 'Classroom'
          : type === 'school'
          ? 'School'
          : type === 'state'
          ? 'State'
          : type === 'national'
          ? 'NATIONAL MATH BEE®'
          : 'INTERNATIONAL MATHE BEE®',
    },
    {
      label: 'Mode:',
      value:
        type === 'national'
          ? 'Divison'
          : type === 'international'
          ? 'Multiplication'
          : 'Addition',
    },
    {label: 'Grade:', value: 'First'},
    {
      label: 'State:',
      value: type !== 'class' && type !== 'school' ? 'PA' : 'Select State',
    },
    {
      label: 'Country:',
      value: type !== 'class' && type !== 'school' ? 'USA' : 'Select Country',
    },
    {label: 'Team Type:', value: 'Multi-Player'},
  ];

  const renderItem = ({item, index}) => (
    <SingleLevelView
      teamType={item?.teamType}
      schoolName={item?.schoolName}
      listType={type}
      onPressContainer={() =>
        navigation.navigate('LevelDetail', {data: {...item, type}})
      }
      onPressDecimalDetail={() => decimalRef.current.show()}
      key={index}
      score={item?.score}
      position={item?.id}
      playerName={item?.name}
      state={item?.state}
      country={item?.country}
      decimalText={item?.decimalText}
    />
  );
  const ListHeaderComponent = (
    <>
      <View style={styles.tableContainer}>
        <TableView editable array={options} />
      </View>
      <View style={styles.row}>
        <Text text={'Rank'} style={styles.textRank} />
        <Text text={'Username'} style={styles.textRank} />
        <Text text={'Batting Average'} style={styles.textRank} />
        <Text text={'State'} style={styles.textRank} />
      </View>
    </>
  );

  const listFooterComponent = <Button btnText={'EXPORT TO EXCEL'} />;
  return (
    <BackgroundWrapper>
      <FlatList
        contentContainerStyle={styles.contentContainer}
        renderItem={renderItem}
        style={styles.mainView}
        ListFooterComponent={listFooterComponent}
        ListHeaderComponent={ListHeaderComponent}
        data={levels}
      />
      <DecimalModal ref={decimalRef} />
    </BackgroundWrapper>
  );
};
export default Levels;
