/**
 * Operador ternario básico: Escriba una función canDirect usted para aceptar la edad
 * como parámetro y utilice el operador ternario para determinar si el usuario puede conducir.
 * Si la edad es de 18 años o más, debe devolver la entrada de utPots. Si no, tienes que devolver
 * el drive in de istyou canadt.
 */

const canDirect = (age) => (age >= 18 ? "Puede conducir" : "No puede conducir");
console.log(canDirect(16));
