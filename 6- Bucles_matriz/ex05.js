/**
 * for-of con descanso: Tienes una matriz de números. Use un bucle for-of para imprimir los
 * números en la consola hasta que encuentre el número 5, luego detenga el bucle: deja que
 * numeros = [1, 2, 3, 4, 5, 6];
 */

const numeros = [1, 2, 3, 4, 5, 6];

for (let num of numeros) {
  console.log(num);
  if (num === 5) break;
}
