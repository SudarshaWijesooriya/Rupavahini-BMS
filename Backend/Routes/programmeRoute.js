const express = require('express');
const {
    createProgramme,
    getProgrammes,
    getProgramme,
    deleteProgramme,
    updateProgramme
} = require('../Controllers/programmeController');

const router = express.Router();

// Get all Programmes
router.get('/', getProgrammes);

// Get a single Programme
router.get('/:id', getProgramme);

// Create new Programme
router.post('/', createProgramme);

// Delete a Programme
router.delete('/:id', deleteProgramme);

// Update a Programme
router.put('/:id', updateProgramme);

module.exports = router;