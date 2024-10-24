/**
 * Función de flecha dentro de un bucle: Cree una función llamada printNumbers
 * que acepte una matriz de números y use un bucle para imprimir cada número en la
 * consola usando una función de flecha.
 */

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const printNumbers = (matriz) => {
  for (let count = 0; count < matriz.length; count++) {
    console.log(matriz[count]);
  }
};

printNumbers(numbers);
