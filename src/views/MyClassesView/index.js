import React from 'react';
import {FlatList, RefreshControl, View} from 'react-native';
import {BackgroundWrapper, Button, Loader} from '../../components';
import styles from './styles';
import {AddClassModal} from './components';
import SingleClassView from './components/SingleClassView';
import NoDataView from '../../components/NoDataView';
const MyClassesView = ({
  onChangeClassName,
  showAddClassModal,
  onPressAddClass,
  onCloseClassModal,
  createLoading,
  className,
  loading,
  loadData,
  data,
  backgroundColor,
  avatarImage,
  onPressViewDetail,
  onEndReached,
  page,
  onPressCreateClass,
}) => {
  const renderItem = ({item, index}) => (
    <SingleClassView
      onPressViewDetail={() => onPressViewDetail(item)}
      className={item?.title}
      image={avatarImage[index % 3]}
      key={index}
      color={backgroundColor[index % 3]}
    />
  );

  const listFooterComponent = (
    <View>
      <Button
        onPress={onPressAddClass}
        containerStyle={styles.btnContainer}
        textStyle={styles.btnText}
        btnText={'ADD CLASS'}
      />
      {page > 1 && loading && <Loader />}
    </View>
  );

  return (
    <BackgroundWrapper>
      <FlatList
        refreshControl={
          <RefreshControl onRefresh={loadData} refreshing={loading} />
        }
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={!loading && NoDataView}
        ListFooterComponent={listFooterComponent}
        contentContainerStyle={styles.contentContainer}
        style={styles.container}
        renderItem={renderItem}
        data={data}
        onEndReached={onEndReached}
      />
      <AddClassModal
        className={className}
        loading={createLoading}
        onChangeClassName={onChangeClassName}
        onPressCreateClass={onPressCreateClass}
        onClose={onCloseClassModal}
        visible={showAddClassModal}
      />
    </BackgroundWrapper>
  );
};
export default MyClassesView;
