import React, {useRef} from 'react';
import {FlatList, RefreshControl} from 'react-native';
import images from '../../assets/images';
import {BackgroundWrapper, SearchBar, Button} from '../../components';
import {vh} from '../../utils/units';
import SingleInvitaionView from './components/SingleInvitationView';
import styles from './styles';

const InviteParentView = ({
  loadData,
  data,
  backgroundColor,
  loading,
  onPressSendInvite,
  onPressIcon,
}) => {
  const renderItem = ({item, index}) => (
    <SingleInvitaionView
      index={index}
      name={item?.first_name + item?.last_name}
      image={item?.image ? {uri: item?.image} : images.childImage1}
      color={backgroundColor[index % 4]}
      onPressIcon={() => onPressIcon(index)}
      added={item?.added}
      grade={item?.class_grade?.name}
    />
  );
  const listHeaderComponent = <SearchBar style={styles.searchBar} />;
  const listFooterComponent = (
    <Button onPress={onPressSendInvite} btnText={'SEND INVITE'} />
  );
  return (
    <BackgroundWrapper>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={loadData} />
        }
        contentContainerStyle={{paddingBottom: vh}}
        renderItem={renderItem}
        style={styles.container}
        ListHeaderComponent={listHeaderComponent}
        ListFooterComponent={listFooterComponent}
        data={data}
      />
      {/* <CustomModal
        image={checked ? images.danger : images.success}
        heading={checked ? 'oops!!' : 'Invitation Sent'}
        subHeading={
          checked
            ? "You can't create more contests, because you've already created 3 contests under your account."
            : "The invitation has been sent to the Parent(s)/Teacher(s). You'll be notified once it is accepted or declined."
        }
        ref={modalRef}
      /> */}
    </BackgroundWrapper>
  );
};
export default InviteParentView;
