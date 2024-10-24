/**
 * Uso de rizos en funciones asíncronas: Escriba una función sin parámetros que acepte dos
 * parámetros: un nombre y una función de devolución de llamada. La función debe esperar
 * 2 segundos y luego invocar la función de devolución de llamada, pasando el nombre comoparámetro.
 */

const saludo = (nombre, callback) => {
  setTimeout(() => {
    callback(nombre);
  }, 2000);
};

const printSaludo = (nombre) => {
  console.log(nombre);
};

saludo("Henry Mosquera", printSaludo);
