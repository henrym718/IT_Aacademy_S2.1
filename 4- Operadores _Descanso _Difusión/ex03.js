/**
 * Copiar objetos con Spread: Crear un objeto 'object1'. Luego crea un segundo objeto, 'object2',
 * que es un objeto copy1' usando el operador spread. Cambie una propiedad 3object2as y verifique
 * que iobject1ik no haya cambiado.
 */

const obj1 = { nombre: "Henry", pais: "Ecuador" };
const obj2 = { ...obj1 };
obj2.nombre = "Henry Mosuqera";

console.log(obj1);
console.log(obj2);
