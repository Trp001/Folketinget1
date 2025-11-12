const Joi = require('joi');

const schema = Joi.object({
    name: Joi.string().min(2).required(),
    parti: Joi.string().min(2).required(),
    position: Joi.string().valid('minister', 'formand').required(),
    startdato: Joi.date().required()
});

exports.validatePerson = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};

module.exports = validatePerson;





// npm install joi

// validering med Joi

//At sikre at inputdata (f.eks. POST-body) er korrekt formateret,
// og at ingen tomme eller ugyldige værdier tillades.Ligesom en
// HTML-formular har regler (required, maxLength osv.), kan backend
// også have validering. Det beskytter både brugeren og systemet mod fejl og misbrug.

// program testing
//Testing is intended to show that a program does what it is intended to do and to discover program defects before it is put into use.
// When you test software, you execute a program using artificial data.
// You check the results of the test run for errors, anomalies or information about the program’s non-functional attributes.
// Can reveal the presence of errors NOT their absence.
// Testing is part of a more general verification and validation process, which also includes static validation techniques.



// - Valideringstest (Validation Testing)**
// - **Formål:** Sikrer, at softwaren opfylder brugerens behov og krav.
// - **Hvornår:** Udføres typisk **efter** implementering, ofte som en del af accepttesten.
// - **Eksempel:** En bruger skal kunne logge ind med korrekt brugernavn og adgangskode – valideringstesten tjekker, om det faktisk virker i praksis.
//
// ---
//
// - Unit Test (Enhedstest)**
// - **Formål:** Tester **individuelle funktioner eller metoder** isoleret for at sikre, at de fungerer korrekt.
// - **Hvornår:** Udføres løbende under udviklingen.
// - **Eksempel:** En funktion `beregnMoms(beløb)` testes med forskellige input for at sikre, at den returnerer korrekt moms.
//
// ---
//
// - Error Handling (Fejlhåndtering)**
// - **Formål:** Sikrer, at programmet **håndterer fejl** (f.eks. brugerfejl, netværksfejl, filfejl) på en kontrolleret måde.
// - **Hvornår:** Implementeres i koden – testes ofte med unittests eller integrationstests.
// - **Eksempel:** Hvis en bruger indtaster tekst i et felt, hvor der forventes et tal, skal programmet vise en fejlmeddelelse i stedet for at crashe.
//
// ---
//
// - Andre relaterede begreber
//
// | Begreb              | Formål                                                                 |
// |---------------------|------------------------------------------------------------------------|
// | **Integrationstest** | Tester hvordan flere moduler arbejder sammen                          |
// | **Systemtest**       | Tester hele systemet som en helhed                                     |
// | **Regressionstest**  | Sikrer at ny kode ikke ødelægger eksisterende funktionalitet           |
// | **Inputvalidering**  | Tjekker om brugerinput er gyldigt (f.eks. e-mailformat, tomme felter) |
//
// ---
//
// - Sammenhæng
//
// - **Unit tests** kan inkludere tests af **error handling** og **inputvalidering**.
// - **Valideringstest** ligger højere i testpyramiden og fokuserer på **brugerkrav**.
// - **Error handling** er en **kodepraksis**, mens de andre er **testtyper**.




