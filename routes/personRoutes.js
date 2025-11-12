const express = require('express');
const router = express.Router();
const {
    getAllPersons,
    getPersonById,
    createPerson,
    updatePerson,
    deletePerson
} = require('../controllers/personController');

const validatePerson = require('../validators/validatePerson');

// RESTful ruter til /api/personer
router.get('/', getAllPersons);               // GET /api/personer
router.get('/:id', getPersonById);            // GET /api/personer/:id
router.post('/', validatePerson, createPerson); // POST /api/personer
router.put('/:id', validatePerson, updatePerson); // PUT /api/personer/:id
router.delete('/:id', deletePerson);          // DELETE /api/personer/:id

module.exports = router;












