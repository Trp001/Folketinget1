const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    navn: {
        type: String,
        required: true
    },
    parti: {
        type: String,
        required: true
    },
    position: {
        type: String,
        enum: ['minister', 'formand'],
        required: true
    },
    startdato: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('Person', personSchema);

