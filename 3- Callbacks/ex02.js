/**
 * Devoluciones de llamada con operaciones matemáticas: Escriba una función de calculadora
 * que acepte tres parámetros: dos números y una función de devolución de llamada.
 * La función de calculadora debe invocar la función de shutback con ambos números como parámetros.
 * Luego, llamada de calculadora con una función que hace la suma de los dos números.
 */

const calculadora = (n1, n2, callback) => {
  return callback(n1, n2);
};

const shutback = (n1, n2) => {
  return n1 + n2;
};

const result = calculadora(10, 20, shutback);
console.log(result);
