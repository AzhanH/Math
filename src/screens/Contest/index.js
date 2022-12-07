import React from 'react';
import {Image, View, FlatList} from 'react-native';
import images from '../../assets/images';
import {BackgroundWrapper, Icons, SearchBar} from '../../components';
import styles from './styles';
import {SingleContestView} from './components';
import {contests} from '../../config';
const Contets = () => {
  const renderItem = ({item, index}) => (
    <SingleContestView
      key={index}
      name={item?.name}
      date={item?.date}
      time={item?.time}
      color={item?.color}
    />
  );

  const listFooterComponent = (
    <View style={styles.row}>
      <SearchBar />
      <View style={styles.sortView}>
        <Image style={styles.filterIcon} source={images.filter} />
      </View>
    </View>
  );
  return (
    <BackgroundWrapper>
      <FlatList
        style={styles.contanier}
        ListHeaderComponent={listFooterComponent}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        data={contests}
        renderItem={renderItem}
        numColumns={2}
      />
    </BackgroundWrapper>
  );
};
export default Contets;
