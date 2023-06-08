let tabellone = document.getElementById("tabellone");
let numeroCelle = 78; //Modificato da 76 a 78 per una migliore visualizzazzione 
let numeriEstratti = [];
let cellePerRiga = 13;

// Creazione tabella
for (let i = 0; i < numeroCelle; i++) {
    if (i % cellePerRiga === 0) {
        // Crea una nuova riga ogni 13 celle
        let riga = document.createElement("tr");
        tabellone.appendChild(riga);
    }
    let rigaCorrente = tabellone.lastChild;
    let cella = document.createElement("td");
    if (i < numeroCelle - 2) {
        // Riempie solo le prime 76 celle con un numero
        cella.innerText = i + 1;
        }
    cella.id = "cella" + (i + 1);
    rigaCorrente.appendChild(cella);
}


// Funzione estrazione numeri
function estraiNumero() {
    if (numeriEstratti.length === numeroCelle - 2) { // Modificato da numeroCelle a numeroCelle - 2
    document.getElementById("numeroEstratto").innerText = "Tutti i numeri sono stati estratti";
    return;
    }
   
    let numeroEstratto;
    do {
    numeroEstratto = Math.floor(Math.random() * (numeroCelle - 2)) + 1; // Modificato da numeroCelle a numeroCelle - 2
    } while (numeriEstratti.includes(numeroEstratto));
   
    numeriEstratti.push(numeroEstratto);
   
    document.getElementById("numeroEstratto").innerText = "Numero Estratto: " + numeroEstratto;    // Evidenzia il numero estratto nella tabella
    document.getElementById("cella" + numeroEstratto).classList.add("evidenziato");

 // Evidenzia il numero estratto nella tabella
 document.getElementById("cella" + numeroEstratto).classList.add("evidenziato");

 // Aggiorna la lista dei numeri estratti
 document.getElementById("ListaNumeriEstratti").innerText = numeriEstratti.join(", ");
}