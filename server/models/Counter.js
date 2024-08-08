const mongoose = require('mongoose');

const counterSchema = new mongoose.Schema({
    count: {
        type: Number,
        required: true,
        default: 0,
    },
});

const Counter = mongoose.model('Counter', counterSchema);

module.exports = Counter;
