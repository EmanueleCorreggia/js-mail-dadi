var emails = ['topolino@ciao.it', 'paperino@ciao.it', 'pippo@ciao.it', 'paperone@ciao.it'];

var inputEmail = prompt('Inserisci la tua Mail');
console.log(inputEmail);

var message = ('NON SEI AUTORIZZATO AD ENTRARE');

for (var i = 0; i < emails.length; i++){
  var email = emails[i]
  console.log(email);
  if (inputEmail == email){
    message = ('EMAIL AUTORIZZATA AD ENTRARE');
  }
};

console.log(message);
