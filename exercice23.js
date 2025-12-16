// Exercice 23 : Confirmer la fin d'un mot, d'un nom

// Déclaration de la fonction confirmEnding qui prend en paramètre une chaîne de caractère (str) et une ou des lettres cible (target)
const confirmEnding = (str, target) => {
  // Création des constantes
  const targetLength = target.length; // récupération de la longueur de la cible
  const strArray = str.split(""); // Supprime les espaces

  // Création des variables
  let arrayEnd = str.length - 1; // Réupération de la longueur de la chaîne de caractère moins le dernier caractère
  let wordEnding = [];

  // Console.log
  console.log(target + ":" + targetLength); // Visualisation dans la console de  cible et sa longueur
  console.log(strArray); // Visualisation dans la console de la chaîne de caractère

  // Boucle for
  for (let i = targetLength; i > 0; --i) {
    //console.log("i "+i+":"+strArr[i]);
    wordEnding.push(strArray[arrayEnd]);
    arrayEnd--; // Décrémentation de la variable arrayEnd
  }

  const x = wordEnding.reverse().join("");
  // Console.log
  console.log(x); // Visualisation de la constante x

  // Ternaire si le dernier caractère  === à la cible on retourne true sinon on retourne false
  return x === target ? true : false;
};

// Appel de la fonction confirmEnding
confirmEnding("Alexandre", "e"); // true

confirmEnding("Emile", "ie"); // false

// La méthode split() divise une chaîne de caractères en une liste ordonnée de sous-chaînes, place ces sous-chaînes dans un tableau et retourne le tableau. La division est effectuée en recherchant un motif ; où le motif est fourni comme premier paramètre dans l'appel de la méthode.

// La méthode join() des instances de Array crée et retourne une nouvelle chaîne de caractères en concaténant tous les éléments de ce tableau, séparés par des virgules ou par une chaîne de séparation définie. Si le tableau ne contient qu'un seul élément, cet élément est retourné sans utiliser le séparateur.

// La méthode reverse() des instances Array inverse un tableau en place et retourne la référence vers ce même tableau, le premier élément du tableau devenant le dernier, et le dernier élément devenant le premier. En d'autres termes, l'ordre des éléments du tableau est inversé par rapport à l'ordre initial.
