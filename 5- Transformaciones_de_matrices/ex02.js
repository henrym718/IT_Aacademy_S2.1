/**
 * Filtro: Tiene una matriz de números [1, 2, 3, 4]. Crea una nueva matriz que
 * solo contiene los números pares.
 */

const numbers = [1, 2, 3, 4, 6];

const even_numbers = numbers.filter((num) => num % 2 === 0);

console.log(even_numbers);
console.log(numbers);
