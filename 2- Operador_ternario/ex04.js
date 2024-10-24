/**
 * Operador ternario dentro de un bucle: Escriba una función parOImpar que acepte
 * una matriz de números y use un bucle para atravesar la matriz. Dentro del bucle,
 * utiliza el operador ternario para determinar si cada número es par o impar.
 */

const numbers = [1, 2, 4, 5, 12, 45, 34, 11];

const parOImpar = (numbers) => {
  for (let count = 0; count < numbers.length; count++) {
    const res =
      numbers[count] % 2 == 0
        ? `${numbers[count]} es par`
        : `${numbers[count]} es impar`;
    console.log(res);
  }
};

parOImpar(numbers);
