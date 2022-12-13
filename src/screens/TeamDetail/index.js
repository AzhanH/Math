import React, {useRef} from 'react';
import {FlatList, Image, TouchableOpacity, View} from 'react-native';
import images from '../../assets/images';
import {
  BackgroundWrapper,
  CustomModal,
  SinglePlayerView,
  Text,
} from '../../components';
import {classes} from '../../config';
import styles from './styles';

const TeamDetail = ({navigation, route}) => {
  const {data} = route?.params;

  const modalRef = useRef(null);
  const renderItem = ({item, index}) => (
    <SinglePlayerView
      playerName={item?.name}
      playerId={item?.playerId}
      grade={item?.grade}
      onPressViewDetail={() =>
        navigation.navigate('StudentProfile', {data: item})
      }
      btnName="VIEW DETAIL"
      image={item?.image}
      color={item?.color}
      key={index}
    />
  );

  const listHeaderComponet = (
    <View style={styles.row}>
      <View>
        <Text style={styles.teamName} text={data?.name?.toUpperCase()} />
        <Text
          style={styles.updatedText}
          text={`Last Updated On: ${'Aug 4, 2022'}`}
        />
      </View>

      <TouchableOpacity
        onPress={() => {
          //uncomment to opent modal
          // modalRef.current.show();
          navigation.navigate('CreateAndEditTeam', {type: 'Edit'});
        }}>
        <Image source={images.edit} />
      </TouchableOpacity>
    </View>
  );
  return (
    <BackgroundWrapper>
      <FlatList
        ListHeaderComponent={listHeaderComponet}
        data={classes}
        contentContainerStyle={styles.contentContainer}
        style={styles.container}
        renderItem={renderItem}
      />
      <CustomModal
        ref={modalRef}
        heading={'oops!!'}
        subHeading={
          "You can't edit team because the contest is already underway"
        }
        image={images.danger}
      />
    </BackgroundWrapper>
  );
};
export default TeamDetail;
