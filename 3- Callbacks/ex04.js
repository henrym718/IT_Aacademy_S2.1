/**
 * Devoluciones de llamada con arcillas: Escriba una funcion processElements que acepte
 * dos parámetros: una matriz y una función de devolución de llamada. La función processElements
 * debe invocar la función shutback para cada elemento de la matriz.
 */

const matriz = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13];

const processElements = (matriz, callback) => {
  let count = 0;
  while (count < matriz.length) {
    callback(matriz[count]);
    count++;
  }
};

const shutback = (prop) => {
  console.log(prop);
};

processElements(matriz, shutback);
