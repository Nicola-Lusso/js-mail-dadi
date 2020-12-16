// GIOCO DEI DADI
// Generare un numero random da 1  a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// VARIABILI
var computer, utente

// compilazione Var
computer = Math.floor(Math.random() * 7);

// Per giocare onestamente levare il +1
utente = Math.floor(Math.random() * 7) +1 ;

// stampa dado-pc
document.getElementById('dado-pc').innerHTML = 'Il computer ha estratto il numero:' + ' '  + computer;


// stampa dado-utente
document.getElementById('dado-utente').innerHTML = 'Tu hai estratto il numero:' + ' ' + utente;


//  IF per verificare le condizioni
// Verificare chi tra il pc e l'utente ha estratto il numero più alto

if (computer > utente) {
  document.getElementById('vincitore').innerHTML = 'Mi dispiace hai perso, ha vinto il computer con il numero:' + ' ' + computer + ' '  + '&#128532;';
}

else if (computer < utente) {
  document.getElementById('vincitore').innerHTML = 'Grande! Hai Vinto con il numero:' + ' ' + utente + ' ' + '&#128540;';
}

else {
  document.getElementById('vincitore').innerHTML = 'Parità! Riaggiorna la pagina per tentare ancora la fortuna!';
}


if (utente == 7) {
  document.getElementById('vincitore').innerHTML = 'Hai vinto con il numero 7! Aspetta... ma non è che stai barando?'+ '  &#128520;';

}
