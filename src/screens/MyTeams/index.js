import React from 'react';
import {FlatList} from 'react-native';
import {BackgroundWrapper, Button} from '../../components';
import {myTeams} from '../../config';
import {vw} from '../../utils/units';
import {SingleTeamView} from './components';
import styles from './styles';

const MyTeams = ({navigation}) => {
  const renderItem = ({item, index}) => (
    <SingleTeamView
      onPressViewDetail={() => navigation.navigate('TeamDetail', {data: item})}
      key={index}
      teamName={item?.name}
      image={item?.image}
      color={item?.color}
    />
  );

  const ListFooterComponent = (
    <Button
      onPress={() => navigation.navigate('CreateAndEditTeam')}
      containerStyle={{width: vw * 50}}
      black
      btnText={'ADD'}
    />
  );
  return (
    <BackgroundWrapper>
      <FlatList
        ListFooterComponent={ListFooterComponent}
        data={myTeams}
        renderItem={renderItem}
        style={styles.mainView}
      />
    </BackgroundWrapper>
  );
};
export default MyTeams;
