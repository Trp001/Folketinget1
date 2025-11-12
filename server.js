const express = require('express');
const app = express();
const PORT = 3000;
const app = require('./app');
app.use(express.json());
app.use(express.static('public')); // Servér frontend-filer

// Dummy in-memory database
let personer = [];

// Opret person
app.post('/api/personer', (req, res) => {
    const nyPerson = { ...req.body, _id: Date.now().toString() };
    personer.push(nyPerson);
    res.status(201).json(nyPerson);
});

// Hent alle personer
app.get('/api/personer', (req, res) => {
    res.json(personer);
});

// Slet person
app.delete('/api/personer/:id', (req, res) => {
    personer = personer.filter(p => p._id !== req.params.id);
    res.status(204).send();
});
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});



