/**
 * Reducción: Tiene una matriz de números [13, 7, 8, 21].
 * Utilice la función reducir para calcular la suma total de los números.
 */

const total = [13, 7, 8, 21].reduce((acum, actual) => acum + actual, 0);
console.log(total);
