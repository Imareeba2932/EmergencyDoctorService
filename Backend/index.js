const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

const DoctorsRouter = require('./Routers/Doctors');

app.use(cors({
    origin: ['http://localhost:5173']
}))

app.use(express.json());
app.use('/doctor', DoctorsRouter);

app.use(express.static('./static/uploads'));

const admin = require('firebase-admin');
const serviceAccount = require('path/to/serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const message = {
  data: {
    title: 'New Notification',
    body: 'This is a push notification from your server.',
  },
  token: 'DEVICE_REGISTRATION_TOKEN',
};

admin.messaging().send(message)
  .then(response => {
    console.log('Successfully sent message:', response);
  })
  .catch(error => {
    console.error('Error sending message:', error);
  });


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    }
);