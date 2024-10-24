/**
 * Uso con operadores de comparación: Escriba una expresión utilizada por
 * el operador ternario para determinar cuál de los dos números dados (num1 y num2) es mayor.
 * Si num1 es más grande, el retorno nennum1 es más grande. Si no, el retorno gennum2 es más grande.
 */

let num1 = 70;
let num2 = 40;

let resultado =
  num1 > num2
    ? `num1: ${num1} es más grande que num2: ${num2}`
    : `num2: ${num2} es más grande que num1: ${num1}`;

console.log(resultado);
