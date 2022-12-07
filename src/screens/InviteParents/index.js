import React, {useRef, useState} from 'react';
import {FlatList} from 'react-native';
import images from '../../assets/images';
import {
  BackgroundWrapper,
  CustomModal,
  SearchBar,
  Button,
} from '../../components';
import {inviteParents} from '../../config';
import {vh} from '../../utils/units';
import SingleInvitaionView from './components/SingleInvitationView';
import styles from './styles';

const InviteParent = () => {
  const [checked, setChecked] = useState(null);
  const modalRef = useRef(null);
  const renderItem = ({item, index}) => (
    <SingleInvitaionView
      index={index}
      onPressAdd={checked => {
        setChecked(checked);
        modalRef.current.show();
      }}
      isChecked={item?.showCheck}
      name={item?.name}
      image={item?.image}
      color={item?.color}
      grade={item?.grade}
    />
  );
  const listHeaderComponent = <SearchBar style={styles.searchBar} />;
  const listFooterComponent = <Button btnText={'SEND INVITE'} />;
  return (
    <BackgroundWrapper>
      <FlatList
        contentContainerStyle={{paddingBottom: vh}}
        renderItem={renderItem}
        style={styles.container}
        ListHeaderComponent={listHeaderComponent}
        ListFooterComponent={listFooterComponent}
        data={inviteParents}
      />
      <CustomModal
        image={checked ? images.danger : images.success}
        heading={checked ? 'oops!!' : 'Invitation Sent'}
        subHeading={
          checked
            ? "You can't create more contests, because you've already created 3 contests under your account."
            : "The invitation has been sent to the Parent(s)/Teacher(s). You'll be notified once it is accepted or declined."
        }
        ref={modalRef}
      />
    </BackgroundWrapper>
  );
};
export default InviteParent;
