let tabellone = document.getElementById("tabellone")
let numeroCelle = 76
let numeriEstratti = []

//Creazione tabella 
for (let i=0; i<numeroCelle; i++){
    let cella = document.createElement("td");
    cella.innerText = i + 1;
    cella.id = "cella" + (i+1);
    let riga = document.createElement("tr");
    riga.appendChild(cella);
    tabellone.appendChild(riga);
}

//funzione estrazione numeri
function estraiNumero(){
    if(numeriEstratti.length===numeroCelle){
        document.getElementById("numeroEstratto").innerText ==="Tutti i numeri sono stati estratti";
        return;
    }

    let numeroEstratto;
    do{
        numeroEstratto = Math.floor(Math.random()*numeroCelle)+1;}
        while (numeriEstratti.includes(numeroEstratto));

        numeriEstratti.push(numeroEstratto);

        document.getElementById("numeroEstratto").innerText = "Numero Estratto:"+numeroEstratto;
    }

//evidenza il numero estratto nella tabella
document.getElementById("cella"+numeroEstratto).classList.add("evidenziato");

