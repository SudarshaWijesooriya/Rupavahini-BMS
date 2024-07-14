const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const programmeSchema = new Schema({
    bookingNo: {
        type: String,
        required: true,
        unique: true
    },
    division: {
        type: String,
        required: true
    },
    unit: {
        type: String,
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    serviceNo: {
        type: String,
        required: true
    },
    PPNo: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    type: {
        type: String,
        enum: ['post production', 'recording', 'live'],
        required: true
    },
    location: {
        type: String,
        required: true
    },
    proTitle: {
        type: String,
        required: true
    },
    episodeNo: {
        type: Number,
        required: true
    },
    proDuration: {
        type: String,
        required: true
    },
    dateOfTelecast: {
        type: Date,
        required: true
    },
    timeOfTelecast: {
        type: String,
        required: true
    },
    freqOfTelecast: {
        type: String,
        enum: ['single', 'daily', 'weekly', 'for night', 'monthly'],
        required: true
    },
    scheduleChannel: {
        type: String,
        enum: ['Rupavahini', 'Eye'],
        default: 'Rupavahini'
    },
    typeOfBooking: {
        type: String,
        enum: ['single', 'book daily', 'book weekly', 'book monthly'],
        required: true
    },
    equipment: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Programme', programmeSchema);
