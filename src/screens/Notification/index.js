import React from 'react';
import NotificationView from '../../views/NotificationsView';
import useNotificaitonsModelView from '../../viewmodels/useNotificationsModelView';

const Notifications = () => {
  const {functions, states} = useNotificaitonsModelView();
  const {loading, data, markLoading, selectedId} = states;
  const {loadData, onEndReached, readNotification} = functions;
  return (
    <NotificationView
      onEndReached={onEndReached}
      loadData={loadData}
      data={data}
      markLoading={markLoading}
      selectedId={selectedId}
      loading={loading}
      readNotification={readNotification}
    />
  );
};
export default Notifications;
