
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../firebase-messaging-sw.js')
        .then(function (registration) {
            console.log('Registration successful, scope is:', registration.scope);
        }).catch(function (err) {
            console.log('Service worker registration failed, error:', err);
        });


    }
    self.addEventListener('push', event => {
        const {data} = event.data.json(); // Assuming the payload is in JSON format
        console.log('New notification', data);
        const options = {
            body: data.body,
            icon: '/vite.svg',
            data: {
                url: data.link, // Customize the link to open when the notification is clicked
            },
        };
    
        event.waitUntil(
            self.registration.showNotification(data.title, options)
        );
    });
    
    self.addEventListener('notificationclick', event => {
        const notificationData = event.notification.data;
      
        if (notificationData.url) {
          clients.openWindow(notificationData.url);
        }
      
        event.notification.close();
      });
