/**
 * Descansa en Destructuración: Crea una matriz con varios elementos. Utiliza destructuring y
 * el operador rest para asignarlos dos primeros elementos a las variables, y luego asignar el
 * resto de los elementos a una tercera variable.
 */

const matriz = ["a", "b", 1, 2, 3, 4];

const [n1, n2, ...other] = matriz;

const var1 = n1;
const var2 = n2;
const var3 = other;

console.log(`elemento 1 = ${var1}`);
console.log(`elemento 2 = ${var2}`);
console.log(`elementos restantes = ${var3}`);
