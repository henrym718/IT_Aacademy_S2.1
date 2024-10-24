/**
 * Resto del operador en funciones: Cree una función 'suma' que utilice el operador restante
 * para aceptar un número indefinido de argumentos y devolver su suma.
 */

const suma = (...args) => {
  return args.reduce((acum, actual) => acum + actual, 0);
};

console.log(suma(10, 20, 30));
