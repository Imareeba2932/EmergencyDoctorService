import React, { useEffect } from 'react';
import { messaging } from './Firebase';
import { getToken } from 'firebase/messaging';

const PushNotificationButton = () => {
  useEffect(() => {
    Notification.requestPermission()
      .then((permission) => {
        console.log('Permission:', permission);
      })
      .catch(error => {
        console.error('Error:', error);
      });

    getToken(messaging, { vapidKey: 'BL4dchFstpZuRmylDyzR0ZZbFsN3mxBO0QbelNE8RbK_amJaMAdBTKFYXbreEs17t-4qKGvs-idxlZUK5z_6ewk' }).then((currentToken) => {
      if (currentToken) {
        // Send the token to your server and update the UI if necessary
        // ...
        console.log('Token:', currentToken);
      } else {
        // Show permission request UI
        console.log('No registration token available. Request permission to generate one.');
        // ...
      }
    }).catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
      // ...
    });
  }, []);

  return (
    <button>Enable Push Notifications</button>
  );
};

export default PushNotificationButton;