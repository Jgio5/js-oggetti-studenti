// - Creare un oggetto che descriva uno studente con le
// seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso il for in tutte le proprietà.
$(document).ready(function() {
    var studente = {
        "nome": 'Giorgio',
        "cognome": 'Lopez',
        "età": 24
    }

    for(var info in studente) {
        console.log(info + ":" + " " + studente[info]);
    }
});

// - Creare un array di oggetti di studenti. Ciclare su tutti gli
// studenti e stampare per ognuno nome e cognome
$(document).ready(function() {
    var studente = [
        {
            "nome": 'Giorgio',
            "cognome": 'Lopez',
            "età": 24   
        },
        {
            "nome": 'Mario',
            "cognome": 'Rossi',
            "età": 20   
        },
        {
            "nome": 'Lorenzo',
            "cognome": 'Mortadella',
            "età": 19   
        },
        {
            "nome": 'Lucia',
            "cognome": 'D\'\Amico',
            "età": 15  
        }
    ]

    for (var i = 0; i < studente.length; i++) {
        console.log("Nome: " + studente[i]["nome"]);
        console.log("Cognome: " + studente[i]["cognome"]);
    }
});

// - Dare la possibilità all’utente attraverso 3 prompt di
// aggiungere un nuovo oggetto studente inserendo
// nell’ordine: nome, cognome e età.
$(document).ready(function() {
    var nome = prompt("Inserisci il nome dello studente:");
    var cognome = prompt("Inserisci il cognome dello studente:");
    var eta = parseInt(prompt("Inserisci l'età dello studente:"));

    var studente = [
        {
            "nome": 'Marco',
            "cognome": 'Toni',
            "eta": 55   
        },
        {
            "nome": 'Lidia',
            "cognome": 'Sogni',
            "eta": 45   
        },
        {
            "nome": 'Andrea',
            "cognome": 'bellei',
            "eta": 31   
        },
        {
            "nome": 'Elvira',
            "cognome": 'Shefer',
            "eta": 23  
        }//,
        // {
        //     "nome": nomeStudente,
        //     "cognome": cognomeStudente,
        //     "eta": etaStudente  
        // }
    ]

    //Visualizzo l'array
    console.log(studente);

    //Inserisco i miei dati nell'array
    studente.push({nome, cognome, eta});

    //Visualizzo l'array col push
    console.log(studente);
    console.log(studente[4]);

});