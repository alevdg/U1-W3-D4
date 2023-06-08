let tabellone = document.getElementById("tabellone");
let numeroCelle = 76;
let numeriEstratti = [];
let cellePerRiga = 13;

// Creazione tabella
for (let i = 0; i < numeroCelle; i++) {
    if (i % cellePerRiga === 0) {
        // Crea una nuova riga ogni 8 celle
        let riga = document.createElement("tr");
        tabellone.appendChild(riga);
    }
    let rigaCorrente = tabellone.lastChild;
    let cella = document.createElement("td");
    cella.innerText = i + 1;
    cella.id = "cella" + (i + 1);
    rigaCorrente.appendChild(cella);
}


// Funzione estrazione numeri
function estraiNumero() {
    if (numeriEstratti.length === numeroCelle) {
        document.getElementById("numeroEstratto").innerText = "Tutti i numeri sono stati estratti";
        return;
    }

    let numeroEstratto;
    do {
        numeroEstratto = Math.floor(Math.random() * numeroCelle) + 1;
    } while (numeriEstratti.includes(numeroEstratto));

    numeriEstratti.push(numeroEstratto);

    document.getElementById("numeroEstratto").innerText = "Numero Estratto: " + numeroEstratto;

    // Evidenzia il numero estratto nella tabella
    document.getElementById("cella" + numeroEstratto).classList.add("evidenziato");

    // Aggiorna la lista dei numeri estratti
    document.getElementById("ListaNumeriEstratti").innerText = numeriEstratti.join(", ");
}