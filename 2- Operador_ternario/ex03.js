/**
 * Uso vinculado de operadores ternarios: Escriba una expresión que use enlaces de operadores
 * ternarios para determinar si un número es positivo, negativo o cero.
 */

const num = 0;

const numberType =
  num === 0 ? "Es cero" : num < 0 ? "Es negativo" : "Es Positivo";

console.log(numberType);

/**
 * Operador ternario con funciones: Crear una función findMaxim que acepte tres parámetros (a, b, c)
 * y utilice el operador ternario para determinar el valor máximo.
 */

const findMaxim = (a, b, c) => {
  const maxValue = a > b && a > c ? a : b > a && b > c ? b : c;
  return maxValue;
};

console.log(findMaxim(9, 2, 8));
