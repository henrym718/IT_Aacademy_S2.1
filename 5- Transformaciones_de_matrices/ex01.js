/**
 * Mapa: Tienes una matriz de números [1, 2, 3, 4].
 * Crea una nueva matriz que contiene el cuadrado de cada número.
 */

const numbers = [1, 2, 3, 4];

const numbers_pow = numbers.map((num) => Math.pow(num, 2));

console.log(numbers);
console.log(numbers_pow);
