const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

const DoctorsRouter = require('./Routers/Doctors');
const UserRouter = require('./Routers/User');

app.use(cors({
    origin: ['http://localhost:5173']
}))

app.use(express.json());
app.use('/doctor', DoctorsRouter);
app.use('/user', UserRouter);

app.use(express.static('./static/uploads'));



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    }
);