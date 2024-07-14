const Programme = require('../Models/programme');
const mongoose = require('mongoose');

// Get all programmes
const getProgrammes = async (req, res) => {
    try {
        const programmes = await Programme.find({}).sort({ createdAt: -1 });
        res.status(200).json(programmes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a single programme
const getProgramme = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such Programme' });
    }

    try {
        const programme = await Programme.findById(id);

        if (!programme) {
            return res.status(404).json({ error: 'No such programme' });
        }

        res.status(200).json(programme);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Create a new programme
const createProgramme = async (req, res) => {
    const { bookingNo, division, unit, productName, serviceNo, PPNo, date, type, location, proTitle, episodeNo, proDuration, dateOfTelecast, timeOfTelecast, freqOfTelecast, scheduleChannel, typeOfBooking, equipment } = req.body;

    try {
        const programme = await Programme.create({ bookingNo, division, unit, productName, serviceNo, PPNo, date, type, location, proTitle, episodeNo, proDuration, dateOfTelecast, timeOfTelecast, freqOfTelecast, scheduleChannel, typeOfBooking, equipment });
        res.status(200).json(programme);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a programme
const deleteProgramme = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such Programme' });
    }

    try {
        const programme = await Programme.findByIdAndDelete(id);

        if (!programme) {
            return res.status(404).json({ error: 'No such programme' });
        }

        res.status(200).json({ message: 'Programme deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a programme
const updateProgramme = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such Programme' });
    }

    try {
        const programme = await Programme.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });

        if (!programme) {
            return res.status(404).json({ error: 'No such programme' });
        }

        res.status(200).json(programme);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    getProgrammes,
    getProgramme,
    createProgramme,
    deleteProgramme,
    updateProgramme
};
