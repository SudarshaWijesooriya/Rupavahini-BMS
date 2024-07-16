const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const programmeSchema = new Schema({
    bookingNo: {
        type: String
    },
    division: {
        type: String
    },
    unit: {
        type: String
    },
    productName: {
        type: String
    },
    serviceNo: {
        type: String
    },
    PPNo: {
        type: String
    },
    date: {
        type: Date
    },
    type: {
        type: String
    },
    location: {
        type: String
    },
    proTitle: {
        type: String
    },
    episodeNo: {
        type: Number
    },
    proDuration: {
        type: String
    },
    dateOfTelecast: {
        type: Date
    },
    timeOfTelecast: {
        type: String
    },
    freqOfTelecast: {
        type: String
    },
    scheduleChannel: {
        type: String
    },
    typeOfBooking: {
        type: String
    },
    equipment: {
        type: String
    }
    }, { timestamps: true });

module.exports = mongoose.model('Programme', programmeSchema);