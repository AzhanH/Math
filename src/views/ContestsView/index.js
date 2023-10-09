import React from 'react';
import {Image, View, FlatList, RefreshControl} from 'react-native';
import images from '../../assets/images';
import {BackgroundWrapper, SearchBar, Button} from '../../components';
import styles from './styles';
import {SingleContestView} from './components';
import moment from 'moment';
const ContestsView = ({
  loadData,
  loading,
  backgroundColor,
  onPressCreateContest,
  onEndReached,
  onPressSendInvite,
  onPressContestDetail,
  data,
}) => {
  const renderItem = ({item, index}) => (
    <SingleContestView
      onPressContainer={() => onPressContestDetail(item)}
      onPressSendInvite={() => onPressSendInvite(item)}
      key={index}
      name={item?.title}
      image={item?.image ? {uri: item?.image} : images.contestPlayer}
      date={moment(item?.start_date).format('MMM DD, YYYY')}
      time={moment(item?.start_time, 'hh:mm:s').format('hh:mm A')}
      color={backgroundColor[index % 4]}
    />
  );

  const listHeaderComponent = (
    <View style={styles.row}>
      <SearchBar />
      <View style={styles.sortView}>
        <Image style={styles.filterIcon} source={images.filter} />
      </View>
    </View>
  );

  const listFooterComponet = (
    <Button onPress={onPressCreateContest} btnText={'CREATE CONTEST'} />
  );
  return (
    <BackgroundWrapper>
      <FlatList
        refreshControl={
          <RefreshControl onRefresh={loadData} refreshing={loading} />
        }
        data={data}
        style={styles.contanier}
        ListHeaderComponent={listHeaderComponent}
        ListFooterComponent={listFooterComponet}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        renderItem={renderItem}
        numColumns={2}
        onEndReached={onEndReached}
      />
    </BackgroundWrapper>
  );
};
export default ContestsView;
