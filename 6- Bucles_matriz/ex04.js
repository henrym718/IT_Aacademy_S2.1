/**
 * for-in: Tienes un objeto con pares clave-valor:
 * let obj = { nombre: Ona, edad: 25, ciudad: 'Barcelona' };
 * Utiliza un bucle for-in para imprimir cada tecla en la consola
 * y su valor correspondiente.
 */

let obj = { nombre: "Henry", edad: 25, ciudad: "Barcelona" };

for (let label in obj) {
  console.log({ [label]: obj[label] });
}
