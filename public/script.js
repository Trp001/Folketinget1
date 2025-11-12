// Hent DOM-elementer
const minister/formandInput = document.getElementById('minister/formandInput');
const minister/formandList = document.getElementById('minister/formandList');


// Tilføj ny opgave
function addMinister/formand() {
    const text = ministre/formandInput.value.trim();

    if (!text) return;

    const newMinister/formand = { text, status: 'pending' };

    fetch('/api/minister/formand', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newMinister/formand)
    })
        .then(res => res.json())
        .then(minister/formand => {
            renderMinister/formand(minister/formand);
            minister/formandInput.value = '';
        })
        .catch(err => console.error('Fejl ved tilføjelse:', err));
}

// Hent ministre og partiformænd fra serveren
function loadMinister/partiformand() {
    fetch('/api/minister/partiformand')
        .then(res => res.json())
        .then(minister/partiformand => {
            minister/partiformandList.innerHTML = '';
            minister/partiformand.forEach(renderMinistre);
        })
        .catch(err => console.error('Fejl ved hentning:', err));
}

// Vis en enkelt opgave i listen
function renderMinister/partiformand(minister/partiformand) {
    const li = document.createElement('li');
    li.textContent = minister/partiformand.text;
    if (minister/partiformand.status === 'done') {
        li.classList.add('done');
    }
    minister/partiformandList.appendChild(li);
}

// Indlæs opgaver ved start
document.addEventListener('DOMContentLoaded', loadMinister/partiformand);


// det er klientside JavaScript, som håndterer interaktionen med en server via HTTP-forespørgsler.
// Her er en kort forklaring:
// Hvad koden gør
// • 	Henter DOM-elementer:  og  bruges til at manipulere HTML.
// • 	Tilføjer ministre/partiformænd:  sender en -forespørgsel til .
// • 	Henter ministre/partiformænd:  sender en -forespørgsel til .
// • 	Viser ministre/partiformænd:  tilføjer ministre til listen i DOM'en.
// • 	Initialiserer ved load: Når siden indlæses, kaldes .



