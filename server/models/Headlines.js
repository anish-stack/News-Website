const mongoose = require('mongoose');

const headlineSchema = new mongoose.Schema({
    headlineText: {
        type: String,
        required: true, 
        trim: true, 
    },
    active: { 
        type: Boolean,
        default: true
    },

}, { timestamps: true });

module.exports = mongoose.model('Headline', headlineSchema);
