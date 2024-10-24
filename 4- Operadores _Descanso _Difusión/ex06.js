/**
 * Fusionar Objetos con Spread: Crea dos objetos con diferentes propiedades.
 * Utilice el operador de propagación para fusionar estos dos objetos en uno nuevo.
 */

const obj1 = { name: "Henry", lastname: "Mosquera" };
const obj2 = { country: "Ecuador", Gener: "Male" };

const obj3 = { ...obj1, ...obj2 };

console.log(obj3);
