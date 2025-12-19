// Exercice 26 : Calculer la moyenne d'un tableau

const calcAverage = (array) => {
  // Condition if qui vérifie si le tableau est vide
  if (array.length === 0) {
    return 0;
  }

  // Création de la variable sum
  let sum = 0;

  // Boucle for qui va parcourir le tableau
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i]; // Ajoute chaque nombre à la somme
  }

  return sum / array.length; // Retourne la moyenne
};

// Exemple
let array = [14, 20, 12, 18, 8];
console.log(`[${array}] Moyenne : ${calcAverage(array)}`); // 14.4
