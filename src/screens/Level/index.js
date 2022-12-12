import React from 'react';
import {BackgroundWrapper, TableView, Button} from '../../components';
import {FlatList, View} from 'react-native';
import {levels} from '../../config';
import styles from './styles';
import {SingleLevelView} from './components';

const Levels = ({navigation, route}) => {
  const {type} = route?.params;
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
      key={index}
      score={item?.score}
      position={item?.id}
      playerName={item?.name}
      state={item?.state}
      country={item?.country}
    />
  );
  const ListHeaderComponent = (
    <View style={styles.tableContainer}>
      <TableView editable array={options} />
    </View>
  );

  const listFooterComponent = <Button btnText={'EXPORT TO EXCEL'} />;
  return (
    <BackgroundWrapper transparent>
      <FlatList
        contentContainerStyle={styles.contentContainer}
        renderItem={renderItem}
        style={styles.mainView}
        ListFooterComponent={listFooterComponent}
        ListHeaderComponent={ListHeaderComponent}
        data={levels}
      />
    </BackgroundWrapper>
  );
};
export default Levels;
