const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const PersonRoutes = require('./routes/Person');
//const port = 3000;
const mongoURI = 'mongodb+srv://<username>:<password>@cluster0.mongodb.net/mydatabase?retryWrites=true&w=majority';

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

const personRoutes = require('./routes/personRoutes');
app.use('/api/persons', personRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});

// Middleware
app.use(bodyParser.json());

// MongoDB forbindelse
mongoose.connect('mongodb://localhost:27017/miniterium', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB forbundet'))
    .catch(err => console.error('MongoDB fejl:', err));

// router
app.use('/api/person', personRoutes);

// Validate a person creation request
    function validatePersonCreation(req, res, next) {
        const { personname, email, password } = req.body;

        // Simple validation
        if (!personname || personname.length < 3) {
            return res.status(400).json({ error: 'Personname must be at least 3 characters' });
        }

        if (!email || !email.includes('@')) {
            return res.status(400).json({ error: 'Valid email is required' });
        }

        if (!password || password.length < 6) {
            return res.status(400).json({ error: 'Password must be at least 6 characters' });
        }

        // 4. 404 handler
        app.use((req, res) => {
            res.status(404).json({ message: 'Not found' });
        });

        // Validation passed
        next();
    }


