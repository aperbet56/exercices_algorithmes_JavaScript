// Créer d'une fonction increasePrice qui prendre en paramètres un prix initial et un pourcentage d'augmentation(price, percentage). Cette fonction doit calculer l'augmentation en multipliant le prix par le pourcentage divisé par 100 ( prix X (pourcentage / 100)). Elle doit ajouter ensuite l'augmentation au prix initial prix + augmentation pour obtenir le prix final.

const increasePrice = (price, percentage) => {
  const increase = price * (percentage / 100); // Calcul l'augmentation
  const finalPrice = price + increase; // Ajout de l'augmentation
  return finalPrice;
};

// Exemple
const price = 430;
const percentageIncrease = 4.9;
const priceWithIncrease = increasePrice(price, percentageIncrease);

console.log(priceWithIncrease.toFixed(2));
