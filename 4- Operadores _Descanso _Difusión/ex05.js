/**
 * Spread in Functions: Crea una función que acepte tres argumentos. Luego crea una matriz con tres
 * elementos y llama a la función utilizando el operador de propagación con esta matriz.
 */

const matriz = [1, 2, 3];

const fn = (arg1, arg2, arg3) => {
  return arg1 + arg2 + arg3;
};

const result = fn(...matriz);

console.log(result);
