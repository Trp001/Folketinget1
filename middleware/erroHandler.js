// middleware/errorHandler.js
const errorHandler = (err, req, res, next) => {
    console.error(err.stack); // valgfrit: log fejlen til konsollen
    res.status(500).json({ message: 'Noget gik galt', error: err.message });
};

module.exports = errorHandler;





// Middleware til global fejlhåndtering (errorHandler.js)

// Fejlhåndteringsmiddleware: Express giver mulighed for at definere
// fejlhåndteringsmiddleware, der kan fange og håndtere fejl i din applikation.
// En fejlhåndteringsmiddleware er en funktion, der tager
// fire parametre: err, req, res, og next.

// node middleware erroHandler.js