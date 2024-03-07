const express = require('express');
const router = express.Router();
const Model = require('../Models/Doctors');

router.post('/add', (req, res) => {
    console.log(req.body);
    // Storing data to mongodb
    new Model(req.body).save()
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            console.error(err);
            res.status(500).json(err)
        });
});
router.get('/getall', (req, res) => {
    Model.find({}) //empty brackets will give all the data
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err)
        });
});
// since mongodb automatically generates id so we can use it also
router.get('/getbyid/:id', (req, res) => {
    // getting data from client
    console.log(req.params.id);

    // finding the data with given id
    Model.findById(req.params.id)
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            console.log(err)
            res.status(500).json(err)
        });
});
//  : denotes a url parameter
router.get("/getbyemail/:email", (req, res) => {
    console.log(req.params.email);
    Model.find({ email: req.params.email })
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            console.log(err)
            res.status(500).json(err)
        });
});

router.post('/authenticate', (req, res) => {
    Model.findOne(req.body)
        .then((result) => {
            if (result) res.json(result);
            else res.status(400).json({ message: 'login failed' });
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});
router.put('/update/:id', (req, res) => {
    Model.findByIdAndUpdate(req.params.id, req.body, { new: true }) //new will give updated response
        .then((result) => {
            res.json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});
router.delete('/delete/:id', (req, res) => {
    Model.findByIdAndDelete(req.params.id)
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            console.log(err)
            res.status(500).json(err)
        });

});
router.delete('/notify/:id', (req, res) => {
    Model.findById(req.params.id)
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            console.log(err)
            res.status(500).json(err)
        });

});
module.exports = router;