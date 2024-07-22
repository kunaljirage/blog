import { useState } from 'react';
import { notificationHandler } from '../helpers/notificationHandler';
import { IoCloseSharp } from 'react-icons/io5';

// We need to add the notification component at the top level

const Notification = () => {
  const [notifications, setNotifications] = useState([]);

  notificationHandler.addNotification = (message, type = 'info') => {
    const notificationId = Date.now();
    setNotifications(prevNotifications => [
      ...prevNotifications,
      { id: notificationId, message, type },
    ]);
    setTimeout(() => {
      notificationHandler.clearNotifications(notificationId);
    }, 5000);
  };

  notificationHandler.clearNotifications = notificationId => {
    const updatedNotifications = notifications.filter(
      notification => notification.id !== notificationId
    );
    setNotifications(updatedNotifications);
  };
  return (
    <div className="notification-container">
      {notifications.map(notification => (
        <div
          key={notification.id}
          className={`notification ${notification.type}`}
        >
          <p>{notification.message}</p>
          <button
            className="close-button"
            onClick={() =>
              notificationHandler.clearNotifications(notification.id)
            }
          >
            <IoCloseSharp />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Notification;
