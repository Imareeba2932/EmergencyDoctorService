const {Schema, model} = require('../connection');

const myschema = new Schema({
    name: {type:String, required: true},
    email: {type:String, required: true, unique: true},
    createdAt: Date,
});

module.exports = model('user',myschema);
