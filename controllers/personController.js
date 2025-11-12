const Person = require('../models/Person');

// GET /api/personer
const getAllPersons = async (req, res, next) => {
    try {
        const persons = await Person.find();
        res.status(200).json(persons);
    } catch (err) {
        next(err); // sender fejl videre til global error handler
    }
};

// GET /api/personer/:id
const getPersonById = async (req, res, next) => {
    try {
        const person = await Person.findById(req.params.id);
        if (!person) {
            return res.status(404).json({ message: 'Person ikke fundet' });
        }
        res.status(200).json(person);
    } catch (err) {
        next(err);
    }
};

// POST /api/personer
const createPerson = async (req, res, next) => {
    try {
        const newPerson = new Person(req.body);
        const savedPerson = await newPerson.save();
        res.status(201).json(savedPerson);
    } catch (err) {
        next(err);
    }
};

// PUT /api/personer/:id
const updatePerson = async (req, res, next) => {
    try {
        const updatedPerson = await Person.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedPerson) {
            return res.status(404).json({ message: 'Person ikke fundet' });
        }
        res.status(200).json(updatedPerson);
    } catch (err) {
        next(err);
    }
};

// DELETE /api/personer/:id
const deletePerson = async (req, res, next) => {
    try {
        const deletedPerson = await Person.findByIdAndDelete(req.params.id);
        if (!deletedPerson) {
            return res.status(404).json({ message: 'Person ikke fundet' });
        }
        res.status(200).json({ message: 'Person slettet' });
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getAllPersons,
    getPersonById,
    createPerson,
    updatePerson,
    deletePerson
};

