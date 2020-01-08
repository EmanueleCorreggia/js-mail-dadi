var utente1 = Math.floor(Math.random() * 6 + 1);
console.log(utente1);
var utente2 = Math.floor(Math.random() * 6 + 1);
console.log(utente2);

var message = ('Pareggio');

if ( utente1 > utente2 ) {
  message = ('Utente1 ha VINTO!');
}
else if ( utente2 > utente1 ) {
  message = ('Utente2 ha VINTO!');
}

console.log(message);
