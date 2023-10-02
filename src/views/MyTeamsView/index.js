import React from 'react';
import {FlatList, View} from 'react-native';
import {BackgroundWrapper, Button, Loader} from '../../components';
import {vw} from '../../utils/units';
import {SingleTeamView} from './components';
import styles from './styles';

const MyTeamView = ({
  onPressTeamDetail,
  onRefresh,
  onEndReached,
  onPressCreateTeam,
  data,
  loading,
  page,
  avatarImage,
  backgroundColor,
}) => {
  const renderItem = ({item, index}) => (
    <SingleTeamView
      onPressViewDetail={() => onPressTeamDetail(item)}
      key={index}
      teamName={item?.title}
      image={avatarImage[index % 3]}
      color={backgroundColor[index % 3]}
    />
  );

  const ListFooterComponent = (
    <View>
      {loading && page > 1 && <Loader />}
      <Button
        onPress={onPressCreateTeam}
        containerStyle={{width: vw * 50}}
        black
        btnText={'ADD'}
      />
    </View>
  );
  return (
    <BackgroundWrapper>
      <FlatList
        refreshing={loading}
        onRefresh={onRefresh}
        ListFooterComponent={ListFooterComponent}
        data={data}
        renderItem={renderItem}
        style={styles.mainView}
        onEndReached={onEndReached}
      />
    </BackgroundWrapper>
  );
};
export default MyTeamView;
