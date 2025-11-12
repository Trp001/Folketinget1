const express = require('express');
const mongoose = require('mongoose');
const personRoutes = require('./routes/personRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

// Middleware til JSON-parsing
app.use(express.json());

// Tilslut MongoDB
mongoose.connect('mongodb://localhost:27017/ministreDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB tilsluttet'))
    .catch(err => console.error('Fejl ved tilslutning til MongoDB:', err));

// Brug personRoutes med base-path
app.use('/api/personer', personRoutes);

// Global error middleware – skal stå til sidst
app.use(errorHandler);

module.exports = app;

