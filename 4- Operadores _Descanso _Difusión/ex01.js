/**
 * Operador Spread in Arrays: Crear dos arrays, array1 y array2. Utilice el operador
 * spread para crear una tercera matriz que contenga todos los elementos de array1 yarray2.
 */

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const array3 = [...array1, ...array2];

console.log(array3);
