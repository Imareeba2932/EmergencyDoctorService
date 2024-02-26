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
  token: 'fukRu59LWsNBcId0PyreX3:APA91bGuhh_fvvLTP1A2vifj01T79Ki9RrFmytLZUQf1vduaJMx0F7zzF_JtGpPlaYd7WXXvN-LccJA-fwhW9p55hg-Q-ZjOZy2OMY29CgG_s7Gqjf3DdR5mAP6IIqbf-n5l_3m4_jok',
};

admin.messaging().send(message)
  .then(response => {
    console.log('Successfully sent message:', response);
  })
  .catch(error => {
    console.error('Error sending message:', error);
  });