/**
 * Callback básico: Escriba una función llamada procesamiento que acepte dos parámetros:
 * un número y una función de devolución de llamada. La función de procesamiento debe
 * invocar la función de shutback, pasando el número como un parámetro.
 */

const procesamiento = (number, callback) => {
  callback(number);
};

const shutback = (prop) => {
  console.log(prop);
};

procesamiento(10, shutback);
