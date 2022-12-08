import React from 'react';
import {Image, View, FlatList} from 'react-native';
import images from '../../assets/images';
import {BackgroundWrapper, SearchBar, Button} from '../../components';
import styles from './styles';
import {SingleContestView} from './components';
import {contests} from '../../config';
const Contets = ({navigation}) => {
  const renderItem = ({item, index}) => (
    <SingleContestView
      key={index}
      name={item?.name}
      image={item?.image}
      date={item?.date}
      time={item?.time}
      color={item?.color}
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
    <Button
      onPress={() => navigation.navigate('InviteParents')}
      btnText={'CREATE CONTEST'}
    />
  );
  return (
    <BackgroundWrapper>
      <FlatList
        style={styles.contanier}
        ListHeaderComponent={listHeaderComponent}
        ListFooterComponent={listFooterComponet}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        data={contests}
        renderItem={renderItem}
        numColumns={2}
      />
    </BackgroundWrapper>
  );
};
export default Contets;
