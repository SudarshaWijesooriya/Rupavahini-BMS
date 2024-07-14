const express = require('express');
const {
    createProgramme,
    getProgrammes,
    getProgramme,
    deleteProgramme,
    updateProgramme
} = require('../Controllers/BookingController');

const bookingrouter = express.Router();

// Get all Programmes
bookingrouter.get('/', getProgrammes);

// Get a single Programme
bookingrouter.get('/:id', getProgramme);

// Create new Programme
bookingrouter.post('/', createProgramme);

// Delete a Programme
bookingrouter.delete('/:id', deleteProgramme);

// Update a Programme
// bookingrouter.patch('/:id', updateProgramme);
bookingrouter.put('/:id', updateProgramme);

module.exports = bookingrouter;