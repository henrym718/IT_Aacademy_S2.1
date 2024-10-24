/**
 * for-of con índice: Utilice un bucle for-of para imprimir en la consola cada
 * elemento de la matriz y su posición (índice): deja que los
 * nombres = ['Anna', 'Bernat', 'Clara']
 */

const nums = ["Anna", "Bernat", "Clara"];
// console.log(nums.entries().next().value);

for (let [index, num] of nums.entries()) {
  console.log(`indice ${index} - número ${num}`);
}
