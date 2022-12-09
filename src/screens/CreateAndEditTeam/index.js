import React, {useRef} from 'react';
import {FlatList, View} from 'react-native';
import images from '../../assets/images';
import {
  BackgroundWrapper,
  CustomModal,
  InputField,
  SearchBar,
  SinglePlayerView,
} from '../../components';
import {classes} from '../../config';
import styles from './styles';

const CreateAndEditTeam = ({route}) => {
  const type = route?.params?.type;
  const modalRef = useRef(null);
  const renderItem = ({item, index}) => (
    <SinglePlayerView
      onPressButton={() => modalRef.current.show()}
      btnName={type === 'Edit' ? 'REMOVE' : 'ADD'}
      image={item?.image}
      color={item?.color}
      key={index}
    />
  );

  const listHeaderComponent = (
    <View>
      <SearchBar style={styles.searchView} />
      <InputField placeholder="Team Name" />
    </View>
  );
  return (
    <BackgroundWrapper>
      <FlatList
        ListHeaderComponent={listHeaderComponent}
        data={classes}
        contentContainerStyle={styles.contentContainer}
        style={styles.container}
        renderItem={renderItem}
      />
      <CustomModal
        ref={modalRef}
        heading={'success'}
        subHeading={
          'The team has been created successfully. And students have been notified.'
        }
        image={images.success}
      />
    </BackgroundWrapper>
  );
};
export default CreateAndEditTeam;
