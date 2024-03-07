const admin = require('firebase-admin');
const serviceAccount = require('./service-key.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  });

const message = {
  data: {
    title: 'New Notification',
    body: 'This is a push notification from your server.',
  },
  token: 'fYaY-y1_cTe7LFDS8_oVr3:APA91bGUGtA46EkG-YWWj6RKuUGp2t4DCJfqdfSCPR0V0kx-l1uuGyBdWr3WNjTvl2cbUsx_pBD1pRQwvTAdEvceZDvye5PLySZBomynBARvoqUlAaBUW6o4jUC1b7Xz-4vTb14IXt-5',
};

admin.messaging().send(message)
  .then(response => {
    console.log('Successfully sent message:', response);
  })
  .catch(error => {
    console.error('Error sending message:', error);
  });
  