/**
 * Escriba una función to-processCadena que acepte dos parámetros: una cadena y una
 * función de devolución de llamada. La función processingCadena debe convertir
 * la cadena en mayúsculas y luego invocar la función shutback con la cadena transformada.
 */

const processCadena = (string, callback) => {
  callback(string.toUpperCase());
};

const shutback = (string) => {
  console.log(string);
};

processCadena("henry mosquera", shutback);
