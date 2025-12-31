const mongoose = require('mongoose');
const PersonSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required:true
    }
},
    {timestramps:true}
);

module.exports = mongoose.model('Person', PersonSchema);