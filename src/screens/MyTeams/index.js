import React from 'react';
import {FlatList} from 'react-native';
import {BackgroundWrapper} from '../../components';
import {myTeams} from '../../config';
import {SingleTeamView} from './components';
import styles from './styles';

const MyTeams = () => {
  const renderItem = ({item, index}) => (
    <SingleTeamView
      teamName={item?.name}
      image={item?.image}
      color={item?.color}
    />
  );
  return (
    <BackgroundWrapper>
      <FlatList
        data={myTeams}
        renderItem={renderItem}
        style={styles.mainView}
      />
    </BackgroundWrapper>
  );
};
export default MyTeams;
