/**
 * Cada /Algunos: Usa todos y cada uno para determinar si o todos los elementos
 * de la matriz [11, 12, 13, 14] son mayores que 10, respectivamente
 */

const numeros = [11, 12, 13, 14];

const todosMayoresQue10 = numeros.every((num) => num > 10);
const algunosMayoresQue10 = numeros.some((num) => num > 10);

console.log(`todosMayoresQue10 ${todosMayoresQue10}`);
console.log(`algunosMayoresQue10 ${algunosMayoresQue10}`);
