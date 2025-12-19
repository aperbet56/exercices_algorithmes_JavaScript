// Exercice 25 : Créer une fonction qui utilise une condition combinée && pour vérifier la longueur password.length d'au moins >= 9 et contenir le caractère "@" avec password.includes.

const checkPassword = (password) => {
  return password.length >= 9 && password.includes("@");
};

// Exemples
console.log(`allez1234 : ${checkPassword("allez1234")}`); // false
console.log(`orange@sio8 : ${checkPassword("orange@sio8")}`); // true
console.log(`ol,@69 : ${checkPassword("ol,@69")}`); // false
