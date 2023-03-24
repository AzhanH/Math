import {useFocusEffect} from '@react-navigation/native';
import React, {useCallback, useRef, useState} from 'react';
import {FlatList} from 'react-native';
import images from '../../assets/images';
import {
  BackgroundWrapper,
  CustomModal,
  SearchBar,
  Button,
} from '../../components';
import useGeneral from '../../hooks/useGeneral';
import {vh} from '../../utils/units';
import SingleInvitaionView from './components/SingleInvitationView';
import styles from './styles';

const InviteParent = () => {
  const {getAllTeachers} = useGeneral();
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(null);
  const [teachers, setTeachers] = useState(null);
  const modalRef = useRef(null);

  useFocusEffect(
    useCallback(() => {
      loadData();
    }, []),
  );

  const loadData = async () => {
    try {
      setLoading(true);
      let res = await getAllTeachers();
      setTeachers(res);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log('Error', e);
    }
  };

  const backgroundColor = {
    0: 'darkOrange',
    1: 'yellow',
    2: 'green',
    3: 'darkBlue',
  };
  const renderItem = ({item, index}) => (
    <SingleInvitaionView
      index={index}
      onPressAdd={() => {
        setChecked(true);
        modalRef.current.show();
      }}
      isChecked={item?.showCheck}
      name={item?.first_name + item?.last_name}
      image={item?.image_path}
      color={backgroundColor[index % 4]}
      grade={item?.grade}
    />
  );
  const listHeaderComponent = <SearchBar style={styles.searchBar} />;
  const listFooterComponent = (
    <Button
      onPress={() => {
        setChecked(false);
        modalRef?.current?.show();
      }}
      btnText={'SEND INVITE'}
    />
  );
  return (
    <BackgroundWrapper>
      <FlatList
        refreshing={loading}
        onRefresh={loadData}
        contentContainerStyle={{paddingBottom: vh}}
        renderItem={renderItem}
        style={styles.container}
        ListHeaderComponent={listHeaderComponent}
        ListFooterComponent={listFooterComponent}
        data={teachers}
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
