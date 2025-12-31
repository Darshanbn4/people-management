const mongoose = require('mongoose');
const PersonSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        requirement:true
    }
},
    {timestramp:true}
);

module.exports = mongoose.model('Person', PersonSchema);