/**
 * Dado un array "[1, 3, 7, 10,15, 17, 11, 5, 8, 12, 9]",
 * crea una función en una sola línea que hace lo siguiente:
- Números de filtro mayores o iguales a 10.
- Multiplica cada número filtrado por 2.
- Calcule la suma de los números filtrados y multiplicalos por 2.
- La función debe devolver el resultado de la suma.
 */

const suma =
  [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9]
    .filter((num) => num >= 10)
    .map((num) => num * 2)
    .reduce((acum, actual) => acum + actual) * 2;

console.log(suma);
